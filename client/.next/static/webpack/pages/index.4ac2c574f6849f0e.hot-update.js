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

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n\n\nconst MsgItem = (param)=>{\n    let { id , timestamp , text , onUpdate , isEditing , startEdit , onDelete , myId , user  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"messages__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    user.nickname,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sub\", {\n                        children: new Date(timestamp).toLocaleString(\"ko-KR\", {\n                            year: \"numeric\",\n                            month: \"numeric\",\n                            day: \"numeric\",\n                            hour: \"2-digit\",\n                            minute: \"2-digit\",\n                            hour12: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgItem.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgItem.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    mutate: onUpdate,\n                    text: text,\n                    id: id\n                }, void 0, false, {\n                    fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgItem.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false) : text,\n            myId === user.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"messages__buttons\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: startEdit,\n                        children: \"수정\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgItem.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onDelete,\n                        children: \"삭제\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgItem.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgItem.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgItem.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MsgItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgItem);\nvar _c;\n$RefreshReg$(_c, \"MsgItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQWtDO0FBRWxDLE1BQU1DLFVBQVUsU0FVVjtRQVZXLEVBQ2ZDLEdBQUUsRUFDRkMsVUFBUyxFQUNUQyxLQUFJLEVBQ0pDLFNBQVEsRUFDUkMsVUFBUyxFQUNUQyxVQUFTLEVBQ1RDLFNBQVEsRUFDUkMsS0FBSSxFQUNKQyxLQUFJLEVBQ0w7SUFDQyxxQkFDRSw4REFBQ0M7UUFBR0MsV0FBVTs7MEJBQ1osOERBQUNDOztvQkFDRUgsS0FBS0ksUUFBUTtrQ0FDZCw4REFBQ0M7a0NBQ0UsSUFBSUMsS0FBS2IsV0FBV2MsY0FBYyxDQUFDLFNBQVM7NEJBQzNDQyxNQUFNOzRCQUNOQyxPQUFPOzRCQUNQQyxLQUFLOzRCQUNMQyxNQUFNOzRCQUNOQyxRQUFROzRCQUNSQyxRQUFRLElBQUk7d0JBQ2Q7Ozs7Ozs7Ozs7OztZQUlIakIsMEJBQ0M7MEJBQ0UsNEVBQUNOLGlEQUFRQTtvQkFBQ3dCLFFBQVFuQjtvQkFBVUQsTUFBTUE7b0JBQU1GLElBQUlBOzs7Ozs7Z0NBRzlDRSxJQUNEO1lBRUFLLFNBQVNDLEtBQUtSLEVBQUUsa0JBQ2YsOERBQUN1QjtnQkFBSWIsV0FBVTs7a0NBQ2IsOERBQUNjO3dCQUFPQyxTQUFTcEI7a0NBQVc7Ozs7OztrQ0FDNUIsOERBQUNtQjt3QkFBT0MsU0FBU25CO2tDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckM7S0EzQ01QO0FBNkNOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnSXRlbS5qcz9jMzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5cclxuY29uc3QgTXNnSXRlbSA9ICh7XHJcbiAgaWQsXHJcbiAgdGltZXN0YW1wLFxyXG4gIHRleHQsXHJcbiAgb25VcGRhdGUsXHJcbiAgaXNFZGl0aW5nLFxyXG4gIHN0YXJ0RWRpdCxcclxuICBvbkRlbGV0ZSxcclxuICBteUlkLFxyXG4gIHVzZXIsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICB7dXNlci5uaWNrbmFtZX1cclxuICAgICAgICA8c3ViPlxyXG4gICAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoXCJrby1LUlwiLCB7XHJcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICBtb250aDogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgICAgICBob3VyMTI6IHRydWUsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3N1Yj5cclxuICAgICAgPC9oMz5cclxuXHJcbiAgICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uVXBkYXRlfSB0ZXh0PXt0ZXh0fSBpZD17aWR9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgdGV4dFxyXG4gICAgICApfVxyXG5cclxuICAgICAge215SWQgPT09IHVzZXIuaWQgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2J1dHRvbnNcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbTtcclxuIl0sIm5hbWVzIjpbIk1zZ0lucHV0IiwiTXNnSXRlbSIsImlkIiwidGltZXN0YW1wIiwidGV4dCIsIm9uVXBkYXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0Iiwib25EZWxldGUiLCJteUlkIiwidXNlciIsImxpIiwiY2xhc3NOYW1lIiwiaDMiLCJuaWNrbmFtZSIsInN1YiIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJtdXRhdGUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgItem.js\n"));

/***/ })

});