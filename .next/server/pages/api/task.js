"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/task";
exports.ids = ["pages/api/task"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwYW5kYS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qcz84ZGNhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./database/cloudConn.js":
/*!*******************************!*\
  !*** ./database/cloudConn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://luciferAdmin:Devil%4012345@cluster0.zlracq1.mongodb.net/?retryWrites=true&w=majority\";\nconst options = {};\nlet client;\nlet clientPromise;\nif (false) {}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9jbG91ZENvbm4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLE1BQU1DLE1BQU1DLG9HQUF1QztBQUNuRCxNQUFNRyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksS0FBd0MsRUFBRSxFQUU3QztBQUVELElBQUlMLElBQXlCLEVBQWU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNPLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSixTQUFTLElBQUlOLGdEQUFXQSxDQUFDQyxLQUFLSTtRQUM5QkksT0FBT0MsbUJBQW1CLEdBQUdKLE9BQU9LLE9BQU87SUFDN0MsQ0FBQztJQUNESixnQkFBZ0JFLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlSCxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwYW5kYS8uL2RhdGFiYXNlL2Nsb3VkQ29ubi5qcz8zNGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX21vbmdvZGJ1cmxDbG91ZFxyXG5jb25zdCBvcHRpb25zID0ge31cclxuXHJcbmxldCBjbGllbnRcclxubGV0IGNsaWVudFByb21pc2VcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfbW9uZ29kYnVybENsb3VkKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWwnKVxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcclxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfbW9uZ29kYnVybENsb3VkIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./database/cloudConn.js\n");

/***/ }),

/***/ "(api)/./helpers/schemaPlugin.js":
/*!*********************************!*\
  !*** ./helpers/schemaPlugin.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(schema) {\n    var updateTimestemps = function(next) {\n        var self = this;\n        if (!self.createdAt) {\n            self.createdDate = new Date();\n        //or self.update({},{ $set: { createdDate : new Date(), updatedDate: new Date() } });\n        } else {\n            self.updatedDate = new Date();\n        //or self.update({},{ $set: {updatedDate: new Date() } });\n        }\n        next();\n    };\n    schema.pre(\"save\", updateTimestemps).pre(\"update\", updateTimestemps).pre(\"findOneAndUpdate\", updateTimestemps);\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL3NjaGVtYVBsdWdpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkJBQWUsb0NBQVNBLE1BQU0sRUFBRTtJQUU1QixJQUFJQyxtQkFBbUIsU0FBU0MsSUFBSSxFQUFDO1FBQ25DLElBQUlDLE9BQU8sSUFBSTtRQUdmLElBQUcsQ0FBQ0EsS0FBS0MsU0FBUyxFQUFFO1lBQ2xCRCxLQUFLRSxXQUFXLEdBQUcsSUFBSUM7UUFDdkIscUZBQXFGO1FBQ3ZGLE9BQU87WUFDTEgsS0FBS0ksV0FBVyxHQUFFLElBQUlEO1FBQ3RCLDBEQUEwRDtRQUM1RCxDQUFDO1FBQ0RKO0lBQ0Y7SUFFQUYsT0FDRVEsR0FBRyxDQUFDLFFBQVFQLGtCQUNaTyxHQUFHLENBQUMsVUFBVVAsa0JBQ2RPLEdBQUcsQ0FBQyxvQkFBb0JQO0FBQzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXBhbmRhLy4vaGVscGVycy9zY2hlbWFQbHVnaW4uanM/ZTk1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzY2hlbWEpIHtcclxuXHJcbiAgICB2YXIgdXBkYXRlVGltZXN0ZW1wcyA9IGZ1bmN0aW9uKG5leHQpe1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgXHJcbiAgXHJcbiAgICAgIGlmKCFzZWxmLmNyZWF0ZWRBdCkge1xyXG4gICAgICAgIHNlbGYuY3JlYXRlZERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIC8vb3Igc2VsZi51cGRhdGUoe30seyAkc2V0OiB7IGNyZWF0ZWREYXRlIDogbmV3IERhdGUoKSwgdXBkYXRlZERhdGU6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWxmLnVwZGF0ZWREYXRlPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIC8vb3Igc2VsZi51cGRhdGUoe30seyAkc2V0OiB7dXBkYXRlZERhdGU6IG5ldyBEYXRlKCkgfSB9KTtcclxuICAgICAgfVxyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgc2NoZW1hLlxyXG4gICAgICBwcmUoJ3NhdmUnLCB1cGRhdGVUaW1lc3RlbXBzICkuXHJcbiAgICAgIHByZSgndXBkYXRlJywgdXBkYXRlVGltZXN0ZW1wcyApLlxyXG4gICAgICBwcmUoJ2ZpbmRPbmVBbmRVcGRhdGUnLCB1cGRhdGVUaW1lc3RlbXBzKTtcclxuICB9OyJdLCJuYW1lcyI6WyJzY2hlbWEiLCJ1cGRhdGVUaW1lc3RlbXBzIiwibmV4dCIsInNlbGYiLCJjcmVhdGVkQXQiLCJjcmVhdGVkRGF0ZSIsIkRhdGUiLCJ1cGRhdGVkRGF0ZSIsInByZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./helpers/schemaPlugin.js\n");

/***/ }),

/***/ "(api)/./model/TaskData.js":
/*!***************************!*\
  !*** ./model/TaskData.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _schemaPlugin = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! ../helpers/schemaPlugin */ \"(api)/./helpers/schemaPlugin.js\"));\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst castObjectId = mongoose.ObjectId.cast();\nmongoose.ObjectId.cast((v)=>v === \"\" ? v : castObjectId(v));\nconst TaskData = new mongoose.Schema({\n    taskName: {\n        type: String,\n        requires: true\n    },\n    taskDesc: {\n        type: String,\n        required: true\n    },\n    taskCreatedDate: {\n        type: String,\n        required: true\n    },\n    taskDueDate: {\n        type: String,\n        required: true\n    },\n    assignee: {\n        type: mongoose.ObjectId,\n        default: \"\"\n    },\n    assigneeName: {\n        type: String\n    },\n    status: {\n        type: String,\n        default: \"To do\"\n    },\n    systemTaskCreatedDate: {\n        type: Date,\n        default: Date.now\n    },\n    systemTaskDueDate: {\n        type: Date,\n        required: true\n    },\n    systemTaskUpdatedDate: {\n        type: Date,\n        default: Date.now\n    }\n});\nTaskData.plugin(_schemaPlugin.default);\nmongoose.models = {};\nconst task = mongoose.model(\"task\", TaskData);\nmodule.exports = task;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9UYXNrRGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7K0VBQ3lCLGdFQUF5QjtBQURsRCxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUVuQyxNQUFNQyxlQUFlRixTQUFTRyxRQUFRLENBQUNDLElBQUk7QUFDM0NKLFNBQVNHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQU9BLE1BQU0sS0FBS0EsSUFBSUgsYUFBYUcsRUFBRTtBQUU3RCxNQUFNQyxXQUFXLElBQUlOLFNBQVNPLE1BQU0sQ0FBQztJQUNuQ0MsVUFBVTtRQUNSQyxNQUFNQztRQUNOQyxVQUFVLElBQUk7SUFDaEI7SUFDQUMsVUFBVTtRQUNSSCxNQUFNQztRQUNORyxVQUFVLElBQUk7SUFDaEI7SUFDQUMsaUJBQWlCO1FBQ2ZMLE1BQU1DO1FBQ05HLFVBQVUsSUFBSTtJQUNoQjtJQUNBRSxhQUFhO1FBQ1hOLE1BQU1DO1FBQ05HLFVBQVUsSUFBSTtJQUNoQjtJQUNBRyxVQUFVO1FBQ1JQLE1BQU1ULFNBQVNHLFFBQVE7UUFDdkJjLFNBQVM7SUFDWDtJQUNBQyxjQUFjO1FBQ1pULE1BQU1DO0lBQ1I7SUFDQVMsUUFBUTtRQUNOVixNQUFNQztRQUNOTyxTQUFTO0lBQ1g7SUFDQUcsdUJBQXVCO1FBQ3JCWCxNQUFNWTtRQUNOSixTQUFTSSxLQUFLQyxHQUFHO0lBQ25CO0lBQ0FDLG1CQUFtQjtRQUNqQmQsTUFBTVk7UUFDTlIsVUFBVSxJQUFJO0lBQ2hCO0lBQ0FXLHVCQUF1QjtRQUNyQmYsTUFBTVk7UUFDTkosU0FBU0ksS0FBS0MsR0FBRztJQUNuQjtBQUNGO0FBRUFoQixTQUFTbUIsTUFBTSxDQUFDQyxxQkFBWTtBQUM1QjFCLFNBQVMyQixNQUFNLEdBQUcsQ0FBQztBQUNuQixNQUFNQyxPQUFPNUIsU0FBUzZCLEtBQUssQ0FBQyxRQUFRdkI7QUFDcEN3QixPQUFPQyxPQUFPLEdBQUdIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwYW5kYS8uL21vZGVsL1Rhc2tEYXRhLmpzPzY1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcbmltcG9ydCBTY2hlbWFQbHVnaW4gZnJvbSBcIi4uL2hlbHBlcnMvc2NoZW1hUGx1Z2luXCI7XHJcbmNvbnN0IGNhc3RPYmplY3RJZCA9IG1vbmdvb3NlLk9iamVjdElkLmNhc3QoKTtcclxubW9uZ29vc2UuT2JqZWN0SWQuY2FzdCgodikgPT4gKHYgPT09IFwiXCIgPyB2IDogY2FzdE9iamVjdElkKHYpKSk7XHJcblxyXG5jb25zdCBUYXNrRGF0YSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHRhc2tOYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlczogdHJ1ZSxcclxuICB9LFxyXG4gIHRhc2tEZXNjOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIHRhc2tDcmVhdGVkRGF0ZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICB0YXNrRHVlRGF0ZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBhc3NpZ25lZToge1xyXG4gICAgdHlwZTogbW9uZ29vc2UuT2JqZWN0SWQsXHJcbiAgICBkZWZhdWx0OiBcIlwiLFxyXG4gIH0sXHJcbiAgYXNzaWduZWVOYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgfSxcclxuICBzdGF0dXM6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6IFwiVG8gZG9cIixcclxuICB9LFxyXG4gIHN5c3RlbVRhc2tDcmVhdGVkRGF0ZToge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gIH0sXHJcbiAgc3lzdGVtVGFza0R1ZURhdGU6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIHN5c3RlbVRhc2tVcGRhdGVkRGF0ZToge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuVGFza0RhdGEucGx1Z2luKFNjaGVtYVBsdWdpbik7XHJcbm1vbmdvb3NlLm1vZGVscyA9IHt9O1xyXG5jb25zdCB0YXNrID0gbW9uZ29vc2UubW9kZWwoXCJ0YXNrXCIsIFRhc2tEYXRhKTtcclxubW9kdWxlLmV4cG9ydHMgPSB0YXNrO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiY2FzdE9iamVjdElkIiwiT2JqZWN0SWQiLCJjYXN0IiwidiIsIlRhc2tEYXRhIiwiU2NoZW1hIiwidGFza05hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZXMiLCJ0YXNrRGVzYyIsInJlcXVpcmVkIiwidGFza0NyZWF0ZWREYXRlIiwidGFza0R1ZURhdGUiLCJhc3NpZ25lZSIsImRlZmF1bHQiLCJhc3NpZ25lZU5hbWUiLCJzdGF0dXMiLCJzeXN0ZW1UYXNrQ3JlYXRlZERhdGUiLCJEYXRlIiwibm93Iiwic3lzdGVtVGFza0R1ZURhdGUiLCJzeXN0ZW1UYXNrVXBkYXRlZERhdGUiLCJwbHVnaW4iLCJTY2hlbWFQbHVnaW4iLCJtb2RlbHMiLCJ0YXNrIiwibW9kZWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./model/TaskData.js\n");

/***/ }),

/***/ "(api)/./pages/api/task.js":
/*!***************************!*\
  !*** ./pages/api/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _database_cloudConn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/cloudConn */ \"(api)/./database/cloudConn.js\");\n/* harmony import */ var _model_TaskData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/TaskData */ \"(api)/./model/TaskData.js\");\n/* harmony import */ var _model_TaskData__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_TaskData__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    _database_cloudConn__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"catch\"]((error)=>console.log(error));\n    const client = await _database_cloudConn__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db(\"DevilDatabase\");\n    switch(req.method){\n        case \"POST\":\n            let bodyObject = JSON.parse(req.body);\n            if (bodyObject.assignee && bodyObject.assigneeName) {\n                bodyObject.status = \"In Progress\";\n                bodyObject.assignee = new mongodb__WEBPACK_IMPORTED_MODULE_2__.ObjectId(bodyObject.assignee);\n            }\n            const newTask = new (_model_TaskData__WEBPACK_IMPORTED_MODULE_1___default())(bodyObject);\n            db.collection(\"MorningStarTask\").insertOne(newTask).then(()=>{\n                res.status(200).json(newTask);\n            });\n            break;\n        case \"GET\":\n            const { userId  } = req.query;\n            if (userId && userId !== \"Admin\") {\n                const employee = await db.collection(\"LuciferCollection\").findOne({\n                    email: userId\n                });\n                if (employee) {\n                    console.log(employee._id);\n                    const allAssignedTasks = await db.collection(\"MorningStarTask\").find({\n                        \"assignee\": employee._id.valueOf()\n                    }).toArray();\n                    console.log(allAssignedTasks);\n                    res.status(200).send({\n                        allAssignedTasks: allAssignedTasks\n                    });\n                }\n            } else {\n                const allTasks = await db.collection(\"MorningStarTask\").find({}).toArray();\n                res.status(200).json({\n                    allTasks: allTasks\n                });\n            }\n            break;\n        case \"DELETE\":\n            const id = req.body;\n            const myquery = {\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_2__.ObjectId(id)\n            };\n            await db.collection(\"MorningStarTask\").deleteOne(myquery).then(()=>{\n                res.status(200).json(\"deleted\");\n            }).catch((err)=>console.log(err));\n            break;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGFzay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUQ7QUFDYjtBQUNMO0FBRW5DLGlFQUFlLE9BQU9HLEtBQUtDLE1BQVE7SUFDakNKLG9FQUFtQixDQUFDLENBQUNNLFFBQVVDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDM0MsTUFBTUcsU0FBUyxNQUFNVCwyREFBYUE7SUFDbEMsTUFBTVUsS0FBS0QsT0FBT0MsRUFBRSxDQUFDO0lBQ3JCLE9BQVFQLElBQUlRLE1BQU07UUFDaEIsS0FBSztZQUNILElBQUlDLGFBQWFDLEtBQUtDLEtBQUssQ0FBQ1gsSUFBSVksSUFBSTtZQUNwQyxJQUFJSCxXQUFXSSxRQUFRLElBQUlKLFdBQVdLLFlBQVksRUFBRTtnQkFDbERMLFdBQVdNLE1BQU0sR0FBRztnQkFDcEJOLFdBQVdJLFFBQVEsR0FBQyxJQUFJZCw2Q0FBUUEsQ0FBQ1UsV0FBV0ksUUFBUTtZQUN0RCxDQUFDO1lBQ0QsTUFBTUcsVUFBVSxJQUFJbEIsd0RBQUlBLENBQUNXO1lBQ3pCRixHQUFHVSxVQUFVLENBQUMsbUJBQ1hDLFNBQVMsQ0FBQ0YsU0FDVkcsSUFBSSxDQUFDLElBQU07Z0JBQ1ZsQixJQUFJYyxNQUFNLENBQUMsS0FBS0ssSUFBSSxDQUFDSjtZQUN2QjtZQUNGLEtBQU07UUFDUixLQUFLO1lBQ0gsTUFBTSxFQUFFSyxPQUFNLEVBQUUsR0FBR3JCLElBQUlzQixLQUFLO1lBQzVCLElBQUlELFVBQVVBLFdBQVcsU0FBUztnQkFDaEMsTUFBTUUsV0FBVyxNQUFNaEIsR0FDcEJVLFVBQVUsQ0FBQyxxQkFDWE8sT0FBTyxDQUFDO29CQUFFQyxPQUFPSjtnQkFBTztnQkFDM0IsSUFBSUUsVUFBVTtvQkFDWm5CLFFBQVFDLEdBQUcsQ0FBQ2tCLFNBQVNHLEdBQUc7b0JBQ3hCLE1BQU1DLG1CQUFtQixNQUFNcEIsR0FDNUJVLFVBQVUsQ0FBQyxtQkFDWFcsSUFBSSxDQUFDO3dCQUFDLFlBQVlMLFNBQVNHLEdBQUcsQ0FBQ0csT0FBTztvQkFBRyxHQUN6Q0MsT0FBTztvQkFDVjFCLFFBQVFDLEdBQUcsQ0FBQ3NCO29CQUNaMUIsSUFBSWMsTUFBTSxDQUFDLEtBQUtnQixJQUFJLENBQUM7d0JBQ25CSixrQkFBa0JBO29CQUNwQjtnQkFDRixDQUFDO1lBQ0gsT0FBTztnQkFDTCxNQUFNSyxXQUFXLE1BQU16QixHQUNwQlUsVUFBVSxDQUFDLG1CQUNYVyxJQUFJLENBQUMsQ0FBQyxHQUNORSxPQUFPO2dCQUVWN0IsSUFBSWMsTUFBTSxDQUFDLEtBQUtLLElBQUksQ0FBQztvQkFDbkJZLFVBQVVBO2dCQUNaO1lBQ0YsQ0FBQztZQUNELEtBQU07UUFDUixLQUFLO1lBQ0gsTUFBTUMsS0FBS2pDLElBQUlZLElBQUk7WUFDbkIsTUFBTXNCLFVBQVU7Z0JBQUVSLEtBQUssSUFBSTNCLDZDQUFRQSxDQUFDa0M7WUFBSTtZQUN4QyxNQUFNMUIsR0FDSFUsVUFBVSxDQUFDLG1CQUNYa0IsU0FBUyxDQUFDRCxTQUNWZixJQUFJLENBQUMsSUFBTTtnQkFDVmxCLElBQUljLE1BQU0sQ0FBQyxLQUFLSyxJQUFJLENBQUM7WUFDdkIsR0FDQ2xCLEtBQUssQ0FBQyxDQUFDa0MsTUFBUWhDLFFBQVFDLEdBQUcsQ0FBQytCO1lBQzlCLEtBQU07SUFDVjtBQUNGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXBhbmRhLy4vcGFnZXMvYXBpL3Rhc2suanM/NTI4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvY2xvdWRDb25uXCI7XHJcbmltcG9ydCB0YXNrIGZyb20gXCIuLi8uLi9tb2RlbC9UYXNrRGF0YVwiO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjbGllbnRQcm9taXNlLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiRGV2aWxEYXRhYmFzZVwiKTtcclxuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIGxldCBib2R5T2JqZWN0ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChib2R5T2JqZWN0LmFzc2lnbmVlICYmIGJvZHlPYmplY3QuYXNzaWduZWVOYW1lKSB7XHJcbiAgICAgICAgYm9keU9iamVjdC5zdGF0dXMgPSBcIkluIFByb2dyZXNzXCI7XHJcbiAgICAgICAgYm9keU9iamVjdC5hc3NpZ25lZT1uZXcgT2JqZWN0SWQoYm9keU9iamVjdC5hc3NpZ25lZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyB0YXNrKGJvZHlPYmplY3QpO1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiTW9ybmluZ1N0YXJUYXNrXCIpXHJcbiAgICAgICAgLmluc2VydE9uZShuZXdUYXNrKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5ld1Rhc2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgY29uc3QgeyB1c2VySWQgfSA9IHJlcS5xdWVyeTtcclxuICAgICAgaWYgKHVzZXJJZCAmJiB1c2VySWQgIT09IFwiQWRtaW5cIikge1xyXG4gICAgICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgZGJcclxuICAgICAgICAgIC5jb2xsZWN0aW9uKFwiTHVjaWZlckNvbGxlY3Rpb25cIilcclxuICAgICAgICAgIC5maW5kT25lKHsgZW1haWw6IHVzZXJJZCB9KTtcclxuICAgICAgICBpZiAoZW1wbG95ZWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVtcGxveWVlLl9pZClcclxuICAgICAgICAgIGNvbnN0IGFsbEFzc2lnbmVkVGFza3MgPSBhd2FpdCBkYlxyXG4gICAgICAgICAgICAuY29sbGVjdGlvbihcIk1vcm5pbmdTdGFyVGFza1wiKVxyXG4gICAgICAgICAgICAuZmluZCh7XCJhc3NpZ25lZVwiOiBlbXBsb3llZS5faWQudmFsdWVPZigpIH0pXHJcbiAgICAgICAgICAgIC50b0FycmF5KCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhhbGxBc3NpZ25lZFRhc2tzKTtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcclxuICAgICAgICAgICAgYWxsQXNzaWduZWRUYXNrczogYWxsQXNzaWduZWRUYXNrcyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBhbGxUYXNrcyA9IGF3YWl0IGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcIk1vcm5pbmdTdGFyVGFza1wiKVxyXG4gICAgICAgICAgLmZpbmQoe30pXHJcbiAgICAgICAgICAudG9BcnJheSgpO1xyXG5cclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICBhbGxUYXNrczogYWxsVGFza3MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgIGNvbnN0IGlkID0gcmVxLmJvZHk7XHJcbiAgICAgIGNvbnN0IG15cXVlcnkgPSB7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9O1xyXG4gICAgICBhd2FpdCBkYlxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiTW9ybmluZ1N0YXJUYXNrXCIpXHJcbiAgICAgICAgLmRlbGV0ZU9uZShteXF1ZXJ5KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKFwiZGVsZXRlZFwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsInRhc2siLCJPYmplY3RJZCIsInJlcSIsInJlcyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiZGIiLCJtZXRob2QiLCJib2R5T2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImFzc2lnbmVlIiwiYXNzaWduZWVOYW1lIiwic3RhdHVzIiwibmV3VGFzayIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJ0aGVuIiwianNvbiIsInVzZXJJZCIsInF1ZXJ5IiwiZW1wbG95ZWUiLCJmaW5kT25lIiwiZW1haWwiLCJfaWQiLCJhbGxBc3NpZ25lZFRhc2tzIiwiZmluZCIsInZhbHVlT2YiLCJ0b0FycmF5Iiwic2VuZCIsImFsbFRhc2tzIiwiaWQiLCJteXF1ZXJ5IiwiZGVsZXRlT25lIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/task.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/task.js"));
module.exports = __webpack_exports__;

})();