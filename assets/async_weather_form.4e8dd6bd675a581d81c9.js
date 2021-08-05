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


var WeatherForm = function WeatherForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      console.log('HOLAAA');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    "for": "provinceInput",
    "class": "form-label"
  }, "Provincia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    "class": "form-control",
    id: "provinceInput"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    "data-bs-dismiss": "modal"
  }, "Save")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherForm);

/***/ })

}]);
//# sourceMappingURL=async_weather_form.4e8dd6bd675a581d81c9.js.map