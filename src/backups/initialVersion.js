import getKey from "../utilities/myKey";
const API_KEY = getKey();
// USER INPUT
let location;
// ALL VARIABLES BASED ON USER INPUT
let convertedWeatherObj = {
  tempF: undefined,
  tempC: undefined,
  realF: undefined,
  realC: undefined,
  minF: undefined,
  minC: undefined,
};
let weatherDataObj = {
  country: undefined,
  tempK: undefined,
  realK: undefined,
  minK: undefined,
  maxK: undefined,
  pressure: undefined,
  humidity: undefined,
  windSpd: undefined,
  state: undefined,
  stateDescription: undefined,
};
// DOM SELECTORS
const userInput = document.getElementById("location");
const submitButton = document.getElementById("submit");

// API FUNCTION
async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`,
      {
        mode: "cors",
      }
    );
    const weatherData = await response.json();
    // Assigning object properties
    weatherDataObj.country = weatherData.sys.country;
    weatherDataObj.tempK = weatherData.main.temp;
    weatherDataObj.realK = weatherData.main.feels_like;
    weatherDataObj.minK = weatherData.main.temp_min;
    weatherDataObj.maxK = weatherData.main.temp_max;
    weatherDataObj.pressure = weatherData.main.pressure;
    weatherDataObj.humidity = weatherData.main.humidity;
    weatherDataObj.windSpd = weatherData.wind.speed;
    weatherDataObj.state = weatherData.weather[0].main;
    weatherDataObj.stateDescription = weatherData.weather[0].description;
    // Handler Functions to convert/display
    convertWeather();
    displayWeather();
    console.log(weatherDataObj);
    return weatherDataObj;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

// CONVERTOR FUNCTION K TO F
const kelvinToFahrenheit = (k) => {
  return Math.floor((k - 273.15) * 1.8 + 32);
};
// CONVERTOR FUNCTION K TO C
const kelvinToCelsius = (k) => {
  return Math.floor(k - 273.15);
};
// SET ALL WEATHERS TO CORRECT UNITS
const convertWeather = () => {
  convertedWeatherObj.tempF = kelvinToFahrenheit(weatherDataObj.tempK);
  convertedWeatherObj.tempC = kelvinToCelsius(weatherDataObj.tempK);
  convertedWeatherObj.realF = kelvinToFahrenheit(weatherDataObj.realK);
  convertedWeatherObj.realC = kelvinToCelsius(weatherDataObj.realK);
  convertedWeatherObj.minF = kelvinToFahrenheit(weatherDataObj.minK);
  convertedWeatherObj.minC = kelvinToCelsius(weatherDataObj.minK);
  convertedWeatherObj.maxF = kelvinToFahrenheit(weatherDataObj.maxK);
  convertedWeatherObj.maxC = kelvinToCelsius(weatherDataObj.maxK);
  return convertedWeatherObj;
};
// DISPLAY WEATHER DATA
const displayWeather = () => {
  console.log(location);
  console.log(weatherDataObj.country);
  console.log(
    `Normal temp:${convertedWeatherObj.tempF}F, or ${convertedWeatherObj.tempC}C`
  );
  console.log(
    `Real feel: ${convertedWeatherObj.realF}F, or ${convertedWeatherObj.realC}C.`
  );
  console.log(
    `Min temp: ${convertedWeatherObj.minF}F, or ${convertedWeatherObj.minC}C.`
  );
  console.log(
    `Max temp: ${convertedWeatherObj.maxF}F, or ${convertedWeatherObj.maxC}C.`
  );
  console.log(`Air pressure: ${weatherDataObj.pressure}`);
  console.log(`Current Humitity: ${weatherDataObj.humidity} %`);
  console.log(`Wind Speed: ${weatherDataObj.windSpd} m/s`);
  console.log(`Weather state: ${weatherDataObj.state}`);
  console.log(`Weather state description: ${weatherDataObj.stateDescription}`);
};

//A USER WILL SELECT A LOCATION
const setLocation = () => {
  location = userInput.value;
  return location;
};

// HANDLE KEYPRESS
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    setLocation();
    getWeatherData(location);
  }
});

// HANDLE SUBMIT BUTTON
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  setLocation();
  getWeatherData(location);
});
