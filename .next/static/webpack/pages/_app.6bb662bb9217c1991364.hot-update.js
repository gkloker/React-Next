/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config */ \"./firebase/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nvar Firebase = /*#__PURE__*/function () {\n  function Firebase() {\n    (0,_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Firebase);\n\n    if (!firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.apps.length) {\n      firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.initializeApp(_config__WEBPACK_IMPORTED_MODULE_8__.default);\n    }\n\n    this.auth = firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.auth();\n    this.db = firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.firestore();\n  } // Register an user\n\n\n  (0,_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Firebase, [{\n    key: \"register\",\n    value: function () {\n      var _register = (0,_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name, email, password) {\n        var newUser;\n        return _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.auth.createUserWithEmailAndPassword(email, password);\n\n              case 2:\n                newUser = _context.sent;\n                _context.next = 5;\n                return newUser.user.updateProfile({\n                  displayName: name\n                });\n\n              case 5:\n                return _context.abrupt(\"return\", _context.sent);\n\n              case 6:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function register(_x, _x2, _x3) {\n        return _register.apply(this, arguments);\n      }\n\n      return register;\n    }() // Sign in from user\n\n  }, {\n    key: \"login\",\n    value: function () {\n      var _login = (0,_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(email, password) {\n        return _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                return _context2.abrupt(\"return\", this.auth.signInWithEmailAndPassword(email, password));\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function login(_x4, _x5) {\n        return _login.apply(this, arguments);\n      }\n\n      return login;\n    }() // Close user session\n\n  }, {\n    key: \"logOut\",\n    value: function () {\n      var _logOut = (0,_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {\n        return _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return this.auth.signOut();\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function logOut() {\n        return _logOut.apply(this, arguments);\n      }\n\n      return logOut;\n    }()\n  }]);\n\n  return Firebase;\n}();\n\nvar firebase = new Firebase();\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UvZmlyZWJhc2UuanM/MjNiYyJdLCJuYW1lcyI6WyJGaXJlYmFzZSIsIkFwcCIsImZpcmViYXNlQ29uZmlnIiwiYXV0aCIsImRiIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJuZXdVc2VyIiwidXNlciIsInVwZGF0ZVByb2ZpbGUiLCJkaXNwbGF5TmFtZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsImZpcmViYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUTtBQUNKLHNCQUFjO0FBQUE7O0FBQ1osUUFBSSxDQUFDQyw2REFBTCxFQUFzQjtBQUNwQkEscUVBQUEsQ0FBa0JDLDRDQUFsQjtBQUNEOztBQUNELFNBQUtDLElBQUwsR0FBWUYsc0RBQUEsRUFBWjtBQUNBLFNBQUtHLEVBQUwsR0FBVUgsMkRBQUEsRUFBVjtBQUNELEcsQ0FFRDs7Ozs7OzZTQUNlSSxJLEVBQU1DLEssRUFBT0MsUTs7Ozs7Ozt1QkFDSixLQUFLSixJQUFMLENBQVVLLDhCQUFWLENBQXlDRixLQUF6QyxFQUFnREMsUUFBaEQsQzs7O0FBQWhCRSx1Qjs7dUJBRU9BLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxhQUFiLENBQTJCO0FBQ3RDQyw2QkFBVyxFQUFFUDtBQUR5QixpQkFBM0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBS2Y7Ozs7OzJTQUNZQyxLLEVBQU9DLFE7Ozs7O2tEQUNWLEtBQUtKLElBQUwsQ0FBVVUsMEJBQVYsQ0FBcUNQLEtBQXJDLEVBQTRDQyxRQUE1QyxDOzs7Ozs7Ozs7Ozs7Ozs7UUFHVDs7Ozs7Ozs7Ozs7dUJBRVEsS0FBS0osSUFBTCxDQUFVVyxPQUFWLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlWLElBQU1DLFFBQVEsR0FBRyxJQUFJZixRQUFKLEVBQWpCO0FBQ0EsK0RBQWVlLFFBQWYiLCJmaWxlIjoiLi9maXJlYmFzZS9maXJlYmFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9zdG9yYWdlXCI7XG5pbXBvcnQgZmlyZWJhc2VDb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XG5cbmNsYXNzIEZpcmViYXNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCFBcHAuYXBwcy5sZW5ndGgpIHtcbiAgICAgIEFwcC5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgICB9XG4gICAgdGhpcy5hdXRoID0gQXBwLmF1dGgoKTtcbiAgICB0aGlzLmRiID0gQXBwLmZpcmVzdG9yZSgpO1xuICB9XG5cbiAgLy8gUmVnaXN0ZXIgYW4gdXNlclxuICBhc3luYyByZWdpc3RlcihuYW1lLCBlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgdGhpcy5hdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIGF3YWl0IG5ld1VzZXIudXNlci51cGRhdGVQcm9maWxlKHtcbiAgICAgIGRpc3BsYXlOYW1lOiBuYW1lXG4gICAgfSlcbiAgfVxuXG4gIC8vIFNpZ24gaW4gZnJvbSB1c2VyXG4gIGFzeW5jIGxvZ2luKGVtYWlsLCBwYXNzd29yZCkge1xuICAgIHJldHVybiB0aGlzLmF1dGguc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcbiAgfVxuXG4gIC8vIENsb3NlIHVzZXIgc2Vzc2lvblxuICBhc3luYyBsb2dPdXQoKSB7XG4gICAgYXdhaXQgdGhpcy5hdXRoLnNpZ25PdXQoKTtcbiAgfVxufVxuXG5jb25zdCBmaXJlYmFzZSA9IG5ldyBGaXJlYmFzZSgpO1xuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/firebase.js\n");

/***/ })

});