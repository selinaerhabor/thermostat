'use strict';

describe("Thermostat", function(){

  var thermostat;

//Before each it block reload a new instance
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Thermostat starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("Thermostat temperature increases", function(){
    thermostat.temp_up(5);
    expect(thermostat.temperature).toEqual(25);
  });

  it("Thermostat temperature decreases", function(){
    thermostat.temp_down(10);
    expect(thermostat.temperature).toEqual(10);
  });

  it("thermostat temperature does not go below 10 degrees", function(){
    thermostat.temp_down(11);
    expect(thermostat.temperature).toEqual(10);
  });

  it("Power saving mode is on by default", function(){
    expect(thermostat.power_saving_mode).toBe(true);
  });

  it("If power saving mode is on, the maximum temperature to be 25", function(){
    expect(thermostat.max_temp).toEqual(25);
  });

});
