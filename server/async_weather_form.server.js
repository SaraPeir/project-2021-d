/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "async_weather_form";
exports.ids = ["async_weather_form"];
exports.modules = {

/***/ "./src/client/asyncComponents/WeatherForm/WeatherForm.js":
/*!***************************************************************!*\
  !*** ./src/client/asyncComponents/WeatherForm/WeatherForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_slices_weatherShower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/slices/weatherShower */ \"./src/redux/slices/weatherShower.js\");\n/* harmony import */ var _redux_slices_fetchWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/slices/fetchWeather */ \"./src/redux/slices/fetchWeather.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ModuleViewed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ModuleViewed */ \"./src/client/components/ModuleViewed/index.js\");\n\n\n\n\n\n\n\nvar WeatherForm = function WeatherForm(_ref) {\n  var provinces = _ref.provinces;\n  var options = [];\n  var codProv;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      optionValue = _useState2[0],\n      setOptionValue = _useState2[1];\n\n  if (optionValue) {\n    var selectedProvince = provinces.find(function (prov) {\n      return prov.CAPITAL_PROVINCIA === optionValue;\n    });\n    codProv = selectedProvince.CODPROV;\n  }\n\n  for (var i = 1; i <= provinces.length; i++) {\n    options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_ModuleViewed__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"option\", {\n      key: i,\n      value: provinces[i - 1].CAPITAL_PROVINCIA\n    }, provinces[i - 1].CAPITAL_PROVINCIA)));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"form\", {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      dispatch((0,_redux_slices_fetchWeather__WEBPACK_IMPORTED_MODULE_3__.fetchWeatherThunk)(codProv));\n      dispatch((0,_redux_slices_weatherShower__WEBPACK_IMPORTED_MODULE_2__.showWeather)());\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    \"class\": \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    htmlFor: \"provinceSelect\",\n    \"class\": \"form-label\"\n  }, \"Selecciona la provincia\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"select\", {\n    \"class\": \"form-select\",\n    \"aria-label\": \"provinceSelect\",\n    onChange: function onChange(e) {\n      return setOptionValue(e.target.value);\n    }\n  }, options), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"d-grid gap-2 mx-auto col-6 p-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    \"data-bs-dismiss\": \"modal\"\n  }, \"Env\\xEDa\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherForm);\n\n//# sourceURL=webpack://project-2021-c/./src/client/asyncComponents/WeatherForm/WeatherForm.js?");

/***/ }),

/***/ "./src/client/components/ModuleViewed/ModuleViewed.js":
/*!************************************************************!*\
  !*** ./src/client/components/ModuleViewed/ModuleViewed.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-visibility-sensor */ \"react-visibility-sensor\");\n/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar ModuleViewed = function ModuleViewed(_ref) {\n  var children = _ref.children;\n\n  var onChange = function onChange(isVisible) {\n    return console.log('Element is now %s', isVisible ? 'visible' : 'hidden');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default()), {\n    onChange: onChange\n  }, children);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModuleViewed);\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/ModuleViewed/ModuleViewed.js?");

/***/ }),

/***/ "./src/client/components/ModuleViewed/index.js":
/*!*****************************************************!*\
  !*** ./src/client/components/ModuleViewed/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ModuleViewed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModuleViewed */ \"./src/client/components/ModuleViewed/ModuleViewed.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ModuleViewed__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/ModuleViewed/index.js?");

/***/ })

};
;