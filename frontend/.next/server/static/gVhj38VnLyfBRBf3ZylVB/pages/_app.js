module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(6);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/styles/NavStyles.js

var NavStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "x3z0n-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:", ";height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid ", ";width:100%;justify-content:center;font-size:1.5rem;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ var styles_NavStyles = (NavStyles);
// CONCATENATED MODULE: ./components/Nav.js




var Nav_Nav = function Nav() {
  return external_react_default.a.createElement(styles_NavStyles, null, external_react_default.a.createElement(link_default.a, {
    href: "/items"
  }, external_react_default.a.createElement("a", null, "Items")), external_react_default.a.createElement(link_default.a, {
    href: "/sell"
  }, external_react_default.a.createElement("a", null, "Sell")), external_react_default.a.createElement(link_default.a, {
    href: "/signup"
  }, external_react_default.a.createElement("a", null, "Sign Up")), external_react_default.a.createElement(link_default.a, {
    href: "/orders"
  }, external_react_default.a.createElement("a", null, "Orders")), external_react_default.a.createElement(link_default.a, {
    href: "/me"
  }, external_react_default.a.createElement("a", null, "Account")));
};

/* harmony default export */ var components_Nav = (Nav_Nav);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(4);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(5);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// CONCATENATED MODULE: ./components/Header.js







router_default.a.onRouteChangeStart = function () {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = function () {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = function () {
  external_nprogress_default.a.done();
};

var Logo = external_styled_components_default.a.h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1s2mubi-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);a{padding:0.5rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}@media (max-width:1300px){margin:0;text-align:center;}"], function (props) {
  return props.theme.pink;
});
var StyledHeader = external_styled_components_default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1s2mubi-1"
})([".bar{border-bottom:10px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:1300px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid ", ";}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightgrey;
});

var Header_Header = function Header() {
  return external_react_default.a.createElement(StyledHeader, null, external_react_default.a.createElement("div", {
    className: "bar"
  }, external_react_default.a.createElement(Logo, null, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, "Makeup store"))), external_react_default.a.createElement(components_Nav, null)), external_react_default.a.createElement("div", {
    className: "sub-bar"
  }, external_react_default.a.createElement("p", null, "Search")), external_react_default.a.createElement("div", null, "Cart"));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.js



var Meta_Meta = function Meta() {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css"
  }), external_react_default.a.createElement("title", null, "Make up"));
};

/* harmony default export */ var components_Meta = (Meta_Meta);
// CONCATENATED MODULE: ./components/Page.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @font-face {\n        font-family:'radnika_next';\n        src: url('/static/radnikanext-medium-webfont.woff2');\n        format: ('woff2');\n        font-weight: normal;\n        font-style: normal;\n   }\n    html {\n        box-sizing: border-box;\n        font-size: 10px;\n    }\n    *, *:before, *:after {\n        box-sizing: inherit;\n    }\n\n    body {\n        padding: 0;\n        margin: 0;\n        font-size: 1.5rem;\n        line-height: 2;\n        font-family: 'radnika_next';\n    }\n\n    a{\n        text-decoration: none;\n        color: ", "\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var theme = {
  pink: '#FA0994',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12 px 24px 0 rgba(0, 0, 0, 0.9'
};
var StyledPage = external_styled_components_default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-14vv5uc-0"
})(["background:white;color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = external_styled_components_default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-14vv5uc-1"
})(["max-width:", ";margin:0 auto;padding:2rem;"], function (props) {
  return props.theme.maxWidth;
});
Object(external_styled_components_["injectGlobal"])(_templateObject(), theme.black);

var Page_Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
        theme: theme
      }, external_react_default.a.createElement(StyledPage, null, external_react_default.a.createElement(components_Meta, null), external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement(Inner, null, this.props.children, " ")));
    }
  }]);

  return Page;
}(external_react_["Component"]);

/* harmony default export */ var components_Page = (Page_Page);
// CONCATENATED MODULE: ./pages/_app.js


function _app_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app_typeof = function _typeof(obj) { return typeof obj; }; } else { _app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app_typeof(obj); }

function _app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app_createClass(Constructor, protoProps, staticProps) { if (protoProps) _app_defineProperties(Constructor.prototype, protoProps); if (staticProps) _app_defineProperties(Constructor, staticProps); return Constructor; }

function _app_possibleConstructorReturn(self, call) { if (call && (_app_typeof(call) === "object" || typeof call === "function")) { return call; } return _app_assertThisInitialized(self); }

function _app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app_getPrototypeOf(o) { _app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _app_getPrototypeOf(o); }

function _app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _app_setPrototypeOf(subClass, superClass); }

function _app_setPrototypeOf(o, p) { _app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _app_setPrototypeOf(o, p); }




var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app_inherits(MyApp, _App);

  function MyApp() {
    _app_classCallCheck(this, MyApp);

    return _app_possibleConstructorReturn(this, _app_getPrototypeOf(MyApp).apply(this, arguments));
  }

  _app_createClass(MyApp, [{
    key: "render",
    value: function render() {
      var Component = this.props.Component;
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(components_Page, null, external_react_default.a.createElement(Component, null)));
    }
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ })
/******/ ]);