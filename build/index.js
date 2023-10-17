/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/components/App.tsx":
/*!***********************************!*\
  !*** ./client/components/App.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar App = /** @class */ (function (_super) {\n    __extends(App, _super);\n    function App(props) {\n        var _this = _super.call(this, props) || this;\n        _this.handleClick = _this.handleClick.bind(_this);\n        _this.state = { count: 0 };\n        return _this;\n    }\n    App.prototype.handleClick = function () {\n        this.setState({ count: this.state.count + 1 });\n    };\n    App.prototype.render = function () {\n        return ((0, jsx_runtime_1.jsxs)(\"div\", { children: [(0, jsx_runtime_1.jsxs)(\"h1\", { children: [\"hey \", this.props.name, \"!\"] }), (0, jsx_runtime_1.jsxs)(\"button\", { onClick: this.handleClick, children: [\"Clicks: \", this.state.count] })] }));\n    };\n    return App;\n}(react_1.default.Component));\nexports[\"default\"] = App;\n\n\n//# sourceURL=webpack://boiler-plate-ts-express-react/./client/components/App.tsx?");

/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __importDefault(__webpack_require__(/*! ../client/components/App */ \"./client/components/App.tsx\"));\nvar app = (0, express_1.default)();\nvar port = process.env.PORT || 8080;\napp.use(express_1.default.static(__dirname + '/../build', {\n    cacheControl: false\n}));\n// app.use(\"/static\", express.static(__dirname + '/../static', {\n//     cacheControl: false\n// }));\napp.set(\"port\", port);\napp.set(\"views\", __dirname + \"/views\");\napp.set(\"view engine\", \"ejs\");\napp.use(\"/test\", function (request, response) {\n    response.send(\"Tes t good!\");\n});\napp.get(\"/\", function (request, response) {\n    var data = { name: request.query.name || \"pal\" };\n    var content = server_1.default.renderToString(react_1.default.createElement(App_1.default, data));\n    console.log(\"state!\", data);\n    response.render(\"index\", {\n        content: content,\n        state: JSON.stringify(data)\n    });\n});\napp.listen(app.get('port'), function () {\n    console.log(\"Server running on port \".concat(app.get('port'), \"...\"));\n});\n\n\n//# sourceURL=webpack://boiler-plate-ts-express-react/./server/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.ts");
/******/ 	
/******/ })()
;