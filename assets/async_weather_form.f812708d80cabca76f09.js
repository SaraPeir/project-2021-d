(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["async_weather_form"],{

/***/ "./src/client/asyncComponents/WeatherForm/WeatherForm.js":
/*!***************************************************************!*\
  !*** ./src/client/asyncComponents/WeatherForm/WeatherForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../redux/slices/weatherShower'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../redux/slices/fetchWeather'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var WeatherForm = function WeatherForm(_ref) {
  var provinces = _ref.provinces,
      onHandleSubmit = _ref.onHandleSubmit;
  var options = [];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  for (var i = 1; i <= provinces.length; i++) {
    options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: i,
      value: provinces[i - 1].CAPITAL_PROVINCIA
    }, provinces[i - 1].CAPITAL_PROVINCIA));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      console.log('HOLAAA');
      dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../redux/slices/weatherShower'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
      dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../redux/slices/fetchWeather'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('21'));
      onHandleSubmit();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "provinceSelect",
    "class": "form-label"
  }, "Selecciona la provincia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    "class": "form-select",
    "aria-label": "provinceSelect",
    onChange: function onChange(e) {
      console.log('e.target.value', e.target.value);
    }
  }, options), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-grid gap-2 mx-auto col-6 p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    "data-bs-dismiss": "modal"
  }, "Env\xEDa"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherForm);

/***/ })

}]);
//# sourceMappingURL=async_weather_form.f812708d80cabca76f09.js.map