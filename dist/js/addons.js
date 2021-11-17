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

/***/ "./src/js/main-addons.js":
/*!*******************************!*\
  !*** ./src/js/main-addons.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendors_smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendors/smoothScroll */ \"./src/js/vendors/smoothScroll.js\");\n// require('./vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js');\r\n\r\n// require('./vendors/smoothScroll.js');\r\n\r\n$(document).ready(_vendors_smoothScroll__WEBPACK_IMPORTED_MODULE_0__.default)\r\n\r\n// phone mask\r\n// require('./settings/masks');\n\n//# sourceURL=webpack://tak/./src/js/main-addons.js?");

/***/ }),

/***/ "./src/js/vendors/smoothScroll.js":
/*!****************************************!*\
  !*** ./src/js/vendors/smoothScroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ smoothScroll)\n/* harmony export */ });\n//smooth scroling for the anchor links\r\nfunction smoothScroll(elem=null){\r\n\tlet doc_h = $(window).height();\r\n\tlet percents = 10; //distance from element to top after scroll (in percents)\r\n\r\n\t//style for the mobile devices\r\n\t//\r\n\t// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){\r\n\t// \tpercents = 7;\r\n\t// }\r\n\tlet selector;\r\n\telem !== null ? selector = elem : selector = 'document';\r\n\r\n\t$(elem).find('[data-target^=\"#\"]').click(function(){\r\n\t\t//Сохраняем значение атрибута href в переменной:\r\n\t\tlet target = $(this).attr('data-target');\r\n\t\tlet scrollCoord;\r\n\t\tif(target === '#'){\r\n\t\t\tscrollCoord = 0;\r\n\t\t}else{\r\n\t\t\tscrollCoord = $(target).offset().top - percents*doc_h/100;\r\n\t\t}\r\n\t\t$('html, body').animate({scrollTop: scrollCoord}, 400);\r\n\t\treturn false;\r\n\t});\r\n\r\n}\n\n//# sourceURL=webpack://tak/./src/js/vendors/smoothScroll.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main-addons.js");
/******/ 	
/******/ })()
;