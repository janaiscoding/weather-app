/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/Inder/Inder-Regular.ttf */ "./src/assets/Inder/Inder-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Inder\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-style: normal;\n}\n:root {\n  font-family: \"Inder\";\n  --background-color: #f8e8e8;\n  --primary-pink: #f18282;\n  --secondary-pink: #fcbfbf;\n  --font-color: black;\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--font-color);\n}\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--primary-pink);\n  height: 10vh;\n  padding: 0px 100px;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n.logo {\n  color: var(--font-color);\n  font-size: 2rem;\n  font-weight: 500;\n}\ninput {\n  width: 300px;\n  height: 35px;\n  border-radius: 10px;\n  outline: none;\n  background-color: var(--background-color);\n  border-color: transparent;\n  padding: 0px 25px;\n  font-size: 1.1rem;\n  font-style: italic;\n}\n.units-handler {\n  font-size: 25px;\n}\n.units-handler:hover {\n  cursor: pointer;\n}\n.search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n}\n.fa-magnifying-glass {\n  font-size: 25px;\n}\n.fa-magnifying-glass:hover {\n  cursor: pointer;\n}\n.social-link {\n  color: var(--font-color);\n  font-size: 1.3rem;\n}\n\n/*MAIN CONTENT*/\n.content {\n  padding: 0px 100px;\n  height: 85vh;\n  padding: 10px;\n}\n.js-current-content {\n  display: flex;\n  justify-content: center;\n}\n.title {\n  font-size: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding:10px 0px;\n}\n.wrapping-bottom{\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  background-color: var(--secondary-pink);\n  -webkit-box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  border: 1px solid #b98585;\n  border-radius: 10px;\n  padding: 0px 100px 25px 100px;\n}\n.js-forecast-content {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  background-color: var(--secondary-pink);\n  gap: 10px;\n  overflow: auto;\n}\n\n.forecast-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  border: 1px solid #b98585;\n  width: fit-content;\n  padding: 10px;\n  border-radius: 10px;\n  height: 200px;\n  background-color: var(--primary-pink);\n}\n.future-temp {\n  font-size: 24px;\n}\n.week-day{\n  font-size: 20px;\n}\n.future-icon{\n  width: 75px;\n  height: 75px;\n}\n.future-date {\n  font-size: 14px;\n  text-align: center;\n}\n.future-units {\n  font-size: 14px;\n}\n/*CURRENT INFO CARD*/\n.current-weather-info {\n  background-color: var(--secondary-pink);\n  border-radius: 30px;\n  border: 1px solid #b98585;\n  padding: 20px;\n  width: 600px;\n  height: 350px;\n  -webkit-box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n}\n.top-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #b98585;\n}\n.city-name {\n  font-size: 48px;\n  text-transform: capitalize;\n}\n\n.middle-wrapper {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.temperature-group {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  border-right: 1px solid #b98585;\n  padding: 20px;\n}\n.temp-wrapper {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.icon-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  align-items: center;\n}\n.fa-temperature-three-quarters {\n  font-size: 16px;\n}\n.state-description {\n  font-size: 16px;\n  align-self: center;\n  text-transform: capitalize;\n}\n.temp {\n  font-size: 86px;\n}\n.units {\n  font-size: 48px;\n}\n.right-content-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 10px 20px;\n}\n.pressure-group,\n.humidity-group,\n.wind-group {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n}\n.pressure,\n.humidity,\n.wind-speed {\n  font-weight: bold;\n}\n.line {\n  border-bottom: 1px solid #b98585;\n}\n.bottom-wrapper {\n  display: flex;\n  padding: 10px 20px;\n  justify-content: space-between;\n  border-top: 1px solid #b98585;\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-pink);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n}\n.footer-link {\n  color: var(--font-color);\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,4CAA6C;EAC7C,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,2BAA2B;EAC3B,uBAAuB;EACvB,yBAAyB;EACzB,mBAAmB;AACrB;AACA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yCAAyC;EACzC,wBAAwB;AAC1B;AACA,SAAS;AACT;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,qCAAqC;EACrC,YAAY;EACZ,kBAAkB;EAClB,yDAAyD;EACzD,iDAAiD;AACnD;AACA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,yCAAyC;EACzC,yBAAyB;EACzB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,uCAAuC;EACvC,wDAAwD;EACxD,gDAAgD;EAChD,yBAAyB;EACzB,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,uCAAuC;EACvC,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB;AACA,oBAAoB;AACpB;EACE,uCAAuC;EACvC,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,wDAAwD;EACxD,gDAAgD;AAClD;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gCAAgC;AAClC;AACA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,+BAA+B;EAC/B,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;;;EAGE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;AACA;;;EAGE,iBAAiB;AACnB;AACA;EACE,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA,SAAS;AACT;EACE,qCAAqC;EACrC,yDAAyD;EACzD,iDAAiD;EACjD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,wBAAwB;AAC1B;AACA,oBAAoB;AACpB;;;EAGE,qBAAqB;AACvB;;AAEA;;EAEE,yBAAyB;AAC3B","sourcesContent":["@font-face {\n  font-family: \"Inder\";\n  src: url(/src/assets/Inder/Inder-Regular.ttf);\n  font-style: normal;\n}\n:root {\n  font-family: \"Inder\";\n  --background-color: #f8e8e8;\n  --primary-pink: #f18282;\n  --secondary-pink: #fcbfbf;\n  --font-color: black;\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--font-color);\n}\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--primary-pink);\n  height: 10vh;\n  padding: 0px 100px;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n.logo {\n  color: var(--font-color);\n  font-size: 2rem;\n  font-weight: 500;\n}\ninput {\n  width: 300px;\n  height: 35px;\n  border-radius: 10px;\n  outline: none;\n  background-color: var(--background-color);\n  border-color: transparent;\n  padding: 0px 25px;\n  font-size: 1.1rem;\n  font-style: italic;\n}\n.units-handler {\n  font-size: 25px;\n}\n.units-handler:hover {\n  cursor: pointer;\n}\n.search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n}\n.fa-magnifying-glass {\n  font-size: 25px;\n}\n.fa-magnifying-glass:hover {\n  cursor: pointer;\n}\n.social-link {\n  color: var(--font-color);\n  font-size: 1.3rem;\n}\n\n/*MAIN CONTENT*/\n.content {\n  padding: 0px 100px;\n  height: 85vh;\n  padding: 10px;\n}\n.js-current-content {\n  display: flex;\n  justify-content: center;\n}\n.title {\n  font-size: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding:10px 0px;\n}\n.wrapping-bottom{\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  background-color: var(--secondary-pink);\n  -webkit-box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  border: 1px solid #b98585;\n  border-radius: 10px;\n  padding: 0px 100px 25px 100px;\n}\n.js-forecast-content {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  background-color: var(--secondary-pink);\n  gap: 10px;\n  overflow: auto;\n}\n\n.forecast-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  border: 1px solid #b98585;\n  width: fit-content;\n  padding: 10px;\n  border-radius: 10px;\n  height: 200px;\n  background-color: var(--primary-pink);\n}\n.future-temp {\n  font-size: 24px;\n}\n.week-day{\n  font-size: 20px;\n}\n.future-icon{\n  width: 75px;\n  height: 75px;\n}\n.future-date {\n  font-size: 14px;\n  text-align: center;\n}\n.future-units {\n  font-size: 14px;\n}\n/*CURRENT INFO CARD*/\n.current-weather-info {\n  background-color: var(--secondary-pink);\n  border-radius: 30px;\n  border: 1px solid #b98585;\n  padding: 20px;\n  width: 600px;\n  height: 350px;\n  -webkit-box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n}\n.top-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #b98585;\n}\n.city-name {\n  font-size: 48px;\n  text-transform: capitalize;\n}\n\n.middle-wrapper {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.temperature-group {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  border-right: 1px solid #b98585;\n  padding: 20px;\n}\n.temp-wrapper {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.icon-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  align-items: center;\n}\n.fa-temperature-three-quarters {\n  font-size: 16px;\n}\n.state-description {\n  font-size: 16px;\n  align-self: center;\n  text-transform: capitalize;\n}\n.temp {\n  font-size: 86px;\n}\n.units {\n  font-size: 48px;\n}\n.right-content-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 10px 20px;\n}\n.pressure-group,\n.humidity-group,\n.wind-group {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n}\n.pressure,\n.humidity,\n.wind-speed {\n  font-weight: bold;\n}\n.line {\n  border-bottom: 1px solid #b98585;\n}\n.bottom-wrapper {\n  display: flex;\n  padding: 10px 20px;\n  justify-content: space-between;\n  border-top: 1px solid #b98585;\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-pink);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n}\n.footer-link {\n  color: var(--font-color);\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
    pressure,
    humidity,
    windSpd,
    state,
    stateDescription
  ) {
    this.country = country;
    this.temp = temp;
    this.real = real;
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

/***/ "./src/assets/Inder/Inder-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/Inder/Inder-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a2461b6d08b6710e6f8.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_weatherClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weatherClass */ "./src/modules/weatherClass.js");


const API_KEY = "e242732684f64bf197c925a0f8a7be98";

// DOM SELECTORS
const userInput = document.getElementById("location");
const submitIcon = document.querySelector(".fa-magnifying-glass");
const unitHandler = document.querySelector(".units-handler");
// VARIABLES
let location = "galati";
let lat = "45.4338215";
let lon = "28.0549395";
let units = "metric";
let unitSymbol = "C";
let windUnit = "m/s";
let date;
let time;
let unix_timestamp = "1678298238";
// CURRENT WEATHER OBJECT
let currentObj = new _modules_weatherClass__WEBPACK_IMPORTED_MODULE_1__["default"]();

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
    currentObj.setTemp(currentWeather.main.temp);
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
      let tempToDisplay = forecast.list[i].main.temp;
      let stateToDisplay = forecast.list[i].weather[0].icon;
      let timeUnix = forecast.list[i].dt;
      let fullDate = new Date(timeUnix * 1000);
      let weekday = new Date(timeUnix * 1000).getDay();
      const options = { weekday: "long" };
      let weekdayToDisplay = new Intl.DateTimeFormat('en-US', options).format(fullDate);
      let dayToDisplay = new Date(timeUnix * 1000).toLocaleDateString("en-GB");
      let timeToDisplay = new Date(timeUnix * 1000).toLocaleTimeString("en-GB");
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
    <div class="current-date">${date}, ${time} GMT+2</div>
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
  }
});

// HANDLE SUBMIT BUTTON
submitIcon.addEventListener("click", () => {
  setLocation();
  renderCurrent();
  clearContainer();
  requestForecast();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFB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LENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3dlYXRoZXJDbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9JbmRlci9JbmRlci1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRlclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kZXJcXFwiO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjhlOGU4O1xcbiAgLS1wcmltYXJ5LXBpbms6ICNmMTgyODI7XFxuICAtLXNlY29uZGFyeS1waW5rOiAjZmNiZmJmO1xcbiAgLS1mb250LWNvbG9yOiBibGFjaztcXG59XFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbi8qSEVBREVSKi9cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5sb2dvIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmlucHV0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMHB4IDI1cHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLnVuaXRzLWhhbmRsZXIge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4udW5pdHMtaGFuZGxlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuLmZhLW1hZ25pZnlpbmctZ2xhc3Mge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4uZmEtbWFnbmlmeWluZy1nbGFzczpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zb2NpYWwtbGluayB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLypNQUlOIENPTlRFTlQqL1xcbi5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIGhlaWdodDogODV2aDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5qcy1jdXJyZW50LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6MTBweCAwcHg7XFxufVxcbi53cmFwcGluZy1ib3R0b217XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktcGluayk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTg1ODU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMHB4IDEwMHB4IDI1cHggMTAwcHg7XFxufVxcbi5qcy1mb3JlY2FzdC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXBpbmspO1xcbiAgZ2FwOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5ODU4NTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcbi5mdXR1cmUtdGVtcCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi53ZWVrLWRheXtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmZ1dHVyZS1pY29ue1xcbiAgd2lkdGg6IDc1cHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcbi5mdXR1cmUtZGF0ZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mdXR1cmUtdW5pdHMge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4vKkNVUlJFTlQgSU5GTyBDQVJEKi9cXG4uY3VycmVudC13ZWF0aGVyLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXBpbmspO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTg1ODU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4udG9wLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjk4NTg1O1xcbn1cXG4uY2l0eS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4ubWlkZGxlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcbi50ZW1wZXJhdHVyZS1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I5ODU4NTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi50ZW1wLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5pY29uLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZhLXRlbXBlcmF0dXJlLXRocmVlLXF1YXJ0ZXJzIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnN0YXRlLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4udGVtcCB7XFxuICBmb250LXNpemU6IDg2cHg7XFxufVxcbi51bml0cyB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcbi5yaWdodC1jb250ZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuLnByZXNzdXJlLWdyb3VwLFxcbi5odW1pZGl0eS1ncm91cCxcXG4ud2luZC1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ucHJlc3N1cmUsXFxuLmh1bWlkaXR5LFxcbi53aW5kLXNwZWVkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubGluZSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I5ODU4NTtcXG59XFxuLmJvdHRvbS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2I5ODU4NTtcXG59XFxuXFxuLypGT09URVIqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTBweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG59XFxuLmZvb3Rlci1saW5rIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuLyogR0xPQkFMIFNFVFRJTkdTICovXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTpmb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbmlucHV0OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRDQUE2QztFQUM3QyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsd0JBQXdCO0FBQzFCO0FBQ0EsU0FBUztBQUNUO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseURBQXlEO0VBQ3pELGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUEsZUFBZTtBQUNmO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2Qyx3REFBd0Q7RUFDeEQsZ0RBQWdEO0VBQ2hELHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHVDQUF1QztFQUN2QyxTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBLG9CQUFvQjtBQUNwQjtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHdEQUF3RDtFQUN4RCxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCO0FBQ0E7OztFQUdFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjtBQUNBOzs7RUFHRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBQy9COztBQUVBLFNBQVM7QUFDVDtFQUNFLHFDQUFxQztFQUNyQyx5REFBeUQ7RUFDekQsaURBQWlEO0VBQ2pELGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7RUFHRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRlclxcXCI7XFxuICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9JbmRlci9JbmRlci1SZWd1bGFyLnR0Zik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kZXJcXFwiO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjhlOGU4O1xcbiAgLS1wcmltYXJ5LXBpbms6ICNmMTgyODI7XFxuICAtLXNlY29uZGFyeS1waW5rOiAjZmNiZmJmO1xcbiAgLS1mb250LWNvbG9yOiBibGFjaztcXG59XFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbi8qSEVBREVSKi9cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5sb2dvIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbmlucHV0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMHB4IDI1cHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLnVuaXRzLWhhbmRsZXIge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4udW5pdHMtaGFuZGxlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuLmZhLW1hZ25pZnlpbmctZ2xhc3Mge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4uZmEtbWFnbmlmeWluZy1nbGFzczpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zb2NpYWwtbGluayB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLypNQUlOIENPTlRFTlQqL1xcbi5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIGhlaWdodDogODV2aDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5qcy1jdXJyZW50LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6MTBweCAwcHg7XFxufVxcbi53cmFwcGluZy1ib3R0b217XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktcGluayk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTg1ODU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMHB4IDEwMHB4IDI1cHggMTAwcHg7XFxufVxcbi5qcy1mb3JlY2FzdC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXBpbmspO1xcbiAgZ2FwOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5ODU4NTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxufVxcbi5mdXR1cmUtdGVtcCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi53ZWVrLWRheXtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmZ1dHVyZS1pY29ue1xcbiAgd2lkdGg6IDc1cHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcbi5mdXR1cmUtZGF0ZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mdXR1cmUtdW5pdHMge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4vKkNVUlJFTlQgSU5GTyBDQVJEKi9cXG4uY3VycmVudC13ZWF0aGVyLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXBpbmspO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTg1ODU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4udG9wLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjk4NTg1O1xcbn1cXG4uY2l0eS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4ubWlkZGxlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcbi50ZW1wZXJhdHVyZS1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I5ODU4NTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi50ZW1wLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5pY29uLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZhLXRlbXBlcmF0dXJlLXRocmVlLXF1YXJ0ZXJzIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnN0YXRlLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4udGVtcCB7XFxuICBmb250LXNpemU6IDg2cHg7XFxufVxcbi51bml0cyB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcbi5yaWdodC1jb250ZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuLnByZXNzdXJlLWdyb3VwLFxcbi5odW1pZGl0eS1ncm91cCxcXG4ud2luZC1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ucHJlc3N1cmUsXFxuLmh1bWlkaXR5LFxcbi53aW5kLXNwZWVkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubGluZSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I5ODU4NTtcXG59XFxuLmJvdHRvbS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2I5ODU4NTtcXG59XFxuXFxuLypGT09URVIqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTBweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG59XFxuLmZvb3Rlci1saW5rIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuLyogR0xPQkFMIFNFVFRJTkdTICovXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTpmb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbmlucHV0OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlckNsYXNzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgY291bnRyeSxcbiAgICB0ZW1wLFxuICAgIHJlYWwsXG4gICAgcHJlc3N1cmUsXG4gICAgaHVtaWRpdHksXG4gICAgd2luZFNwZCxcbiAgICBzdGF0ZSxcbiAgICBzdGF0ZURlc2NyaXB0aW9uXG4gICkge1xuICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG4gICAgdGhpcy50ZW1wID0gdGVtcDtcbiAgICB0aGlzLnJlYWwgPSByZWFsO1xuICAgIHRoaXMucHJlc3N1cmUgPSBwcmVzc3VyZTtcbiAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gICAgdGhpcy53aW5kU3BkID0gd2luZFNwZDtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5zdGF0ZURlc2NyaXB0aW9uID0gc3RhdGVEZXNjcmlwdGlvbjtcbiAgfVxuICBzZXRDb3VudHJ5KGNvdW50cnkpIHtcbiAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xuICB9XG4gIHNldFRlbXAodGVtcCkge1xuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gIH1cbiAgc2V0UmVhbChyZWFsKSB7XG4gICAgdGhpcy5yZWFsID0gcmVhbDtcbiAgfVxuICBzZXRQcmVzc3VyZShwcmVzc3VyZSkge1xuICAgIHRoaXMucHJlc3N1cmUgPSBwcmVzc3VyZTtcbiAgfVxuICBzZXRIdW1pZGl0eShodW1pZGl0eSkge1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgfVxuICBzZXRXaW5kU3BkKHdpbmRTcGQpIHtcbiAgICB0aGlzLndpbmRTcGQgPSB3aW5kU3BkO1xuICB9XG4gIHNldFN0YXRlKHN0YXRlKXtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGVcbiAgfVxuICBzZXRTdGF0ZURlc2NyaXB0aW9uKHN0YXRlRGVzY3JpcHRpb24pe1xuICAgIHRoaXMuc3RhdGVEZXNjcmlwdGlvbiA9IHN0YXRlRGVzY3JpcHRpb25cbiAgfVxuXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBXZWF0aGVyQ2xhc3MgZnJvbSBcIi4vbW9kdWxlcy93ZWF0aGVyQ2xhc3NcIjtcbmNvbnN0IEFQSV9LRVkgPSBcImUyNDI3MzI2ODRmNjRiZjE5N2M5MjVhMGY4YTdiZTk4XCI7XG5cbi8vIERPTSBTRUxFQ1RPUlNcbmNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG5jb25zdCBzdWJtaXRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYS1tYWduaWZ5aW5nLWdsYXNzXCIpO1xuY29uc3QgdW5pdEhhbmRsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVuaXRzLWhhbmRsZXJcIik7XG4vLyBWQVJJQUJMRVNcbmxldCBsb2NhdGlvbiA9IFwiZ2FsYXRpXCI7XG5sZXQgbGF0ID0gXCI0NS40MzM4MjE1XCI7XG5sZXQgbG9uID0gXCIyOC4wNTQ5Mzk1XCI7XG5sZXQgdW5pdHMgPSBcIm1ldHJpY1wiO1xubGV0IHVuaXRTeW1ib2wgPSBcIkNcIjtcbmxldCB3aW5kVW5pdCA9IFwibS9zXCI7XG5sZXQgZGF0ZTtcbmxldCB0aW1lO1xubGV0IHVuaXhfdGltZXN0YW1wID0gXCIxNjc4Mjk4MjM4XCI7XG4vLyBDVVJSRU5UIFdFQVRIRVIgT0JKRUNUXG5sZXQgY3VycmVudE9iaiA9IG5ldyBXZWF0aGVyQ2xhc3MoKTtcblxuLy8gRGF0ZSBGb3JtYXR0ZXJcbmZ1bmN0aW9uIGZvcm1hdERhdGUodW5peCkge1xuICBkYXRlID0gbmV3IERhdGUodW5peCAqIDEwMDApLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIpO1xuICB0aW1lID0gbmV3IERhdGUodW5peCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLUdCXCIpO1xufVxuLy9BUEkgZnVuY3Rpb25zXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Q29vcmQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZsaW1pdD01JmFwcGlkPSR7QVBJX0tFWX1gLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGNvb3JkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGxhdCA9IGNvb3JkWzBdLmxhdDtcbiAgICBsb24gPSBjb29yZFswXS5sb247XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycm9yfWApO1xuICB9XG59XG4vLyBBUEkgY3VycmVudCB3ZWF0aGVyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Q3VycmVudCgpIHtcbiAgYXdhaXQgcmVxdWVzdENvb3JkKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHtBUElfS0VZfWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgdW5peF90aW1lc3RhbXAgPSBjdXJyZW50V2VhdGhlci5kdDtcbiAgICBjdXJyZW50T2JqLnNldENvdW50cnkoY3VycmVudFdlYXRoZXIuc3lzLmNvdW50cnkpO1xuICAgIGN1cnJlbnRPYmouc2V0SHVtaWRpdHkoY3VycmVudFdlYXRoZXIubWFpbi5odW1pZGl0eSk7XG4gICAgY3VycmVudE9iai5zZXRQcmVzc3VyZShjdXJyZW50V2VhdGhlci5tYWluLnByZXNzdXJlKTtcbiAgICBjdXJyZW50T2JqLnNldFJlYWwoY3VycmVudFdlYXRoZXIubWFpbi5mZWVsc19saWtlKTtcbiAgICBjdXJyZW50T2JqLnNldFN0YXRlKGN1cnJlbnRXZWF0aGVyLndlYXRoZXJbMF0uaWNvbik7XG4gICAgY3VycmVudE9iai5zZXRTdGF0ZURlc2NyaXB0aW9uKGN1cnJlbnRXZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgIGN1cnJlbnRPYmouc2V0VGVtcChjdXJyZW50V2VhdGhlci5tYWluLnRlbXApO1xuICAgIGN1cnJlbnRPYmouc2V0V2luZFNwZChjdXJyZW50V2VhdGhlci53aW5kLnNwZWVkKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyb3J9YCk7XG4gIH1cbn1cblxuLy8gcmVxdWVzdCBmdXR1cmVcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RGb3JlY2FzdCgpIHtcbiAgYXdhaXQgcmVxdWVzdENvb3JkKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPSR7dW5pdHN9JmFwcGlkPSR7QVBJX0tFWX1gLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGZvcmVjYXN0Lmxpc3QubGVuZ3RoOyBpICs9IDUpIHtcbiAgICAgIGxldCB0ZW1wVG9EaXNwbGF5ID0gZm9yZWNhc3QubGlzdFtpXS5tYWluLnRlbXA7XG4gICAgICBsZXQgc3RhdGVUb0Rpc3BsYXkgPSBmb3JlY2FzdC5saXN0W2ldLndlYXRoZXJbMF0uaWNvbjtcbiAgICAgIGxldCB0aW1lVW5peCA9IGZvcmVjYXN0Lmxpc3RbaV0uZHQ7XG4gICAgICBsZXQgZnVsbERhdGUgPSBuZXcgRGF0ZSh0aW1lVW5peCAqIDEwMDApO1xuICAgICAgbGV0IHdlZWtkYXkgPSBuZXcgRGF0ZSh0aW1lVW5peCAqIDEwMDApLmdldERheSgpO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgd2Vla2RheTogXCJsb25nXCIgfTtcbiAgICAgIGxldCB3ZWVrZGF5VG9EaXNwbGF5ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywgb3B0aW9ucykuZm9ybWF0KGZ1bGxEYXRlKTtcbiAgICAgIGxldCBkYXlUb0Rpc3BsYXkgPSBuZXcgRGF0ZSh0aW1lVW5peCAqIDEwMDApLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUdCXCIpO1xuICAgICAgbGV0IHRpbWVUb0Rpc3BsYXkgPSBuZXcgRGF0ZSh0aW1lVW5peCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLUdCXCIpO1xuICAgICAgcmVuZGVyRm9yZWNhc3QoXG4gICAgICAgIHdlZWtkYXlUb0Rpc3BsYXksXG4gICAgICAgIGRheVRvRGlzcGxheSxcbiAgICAgICAgdGltZVRvRGlzcGxheSxcbiAgICAgICAgc3RhdGVUb0Rpc3BsYXksXG4gICAgICAgIHRlbXBUb0Rpc3BsYXlcbiAgICAgICk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJvcn1gKTtcbiAgfVxufVxuXG4vLyBESVNQTEFZIENVUlJFTlRcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckN1cnJlbnQoKSB7XG4gIGZvcm1hdERhdGUodW5peF90aW1lc3RhbXApO1xuICBhd2FpdCByZXF1ZXN0Q3VycmVudCgpO1xuICBjb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY3VycmVudC1jb250ZW50XCIpO1xuICBjdXJyZW50Q29udGVudC5pbm5lckhUTUwgPSBgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXdlYXRoZXItaW5mb1wiPlxuICA8ZGl2IGNsYXNzPVwidG9wLXdyYXBwZXJcIj5cbiAgICA8aW1nXG4gICAgICBzcmM9XCJodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtjdXJyZW50T2JqLnN0YXRlfUAyeC5wbmdcIlxuICAgICAgYWx0PVwiaW1hZ2Ugb2Ygc3RhdGUgb2YgY3VycmVudCB3ZWF0aGVyXCJcbiAgICAgIGNsYXNzPVwic3RhdGVcIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzcz1cImNpdHktbmFtZVwiPiR7bG9jYXRpb259PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibWlkZGxlLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGVtcGVyYXR1cmUtZ3JvdXBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBcIj4ke2N1cnJlbnRPYmoudGVtcH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVuaXRzXCI+wrAke3VuaXRTeW1ib2x9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uLXdyYXBwZXJcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10ZW1wZXJhdHVyZS1xdWFydGVyXCI+PC9pPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGUtZGVzY3JpcHRpb25cIj4ke2N1cnJlbnRPYmouc3RhdGVEZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcmVzc3VyZS1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1kcm9wbGV0XCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzc3VyZS10aXRsZVwiPlByZXNzdXJlPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc3N1cmVcIj4ke2N1cnJlbnRPYmoucHJlc3N1cmV9IGhQYTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImh1bWlkaXR5LWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWRyb3BsZXRcIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImh1bWlkaXR5LXRpdGxlXCI+SHVtaWRpdHk8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJodW1pZGl0eVwiPiR7Y3VycmVudE9iai5odW1pZGl0eX0gJTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIndpbmQtZ3JvdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24td3JhcHBlclwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtd2luZFwiPjwvaT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid2luZC1zcGVlZC10aXRsZVwiPldpbmQgU3BlZWQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kLXNwZWVkXCI+JHtjdXJyZW50T2JqLndpbmRTcGR9ICR7d2luZFVuaXR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJib3R0b20td3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LWRhdGVcIj4ke2RhdGV9LCAke3RpbWV9IEdNVCsyPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvdW50cnlcIj4ke2N1cnJlbnRPYmouY291bnRyeX08L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gO1xufVxuLy8gQ1JFQVRFIE5FVyBDQVJEXG5mdW5jdGlvbiByZW5kZXJGb3JlY2FzdCh3ZWVrRGF5LCBkYXksIHRpbWUsIGljb24sIHRlbXApIHtcbiAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWZvcmVjYXN0LWNvbnRlbnRcIik7XG4gIGZvcmVjYXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gIDxkaXYgY2xhc3M9XCJmb3JlY2FzdC1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5XCI+JHt3ZWVrRGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdXR1cmUtZGF0ZVwiPiR7ZGF5fSwgJHt0aW1lfSBHTVQrMjwvZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgIHNyYz1cImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ1wiXG4gICAgICBhbHQ9XCJpbWFnZSBvZiBzdGF0ZSBvZiBjdXJyZW50IHdlYXRoZXJcIlxuICAgICAgY2xhc3M9XCJmdXR1cmUtaWNvblwiXG4gICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnV0dXJlLXRlbXBcIj4ke3RlbXB9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnV0dXJlLXVuaXRzXCI+wrAke3VuaXRTeW1ib2x9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG59XG4vL0hBTkRMRSBDTEVBUklORyBGT1IgVU5JVCBTV0lUQ0hcbmNvbnN0IGNsZWFyQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZm9yZWNhc3QtY29udGVudFwiKTtcbiAgZm9yZWNhc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbn07XG4vL0EgVVNFUiBXSUxMIFNFTEVDVCBBIExPQ0FUSU9OXG5jb25zdCBzZXRMb2NhdGlvbiA9ICgpID0+IHtcbiAgbG9jYXRpb24gPSB1c2VySW5wdXQudmFsdWU7XG4gIHJldHVybiBsb2NhdGlvbjtcbn07XG5cbi8vIEhBTkRMRSBLRVlQUkVTU1xudXNlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2NhdGlvbigpO1xuICAgIHJlbmRlckN1cnJlbnQoKTtcbiAgICBjbGVhckNvbnRhaW5lcigpO1xuICAgIHJlcXVlc3RGb3JlY2FzdCgpO1xuICB9XG59KTtcblxuLy8gSEFORExFIFNVQk1JVCBCVVRUT05cbnN1Ym1pdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc2V0TG9jYXRpb24oKTtcbiAgcmVuZGVyQ3VycmVudCgpO1xuICBjbGVhckNvbnRhaW5lcigpO1xuICByZXF1ZXN0Rm9yZWNhc3QoKTtcbn0pO1xuXG4vLyBIQU5ETEUgVU5JVFMgQlVUVE9OU1xuY29uc3QgdXBkYXRlVW5pdCA9ICgpID0+IHtcbiAgaWYgKHVuaXRIYW5kbGVyLnRleHRDb250ZW50ID09PSBcIsKwQ1wiKSB7XG4gICAgdW5pdHMgPSBcImltcGVyaWFsXCI7XG4gICAgdW5pdFN5bWJvbCA9IFwiRlwiO1xuICAgIHdpbmRVbml0ID0gXCJtL2hcIjtcbiAgICB1bml0SGFuZGxlci50ZXh0Q29udGVudCA9IFwiwrBGXCI7XG4gIH0gZWxzZSBpZiAodW5pdEhhbmRsZXIudGV4dENvbnRlbnQgPT09IFwiwrBGXCIpIHtcbiAgICB1bml0cyA9IFwibWV0cmljXCI7XG4gICAgdW5pdFN5bWJvbCA9IFwiQ1wiO1xuICAgIHdpbmRVbml0ID0gXCJtL3NcIjtcbiAgICB1bml0SGFuZGxlci50ZXh0Q29udGVudCA9IFwiwrBDXCI7XG4gIH1cbn07XG51bml0SGFuZGxlci5vbmNsaWNrID0gKCkgPT4ge1xuICB1cGRhdGVVbml0KCk7XG4gIHJlbmRlckN1cnJlbnQoKTtcbiAgY2xlYXJDb250YWluZXIoKTtcbiAgcmVxdWVzdEZvcmVjYXN0KCk7XG59O1xuXG4vLyBJbml0aWFsaXplIHByb2plY3RcbnJlbmRlckN1cnJlbnQoKTtcbnJlcXVlc3RGb3JlY2FzdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9