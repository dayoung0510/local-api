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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MsgList = (param)=>{\n    let { smsgs , users  } = param;\n    _s();\n    const client = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient)();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([\n        {\n            messages: smsgs\n        }\n    ]);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(fetchMoreEl);\n    const userId = query.userId || query.userid || \"\";\n    const { mutate: onCreate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((param)=>{\n        let { text  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.CREATE_MESSAGE, {\n            text,\n            userId\n        });\n    }, {\n        onSuccess: (param)=>{\n            let { createMessage  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                return {\n                    pageParam: old.pageParam,\n                    pages: [\n                        {\n                            messages: [\n                                createMessages,\n                                old.pages[0].messages\n                            ]\n                        },\n                        ...old.pages.slice(1)\n                    ],\n                    messages: [\n                        createMessage,\n                        ...old.messages\n                    ]\n                };\n            });\n        }\n    });\n    const { mutate: onUpdate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((param)=>{\n        let { text , id  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.UPDATE_MESSAGE, {\n            text,\n            id,\n            userId\n        });\n    }, {\n        onSuccess: (param)=>{\n            let { updateMessage  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                const targetIndex = old.messages.findIndex((msg)=>msg.id === updateMessage.id);\n                if (targetIndex < 0) return old;\n                const newMsgs = [\n                    ...old.messages\n                ];\n                newMsgs.splice(targetIndex, 1, updateMessage);\n                return {\n                    messages: newMsgs\n                };\n            });\n            doneEdit();\n        }\n    });\n    const { mutate: onDelete  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((id)=>(0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.DELETE_MESSAGE, {\n            id,\n            userId\n        }), {\n        onSuccess: (param)=>{\n            let { deleteMessage: deletedId  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                const targetIndex = old.messages.findIndex((msg)=>msg.id === deletedId);\n                if (targetIndex < 0) return old;\n                const newMsgs = [\n                    ...old.messages\n                ];\n                newMsgs.splice(targetIndex, 1);\n                return {\n                    messages: newMsgs\n                };\n            });\n        }\n    });\n    const doneEdit = ()=>setEditingId(null);\n    const { data , error , isError , fetchNextPage , hasNextPage  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useInfiniteQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (param)=>{\n        let { pageParam =\"\"  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.GET_MESSAGES, {\n            cursor: pageParam\n        });\n    }, {\n        getNextPageParam: (param)=>{\n            let { messages  } = param;\n            var _messages_;\n            return messages === null || messages === void 0 ? void 0 : (_messages_ = messages[messages.length - 1]) === null || _messages_ === void 0 ? void 0 : _messages_.id;\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!(data === null || data === void 0 ? void 0 : data.pages)) return;\n        setMsgs(data.pages);\n    }, [\n        data === null || data === void 0 ? void 0 : data.pages\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (intersecting && hasNextPage) fetchNextPage();\n    }, [\n        intersecting,\n        hasNextPage\n    ]);\n    if (isError) return null;\n    console.log(msgs);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 105,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs && msgs.map((param)=>{\n                    let { messages  } = param;\n                    return messages.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            ...x,\n                            onUpdate: onUpdate,\n                            startEdit: ()=>setEditingId(x.id),\n                            onDelete: ()=>onDelete(x.id),\n                            isEditing: editingId === x.id,\n                            myId: userId,\n                            user: users.find((x)=>userId === x.userId)\n                        }, x.id, false, {\n                            fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                            lineNumber: 110,\n                            columnNumber: 15\n                        }, undefined));\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"Y91uB5W1fxottEpUkWPIFNquVPQ=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useInfiniteQuery\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBCQUM3Qiw4REFBQ2lDO2dCQUFHQyxXQUFVOzBCQUNYN0MsUUFDQ0EsS0FBSzhDLEdBQUcsQ0FBQyxTQUNQNUM7d0JBRFEsRUFBRUEsU0FBUSxFQUFFOzJCQUNwQkEsU0FBUzRDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDWiw4REFBQ25FLGdEQUFPQTs0QkFFTCxHQUFHbUUsQ0FBQzs0QkFDTHpCLFVBQVVBOzRCQUNWMEIsV0FBVyxJQUFNNUMsYUFBYTJDLEVBQUV4QixFQUFFOzRCQUNsQ1EsVUFBVSxJQUFNQSxTQUFTZ0IsRUFBRXhCLEVBQUU7NEJBQzdCMEIsV0FBVzlDLGNBQWM0QyxFQUFFeEIsRUFBRTs0QkFDN0IyQixNQUFNMUM7NEJBQ04yQyxNQUFNckQsTUFBTXNELElBQUksQ0FBQyxDQUFDTCxJQUFNdkMsV0FBV3VDLEVBQUV2QyxNQUFNOzJCQVB0Q3VDLEVBQUV4QixFQUFFOzs7OztnQkFTWjs7Ozs7OzBCQUdQLDhEQUFDOEI7Z0JBQUlDLEtBQUtoRDs7Ozs7Ozs7QUFHaEI7R0EvR01WOztRQUNXTCx1REFBY0E7UUFHWFQsa0RBQVNBO1FBRU5NLGdFQUFpQkE7UUFJVEUsb0RBQVdBO1FBa0JYQSxvREFBV0E7UUFrQlhBLG9EQUFXQTtRQW1CcUJELHlEQUFnQkE7OztLQWpFekVPO0FBaUhOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hlciwgUXVlcnlLZXlzIH0gZnJvbSBcIi4uL3F1ZXJ5Q2xpZW50XCI7XHJcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tIFwiLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGxcIjtcclxuaW1wb3J0IHsgdXNlSW5maW5pdGVRdWVyeSwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7XHJcbiAgQ1JFQVRFX01FU1NBR0UsXHJcbiAgR0VUX01FU1NBR0VTLFxyXG4gIFVQREFURV9NRVNTQUdFLFxyXG4gIERFTEVURV9NRVNTQUdFLFxyXG59IGZyb20gXCIuLi9ncmFwaHFsL21lc3NhZ2VcIjtcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4ge1xyXG4gIGNvbnN0IGNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW3sgbWVzc2FnZXM6IHNtc2dzIH1dKTtcclxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpO1xyXG5cclxuICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8IFwiXCI7XHJcblxyXG4gIGNvbnN0IHsgbXV0YXRlOiBvbkNyZWF0ZSB9ID0gdXNlTXV0YXRpb24oXHJcbiAgICAoeyB0ZXh0IH0pID0+IGZldGNoZXIoQ1JFQVRFX01FU1NBR0UsIHsgdGV4dCwgdXNlcklkIH0pLFxyXG4gICAge1xyXG4gICAgICBvblN1Y2Nlc3M6ICh7IGNyZWF0ZU1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5zZXRRdWVyeURhdGEoUXVlcnlLZXlzLk1FU1NBR0VTLCAob2xkKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYWdlUGFyYW06IG9sZC5wYWdlUGFyYW0sXHJcbiAgICAgICAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgICAgICAgeyBtZXNzYWdlczogW2NyZWF0ZU1lc3NhZ2VzLCBvbGQucGFnZXNbMF0ubWVzc2FnZXNdIH0sXHJcbiAgICAgICAgICAgICAgLi4ub2xkLnBhZ2VzLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogW2NyZWF0ZU1lc3NhZ2UsIC4uLm9sZC5tZXNzYWdlc10sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgbXV0YXRlOiBvblVwZGF0ZSB9ID0gdXNlTXV0YXRpb24oXHJcbiAgICAoeyB0ZXh0LCBpZCB9KSA9PiBmZXRjaGVyKFVQREFURV9NRVNTQUdFLCB7IHRleHQsIGlkLCB1c2VySWQgfSksXHJcbiAgICB7XHJcbiAgICAgIG9uU3VjY2VzczogKHsgdXBkYXRlTWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gb2xkLm1lc3NhZ2VzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKG1zZykgPT4gbXNnLmlkID09PSB1cGRhdGVNZXNzYWdlLmlkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG9sZDtcclxuICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ub2xkLm1lc3NhZ2VzXTtcclxuICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB1cGRhdGVNZXNzYWdlKTtcclxuICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2VzOiBuZXdNc2dzIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9uZUVkaXQoKTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCB7IG11dGF0ZTogb25EZWxldGUgfSA9IHVzZU11dGF0aW9uKFxyXG4gICAgKGlkKSA9PiBmZXRjaGVyKERFTEVURV9NRVNTQUdFLCB7IGlkLCB1c2VySWQgfSksXHJcbiAgICB7XHJcbiAgICAgIG9uU3VjY2VzczogKHsgZGVsZXRlTWVzc2FnZTogZGVsZXRlZElkIH0pID0+IHtcclxuICAgICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgKG9sZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBvbGQubWVzc2FnZXMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAobXNnKSA9PiBtc2cuaWQgPT09IGRlbGV0ZWRJZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBvbGQ7XHJcbiAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm9sZC5tZXNzYWdlc107XHJcbiAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcbiAgICAgICAgICByZXR1cm4geyBtZXNzYWdlczogbmV3TXNncyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0Vycm9yLCBmZXRjaE5leHRQYWdlLCBoYXNOZXh0UGFnZSB9ID0gdXNlSW5maW5pdGVRdWVyeShcclxuICAgIFF1ZXJ5S2V5cy5NRVNTQUdFUyxcclxuICAgICh7IHBhZ2VQYXJhbSA9IFwiXCIgfSkgPT4gZmV0Y2hlcihHRVRfTUVTU0FHRVMsIHsgY3Vyc29yOiBwYWdlUGFyYW0gfSksXHJcbiAgICB7XHJcbiAgICAgIGdldE5leHRQYWdlUGFyYW06ICh7IG1lc3NhZ2VzIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZXM/LlttZXNzYWdlcy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YT8ucGFnZXMpIHJldHVybjtcclxuICAgIHNldE1zZ3MoZGF0YS5wYWdlcyk7XHJcbiAgfSwgW2RhdGE/LnBhZ2VzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW50ZXJzZWN0aW5nICYmIGhhc05leHRQYWdlKSBmZXRjaE5leHRQYWdlKCk7XHJcbiAgfSwgW2ludGVyc2VjdGluZywgaGFzTmV4dFBhZ2VdKTtcclxuXHJcbiAgaWYgKGlzRXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zb2xlLmxvZyhtc2dzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICB7bXNncyAmJlxyXG4gICAgICAgICAgbXNncy5tYXAoKHsgbWVzc2FnZXMgfSkgPT5cclxuICAgICAgICAgICAgbWVzc2FnZXMubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJzLmZpbmQoKHgpID0+IHVzZXJJZCA9PT0geC51c2VySWQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZmV0Y2hlciIsIlF1ZXJ5S2V5cyIsInVzZUluZmluaXRlU2Nyb2xsIiwidXNlSW5maW5pdGVRdWVyeSIsInVzZU11dGF0aW9uIiwidXNlUXVlcnlDbGllbnQiLCJDUkVBVEVfTUVTU0FHRSIsIkdFVF9NRVNTQUdFUyIsIlVQREFURV9NRVNTQUdFIiwiREVMRVRFX01FU1NBR0UiLCJNc2dMaXN0Iiwic21zZ3MiLCJ1c2VycyIsImNsaWVudCIsIm1zZ3MiLCJzZXRNc2dzIiwibWVzc2FnZXMiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJxdWVyeSIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwidXNlcklkIiwidXNlcmlkIiwibXV0YXRlIiwib25DcmVhdGUiLCJ0ZXh0Iiwib25TdWNjZXNzIiwiY3JlYXRlTWVzc2FnZSIsInNldFF1ZXJ5RGF0YSIsIk1FU1NBR0VTIiwib2xkIiwicGFnZVBhcmFtIiwicGFnZXMiLCJjcmVhdGVNZXNzYWdlcyIsInNsaWNlIiwib25VcGRhdGUiLCJpZCIsInVwZGF0ZU1lc3NhZ2UiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwiZGVsZXRlTWVzc2FnZSIsImRlbGV0ZWRJZCIsImRhdGEiLCJlcnJvciIsImlzRXJyb3IiLCJmZXRjaE5leHRQYWdlIiwiaGFzTmV4dFBhZ2UiLCJjdXJzb3IiLCJnZXROZXh0UGFnZVBhcmFtIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJ1c2VyIiwiZmluZCIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});