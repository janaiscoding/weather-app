/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _utilities_myKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/myKey */ "./src/utilities/myKey.js");
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherData */ "./src/modules/weatherData.js");


// API FUNCTION
async function getWeatherData(location) {
    const API_KEY = (0,_utilities_myKey__WEBPACK_IMPORTED_MODULE_0__["default"])()
    const weatherDataObj = new _weatherData__WEBPACK_IMPORTED_MODULE_1__["default"]()
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`,
        {
          mode: "cors",
        }
      );
      const weatherData = await response.json();
      // Assigning object properties
      weatherDataObj.setCountry(weatherData.sys.country)
    //   weatherDataObj.tempK = weatherData.main.temp;
    //   weatherDataObj.realK = weatherData.main.feels_like;
    //   weatherDataObj.minK = weatherData.main.temp_min;
    //   weatherDataObj.maxK = weatherData.main.temp_max;
    //   weatherDataObj.pressure = weatherData.main.pressure;
    //   weatherDataObj.humidity = weatherData.main.humidity;
    //   weatherDataObj.windSpd = weatherData.wind.speed;
    //   weatherDataObj.state = weatherData.weather[0].main;
    //   weatherDataObj.stateDescription = weatherData.weather[0].description;
    console.log(_weatherData__WEBPACK_IMPORTED_MODULE_1__["default"])
    console.log(weatherDataObj)
    return weatherDataObj;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _loadHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHTML */ "./src/modules/loadHTML.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API */ "./src/modules/API.js");



class UI {
  static loadHomepage() {
    (0,_loadHTML__WEBPACK_IMPORTED_MODULE_0__["default"])();
    UI.handleSubmitButton()
    UI.handleKeypress()
  }
  static setLocation(){
    const userInput = document.getElementById("location");
    let location = userInput.value;
    console.log(location)
    return location;
  }
  static handleSubmitButton(){
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      UI.setLocation();
      (0,_API__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(location);
    });
  }
  static handleKeypress(){
    const userInput = document.getElementById("location");
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        UI.setLocation();
        (0,_API__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(location);
      }
    });  
  }
}


/***/ }),

/***/ "./src/modules/loadHTML.js":
/*!*********************************!*\
  !*** ./src/modules/loadHTML.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHTML)
/* harmony export */ });
function loadHTML() {
  const content = document.querySelector(".content");
  content.innerHTML += `    <div>This is a test.</div>
    <input id="location">
    <button id="submit">Submit</button>`;
}


/***/ }),

/***/ "./src/modules/weatherData.js":
/*!************************************!*\
  !*** ./src/modules/weatherData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherData)
/* harmony export */ });
class WeatherData {
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


/***/ }),

/***/ "./src/utilities/myKey.js":
/*!********************************!*\
  !*** ./src/utilities/myKey.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getKey)
/* harmony export */ });
// MY API KEY :)
function getKey() {
  const API_KEY = "e242732684f64bf197c925a0f8a7be98";
  return API_KEY;
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
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");

document.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFDeEM7QUFDTztBQUNQLG9CQUFvQiw0REFBTTtBQUMxQiwrQkFBK0Isb0RBQVc7QUFDMUM7QUFDQTtBQUNBLDZEQUE2RCxTQUFTLFNBQVMsUUFBUTtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBVztBQUMzQjtBQUNBO0FBQ0EsTUFBTTtBQUNOLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDa0M7QUFDSzs7QUFFeEI7QUFDZjtBQUNBLElBQUkscURBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBYztBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFjO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEI7QUFDOUIsOENBQThDLGdFQUFlLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL0FQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbG9hZEhUTUwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlsaXRpZXMvbXlLZXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0S2V5IGZyb20gXCIuLi91dGlsaXRpZXMvbXlLZXlcIjtcbmltcG9ydCBXZWF0aGVyRGF0YSBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xuLy8gQVBJIEZVTkNUSU9OXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgICBjb25zdCBBUElfS0VZID0gZ2V0S2V5KClcbiAgICBjb25zdCB3ZWF0aGVyRGF0YU9iaiA9IG5ldyBXZWF0aGVyRGF0YSgpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7QVBJX0tFWX1gLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vIEFzc2lnbmluZyBvYmplY3QgcHJvcGVydGllc1xuICAgICAgd2VhdGhlckRhdGFPYmouc2V0Q291bnRyeSh3ZWF0aGVyRGF0YS5zeXMuY291bnRyeSlcbiAgICAvLyAgIHdlYXRoZXJEYXRhT2JqLnRlbXBLID0gd2VhdGhlckRhdGEubWFpbi50ZW1wO1xuICAgIC8vICAgd2VhdGhlckRhdGFPYmoucmVhbEsgPSB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2U7XG4gICAgLy8gICB3ZWF0aGVyRGF0YU9iai5taW5LID0gd2VhdGhlckRhdGEubWFpbi50ZW1wX21pbjtcbiAgICAvLyAgIHdlYXRoZXJEYXRhT2JqLm1heEsgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4O1xuICAgIC8vICAgd2VhdGhlckRhdGFPYmoucHJlc3N1cmUgPSB3ZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlO1xuICAgIC8vICAgd2VhdGhlckRhdGFPYmouaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuICAgIC8vICAgd2VhdGhlckRhdGFPYmoud2luZFNwZCA9IHdlYXRoZXJEYXRhLndpbmQuc3BlZWQ7XG4gICAgLy8gICB3ZWF0aGVyRGF0YU9iai5zdGF0ZSA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICAvLyAgIHdlYXRoZXJEYXRhT2JqLnN0YXRlRGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGNvbnNvbGUubG9nKFdlYXRoZXJEYXRhKVxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhT2JqKVxuICAgIHJldHVybiB3ZWF0aGVyRGF0YU9iajtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycm9yfWApO1xuICAgIH1cbiAgfVxuICAiLCJpbXBvcnQgbG9hZEhUTUwgZnJvbSBcIi4vbG9hZEhUTUxcIjtcbmltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vQVBJXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGxvYWRIb21lcGFnZSgpIHtcbiAgICBsb2FkSFRNTCgpO1xuICAgIFVJLmhhbmRsZVN1Ym1pdEJ1dHRvbigpXG4gICAgVUkuaGFuZGxlS2V5cHJlc3MoKVxuICB9XG4gIHN0YXRpYyBzZXRMb2NhdGlvbigpe1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG4gICAgbGV0IGxvY2F0aW9uID0gdXNlcklucHV0LnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxuICBzdGF0aWMgaGFuZGxlU3VibWl0QnV0dG9uKCl7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgVUkuc2V0TG9jYXRpb24oKTtcbiAgICAgIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgaGFuZGxlS2V5cHJlc3MoKXtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuICAgIHVzZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgVUkuc2V0TG9jYXRpb24oKTtcbiAgICAgICAgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pO1xuICAgICAgfVxuICAgIH0pOyAgXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIVE1MKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb250ZW50LmlubmVySFRNTCArPSBgICAgIDxkaXY+VGhpcyBpcyBhIHRlc3QuPC9kaXY+XG4gICAgPGlucHV0IGlkPVwibG9jYXRpb25cIj5cbiAgICA8YnV0dG9uIGlkPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+YDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXJEYXRhIHtcbiAgY29uc3RydWN0b3IoXG4gICAgY291bnRyeSxcbiAgICB0ZW1wSyxcbiAgICByZWFsSyxcbiAgICBtaW5LLFxuICAgIG1heEssXG4gICAgcHJlc3N1cmUsXG4gICAgaHVtaWRpdHksXG4gICAgd2luZFNwZCxcbiAgICBzdGF0ZSxcbiAgICBzdGF0ZURlc2NyaXB0aW9uXG4gICkge1xuICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG4gICAgdGhpcy50ZW1wSyA9IHRlbXBLO1xuICAgIHRoaXMucmVhbEsgPSByZWFsSztcbiAgICB0aGlzLm1pbksgPSBtaW5LO1xuICAgIHRoaXMubWF4SyA9IG1heEs7XG4gICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLndpbmRTcGQgPSB3aW5kU3BkO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnN0YXRlRGVzY3JpcHRpb24gPSBzdGF0ZURlc2NyaXB0aW9uO1xuICB9XG4gIHNldENvdW50cnkoY291bnRyeSkge1xuICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG4gIH1cbiAgc2V0VGVtcEsodGVtcEspIHtcbiAgICB0aGlzLnRlbXBLID0gdGVtcEs7XG4gIH1cbiAgc2V0UmVhbEsocmVhbEspIHtcbiAgICB0aGlzLnJlYWxLID0gcmVhbEs7XG4gIH1cbiAgc2V0TWluSyhtaW5LKSB7XG4gICAgdGhpcy5taW5LID0gbWluSztcbiAgfVxuICBzZXRNYXhLKG1heEspIHtcbiAgICB0aGlzLm1heEsgPSBtYXhLO1xuICB9XG4gIHNldFByZXNzdXJlKHByZXNzdXJlKSB7XG4gICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICB9XG4gIHNldEh1bWlkaXR5KGh1bWlkaXR5KSB7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICB9XG4gIHNldFdpbmRTcGQod2luZFNwZCkge1xuICAgIHRoaXMud2luZFNwZCA9IHdpbmRTcGQ7XG4gIH1cbiAgc2V0U3RhdGUoc3RhdGUpe1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZVxuICB9XG4gIHNldFN0YXRlRGVzY3JpcHRpb24oc3RhdGVEZXNjcmlwdGlvbil7XG4gICAgdGhpcy5zdGF0ZURlc2NyaXB0aW9uID0gc3RhdGVEZXNjcmlwdGlvblxuICB9XG59XG4iLCIvLyBNWSBBUEkgS0VZIDopXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRLZXkoKSB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcImUyNDI3MzI2ODRmNjRiZjE5N2M5MjVhMGY4YTdiZTk4XCI7XG4gIHJldHVybiBBUElfS0VZO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRIb21lcGFnZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=