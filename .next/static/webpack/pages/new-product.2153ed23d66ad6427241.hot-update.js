/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new-product",{

/***/ "./pages/new-product.js":
/*!******************************!*\
  !*** ./pages/new-product.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var _components_ui_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/Form */ \"./components/ui/Form.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"./firebase/index.js\");\n/* harmony import */ var _hooks_useValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useValidation */ \"./hooks/useValidation.js\");\n/* harmony import */ var _helpers_validateCreateProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/validateCreateProduct */ \"./helpers/validateCreateProduct.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/gkloker/Desktop/React-Next/pages/new-product.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\n // Validations\n\n\n\n\nvar INITIAL_STATE = {\n  name: \"\",\n  company: \"\",\n  image: \"\",\n  url: \"\",\n  description: \"\"\n};\n\nvar _ref =  false ? 0 : {\n  name: \"jkhheh-NewProduct\",\n  styles: \"text-align:center;margin-top:5rem;label:NewProduct;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9na2xva2VyL0Rlc2t0b3AvUmVhY3QtTmV4dC9wYWdlcy9uZXctcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRGtCIiwiZmlsZSI6Ii9Vc2Vycy9na2xva2VyL0Rlc2t0b3AvUmVhY3QtTmV4dC9wYWdlcy9uZXctcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBGb3JtLCBGaWVsZCwgSW5wdXRTdWJtaXQsIEVycm9yIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvRm9ybVwiO1xuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5cbi8vIFZhbGlkYXRpb25zXG5pbXBvcnQgdXNlVmFsaWRhdGlvbiBmcm9tIFwiLi4vaG9va3MvdXNlVmFsaWRhdGlvblwiO1xuaW1wb3J0IHZhbGlkYXRlQ3JlYXRlUHJvZHVjdCBmcm9tIFwiLi4vaGVscGVycy92YWxpZGF0ZUNyZWF0ZVByb2R1Y3RcIjtcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgbmFtZTogXCJcIixcbiAgY29tcGFueTogXCJcIixcbiAgaW1hZ2U6IFwiXCIsXG4gIHVybDogXCJcIixcbiAgZGVzY3JpcHRpb246IFwiXCJcbn1cblxuY29uc3QgTmV3UHJvZHVjdCA9ICgpID0+IHtcbiAgY29uc3QgW21zZ0Vycm9yLCBzZXRNc2dFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlcyxcbiAgICBlcnJvcnMsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVCbHVyXG4gIH0gPSB1c2VWYWxpZGF0aW9uKElOSVRJQUxfU1RBVEUsIHZhbGlkYXRlQ3JlYXRlUHJvZHVjdCwgY3JlYXRlUHJvZHVjdCk7XG5cbiAgLy8gSG9vayByb3V0aW5nIHRvIHJlZGlyZWN0XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIENvbnRleHQgb3BlcmF0aW9ucyBjcnVkIGZpcmViYXNlXG4gIGNvbnN0IHt1c2VyLGZpcmViYXNlfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0KCkge1xuICAgIC8vIElmIHVzZXIgbG9nb3V0IGdvIHRvIGxvZ2luXG4gICAgaWYoIXVzZXIpIHtcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgb2JqZWN0IG5ldyBwcm9kdWN0XG4gIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgbmFtZSxcbiAgICBjb21wYW55LFxuICAgIHVybCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB2b3RlczogMCxcbiAgICBjb21tZW50czogW10sXG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMVxuICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgICBgfVxuICAgICAgICA+TmV3IFByb2R1Y3Q8L2gxPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICA+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxlZ2VuZD5HZW5lcmFsIEluZm9ybWF0aW9uPC9sZWdlbmQ+XG5cbiAgICAgICAgICAgIDxGaWVsZD5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiA8RXJyb3I+e2Vycm9ycy5uYW1lfTwvRXJyb3I+fVxuXG4gICAgICAgICAgICA8RmllbGQ+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcGFueVwiPkNvbXBhbnk8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb21wYW55XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgQ29tcGFueVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29tcGFueX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICB7ZXJyb3JzLmNvbXBhbnkgJiYgPEVycm9yPntlcnJvcnMuY29tcGFueX08L0Vycm9yPn1cblxuICAgICAgICAgICAgey8qPEZpZWxkPiovfVxuICAgICAgICAgICAgey8qICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+SW1hZ2U8L2xhYmVsPiovfVxuICAgICAgICAgICAgey8qICA8aW5wdXQqL31cbiAgICAgICAgICAgIHsvKiAgICB0eXBlPVwiZmlsZVwiKi99XG4gICAgICAgICAgICB7LyogICAgaWQ9XCJpbWFnZVwiKi99XG4gICAgICAgICAgICB7LyogICAgbmFtZT1cImltYWdlXCIqL31cbiAgICAgICAgICAgIHsvKiAgICB2YWx1ZT17dmFsdWVzLmNvbXBhbnl9Ki99XG4gICAgICAgICAgICB7LyogICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0qL31cbiAgICAgICAgICAgIHsvKiAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9Ki99XG4gICAgICAgICAgICB7LyogIC8+Ki99XG4gICAgICAgICAgICB7Lyo8L0ZpZWxkPiovfVxuICAgICAgICAgICAgey8qe2Vycm9ycy5pbWFnZSAmJiA8RXJyb3I+e2Vycm9ycy5pbWFnZX08L0Vycm9yPn0qL31cblxuICAgICAgICAgICAgPEZpZWxkPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVybFwiPlVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgIGlkPVwidXJsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVSTCBQcm9kdWN0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVybH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICB7ZXJyb3JzLnVybCAmJiA8RXJyb3I+e2Vycm9ycy51cmx9PC9FcnJvcj59XG4gICAgICAgICAgPC9maWVsZHNldD5cblxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsZWdlbmQ+QWJvdXQgeW91ciBwcm9kdWN0PC9sZWdlbmQ+XG5cbiAgICAgICAgICAgIDxGaWVsZD5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIHtlcnJvcnMuZGVzY3JpcHRpb24gJiYgPEVycm9yPntlcnJvcnMuZGVzY3JpcHRpb259PC9FcnJvcj59XG4gICAgICAgICAgPC9maWVsZHNldD5cblxuXG4gICAgICAgICAgICB7bXNnRXJyb3IgJiYgPEVycm9yPnttc2dFcnJvcn08L0Vycm9yPn1cbiAgICAgICAgICA8SW5wdXRTdWJtaXRcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgdmFsdWU9XCJDcmVhdGUgUHJvZHVjdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3UHJvZHVjdDsiXX0= */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nvar NewProduct = function NewProduct() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      msgError = _useState[0],\n      setMsgError = _useState[1];\n\n  var _useValidation = (0,_hooks_useValidation__WEBPACK_IMPORTED_MODULE_7__.default)(INITIAL_STATE, _helpers_validateCreateProduct__WEBPACK_IMPORTED_MODULE_8__.default, createProduct),\n      values = _useValidation.values,\n      errors = _useValidation.errors,\n      handleSubmit = _useValidation.handleSubmit,\n      handleChange = _useValidation.handleChange,\n      handleBlur = _useValidation.handleBlur; // Hook routing to redirect\n\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(); // Context operations crud firebase\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_firebase__WEBPACK_IMPORTED_MODULE_6__.FirebaseContext),\n      user = _useContext.user,\n      firebase = _useContext.firebase;\n\n  function createProduct() {\n    return _createProduct.apply(this, arguments);\n  } // Create object new product\n\n\n  function _createProduct() {\n    _createProduct = (0,_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      return _Users_gkloker_Desktop_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (user) {\n                _context.next = 2;\n                break;\n              }\n\n              return _context.abrupt(\"return\", router.push(\"/login\"));\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _createProduct.apply(this, arguments);\n  }\n\n  var product = {\n    name: name,\n    company: company,\n    url: url,\n    description: description,\n    votes: 0,\n    comments: []\n  };\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"h1\", {\n    css: _ref,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, \"New Product\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_5__.Form, {\n    onSubmit: handleSubmit,\n    noValidate: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"fieldset\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"legend\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, \"General Information\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_5__.Field, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"label\", {\n    htmlFor: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }, \"Name\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"input\", {\n    type: \"text\",\n    id: \"name\",\n    placeholder: \"Your name\",\n    name: \"name\",\n    value: values.name,\n    onChange: handleChange,\n    onBlur: handleBlur,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  })), errors.name && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_5__.Error, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 29\n    }\n  }, errors.name), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_5__.Field, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"label\", {\n    htmlFor: \"company\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, \"Company\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"input\", {\n    type: \"text\",\n    id: \"company\",\n    placeholder: \"Your Company\",\n    name: \"company\",\n    value: values.company,\n    onChange: handleChange,\n    onBlur: handleBlur,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  })), errors.company && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_5__.Error, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 32\n    }\n  }, errors.company), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_5__.Field, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"label\", {\n    htmlFor: \"url\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  }, \"URL\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"input\", {\n    type: \"url\",\n    id: \"url\",\n    name: \"url\",\n    placeholder: \"URL Product\",\n    value: values.url,\n    onChange: handleChange,\n    onBlur: handleBlur,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 15\n    }\n  })), errors.url && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_5__.Error, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 28\n    }\n  }, errors.url)), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"fieldset\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 11\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"legend\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 13\n    }\n  }, \"About your product\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_5__.Field, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"label\", {\n    htmlFor: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 15\n    }\n  }, \"Description\"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(\"textarea\", {\n    id: \"description\",\n    name: \"description\",\n    value: values.description,\n    onChange: handleChange,\n    onBlur: handleBlur,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 15\n    }\n  })), errors.description && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_5__.Error, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 36\n    }\n  }, errors.description)), msgError && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_5__.Error, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 26\n    }\n  }, msgError), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ui_Form__WEBPACK_IMPORTED_MODULE_5__.InputSubmit, {\n    type: \"submit\",\n    value: \"Create Product\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(NewProduct, \"BHGedkEZfKjtnaJq5xpQ7YmFle8=\", false, function () {\n  return [_hooks_useValidation__WEBPACK_IMPORTED_MODULE_7__.default, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = NewProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewProduct);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LXByb2R1Y3QuanM/YmZmMSJdLCJuYW1lcyI6WyJJTklUSUFMX1NUQVRFIiwibmFtZSIsImNvbXBhbnkiLCJpbWFnZSIsInVybCIsImRlc2NyaXB0aW9uIiwiTmV3UHJvZHVjdCIsInVzZVN0YXRlIiwibXNnRXJyb3IiLCJzZXRNc2dFcnJvciIsInVzZVZhbGlkYXRpb24iLCJ2YWxpZGF0ZUNyZWF0ZVByb2R1Y3QiLCJjcmVhdGVQcm9kdWN0IiwidmFsdWVzIiwiZXJyb3JzIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJGaXJlYmFzZUNvbnRleHQiLCJ1c2VyIiwiZmlyZWJhc2UiLCJwdXNoIiwicHJvZHVjdCIsInZvdGVzIiwiY29tbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNwQkMsTUFBSSxFQUFFLEVBRGM7QUFFcEJDLFNBQU8sRUFBRSxFQUZXO0FBR3BCQyxPQUFLLEVBQUUsRUFIYTtBQUlwQkMsS0FBRyxFQUFFLEVBSmU7QUFLcEJDLGFBQVcsRUFBRTtBQUxPLENBQXRCOzs7Ozs7Ozs7QUFRQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLCtDQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ2hCQyxRQURnQjtBQUFBLE1BQ05DLFdBRE07O0FBQUEsdUJBU25CQyw2REFBYSxDQUFDVixhQUFELEVBQWdCVyxtRUFBaEIsRUFBdUNDLGFBQXZDLENBVE07QUFBQSxNQUlyQkMsTUFKcUIsa0JBSXJCQSxNQUpxQjtBQUFBLE1BS3JCQyxNQUxxQixrQkFLckJBLE1BTHFCO0FBQUEsTUFNckJDLFlBTnFCLGtCQU1yQkEs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SSxvREFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLFFBQVIsQ0FoRmpCLEVBaUZFLG9EQUFDLDREQUFEO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxTQUFLLEVBQUMsZ0JBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpGRixDQVBGLENBREYsQ0FERjtBQWtHRCxDQXJJRDs7R0FBTUYsVTtVQVNBSSx5RCxFQUdXUyxrRDs7O0tBWlhiLFU7QUF1SU4sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9wYWdlcy9uZXctcHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBGb3JtLCBGaWVsZCwgSW5wdXRTdWJtaXQsIEVycm9yIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvRm9ybVwiO1xuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5cbi8vIFZhbGlkYXRpb25zXG5pbXBvcnQgdXNlVmFsaWRhdGlvbiBmcm9tIFwiLi4vaG9va3MvdXNlVmFsaWRhdGlvblwiO1xuaW1wb3J0IHZhbGlkYXRlQ3JlYXRlUHJvZHVjdCBmcm9tIFwiLi4vaGVscGVycy92YWxpZGF0ZUNyZWF0ZVByb2R1Y3RcIjtcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgbmFtZTogXCJcIixcbiAgY29tcGFueTogXCJcIixcbiAgaW1hZ2U6IFwiXCIsXG4gIHVybDogXCJcIixcbiAgZGVzY3JpcHRpb246IFwiXCJcbn1cblxuY29uc3QgTmV3UHJvZHVjdCA9ICgpID0+IHtcbiAgY29uc3QgW21zZ0Vycm9yLCBzZXRNc2dFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlcyxcbiAgICBlcnJvcnMsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBoYW5kbGVCbHVyXG4gIH0gPSB1c2VWYWxpZGF0aW9uKElOSVRJQUxfU1RBVEUsIHZhbGlkYXRlQ3JlYXRlUHJvZHVjdCwgY3JlYXRlUHJvZHVjdCk7XG5cbiAgLy8gSG9vayByb3V0aW5nIHRvIHJlZGlyZWN0XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIENvbnRleHQgb3BlcmF0aW9ucyBjcnVkIGZpcmViYXNlXG4gIGNvbnN0IHt1c2VyLGZpcmViYXNlfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcblxuICBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0KCkge1xuICAgIC8vIElmIHVzZXIgbG9nb3V0IGdvIHRvIGxvZ2luXG4gICAgaWYoIXVzZXIpIHtcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgb2JqZWN0IG5ldyBwcm9kdWN0XG4gIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgbmFtZSxcbiAgICBjb21wYW55LFxuICAgIHVybCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB2b3RlczogMCxcbiAgICBjb21tZW50czogW10sXG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMVxuICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgICBgfVxuICAgICAgICA+TmV3IFByb2R1Y3Q8L2gxPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICA+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxlZ2VuZD5HZW5lcmFsIEluZm9ybWF0aW9uPC9sZWdlbmQ+XG5cbiAgICAgICAgICAgIDxGaWVsZD5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiA8RXJyb3I+e2Vycm9ycy5uYW1lfTwvRXJyb3I+fVxuXG4gICAgICAgICAgICA8RmllbGQ+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcGFueVwiPkNvbXBhbnk8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb21wYW55XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgQ29tcGFueVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbXBhbnlcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29tcGFueX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICB7ZXJyb3JzLmNvbXBhbnkgJiYgPEVycm9yPntlcnJvcnMuY29tcGFueX08L0Vycm9yPn1cblxuICAgICAgICAgICAgey8qPEZpZWxkPiovfVxuICAgICAgICAgICAgey8qICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+SW1hZ2U8L2xhYmVsPiovfVxuICAgICAgICAgICAgey8qICA8aW5wdXQqL31cbiAgICAgICAgICAgIHsvKiAgICB0eXBlPVwiZmlsZVwiKi99XG4gICAgICAgICAgICB7LyogICAgaWQ9XCJpbWFnZVwiKi99XG4gICAgICAgICAgICB7LyogICAgbmFtZT1cImltYWdlXCIqL31cbiAgICAgICAgICAgIHsvKiAgICB2YWx1ZT17dmFsdWVzLmNvbXBhbnl9Ki99XG4gICAgICAgICAgICB7LyogICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0qL31cbiAgICAgICAgICAgIHsvKiAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9Ki99XG4gICAgICAgICAgICB7LyogIC8+Ki99XG4gICAgICAgICAgICB7Lyo8L0ZpZWxkPiovfVxuICAgICAgICAgICAgey8qe2Vycm9ycy5pbWFnZSAmJiA8RXJyb3I+e2Vycm9ycy5pbWFnZX08L0Vycm9yPn0qL31cblxuICAgICAgICAgICAgPEZpZWxkPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVybFwiPlVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxuICAgICAgICAgICAgICAgIGlkPVwidXJsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVSTCBQcm9kdWN0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVybH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICB7ZXJyb3JzLnVybCAmJiA8RXJyb3I+e2Vycm9ycy51cmx9PC9FcnJvcj59XG4gICAgICAgICAgPC9maWVsZHNldD5cblxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsZWdlbmQ+QWJvdXQgeW91ciBwcm9kdWN0PC9sZWdlbmQ+XG5cbiAgICAgICAgICAgIDxGaWVsZD5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIHtlcnJvcnMuZGVzY3JpcHRpb24gJiYgPEVycm9yPntlcnJvcnMuZGVzY3JpcHRpb259PC9FcnJvcj59XG4gICAgICAgICAgPC9maWVsZHNldD5cblxuXG4gICAgICAgICAgICB7bXNnRXJyb3IgJiYgPEVycm9yPnttc2dFcnJvcn08L0Vycm9yPn1cbiAgICAgICAgICA8SW5wdXRTdWJtaXRcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgdmFsdWU9XCJDcmVhdGUgUHJvZHVjdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3UHJvZHVjdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/new-product.js\n");

/***/ })

});