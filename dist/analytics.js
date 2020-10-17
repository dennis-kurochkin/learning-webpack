/*! For license information please see analytics.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./analytics.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst createAnalytics = () => {\r\n  let counter = 0;\r\n  let isDestroyed = false;\r\n\r\n  const listener = () => counter++;\r\n\r\n  document.addEventListener('click', listener);\r\n\r\n  return {\r\n\r\n    destroy() {\r\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off('click', listener);\r\n      isDestroyed = true; s\r\n    },\r\n\r\n    getClicks() {\r\n      return isDestroyed ? 'Analytics HAHAHAA is destroyed' : counter;\r\n    }\r\n\r\n  }\r\n}\r\n\r\nwindow.analytics = createAnalytics();\n\n//# sourceURL=webpack:///./analytics.js?")}},__webpack_module_cache__={};function __webpack_require__(_){if(__webpack_module_cache__[_])return __webpack_module_cache__[_].exports;var e=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_].call(e.exports,e,e.exports,__webpack_require__),e.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=_=>{var e=_&&_.__esModule?()=>_.default:()=>_;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},(()=>{var _={analytics:0},e=[["./analytics.js","vendors-node_modules_jquery_dist_jquery_js"]],r=()=>{};function n(){for(var r,n=0;n<e.length;n++){for(var a=e[n],c=!0,t=1;t<a.length;t++){var u=a[t];0!==_[u]&&(c=!1)}c&&(e.splice(n--,1),r=__webpack_require__(__webpack_require__.s=a[0]))}return 0===e.length&&(__webpack_require__.x(),__webpack_require__.x=()=>{}),r}__webpack_require__.x=()=>{__webpack_require__.x=()=>{},c=c.slice();for(var _=0;_<c.length;_++)a(c[_]);return(r=n)()};var a=n=>{for(var a,c,[u,o,i,s]=n,p=0,l=[];p<u.length;p++)c=u[p],__webpack_require__.o(_,c)&&_[c]&&l.push(_[c][0]),_[c]=0;for(a in o)__webpack_require__.o(o,a)&&(__webpack_require__.m[a]=o[a]);for(i&&i(__webpack_require__),t(n);l.length;)l.shift()();return s&&e.push.apply(e,s),r()},c=self.webpackChunk=self.webpackChunk||[],t=c.push.bind(c);c.push=a})(),__webpack_require__.x()})();