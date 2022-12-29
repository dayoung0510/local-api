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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MsgList = ()=>{\n    _s();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { query: { userId =\"\"  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const onCreate = async (text)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"post\", \"/messages\", {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"something wrong\");\n        setMsgs((msgs)=>[\n                newMsg,\n                ...msgs\n            ]);\n        msgs.unshift(newMsg);\n    };\n    const onUpdate = async (text, id)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"something wrong\");\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, newMsg);\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    const doneEdit = ()=>setEditingId(null);\n    const onDelete = async (id)=>{\n        const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"delete\", \"/messages/\".concat(id), {\n            params: {\n                userId\n            }\n        });\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === receivedId);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    const getMessages = async ()=>{\n        const msgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"get\", \"/messages\");\n        setMsgs(msgs);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getMessages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs && msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        startEdit: ()=>setEditingId(x.id),\n                        onDelete: ()=>onDelete(x.id),\n                        isEditing: editingId === x.id,\n                        myId: userId\n                    }, x.id, false, {\n                        fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"LNhgs7OBf6CkdzLIvU4VmYN0Gtc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUFnQztBQUNFO0FBQ007QUFDSTtBQUNYO0FBRWpDLE1BQU1NLFVBQVUsSUFBTTs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQTtJQUNoQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUMvQyxNQUFNLEVBQ0pRLE9BQU8sRUFBRUMsUUFBUyxHQUFFLEVBQUUsR0FDdkIsR0FBR1Ysc0RBQVNBO0lBRWIsTUFBTVcsV0FBVyxPQUFPQyxPQUFTO1FBQy9CLE1BQU1DLFNBQVMsTUFBTVYsb0RBQU9BLENBQUMsUUFBUSxhQUFhO1lBQUVTO1lBQU1GO1FBQU87UUFDakUsSUFBSSxDQUFDRyxRQUFRLE1BQU1DLE1BQU0sbUJBQW1CO1FBQzVDUixRQUFRLENBQUNELE9BQVM7Z0JBQUNRO21CQUFXUjthQUFLO1FBQ25DQSxLQUFLVSxPQUFPLENBQUNGO0lBQ2Y7SUFFQSxNQUFNRyxXQUFXLE9BQU9KLE1BQU1LLEtBQU87UUFDbkMsTUFBTUosU0FBUyxNQUFNVixvREFBT0EsQ0FBQyxPQUFPLGFBQWdCLE9BQUhjLEtBQU07WUFBRUw7WUFBTUY7UUFBTztRQUN0RSxJQUFJLENBQUNHLFFBQVEsTUFBTUMsTUFBTSxtQkFBbUI7UUFDNUNSLFFBQVEsQ0FBQ0QsT0FBUztZQUNoQixNQUFNYSxjQUFjYixLQUFLYyxTQUFTLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUgsRUFBRSxLQUFLQTtZQUN2RCxJQUFJQyxjQUFjLEdBQUcsT0FBT2I7WUFDNUIsTUFBTWdCLFVBQVU7bUJBQUloQjthQUFLO1lBQ3pCZ0IsUUFBUUMsTUFBTSxDQUFDSixhQUFhLEdBQUdMO1lBQy9CLE9BQU9RO1FBQ1Q7UUFDQUU7SUFDRjtJQUVBLE1BQU1BLFdBQVcsSUFBTWYsYUFBYSxJQUFJO0lBRXhDLE1BQU1nQixXQUFXLE9BQU9QLEtBQU87UUFDN0IsTUFBTVEsYUFBYSxNQUFNdEIsb0RBQU9BLENBQUMsVUFBVSxhQUFnQixPQUFIYyxLQUFNO1lBQzVEUyxRQUFRO2dCQUFFaEI7WUFBTztRQUNuQjtRQUNBSixRQUFRLENBQUNELE9BQVM7WUFDaEIsTUFBTWEsY0FBY2IsS0FBS2MsU0FBUyxDQUFDLENBQUNDLE1BQVFBLElBQUlILEVBQUUsS0FBS1E7WUFDdkQsSUFBSVAsY0FBYyxHQUFHLE9BQU9iO1lBQzVCLE1BQU1nQixVQUFVO21CQUFJaEI7YUFBSztZQUN6QmdCLFFBQVFDLE1BQU0sQ0FBQ0osYUFBYTtZQUM1QixPQUFPRztRQUNUO0lBQ0Y7SUFFQSxNQUFNTSxjQUFjLFVBQVk7UUFDOUIsTUFBTXRCLE9BQU8sTUFBTUYsb0RBQU9BLENBQUMsT0FBTztRQUNsQ0csUUFBUUQ7SUFDVjtJQUVBSCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2R5QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQzVCLGlEQUFRQTtnQkFBQzZCLFFBQVFqQjs7Ozs7OzBCQUNsQiw4REFBQ2tCO2dCQUFHQyxXQUFVOzBCQUNYekIsUUFDQ0EsS0FBSzBCLEdBQUcsQ0FBQyxDQUFDQyxrQkFDUiw4REFBQ2xDLGdEQUFPQTt3QkFFTCxHQUFHa0MsQ0FBQzt3QkFDTGhCLFVBQVVBO3dCQUNWaUIsV0FBVyxJQUFNekIsYUFBYXdCLEVBQUVmLEVBQUU7d0JBQ2xDTyxVQUFVLElBQU1BLFNBQVNRLEVBQUVmLEVBQUU7d0JBQzdCaUIsV0FBVzNCLGNBQWN5QixFQUFFZixFQUFFO3dCQUM3QmtCLE1BQU16Qjt1QkFORHNCLEVBQUVmLEVBQUU7Ozs7Ozs7Ozs7OztBQVl2QjtHQXRFTWI7O1FBS0FKLGtEQUFTQTs7O0tBTFRJO0FBd0VOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi9mZXRjaGVyXCI7XHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IHVzZXJJZCA9IFwiXCIgfSxcclxuICB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgKHRleHQpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoXCJwb3N0XCIsIFwiL21lc3NhZ2VzXCIsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgc2V0TXNncygobXNncykgPT4gW25ld01zZywgLi4ubXNnc10pO1xyXG4gICAgbXNncy51bnNoaWZ0KG5ld01zZyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoXCJwdXRcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pO1xyXG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwic29tZXRoaW5nIHdyb25nXCIpO1xyXG4gICAgc2V0TXNncygobXNncykgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcclxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcclxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XHJcbiAgICAgIHJldHVybiBuZXdNc2dzO1xyXG4gICAgfSk7XHJcbiAgICBkb25lRWRpdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoXCJkZWxldGVcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHtcclxuICAgICAgcGFyYW1zOiB7IHVzZXJJZCB9LFxyXG4gICAgfSk7XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSByZWNlaXZlZElkKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG1zZ3MgPSBhd2FpdCBmZXRjaGVyKFwiZ2V0XCIsIFwiL21lc3NhZ2VzXCIpO1xyXG4gICAgc2V0TXNncyhtc2dzKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TWVzc2FnZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAge21zZ3MgJiZcclxuICAgICAgICAgIG1zZ3MubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAgIDxNc2dJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXt4LmlkfVxyXG4gICAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cclxuICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XHJcbiAgICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hlciIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsInF1ZXJ5IiwidXNlcklkIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJ1bnNoaWZ0Iiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJyZWNlaXZlZElkIiwicGFyYW1zIiwiZ2V0TWVzc2FnZXMiLCJtdXRhdGUiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsIngiLCJzdGFydEVkaXQiLCJpc0VkaXRpbmciLCJteUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});