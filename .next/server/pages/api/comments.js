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
exports.id = "pages/api/comments";
exports.ids = ["pages/api/comments"];
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

/***/ "(api)/./database/cloudConn.js":
/*!*******************************!*\
  !*** ./database/cloudConn.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://luciferAdmin:Devil%4012345@cluster0.zlracq1.mongodb.net/?retryWrites=true&w=majority\";\nconst options = {};\nlet client;\nlet clientPromise;\nif (false) {}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9jbG91ZENvbm4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLE1BQU1DLE1BQU1DLG9HQUF1QztBQUNuRCxNQUFNRyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksS0FBd0MsRUFBRSxFQUU3QztBQUVELElBQUlMLElBQXlCLEVBQWU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNPLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSixTQUFTLElBQUlOLGdEQUFXQSxDQUFDQyxLQUFLSTtRQUM5QkksT0FBT0MsbUJBQW1CLEdBQUdKLE9BQU9LLE9BQU87SUFDN0MsQ0FBQztJQUNESixnQkFBZ0JFLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlSCxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwYW5kYS8uL2RhdGFiYXNlL2Nsb3VkQ29ubi5qcz8zNGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX21vbmdvZGJ1cmxDbG91ZFxyXG5jb25zdCBvcHRpb25zID0ge31cclxuXHJcbmxldCBjbGllbnRcclxubGV0IGNsaWVudFByb21pc2VcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfbW9uZ29kYnVybENsb3VkKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWwnKVxyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcclxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXHJcbn0gZWxzZSB7XHJcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfbW9uZ29kYnVybENsb3VkIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./database/cloudConn.js\n");

/***/ }),

/***/ "(api)/./model/CommentsData.js":
/*!*******************************!*\
  !*** ./model/CommentsData.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst CommentsData = new mongoose.Schema({\n    commentBy: {\n        type: String,\n        requires: true\n    },\n    commentDate: {\n        type: Date,\n        default: Date.now\n    },\n    commentBody: {\n        type: String,\n        required: true\n    },\n    taskId: {\n        type: mongoose.Schema.Types.ObjectId,\n        default: \"\"\n    }\n});\nmongoose.models = {};\nconst comments = mongoose.model(\"comments\", CommentsData);\nmodule.exports = comments;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9Db21tZW50c0RhdGEuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUNuQyxNQUFNQyxlQUFlLElBQUlGLFNBQVNHLE1BQU0sQ0FBQztJQUN2Q0MsV0FBVztRQUNUQyxNQUFNQztRQUNOQyxVQUFVLElBQUk7SUFDaEI7SUFDQUMsYUFBYTtRQUNYSCxNQUFNSTtRQUNOQyxTQUFRRCxLQUFLRSxHQUFHO0lBQ2xCO0lBQ0FDLGFBQWE7UUFDWFAsTUFBTUM7UUFDTk8sVUFBVSxJQUFJO0lBQ2hCO0lBQ0FDLFFBQVE7UUFDTlQsTUFBTUwsU0FBU0csTUFBTSxDQUFDWSxLQUFLLENBQUNDLFFBQVE7UUFDcENOLFNBQVE7SUFDVjtBQUNGO0FBRUFWLFNBQVNpQixNQUFNLEdBQUcsQ0FBQztBQUNuQixNQUFNQyxXQUFXbEIsU0FBU21CLEtBQUssQ0FBQyxZQUFZakI7QUFDNUNrQixPQUFPQyxPQUFPLEdBQUdIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwYW5kYS8uL21vZGVsL0NvbW1lbnRzRGF0YS5qcz8zNTAyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG5jb25zdCBDb21tZW50c0RhdGEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBjb21tZW50Qnk6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVzOiB0cnVlLFxyXG4gIH0sXHJcbiAgY29tbWVudERhdGU6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgICBkZWZhdWx0OkRhdGUubm93XHJcbiAgfSxcclxuICBjb21tZW50Qm9keToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICB0YXNrSWQ6IHtcclxuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgIGRlZmF1bHQ6XCJcIlxyXG4gIH0sXHJcbn0pO1xyXG5cclxubW9uZ29vc2UubW9kZWxzID0ge307XHJcbmNvbnN0IGNvbW1lbnRzID0gbW9uZ29vc2UubW9kZWwoXCJjb21tZW50c1wiLCBDb21tZW50c0RhdGEpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbW1lbnRzO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiQ29tbWVudHNEYXRhIiwiU2NoZW1hIiwiY29tbWVudEJ5IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVzIiwiY29tbWVudERhdGUiLCJEYXRlIiwiZGVmYXVsdCIsIm5vdyIsImNvbW1lbnRCb2R5IiwicmVxdWlyZWQiLCJ0YXNrSWQiLCJUeXBlcyIsIk9iamVjdElkIiwibW9kZWxzIiwiY29tbWVudHMiLCJtb2RlbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./model/CommentsData.js\n");

/***/ }),

/***/ "(api)/./pages/api/comments.js":
/*!*******************************!*\
  !*** ./pages/api/comments.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _database_cloudConn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/cloudConn */ \"(api)/./database/cloudConn.js\");\n/* harmony import */ var _model_CommentsData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/CommentsData */ \"(api)/./model/CommentsData.js\");\n/* harmony import */ var _model_CommentsData__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_CommentsData__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    _database_cloudConn__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"catch\"]((error)=>console.log(error));\n    const client = await _database_cloudConn__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db(\"DevilDatabase\");\n    switch(req.method){\n        case \"POST\":\n            let bodyObject = req.body;\n            bodyObject.taskId = new mongodb__WEBPACK_IMPORTED_MODULE_2__.ObjectId(bodyObject.taskId);\n            const newComment = new (_model_CommentsData__WEBPACK_IMPORTED_MODULE_1___default())(bodyObject);\n            db.collection(\"EveningStarTask\").insertOne(newComment).then(()=>{\n                res.status(200).json(newComment);\n            });\n            break;\n        case \"GET\":\n            let idTask = req.query.task;\n            console.log(idTask);\n            const comments = await db.collection(\"EveningStarTask\").find({\n                taskId: new mongodb__WEBPACK_IMPORTED_MODULE_2__.ObjectId(idTask)\n            }).toArray();\n            console.log(comments);\n            if (comments) {\n                res.status(200).json(comments);\n            }\n            break;\n        case \"DELETE\":\n            const id = req.body;\n            console.log(id);\n            const myquery = {\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_2__.ObjectId(id)\n            };\n            await db.collection(\"MorningStarTask\").deleteOne(myquery).then((res)=>{\n                res.status(200).json(\"deleted\");\n            }).catch((err)=>console.log(err));\n            break;\n        case \"PUT\":\n            const updatedStatus = req.body;\n            const luciferQuery = {\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_2__.ObjectId(req.query.task_id)\n            };\n            await db.collection(\"MorningStarTask\").updateOne(luciferQuery, {\n                $set: {\n                    status: updatedStatus\n                }\n            }).then(()=>{\n                res.status(200).json(\"updated successfully\");\n            }).catch((err)=>{\n                console.log(err);\n            });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBQ047QUFDWjtBQUVuQyxpRUFBZSxPQUFPRyxLQUFLQyxNQUFRO0lBQ2pDSixvRUFBbUIsQ0FBQyxDQUFDTSxRQUFVQyxRQUFRQyxHQUFHLENBQUNGO0lBQzNDLE1BQU1HLFNBQVMsTUFBTVQsMkRBQWFBO0lBQ2xDLE1BQU1VLEtBQUtELE9BQU9DLEVBQUUsQ0FBQztJQUNyQixPQUFRUCxJQUFJUSxNQUFNO1FBQ2hCLEtBQUs7WUFDSCxJQUFJQyxhQUFhVCxJQUFJVSxJQUFJO1lBQ3pCRCxXQUFXRSxNQUFNLEdBQUcsSUFBSVosNkNBQVFBLENBQUNVLFdBQVdFLE1BQU07WUFDbEQsTUFBTUMsYUFBYSxJQUFJZCw0REFBT0EsQ0FBQ1c7WUFDL0JGLEdBQUdNLFVBQVUsQ0FBQyxtQkFDWEMsU0FBUyxDQUFDRixZQUNWRyxJQUFJLENBQUMsSUFBTTtnQkFDVmQsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0w7WUFDdkI7WUFDRixLQUFNO1FBQ1IsS0FBSztZQUNILElBQUlNLFNBQVNsQixJQUFJbUIsS0FBSyxDQUFDQyxJQUFJO1lBQzNCaEIsUUFBUUMsR0FBRyxDQUFDYTtZQUNaLE1BQU1HLFdBQVcsTUFBTWQsR0FDcEJNLFVBQVUsQ0FBQyxtQkFDWFMsSUFBSSxDQUFDO2dCQUFFWCxRQUFRLElBQUlaLDZDQUFRQSxDQUFDbUI7WUFBUSxHQUNwQ0ssT0FBTztZQUNWbkIsUUFBUUMsR0FBRyxDQUFDZ0I7WUFDWixJQUFJQSxVQUFVO2dCQUNacEIsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0k7WUFDdkIsQ0FBQztZQUNELEtBQU07UUFDUixLQUFLO1lBQ0gsTUFBTUcsS0FBS3hCLElBQUlVLElBQUk7WUFDbkJOLFFBQVFDLEdBQUcsQ0FBQ21CO1lBQ1osTUFBTUMsVUFBVTtnQkFBRUMsS0FBSyxJQUFJM0IsNkNBQVFBLENBQUN5QjtZQUFJO1lBQ3hDLE1BQU1qQixHQUNITSxVQUFVLENBQUMsbUJBQ1hjLFNBQVMsQ0FBQ0YsU0FDVlYsSUFBSSxDQUFDLENBQUNkLE1BQVE7Z0JBQ2JBLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDdkIsR0FDQ2YsS0FBSyxDQUFDLENBQUMwQixNQUFReEIsUUFBUUMsR0FBRyxDQUFDdUI7WUFDOUIsS0FBTTtRQUNSLEtBQUs7WUFDSCxNQUFNQyxnQkFBZ0I3QixJQUFJVSxJQUFJO1lBQzlCLE1BQU1vQixlQUFlO2dCQUFFSixLQUFLLElBQUkzQiw2Q0FBUUEsQ0FBQ0MsSUFBSW1CLEtBQUssQ0FBQ1ksT0FBTztZQUFFO1lBQzVELE1BQU14QixHQUNITSxVQUFVLENBQUMsbUJBQ1htQixTQUFTLENBQUNGLGNBQWM7Z0JBQUVHLE1BQU07b0JBQUVqQixRQUFRYTtnQkFBYztZQUFFLEdBQzFEZCxJQUFJLENBQUMsSUFBTTtnQkFDVmQsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUN2QixHQUNDZixLQUFLLENBQUMsQ0FBQzBCLE1BQVE7Z0JBQ2R4QixRQUFRQyxHQUFHLENBQUN1QjtZQUNkO0lBQ047QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwYW5kYS8uL3BhZ2VzL2FwaS9jb21tZW50cy5qcz8yNWE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi9kYXRhYmFzZS9jbG91ZENvbm5cIjtcclxuaW1wb3J0IGNvbW1lbnQgZnJvbSBcIi4uLy4uL21vZGVsL0NvbW1lbnRzRGF0YVwiO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjbGllbnRQcm9taXNlLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiRGV2aWxEYXRhYmFzZVwiKTtcclxuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcclxuICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIGxldCBib2R5T2JqZWN0ID0gcmVxLmJvZHk7XHJcbiAgICAgIGJvZHlPYmplY3QudGFza0lkID0gbmV3IE9iamVjdElkKGJvZHlPYmplY3QudGFza0lkKTtcclxuICAgICAgY29uc3QgbmV3Q29tbWVudCA9IG5ldyBjb21tZW50KGJvZHlPYmplY3QpO1xyXG4gICAgICBkYi5jb2xsZWN0aW9uKFwiRXZlbmluZ1N0YXJUYXNrXCIpXHJcbiAgICAgICAgLmluc2VydE9uZShuZXdDb21tZW50KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5ld0NvbW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgbGV0IGlkVGFzayA9IHJlcS5xdWVyeS50YXNrO1xyXG4gICAgICBjb25zb2xlLmxvZyhpZFRhc2spO1xyXG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJFdmVuaW5nU3RhclRhc2tcIilcclxuICAgICAgICAuZmluZCh7IHRhc2tJZDogbmV3IE9iamVjdElkKGlkVGFzaykgfSlcclxuICAgICAgICAudG9BcnJheSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgIGlmIChjb21tZW50cykge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvbW1lbnRzKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgY29uc3QgaWQgPSByZXEuYm9keTtcclxuICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICBjb25zdCBteXF1ZXJ5ID0geyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfTtcclxuICAgICAgYXdhaXQgZGJcclxuICAgICAgICAuY29sbGVjdGlvbihcIk1vcm5pbmdTdGFyVGFza1wiKVxyXG4gICAgICAgIC5kZWxldGVPbmUobXlxdWVyeSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihcImRlbGV0ZWRcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICBjb25zdCB1cGRhdGVkU3RhdHVzID0gcmVxLmJvZHk7XHJcbiAgICAgIGNvbnN0IGx1Y2lmZXJRdWVyeSA9IHsgX2lkOiBuZXcgT2JqZWN0SWQocmVxLnF1ZXJ5LnRhc2tfaWQpIH07XHJcbiAgICAgIGF3YWl0IGRiXHJcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJNb3JuaW5nU3RhclRhc2tcIilcclxuICAgICAgICAudXBkYXRlT25lKGx1Y2lmZXJRdWVyeSwgeyAkc2V0OiB7IHN0YXR1czogdXBkYXRlZFN0YXR1cyB9IH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXCJ1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJjb21tZW50IiwiT2JqZWN0SWQiLCJyZXEiLCJyZXMiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImRiIiwibWV0aG9kIiwiYm9keU9iamVjdCIsImJvZHkiLCJ0YXNrSWQiLCJuZXdDb21tZW50IiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsInRoZW4iLCJzdGF0dXMiLCJqc29uIiwiaWRUYXNrIiwicXVlcnkiLCJ0YXNrIiwiY29tbWVudHMiLCJmaW5kIiwidG9BcnJheSIsImlkIiwibXlxdWVyeSIsIl9pZCIsImRlbGV0ZU9uZSIsImVyciIsInVwZGF0ZWRTdGF0dXMiLCJsdWNpZmVyUXVlcnkiLCJ0YXNrX2lkIiwidXBkYXRlT25lIiwiJHNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments.js"));
module.exports = __webpack_exports__;

})();