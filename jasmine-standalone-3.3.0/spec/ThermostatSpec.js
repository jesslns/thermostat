'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees by default', function(){
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

});
