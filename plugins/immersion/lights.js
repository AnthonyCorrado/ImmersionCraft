(function() {
  'use strict';

  var http = require('http');
  var getColor = require('custom/light-service');

  var lights = function(light_id, state, color) {
    var urlPath = 'http://<bridge_ip>/api/newdeveloper/lights/' + light_id + '/state';
    var hue = getColor(color);
    var isOn = state === 'on' ? true : false;
    var selectedHue = hue || 15000;

    echo('lights called');
    echo('light hue is ' + hue);

    http.request({
      url: urlPath,
      method: 'PUT',
    params: {"on": isOn, "hue": selectedHue}
    },

    function( responseCode, responseBody ) {
      // console.log(JSON.stringify(responseBody));
    });
  };

  exports.lights = lights;
})();
