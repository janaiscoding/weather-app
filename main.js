/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/weatherClass.js":
/*!*************************************!*\
  !*** ./src/modules/weatherClass.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherClass)
/* harmony export */ });
class WeatherClass {
  constructor(
    country,
    temp,
    real,
    min,
    max,
    pressure,
    humidity,
    windSpd,
    state,
    stateDescription
  ) {
    this.country = country;
    this.temp = temp;
    this.real = real;
    this.min = min;
    this.max = max;
    this.pressure = pressure;
    this.humidity = humidity;
    this.windSpd = windSpd;
    this.state = state;
    this.stateDescription = stateDescription;
  }
  setCountry(country) {
    this.country = country;
  }
  setTemp(temp) {
    this.temp = temp;
  }
  setReal(real) {
    this.real = real;
  }
  setMin(min) {
    this.min = min;
  }
  setMax(max) {
    this.max = max;
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weatherClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherClass */ "./src/modules/weatherClass.js");

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
let weatherObj = new _modules_weatherClass__WEBPACK_IMPORTED_MODULE_0__["default"]();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztVQ3ZEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZEQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxTQUFTLFNBQVMsUUFBUTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsSUFBSSxPQUFPLElBQUksU0FBUyxNQUFNLFNBQVMsUUFBUTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckNsYXNzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlckNsYXNzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgY291bnRyeSxcbiAgICB0ZW1wLFxuICAgIHJlYWwsXG4gICAgbWluLFxuICAgIG1heCxcbiAgICBwcmVzc3VyZSxcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kU3BkLFxuICAgIHN0YXRlLFxuICAgIHN0YXRlRGVzY3JpcHRpb25cbiAgKSB7XG4gICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICB0aGlzLnRlbXAgPSB0ZW1wO1xuICAgIHRoaXMucmVhbCA9IHJlYWw7XG4gICAgdGhpcy5taW4gPSBtaW47XG4gICAgdGhpcy5tYXggPSBtYXg7XG4gICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLndpbmRTcGQgPSB3aW5kU3BkO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnN0YXRlRGVzY3JpcHRpb24gPSBzdGF0ZURlc2NyaXB0aW9uO1xuICB9XG4gIHNldENvdW50cnkoY291bnRyeSkge1xuICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG4gIH1cbiAgc2V0VGVtcCh0ZW1wKSB7XG4gICAgdGhpcy50ZW1wID0gdGVtcDtcbiAgfVxuICBzZXRSZWFsKHJlYWwpIHtcbiAgICB0aGlzLnJlYWwgPSByZWFsO1xuICB9XG4gIHNldE1pbihtaW4pIHtcbiAgICB0aGlzLm1pbiA9IG1pbjtcbiAgfVxuICBzZXRNYXgobWF4KSB7XG4gICAgdGhpcy5tYXggPSBtYXg7XG4gIH1cbiAgc2V0UHJlc3N1cmUocHJlc3N1cmUpIHtcbiAgICB0aGlzLnByZXNzdXJlID0gcHJlc3N1cmU7XG4gIH1cbiAgc2V0SHVtaWRpdHkoaHVtaWRpdHkpIHtcbiAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gIH1cbiAgc2V0V2luZFNwZCh3aW5kU3BkKSB7XG4gICAgdGhpcy53aW5kU3BkID0gd2luZFNwZDtcbiAgfVxuICBzZXRTdGF0ZShzdGF0ZSl7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlXG4gIH1cbiAgc2V0U3RhdGVEZXNjcmlwdGlvbihzdGF0ZURlc2NyaXB0aW9uKXtcbiAgICB0aGlzLnN0YXRlRGVzY3JpcHRpb24gPSBzdGF0ZURlc2NyaXB0aW9uXG4gIH1cblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgV2VhdGhlckNsYXNzIGZyb20gXCIuL21vZHVsZXMvd2VhdGhlckNsYXNzXCI7XG5jb25zdCBBUElfS0VZID0gXCJlMjQyNzMyNjg0ZjY0YmYxOTdjOTI1YTBmOGE3YmU5OFwiO1xuLy8gRE9NIFNFTEVDVE9SU1xuY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuLy8gdmFyaWFibGVzXG5sZXQgbG9jYXRpb24gPSBcImdhbGF0aVwiO1xubGV0IGxhdCA9IFwiNDUuNDVcIjtcbmxldCBsb24gPSBcIjI4LjA1XCI7XG5sZXQgdW5pdHMgPSBcIm1ldHJpY1wiO1xuLy8gd2VhdGhlciBhcHAgY2xhc3NcbmxldCB3ZWF0aGVyT2JqID0gbmV3IFdlYXRoZXJDbGFzcygpO1xuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdENvb3JkKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZBUFBJRD0ke0FQSV9LRVl9YCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBsYXQgPSB3ZWF0aGVyRGF0YS5jb29yZC5sYXQ7XG4gICAgbG9uID0gd2VhdGhlckRhdGEuY29vcmQubG9uO1xuICAgIGNvbnNvbGUubG9nKGxhdCwgbG9uKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyb3J9YCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdE1ldGVvKCkge1xuICBhd2FpdCByZXF1ZXN0Q29vcmQoKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHtBUElfS0VZfWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgd2VhdGhlck9iai5zZXRUZW1wKGZvcmVjYXN0Lmxpc3RbMF0ubWFpbi50ZW1wKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqKVxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyb3J9YCk7XG4gIH1cbn1cblxuLy9BIFVTRVIgV0lMTCBTRUxFQ1QgQSBMT0NBVElPTlxuY29uc3Qgc2V0TG9jYXRpb24gPSAoKSA9PiB7XG4gIGxvY2F0aW9uID0gdXNlcklucHV0LnZhbHVlO1xuICByZXR1cm4gbG9jYXRpb247XG59O1xuXG4vLyBIQU5ETEUgS0VZUFJFU1NcbnVzZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9jYXRpb24oKTtcbiAgICByZXF1ZXN0TWV0ZW8oKTtcbiAgfVxufSk7XG5cbi8vIEhBTkRMRSBTVUJNSVQgQlVUVE9OXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc2V0TG9jYXRpb24oKTtcbiAgcmVxdWVzdE1ldGVvKCk7XG59KTtcblxuLy8gSEFORExFIFVOSVRTIEJVVFRPTlNcbmNvbnN0IGltcGVyaWFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBlcmlhbFwiKTtcbmltcGVyaWFsQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHVuaXRzID0gXCJpbXBlcmlhbFwiO1xuICByZXF1ZXN0TWV0ZW8oKTtcbn07XG5jb25zdCBtZXRyaWNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1ldHJpY1wiKTtcbm1ldHJpY0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICB1bml0cyA9IFwibWV0cmljXCI7XG4gIHJlcXVlc3RNZXRlbygpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==