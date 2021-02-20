// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexP = __webpack_require__(6);

var _indexP2 = _interopRequireDefault(_indexP);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_indexP2.default.el = '#root';
new Vue(_indexP2.default);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yw/code/h5_js_weex/first_weex_demo/src/backup/index-p14-通用事件.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4589c892"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "holder": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "btn": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "backgroundColor": "#0088fb",
    "marginBottom": "20"
  },
  "btn-text": {
    "color": "#ffffff"
  },
  "block": {
    "height": "1500"
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule("modal");

var toast = function toast(message) {
  modal.toast({
    message: message,
    duration: 1
  });
};

exports.default = {
  name: "App",
  components: {},

  data: function data() {
    return {};
  },

  methods: {
    handleClick: function handleClick(e) {
      toast(e.timestamp + " :click");
    },
    handleLongPress: function handleLongPress(e) {
      toast(e.timestamp + " : long click");
    },
    handleAppear: function handleAppear(e, id) {
      toast("\n          " + e.timestamp + "\n          " + id + " appear\n          " + e.direction + "\n        ");
    },
    handleDisappear: function handleDisappear(e, id) {
      toast("\n        " + e.timestamp + "\n        " + id + " disappear\n        " + e.direction + "\n      ");
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["holder"]
  }, [_c('div', {
    staticClass: ["btn"],
    on: {
      "click": _vm.handleClick
    }
  }, [_c('text', {
    staticClass: ["btn-text"]
  }, [_vm._v("click")])]), _c('div', {
    staticClass: ["btn"],
    on: {
      "longpress": _vm.handleLongPress
    }
  }, [_c('text', {
    staticClass: ["btn-text"]
  }, [_vm._v("longpress")])]), _c('div', {
    staticClass: ["btn", "block"],
    on: {
      "appear": function (e) {
        _vm.handleAppear(e, 'block1');
      },
      "disappear": function (e) {
        _vm.handleDisappear(e, 'block1');
      }
    }
  }, [_c('text', {
    staticClass: ["btn-text"]
  }, [_vm._v("block1")])]), _c('div', {
    staticClass: ["btn", "block"],
    on: {
      "appear": function (e) {
        _vm.handleAppear(e, 'block2');
      },
      "disappear": function (e) {
        _vm.handleDisappear(e, 'block2')
      }
    }
  }, [_c('text', {
    attrs: {
      "text": "btn-class"
    }
  }, [_vm._v("block2")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);