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
/******/ 	__webpack_require__.p = "/";
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
/* harmony import */ var _GameFacade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/**
 * Creates an instance Application.
 *
 * @constructor
 * @this {Application}
 *
 */

var Application = /*#__PURE__*/function () {
  function Application() {
    _classCallCheck(this, Application);
  }

  _createClass(Application, [{
    key: "main",
    value: function main() {
      this._createGame();
    }
  }, {
    key: "_createGame",
    value: function _createGame() {
      var calculator = new _GameFacade__WEBPACK_IMPORTED_MODULE_0__["default"]();
      calculator.create();
    }
  }]);

  return Application;
}();

window.onload = function () {
  var application = new Application();
  application.main();
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameFacade; });
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _ControllerView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





/**
 * Creates an instance GameFacade.
 *
 * @constructor
 * @this {GameFacade}
 *
 */

var GameFacade = /*#__PURE__*/function () {
  function GameFacade() {
    _classCallCheck(this, GameFacade);
  }

  _createClass(GameFacade, [{
    key: "create",
    value: function create() {
      var grid = new _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: 'back'
      });
      var game = new _Game__WEBPACK_IMPORTED_MODULE_1__["default"]({
        name: 'game'
      });
      var update = new _Update__WEBPACK_IMPORTED_MODULE_3__["default"](grid, game);
      update.canPlay = true;
      return new _ControllerView__WEBPACK_IMPORTED_MODULE_2__["default"](update);
    }
  }]);

  return GameFacade;
}();



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * Creates an instance Grid.
 *
 * @constructor
 * @this {Grid}
 *
 */

var Grid = /*#__PURE__*/function (_Canvas) {
  _inherits(Grid, _Canvas);

  var _super = _createSuper(Grid);

  function Grid(props) {
    var _this;

    _classCallCheck(this, Grid);

    _this = _super.call(this, props);
    _this._data = _Data__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance();
    _this._size = {
      x: 0,
      y: 0
    };

    _this._initializeEvents();

    _this._setConfiguration();

    return _this;
  }

  _createClass(Grid, [{
    key: "_initializeEvents",
    value: function _initializeEvents() {
      var _this2 = this;

      this._data.on('changeNumberOfCells', function () {
        _this2._setConfiguration();
      });
    }
  }, {
    key: "_setConfiguration",
    value: function _setConfiguration() {
      this.setSize();
      this.setSizeX();
      this.setSizeY();
      this.draw();

      this._data.setCells([]);

      this._data.setBuffCells([]);

      this.fill();
    }
  }, {
    key: "setSizeX",
    value: function setSizeX() {
      this._size.x = this._data.numberOfCells;
    }
  }, {
    key: "setSizeY",
    value: function setSizeY() {
      this._size.y = this._data.numberOfCells;
    }
  }, {
    key: "getSizeX",
    value: function getSizeX() {
      return this._size.x;
    }
  }, {
    key: "getSizeY",
    value: function getSizeY() {
      return this._size.y;
    }
  }, {
    key: "fill",
    value: function fill() {
      var cells = this._data.getCells();

      var buffCells = this._data.getBuffCells();

      for (var i = 0; i < this._size.x; i += 1) {
        cells[i] = [];
        buffCells[i] = [];

        for (var j = 0; j < this._size.y; j += 1) {
          cells[i][j] = false;
          buffCells[i][j] = false;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var canvas = this.getCanvas();
      canvas.translate(0.5, 0.5);
      canvas.beginPath();

      for (var i = 0; i <= this._size.x; i += 1) {
        canvas.moveTo(0, i * this._data.cellSize);
        canvas.lineWidth = 1;
        canvas.lineTo(this.getWidth(), i * this._data.cellSize);
        canvas.strokeStyle = "#c0c0c0";
        canvas.lineWidth = 1;
        canvas.moveTo(i * this._data.cellSize, 0);
        canvas.lineTo(i * this._data.cellSize, this.getHeight());
        canvas.strokeStyle = "#c0c0c0";
      }

      this.getCanvas().stroke();
    }
  }]);

  return Grid;
}(_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/**
 * Creates an instance Canvas.
 *
 * @constructor
 * @this {Canvas}
 *
 */

var Canvas = /*#__PURE__*/function () {
  function Canvas(options) {
    _classCallCheck(this, Canvas);

    this._data = _Data__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance();

    if (options === undefined || options.name === undefined) {
      throw new Error('Canvas tag name not passed');
    }

    this._canvasWrapper = document.getElementById(options.name);
    this._canvas = this._canvasWrapper.getContext('2d');
  }

  _createClass(Canvas, [{
    key: "setSize",
    value: function setSize() {
      var size = this._data.numberOfCells * this._data.cellSize + 1;
      this._canvasWrapper.width = size;
      this._canvasWrapper.height = size;
      this._canvas.width = size;
      this._canvas.height = size;
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      return this._canvas;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this._canvasWrapper.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this._canvasWrapper.height;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._canvas.clearRect(0, 0, this._canvasWrapper.width, this._canvasWrapper.height);
    }
  }]);

  return Canvas;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Data; });
/* harmony import */ var _CustomEventTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Creates an instance Data.
 *
 * @constructor
 * @this {Data}
 *
 */

var Data = /*#__PURE__*/function (_CustomEventTarget) {
  _inherits(Data, _CustomEventTarget);

  var _super = _createSuper(Data);

  function Data() {
    var _this;

    _classCallCheck(this, Data);

    if (Data._instance) {
      return _possibleConstructorReturn(_this, Data._instance);
    }

    _this = _super.call(this);
    Data._instance = _assertThisInitialized(_this);
    _this._cells = [];
    _this._buffCells = [];
    _this._historyCells = [];
    _this._numberOfCells = 25;
    _this._cellSize = 20;
    return _this;
  }

  _createClass(Data, [{
    key: "numberOfCells",
    get: function get() {
      return this._numberOfCells;
    },
    set: function set(value) {
      if (value < 100) {
        this._cellSize = 20;
      } else if (value < 500) {
        this._cellSize = 8;
      } else if (value < 1000) {
        this._cellSize = 4;
      } else {
        this._cellSize = 2;
      }

      this._numberOfCells = value;

      this._fire('changeNumberOfCells', {
        value: value
      });
    }
  }, {
    key: "cellSize",
    get: function get() {
      return this._cellSize;
    },
    set: function set(value) {
      this._cellSize = value;
    }
  }, {
    key: "setCells",
    value: function setCells(cells) {
      this._cells = cells;
    }
  }, {
    key: "setBuffCells",
    value: function setBuffCells(buffCells) {
      this._buffCells = buffCells;
    }
  }, {
    key: "getCells",
    value: function getCells() {
      return this._cells;
    }
  }, {
    key: "getBuffCells",
    value: function getBuffCells() {
      return this._buffCells;
    }
  }, {
    key: "pushToHistory",
    value: function pushToHistory(cells) {
      if (this._historyCells.length >= 3) {
        this._historyCells.pop();
      }

      this._historyCells.push(cells);
    }
  }, {
    key: "compareCellsInHistory",
    value: function compareCellsInHistory(buffCells) {
      for (var i = 0; i < this._historyCells.length; i++) {
        if (JSON.stringify(buffCells) === JSON.stringify(this._historyCells[i])) {
          return true;
        }
      }

      return false;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      return Data._instance || new Data();
    }
  }]);

  return Data;
}(_CustomEventTarget__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates an instance CustomEventTarget.
 *
 * @constructor
 * @this {CustomEventTarget}
 *
 */
function CustomEventTarget() {
  this._events = {};
}

CustomEventTarget.prototype = {
  constructor: CustomEventTarget,
  on: function on(eventType, listener) {
    var events = this._events,
        listeners;

    if (eventType in events) {
      listeners = events[eventType];

      if (listeners.indexOf(listener) === -1) {
        listeners.push(listener);
      }
    } else {
      events[eventType] = [listener];
    }
  },
  off: function off(eventType, listener) {
    var events = this._events,
        listeners;

    if (eventType in events) {
      listeners = events[eventType];
      var pos = listeners.indexOf(listener);

      if (pos !== -1) {
        listeners.splice(pos, 1);
      }
    }
  },
  _fire: function _fire(eventType, detail) {
    var listeners = this._events[eventType];

    if (listeners) {
      var event = {
        type: eventType,
        detail: detail
      };
      listeners.forEach(function (listener) {
        listener.call(this, event);
      }, this);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CustomEventTarget);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * Creates an instance Game.
 *
 * @constructor
 * @this {Game}
 *
 */

var Game = /*#__PURE__*/function (_Canvas) {
  _inherits(Game, _Canvas);

  var _super = _createSuper(Game);

  function Game(props) {
    var _this;

    _classCallCheck(this, Game);

    _this = _super.call(this, props);
    _this._data = _Data__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance();

    _this.setSize();

    _this._initializeEvents();

    return _this;
  }

  _createClass(Game, [{
    key: "_initializeEvents",
    value: function _initializeEvents() {
      var _this2 = this;

      this._data.on('changeNumberOfCells', function () {
        _this2.setSize();
      });
    }
  }]);

  return Game;
}(_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControllerView; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Creates an instance ControllerView.
 *
 * @constructor
 * @this {ControllerView}
 *
 */
var ControllerView = /*#__PURE__*/function () {
  function ControllerView(update) {
    _classCallCheck(this, ControllerView);

    this._update = update;

    this._findElements();

    this._initializeEvents();

    this._initConfigurationViewElements();
  }

  _createClass(ControllerView, [{
    key: "_findElements",
    value: function _findElements() {
      this._resetBtn = document.getElementById('clear');
      this._randBtn = document.getElementById('rand');
      this._stepBtn = document.getElementById('step');
      this._autoplayBtn = document.getElementById('autoplay');
      this._pauseBtn = document.getElementById('pause');
      this._numberOfCellsSelect = document.getElementById('number_of_cells');
    }
  }, {
    key: "_initializeEvents",
    value: function _initializeEvents() {
      this._update.on('change_number_of_cells', this._changeNumberOfCells.bind(this));

      this._update.on('randomFill', this._randomFill.bind(this));

      this._update.on('play', this._playView.bind(this));

      this._update.on('pause', this._pauseView.bind(this));

      this._update.on('reset', this._resetView.bind(this));

      this._update.on('identical', this._identicalView.bind(this));

      this._numberOfCellsSelect.addEventListener('change', this._onChangeNumberOfCells.bind(this));

      this._resetBtn.addEventListener('click', this._onReset.bind(this));

      this._randBtn.addEventListener('click', this._onRandomFill.bind(this));

      this._stepBtn.addEventListener('click', this._onFill.bind(this));

      this._autoplayBtn.addEventListener('click', this._onPlay.bind(this));

      this._pauseBtn.addEventListener('click', this._onPause.bind(this));
    }
  }, {
    key: "_initConfigurationViewElements",
    value: function _initConfigurationViewElements() {
      this._autoplayBtn.disabled = true;
      this._pauseBtn.disabled = true;
      this._resetBtn.disabled = true;
      this._stepBtn.disabled = true;
    }
  }, {
    key: "_changeNumberOfCells",
    value: function _changeNumberOfCells() {
      this._initConfigurationViewElements();
    }
  }, {
    key: "_identicalView",
    value: function _identicalView() {
      this._autoplayBtn.disabled = true;
      this._pauseBtn.disabled = true;
      this._stepBtn.disabled = true;
      this._autoplayBtn.style.opacity = '1';
    }
  }, {
    key: "_randomFill",
    value: function _randomFill() {
      this._autoplayBtn.disabled = false;
      this._resetBtn.disabled = false;
      this._stepBtn.disabled = false;
    }
  }, {
    key: "_playView",
    value: function _playView() {
      this._autoplayBtn.style.opacity = '0.5';
      this._pauseBtn.style.opacity = '1';
      this._numberOfCellsSelect.disabled = true;
      this._pauseBtn.disabled = false;
      this._randBtn.disabled = true;
      this._stepBtn.disabled = true;
    }
  }, {
    key: "_pauseView",
    value: function _pauseView() {
      this._pauseBtn.style.opacity = '0.5';
      this._autoplayBtn.style.opacity = '1';
      this._stepBtn.disabled = false;
    }
  }, {
    key: "_resetView",
    value: function _resetView() {
      this._numberOfCellsSelect.disabled = false;
      this._autoplayBtn.style.opacity = '1';
      this._pauseBtn.style.opacity = '1';
      this._randBtn.disabled = false;

      this._initConfigurationViewElements();
    }
  }, {
    key: "_onChangeNumberOfCells",
    value: function _onChangeNumberOfCells(event) {
      this._update.updateNumberOfCells(parseInt(event.target.value, 10));
    }
  }, {
    key: "_onReset",
    value: function _onReset(event) {
      this._update.reset();
    }
  }, {
    key: "_onRandomFill",
    value: function _onRandomFill(event) {
      this._update.randomFill();
    }
  }, {
    key: "_onFill",
    value: function _onFill(event) {
      this._update.fill();
    }
  }, {
    key: "_onPlay",
    value: function _onPlay(event) {
      this._update.autoplay();
    }
  }, {
    key: "_onPause",
    value: function _onPause(event) {
      this._update.pause();
    }
  }]);

  return ControllerView;
}();



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Update; });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
var _config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(9, 1);
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _CustomEventTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Creates an instance Update.
 *
 * @constructor
 * @this {Update}
 *
 */

var Update = /*#__PURE__*/function (_CustomEventTarget) {
  _inherits(Update, _CustomEventTarget);

  var _super = _createSuper(Update);

  function Update(grid, game) {
    var _this;

    _classCallCheck(this, Update);

    _this = _super.call(this);
    _this._data = _Data__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance();
    _this._grid = grid;
    _this._game = game;
    _this._play = false;
    _this._canPlay = false;
    return _this;
  }

  _createClass(Update, [{
    key: "_cancelRequestAnimFrame",
    value: function _cancelRequestAnimFrame() {
      return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    }
  }, {
    key: "canPlay",
    get: function get() {
      return this._canPlay;
    },
    set: function set(value) {
      this._canPlay = value;
    }
  }, {
    key: "updateNumberOfCells",
    value: function updateNumberOfCells(value) {
      this._data.numberOfCells = value;

      this._fire('change_number_of_cells');
    }
  }, {
    key: "reset",
    value: function reset() {
      this._cancelRequestAnimFrame()(this._requestAnimationFrameId);

      this._play = false;

      this._game.clear();

      this._fire('reset');
    }
  }, {
    key: "fill",
    value: function fill() {
      var cells = this._data.getCells();

      this._game.clear();

      for (var i = 0; i < this._grid.getSizeX(); i += 1) {
        for (var j = 0; j < this._grid.getSizeY(); j += 1) {
          if (cells[i][j]) {
            this._fillCell(i, j);
          }
        }
      }

      this._cells();
    }
  }, {
    key: "randomFill",
    value: function randomFill() {
      var cells = this._data.getCells();

      this._game.clear();

      for (var i = 0; i < this._grid.getSizeX(); i += 1) {
        for (var j = 0; j < this._grid.getSizeY(); j += 1) {
          cells[i][j] = Boolean([true, false][Math.round(Math.random())]);

          if (cells[i][j]) {
            this._fillCell(i, j);
          }
        }
      }

      this._fire('randomFill');
    }
  }, {
    key: "autoplay",
    value: function autoplay() {
      var _this2 = this;

      var play = function play() {
        _this2.fill();

        _this2._requestAnimationFrameId = requestAnimationFrame(play);
      };

      if (this._canPlay) {
        play();
        this._play = true;

        this._fire('play');
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this._cancelRequestAnimFrame()(this._requestAnimationFrameId);

      this._play = false;

      this._fire('pause');
    }
  }, {
    key: "_fillCell",
    value: function _fillCell(x, y) {
      this._game.getCanvas().fillRect(x * this._data.cellSize, y * this._data.cellSize, this._data.cellSize + 1, this._data.cellSize + 1);
    }
  }, {
    key: "_getLivingNeighbors",
    value: function _getLivingNeighbors(x, y) {
      var cells = this._data.getCells();

      var count = 0,
          sx = this._grid.getSizeX(),
          sy = this._grid.getSizeY(); // ?????????????????? ?????????????? ?????????? ???????????? ???????? XY - ?????????????? ?????????? ????????


      if (x === 0 && y === 0) {
        if (cells[sx - 1][sy - 1] === true) {
          count += 1;
        }
      } // ?????????????????? ?????????????? ?????????? ???????????? ???????? XY ???? ???????????????? ?????????????? ?????????? ??????????


      if (x !== 0 && y !== 0) {
        if (cells[x - 1][y - 1] === true) {
          count += 1;
        }
      } // ?????????????????? ?????????????? ?????????? ???????????? ???????? X ?????????? ?????????????? ?? Y ???? ?????????????? ??????????????


      if (x === 0 && y !== 0) {
        if (cells[sx - 1][y - 1] === true) {
          count += 1;
        }
      } // ?????????????????? ?????????????? ???????????? ???????? Y ???? ?????????????? ??????????????


      if (y !== 0) {
        if (cells[x][y - 1] === true) {
          count += 1;
        }
      } // ?????????????????? ?????????????? ???????????? ???????? Y ?????????????? ??????????????


      if (y === 0) {
        if (cells[x][sy - 1] === true) {
          count += 1;
        }
      } // ?????????????????? ?????????????? ???????????? ???????????? ???????? XY - ?????????????? ???????????? ????????


      if (x === sx - 1 && y === 0) {
        if (cells[0][sy - 1] === true) {
          count += 1;
        }
      } //?????????????????? ?????????????? ???????????? ???????????? ???????? XY ???? ???????????????? ?????????????? ???????????? ??????????


      if (x !== sx - 1 && y !== 0) {
        if (cells[x + 1][y - 1] === true) {
          count += 1;
        }
      } // ?????????????????? ?????????????? ???????????? ???????????? ???????? X ???????????? ?????????????? ?? Y ???? ?????????????? ??????????????


      if (x === sx - 1 && y !== 0) {
        if (cells[0][y - 1] === true) {
          count += 1;
        }
      } // ?????????????????? ?????????? ???????????? ???????? X ???? ???????????????? ?????????? ????????????????


      if (x !== 0) {
        if (cells[x - 1][y] === true) {
          count += 1;
        }
      } // ?????????????????? ?????????? ???????????? ???????? X - ?????? ?????????????? ?????????? ????????????


      if (x === 0) {
        if (cells[sx - 1][y] === true) {
          count += 1;
        }
      } // ?????????????????? ???????????? ???????????? ???????? X ???? ???????????????? ???????????? ????????????????


      if (x !== sx - 1) {
        if (cells[x + 1][y] === true) {
          count += 1;
        }
      } // ?????????????????? ???????????? ???????????? ???????? X - ?????? ?????????????? ???????????? ????????????


      if (x === sx - 1) {
        if (cells[0][y] === true) {
          count += 1;
        }
      } // ?????????????????? ???????????? ?????????? ???????????? ???????? XY ???? ???????????? ?????????? ????????


      if (x !== 0 && y !== sy - 1) {
        if (cells[x - 1][y + 1] === true) {
          count += 1;
        }
      } // ?????????????????? ???????????? ?????????? ???????????? ???????? XY ???????????? ?????????? ????????


      if (x === 0 && y === sy - 1) {
        if (cells[sx - 1][0] === true) {
          count += 1;
        }
      } // ?????????????????? ???????????? ?????????? ???????????? ???????? Y ???????????? ?????????????? ?? X ???? ?????????? ??????????????


      if (y === sy - 1 && x !== 0) {
        if (cells[x - 1][0] === true) {
          count += 1;
        }
      } // ?????????????????? ???????????? ???????????? ???????? Y ???? ???????????? ??????????????


      if (y !== sy - 1) {
        if (cells[x][y + 1] === true) {
          count += 1;
        }
      } // ?????????????????? ???????????? ???????????? ???????? Y ???????????? ??????????????


      if (y === sy - 1) {
        if (cells[x][0] === true) {
          count += 1;
        }
      } // ?????????????????? ???????????? ???????????? ???????????? ???????? XY ???? ???????????? ???????????? ????????


      if (x !== sx - 1 && y !== sy - 1) {
        if (cells[x + 1][y + 1] === true) {
          count += 1;
        }
      } // ?????????????????? ???????????? ???????????? ???????????? ???????? ?????? ???????????? ???????????? ????????


      if (x === sx - 1 && y === sy - 1) {
        if (cells[0][0] === true) {
          count += 1;
        }
      } // ?????????????????? ???????????? ???????????? ???????????? ???????? Y ???????????? ?????????????? ?? X ???? ???????????? ??????????????


      if (y === sy - 1 && x !== sx - 1) {
        if (cells[x + 1][0] === true) {
          count += 1;
        }
      }

      return count;
    }
  }, {
    key: "_cells",
    value: function _cells() {
      var cells = this._data.getCells();

      var buffCells = this._data.getBuffCells();

      for (var i = 0; i < this._grid.getSizeX(); i += 1) {
        for (var j = 0; j < this._grid.getSizeY(); j += 1) {
          var result = false;
          var isAlive = cells[i][j];

          var count = this._getLivingNeighbors(i, j);

          if (isAlive && count < 2) {
            result = false;
          }

          if (isAlive && (count === 2 || count === 3)) {
            result = true;
          }

          if (isAlive && count > 3) {
            result = false;
          }

          if (!isAlive && count === 3) {
            result = true;
          }

          buffCells[i][j] = result;
        }
      }

      if (this._data.compareCellsInHistory(buffCells)) {
        this._cancelRequestAnimFrame()(this._requestAnimationFrameId);

        this._play = false;

        this._fire('identical');

        return;
      }

      for (var _i = 0; _i < this._grid.getSizeX(); _i += 1) {
        for (var _j = 0; _j < this._grid.getSizeY(); _j += 1) {
          cells[_i][_j] = buffCells[_i][_j];
        }
      }

      this._data.pushToHistory(cells.slice());
    }
  }]);

  return Update;
}(_CustomEventTarget__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),
/* 9 */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ })
/******/ ]);