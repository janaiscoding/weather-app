import "./style.css";
import WeatherClass from "./modules/weatherClass";
const API_KEY = "e242732684f64bf197c925a0f8a7be98";

// DOM SELECTORS
const userInput = document.getElementById("location");
const submitIcon = document.querySelector(".fa-magnifying-glass");
const unitHandler = document.querySelector(".units-handler");
// VARIABLES
let location = "bucharest";
let lat = "44.4361414";
let lon = "26.1027202";
let units = "metric";
let unitSymbol = "C";
let windUnit = "m/s";
let date;
let time;
let unix_timestamp = "1678298238";
// CURRENT WEATHER OBJECT
let currentObj = new WeatherClass();

// Date Formatter
function formatDate(unix) {
  date = new Date(unix * 1000).toLocaleDateString("en-GB");
  time = new Date(unix * 1000).toLocaleTimeString("en-GB");
}
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
    clearInput();
    location = "bucharest";
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
    unix_timestamp = currentWeather.dt;
    currentObj.setCountry(currentWeather.sys.country);
    currentObj.setHumidity(currentWeather.main.humidity);
    currentObj.setPressure(currentWeather.main.pressure);
    currentObj.setReal(currentWeather.main.feels_like);
    currentObj.setState(currentWeather.weather[0].icon);
    currentObj.setStateDescription(currentWeather.weather[0].description);
    currentObj.setTemp(Math.round(currentWeather.main.temp * 10) / 10);
    currentObj.setWindSpd(currentWeather.wind.speed);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

// request future
async function requestForecast() {
  await requestCoord();
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`,
      {
        mode: "cors",
      }
    );
    const forecast = await response.json();
    for (let i = 0; i <= forecast.list.length; i += 5) {
      let tempToDisplay = Math.round(forecast.list[i].main.temp * 10) / 10;
      let stateToDisplay = forecast.list[i].weather[0].icon;
      let timeUnix = forecast.list[i].dt;
      let fullDate = new Date(timeUnix * 1000);
      let weekday = new Date(timeUnix * 1000).getDay();
      const options = { weekday: "long" };
      let weekdayToDisplay = new Intl.DateTimeFormat("en-US", options).format(
        fullDate
      );
      let dayToDisplay = new Date(timeUnix * 1000).toLocaleDateString("en-GB");
      let timeToDisplay = new Date(timeUnix * 1000).toLocaleTimeString("en-GB");
      let hour = new Date(timeUnix * 1000).getHours();
      renderForecast(
        weekdayToDisplay,
        dayToDisplay,
        timeToDisplay,
        stateToDisplay,
        tempToDisplay
      );
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

// DISPLAY CURRENT
async function renderCurrent() {
  formatDate(unix_timestamp);
  await requestCurrent();
  const currentContent = document.querySelector(".js-current-content");
  currentContent.innerHTML = ` <div class="current-weather-info">
  <div class="top-wrapper">
    <img
      src="https://openweathermap.org/img/wn/${currentObj.state}@2x.png"
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
        <i class="fa-solid fa-bars"></i>
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
    <div class="current-date">${date}, ${time} (GMT+2)</div>
    <div class="country">${currentObj.country}</div>
  </div>
</div>`;
}
// CREATE NEW CARD
function renderForecast(weekDay, day, time, icon, temp) {
  const forecastContainer = document.querySelector(".js-forecast-content");
  forecastContainer.innerHTML += `
  <div class="forecast-card">
          <div class="week-day">${weekDay}</div>
          <div class="future-date">${day}, ${time} GMT+2</div>
          <img
      src="https://openweathermap.org/img/wn/${icon}@2x.png"
      alt="image of state of current weather"
      class="future-icon"
    />
          <div class="temp-wrapper">
            <div class="future-temp">${temp}</div>
            <div class="future-units">°${unitSymbol}</div>
          </div>
        </div>`;
}
//HANDLE CLEARING FOR UNIT SWITCH
const clearContainer = () => {
  const forecastContainer = document.querySelector(".js-forecast-content");
  forecastContainer.innerHTML = "";
};
const clearInput = () => {
  userInput.value = "";
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
    renderCurrent();
    clearContainer();
    requestForecast();
    clearInput();
  }
});

// HANDLE SUBMIT BUTTON
submitIcon.addEventListener("click", () => {
  setLocation();
  renderCurrent();
  clearContainer();
  requestForecast();
  clearInput();
});

// HANDLE UNITS BUTTONS
const updateUnit = () => {
  if (unitHandler.textContent === "°C") {
    units = "imperial";
    unitSymbol = "F";
    windUnit = "m/h";
    unitHandler.textContent = "°F";
  } else if (unitHandler.textContent === "°F") {
    units = "metric";
    unitSymbol = "C";
    windUnit = "m/s";
    unitHandler.textContent = "°C";
  }
};
unitHandler.onclick = () => {
  updateUnit();
  renderCurrent();
  clearContainer();
  requestForecast();
};

// Initialize project
renderCurrent();
requestForecast();

function setTheme() {
  const darkActive = document.querySelector(".fa-moon");
  const lightActive = document.querySelector(".fa-lightbulb");
  const root = document.documentElement;
  const newTheme = root.className === "Dark" ? "Light" : "Dark";
  root.className = newTheme;
  if (newTheme === "Dark") {
    darkActive.style.display = "none";
    lightActive.style.display = "block";
  }
  if (newTheme === "Light") {
    darkActive.style.display = "block";
    lightActive.style.display = "none";
  }
}
const toggleBtn = document.querySelector(".theme-toggle");
toggleBtn.onclick = setTheme;
