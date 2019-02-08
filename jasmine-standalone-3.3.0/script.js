$(document).ready(function(){
  var thermostat = new Thermostat();

  $('.item3').text(thermostat._temp); // initial

  $("#up").click(function(){  // #indicates id
    thermostat.up();
    $('.item3').text(thermostat._temp);
    $('.item7').text("Energy status: " + thermostat.energyUsage());
  });

    $("#down").click(function(){
      thermostat.down();
      $('.item3').text(thermostat._temp);
      $('.item7').text("Energy status: " + thermostat.energyUsage());
    });

    $("#reset").click(function(){
      thermostat.resetTemperature();
      $('.item3').text(thermostat._temp);
    });

    $('.item1').text("power saving mode: " + thermostat.powerSavingMode); // initial

    $("#powersaving").click(function(){
      if(thermostat.isPowerSavingModeOn()){
      thermostat.switchPowerSavingModeOff();
    }
    else {
      thermostat.switchPowerSavingModeOn();
    }
      $('.item1').text("power saving mode: " + thermostat.powerSavingMode);
    });

    $('.item7').text("Energy status: " + thermostat.energyUsage());

});
