
var  autocomplete_origem, autocomplete_destino;

function initAutocomplete() {

    autocomplete_origem = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('origem-input')),
        { types: ['geocode'] });

    autocomplete_destino = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('destino-input')),
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
            autocomplete_origem.setBounds(circle.getBounds());
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
            autocomplete_destino.setBounds(circle.getBounds());
        });
    }
}