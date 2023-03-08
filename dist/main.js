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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Inder\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-style: normal;\n}\n:root {\n  font-family: \"Inder\";\n  --background-color: #f8e8e8;\n  --primary-pink: #f18282;\n  --secondary-pink: #fcbfbf;\n  --font-color: black;\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--font-color);\n}\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--primary-pink);\n  height: 10vh;\n  padding: 0px 100px;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n.logo {\n  font-size: 2rem;\n  font-weight: 800;\n}\ninput {\n  width: 300px;\n  height: 35px;\n  border-radius: 20px;\n  outline: none;\n  background-color: var(--background-color);\n  border-color: transparent;\n  padding: 0px 25px;\n  font-size: 1.1rem;\n  font-style: italic;\n}\n.units-handler{\n  font-size: 25px;\n}\n.units-handler:hover{\n  cursor: pointer;\n}\n.search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n}\n.fa-magnifying-glass {\n  font-size: 25px;\n}\n.fa-magnifying-glass:hover{\n  cursor: pointer;\n}\n.social-link {\n  color: var(--font-color);\n  font-size: 1.3rem;\n}\n\n/*MAIN CONTENT*/\n.content {\n  padding: 0px 100px;\n  height: 85vh;\n  display: flex;\n  justify-content: center;\n  padding: 50px;\n}\n/*CURRENT INFO CARD*/\n.current-weather-info {\n  background-color: var(--secondary-pink);\n  border-radius: 30px;\n  border: 1px solid #b98585;\n  padding: 20px;\n  width: 600px;\n  height: 350px;\n  -webkit-box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n}\n.top-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #b98585;\n}\n.city-name {\n  font-size: 48px;\n  text-transform: capitalize;\n}\n\n.middle-wrapper {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.temperature-group {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  border-right: 1px solid #b98585;\n  padding: 20px;\n}\n.temp-wrapper {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.icon-wrapper{\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  align-items: center;\n}\n.fa-temperature-three-quarters{\n  font-size: 16px;\n}\n.state-description {\n  font-size: 16px;\n  align-self: center;\n  text-transform: capitalize;\n}\n.temp {\n  font-size: 86px;\n}\n.units {\n  font-size: 48px;\n}\n.right-content-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 10px 20px;\n}\n.pressure-group,\n.humidity-group,\n.wind-group {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n}\n.pressure,\n.humidity,\n.wind-speed {\n  font-weight: bold;\n}\n.line {\n  border-bottom: 1px solid #b98585;\n}\n.bottom-wrapper {\n  display: flex;\n  padding: 10px 20px;\n  justify-content: space-between;\n  border-top: 1px solid #b98585;\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-pink);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n}\n.footer-link {\n  color: var(--font-color);\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,4CAA6C;EAC7C,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,2BAA2B;EAC3B,uBAAuB;EACvB,yBAAyB;EACzB,mBAAmB;AACrB;AACA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yCAAyC;EACzC,wBAAwB;AAC1B;AACA,SAAS;AACT;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,qCAAqC;EACrC,YAAY;EACZ,kBAAkB;EAClB,yDAAyD;EACzD,iDAAiD;AACnD;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,yCAAyC;EACzC,yBAAyB;EACzB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA,eAAe;AACf;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,aAAa;AACf;AACA,oBAAoB;AACpB;EACE,uCAAuC;EACvC,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,wDAAwD;EACxD,gDAAgD;AAClD;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gCAAgC;AAClC;AACA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,+BAA+B;EAC/B,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;;;EAGE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;AACA;;;EAGE,iBAAiB;AACnB;AACA;EACE,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA,SAAS;AACT;EACE,qCAAqC;EACrC,yDAAyD;EACzD,iDAAiD;EACjD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,wBAAwB;AAC1B;AACA,oBAAoB;AACpB;;;EAGE,qBAAqB;AACvB;;AAEA;;EAEE,yBAAyB;AAC3B","sourcesContent":["@font-face {\n  font-family: \"Inder\";\n  src: url(/src/assets/Inder/Inder-Regular.ttf);\n  font-style: normal;\n}\n:root {\n  font-family: \"Inder\";\n  --background-color: #f8e8e8;\n  --primary-pink: #f18282;\n  --secondary-pink: #fcbfbf;\n  --font-color: black;\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--font-color);\n}\n/*HEADER*/\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--primary-pink);\n  height: 10vh;\n  padding: 0px 100px;\n  -webkit-box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n  box-shadow: 0px 5px 17px -6px rgba(0, 0, 0, 0.54);\n}\n.logo {\n  font-size: 2rem;\n  font-weight: 800;\n}\ninput {\n  width: 300px;\n  height: 35px;\n  border-radius: 20px;\n  outline: none;\n  background-color: var(--background-color);\n  border-color: transparent;\n  padding: 0px 25px;\n  font-size: 1.1rem;\n  font-style: italic;\n}\n.units-handler{\n  font-size: 25px;\n}\n.units-handler:hover{\n  cursor: pointer;\n}\n.search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n}\n.fa-magnifying-glass {\n  font-size: 25px;\n}\n.fa-magnifying-glass:hover{\n  cursor: pointer;\n}\n.social-link {\n  color: var(--font-color);\n  font-size: 1.3rem;\n}\n\n/*MAIN CONTENT*/\n.content {\n  padding: 0px 100px;\n  height: 85vh;\n  display: flex;\n  justify-content: center;\n  padding: 50px;\n}\n/*CURRENT INFO CARD*/\n.current-weather-info {\n  background-color: var(--secondary-pink);\n  border-radius: 30px;\n  border: 1px solid #b98585;\n  padding: 20px;\n  width: 600px;\n  height: 350px;\n  -webkit-box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 5px 18px -4px rgba(0, 0, 0, 0.5);\n}\n.top-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #b98585;\n}\n.city-name {\n  font-size: 48px;\n  text-transform: capitalize;\n}\n\n.middle-wrapper {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.temperature-group {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  border-right: 1px solid #b98585;\n  padding: 20px;\n}\n.temp-wrapper {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.icon-wrapper{\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  align-items: center;\n}\n.fa-temperature-three-quarters{\n  font-size: 16px;\n}\n.state-description {\n  font-size: 16px;\n  align-self: center;\n  text-transform: capitalize;\n}\n.temp {\n  font-size: 86px;\n}\n.units {\n  font-size: 48px;\n}\n.right-content-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding: 10px 20px;\n}\n.pressure-group,\n.humidity-group,\n.wind-group {\n  display: flex;\n  justify-content: space-between;\n  font-size: 16px;\n}\n.pressure,\n.humidity,\n.wind-speed {\n  font-weight: bold;\n}\n.line {\n  border-bottom: 1px solid #b98585;\n}\n.bottom-wrapper {\n  display: flex;\n  padding: 10px 20px;\n  justify-content: space-between;\n  border-top: 1px solid #b98585;\n}\n\n/*FOOTER*/\nfooter {\n  background-color: var(--primary-pink);\n  -webkit-box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px -5px 10px -4px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 5vh;\n}\n.footer-link {\n  color: var(--font-color);\n}\n/* GLOBAL SETTINGS */\na,\na:visited,\na:focus {\n  text-decoration: none;\n}\n\ninput:focus,\ninput:active {\n  border-color: transparent;\n}\n"],"sourceRoot":""}]);
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
// variables
let location = "galati";
let lat = "45.4338215";
let lon = "28.0549395";
let units = "metric";
let unitSymbol = "C";
let windUnit = "m/s";
// weather app class
let currentObj = new _modules_weatherClass__WEBPACK_IMPORTED_MODULE_1__["default"]();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msb0JBQW9CLEVBQUUsU0FBUztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlckNsYXNzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL0luZGVyL0luZGVyLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRlclxcXCI7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmOGU4ZTg7XFxuICAtLXByaW1hcnktcGluazogI2YxODI4MjtcXG4gIC0tc2Vjb25kYXJ5LXBpbms6ICNmY2JmYmY7XFxuICAtLWZvbnQtY29sb3I6IGJsYWNrO1xcbn1cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuLypIRUFERVIqL1xcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXBpbmspO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgcGFkZGluZzogMHB4IDEwMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLmxvZ28ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuaW5wdXQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwcHggMjVweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4udW5pdHMtaGFuZGxlcntcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuLnVuaXRzLWhhbmRsZXI6aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuLmZhLW1hZ25pZnlpbmctZ2xhc3Mge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4uZmEtbWFnbmlmeWluZy1nbGFzczpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNvY2lhbC1saW5rIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4vKk1BSU4gQ09OVEVOVCovXFxuLmNvbnRlbnQge1xcbiAgcGFkZGluZzogMHB4IDEwMHB4O1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNTBweDtcXG59XFxuLypDVVJSRU5UIElORk8gQ0FSRCovXFxuLmN1cnJlbnQtd2VhdGhlci1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1waW5rKTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjk4NTg1O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMThweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLnRvcC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I5ODU4NTtcXG59XFxuLmNpdHktbmFtZSB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLm1pZGRsZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG4udGVtcGVyYXR1cmUtZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiOTg1ODU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4udGVtcC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uaWNvbi13cmFwcGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZhLXRlbXBlcmF0dXJlLXRocmVlLXF1YXJ0ZXJze1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uc3RhdGUtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbi50ZW1wIHtcXG4gIGZvbnQtc2l6ZTogODZweDtcXG59XFxuLnVuaXRzIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuLnJpZ2h0LWNvbnRlbnQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG4ucHJlc3N1cmUtZ3JvdXAsXFxuLmh1bWlkaXR5LWdyb3VwLFxcbi53aW5kLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5wcmVzc3VyZSxcXG4uaHVtaWRpdHksXFxuLndpbmQtc3BlZWQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5saW5lIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjk4NTg1O1xcbn1cXG4uYm90dG9tLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjk4NTg1O1xcbn1cXG5cXG4vKkZPT1RFUiovXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3gtc2hhZG93OiAwcHggLTVweCAxMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXZoO1xcbn1cXG4uZm9vdGVyLWxpbmsge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG4vKiBHTE9CQUwgU0VUVElOR1MgKi9cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmZvY3VzIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuaW5wdXQ6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsNENBQTZDO0VBQzdDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBOzs7RUFHRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyx3QkFBd0I7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5REFBeUQ7RUFDekQsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBLGVBQWU7QUFDZjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7QUFDQSxvQkFBb0I7QUFDcEI7RUFDRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix3REFBd0Q7RUFDeEQsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUNBOzs7RUFHRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFDQTs7O0VBR0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLDZCQUE2QjtBQUMvQjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxxQ0FBcUM7RUFDckMseURBQXlEO0VBQ3pELGlEQUFpRDtFQUNqRCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBLG9CQUFvQjtBQUNwQjs7O0VBR0UscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kZXJcXFwiO1xcbiAgc3JjOiB1cmwoL3NyYy9hc3NldHMvSW5kZXIvSW5kZXItUmVndWxhci50dGYpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGVyXFxcIjtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2Y4ZThlODtcXG4gIC0tcHJpbWFyeS1waW5rOiAjZjE4MjgyO1xcbiAgLS1zZWNvbmRhcnktcGluazogI2ZjYmZiZjtcXG4gIC0tZm9udC1jb2xvcjogYmxhY2s7XFxufVxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG4vKkhFQURFUiovXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcGluayk7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBwYWRkaW5nOiAwcHggMTAwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDE3cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubG9nbyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5pbnB1dCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDBweCAyNXB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi51bml0cy1oYW5kbGVye1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4udW5pdHMtaGFuZGxlcjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4uZmEtbWFnbmlmeWluZy1nbGFzcyB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcbi5mYS1tYWduaWZ5aW5nLWdsYXNzOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc29jaWFsLWxpbmsge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi8qTUFJTiBDT05URU5UKi9cXG4uY29udGVudCB7XFxuICBwYWRkaW5nOiAwcHggMTAwcHg7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4O1xcbn1cXG4vKkNVUlJFTlQgSU5GTyBDQVJEKi9cXG4uY3VycmVudC13ZWF0aGVyLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXBpbmspO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOTg1ODU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4udG9wLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjk4NTg1O1xcbn1cXG4uY2l0eS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4ubWlkZGxlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcbi50ZW1wZXJhdHVyZS1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I5ODU4NTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi50ZW1wLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5pY29uLXdyYXBwZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZmEtdGVtcGVyYXR1cmUtdGhyZWUtcXVhcnRlcnN7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5zdGF0ZS1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuLnRlbXAge1xcbiAgZm9udC1zaXplOiA4NnB4O1xcbn1cXG4udW5pdHMge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG4ucmlnaHQtY29udGVudC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcbi5wcmVzc3VyZS1ncm91cCxcXG4uaHVtaWRpdHktZ3JvdXAsXFxuLndpbmQtZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnByZXNzdXJlLFxcbi5odW1pZGl0eSxcXG4ud2luZC1zcGVlZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmxpbmUge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiOTg1ODU7XFxufVxcbi5ib3R0b20td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiOTg1ODU7XFxufVxcblxcbi8qRk9PVEVSKi9cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1waW5rKTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IC01cHggMTBweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJveC1zaGFkb3c6IDBweCAtNXB4IDEwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1dmg7XFxufVxcbi5mb290ZXItbGluayB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbi8qIEdMT0JBTCBTRVRUSU5HUyAqL1xcbmEsXFxuYTp2aXNpdGVkLFxcbmE6Zm9jdXMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5pbnB1dDphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYXRoZXJDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvdW50cnksXG4gICAgdGVtcCxcbiAgICByZWFsLFxuICAgIHByZXNzdXJlLFxuICAgIGh1bWlkaXR5LFxuICAgIHdpbmRTcGQsXG4gICAgc3RhdGUsXG4gICAgc3RhdGVEZXNjcmlwdGlvblxuICApIHtcbiAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gICAgdGhpcy5yZWFsID0gcmVhbDtcbiAgICB0aGlzLnByZXNzdXJlID0gcHJlc3N1cmU7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICAgIHRoaXMud2luZFNwZCA9IHdpbmRTcGQ7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuc3RhdGVEZXNjcmlwdGlvbiA9IHN0YXRlRGVzY3JpcHRpb247XG4gIH1cbiAgc2V0Q291bnRyeShjb3VudHJ5KSB7XG4gICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgfVxuICBzZXRUZW1wKHRlbXApIHtcbiAgICB0aGlzLnRlbXAgPSB0ZW1wO1xuICB9XG4gIHNldFJlYWwocmVhbCkge1xuICAgIHRoaXMucmVhbCA9IHJlYWw7XG4gIH1cbiAgc2V0UHJlc3N1cmUocHJlc3N1cmUpIHtcbiAgICB0aGlzLnByZXNzdXJlID0gcHJlc3N1cmU7XG4gIH1cbiAgc2V0SHVtaWRpdHkoaHVtaWRpdHkpIHtcbiAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gIH1cbiAgc2V0V2luZFNwZCh3aW5kU3BkKSB7XG4gICAgdGhpcy53aW5kU3BkID0gd2luZFNwZDtcbiAgfVxuICBzZXRTdGF0ZShzdGF0ZSl7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlXG4gIH1cbiAgc2V0U3RhdGVEZXNjcmlwdGlvbihzdGF0ZURlc2NyaXB0aW9uKXtcbiAgICB0aGlzLnN0YXRlRGVzY3JpcHRpb24gPSBzdGF0ZURlc2NyaXB0aW9uXG4gIH1cblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgV2VhdGhlckNsYXNzIGZyb20gXCIuL21vZHVsZXMvd2VhdGhlckNsYXNzXCI7XG5jb25zdCBBUElfS0VZID0gXCJlMjQyNzMyNjg0ZjY0YmYxOTdjOTI1YTBmOGE3YmU5OFwiO1xuXG4vLyBET00gU0VMRUNUT1JTXG5jb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuY29uc3Qgc3VibWl0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtbWFnbmlmeWluZy1nbGFzc1wiKTtcbmNvbnN0IHVuaXRIYW5kbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bml0cy1oYW5kbGVyXCIpO1xuLy8gdmFyaWFibGVzXG5sZXQgbG9jYXRpb24gPSBcImdhbGF0aVwiO1xubGV0IGxhdCA9IFwiNDUuNDMzODIxNVwiO1xubGV0IGxvbiA9IFwiMjguMDU0OTM5NVwiO1xubGV0IHVuaXRzID0gXCJtZXRyaWNcIjtcbmxldCB1bml0U3ltYm9sID0gXCJDXCI7XG5sZXQgd2luZFVuaXQgPSBcIm0vc1wiO1xuLy8gd2VhdGhlciBhcHAgY2xhc3NcbmxldCBjdXJyZW50T2JqID0gbmV3IFdlYXRoZXJDbGFzcygpO1xuLy8gSW5pdGlhbGl6ZSBwcm9qZWN0XG5yZW5kZXJDdXJyZW50KCk7XG4vL0FQSSBmdW5jdGlvbnNcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RDb29yZCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYCBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmxpbWl0PTUmYXBwaWQ9JHtBUElfS0VZfWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgY29vcmQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgbGF0ID0gY29vcmRbMF0ubGF0O1xuICAgIGxvbiA9IGNvb3JkWzBdLmxvbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyb3J9YCk7XG4gIH1cbn1cbi8vIEFQSSBjdXJyZW50IHdlYXRoZXJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RDdXJyZW50KCkge1xuICBhd2FpdCByZXF1ZXN0Q29vcmQoKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke0FQSV9LRVl9YCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcik7XG4gICAgY3VycmVudE9iai5zZXRDb3VudHJ5KGN1cnJlbnRXZWF0aGVyLnN5cy5jb3VudHJ5KTtcbiAgICBjdXJyZW50T2JqLnNldEh1bWlkaXR5KGN1cnJlbnRXZWF0aGVyLm1haW4uaHVtaWRpdHkpO1xuICAgIGN1cnJlbnRPYmouc2V0UHJlc3N1cmUoY3VycmVudFdlYXRoZXIubWFpbi5wcmVzc3VyZSk7XG4gICAgY3VycmVudE9iai5zZXRSZWFsKGN1cnJlbnRXZWF0aGVyLm1haW4uZmVlbHNfbGlrZSk7XG4gICAgY3VycmVudE9iai5zZXRTdGF0ZShjdXJyZW50V2VhdGhlci53ZWF0aGVyWzBdLm1haW4pO1xuICAgIGN1cnJlbnRPYmouc2V0U3RhdGVEZXNjcmlwdGlvbihjdXJyZW50V2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgICBjdXJyZW50T2JqLnNldFRlbXAoY3VycmVudFdlYXRoZXIubWFpbi50ZW1wKTtcbiAgICBjdXJyZW50T2JqLnNldFdpbmRTcGQoY3VycmVudFdlYXRoZXIud2luZC5zcGVlZCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycm9yfWApO1xuICB9XG59XG4vLyBESVNQTEFZXG5hc3luYyBmdW5jdGlvbiByZW5kZXJDdXJyZW50KCkge1xuICBhd2FpdCByZXF1ZXN0Q29vcmQoKTtcbiAgYXdhaXQgcmVxdWVzdEN1cnJlbnQoKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXdlYXRoZXItaW5mb1wiPlxuICA8ZGl2IGNsYXNzPVwidG9wLXdyYXBwZXJcIj5cbiAgICA8aW1nXG4gICAgICBzcmM9XCIuL2Fzc2V0cy10ZW1wb3Jhcnkvc3VubnkucG5nXCJcbiAgICAgIGFsdD1cImltYWdlIG9mIHN0YXRlIG9mIGN1cnJlbnQgd2VhdGhlclwiXG4gICAgICBjbGFzcz1cInN0YXRlXCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJjaXR5LW5hbWVcIj4ke2xvY2F0aW9ufTwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1pZGRsZS13cmFwcGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRlbXBlcmF0dXJlLWdyb3VwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGVtcC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wXCI+JHtjdXJyZW50T2JqLnRlbXB9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1bml0c1wiPsKwJHt1bml0U3ltYm9sfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvbi13cmFwcGVyXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdGVtcGVyYXR1cmUtcXVhcnRlclwiPjwvaT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRlLWRlc2NyaXB0aW9uXCI+JHtjdXJyZW50T2JqLnN0YXRlRGVzY3JpcHRpb259PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29udGVudC13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJlc3N1cmUtZ3JvdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImljb24td3JhcHBlclwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZHJvcGxldFwiPjwvaT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc3N1cmUtdGl0bGVcIj5QcmVzc3VyZTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXNzdXJlXCI+JHtjdXJyZW50T2JqLnByZXNzdXJlfSBoUGE8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJodW1pZGl0eS1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1kcm9wbGV0XCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJodW1pZGl0eS10aXRsZVwiPkh1bWlkaXR5PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaHVtaWRpdHlcIj4ke2N1cnJlbnRPYmouaHVtaWRpdHl9ICU8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kLWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXdpbmRcIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmQtc3BlZWQtdGl0bGVcIj5XaW5kIFNwZWVkPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2luZC1zcGVlZFwiPiR7Y3VycmVudE9iai53aW5kU3BkfSAke3dpbmRVbml0fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYm90dG9tLXdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1kYXRlXCI+OCBNYXJjaCwgMjAyMzwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5XCI+JHtjdXJyZW50T2JqLmNvdW50cnl9PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YDtcbiAgY29uc29sZS5sb2coY3VycmVudE9iaik7XG4gIGNvbnNvbGUubG9nKGByZW5kZXJpbmcgZG9uZWApO1xufVxuXG4vL0EgVVNFUiBXSUxMIFNFTEVDVCBBIExPQ0FUSU9OXG5jb25zdCBzZXRMb2NhdGlvbiA9ICgpID0+IHtcbiAgbG9jYXRpb24gPSB1c2VySW5wdXQudmFsdWU7XG4gIHJldHVybiBsb2NhdGlvbjtcbn07XG5cbi8vIEhBTkRMRSBLRVlQUkVTU1xudXNlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2NhdGlvbigpO1xuICAgIHJlcXVlc3RDdXJyZW50KCk7XG4gICAgcmVuZGVyQ3VycmVudCgpO1xuICB9XG59KTtcblxuLy8gSEFORExFIFNVQk1JVCBCVVRUT05cbnN1Ym1pdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc2V0TG9jYXRpb24oKTtcbiAgcmVuZGVyQ3VycmVudCgpO1xufSk7XG5cbi8vIEhBTkRMRSBVTklUUyBCVVRUT05TXG5jb25zdCB1cGRhdGVVbml0ID0gKCkgPT4ge1xuICBpZiAodW5pdEhhbmRsZXIudGV4dENvbnRlbnQgPT09IFwiwrBDXCIpIHtcbiAgICB1bml0cyA9IFwiaW1wZXJpYWxcIjtcbiAgICB1bml0U3ltYm9sID0gXCJGXCI7XG4gICAgd2luZFVuaXQgPSBcIm0vaFwiXG4gICAgdW5pdEhhbmRsZXIudGV4dENvbnRlbnQgPSBcIsKwRlwiO1xuICB9IGVsc2UgaWYgKHVuaXRIYW5kbGVyLnRleHRDb250ZW50ID09PSBcIsKwRlwiKSB7XG4gICAgdW5pdHMgPSBcIm1ldHJpY1wiO1xuICAgIHVuaXRTeW1ib2wgPSBcIkNcIjtcbiAgICB3aW5kVW5pdCA9IFwibS9zXCJcbiAgICB1bml0SGFuZGxlci50ZXh0Q29udGVudCA9IFwiwrBDXCI7XG4gIH1cbn07XG51bml0SGFuZGxlci5vbmNsaWNrID0gKCkgPT4ge1xuICB1cGRhdGVVbml0KCk7XG4gIHJlbmRlckN1cnJlbnQoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=