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
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Accordion */ "./src/client/components/Accordion/index.js");
/* harmony import */ var _asyncComponents_Countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asyncComponents/Countdown */ "./src/client/asyncComponents/Countdown/index.js");
/* harmony import */ var _asyncComponents_Weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asyncComponents/Weather */ "./src/client/asyncComponents/Weather/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_slices_countdownShower__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/slices/countdownShower */ "./src/redux/slices/countdownShower.js");
/* harmony import */ var _redux_slices_weatherShower__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/slices/weatherShower */ "./src/redux/slices/weatherShower.js");









var Global = function Global(props) {
  var isWeatherDisplayed = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    console.log('state', state);
    return state.weatherShower.value;
  });

  var weather = function weather() {
    if (isWeatherDisplayed) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_asyncComponents_Weather__WEBPACK_IMPORTED_MODULE_4__.default, null);
    }

    return;
  };

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_slices_weatherShower__WEBPACK_IMPORTED_MODULE_7__.showWeather)());
    }
  }, "See how miss to 2022"), weather(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_2__.default, {
    label: 'labelA',
    parentId: 'parendA',
    target: 'targetA',
    n: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Tasks__WEBPACK_IMPORTED_MODULE_1__.default, null));
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

/***/ "./src/client/asyncComponents/Weather/AsyncWeather.js":
/*!************************************************************!*\
  !*** ./src/client/asyncComponents/Weather/AsyncWeather.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
 // Weather component is loaded by webpack only if user can see it. 
// It's not included in main bundle any more

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__.default)({
  resolved: {},
  chunkName: function chunkName() {
    return "async_weather";
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
      __webpack_require__.e(/*! import() | async_weather */ "async_weather").then(__webpack_require__.bind(__webpack_require__, /*! ./Weather */ "./src/client/asyncComponents/Weather/Weather.js"))
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
      return /*require.resolve*/(/*! ./Weather */ "./src/client/asyncComponents/Weather/Weather.js");
    }

    return eval('require.resolve')("./Weather");
  }
}, {
  ssr: false
}));

/***/ }),

/***/ "./src/client/asyncComponents/Weather/index.js":
/*!*****************************************************!*\
  !*** ./src/client/asyncComponents/Weather/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AsyncWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncWeather */ "./src/client/asyncComponents/Weather/AsyncWeather.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncWeather__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/client/components/Accordion/Accordion.js":
/*!******************************************************!*\
  !*** ./src/client/components/Accordion/Accordion.js ***!
  \******************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Sara\\Desktop\\project-2021-d\\src\\client\\components\\Accordion\\Accordion.js: 'Const declarations' require an initialization value. (4:16)\n\n\u001b[0m \u001b[90m 2 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 |\u001b[39m \u001b[36mconst\u001b[39m \u001b[33mAccordion\u001b[39m \u001b[33m=\u001b[39m ({label\u001b[33m,\u001b[39m parentId\u001b[33m,\u001b[39m target\u001b[33m,\u001b[39m n}) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 |\u001b[39m     \u001b[36mconst\u001b[39m fields\u001b[33m:\u001b[39m \u001b[33mJSX\u001b[39m\u001b[33m.\u001b[39m\u001b[33mElement\u001b[39m[] \u001b[33m=\u001b[39m []\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 |\u001b[39m     \u001b[36mfor\u001b[39m (\u001b[36mlet\u001b[39m i \u001b[33m=\u001b[39m \u001b[35m1\u001b[39m\u001b[33m;\u001b[39m i \u001b[33m<=\u001b[39m committedFieldsToAdd\u001b[33m;\u001b[39m i\u001b[33m++\u001b[39m) {\u001b[0m\n\u001b[0m \u001b[90m 7 |\u001b[39m     fields\u001b[33m.\u001b[39mpush(\u001b[33m<\u001b[39m\u001b[33mField\u001b[39m id\u001b[33m=\u001b[39m{i} key\u001b[33m=\u001b[39m{i} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:816:17)\n    at Object.raiseWithData (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:809:17)\n    at Object.raise (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:770:17)\n    at Object.parseVar (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:13208:18)\n    at Object.parseVarStatement (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:13018:10)\n    at Object.parseStatementContent (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:12601:21)\n    at Object.parseStatement (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:12534:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:13123:25)\n    at Object.parseBlockBody (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:13114:10)\n    at Object.parseBlock (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:13098:10)");

/***/ }),

/***/ "./src/client/components/Accordion/index.js":
/*!**************************************************!*\
  !*** ./src/client/components/Accordion/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion */ "./src/client/components/Accordion/Accordion.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Accordion__WEBPACK_IMPORTED_MODULE_0__.default);

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

/***/ "./src/redux/slices/weatherShower.js":
/*!*******************************************!*\
  !*** ./src/redux/slices/weatherShower.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherShowerSlice": () => (/* binding */ weatherShowerSlice),
/* harmony export */   "showWeather": () => (/* binding */ showWeather),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var weatherShowerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'weatherShower',
  initialState: {
    value: true
  },
  reducers: {
    showWeather: function showWeather(state) {
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

var showWeather = weatherShowerSlice.actions.showWeather;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherShowerSlice.reducer);

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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _slices_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices/counter */ "./src/redux/slices/counter.js");
/* harmony import */ var _slices_countdownShower__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/countdownShower */ "./src/redux/slices/countdownShower.js");
/* harmony import */ var _slices_weatherShower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/weatherShower */ "./src/redux/slices/weatherShower.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.configureStore)({
  reducer: {
    counter: _slices_counter__WEBPACK_IMPORTED_MODULE_0__.default,
    countdownShower: _slices_countdownShower__WEBPACK_IMPORTED_MODULE_1__.default,
    weatherShower: _slices_weatherShower__WEBPACK_IMPORTED_MODULE_2__.default
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
//# sourceMappingURL=main.5d86753441574aa440d7.js.map