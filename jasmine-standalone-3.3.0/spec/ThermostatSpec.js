'use strict';

describe('Thermostat', function(){
  var thermostat;
  thermostat = new Thermostat();
  
  it('starts at 20 degrees by default', function(){
    expect(thermostat.temp).toEqual(20);
  });

});
