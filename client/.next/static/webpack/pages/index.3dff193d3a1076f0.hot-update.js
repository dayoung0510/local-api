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

/***/ "./hooks/useInfiniteScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfiniteScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useInfiniteScroll = (targetEl)=>{\n    _s();\n    const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const [intersecting, setIntersecting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    //   const observer = new IntersectionObserver((entries) =>\n    //     setIntersecting(entries.some((entry) => entry.isIntersecting))\n    //   );\n    const getObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{\n        if (!observerRef.current) {\n            observerRef.current = new IntersectionObserver((entries)=>setIntersecting(entries.some((entry)=>entry.isIntersecting)));\n        }\n        return observerRef.current;\n    }, [\n        observerRef.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (targetEl.current) getObserver.observe(targetEl.current);\n        return ()=>{\n            observer.disconnect();\n        };\n    }, [\n        targetEl.current\n    ]);\n    return intersecting;\n};\n_s(useInfiniteScroll, \"wgJwkE67wQsXc1eiCmrL0CTwPqc=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useInfiniteScroll);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUFpRTtBQUVqRSxNQUFNSSxvQkFBb0IsQ0FBQ0MsV0FBYTs7SUFDdEMsTUFBTUMsY0FBY0osNkNBQU1BLENBQUMsSUFBSTtJQUMvQixNQUFNLENBQUNLLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RELDJEQUEyRDtJQUMzRCxxRUFBcUU7SUFDckUsT0FBTztJQUVQLE1BQU1TLGNBQWNOLGtEQUFXQSxDQUFDLElBQU07UUFDcEMsSUFBSSxDQUFDRyxZQUFZSSxPQUFPLEVBQUU7WUFDeEJKLFlBQVlJLE9BQU8sR0FBRyxJQUFJQyxxQkFBcUIsQ0FBQ0MsVUFDOUNKLGdCQUFnQkksUUFBUUMsSUFBSSxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLGNBQWM7UUFFaEUsQ0FBQztRQUNELE9BQU9ULFlBQVlJLE9BQU87SUFDNUIsR0FBRztRQUFDSixZQUFZSSxPQUFPO0tBQUM7SUFFeEJULGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJSSxTQUFTSyxPQUFPLEVBQUVELFlBQVlPLE9BQU8sQ0FBQ1gsU0FBU0ssT0FBTztRQUUxRCxPQUFPLElBQU07WUFDWE8sU0FBU0MsVUFBVTtRQUNyQjtJQUNGLEdBQUc7UUFBQ2IsU0FBU0ssT0FBTztLQUFDO0lBRXJCLE9BQU9IO0FBQ1Q7R0F6Qk1IO0FBMkJOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwuanM/NDFlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VJbmZpbml0ZVNjcm9sbCA9ICh0YXJnZXRFbCkgPT4ge1xyXG4gIGNvbnN0IG9ic2VydmVyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtpbnRlcnNlY3RpbmcsIHNldEludGVyc2VjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT5cclxuICAvLyAgICAgc2V0SW50ZXJzZWN0aW5nKGVudHJpZXMuc29tZSgoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSlcclxuICAvLyAgICk7XHJcblxyXG4gIGNvbnN0IGdldE9ic2VydmVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFvYnNlcnZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+XHJcbiAgICAgICAgc2V0SW50ZXJzZWN0aW5nKGVudHJpZXMuc29tZSgoZW50cnkpID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYnNlcnZlclJlZi5jdXJyZW50O1xyXG4gIH0sIFtvYnNlcnZlclJlZi5jdXJyZW50XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodGFyZ2V0RWwuY3VycmVudCkgZ2V0T2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXRFbC5jdXJyZW50KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG4gIH0sIFt0YXJnZXRFbC5jdXJyZW50XSk7XHJcblxyXG4gIHJldHVybiBpbnRlcnNlY3Rpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VJbmZpbml0ZVNjcm9sbDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJ1c2VJbmZpbml0ZVNjcm9sbCIsInRhcmdldEVsIiwib2JzZXJ2ZXJSZWYiLCJpbnRlcnNlY3RpbmciLCJzZXRJbnRlcnNlY3RpbmciLCJnZXRPYnNlcnZlciIsImN1cnJlbnQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJzb21lIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm9ic2VydmUiLCJvYnNlcnZlciIsImRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useInfiniteScroll.js\n"));

/***/ })

});