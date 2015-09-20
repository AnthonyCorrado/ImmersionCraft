(function() {
  'use strict';

  var http = require('http'),
    toggle = require('immersion/lighting/toggle-on-off'),
    colorToHue = require('immersion/lighting/color-to-hue'),
    hueSatBri = require('immersion/lighting/light-values'),
    events = require('events-helper-bukkit');

  var toggleOn = true;

    // var hue = colorToHue(color);

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
  events.blockRedstone(function(evt, cancel) {
    console.log(evt);
    toggle.isLightOn(3, toggleOn);
    toggleOn = !toggleOn;
  });

})();
