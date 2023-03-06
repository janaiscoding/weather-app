// MY API KEY :)
const API_KEY = `e242732684f64bf197c925a0f8a7be98`;
// USER INPUT
let location;
let coordLat;
let coordLong;
// ALL VARIABLES BASED ON USER INPUT
let country;
let tempK;
let tempC;
let tempF;
let realK;
let realC;
let realF;
let minK;
let minC;
let minF;
let maxK;
let maxC;
let maxF;
let pressure;
let humidity;
let windSpd;
let state;
let stateDescription;

// DOM SELECTORS
const userInput = document.getElementById("location");
const submitButton = document.getElementById("submit");

// API FUNCTION
async function getWeatherData() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`,
      {
        mode: "cors",
      }
    );
    const weatherData = await response.json();
    // My Variables
    country = weatherData.sys.country;
    tempK = weatherData.main.temp;
    realK = weatherData.main.feels_like;
    minK = weatherData.main.temp_min;
    maxK = weatherData.main.temp_max;
    pressure = weatherData.main.pressure;
    humidity = weatherData.main.humidity;
    windSpd = weatherData.wind.speed;
    state = weatherData.weather[0].main;
    stateDescription = weatherData.weather[0].description;
    // Handler Functions to convert/display
    convertWeather();
    displayWeather();
  } catch (error) {
    console.log(error);
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
  tempF = kelvinToFahrenheit(tempK);
  tempC = kelvinToCelsius(tempK);
  realF = kelvinToFahrenheit(realK);
  realC = kelvinToCelsius(realK);
  minF = kelvinToFahrenheit(minK);
  minC = kelvinToCelsius(minK);
  maxF = kelvinToFahrenheit(maxK);
  maxC = kelvinToCelsius(maxK);
};
// DISPLAY WEATHER DATA
const displayWeather = () => {
  console.log(location);
  console.log(country);
  console.log(`Normal temp:${tempF}F, or ${tempC}C`);
  console.log(`Real feel: ${realF}F, or ${realC}C.`);
  console.log(`Min temp: ${minF}F, or ${minC}C.`);
  console.log(`Max temp: ${maxF}F, or ${maxC}C.`);
  console.log(`Air pressure: ${pressure}`);
  console.log(`Current Humitity: ${humidity} %`);
  console.log(`Wind Speed: ${windSpd} m/s`);
  console.log(`Weather state: ${state}`);
  console.log(`Weather state description: ${stateDescription}`);
};

//A USER WILL SELECT A LOCATION
const setLocation = () => {
  location = userInput.value;
  console.log(location);
  return location;
};

// HANDLE KEYPRESS
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    setLocation();
    getWeatherData();
  }
});

// HANDLE SUBMIT BUTTON
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  setLocation();
  getWeatherData();
});
