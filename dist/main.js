/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// MY API KEY :)
const API_KEY = `e242732684f64bf197c925a0f8a7be98`;
// USER INPUT
let location;

// ALL VARIABLES BASED ON USER INPUT
let country;
// NORMAL WEATHER
let tempK;
let tempC;
let tempF;
// REAL FEEL WEATHER
let realK;
let realC;
let realF;
// MIN WEATHER
let minK;
let minC;
let minF;
//MAX WEATHER
let maxK;
let maxC;
let maxF;
// AIR PRESSURE
let pressure;
//HUMIDITY
let humidity;
// WIND
let windSpd;
// WEATHER STATE
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
    console.log(weatherData);
    //country
    country = weatherData.sys.country;
    //normal temp
    tempK = weatherData.main.temp;
    //real temp
    realK = weatherData.main.feels_like;
    //min weather
    minK = weatherData.main.temp_min;
    //max weather
    maxK = weatherData.main.temp_max;
    //air pressure
    pressure = weatherData.main.pressure;
    //humidity
    humidity = weatherData.main.humidity;
    //wind speed
    windSpd = weatherData.wind.speed;
    //weather state
    state = weatherData.weather[0].main;
    stateDescription = weatherData.weather[0].description;
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
  //normal weather
  tempF = kelvinToFahrenheit(tempK);
  tempC = kelvinToCelsius(tempK);
  //real feel
  realF = kelvinToFahrenheit(realK);
  realC = kelvinToCelsius(realK);
  //min temp
  minF = kelvinToFahrenheit(minK);
  minC = kelvinToCelsius(minK);
  //max temp
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsU0FBUyxTQUFTLFFBQVE7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU0sUUFBUSxNQUFNO0FBQ2pELDRCQUE0QixNQUFNLFFBQVEsTUFBTTtBQUNoRCwyQkFBMkIsS0FBSyxRQUFRLEtBQUs7QUFDN0MsMkJBQTJCLEtBQUssUUFBUSxLQUFLO0FBQzdDLCtCQUErQixTQUFTO0FBQ3hDLG1DQUFtQyxVQUFVO0FBQzdDLDZCQUE2QixTQUFTO0FBQ3RDLGdDQUFnQyxNQUFNO0FBQ3RDLDRDQUE0QyxpQkFBaUI7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1ZIEFQSSBLRVkgOilcbmNvbnN0IEFQSV9LRVkgPSBgZTI0MjczMjY4NGY2NGJmMTk3YzkyNWEwZjhhN2JlOThgO1xuLy8gVVNFUiBJTlBVVFxubGV0IGxvY2F0aW9uO1xuXG4vLyBBTEwgVkFSSUFCTEVTIEJBU0VEIE9OIFVTRVIgSU5QVVRcbmxldCBjb3VudHJ5O1xuLy8gTk9STUFMIFdFQVRIRVJcbmxldCB0ZW1wSztcbmxldCB0ZW1wQztcbmxldCB0ZW1wRjtcbi8vIFJFQUwgRkVFTCBXRUFUSEVSXG5sZXQgcmVhbEs7XG5sZXQgcmVhbEM7XG5sZXQgcmVhbEY7XG4vLyBNSU4gV0VBVEhFUlxubGV0IG1pbks7XG5sZXQgbWluQztcbmxldCBtaW5GO1xuLy9NQVggV0VBVEhFUlxubGV0IG1heEs7XG5sZXQgbWF4QztcbmxldCBtYXhGO1xuLy8gQUlSIFBSRVNTVVJFXG5sZXQgcHJlc3N1cmU7XG4vL0hVTUlESVRZXG5sZXQgaHVtaWRpdHk7XG4vLyBXSU5EXG5sZXQgd2luZFNwZDtcbi8vIFdFQVRIRVIgU1RBVEVcbmxldCBzdGF0ZTtcbmxldCBzdGF0ZURlc2NyaXB0aW9uO1xuXG4vLyBET00gU0VMRUNUT1JTXG5jb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG5cbi8vIEFQSSBGVU5DVElPTlxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7QVBJX0tFWX1gLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAvL2NvdW50cnlcbiAgICBjb3VudHJ5ID0gd2VhdGhlckRhdGEuc3lzLmNvdW50cnk7XG4gICAgLy9ub3JtYWwgdGVtcFxuICAgIHRlbXBLID0gd2VhdGhlckRhdGEubWFpbi50ZW1wO1xuICAgIC8vcmVhbCB0ZW1wXG4gICAgcmVhbEsgPSB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2U7XG4gICAgLy9taW4gd2VhdGhlclxuICAgIG1pbksgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluO1xuICAgIC8vbWF4IHdlYXRoZXJcbiAgICBtYXhLID0gd2VhdGhlckRhdGEubWFpbi50ZW1wX21heDtcbiAgICAvL2FpciBwcmVzc3VyZVxuICAgIHByZXNzdXJlID0gd2VhdGhlckRhdGEubWFpbi5wcmVzc3VyZTtcbiAgICAvL2h1bWlkaXR5XG4gICAgaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuICAgIC8vd2luZCBzcGVlZFxuICAgIHdpbmRTcGQgPSB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkO1xuICAgIC8vd2VhdGhlciBzdGF0ZVxuICAgIHN0YXRlID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIHN0YXRlRGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGNvbnZlcnRXZWF0aGVyKCk7XG4gICAgZGlzcGxheVdlYXRoZXIoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuLy8gQ09OVkVSVE9SIEZVTkNUSU9OIEsgVE8gRlxuY29uc3Qga2VsdmluVG9GYWhyZW5oZWl0ID0gKGspID0+IHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoKGsgLSAyNzMuMTUpICogMS44ICsgMzIpO1xufTtcbi8vIENPTlZFUlRPUiBGVU5DVElPTiBLIFRPIENcbmNvbnN0IGtlbHZpblRvQ2Vsc2l1cyA9IChrKSA9PiB7XG4gIHJldHVybiBNYXRoLmZsb29yKGsgLSAyNzMuMTUpO1xufTtcbi8vIFNFVCBBTEwgV0VBVEhFUlMgVE8gQ09SUkVDVCBVTklUU1xuY29uc3QgY29udmVydFdlYXRoZXIgPSAoKSA9PiB7XG4gIC8vbm9ybWFsIHdlYXRoZXJcbiAgdGVtcEYgPSBrZWx2aW5Ub0ZhaHJlbmhlaXQodGVtcEspO1xuICB0ZW1wQyA9IGtlbHZpblRvQ2Vsc2l1cyh0ZW1wSyk7XG4gIC8vcmVhbCBmZWVsXG4gIHJlYWxGID0ga2VsdmluVG9GYWhyZW5oZWl0KHJlYWxLKTtcbiAgcmVhbEMgPSBrZWx2aW5Ub0NlbHNpdXMocmVhbEspO1xuICAvL21pbiB0ZW1wXG4gIG1pbkYgPSBrZWx2aW5Ub0ZhaHJlbmhlaXQobWluSyk7XG4gIG1pbkMgPSBrZWx2aW5Ub0NlbHNpdXMobWluSyk7XG4gIC8vbWF4IHRlbXBcbiAgbWF4RiA9IGtlbHZpblRvRmFocmVuaGVpdChtYXhLKTtcbiAgbWF4QyA9IGtlbHZpblRvQ2Vsc2l1cyhtYXhLKTtcbn07XG5cbi8vIERJU1BMQVkgV0VBVEhFUiBEQVRBXG5jb25zdCBkaXNwbGF5V2VhdGhlciA9ICgpID0+IHtcbiAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuICBjb25zb2xlLmxvZyhjb3VudHJ5KTtcbiAgY29uc29sZS5sb2coYE5vcm1hbCB0ZW1wOiR7dGVtcEZ9Riwgb3IgJHt0ZW1wQ31DYCk7XG4gIGNvbnNvbGUubG9nKGBSZWFsIGZlZWw6ICR7cmVhbEZ9Riwgb3IgJHtyZWFsQ31DLmApO1xuICBjb25zb2xlLmxvZyhgTWluIHRlbXA6ICR7bWluRn1GLCBvciAke21pbkN9Qy5gKTtcbiAgY29uc29sZS5sb2coYE1heCB0ZW1wOiAke21heEZ9Riwgb3IgJHttYXhDfUMuYCk7XG4gIGNvbnNvbGUubG9nKGBBaXIgcHJlc3N1cmU6ICR7cHJlc3N1cmV9YCk7XG4gIGNvbnNvbGUubG9nKGBDdXJyZW50IEh1bWl0aXR5OiAke2h1bWlkaXR5fSAlYCk7XG4gIGNvbnNvbGUubG9nKGBXaW5kIFNwZWVkOiAke3dpbmRTcGR9IG0vc2ApO1xuICBjb25zb2xlLmxvZyhgV2VhdGhlciBzdGF0ZTogJHtzdGF0ZX1gKTtcbiAgY29uc29sZS5sb2coYFdlYXRoZXIgc3RhdGUgZGVzY3JpcHRpb246ICR7c3RhdGVEZXNjcmlwdGlvbn1gKTtcbn07XG5cbi8vQSBVU0VSIFdJTEwgU0VMRUNUIEEgTE9DQVRJT05cbmNvbnN0IHNldExvY2F0aW9uID0gKCkgPT4ge1xuICBsb2NhdGlvbiA9IHVzZXJJbnB1dC52YWx1ZTtcbiAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuICByZXR1cm4gbG9jYXRpb247XG59O1xuXG4vLyBIQU5ETEUgS0VZUFJFU1NcbnVzZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9jYXRpb24oKTtcbiAgICBnZXRXZWF0aGVyRGF0YSgpO1xuICB9XG59KTtcblxuLy8gSEFORExFIFNVQk1JVCBCVVRUT05cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBzZXRMb2NhdGlvbigpO1xuICBnZXRXZWF0aGVyRGF0YSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=