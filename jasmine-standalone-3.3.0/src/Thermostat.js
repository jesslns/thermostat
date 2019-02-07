'use strict';

function Thermostat () {
  this.MINIMUM_TEMPERATURE = 10;
  this._temp = 20;
};


Thermostat.prototype.getCurrentTemperature = function() {
  return this._temp;
};

Thermostat.prototype.up = function(){
 this._temp ++;
};

Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()) {
     return;
   }
  this._temp --;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this._temp === this.MINIMUM_TEMPERATURE;
};
