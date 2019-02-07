'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees by default', function(){
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it('can increase temperature with an up function', function(){
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it('can decrease temperature with down function', function(){
    thermostat.up();
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

});
