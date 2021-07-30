(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["tasks"],{

/***/ "./src/client/components/Tasks/Tasks.js":
/*!**********************************************!*\
  !*** ./src/client/components/Tasks/Tasks.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _graphql_queries_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphql/queries/tasks */ "./src/client/graphql/queries/tasks.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");




var Tasks = function Tasks() {
  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_tasks__WEBPACK_IMPORTED_MODULE_1__.default),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error :(");
  return data.tasks.map(function (_ref) {
    var isDone = _ref.isDone,
        task = _ref.task;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: task
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, task, ": ", isDone));
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);

/***/ }),

/***/ "./src/client/graphql/queries/tasks.js":
/*!*********************************************!*\
  !*** ./src/client/graphql/queries/tasks.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");


var _templateObject;


var CURRENT_TASKS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    query currentTasks {\n        tasks {\n        _id\n        isDone\n        task\n        }\n    }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CURRENT_TASKS);

/***/ })

}]);
//# sourceMappingURL=tasks.04ce66101bb1e533ec3c.js.map