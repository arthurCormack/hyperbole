module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/A/index.js":
/*!***********************************!*\
  !*** ./app/components/A/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * A link to a certain page, an anchor tag\n */\n\nvar A = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({\n  displayName: \"A\",\n  componentId: \"ava8wy-0\"\n})([\"color:#41addd;&:hover{color:#6cc0e5;}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (A);\n\n//# sourceURL=webpack:///./app/components/A/index.js?");

/***/ }),

/***/ "./app/components/Footer/Wrapper.js":
/*!******************************************!*\
  !*** ./app/components/Footer/Wrapper.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({\n  displayName: \"Wrapper\",\n  componentId: \"sc-1n4lelx-0\"\n})([\"display:flex;justify-content:space-between;padding:3em 0;border-top:1px solid #666;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\n//# sourceURL=webpack:///./app/components/Footer/Wrapper.js?");

/***/ }),

/***/ "./app/components/Footer/index.js":
/*!****************************************!*\
  !*** ./app/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_A__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/A */ \"./app/components/A/index.js\");\n/* harmony import */ var containers_LocaleToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/LocaleToggle */ \"./app/containers/LocaleToggle/index.js\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Wrapper */ \"./app/components/Footer/Wrapper.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ \"./app/components/Footer/messages.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\nfunction Footer() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_5__[\"default\"].licenseMessage)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(containers_LocaleToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_5__[\"default\"].authorMessage, {\n    values: {\n      author: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_A__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: \"https://twitter.com/arthurcormack\"\n      }, \"Arthur Cormack\")\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./app/components/Footer/index.js?");

/***/ }),

/***/ "./app/components/Footer/messages.js":
/*!*******************************************!*\
  !*** ./app/components/Footer/messages.js ***!
  \*******************************************/
/*! exports provided: scope, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scope\", function() { return scope; });\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Footer Messages\n *\n * This contains all the text for the Footer component.\n */\n\nvar scope = 'boilerplate.components.Footer';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"defineMessages\"])({\n  licenseMessage: {\n    id: \"\".concat(scope, \".license.message\"),\n    defaultMessage: 'This project is licensed under the MIT license.'\n  },\n  authorMessage: {\n    id: \"\".concat(scope, \".author.message\"),\n    defaultMessage: \"\\n      Made with love by {author}.\\n    \"\n  }\n}));\n\n//# sourceURL=webpack:///./app/components/Footer/messages.js?");

/***/ }),

/***/ "./app/components/H1/index.js":
/*!************************************!*\
  !*** ./app/components/H1/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar H1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"H1\",\n  componentId: \"sc-1havwir-0\"\n})([\"font-size:2em;margin-bottom:0.25em;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (H1);\n\n//# sourceURL=webpack:///./app/components/H1/index.js?");

/***/ }),

/***/ "./app/components/H2/index.js":
/*!************************************!*\
  !*** ./app/components/H2/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar H2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({\n  displayName: \"H2\",\n  componentId: \"sc-1c6anm1-0\"\n})([\"font-size:1.5em;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (H2);\n\n//# sourceURL=webpack:///./app/components/H2/index.js?");

/***/ }),

/***/ "./app/components/Header/A.js":
/*!************************************!*\
  !*** ./app/components/Header/A.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_A__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/A */ \"./app/components/A/index.js\");\n\n\nvar A = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(components_A__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).withConfig({\n  displayName: \"A\",\n  componentId: \"qxiah2-0\"\n})([\"padding:2em 0;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (A);\n\n//# sourceURL=webpack:///./app/components/Header/A.js?");

/***/ }),

/***/ "./app/components/Header/HeaderLink.js":
/*!*********************************************!*\
  !*** ./app/components/Header/HeaderLink.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Link\"]).withConfig({\n  displayName: \"HeaderLink\",\n  componentId: \"sc-1p82ymj-0\"\n})([\"display:inline-flex;padding:0.25em 2em;margin:1em;text-decoration:none;border-radius:4px;-webkit-font-smoothing:antialiased;-webkit-touch-callout:none;user-select:none;cursor:pointer;outline:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:bold;font-size:16px;border:2px solid #41addd;color:#41addd;&:active{background:#41addd;color:#fff;}\"]));\n\n//# sourceURL=webpack:///./app/components/Header/HeaderLink.js?");

/***/ }),

/***/ "./app/components/Header/Img.js":
/*!**************************************!*\
  !*** ./app/components/Header/Img.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Img */ \"./app/components/Img/index.js\");\n\n\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(components_Img__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).withConfig({\n  displayName: \"Img\",\n  componentId: \"sc-1cjnm42-0\"\n})([\"width:100%;margin:0 auto;display:block;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Img);\n\n//# sourceURL=webpack:///./app/components/Header/Img.js?");

/***/ }),

/***/ "./app/components/Header/NavBar.js":
/*!*****************************************!*\
  !*** ./app/components/Header/NavBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"NavBar\",\n  componentId: \"mognzh-0\"\n})([\"text-align:center;\"]));\n\n//# sourceURL=webpack:///./app/components/Header/NavBar.js?");

/***/ }),

/***/ "./app/components/Header/banner.jpg":
/*!******************************************!*\
  !*** ./app/components/Header/banner.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"46c101dc585f1493994a4647acfe471d.jpg\";\n\n//# sourceURL=webpack:///./app/components/Header/banner.jpg?");

/***/ }),

/***/ "./app/components/Header/index.js":
/*!****************************************!*\
  !*** ./app/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _A__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./A */ \"./app/components/Header/A.js\");\n/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Img */ \"./app/components/Header/Img.js\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBar */ \"./app/components/Header/NavBar.js\");\n/* harmony import */ var _HeaderLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderLink */ \"./app/components/Header/HeaderLink.js\");\n/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner.jpg */ \"./app/components/Header/banner.jpg\");\n/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_banner_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ \"./app/components/Header/messages.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n/* eslint-disable react/prefer-stateless-function */\n\nvar Header =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Header, _React$Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_A__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: \"https://twitter.com/mxstbr\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Img__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        src: _banner_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,\n        alt: \"react-boilerplate - Logo\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        to: \"/\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_7__[\"default\"].home)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeaderLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        to: \"/features\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_7__[\"default\"].features))));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./app/components/Header/index.js?");

/***/ }),

/***/ "./app/components/Header/messages.js":
/*!*******************************************!*\
  !*** ./app/components/Header/messages.js ***!
  \*******************************************/
/*! exports provided: scope, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scope\", function() { return scope; });\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * HomePage Messages\n *\n * This contains all the text for the HomePage component.\n */\n\nvar scope = 'boilerplate.components.Header';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"defineMessages\"])({\n  home: {\n    id: \"\".concat(scope, \".home\"),\n    defaultMessage: 'Home'\n  },\n  features: {\n    id: \"\".concat(scope, \".features\"),\n    defaultMessage: 'Features'\n  }\n}));\n\n//# sourceURL=webpack:///./app/components/Header/messages.js?");

/***/ }),

/***/ "./app/components/Img/index.js":
/*!*************************************!*\
  !*** ./app/components/Img/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/**\n *\n * Img.js\n *\n * Renders an image, enforcing the usage of the alt=\"\" tag\n */\n\n\n\nfunction Img(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: props.className,\n    src: props.src,\n    alt: props.alt\n  });\n} // We require the use of src and alt, only enforced by react in dev mode\n\n\nImg.propTypes = {\n  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired,\n  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Img);\n\n//# sourceURL=webpack:///./app/components/Img/index.js?");

/***/ }),

/***/ "./app/components/IssueIcon/index.js":
/*!*******************************************!*\
  !*** ./app/components/IssueIcon/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction IssueIcon(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    height: \"1em\",\n    width: \"0.875em\",\n    className: props.className\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z\"\n  }));\n}\n\nIssueIcon.propTypes = {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (IssueIcon);\n\n//# sourceURL=webpack:///./app/components/IssueIcon/index.js?");

/***/ }),

/***/ "./app/components/List/Ul.js":
/*!***********************************!*\
  !*** ./app/components/List/Ul.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Ul = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({\n  displayName: \"Ul\",\n  componentId: \"sc-7nnrkc-0\"\n})([\"list-style:none;margin:0;width:100%;max-height:30em;overflow-y:auto;padding:0 1em;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ul);\n\n//# sourceURL=webpack:///./app/components/List/Ul.js?");

/***/ }),

/***/ "./app/components/List/Wrapper.js":
/*!****************************************!*\
  !*** ./app/components/List/Wrapper.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Wrapper\",\n  componentId: \"sc-1jp8qdc-0\"\n})([\"padding:0;margin:0;width:100%;background-color:white;border:1px solid #ccc;border-radius:3px;overflow:hidden;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\n//# sourceURL=webpack:///./app/components/List/Wrapper.js?");

/***/ }),

/***/ "./app/components/List/index.js":
/*!**************************************!*\
  !*** ./app/components/List/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Ul__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ul */ \"./app/components/List/Ul.js\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Wrapper */ \"./app/components/List/Wrapper.js\");\n\n\n\n\n\nfunction List(props) {\n  var ComponentToRender = props.component;\n  var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null); // If we have items, render them\n\n  if (props.items) {\n    content = props.items.map(function (item) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentToRender, {\n        key: \"item-\".concat(item.id),\n        item: item\n      });\n    });\n  } else {\n    // Otherwise render a single component\n    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentToRender, null);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ul__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, content));\n}\n\nList.propTypes = {\n  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./app/components/List/index.js?");

/***/ }),

/***/ "./app/components/ListItem/Item.js":
/*!*****************************************!*\
  !*** ./app/components/ListItem/Item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Item\",\n  componentId: \"sc-1p2jg1k-0\"\n})([\"display:flex;justify-content:space-between;width:100%;height:100%;align-items:center;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\n\n//# sourceURL=webpack:///./app/components/ListItem/Item.js?");

/***/ }),

/***/ "./app/components/ListItem/Wrapper.js":
/*!********************************************!*\
  !*** ./app/components/ListItem/Wrapper.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({\n  displayName: \"Wrapper\",\n  componentId: \"sc-18y6uxs-0\"\n})([\"width:100%;height:3em;display:flex;align-items:center;position:relative;border-top:1px solid #eee;&:first-child{border-top:none;}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\n//# sourceURL=webpack:///./app/components/ListItem/Wrapper.js?");

/***/ }),

/***/ "./app/components/ListItem/index.js":
/*!******************************************!*\
  !*** ./app/components/ListItem/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ \"./app/components/ListItem/Item.js\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Wrapper */ \"./app/components/ListItem/Wrapper.js\");\n\n\n\n\n\nfunction ListItem(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, props.item));\n}\n\nListItem.propTypes = {\n  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItem);\n\n//# sourceURL=webpack:///./app/components/ListItem/index.js?");

/***/ }),

/***/ "./app/components/LoadingIndicator/Circle.js":
/*!***************************************************!*\
  !*** ./app/components/LoadingIndicator/Circle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar circleFadeDelay = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])([\"0%,39%,100%{opacity:0;}40%{opacity:1;}\"]);\n\nvar Circle = function Circle(props) {\n  var CirclePrimitive = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({\n    displayName: \"Circle__CirclePrimitive\",\n    componentId: \"bghpoa-0\"\n  })([\"width:100%;height:100%;position:absolute;left:0;top:0;\", \" &:before{content:'';display:block;margin:0 auto;width:15%;height:15%;background-color:#999;border-radius:100%;animation:\", \" 1.2s infinite ease-in-out both;\", \";}\"], props.rotate && \"\\n      -webkit-transform: rotate(\".concat(props.rotate, \"deg);\\n      -ms-transform: rotate(\").concat(props.rotate, \"deg);\\n      transform: rotate(\").concat(props.rotate, \"deg);\\n    \"), circleFadeDelay, props.delay && \"\\n        -webkit-animation-delay: \".concat(props.delay, \"s;\\n        animation-delay: \").concat(props.delay, \"s;\\n      \"));\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CirclePrimitive, null);\n};\n\nCircle.propTypes = {\n  delay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  rotate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Circle);\n\n//# sourceURL=webpack:///./app/components/LoadingIndicator/Circle.js?");

/***/ }),

/***/ "./app/components/LoadingIndicator/Wrapper.js":
/*!****************************************************!*\
  !*** ./app/components/LoadingIndicator/Wrapper.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Wrapper\",\n  componentId: \"sc-1ltsyw3-0\"\n})([\"margin:2em auto;width:40px;height:40px;position:relative;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\n//# sourceURL=webpack:///./app/components/LoadingIndicator/Wrapper.js?");

/***/ }),

/***/ "./app/components/LoadingIndicator/index.js":
/*!**************************************************!*\
  !*** ./app/components/LoadingIndicator/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circle */ \"./app/components/LoadingIndicator/Circle.js\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ \"./app/components/LoadingIndicator/Wrapper.js\");\n\n\n\n\nvar LoadingIndicator = function LoadingIndicator() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rotate: 30,\n    delay: -1.1\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rotate: 60,\n    delay: -1\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rotate: 90,\n    delay: -0.9\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rotate: 120,\n    delay: -0.8\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rotate: 150,\n    delay: -0.7\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rotate: 180,\n    delay: -0.6\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rotate: 210,\n    delay: -0.5\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rotate: 240,\n    delay: -0.4\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rotate: 270,\n    delay: -0.3\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rotate: 300,\n    delay: -0.2\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Circle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    rotate: 330,\n    delay: -0.1\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingIndicator);\n\n//# sourceURL=webpack:///./app/components/LoadingIndicator/index.js?");

/***/ }),

/***/ "./app/components/ReposList/index.js":
/*!*******************************************!*\
  !*** ./app/components/ReposList/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/List */ \"./app/components/List/index.js\");\n/* harmony import */ var components_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ListItem */ \"./app/components/ListItem/index.js\");\n/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/LoadingIndicator */ \"./app/components/LoadingIndicator/index.js\");\n/* harmony import */ var containers_RepoListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! containers/RepoListItem */ \"./app/containers/RepoListItem/index.js\");\n\n\n\n\n\n\n\nfunction ReposList(_ref) {\n  var loading = _ref.loading,\n      error = _ref.error,\n      repos = _ref.repos;\n\n  if (loading) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      component: components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    });\n  }\n\n  if (error !== false) {\n    var ErrorComponent = function ErrorComponent() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        item: \"Something went wrong, please try again!\"\n      });\n    };\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      component: ErrorComponent\n    });\n  }\n\n  if (repos !== false) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      items: repos,\n      component: containers_RepoListItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    });\n  }\n\n  return null;\n}\n\nReposList.propTypes = {\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,\n  repos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReposList);\n\n//# sourceURL=webpack:///./app/components/ReposList/index.js?");

/***/ }),

/***/ "./app/components/Toggle/Select.js":
/*!*****************************************!*\
  !*** ./app/components/Toggle/Select.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Select = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.select.withConfig({\n  displayName: \"Select\",\n  componentId: \"sc-58d740-0\"\n})([\"line-height:1em;background-color:transparent;border-style:none;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Select);\n\n//# sourceURL=webpack:///./app/components/Toggle/Select.js?");

/***/ }),

/***/ "./app/components/Toggle/index.js":
/*!****************************************!*\
  !*** ./app/components/Toggle/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Select */ \"./app/components/Toggle/Select.js\");\n/* harmony import */ var _ToggleOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ToggleOption */ \"./app/components/ToggleOption/index.js\");\n/**\n *\n * LocaleToggle\n *\n */\n\n\n\n\n\nfunction Toggle(props) {\n  var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"--\"); // If we have items, render them\n\n  if (props.values) {\n    content = props.values.map(function (value) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        key: value,\n        value: value,\n        message: props.messages[value]\n      });\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    value: props.value,\n    onChange: props.onToggle\n  }, content);\n}\n\nToggle.propTypes = {\n  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  messages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toggle);\n\n//# sourceURL=webpack:///./app/components/Toggle/index.js?");

/***/ }),

/***/ "./app/components/ToggleOption/index.js":
/*!**********************************************!*\
  !*** ./app/components/ToggleOption/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);\n/**\n *\n * ToggleOption\n *\n */\n\n\n\n\nvar ToggleOption = function ToggleOption(_ref) {\n  var value = _ref.value,\n      message = _ref.message,\n      intl = _ref.intl;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: value\n  }, message ? intl.formatMessage(message) : value);\n};\n\nToggleOption.propTypes = {\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  intl: react_intl__WEBPACK_IMPORTED_MODULE_2__[\"intlShape\"].isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"injectIntl\"])(ToggleOption));\n\n//# sourceURL=webpack:///./app/components/ToggleOption/index.js?");

/***/ }),

/***/ "./app/configureStore.js":
/*!*******************************!*\
  !*** ./app/configureStore.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ \"immutable\");\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router/immutable */ \"connected-react-router/immutable\");\n/* harmony import */ var connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./app/reducers.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\n * Create the store with dynamic reducers\n */\n\n\n\n\n\nvar sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();\nfunction configureStore() {\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var history = arguments.length > 1 ? arguments[1] : undefined;\n  // Create the store with two middlewares\n  // 1. sagaMiddleware: Makes redux-sagas work\n  // 2. routerMiddleware: Syncs the location/URL path to the state\n  var middlewares = [sagaMiddleware, Object(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_2__[\"routerMiddleware\"])(history)];\n  var enhancers = [redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middlewares)]; // If Redux DevTools Extension is installed use it, otherwise use Redux compose\n\n  /* eslint-disable no-underscore-dangle, indent */\n\n  var composeEnhancers =  true && (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\n  /* eslint-enable */\n\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(Object(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), Object(immutable__WEBPACK_IMPORTED_MODULE_1__[\"fromJS\"])(initialState), composeEnhancers.apply(void 0, enhancers)); // Extensions\n\n  store.runSaga = sagaMiddleware.run;\n  store.injectedReducers = {}; // Reducer registry\n\n  store.injectedSagas = {}; // Saga registry\n  // Make reducers hot reloadable, see http://mxs.is/googmo\n\n  /* istanbul ignore next */\n\n  if (false) {}\n\n  return store;\n}\n\n//# sourceURL=webpack:///./app/configureStore.js?");

/***/ }),

/***/ "./app/containers/App/actions.js":
/*!***************************************!*\
  !*** ./app/containers/App/actions.js ***!
  \***************************************/
/*! exports provided: loadRepos, reposLoaded, repoLoadingError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRepos\", function() { return loadRepos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reposLoaded\", function() { return reposLoaded; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"repoLoadingError\", function() { return repoLoadingError; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./app/containers/App/constants.js\");\n/*\n * App Actions\n *\n * Actions change things in your application\n * Since this boilerplate uses a uni-directional data flow, specifically redux,\n * we have these actions which are the only way your application interacts with\n * your application state. This guarantees that your state is up to date and nobody\n * messes it up weirdly somewhere.\n *\n * To add a new Action:\n * 1) Import your constant\n * 2) Add a function like this:\n *    export function yourAction(var) {\n *        return { type: YOUR_ACTION_CONSTANT, var: var }\n *    }\n */\n\n/**\n * Load the repositories, this action starts the request saga\n *\n * @return {object} An action object with a type of LOAD_REPOS\n */\n\nfunction loadRepos() {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"LOAD_REPOS\"]\n  };\n}\n/**\n * Dispatched when the repositories are loaded by the request saga\n *\n * @param  {array} repos The repository data\n * @param  {string} username The current username\n *\n * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos\n */\n\nfunction reposLoaded(repos, username) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"LOAD_REPOS_SUCCESS\"],\n    repos: repos,\n    username: username\n  };\n}\n/**\n * Dispatched when loading the repositories fails\n *\n * @param  {object} error The error\n *\n * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error\n */\n\nfunction repoLoadingError(error) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"LOAD_REPOS_ERROR\"],\n    error: error\n  };\n}\n\n//# sourceURL=webpack:///./app/containers/App/actions.js?");

/***/ }),

/***/ "./app/containers/App/constants.js":
/*!*****************************************!*\
  !*** ./app/containers/App/constants.js ***!
  \*****************************************/
/*! exports provided: LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_REPOS\", function() { return LOAD_REPOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_REPOS_SUCCESS\", function() { return LOAD_REPOS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_REPOS_ERROR\", function() { return LOAD_REPOS_ERROR; });\n/*\n * AppConstants\n * Each action has a corresponding type, which the reducer knows and picks up on.\n * To avoid weird typos between the reducer and the actions, we save them as\n * constants here. We prefix them with 'yourproject/YourComponent' so we avoid\n * reducers accidentally picking up actions they shouldn't.\n *\n * Follow this format:\n * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';\n */\nvar LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';\nvar LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';\nvar LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';\n\n//# sourceURL=webpack:///./app/containers/App/constants.js?");

/***/ }),

/***/ "./app/containers/App/index.js":
/*!*************************************!*\
  !*** ./app/containers/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var containers_HomePage_Loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/HomePage/Loadable */ \"./app/containers/HomePage/Loadable.js\");\n/* harmony import */ var containers_FeaturePage_Loadable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! containers/FeaturePage/Loadable */ \"./app/containers/FeaturePage/Loadable.js\");\n/* harmony import */ var containers_NotFoundPage_Loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! containers/NotFoundPage/Loadable */ \"./app/containers/NotFoundPage/Loadable.js\");\n/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header */ \"./app/components/Header/index.js\");\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Footer */ \"./app/components/Footer/index.js\");\n/* harmony import */ var _global_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../global-styles */ \"./app/global-styles.js\");\n/**\n *\n * App\n *\n * This component is the skeleton around the actual pages, and should only\n * contain code that should be seen on all pages. (e.g. navigation bar)\n */\n\n\n\n\n\n\n\n\n\n\nvar AppWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({\n  displayName: \"App__AppWrapper\",\n  componentId: \"d1rs7t-0\"\n})([\"max-width:calc(768px + 16px * 2);margin:0 auto;display:flex;min-height:100%;padding:0 16px;flex-direction:column;\"]);\nfunction App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], {\n    titleTemplate: \"%s - React.js Boilerplate\",\n    defaultTitle: \"React.js Boilerplate\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"description\",\n    content: \"A React.js Boilerplate application\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: containers_HomePage_Loadable__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"/features\",\n    component: containers_FeaturePage_Loadable__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    path: \"\",\n    component: containers_NotFoundPage_Loadable__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_global_styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null));\n}\n\n//# sourceURL=webpack:///./app/containers/App/index.js?");

/***/ }),

/***/ "./app/containers/App/reducer.js":
/*!***************************************!*\
  !*** ./app/containers/App/reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ \"immutable\");\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./app/containers/App/constants.js\");\n/*\n * AppReducer\n *\n * The reducer takes care of our data. Using actions, we can change our\n * application state.\n * To add a new action, add it to the switch statement in the reducer function\n *\n * Example:\n * case YOUR_ACTION_CONSTANT:\n *   return state.set('yourStateVariable', true);\n */\n\n // The initial state of the App\n\nvar initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__[\"fromJS\"])({\n  loading: false,\n  error: false,\n  currentUser: false,\n  userData: {\n    repositories: false\n  }\n});\n\nfunction appReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_REPOS\"]:\n      return state.set('loading', true).set('error', false).setIn(['userData', 'repositories'], false);\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_REPOS_SUCCESS\"]:\n      return state.setIn(['userData', 'repositories'], action.repos).set('loading', false).set('currentUser', action.username);\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_REPOS_ERROR\"]:\n      return state.set('error', action.error).set('loading', false);\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (appReducer);\n\n//# sourceURL=webpack:///./app/containers/App/reducer.js?");

/***/ }),

/***/ "./app/containers/App/selectors.js":
/*!*****************************************!*\
  !*** ./app/containers/App/selectors.js ***!
  \*****************************************/
/*! exports provided: selectGlobal, makeSelectCurrentUser, makeSelectLoading, makeSelectError, makeSelectRepos, makeSelectLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectGlobal\", function() { return selectGlobal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeSelectCurrentUser\", function() { return makeSelectCurrentUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeSelectLoading\", function() { return makeSelectLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeSelectError\", function() { return makeSelectError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeSelectRepos\", function() { return makeSelectRepos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeSelectLocation\", function() { return makeSelectLocation; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * The global state selectors\n */\n\n\nvar selectGlobal = function selectGlobal(state) {\n  return state.get('global');\n};\n\nvar selectRouter = function selectRouter(state) {\n  return state.get('router');\n};\n\nvar makeSelectCurrentUser = function makeSelectCurrentUser() {\n  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(selectGlobal, function (globalState) {\n    return globalState.get('currentUser');\n  });\n};\n\nvar makeSelectLoading = function makeSelectLoading() {\n  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(selectGlobal, function (globalState) {\n    return globalState.get('loading');\n  });\n};\n\nvar makeSelectError = function makeSelectError() {\n  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(selectGlobal, function (globalState) {\n    return globalState.get('error');\n  });\n};\n\nvar makeSelectRepos = function makeSelectRepos() {\n  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(selectGlobal, function (globalState) {\n    return globalState.getIn(['userData', 'repositories']);\n  });\n};\n\nvar makeSelectLocation = function makeSelectLocation() {\n  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(selectRouter, function (routerState) {\n    return routerState.get('location').toJS();\n  });\n};\n\n\n\n//# sourceURL=webpack:///./app/containers/App/selectors.js?");

/***/ }),

/***/ "./app/containers/FeaturePage/List.js":
/*!********************************************!*\
  !*** ./app/containers/FeaturePage/List.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({\n  displayName: \"List\",\n  componentId: \"gmjjhl-0\"\n})([\"font-family:Georgia,Times,'Times New Roman',serif;padding-left:1.75em;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./app/containers/FeaturePage/List.js?");

/***/ }),

/***/ "./app/containers/FeaturePage/ListItem.js":
/*!************************************************!*\
  !*** ./app/containers/FeaturePage/ListItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({\n  displayName: \"ListItem\",\n  componentId: \"sc-1r3963f-0\"\n})([\"margin:1em 0;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItem);\n\n//# sourceURL=webpack:///./app/containers/FeaturePage/ListItem.js?");

/***/ }),

/***/ "./app/containers/FeaturePage/ListItemTitle.js":
/*!*****************************************************!*\
  !*** ./app/containers/FeaturePage/ListItemTitle.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ListItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({\n  displayName: \"ListItemTitle\",\n  componentId: \"sc-1d8ju3m-0\"\n})([\"font-weight:bold;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItemTitle);\n\n//# sourceURL=webpack:///./app/containers/FeaturePage/ListItemTitle.js?");

/***/ }),

/***/ "./app/containers/FeaturePage/Loadable.js":
/*!************************************************!*\
  !*** ./app/containers/FeaturePage/Loadable.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loadable-components */ \"loadable-components\");\n/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loadable_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/LoadingIndicator */ \"./app/components/LoadingIndicator/index.js\");\n/**\n * Asynchronously loads the component for FeaturePage\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadable_components__WEBPACK_IMPORTED_MODULE_0___default()({\n  chunkName: function chunkName() {\n    return \"index\";\n  },\n  isReady: function isReady(props) {\n    if (true) {\n      return !!__webpack_require__.m[this.resolve(props)];\n    }\n\n    return false;\n  },\n  requireAsync: function requireAsync() {\n    return Promise.resolve(/*! import() | index */).then(__webpack_require__.bind(null, /*! ./index */ \"./app/containers/FeaturePage/index.js\"));\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./index */ \"./app/containers/FeaturePage/index.js\");\n    }\n\n    return __webpack_require__(/*! path */ \"path\").resolve(__dirname, \"./index\");\n  }\n}, {\n  LoadingComponent: components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./app/containers/FeaturePage/Loadable.js?");

/***/ }),

/***/ "./app/containers/FeaturePage/index.js":
/*!*********************************************!*\
  !*** ./app/containers/FeaturePage/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FeaturePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_H1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/H1 */ \"./app/components/H1/index.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ \"./app/containers/FeaturePage/messages.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./List */ \"./app/containers/FeaturePage/List.js\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListItem */ \"./app/containers/FeaturePage/ListItem.js\");\n/* harmony import */ var _ListItemTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListItemTitle */ \"./app/containers/FeaturePage/ListItemTitle.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/*\n * FeaturePage\n *\n * List all the features\n */\n\n\n\n\n\n\n\n\n\nvar FeaturePage =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(FeaturePage, _React$Component);\n\n  function FeaturePage() {\n    _classCallCheck(this, FeaturePage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(FeaturePage).apply(this, arguments));\n  }\n\n  _createClass(FeaturePage, [{\n    key: \"shouldComponentUpdate\",\n    // Since state and props are static,\n    // there's no need to re-render this component\n    value: function shouldComponentUpdate() {\n      return false;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Feature Page\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"Feature page of React.js Boilerplate application\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_H1__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItemTitle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].scaffoldingHeader)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].scaffoldingMessage))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItemTitle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].feedbackHeader)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].feedbackMessage))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItemTitle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].routingHeader)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].routingMessage))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItemTitle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].networkHeader)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].networkMessage))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItemTitle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].intlHeader)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"].intlMessage)))));\n    }\n  }]);\n\n  return FeaturePage;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./app/containers/FeaturePage/index.js?");

/***/ }),

/***/ "./app/containers/FeaturePage/messages.js":
/*!************************************************!*\
  !*** ./app/containers/FeaturePage/messages.js ***!
  \************************************************/
/*! exports provided: scope, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scope\", function() { return scope; });\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * FeaturePage Messages\n *\n * This contains all the text for the FeaturePage component.\n */\n\nvar scope = 'boilerplate.containers.FeaturePage';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"defineMessages\"])({\n  header: {\n    id: \"\".concat(scope, \".header\"),\n    defaultMessage: 'Features'\n  },\n  scaffoldingHeader: {\n    id: \"\".concat(scope, \".scaffolding.header\"),\n    defaultMessage: 'Quick scaffolding'\n  },\n  scaffoldingMessage: {\n    id: \"\".concat(scope, \".scaffolding.message\"),\n    defaultMessage: \"Automate the creation of components, containers, routes, selectors\\n  and sagas - and their tests - right from the CLI!\"\n  },\n  feedbackHeader: {\n    id: \"\".concat(scope, \".feedback.header\"),\n    defaultMessage: 'Instant feedback'\n  },\n  feedbackMessage: {\n    id: \"\".concat(scope, \".feedback.message\"),\n    defaultMessage: \"\\n      Enjoy the best DX and code your app at the speed of thought! Your\\n    saved changes to the CSS and JS are reflected instantaneously\\n    without refreshing the page. Preserve application state even when\\n    you update something in the underlying code!\\n    \"\n  },\n  stateManagementHeader: {\n    id: \"\".concat(scope, \".state_management.header\"),\n    defaultMessage: 'Predictable state management'\n  },\n  stateManagementMessages: {\n    id: \"\".concat(scope, \".state_management.message\"),\n    defaultMessage: \"\\n      Unidirectional data flow allows for change logging and time travel\\n    debugging.\\n    \"\n  },\n  javascriptHeader: {\n    id: \"\".concat(scope, \".javascript.header\"),\n    defaultMessage: 'Next generation JavaScript'\n  },\n  javascriptMessage: {\n    id: \"\".concat(scope, \".javascript.message\"),\n    defaultMessage: \"Use template strings, object destructuring, arrow functions, JSX\\n    syntax and more, today.\"\n  },\n  cssHeader: {\n    id: \"\".concat(scope, \".css.header\"),\n    defaultMessage: 'Features'\n  },\n  cssMessage: {\n    id: \"\".concat(scope, \".css.message\"),\n    defaultMessage: 'Next generation CSS'\n  },\n  routingHeader: {\n    id: \"\".concat(scope, \".routing.header\"),\n    defaultMessage: 'Industry-standard routing'\n  },\n  routingMessage: {\n    id: \"\".concat(scope, \".routing.message\"),\n    defaultMessage: \"\\n      Write composable CSS that's co-located with your components for\\n    complete modularity. Unique generated class names keep the\\n    specificity low while eliminating style clashes. Ship only the\\n    styles that are on the page for the best performance.\\n    \"\n  },\n  networkHeader: {\n    id: \"\".concat(scope, \".network.header\"),\n    defaultMessage: 'Offline-first'\n  },\n  networkMessage: {\n    id: \"\".concat(scope, \".network.message\"),\n    defaultMessage: \"\\n      The next frontier in performant web apps: availability without a\\n      network connection from the instant your users load the app.\\n    \"\n  },\n  intlHeader: {\n    id: \"\".concat(scope, \".internationalization.header\"),\n    defaultMessage: 'Complete i18n Standard Internationalization & Pluralization'\n  },\n  intlMessage: {\n    id: \"\".concat(scope, \".internationalization.message\"),\n    defaultMessage: 'Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.'\n  }\n}));\n\n//# sourceURL=webpack:///./app/containers/FeaturePage/messages.js?");

/***/ }),

/***/ "./app/containers/HomePage/AtPrefix.js":
/*!*********************************************!*\
  !*** ./app/containers/HomePage/AtPrefix.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar AtPrefix = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({\n  displayName: \"AtPrefix\",\n  componentId: \"sna4it-0\"\n})([\"color:black;margin-left:0.4em;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (AtPrefix);\n\n//# sourceURL=webpack:///./app/containers/HomePage/AtPrefix.js?");

/***/ }),

/***/ "./app/containers/HomePage/CenteredSection.js":
/*!****************************************************!*\
  !*** ./app/containers/HomePage/CenteredSection.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section */ \"./app/containers/HomePage/Section.js\");\n\n\nvar CenteredSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Section__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).withConfig({\n  displayName: \"CenteredSection\",\n  componentId: \"sc-4glsu1-0\"\n})([\"text-align:center;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CenteredSection);\n\n//# sourceURL=webpack:///./app/containers/HomePage/CenteredSection.js?");

/***/ }),

/***/ "./app/containers/HomePage/Form.js":
/*!*****************************************!*\
  !*** ./app/containers/HomePage/Form.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({\n  displayName: \"Form\",\n  componentId: \"sc-14w8yth-0\"\n})([\"margin-bottom:1em;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./app/containers/HomePage/Form.js?");

/***/ }),

/***/ "./app/containers/HomePage/Input.js":
/*!******************************************!*\
  !*** ./app/containers/HomePage/Input.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({\n  displayName: \"Input\",\n  componentId: \"sc-1mcrk5r-0\"\n})([\"outline:none;border:none;border-bottom:1px dotted #999;background-color:transparent;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\n//# sourceURL=webpack:///./app/containers/HomePage/Input.js?");

/***/ }),

/***/ "./app/containers/HomePage/Loadable.js":
/*!*********************************************!*\
  !*** ./app/containers/HomePage/Loadable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loadable-components */ \"loadable-components\");\n/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loadable_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/LoadingIndicator */ \"./app/components/LoadingIndicator/index.js\");\n/**\n * Asynchronously loads the component for HomePage\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadable_components__WEBPACK_IMPORTED_MODULE_0___default()({\n  chunkName: function chunkName() {\n    return \"index\";\n  },\n  isReady: function isReady(props) {\n    if (true) {\n      return !!__webpack_require__.m[this.resolve(props)];\n    }\n\n    return false;\n  },\n  requireAsync: function requireAsync() {\n    return Promise.resolve(/*! import() | index */).then(__webpack_require__.bind(null, /*! ./index */ \"./app/containers/HomePage/index.js\"));\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./index */ \"./app/containers/HomePage/index.js\");\n    }\n\n    return __webpack_require__(/*! path */ \"path\").resolve(__dirname, \"./index\");\n  }\n}, {\n  LoadingComponent: components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./app/containers/HomePage/Loadable.js?");

/***/ }),

/***/ "./app/containers/HomePage/Section.js":
/*!********************************************!*\
  !*** ./app/containers/HomePage/Section.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({\n  displayName: \"Section\",\n  componentId: \"sc-56wjck-0\"\n})([\"margin:3em auto;&:first-child{margin-top:0;}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\n\n//# sourceURL=webpack:///./app/containers/HomePage/Section.js?");

/***/ }),

/***/ "./app/containers/HomePage/actions.js":
/*!********************************************!*\
  !*** ./app/containers/HomePage/actions.js ***!
  \********************************************/
/*! exports provided: changeUsername */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeUsername\", function() { return changeUsername; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./app/containers/HomePage/constants.js\");\n/*\n * Home Actions\n *\n * Actions change things in your application\n * Since this boilerplate uses a uni-directional data flow, specifically redux,\n * we have these actions which are the only way your application interacts with\n * your application state. This guarantees that your state is up to date and nobody\n * messes it up weirdly somewhere.\n *\n * To add a new Action:\n * 1) Import your constant\n * 2) Add a function like this:\n *    export function yourAction(var) {\n *        return { type: YOUR_ACTION_CONSTANT, var: var }\n *    }\n */\n\n/**\n * Changes the input field of the form\n *\n * @param  {name} name The new text of the input field\n *\n * @return {object}    An action object with a type of CHANGE_USERNAME\n */\n\nfunction changeUsername(name) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_USERNAME\"],\n    name: name\n  };\n}\n\n//# sourceURL=webpack:///./app/containers/HomePage/actions.js?");

/***/ }),

/***/ "./app/containers/HomePage/constants.js":
/*!**********************************************!*\
  !*** ./app/containers/HomePage/constants.js ***!
  \**********************************************/
/*! exports provided: CHANGE_USERNAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_USERNAME\", function() { return CHANGE_USERNAME; });\n/*\n * HomeConstants\n * Each action has a corresponding type, which the reducer knows and picks up on.\n * To avoid weird typos between the reducer and the actions, we save them as\n * constants here. We prefix them with 'yourproject/YourComponent' so we avoid\n * reducers accidentally picking up actions they shouldn't.\n *\n * Follow this format:\n * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';\n */\nvar CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';\n\n//# sourceURL=webpack:///./app/containers/HomePage/constants.js?");

/***/ }),

/***/ "./app/containers/HomePage/index.js":
/*!******************************************!*\
  !*** ./app/containers/HomePage/index.js ***!
  \******************************************/
/*! exports provided: HomePage, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePage\", function() { return HomePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapDispatchToProps\", function() { return mapDispatchToProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var utils_injectReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/injectReducer */ \"./app/utils/injectReducer.js\");\n/* harmony import */ var utils_injectSaga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/injectSaga */ \"./app/utils/injectSaga.js\");\n/* harmony import */ var containers_App_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/App/selectors */ \"./app/containers/App/selectors.js\");\n/* harmony import */ var components_H2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/H2 */ \"./app/components/H2/index.js\");\n/* harmony import */ var components_ReposList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/ReposList */ \"./app/components/ReposList/index.js\");\n/* harmony import */ var _AtPrefix__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AtPrefix */ \"./app/containers/HomePage/AtPrefix.js\");\n/* harmony import */ var _CenteredSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CenteredSection */ \"./app/containers/HomePage/CenteredSection.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Form */ \"./app/containers/HomePage/Form.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Input */ \"./app/containers/HomePage/Input.js\");\n/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Section */ \"./app/containers/HomePage/Section.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./messages */ \"./app/containers/HomePage/messages.js\");\n/* harmony import */ var _App_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../App/actions */ \"./app/containers/App/actions.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./actions */ \"./app/containers/HomePage/actions.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./selectors */ \"./app/containers/HomePage/selectors.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reducer */ \"./app/containers/HomePage/reducer.js\");\n/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./saga */ \"./app/containers/HomePage/saga.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/*\n * HomePage\n *\n * This is the first thing users see of our App, at the '/' route\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* eslint-disable react/prefer-stateless-function */\n\nvar HomePage =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(HomePage, _React$PureComponent);\n\n  function HomePage() {\n    _classCallCheck(this, HomePage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));\n  }\n\n  _createClass(HomePage, [{\n    key: \"componentDidMount\",\n\n    /**\n     * when initial state username is not null, submit the form to load repos\n     */\n    value: function componentDidMount() {\n      if (this.props.username && this.props.username.trim().length > 0) {\n        this.props.onSubmitForm();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          loading = _this$props.loading,\n          error = _this$props.error,\n          repos = _this$props.repos;\n      var reposListProps = {\n        loading: loading,\n        error: error,\n        repos: repos\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Home Page\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n        name: \"description\",\n        content: \"A React.js Boilerplate application homepage\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CenteredSection__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_H2__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_17__[\"default\"].startProjectHeader)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_17__[\"default\"].startProjectMessage))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_16__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_H2__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_17__[\"default\"].trymeHeader)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        onSubmit: this.props.onSubmitForm\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"username\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_17__[\"default\"].trymeMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AtPrefix__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_17__[\"default\"].trymeAtPrefix)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n        id: \"username\",\n        type: \"text\",\n        placeholder: \"mxstbr\",\n        value: this.props.username,\n        onChange: this.props.onChangeUsername\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ReposList__WEBPACK_IMPORTED_MODULE_11__[\"default\"], reposListProps))));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\nHomePage.propTypes = {\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),\n  repos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),\n  onSubmitForm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  username: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onChangeUsername: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nfunction mapDispatchToProps(dispatch) {\n  return {\n    onChangeUsername: function onChangeUsername(evt) {\n      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_19__[\"changeUsername\"])(evt.target.value));\n    },\n    onSubmitForm: function onSubmitForm(evt) {\n      if (evt !== undefined && evt.preventDefault) evt.preventDefault();\n      dispatch(Object(_App_actions__WEBPACK_IMPORTED_MODULE_18__[\"loadRepos\"])());\n    }\n  };\n}\nvar mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_6__[\"createStructuredSelector\"])({\n  repos: Object(containers_App_selectors__WEBPACK_IMPORTED_MODULE_9__[\"makeSelectRepos\"])(),\n  username: Object(_selectors__WEBPACK_IMPORTED_MODULE_20__[\"makeSelectUsername\"])(),\n  loading: Object(containers_App_selectors__WEBPACK_IMPORTED_MODULE_9__[\"makeSelectLoading\"])(),\n  error: Object(containers_App_selectors__WEBPACK_IMPORTED_MODULE_9__[\"makeSelectError\"])()\n});\nvar withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps, mapDispatchToProps);\nvar withReducer = Object(utils_injectReducer__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n  key: 'home',\n  reducer: _reducer__WEBPACK_IMPORTED_MODULE_21__[\"default\"]\n});\nvar withSaga = Object(utils_injectSaga__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n  key: 'home',\n  saga: _saga__WEBPACK_IMPORTED_MODULE_22__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_5__[\"compose\"])(withReducer, withSaga, withConnect)(HomePage));\n\n//# sourceURL=webpack:///./app/containers/HomePage/index.js?");

/***/ }),

/***/ "./app/containers/HomePage/messages.js":
/*!*********************************************!*\
  !*** ./app/containers/HomePage/messages.js ***!
  \*********************************************/
/*! exports provided: scope, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scope\", function() { return scope; });\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * HomePage Messages\n *\n * This contains all the text for the HomePage component.\n */\n\nvar scope = 'boilerplate.containers.HomePage';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"defineMessages\"])({\n  startProjectHeader: {\n    id: \"\".concat(scope, \".start_project.header\"),\n    defaultMessage: 'Start your next react project in seconds'\n  },\n  startProjectMessage: {\n    id: \"\".concat(scope, \".start_project.message\"),\n    defaultMessage: 'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices'\n  },\n  trymeHeader: {\n    id: \"\".concat(scope, \".tryme.header\"),\n    defaultMessage: 'Try me!'\n  },\n  trymeMessage: {\n    id: \"\".concat(scope, \".tryme.message\"),\n    defaultMessage: 'Show Github repositories by'\n  },\n  trymeAtPrefix: {\n    id: \"\".concat(scope, \".tryme.atPrefix\"),\n    defaultMessage: '@'\n  }\n}));\n\n//# sourceURL=webpack:///./app/containers/HomePage/messages.js?");

/***/ }),

/***/ "./app/containers/HomePage/reducer.js":
/*!********************************************!*\
  !*** ./app/containers/HomePage/reducer.js ***!
  \********************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ \"immutable\");\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./app/containers/HomePage/constants.js\");\n/*\n * HomeReducer\n *\n * The reducer takes care of our data. Using actions, we can change our\n * application state.\n * To add a new action, add it to the switch statement in the reducer function\n *\n * Example:\n * case YOUR_ACTION_CONSTANT:\n *   return state.set('yourStateVariable', true);\n */\n\n // The initial state of the App\n\nvar initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__[\"fromJS\"])({\n  username: ''\n});\n\nfunction homeReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"CHANGE_USERNAME\"]:\n      // Delete prefixed '@' from the github username\n      return state.set('username', action.name.replace(/@/gi, ''));\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (homeReducer);\n\n//# sourceURL=webpack:///./app/containers/HomePage/reducer.js?");

/***/ }),

/***/ "./app/containers/HomePage/saga.js":
/*!*****************************************!*\
  !*** ./app/containers/HomePage/saga.js ***!
  \*****************************************/
/*! exports provided: getRepos, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRepos\", function() { return getRepos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return githubData; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var containers_App_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! containers/App/constants */ \"./app/containers/App/constants.js\");\n/* harmony import */ var containers_App_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! containers/App/actions */ \"./app/containers/App/actions.js\");\n/* harmony import */ var utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/request */ \"./app/utils/request.js\");\n/* harmony import */ var containers_HomePage_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/HomePage/selectors */ \"./app/containers/HomePage/selectors.js\");\nvar _marked =\n/*#__PURE__*/\nregeneratorRuntime.mark(getRepos),\n    _marked2 =\n/*#__PURE__*/\nregeneratorRuntime.mark(githubData);\n\n/**\n * Gets the repositories of the user from Github\n */\n\n\n\n\n\n/**\n * Github repos request/response handler\n */\n\nfunction getRepos() {\n  var username, requestURL, repos;\n  return regeneratorRuntime.wrap(function getRepos$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(Object(containers_HomePage_selectors__WEBPACK_IMPORTED_MODULE_4__[\"makeSelectUsername\"])());\n\n        case 2:\n          username = _context.sent;\n          requestURL = \"https://api.github.com/users/\".concat(username, \"/repos?type=all&sort=updated\");\n          _context.prev = 4;\n          _context.next = 7;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(utils_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"], requestURL);\n\n        case 7:\n          repos = _context.sent;\n          _context.next = 10;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(containers_App_actions__WEBPACK_IMPORTED_MODULE_2__[\"reposLoaded\"])(repos, username));\n\n        case 10:\n          _context.next = 16;\n          break;\n\n        case 12:\n          _context.prev = 12;\n          _context.t0 = _context[\"catch\"](4);\n          _context.next = 16;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(containers_App_actions__WEBPACK_IMPORTED_MODULE_2__[\"repoLoadingError\"])(_context.t0));\n\n        case 16:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked, this, [[4, 12]]);\n}\n/**\n * Root saga manages watcher lifecycle\n */\n\nfunction githubData() {\n  return regeneratorRuntime.wrap(function githubData$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(containers_App_constants__WEBPACK_IMPORTED_MODULE_1__[\"LOAD_REPOS\"], getRepos);\n\n        case 2:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2, this);\n}\n\n//# sourceURL=webpack:///./app/containers/HomePage/saga.js?");

/***/ }),

/***/ "./app/containers/HomePage/selectors.js":
/*!**********************************************!*\
  !*** ./app/containers/HomePage/selectors.js ***!
  \**********************************************/
/*! exports provided: selectHome, makeSelectUsername */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectHome\", function() { return selectHome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeSelectUsername\", function() { return makeSelectUsername; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./app/containers/HomePage/reducer.js\");\n/**\n * Homepage selectors\n */\n\n\n\nvar selectHome = function selectHome(state) {\n  return state.get('home', _reducer__WEBPACK_IMPORTED_MODULE_1__[\"initialState\"]);\n};\n\nvar makeSelectUsername = function makeSelectUsername() {\n  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(selectHome, function (homeState) {\n    return homeState.get('username');\n  });\n};\n\n\n\n//# sourceURL=webpack:///./app/containers/HomePage/selectors.js?");

/***/ }),

/***/ "./app/containers/LanguageProvider/actions.js":
/*!****************************************************!*\
  !*** ./app/containers/LanguageProvider/actions.js ***!
  \****************************************************/
/*! exports provided: changeLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeLocale\", function() { return changeLocale; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./app/containers/LanguageProvider/constants.js\");\n/*\n *\n * LanguageProvider actions\n *\n */\n\nfunction changeLocale(languageLocale) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LOCALE\"],\n    locale: languageLocale\n  };\n}\n\n//# sourceURL=webpack:///./app/containers/LanguageProvider/actions.js?");

/***/ }),

/***/ "./app/containers/LanguageProvider/constants.js":
/*!******************************************************!*\
  !*** ./app/containers/LanguageProvider/constants.js ***!
  \******************************************************/
/*! exports provided: CHANGE_LOCALE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_LOCALE\", function() { return CHANGE_LOCALE; });\n/*\n *\n * LanguageProvider constants\n *\n */\nvar CHANGE_LOCALE = 'app/LanguageToggle/CHANGE_LOCALE';\n\n//# sourceURL=webpack:///./app/containers/LanguageProvider/constants.js?");

/***/ }),

/***/ "./app/containers/LanguageProvider/index.js":
/*!**************************************************!*\
  !*** ./app/containers/LanguageProvider/index.js ***!
  \**************************************************/
/*! exports provided: LanguageProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LanguageProvider\", function() { return LanguageProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ \"./app/containers/LanguageProvider/selectors.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/*\n *\n * LanguageProvider\n *\n * this component connects the redux state language locale to the\n * IntlProvider component and i18n messages (loaded from `app/translations`)\n */\n\n\n\n\n\n\nvar LanguageProvider =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(LanguageProvider, _React$PureComponent);\n\n  function LanguageProvider() {\n    _classCallCheck(this, LanguageProvider);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(LanguageProvider).apply(this, arguments));\n  }\n\n  _createClass(LanguageProvider, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__[\"IntlProvider\"], {\n        locale: this.props.locale,\n        key: this.props.locale,\n        messages: this.props.messages[this.props.locale]\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children));\n    }\n  }]);\n\n  return LanguageProvider;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\nLanguageProvider.propTypes = {\n  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  messages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired\n};\nvar mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_3__[\"createSelector\"])(Object(_selectors__WEBPACK_IMPORTED_MODULE_5__[\"makeSelectLocale\"])(), function (locale) {\n  return {\n    locale: locale\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(LanguageProvider));\n\n//# sourceURL=webpack:///./app/containers/LanguageProvider/index.js?");

/***/ }),

/***/ "./app/containers/LanguageProvider/reducer.js":
/*!****************************************************!*\
  !*** ./app/containers/LanguageProvider/reducer.js ***!
  \****************************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ \"immutable\");\n/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./app/containers/LanguageProvider/constants.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ \"./app/i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/*\n *\n * LanguageProvider reducer\n *\n */\n\n\n\nvar initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__[\"fromJS\"])({\n  locale: _i18n__WEBPACK_IMPORTED_MODULE_2__[\"DEFAULT_LOCALE\"]\n});\n\nfunction languageProviderReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"CHANGE_LOCALE\"]:\n      return state.set('locale', action.locale);\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (languageProviderReducer);\n\n//# sourceURL=webpack:///./app/containers/LanguageProvider/reducer.js?");

/***/ }),

/***/ "./app/containers/LanguageProvider/selectors.js":
/*!******************************************************!*\
  !*** ./app/containers/LanguageProvider/selectors.js ***!
  \******************************************************/
/*! exports provided: selectLanguage, makeSelectLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectLanguage\", function() { return selectLanguage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeSelectLocale\", function() { return makeSelectLocale; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./app/containers/LanguageProvider/reducer.js\");\n\n\n/**\n * Direct selector to the languageToggle state domain\n */\n\nvar selectLanguage = function selectLanguage(state) {\n  return state.get('language', _reducer__WEBPACK_IMPORTED_MODULE_1__[\"initialState\"]);\n};\n/**\n * Select the language locale\n */\n\n\nvar makeSelectLocale = function makeSelectLocale() {\n  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(selectLanguage, function (languageState) {\n    return languageState.get('locale');\n  });\n};\n\n\n\n//# sourceURL=webpack:///./app/containers/LanguageProvider/selectors.js?");

/***/ }),

/***/ "./app/containers/LocaleToggle/Wrapper.js":
/*!************************************************!*\
  !*** ./app/containers/LocaleToggle/Wrapper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Wrapper\",\n  componentId: \"sc-19p8qs-0\"\n})([\"padding:2px;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\n//# sourceURL=webpack:///./app/containers/LocaleToggle/Wrapper.js?");

/***/ }),

/***/ "./app/containers/LocaleToggle/index.js":
/*!**********************************************!*\
  !*** ./app/containers/LocaleToggle/index.js ***!
  \**********************************************/
/*! exports provided: LocaleToggle, mapDispatchToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocaleToggle\", function() { return LocaleToggle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapDispatchToProps\", function() { return mapDispatchToProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Toggle */ \"./app/components/Toggle/index.js\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Wrapper */ \"./app/containers/LocaleToggle/Wrapper.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ \"./app/containers/LocaleToggle/messages.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../i18n */ \"./app/i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _LanguageProvider_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../LanguageProvider/actions */ \"./app/containers/LanguageProvider/actions.js\");\n/* harmony import */ var _LanguageProvider_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../LanguageProvider/selectors */ \"./app/containers/LanguageProvider/selectors.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/*\n *\n * LanguageToggle\n *\n */\n\n\n\n\n\n\n\n\n\n\nvar LocaleToggle =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(LocaleToggle, _React$PureComponent);\n\n  function LocaleToggle() {\n    _classCallCheck(this, LocaleToggle);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(LocaleToggle).apply(this, arguments));\n  }\n\n  _createClass(LocaleToggle, [{\n    key: \"render\",\n    // eslint-disable-line react/prefer-stateless-function\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Toggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        value: this.props.locale,\n        values: _i18n__WEBPACK_IMPORTED_MODULE_7__[\"appLocales\"],\n        messages: _messages__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        onToggle: this.props.onLocaleToggle\n      }));\n    }\n  }]);\n\n  return LocaleToggle;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\nLocaleToggle.propTypes = {\n  onLocaleToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nvar mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_3__[\"createSelector\"])(Object(_LanguageProvider_selectors__WEBPACK_IMPORTED_MODULE_9__[\"makeSelectLocale\"])(), function (locale) {\n  return {\n    locale: locale\n  };\n});\nfunction mapDispatchToProps(dispatch) {\n  return {\n    onLocaleToggle: function onLocaleToggle(evt) {\n      return dispatch(Object(_LanguageProvider_actions__WEBPACK_IMPORTED_MODULE_8__[\"changeLocale\"])(evt.target.value));\n    },\n    dispatch: dispatch\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(LocaleToggle));\n\n//# sourceURL=webpack:///./app/containers/LocaleToggle/index.js?");

/***/ }),

/***/ "./app/containers/LocaleToggle/messages.js":
/*!*************************************************!*\
  !*** ./app/containers/LocaleToggle/messages.js ***!
  \*************************************************/
/*! exports provided: scope, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scope\", function() { return scope; });\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * LocaleToggle Messages\n *\n * This contains all the text for the LanguageToggle component.\n */\n\nvar scope = 'boilerplate.containers.LocaleToggle';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"defineMessages\"])({\n  en: {\n    id: \"\".concat(scope, \".en\"),\n    defaultMessage: 'en'\n  },\n  de: {\n    id: \"\".concat(scope, \".de\"),\n    defaultMessage: 'de'\n  }\n}));\n\n//# sourceURL=webpack:///./app/containers/LocaleToggle/messages.js?");

/***/ }),

/***/ "./app/containers/NotFoundPage/Loadable.js":
/*!*************************************************!*\
  !*** ./app/containers/NotFoundPage/Loadable.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loadable-components */ \"loadable-components\");\n/* harmony import */ var loadable_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loadable_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/LoadingIndicator */ \"./app/components/LoadingIndicator/index.js\");\n/**\n * Asynchronously loads the component for NotFoundPage\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadable_components__WEBPACK_IMPORTED_MODULE_0___default()({\n  chunkName: function chunkName() {\n    return \"index\";\n  },\n  isReady: function isReady(props) {\n    if (true) {\n      return !!__webpack_require__.m[this.resolve(props)];\n    }\n\n    return false;\n  },\n  requireAsync: function requireAsync() {\n    return Promise.resolve(/*! import() | index */).then(__webpack_require__.bind(null, /*! ./index */ \"./app/containers/NotFoundPage/index.js\"));\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./index */ \"./app/containers/NotFoundPage/index.js\");\n    }\n\n    return __webpack_require__(/*! path */ \"path\").resolve(__dirname, \"./index\");\n  }\n}, {\n  LoadingComponent: components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./app/containers/NotFoundPage/Loadable.js?");

/***/ }),

/***/ "./app/containers/NotFoundPage/index.js":
/*!**********************************************!*\
  !*** ./app/containers/NotFoundPage/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NotFound; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_H1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/H1 */ \"./app/components/H1/index.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ \"./app/containers/NotFoundPage/messages.js\");\n/**\n * NotFoundPage\n *\n * This is the page we show when the user visits a url that doesn't have a route\n */\n\n\n\n\nfunction NotFound() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_H1__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], _messages__WEBPACK_IMPORTED_MODULE_3__[\"default\"].header)));\n}\n\n//# sourceURL=webpack:///./app/containers/NotFoundPage/index.js?");

/***/ }),

/***/ "./app/containers/NotFoundPage/messages.js":
/*!*************************************************!*\
  !*** ./app/containers/NotFoundPage/messages.js ***!
  \*************************************************/
/*! exports provided: scope, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scope\", function() { return scope; });\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * NotFoundPage Messages\n *\n * This contains all the text for the NotFoundPage component.\n */\n\nvar scope = 'boilerplate.containers.NotFoundPage';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_0__[\"defineMessages\"])({\n  header: {\n    id: \"\".concat(scope, \".header\"),\n    defaultMessage: 'Page not found.'\n  }\n}));\n\n//# sourceURL=webpack:///./app/containers/NotFoundPage/messages.js?");

/***/ }),

/***/ "./app/containers/RepoListItem/IssueIcon.js":
/*!**************************************************!*\
  !*** ./app/containers/RepoListItem/IssueIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_IssueIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/IssueIcon */ \"./app/components/IssueIcon/index.js\");\n\n\nvar IssueIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(components_IssueIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).withConfig({\n  displayName: \"IssueIcon\",\n  componentId: \"sc-1jnr4uv-0\"\n})([\"fill:#ccc;margin-right:0.25em;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (IssueIcon);\n\n//# sourceURL=webpack:///./app/containers/RepoListItem/IssueIcon.js?");

/***/ }),

/***/ "./app/containers/RepoListItem/IssueLink.js":
/*!**************************************************!*\
  !*** ./app/containers/RepoListItem/IssueLink.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_A__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/A */ \"./app/components/A/index.js\");\n\n\nvar IssueLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(components_A__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).withConfig({\n  displayName: \"IssueLink\",\n  componentId: \"c33w7s-0\"\n})([\"height:100%;color:black;display:flex;align-items:center;justify-content:center;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (IssueLink);\n\n//# sourceURL=webpack:///./app/containers/RepoListItem/IssueLink.js?");

/***/ }),

/***/ "./app/containers/RepoListItem/RepoLink.js":
/*!*************************************************!*\
  !*** ./app/containers/RepoListItem/RepoLink.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_A__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/A */ \"./app/components/A/index.js\");\n\n\nvar RepoLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(components_A__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).withConfig({\n  displayName: \"RepoLink\",\n  componentId: \"sc-1vcs3jh-0\"\n})([\"height:100%;color:black;display:flex;align-items:center;width:100%;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (RepoLink);\n\n//# sourceURL=webpack:///./app/containers/RepoListItem/RepoLink.js?");

/***/ }),

/***/ "./app/containers/RepoListItem/Wrapper.js":
/*!************************************************!*\
  !*** ./app/containers/RepoListItem/Wrapper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"Wrapper\",\n  componentId: \"sc-16ig12k-0\"\n})([\"width:100%;height:100%;display:flex;align-items:space-between;\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wrapper);\n\n//# sourceURL=webpack:///./app/containers/RepoListItem/Wrapper.js?");

/***/ }),

/***/ "./app/containers/RepoListItem/index.js":
/*!**********************************************!*\
  !*** ./app/containers/RepoListItem/index.js ***!
  \**********************************************/
/*! exports provided: RepoListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RepoListItem\", function() { return RepoListItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ \"react-intl\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var containers_App_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! containers/App/selectors */ \"./app/containers/App/selectors.js\");\n/* harmony import */ var components_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ListItem */ \"./app/components/ListItem/index.js\");\n/* harmony import */ var _IssueIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IssueIcon */ \"./app/containers/RepoListItem/IssueIcon.js\");\n/* harmony import */ var _IssueLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IssueLink */ \"./app/containers/RepoListItem/IssueLink.js\");\n/* harmony import */ var _RepoLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RepoLink */ \"./app/containers/RepoListItem/RepoLink.js\");\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Wrapper */ \"./app/containers/RepoListItem/Wrapper.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/**\n * RepoListItem\n *\n * Lists the name and the issue count of a repository\n */\n\n\n\n\n\n\n\n\n\n\n\nvar RepoListItem =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(RepoListItem, _React$PureComponent);\n\n  function RepoListItem() {\n    _classCallCheck(this, RepoListItem);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(RepoListItem).apply(this, arguments));\n  }\n\n  _createClass(RepoListItem, [{\n    key: \"render\",\n    value: function render() {\n      var item = this.props.item;\n      var nameprefix = ''; // If the repository is owned by a different person than we got the data for\n      // it's a fork and we should show the name of the owner\n\n      if (item.owner.login !== this.props.currentUser) {\n        nameprefix = \"\".concat(item.owner.login, \"/\");\n      } // Put together the content of the repository\n\n\n      var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RepoLink__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        href: item.html_url,\n        target: \"_blank\"\n      }, nameprefix + item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueLink__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        href: \"\".concat(item.html_url, \"/issues\"),\n        target: \"_blank\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueIcon__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__[\"FormattedNumber\"], {\n        value: item.open_issues_count\n      }))); // Render the content into a list item\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ListItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        key: \"repo-list-item-\".concat(item.full_name),\n        item: content\n      });\n    }\n  }]);\n\n  return RepoListItem;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\nRepoListItem.propTypes = {\n  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  currentUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Object(reselect__WEBPACK_IMPORTED_MODULE_3__[\"createStructuredSelector\"])({\n  currentUser: Object(containers_App_selectors__WEBPACK_IMPORTED_MODULE_5__[\"makeSelectCurrentUser\"])()\n}))(RepoListItem));\n\n//# sourceURL=webpack:///./app/containers/RepoListItem/index.js?");

/***/ }),

/***/ "./app/global-styles.js":
/*!******************************!*\
  !*** ./app/global-styles.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  html,\\n  body {\\n    height: 100%;\\n    width: 100%;\\n    line-height: 1.5;\\n  }\\n\\n  body {\\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\\n  }\\n\\n  body.fontLoaded {\\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\\n  }\\n\\n  #app {\\n    background-color: #fafafa;\\n    min-height: 100%;\\n    min-width: 100%;\\n  }\\n\\n  p,\\n  label {\\n    font-family: Georgia, Times, 'Times New Roman', serif;\\n    line-height: 1.5em;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"])(_templateObject());\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);\n\n//# sourceURL=webpack:///./app/global-styles.js?");

/***/ }),

/***/ "./app/i18n.js":
/*!*********************!*\
  !*** ./app/i18n.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * i18n.js\n *\n * This will setup the i18n language files and locale data for your app.\n *\n *   IMPORTANT: This file is used by the internal build\n *   script `extract-intl`, and must use CommonJS module syntax\n *   You CANNOT use import/export in this file.\n */\nvar addLocaleData = __webpack_require__(/*! react-intl */ \"react-intl\").addLocaleData; //eslint-disable-line\n\n\nvar enLocaleData = __webpack_require__(/*! react-intl/locale-data/en */ \"react-intl/locale-data/en\");\n\nvar deLocaleData = __webpack_require__(/*! react-intl/locale-data/de */ \"react-intl/locale-data/de\");\n\nvar enTranslationMessages = __webpack_require__(/*! ./translations/en.json */ \"./app/translations/en.json\");\n\nvar deTranslationMessages = __webpack_require__(/*! ./translations/de.json */ \"./app/translations/de.json\");\n\naddLocaleData(enLocaleData);\naddLocaleData(deLocaleData);\nvar DEFAULT_LOCALE = 'en'; // prettier-ignore\n\nvar appLocales = ['en', 'de'];\n\nvar formatTranslationMessages = function formatTranslationMessages(locale, messages) {\n  var defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};\n\n  var flattenFormattedMessages = function flattenFormattedMessages(formattedMessages, key) {\n    var formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE ? defaultFormattedMessages[key] : messages[key];\n    return Object.assign(formattedMessages, _defineProperty({}, key, formattedMessage));\n  };\n\n  return Object.keys(messages).reduce(flattenFormattedMessages, {});\n};\n\nvar translationMessages = {\n  en: formatTranslationMessages('en', enTranslationMessages),\n  de: formatTranslationMessages('de', deTranslationMessages)\n};\nexports.appLocales = appLocales;\nexports.formatTranslationMessages = formatTranslationMessages;\nexports.translationMessages = translationMessages;\nexports.DEFAULT_LOCALE = DEFAULT_LOCALE;\n\n//# sourceURL=webpack:///./app/i18n.js?");

/***/ }),

/***/ "./app/reducers.js":
/*!*************************!*\
  !*** ./app/reducers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createReducer; });\n/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ \"redux-immutable\");\n/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router/immutable */ \"connected-react-router/immutable\");\n/* harmony import */ var connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/history */ \"./app/utils/history.js\");\n/* harmony import */ var containers_App_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/App/reducer */ \"./app/containers/App/reducer.js\");\n/* harmony import */ var containers_LanguageProvider_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/LanguageProvider/reducer */ \"./app/containers/LanguageProvider/reducer.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Combine all reducers in this file and export the combined reducers.\n */\n\n\n\n\n\n/**\n * Merges the main reducer with the router state and dynamically injected reducers\n */\n\nfunction createReducer() {\n  var injectedReducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var rootReducer = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(_objectSpread({\n    global: containers_App_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    language: containers_LanguageProvider_reducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    router: Object(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_1__[\"connectRouter\"])(utils_history__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n  }, injectedReducers));\n  return rootReducer;\n}\n\n//# sourceURL=webpack:///./app/reducers.js?");

/***/ }),

/***/ "./app/serverEntry.js":
/*!****************************!*\
  !*** ./app/serverEntry.js ***!
  \****************************/
/*! exports provided: appLocales, renderAppToStringAtLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderAppToStringAtLocation\", function() { return renderAppToStringAtLocation; });\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router-config'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! connected-react-router/immutable */ \"connected-react-router/immutable\");\n/* harmony import */ var connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! history/createMemoryHistory */ \"history/createMemoryHistory\");\n/* harmony import */ var history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var global_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! global-styles */ \"./app/global-styles.js\");\n/* harmony import */ var configureStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! configureStore */ \"./app/configureStore.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'routes'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var containers_LanguageProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! containers/LanguageProvider */ \"./app/containers/LanguageProvider/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'components/HtmlDocument'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'containers/AppRoot'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var containers_App__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! containers/App */ \"./app/containers/App/index.js\");\n/* harmony import */ var containers_LanguageProvider_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! containers/LanguageProvider/actions */ \"./app/containers/LanguageProvider/actions.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'setup/syncHistoryWithStore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'utils/monitorSagas'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./i18n */ \"./app/i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"appLocales\", function() { return _i18n__WEBPACK_IMPORTED_MODULE_15__[\"appLocales\"]; });\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/**\n * Server side rendering application entry module.\n *\n * This module is being transpiled by webpack and placed under\n * server/middlewares/ as `generated.serverEntry.js`.\n *\n * The server uses it to render the app at given location.\n */\n// import 'babel-polyfill'; // for regeneratorRuntime\n // for regeneratorRuntime\n\n\n // import { StaticRouter } from 'react-router-dom';\n\n\n\n // import { match, RouterContext } from 'react-router';// match doesn't seem toi exist anymore in RR4. does RouterContext?\n// import { createMemoryHistory } from 'history';\n\n\n\n // import styleSheet from 'styled-components/lib/models/StyleSheet';\n\n // Global styles should be injected before any other scoped style, so make sure\n// this file is imported before any styled component.\n\n // import 'special-styles';\n\n // import createRoutes from 'routes';// so ... this is no longer a function, its a simple array\n\n // so ... this is no longer a function, its a simple array\n// Import Language Provider\n\n\n/*\n  How are we going to handle this? we used to have a routes.js, that was responsible for tying in the routes, and merging in the component, reducer, and saga, and promisifying all of that.\n  and now we don't  ... so ... what to do?\n  ... now the structure of the containers, includes all of that stuff, already composed, like in:\n  export default compose(\n    withReducer,\n    withSaga,\n    withConnect,\n  )(HomePage);\n  so ... do we even really need to worry about routes, in the routes config sense?\n  ... yes, but maybe we don't need to have a complex route ... maybe we just need a simpler routes.js\n*/\n\n\n\n\n\n\n\n\n\nfunction renderAppToString(url, store, history, styleSheet) {\n  // console.log(`renderAppToString(${url})`);\n  // const memHistory = createMemoryHistory();// make a new one because i can't figure out how to pass history in through convoluted promise chain. gah.\n  // perhaps the problem is that we are creating a memory history here, with no history .. and we need to kick things off, with the first url that we have here, as opposed to rendering with a black slate!\n\n  /*{\n  initialEntries: [ '/' ],  // The initial URLs in the history stack\n  initialIndex: 0,          // The starting index in the history stack\n  keyLength: 6,             // The length of location.key\n  // A function to use to confirm navigation with the user. Required\n  // if you return string prompts from transition hooks (see below)\n  getUserConfirmation: null\n  }*/\n  var app = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(containers_LanguageProvider__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    messages: _i18n__WEBPACK_IMPORTED_MODULE_15__[\"translationMessages\"]\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(connected_react_router_immutable__WEBPACK_IMPORTED_MODULE_5__[\"ConnectedRouter\"], {\n    history: history\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router-config'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'routes'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))));\n  return Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])(styleSheet ? styleSheet.collectStyles(app) : app);\n} // store, sagasDone, assets, webpackDllNames\n\n\nfunction renderHtmlDocument(_x) {\n  return _renderHtmlDocument.apply(this, arguments);\n} // async function renderHtmlDocument({ store, renderProps, sagasDone, assets, webpackDllNames }) {\n//   console.log(`renderHtmlDocument()`);\n//\n//   // 1st render phase - triggers the sagas\n//   renderAppToString(store, renderProps);\n//\n//   //\n//\n//   // th thing is, with the way that the sagas,\n//   // send signal to sagas that we're done\n//   store.dispatch(END);\n//\n//   // wait for all tasks to finish\n//   await sagasDone();\n//\n//   // capture the state after the first render\n//   const state = store.getState().toJS();\n//\n//   // prepare style sheet to collect generated css\n//   const styleSheet = new ServerStyleSheet();\n//\n//   // 2nd render phase - the sagas triggered in the first phase are resolved by now\n//   const appMarkup = renderAppToString(store, renderProps, styleSheet);\n//\n//   // capture the generated css\n//   const css = styleSheet.getStyleElement();\n//\n//   const doc = renderToStaticMarkup(\n//     <HtmlDocument\n//       appMarkup={appMarkup}\n//       lang={state.language.locale}\n//       state={state}\n//       head={Helmet.rewind()}\n//       assets={assets}\n//       css={css}\n//       webpackDllNames={webpackDllNames}\n//     />\n//   );\n//   return `<!DOCTYPE html>\\n${doc}`;\n// }\n// function is404(routes) {\n//   return routes.some((r) => r.name === 'notfound');\n// }\n\n\nfunction _renderHtmlDocument() {\n  _renderHtmlDocument = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(_ref) {\n    var url, store, sagasDone, assets, webpackDllNames, memHistory, state, styleSheet, appMarkup, css, doc;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = _ref.url, store = _ref.store, sagasDone = _ref.sagasDone, assets = _ref.assets, webpackDllNames = _ref.webpackDllNames, memHistory = _ref.memHistory;\n            // renderProps is always going to be App.\n            // console.log(`renderHtmlDocument(${url})`);\n            // I wonder ... if it might be possible to do something like this:\n\n            /*\n            // but how could we trigger the specifig sagas associated with the route?\n            store.runSaga(sagas).done.then(() => {\n                  const html = ReactDOMServer.renderToString(appWithRouter);\n                  const preloadedState = store.getState();\n                  return res.status(200).send(render(html, loadableState, preloadedState));\n              });\n            */\n            // console.log(`renderHtmlDocument({${url}, ${store}, ${sagasDone}, ${assets}, ${webpackDllNames}})`);\n            // console.log(assets);\n            // 1st render phase - triggers the sagas\n            renderAppToString(url, store, memHistory); // one\n            //\n            // th thing is, with the way that the sagas,\n            // send signal to sagas that we're done\n\n            store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_7__[\"END\"]); // wait for all tasks to finish\n\n            _context.next = 5;\n            return sagasDone();\n\n          case 5:\n            // capture the state after the first render\n            state = store.getState().toJS(); // prepare style sheet to collect generated css\n\n            styleSheet = new styled_components__WEBPACK_IMPORTED_MODULE_9__[\"ServerStyleSheet\"](); // 2nd render phase - the sagas triggered in the first phase are resolved by now\n\n            appMarkup = renderAppToString(url, store, memHistory, styleSheet); // two\n            // should we dispathc END again, and await sagasDone, again? let's try.\n            // store.dispatch(END);\n            // await sagasDone();\n            // capture the generated css\n\n            css = styleSheet.getStyleElement();\n            doc = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToStaticMarkup\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledHtmlDocument, {\n              appMarkup: appMarkup,\n              lang: state.language.locale,\n              state: state,\n              head: react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a.rewind(),\n              assets: assets,\n              webpackDllNames: webpackDllNames,\n              _$p_: css\n            }));\n            return _context.abrupt(\"return\", \"<!DOCTYPE html>\\n\".concat(doc));\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n  return _renderHtmlDocument.apply(this, arguments);\n}\n\nfunction getCAARDD(store) {\n  // // console.log('getCAARDD()');\n  var caardd = typeof store.getState().getIn(['global', 'caardd']) !== 'undefined' ? store.getState().getIn(['global', 'caardd']) : false; // // console.log(caardd);\n\n  return caardd;\n} // this is the entry point that gets called from handleSSR. we are going to use react-router-config\n// and switch the structure of the containers export so that it exports an object that has both loader and compoentn params.\n// i now understand why the actions in ReactSSRCasts are () => () => functions. they are user directly as the mapDispatchToProps function, and passed, as is, into the react-reduc connect HOC.\n\n\nfunction renderAppToStringAtLocation(url, _ref2, callback) {\n  var _ref2$webpackDllNames = _ref2.webpackDllNames,\n      webpackDllNames = _ref2$webpackDllNames === void 0 ? [] : _ref2$webpackDllNames,\n      assets = _ref2.assets,\n      lang = _ref2.lang;\n  console.log(\"renderAppToStringAtLocation()\");\n  var memHistory = history_createMemoryHistory__WEBPACK_IMPORTED_MODULE_6___default()({\n    initialEntries: [url],\n    initialIndex: 0,\n    keyLength: 6\n  }); // initialEntries: [ '/' ],  // The initial URLs in the history stack\n  // initialIndex: 0,          // The starting index in the history stack\n  // keyLength: 6,             // The length of location.key\n  // // A function to use to confirm navigation with the user. Required\n  // // if you return string prompts from transition hooks (see below)\n  // getUserConfirmation: null\n  // const memHistory = createHistory();\n  // console.log(`memHistory made`);\n  // console.log(memHistory);\n  // const store = createStore({environment}, memHistory);\n  // actually, it looks like the right place to add this is before.\n  // so ... we have the memHistory, and we have the createStore. so something is either wrong with one of them.\n  //\n  //\n\n  var store = Object(configureStore__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, memHistory); // console.log(`store made`);\n  // console.log(store.getState());\n  // syncHistoryWithStore(memHistory, store);// is this even neccesary?\n  // console.log(`finished syncHistoryWithStore`);\n  // const routes = createRoutes(store);\n  // const Routes = routeConfig;// defined above, by importing\n  // no need to refiene this now, since we are calling it Routes now, when we are importing it.\n  // let's try and do this without needing a seperate routes js file, and doing the routes in the standard react router 4 way ... which works properly in react-boilerplate\n  // since we aren't doing a server side data load outside of the render, with a load function, ,the way that stephen grider suggests, and also the way that next js seems to work,\n  // and are instead doing the double render technique, do we actually need to worry about the route,\n  // if we were to go the route that Stephen Grider suggests, what would that mean?\n  // we don't have an easy seperate loader function, we have a saga, that does the business.\n  // and the saga's are middlewared into the store!\n\n  var sagasDone = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'utils/monitorSagas'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(store); // maybe if we dispatch a LOCATION_CHANGE to the store, with memHistory?!\n\n  store.dispatch(Object(containers_LanguageProvider_actions__WEBPACK_IMPORTED_MODULE_14__[\"changeLocale\"])(lang)); // store.dispatch(push(url));\n  // renderHtmlDocument({ url, store, sagasDone, assets, webpackDllNames })\n  //       .then((html) => {\n  //         // const notFound = is404(renderProps.routes);// is404 only looks at matching route patterns, but doesn't care what the Content Authority thinks about whether a route exists or not, or whether there is a redirection\n  //         const caardd = getCAARDD(store);\n  //         callback({ html, caardd });// this is where we pass the CAARDD ... to the server\n  //       })\n  //       .catch((e) => callback({ error: e }));\n  // console.log(`url=${url}`);\n  // console.log(`Routes,`, Routes);\n  // const branch = matchRoutes(Routes, url);\n  // console.log(`branch`, branch);\n\n  /*\n  for reasons that I cannot comprehend, matchRoutes is not returning the correct match here on the server.\n  */\n\n  var promises = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-router-config'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'routes'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), url).map(function (_ref3) {\n    var route = _ref3.route;\n    // console.log(`matchedRoute for ${url}... `);\n    // console.log(route);\n    // we could call the loadData function here, but inport another function result, from the saga, that would deduce the computed url that we are supposed to calls\n    // thats the problem, the saga has the job of extracting slug items from the url path, and putting together a complete url to call the api with;\n    // ont that passes all of the permalink items required to make a successful api call.catch((//) => {})\n    // return route.loadData ? route.loadData(store) : null;\n    return null; // what if we don't run the loadData ... what if our saga will do it for us?\n  }).map(function (promise) {\n    // console.log(``);\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve).catch(resolve);\n      });\n    }\n  }); // console.log(promises);// why is the first one undefined? does that matter?\n\n  Promise.all(promises).then(function () {\n    // const context = {};\n    // const content = renderer(req, store, context);\n    renderHtmlDocument({\n      url: url,\n      store: store,\n      sagasDone: sagasDone,\n      assets: assets,\n      webpackDllNames: webpackDllNames,\n      memHistory: memHistory\n    }).then(function (html) {\n      // const notFound = is404(renderProps.routes);// is404 only looks at matching route patterns, but doesn't care what the Content Authority thinks about whether a route exists or not, or whether there is a redirection\n      var notFound = null;\n      var caardd = getCAARDD(store);\n      callback({\n        html: html,\n        notFound: notFound,\n        caardd: caardd\n      }); // this is where we pass the CAARDD\n    }).catch(function (e) {\n      return callback({\n        error: e\n      });\n    }); // if (context.url) {\n    //   // return res.redirect(301, context.url);\n    // }\n    // if (context.notFound) {\n    //   // res.status(404);\n    // }\n    // res.send(content);\n  }); // can we just call <AppRoot><App /></AppRoot> // AppRoot adds the redux store to things\n  // at this point, we need to inspect the CAARDD [Content Authority Api-Response Dead-Drop], in store.global to see what kind of response to return\n  // so basically, moving to react router 4, means having to redo this functionality completely, in a way that will work with RR4 api.\n  // fuggleshnutz\n  // what happens if we try and run it without matching the route first?\n  // pseudocode this:\n  // given our routes (react-router-config format), and given the url of a particular request, ... what do we do?\n  // what we had was a function that would match routes given url, and then callback, with 3 params: error, redirectLocation, and renderProps\n  // wtf are renderProps? i guess it's a boolean sort of. booleanish enough anyways.\n  // match({ routes, location: url }, (error, redirectLocation, renderProps) => {\n  //   if (error) {\n  //     callback({ error });\n  //   } else if (redirectLocation) {\n  //     //callback({ redirectLocation: redirectLocation.pathname + redirectLocation.search });\n  //     callback({ redirectLocation: redirectLocation.pathname });\n  //   } else if (renderProps) {\n  //     renderHtmlDocument({ store, renderProps, sagasDone, assets, webpackDllNames })\n  //       .then((html) => {\n  //         const notFound = is404(renderProps.routes);// is404 only looks at matching route patterns, but doesn't care what the Content Authority thinks about whether a route exists or not, or whether there is a redirection\n  //         const caardd = getCAARDD(store);\n  //         callback({ html, notFound, caardd });// this is where we pass the CAARDD\n  //       })\n  //       .catch((e) => callback({ error: e }));\n  //   } else {\n  //     callback({ error: new Error('Unknown error') });\n  //   }\n  // });\n}\n\n\n\n\nvar _StyledHtmlDocument = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'components/HtmlDocument'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))`${p => p._$p_}`;\n\n//# sourceURL=webpack:///./app/serverEntry.js?");

/***/ }),

/***/ "./app/translations/de.json":
/*!**********************************!*\
  !*** ./app/translations/de.json ***!
  \**********************************/
/*! exports provided: boilerplate.components.Footer.author.message, boilerplate.components.Footer.license.message, boilerplate.components.Header.features, boilerplate.components.Header.home, boilerplate.containers.FeaturePage.css.header, boilerplate.containers.FeaturePage.css.message, boilerplate.containers.FeaturePage.feedback.header, boilerplate.containers.FeaturePage.feedback.message, boilerplate.containers.FeaturePage.header, boilerplate.containers.FeaturePage.internationalization.header, boilerplate.containers.FeaturePage.internationalization.message, boilerplate.containers.FeaturePage.javascript.header, boilerplate.containers.FeaturePage.javascript.message, boilerplate.containers.FeaturePage.network.header, boilerplate.containers.FeaturePage.network.message, boilerplate.containers.FeaturePage.routing.header, boilerplate.containers.FeaturePage.routing.message, boilerplate.containers.FeaturePage.scaffolding.header, boilerplate.containers.FeaturePage.scaffolding.message, boilerplate.containers.FeaturePage.state_management.header, boilerplate.containers.FeaturePage.state_management.message, boilerplate.containers.HomePage.start_project.header, boilerplate.containers.HomePage.start_project.message, boilerplate.containers.HomePage.tryme.atPrefix, boilerplate.containers.HomePage.tryme.header, boilerplate.containers.HomePage.tryme.message, boilerplate.containers.LocaleToggle.de, boilerplate.containers.LocaleToggle.en, boilerplate.containers.NotFoundPage.header, default */
/***/ (function(module) {

eval("module.exports = {\"boilerplate.components.Footer.author.message\":\"Mit Liebe gemacht von {author}.\",\"boilerplate.components.Footer.license.message\":\"Dieses Projekt wird unter der MIT-Lizenz veröffentlicht.\",\"boilerplate.components.Header.features\":\"\",\"boilerplate.components.Header.home\":\"\",\"boilerplate.containers.FeaturePage.css.header\":\"\",\"boilerplate.containers.FeaturePage.css.message\":\"Die nächste Generation von CSS\",\"boilerplate.containers.FeaturePage.feedback.header\":\"Sofortiges Feedback\",\"boilerplate.containers.FeaturePage.feedback.message\":\"Genießen Sie die beste Entwicklungserfahrung und programmieren Sie Ihre App so schnell wie noch nie! Ihre Änderungen an dem CSS und JavaScript sind sofort reflektiert, ohne die Seite aktualisieren zu müssen. So bleibt der Anwendungszustand bestehen, auch wenn Sie etwas in dem darunter liegenden Code aktualisieren!\",\"boilerplate.containers.FeaturePage.header\":\"\",\"boilerplate.containers.FeaturePage.internationalization.header\":\"Komplette i18n Standard-Internationalisierung und Pluralisierung\",\"boilerplate.containers.FeaturePage.internationalization.message\":\"Das Internet ist global. Mehrsprachige- und Pluralisierungsunterstützung ist entscheidend für große Web-Anwendungen.\",\"boilerplate.containers.FeaturePage.javascript.header\":\"Das Internet ist global. Mehrsprachige- und Pluralisierungsunterstützung ist entscheidend für große Web-Anwendungen.\",\"boilerplate.containers.FeaturePage.javascript.message\":\"Benutzen Sie ES6 template strings, object destructuring, arrow functions, JSX syntax und mehr, heute.\",\"boilerplate.containers.FeaturePage.network.header\":\"\",\"boilerplate.containers.FeaturePage.network.message\":\"The next frontier in performant web apps: availability without a\\n      network connection from the instant your users load the app.\",\"boilerplate.containers.FeaturePage.routing.header\":\"Standard Routing\",\"boilerplate.containers.FeaturePage.routing.message\":\"Schreiben Sie CSS, das am selben Ort wie ihre Komponenten ist. Deterministisch generierte, einzigartige Klassennamen halten die Spezifität niedrig während styling Konflikte vermieden werden. Senden Sie nur das CSS an ihre Benutzer welches dann wirklich sichtbar ist für die schnellste Performance!\",\"boilerplate.containers.FeaturePage.scaffolding.header\":\"Schnelles Scaffolding\",\"boilerplate.containers.FeaturePage.scaffolding.message\":\"Automatisieren Sie die Kreation von Komponenten, Containern, Routen, Selektoren und Sagas – und ihre Tests – direkt von dem Terminal!\",\"boilerplate.containers.FeaturePage.state_management.header\":\"Berechenbare Stateverwaltung\",\"boilerplate.containers.FeaturePage.state_management.message\":\"Unidirectional data flow erlaubt uns alle Änderungen ihrer Applikation zu loggen und time travel debugging einzusetzen.\",\"boilerplate.containers.HomePage.start_project.header\":\"Beginnen Sie Ihr nächstes React Projekt in Sekunden\",\"boilerplate.containers.HomePage.start_project.message\":\"Ein skalierendes, offline-first Fundament mit der besten DX und einem Fokus auf Performance und bewährte Methoden\",\"boilerplate.containers.HomePage.tryme.atPrefix\":\"\",\"boilerplate.containers.HomePage.tryme.header\":\"Probiere mich!\",\"boilerplate.containers.HomePage.tryme.message\":\"Zeige die Github Repositories von\",\"boilerplate.containers.LocaleToggle.de\":\"\",\"boilerplate.containers.LocaleToggle.en\":\"\",\"boilerplate.containers.NotFoundPage.header\":\"Seite nicht gefunden.\"};\n\n//# sourceURL=webpack:///./app/translations/de.json?");

/***/ }),

/***/ "./app/translations/en.json":
/*!**********************************!*\
  !*** ./app/translations/en.json ***!
  \**********************************/
/*! exports provided: boilerplate.components.Footer.author.message, boilerplate.components.Footer.license.message, boilerplate.components.Header.features, boilerplate.components.Header.home, boilerplate.containers.FeaturePage.css.header, boilerplate.containers.FeaturePage.css.message, boilerplate.containers.FeaturePage.feedback.header, boilerplate.containers.FeaturePage.feedback.message, boilerplate.containers.FeaturePage.header, boilerplate.containers.FeaturePage.internationalization.header, boilerplate.containers.FeaturePage.internationalization.message, boilerplate.containers.FeaturePage.javascript.header, boilerplate.containers.FeaturePage.javascript.message, boilerplate.containers.FeaturePage.network.header, boilerplate.containers.FeaturePage.network.message, boilerplate.containers.FeaturePage.routing.header, boilerplate.containers.FeaturePage.routing.message, boilerplate.containers.FeaturePage.scaffolding.header, boilerplate.containers.FeaturePage.scaffolding.message, boilerplate.containers.FeaturePage.state_management.header, boilerplate.containers.FeaturePage.state_management.message, boilerplate.containers.HomePage.start_project.header, boilerplate.containers.HomePage.start_project.message, boilerplate.containers.HomePage.tryme.atPrefix, boilerplate.containers.HomePage.tryme.header, boilerplate.containers.HomePage.tryme.message, boilerplate.containers.LocaleToggle.de, boilerplate.containers.LocaleToggle.en, boilerplate.containers.NotFoundPage.header, default */
/***/ (function(module) {

eval("module.exports = {\"boilerplate.components.Footer.author.message\":\"Made with love by {author}.\",\"boilerplate.components.Footer.license.message\":\"This project is licensed under the MIT license.\",\"boilerplate.components.Header.features\":\"Features\",\"boilerplate.components.Header.home\":\"Home\",\"boilerplate.containers.FeaturePage.css.header\":\"Features\",\"boilerplate.containers.FeaturePage.css.message\":\"Next generation CSS\",\"boilerplate.containers.FeaturePage.feedback.header\":\"Instant feedback\",\"boilerplate.containers.FeaturePage.feedback.message\":\"Enjoy the best DX and code your app at the speed of thought! Your\\n    saved changes to the CSS and JS are reflected instantaneously\\n    without refreshing the page. Preserve application state even when\\n    you update something in the underlying code!\",\"boilerplate.containers.FeaturePage.header\":\"Features\",\"boilerplate.containers.FeaturePage.internationalization.header\":\"Complete i18n Standard Internationalization & Pluralization\",\"boilerplate.containers.FeaturePage.internationalization.message\":\"Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.\",\"boilerplate.containers.FeaturePage.javascript.header\":\"Next generation JavaScript\",\"boilerplate.containers.FeaturePage.javascript.message\":\"Use template strings, object destructuring, arrow functions, JSX\\n    syntax and more, today.\",\"boilerplate.containers.FeaturePage.network.header\":\"Offline-first\",\"boilerplate.containers.FeaturePage.network.message\":\"The next frontier in performant web apps: availability without a\\n      network connection from the instant your users load the app.\",\"boilerplate.containers.FeaturePage.routing.header\":\"Industry-standard routing\",\"boilerplate.containers.FeaturePage.routing.message\":\"Write composable CSS that's co-located with your components for\\n    complete modularity. Unique generated class names keep the\\n    specificity low while eliminating style clashes. Ship only the\\n    styles that are on the page for the best performance.\",\"boilerplate.containers.FeaturePage.scaffolding.header\":\"Quick scaffolding\",\"boilerplate.containers.FeaturePage.scaffolding.message\":\"Automate the creation of components, containers, routes, selectors\\n  and sagas - and their tests - right from the CLI!\",\"boilerplate.containers.FeaturePage.state_management.header\":\"Predictable state management\",\"boilerplate.containers.FeaturePage.state_management.message\":\"Unidirectional data flow allows for change logging and time travel\\n    debugging.\",\"boilerplate.containers.HomePage.start_project.header\":\"Start your next react project in seconds\",\"boilerplate.containers.HomePage.start_project.message\":\"A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices\",\"boilerplate.containers.HomePage.tryme.atPrefix\":\"@\",\"boilerplate.containers.HomePage.tryme.header\":\"Try me!\",\"boilerplate.containers.HomePage.tryme.message\":\"Show Github repositories by\",\"boilerplate.containers.LocaleToggle.de\":\"de\",\"boilerplate.containers.LocaleToggle.en\":\"en\",\"boilerplate.containers.NotFoundPage.header\":\"Page not found.\"};\n\n//# sourceURL=webpack:///./app/translations/en.json?");

/***/ }),

/***/ "./app/utils/checkStore.js":
/*!*********************************!*\
  !*** ./app/utils/checkStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return checkStore; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ \"invariant\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * Validate the shape of redux store\n */\n\nfunction checkStore(store) {\n  var shape = {\n    dispatch: lodash__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"],\n    subscribe: lodash__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"],\n    getState: lodash__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"],\n    replaceReducer: lodash__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"],\n    runSaga: lodash__WEBPACK_IMPORTED_MODULE_0__[\"isFunction\"],\n    injectedReducers: lodash__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"],\n    injectedSagas: lodash__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"]\n  };\n  invariant__WEBPACK_IMPORTED_MODULE_1___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"conformsTo\"])(store, shape), '(app/utils...) injectors: Expected a valid redux store');\n}\n\n//# sourceURL=webpack:///./app/utils/checkStore.js?");

/***/ }),

/***/ "./app/utils/constants.js":
/*!********************************!*\
  !*** ./app/utils/constants.js ***!
  \********************************/
/*! exports provided: RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESTART_ON_REMOUNT\", function() { return RESTART_ON_REMOUNT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DAEMON\", function() { return DAEMON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ONCE_TILL_UNMOUNT\", function() { return ONCE_TILL_UNMOUNT; });\nvar RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';\nvar DAEMON = '@@saga-injector/daemon';\nvar ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';\n\n//# sourceURL=webpack:///./app/utils/constants.js?");

/***/ }),

/***/ "./app/utils/history.js":
/*!******************************!*\
  !*** ./app/utils/history.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history/createBrowserHistory */ \"history/createBrowserHistory\");\n/* harmony import */ var history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__);\n\nvar history = history_createBrowserHistory__WEBPACK_IMPORTED_MODULE_0___default()();\n/* harmony default export */ __webpack_exports__[\"default\"] = (history);\n\n//# sourceURL=webpack:///./app/utils/history.js?");

/***/ }),

/***/ "./app/utils/injectReducer.js":
/*!************************************!*\
  !*** ./app/utils/injectReducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ \"hoist-non-react-statics\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducerInjectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducerInjectors */ \"./app/utils/reducerInjectors.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/**\n * Dynamically injects a reducer\n *\n * @param {string} key A key of the reducer\n * @param {function} reducer A reducer that will be injected\n *\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var key = _ref.key,\n      reducer = _ref.reducer;\n  return function (WrappedComponent) {\n    var ReducerInjector =\n    /*#__PURE__*/\n    function (_React$Component) {\n      _inherits(ReducerInjector, _React$Component);\n\n      function ReducerInjector(props, context) {\n        var _this;\n\n        _classCallCheck(this, ReducerInjector);\n\n        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReducerInjector).call(this, props, context));\n        Object(_reducerInjectors__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(context.store).injectReducer(key, reducer);\n        return _this;\n      }\n\n      _createClass(ReducerInjector, [{\n        key: \"render\",\n        value: function render() {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props);\n        }\n      }]);\n\n      return ReducerInjector;\n    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n    _defineProperty(ReducerInjector, \"WrappedComponent\", WrappedComponent);\n\n    _defineProperty(ReducerInjector, \"contextTypes\", {\n      store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n    });\n\n    _defineProperty(ReducerInjector, \"displayName\", \"withReducer(\".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', \")\"));\n\n    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(ReducerInjector, WrappedComponent);\n  };\n});\n\n//# sourceURL=webpack:///./app/utils/injectReducer.js?");

/***/ }),

/***/ "./app/utils/injectSaga.js":
/*!*********************************!*\
  !*** ./app/utils/injectSaga.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ \"hoist-non-react-statics\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sagaInjectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagaInjectors */ \"./app/utils/sagaInjectors.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/**\n * Dynamically injects a saga, passes component's props as saga arguments\n *\n * @param {string} key A key of the saga\n * @param {function} saga A root saga that will be injected\n * @param {string} [mode] By default (constants.DAEMON) the saga will be started\n * on component mount and never canceled or started again. Another two options:\n *   - constants.RESTART_ON_REMOUNT — the saga will be started on component mount and\n *   cancelled with `task.cancel()` on component unmount for improved performance,\n *   - constants.ONCE_TILL_UNMOUNT — behaves like 'RESTART_ON_REMOUNT' but never runs it again.\n *\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var key = _ref.key,\n      saga = _ref.saga,\n      mode = _ref.mode;\n  return function (WrappedComponent) {\n    var InjectSaga =\n    /*#__PURE__*/\n    function (_React$Component) {\n      _inherits(InjectSaga, _React$Component);\n\n      function InjectSaga(props, context) {\n        var _this;\n\n        _classCallCheck(this, InjectSaga);\n\n        _this = _possibleConstructorReturn(this, _getPrototypeOf(InjectSaga).call(this, props, context));\n        _this.injectors = Object(_sagaInjectors__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(context.store);\n\n        _this.injectors.injectSaga(key, {\n          saga: saga,\n          mode: mode\n        }, _this.props);\n\n        return _this;\n      }\n\n      _createClass(InjectSaga, [{\n        key: \"componentWillUnmount\",\n        value: function componentWillUnmount() {\n          this.injectors.ejectSaga(key);\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, this.props);\n        }\n      }]);\n\n      return InjectSaga;\n    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n    _defineProperty(InjectSaga, \"WrappedComponent\", WrappedComponent);\n\n    _defineProperty(InjectSaga, \"contextTypes\", {\n      store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n    });\n\n    _defineProperty(InjectSaga, \"displayName\", \"withSaga(\".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', \")\"));\n\n    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(InjectSaga, WrappedComponent);\n  };\n});\n\n//# sourceURL=webpack:///./app/utils/injectSaga.js?");

/***/ }),

/***/ "./app/utils/reducerInjectors.js":
/*!***************************************!*\
  !*** ./app/utils/reducerInjectors.js ***!
  \***************************************/
/*! exports provided: injectReducerFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"injectReducerFactory\", function() { return injectReducerFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getInjectors; });\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ \"invariant\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _checkStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkStore */ \"./app/utils/checkStore.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./app/reducers.js\");\n\n\n\n\nfunction injectReducerFactory(store, isValid) {\n  return function injectReducer(key, reducer) {\n    if (!isValid) Object(_checkStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(store);\n    invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isString\"])(key) && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(key) && Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isFunction\"])(reducer), '(app/utils...) injectReducer: Expected `reducer` to be a reducer function'); // Check `store.injectedReducers[key] === reducer` for hot reloading when a key is the same but a reducer is different\n\n    if (Reflect.has(store.injectedReducers, key) && store.injectedReducers[key] === reducer) return;\n    store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign\n\n    store.replaceReducer(Object(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(store.injectedReducers));\n  };\n}\nfunction getInjectors(store) {\n  Object(_checkStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(store);\n  return {\n    injectReducer: injectReducerFactory(store, true)\n  };\n}\n\n//# sourceURL=webpack:///./app/utils/reducerInjectors.js?");

/***/ }),

/***/ "./app/utils/request.js":
/*!******************************!*\
  !*** ./app/utils/request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return request; });\n/**\n * Parses the JSON returned by a network request\n *\n * @param  {object} response A response from a network request\n *\n * @return {object}          The parsed JSON from the request\n */\nfunction parseJSON(response) {\n  if (response.status === 204 || response.status === 205) {\n    return null;\n  }\n\n  return response.json();\n}\n/**\n * Checks if a network request came back fine, and throws an error if not\n *\n * @param  {object} response   A response from a network request\n *\n * @return {object|undefined} Returns either the response, or throws an error\n */\n\n\nfunction checkStatus(response) {\n  if (response.status >= 200 && response.status < 300) {\n    return response;\n  }\n\n  var error = new Error(response.statusText);\n  error.response = response;\n  throw error;\n}\n/**\n * Requests a URL, returning a promise\n *\n * @param  {string} url       The URL we want to request\n * @param  {object} [options] The options we want to pass to \"fetch\"\n *\n * @return {object}           The response data\n */\n\n\nfunction request(url, options) {\n  return fetch(url, options).then(checkStatus).then(parseJSON);\n}\n\n//# sourceURL=webpack:///./app/utils/request.js?");

/***/ }),

/***/ "./app/utils/sagaInjectors.js":
/*!************************************!*\
  !*** ./app/utils/sagaInjectors.js ***!
  \************************************/
/*! exports provided: injectSagaFactory, ejectSagaFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"injectSagaFactory\", function() { return injectSagaFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ejectSagaFactory\", function() { return ejectSagaFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getInjectors; });\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ \"invariant\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _checkStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkStore */ \"./app/utils/checkStore.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./app/utils/constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar allowedModes = [_constants__WEBPACK_IMPORTED_MODULE_3__[\"RESTART_ON_REMOUNT\"], _constants__WEBPACK_IMPORTED_MODULE_3__[\"DAEMON\"], _constants__WEBPACK_IMPORTED_MODULE_3__[\"ONCE_TILL_UNMOUNT\"]];\n\nvar checkKey = function checkKey(key) {\n  return invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isString\"])(key) && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(key), '(app/utils...) injectSaga: Expected `key` to be a non empty string');\n};\n\nvar checkDescriptor = function checkDescriptor(descriptor) {\n  var shape = {\n    saga: lodash__WEBPACK_IMPORTED_MODULE_1__[\"isFunction\"],\n    mode: function mode(_mode) {\n      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isString\"])(_mode) && allowedModes.includes(_mode);\n    }\n  };\n  invariant__WEBPACK_IMPORTED_MODULE_0___default()(Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"conformsTo\"])(descriptor, shape), '(app/utils...) injectSaga: Expected a valid saga descriptor');\n};\n\nfunction injectSagaFactory(store, isValid) {\n  return function injectSaga(key) {\n    var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var args = arguments.length > 2 ? arguments[2] : undefined;\n    if (!isValid) Object(_checkStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(store);\n\n    var newDescriptor = _objectSpread({}, descriptor, {\n      mode: descriptor.mode || _constants__WEBPACK_IMPORTED_MODULE_3__[\"DAEMON\"]\n    });\n\n    var saga = newDescriptor.saga,\n        mode = newDescriptor.mode;\n    checkKey(key);\n    checkDescriptor(newDescriptor);\n    var hasSaga = Reflect.has(store.injectedSagas, key);\n\n    if (true) {\n      var oldDescriptor = store.injectedSagas[key]; // enable hot reloading of daemon and once-till-unmount sagas\n\n      if (hasSaga && oldDescriptor.saga !== saga) {\n        oldDescriptor.task.cancel();\n        hasSaga = false;\n      }\n    }\n\n    if (!hasSaga || hasSaga && mode !== _constants__WEBPACK_IMPORTED_MODULE_3__[\"DAEMON\"] && mode !== _constants__WEBPACK_IMPORTED_MODULE_3__[\"ONCE_TILL_UNMOUNT\"]) {\n      /* eslint-disable no-param-reassign */\n      store.injectedSagas[key] = _objectSpread({}, newDescriptor, {\n        task: store.runSaga(saga, args)\n      });\n      /* eslint-enable no-param-reassign */\n    }\n  };\n}\nfunction ejectSagaFactory(store, isValid) {\n  return function ejectSaga(key) {\n    if (!isValid) Object(_checkStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(store);\n    checkKey(key);\n\n    if (Reflect.has(store.injectedSagas, key)) {\n      var descriptor = store.injectedSagas[key];\n\n      if (descriptor.mode && descriptor.mode !== _constants__WEBPACK_IMPORTED_MODULE_3__[\"DAEMON\"]) {\n        descriptor.task.cancel(); // Clean up in production; in development we need `descriptor.saga` for hot reloading\n\n        if (false) {}\n      }\n    }\n  };\n}\nfunction getInjectors(store) {\n  Object(_checkStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(store);\n  return {\n    injectSaga: injectSagaFactory(store, true),\n    ejectSaga: ejectSagaFactory(store, true)\n  };\n}\n\n//# sourceURL=webpack:///./app/utils/sagaInjectors.js?");

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./app/serverEntry.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/a.cormack/Sites/hyperbole/spa/app/serverEntry.js */\"./app/serverEntry.js\");\n\n\n//# sourceURL=webpack:///multi_./app/serverEntry.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "connected-react-router/immutable":
/*!***************************************************!*\
  !*** external "connected-react-router/immutable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connected-react-router/immutable\");\n\n//# sourceURL=webpack:///external_%22connected-react-router/immutable%22?");

/***/ }),

/***/ "history/createBrowserHistory":
/*!***********************************************!*\
  !*** external "history/createBrowserHistory" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history/createBrowserHistory\");\n\n//# sourceURL=webpack:///external_%22history/createBrowserHistory%22?");

/***/ }),

/***/ "history/createMemoryHistory":
/*!**********************************************!*\
  !*** external "history/createMemoryHistory" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history/createMemoryHistory\");\n\n//# sourceURL=webpack:///external_%22history/createMemoryHistory%22?");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hoist-non-react-statics\");\n\n//# sourceURL=webpack:///external_%22hoist-non-react-statics%22?");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immutable\");\n\n//# sourceURL=webpack:///external_%22immutable%22?");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"invariant\");\n\n//# sourceURL=webpack:///external_%22invariant%22?");

/***/ }),

/***/ "loadable-components":
/*!**************************************!*\
  !*** external "loadable-components" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"loadable-components\");\n\n//# sourceURL=webpack:///external_%22loadable-components%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intl\");\n\n//# sourceURL=webpack:///external_%22react-intl%22?");

/***/ }),

/***/ "react-intl/locale-data/de":
/*!********************************************!*\
  !*** external "react-intl/locale-data/de" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intl/locale-data/de\");\n\n//# sourceURL=webpack:///external_%22react-intl/locale-data/de%22?");

/***/ }),

/***/ "react-intl/locale-data/en":
/*!********************************************!*\
  !*** external "react-intl/locale-data/en" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intl/locale-data/en\");\n\n//# sourceURL=webpack:///external_%22react-intl/locale-data/en%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-immutable":
/*!**********************************!*\
  !*** external "redux-immutable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-immutable\");\n\n//# sourceURL=webpack:///external_%22redux-immutable%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reselect\");\n\n//# sourceURL=webpack:///external_%22reselect%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });