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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MsgList = (param)=>{\n    let { smsgs , users  } = param;\n    _s();\n    const client = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient)();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([\n        {\n            messages: smsgs\n        }\n    ]);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(fetchMoreEl);\n    const userId = query.userId || query.userid || \"\";\n    const { mutate: onCreate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((param)=>{\n        let { text  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.CREATE_MESSAGE, {\n            text,\n            userId\n        });\n    }, {\n        onSuccess: (param)=>{\n            let { createMessage  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                return {\n                    pageParam: old.pageParam,\n                    pages: [\n                        {\n                            messages: [\n                                createMessage,\n                                ...old.pages[0].messages\n                            ]\n                        },\n                        ...old.pages.slice(1)\n                    ]\n                };\n            });\n        }\n    });\n    const findTargetMsgIndex = (pages, id)=>{\n        const pageIndex = data.pages.findIndex((param)=>{\n            let { messages  } = param;\n            const msgIndex = messages.findIndex((msg)=>msg.id === id);\n            if (msgIndex > -1) return true;\n            return false;\n        });\n        return {\n            pageIndex\n        };\n    };\n    const { mutate: onUpdate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((param)=>{\n        let { text , id  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.UPDATE_MESSAGE, {\n            text,\n            id,\n            userId\n        });\n    }, {\n        onSuccess: (param)=>{\n            let { updateMessage  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                const targetIndex = old.messages.findIndex((msg)=>msg.id === updateMessage.id);\n                if (targetIndex < 0) return old;\n                const newMsgs = [\n                    ...old.messages\n                ];\n                newMsgs.splice(targetIndex, 1, updateMessage);\n                return {\n                    messages: newMsgs\n                };\n            });\n            doneEdit();\n        }\n    });\n    const { mutate: onDelete  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((id)=>(0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.DELETE_MESSAGE, {\n            id,\n            userId\n        }), {\n        onSuccess: (param)=>{\n            let { deleteMessage: deletedId  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                const targetIndex = old.messages.findIndex((msg)=>msg.id === deletedId);\n                if (targetIndex < 0) return old;\n                const newMsgs = [\n                    ...old.messages\n                ];\n                newMsgs.splice(targetIndex, 1);\n                return {\n                    messages: newMsgs\n                };\n            });\n        }\n    });\n    const doneEdit = ()=>setEditingId(null);\n    const { data , error , isError , fetchNextPage , hasNextPage  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useInfiniteQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (param)=>{\n        let { pageParam =\"\"  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.GET_MESSAGES, {\n            cursor: pageParam\n        });\n    }, {\n        getNextPageParam: (param)=>{\n            let { messages  } = param;\n            var _messages_;\n            return messages === null || messages === void 0 ? void 0 : (_messages_ = messages[messages.length - 1]) === null || _messages_ === void 0 ? void 0 : _messages_.id;\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!(data === null || data === void 0 ? void 0 : data.pages)) return;\n        setMsgs(data.pages);\n    }, [\n        data === null || data === void 0 ? void 0 : data.pages\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (intersecting && hasNextPage) fetchNextPage();\n    }, [\n        intersecting,\n        hasNextPage\n    ]);\n    if (isError) return null;\n    console.log(msgs);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 113,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs && msgs.map((param)=>{\n                    let { messages  } = param;\n                    return messages.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            ...x,\n                            onUpdate: onUpdate,\n                            startEdit: ()=>setEditingId(x.id),\n                            onDelete: ()=>onDelete(x.id),\n                            isEditing: editingId === x.id,\n                            myId: userId,\n                            user: users.find((x)=>userId === x.userId)\n                        }, x.id, false, {\n                            fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                            lineNumber: 118,\n                            columnNumber: 15\n                        }, undefined));\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"Y91uB5W1fxottEpUkWPIFNquVPQ=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useInfiniteQuery\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsSUFBQUEsS0FBTUwsS0FBSztLQUFDO0lBRWhCbkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUl1QixnQkFBZ0JpQyxhQUFhRDtJQUNuQyxHQUFHO1FBQUNoQztRQUFjaUM7S0FBWTtJQUU5QixJQUFJRixTQUFTLE9BQU8sSUFBSTtJQUV4Qk0sUUFBUUMsR0FBRyxDQUFDN0M7SUFFWixxQkFDRTs7WUFDR1Esd0JBQVUsOERBQUMzQixpREFBUUE7Z0JBQUM2QixRQUFRQzs7Ozs7OzBCQUM3Qiw4REFBQ21DO2dCQUFHQyxXQUFVOzBCQUNYL0MsUUFDQ0EsS0FBS2dELEdBQUcsQ0FBQyxTQUNQOUM7d0JBRFEsRUFBRUEsU0FBUSxFQUFFOzJCQUNwQkEsU0FBUzhDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDWiw4REFBQ3JFLGdEQUFPQTs0QkFFTCxHQUFHcUUsQ0FBQzs0QkFDTHJCLFVBQVVBOzRCQUNWc0IsV0FBVyxJQUFNOUMsYUFBYTZDLEVBQUUzQixFQUFFOzRCQUNsQ1ksVUFBVSxJQUFNQSxTQUFTZSxFQUFFM0IsRUFBRTs0QkFDN0I2QixXQUFXaEQsY0FBYzhDLEVBQUUzQixFQUFFOzRCQUM3QjhCLE1BQU01Qzs0QkFDTjZDLE1BQU12RCxNQUFNd0QsSUFBSSxDQUFDLENBQUNMLElBQU16QyxXQUFXeUMsRUFBRXpDLE1BQU07MkJBUHRDeUMsRUFBRTNCLEVBQUU7Ozs7O2dCQVNaOzs7Ozs7MEJBR1AsOERBQUNpQztnQkFBSUMsS0FBS2xEOzs7Ozs7OztBQUdoQjtHQXZITVY7O1FBQ1dMLHVEQUFjQTtRQUdYVCxrREFBU0E7UUFFTk0sZ0VBQWlCQTtRQUlURSxvREFBV0E7UUEwQlhBLG9EQUFXQTtRQWtCWEEsb0RBQVdBO1FBbUJxQkQseURBQWdCQTs7O0tBekV6RU87QUF5SE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmZXRjaGVyLCBRdWVyeUtleXMgfSBmcm9tIFwiLi4vcXVlcnlDbGllbnRcIjtcclxuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gXCIuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbFwiO1xyXG5pbXBvcnQgeyB1c2VJbmZpbml0ZVF1ZXJ5LCB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHtcclxuICBDUkVBVEVfTUVTU0FHRSxcclxuICBHRVRfTUVTU0FHRVMsXHJcbiAgVVBEQVRFX01FU1NBR0UsXHJcbiAgREVMRVRFX01FU1NBR0UsXHJcbn0gZnJvbSBcIi4uL2dyYXBocWwvbWVzc2FnZVwiO1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICh7IHNtc2dzLCB1c2VycyB9KSA9PiB7XHJcbiAgY29uc3QgY2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbeyBtZXNzYWdlczogc21zZ3MgfV0pO1xyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7XHJcblxyXG4gIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgXCJcIjtcclxuXHJcbiAgY29uc3QgeyBtdXRhdGU6IG9uQ3JlYXRlIH0gPSB1c2VNdXRhdGlvbihcclxuICAgICh7IHRleHQgfSkgPT4gZmV0Y2hlcihDUkVBVEVfTUVTU0FHRSwgeyB0ZXh0LCB1c2VySWQgfSksXHJcbiAgICB7XHJcbiAgICAgIG9uU3VjY2VzczogKHsgY3JlYXRlTWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhZ2VQYXJhbTogb2xkLnBhZ2VQYXJhbSxcclxuICAgICAgICAgICAgcGFnZXM6IFtcclxuICAgICAgICAgICAgICB7IG1lc3NhZ2VzOiBbY3JlYXRlTWVzc2FnZSwgLi4ub2xkLnBhZ2VzWzBdLm1lc3NhZ2VzXSB9LFxyXG4gICAgICAgICAgICAgIC4uLm9sZC5wYWdlcy5zbGljZSgxKSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZmluZFRhcmdldE1zZ0luZGV4ID0gKHBhZ2VzLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgcGFnZUluZGV4ID0gZGF0YS5wYWdlcy5maW5kSW5kZXgoKHsgbWVzc2FnZXMgfSkgPT4ge1xyXG4gICAgICBjb25zdCBtc2dJbmRleCA9IG1lc3NhZ2VzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcclxuICAgICAgaWYgKG1zZ0luZGV4ID4gLTEpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7IHBhZ2VJbmRleCB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgbXV0YXRlOiBvblVwZGF0ZSB9ID0gdXNlTXV0YXRpb24oXHJcbiAgICAoeyB0ZXh0LCBpZCB9KSA9PiBmZXRjaGVyKFVQREFURV9NRVNTQUdFLCB7IHRleHQsIGlkLCB1c2VySWQgfSksXHJcbiAgICB7XHJcbiAgICAgIG9uU3VjY2VzczogKHsgdXBkYXRlTWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gb2xkLm1lc3NhZ2VzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgKG1zZykgPT4gbXNnLmlkID09PSB1cGRhdGVNZXNzYWdlLmlkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG9sZDtcclxuICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ub2xkLm1lc3NhZ2VzXTtcclxuICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB1cGRhdGVNZXNzYWdlKTtcclxuICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2VzOiBuZXdNc2dzIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9uZUVkaXQoKTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCB7IG11dGF0ZTogb25EZWxldGUgfSA9IHVzZU11dGF0aW9uKFxyXG4gICAgKGlkKSA9PiBmZXRjaGVyKERFTEVURV9NRVNTQUdFLCB7IGlkLCB1c2VySWQgfSksXHJcbiAgICB7XHJcbiAgICAgIG9uU3VjY2VzczogKHsgZGVsZXRlTWVzc2FnZTogZGVsZXRlZElkIH0pID0+IHtcclxuICAgICAgICBjbGllbnQuc2V0UXVlcnlEYXRhKFF1ZXJ5S2V5cy5NRVNTQUdFUywgKG9sZCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBvbGQubWVzc2FnZXMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAobXNnKSA9PiBtc2cuaWQgPT09IGRlbGV0ZWRJZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBvbGQ7XHJcbiAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm9sZC5tZXNzYWdlc107XHJcbiAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XHJcbiAgICAgICAgICByZXR1cm4geyBtZXNzYWdlczogbmV3TXNncyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0Vycm9yLCBmZXRjaE5leHRQYWdlLCBoYXNOZXh0UGFnZSB9ID0gdXNlSW5maW5pdGVRdWVyeShcclxuICAgIFF1ZXJ5S2V5cy5NRVNTQUdFUyxcclxuICAgICh7IHBhZ2VQYXJhbSA9IFwiXCIgfSkgPT4gZmV0Y2hlcihHRVRfTUVTU0FHRVMsIHsgY3Vyc29yOiBwYWdlUGFyYW0gfSksXHJcbiAgICB7XHJcbiAgICAgIGdldE5leHRQYWdlUGFyYW06ICh7IG1lc3NhZ2VzIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZXM/LlttZXNzYWdlcy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YT8ucGFnZXMpIHJldHVybjtcclxuICAgIHNldE1zZ3MoZGF0YS5wYWdlcyk7XHJcbiAgfSwgW2RhdGE/LnBhZ2VzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW50ZXJzZWN0aW5nICYmIGhhc05leHRQYWdlKSBmZXRjaE5leHRQYWdlKCk7XHJcbiAgfSwgW2ludGVyc2VjdGluZywgaGFzTmV4dFBhZ2VdKTtcclxuXHJcbiAgaWYgKGlzRXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zb2xlLmxvZyhtc2dzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICB7bXNncyAmJlxyXG4gICAgICAgICAgbXNncy5tYXAoKHsgbWVzc2FnZXMgfSkgPT5cclxuICAgICAgICAgICAgbWVzc2FnZXMubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1zZ0l0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgICAgIHsuLi54fVxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cclxuICAgICAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJzLmZpbmQoKHgpID0+IHVzZXJJZCA9PT0geC51c2VySWQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWx9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcclxuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZmV0Y2hlciIsIlF1ZXJ5S2V5cyIsInVzZUluZmluaXRlU2Nyb2xsIiwidXNlSW5maW5pdGVRdWVyeSIsInVzZU11dGF0aW9uIiwidXNlUXVlcnlDbGllbnQiLCJDUkVBVEVfTUVTU0FHRSIsIkdFVF9NRVNTQUdFUyIsIlVQREFURV9NRVNTQUdFIiwiREVMRVRFX01FU1NBR0UiLCJNc2dMaXN0Iiwic21zZ3MiLCJ1c2VycyIsImNsaWVudCIsIm1zZ3MiLCJzZXRNc2dzIiwibWVzc2FnZXMiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJxdWVyeSIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwidXNlcklkIiwidXNlcmlkIiwibXV0YXRlIiwib25DcmVhdGUiLCJ0ZXh0Iiwib25TdWNjZXNzIiwiY3JlYXRlTWVzc2FnZSIsInNldFF1ZXJ5RGF0YSIsIk1FU1NBR0VTIiwib2xkIiwicGFnZVBhcmFtIiwicGFnZXMiLCJzbGljZSIsImZpbmRUYXJnZXRNc2dJbmRleCIsImlkIiwicGFnZUluZGV4IiwiZGF0YSIsImZpbmRJbmRleCIsIm1zZ0luZGV4IiwibXNnIiwib25VcGRhdGUiLCJ1cGRhdGVNZXNzYWdlIiwidGFyZ2V0SW5kZXgiLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsImRlbGV0ZU1lc3NhZ2UiLCJkZWxldGVkSWQiLCJlcnJvciIsImlzRXJyb3IiLCJmZXRjaE5leHRQYWdlIiwiaGFzTmV4dFBhZ2UiLCJjdXJzb3IiLCJnZXROZXh0UGFnZVBhcmFtIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyIsIm15SWQiLCJ1c2VyIiwiZmluZCIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});