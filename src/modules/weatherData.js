export default class WeatherData {
  constructor(
    country,
    tempK,
    realK,
    minK,
    maxK,
    pressure,
    humidity,
    windSpd,
    state,
    stateDescription
  ) {
    this.country = country;
    this.tempK = tempK;
    this.realK = realK;
    this.minK = minK;
    this.maxK = maxK;
    this.pressure = pressure;
    this.humidity = humidity;
    this.windSpd = windSpd;
    this.state = state;
    this.stateDescription = stateDescription;
  }
  setCountry(country) {
    this.country = country;
  }
  setTempK(tempK) {
    this.tempK = tempK;
  }
  setRealK(realK) {
    this.realK = realK;
  }
  setMinK(minK) {
    this.minK = minK;
  }
  setMaxK(maxK) {
    this.maxK = maxK;
  }
  setPressure(pressure) {
    this.pressure = pressure;
  }
  setHumidity(humidity) {
    this.humidity = humidity;
  }
  setWindSpd(windSpd) {
    this.windSpd = windSpd;
  }
  setState(state){
    this.state = state
  }
  setStateDescription(stateDescription){
    this.stateDescription = stateDescription
  }
}
