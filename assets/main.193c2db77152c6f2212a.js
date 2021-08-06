(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["main"],{

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Global */ "./src/client/Global.js");





var App = function App(props) {
  console.log('props.arrayFromFetch', props.arrayFromFetch);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_2__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Global__WEBPACK_IMPORTED_MODULE_3__.default, {
    provinces: props.provinces
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/client/Global.js":
/*!******************************!*\
  !*** ./src/client/Global.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Tasks */ "./src/client/components/Tasks/index.js");
/* harmony import */ var _asyncComponents_Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asyncComponents/Countdown */ "./src/client/asyncComponents/Countdown/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_slices_countdownShower__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/slices/countdownShower */ "./src/redux/slices/countdownShower.js");






var Global = function Global(props) {
  var isCountdownDisplayed = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    console.log('state', state);
    return state.countdownShower.value;
  });

  var countdown = function countdown() {
    if (isCountdownDisplayed) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_asyncComponents_Countdown__WEBPACK_IMPORTED_MODULE_2__.default, null);
    }

    return;
  };

  var arrayFromFetch = props.arrayFromFetch;

  var showInConsole = function showInConsole(arrayFromFetch) {
    return console.log(arrayFromFetch);
  };

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_slices_countdownShower__WEBPACK_IMPORTED_MODULE_4__.showCountdown)());
    }
  }, "See how miss to 2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Tasks__WEBPACK_IMPORTED_MODULE_1__.default, null), countdown(), showInConsole(arrayFromFetch));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Global);

/***/ }),

/***/ "./src/client/asyncComponents/Countdown/AsyncCountdown.js":
/*!****************************************************************!*\
  !*** ./src/client/asyncComponents/Countdown/AsyncCountdown.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
 // Countdown component is loaded by webpack only if user can see it. 
// It's not included in main bundle any more

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__.default)({
  resolved: {},
  chunkName: function chunkName() {
    return "async_countdown";
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
    return (// When import() is used Webpack creates a new chunk for the imported code, splitting it from the main bundle.
      // (https://medium.com/swlh/an-introduction-to-webpack-code-splitting-loadable-component-and-resource-hints-f0c3a3e45ce4)
      Promise.all(/*! import() | async_countdown */[__webpack_require__.e("node_vendors"), __webpack_require__.e("shared_vendors"), __webpack_require__.e("async_countdown")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Countdown */ "./src/client/asyncComponents/Countdown/Countdown.js"))
    );
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
      return /*require.resolve*/(/*! ./Countdown */ "./src/client/asyncComponents/Countdown/Countdown.js");
    }

    return eval('require.resolve')("./Countdown");
  }
}, {
  ssr: true
}));

/***/ }),

/***/ "./src/client/asyncComponents/Countdown/index.js":
/*!*******************************************************!*\
  !*** ./src/client/asyncComponents/Countdown/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AsyncCountdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncCountdown */ "./src/client/asyncComponents/Countdown/AsyncCountdown.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncCountdown__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/client/components/Tasks/index.js":
/*!**********************************************!*\
  !*** ./src/client/components/Tasks/index.js ***!
  \**********************************************/
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
    return Promise.all(/*! import() | tasks */[__webpack_require__.e("node_vendors"), __webpack_require__.e("tasks")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Tasks */ "./src/client/components/Tasks/Tasks.js"));
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
      return /*require.resolve*/(/*! ./Tasks */ "./src/client/components/Tasks/Tasks.js");
    }

    return eval('require.resolve')("./Tasks");
  }
}, {
  ssr: false
}));

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/client/App.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/core/ApolloClient.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");


var _templateObject;






var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.InMemoryCache()
});
console.log('client', client);
client.query({
  query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.default)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n      query getTasks {\n          tasks {\n            _id\n            isDone\n            task\n          }\n      }\n    "])))
}).then(function (result) {
  return console.log(result);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_loadable_component__WEBPACK_IMPORTED_MODULE_4__.loadableReady)(function () {
  (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.hydrate)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_8__.ApolloProvider, {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__.default, {
    provinces: window.__PROVINCES__
  })), document.getElementById('app'));
}));

/***/ }),

/***/ "./src/redux/slices/countdownShower.js":
/*!*********************************************!*\
  !*** ./src/redux/slices/countdownShower.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countdownShowerSlice": () => (/* binding */ countdownShowerSlice),
/* harmony export */   "showCountdown": () => (/* binding */ showCountdown),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var countdownShowerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'countdownShower',
  initialState: {
    value: true
  },
  reducers: {
    showCountdown: function showCountdown(state) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      /* console.log('state.value', state.value)
      return !state.value || !state */
      return _objectSpread(_objectSpread({}, state), {}, {
        value: !state.value
      });
    }
  }
}); // Action creators are generated for each case reducer function

var showCountdown = countdownShowerSlice.actions.showCountdown;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countdownShowerSlice.reducer);

/***/ }),

/***/ "./src/redux/slices/counter.js":
/*!*************************************!*\
  !*** ./src/redux/slices/counter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counterSlice": () => (/* binding */ counterSlice),
/* harmony export */   "increment": () => (/* binding */ increment),
/* harmony export */   "decrement": () => (/* binding */ decrement),
/* harmony export */   "incrementByAmount": () => (/* binding */ incrementByAmount),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: function increment(state) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: function decrement(state) {
      state.value -= 1;
    },
    incrementByAmount: function incrementByAmount(state, action) {
      state.value += action.payload;
    }
  }
}); // Action creators are generated for each case reducer function

var _counterSlice$actions = counterSlice.actions,
    increment = _counterSlice$actions.increment,
    decrement = _counterSlice$actions.decrement,
    incrementByAmount = _counterSlice$actions.incrementByAmount;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _slices_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices/counter */ "./src/redux/slices/counter.js");
/* harmony import */ var _slices_countdownShower__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/countdownShower */ "./src/redux/slices/countdownShower.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
  reducer: {
    counter: _slices_counter__WEBPACK_IMPORTED_MODULE_0__.default,
    countdownShower: _slices_countdownShower__WEBPACK_IMPORTED_MODULE_1__.default
  }
}));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["node_vendors"], () => (__webpack_exec__("./src/client/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.193c2db77152c6f2212a.js.map