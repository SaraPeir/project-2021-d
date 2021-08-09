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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar WeatherForm = function WeatherForm(_ref) {\n  var provinces = _ref.provinces,\n      onHandleSubmit = _ref.onHandleSubmit;\n  var options = [];\n\n  for (var i = 1; i <= provinces.length; i++) {\n    options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"option\", {\n      key: i,\n      value: provinces[i - 1].CAPITAL_PROVINCIA\n    }, provinces[i - 1].CAPITAL_PROVINCIA));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      console.log('HOLAAA');\n      onHandleSubmit();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    \"class\": \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"provinceSelect\",\n    \"class\": \"form-label\"\n  }, \"Selecciona la provincia\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"select\", {\n    \"class\": \"form-select\",\n    \"aria-label\": \"provinceSelect\",\n    onChange: function onChange(e) {\n      console.log('e.target.value', e.target.value);\n    }\n  }, options), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"d-grid gap-2 mx-auto col-6 p-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    \"data-bs-dismiss\": \"modal\"\n  }, \"Env\\xEDa\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherForm);\n\n//# sourceURL=webpack://project-2021-c/./src/client/asyncComponents/WeatherForm/WeatherForm.js?");

/***/ })

};
;