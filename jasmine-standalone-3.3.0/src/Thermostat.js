'use strict';

function Thermostat () {
  this._temp = 20;
};


Thermostat.prototype.getCurrentTemp = function() {
  return this._temp;
};
