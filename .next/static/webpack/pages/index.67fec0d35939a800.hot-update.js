"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/header/Header.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/Menu */ \"./src/components/menu/Menu.jsx\");\n/* harmony import */ var _header_logo_HeaderLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-logo/HeaderLogo */ \"./src/components/header-logo/HeaderLogo.jsx\");\n/* harmony import */ var _menu_button_MenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-button/MenuButton */ \"./src/components/menu-button/MenuButton.jsx\");\n/* harmony import */ var _Header_styled_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.styled.js */ \"./src/components/header/Header.styled.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/hermanvulkers/Development/humanoidsbv/team-awesome-herman/src/components/header/Header.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      isActive = _useState[0],\n      setIsActive = _useState[1];\n\n  var handleClick = function handleClick() {\n    return setIsActive(!isActive);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_styled_js__WEBPACK_IMPORTED_MODULE_4__.Header, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Header_styled_js__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_header_logo_HeaderLogo__WEBPACK_IMPORTED_MODULE_2__.HeaderLogo, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_menu_button_MenuButton__WEBPACK_IMPORTED_MODULE_3__.MenuButton, {\n        onClick: handleClick\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, _this), isActive && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_menu_Menu__WEBPACK_IMPORTED_MODULE_1__.Menu, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 27\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Header, \"OFRYOMGmWDzfQ4dzLF00ag1mHo0=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRU8sSUFBTU0sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUV4QixrQkFBZ0NMLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9NLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNRCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEdBQXBCOztBQUVBLHNCQUNJLDhEQUFDLHFEQUFEO0FBQUEsNEJBQ0ksOERBQUMsc0RBQUQ7QUFBQSw4QkFDSSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSw4REFBQywrREFBRDtBQUFZLGVBQU8sRUFBRUU7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBS0tGLFFBQVEsaUJBQUssOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVNELENBZEk7O0dBQU1EOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeD81ZDQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuLi9tZW51L01lbnVcIjtcbmltcG9ydCB7IEhlYWRlckxvZ28gfSBmcm9tIFwiLi4vaGVhZGVyLWxvZ28vSGVhZGVyTG9nb1wiO1xuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gXCIuLi9tZW51LWJ1dHRvbi9NZW51QnV0dG9uXCI7XG5cbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL0hlYWRlci5zdHlsZWQuanMnO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7IFxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gc2V0SXNBY3RpdmUoIWlzQWN0aXZlKTsgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkLkhlYWRlcj5cbiAgICAgICAgICAgIDxTdHlsZWQuV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyTG9nbyAvPlxuICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxuICAgICAgICAgICAgPC9TdHlsZWQuV3JhcHBlcj5cbiAgICAgICAgICAgIHtpc0FjdGl2ZSAmJiAoPE1lbnUgLz4pfVxuICAgICAgICA8L1N0eWxlZC5IZWFkZXI+XG4gICAgKTtcbiAgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWVudSIsIkhlYWRlckxvZ28iLCJNZW51QnV0dG9uIiwiU3R5bGVkIiwiSGVhZGVyIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/Header.jsx\n");

/***/ })

});