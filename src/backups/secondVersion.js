import WeatherClass from "./modules/weatherClass";
const API_KEY = "e242732684f64bf197c925a0f8a7be98";
// DOM SELECTORS
const userInput = document.getElementById("location");
const submitButton = document.getElementById("submit");
// variables
let location = "galati";
let lat = "45.4338215";
let lon = "28.0549395";
let units = "metric";
// weather app class
let currentObj = new WeatherClass();
// Initialize project
renderCurrent();
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
    lat = "45.4338215";
    lon = "28.0549395";
  }
}

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
    lat = "45.4338215";
    lon = "28.0549395";
  }
}

async function renderCurrent() {
  await requestCoord();
  await requestCurrent();
  console.log(currentObj);
  const currentCard = document.querySelector(".current-card");
  currentCard.innerHTML += `
  <div class="city-name">Location: ${location}</div>
  <div class="country">Country: ${currentObj.country}</div>
  <div class="temp">Temperature: ${currentObj.temp}</div>
  <div class="real-temp">Real feel: ${currentObj.real}</div>
  <div class="state">State: ${currentObj.state}</div>
  <div class="state-description">Description: ${currentObj.stateDescription}</div>
  <div class="pressure">Pressure: ${currentObj.pressure}</div>
  <div class="humidity">Humidity: ${currentObj.humidity}</div>
  <div class="wind-speed">Wind speed: ${currentObj.windSpd}</div>
  `;
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
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  setLocation();
  renderCurrent();
});

// HANDLE UNITS BUTTONS
const imperialButton = document.getElementById("imperial");
imperialButton.onclick = () => {
  units = "imperial";
  renderCurrent();
};

const metricButton = document.getElementById("metric");
metricButton.onclick = () => {
  units = "metric";
  renderCurrent();
};
