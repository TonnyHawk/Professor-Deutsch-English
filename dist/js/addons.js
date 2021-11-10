/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main-addons.js":
/*!*******************************!*\
  !*** ./src/js/main-addons.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendors_smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendors/smoothScroll */ \"./src/js/vendors/smoothScroll.js\");\n__webpack_require__(/*! ./vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js */ \"./src/js/vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js\");\r\n\r\n// require('./vendors/smoothScroll.js');\r\n\r\n$(document).ready(_vendors_smoothScroll__WEBPACK_IMPORTED_MODULE_0__.default)\r\n\r\n// phone mask\r\n__webpack_require__(/*! ./settings/masks */ \"./src/js/settings/masks.js\");\n\n//# sourceURL=webpack://tak/./src/js/main-addons.js?");

/***/ }),

/***/ "./src/js/settings/masks.js":
/*!**********************************!*\
  !*** ./src/js/settings/masks.js ***!
  \**********************************/
/***/ (() => {

eval("$('input[type=\"tel\"]').each(function () {\r\n   $(this).usPhoneFormat({\r\n      format: '(xxx) xxx-xxxx'\r\n   });\r\n})\n\n//# sourceURL=webpack://tak/./src/js/settings/masks.js?");

/***/ }),

/***/ "./src/js/vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js":
/*!**********************************************************************************************!*\
  !*** ./src/js/vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js ***!
  \**********************************************************************************************/
/***/ (() => {

eval("// ==================================================\n// \n// jquery-input-mask-phone-number 1.0.14\n//\n// Licensed (The MIT License)\n// \n// Copyright © Raja Rama Mohan Thavalam <rajaram.tavalam@gmail.com>\n//\n// Last Updated On: 22/Aug/2020 IST 12:05 AM \n//\n// ==================================================\n\n!function(e){e.fn.usPhoneFormat=function(t){var i=e.extend({format:\"xxx-xxx-xxxx\",international:!1},t);\"xxx-xxx-xxxx\"===i.format?(e(this).bind(\"paste\",function(t){t.preventDefault();var i=t.originalEvent&&t.originalEvent.clipboardData.getData(\"Text\");if(i=i.replace(/\\D/g,\"\"),!e.isNumeric(i))return!1;i=i.length>9?String(i.replace(/(\\d{3})(\\d{3})(\\d{4})/,\"$1-$2-$3\")):String(i.replace(/(\\d{3})(?=\\d)/g,\"$1-\")),e(this).val(i),e(this).val(\"\"),i=i.substring(0,12),e(this).val(i)}),e(this).on(\"keydown touchend\",function(t){var i=(t=t||window.event).which||t.keyCode,h=t.ctrlKey||t.metaKey||17===i;if(86==i&&h);else if(67==i&&h);else if(88==i&&h);else if(65==i&&h)e(this).trigger(\"paste\");else if(!(9==i||8==t.which||0==t.which||t.keyCode>=96&&t.keyCode<=105||t.keyCode>=48&&t.keyCode<=57))return!1;var a=this.value.length,n=e(this).val();3==a&&8!=t.which&&0!=t.which?e(this).val(n+\"-\"):7==a&&8!=t.which&&0!=t.which&&e(this).val(n+\"-\"),e(this).attr(\"maxlength\",\"12\")})):\"(xxx) xxx-xxxx\"===i.format&&(e(this).on(\"keydown touchend\",function(t){var i=(t=t||window.event).which||t.keyCode,h=t.ctrlKey||t.metaKey||17===i;if(86==i&&h);else if(67==i&&h);else if(88==i&&h);else if(65==i&&h)e(this).trigger(\"paste\");else if(!(9==i||8==t.which||0==t.which||t.keyCode>=96&&t.keyCode<=105||t.keyCode>=48&&t.keyCode<=57))return!1;var a=this.value.length,n=e(this).val();3==a&&8!=t.which&&0!=t.which?e(this).val(\"(\"+n+\") \"):9==a&&8!=t.which&&0!=t.which&&e(this).val(n+\"-\"),e(this).attr(\"maxlength\",\"14\")}),e(this).bind(\"paste\",function(t){t.preventDefault();var i=t.originalEvent&&t.originalEvent.clipboardData.getData(\"Text\");if(i=i.replace(/\\D/g,\"\"),!e.isNumeric(i))return!1;i.length>9?i=String(i.replace(/(\\d{3})(\\d{3})(\\d{4})/,\"($1) $2-$3\")):i.length>6?i=String(i.replace(/(\\d{3})(\\d{3})(?=\\d)/g,\"($1) $2-\")):i.length>3&&(i=String(i.replace(/(\\d{3})(?=\\d)/g,\"($1) \"))),e(this).val(i),e(this).val(\"\"),i=i.substring(0,14),e(this).val(i)}))}}(jQuery);\n\n//# sourceURL=webpack://tak/./src/js/vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js?");

/***/ }),

/***/ "./src/js/vendors/smoothScroll.js":
/*!****************************************!*\
  !*** ./src/js/vendors/smoothScroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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