/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./analytics.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("const createAnalytics = () => {\r\n  let counter = 0;\r\n  let isDestroyed = false;\r\n\r\n  const listener = () => counter++;\r\n\r\n  document.addEventListener('click', listener);\r\n\r\n  return {\r\n\r\n    destroy() {\r\n      document.removeEventListener('click', listener);\r\n      isDestroyed = true; s\r\n    },\r\n\r\n    getClicks() {\r\n      return isDestroyed ? 'Analytics HAHAHAA is destroyed' : counter;\r\n    }\r\n\r\n  }\r\n}\r\n\r\nwindow.analytics = createAnalytics();\n\n//# sourceURL=webpack:///./analytics.js?");
/******/ })()
;