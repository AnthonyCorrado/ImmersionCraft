(function() {
  'use strict';
  
  var lightService = function(color) {
    var value = {};
    switch (color) {
      case "red":
        value = 0;
        break;
      case "orange":
        value = 6620;
        break;
      case "yellow":
        value = 16400;
        break;
      case "green":
        value = 25582;
        break;
      case "white":
        value = 34800;
        break;
      case "sky":
        value = 41680;
        break;
      case "blue":
        value = 46300;
        break;
      case "purple":
        value = 50300;
        break;
      case "pink":
        value = 54900;
        break;
      case "neon":
        value = 61222;
        break;
      case "silver":
        value = 34000;
        break;
      }
    return value;
  };
  module.exports = lightService;
})();