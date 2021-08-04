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

/***/ "./src/client/components/Form/Form.js":
/*!********************************************!*\
  !*** ./src/client/components/Form/Form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_mutations_editTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/mutations/editTask */ \"./src/client/graphql/mutations/editTask.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Spinner */ \"./src/client/components/Spinner/index.js\");\n\n\n\n\n\n\nfunction Form(_ref) {\n  var id = _ref.id,\n      task = _ref.task,\n      body = _ref.body,\n      isDone = _ref.isDone;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(task),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      taskInput = _useState2[0],\n      setTaskInput = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(body),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      bodyInput = _useState4[0],\n      setBodyInput = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isDone),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      isChecked = _useState6[0],\n      setIsChecked = _useState6[1];\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_graphql_mutations_editTask__WEBPACK_IMPORTED_MODULE_2__.default),\n      _useMutation2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useMutation, 2),\n      editTask = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error;\n\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Spinner__WEBPACK_IMPORTED_MODULE_4__.default, null);\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"Error :(\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"form\", {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      editTask({\n        variables: {\n          id: id,\n          isDone: isChecked,\n          task: taskInput,\n          body: bodyInput\n        }\n      });\n      console.log(\"ID:\".concat(id, \" SUBMITTED\"));\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    htmlFor: \"task-title\",\n    className: \"form-label\"\n  }, \"Task\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    id: \"task-title\",\n    defaultValue: task,\n    onChange: function onChange(e) {\n      return setTaskInput(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    htmlFor: \"task-details\",\n    className: \"form-label\"\n  }, \"Task details\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"textarea\", {\n    className: \"form-control\",\n    id: \"task-details\",\n    rows: \"3\",\n    defaultValue: body,\n    onChange: function onChange(e) {\n      return setBodyInput(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"form-check\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"input\", {\n    className: \"form-check-input\",\n    type: \"checkbox\",\n    value: \"\",\n    id: \"flexCheckIndeterminate\",\n    onChange: function onChange(e) {\n      return setIsChecked(e.target.checked);\n    },\n    checked: isChecked\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"label\", {\n    className: \"form-check-label\",\n    htmlFor: \"flexCheckIndeterminate\"\n  }, \"Completed\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    \"data-bs-dismiss\": \"modal\"\n  }, \"Save\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Form/Form.js?");

/***/ }),

/***/ "./src/client/components/Form/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/Form/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ \"./src/client/components/Form/Form.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Form__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Form/index.js?");

/***/ }),

/***/ "./src/client/components/Modal/Modal.js":
/*!**********************************************!*\
  !*** ./src/client/components/Modal/Modal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Form */ \"./src/client/components/Form/index.js\");\n/* harmony import */ var _graphql_mutations_editTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/mutations/editTask */ \"./src/client/graphql/mutations/editTask.js\");\n/* harmony import */ var _graphql_queries_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/queries/task */ \"./src/client/graphql/queries/task.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction Modal(_ref) {\n  var id = _ref.id,\n      task = _ref.task,\n      body = _ref.body,\n      isDone = _ref.isDone;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"modal fade\",\n    id: \"modal-\".concat(id),\n    tabIndex: \"-1\",\n    \"aria-labelledby\": \"exampleModalLabel\",\n    \"aria-hidden\": \"true\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"modal-dialog\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"modal-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"modal-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h5\", {\n    className: \"modal-title\"\n  }, \"Modal title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"btn-close\",\n    \"data-bs-dismiss\": \"modal\",\n    \"aria-label\": \"Save\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"modal-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__.default, {\n    task: task,\n    body: body,\n    id: id,\n    isDone: isDone\n  })))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Modal/Modal.js?");

/***/ }),

/***/ "./src/client/components/Modal/ModalButton.js":
/*!****************************************************!*\
  !*** ./src/client/components/Modal/ModalButton.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction ModalButton(_ref) {\n  var id = _ref.id;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"btn btn-primary\",\n    \"data-bs-toggle\": \"modal\",\n    \"data-bs-target\": \"#modal-\".concat(id)\n  }, \"Edit\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalButton);\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Modal/ModalButton.js?");

/***/ }),

/***/ "./src/client/components/Modal/index.js":
/*!**********************************************!*\
  !*** ./src/client/components/Modal/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"ModalButton\": () => (/* reexport safe */ _ModalButton__WEBPACK_IMPORTED_MODULE_1__.default)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./src/client/components/Modal/Modal.js\");\n/* harmony import */ var _ModalButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalButton */ \"./src/client/components/Modal/ModalButton.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Modal__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Modal/index.js?");

/***/ }),

/***/ "./src/client/components/Spinner/index.js":
/*!************************************************!*\
  !*** ./src/client/components/Spinner/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Spinner() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"spinner-border\",\n    role: \"status\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"visually-hidden\"\n  }, \"Loading...\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Spinner/index.js?");

/***/ }),

/***/ "./src/client/components/Task/Task.js":
/*!********************************************!*\
  !*** ./src/client/components/Task/Task.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_mutations_deleteTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/mutations/deleteTask */ \"./src/client/graphql/mutations/deleteTask.js\");\n/* harmony import */ var _graphql_queries_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/queries/tasks */ \"./src/client/graphql/queries/tasks.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Spinner */ \"./src/client/components/Spinner/index.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modal */ \"./src/client/components/Modal/index.js\");\n/* harmony import */ var _Task_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Task.scss */ \"./src/client/components/Task/Task.scss\");\n/* harmony import */ var _Task_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Task_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar Task = function Task(_ref) {\n  var isDone = _ref.isDone,\n      task = _ref.task,\n      id = _ref.id,\n      body = _ref.body;\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_graphql_mutations_deleteTask__WEBPACK_IMPORTED_MODULE_2__.default, {\n    refetchQueries: [{\n      query: _graphql_queries_tasks__WEBPACK_IMPORTED_MODULE_3__.default\n    }]\n  }),\n      _useMutation2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useMutation, 2),\n      deleteTask = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error;\n\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Spinner__WEBPACK_IMPORTED_MODULE_5__.default, null);\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"Error :(\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"card card-style\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"card-body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h5\", {\n    className: \"card-title\"\n  }, task), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, isDone.toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", {\n    className: \"card-text\"\n  }, body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"buttons-container d-flex justify-content-around\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Modal__WEBPACK_IMPORTED_MODULE_6__.ModalButton, {\n    id: id\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return deleteTask({\n        variables: {\n          id: id\n        }\n      });\n    },\n    type: \"button\",\n    className: \"btn btn-primary\"\n  }, \"Delete\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {\n    id: id,\n    task: task,\n    body: body,\n    isDone: isDone\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Task/Task.js?");

/***/ }),

/***/ "./src/client/components/Task/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/Task/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"tasks\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | tasks */ \"tasks\").then(__webpack_require__.bind(__webpack_require__, /*! ./Task */ \"./src/client/components/Task/Task.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./Task */ \"./src/client/components/Task/Task.js\");\n    }\n\n    return eval('require.resolve')(\"./Task\");\n  }\n}, {\n  ssr: false\n}));\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Task/index.js?");

/***/ }),

/***/ "./src/client/components/Tasks/Tasks.js":
/*!**********************************************!*\
  !*** ./src/client/components/Tasks/Tasks.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_queries_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphql/queries/tasks */ \"./src/client/graphql/queries/tasks.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Task */ \"./src/client/components/Task/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Tasks = function Tasks() {\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries_tasks__WEBPACK_IMPORTED_MODULE_1__.default),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data; // add { data, loading, error } when query and mutations will be in separated files\n\n\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Loading...\");\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Error :(\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container-fluid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row gy-5 g-2\"\n  }, data.tasks.map(function (_ref) {\n    var isDone = _ref.isDone,\n        task = _ref.task,\n        _id = _ref._id,\n        body = _ref.body;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: _id,\n      className: \"col-4 d-flex justify-content-center\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Task__WEBPACK_IMPORTED_MODULE_2__.default, {\n      key: _id,\n      isDone: isDone,\n      task: task,\n      id: _id,\n      body: body\n    }));\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Tasks/Tasks.js?");

/***/ }),

/***/ "./src/client/graphql/mutations/deleteTask.js":
/*!****************************************************!*\
  !*** ./src/client/graphql/mutations/deleteTask.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _templateObject;\n\n\nvar DELETE_TASK = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    mutation deleteTask($id: ID) {\\n        deleteTask(id: $id) {\\n            _id\\n            isDone\\n            task\\n            body\\n        }\\n  }\\n\"])));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DELETE_TASK);\n\n//# sourceURL=webpack://project-2021-c/./src/client/graphql/mutations/deleteTask.js?");

/***/ }),

/***/ "./src/client/graphql/mutations/editTask.js":
/*!**************************************************!*\
  !*** ./src/client/graphql/mutations/editTask.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _templateObject;\n\n\nvar EDIT_TASK = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    mutation editTask(\\n            $id: ID!\\n            $isDone: Boolean!\\n            $task: String!\\n            $body: String!\\n        ) {\\n        editTask(\\n            task: {\\n                id: $id\\n                isDone: $isDone\\n                task: $task\\n                body: $body\\n            }) {\\n            _id\\n            isDone\\n            task\\n            body\\n        }\\n  }\\n\"])));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EDIT_TASK);\n\n//# sourceURL=webpack://project-2021-c/./src/client/graphql/mutations/editTask.js?");

/***/ }),

/***/ "./src/client/graphql/queries/task.js":
/*!********************************************!*\
  !*** ./src/client/graphql/queries/task.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _templateObject;\n\n\nvar CURRENT_TASK = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    query currentTask($id: ID) {\\n        currentTask(id: $id) {\\n            _id\\n            isDone\\n            task\\n            body\\n        }\\n  }\\n\"])));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CURRENT_TASK);\n\n//# sourceURL=webpack://project-2021-c/./src/client/graphql/queries/task.js?");

/***/ }),

/***/ "./src/client/graphql/queries/tasks.js":
/*!*********************************************!*\
  !*** ./src/client/graphql/queries/tasks.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _templateObject;\n\n\nvar CURRENT_TASKS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n    query currentTasks {\\n        tasks {\\n            _id\\n            isDone\\n            task\\n            body\\n        }\\n    }\\n\"])));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CURRENT_TASKS);\n\n//# sourceURL=webpack://project-2021-c/./src/client/graphql/queries/tasks.js?");

/***/ }),

/***/ "./src/client/components/Task/Task.scss":
/*!**********************************************!*\
  !*** ./src/client/components/Task/Task.scss ***!
  \**********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Task/Task.scss?");

/***/ })

};
;