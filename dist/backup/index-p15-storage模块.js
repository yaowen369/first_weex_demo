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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _indexP15Storage = __webpack_require__(16);

var _indexP15Storage2 = _interopRequireDefault(_indexP15Storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_indexP15Storage2.default.el = '#root';
new Vue(_indexP15Storage2.default);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
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
__vue_options__.__file = "/Users/yw/code/h5_js_weex/first_weex_demo/src/backup/index-p15-storage模块.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6fbbf3ae"
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

/***/ 17:
/***/ (function(module, exports) {

module.exports = {
  "group": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "flex-end",
    "borderColor": "#0000FF",
    "borderWidth": "1"
  },
  "text": {
    "width": "130",
    "height": "130",
    "lineHeight": "130",
    "fontSize": "30",
    "textAlign": "center",
    "borderColor": "#FF0000",
    "borderWidth": "1",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "result": {
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  }
}

/***/ }),

/***/ 18:
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

var modal = weex.requireModule("modal");
var storage = weex.requireModule("storage");
var count = 11;
var key = "key-" + count;
var value = "value-" + count;

function showToast(str) {
  modal.toast({ message: str, duration: 3 });
}

exports.default = {
  name: "App",
  components: {},

  data: function data() {
    return {
      state: "--"
    };
  },

  methods: {
    setItem: function setItem() {
      storage.setItem(key, value, function (event) {
        showToast("设置 " + event.result);
      });
    },
    getItem: function getItem() {
      storage.getItem(key, function (event) {
        showToast("获取 " + event.result + "\t 结果为=" + event.data);
      });
    },
    removeItem: function removeItem() {
      StorageManager.removeItem(key, function (event) {
        showToast("移除 " + event.result);
      });
    },
    getAll: function getAll() {}
  }
};

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["list"]
  }, [_c('div', {
    staticClass: ["group", "center"]
  }, [_c('text', {
    staticClass: ["result"]
  }, [_vm._v(" " + _vm._s(_vm.state) + " ")])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.setItem
    }
  }, [_vm._v("Set")]), _c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.getItem
    }
  }, [_vm._v("get")]), _c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.removeItem
    }
  }, [_vm._v("remove")]), _c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.getAll
    }
  }, [_vm._v("all")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });