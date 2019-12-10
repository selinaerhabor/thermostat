"use_strict";

class Thermostat {
  constructor(){
    this.temperature = 20;
    this.minTemp = 10;
    this.power_saving_mode = true;
    this.maxTemp = 25;
  }
  temp_up(temp) {
    this.temperature += temp;

    if(this.power_saving_mode === true && this.temperature > this.maxTemp) {
      this.temperature = this.maxTemp;
      return "Power saving mode is on. Now moving to the maximum of 25 degrees."
    }
    else if(this.power_saving_mode === false && this.temperature > this.maxTemp) {
      this.temperature = this.maxTemp;
      return "Power saving mode is off. Now moving to the maximum of 32 degrees."
    }

    return `The temperature is now ${this.temperature} degrees.`;
  }

  temp_down(temp) {
    this.temperature -= temp;

    if (this.temperature < this.minTemp) {
      this.temperature = this.minTemp
      return "The temperature cannot be lower than 10 degrees! The temperature will now be at the lowest temperature of 10 degrees.";
    }

    return `The temperature is now ${this.temperature} degrees.`;
  }

  power_saving_off() {
    this.power_saving_mode = false;
    this.maxTemp = 32;
    return "Power saving mode is now off."
  }

  power_saving_on() {
    this.power_saving_mode = true;
    this.maxTemp = 25;

    if (this.power_saving_mode === true && this.temperature > this.maxTemp) {
        this.temperature = this.maxTemp;
        return "Power saving mode is on. Now moving to the maximum of 25 degrees.";
    }
  }

  energyUsage() {
    if(this.temperature < 18){
      return "low-usage";
    }
    else if(this.temperature < 25 && this.temperature >= 18){
      return "medium-usage";
    }
    else {
      return "high-usage";
    }
  }
  reset() {
    this.temperature = 20;
    return "The temperature has now been reset to 20 degrees"
  }
}
