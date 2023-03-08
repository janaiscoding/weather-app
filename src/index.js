import "./style.css";
import WeatherClass from "./modules/weatherClass";
const API_KEY = "e242732684f64bf197c925a0f8a7be98";

// DOM SELECTORS
const userInput = document.getElementById("location");
const submitIcon = document.querySelector(".fa-magnifying-glass");
const unitHandler = document.querySelector(".units-handler");
// variables
let location = "galati";
let lat = "45.4338215";
let lon = "28.0549395";
let units = "metric";
let unitSymbol = "C";
let windUnit = "m/s";
// weather app class
let currentObj = new WeatherClass();
// Initialize project
renderCurrent();
//API functions
async function requestCoord() {
  try {
    const response = await fetch(
      ` http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`,
      {
        mode: "cors",
      }
    );
    const coord = await response.json();
    lat = coord[0].lat;
    lon = coord[0].lon;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
// API current weather
async function requestCurrent() {
  await requestCoord();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`,
      {
        mode: "cors",
      }
    );
    const currentWeather = await response.json();
    console.log(currentWeather);
    currentObj.setCountry(currentWeather.sys.country);
    currentObj.setHumidity(currentWeather.main.humidity);
    currentObj.setPressure(currentWeather.main.pressure);
    currentObj.setReal(currentWeather.main.feels_like);
    currentObj.setState(currentWeather.weather[0].main);
    currentObj.setStateDescription(currentWeather.weather[0].description);
    currentObj.setTemp(currentWeather.main.temp);
    currentObj.setWindSpd(currentWeather.wind.speed);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
// DISPLAY
async function renderCurrent() {
  await requestCoord();
  await requestCurrent();
  const content = document.querySelector(".content");
  content.innerHTML = ` <div class="current-weather-info">
  <div class="top-wrapper">
    <img
      src="./assets-temporary/sunny.png"
      alt="image of state of current weather"
      class="state"
    />
    <div class="city-name">${location}</div>
  </div>
  <div class="middle-wrapper">
    <div class="temperature-group">
      <div class="temp-wrapper">
        <div class="temp">${currentObj.temp}</div>
        <div class="units">°${unitSymbol}</div>
      </div>
      <div class="icon-wrapper">
        <i class="fa-solid fa-temperature-quarter"></i>
        <div class="state-description">${currentObj.stateDescription}</div>
      </div>
    </div>
    <div class="right-content-wrapper">
      <div class="pressure-group">
        <div class="icon-wrapper">
          <i class="fa-solid fa-droplet"></i>
          <div class="pressure-title">Pressure</div>
        </div>
        <div class="pressure">${currentObj.pressure} hPa</div>
      </div>
      <div class="line"></div>
      <div class="humidity-group">
        <div class="icon-wrapper">
          <i class="fa-solid fa-droplet"></i>
          <div class="humidity-title">Humidity</div>
        </div>
        <div class="humidity">${currentObj.humidity} %</div>
      </div>
      <div class="line"></div>
      <div class="wind-group">
        <div class="icon-wrapper">
          <i class="fa-solid fa-wind"></i>
          <div class="wind-speed-title">Wind Speed</div>
        </div>
        <div class="wind-speed">${currentObj.windSpd} ${windUnit}</div>
      </div>
    </div>
  </div>
  <div class="bottom-wrapper">
    <div class="current-date">8 March, 2023</div>
    <div class="country">${currentObj.country}</div>
  </div>
</div>`;
  console.log(currentObj);
  console.log(`rendering done`);
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
    requestCurrent();
    renderCurrent();
  }
});

// HANDLE SUBMIT BUTTON
submitIcon.addEventListener("click", () => {
  setLocation();
  renderCurrent();
});

// HANDLE UNITS BUTTONS
const updateUnit = () => {
  if (unitHandler.textContent === "°C") {
    units = "imperial";
    unitSymbol = "F";
    windUnit = "m/h"
    unitHandler.textContent = "°F";
  } else if (unitHandler.textContent === "°F") {
    units = "metric";
    unitSymbol = "C";
    windUnit = "m/s"
    unitHandler.textContent = "°C";
  }
};
unitHandler.onclick = () => {
  updateUnit();
  renderCurrent();
};
