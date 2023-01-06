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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst findTargetMsgIndex = (pages, id)=>{\n    const pageIndex = pages.findIndex((param)=>{\n        let { messages  } = param;\n        const msgIndex1 = messages.findIndex((msg)=>msg.id === id);\n        if (msgIndex1 > -1) return true;\n        return false;\n    });\n    return {\n        pageIndex,\n        msgIndex\n    };\n};\nconst MsgList = (param)=>{\n    let { smsgs , users  } = param;\n    _s();\n    const client = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient)();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([\n        {\n            messages: smsgs\n        }\n    ]);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(fetchMoreEl);\n    const userId = query.userId || query.userid || \"\";\n    const { mutate: onCreate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((param)=>{\n        let { text  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.CREATE_MESSAGE, {\n            text,\n            userId\n        });\n    }, {\n        onSuccess: (param)=>{\n            let { createMessage  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                return {\n                    pageParam: old.pageParam,\n                    pages: [\n                        {\n                            messages: [\n                                createMessage,\n                                ...old.pages[0].messages\n                            ]\n                        },\n                        ...old.pages.slice(1)\n                    ]\n                };\n            });\n        }\n    });\n    const { mutate: onUpdate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((param)=>{\n        let { text , id  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.UPDATE_MESSAGE, {\n            text,\n            id,\n            userId\n        });\n    }, {\n        onSuccess: (param)=>{\n            let { updateMessage  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                const { pageIndex , msgIndex: msgIndex1  } = findTargetMsgIndex(old.pages, updateMessage.id);\n                if (pageIndex < 0 || msgIndex1 < 0) return old;\n                const newPages = [\n                    ...old.pages\n                ];\n                newPages[pageIndex] = [\n                    ...newPages[pageIndex]\n                ];\n                newPages[pageIndex].splice(msgIndex1, 1, updateMessage);\n                return {\n                    pageParam: old.pageParam,\n                    pages: newPages\n                };\n            });\n            doneEdit();\n        }\n    });\n    const { mutate: onDelete  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((id)=>(0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.DELETE_MESSAGE, {\n            id,\n            userId\n        }), {\n        onSuccess: (param)=>{\n            let { deleteMessage: deletedId  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                const targetIndex = old.messages.findIndex((msg)=>msg.id === deletedId);\n                if (targetIndex < 0) return old;\n                const newMsgs = [\n                    ...old.messages\n                ];\n                newMsgs.splice(targetIndex, 1);\n                return {\n                    messages: newMsgs\n                };\n            });\n        }\n    });\n    const doneEdit = ()=>setEditingId(null);\n    const { data , error , isError , fetchNextPage , hasNextPage  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useInfiniteQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (param)=>{\n        let { pageParam =\"\"  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.GET_MESSAGES, {\n            cursor: pageParam\n        });\n    }, {\n        getNextPageParam: (param)=>{\n            let { messages  } = param;\n            var _messages_;\n            return messages === null || messages === void 0 ? void 0 : (_messages_ = messages[messages.length - 1]) === null || _messages_ === void 0 ? void 0 : _messages_.id;\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!(data === null || data === void 0 ? void 0 : data.pages)) return;\n        setMsgs(data.pages);\n    }, [\n        data === null || data === void 0 ? void 0 : data.pages\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (intersecting && hasNextPage) fetchNextPage();\n    }, [\n        intersecting,\n        hasNextPage\n    ]);\n    if (isError) return null;\n    console.log(msgs);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 116,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs && msgs.map((param)=>{\n                    let { messages  } = param;\n                    return messages.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            ...x,\n                            onUpdate: onUpdate,\n                            startEdit: ()=>setEditingId(x.id),\n                            onDelete: ()=>onDelete(x.id),\n                            isEditing: editingId === x.id,\n                            myId: userId,\n                            user: users.find((x)=>userId === x.userId)\n                        }, x.id, false, {\n                            fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                            lineNumber: 121,\n                            columnNumber: 15\n                        }, undefined));\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"Y91uB5W1fxottEpUkWPIFNquVPQ=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useInfiniteQuery\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hlciwgUXVlcnlLZXlzIH0gZnJvbSBcIi4uL3F1ZXJ5Q2xpZW50XCI7XHJcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tIFwiLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGxcIjtcclxuaW1wb3J0IHsgdXNlSW5maW5pdGVRdWVyeSwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7XHJcbiAgQ1JFQVRFX01FU1NBR0UsXHJcbiAgR0VUX01FU1NBR0VTLFxyXG4gIFVQREFURV9NRVNTQUdFLFxyXG4gIERFTEVURV9NRVNTQUdFLFxyXG59IGZyb20gXCIuLi9ncmFwaHFsL21lc3NhZ2VcIjtcclxuXHJcbmNvbnN0IGZpbmRUYXJnZXRNc2dJbmRleCA9IChwYWdlcywgaWQpID0+IHtcclxuICBjb25zdCBwYWdlSW5kZXggPSBwYWdlcy5maW5kSW5kZXgoKHsgbWVzc2FnZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgbXNnSW5kZXggPSBtZXNzYWdlcy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcbiAgICBpZiAobXNnSW5kZXggPiAtMSkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgcGFnZUluZGV4LCBtc2dJbmRleCB9O1xyXG59O1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICh7IHNtc2dzLCB1c2VycyB9KSA9PiB7XHJcbiAgY29uc3QgY2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbeyBtZXNzYWdlczogc21zZ3MgfV0pO1xyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7XHJcblxyXG4gIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgXCJcIjtcclxuXHJcbiAgY29uc3QgeyBtdXRhdGU6IG9uQ3JlYXRlIH0gPSB1c2VNdXRhdGlvbihcclxuICAgICh7IHRleHQgfSkgPT4gZmV0Y2hlcihDUkVBVEVfTUVTU0FHRSwgeyB0ZXh0LCB1c2VySWQgfSksXHJcbiAgICB7XHJcbiAgICAgIG9uU3VjY2VzczogKHsgY3JlYXRlTWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhZ2VQYXJhbTogb2xkLnBhZ2VQYXJhbSxcclxuICAgICAgICAgICAgcGFnZXM6IFtcclxuICAgICAgICAgICAgICB7IG1lc3NhZ2VzOiBbY3JlYXRlTWVzc2FnZSwgLi4ub2xkLnBhZ2VzWzBdLm1lc3NhZ2VzXSB9LFxyXG4gICAgICAgICAgICAgIC4uLm9sZC5wYWdlcy5zbGljZSgxKSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBtdXRhdGU6IG9uVXBkYXRlIH0gPSB1c2VNdXRhdGlvbihcclxuICAgICh7IHRleHQsIGlkIH0pID0+IGZldGNoZXIoVVBEQVRFX01FU1NBR0UsIHsgdGV4dCwgaWQsIHVzZXJJZCB9KSxcclxuICAgIHtcclxuICAgICAgb25TdWNjZXNzOiAoeyB1cGRhdGVNZXNzYWdlIH0pID0+IHtcclxuICAgICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgKG9sZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBwYWdlSW5kZXgsIG1zZ0luZGV4IH0gPSBmaW5kVGFyZ2V0TXNnSW5kZXgoXHJcbiAgICAgICAgICAgIG9sZC5wYWdlcyxcclxuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZS5pZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChwYWdlSW5kZXggPCAwIHx8IG1zZ0luZGV4IDwgMCkgcmV0dXJuIG9sZDtcclxuICAgICAgICAgIGNvbnN0IG5ld1BhZ2VzID0gWy4uLm9sZC5wYWdlc107XHJcbiAgICAgICAgICBuZXdQYWdlc1twYWdlSW5kZXhdID0gWy4uLm5ld1BhZ2VzW3BhZ2VJbmRleF1dO1xyXG4gICAgICAgICAgbmV3UGFnZXNbcGFnZUluZGV4XS5zcGxpY2UobXNnSW5kZXgsIDEsIHVwZGF0ZU1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB7IHBhZ2VQYXJhbTogb2xkLnBhZ2VQYXJhbSwgcGFnZXM6IG5ld1BhZ2VzIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9uZUVkaXQoKTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCB7IG11dGF0ZTogb25EZWxldGUgfSA9IHVzZU11dGF0aW9uKFxyXG4gICAgKGlkKSA9PiBmZXRjaGVyKERFTEVURV9NRVNTQUdFLCB7IGlkLCB1c2VySWQgfSksXHJcbiAgICB7XHJcbiAgICAgIG9uU3VjY2VzczogKHsgZGVsZXRlTWVzc2FnZTogZGVsZXRlZElkIH0pID0+IHtcclxuICAgICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgKG9sZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBvbGQubWVzc2FnZXMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAobXNnKSA9PiBtc2cuaWQgPT09IGRlbGV0ZWRJZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBvbGQ7XHJcbiAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm9sZC5tZXNzYWdlc107XHJcbiAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcbiAgICAgICAgICByZXR1cm4geyBtZXNzYWdlczogbmV3TXNncyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0Vycm9yLCBmZXRjaE5leHRQYWdlLCBoYXNOZXh0UGFnZSB9ID0gdXNlSW5maW5pdGVRdWVyeShcclxuICAgIFF1ZXJ5S2V5cy5NRVNTQUdFUyxcclxuICAgICh7IHBhZ2VQYXJhbSA9IFwiXCIgfSkgPT4gZmV0Y2hlcihHRVRfTUVTU0FHRVMsIHsgY3Vyc29yOiBwYWdlUGFyYW0gfSksXHJcbiAgICB7XHJcbiAgICAgIGdldE5leHRQYWdlUGFyYW06ICh7IG1lc3NhZ2VzIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZXM/LlttZXNzYWdlcy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YT8ucGFnZXMpIHJldHVybjtcclxuICAgIHNldE1zZ3MoZGF0YS5wYWdlcyk7XHJcbiAgfSwgW2RhdGE/LnBhZ2VzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW50ZXJzZWN0aW5nICYmIGhhc05leHRQYWdlKSBmZXRjaE5leHRQYWdlKCk7XHJcbiAgfSwgW2ludGVyc2VjdGluZywgaGFzTmV4dFBhZ2VdKTtcclxuXHJcbiAgaWYgKGlzRXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zb2xlLmxvZyhtc2dzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICB7bXNncyAmJlxyXG4gICAgICAgICAgbXNncy5tYXAoKHsgbWVzc2FnZXMgfSkgPT5cclxuICAgICAgICAgICAgbWVzc2FnZXMubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJzLmZpbmQoKHgpID0+IHVzZXJJZCA9PT0geC51c2VySWQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZmV0Y2hlciIsIlF1ZXJ5S2V5cyIsInVzZUluZmluaXRlU2Nyb2xsIiwidXNlSW5maW5pdGVRdWVyeSIsInVzZU11dGF0aW9uIiwidXNlUXVlcnlDbGllbnQiLCJDUkVBVEVfTUVTU0FHRSIsIkdFVF9NRVNTQUdFUyIsIlVQREFURV9NRVNTQUdFIiwiREVMRVRFX01FU1NBR0UiLCJmaW5kVGFyZ2V0TXNnSW5kZXgiLCJwYWdlcyIsImlkIiwicGFnZUluZGV4IiwiZmluZEluZGV4IiwibWVzc2FnZXMiLCJtc2dJbmRleCIsIm1zZyIsIk1zZ0xpc3QiLCJzbXNncyIsInVzZXJzIiwiY2xpZW50IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJxdWVyeSIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwidXNlcklkIiwidXNlcmlkIiwibXV0YXRlIiwib25DcmVhdGUiLCJ0ZXh0Iiwib25TdWNjZXNzIiwiY3JlYXRlTWVzc2FnZSIsInNldFF1ZXJ5RGF0YSIsIk1FU1NBR0VTIiwib2xkIiwicGFnZVBhcmFtIiwic2xpY2UiLCJvblVwZGF0ZSIsInVwZGF0ZU1lc3NhZ2UiLCJuZXdQYWdlcyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJkZWxldGVNZXNzYWdlIiwiZGVsZXRlZElkIiwidGFyZ2V0SW5kZXgiLCJuZXdNc2dzIiwiZGF0YSIsImVycm9yIiwiaXNFcnJvciIsImZldGNoTmV4dFBhZ2UiLCJoYXNOZXh0UGFnZSIsImN1cnNvciIsImdldE5leHRQYWdlUGFyYW0iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsInVzZXIiLCJmaW5kIiwiZGl2IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});