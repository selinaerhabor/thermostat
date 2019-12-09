describe("Thermostat", function(){
  var thermostat;

//Before each it block reload a new instance
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Thermostat starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("Thermostat starts at 20 degrees", function(){
    thermostat.temp_up(32);
    expect(thermostat.temperature).toEqual(32);
  });
});
