'use strict';

function Thermostat () {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this._temp = 20;
  this.powerSavingMode = true;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
};


Thermostat.prototype.getCurrentTemperature = function() {
  return this._temp;
};

Thermostat.prototype.up = function(){
  if (this.isMaximumTemperature()) {
    return; // breaks out of a function call
  }
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

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this._temp === this.MAX_LIMIT_PSM_OFF;
  };
  return this._temp === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.resetTemperature = function() {
  return this._temp = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this._temp < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low';
  }
  if (this._temp >= this.MEDIUM_ENERGY_USAGE_LIMIT && this._temp <= this.MAX_LIMIT_PSM_ON) {
    return 'medium';
  }
  return 'high';

};
