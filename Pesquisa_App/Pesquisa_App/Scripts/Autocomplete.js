
var  autocomplete_ida, autocomplete_volta;

function initAutocomplete() {

    autocomplete_ida = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('ida-input')),
        { types: ['geocode'] });

    autocomplete_volta = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('volta-input')),
        { types: ['geocode'] });
}     

function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete_ida.setBounds(circle.getBounds());
        });
    }
}
function geolocate_volta() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete_volta.setBounds(circle.getBounds());
        });
    }
}