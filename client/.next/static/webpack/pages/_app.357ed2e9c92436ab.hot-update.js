"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ \"./pages/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst App = (param)=>{\n    let { Component , pageProps  } = param;\n    _s();\n    const clientRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const getClient = ()=>{\n        if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();\n        return clientRef.current;\n    };\n    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: getClient(),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\development\\\\local-api\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\development\\\\local-api\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"67t0qiuNMBMd6ZM7Z7JwZpgZZRM=\");\n_c = App;\nApp.getInitialProps = async (param)=>{\n    let { ctx , Component  } = param;\n    var _Component_getInitialProps;\n    const pageProps = await ((_Component_getInitialProps = Component.getInitialProps) === null || _Component_getInitialProps === void 0 ? void 0 : _Component_getInitialProps.call(Component, ctx));\n    return {\n        pageProps\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBQ2dDO0FBQ3pDO0FBRXRCLE1BQU1HLE1BQU0sU0FBOEI7UUFBN0IsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUU7O0lBQ25DLE1BQU1DLFlBQVlOLDZDQUFNQSxDQUFDLElBQUk7SUFDN0IsTUFBTU8sWUFBWSxJQUFNO1FBQ3RCLElBQUksQ0FBQ0QsVUFBVUUsT0FBTyxFQUFFRixVQUFVRSxPQUFPLEdBQUcsSUFBSVAsb0RBQVdBO1FBQzNELE9BQU9LLFVBQVVFLE9BQU87SUFDMUI7SUFDQSxNQUFNQyxjQUFjLElBQUlSLG9EQUFXQTtJQUNuQyxxQkFDRSw4REFBQ0MsNERBQW1CQTtRQUFDUSxRQUFRSDtrQkFDM0IsNEVBQUNIO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7R0FaTUY7S0FBQUE7QUFhTkEsSUFBSVEsZUFBZSxHQUFHLGVBQThCO1FBQXZCLEVBQUVDLElBQUcsRUFBRVIsVUFBUyxFQUFFO1FBQ3JCQTtJQUF4QixNQUFNQyxZQUFZLE9BQU1ELENBQUFBLDZCQUFBQSxVQUFVTyxlQUFlLGNBQXpCUCx3Q0FBQUEsS0FBQUEsSUFBQUEsMkJBQUFBLEtBQUFBLFdBQTRCUTtJQUNwRCxPQUFPO1FBQUVQO0lBQVU7QUFDckI7QUFFQSwrREFBZUYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IGNsaWVudFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBnZXRDbGllbnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWNsaWVudFJlZi5jdXJyZW50KSBjbGllbnRSZWYuY3VycmVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xyXG4gICAgcmV0dXJuIGNsaWVudFJlZi5jdXJyZW50O1xyXG4gIH07XHJcbiAgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtnZXRDbGllbnQoKX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4LCBDb21wb25lbnQgfSkgPT4ge1xyXG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM/LihjdHgpO1xyXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsidXNlUmVmIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50UmVmIiwiZ2V0Q2xpZW50IiwiY3VycmVudCIsInF1ZXJ5Q2xpZW50IiwiY2xpZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});