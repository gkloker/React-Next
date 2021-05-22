/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_ProductDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/ProductDetails */ \"./components/layout/ProductDetails.js\");\n/* harmony import */ var _hooks_useProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useProducts */ \"./hooks/useProducts.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/x/Documentos/React-Next/pages/search.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Search = function Search() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var q = router.query.q; // all products\n\n  var _useProducts = (0,_hooks_useProducts__WEBPACK_IMPORTED_MODULE_4__.default)(\"created\"),\n      products = _useProducts.products;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      findProduct = _useState[0],\n      setFindProduct = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var search = q.toLocaleLowerCase();\n    var filter = products.filter(function (product) {\n      return product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search);\n    });\n    setFindProduct(filter);\n  }, [q, products]);\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n    className: \"products-list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n    className: \"bg-white\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, products.map(function (product) {\n    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_layout_ProductDetails__WEBPACK_IMPORTED_MODULE_3__.default, {\n      key: product.id,\n      product: product,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }\n    });\n  }))))));\n};\n\n_s(Search, \"LAnbwbU4CdIUQGosqcD/VZFCcdU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _hooks_useProducts__WEBPACK_IMPORTED_MODULE_4__.default];\n});\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzPzc4ZTgiXSwibmFtZXMiOlsiU2VhcmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwicSIsInF1ZXJ5IiwidXNlUHJvZHVjdHMiLCJwcm9kdWN0cyIsInVzZVN0YXRlIiwiZmluZFByb2R1Y3QiLCJzZXRGaW5kUHJvZHVjdCIsInVzZUVmZmVjdCIsInNlYXJjaCIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZmlsdGVyIiwicHJvZHVjdCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEbUIsTUFFSkMsQ0FGSSxHQUVFRixNQUZGLENBRVpHLEtBRlksQ0FFSkQsQ0FGSSxFQUluQjs7QUFKbUIscUJBS0FFLDJEQUFXLENBQUMsU0FBRCxDQUxYO0FBQUEsTUFLWkMsUUFMWSxnQkFLWkEsUUFMWTs7QUFBQSxrQkFNbUJDLCtDQUFRLENBQUMsRUFBRCxDQU4zQjtBQUFBLE1BTVpDLFdBTlk7QUFBQSxNQU1DQyxjQU5EOztBQVFuQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsTUFBTSxHQUFHUixDQUFDLENBQUNTLGlCQUFGLEVBQWY7QUFDQSxRQUFNQyxNQUFNLEdBQUdQLFFBQVEsQ0FBQ08sTUFBVCxDQUFnQixVQUFBQyxPQUFPLEVBQUk7QUFDeEMsYUFDRUEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLFdBQWIsR0FBMkJDLFFBQTNCLENBQW9DTixNQUFwQyxLQUNBRyxPQUFPLENBQUNJLFdBQVIsQ0FBb0JGLFdBQXBCLEdBQWtDQyxRQUFsQyxDQUEyQ04sTUFBM0MsQ0FGRjtBQUlELEtBTGMsQ0FBZjtBQU1BRixrQkFBYyxDQUFDSSxNQUFELENBQWQ7QUFDRCxHQVRRLEVBU04sQ0FBQ1YsQ0FBRCxFQUFJRyxRQUFKLENBVE0sQ0FBVDtBQVdBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLG9EQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsUUFBUSxDQUFDYSxHQUFULENBQWEsVUFBQUwsT0FBTztBQUFBLFdBQ25CLG9EQUFFLHNFQUFGO0FBQWlCLFNBQUcsRUFBRUEsT0FBTyxDQUFDTSxFQUE5QjtBQUFrQyxhQUFPLEVBQUVOLE9BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEbUI7QUFBQSxHQUFwQixDQURILENBREYsQ0FERixDQURGLENBREYsQ0FERjtBQWVELENBbENEOztHQUFNZCxNO1VBQ1dFLGtELEVBSUlHLHVEOzs7S0FMZkwsTTtBQW9DTiwrREFBZUEsTUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9Qcm9kdWN0RGV0YWlsc1wiO1xuaW1wb3J0IHVzZVByb2R1Y3RzIGZyb20gXCIuLi9ob29rcy91c2VQcm9kdWN0c1wiO1xuXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7cXVlcnk6IHtxfX0gPSByb3V0ZXI7XG5cbiAgLy8gYWxsIHByb2R1Y3RzXG4gIGNvbnN0IHtwcm9kdWN0c30gPSB1c2VQcm9kdWN0cyhcImNyZWF0ZWRcIik7XG4gIGNvbnN0IFtmaW5kUHJvZHVjdCwgc2V0RmluZFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoID0gcS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGZpbHRlciA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaCkgfHxcbiAgICAgICAgcHJvZHVjdC5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaClcbiAgICAgIClcbiAgICB9KTtcbiAgICBzZXRGaW5kUHJvZHVjdChmaWx0ZXIpO1xuICB9LCBbcSwgcHJvZHVjdHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWxpc3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICAgIDwgUHJvZHVjdERldGFpbHMga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fS8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ })

});