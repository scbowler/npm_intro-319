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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["addToDom"])('Who needs jQuery? Not meeeeee');
Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["addToDom"])("5 + 8 = ".concat(Object(_add__WEBPACK_IMPORTED_MODULE_1__["default"])(5, 8)));
Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["makeElement"])('p', 'This is a paragraph');
_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].makeElement('h2', 'This is sQuery');

function pauseValue(delay, value) {
  return function (callback) {
    setTimeout(function () {
      return callback(value);
    }, delay);
  };
}

var promise = new _promise__WEBPACK_IMPORTED_MODULE_2__["default"](pauseValue(5000, 'It is done'));
promise.then(function (value) {
  console.log(value);
  return value;
}).then(console.log); // var promise = new Promise(function(resolve, reject){
//     resolve('no really, this is done');
// });
// promise
// .then(function(value){
//     console.log('this is the result of the promise: ', value);
//     return value + ', yes really';
// })
// .then(function(monkey){
//     console.log('this is the 2nd result of the promise: ', monkey);
//     return monkey + ', yes really';
// })
// .catch(function(value){
//     console.log('there was an error, yo: ', value);
//     return value;
// })
// .then(function(monkey){
//     var newPromise = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log('rejecting 3rd promise');
//             reject(new Error(monkey));
//         }, 5000);
//     });
//     console.log('this is the 3rd result of the promise: ', monkey);
//     return newPromise;
// })
// .catch(function(value){
//     console.log('there was another error, yo: ', value);
//     return value;
// });
// function addGreetingToOutput(greeting, outputFunc1, outputFunc2){
//     outputFunc1(greeting);
//     outputFunc2(greeting);
// }
// addGreetingToOutput('Hiya', addToDom, addToDom);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToDom", function() { return addToDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeElement", function() { return makeElement; });
function addToDom(message) {
  var root = document.getElementById('root');
  var h1 = document.createElement('h1');
  h1.innerText = message;
  root.append(h1);
}
function makeElement(type, text) {
  var root = document.getElementById('root');
  var ele = document.createElement(type);
  ele.innerText = text;
  root.append(ele);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  addToDom: addToDom,
  makeElement: makeElement
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function add(x, y) {
  return x + y;
}

/* harmony default export */ __webpack_exports__["default"] = (add);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItsAPromise; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ItsAPromise =
/*#__PURE__*/
function () {
  function ItsAPromise(runner) {
    _classCallCheck(this, ItsAPromise);

    this.callbacks = [];
    this._resolve = this._resolve.bind(this);
    runner(this._resolve);
  }

  _createClass(ItsAPromise, [{
    key: "_resolve",
    value: function _resolve(value) {
      if (this.callbacks.length > 0) {
        var callback = this.callbacks.shift();
        var newValue = callback(value);

        this._resolve(newValue);
      }
    }
  }, {
    key: "then",
    value: function then(callback) {
      this.callbacks.push(callback);
      return this;
    }
  }]);

  return ItsAPromise;
}();



/***/ })
/******/ ]);