/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/elements */ "./src/js/helpers/elements.js");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/functions */ "./src/js/helpers/functions.js");
/* harmony import */ var _controllers_ModeController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/ModeController */ "./src/js/controllers/ModeController.js");




var modeController = new _controllers_ModeController__WEBPACK_IMPORTED_MODULE_3__.default((0,_helpers_functions__WEBPACK_IMPORTED_MODULE_2__.getCurrentMode)(_helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.body));
modeController.set();
_helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.btn.addEventListener('click', function () {
  _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.body.classList.toggle('dark-mode');
  _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.btn.classList.add('disable');
  _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.layer.classList.remove('mode-no-transition');
  modeController.toggle(function () {
    return _helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.btn.classList.remove('disable');
  });
});

/***/ }),

/***/ "./src/js/controllers/ModeController.js":
/*!**********************************************!*\
  !*** ./src/js/controllers/ModeController.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModeController; }
/* harmony export */ });
/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elements */ "./src/js/helpers/elements.js");
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/functions */ "./src/js/helpers/functions.js");
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

    this.mode = mode;
    this.steps = ['mode-scale', 'mode-transition', 'mode-resize'];
    if (this.mode === 'dark') this.steps.reverse();
  }

  _createClass(ModeController, [{
    key: "set",
    value: function set() {
      if (this.mode === 'dark') return this.addClasses();
      this.removeClasses();
    }
  }, {
    key: "toggle",
    value: function toggle(callback) {
      var _this = this;

      _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.layer.classList.toggle(this.steps[0]);
      (0,_helpers_functions__WEBPACK_IMPORTED_MODULE_1__.transitionend)(_helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.layer, function () {
        _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.layer.classList.toggle(_this.steps[1]);
        _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.layer.classList.toggle(_this.steps[2]);

        _this.steps.reverse();

        callback();
      });
    }
  }, {
    key: "addClasses",
    value: function addClasses() {
      var _elms$layer$classList;

      (_elms$layer$classList = _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.layer.classList).add.apply(_elms$layer$classList, ['mode-no-transition'].concat(_toConsumableArray(this.steps)));
    }
  }, {
    key: "removeClasses",
    value: function removeClasses() {
      var _elms$layer$classList2;

      (_elms$layer$classList2 = _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.layer.classList).remove.apply(_elms$layer$classList2, _toConsumableArray(this.steps));
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
/*! export getCurrentMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transitionend [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transitionend": function() { return /* binding */ transitionend; },
/* harmony export */   "getCurrentMode": function() { return /* binding */ getCurrentMode; }
/* harmony export */ });
function transitionend(elm, callback) {
  elm.addEventListener('transitionend', function () {
    return callback();
  }, {
    once: true
  });
}
function getCurrentMode(elm) {
  return elm.classList.contains('dark-mode') ? 'dark' : '';
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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes mode {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes mode {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(3px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.mode-no-transition {\n  transition: none !important;\n}\n\n.mode-button {\n  border-radius: 50%;\n  bottom: 2vh;\n  cursor: pointer;\n  height: 50px;\n  position: absolute;\n  right: 2vw;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 50px;\n  z-index: 1000;\n}\n.mode-button:hover {\n  height: 55px;\n  transition: all 0.1s ease-out;\n  width: 55px;\n}\n.mode-button.mode-animation {\n  -webkit-animation: mode 1s ease-in-out infinite;\n          animation: mode 1s ease-in-out infinite;\n}\n.mode-button.flip-card {\n  background-color: transparent;\n  perspective: 1000px;\n}\n.mode-button.flip-card .flip-card-inner {\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 0.6s;\n  width: 100%;\n}\n.mode-button.flip-card .flip-card-front, .mode-button.flip-card .flip-card-back {\n  align-items: center;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-shadow: 0 0 4px #2980b9;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n}\n.mode-button.flip-card .flip-card-front {\n  background-color: #bbb;\n  border-radius: 50%;\n}\n.mode-button.flip-card .flip-card-back {\n  background-color: #2980b9;\n  border-radius: 50%;\n  transform: rotateY(180deg);\n}\n\n.mode-layer {\n  background-color: #000;\n  border-radius: 50%;\n  bottom: 2vh;\n  height: 50px;\n  mix-blend-mode: difference;\n  pointer-events: none;\n  position: fixed;\n  right: 2vw;\n  transform: scale(0);\n  transition: all 0.1s linear;\n  width: 50px;\n}\n.mode-layer.mode-scale {\n  transform: scale(2);\n}\n.mode-layer.mode-transition {\n  transition: all 0.5s linear;\n}\n.mode-layer.mode-resize {\n  height: 100%;\n  width: 100%;\n}\n\n.dark-mode .flip-card .flip-card-inner {\n  transform: rotateY(180deg);\n}", "",{"version":3,"sources":["webpack://./src/sass/mixin/_keyframes.scss","webpack://./src/sass/style.scss","webpack://./src/sass/layout/_variables.scss"],"names":[],"mappings":"AAAA;EACE;IACE,wBAAA;ECCF;EDEA;IACE,0BAAA;ECAF;EDGA;IACE,wBAAA;ECDF;AACF;ADVA;EACE;IACE,wBAAA;ECCF;EDEA;IACE,0BAAA;ECAF;EDGA;IACE,wBAAA;ECDF;AACF;AAPA;EACE,2BAAA;AASF;;AANA;EACE,kBAAA;EACA,WCHW;EDIX,eAAA;EACA,YCPW;EDQX,kBAAA;EACA,UCNU;EDOV,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,WCVU;EDWV,aAAA;AASF;AAPE;EACE,YAAA;EACA,6BAAA;EACA,WAAA;AASJ;AANE;EACE,+CAAA;UAAA,uCAAA;AAQJ;AALE;EACE,6BAAA;EACA,mBAAA;AAOJ;AAJE;EACE,YAAA;EACA,kBAAA;EACA,4BAAA;EACA,0BAAA;EACA,WAAA;AAMJ;AAHE;EAEE,mBAAA;EACA,mCAAA;UAAA,2BAAA;EACA,2BAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,kBAAA;EACA,WAAA;AAIJ;AADE;EACE,sBCnDiB;EDoDjB,kBAAA;AAGJ;AAAE;EACE,yBCzDgB;ED0DhB,kBAAA;EACA,0BAAA;AAEJ;;AAEA;EACE,sBClEmB;EDmEnB,kBAAA;EACA,WCzDa;ED0Db,YC5Da;ED6Db,0BAAA;EACA,oBAAA;EACA,eAAA;EACA,UC7DY;ED8DZ,mBAAA;EACA,2BAAA;EACA,WClEY;ADmEd;AACE;EACE,mBAAA;AACJ;AAEE;EACE,2BAAA;AAAJ;AAGE;EACE,YAAA;EACA,WAAA;AADJ;;AAME;EACE,0BAAA;AAHJ","sourcesContent":["@keyframes mode {\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(3px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n","@import './layout/variables';\n@import './mixin/keyframes';\n\n.mode-no-transition {\n  transition: none !important;\n}\n\n.mode-button {\n  border-radius: 50%;\n  bottom: $btn-bottom;\n  cursor: pointer;\n  height: $btn-height;\n  position: absolute;\n  right: $btn-right;\n  user-select: none;\n  width: $btn-width;\n  z-index: 1000;\n\n  &:hover {\n    height: $btn-height + 5px;\n    transition: all 0.1s ease-out;\n    width: $btn-width + 5px;\n  }\n\n  &.mode-animation {\n    animation: mode 1s ease-in-out infinite;\n  }\n\n  &.flip-card {\n    background-color: transparent;\n    perspective: 1000px;\n  }\n\n  &.flip-card .flip-card-inner {\n    height: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n    transition: transform 0.6s;\n    width: 100%;\n  }\n\n  &.flip-card .flip-card-front,\n  &.flip-card .flip-card-back {\n    align-items: center;\n    backface-visibility: hidden;\n    box-shadow: 0 0 4px #2980b9;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    position: absolute;\n    width: 100%;\n  }\n\n  &.flip-card .flip-card-front {\n    background-color: $btn-light-bg-color;\n    border-radius: 50%;\n  }\n\n  &.flip-card .flip-card-back {\n    background-color: $btn-dark-bg-color;\n    border-radius: 50%;\n    transform: rotateY(180deg);\n  }\n}\n\n.mode-layer {\n  background-color: $dark-mode-bg-color;\n  border-radius: 50%;\n  bottom: $layer-bottom;\n  height: $layer-height;\n  mix-blend-mode: difference;\n  pointer-events: none;\n  position: fixed;\n  right: $layer-right;\n  transform: scale(0);\n  transition: all $transition-scale-time linear;\n  width: $layer-width;\n\n  &.mode-scale {\n    transform: scale(2);\n  }\n\n  &.mode-transition {\n    transition: all $transition-width-time linear;\n  }\n\n  &.mode-resize {\n    height: 100%;\n    width: 100%;\n  }\n}\n\n.dark-mode {\n  .flip-card .flip-card-inner {\n    transform: rotateY(180deg);\n  }\n}\n\n","$dark-mode-bg-color: #000;\n\n$btn-dark-bg-color: #2980b9;\n$btn-light-bg-color: #bbb;\n$btn-height: 50px;\n$btn-width: 50px;\n$btn-bottom: 2vh;\n$btn-right: 2vw;\n\n$layer-height: 50px;\n$layer-width: 50px;\n$layer-bottom: 2vh;\n$layer-right: 2vw;\n\n$transition-width-time: 0.5s;\n$transition-scale-time: $transition-width-time / 5;\n"],"sourceRoot":""}]);
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

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
//# sourceMappingURL=dark-mode-light-mode.js.map