!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["React"],e):"object"==typeof exports?exports["mdx-deck-edges"]=e(require("react")):t["mdx-deck-edges"]=e(t.React)}(window,function(t){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(e,o){e.exports=t},function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n);o(2);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}function l(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,f(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,n["Component"]),function(t,e,o){e&&l(t.prototype,e),o&&l(t,o)}(e,[{key:"render",value:function(){var t=this.props,e=t.bottom,o=t.bottomLeft,n=t.bottomRight,i=t.children,l=t.left,a=t.margin,f=t.right,c=t.top,p=t.topLeft,s=t.topRight,y=u(t,["bottom","bottomLeft","bottomRight","children","left","margin","right","top","topLeft","topRight"]);return r.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"relative"}},r.a.createElement("div",null,i),p?r.a.createElement("div",{style:{position:"absolute",top:a,left:a}},p(y)):null,c?r.a.createElement("div",{style:{position:"absolute",top:a,left:"50%",transform:"translateX(-50%)"}},c(y)):null,s?r.a.createElement("div",{style:{position:"absolute",top:a,right:a}},s(y)):null,f?r.a.createElement("div",{style:{position:"absolute",top:"50%",right:a,transform:"translateY(-50%)"}},f(y)):null,n?r.a.createElement("div",{style:{position:"absolute",bottom:a,right:a}},n(y)):null,e?r.a.createElement("div",{style:{position:"absolute",bottom:a,left:a,transform:"translateX(-50%)"}},e(y)):null,o?r.a.createElement("div",{style:{position:"absolute",bottom:a,left:a}},o(y)):null,l?r.a.createElement("div",{style:{position:"absolute",top:"50%",left:a,transform:"translateY(-50%)"}},l(y)):null)}}]),e}();p.defaultProps={margin:"1em"},e.default=p},function(t,e,o){t.exports=o(3)()},function(t,e,o){"use strict";var n=o(4);function r(){}t.exports=function(){function t(t,e,o,r,i,u){if(u!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var o={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return o.checkPropTypes=r,o.PropTypes=o,o}},function(t,e,o){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])});
//# sourceMappingURL=main.js.map