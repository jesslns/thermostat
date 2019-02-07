'use strict';

function Thermostat () {
  this._temp = 20;
};


Thermostat.prototype.getCurrentTemp = function() {
  return this._temp;
};

Thermostat.prototype.up = function(){
 return this._temp ++;
};

Thermostat.prototype.down = function(){
  return this._temp --;
}
