(function() {
  'use strict';

  var http = require('http'),
    toggle = require('immersion/lighting/toggle-on-off'),
    colorToHue = require('immersion/lighting/color-to-hue'),
    hueSatBri = require('immersion/lighting/light-values'),
    effects = require('immersion/lighting/effects'),
    events = require('events-helper-bukkit');

  var toggleOn = true;
  var eventCounter = 0;


  effects.flash(1);
  effects.flash(3);

  function zeroLights() {
    toggle.isLightOn(1, true);
    toggle.isLightOn(3, true);
    hueSatBri.changeValues(1, 16400, 120, 250 );
    hueSatBri.changeValues(3, 16400, 120, 250 );
  }

  events.blockPistonExtend(function(evt, cancel) {
    console.log('reset triggered');

    setTimeout(function() {
      eventCounter = 0;
      zeroLights();
      console.log('reset complete ' + eventCounter );
    }, 2000);

  });

  // scripted rail ride events
  events.blockRedstone(function(evt, cancel) {
    if (eventCounter  === 0) {
      console.log('EVT1: lights out, fadeout to red');
      toggle.isLightOn(1, false);
        hueSatBri.changeValues(3, 0, 250, 250, 2);
      setTimeout(function() {
        toggle.isLightOn(3, false);
      }, 200);
      eventCounter++;

    } else if (eventCounter === 1) {
        console.log('counter 1');
        eventCounter++;

    } else if (eventCounter === 2) {
      effects.flash(3);
      eventCounter++;

    } else if (eventCounter === 3) {
        console.log('counter 3');
        eventCounter++;

    } else if (eventCounter === 4) {
      effects.flash(3);
      eventCounter++;

    } else if (eventCounter === 5) {
        console.log('counter 4');
        eventCounter++;

    } else if (eventCounter === 6) {
      effects.flash(3);
      eventCounter++;

    } else if (eventCounter === 7) {
        console.log('counter 6');
        eventCounter++;

    } else if (eventCounter === 8) {
        toggle.isLightOn(3, true, 1);
        setTimeout(function() {
          hueSatBri.changeValues(3, 46300, 250, 220, 1);
        }, 100);
        eventCounter++;

    } else if (eventCounter === 9) {
        console.log('count 8');
        eventCounter++;

    } else if (eventCounter === 10) {
        hueSatBri.changeValues(3, 16400, 120, 250, 1);
        setTimeout(function() {
          toggle.isLightOn(3, false, 1);
        }, 200);
        eventCounter++;

    } else if (eventCounter === 11) {
      console.log('count 10');
      eventCounter++;

    } else if (eventCounter === 12) {
        toggle.isLightOn(1, true);
        setTimeout(function() {
          hueSatBri.changeValues(1, 50300, 250, 220, 2);
        }, 200);
        eventCounter++;

    } else if (eventCounter === 13) {
        console.log('count 12');
        eventCounter++;

    } else if (eventCounter === 14) {
        hueSatBri.changeValues(1, 16400, 120, 250, 5);
        setTimeout(function() {
          toggle.isLightOn(1, false);
        }, 200);
        eventCounter++;

    } else if (eventCounter === 15) {
        console.log('count 14');
        eventCounter++;

    } else if (eventCounter === 16) {
        hueSatBri.changeValues(1, 16400, 120, 250, 10);
        hueSatBri.changeValues(3, 16400, 120, 250, 10);
        toggle.isLightOn(1, true);
        toggle.isLightOn(3, true);
        eventCounter++;
    }
  });

})();
