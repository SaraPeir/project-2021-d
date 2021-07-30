/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "tasks";
exports.ids = ["tasks"];
exports.modules = {

/***/ "./src/client/components/Tasks/Tasks.js":
/*!**********************************************!*\
  !*** ./src/client/components/Tasks/Tasks.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_queries_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/queries/tasks */ \"./src/client/graphql/queries/tasks.js\");\n/* harmony import */ var _graphql_mutations_deleteTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/mutations/deleteTask */ \"./src/client/graphql/mutations/deleteTask.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar Tasks = function Tasks() {\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_graphql_queries_tasks__WEBPACK_IMPORTED_MODULE_2__.default),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_graphql_mutations_deleteTask__WEBPACK_IMPORTED_MODULE_3__.default),\n      _useMutation2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useMutation, 1),\n      deleteTask = _useMutation2[0]; // add { data, loading, error } when query and mutations will be in separated files\n\n\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"Loading...\");\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"Error :(\");\n  return data.tasks.map(function (_ref) {\n    var isDone = _ref.isDone,\n        task = _ref.task,\n        _id = _ref._id;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n      key: task\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, task, \": \", isDone.toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n      onClick: function onClick() {\n        return deleteTask({\n          variables: {\n            id: _id\n          }\n        });\n      }\n    }, \"Delete\"));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Tasks/Tasks.js?");

/***/ }),

/***/ "./src/client/graphql/mutations/deleteTask.js":
/*!****************************************************!*\
  !*** ./src/client/graphql/mutations/deleteTask.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _templateObject;\n\n\nvar DELETE_TASK = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    mutation deleteTask($id: ID) {\\n        deleteTask(id: $id) {\\n            _id\\n            isDone\\n            task\\n        }\\n  }\\n\"])));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DELETE_TASK);\n\n//# sourceURL=webpack://project-2021-c/./src/client/graphql/mutations/deleteTask.js?");

/***/ }),

/***/ "./src/client/graphql/queries/tasks.js":
/*!*********************************************!*\
  !*** ./src/client/graphql/queries/tasks.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _templateObject;\n\n\nvar CURRENT_TASKS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    query currentTasks {\\n        tasks {\\n        _id\\n        isDone\\n        task\\n        }\\n    }\\n\"])));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CURRENT_TASKS);\n\n//# sourceURL=webpack://project-2021-c/./src/client/graphql/queries/tasks.js?");

/***/ })

};
;