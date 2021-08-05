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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Sara\\Desktop\\project-2021-d\\src\\client\\Global.js: JSX value should be either an expression or a quoted JSX text. (41:12)\n\n\u001b[0m \u001b[90m 39 |\u001b[39m                 isCollapsed\u001b[33m=\u001b[39m{isWeatherDisplayed} \u001b[0m\n\u001b[0m \u001b[90m 40 |\u001b[39m                 onClickHandlers\u001b[33m=\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 41 |\u001b[39m             \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 42 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mTasks\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 43 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mReact\u001b[39m\u001b[33m.\u001b[39m\u001b[33mFragment\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 44 |\u001b[39m     )\u001b[0m\n    at Object._raise (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:816:17)\n    at Object.raiseWithData (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:809:17)\n    at Object.raise (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:770:17)\n    at Object.jsxParseAttributeValue (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:5071:20)\n    at Object.jsxParseAttribute (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:5110:46)\n    at Object.jsxParseOpeningElementAfterName (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:5130:28)\n    at Object.jsxParseOpeningElementAt (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:5123:17)\n    at Object.jsxParseElementAt (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:5155:33)\n    at Object.jsxParseElementAt (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:5171:32)\n    at Object.jsxParseElement (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:5229:17)");

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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _slices_weatherShower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices/weatherShower */ "./src/redux/slices/weatherShower.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
  reducer: {
    weatherShower: _slices_weatherShower__WEBPACK_IMPORTED_MODULE_0__.default
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
//# sourceMappingURL=main.c6bff13bd778b06f7549.js.map