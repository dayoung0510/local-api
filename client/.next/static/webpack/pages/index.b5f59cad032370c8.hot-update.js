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

/***/ "./queryClient.js":
/*!************************!*\
  !*** ./queryClient.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QueryKeys\": function() { return /* binding */ QueryKeys; },\n/* harmony export */   \"fetcher\": function() { return /* binding */ fetcher; },\n/* harmony export */   \"findTargetMsgIndex\": function() { return /* binding */ findTargetMsgIndex; }\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"../node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\nconst URL = \"http://localhost:8000/graphql\";\nconst fetcher = (query, variables)=>(0,graphql_request__WEBPACK_IMPORTED_MODULE_0__.request)(URL, query, variables);\nconst QueryKeys = {\n    MESSAGES: \"MESSAGES\",\n    MESSAGE: \"MESSAGE\",\n    USERS: \"USERS\",\n    USER: \"USER\"\n};\nconst findTargetMsgIndex = (pages, id)=>{\n    let msgIndex = -1;\n    const pageIndex = pages.findIndex((param)=>{\n        let { messages  } = param;\n        msgIndex = messages.findIndex((msg)=>msg.id === id);\n        if (msgIndex > -1) return true;\n        return false;\n    });\n    return {\n        pageIndex,\n        msgIndex\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9xdWVyeUNsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQztBQUUxQyxNQUFNQyxNQUFNO0FBRUwsTUFBTUMsVUFBVSxDQUFDQyxPQUFPQyxZQUFjSix3REFBT0EsQ0FBQ0MsS0FBS0UsT0FBT0MsV0FBVztBQUVyRSxNQUFNQyxZQUFZO0lBQ3ZCQyxVQUFVO0lBQ1ZDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxNQUFNO0FBQ1IsRUFBRTtBQUVLLE1BQU1DLHFCQUFxQixDQUFDQyxPQUFPQyxLQUFPO0lBQy9DLElBQUlDLFdBQVcsQ0FBQztJQUNoQixNQUFNQyxZQUFZSCxNQUFNSSxTQUFTLENBQUMsU0FBa0I7WUFBakIsRUFBRUMsU0FBUSxFQUFFO1FBQzdDSCxXQUFXRyxTQUFTRCxTQUFTLENBQUMsQ0FBQ0UsTUFBUUEsSUFBSUwsRUFBRSxLQUFLQTtRQUNsRCxJQUFJQyxXQUFXLENBQUMsR0FBRyxPQUFPLElBQUk7UUFDOUIsT0FBTyxLQUFLO0lBQ2Q7SUFDQSxPQUFPO1FBQUVDO1FBQVdEO0lBQVM7QUFDL0IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9xdWVyeUNsaWVudC5qcz9kYTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XHJcblxyXG5jb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ncmFwaHFsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hlciA9IChxdWVyeSwgdmFyaWFibGVzKSA9PiByZXF1ZXN0KFVSTCwgcXVlcnksIHZhcmlhYmxlcyk7XHJcblxyXG5leHBvcnQgY29uc3QgUXVlcnlLZXlzID0ge1xyXG4gIE1FU1NBR0VTOiBcIk1FU1NBR0VTXCIsXHJcbiAgTUVTU0FHRTogXCJNRVNTQUdFXCIsXHJcbiAgVVNFUlM6IFwiVVNFUlNcIixcclxuICBVU0VSOiBcIlVTRVJcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaW5kVGFyZ2V0TXNnSW5kZXggPSAocGFnZXMsIGlkKSA9PiB7XHJcbiAgbGV0IG1zZ0luZGV4ID0gLTE7XHJcbiAgY29uc3QgcGFnZUluZGV4ID0gcGFnZXMuZmluZEluZGV4KCh7IG1lc3NhZ2VzIH0pID0+IHtcclxuICAgIG1zZ0luZGV4ID0gbWVzc2FnZXMuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKG1zZ0luZGV4ID4gLTEpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG4gIHJldHVybiB7IHBhZ2VJbmRleCwgbXNnSW5kZXggfTtcclxufTtcclxuIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJVUkwiLCJmZXRjaGVyIiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJRdWVyeUtleXMiLCJNRVNTQUdFUyIsIk1FU1NBR0UiLCJVU0VSUyIsIlVTRVIiLCJmaW5kVGFyZ2V0TXNnSW5kZXgiLCJwYWdlcyIsImlkIiwibXNnSW5kZXgiLCJwYWdlSW5kZXgiLCJmaW5kSW5kZXgiLCJtZXNzYWdlcyIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./queryClient.js\n"));

/***/ })

});