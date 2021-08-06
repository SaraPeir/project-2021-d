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


var WeatherForm = function WeatherForm(_ref) {
  var provinces = _ref.provinces;
  var options = [];

  for (var i = 1; i <= provinces.length; i++) {
    options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: provinces[i - 1].CAPITAL_PROVINCIA
    }, provinces[i - 1].CAPITAL_PROVINCIA));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      console.log('HOLAAA');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "provinceSelect",
    "class": "form-label"
  }, "Provincia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    "class": "form-select",
    "aria-label": "provinceSelect"
  }, options), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-grid gap-2 mx-auto col-6 p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    "data-bs-dismiss": "modal"
  }, "Save"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherForm);

/***/ })

}]);
//# sourceMappingURL=async_weather_form.e4ac96067c2f87a66a22.js.map