/**
 * Adjusts a single light's core values
 * @param {Number} lightId
 * @param {Number} hue (0 - 65535) 
 * @param {Number} saturation (0 - 254)
 * @param {Number} brightness (1 - 254)
 * @return {Object} response object
 */
(function() {
  'use strict';

  var http = require('http');

  var changeValues = function(light_id, hue, sat, bri) {
    var urlPath = 'http://<bridge_ip>/api/newdeveloper/lights/' + light_id + '/state';

    http.request({
      url: urlPath,
      method: 'PUT',
      params: {
        "hue": hue,
        "sat": sat,
        "bri": bri
      }
    },
    function( responseCode, responseBody ) {
      if (responseCode != 200) {
        console.log('There was an error in the lighting value change');
      }
      console.log(JSON.stringify(responseBody));
    });
  };

  exports.changeValues = changeValues;
})();
