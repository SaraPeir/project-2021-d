(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["tasks"],{

/***/ "./src/client/components/Form/Form.js":
/*!********************************************!*\
  !*** ./src/client/components/Form/Form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _graphql_mutations_editTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/mutations/editTask */ "./src/client/graphql/mutations/editTask.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");





function Form(_ref) {
  var id = _ref.id,
      task = _ref.task,
      body = _ref.body,
      isDone = _ref.isDone;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(task),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      taskInput = _useState2[0],
      setTaskInput = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(body),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      bodyInput = _useState4[0],
      setBodyInput = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isDone),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      isChecked = _useState6[0],
      setIsChecked = _useState6[1];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_graphql_mutations_editTask__WEBPACK_IMPORTED_MODULE_2__.default),
      _useMutation2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 2),
      editTask = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      editTask({
        variables: {
          id: id,
          isDone: isChecked,
          task: taskInput,
          body: bodyInput
        }
      });
      console.log("ID:".concat(id, " SUBMITTED"));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: "task-title",
    className: "form-label"
  }, "Task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
    className: "form-control",
    id: "task-title",
    defaultValue: task,
    onChange: function onChange(e) {
      return setTaskInput(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: "task-details",
    className: "form-label"
  }, "Task details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("textarea", {
    className: "form-control",
    id: "task-details",
    rows: "3",
    defaultValue: body,
    onChange: function onChange(e) {
      return setBodyInput(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: "",
    id: "flexCheckIndeterminate",
    onChange: function onChange(e) {
      return setIsChecked(e.target.checked);
    },
    checked: isChecked
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexCheckIndeterminate"
  }, "Completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./src/client/components/Form/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/Form/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./src/client/components/Form/Form.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Form__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/client/components/Modal/Modal.js":
/*!**********************************************!*\
  !*** ./src/client/components/Modal/Modal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Form */ "./src/client/components/Form/index.js");
/* harmony import */ var _graphql_mutations_editTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/mutations/editTask */ "./src/client/graphql/mutations/editTask.js");
/* harmony import */ var _graphql_queries_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/queries/task */ "./src/client/graphql/queries/task.js");






function Modal(_ref) {
  var id = _ref.id,
      task = _ref.task,
      body = _ref.body,
      isDone = _ref.isDone;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal fade",
    id: "modal-".concat(id),
    tabIndex: "-1",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "modal-title"
  }, "Modal title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Save"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Form__WEBPACK_IMPORTED_MODULE_1__.default, {
    task: task,
    body: body,
    id: id,
    isDone: isDone
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/client/components/Modal/ModalButton.js":
/*!****************************************************!*\
  !*** ./src/client/components/Modal/ModalButton.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ModalButton(_ref) {
  var id = _ref.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    "data-bs-toggle": "modal",
    "data-bs-target": "#modal-".concat(id)
  }, "Edit");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalButton);

/***/ }),

/***/ "./src/client/components/Modal/index.js":
/*!**********************************************!*\
  !*** ./src/client/components/Modal/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ModalButton": () => (/* reexport safe */ _ModalButton__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/client/components/Modal/Modal.js");
/* harmony import */ var _ModalButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalButton */ "./src/client/components/Modal/ModalButton.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Modal__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./src/client/components/Spinner/index.js":
/*!************************************************!*\
  !*** ./src/client/components/Spinner/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Spinner() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "spinner-border",
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "visually-hidden"
  }, "Loading..."));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./src/client/components/Task/Task.js":
/*!********************************************!*\
  !*** ./src/client/components/Task/Task.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _graphql_mutations_deleteTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/mutations/deleteTask */ "./src/client/graphql/mutations/deleteTask.js");
/* harmony import */ var _graphql_queries_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/queries/tasks */ "./src/client/graphql/queries/tasks.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Spinner */ "./src/client/components/Spinner/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modal */ "./src/client/components/Modal/index.js");
/* harmony import */ var _Task_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Task.scss */ "./src/client/components/Task/Task.scss");









var Task = function Task(_ref) {
  var isDone = _ref.isDone,
      task = _ref.task,
      id = _ref.id,
      body = _ref.body;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_graphql_mutations_deleteTask__WEBPACK_IMPORTED_MODULE_2__.default, {
    refetchQueries: [{
      query: _graphql_queries_tasks__WEBPACK_IMPORTED_MODULE_3__.default
    }]
  }),
      _useMutation2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 2),
      deleteTask = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_4__.default, null);
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Error :(");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "card card-style"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", {
    className: "card-title"
  }, task), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, isDone.toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "card-text"
  }, body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "buttons-container d-flex justify-content-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__.ModalButton, {
    id: id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    onClick: function onClick() {
      return deleteTask({
        variables: {
          id: id
        }
      });
    },
    type: "button",
    className: "btn btn-primary"
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {
    id: id,
    task: task,
    body: body,
    isDone: isDone
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/client/components/Task/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/Task/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__.default)({
  resolved: {},
  chunkName: function chunkName() {
    return "tasks";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return Promise.all(/*! import() | tasks */[__webpack_require__.e("node_vendors"), __webpack_require__.e("tasks")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Task */ "./src/client/components/Task/Task.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./Task */ "./src/client/components/Task/Task.js");
    }

    return eval('require.resolve')("./Task");
  }
}, {
  ssr: false
}));

/***/ }),

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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Task */ "./src/client/components/Task/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");





var Tasks = function Tasks() {
  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries_tasks__WEBPACK_IMPORTED_MODULE_1__.default),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data; // add { data, loading, error } when query and mutations will be in separated files


  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error :(");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row gy-5 g-2"
  }, data.tasks.map(function (_ref) {
    var isDone = _ref.isDone,
        task = _ref.task,
        _id = _ref._id,
        body = _ref.body;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: _id,
      className: "col-4 d-flex justify-content-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Task__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: _id,
      isDone: isDone,
      task: task,
      id: _id,
      body: body
    }));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);

/***/ }),

/***/ "./src/client/graphql/mutations/deleteTask.js":
/*!****************************************************!*\
  !*** ./src/client/graphql/mutations/deleteTask.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");


var _templateObject;


var DELETE_TASK = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    mutation deleteTask($id: ID) {\n        deleteTask(id: $id) {\n            _id\n            isDone\n            task\n            body\n        }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DELETE_TASK);

/***/ }),

/***/ "./src/client/graphql/mutations/editTask.js":
/*!**************************************************!*\
  !*** ./src/client/graphql/mutations/editTask.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");


var _templateObject;


var EDIT_TASK = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    mutation editTask(\n            $id: ID!\n            $isDone: Boolean!\n            $task: String!\n            $body: String!\n        ) {\n        editTask(\n            task: {\n                id: $id\n                isDone: $isDone\n                task: $task\n                body: $body\n            }) {\n            _id\n            isDone\n            task\n            body\n        }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EDIT_TASK);

/***/ }),

/***/ "./src/client/graphql/queries/task.js":
/*!********************************************!*\
  !*** ./src/client/graphql/queries/task.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");


var _templateObject;


var CURRENT_TASK = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    query currentTask($id: ID) {\n        currentTask(id: $id) {\n            _id\n            isDone\n            task\n            body\n        }\n  }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CURRENT_TASK);

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


var CURRENT_TASKS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.default)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    query currentTasks {\n        tasks {\n            _id\n            isDone\n            task\n            body\n        }\n    }\n"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CURRENT_TASKS);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/components/Task/Task.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/components/Task/Task.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card-style {\n  width: 18rem;\n}\n\n.card-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.buttons-container {\n  width: 100%;\n  padding-right: 20px;\n  padding-left: 20px;\n  margin-right: auto;\n  margin-left: auto;\n}", "",{"version":3,"sources":["webpack://./src/client/components/Task/Task.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ;;AAUE;EACE,gBAAA;EACA,uBAAA;EACA,mBAAA;AAPJ;;AAUE;EAbE,WAAA;EACA,mBAF8B;EAG9B,kBAH8B;EAI9B,kBAAA;EACA,iBAAA;AAOJ","sourcesContent":[".card-style {\r\n    width: 18rem;\r\n}\r\n\r\n@mixin make-container($padding-x: 20px) {\r\n    width: 100%;\r\n    padding-right: $padding-x;\r\n    padding-left: $padding-x;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n  .card-text {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap; \r\n  }\r\n\r\n  .buttons-container {\r\n    @include make-container();\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/client/components/Task/Task.scss":
/*!**********************************************!*\
  !*** ./src/client/components/Task/Task.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Task_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Task.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/components/Task/Task.scss");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Task_scss__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Task_scss__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Task_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Task_scss__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ })

}]);
//# sourceMappingURL=tasks.753603aa2a11b9469220.js.map