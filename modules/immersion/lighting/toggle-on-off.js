/**
 * Adjusts a single light's on/off state
 * @param {Number} lightId
 * @param {Boolean} is light on?
 * @return {Object} response object
 */
(function() {
  'use strict';

  var http = require('http');

  var isLightOn = function(light_id, state) {
    var urlPath = 'http://<bridge_ip>/api/newdeveloper/lights/' + light_id + '/state';

    http.request({
      url: urlPath,
      method: 'PUT',
    params: {"on": state}
    },
    function( responseCode, responseBody ) {
      if (responseCode != 200) {
        console.log('There was an error in the toggle power request');
      }
      console.log(JSON.stringify(responseBody));
    });
  };

  exports.isLightOn = isLightOn;
})();
