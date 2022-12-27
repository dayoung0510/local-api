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

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst userIds = [\n    \"roy\",\n    \"jay\"\n];\nconst getRandomUserId = ()=>userIds[Math.round(Math.random())];\nconst originalMsgs = Array(50).fill(0).map((_, idx)=>({\n        id: idx + 1,\n        userId: getRandomUserId(),\n        timeStamp: 1234567890123 + idx * 1000 * 60,\n        text: \"\".concat(idx + 1, \" mock text\")\n    })).reverse();\nconst MsgList = ()=>{\n    _s();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs);\n    const onCreate = (text)=>{\n        const newMsg = {\n            id: msgs.length + 1,\n            userId: getRandomUserId(),\n            timeStamp: Date.now(),\n            text: \"\".concat(msgs.length + 1, \" \").concat(text)\n        };\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]);\n        msgs.unshift(newMsg);\n    };\n    const onUpdate = (text, id)=>{\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, {\n                ...msgs[targetIndex],\n                text\n            });\n            return newMsgs;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate\n                    }, x.id, false, {\n                        fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"0rHCd0+xzNh1d+KPpUdLMZZ9PRQ=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFnQztBQUNFO0FBQ0Q7QUFFakMsTUFBTUcsVUFBVTtJQUFDO0lBQU87Q0FBTTtBQUM5QixNQUFNQyxrQkFBa0IsSUFBTUQsT0FBTyxDQUFDRSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sSUFBSTtBQUVoRSxNQUFNQyxlQUFlQyxNQUFNLElBQ3hCQyxJQUFJLENBQUMsR0FDTEMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLE1BQVM7UUFDaEJDLElBQUlELE1BQU07UUFDVkUsUUFBUVg7UUFDUlksV0FBVyxnQkFBZ0JILE1BQU0sT0FBTztRQUN4Q0ksTUFBTSxHQUFXLE9BQVJKLE1BQU0sR0FBRTtJQUNuQixJQUNDSyxPQUFPO0FBRVYsTUFBTUMsVUFBVSxJQUFNOztJQUNwQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR25CLCtDQUFRQSxDQUFDTTtJQUVqQyxNQUFNYyxXQUFXLENBQUNMLE9BQVM7UUFDekIsTUFBTU0sU0FBUztZQUNiVCxJQUFJTSxLQUFLSSxNQUFNLEdBQUc7WUFDbEJULFFBQVFYO1lBQ1JZLFdBQVdTLEtBQUtDLEdBQUc7WUFDbkJULE1BQU0sR0FBc0JBLE9BQW5CRyxLQUFLSSxNQUFNLEdBQUcsR0FBRSxLQUFRLE9BQUxQO1FBQzlCO1FBQ0FJLFFBQVEsQ0FBQ0QsT0FBUztnQkFBQ0c7bUJBQVdIO2FBQUs7UUFDbkNBLEtBQUtPLE9BQU8sQ0FBQ0o7SUFDZjtJQUVBLE1BQU1LLFdBQVcsQ0FBQ1gsTUFBTUgsS0FBTztRQUM3Qk8sUUFBUSxDQUFDRCxPQUFTO1lBQ2hCLE1BQU1TLGNBQWNULEtBQUtVLFNBQVMsQ0FBQyxDQUFDQyxNQUFRQSxJQUFJakIsRUFBRSxLQUFLQTtZQUN2RCxJQUFJZSxjQUFjLEdBQUcsT0FBT1Q7WUFDNUIsTUFBTVksVUFBVTttQkFBSVo7YUFBSztZQUN6QlksUUFBUUMsTUFBTSxDQUFDSixhQUFhLEdBQUc7Z0JBQzdCLEdBQUdULElBQUksQ0FBQ1MsWUFBWTtnQkFDcEJaO1lBQ0Y7WUFDQSxPQUFPZTtRQUNUO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUMvQixpREFBUUE7Z0JBQUNpQyxRQUFRWjs7Ozs7OzBCQUNsQiw4REFBQ2E7Z0JBQUdDLFdBQVU7MEJBQ1hoQixLQUFLVCxHQUFHLENBQUMsQ0FBQzBCLGtCQUNULDhEQUFDckMsZ0RBQU9BO3dCQUFhLEdBQUdxQyxDQUFDO3dCQUFFVCxVQUFVQTt1QkFBdkJTLEVBQUV2QixFQUFFOzs7Ozs7Ozs7Ozs7QUFLNUI7R0FyQ01LO0tBQUFBO0FBdUNOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VySWRzID0gW1wicm95XCIsIFwiamF5XCJdO1xyXG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiB1c2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xyXG5cclxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXHJcbiAgLmZpbGwoMClcclxuICAubWFwKChfLCBpZHgpID0+ICh7XHJcbiAgICBpZDogaWR4ICsgMSxcclxuICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICB0aW1lU3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyBpZHggKiAxMDAwICogNjAsXHJcbiAgICB0ZXh0OiBgJHtpZHggKyAxfSBtb2NrIHRleHRgLFxyXG4gIH0pKVxyXG4gIC5yZXZlcnNlKCk7XHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncyk7XHJcblxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gKHRleHQpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZyA9IHtcclxuICAgICAgaWQ6IG1zZ3MubGVuZ3RoICsgMSxcclxuICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcclxuICAgICAgdGltZVN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICB0ZXh0OiBgJHttc2dzLmxlbmd0aCArIDF9ICR7dGV4dH1gLFxyXG4gICAgfTtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcclxuICAgIG1zZ3MudW5zaGlmdChuZXdNc2cpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uVXBkYXRlID0gKHRleHQsIGlkKSA9PiB7XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xyXG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxyXG4gICAgICAgIHRleHQsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gbmV3TXNncztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICA8TXNnSXRlbSBrZXk9e3guaWR9IHsuLi54fSBvblVwZGF0ZT17b25VcGRhdGV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZVN0YXRlIiwidXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpZHgiLCJpZCIsInVzZXJJZCIsInRpbWVTdGFtcCIsInRleHQiLCJyZXZlcnNlIiwiTXNnTGlzdCIsIm1zZ3MiLCJzZXRNc2dzIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJEYXRlIiwibm93IiwidW5zaGlmdCIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});