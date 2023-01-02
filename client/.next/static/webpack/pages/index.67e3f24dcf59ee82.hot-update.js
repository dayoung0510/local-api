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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MsgList = ()=>{\n    _s();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const [hasNext, setHasNext] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(fetchMoreEl);\n    const userId = query.userId || query.userid || \"\";\n    const onCreate = async (text)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"post\", \"/messages\", {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"something wrong\");\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]);\n        msgs.unshift(newMsg);\n    };\n    const onUpdate = async (text, id)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"something wrong\");\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, newMsg);\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    const doneEdit = ()=>setEditingId(null);\n    const onDelete = async (id)=>{\n        const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"delete\", \"/messages/\".concat(id), {\n            params: {\n                userId\n            }\n        });\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === receivedId + \"\");\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    const getMessages = async ()=>{\n        var _msgs_;\n        const newMsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"get\", \"/messages\", {\n            params: {\n                cursor: ((_msgs_ = msgs[msgs.length - 1]) === null || _msgs_ === void 0 ? void 0 : _msgs_.id) || \"\"\n            }\n        });\n        if (newMsgs.length === 0) {\n            setHasNext(false);\n            return;\n        }\n        setMsgs((msgs)=>[\n                ...msgs,\n                newMsgs\n            ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (intersecting && hasNext) getMessages();\n    }, [\n        intersecting\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 69,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        startEdit: ()=>setEditingId(x.id),\n                        onDelete: ()=>onDelete(x.id),\n                        isEditing: editingId === x.id,\n                        myId: userId\n                    }, x.id, false, {\n                        fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"pe1ofvUOe8TnmldObgQ8Da1k0xA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0M7QUFDRTtBQUNNO0FBQ1k7QUFDbkI7QUFDMEI7QUFFM0QsTUFBTVEsVUFBVSxJQUFNOztJQUNwQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsSUFBSTtJQUMvQyxNQUFNLEVBQUVVLE1BQUssRUFBRSxHQUFHWCxzREFBU0E7SUFDM0IsTUFBTVksY0FBY1QsNkNBQU1BLENBQUMsSUFBSTtJQUMvQixNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUMsSUFBSTtJQUMzQyxNQUFNYyxlQUFlVixvRUFBaUJBLENBQUNPO0lBRXZDLE1BQU1JLFNBQVNMLE1BQU1LLE1BQU0sSUFBSUwsTUFBTU0sTUFBTSxJQUFJO0lBRS9DLE1BQU1DLFdBQVcsT0FBT0MsT0FBUztRQUMvQixNQUFNQyxTQUFTLE1BQU1oQixvREFBT0EsQ0FBQyxRQUFRLGFBQWE7WUFBRWU7WUFBTUg7UUFBTztRQUNqRSxJQUFJLENBQUNJLFFBQVEsTUFBTUMsTUFBTSxtQkFBbUI7UUFDNUNiLFFBQVEsQ0FBQ0QsT0FBUztnQkFBQ2E7bUJBQVdiO2FBQUs7UUFDbkNBLEtBQUtlLE9BQU8sQ0FBQ0Y7SUFDZjtJQUVBLE1BQU1HLFdBQVcsT0FBT0osTUFBTUssS0FBTztRQUNuQyxNQUFNSixTQUFTLE1BQU1oQixvREFBT0EsQ0FBQyxPQUFPLGFBQWdCLE9BQUhvQixLQUFNO1lBQUVMO1lBQU1IO1FBQU87UUFDdEUsSUFBSSxDQUFDSSxRQUFRLE1BQU1DLE1BQU0sbUJBQW1CO1FBQzVDYixRQUFRLENBQUNELE9BQVM7WUFDaEIsTUFBTWtCLGNBQWNsQixLQUFLbUIsU0FBUyxDQUFDLENBQUNDLE1BQVFBLElBQUlILEVBQUUsS0FBS0E7WUFDdkQsSUFBSUMsY0FBYyxHQUFHLE9BQU9sQjtZQUM1QixNQUFNcUIsVUFBVTttQkFBSXJCO2FBQUs7WUFDekJxQixRQUFRQyxNQUFNLENBQUNKLGFBQWEsR0FBR0w7WUFDL0IsT0FBT1E7UUFDVDtRQUNBRTtJQUNGO0lBRUEsTUFBTUEsV0FBVyxJQUFNcEIsYUFBYSxJQUFJO0lBRXhDLE1BQU1xQixXQUFXLE9BQU9QLEtBQU87UUFDN0IsTUFBTVEsYUFBYSxNQUFNNUIsb0RBQU9BLENBQUMsVUFBVSxhQUFnQixPQUFIb0IsS0FBTTtZQUM1RFMsUUFBUTtnQkFBRWpCO1lBQU87UUFDbkI7UUFDQVIsUUFBUSxDQUFDRCxPQUFTO1lBQ2hCLE1BQU1rQixjQUFjbEIsS0FBS21CLFNBQVMsQ0FBQyxDQUFDQyxNQUFRQSxJQUFJSCxFQUFFLEtBQUtRLGFBQWE7WUFDcEUsSUFBSVAsY0FBYyxHQUFHLE9BQU9sQjtZQUM1QixNQUFNcUIsVUFBVTttQkFBSXJCO2FBQUs7WUFDekJxQixRQUFRQyxNQUFNLENBQUNKLGFBQWE7WUFDNUIsT0FBT0c7UUFDVDtJQUNGO0lBRUEsTUFBTU0sY0FBYyxVQUFZO1lBRVYzQjtRQURwQixNQUFNcUIsVUFBVSxNQUFNeEIsb0RBQU9BLENBQUMsT0FBTyxhQUFhO1lBQ2hENkIsUUFBUTtnQkFBRUUsUUFBUTVCLENBQUFBLENBQUFBLFNBQUFBLElBQUksQ0FBQ0EsS0FBSzZCLE1BQU0sR0FBRyxFQUFFLGNBQXJCN0Isb0JBQUFBLEtBQUFBLElBQUFBLE9BQXVCaUIsRUFBRSxLQUFJO1lBQUc7UUFDcEQ7UUFDQSxJQUFJSSxRQUFRUSxNQUFNLEtBQUssR0FBRztZQUN4QnRCLFdBQVcsS0FBSztZQUNoQjtRQUNGLENBQUM7UUFDRE4sUUFBUSxDQUFDRCxPQUFTO21CQUFJQTtnQkFBTXFCO2FBQVE7SUFDdEM7SUFDQTFCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJYSxnQkFBZ0JGLFNBQVNxQjtJQUMvQixHQUFHO1FBQUNuQjtLQUFhO0lBRWpCLHFCQUNFOztZQUNHQyx3QkFBVSw4REFBQ2pCLGlEQUFRQTtnQkFBQ3NDLFFBQVFuQjs7Ozs7OzBCQUM3Qiw4REFBQ29CO2dCQUFHQyxXQUFVOzBCQUNYaEMsS0FBS2lDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDVCw4REFBQzNDLGdEQUFPQTt3QkFFTCxHQUFHMkMsQ0FBQzt3QkFDTGxCLFVBQVVBO3dCQUNWbUIsV0FBVyxJQUFNaEMsYUFBYStCLEVBQUVqQixFQUFFO3dCQUNsQ08sVUFBVSxJQUFNQSxTQUFTVSxFQUFFakIsRUFBRTt3QkFDN0JtQixXQUFXbEMsY0FBY2dDLEVBQUVqQixFQUFFO3dCQUM3Qm9CLE1BQU01Qjt1QkFORHlCLEVBQUVqQixFQUFFOzs7Ozs7Ozs7OzBCQVVmLDhEQUFDcUI7Z0JBQUlDLEtBQUtsQzs7Ozs7Ozs7QUFHaEI7R0E5RU1OOztRQUdjTixrREFBU0E7UUFHTkssZ0VBQWlCQTs7O0tBTmxDQztBQWdGTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi9mZXRjaGVyXCI7XHJcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tIFwiLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGxcIjtcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7XHJcblxyXG4gIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgXCJcIjtcclxuXHJcbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcihcInBvc3RcIiwgXCIvbWVzc2FnZXNcIiwgeyB0ZXh0LCB1c2VySWQgfSk7XHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgICBtc2dzLnVuc2hpZnQobmV3TXNnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcihcInB1dFwiLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB0ZXh0LCB1c2VySWQgfSk7XHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcihcImRlbGV0ZVwiLCBgL21lc3NhZ2VzLyR7aWR9YCwge1xyXG4gICAgICBwYXJhbXM6IHsgdXNlcklkIH0sXHJcbiAgICB9KTtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyBcIlwiKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKFwiZ2V0XCIsIFwiL21lc3NhZ2VzXCIsIHtcclxuICAgICAgcGFyYW1zOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCBcIlwiIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChuZXdNc2dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRIYXNOZXh0KGZhbHNlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0TXNncygobXNncykgPT4gWy4uLm1zZ3MsIG5ld01zZ3NdKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW50ZXJzZWN0aW5nICYmIGhhc05leHQpIGdldE1lc3NhZ2VzKCk7XHJcbiAgfSwgW2ludGVyc2VjdGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz59XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICAgIHttc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxyXG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJNc2dJdGVtIiwiTXNnSW5wdXQiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImZldGNoZXIiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsInF1ZXJ5IiwiZmV0Y2hNb3JlRWwiLCJoYXNOZXh0Iiwic2V0SGFzTmV4dCIsImludGVyc2VjdGluZyIsInVzZXJJZCIsInVzZXJpZCIsIm9uQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwidW5zaGlmdCIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwicmVjZWl2ZWRJZCIsInBhcmFtcyIsImdldE1lc3NhZ2VzIiwiY3Vyc29yIiwibGVuZ3RoIiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});