(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["main"],{

/***/ 6240:
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ 5514);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ 844);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Global */ 6634);





var App = function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_2__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Global__WEBPACK_IMPORTED_MODULE_3__.default, {
    provinces: props.provinces
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 6634:
/*!******************************!*\
  !*** ./src/client/Global.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Tasks */ 8815);
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Accordion */ 4815);
/* harmony import */ var _asyncComponents_WeatherForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asyncComponents/WeatherForm */ 1244);
/* harmony import */ var _asyncComponents_Weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asyncComponents/Weather */ 2716);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ 5514);







var Global = function Global(_ref) {
  var provinces = _ref.provinces;
  var isWeatherDisplayed = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    console.log('state', state);
    return state.weatherShower.value;
  });

  var weather = function weather() {
    // Weather component bundle is loaded only when isWeatherDisplayed is true (verify it in Chrome Network)
    if (isWeatherDisplayed) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_asyncComponents_Weather__WEBPACK_IMPORTED_MODULE_4__.default, null);
    }

    return;
  };

  var WeatherContent = function WeatherContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_asyncComponents_WeatherForm__WEBPACK_IMPORTED_MODULE_3__.default, {
      provinces: provinces
    }), weather());
  };

  var buttonContents = ['El tiempo en España'];
  var bodyContents = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WeatherContent, null)];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, // if provinces from server is not available, the
  // whole Accordion component is not displayed
  provinces.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_2__.default, {
    label: 'weather-label',
    parentId: 'weather-parent',
    target: 'weather-target',
    n: 1,
    buttonContents: buttonContents,
    bodyContents: bodyContents
  }) || null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Tasks__WEBPACK_IMPORTED_MODULE_1__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Global);

/***/ }),

/***/ 1760:
/*!********************************************************************!*\
  !*** ./src/client/asyncComponents/WeatherForm/AsyncWeatherForm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ 6575);
 // Weather component is loaded by webpack only if user can see it. 
// It's not included in main bundle any more

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__.default)({
  resolved: {},
  chunkName: function chunkName() {
    return "async_weather_form";
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
      Promise.all(/*! import() | async_weather_form */[__webpack_require__.e("node_vendors"), __webpack_require__.e("async_weather_form")]).then(__webpack_require__.bind(__webpack_require__, /*! ./WeatherForm */ 6579))
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
      return /*require.resolve*/(/*! ./WeatherForm */ 6579);
    }

    return eval('require.resolve')("./WeatherForm");
  }
}, {
  ssr: false
}));

/***/ }),

/***/ 1244:
/*!*********************************************************!*\
  !*** ./src/client/asyncComponents/WeatherForm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AsyncWeatherForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncWeatherForm */ 1760);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncWeatherForm__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ 8554:
/*!************************************************************!*\
  !*** ./src/client/asyncComponents/Weather/AsyncWeather.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ 6575);
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
      __webpack_require__.e(/*! import() | async_weather */ "async_weather").then(__webpack_require__.bind(__webpack_require__, /*! ./Weather */ 7987))
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
      return /*require.resolve*/(/*! ./Weather */ 7987);
    }

    return eval('require.resolve')("./Weather");
  }
}, {
  ssr: false
}));

/***/ }),

/***/ 2716:
/*!*****************************************************!*\
  !*** ./src/client/asyncComponents/Weather/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AsyncWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncWeather */ 8554);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncWeather__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ 4742:
/*!******************************************************!*\
  !*** ./src/client/components/Accordion/Accordion.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5466);


var Item = function Item(_ref) {
  var label = _ref.label,
      parentId = _ref.parentId,
      target = _ref.target,
      id = _ref.id,
      buttonContent = _ref.buttonContent,
      body = _ref.body;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "accordion-header",
    id: "".concat(label, "-").concat(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "accordion-button",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#".concat(target, "-").concat(id),
    "aria-expanded": "true",
    "aria-controls": "".concat(target, "-").concat(id)
  }, buttonContent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "".concat(target, "-").concat(id),
    className: "accordion-collapse collapse",
    "aria-labelledby": "".concat(label, "-").concat(id),
    "data-bs-parent": "#".concat(parentId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "accordion-body"
  }, body)));
};

var Accordion = function Accordion(_ref2) {
  var label = _ref2.label,
      parentId = _ref2.parentId,
      target = _ref2.target,
      n = _ref2.n,
      buttonContents = _ref2.buttonContents,
      bodyContents = _ref2.bodyContents;
  var items = [];

  for (var i = 1; i <= n; i++) {
    items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Item, {
      id: i,
      key: i,
      label: label,
      parentId: parentId,
      target: target,
      buttonContent: buttonContents[i - 1],
      body: bodyContents[i - 1]
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "class": "accordion",
    id: parentId
  }, items);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);

/***/ }),

/***/ 4815:
/*!**************************************************!*\
  !*** ./src/client/components/Accordion/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion */ 4742);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Accordion__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ 8815:
/*!**********************************************!*\
  !*** ./src/client/components/Tasks/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ 6575);

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
    return Promise.all(/*! import() | tasks */[__webpack_require__.e("node_vendors"), __webpack_require__.e("tasks")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Tasks */ 5810));
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
      return /*require.resolve*/(/*! ./Tasks */ 5810);
    }

    return eval('require.resolve')("./Tasks");
  }
}, {
  ssr: false
}));

/***/ }),

/***/ 1911:
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 5466);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 6116);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ 6240);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/component */ 6575);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ 134);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ 510);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ 7037);





var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.InMemoryCache()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_loadable_component__WEBPACK_IMPORTED_MODULE_3__.loadableReady)(function () {
  (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.hydrate)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, {
    provinces: window.__INITIAL_PROVINCES__
  })), document.getElementById('app'));
}));

/***/ }),

/***/ 3429:
/*!******************************************!*\
  !*** ./src/redux/slices/fetchWeather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeatherSlice": () => (/* binding */ fetchWeatherSlice),
/* harmony export */   "fetchWeatherThunk": () => (/* binding */ fetchWeatherThunk),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 7692);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 7004);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ 4264);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ 1721);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ 4559);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



var _extraReducers;



 // thunk (necessary to fetch and handle promises)
// https://redux-toolkit.js.org/api/createAsyncThunk
// https://stackoverflow.com/questions/60316251/how-to-use-redux-thunk-with-redux-toolkits-createslice

var fetchWeatherThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createAsyncThunk)('fetchWeather/fetchByProvId', /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(id, thunkAPI) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://www.el-tiempo.net/api/json/v2/provincias/".concat(id));

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", thunkAPI.rejectWithValue({}, _context.t0));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var fetchWeatherSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.createSlice)({
  name: 'fetchWeather',
  initialState: {
    value: {},
    hasWeatherData: false,
    hasError: false,
    isLoading: false
  },
  extraReducers: (_extraReducers = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_extraReducers, fetchWeatherThunk.fulfilled, function (state, action) {
    var data;

    try {
      data = action.payload.data;
    } catch (_unused) {
      data = null;
    }

    state.value = data;
    state.isLoading = false;

    if (!data) {
      state.hasError = true;
    }

    if (data && data.title && data.today && data.tomorrow && data.ciudades && data.ciudades.length) {
      state.hasWeatherData = true;
    }
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_extraReducers, fetchWeatherThunk.pending, function (state) {
    state.isLoading = true;
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_extraReducers, fetchWeatherThunk.error, function (state) {
    state.isLoading = false;
    state.hasError = true;
  }), _extraReducers)
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeatherSlice.reducer);

/***/ }),

/***/ 455:
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 7692);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ 1721);


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
      return _objectSpread(_objectSpread({}, state), {}, {
        value: true
      });
    }
  }
});
/* export const weatherShowerSlice = createSlice({
  name: 'weatherShower',
  initialState: {
    value: false,
  },
  reducers: {
    showWeather: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      return {
        ...state,
        value: !state.value
      }
      
    },
  },
}) */
// Action creators are generated for each case reducer function

var showWeather = weatherShowerSlice.actions.showWeather;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherShowerSlice.reducer);

/***/ }),

/***/ 844:
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ 1721);
/* harmony import */ var _slices_weatherShower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices/weatherShower */ 455);
/* harmony import */ var _slices_fetchWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/fetchWeather */ 3429);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
  reducer: {
    weatherShower: _slices_weatherShower__WEBPACK_IMPORTED_MODULE_0__.default,
    fetchWeather: _slices_fetchWeather__WEBPACK_IMPORTED_MODULE_1__.default
  },
  // https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using
  middleware: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultMiddleware)({
    serializableCheck: false
  })
}));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["node_vendors"], () => (__webpack_exec__(1911)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.c128b57d4c4d22d43b69.js.map