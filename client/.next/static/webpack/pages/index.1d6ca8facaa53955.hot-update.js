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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst findTargetMsgIndex = (pages, id)=>{\n    let msgIndex = -1;\n    const pageIndex = pages.findIndex((param)=>{\n        let { messages  } = param;\n        const msgIndex = messages.findIndex((msg)=>msg.id === id);\n        if (msgIndex > -1) return true;\n        return false;\n    });\n    return {\n        pageIndex,\n        msgIndex\n    };\n};\nconst MsgList = (param)=>{\n    let { smsgs , users  } = param;\n    _s();\n    const client = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient)();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([\n        {\n            messages: smsgs\n        }\n    ]);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(fetchMoreEl);\n    const userId = query.userId || query.userid || \"\";\n    const { mutate: onCreate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((param)=>{\n        let { text  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.CREATE_MESSAGE, {\n            text,\n            userId\n        });\n    }, {\n        onSuccess: (param)=>{\n            let { createMessage  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                return {\n                    pageParam: old.pageParam,\n                    pages: [\n                        {\n                            messages: [\n                                createMessage,\n                                ...old.pages[0].messages\n                            ]\n                        },\n                        ...old.pages.slice(1)\n                    ]\n                };\n            });\n        }\n    });\n    const { mutate: onUpdate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((param)=>{\n        let { text , id  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.UPDATE_MESSAGE, {\n            text,\n            id,\n            userId\n        });\n    }, {\n        onSuccess: (param)=>{\n            let { updateMessage  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                const { pageIndex , msgIndex  } = findTargetMsgIndex(old.pages, updateMessage.id);\n                if (pageIndex < 0 || msgIndex < 0) return old;\n                const newPages = [\n                    ...old.pages\n                ];\n                newPages[pageIndex] = [\n                    ...newPages[pageIndex]\n                ];\n                newPages[pageIndex].splice(msgIndex, 1, updateMessage);\n                return {\n                    pageParam: old.pageParam,\n                    pages: newPages\n                };\n            });\n            doneEdit();\n        }\n    });\n    const { mutate: onDelete  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((id)=>(0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.DELETE_MESSAGE, {\n            id,\n            userId\n        }), {\n        onSuccess: (param)=>{\n            let { deleteMessage: deletedId  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                const targetIndex = old.messages.findIndex((msg)=>msg.id === deletedId);\n                if (targetIndex < 0) return old;\n                const newMsgs = [\n                    ...old.messages\n                ];\n                newMsgs.splice(targetIndex, 1);\n                return {\n                    messages: newMsgs\n                };\n            });\n        }\n    });\n    const doneEdit = ()=>setEditingId(null);\n    const { data , error , isError , fetchNextPage , hasNextPage  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useInfiniteQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (param)=>{\n        let { pageParam =\"\"  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.GET_MESSAGES, {\n            cursor: pageParam\n        });\n    }, {\n        getNextPageParam: (param)=>{\n            let { messages  } = param;\n            var _messages_;\n            return messages === null || messages === void 0 ? void 0 : (_messages_ = messages[messages.length - 1]) === null || _messages_ === void 0 ? void 0 : _messages_.id;\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!(data === null || data === void 0 ? void 0 : data.pages)) return;\n        setMsgs(data.pages);\n    }, [\n        data === null || data === void 0 ? void 0 : data.pages\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (intersecting && hasNextPage) fetchNextPage();\n    }, [\n        intersecting,\n        hasNextPage\n    ]);\n    if (isError) return null;\n    console.log(msgs);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 117,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs && msgs.map((param)=>{\n                    let { messages  } = param;\n                    return messages.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            ...x,\n                            onUpdate: onUpdate,\n                            startEdit: ()=>setEditingId(x.id),\n                            onDelete: ()=>onDelete(x.id),\n                            isEditing: editingId === x.id,\n                            myId: userId,\n                            user: users.find((x)=>userId === x.userId)\n                        }, x.id, false, {\n                            fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                            lineNumber: 122,\n                            columnNumber: 15\n                        }, undefined));\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"Y91uB5W1fxottEpUkWPIFNquVPQ=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useInfiniteQuery\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZTtBQW1ITiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoZXIsIFF1ZXJ5S2V5cyB9IGZyb20gXCIuLi9xdWVyeUNsaWVudFwiO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsXCI7XHJcbmltcG9ydCB7IHVzZUluZmluaXRlUXVlcnksIHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQge1xyXG4gIENSRUFURV9NRVNTQUdFLFxyXG4gIEdFVF9NRVNTQUdFUyxcclxuICBVUERBVEVfTUVTU0FHRSxcclxuICBERUxFVEVfTUVTU0FHRSxcclxufSBmcm9tIFwiLi4vZ3JhcGhxbC9tZXNzYWdlXCI7XHJcblxyXG5jb25zdCBmaW5kVGFyZ2V0TXNnSW5kZXggPSAocGFnZXMsIGlkKSA9PiB7XHJcbiAgbGV0IG1zZ0luZGV4ID0gLTE7XHJcbiAgY29uc3QgcGFnZUluZGV4ID0gcGFnZXMuZmluZEluZGV4KCh7IG1lc3NhZ2VzIH0pID0+IHtcclxuICAgIGNvbnN0IG1zZ0luZGV4ID0gbWVzc2FnZXMuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKG1zZ0luZGV4ID4gLTEpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG4gIHJldHVybiB7IHBhZ2VJbmRleCwgbXNnSW5kZXggfTtcclxufTtcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4ge1xyXG4gIGNvbnN0IGNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW3sgbWVzc2FnZXM6IHNtc2dzIH1dKTtcclxuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpO1xyXG5cclxuICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8IFwiXCI7XHJcblxyXG4gIGNvbnN0IHsgbXV0YXRlOiBvbkNyZWF0ZSB9ID0gdXNlTXV0YXRpb24oXHJcbiAgICAoeyB0ZXh0IH0pID0+IGZldGNoZXIoQ1JFQVRFX01FU1NBR0UsIHsgdGV4dCwgdXNlcklkIH0pLFxyXG4gICAge1xyXG4gICAgICBvblN1Y2Nlc3M6ICh7IGNyZWF0ZU1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgICAgIGNsaWVudC5zZXRRdWVyeURhdGEoUXVlcnlLZXlzLk1FU1NBR0VTLCAob2xkKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYWdlUGFyYW06IG9sZC5wYWdlUGFyYW0sXHJcbiAgICAgICAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgICAgICAgeyBtZXNzYWdlczogW2NyZWF0ZU1lc3NhZ2UsIC4uLm9sZC5wYWdlc1swXS5tZXNzYWdlc10gfSxcclxuICAgICAgICAgICAgICAuLi5vbGQucGFnZXMuc2xpY2UoMSksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgbXV0YXRlOiBvblVwZGF0ZSB9ID0gdXNlTXV0YXRpb24oXHJcbiAgICAoeyB0ZXh0LCBpZCB9KSA9PiBmZXRjaGVyKFVQREFURV9NRVNTQUdFLCB7IHRleHQsIGlkLCB1c2VySWQgfSksXHJcbiAgICB7XHJcbiAgICAgIG9uU3VjY2VzczogKHsgdXBkYXRlTWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgcGFnZUluZGV4LCBtc2dJbmRleCB9ID0gZmluZFRhcmdldE1zZ0luZGV4KFxyXG4gICAgICAgICAgICBvbGQucGFnZXMsXHJcbiAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UuaWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAocGFnZUluZGV4IDwgMCB8fCBtc2dJbmRleCA8IDApIHJldHVybiBvbGQ7XHJcbiAgICAgICAgICBjb25zdCBuZXdQYWdlcyA9IFsuLi5vbGQucGFnZXNdO1xyXG4gICAgICAgICAgbmV3UGFnZXNbcGFnZUluZGV4XSA9IFsuLi5uZXdQYWdlc1twYWdlSW5kZXhdXTtcclxuICAgICAgICAgIG5ld1BhZ2VzW3BhZ2VJbmRleF0uc3BsaWNlKG1zZ0luZGV4LCAxLCB1cGRhdGVNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4geyBwYWdlUGFyYW06IG9sZC5wYWdlUGFyYW0sIHBhZ2VzOiBuZXdQYWdlcyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvbmVFZGl0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBtdXRhdGU6IG9uRGVsZXRlIH0gPSB1c2VNdXRhdGlvbihcclxuICAgIChpZCkgPT4gZmV0Y2hlcihERUxFVEVfTUVTU0FHRSwgeyBpZCwgdXNlcklkIH0pLFxyXG4gICAge1xyXG4gICAgICBvblN1Y2Nlc3M6ICh7IGRlbGV0ZU1lc3NhZ2U6IGRlbGV0ZWRJZCB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gb2xkLm1lc3NhZ2VzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKG1zZykgPT4gbXNnLmlkID09PSBkZWxldGVkSWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gb2xkO1xyXG4gICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5vbGQubWVzc2FnZXNdO1xyXG4gICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xyXG4gICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZXM6IG5ld01zZ3MgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNFcnJvciwgZmV0Y2hOZXh0UGFnZSwgaGFzTmV4dFBhZ2UgfSA9IHVzZUluZmluaXRlUXVlcnkoXHJcbiAgICBRdWVyeUtleXMuTUVTU0FHRVMsXHJcbiAgICAoeyBwYWdlUGFyYW0gPSBcIlwiIH0pID0+IGZldGNoZXIoR0VUX01FU1NBR0VTLCB7IGN1cnNvcjogcGFnZVBhcmFtIH0pLFxyXG4gICAge1xyXG4gICAgICBnZXROZXh0UGFnZVBhcmFtOiAoeyBtZXNzYWdlcyB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VzPy5bbWVzc2FnZXMubGVuZ3RoIC0gMV0/LmlkO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRhdGE/LnBhZ2VzKSByZXR1cm47XHJcbiAgICBzZXRNc2dzKGRhdGEucGFnZXMpO1xyXG4gIH0sIFtkYXRhPy5wYWdlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0UGFnZSkgZmV0Y2hOZXh0UGFnZSgpO1xyXG4gIH0sIFtpbnRlcnNlY3RpbmcsIGhhc05leHRQYWdlXSk7XHJcblxyXG4gIGlmIChpc0Vycm9yKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc29sZS5sb2cobXNncyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAge21zZ3MgJiZcclxuICAgICAgICAgIG1zZ3MubWFwKCh7IG1lc3NhZ2VzIH0pID0+XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNc2dJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e3guaWR9XHJcbiAgICAgICAgICAgICAgICB7Li4ueH1cclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2Vycy5maW5kKCh4KSA9PiB1c2VySWQgPT09IHgudXNlcklkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJNc2dJdGVtIiwiTXNnSW5wdXQiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImZldGNoZXIiLCJRdWVyeUtleXMiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsInVzZUluZmluaXRlUXVlcnkiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5Q2xpZW50IiwiQ1JFQVRFX01FU1NBR0UiLCJHRVRfTUVTU0FHRVMiLCJVUERBVEVfTUVTU0FHRSIsIkRFTEVURV9NRVNTQUdFIiwiZmluZFRhcmdldE1zZ0luZGV4IiwicGFnZXMiLCJpZCIsIm1zZ0luZGV4IiwicGFnZUluZGV4IiwiZmluZEluZGV4IiwibWVzc2FnZXMiLCJtc2ciLCJNc2dMaXN0Iiwic21zZ3MiLCJ1c2VycyIsImNsaWVudCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwicXVlcnkiLCJmZXRjaE1vcmVFbCIsImludGVyc2VjdGluZyIsInVzZXJJZCIsInVzZXJpZCIsIm11dGF0ZSIsIm9uQ3JlYXRlIiwidGV4dCIsIm9uU3VjY2VzcyIsImNyZWF0ZU1lc3NhZ2UiLCJzZXRRdWVyeURhdGEiLCJNRVNTQUdFUyIsIm9sZCIsInBhZ2VQYXJhbSIsInNsaWNlIiwib25VcGRhdGUiLCJ1cGRhdGVNZXNzYWdlIiwibmV3UGFnZXMiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwiZGVsZXRlTWVzc2FnZSIsImRlbGV0ZWRJZCIsInRhcmdldEluZGV4IiwibmV3TXNncyIsImRhdGEiLCJlcnJvciIsImlzRXJyb3IiLCJmZXRjaE5leHRQYWdlIiwiaGFzTmV4dFBhZ2UiLCJjdXJzb3IiLCJnZXROZXh0UGFnZVBhcmFtIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJ1c2VyIiwiZmluZCIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});