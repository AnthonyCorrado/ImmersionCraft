exports.lights = function(light_id, state, hue) {
    var isOn = state === 'on' ? true : false;
    var http = require('http');
    var urlPath = 'http://<bridge ip address>/api/newdeveloper/lights/' + light_id + '/state';
    var selectedHue = hue || 15000;
    http.request( {
        url: urlPath,
        method: 'PUT',
        params: {"on": isOn, "hue": selectedHue}

    },
    function( responseCode, responseBody ) {
        echo(responseCode);
        echo(responseBody);
        console.log(JSON.stringify(responseBody));
    });
};
