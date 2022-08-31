/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/elements */ "./src/js/helpers/elements.js");
/* harmony import */ var _controllers_ModeController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/ModeController */ "./src/js/controllers/ModeController.js");



var modeController = new _controllers_ModeController__WEBPACK_IMPORTED_MODULE_2__.default();
_helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.btn.addEventListener('click', function () {
  _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.body.classList.remove('no-transition');
  _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.btn.classList.add('disable');
  modeController.toggle(function () {
    _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.btn.classList.remove('disable');
  });
});

function run() {
  _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.body.classList.add('no-transition');
  modeController.run();
}

run();

/***/ }),

/***/ "./src/js/controllers/ModeController.js":
/*!**********************************************!*\
  !*** ./src/js/controllers/ModeController.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModeController; }
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/elements */ "./src/js/helpers/elements.js");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/functions */ "./src/js/helpers/functions.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ModeController = function () {
  function ModeController(mode) {
    _classCallCheck(this, ModeController);

    this.mode = mode || ModeController.getCurrentMode();
    this.steps = ['mode-scale', 'mode-transition', 'mode-resize'];
    if (this.mode === 'dark') this.steps.reverse();
  }

  _createClass(ModeController, [{
    key: "run",
    value: function run() {
      if (this.mode === 'dark') return this.addClasses();
      this.removeClasses();
    }
  }, {
    key: "toggle",
    value: function toggle(callback) {
      var _this = this;

      ModeController.setCookie();
      _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.body.classList.toggle('dark-mode');
      _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.layer.classList.toggle(this.steps[0]);
      (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.transitionend)(_helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.layer, function () {
        _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.layer.classList.toggle(_this.steps[1]);
        _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.layer.classList.toggle(_this.steps[2]);

        _this.steps.reverse();

        callback();
      });
    }
  }, {
    key: "addClasses",
    value: function addClasses() {
      var _elms$layer$classList;

      _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.body.classList.add('dark-mode');

      (_elms$layer$classList = _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.layer.classList).add.apply(_elms$layer$classList, _toConsumableArray(this.steps));
    }
  }, {
    key: "removeClasses",
    value: function removeClasses() {
      var _elms$layer$classList2;

      _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.body.classList.remove('dark-mode');

      (_elms$layer$classList2 = _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.layer.classList).remove.apply(_elms$layer$classList2, _toConsumableArray(this.steps));
    }
  }], [{
    key: "setCookie",
    value: function setCookie() {
      if (!js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get('mode')) return js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set('mode', true);
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default().remove('mode');
    }
  }, {
    key: "getCurrentMode",
    value: function getCurrentMode() {
      if ((0,_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.hasBodyDarkMode)(_helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.body)) return 'dark';
      return js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get('mode') ? 'dark' : '';
    }
  }]);

  return ModeController;
}();



/***/ }),

/***/ "./src/js/helpers/elements.js":
/*!************************************!*\
  !*** ./src/js/helpers/elements.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  body: document.querySelector('body'),
  layer: document.querySelector('.mode-layer'),
  btn: document.querySelector('.mode-button')
});

/***/ }),

/***/ "./src/js/helpers/functions.js":
/*!*************************************!*\
  !*** ./src/js/helpers/functions.js ***!
  \*************************************/
/*! namespace exports */
/*! export hasBodyDarkMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transitionend [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transitionend": function() { return /* binding */ transitionend; },
/* harmony export */   "hasBodyDarkMode": function() { return /* binding */ hasBodyDarkMode; }
/* harmony export */ });
function transitionend(elm, callback) {
  elm.addEventListener('transitionend', function () {
    return callback();
  }, {
    once: true
  });
}
function hasBodyDarkMode(elm) {
  return elm.classList.contains('dark-mode') ? true : '';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \****************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.*, module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes mode {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes mode {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.no-transition .mode-layer,\n.no-transition .mode-button .flip-card-inner {\n  transition: none !important;\n}\n\n.mode-button {\n  border-radius: 50%;\n  bottom: 2vh;\n  cursor: pointer;\n  height: 50px;\n  position: absolute;\n  right: 2vw;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 50px;\n  z-index: 1000;\n}\n.mode-button:hover {\n  height: 55px;\n  transition: all 0.1s ease-out;\n  width: 55px;\n}\n.mode-button.mode-animation {\n  -webkit-animation: mode 1s ease-in-out infinite;\n          animation: mode 1s ease-in-out infinite;\n}\n.mode-button.flip-card {\n  background-color: transparent;\n  perspective: 1000px;\n}\n.mode-button.flip-card .flip-card-inner {\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 0.6s;\n  width: 100%;\n}\n.mode-button.no-transition.flip-card .flip-card-inner {\n  transition: none !important;\n}\n.mode-button.flip-card .flip-card-front, .mode-button.flip-card .flip-card-back {\n  align-items: center;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-shadow: 0 0 4px #2980b9;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n}\n.mode-button.flip-card .flip-card-front {\n  background-color: #bbb;\n  border-radius: 50%;\n}\n.mode-button.flip-card .flip-card-back {\n  background-color: #2980b9;\n  border-radius: 50%;\n  transform: rotateY(180deg);\n}\n.mode-button.disable {\n  pointer-events: none;\n}\n\n.mode-layer {\n  background-color: #000;\n  border-radius: 50%;\n  bottom: 2vh;\n  height: 50px;\n  mix-blend-mode: difference;\n  pointer-events: none;\n  position: fixed;\n  right: 2vw;\n  transform: scale(0);\n  transition: all 0.1s linear;\n  width: 50px;\n}\n.mode-layer.mode-scale {\n  transform: scale(2);\n}\n.mode-layer.mode-transition {\n  transition: all 0.5s linear;\n}\n.mode-layer.mode-resize {\n  height: 100%;\n  width: 100%;\n}\n\n.dark-mode .flip-card .flip-card-inner {\n  transform: rotateY(180deg);\n}", "",{"version":3,"sources":["webpack://./src/sass/mixin/_keyframes.scss","webpack://./src/sass/style.scss","webpack://./src/sass/layout/_variables.scss"],"names":[],"mappings":"AAAA;EACE;IACE,wBAAA;ECCF;EDEA;IACE,0BAAA;ECAF;EDGA;IACE,wBAAA;ECDF;AACF;ADVA;EACE;IACE,wBAAA;ECCF;EDEA;IACE,0BAAA;ECAF;EDGA;IACE,wBAAA;ECDF;AACF;AANE;;EAEE,2BAAA;AAQJ;;AAJA;EACE,kBAAA;EACA,WCNW;EDOX,eAAA;EACA,YCVW;EDWX,kBAAA;EACA,UCTU;EDUV,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,WCbU;EDcV,aAAA;AAOF;AALE;EACE,YAAA;EACA,6BAAA;EACA,WAAA;AAOJ;AAJE;EACE,+CAAA;UAAA,uCAAA;AAMJ;AAHE;EACE,6BAAA;EACA,mBAAA;AAKJ;AAFE;EACE,YAAA;EACA,kBAAA;EACA,4BAAA;EACA,0BAAA;EACA,WAAA;AAIJ;AADE;EACE,2BAAA;AAGJ;AAAE;EAEE,mBAAA;EACA,mCAAA;UAAA,2BAAA;EACA,2BAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,kBAAA;EACA,WAAA;AACJ;AAEE;EACE,sBC1DiB;ED2DjB,kBAAA;AAAJ;AAGE;EACE,yBChEgB;EDiEhB,kBAAA;EACA,0BAAA;AADJ;AAIE;EACE,oBAAA;AAFJ;;AAMA;EACE,sBC7EmB;ED8EnB,kBAAA;EACA,WCpEa;EDqEb,YCvEa;EDwEb,0BAAA;EACA,oBAAA;EACA,eAAA;EACA,UCxEY;EDyEZ,mBAAA;EACA,2BAAA;EACA,WC7EY;AD0Ed;AAKE;EACE,mBAAA;AAHJ;AAME;EACE,2BAAA;AAJJ;AAOE;EACE,YAAA;EACA,WAAA;AALJ;;AAUE;EACE,0BAAA;AAPJ","sourcesContent":["@keyframes mode {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  50% {\r\n    transform: translateY(3px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n","@import './layout/variables';\r\n@import './mixin/keyframes';\r\n\r\n.no-transition {\r\n  .mode-layer,\r\n  .mode-button .flip-card-inner {\r\n    transition: none !important;\r\n  }\r\n}\r\n\r\n.mode-button {\r\n  border-radius: 50%;\r\n  bottom: $btn-bottom;\r\n  cursor: pointer;\r\n  height: $btn-height;\r\n  position: absolute;\r\n  right: $btn-right;\r\n  user-select: none;\r\n  width: $btn-width;\r\n  z-index: 1000;\r\n\r\n  &:hover {\r\n    height: $btn-height + 5px;\r\n    transition: all 0.1s ease-out;\r\n    width: $btn-width + 5px;\r\n  }\r\n\r\n  &.mode-animation {\r\n    animation: mode 1s ease-in-out infinite;\r\n  }\r\n\r\n  &.flip-card {\r\n    background-color: transparent;\r\n    perspective: 1000px;\r\n  }\r\n\r\n  &.flip-card .flip-card-inner {\r\n    height: 100%;\r\n    position: relative;\r\n    transform-style: preserve-3d;\r\n    transition: transform 0.6s;\r\n    width: 100%;\r\n  }\r\n\r\n  &.no-transition.flip-card .flip-card-inner {\r\n    transition: none !important;\r\n  }\r\n\r\n  &.flip-card .flip-card-front,\r\n  &.flip-card .flip-card-back {\r\n    align-items: center;\r\n    backface-visibility: hidden;\r\n    box-shadow: 0 0 4px #2980b9;\r\n    display: flex;\r\n    height: 100%;\r\n    justify-content: center;\r\n    position: absolute;\r\n    width: 100%;\r\n  }\r\n\r\n  &.flip-card .flip-card-front {\r\n    background-color: $btn-light-bg-color;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  &.flip-card .flip-card-back {\r\n    background-color: $btn-dark-bg-color;\r\n    border-radius: 50%;\r\n    transform: rotateY(180deg);\r\n  }\r\n\r\n  &.disable {\r\n    pointer-events: none;\r\n  }\r\n}\r\n\r\n.mode-layer {\r\n  background-color: $dark-mode-bg-color;\r\n  border-radius: 50%;\r\n  bottom: $layer-bottom;\r\n  height: $layer-height;\r\n  mix-blend-mode: difference;\r\n  pointer-events: none;\r\n  position: fixed;\r\n  right: $layer-right;\r\n  transform: scale(0);\r\n  transition: all $transition-scale-time linear;\r\n  width: $layer-width;\r\n\r\n  &.mode-scale {\r\n    transform: scale(2);\r\n  }\r\n\r\n  &.mode-transition {\r\n    transition: all $transition-width-time linear;\r\n  }\r\n\r\n  &.mode-resize {\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.dark-mode {\r\n  .flip-card .flip-card-inner {\r\n    transform: rotateY(180deg);\r\n  }\r\n}\r\n\r\n","$dark-mode-bg-color: #000;\r\n\r\n$btn-dark-bg-color: #2980b9;\r\n$btn-light-bg-color: #bbb;\r\n$btn-height: 50px;\r\n$btn-width: 50px;\r\n$btn-bottom: 2vh;\r\n$btn-right: 2vw;\r\n\r\n$layer-height: 50px;\r\n$layer-width: 50px;\r\n$layer-bottom: 2vh;\r\n$layer-right: 2vw;\r\n\r\n$transition-width-time: 0.5s;\r\n$transition-scale-time: $transition-width-time / 5;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ (function(module) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, __webpack_exports__ */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=index.js.map