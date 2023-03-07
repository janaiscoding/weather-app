import WeatherClass from "./modules/weatherClass";
const API_KEY = "e242732684f64bf197c925a0f8a7be98";
// DOM SELECTORS
const userInput = document.getElementById("location");
const submitButton = document.getElementById("submit");
// variables
let location = "galati";
let lat = "45.45";
let lon = "28.05";
let units = "metric";
// weather app class
let weatherObj = new WeatherClass();
async function requestCoord() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`,
      {
        mode: "cors",
      }
    );
    const weatherData = await response.json();
    lat = weatherData.coord.lat;
    lon = weatherData.coord.lon;
    console.log(lat, lon);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function requestMeteo() {
  await requestCoord();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`,
      {
        mode: "cors",
      }
    );
    const forecast = await response.json();
    weatherObj.setTemp(forecast.list[0].main.temp);
    console.log(weatherObj)
    console.log(forecast);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

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
    requestMeteo();
  }
});

// HANDLE SUBMIT BUTTON
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  setLocation();
  requestMeteo();
});

// HANDLE UNITS BUTTONS
const imperialButton = document.getElementById("imperial");
imperialButton.onclick = () => {
  units = "imperial";
  requestMeteo();
};
const metricButton = document.getElementById("metric");
metricButton.onclick = () => {
  units = "metric";
  requestMeteo();
};
