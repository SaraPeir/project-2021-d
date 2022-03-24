(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["async_weather_form"],{

/***/ 6579:
/*!***************************************************************!*\
  !*** ./src/client/asyncComponents/WeatherForm/WeatherForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5768);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var _redux_slices_weatherShower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/slices/weatherShower */ 455);
/* harmony import */ var _redux_slices_fetchWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/slices/fetchWeather */ 3429);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ 5514);
/* harmony import */ var _components_ModuleViewed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ModuleViewed */ 7948);







var WeatherForm = function WeatherForm(_ref) {
  var provinces = _ref.provinces;
  var options = [];
  var codProv;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      optionValue = _useState2[0],
      setOptionValue = _useState2[1];

  if (optionValue) {
    var selectedProvince = provinces.find(function (prov) {
      return prov.CAPITAL_PROVINCIA === optionValue;
    });
    codProv = selectedProvince.CODPROV;
  }

  for (var i = 1; i <= provinces.length; i++) {
    options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_ModuleViewed__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
      key: i,
      value: provinces[i - 1].CAPITAL_PROVINCIA
    }, provinces[i - 1].CAPITAL_PROVINCIA)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      dispatch((0,_redux_slices_fetchWeather__WEBPACK_IMPORTED_MODULE_3__.fetchWeatherThunk)(codProv));
      dispatch((0,_redux_slices_weatherShower__WEBPACK_IMPORTED_MODULE_2__.showWeather)());
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "class": "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: "provinceSelect",
    "class": "form-label"
  }, "Selecciona la provincia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", {
    "class": "form-select",
    "aria-label": "provinceSelect",
    onChange: function onChange(e) {
      return setOptionValue(e.target.value);
    }
  }, options), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "d-grid gap-2 mx-auto col-6 p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    "data-bs-dismiss": "modal"
  }, "Env\xEDa"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherForm);

/***/ }),

/***/ 9627:
/*!************************************************************!*\
  !*** ./src/client/components/ModuleViewed/ModuleViewed.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-visibility-sensor */ 965);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__);



var ModuleViewed = function ModuleViewed(_ref) {
  var children = _ref.children;

  var onChange = function onChange(isVisible) {
    return console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default()), {
    onChange: onChange
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModuleViewed);

/***/ }),

/***/ 7948:
/*!*****************************************************!*\
  !*** ./src/client/components/ModuleViewed/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModuleViewed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModuleViewed */ 9627);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ModuleViewed__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ })

}]);
//# sourceMappingURL=async_weather_form.6f40d169e52dfc92bdc1.js.map