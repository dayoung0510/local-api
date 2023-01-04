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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queryClient */ \"./queryClient.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ \"../node_modules/react-query/es/index.js\");\n/* harmony import */ var _graphql_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphql/message */ \"./graphql/message.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst MsgList = (param)=>{\n    let { smsgs , users  } = param;\n    _s();\n    const client = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient)();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(smsgs);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // const fetchMoreEl = useRef(null);\n    // const [hasNext, setHasNext] = useState(true);\n    // const intersecting = useInfiniteScroll(fetchMoreEl);\n    const userId = query.userId || query.userid || \"\";\n    const { mutate: onCreate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)((param)=>{\n        let { text  } = param;\n        return (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.CREATE_MESSAGE, {\n            text,\n            userId\n        });\n    }, {\n        onSuccess: (param)=>{\n            let { createMessage  } = param;\n            client.setQueryData(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, (old)=>{\n                return {\n                    messages: [\n                        createMessage,\n                        ...old.messages\n                    ]\n                };\n            });\n        }\n    });\n    // const onCreate = async (text) => {\n    //   const newMsg = await fetcher(\"post\", \"/messages\", { text, userId });\n    //   if (!newMsg) throw Error(\"something wrong\");\n    //   setMsgs((msgs) => [newMsg, ...msgs]);\n    //   msgs.unshift(newMsg);\n    // };\n    const onUpdate = async (text, id)=>{\n        const newMsg = await (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(\"put\", \"/messages/\".concat(id), {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"something wrong\");\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1, newMsg);\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    const doneEdit = ()=>setEditingId(null);\n    const onDelete = async (id)=>{\n        const receivedId = await (0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(\"delete\", \"/messages/\".concat(id), {\n            params: {\n                userId\n            }\n        });\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === receivedId + \"\");\n            if (targetIndex < 0) return msgs;\n            const newMsgs = [\n                ...msgs\n            ];\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    // const getMessages = async () => {\n    //   const newMsgs = await fetcher(\"get\", \"/messages\", {\n    //     params: { cursor: msgs[msgs.length - 1]?.id || \"\" },\n    //   });\n    //   if (newMsgs.length === 0) {\n    //     setHasNext(false);\n    //     return;\n    //   }\n    //   setMsgs((msgs) => [...msgs, ...newMsgs]);\n    // };\n    // useEffect(() => {\n    //   if (intersecting && hasNext) getMessages();\n    // }, [intersecting]);\n    const { data , error , isError  } = (0,react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)(_queryClient__WEBPACK_IMPORTED_MODULE_5__.QueryKeys.MESSAGES, ()=>(0,_queryClient__WEBPACK_IMPORTED_MODULE_5__.fetcher)(_graphql_message__WEBPACK_IMPORTED_MODULE_8__.GET_MESSAGES));\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{}, []);\n    if (isError) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 94,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        ...x,\n                        onUpdate: onUpdate,\n                        startEdit: ()=>setEditingId(x.id),\n                        onDelete: ()=>onDelete(x.id),\n                        isEditing: editingId === x.id,\n                        myId: userId,\n                        user: users.find((x)=>userId === x.userId)\n                    }, x.id, false, {\n                        fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\development\\\\local-api\\\\client\\\\components\\\\MsgList.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"IXSv0dBeIgDL/IMYejcaTSwXl7M=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useQueryClient,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation,\n        react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUE7SUFHdEJULGdEQUFTQSxDQUFDLElBQU0sQ0FBQyxHQUFHLEVBQUU7SUFFdEIsSUFBSTZDLFNBQVMsT0FBTyxJQUFJO0lBRXhCLHFCQUNFOztZQUNHMUIsd0JBQVUsOERBQUN0QixpREFBUUE7Z0JBQUN3QixRQUFRQzs7Ozs7OzBCQUM3Qiw4REFBQ3dCO2dCQUFHQyxXQUFVOzBCQUNYakMsS0FBS2tDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDVCw4REFBQ3JELGdEQUFPQTt3QkFFTCxHQUFHcUQsQ0FBQzt3QkFDTG5CLFVBQVVBO3dCQUNWb0IsV0FBVyxJQUFNakMsYUFBYWdDLEVBQUVsQixFQUFFO3dCQUNsQ1MsVUFBVSxJQUFNQSxTQUFTUyxFQUFFbEIsRUFBRTt3QkFDN0JvQixXQUFXbkMsY0FBY2lDLEVBQUVsQixFQUFFO3dCQUM3QnFCLE1BQU1qQzt3QkFDTmtDLE1BQU16QyxNQUFNMEMsSUFBSSxDQUFDLENBQUNMLElBQU05QixXQUFXOEIsRUFBRTlCLE1BQU07dUJBUHRDOEIsRUFBRWxCLEVBQUU7Ozs7Ozs7Ozs7OztBQWNyQjtHQXRHTXJCOztRQUNXSCx1REFBY0E7UUFHWFQsa0RBQVNBO1FBT0VPLG9EQUFXQTtRQStEUEMsaURBQVFBOzs7S0ExRXJDSTtBQXdHTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSXRlbSBmcm9tIFwiLi9Nc2dJdGVtXCI7XHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoZXIsIFF1ZXJ5S2V5cyB9IGZyb20gXCIuLi9xdWVyeUNsaWVudFwiO1xyXG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSBcIi4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IHsgQ1JFQVRFX01FU1NBR0UsIEdFVF9NRVNTQUdFUyB9IGZyb20gXCIuLi9ncmFwaHFsL21lc3NhZ2VcIjtcclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoeyBzbXNncywgdXNlcnMgfSkgPT4ge1xyXG4gIGNvbnN0IGNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoc21zZ3MpO1xyXG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICAvLyBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcclxuICAvLyBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAvLyBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7XHJcblxyXG4gIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgXCJcIjtcclxuXHJcbiAgY29uc3QgeyBtdXRhdGU6IG9uQ3JlYXRlIH0gPSB1c2VNdXRhdGlvbihcclxuICAgICh7IHRleHQgfSkgPT4gZmV0Y2hlcihDUkVBVEVfTUVTU0FHRSwgeyB0ZXh0LCB1c2VySWQgfSksXHJcbiAgICB7XHJcbiAgICAgIG9uU3VjY2VzczogKHsgY3JlYXRlTWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgY2xpZW50LnNldFF1ZXJ5RGF0YShRdWVyeUtleXMuTUVTU0FHRVMsIChvbGQpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbY3JlYXRlTWVzc2FnZSwgLi4ub2xkLm1lc3NhZ2VzXSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLy8gY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xyXG4gIC8vICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcihcInBvc3RcIiwgXCIvbWVzc2FnZXNcIiwgeyB0ZXh0LCB1c2VySWQgfSk7XHJcbiAgLy8gICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgLy8gICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XHJcbiAgLy8gICBtc2dzLnVuc2hpZnQobmV3TXNnKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcihcInB1dFwiLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB0ZXh0LCB1c2VySWQgfSk7XHJcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoXCJzb21ldGhpbmcgd3JvbmdcIik7XHJcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xyXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xyXG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICAgIGRvbmVFZGl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcihcImRlbGV0ZVwiLCBgL21lc3NhZ2VzLyR7aWR9YCwge1xyXG4gICAgICBwYXJhbXM6IHsgdXNlcklkIH0sXHJcbiAgICB9KTtcclxuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyBcIlwiKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XHJcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XHJcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcclxuICAgICAgcmV0dXJuIG5ld01zZ3M7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKFwiZ2V0XCIsIFwiL21lc3NhZ2VzXCIsIHtcclxuICAvLyAgICAgcGFyYW1zOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCBcIlwiIH0sXHJcbiAgLy8gICB9KTtcclxuICAvLyAgIGlmIChuZXdNc2dzLmxlbmd0aCA9PT0gMCkge1xyXG4gIC8vICAgICBzZXRIYXNOZXh0KGZhbHNlKTtcclxuICAvLyAgICAgcmV0dXJuO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgc2V0TXNncygobXNncykgPT4gWy4uLm1zZ3MsIC4uLm5ld01zZ3NdKTtcclxuICAvLyB9O1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNZXNzYWdlcygpO1xyXG4gIC8vIH0sIFtpbnRlcnNlY3RpbmddKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNFcnJvciB9ID0gdXNlUXVlcnkoUXVlcnlLZXlzLk1FU1NBR0VTLCAoKSA9PlxyXG4gICAgZmV0Y2hlcihHRVRfTUVTU0FHRVMpXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XHJcblxyXG4gIGlmIChpc0Vycm9yKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcclxuICAgICAgICAgIDxNc2dJdGVtXHJcbiAgICAgICAgICAgIGtleT17eC5pZH1cclxuICAgICAgICAgICAgey4uLnh9XHJcbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX1cclxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9XHJcbiAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgICAgdXNlcj17dXNlcnMuZmluZCgoeCkgPT4gdXNlcklkID09PSB4LnVzZXJJZCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICB7LyogPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xyXG4iXSwibmFtZXMiOlsiTXNnSXRlbSIsIk1zZ0lucHV0IiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJmZXRjaGVyIiwiUXVlcnlLZXlzIiwidXNlSW5maW5pdGVTY3JvbGwiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwidXNlUXVlcnlDbGllbnQiLCJDUkVBVEVfTUVTU0FHRSIsIkdFVF9NRVNTQUdFUyIsIk1zZ0xpc3QiLCJzbXNncyIsInVzZXJzIiwiY2xpZW50IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJxdWVyeSIsInVzZXJJZCIsInVzZXJpZCIsIm11dGF0ZSIsIm9uQ3JlYXRlIiwidGV4dCIsIm9uU3VjY2VzcyIsImNyZWF0ZU1lc3NhZ2UiLCJzZXRRdWVyeURhdGEiLCJNRVNTQUdFUyIsIm9sZCIsIm1lc3NhZ2VzIiwib25VcGRhdGUiLCJpZCIsIm5ld01zZyIsIkVycm9yIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsInJlY2VpdmVkSWQiLCJwYXJhbXMiLCJkYXRhIiwiZXJyb3IiLCJpc0Vycm9yIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJ4Iiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsInVzZXIiLCJmaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n"));

/***/ })

});