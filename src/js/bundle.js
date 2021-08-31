/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var home;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// require('./vendors/jquery.min.js');\r\n__webpack_require__(/*! ../styles/module/ibg/ibg.js */ \"./src/styles/module/ibg/ibg.js\");\r\n__webpack_require__(/*! ../styles/module/nav/nav.js */ \"./src/styles/module/nav/nav.js\");\r\n__webpack_require__(/*! ./vendors/smoothScroll.js */ \"./src/js/vendors/smoothScroll.js\");\r\n// require('./vendors/slick/slick.js');\r\n__webpack_require__(/*! ./vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js */ \"./src/js/vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js\");\r\n// require('./my/readmore.js');\r\n\r\n// phone mask\r\n__webpack_require__(/*! ./settings/masks */ \"./src/js/settings/masks.js\");\r\n\r\n// popup\r\n__webpack_require__(/*! ./settings/popup */ \"./src/js/settings/popup.js\");\r\n\r\n// teachers slider\r\n__webpack_require__(/*! ./settings/teachers-slider.js */ \"./src/js/settings/teachers-slider.js\");\r\n\r\n// students slider\r\n__webpack_require__(/*! ./settings/students-slider */ \"./src/js/settings/students-slider.js\")\r\n\r\n// courses tabs\r\n__webpack_require__(/*! ./settings/courses-tabs */ \"./src/js/settings/courses-tabs.js\");\r\n\r\n// topmenu options during scrolling process\r\n__webpack_require__(/*! ./settings/topmenu */ \"./src/js/settings/topmenu.js\");\n\n//# sourceURL=webpack://home/./src/js/main.js?");

/***/ }),

/***/ "./src/js/settings/courses-tabs.js":
/*!*****************************************!*\
  !*** ./src/js/settings/courses-tabs.js ***!
  \*****************************************/
/***/ (() => {

eval("$(document).ready(function () {\r\n   $('.tab__name').click(function () {\r\n      $('.tab__name').each(function () {\r\n         $(this).removeClass('is-active');\r\n      })\r\n      $(this).addClass('is-active');\r\n\r\n      let tabName = $(this).find('.tab__name-text').text().toLowerCase();\r\n      $('.tab__body').each(function () {\r\n         let attr = $(this).attr('data-name');\r\n         if (attr == tabName) {\r\n            $(this).addClass('is-visible')\r\n            $(this).find('.tab__main').readmore({\r\n               num: 3\r\n            });\r\n         } else {\r\n            $(this).removeClass('is-visible')\r\n         }\r\n      })\r\n   })\r\n\r\n   // courses readmore\r\n   setTimeout(function () {\r\n      $('#courses .tab__main').readmore({\r\n         num: 3\r\n      });\r\n   }, 500)\r\n})\n\n//# sourceURL=webpack://home/./src/js/settings/courses-tabs.js?");

/***/ }),

/***/ "./src/js/settings/masks.js":
/*!**********************************!*\
  !*** ./src/js/settings/masks.js ***!
  \**********************************/
/***/ (() => {

eval("$('input[type=\"tel\"]').each(function () {\r\n   $(this).usPhoneFormat({\r\n      format: '(xxx) xxx-xxxx'\r\n   });\r\n})\n\n//# sourceURL=webpack://home/./src/js/settings/masks.js?");

/***/ }),

/***/ "./src/js/settings/popup.js":
/*!**********************************!*\
  !*** ./src/js/settings/popup.js ***!
  \**********************************/
/***/ (() => {

eval("$('[data-action=\"open-popup\"]').each(function () {\r\n   $(this).click(function () {\r\n\r\n      $('#popup-application').addClass('is-visible');\r\n\r\n      let applicationTo = g_Mode + ' ' + $(this).parents('.tab__body').attr('data-name');\r\n      $('#popup-application .field__select[name=\"application-to\"] option').each(function () {\r\n         if ($(this).attr('value') === applicationTo) {\r\n            $(this).attr('selected', '')\r\n         } else {\r\n            $(this).removeAttr('selected')\r\n         }\r\n      })\r\n   })\r\n})\r\n$('[data-action=\"close-popup\"]').each(function () {\r\n   $(this).click(function () {\r\n      $('#popup-application').removeClass('is-visible');\r\n   })\r\n})\n\n//# sourceURL=webpack://home/./src/js/settings/popup.js?");

/***/ }),

/***/ "./src/js/settings/students-slider.js":
/*!********************************************!*\
  !*** ./src/js/settings/students-slider.js ***!
  \********************************************/
/***/ (() => {

eval("   let sectionId = '#students';\r\n   $(sectionId + ' .slide__texts-slider').on('init', function (event,\r\n      slick) { // adding readmore with some delay to properly calculate the heights of cropped elements\r\n      setTimeout(function () {\r\n         $(sectionId).readmore({\r\n            num: 1\r\n         });\r\n      }, 200)\r\n   });\r\n   $(sectionId + ' .slide__photos-slider').slick({\r\n      arrow: true,\r\n      variableWidth: true,\r\n      centerMode: true,\r\n      mobileFirst: true,\r\n      asNavFor: sectionId + ' .slide__texts-slider',\r\n      appendArrows: $(sectionId + ' .slider__controlls'),\r\n      prevArrow: '<div class=\"slider__arrow-left\"><img src=\"img/icons/slider-arrow-left.svg\" alt=\"\"></div>',\r\n      nextArrow: '<div class=\"slider__arrow-right\"><img src=\"img/icons/slider-arrow-right.svg\" alt=\"\"></div>',\r\n      responsive: [{\r\n         breakpoint: 992,\r\n         settings: {\r\n            centerMode: false,\r\n         }\r\n      }]\r\n   });\r\n\r\n   $(sectionId + ' .slide__texts-slider').slick({\r\n      arrows: false,\r\n      asNavFor: sectionId + ' .slide__photos-slider',\r\n      mobileFirst: true,\r\n      responsive: [{\r\n         breakpoint: 992,\r\n         settings: {\r\n            fade: true,\r\n         }\r\n      }]\r\n   });\n\n//# sourceURL=webpack://home/./src/js/settings/students-slider.js?");

/***/ }),

/***/ "./src/js/settings/teachers-slider.js":
/*!********************************************!*\
  !*** ./src/js/settings/teachers-slider.js ***!
  \********************************************/
/***/ (() => {

eval("\r\n   let sectionId = '#teachers';\r\n   $(sectionId + ' .slide__texts-slider').on('init', function (event,\r\n      slick) { // adding readmore with some delay to properly calculate the heights of cropped elements\r\n      setTimeout(function () {\r\n         $(sectionId).readmore({\r\n            num: 1\r\n         });\r\n      }, 200)\r\n   });\r\n   $(sectionId + ' .slide__photos-slider').slick({\r\n      arrow: true,\r\n      variableWidth: true,\r\n      centerMode: true,\r\n      mobileFirst: true,\r\n      asNavFor: sectionId + ' .slide__texts-slider',\r\n      appendArrows: $(sectionId + ' .slider__controlls'),\r\n      prevArrow: '<div class=\"slider__arrow-left\"><img src=\"img/icons/slider-arrow-left.svg\" alt=\"\"></div>',\r\n      nextArrow: '<div class=\"slider__arrow-right\"><img src=\"img/icons/slider-arrow-right.svg\" alt=\"\"></div>',\r\n      responsive: [{\r\n         breakpoint: 992,\r\n         settings: {\r\n            centerMode: false,\r\n         }\r\n      }]\r\n   });\r\n\r\n   $(sectionId + ' .slide__texts-slider').slick({\r\n      arrows: false,\r\n      asNavFor: sectionId + ' .slide__photos-slider',\r\n      mobileFirst: true,\r\n      responsive: [{\r\n         breakpoint: 992,\r\n         settings: {\r\n            fade: true,\r\n         }\r\n      }]\r\n   });\r\n\n\n//# sourceURL=webpack://home/./src/js/settings/teachers-slider.js?");

/***/ }),

/***/ "./src/js/settings/topmenu.js":
/*!************************************!*\
  !*** ./src/js/settings/topmenu.js ***!
  \************************************/
/***/ (() => {

eval("let prevScrollPos = window.pageYOffset;\r\nwindow.addEventListener('scroll', function () {\r\n   // hiding menu on scroll down\r\n   let currentScrollPos = window.pageYOffset;\r\n   if (prevScrollPos > currentScrollPos) {\r\n      $(\".nav\").removeClass('hide');\r\n   } else {\r\n      $(\".nav\").addClass('hide');\r\n   }\r\n\r\n   prevScrollPos = currentScrollPos;\r\n   // end\r\n\r\n   if (window.pageYOffset > 0) {\r\n      $('.nav').addClass('is-sticked')\r\n   } else {\r\n      if ($('.nav').hasClass('is-sticked')) {\r\n         $('.nav').removeClass('is-sticked')\r\n      }\r\n   }\r\n})\n\n//# sourceURL=webpack://home/./src/js/settings/topmenu.js?");

/***/ }),

/***/ "./src/js/vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js":
/*!**********************************************************************************************!*\
  !*** ./src/js/vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js ***!
  \**********************************************************************************************/
/***/ (() => {

eval("// ==================================================\n// \n// jquery-input-mask-phone-number 1.0.14\n//\n// Licensed (The MIT License)\n// \n// Copyright © Raja Rama Mohan Thavalam <rajaram.tavalam@gmail.com>\n//\n// Last Updated On: 22/Aug/2020 IST 12:05 AM \n//\n// ==================================================\n\n!function(e){e.fn.usPhoneFormat=function(t){var i=e.extend({format:\"xxx-xxx-xxxx\",international:!1},t);\"xxx-xxx-xxxx\"===i.format?(e(this).bind(\"paste\",function(t){t.preventDefault();var i=t.originalEvent&&t.originalEvent.clipboardData.getData(\"Text\");if(i=i.replace(/\\D/g,\"\"),!e.isNumeric(i))return!1;i=i.length>9?String(i.replace(/(\\d{3})(\\d{3})(\\d{4})/,\"$1-$2-$3\")):String(i.replace(/(\\d{3})(?=\\d)/g,\"$1-\")),e(this).val(i),e(this).val(\"\"),i=i.substring(0,12),e(this).val(i)}),e(this).on(\"keydown touchend\",function(t){var i=(t=t||window.event).which||t.keyCode,h=t.ctrlKey||t.metaKey||17===i;if(86==i&&h);else if(67==i&&h);else if(88==i&&h);else if(65==i&&h)e(this).trigger(\"paste\");else if(!(9==i||8==t.which||0==t.which||t.keyCode>=96&&t.keyCode<=105||t.keyCode>=48&&t.keyCode<=57))return!1;var a=this.value.length,n=e(this).val();3==a&&8!=t.which&&0!=t.which?e(this).val(n+\"-\"):7==a&&8!=t.which&&0!=t.which&&e(this).val(n+\"-\"),e(this).attr(\"maxlength\",\"12\")})):\"(xxx) xxx-xxxx\"===i.format&&(e(this).on(\"keydown touchend\",function(t){var i=(t=t||window.event).which||t.keyCode,h=t.ctrlKey||t.metaKey||17===i;if(86==i&&h);else if(67==i&&h);else if(88==i&&h);else if(65==i&&h)e(this).trigger(\"paste\");else if(!(9==i||8==t.which||0==t.which||t.keyCode>=96&&t.keyCode<=105||t.keyCode>=48&&t.keyCode<=57))return!1;var a=this.value.length,n=e(this).val();3==a&&8!=t.which&&0!=t.which?e(this).val(\"(\"+n+\") \"):9==a&&8!=t.which&&0!=t.which&&e(this).val(n+\"-\"),e(this).attr(\"maxlength\",\"14\")}),e(this).bind(\"paste\",function(t){t.preventDefault();var i=t.originalEvent&&t.originalEvent.clipboardData.getData(\"Text\");if(i=i.replace(/\\D/g,\"\"),!e.isNumeric(i))return!1;i.length>9?i=String(i.replace(/(\\d{3})(\\d{3})(\\d{4})/,\"($1) $2-$3\")):i.length>6?i=String(i.replace(/(\\d{3})(\\d{3})(?=\\d)/g,\"($1) $2-\")):i.length>3&&(i=String(i.replace(/(\\d{3})(?=\\d)/g,\"($1) \"))),e(this).val(i),e(this).val(\"\"),i=i.substring(0,14),e(this).val(i)}))}}(jQuery);\n\n//# sourceURL=webpack://home/./src/js/vendors/jQuery-Input-Mask-Phone-Numbers/jquery-input-mask-phone-number.min.js?");

/***/ }),

/***/ "./src/js/vendors/smoothScroll.js":
/*!****************************************!*\
  !*** ./src/js/vendors/smoothScroll.js ***!
  \****************************************/
/***/ (() => {

eval("//smooth scroling for the anchor links\r\n$(document).ready(function(){\r\n\tvar doc_h = $(window).height();\r\n\tvar percents = 10; //distance from element to top after scroll (in percents)\r\n\r\n\t//style for the mobile devices\r\n\t//\r\n\t// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){\r\n\t// \tpercents = 7;\r\n\t// }\r\n\r\n\t$('p[data-target^=\"#\"]').click(function(){\r\n\t\t//Сохраняем значение атрибута href в переменной:\r\n\t\tvar target = $(this).attr('data-target');\r\n\t\tvar scrollCoord = $(target).offset().top - percents*doc_h/100;\r\n\t\t$('html, body').animate({scrollTop: scrollCoord}, 400);\r\n\t\treturn false;\r\n\t});\r\n});\n\n//# sourceURL=webpack://home/./src/js/vendors/smoothScroll.js?");

/***/ }),

/***/ "./src/styles/module/ibg/ibg.js":
/*!**************************************!*\
  !*** ./src/styles/module/ibg/ibg.js ***!
  \**************************************/
/***/ (() => {

eval("$(document).ready(function(){\r\n\tfunction ibg(){\r\n\t\t$.each($('.ibg'), function(index, val) {\r\n\t\t\tif($(this).find('img').length>0){\r\n\t\t\t\t$(this).css('background-image','url(\"'+$(this).find('img').attr('src')+'\")');\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tibg();\r\n});\n\n//# sourceURL=webpack://home/./src/styles/module/ibg/ibg.js?");

/***/ }),

/***/ "./src/styles/module/nav/nav.js":
/*!**************************************!*\
  !*** ./src/styles/module/nav/nav.js ***!
  \**************************************/
/***/ (() => {

eval("$(document).ready(function(){\r\n   function Nav(id){\r\n      this.id = \"#\"+id;\r\n      this.itemsOnBreakpoint = [];\r\n      this.ifExpandMenuHasAClickListener = false;\r\n\r\n\r\n      this.transportItem = (item)=>{ // transports last menu-item to expand menu\r\n         let elNum;\r\n         if(item == 'last'){\r\n            elNum = $(this.id+\" .nav__menu-item\").length - 1;\r\n         }\r\n         else if(typeof item == 'number'){\r\n            elNum = item - 1;\r\n         }\r\n         let elem = $(this.id+\" .nav__menu-item\").eq(elNum).clone().removeClass().addClass('nav__menu-item_expand');\r\n         $(this.id+\" .nav__menu-item\").eq(elNum).remove();\r\n         $(this.id+\" .nav__expand-menu\").append(elem);\r\n      };\r\n\r\n      this.getNumOfItem = (place) => {\r\n         if(place == 'menu'){\r\n            return $(this.id+' .nav__menu-item').length;\r\n         }\r\n      };\r\n\r\n      this.setItemsOnBreakpoint = (num, breakpoint) => {\r\n         this.itemsOnBreakpoint.push({\r\n            items: num,\r\n            breakpoint: breakpoint\r\n         });\r\n      }\r\n\r\n      this.adaptize = () => {\r\n         let defineBreakpoint = () => {// chose a breakpoint from breakpoints list\r\n            let breakpoints = [];\r\n            for(i = 0; i < this.itemsOnBreakpoint.length; i++){\r\n               breakpoints.push(this.itemsOnBreakpoint[i].breakpoint);\r\n            }\r\n\r\n            let diffs = [];\r\n            let winWidth = $(window).width();\r\n            for(i = 0; i < breakpoints.length; i++){\r\n               diffs[i] = breakpoints[i] - winWidth;\r\n            }\r\n\r\n            let maxDiff = diffs[0];\r\n            for(i = 0; i < breakpoints.length; i++){\r\n               if(diffs[i] > maxDiff){\r\n                  maxDiff = diffs[i];\r\n               }\r\n            }\r\n\r\n            let minDiff = maxDiff;\r\n            let iterator = null;\r\n            for(i = 0; i < breakpoints.length; i++){\r\n               if(diffs[i] <= minDiff){\r\n                  if(diffs[i] > 0){\r\n                     minDiff = diffs[i];\r\n                     iterator = i;\r\n                  }\r\n               }\r\n            }\r\n            if(iterator != null){\r\n               return breakpoints[iterator];\r\n            }\r\n            else{\r\n               return null;\r\n            }\r\n         };\r\n\r\n         if(defineBreakpoint() != null){ // if we have a breakpoint\r\n\r\n            let numOfVisible = (breakpoint) => { // returns the number of items that should be visible in the menu\r\n               for(i = 0; i < this.itemsOnBreakpoint.length; i++){\r\n                  if(this.itemsOnBreakpoint[i].breakpoint == breakpoint){\r\n                     return this.itemsOnBreakpoint[i].items;\r\n                  }\r\n               }\r\n            };\r\n   \r\n            let areVisible = numOfVisible(defineBreakpoint()); // how many items should be visible\r\n\r\n            if(areVisible != null){\r\n               this.createExpand();\r\n\r\n               let allItems = this.getNumOfItem('menu');\r\n               let diff = allItems - areVisible; // how many items should be replaced to the expand tab\r\n               for(i = 0; i < diff; i++){\r\n                  this.transportItem(allItems - diff + 1);\r\n               }\r\n            }\r\n         }\r\n\r\n      }\r\n\r\n      this.createExpand = () =>{\r\n         $(this.id+\" .nav__menu\").append(\"<div class='nav__expand'></div>\");\r\n         $(this.id+\" .nav__expand\").append(\"<div class='nav__expand-btn show'></div>\");\r\n         for(let i = 0; i < 3; i++){\r\n            $(this.id+\" .nav__expand-btn\").append('<span></span>');\r\n         }\r\n         $(this.id+\" .nav__expand\").append(\"<div class='nav__expand-menu'></div>\");\r\n\r\n         this.AddClickFunctionality();\r\n      };\r\n\r\n      this.AddClickFunctionality = (elName) =>{ // adding a click functionality to buttons\r\n         let navId = this.id; \r\n         let ifExpandMenuHasAClickListener = this.ifExpandMenuHasAClickListener;\r\n\r\n         $(this.id+\" .nav__btn\").click(function(){\r\n            $(navId).toggleClass('nav_is-open');\r\n            $(navId+\" .hamburger\").toggleClass(\"is-active\");\r\n         });\r\n\r\n         $(this.id+\" .nav__expand-btn\").click(function(){\r\n            // $(navId+\" .nav__expand-menu\").toggleClass('show');\r\n            $(navId+\" .nav__expand-menu\").fadeToggle('fast');\r\n\r\n            if(!ifExpandMenuHasAClickListener){\r\n               $(this.id+\" .nav__menu-item_expand .nav__link\").click(function(){ // this item is not exist when the page is loaded that's why i add this handler after this item apears on the page.\r\n                  $(navId+\" .nav__expand-menu\").fadeToggle('fast');\r\n               })\r\n               ifExpandMenuHasAClickListener = true;\r\n            }\r\n         });\r\n\r\n         $(this.id+\" .nav__menu-item .nav__link\").click(function(){\r\n            $(this.id+\" .nav__menu-item\").each(function(){\r\n               $(this).removeClass('is-active');\r\n            })\r\n            $(this).parent('.nav__menu-item').addClass('is-active');\r\n            $(this).parents('.nav').removeClass('nav_is-open');\r\n            $(this).parents('.nav').find('.hamburger').removeClass(\"is-active\");\r\n         });\r\n\r\n      };\r\n\r\n      this.AddClickFunctionality();\r\n   }\r\n\r\n      let topmenu = new Nav('topmenu');\r\n      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {\r\n         topmenu.setItemsOnBreakpoint(3, 1200);\r\n      } else{\r\n         topmenu.setItemsOnBreakpoint(4, 1200);\r\n      }\r\n      topmenu.setItemsOnBreakpoint(null, 992);\r\n      topmenu.adaptize();\r\n\r\n});\n\n//# sourceURL=webpack://home/./src/styles/module/nav/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	home = __webpack_exports__;
/******/ 	
/******/ })()
;