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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Inder\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-style: normal;\n}\n:root.Light {\n  font-family: \"Inder\";\n  --background-color: #f8e8e8;\n  --primary-focus: #f18282;\n  --secondary-focus: #fcbfbf;\n  --line-color: #b98585;\n  --font-color: black;\n}\n:root.Dark {\n  font-family: \"Inder\";\n  --background-color: #141414;\n  --primary-focus: #040608;\n  --secondary-focus: #212329;\n  --font-color: white;\n  --line-color: #121213;\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--font-color);\n}\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--primary-focus);\n  height: 10vh;\n  padding: 0px 100px;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n.logo {\n  color: var(--font-color);\n  font-size: 2rem;\n  font-weight: 500;\n}\ninput {\n  width: 300px;\n  height: 35px;\n  border-radius: 10px;\n  outline: none;\n  background-color: var(--background-color);\n  border-color: transparent;\n  padding: 0px 25px;\n  font-size: 1.1rem;\n  font-style: italic;\n}\n.units-handler {\n  font-size: 25px;\n}\n.units-handler:hover {\n  cursor: pointer;\n}\n.search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  color: var(--font-color);\n}\n.fa-magnifying-glass {\n  font-size: 20px;\n}\n.fa-moon {\n  display: none;\n  font-size: 20px;\n}\n.fa-moon:hover,\n.fa-lightbulb:hover {\n  cursor: pointer;\n}\n.fa-lightbulb {\n  display: block;\n  font-size: 20px;\n}\n.fa-magnifying-glass:hover {\n  cursor: pointer;\n}\n.right-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.social-link {\n  color: var(--font-color);\n  font-size: 1.3rem;\n}\n\n/*MAIN CONTENT*/\n.content {\n  padding: 0px 100px;\n  height: 85vh;\n  padding: 10px;\n}\n.js-current-content {\n  display: flex;\n  justify-content: center;\n}\n.title {\n  font-size: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0px;\n}\n.wrapping-bottom {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  background-color: var(--secondary-focus);\n  -webkit-box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  border: 1px solid var(--line-color);\n  border-radius: 10px;\n  padding: 0px 100px 25px 100px;\n}\n.js-forecast-content {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  background-color: var(--secondary-focus);\n  gap: 10px;\n  overflow: auto;\n}\n\n.forecast-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  border: 1px solid var(--line-color);\n  width: fit-content;\n  padding: 10px;\n  border-radius: 10px;\n  height: 200px;\n  background-color: var(--primary-focus);\n}\n.future-temp {\n  font-size: 24px;\n}\n.week-day {\n  font-size: 20px;\n}\n.future-icon {\n  width: 75px;\n  height: 75px;\n}\n.future-date {\n  font-size: 14px;\n  text-align: center;\n}\n.future-units {\n  font-size: 14px;\n}\n/*CURRENT INFO CARD*/\n.current-weather-info {\n  background-color: var(--primary-focus);\n  border-radius: 30px;\n  border: 1px solid var(--line-color);\n  padding: 20px;\n  width: 600px;\n  height: 350px;\n  -webkit-box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n}\n.top-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid var(--line-color);\n}\n.city-name {\n  font-size: 48px;\n  text-transform: capitalize;\n}\n\n.middle-wrapper {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.temperature-group {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  border-right: 1px solid var(--line-color);\n  padding: 20px;\n}\n.temp-wrapper {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.icon-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  align-items: center;\n}\n.fa-temperature-three-quarters {\n  font-size: 16px;\n}\n.state-description {\n  font-size: 16px;\n  align-self: center;\n  text-transform: capitalize;\n}\n.temp {\n  font-size: 86px;\n}\n.units {\n  font-size: 48px;\n}\n.right-content-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 10px 20px;\n}\n.pressure-group,\n.humidity-group,\n.wind-group {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n}\n.pressure,\n.humidity,\n.wind-speed {\n  font-weight: bold;\n}\n.line {\n  border-bottom: 1px solid var(--line-color);\n}\n.bottom-wrapper {\n  display: flex;\n  padding: 10px 20px;\n  justify-content: space-between;\n  border-top: 1px solid var(--line-color);\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-focus);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n}\n.footer-link {\n  color: var(--font-color);\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n  color: var(--font-color);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,4CAA6C;EAC7C,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,2BAA2B;EAC3B,wBAAwB;EACxB,0BAA0B;EAC1B,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,oBAAoB;EACpB,2BAA2B;EAC3B,wBAAwB;EACxB,0BAA0B;EAC1B,mBAAmB;EACnB,qBAAqB;AACvB;AACA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yCAAyC;EACzC,wBAAwB;AAC1B;AACA,SAAS;AACT;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sCAAsC;EACtC,YAAY;EACZ,kBAAkB;EAClB,yDAAyD;EACzD,iDAAiD;AACnD;AACA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,yCAAyC;EACzC,yBAAyB;EACzB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,wBAAwB;AAC1B;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,eAAe;AACjB;AACA;;EAEE,eAAe;AACjB;AACA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,wCAAwC;EACxC,wDAAwD;EACxD,gDAAgD;EAChD,mCAAmC;EACnC,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,wCAAwC;EACxC,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,mCAAmC;EACnC,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sCAAsC;AACxC;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB;AACA,oBAAoB;AACpB;EACE,sCAAsC;EACtC,mBAAmB;EACnB,mCAAmC;EACnC,aAAa;EACb,YAAY;EACZ,aAAa;EACb,wDAAwD;EACxD,gDAAgD;AAClD;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,0CAA0C;AAC5C;AACA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,yCAAyC;EACzC,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;;;EAGE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;AACA;;;EAGE,iBAAiB;AACnB;AACA;EACE,0CAA0C;AAC5C;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;EAC9B,uCAAuC;AACzC;;AAEA,SAAS;AACT;EACE,sCAAsC;EACtC,yDAAyD;EACzD,iDAAiD;EACjD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,wBAAwB;AAC1B;AACA,oBAAoB;AACpB;;;EAGE,qBAAqB;AACvB;;AAEA;;EAEE,yBAAyB;EACzB,wBAAwB;AAC1B","sourcesContent":["@font-face {\n  font-family: \"Inder\";\n  src: url(/src/assets/Inder/Inder-Regular.ttf);\n  font-style: normal;\n}\n:root.Light {\n  font-family: \"Inder\";\n  --background-color: #f8e8e8;\n  --primary-focus: #f18282;\n  --secondary-focus: #fcbfbf;\n  --line-color: #b98585;\n  --font-color: black;\n}\n:root.Dark {\n  font-family: \"Inder\";\n  --background-color: #141414;\n  --primary-focus: #040608;\n  --secondary-focus: #212329;\n  --font-color: white;\n  --line-color: #121213;\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--font-color);\n}\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--primary-focus);\n  height: 10vh;\n  padding: 0px 100px;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n.logo {\n  color: var(--font-color);\n  font-size: 2rem;\n  font-weight: 500;\n}\ninput {\n  width: 300px;\n  height: 35px;\n  border-radius: 10px;\n  outline: none;\n  background-color: var(--background-color);\n  border-color: transparent;\n  padding: 0px 25px;\n  font-size: 1.1rem;\n  font-style: italic;\n}\n.units-handler {\n  font-size: 25px;\n}\n.units-handler:hover {\n  cursor: pointer;\n}\n.search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  color: var(--font-color);\n}\n.fa-magnifying-glass {\n  font-size: 20px;\n}\n.fa-moon {\n  display: none;\n  font-size: 20px;\n}\n.fa-moon:hover,\n.fa-lightbulb:hover {\n  cursor: pointer;\n}\n.fa-lightbulb {\n  display: block;\n  font-size: 20px;\n}\n.fa-magnifying-glass:hover {\n  cursor: pointer;\n}\n.right-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.social-link {\n  color: var(--font-color);\n  font-size: 1.3rem;\n}\n\n/*MAIN CONTENT*/\n.content {\n  padding: 0px 100px;\n  height: 85vh;\n  padding: 10px;\n}\n.js-current-content {\n  display: flex;\n  justify-content: center;\n}\n.title {\n  font-size: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0px;\n}\n.wrapping-bottom {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  background-color: var(--secondary-focus);\n  -webkit-box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  border: 1px solid var(--line-color);\n  border-radius: 10px;\n  padding: 0px 100px 25px 100px;\n}\n.js-forecast-content {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  background-color: var(--secondary-focus);\n  gap: 10px;\n  overflow: auto;\n}\n\n.forecast-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  border: 1px solid var(--line-color);\n  width: fit-content;\n  padding: 10px;\n  border-radius: 10px;\n  height: 200px;\n  background-color: var(--primary-focus);\n}\n.future-temp {\n  font-size: 24px;\n}\n.week-day {\n  font-size: 20px;\n}\n.future-icon {\n  width: 75px;\n  height: 75px;\n}\n.future-date {\n  font-size: 14px;\n  text-align: center;\n}\n.future-units {\n  font-size: 14px;\n}\n/*CURRENT INFO CARD*/\n.current-weather-info {\n  background-color: var(--primary-focus);\n  border-radius: 30px;\n  border: 1px solid var(--line-color);\n  padding: 20px;\n  width: 600px;\n  height: 350px;\n  -webkit-box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n}\n.top-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid var(--line-color);\n}\n.city-name {\n  font-size: 48px;\n  text-transform: capitalize;\n}\n\n.middle-wrapper {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.temperature-group {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  border-right: 1px solid var(--line-color);\n  padding: 20px;\n}\n.temp-wrapper {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.icon-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  align-items: center;\n}\n.fa-temperature-three-quarters {\n  font-size: 16px;\n}\n.state-description {\n  font-size: 16px;\n  align-self: center;\n  text-transform: capitalize;\n}\n.temp {\n  font-size: 86px;\n}\n.units {\n  font-size: 48px;\n}\n.right-content-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 10px 20px;\n}\n.pressure-group,\n.humidity-group,\n.wind-group {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n}\n.pressure,\n.humidity,\n.wind-speed {\n  font-weight: bold;\n}\n.line {\n  border-bottom: 1px solid var(--line-color);\n}\n.bottom-wrapper {\n  display: flex;\n  padding: 10px 20px;\n  justify-content: space-between;\n  border-top: 1px solid var(--line-color);\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-focus);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n}\n.footer-link {\n  color: var(--font-color);\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n  color: var(--font-color);\n}\n"],"sourceRoot":""}]);
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
let location = "bucharest";
let lat = "44.4361414";
let lon = "26.1027202";
let units = "metric";
let unitSymbol = "C";
let windUnit = "m/s";
let date;
let time;
let unix_timestamp;
// CURRENT WEATHER OBJECT
let currentObj = new _modules_weatherClass__WEBPACK_IMPORTED_MODULE_1__["default"]();

//API functions
async function requestCoord() {
  try {
    const response = await fetch(
      ` https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`,
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
  await requestCurrent();
  let date = new Date(unix_timestamp * 1000).toLocaleDateString("en-GB");
  let time = new Date(unix_timestamp * 1000).toLocaleTimeString("en-GB");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJKQUFzRDtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsMkJBQTJCLHlEQUF5RCx1QkFBdUIsR0FBRyxlQUFlLDJCQUEyQixnQ0FBZ0MsNkJBQTZCLCtCQUErQiwwQkFBMEIsd0JBQXdCLEdBQUcsY0FBYywyQkFBMkIsZ0NBQWdDLDZCQUE2QiwrQkFBK0Isd0JBQXdCLDBCQUEwQixHQUFHLDRCQUE0QiwyQkFBMkIsY0FBYyxlQUFlLEdBQUcsVUFBVSw4Q0FBOEMsNkJBQTZCLEdBQUcsdUJBQXVCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLDJDQUEyQyxpQkFBaUIsdUJBQXVCLDhEQUE4RCxzREFBc0QsR0FBRyxTQUFTLDZCQUE2QixvQkFBb0IscUJBQXFCLEdBQUcsU0FBUyxpQkFBaUIsaUJBQWlCLHdCQUF3QixrQkFBa0IsOENBQThDLDhCQUE4QixzQkFBc0Isc0JBQXNCLHVCQUF1QixHQUFHLGtCQUFrQixvQkFBb0IsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsV0FBVyxrQkFBa0IsNEJBQTRCLHdCQUF3QixjQUFjLDZCQUE2QixHQUFHLHdCQUF3QixvQkFBb0IsR0FBRyxZQUFZLGtCQUFrQixvQkFBb0IsR0FBRyx3Q0FBd0Msb0JBQW9CLEdBQUcsaUJBQWlCLG1CQUFtQixvQkFBb0IsR0FBRyw4QkFBOEIsb0JBQW9CLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLGdCQUFnQiw2QkFBNkIsc0JBQXNCLEdBQUcsZ0NBQWdDLHVCQUF1QixpQkFBaUIsa0JBQWtCLEdBQUcsdUJBQXVCLGtCQUFrQiw0QkFBNEIsR0FBRyxVQUFVLG9CQUFvQixrQkFBa0IsNEJBQTRCLHdCQUF3QixzQkFBc0IsR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQixxQkFBcUIsNkNBQTZDLDZEQUE2RCxxREFBcUQsd0NBQXdDLHdCQUF3QixrQ0FBa0MsR0FBRyx3QkFBd0Isa0JBQWtCLDBDQUEwQyw2Q0FBNkMsY0FBYyxtQkFBbUIsR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQix3QkFBd0Isa0NBQWtDLHdDQUF3Qyx1QkFBdUIsa0JBQWtCLHdCQUF3QixrQkFBa0IsMkNBQTJDLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsZ0JBQWdCLGdCQUFnQixpQkFBaUIsR0FBRyxnQkFBZ0Isb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQixvQkFBb0IsR0FBRyxnREFBZ0QsMkNBQTJDLHdCQUF3Qix3Q0FBd0Msa0JBQWtCLGlCQUFpQixrQkFBa0IsNkRBQTZELHFEQUFxRCxHQUFHLGdCQUFnQixrQkFBa0Isd0JBQXdCLDRCQUE0QiwrQ0FBK0MsR0FBRyxjQUFjLG9CQUFvQiwrQkFBK0IsR0FBRyxxQkFBcUIsa0JBQWtCLDBDQUEwQyxHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix1QkFBdUIsOENBQThDLGtCQUFrQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLDRCQUE0QixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLGNBQWMsd0JBQXdCLEdBQUcsa0NBQWtDLG9CQUFvQixHQUFHLHNCQUFzQixvQkFBb0IsdUJBQXVCLCtCQUErQixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsVUFBVSxvQkFBb0IsR0FBRywwQkFBMEIsa0JBQWtCLDJCQUEyQixrQ0FBa0MsdUJBQXVCLEdBQUcsbURBQW1ELGtCQUFrQixtQ0FBbUMsb0JBQW9CLEdBQUcsdUNBQXVDLHNCQUFzQixHQUFHLFNBQVMsK0NBQStDLEdBQUcsbUJBQW1CLGtCQUFrQix1QkFBdUIsbUNBQW1DLDRDQUE0QyxHQUFHLHdCQUF3QiwyQ0FBMkMsOERBQThELHNEQUFzRCxrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IsR0FBRyxnQkFBZ0IsNkJBQTZCLEdBQUcsa0RBQWtELDBCQUEwQixHQUFHLGdDQUFnQyw4QkFBOEIsNkJBQTZCLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQkFBb0IsRUFBRSxTQUFTO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEtBQUssSUFBSSxNQUFNO0FBQy9DLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDLHFDQUFxQyxJQUFJLElBQUksTUFBTTtBQUNuRDtBQUNBLCtDQUErQyxLQUFLO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLEtBQUs7QUFDNUMseUNBQXlDLFdBQVc7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvSW5kZXIvSW5kZXItUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kZXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG46cm9vdC5MaWdodCB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2Y4ZThlODtcXG4gIC0tcHJpbWFyeS1mb2N1czogI2YxODI4MjtcXG4gIC0tc2Vjb25kYXJ5LWZvY3VzOiAjZmNiZmJmO1xcbiAgLS1saW5lLWNvbG9yOiAjYjk4NTg1O1xcbiAgLS1mb250LWNvbG9yOiBibGFjaztcXG59XFxuOnJvb3QuRGFyayB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXG4gIC0tcHJpbWFyeS1mb2N1czogIzA0MDYwODtcXG4gIC0tc2Vjb25kYXJ5LWZvY3VzOiAjMjEyMzI5O1xcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcXG4gIC0tbGluZS1jb2xvcjogIzEyMTIxMztcXG59XFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbi8qSEVBREVSKi9cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1mb2N1cyk7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBwYWRkaW5nOiAwcHggMTAwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubG9nbyB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5pbnB1dCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi51bml0cy1oYW5kbGVyIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuLnVuaXRzLWhhbmRsZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbi5mYS1tYWduaWZ5aW5nLWdsYXNzIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmZhLW1vb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmZhLW1vb246aG92ZXIsXFxuLmZhLWxpZ2h0YnVsYjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mYS1saWdodGJ1bGIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5mYS1tYWduaWZ5aW5nLWdsYXNzOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnJpZ2h0LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5zb2NpYWwtbGluayB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLypNQUlOIENPTlRFTlQqL1xcbi5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIGhlaWdodDogODV2aDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5qcy1jdXJyZW50LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbn1cXG4ud3JhcHBpbmctYm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb2N1cyk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDBweCAxMDBweCAyNXB4IDEwMHB4O1xcbn1cXG4uanMtZm9yZWNhc3QtY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb2N1cyk7XFxuICBnYXA6IDEwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZm9jdXMpO1xcbn1cXG4uZnV0dXJlLXRlbXAge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ud2Vlay1kYXkge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uZnV0dXJlLWljb24ge1xcbiAgd2lkdGg6IDc1cHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcbi5mdXR1cmUtZGF0ZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mdXR1cmUtdW5pdHMge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4vKkNVUlJFTlQgSU5GTyBDQVJEKi9cXG4uY3VycmVudC13ZWF0aGVyLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1mb2N1cyk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4udG9wLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcXG59XFxuLmNpdHktbmFtZSB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLm1pZGRsZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG4udGVtcGVyYXR1cmUtZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLnRlbXAtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmljb24td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZmEtdGVtcGVyYXR1cmUtdGhyZWUtcXVhcnRlcnMge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uc3RhdGUtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbi50ZW1wIHtcXG4gIGZvbnQtc2l6ZTogODZweDtcXG59XFxuLnVuaXRzIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuLnJpZ2h0LWNvbnRlbnQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG4ucHJlc3N1cmUtZ3JvdXAsXFxuLmh1bWlkaXR5LWdyb3VwLFxcbi53aW5kLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5wcmVzc3VyZSxcXG4uaHVtaWRpdHksXFxuLndpbmQtc3BlZWQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5saW5lIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcXG59XFxuLmJvdHRvbS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XFxufVxcblxcbi8qRk9PVEVSKi9cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1mb2N1cyk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXZoO1xcbn1cXG4uZm9vdGVyLWxpbmsge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG4vKiBHTE9CQUwgU0VUVElOR1MgKi9cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuaW5wdXQ6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsNENBQTZDO0VBQzdDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFB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QUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCO0FBQ0E7OztFQUdFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjtBQUNBOzs7RUFHRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsdUNBQXVDO0FBQ3pDOztBQUVBLFNBQVM7QUFDVDtFQUNFLHNDQUFzQztFQUN0Qyx5REFBeUQ7RUFDekQsaURBQWlEO0VBQ2pELGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7RUFHRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kZXJcXFwiO1xcbiAgc3JjOiB1cmwoL3NyYy9hc3NldHMvSW5kZXIvSW5kZXItUmVndWxhci50dGYpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG46cm9vdC5MaWdodCB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2Y4ZThlODtcXG4gIC0tcHJpbWFyeS1mb2N1czogI2YxODI4MjtcXG4gIC0tc2Vjb25kYXJ5LWZvY3VzOiAjZmNiZmJmO1xcbiAgLS1saW5lLWNvbG9yOiAjYjk4NTg1O1xcbiAgLS1mb250LWNvbG9yOiBibGFjaztcXG59XFxuOnJvb3QuRGFyayB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXG4gIC0tcHJpbWFyeS1mb2N1czogIzA0MDYwODtcXG4gIC0tc2Vjb25kYXJ5LWZvY3VzOiAjMjEyMzI5O1xcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcXG4gIC0tbGluZS1jb2xvcjogIzEyMTIxMztcXG59XFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbi8qSEVBREVSKi9cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1mb2N1cyk7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBwYWRkaW5nOiAwcHggMTAwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubG9nbyB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5pbnB1dCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi51bml0cy1oYW5kbGVyIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuLnVuaXRzLWhhbmRsZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbi5mYS1tYWduaWZ5aW5nLWdsYXNzIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmZhLW1vb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmZhLW1vb246aG92ZXIsXFxuLmZhLWxpZ2h0YnVsYjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mYS1saWdodGJ1bGIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5mYS1tYWduaWZ5aW5nLWdsYXNzOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnJpZ2h0LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5zb2NpYWwtbGluayB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLypNQUlOIENPTlRFTlQqL1xcbi5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDBweCAxMDBweDtcXG4gIGhlaWdodDogODV2aDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5qcy1jdXJyZW50LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbn1cXG4ud3JhcHBpbmctYm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb2N1cyk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDBweCAxMDBweCAyNXB4IDEwMHB4O1xcbn1cXG4uanMtZm9yZWNhc3QtY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1mb2N1cyk7XFxuICBnYXA6IDEwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmZvcmVjYXN0LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZm9jdXMpO1xcbn1cXG4uZnV0dXJlLXRlbXAge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ud2Vlay1kYXkge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uZnV0dXJlLWljb24ge1xcbiAgd2lkdGg6IDc1cHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxufVxcbi5mdXR1cmUtZGF0ZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mdXR1cmUtdW5pdHMge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4vKkNVUlJFTlQgSU5GTyBDQVJEKi9cXG4uY3VycmVudC13ZWF0aGVyLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1mb2N1cyk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4udG9wLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcXG59XFxuLmNpdHktbmFtZSB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLm1pZGRsZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG4udGVtcGVyYXR1cmUtZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLnRlbXAtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmljb24td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZmEtdGVtcGVyYXR1cmUtdGhyZWUtcXVhcnRlcnMge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uc3RhdGUtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbi50ZW1wIHtcXG4gIGZvbnQtc2l6ZTogODZweDtcXG59XFxuLnVuaXRzIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuLnJpZ2h0LWNvbnRlbnQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG4ucHJlc3N1cmUtZ3JvdXAsXFxuLmh1bWlkaXR5LWdyb3VwLFxcbi53aW5kLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5wcmVzc3VyZSxcXG4uaHVtaWRpdHksXFxuLndpbmQtc3BlZWQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5saW5lIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcXG59XFxuLmJvdHRvbS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XFxufVxcblxcbi8qRk9PVEVSKi9cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1mb2N1cyk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXZoO1xcbn1cXG4uZm9vdGVyLWxpbmsge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG4vKiBHTE9CQUwgU0VUVElOR1MgKi9cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuaW5wdXQ6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyQ2xhc3Mge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjb3VudHJ5LFxuICAgIHRlbXAsXG4gICAgcmVhbCxcbiAgICBwcmVzc3VyZSxcbiAgICBodW1pZGl0eSxcbiAgICB3aW5kU3BkLFxuICAgIHN0YXRlLFxuICAgIHN0YXRlRGVzY3JpcHRpb25cbiAgKSB7XG4gICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICB0aGlzLnRlbXAgPSB0ZW1wO1xuICAgIHRoaXMucmVhbCA9IHJlYWw7XG4gICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLndpbmRTcGQgPSB3aW5kU3BkO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnN0YXRlRGVzY3JpcHRpb24gPSBzdGF0ZURlc2NyaXB0aW9uO1xuICB9XG4gIHNldENvdW50cnkoY291bnRyeSkge1xuICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG4gIH1cbiAgc2V0VGVtcCh0ZW1wKSB7XG4gICAgdGhpcy50ZW1wID0gdGVtcDtcbiAgfVxuICBzZXRSZWFsKHJlYWwpIHtcbiAgICB0aGlzLnJlYWwgPSByZWFsO1xuICB9XG4gIHNldFByZXNzdXJlKHByZXNzdXJlKSB7XG4gICAgdGhpcy5wcmVzc3VyZSA9IHByZXNzdXJlO1xuICB9XG4gIHNldEh1bWlkaXR5KGh1bWlkaXR5KSB7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICB9XG4gIHNldFdpbmRTcGQod2luZFNwZCkge1xuICAgIHRoaXMud2luZFNwZCA9IHdpbmRTcGQ7XG4gIH1cbiAgc2V0U3RhdGUoc3RhdGUpe1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZVxuICB9XG4gIHNldFN0YXRlRGVzY3JpcHRpb24oc3RhdGVEZXNjcmlwdGlvbil7XG4gICAgdGhpcy5zdGF0ZURlc2NyaXB0aW9uID0gc3RhdGVEZXNjcmlwdGlvblxuICB9XG5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFdlYXRoZXJDbGFzcyBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXJDbGFzc1wiO1xuY29uc3QgQVBJX0tFWSA9IFwiZTI0MjczMjY4NGY2NGJmMTk3YzkyNWEwZjhhN2JlOThcIjtcblxuLy8gRE9NIFNFTEVDVE9SU1xuY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IHN1Ym1pdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLW1hZ25pZnlpbmctZ2xhc3NcIik7XG5jb25zdCB1bml0SGFuZGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudW5pdHMtaGFuZGxlclwiKTtcbi8vIFZBUklBQkxFU1xubGV0IGxvY2F0aW9uID0gXCJidWNoYXJlc3RcIjtcbmxldCBsYXQgPSBcIjQ0LjQzNjE0MTRcIjtcbmxldCBsb24gPSBcIjI2LjEwMjcyMDJcIjtcbmxldCB1bml0cyA9IFwibWV0cmljXCI7XG5sZXQgdW5pdFN5bWJvbCA9IFwiQ1wiO1xubGV0IHdpbmRVbml0ID0gXCJtL3NcIjtcbmxldCBkYXRlO1xubGV0IHRpbWU7XG5sZXQgdW5peF90aW1lc3RhbXA7XG4vLyBDVVJSRU5UIFdFQVRIRVIgT0JKRUNUXG5sZXQgY3VycmVudE9iaiA9IG5ldyBXZWF0aGVyQ2xhc3MoKTtcblxuLy9BUEkgZnVuY3Rpb25zXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Q29vcmQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mbGltaXQ9NSZhcHBpZD0ke0FQSV9LRVl9YCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBjb29yZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBsYXQgPSBjb29yZFswXS5sYXQ7XG4gICAgbG9uID0gY29vcmRbMF0ubG9uO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJvcn1gKTtcbiAgICBjbGVhcklucHV0KCk7XG4gICAgbG9jYXRpb24gPSBcImJ1Y2hhcmVzdFwiO1xuICB9XG59XG4vLyBBUEkgY3VycmVudCB3ZWF0aGVyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Q3VycmVudCgpIHtcbiAgYXdhaXQgcmVxdWVzdENvb3JkKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHtBUElfS0VZfWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgdW5peF90aW1lc3RhbXAgPSBjdXJyZW50V2VhdGhlci5kdDtcbiAgICBjdXJyZW50T2JqLnNldENvdW50cnkoY3VycmVudFdlYXRoZXIuc3lzLmNvdW50cnkpO1xuICAgIGN1cnJlbnRPYmouc2V0SHVtaWRpdHkoY3VycmVudFdlYXRoZXIubWFpbi5odW1pZGl0eSk7XG4gICAgY3VycmVudE9iai5zZXRQcmVzc3VyZShjdXJyZW50V2VhdGhlci5tYWluLnByZXNzdXJlKTtcbiAgICBjdXJyZW50T2JqLnNldFJlYWwoY3VycmVudFdlYXRoZXIubWFpbi5mZWVsc19saWtlKTtcbiAgICBjdXJyZW50T2JqLnNldFN0YXRlKGN1cnJlbnRXZWF0aGVyLndlYXRoZXJbMF0uaWNvbik7XG4gICAgY3VycmVudE9iai5zZXRTdGF0ZURlc2NyaXB0aW9uKGN1cnJlbnRXZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICAgIGN1cnJlbnRPYmouc2V0VGVtcChNYXRoLnJvdW5kKGN1cnJlbnRXZWF0aGVyLm1haW4udGVtcCAqIDEwKSAvIDEwKTtcbiAgICBjdXJyZW50T2JqLnNldFdpbmRTcGQoY3VycmVudFdlYXRoZXIud2luZC5zcGVlZCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycm9yfWApO1xuICB9XG59XG5cbi8vIHJlcXVlc3QgZnV0dXJlXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Rm9yZWNhc3QoKSB7XG4gIGF3YWl0IHJlcXVlc3RDb29yZCgpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke0FQSV9LRVl9YCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBmb3JlY2FzdC5saXN0Lmxlbmd0aDsgaSArPSA1KSB7XG4gICAgICBsZXQgdGVtcFRvRGlzcGxheSA9IE1hdGgucm91bmQoZm9yZWNhc3QubGlzdFtpXS5tYWluLnRlbXAgKiAxMCkgLyAxMDtcbiAgICAgIGxldCBzdGF0ZVRvRGlzcGxheSA9IGZvcmVjYXN0Lmxpc3RbaV0ud2VhdGhlclswXS5pY29uO1xuICAgICAgbGV0IHRpbWVVbml4ID0gZm9yZWNhc3QubGlzdFtpXS5kdDtcbiAgICAgIGxldCBmdWxsRGF0ZSA9IG5ldyBEYXRlKHRpbWVVbml4ICogMTAwMCk7XG4gICAgICBsZXQgd2Vla2RheSA9IG5ldyBEYXRlKHRpbWVVbml4ICogMTAwMCkuZ2V0RGF5KCk7XG4gICAgICBjb25zdCBvcHRpb25zID0geyB3ZWVrZGF5OiBcImxvbmdcIiB9O1xuICAgICAgbGV0IHdlZWtkYXlUb0Rpc3BsYXkgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIsIG9wdGlvbnMpLmZvcm1hdChcbiAgICAgICAgZnVsbERhdGVcbiAgICAgICk7XG4gICAgICBsZXQgZGF5VG9EaXNwbGF5ID0gbmV3IERhdGUodGltZVVuaXggKiAxMDAwKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1HQlwiKTtcbiAgICAgIGxldCB0aW1lVG9EaXNwbGF5ID0gbmV3IERhdGUodGltZVVuaXggKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1HQlwiKTtcbiAgICAgIGxldCBob3VyID0gbmV3IERhdGUodGltZVVuaXggKiAxMDAwKS5nZXRIb3VycygpO1xuICAgICAgcmVuZGVyRm9yZWNhc3QoXG4gICAgICAgIHdlZWtkYXlUb0Rpc3BsYXksXG4gICAgICAgIGRheVRvRGlzcGxheSxcbiAgICAgICAgdGltZVRvRGlzcGxheSxcbiAgICAgICAgc3RhdGVUb0Rpc3BsYXksXG4gICAgICAgIHRlbXBUb0Rpc3BsYXlcbiAgICAgICk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJvcn1gKTtcbiAgfVxufVxuXG4vLyBESVNQTEFZIENVUlJFTlRcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckN1cnJlbnQoKSB7XG4gIGF3YWl0IHJlcXVlc3RDdXJyZW50KCk7XG4gIGxldCBkYXRlID0gbmV3IERhdGUodW5peF90aW1lc3RhbXAgKiAxMDAwKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1HQlwiKTtcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSh1bml4X3RpbWVzdGFtcCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLUdCXCIpO1xuICBjb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY3VycmVudC1jb250ZW50XCIpO1xuICBjdXJyZW50Q29udGVudC5pbm5lckhUTUwgPSBgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXdlYXRoZXItaW5mb1wiPlxuICA8ZGl2IGNsYXNzPVwidG9wLXdyYXBwZXJcIj5cbiAgICA8aW1nXG4gICAgICBzcmM9XCJodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtjdXJyZW50T2JqLnN0YXRlfUAyeC5wbmdcIlxuICAgICAgYWx0PVwiaW1hZ2Ugb2Ygc3RhdGUgb2YgY3VycmVudCB3ZWF0aGVyXCJcbiAgICAgIGNsYXNzPVwic3RhdGVcIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzcz1cImNpdHktbmFtZVwiPiR7bG9jYXRpb259PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibWlkZGxlLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGVtcGVyYXR1cmUtZ3JvdXBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBcIj4ke2N1cnJlbnRPYmoudGVtcH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVuaXRzXCI+wrAke3VuaXRTeW1ib2x9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uLXdyYXBwZXJcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10ZW1wZXJhdHVyZS1xdWFydGVyXCI+PC9pPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGUtZGVzY3JpcHRpb25cIj4ke2N1cnJlbnRPYmouc3RhdGVEZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcmVzc3VyZS1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi13cmFwcGVyXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtYmFyc1wiPjwvaT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc3N1cmUtdGl0bGVcIj5QcmVzc3VyZTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXNzdXJlXCI+JHtjdXJyZW50T2JqLnByZXNzdXJlfSBoUGE8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJodW1pZGl0eS1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1kcm9wbGV0XCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJodW1pZGl0eS10aXRsZVwiPkh1bWlkaXR5PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaHVtaWRpdHlcIj4ke2N1cnJlbnRPYmouaHVtaWRpdHl9ICU8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kLWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXdpbmRcIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmQtc3BlZWQtdGl0bGVcIj5XaW5kIFNwZWVkPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2luZC1zcGVlZFwiPiR7Y3VycmVudE9iai53aW5kU3BkfSAke3dpbmRVbml0fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYm90dG9tLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1kYXRlXCI+JHtkYXRlfSwgJHt0aW1lfSAoR01UKzIpPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvdW50cnlcIj4ke2N1cnJlbnRPYmouY291bnRyeX08L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gO1xufVxuLy8gQ1JFQVRFIE5FVyBDQVJEXG5mdW5jdGlvbiByZW5kZXJGb3JlY2FzdCh3ZWVrRGF5LCBkYXksIHRpbWUsIGljb24sIHRlbXApIHtcbiAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWZvcmVjYXN0LWNvbnRlbnRcIik7XG4gIGZvcmVjYXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gIDxkaXYgY2xhc3M9XCJmb3JlY2FzdC1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstZGF5XCI+JHt3ZWVrRGF5fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdXR1cmUtZGF0ZVwiPiR7ZGF5fSwgJHt0aW1lfSBHTVQrMjwvZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgIHNyYz1cImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ1wiXG4gICAgICBhbHQ9XCJpbWFnZSBvZiBzdGF0ZSBvZiBjdXJyZW50IHdlYXRoZXJcIlxuICAgICAgY2xhc3M9XCJmdXR1cmUtaWNvblwiXG4gICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnV0dXJlLXRlbXBcIj4ke3RlbXB9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnV0dXJlLXVuaXRzXCI+wrAke3VuaXRTeW1ib2x9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG59XG4vL0hBTkRMRSBDTEVBUklORyBGT1IgVU5JVCBTV0lUQ0hcbmNvbnN0IGNsZWFyQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZm9yZWNhc3QtY29udGVudFwiKTtcbiAgZm9yZWNhc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5jb25zdCBjbGVhcklucHV0ID0gKCkgPT4ge1xuICB1c2VySW5wdXQudmFsdWUgPSBcIlwiO1xufTtcbi8vQSBVU0VSIFdJTEwgU0VMRUNUIEEgTE9DQVRJT05cbmNvbnN0IHNldExvY2F0aW9uID0gKCkgPT4ge1xuICBsb2NhdGlvbiA9IHVzZXJJbnB1dC52YWx1ZTtcbiAgcmV0dXJuIGxvY2F0aW9uO1xufTtcblxuLy8gSEFORExFIEtFWVBSRVNTXG51c2VySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvY2F0aW9uKCk7XG4gICAgcmVuZGVyQ3VycmVudCgpO1xuICAgIGNsZWFyQ29udGFpbmVyKCk7XG4gICAgcmVxdWVzdEZvcmVjYXN0KCk7XG4gICAgY2xlYXJJbnB1dCgpO1xuICB9XG59KTtcblxuLy8gSEFORExFIFNVQk1JVCBCVVRUT05cbnN1Ym1pdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc2V0TG9jYXRpb24oKTtcbiAgcmVuZGVyQ3VycmVudCgpO1xuICBjbGVhckNvbnRhaW5lcigpO1xuICByZXF1ZXN0Rm9yZWNhc3QoKTtcbiAgY2xlYXJJbnB1dCgpO1xufSk7XG5cbi8vIEhBTkRMRSBVTklUUyBCVVRUT05TXG5jb25zdCB1cGRhdGVVbml0ID0gKCkgPT4ge1xuICBpZiAodW5pdEhhbmRsZXIudGV4dENvbnRlbnQgPT09IFwiwrBDXCIpIHtcbiAgICB1bml0cyA9IFwiaW1wZXJpYWxcIjtcbiAgICB1bml0U3ltYm9sID0gXCJGXCI7XG4gICAgd2luZFVuaXQgPSBcIm0vaFwiO1xuICAgIHVuaXRIYW5kbGVyLnRleHRDb250ZW50ID0gXCLCsEZcIjtcbiAgfSBlbHNlIGlmICh1bml0SGFuZGxlci50ZXh0Q29udGVudCA9PT0gXCLCsEZcIikge1xuICAgIHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgICB1bml0U3ltYm9sID0gXCJDXCI7XG4gICAgd2luZFVuaXQgPSBcIm0vc1wiO1xuICAgIHVuaXRIYW5kbGVyLnRleHRDb250ZW50ID0gXCLCsENcIjtcbiAgfVxufTtcbnVuaXRIYW5kbGVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHVwZGF0ZVVuaXQoKTtcbiAgcmVuZGVyQ3VycmVudCgpO1xuICBjbGVhckNvbnRhaW5lcigpO1xuICByZXF1ZXN0Rm9yZWNhc3QoKTtcbn07XG5cbi8vIEluaXRpYWxpemUgcHJvamVjdFxucmVuZGVyQ3VycmVudCgpO1xucmVxdWVzdEZvcmVjYXN0KCk7XG5cbmZ1bmN0aW9uIHNldFRoZW1lKCkge1xuICBjb25zdCBkYXJrQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYS1tb29uXCIpO1xuICBjb25zdCBsaWdodEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtbGlnaHRidWxiXCIpO1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBuZXdUaGVtZSA9IHJvb3QuY2xhc3NOYW1lID09PSBcIkRhcmtcIiA/IFwiTGlnaHRcIiA6IFwiRGFya1wiO1xuICByb290LmNsYXNzTmFtZSA9IG5ld1RoZW1lO1xuICBpZiAobmV3VGhlbWUgPT09IFwiRGFya1wiKSB7XG4gICAgZGFya0FjdGl2ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbGlnaHRBY3RpdmUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuICBpZiAobmV3VGhlbWUgPT09IFwiTGlnaHRcIikge1xuICAgIGRhcmtBY3RpdmUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBsaWdodEFjdGl2ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cbmNvbnN0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhlbWUtdG9nZ2xlXCIpO1xudG9nZ2xlQnRuLm9uY2xpY2sgPSBzZXRUaGVtZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==