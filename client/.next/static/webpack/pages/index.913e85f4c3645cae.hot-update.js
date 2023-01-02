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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MsgList = ()=>{\n    _s();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    const userId = query.userId || query.userid || \"\";\n    const onCreate = async (text)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"post\", \"/messages\", {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"something wrong\");\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]);\n        msgs.unshift(newMsg);\n    };\n    const onUpdate = async (text, id)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"something wrong\");\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, newMsg);\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    const doneEdit = ()=>setEditingId(null);\n    const onDelete = async (id)=>{\n        const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"delete\", \"/messages/\".concat(id), {\n            params: {\n                userId\n            }\n        });\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === receivedId + \"\");\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    const getMessages = async ()=>{\n        const msgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"get\", \"/messages\");\n        setMsgs(msgs);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getMessages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 61,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs && msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        startEdit: ()=>setEditingId(x.id),\n                        onDelete: ()=>onDelete(x.id),\n                        isEditing: editingId === x.id,\n                        myId: userId\n                    }, x.id, false, {\n                        fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"5ndDH3hHuJU1uTj3dznw86YC4S4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwiLi4vZmV0Y2hlclwiO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8IFwiXCI7XHJcblxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgKHRleHQpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoXCJwb3N0XCIsIFwiL21lc3NhZ2VzXCIsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gICAgbXNncy51bnNoaWZ0KG5ld01zZyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoXCJwdXRcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgICBkb25lRWRpdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoXCJkZWxldGVcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHtcclxuICAgICAgcGFyYW1zOiB7IHVzZXJJZCB9LFxyXG4gICAgfSk7XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSByZWNlaXZlZElkICsgXCJcIik7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBtc2dzID0gYXdhaXQgZmV0Y2hlcihcImdldFwiLCBcIi9tZXNzYWdlc1wiKTtcclxuICAgIHNldE1zZ3MobXNncyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldE1lc3NhZ2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz59XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICAgIHttc2dzICYmXHJcbiAgICAgICAgICBtc2dzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgICA8TXNnSXRlbVxyXG4gICAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxyXG4gICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxyXG4gICAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZmV0Y2hlciIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsInF1ZXJ5IiwiZmV0Y2hNb3JlRWwiLCJ1c2VySWQiLCJ1c2VyaWQiLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJFcnJvciIsInVuc2hpZnQiLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsInJlY2VpdmVkSWQiLCJwYXJhbXMiLCJnZXRNZXNzYWdlcyIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});