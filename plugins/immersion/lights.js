(function() {
  'use strict';

  var http = require('http'),
    toggle = require('immersion/lighting/toggle-on-off'),
    colorToHue = require('immersion/lighting/color-to-hue'),
    hueSatBri = require('immersion/lighting/light-values'),
    events = require('events-helper-bukkit');

  //   var hue = colorToHue(color);

  // var toggleColor = true;
  // events.blockBreak(function() {
  //   hueSatBri.changeValues(3, 55000, 230, 240);
  //   toggleColor = !toggleColor;
  // });

  // var toggleOn = false;
  // events.blockBreak(function() {
  //   setTimeout(function() {
  //     toggle.isLightOn(3, toggleOn);
  //     toggleOn = !toggleOn;
  //   }, 400);
  // });

})();
