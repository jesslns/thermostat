$(document).ready(function(){
  var thermostat = new Thermostat();

  $("#up").click(function(){  // #indicates id
    thermostat.up();
    $('.item3').text(thermostat._temp);
  });

    $("#down").click(function(){
      thermostat.down();
      $('.item3').text(thermostat._temp);
    });

    $("#reset").click(function(){
      thermostat.resetTemperature();
      $('.item3').text(thermostat._temp);
    });

    $('.item3').text(thermostat._temp); // initial
});
