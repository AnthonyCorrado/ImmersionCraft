/**
 * Toggles state of light once and back 
 * @param {Number} lightId
 * @return {Object} response object
 */
(function() {
  'use strict';

  var http = require('http');

  var flash = function(light_id) {
    var urlPath = 'http://<bridge_ip>/<name>/lights/' + light_id + '/state';

    http.request({
      url: urlPath,
      method: 'PUT',
      params: {
        "alert": "select"
      }
    },
    function( responseCode, responseBody ) {
      if (responseCode != 200) {
        console.log('There was an error in the flash effect');
      }
      console.log(JSON.stringify(responseBody));
    });
  };

  exports.flash = flash;
})();
