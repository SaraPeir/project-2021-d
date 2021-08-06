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
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Global__WEBPACK_IMPORTED_MODULE_3__);





var App = function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_2__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_Global__WEBPACK_IMPORTED_MODULE_3___default()), {
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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Sara\\Desktop\\project-2021-d\\src\\client\\Global.js: Unexpected reserved word 'await'. (17:23)\n\n\u001b[0m \u001b[90m 15 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m         \u001b[36mtry\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 17 |\u001b[39m             response \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m axios\u001b[33m.\u001b[39m\u001b[36mget\u001b[39m(\u001b[32m'https://www.el-tiempo.net/api/json/v2/provincias/28'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 |\u001b[39m             console\u001b[33m.\u001b[39mlog(response)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 |\u001b[39m           } \u001b[36mcatch\u001b[39m (error) {\u001b[0m\n\u001b[0m \u001b[90m 20 |\u001b[39m             console\u001b[33m.\u001b[39merror(error)\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:816:17)\n    at Object.raiseWithData (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:809:17)\n    at Object.raise (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:770:17)\n    at Object.checkReservedWord (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:12158:12)\n    at Object.parseIdentifierName (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:12112:12)\n    at Object.parseIdentifier (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:12084:23)\n    at Object.parseExprAtom (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:11140:27)\n    at Object.parseExprAtom (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:5241:20)\n    at Object.parseExprSubscripts (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:10881:23)\n    at Object.parseUpdate (C:\\Users\\Sara\\Desktop\\project-2021-d\\node_modules\\@babel\\parser\\lib\\index.js:10861:21)");

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
    provinces: window.__INITIAL_PROVINCES__
  })), document.getElementById('app'));
}));

/***/ }),

/***/ "./src/redux/slices/fetchWeather.js":
/*!******************************************!*\
  !*** ./src/redux/slices/fetchWeather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeatherSlice": () => (/* binding */ fetchWeatherSlice),
/* harmony export */   "fetchWeather": () => (/* binding */ fetchWeather),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var fetchWeatherSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'fetchWeather',
  initialState: {
    value: {},
    hasWeatherData: false
  },
  reducers: {
    fetchWeather: function fetchWeather(state, action) {
      var data = fetch("https://www.el-tiempo.net/api/json/v2/provincias/".concat(action.payload)).then(function (response) {
        return response.json;
      });
      var hasData = false;

      if (data.title && data.today && data.tomorrow && data.ciudades && data.ciudades.length) {
        hasData = true;
      } // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      /* console.log('state.value', state.value)
      return !state.value || !state */


      return _objectSpread(_objectSpread({}, state), {}, {
        value: data,
        hasWeatherData: hasData
      });
    }
  }
}); // Action creators are generated for each case reducer function

var fetchWeather = fetchWeatherSlice.actions.fetchWeather;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeatherSlice.reducer);

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
    value: false
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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _slices_weatherShower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices/weatherShower */ "./src/redux/slices/weatherShower.js");
/* harmony import */ var _slices_fetchWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/fetchWeather */ "./src/redux/slices/fetchWeather.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
  reducer: {
    weatherShower: _slices_weatherShower__WEBPACK_IMPORTED_MODULE_0__.default,
    fetchWeather: _slices_fetchWeather__WEBPACK_IMPORTED_MODULE_1__.default
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
//# sourceMappingURL=main.d90bb229afae13827df1.js.map