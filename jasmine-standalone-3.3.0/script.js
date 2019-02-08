$(document).ready(function(){
  var thermostat = new Thermostat();

  $("#up").click(function(){
    thermostat.up();
  });
});

