/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Global */ \"./src/client/Global.js\");\n\n\n\n\n\nvar App = function App(props) {\n  console.log('props.arrayFromFetch', props.arrayFromFetch);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n    store: _redux_store__WEBPACK_IMPORTED_MODULE_2__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Global__WEBPACK_IMPORTED_MODULE_3__.default, {\n    arrayFromFetch: props.arrayFromFetch\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://project-2021-c/./src/client/App.js?");

/***/ }),

/***/ "./src/client/Global.js":
/*!******************************!*\
  !*** ./src/client/Global.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Tasks */ \"./src/client/components/Tasks/index.js\");\n/* harmony import */ var _asyncComponents_Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asyncComponents/Countdown */ \"./src/client/asyncComponents/Countdown/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_slices_countdownShower__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/slices/countdownShower */ \"./src/redux/slices/countdownShower.js\");\n\n\n\n\n\n\nvar Global = function Global(props) {\n  var isCountdownDisplayed = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    console.log('state', state);\n    return state.countdownShower.value;\n  });\n\n  var countdown = function countdown() {\n    if (isCountdownDisplayed) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_asyncComponents_Countdown__WEBPACK_IMPORTED_MODULE_2__.default, null);\n    }\n\n    return;\n  };\n\n  var arrayFromFetch = props.arrayFromFetch;\n\n  var showInConsole = function showInConsole(arrayFromFetch) {\n    return console.log(arrayFromFetch);\n  };\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch((0,_redux_slices_countdownShower__WEBPACK_IMPORTED_MODULE_4__.showCountdown)());\n    }\n  }, \"See how miss to 2022\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tasks__WEBPACK_IMPORTED_MODULE_1__.default, null), countdown(), showInConsole(arrayFromFetch));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Global);\n\n//# sourceURL=webpack://project-2021-c/./src/client/Global.js?");

/***/ }),

/***/ "./src/client/asyncComponents/Countdown/AsyncCountdown.js":
/*!****************************************************************!*\
  !*** ./src/client/asyncComponents/Countdown/AsyncCountdown.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n // Countdown component is loaded by webpack only if user can see it. \n// It's not included in main bundle any more\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"async_countdown\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return (// When import() is used Webpack creates a new chunk for the imported code, splitting it from the main bundle.\n      // (https://medium.com/swlh/an-introduction-to-webpack-code-splitting-loadable-component-and-resource-hints-f0c3a3e45ce4)\n      __webpack_require__.e(/*! import() | async_countdown */ \"async_countdown\").then(__webpack_require__.bind(__webpack_require__, /*! ./Countdown */ \"./src/client/asyncComponents/Countdown/Countdown.js\"))\n    );\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./Countdown */ \"./src/client/asyncComponents/Countdown/Countdown.js\");\n    }\n\n    return eval('require.resolve')(\"./Countdown\");\n  }\n}, {\n  ssr: true\n}));\n\n//# sourceURL=webpack://project-2021-c/./src/client/asyncComponents/Countdown/AsyncCountdown.js?");

/***/ }),

/***/ "./src/client/asyncComponents/Countdown/index.js":
/*!*******************************************************!*\
  !*** ./src/client/asyncComponents/Countdown/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AsyncCountdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncCountdown */ \"./src/client/asyncComponents/Countdown/AsyncCountdown.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncCountdown__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://project-2021-c/./src/client/asyncComponents/Countdown/index.js?");

/***/ }),

/***/ "./src/client/components/Tasks/index.js":
/*!**********************************************!*\
  !*** ./src/client/components/Tasks/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"tasks\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] !== true) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | tasks */ \"tasks\").then(__webpack_require__.bind(__webpack_require__, /*! ./Tasks */ \"./src/client/components/Tasks/Tasks.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./Tasks */ \"./src/client/components/Tasks/Tasks.js\");\n    }\n\n    return eval('require.resolve')(\"./Tasks\");\n  }\n}, {\n  ssr: false\n}));\n\n//# sourceURL=webpack://project-2021-c/./src/client/components/Tasks/index.js?");

/***/ }),

/***/ "./src/redux/slices/countdownShower.js":
/*!*********************************************!*\
  !*** ./src/redux/slices/countdownShower.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countdownShowerSlice\": () => (/* binding */ countdownShowerSlice),\n/* harmony export */   \"showCountdown\": () => (/* binding */ showCountdown),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar countdownShowerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: 'countdownShower',\n  initialState: {\n    value: true\n  },\n  reducers: {\n    showCountdown: function showCountdown(state) {\n      // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n      // doesn't actually mutate the state because it uses the Immer library,\n      // which detects changes to a \"draft state\" and produces a brand new\n      // immutable state based off those changes\n\n      /* console.log('state.value', state.value)\r\n      return !state.value || !state */\n      return _objectSpread(_objectSpread({}, state), {}, {\n        value: !state.value\n      });\n    }\n  }\n}); // Action creators are generated for each case reducer function\n\nvar showCountdown = countdownShowerSlice.actions.showCountdown;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countdownShowerSlice.reducer);\n\n//# sourceURL=webpack://project-2021-c/./src/redux/slices/countdownShower.js?");

/***/ }),

/***/ "./src/redux/slices/counter.js":
/*!*************************************!*\
  !*** ./src/redux/slices/counter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterSlice\": () => (/* binding */ counterSlice),\n/* harmony export */   \"increment\": () => (/* binding */ increment),\n/* harmony export */   \"decrement\": () => (/* binding */ decrement),\n/* harmony export */   \"incrementByAmount\": () => (/* binding */ incrementByAmount),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nvar counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'counter',\n  initialState: {\n    value: 0\n  },\n  reducers: {\n    increment: function increment(state) {\n      // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n      // doesn't actually mutate the state because it uses the Immer library,\n      // which detects changes to a \"draft state\" and produces a brand new\n      // immutable state based off those changes\n      state.value += 1;\n    },\n    decrement: function decrement(state) {\n      state.value -= 1;\n    },\n    incrementByAmount: function incrementByAmount(state, action) {\n      state.value += action.payload;\n    }\n  }\n}); // Action creators are generated for each case reducer function\n\nvar _counterSlice$actions = counterSlice.actions,\n    increment = _counterSlice$actions.increment,\n    decrement = _counterSlice$actions.decrement,\n    incrementByAmount = _counterSlice$actions.incrementByAmount;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);\n\n//# sourceURL=webpack://project-2021-c/./src/redux/slices/counter.js?");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/counter */ \"./src/redux/slices/counter.js\");\n/* harmony import */ var _slices_countdownShower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/countdownShower */ \"./src/redux/slices/countdownShower.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    counter: _slices_counter__WEBPACK_IMPORTED_MODULE_1__.default,\n    countdownShower: _slices_countdownShower__WEBPACK_IMPORTED_MODULE_2__.default\n  }\n}));\n\n//# sourceURL=webpack://project-2021-c/./src/redux/store.js?");

/***/ }),

/***/ "./src/server/data/model.js":
/*!**********************************!*\
  !*** ./src/server/data/model.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nvar collectionName = 'ToDo';\nvar taskSchema = new Schema({\n  task: {\n    type: String,\n    required: true\n  },\n  isDone: {\n    type: Boolean,\n    required: true\n  },\n  body: {\n    type: String,\n    required: false\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Task\", taskSchema, collectionName));\n\n//# sourceURL=webpack://project-2021-c/./src/server/data/model.js?");

/***/ }),

/***/ "./src/server/data/resolvers.js":
/*!**************************************!*\
  !*** ./src/server/data/resolvers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ \"./src/server/data/model.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  task: function () {\n    var _task = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(args) {\n      var id, taskFetched;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              id = args.id;\n              _context.next = 4;\n              return _model__WEBPACK_IMPORTED_MODULE_3__.default.findById({\n                _id: id\n              });\n\n            case 4:\n              taskFetched = _context.sent;\n              return _context.abrupt(\"return\", taskFetched);\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              throw _context.t0;\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    function task(_x) {\n      return _task.apply(this, arguments);\n    }\n\n    return task;\n  }(),\n  tasks: function () {\n    var _tasks = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n      var tasksFetched;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return _model__WEBPACK_IMPORTED_MODULE_3__.default.find({});\n\n            case 3:\n              tasksFetched = _context2.sent;\n              return _context2.abrupt(\"return\", tasksFetched.map(function (task) {\n                return _objectSpread(_objectSpread({}, task._doc), {}, {\n                  _id: task.id // createdAt: new Date(article._doc.createdAt).toISOString(),\n\n                });\n              }));\n\n            case 7:\n              _context2.prev = 7;\n              _context2.t0 = _context2[\"catch\"](0);\n              throw _context2.t0;\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 7]]);\n    }));\n\n    function tasks() {\n      return _tasks.apply(this, arguments);\n    }\n\n    return tasks;\n  }(),\n  editTask: function () {\n    var _editTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(args) {\n      var _args$task, id, isDone, body, task, taskToChange;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              _args$task = args.task, id = _args$task.id, isDone = _args$task.isDone, body = _args$task.body, task = _args$task.task;\n              _context3.next = 4;\n              return _model__WEBPACK_IMPORTED_MODULE_3__.default.findById({\n                _id: id\n              });\n\n            case 4:\n              taskToChange = _context3.sent;\n              taskToChange.isDone = isDone;\n              taskToChange.body = body;\n              taskToChange.task = task;\n              _context3.next = 10;\n              return taskToChange.save();\n\n            case 10:\n              return _context3.abrupt(\"return\", _objectSpread({}, taskToChange._doc));\n\n            case 13:\n              _context3.prev = 13;\n              _context3.t0 = _context3[\"catch\"](0);\n              throw _context3.t0;\n\n            case 16:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 13]]);\n    }));\n\n    function editTask(_x2) {\n      return _editTask.apply(this, arguments);\n    }\n\n    return editTask;\n  }(),\n  createTask: function () {\n    var _createTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(args) {\n      var _args$task2, task, isDone, body, taskClass, newTask;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              _args$task2 = args.task, task = _args$task2.task, isDone = _args$task2.isDone, body = _args$task2.body;\n              taskClass = new _model__WEBPACK_IMPORTED_MODULE_3__.default({\n                task: task,\n                isDone: isDone,\n                body: body\n              });\n              _context4.next = 5;\n              return taskClass.save();\n\n            case 5:\n              newTask = _context4.sent;\n              return _context4.abrupt(\"return\", _objectSpread(_objectSpread({}, newTask._doc), {}, {\n                _id: newTask.id\n              }));\n\n            case 9:\n              _context4.prev = 9;\n              _context4.t0 = _context4[\"catch\"](0);\n              throw _context4.t0;\n\n            case 12:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[0, 9]]);\n    }));\n\n    function createTask(_x3) {\n      return _createTask.apply(this, arguments);\n    }\n\n    return createTask;\n  }(),\n  deleteTask: function () {\n    var _deleteTask = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(args) {\n      var id, taskToDelete;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              _context5.prev = 0;\n              id = args.id;\n              _context5.next = 4;\n              return _model__WEBPACK_IMPORTED_MODULE_3__.default.findOneAndDelete({\n                _id: id\n              });\n\n            case 4:\n              taskToDelete = _context5.sent;\n              return _context5.abrupt(\"return\", taskToDelete);\n\n            case 8:\n              _context5.prev = 8;\n              _context5.t0 = _context5[\"catch\"](0);\n              throw _context5.t0;\n\n            case 11:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5, null, [[0, 8]]);\n    }));\n\n    function deleteTask(_x4) {\n      return _deleteTask.apply(this, arguments);\n    }\n\n    return deleteTask;\n  }()\n});\n\n//# sourceURL=webpack://project-2021-c/./src/server/data/resolvers.js?");

/***/ }),

/***/ "./src/server/data/schema.js":
/*!***********************************!*\
  !*** ./src/server/data/schema.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _require = __webpack_require__(/*! graphql */ \"graphql\"),\n    buildSchema = _require.buildSchema;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildSchema(\"\\n\\n  type Task {\\n    _id: ID!\\n    task: String!\\n    isDone: Boolean!\\n    body: String!\\n  }\\n\\n  input TaskInput {\\n    task: String!\\n    isDone: Boolean!\\n    body: String!\\n  }\\n\\n  input TaskInputToEdit {\\n    id: ID!\\n    task: String!\\n    isDone: Boolean!\\n    body: String!\\n  }\\n\\n  type Query {\\n    tasks: [Task!]\\n    task(id: ID): Task\\n  }\\n\\n  type Mutation {\\n    createTask(task:TaskInput): Task\\n    editTask(task:TaskInputToEdit): Task\\n    deleteTask(id: ID): Task\\n  }\\n\\n  schema {\\n    query: Query\\n    mutation: Mutation\\n  }\\n\"));\n\n//# sourceURL=webpack://project-2021-c/./src/server/data/schema.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.js\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! express-graphql */ \"express-graphql\");\n/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _data_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/schema */ \"./src/server/data/schema.js\");\n/* harmony import */ var _data_resolvers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/resolvers */ \"./src/server/data/resolvers.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static('assets')); // to allow requests to domains different than localhost:3000\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_11___default()());\nvar databaseName = 'sample_todo';\nvar psw = process.env.DB_PASS;\nvar user = process.env.DB_USER;\nvar uri = \"mongodb+srv://\".concat(user, \":\").concat(psw, \"@cluster0.r4gtu.mongodb.net/\").concat(databaseName, \"?retryWrites=true&w=majority\");\nvar options = {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n};\nconsole.log('URI', uri);\nmongoose__WEBPACK_IMPORTED_MODULE_10___default().connect(uri, options).then(function () {\n  return app.listen(4000, console.log('Server is running for GRAPHQL'));\n})[\"catch\"](function (error) {\n  throw error;\n});\napp.use(\"/graphql\", (0,express_graphql__WEBPACK_IMPORTED_MODULE_7__.graphqlHTTP)({\n  schema: _data_schema__WEBPACK_IMPORTED_MODULE_8__.default,\n  rootValue: _data_resolvers__WEBPACK_IMPORTED_MODULE_9__.default,\n  graphiql: true\n}));\napp.get(\"*\", function (req, res, next) {\n  var emptyArray = [];\n  var url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';\n  var statsFile = path__WEBPACK_IMPORTED_MODULE_5___default().resolve('./assets/loadable-stats.json');\n  var extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_6__.ChunkExtractor({\n    statsFile: statsFile\n  });\n  var drinkData = [];\n\n  try {\n    fetch(url).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      return emptyArray.concat(data.drinks);\n    });\n  } catch (_unused) {\n    console.log(error);\n  }\n\n  console.log('drinkData', drinkData);\n  var jsx = extractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_client_App__WEBPACK_IMPORTED_MODULE_3__.default, {\n    arrayFromFetch: drinkData\n  }));\n  var html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)(jsx);\n  var scriptTags = extractor.getScriptTags();\n  res.send(\"\\n        <!DOCTYPE html>\\n        <html>\\n          <head>\\n            <title>SSR with React</title>\\n            <script>window.__INITIAL_ARRAYFETCH__ = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default()(drinkData), \"</script>\\n            <!-- Bootstrap CSS -->\\n            <link href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\\\" rel=\\\"stylesheet\\\" integrity=\\\"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC\\\" crossorigin=\\\"anonymous\\\">\\n            <script src=\\\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js\\\" integrity=\\\"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM\\\" crossorigin=\\\"anonymous\\\"></script>\\n          </head>\\n          <body>\\n            <div id=\\\"app\\\">\").concat(html, \"</div>\\n            \").concat(scriptTags, \"\\n          </body>\\n        </html>\\n      \"));\n});\napp.listen(3000, function () {\n  console.log(\"Server is listening on port: 3000\");\n});\n\n//# sourceURL=webpack://project-2021-c/./src/server/index.js?");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@loadable/component");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@loadable/server");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-graphql");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("graphql");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".server.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;