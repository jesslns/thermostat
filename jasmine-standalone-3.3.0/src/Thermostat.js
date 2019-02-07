'use strict';

function Thermostat () {
  this.MINIMUM_TEMPERATURE = 10;
  this._temp = 20;
  this.powerSavingMode = true;
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

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};
