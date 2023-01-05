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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MsgList = (param)=>{\n    let { smsgs , users  } = param;\n    _s();\n    const client = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient)();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(smsgs);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(fetchMoreEl);\n    const userId = query.userId || query.userid || \"\";\n    const { mutate: onCreate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((param)=>{\n        let { text  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.CREATE_MESSAGE, {\n            text,\n            userId\n        });\n    }, {\n        onSuccess: (param)=>{\n            let { createMessage  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                return {\n                    messages: [\n                        createMessage,\n                        ...old.messages\n                    ]\n                };\n            });\n        }\n    });\n    const { mutate: onUpdate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((param)=>{\n        let { text , id  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.UPDATE_MESSAGE, {\n            text,\n            id,\n            userId\n        });\n    }, {\n        onSuccess: (param)=>{\n            let { updateMessage  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                const targetIndex = old.messages.findIndex((msg)=>msg.id === updateMessage.id);\n                if (targetIndex < 0) return old;\n                const newMsgs = [\n                    ...old.messages\n                ];\n                newMsgs.splice(targetIndex, 1, updateMessage);\n                return {\n                    messages: newMsgs\n                };\n            });\n            doneEdit();\n        }\n    });\n    const { mutate: onDelete  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((id)=>(0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.DELETE_MESSAGE, {\n            id,\n            userId\n        }), {\n        onSuccess: (param)=>{\n            let { deleteMessage: deletedId  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                const targetIndex = old.messages.findIndex((msg)=>msg.id === deletedId);\n                if (targetIndex < 0) return old;\n                const newMsgs = [\n                    ...old.messages\n                ];\n                newMsgs.splice(targetIndex, 1);\n                return {\n                    messages: newMsgs\n                };\n            });\n        }\n    });\n    const doneEdit = ()=>setEditingId(null);\n    const { data , error , isError , fetchNextPage , hasNextPage  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useInfiniteQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (param)=>{\n        let { pageParam =\"\"  } = param;\n        (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.GET_MESSAGES, {\n            cursor: pageParam\n        });\n    }, {\n        getNextPageParam: (res)=>{\n            return \"\";\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!(data === null || data === void 0 ? void 0 : data.messages)) return;\n        setMsgs((data === null || data === void 0 ? void 0 : data.messages) || []);\n    }, [\n        data === null || data === void 0 ? void 0 : data.messages\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (intersecting && hasNextPage) fetchNextPage();\n    }, [\n        intersecting,\n        hasNextPage\n    ]);\n    if (isError) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 105,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        startEdit: ()=>setEditingId(x.id),\n                        onDelete: ()=>onDelete(x.id),\n                        isEditing: editingId === x.id,\n                        myId: userId,\n                        user: users.find((x)=>userId === x.userId)\n                    }, x.id, false, {\n                        fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"+rUCSATbipbAa7D8vZsAUGYu2NA=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useInfiniteQuery\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7Ozs7Ozs7Ozs7MEJBV2YsOERBQUM2QjtnQkFBSUMsS0FBSzVDOzs7Ozs7OztBQUdoQjtHQXZHTVQ7O1FBQ1dMLHVEQUFjQTtRQUdYVixrREFBU0E7UUFFTk0sZ0VBQWlCQTtRQUlURSxvREFBV0E7UUFhWEEsb0RBQVdBO1FBa0JYQSxvREFBV0E7UUFtQnFCRCx5REFBZ0JBOzs7S0E1RHpFUTtBQXlHTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoZXIsIFF1ZXJ5S2V5cyB9IGZyb20gXCIuLi9xdWVyeUNsaWVudFwiO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlSW5maW5pdGVRdWVyeSxcclxuICB1c2VNdXRhdGlvbixcclxuICB1c2VRdWVyeSxcclxuICB1c2VRdWVyeUNsaWVudCxcclxufSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHtcclxuICBDUkVBVEVfTUVTU0FHRSxcclxuICBHRVRfTUVTU0FHRVMsXHJcbiAgVVBEQVRFX01FU1NBR0UsXHJcbiAgREVMRVRFX01FU1NBR0UsXHJcbn0gZnJvbSBcIi4uL2dyYXBocWwvbWVzc2FnZVwiO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICh7IHNtc2dzLCB1c2VycyB9KSA9PiB7XHJcbiAgY29uc3QgY2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShzbXNncyk7XHJcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKTtcclxuXHJcbiAgY29uc3QgdXNlcklkID0gcXVlcnkudXNlcklkIHx8IHF1ZXJ5LnVzZXJpZCB8fCBcIlwiO1xyXG5cclxuICBjb25zdCB7IG11dGF0ZTogb25DcmVhdGUgfSA9IHVzZU11dGF0aW9uKFxyXG4gICAgKHsgdGV4dCB9KSA9PiBmZXRjaGVyKENSRUFURV9NRVNTQUdFLCB7IHRleHQsIHVzZXJJZCB9KSxcclxuICAgIHtcclxuICAgICAgb25TdWNjZXNzOiAoeyBjcmVhdGVNZXNzYWdlIH0pID0+IHtcclxuICAgICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgKG9sZCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWVzc2FnZXM6IFtjcmVhdGVNZXNzYWdlLCAuLi5vbGQubWVzc2FnZXNdLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCB7IG11dGF0ZTogb25VcGRhdGUgfSA9IHVzZU11dGF0aW9uKFxyXG4gICAgKHsgdGV4dCwgaWQgfSkgPT4gZmV0Y2hlcihVUERBVEVfTUVTU0FHRSwgeyB0ZXh0LCBpZCwgdXNlcklkIH0pLFxyXG4gICAge1xyXG4gICAgICBvblN1Y2Nlc3M6ICh7IHVwZGF0ZU1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5zZXRRdWVyeURhdGEoUXVlcnlLZXlzLk1FU1NBR0VTLCAob2xkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG9sZC5tZXNzYWdlcy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIChtc2cpID0+IG1zZy5pZCA9PT0gdXBkYXRlTWVzc2FnZS5pZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBvbGQ7XHJcbiAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm9sZC5tZXNzYWdlc107XHJcbiAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgdXBkYXRlTWVzc2FnZSk7XHJcbiAgICAgICAgICByZXR1cm4geyBtZXNzYWdlczogbmV3TXNncyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvbmVFZGl0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBtdXRhdGU6IG9uRGVsZXRlIH0gPSB1c2VNdXRhdGlvbihcclxuICAgIChpZCkgPT4gZmV0Y2hlcihERUxFVEVfTUVTU0FHRSwgeyBpZCwgdXNlcklkIH0pLFxyXG4gICAge1xyXG4gICAgICBvblN1Y2Nlc3M6ICh7IGRlbGV0ZU1lc3NhZ2U6IGRlbGV0ZWRJZCB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gb2xkLm1lc3NhZ2VzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKG1zZykgPT4gbXNnLmlkID09PSBkZWxldGVkSWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gb2xkO1xyXG4gICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5vbGQubWVzc2FnZXNdO1xyXG4gICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZXM6IG5ld01zZ3MgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNFcnJvciwgZmV0Y2hOZXh0UGFnZSwgaGFzTmV4dFBhZ2UgfSA9IHVzZUluZmluaXRlUXVlcnkoXHJcbiAgICBRdWVyeUtleXMuTUVTU0FHRVMsXHJcbiAgICAoeyBwYWdlUGFyYW0gPSBcIlwiIH0pID0+IHtcclxuICAgICAgZmV0Y2hlcihHRVRfTUVTU0FHRVMsIHsgY3Vyc29yOiBwYWdlUGFyYW0gfSk7XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBnZXROZXh0UGFnZVBhcmFtOiAocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YT8ubWVzc2FnZXMpIHJldHVybjtcclxuICAgIHNldE1zZ3MoZGF0YT8ubWVzc2FnZXMgfHwgW10pO1xyXG4gIH0sIFtkYXRhPy5tZXNzYWdlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0UGFnZSkgZmV0Y2hOZXh0UGFnZSgpO1xyXG4gIH0sIFtpbnRlcnNlY3RpbmcsIGhhc05leHRQYWdlXSk7XHJcblxyXG4gIGlmIChpc0Vycm9yKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcclxuICAgICAgICAgIDxNc2dJdGVtXHJcbiAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgey4uLnh9XHJcbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgICAgdXNlcj17dXNlcnMuZmluZCgoeCkgPT4gdXNlcklkID09PSB4LnVzZXJJZCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZmV0Y2hlciIsIlF1ZXJ5S2V5cyIsInVzZUluZmluaXRlU2Nyb2xsIiwidXNlSW5maW5pdGVRdWVyeSIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJ1c2VRdWVyeUNsaWVudCIsIkNSRUFURV9NRVNTQUdFIiwiR0VUX01FU1NBR0VTIiwiVVBEQVRFX01FU1NBR0UiLCJERUxFVEVfTUVTU0FHRSIsIk1zZ0xpc3QiLCJzbXNncyIsInVzZXJzIiwiY2xpZW50IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJxdWVyeSIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwidXNlcklkIiwidXNlcmlkIiwibXV0YXRlIiwib25DcmVhdGUiLCJ0ZXh0Iiwib25TdWNjZXNzIiwiY3JlYXRlTWVzc2FnZSIsInNldFF1ZXJ5RGF0YSIsIk1FU1NBR0VTIiwib2xkIiwibWVzc2FnZXMiLCJvblVwZGF0ZSIsImlkIiwidXBkYXRlTWVzc2FnZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJkZWxldGVNZXNzYWdlIiwiZGVsZXRlZElkIiwiZGF0YSIsImVycm9yIiwiaXNFcnJvciIsImZldGNoTmV4dFBhZ2UiLCJoYXNOZXh0UGFnZSIsInBhZ2VQYXJhbSIsImN1cnNvciIsImdldE5leHRQYWdlUGFyYW0iLCJyZXMiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsIngiLCJzdGFydEVkaXQiLCJpc0VkaXRpbmciLCJteUlkIiwidXNlciIsImZpbmQiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});