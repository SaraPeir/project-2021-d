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
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Tasks */ "./src/client/components/Tasks/index.js");
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Accordion */ "./src/client/components/Accordion/index.js");
/* harmony import */ var _asyncComponents_WeatherForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asyncComponents/WeatherForm */ "./src/client/asyncComponents/WeatherForm/index.js");
/* harmony import */ var _asyncComponents_Weather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asyncComponents/Weather */ "./src/client/asyncComponents/Weather/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_slices_weatherShower__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/slices/weatherShower */ "./src/redux/slices/weatherShower.js");
/* harmony import */ var _redux_slices_fetchWeather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/slices/fetchWeather */ "./src/redux/slices/fetchWeather.js");











var Global = function Global(_ref) {
  var provinces = _ref.provinces;
  var isWeatherDisplayed = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)( /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(state) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('state', state);
              return _context.abrupt("return", state.weatherShower.value);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();

  var weather = function weather() {
    if (isWeatherDisplayed) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_asyncComponents_Weather__WEBPACK_IMPORTED_MODULE_6__.default, null);
    }

    return;
  };

  var WeatherContent = function WeatherContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_asyncComponents_WeatherForm__WEBPACK_IMPORTED_MODULE_5__.default, {
      provinces: provinces
    }), weather());
  };

  var buttonContents = ['El tiempo en España'];
  var bodyContents = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(WeatherContent, null)];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_slices_weatherShower__WEBPACK_IMPORTED_MODULE_8__.showWeather)());
    }
  }, "See how miss to 2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_slices_fetchWeather__WEBPACK_IMPORTED_MODULE_9__.fetchWeatherThunk)());
    }
  }, "fetch weather"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_4__.default, {
    label: 'labelA',
    parentId: 'parendA',
    target: 'targetA',
    n: 1,
    buttonContents: buttonContents,
    bodyContents: bodyContents
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_Tasks__WEBPACK_IMPORTED_MODULE_3__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Global);

/***/ }),

/***/ "./src/client/asyncComponents/WeatherForm/AsyncWeatherForm.js":
/*!********************************************************************!*\
  !*** ./src/client/asyncComponents/WeatherForm/AsyncWeatherForm.js ***!
  \********************************************************************/
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
      __webpack_require__.e(/*! import() | async_weather_form */ "async_weather_form").then(__webpack_require__.bind(__webpack_require__, /*! ./WeatherForm */ "./src/client/asyncComponents/WeatherForm/WeatherForm.js"))
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
      return /*require.resolve*/(/*! ./WeatherForm */ "./src/client/asyncComponents/WeatherForm/WeatherForm.js");
    }

    return eval('require.resolve')("./WeatherForm");
  }
}, {
  ssr: false
}));

/***/ }),

/***/ "./src/client/asyncComponents/WeatherForm/index.js":
/*!*********************************************************!*\
  !*** ./src/client/asyncComponents/WeatherForm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AsyncWeatherForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncWeatherForm */ "./src/client/asyncComponents/WeatherForm/AsyncWeatherForm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AsyncWeatherForm__WEBPACK_IMPORTED_MODULE_0__.default);

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


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
/* harmony export */   "fetchWeatherThunk": () => (/* binding */ fetchWeatherThunk),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



var _extraReducers;



 // thunk (necessary to fetch and handle promises)
// https://redux-toolkit.js.org/api/createAsyncThunk

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
            console.log('response thunk', response);
            return _context.abrupt("return", response);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", thunkAPI.rejectWithValue({}, _context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
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
    error: null,
    loading: false
  },
  extraReducers: (_extraReducers = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_extraReducers, fetchWeatherThunk.fulfilled, function (state, action) {
    var data = action.payload.data || null;
    state.value = data;
    console.log('action', action);

    if (data && data.title && data.today && data.tomorrow && data.ciudades && data.ciudades.length) {
      state.hasWeatherData = true;
    }
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_extraReducers, fetchWeatherThunk.pending, function (state, action) {
    console.log('action', action);
    state.loading = true;
  }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_extraReducers, fetchWeatherThunk.error, function (state, action) {
    console.log('action', action);
    state.error = action.error;
  }), _extraReducers) //   extraReducers: (builder) => {
  //     builder
  //         .addCase(fetchWeatherThunk.fulfilled, (state, action) => {
  //             const data = action.payload.data || null;
  //             state.value = data
  //             console.log('action', action)
  //             if(data && data.title && data.today && data.tomorrow && data.ciudades && data.ciudades.length) {
  //                 state.hasWeatherData = true
  //             }
  //         })
  //         // .addCase(fetchWeatherThunk.pending, (state) => {
  //         //     state.loading = true
  //         // })
  //         // .addCase(fetchWeatherThunk.error, (state, action) => {
  //         //     state.error = action.error
  //         // })
  //   },

});

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
/******/ __webpack_require__.O(0, ["node_vendors"], () => (__webpack_exec__("./src/client/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.0ddf5a0a4cd089502960.js.map