/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _libs = __webpack_require__(2);

__webpack_require__(1);

exports.default = _libs.$;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId])
      /******/return installedModules[moduleId].exports;
    /******/
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // identity function for calling harmony imports with the correct context
  /******/__webpack_require__.i = function (value) {
    return value;
  };
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 62);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;
  var _$ = true ? window.jQuery : require('jquery'),
      _html2canvas = true ? window.html2canvas : require('html2canvas'),
      _THREE = true ? window.THREE : require('three'),
      _PDFJS = true ? window.PDFJS : require('pdfjs');

  exports.$ = _$;
  exports.html2canvas = _html2canvas;
  exports.THREE = _THREE;
  exports.PDFJS = _PDFJS;

  /***/
},
/* 1 */
/***/function (module, exports) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var BaseMathUtils = function () {
    function BaseMathUtils() {
      _classCallCheck(this, BaseMathUtils);
    }

    BaseMathUtils.sum1 = function sum1(ka, a, kb, b) {
      return [ka * a[0] + kb * b[0]];
    };

    BaseMathUtils.sum2 = function sum2(ka, a, kb, b) {
      return [ka * a[0] + kb * b[0], ka * a[1] + kb * b[1]];
    };

    BaseMathUtils.sum3 = function sum3(ka, a, kb, b) {
      return [ka * a[0] + kb * b[0], ka * a[1] + kb * b[1], ka * a[2] + kb * b[2]];
    };

    BaseMathUtils.sum4 = function sum4(ka, a, kb, b) {
      return [ka * a[0] + kb * b[0], ka * a[1] + kb * b[1], ka * a[2] + kb * b[2], ka * a[3] + kb * b[3]];
    };

    BaseMathUtils.rk4 = function rk4(dy, t, dt, y) {
      var sum = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : BaseMathUtils.sum[y.length - 1];

      var k1 = dy(t, y),
          k2 = dy(t + dt / 2, sum(1, y, dt / 2, k1)),
          k3 = dy(t + dt / 2, sum(1, y, dt / 2, k2)),
          k4 = dy(t + dt, sum(1, y, dt, k3));
      return sum(1, y, dt / 6, sum(1, sum(1, k1, 2, k2), 1, sum(2, k3, 1, k4)));
    };

    BaseMathUtils.extrapolateLinear = function extrapolateLinear(x, y, xi) {
      return y[0] + (y[1] - y[0]) / (x[1] - x[0]) * (xi - x[0]);
    };

    BaseMathUtils.interpolateLinear = function interpolateLinear(x, y, xi) {
      var yi = void 0;
      if (x[0] > x[1]) {
        x = x.reverse();
        y = y.reverse();
      }
      if (xi < x[0]) {
        yi = y[0];
      } else if (xi > x[1]) {
        yi = y[1];
      } else {
        yi = BaseMathUtils.extrapolateLinear(x, y, xi);
      }
      return yi;
    };

    BaseMathUtils.calcScale = function calcScale(srcW, srcH, dstW, dstH) {
      return Math.min(dstW / srcW, dstH / srcH);
    };

    BaseMathUtils.mulM = function mulM(a, b) {
      var r = [];
      for (var i = 0; i < a.length; ++i) {
        r.push([]);
        for (var j = 0; j < b[0].length; ++j) {
          r[i][j] = 0;
          for (var k = 0; k < b.length; ++k) {
            r[i][j] += a[i][k] * b[k][j];
          }
        }
      }
      return r;
    };

    BaseMathUtils.transM = function transM(m) {
      var r = [];
      for (var i = 0; i < m.length; ++i) {
        for (var j = 0; j < m[0].length; ++j) {
          if (!r[j]) {
            r[j] = [];
          }
          r[j][i] = m[i][j];
        }
      }
      return r;
    };

    BaseMathUtils.mat = function mat(data) {
      var s = 0;
      for (var _iterator = data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var x = _ref;

        s += x;
      }
      return s / data.length;
    };

    BaseMathUtils.disp = function disp(data) {
      var M = BaseMathUtils.mat(data);
      var s = 0;
      for (var _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var x = _ref2;

        s += (x - M) * (x - M);
      }
      return s / data.length;
    };

    BaseMathUtils.predict = function predict(data, num) {
      var r = [],
          l = data.length,
          D = BaseMathUtils.disp(data);
      if (D < l && l > 1) {
        var am = [],
            bm = [];
        for (var i = 0; i < l; ++i) {
          am.push([i, 1]);
          bm.push([data[i]]);
        }
        var ta = BaseMathUtils.transM(am),
            a = BaseMathUtils.mulM(ta, am),
            b = BaseMathUtils.mulM(ta, bm),
            d = a[0][0] * a[1][1] - a[1][0] * a[0][1],
            p = [-(a[0][1] * b[1][0] - b[0][0] * a[1][1]) / d, (a[0][0] * b[1][0] - a[1][0] * b[0][0]) / d];
        for (var _i3 = 0; _i3 < num; ++_i3) {
          var v = Math.round(p[0] * (_i3 + l) + p[1]);
          if (r.indexOf(v) === -1) {
            r.push(v);
          }
        }
      }
      return r;
    };

    BaseMathUtils.getUnique = function getUnique() {
      return Math.ceil(1e9 * Math.random());
    };

    BaseMathUtils.setSplinePoints = function setSplinePoints(spline, ps) {
      if (spline.points.length !== ps.x.length) {
        console.warn('setSplinePoints: bad points');
      }
      for (var i = 0; i < spline.points.length; ++i) {
        spline.points[i].set(ps.x[i], ps.y[i], ps.z ? ps.z[i] : 0);
      }
    };

    BaseMathUtils.mapl2L = function mapl2L(ls, len, n, f) {
      var dL = len / (n - 1);
      var L = 0;
      for (var i = 0, d = ls[0]; i < ls.length - 1 && L < len + 0.1 * dL; ++i, d += ls[i]) {
        if (Math.abs(L - d) < Math.abs(L - d - ls[i + 1])) {
          f(i, L);
          L += dL;
        }
      }
      if (L < len + 0.1 * dL) {
        console.warn('mapl2L: ls is not enought');
      }
    };

    BaseMathUtils.det2 = function det2(a, b, c, d) {
      return a * d - b * c;
    };

    BaseMathUtils.solve2Lin = function solve2Lin(a1, b1, a2, b2) {
      var res = void 0;
      var d = BaseMathUtils.det2(a1[0], a1[1], a2[0], a2[1]);
      if (Math.abs(d) > BaseMathUtils.eps) {
        var dx = BaseMathUtils.det2(b1, a1[1], b2, a2[1]),
            dy = BaseMathUtils.det2(a1[0], b1, a2[0], b2);
        res = {
          x: dx / d,
          y: dy / d
        };
      }
      return res;
    };

    BaseMathUtils.isInsidePoly = function isInsidePoly(ps, p) {
      var done = false,
          ct = void 0;
      for (var i = 0; i < ps.length; ++i) {
        if (BaseMathUtils.v2dist(p, ps[i]) < BaseMathUtils.eps) {
          ct = 1;
          done = true;
          break;
        }
      }
      while (!done) {
        done = true;
        ct = 0;
        var np = { x: p.x + Math.random() - 0.5, y: p.y + Math.random() - 0.5 },
            rn = { x: np.x - p.x, y: np.y - p.y },
            a1 = [rn.y, -rn.x],
            b1 = p.x * rn.y - p.y * rn.x;
        for (var _i4 = 0; _i4 < ps.length; ++_i4) {
          var p0 = ps[_i4],
              p1 = ps[(_i4 + 1) % ps.length],
              n = { x: p1.x - p0.x, y: p1.y - p0.y },
              a2 = [n.y, -n.x],
              b2 = p0.x * n.y - p0.y * n.x,
              ip = BaseMathUtils.solve2Lin(a1, b1, a2, b2);
          if (ip) {
            if (BaseMathUtils.v2dist(ip, p0) < BaseMathUtils.eps || BaseMathUtils.v2dist(ip, p1) < BaseMathUtils.eps) {
              done = false;
              break;
            } else if (ip.x > Math.min(p0.x, p1.x) - BaseMathUtils.eps && ip.x < Math.max(p0.x, p1.x) + BaseMathUtils.eps && ip.y > Math.min(p0.y, p1.y) - BaseMathUtils.eps && ip.y < Math.max(p0.y, p1.y) + BaseMathUtils.eps) {
              if (BaseMathUtils.v2dist(ip, p) < BaseMathUtils.eps) {
                ct = 1;
                break;
              } else {
                var tn = { x: ip.x - p.x, y: ip.y - p.y };
                ct += tn.x * rn.x + tn.y * rn.y > 0;
              }
            }
          }
        }
      }
      return ct % 2;
    };

    BaseMathUtils.isInsideConvPoly = function isInsideConvPoly(ps, p) {
      var sg = [0, 0];
      for (var i = 0; i < ps.length; ++i) {
        var p0 = ps[i],
            p1 = ps[(i + 1) % ps.length],
            a = { x: p0.x - p.x, y: p0.y - p.y },
            b = { x: p1.x - p.x, y: p1.y - p.y };
        ++sg[(a.x * b.y - a.y * b.x < 0) + 0];
      }
      return ~sg.indexOf(ps.length);
    };

    BaseMathUtils.v2len = function v2len(v2) {
      return Math.sqrt(v2.x * v2.x + v2.y * v2.y);
    };

    BaseMathUtils.v2dist = function v2dist(v21, v22) {
      return BaseMathUtils.v2len({
        x: v22.x - v21.x,
        y: v22.y - v21.y
      });
    };

    BaseMathUtils.computeSquare = function computeSquare(ps) {
      var a = [];
      var p = 0;
      for (var i = 0; i < ps.length; ++i) {
        a.push(BaseMathUtils.v2dist(ps[i], ps[(i + 1) % ps.length]));
        p += 0.5 * a[i];
      }
      return Math.sqrt(p * (p - a[0]) * (p - a[1]) * (p - a[2]));
    };

    BaseMathUtils.computeInterpCoefs = function computeInterpCoefs(tri, p) {
      var s = BaseMathUtils.computeSquare(tri),
          coefs = [],
          l = tri.length;
      for (var i = 0; i < l; ++i) {
        coefs[i] = BaseMathUtils.computeSquare([p, tri[(i + 1) % l], tri[(i + 2) % l]]) / s;
      }
      return coefs;
    };

    return BaseMathUtils;
  }();

  BaseMathUtils.sum = [BaseMathUtils.sum1, BaseMathUtils.sum2, BaseMathUtils.sum3, BaseMathUtils.sum4];
  BaseMathUtils.eps = 1e-4;
  exports.default = BaseMathUtils;

  /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _BaseMathUtils2 = __webpack_require__(1);

  var _BaseMathUtils3 = _interopRequireDefault(_BaseMathUtils2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var MathUtils = function (_BaseMathUtils) {
    _inherits(MathUtils, _BaseMathUtils);

    function MathUtils() {
      _classCallCheck(this, MathUtils);

      return _possibleConstructorReturn(this, _BaseMathUtils.apply(this, arguments));
    }

    MathUtils.splitSpline = function splitSpline(spline, N) {
      var o = { len: 0, ls: [0] },
          dl = 1 / N;
      for (var i = 0; i <= N; ++i) {
        var p = spline.getPoint(i * dl);
        if (i) {
          var d = MathUtils.v1.distanceTo(p);
          o.len += d;
          o.ls.push(d);
        }
        MathUtils.v1.copy(p);
      }
      return o;
    };

    MathUtils.getLinearIndeces = function getLinearIndeces(spline, n) {
      var del = 5000,
          dDel = 1 / del;
      var ls = [0];
      var l = 0;
      for (var i = 0; i <= del; ++i) {
        var p = spline.getPoint(i * dDel);
        if (i) {
          var d = MathUtils.v1.distanceTo(p);
          l += d;
          ls.push(d);
        }
        MathUtils.v1.copy(p);
      }
      ls.push(1e7);

      var res = [],
          dl = l / (n - 1);
      for (var _i = 0, L = 0, _d = ls[0]; _i < ls.length - 1; ++_i, _d += ls[_i]) {
        if (Math.abs(L - _d) < Math.abs(L - _d - ls[_i + 1])) {
          res.push(_i * dDel);
          L += dl;
        }
      }

      return res;
    };

    MathUtils.refinePoly = function refinePoly(poly, maxDl) {
      var res = [];
      for (var i = 0; i < poly.length; ++i) {
        var p0 = poly[i],
            p1 = poly[(i + 1) % poly.length],
            l = _BaseMathUtils3.default.v2dist(p0, p1),
            n = Math.ceil(l / maxDl),
            dl = l / n;
        res.push(p0);
        for (var j = 1; j < n; ++j) {
          res.push(new _libs.THREE.Vector2(p0.x + j * dl * (p1.x - p0.x) / l, p0.y + j * dl * (p1.y - p0.y) / l));
        }
      }
      return res;
    };

    return MathUtils;
  }(_BaseMathUtils3.default);

  MathUtils.v1 = new _libs.THREE.Vector3();
  exports.default = MathUtils;

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _GraphUtils = __webpack_require__(4);

  var _GraphUtils2 = _interopRequireDefault(_GraphUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ImageBase = function () {
    function ImageBase(context, width, height, color) {
      _classCallCheck(this, ImageBase);

      this.context = context;
      this.wnd = context.wnd;
      this.doc = context.doc;
      this.element = context.element || context.doc.body;
      this.c = context.renderCanvas || ImageBase.renderCanvas;
      this.ctx = context.renderCanvasCtx || ImageBase.renderCanvasCtx;
      this.resW = this.width = width;
      this.resH = this.height = height;
      this.color = color;
    }

    ImageBase.prototype.dispose = function dispose() {};

    ImageBase.prototype.renderBlankPage = function renderBlankPage() {
      this.ctx.beginPath();
      this.ctx.fillStyle = _GraphUtils2.default.color2Rgba(this.color, 1);
      this.ctx.rect(0, 0, this.c.width, this.c.height);
      this.ctx.fill();
    };

    ImageBase.prototype.renderImage = function renderImage(image) {
      this.pushCtx();
      this.ctx.drawImage(image, 0, 0);
      this.popCtx();
    };

    ImageBase.prototype.pushCtx = function pushCtx() {
      if (this.resW != this.c.width) {
        this.c.width = this.resW;
      }
      if (this.resH != this.c.height) {
        this.c.height = this.resH;
      }
      this.ctx.save();
      this.ctx.scale(this.c.width / this.width, this.c.height / this.height);
      return this.ctx;
    };

    ImageBase.prototype.popCtx = function popCtx() {
      this.ctx.restore();
    };

    ImageBase.prototype.renderNotFoundPage = function renderNotFoundPage() {
      this.renderBlankPage();
    };

    ImageBase.prototype.finishRender = function finishRender() {
      if (this.onChange) {
        this.onChange(this.c);
      }
    };

    ImageBase.prototype.finishLoad = function finishLoad() {
      if (this.onLoad) {
        this.onLoad();
      } else {
        this.startRender();
      }
    };

    ImageBase.prototype.getSimulatedDoc = function getSimulatedDoc() {
      return undefined;
    };

    return ImageBase;
  }();

  ImageBase.renderCanvas = (0, _libs.$)('<canvas>')[0];
  ImageBase.renderCanvasCtx = ImageBase.renderCanvas.getContext('2d');
  exports.default = ImageBase;

  /***/
},
/* 4 */
/***/function (module, exports) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var GraphUtils = function () {
    function GraphUtils() {
      _classCallCheck(this, GraphUtils);
    }

    GraphUtils.extrapolateLinear = function extrapolateLinear(x, y, xi) {
      return y[0] + (y[1] - y[0]) / (x[1] - x[0]) * (xi - x[0]);
    };

    GraphUtils.interpolate01 = function interpolate01(y1, y2, t) {
      return GraphUtils.extrapolateLinear([0, 1], [y1, y2], t);
    };

    GraphUtils.getColorBytes = function getColorBytes(color) {
      return [color >> 16 & 0xFF, color >> 8 & 0xFF, color & 0xFF];
    };

    GraphUtils.inverseColor = function inverseColor(color) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var bs = GraphUtils.getColorBytes(color),
          ibs = [0xFF - bs[0], 0xFF - bs[1], 0xFF - bs[2]],
          nbs = [Math.round(GraphUtils.interpolate01(bs[0], ibs[0], t)), Math.round(GraphUtils.interpolate01(bs[1], ibs[1], t)), Math.round(GraphUtils.interpolate01(bs[2], ibs[2], t))];
      return GraphUtils.bytes2Color(nbs);
    };

    GraphUtils.color2Rgba = function color2Rgba(color, a) {
      return GraphUtils.bytes2Rgba(GraphUtils.getColorBytes(color), a);
    };

    GraphUtils.bytes2Rgba = function bytes2Rgba(bs, a) {
      return 'rgba(' + bs.join(',') + ',' + a + ')';
    };

    GraphUtils.bytes2Color = function bytes2Color(bs) {
      return bs[2] | bs[1] << 8 | bs[0] << 16;
    };

    return GraphUtils;
  }();

  exports.default = GraphUtils;

  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _Cache = __webpack_require__(8);

  var _Cache2 = _interopRequireDefault(_Cache);

  var _BlankImage = __webpack_require__(22);

  var _BlankImage2 = _interopRequireDefault(_BlankImage);

  var _StaticImage = __webpack_require__(45);

  var _StaticImage2 = _interopRequireDefault(_StaticImage);

  var _PdfImage = __webpack_require__(41);

  var _PdfImage2 = _interopRequireDefault(_PdfImage);

  var _InteractiveImage = __webpack_require__(35);

  var _InteractiveImage2 = _interopRequireDefault(_InteractiveImage);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ImageFactory = function () {
    function ImageFactory(context, cache) {
      _classCallCheck(this, ImageFactory);

      this.context = context;
      this.cache = cache || new _Cache2.default();
    }

    ImageFactory.prototype.build = function build(info) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var widthTexels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 210;
      var heightTexels = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 297;
      var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0xFFFFFF;
      var injector = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

      var image = void 0;
      switch (info.type) {
        case 'html':
          {
            image = new _InteractiveImage2.default(this.context, widthTexels, heightTexels, color, info.src, this.cache, injector);
            break;
          }
        case 'image':
          {
            image = new _StaticImage2.default(this.context, widthTexels, heightTexels, color, info.src);
            break;
          }
        case 'pdf':
          {
            image = new _PdfImage2.default(this.context, widthTexels, heightTexels, color, info.src, n);
            break;
          }
        case 'blank':
        default:
          {
            image = new _BlankImage2.default(this.context, widthTexels, heightTexels, color);
            break;
          }
      }
      return image;
    };

    return ImageFactory;
  }();

  exports.default = ImageFactory;

  /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _BaseMathUtils = __webpack_require__(1);

  var _BaseMathUtils2 = _interopRequireDefault(_BaseMathUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ThreeUtils = function () {
    function ThreeUtils() {
      _classCallCheck(this, ThreeUtils);
    }

    ThreeUtils.vertices2UVs = function vertices2UVs(vertices, indeces, first, last, converClb) {
      var r = [];
      for (var i = first; i < last; ++i) {
        var vis = [indeces[i].a, indeces[i].b, indeces[i].c];
        for (var j = 0; j < vis.length; ++j) {
          if (!r[vis[j]]) {
            r[vis[j]] = converClb(vertices[vis[j]]);
          }
        }
      }
      return r;
    };

    ThreeUtils.computeFaceVertexUvs = function computeFaceVertexUvs(geometry, faces) {
      var uvs = [ThreeUtils.vertices2UVs(geometry.vertices, geometry.faces, 0, faces[0], function (p) {
        return new THREE.Vector2(p.x, 1 - p.z);
      }), ThreeUtils.vertices2UVs(geometry.vertices, geometry.faces, faces[0], faces[1], function (p) {
        return new THREE.Vector2(1 - p.x, 1 - p.z);
      }), ThreeUtils.vertices2UVs(geometry.vertices, geometry.faces, faces[1], faces[2], function (p) {
        return new THREE.Vector2(p.x, p.y);
      }), ThreeUtils.vertices2UVs(geometry.vertices, geometry.faces, faces[2], faces[3], function (p) {
        return new THREE.Vector2(1 - p.x, p.y);
      }), ThreeUtils.vertices2UVs(geometry.vertices, geometry.faces, faces[3], faces[4], function (p) {
        return new THREE.Vector2(p.z, p.y);
      }), ThreeUtils.vertices2UVs(geometry.vertices, geometry.faces, faces[4], geometry.faces.length, function (p) {
        return new THREE.Vector2(1 - p.z, p.y);
      })];

      var uvsi = 0;
      for (var i = 0; i < geometry.faces.length; ++i) {
        uvsi += faces[uvsi] === i;
        var f = geometry.faces[i];
        f.materialIndex = uvsi;
        geometry.faceVertexUvs[0][i] = [uvs[uvsi][f.a], uvs[uvsi][f.b], uvs[uvsi][f.c]];
      }
    };

    ThreeUtils.createMarker = function createMarker(p, c, size) {
      var marker = new THREE.Mesh(new THREE.SphereGeometry(size), new THREE.MeshPhongMaterial({ color: c }));
      marker.position.set(p.x, p.y, p.z);
      return marker;
    };

    ThreeUtils.findUvTris = function findUvTris(geometry, ps, first, last) {
      var res = [];
      for (var _iterator = ps, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var p = _ref;

        var found = false;
        for (var i = first; i < last && !found; ++i) {
          var tri = geometry.faceVertexUvs[0][i];
          if (_BaseMathUtils2.default.isInsideConvPoly(tri, p)) {
            res.push({
              coefs: _BaseMathUtils2.default.computeInterpCoefs(tri, p),
              i: i
            });
            found = true;
          }
        }
        if (!found) {
          console.error('Bad point');
          res.push(undefined);
        }
      }
      return res;
    };

    ThreeUtils.findInternalVertices = function findInternalVertices(geometry, ps, first, last) {
      var res = {};
      for (var i = first; i < last; ++i) {
        var tri = geometry.faceVertexUvs[0][i],
            f = geometry.faces[i],
            vs = [f.a, f.b, f.c];
        for (var j = 0; j < tri.length; ++j) {
          if (res[vs[j]] === undefined && _BaseMathUtils2.default.isInsidePoly(ps, tri[j])) {
            res[vs[j]] = {
              p: tri[j],
              i: vs[j],
              n: f.vertexNormals[j]
            };
          }
        }
      }
      return Object.values(res);
    };

    return ThreeUtils;
  }();

  exports.default = ThreeUtils;

  /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _book = __webpack_require__(16);

  var _BaseMathUtils = __webpack_require__(1);

  var _BaseMathUtils2 = _interopRequireDefault(_BaseMathUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var BookPropsBuilder = function () {
    function BookPropsBuilder(onReady) {
      _classCallCheck(this, BookPropsBuilder);

      this.onReady = onReady;
      this.defaults = (0, _book.props)();
    }

    BookPropsBuilder.prototype.dispose = function dispose() {};

    BookPropsBuilder.prototype.calcSize = function calcSize(width, height) {
      var scale = _BaseMathUtils2.default.calcScale(width, height, this.defaults.width, this.defaults.height);
      return {
        width: scale * width,
        height: scale * height
      };
    };

    BookPropsBuilder.prototype.calcTexels = function calcTexels(width, height) {
      var sheet = this.defaults.sheet,
          scale = _BaseMathUtils2.default.calcScale(width, height, sheet.widthTexels, sheet.heightTexels);
      return {
        widthTexels: scale * width,
        heightTexels: scale * height
      };
    };

    BookPropsBuilder.prototype.calcProps = function calcProps(width, height) {
      this.props = _extends({}, this.defaults, this.calcSize(width, height), {
        sheet: _extends({}, this.defaults.sheet, this.calcTexels(width, height)),
        cover: _extends({}, this.defaults.cover),
        page: _extends({}, this.defaults.page)
      });
    };

    BookPropsBuilder.prototype.calcSheets = function calcSheets(pages) {
      return this.sheets = Math.ceil(Math.max(0, pages - 4) / 2);
    };

    BookPropsBuilder.prototype.getSheets = function getSheets() {
      return this.sheets;
    };

    BookPropsBuilder.prototype.getProps = function getProps() {
      return this.props;
    };

    BookPropsBuilder.prototype.getPageCallback = function getPageCallback() {
      return this.binds.pageCallback;
    };

    BookPropsBuilder.prototype.ready = function ready() {
      if (this.onReady) {
        this.onReady(this.getProps(), this.getSheets(), this.getPageCallback());
      }
    };

    return BookPropsBuilder;
  }();

  exports.default = BookPropsBuilder;

  /***/
},
/* 8 */
/***/function (module, exports) {

  "use strict";
  "use strict";

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Cache = function () {
    function Cache() {
      var maxSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Infinity;
      var sizeof = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Cache.countSizeof;

      _classCallCheck(this, Cache);

      this.os = new Map();
      this.sizeof = sizeof;
      this.maxSize = maxSize;
      this.size = 0;
    }

    Cache.prototype.forEach = function forEach(clb) {
      this.os.forEach(function (v, k) {
        return clb([k, v]);
      });
    };

    Cache.countSizeof = function countSizeof(value) {
      return 1;
    };

    Cache.prototype.freeSpace = function freeSpace() {
      var arr = [];
      for (var _iterator = this.os, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var p = _ref;

        arr.push({ timestamp: p[1].timestamp, key: p[0] });
      }
      arr.sort(function (a, b) {
        return a.timestamp - b.timestamp;
      });
      for (var i = 0; i < arr.length && this.size > 3 * this.maxSize / 4; ++i) {
        var k = arr[i].key,
            v = this.os.get(k);
        if (!v.locked || !v.locked(k)) {
          this.size -= this.sizeof(v);
          if (v.dispose) {
            v.dispose();
          }
          this.os.delete(k);
        }
      }
    };

    Cache.prototype.dispose = function dispose() {
      var arr = [];
      for (var _iterator2 = this.os, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var p = _ref2;

        arr.push({ v: p[1], k: p[0] });
      }
      for (var _iterator3 = arr, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var o = _ref3;

        if (o.v.dispose) {
          o.v.dispose();
        }
        this.os.delete(o.k);
      }
    };

    Cache.recursionSizeof = function recursionSizeof(value) {
      var size = 0;
      if (value) {
        ++size;
        var len = value.length;
        if (len === undefined) {
          for (var p in value) {
            if (value.hasOwnProperty(p)) {
              size += Cache.recursionSizeof(value[p]);
            }
          }
        } else {
          size += len;
        }
      }
      return size;
    };

    Cache.prototype.getTimestamp = function getTimestamp() {
      return Date.now();
    };

    Cache.prototype.get = function get(key) {
      var value = this.os.get(key);
      if (value) {
        value.timestamp = this.getTimestamp();
      }
      return value;
    };

    Cache.prototype.put = function put(key, value) {
      value.timestamp = this.getTimestamp();
      this.os.set(key, value);
      this.size += this.sizeof(value);
      if (this.size > this.maxSize) {
        this.freeSpace();
      }
      return value;
    };

    return Cache;
  }();

  exports.default = Cache;

  /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Controller = function (_THREE$EventDispatche) {
    _inherits(Controller, _THREE$EventDispatche);

    function Controller() {
      _classCallCheck(this, Controller);

      return _possibleConstructorReturn(this, _THREE$EventDispatche.apply(this, arguments));
    }

    Controller.prototype.handleDefault = function handleDefault(id, e, data) {
      //console.log(id+'-'+e.type+'-'+data);
    };

    Controller.prototype.dispatchAsync = function dispatchAsync(e) {
      var _this2 = this;

      Promise.resolve().then(function () {
        return _this2.dispatchEvent(e);
      });
    };

    Controller.prototype.dispose = function dispose() {};

    return Controller;
  }(_libs.THREE.EventDispatcher);

  exports.default = Controller;

  /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  _libs.PDFJS.workerSrc = (window.PDFJS_LOCALE ? PDFJS_LOCALE : { "pdfJsWorker": "js/pdf.worker.js" }).pdfJsWorker;

  var Pdf = function () {
    function Pdf(src, loadingProgress) {
      var _this = this;

      _classCallCheck(this, Pdf);

      this.src = src;
      this.handlerQueue = [];
      this.progresData = { loaded: -1, total: 1 };
      this.loadingProgress = loadingProgress;

      _libs.PDFJS.getDocument(src, null, null, function (data) {
        if (_this.loadingProgress) {
          var cur = Math.floor(100 * data.loaded / data.total),
              old = Math.floor(100 * _this.progresData.loaded / _this.progresData.total);
          if (cur !== old) {
            cur = isNaN(cur) ? 0 : cur;
            cur = cur > 100 ? 100 : cur;
            _this.loadingProgress(cur);
          }
        }
        _this.progresData = data;
      }).then(function (handler) {
        _this.handler = handler;
        var done = Promise.resolve(handler);

        var _loop = function _loop() {
          if (_isArray) {
            if (_i >= _iterator.length) return 'break';
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) return 'break';
            _ref = _i.value;
          }

          var clb = _ref;

          done = done.then(function (handler) {
            clb(handler);
            return handler;
          });
        };

        for (var _iterator = _this.handlerQueue.reverse(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          var _ret = _loop();

          if (_ret === 'break') break;
        }
      });
    }

    Pdf.prototype.dispose = function dispose() {
      this.handlerQueue.splice(0, this.handlerQueue.length);
      delete this.handler;
    };

    Pdf.prototype.setLoadingProgressClb = function setLoadingProgressClb(clb) {
      this.loadingProgress = clb;
    };

    Pdf.prototype.getPagesNum = function getPagesNum() {
      return this.handler ? this.handler.numPages : undefined;
    };

    Pdf.getPageSize = function getPageSize(page) {
      return {
        width: page.view[2] - page.view[0],
        height: page.view[3] - page.view[1]
      };
    };

    Pdf.prototype.getHandler = function getHandler(clb) {
      if (this.handler) {
        clb(this.handler);
      } else {
        this.handlerQueue.push(clb);
      }
    };

    return Pdf;
  }();

  exports.default = Pdf;

  /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _libs = __webpack_require__(0);

  var _sheetBlock = __webpack_require__(15);

  var _sheetBlock2 = _interopRequireDefault(_sheetBlock);

  var _MathUtils = __webpack_require__(2);

  var _MathUtils2 = _interopRequireDefault(_MathUtils);

  var _ThreeUtils = __webpack_require__(6);

  var _ThreeUtils2 = _interopRequireDefault(_ThreeUtils);

  var _ThreeMarkup = __webpack_require__(47);

  var _ThreeMarkup2 = _interopRequireDefault(_ThreeMarkup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SheetBlock = function () {
    function SheetBlock(visual, p, first, last) {
      var angle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      var _this = this;

      var state = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'closed';
      var height = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

      _classCallCheck(this, SheetBlock);

      this.visual = visual;
      this.p = _extends({}, p, {
        first: first,
        last: last
      });
      var props = this.getProps();

      var loadedPoints = this.loadPoints();
      Object.keys(loadedPoints).map(function (k) {
        _this[k] = loadedPoints[k][props.shape] || loadedPoints[k][0];
      });

      this.pSpline = new _libs.THREE.Spline([]);
      for (var i = 0; i < this.interpolationPoints.x[0].length; ++i) {
        this.pSpline.points.push(new _libs.THREE.Vector3());
      }

      this.iSpline = new _libs.THREE.Spline([]);
      for (var _i = 0; _i < _sheetBlock2.default.resX; ++_i) {
        this.iSpline.points.push(new _libs.THREE.Vector3());
      }

      this.aSplines = [];

      //this.three = new THREE.Object3D();

      this.geometry = _sheetBlock2.default.geometry.clone();

      this.p.sideFaces = [{
        first: 0,
        last: _sheetBlock2.default.faces[0]
      }, {
        first: _sheetBlock2.default.faces[0],
        last: _sheetBlock2.default.faces[1]
      }];

      this.sideTexture = new _libs.THREE.Texture();
      this.sideTexture.wrapT = _libs.THREE.RepeatWrapping;
      this.sideTexture.repeat.set(0, last - first);
      this.sideTexture.image = props.sideTexture;
      this.sideTexture.needsUpdate = true;

      this.materials = [new _libs.THREE.MeshPhongMaterial(), new _libs.THREE.MeshPhongMaterial(), new _libs.THREE.MeshPhongMaterial({ map: this.sideTexture }), new _libs.THREE.MeshPhongMaterial({ map: this.sideTexture }), new _libs.THREE.MeshPhongMaterial({ map: this.sideTexture }), new _libs.THREE.MeshPhongMaterial({ map: this.sideTexture })];

      this.p.setTexture(this.materials[0], 2 * first);
      this.p.setTexture(this.materials[1], 2 * last - 1);

      this.mesh = new _libs.THREE.Mesh(this.geometry, new _libs.THREE.MeshFaceMaterial(this.materials));
      this.mesh.castShadow = false;
      this.mesh.receiveShadow = false;
      // this.mesh.frustumCulled = true;

      //this.three.add(this.mesh);
      this.three = this.mesh;
      this.three.userData.self = this;

      this.markers = [];
      if (this.p.marker.use) {
        for (var _i2 = 0, l = this.geometry.vertices.length; _i2 < l; ++_i2) {
          var marker = _ThreeUtils2.default.createMarker(this.geometry.vertices[_i2], _i2 < l / 2 ? 0xFF0000 : 0x00FF00, this.p.marker.size);
          this.markers.push({
            marker: marker,
            vertex: _i2
          });
          this.three.add(marker);
        }
      }

      this.corner = {
        use: true,
        height: 0,
        maxDistance: 0,
        points: [],
        OZ: new _libs.THREE.Vector3(0, 0, 1),
        axis: new _libs.THREE.Vector3()
      };
      this.set(0, 'closed', height, first, last); // calculate corner points

      this.set(angle, state, height, first, last); // init position

      // if(!SheetBlock.markup) {
      //   SheetBlock.markup=true;
      //   this.markup = new ThreeMarkup(this, 0, [{
      //     x: 0,
      //     y: 0,
      //   }, {
      //     x: 0.5,
      //     y: 1
      //   }, {
      //     x: 1,
      //     y: 0
      //   }].map((p)=>new THREE.Vector2(p.x, p.y)), {});
      // }
    }

    SheetBlock.prototype.dispose = function dispose() {
      for (var _iterator = this.materials, _isArray = Array.isArray(_iterator), _i3 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i3 >= _iterator.length) break;
          _ref = _iterator[_i3++];
        } else {
          _i3 = _iterator.next();
          if (_i3.done) break;
          _ref = _i3.value;
        }

        var m = _ref;

        if (m.map) {
          m.map = null;
          m.needsUpdate = true;
        }
        m.dispose();
      }
      delete this.materials;
      this.geometry.dispose();
    };

    SheetBlock.prototype.getSize = function getSize() {
      return this.p.last - this.p.first;
    };

    SheetBlock.prototype.getProps = function getProps() {
      return _extends({}, this.p.page, {
        sheets: this.p.sheets
      });
    };

    SheetBlock.prototype.getInterpolationPoints = function getInterpolationPoints(inds, mod) {
      var ps = { x: [], y: [] },
          K = this.getProps().wave;
      for (var _iterator2 = inds, _isArray2 = Array.isArray(_iterator2), _i4 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i4 >= _iterator2.length) break;
          _ref2 = _iterator2[_i4++];
        } else {
          _i4 = _iterator2.next();
          if (_i4.done) break;
          _ref2 = _i4.value;
        }

        var i = _ref2;

        ps.x.push([].concat(this.interpolationPoints.x[i]));
        ps.y.push(~mod.indexOf(i) ? this.interpolationPoints.y[i].map(function (n) {
          return K * n;
        }) : [].concat(this.interpolationPoints.y[i]));
      }
      return ps;
    };

    SheetBlock.prototype.set = function set(angle) {
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.corner.height;
      var first = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.p.first;
      var last = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.p.last;

      var PI = Math.PI;
      this.state = state;
      var closedAngle = void 0,
          binderTurn = void 0;
      if ((typeof angle === 'undefined' ? 'undefined' : _typeof(angle)) === 'object') {
        this.angle = angle.openedAngle;
        closedAngle = angle.closedAngle;
        binderTurn = angle.binderTurn > PI / 2 ? PI - angle.binderTurn : angle.binderTurn;
      } else {
        this.angle = angle;
      }
      this.corner.height = height;
      if (this.p.first !== first || this.p.last !== last) {
        this.sideTexture.repeat.set(0, last - first);
        this.sideTexture.needsUpdate = true;
        if (this.p.first !== first) {
          this.p.setTexture(this.materials[0], 2 * first);
        }
        if (this.p.last !== last) {
          this.p.setTexture(this.materials[1], 2 * last - 1);
        }
      }
      this.p.first = first;
      this.p.last = last;
      var points = void 0;
      var props = this.getProps();
      if (this.state === 'closed') {
        points = this.getInterpolationPoints(this.closedInterpolationIndeces, this.closedInterpolationIndeces);
      } else if (this.state === 'opened') {
        if (closedAngle !== undefined && Math.abs(closedAngle - PI / 2) > 1e-2) {
          points = this.getInterpolationPoints(this.flatInterpolationIndeces, []);
          var ps = this.getPointsAtAngle(this.getInterpolationPoints(this.closedInterpolationIndeces, this.closedInterpolationIndeces), closedAngle > PI / 2 ? PI - closedAngle : closedAngle);
          points.x = [ps.x].concat(points.x);
          points.y = [ps.y].concat(points.y);
          // console.log(ps);
        } else {
          points = this.getInterpolationPoints(this.openedInterpolationIndeces, this.closedInterpolationIndeces);
        }
      }
      var hl = void 0,
          hr = void 0,
          offset = 0.5 * props.sheets * props.depth;
      if (this.state === 'closed') {
        offset -= 7e-6 * this.p.scale;
      }
      if (this.angle <= PI / 2) {
        hl = (props.sheets - first) * props.depth;
        hr = (props.sheets - last) * props.depth;
      } else {
        hl = first * props.depth;
        hr = last * props.depth;
      }

      var inAngle = this.angle > PI / 2 ? PI - this.angle : this.angle,
          hAngle = this.state === 'closed' ? inAngle : binderTurn === undefined ? PI / 2 : binderTurn;

      var _getPointsAtAngleAndH = this.getPointsAtAngleAndHs(points, inAngle, hAngle, [hl / props.width, hr / props.width]),
          left = _getPointsAtAngleAndH[0],
          right = _getPointsAtAngleAndH[1];

      if (this.angle > PI / 2) {
        this.inverse(left);
        this.inverse(right);
        offset = -offset;
      }
      this.setPoints(left, right, offset);
    };

    SheetBlock.prototype.setPoints = function setPoints(left, right, offset) {
      var _this2 = this;

      var p = this.getProps();
      var i = 0;

      var ys = [right, left];
      for (var y = 0; y < _sheetBlock2.default.resY; ++y) {
        for (var z = 0; z < _sheetBlock2.default.resZ; ++z) {
          for (var x = 0; x < _sheetBlock2.default.resX; ++x) {
            this.geometry.vertices[i++].set(ys[y].x[x] * p.width + offset, ys[y].y[x] * p.width, z * p.height / (_sheetBlock2.default.resZ - 1) - 0.5 * p.height);
          }
        }
      }
      if (i !== this.geometry.vertices.length) {
        console.warn('setPoints: bad mapping!');
      }

      if (this.corner.use && !this.corner.points.length) {
        var plane = new _libs.THREE.Plane(),
            normal = plane.normal,
            planeOffset = (1 - this.getProps().flexibleCorner) * Math.min(p.width, p.height),
            proj = new _libs.THREE.Vector3();
        plane.setFromNormalAndCoplanarPoint(new _libs.THREE.Vector3(-1, 0, -1).normalize(), new _libs.THREE.Vector3(planeOffset + offset, 0, 0.5 * p.height));
        for (var _i5 = 0, l = this.geometry.vertices.length; _i5 < l; ++_i5) {
          plane.projectPoint(this.geometry.vertices[_i5], proj);
          proj.sub(this.geometry.vertices[_i5]);
          if (proj.x * normal.x + proj.y * normal.y + proj.z * normal.z > 0) {
            var d = proj.length() / planeOffset;
            this.corner.maxDistance = Math.max(this.corner.maxDistance, d);
            this.corner.points.push({ vertex: _i5, distance: d });
          }
        }
      }

      if (this.corner.use && Math.abs(this.corner.height) > 1e-3) {
        var d2Angle = function d2Angle(d) {
          return p.cornerDeviation * _this2.corner.height / (1 + Math.exp(-p.bending * (d - 0.5 * _this2.corner.maxDistance)));
        };
        this.corner.axis.set(-1, 0, 1).normalize();
        this.corner.axis.applyAxisAngle(this.corner.OZ, this.angle);
        for (var _iterator3 = this.corner.points, _isArray3 = Array.isArray(_iterator3), _i6 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i6 >= _iterator3.length) break;
            _ref3 = _iterator3[_i6++];
          } else {
            _i6 = _iterator3.next();
            if (_i6.done) break;
            _ref3 = _i6.value;
          }

          var point = _ref3;

          this.geometry.vertices[point.vertex].applyAxisAngle(this.corner.axis, d2Angle(point.distance));
        }
      }

      for (var _iterator4 = this.markers, _isArray4 = Array.isArray(_iterator4), _i7 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i7 >= _iterator4.length) break;
          _ref4 = _iterator4[_i7++];
        } else {
          _i7 = _iterator4.next();
          if (_i7.done) break;
          _ref4 = _i7.value;
        }

        var m = _ref4;

        m.marker.position.copy(this.geometry.vertices[m.vertex]);
      }

      this.geometry.computeVertexNormals();
      //this.geometry.computeFaceNormals();
      this.geometry.computeBoundingSphere();
      //this.geometry.computeBoundingBox();
      this.geometry.verticesNeedUpdate = true;

      if (this.markup) {
        this.markup.computeVertices();
      }
    };

    SheetBlock.prototype.inverse = function inverse(ps) {
      for (var i = 0; i < ps.x.length; ++i) {
        ps.x[i] = -ps.x[i];
      }
      return ps;
    };

    SheetBlock.prototype.getPointsAtHs = function getPointsAtHs(ps, angle, hs) {
      var _this3 = this;

      var N = 1000;
      _MathUtils2.default.setSplinePoints(this.pSpline, ps);
      var bl = _MathUtils2.default.splitSpline(this.pSpline, N),
          r = [];
      {
        var p1 = _extends({}, this.pSpline.getPoint((N - 1) / N)),
            p2 = _extends({}, this.pSpline.getPoint(1)),
            dp = { x: p2.x - p1.x, y: p2.y - p1.y },
            ln = Math.sqrt(dp.x * dp.x + dp.y * dp.y),
            sp = this.pSpline.points[this.pSpline.points.length - 1];
        sp.set(sp.x + 0.1 * dp.x / ln, sp.y + 0.1 * dp.y / ln, 0);
        bl = _MathUtils2.default.splitSpline(this.pSpline, N);
      }
      bl.ls.push(1e7);
      _MathUtils2.default.mapl2L(bl.ls, bl.len, _sheetBlock2.default.resX, function (i) {
        for (var j = 0; j < hs.length; ++j) {
          if (!i) {
            r[j] = { x: [-hs[j] * Math.sin(angle)], y: [hs[j] * Math.cos(angle)] };
          } else {
            var p0 = _extends({}, _this3.pSpline.getPoint((i - 1) / N)),
                _p = _this3.pSpline.getPoint(i / N),
                x = -(_p.y - p0.y),
                y = _p.x - p0.x,
                l = Math.sqrt(x * x + y * y);
            r[j].x.push(_p.x + x / l * hs[j]);
            r[j].y.push(_p.y + y / l * hs[j]);
          }
        }
      });

      var nps = [];

      var _loop = function _loop(j) {
        nps[j] = { x: [], y: [] };
        _MathUtils2.default.setSplinePoints(_this3.iSpline, r[j]);
        var l = _MathUtils2.default.splitSpline(_this3.iSpline, N);
        l.ls.push(1e7);
        _MathUtils2.default.mapl2L(l.ls, 1, _sheetBlock2.default.resX, function (i) {
          var p = _this3.iSpline.getPoint(i / N);
          nps[j].x.push(p.x);
          nps[j].y.push(p.y);
        });
      };

      for (var j = 0; j < hs.length; ++j) {
        _loop(j);
      }
      return nps;
    };

    SheetBlock.prototype.getPointsAtAngleAndHs = function getPointsAtAngleAndHs(points, angle, hAngle, hs) {
      var ps = this.getPointsAtAngle(points, angle);
      return this.getPointsAtHs(ps, hAngle, hs);
    };

    SheetBlock.prototype.getPointsAtAngle = function getPointsAtAngle(points, angle) {
      var ps = { x: [], y: [] },
          angles = [];
      angle /= Math.PI / 2;
      for (var j = 0; j < points.x.length; ++j) {
        angles.push(j / (points.x.length - 1));
      }
      for (var i = 0; i < points.x[0].length; ++i) {
        var xps = [],
            yps = [];
        for (var _j = 0; _j < points.x.length; ++_j) {
          xps.push(points.x[_j][i]);
          yps.push(points.y[_j][i]);
        }
        ps.x.push(this.interpolate(angles, xps, angle));
        ps.y.push(this.interpolate(angles, yps, angle));
      }
      return ps;
    };

    SheetBlock.prototype.interpolate = function interpolate(x, y, xi) {
      if (!this.aSplines[x.length]) {
        this.aSplines[x.length] = new _libs.THREE.Spline([]);
        var ps = this.aSplines[x.length].points;
        for (var i = 0; i < x.length; ++i) {
          ps.push(new _libs.THREE.Vector3());
        }
      }
      var spline = this.aSplines[x.length];
      for (var _i8 = 0; _i8 < x.length; ++_i8) {
        spline.points[_i8].set(x[_i8], y[_i8], 0);
      }

      return spline.getPoint(xi).y;
    };

    SheetBlock.prototype.loadPoints = function loadPoints() {
      var x = [],
          y = [];
      var _arr = [0, 0.2877, 0.6347, 0.8174, 1.0000];
      for (var _i9 = 0; _i9 < _arr.length; _i9++) {
        var r = _arr[_i9];
        x.push(r * Math.cos(0.9 * Math.PI / 4));
        y.push(r * Math.sin(0.9 * Math.PI / 4));
      }

      var openedInterpolationIndeces = [[2, 3, 4], [2, 3, 4, 5, 6]],
          closedInterpolationIndeces = [[0, 1, 2], [0, 1, 2]],
          flatInterpolationIndeces = [[5, 4], [7, 6]],
          interpolationPoints = [{
        x: [[0, 0.2877, 0.6347, 0.8174, 1.0000], [0.000, 0.286, 0.632, 0.815, 0.997], [0.000, 0.279, 0.623, 0.806, 0.988], [0.000, 0.126, 0.411, 0.593, 0.774], [0, 0, 0, 0, 0], x],
        y: [[0, 0, 0, 0, 0], [0.000, 0.030, 0.010, 0.002, 0.000], [0.000, 0.060, 0.017, 0.004, 0.000], [0.000, 0.259, 0.440, 0.446, 0.429], [0, 0.2877, 0.6347, 0.8174, 1.0000], y]
      }, {
        x: [[0, 0.2877, 0.6347, 0.8174, 1.0000], [0.000, 0.286, 0.632, 0.815, 0.997], [0.000, 0.279, 0.623, 0.806, 0.988], [0.000, 0.233, 0.563, 0.746, 0.927], [0.000, 0.144, 0.433, 0.613, 0.796], [0.000, 0.070, 0.288, 0.455, 0.626], [0, 0, 0, 0, 0], x],
        y: [[0, 0, 0, 0, 0], [0.000, 0.030, 0.010, 0.002, 0.000], [0.000, 0.060, 0.017, 0.004, 0.000], [0.000, 0.168, 0.269, 0.270, 0.255], [0.000, 0.245, 0.435, 0.458, 0.460], [0.000, 0.278, 0.544, 0.614, 0.673], [0, 0.2877, 0.6347, 0.8174, 1.0000], y]
      }];

      return {
        interpolationPoints: interpolationPoints,
        openedInterpolationIndeces: openedInterpolationIndeces,
        closedInterpolationIndeces: closedInterpolationIndeces,
        flatInterpolationIndeces: flatInterpolationIndeces
      };
    };

    return SheetBlock;
  }();

  exports.default = SheetBlock;

  /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _EventConverter2 = __webpack_require__(13);

  var _EventConverter3 = _interopRequireDefault(_EventConverter2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var CustomEventConverter = function (_EventConverter) {
    _inherits(CustomEventConverter, _EventConverter);

    // custom
    // testIntersection(e, data);
    // custom.object
    // test(object);

    function CustomEventConverter(wnd, doc) {
      var customTest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return false;
      };
      var eDoc = arguments[3];

      _classCallCheck(this, CustomEventConverter);

      var _this = _possibleConstructorReturn(this, _EventConverter.call(this, wnd, doc));

      _this.eDoc = eDoc;
      _this.customTest = customTest;
      _this.customs = [];
      return _this;
    }

    CustomEventConverter.prototype.test = function test(object1, object2) {
      return object1 && object2 ? this.customTest(object1, object2) : false;
    };

    CustomEventConverter.prototype.getCallback = function getCallback(object) {
      return object.target.callback;
    };

    CustomEventConverter.prototype.addCustom = function addCustom(custom) {
      this.customs.push(custom);
    };

    CustomEventConverter.prototype.getObject = function getObject(e, data) {
      var object = void 0;
      if (data.doc === this.eDoc) {
        for (var _iterator = this.customs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var custom = _ref;

          object = custom.testIntersection(e, data);
          if (object) {
            break;
          }
        }
      }
      return object;
    };

    return CustomEventConverter;
  }(_EventConverter3.default);

  exports.default = CustomEventConverter;

  /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var EventConverter = function () {

    // virtuals
    // getObject(e, data);
    // getCallback(object);
    // test(object1, object1);

    function EventConverter(wnd, doc) {
      _classCallCheck(this, EventConverter);

      this.wnd = wnd;
      this.doc = doc;
      this.enabled = true;
    }

    EventConverter.prototype.setEnable = function setEnable(vl) {
      if (!vl) {
        if (this.capObject) {
          this.notify(this.capObject, _libs.$.Event('mouseup'), 'mouseup');
          this.capObject = undefined;
        }
        if (this.hovObject) {
          this.notify(this.hovObject, _libs.$.Event('mouseout'), 'mouseout');
          this.hovObject = undefined;
        }
      }
      this.enabled = vl;
    };

    EventConverter.prototype.getCallback = function getCallback(object) {
      return undefined;
    };

    EventConverter.prototype.notify = function notify(object, e, type) {
      var callback = this.getCallback(object);
      if (callback) {
        var props = _extends({}, e, {
          type: type,
          view: this.wnd
        });
        var jE = _libs.$.Event(type, props);
        jE.timeStamp = e.timeStamp;
        callback(jE, object);
      }
    };

    EventConverter.prototype.convert = function convert(e, data) {
      if (!this.enabled) return;

      var object = this.getObject(e, data);
      var notify = true;
      switch (e.type) {
        case 'mousedown':
          {
            if (this.capObject) {
              this.notify(this.capObject, e, 'mouseup');
            }
            this.capObject = object;
            break;
          }
        case 'mouseup':
          {
            if (this.capObject && this.capObject !== object) {
              this.notify(this.capObject, e, 'mouseup');
              notify = false;
            }
            this.timeStamp = e.timeStamp;
            break;
          }
        case 'click':
          {
            notify = this.test(this.capObject, object) && e.timeStamp === this.timeStamp;
            this.capObject = undefined;
            break;
          }
        case 'mouseenter':
        case 'mouseover':
        case 'mousemove':
          {
            if (!this.test(this.hovObject, object) && this.hovObject) {
              this.notify(this.hovObject, e, 'mouseout');
              this.hovObject = undefined;
            }
            if (!this.hovObject && object) {
              this.notify(object, e, 'mouseover');
              this.hovObject = object;
            }
            notify = e.type === 'mousemove';
            break;
          }
        case 'mouseleave':
        case 'mouseout':
          {
            if (this.hovObject) {
              this.notify(this.hovObject, e, 'mouseout');
              this.hovObject = undefined;
            }
            notify = false;
            break;
          }
      }
      if (notify && object) {
        this.notify(object, e, e.type);
      }
    };

    return EventConverter;
  }();

  exports.default = EventConverter;

  /***/
},
/* 14 */
/***/function (module, exports) {

  "use strict";
  "use strict";

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Target = function () {
    function Target() {
      _classCallCheck(this, Target);
    }

    Target.test = function test(object1, object2) {
      return object1.target === object2.target;
    };

    return Target;
  }();

  exports.default = Target;

  /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _ThreeUtils = __webpack_require__(6);

  var _ThreeUtils2 = _interopRequireDefault(_ThreeUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var resX = 11,
      resY = 2,
      resZ = 15,
      scale = 1,
      faces = [];

  var frontGeometry = new _libs.THREE.PlaneGeometry(scale, scale, resX - 1, resY - 1);
  frontGeometry.translate(0.5 * scale, 0.5 * scale, scale);
  var backGeometry = new _libs.THREE.PlaneGeometry(scale, scale, resX - 1, resY - 1);
  backGeometry.rotateY(Math.PI);
  backGeometry.translate(0.5 * scale, 0.5 * scale, 0);
  var leftGeometry = new _libs.THREE.PlaneGeometry(scale, scale, resZ - 1, resY - 1);
  leftGeometry.rotateY(-Math.PI / 2);
  leftGeometry.translate(0, 0.5 * scale, 0.5 * scale);
  var rightGeometry = new _libs.THREE.PlaneGeometry(scale, scale, resZ - 1, resY - 1);
  rightGeometry.rotateY(Math.PI / 2);
  rightGeometry.translate(scale, 0.5 * scale, 0.5 * scale);
  var topGeometry = new _libs.THREE.PlaneGeometry(scale, scale, resX - 1, resZ - 1);
  topGeometry.rotateX(-Math.PI / 2);
  topGeometry.translate(0.5 * scale, scale, 0.5 * scale);
  var bottomGeometry = topGeometry.clone();
  bottomGeometry.translate(0, -scale, 0);
  for (var _iterator = bottomGeometry.faces, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var f = _ref;
    var _ref3 = [f.b, f.a];
    f.a = _ref3[0];
    f.b = _ref3[1];
  }

  var geometry = new _libs.THREE.Geometry();
  geometry.vertices = [].concat(bottomGeometry.vertices, topGeometry.vertices);

  var addFaces = function addFaces(fs, map) {
    for (var _iterator2 = fs, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var f = _ref2;

      geometry.faces.push(new _libs.THREE.Face3(map(f.a), map(f.b), map(f.c)));
    }
    faces.push(geometry.faces.length);
  };

  var mapVertices = function mapVertices(src, dst) {
    var map = [];
    var eq = function eq(a, b) {
      return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z) < 1e-4;
    };
    for (var i = 0; i < src.length; ++i) {
      for (var j = 0; j < dst.length; ++j) {
        if (eq(src[i], dst[j])) {
          map[i] = j;
          break;
        }
      }
    }
    return map;
  };

  var frontMap = mapVertices(frontGeometry.vertices, geometry.vertices);
  var backMap = mapVertices(backGeometry.vertices, geometry.vertices);
  var leftMap = mapVertices(leftGeometry.vertices, geometry.vertices);
  var rightMap = mapVertices(rightGeometry.vertices, geometry.vertices);

  addFaces(topGeometry.faces, function (i) {
    return i + bottomGeometry.vertices.length;
  });
  addFaces(bottomGeometry.faces, function (i) {
    return i;
  });
  addFaces(frontGeometry.faces, function (i) {
    return frontMap[i];
  });
  addFaces(backGeometry.faces, function (i) {
    return backMap[i];
  });
  addFaces(leftGeometry.faces, function (i) {
    return leftMap[i];
  });
  addFaces(rightGeometry.faces, function (i) {
    return rightMap[i];
  });
  faces.pop();

  _ThreeUtils2.default.computeFaceVertexUvs(geometry, faces);

  geometry.computeVertexNormals();
  //geometry.computeFaceNormals();
  geometry.computeBoundingSphere();
  //geometry.computeBoundingBox();
  geometry.verticesNeedUpdate = true;

  exports.default = {
    resX: resX,
    resY: resY,
    resZ: resZ,
    faces: faces,
    geometry: geometry
  };

  /***/
},
/* 16 */
/***/function (module, exports) {

  "use strict";
  'use strict';

  exports.__esModule = true;
  exports.props = props;
  function props() {
    // const props = {
    //   height,
    //   width,
    //   gravity,
    //   injector,
    //   cachedPages,
    //   renderInactivePages,
    //   renderWhileFlipping,
    //   pagesForPredicting,
    //   preloadPages,
    //   sheet: {
    //     startVelocity,
    //     cornerDeviation,
    //     flexibility,
    //     flexibleCorner,
    //     bending,
    //     wave,
    //     shape,
    //     widthTexels,
    //     heightTexels,
    //     color,
    //     sideTexture
    //   },
    //   cover: {
    //     ...sheet,
    //     padding,
    //     binderTexture,
    //     depth,
    //     mass
    //   },
    //   page: {
    //     ...sheet,
    //     depth,
    //     mass
    //   }
    // };

    return {
      height: 0.297,
      width: 0.21,
      gravity: 1,
      cachedPages: 50,
      renderInactivePages: true,
      renderWhileFlipping: false,
      pagesForPredicting: 5,
      preloadPages: 5,
      sheet: {
        startVelocity: 0.8,
        cornerDeviation: 0.25,
        flexibility: 10,
        flexibleCorner: 0.5,
        bending: 11,
        wave: 0.5,
        shape: 0,
        widthTexels: 5 * 210,
        heightTexels: 5 * 297,
        color: 0xFFFFFF
      },
      cover: {
        binderTexture: '',
        depth: 0.0003,
        padding: 0,
        mass: 0.003
      },
      page: {
        depth: 0.0001,
        mass: 0.001
      }
    };
  };

  /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _libs = __webpack_require__(0);

  var _Detector = __webpack_require__(31);

  var _Detector2 = _interopRequireDefault(_Detector);

  var _VisualWorld = __webpack_require__(51);

  var _VisualWorld2 = _interopRequireDefault(_VisualWorld);

  var _PdfLinksHandler = __webpack_require__(42);

  var _PdfLinksHandler2 = _interopRequireDefault(_PdfLinksHandler);

  var _Book = __webpack_require__(23);

  var _Book2 = _interopRequireDefault(_Book);

  var _BookView = __webpack_require__(26);

  var _BookView2 = _interopRequireDefault(_BookView);

  var _BookController = __webpack_require__(24);

  var _BookController2 = _interopRequireDefault(_BookController);

  var _PdfBookPropsBuilder = __webpack_require__(40);

  var _PdfBookPropsBuilder2 = _interopRequireDefault(_PdfBookPropsBuilder);

  var _ClbBookPropsBuilder = __webpack_require__(28);

  var _ClbBookPropsBuilder2 = _interopRequireDefault(_ClbBookPropsBuilder);

  var _LoadingController = __webpack_require__(37);

  var _LoadingController2 = _interopRequireDefault(_LoadingController);

  var _Bookmarks = __webpack_require__(27);

  var _Bookmarks2 = _interopRequireDefault(_Bookmarks);

  var _Thumbnails = __webpack_require__(48);

  var _Thumbnails2 = _interopRequireDefault(_Thumbnails);

  var _TocController = __webpack_require__(49);

  var _TocController2 = _interopRequireDefault(_TocController);

  var _BookPrinter = __webpack_require__(25);

  var _BookPrinter2 = _interopRequireDefault(_BookPrinter);

  var _AutoNavigator = __webpack_require__(20);

  var _AutoNavigator2 = _interopRequireDefault(_AutoNavigator);

  var _SoundsEnviroment = __webpack_require__(44);

  var _SoundsEnviroment2 = _interopRequireDefault(_SoundsEnviroment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  _libs.$.fn.FlipBook = function (options) {
    var scene = {
      dispose: function dispose() {
        if (this.ready) {
          !scene.pdfLinksHandler || scene.pdfLinksHandler.dispose();
          delete scene.pdfLinksHandler;
          scene.sounds.dispose();
          delete scene.sounds;
          scene.tocCtrl.dispose();
          delete scene.tocCtrl;
          scene.thumbnails.dispose();
          delete scene.thumbnails;
          !scene.bookmarks || scene.bookmarks.dispose();
          delete scene.bookmarks;
          scene.ctrl.dispose();
          delete scene.ctrl;
          scene.bookPrinter.dispose();
          delete scene.bookPrinter;
          scene.book.dispose();
          delete scene.book;
          scene.propsBuilder.dispose();
          delete scene.propsBuilder;
          delete scene.bookBuilder;
          scene.visual.dispose();
          delete scene.visual;
          scene.view.dispose();
          delete scene.view;
          delete scene.dispose;
        } else {
          this.pendingDispose = true;
        }
      }
    };
    options = _extends({}, options);
    scene.view = new _BookView2.default(this.length ? this[0] : (0, _libs.$)('<div>').appendTo('body'), function () {
      if (!_Detector2.default.webgl) {
        _Detector2.default.addGetWebGLMessage({ parent: scene.view.getView() });
      } else {
        scene.loadingCtrl = new _LoadingController2.default(scene.view);
        scene.visual = new _VisualWorld2.default(scene.view.getContainer().ownerDocument.defaultView, scene.view.getContainer().ownerDocument, scene.view.getView());
        scene.bookBuilder = function (props, sheets, pageCallback) {
          if (options.propertiesCallback) {
            props = options.propertiesCallback(props);
          }
          scene.book = new _Book2.default(scene.visual, sheets, pageCallback, props);
          scene.bookPrinter = new _BookPrinter2.default(scene.visual, scene.book, (options.template || {}).printStyle);
          scene.loadingCtrl.dispose();
          delete scene.loadingCtrl;
          scene.ctrl = new _BookController2.default(scene.book, scene.view, options.controlsProps);
          scene.book.setInjector(function (w) {
            w.jQuery = w.$ = _libs.$;
            w.book = scene.book;
            w.bookCtrl = scene.ctrl;
            if (props.injector) {
              props.injector(w);
            }
          });
          scene.view.addHandler(scene.ctrl);
          scene.ctrl.setPrinter(scene.bookPrinter);
          var test = pageCallback(0);

          scene.thumbnails = new _Thumbnails2.default(scene.visual, scene.view.getThumbnailsView(), pageCallback, 2 * (sheets + 2), { kWtoH: props.width / props.height });
          scene.tocCtrl = new _TocController2.default(scene.view, scene.ctrl);
          scene.tocCtrl.setThumbnails(scene.thumbnails);
          scene.ctrl.setTocCtrl(scene.tocCtrl);
          scene.view.addHandler(scene.tocCtrl);

          if (test.type === 'pdf') {
            scene.pdfLinksHandler = new _PdfLinksHandler2.default(test.src, scene.ctrl, scene.visual.element);
            scene.book.addEventListener('pdfAnnotation', scene.pdfLinksHandler.handleEvent.bind(scene.pdfLinksHandler));
            test.src.getHandler(function (handler) {
              handler.getOutline().then(function (outline) {
                scene.bookmarks = new _Bookmarks2.default(scene.view.getBookmarksView(), outline);
                scene.tocCtrl.setBookmarks(scene.bookmarks, test.src);
              });
            });
            if (options.pdfLinks && options.pdfLinks.handler) {
              scene.pdfLinksHandler.setHandler(options.pdfLinks.handler);
            }
          }

          scene.sounds = new _SoundsEnviroment2.default(options.template);
          scene.ctrl.setSounds(scene.sounds);
          scene.sounds.subscribeFlips(scene.ctrl);

          scene.ready = true;
          new _AutoNavigator2.default(scene.visual, scene.ctrl, options.autoNavigation).dispose();
          if (options.ready) {
            options.ready(scene);
          }
          if (scene.pendingDispose) {
            scene.dispose();
          }
        };
        if (options.pdf) {
          scene.propsBuilder = new _PdfBookPropsBuilder2.default(options.pdf, scene.bookBuilder);
          scene.propsBuilder.pdf.setLoadingProgressClb(scene.loadingCtrl.setProgress.bind(scene.loadingCtrl));
        } else if (options.pageCallback) {
          scene.propsBuilder = new _ClbBookPropsBuilder2.default(scene.visual, options.pageCallback, options.pages, scene.bookBuilder);
        } else {
          scene.propsBuilder = new _ClbBookPropsBuilder2.default(scene.visual, _Book2.default.pageCallback, 6, scene.bookBuilder);
        }
      }
    }, options.template);
    return scene;
  };

  (0, _libs.$)(function () {
    var containers = (0, _libs.$)('.flip-book-container');
    for (var i = 0; i < containers.length; ++i) {
      var jContainer = (0, _libs.$)(containers[i]),
          src = jContainer.attr('src');
      if (!!src) {
        jContainer.FlipBook({ pdf: src });
      }
    }
  });

  window.jQuery = window.$ = _libs.$;

  /***/
},
/* 18 */
/***/function (module, exports) {

  "use strict";
  'use strict';

  if (!Array.prototype.fill) {
    Array.prototype.fill = function (value) {

      // Шаги 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Шаги 3-5.
      var len = O.length >>> 0;

      // Шаги 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Шаг 8.
      var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);

      // Шаги 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ? len : end >> 0;

      // Шаг 11.
      var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

      // Шаг 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Шаг 13.
      return O;
    };
  }

  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function value(predicate) {
        'use strict';

        if (this == null) {
          throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return value;
          }
        }
        return undefined;
      }
    });
  }

  if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (predicate) {
      if (this == null) {
        throw new TypeError('Array.prototype.findIndex called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return i;
        }
      }
      return -1;
    };
  }

  if (!Object.values) {
    Object.values = function values(O) {
      return Object.keys(O).map(function (name) {
        return O[name];
      }) || [];
    };
  }

  /***/
},
/* 19 */
/***/function (module, exports) {

  "use strict";
  'use strict';

  exports.__esModule = true;
  /** @namespace */
  var THREEx = THREEx || {};
  THREEx.FullScreen = THREEx.FullScreen || {};

  exports.default = THREEx.FullScreen;

  /**
   * test if it is possible to have fullscreen
   *
   * @returns {Boolean} true if fullscreen API is available, false otherwise
  */

  THREEx.FullScreen.available = function () {
    return this._hasWebkitFullScreen || this._hasMozFullScreen;
  };

  /**
   * test if fullscreen is currently activated
   *
   * @returns {Boolean} true if fullscreen is currently activated, false otherwise
  */
  THREEx.FullScreen.activated = function () {
    if (this._hasWebkitFullScreen) {
      return document.webkitIsFullScreen;
    } else if (this._hasMozFullScreen) {
      return document.mozFullScreen;
    } else {
      console.assert(false);
    }
  };

  THREEx.FullScreen.addEventListener = function (element, handler) {
    if (element.addEventListener) {
      element.addEventListener('webkitfullscreenchange', handler, false);
      element.addEventListener('mozfullscreenchange', handler, false);
      element.addEventListener('fullscreenchange', handler, false);
      element.addEventListener('MSFullscreenChange', handler, false);
    }
  };

  THREEx.FullScreen.removeEventListener = function (element, handler) {
    if (element.removeEventListener) {
      element.removeEventListener('webkitfullscreenchange', handler, false);
      element.removeEventListener('mozfullscreenchange', handler, false);
      element.removeEventListener('fullscreenchange', handler, false);
      element.removeEventListener('MSFullscreenChange', handler, false);
    }
  };

  function exitHandler() {
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null) {
      /* Run code on exit */
    }
  }

  /**
   * Request fullscreen on a given element
   * @param {DomElement} element to make fullscreen. optional. default to document.body
  */
  THREEx.FullScreen.request = function (element) {
    element = element || document.body;
    if (this._hasWebkitFullScreen) {
      element.webkitRequestFullScreen();
    } else if (this._hasMozFullScreen) {
      element.mozRequestFullScreen();
    } else {
      console.assert(false);
    }
  };

  /**
   * Cancel fullscreen
  */
  THREEx.FullScreen.cancel = function () {
    if (this._hasWebkitFullScreen) {
      document.webkitCancelFullScreen();
    } else if (this._hasMozFullScreen) {
      document.mozCancelFullScreen();
    } else {
      console.assert(false);
    }
  };

  THREEx.FullScreen._hasWebkitFullScreen = 'webkitCancelFullScreen' in document ? true : false;
  THREEx.FullScreen._hasMozFullScreen = 'mozCancelFullScreen' in document ? true : false;

  /***/
},
/* 20 */
/***/function (module, exports) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AutoNavigator = function () {
    function AutoNavigator(context, bookCtrl) {
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, AutoNavigator);

      props = _extends({}, props, {
        urlParam: props.urlParam || 'fb3d-page',
        navigates: props.navigates === undefined ? 1 : props.navigates
      });
      this.props = props;
      this.context = context;
      this.bookCtrl = bookCtrl;
      this.urlParam = props.urlParam;
      this.wnd = context.wnd;

      this.wnd.fb3d = _extends({}, this.wnd.fb3d);
      this.wnd.fb3d.navigator = _extends({}, this.wnd.fb3d.navigator);
      this.navigator = this.wnd.fb3d.navigator[this.urlParam] = _extends({}, this.wnd.fb3d.navigator[this.urlParam]);
      this.navigator.instances = (this.navigator.instances || 0) + 1;

      if (this.navigator.instances <= this.props.navigates) {
        this.bookCtrl.goToPage(this.getPageNumber());
      }
    }

    AutoNavigator.prototype.dispose = function dispose() {};

    AutoNavigator.prototype.getParameterByName = function getParameterByName(name, url) {
      if (!url) {
        url = this.wnd.location.href;
      }
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };

    AutoNavigator.prototype.getPageNumber = function getPageNumber() {
      var number = this.getParameterByName(this.urlParam);
      number = parseInt(number);
      if (isNaN(number)) {
        number = 1;
      }
      return number - 1;
    };

    return AutoNavigator;
  }();

  exports.default = AutoNavigator;

  /***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _libs = __webpack_require__(0);

  var _MathUtils = __webpack_require__(2);

  var _MathUtils2 = _interopRequireDefault(_MathUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Binder = function () {
    function Binder(visual, p) {
      var _this = this;

      _classCallCheck(this, Binder);

      this.visual = visual;
      this.p = _extends({}, p, {
        backSize: 2 * p.cover.depth + p.sheets * p.page.depth
      });
      this.OZ = new _libs.THREE.Vector3(0, 0, 1);

      this.backG = new _libs.THREE.BoxGeometry(p.cover.depth, this.p.backSize, p.cover.height);

      this.materials = [new _libs.THREE.MeshPhongMaterial({ color: p.cover.color }), new _libs.THREE.MeshPhongMaterial({ color: p.cover.color }), new _libs.THREE.MeshPhongMaterial({ color: p.cover.color }), new _libs.THREE.MeshPhongMaterial({ color: p.cover.color }), new _libs.THREE.MeshPhongMaterial({ color: p.cover.color }), new _libs.THREE.MeshPhongMaterial({ color: p.cover.color })];

      var backM = new _libs.THREE.Mesh(this.backG, new _libs.THREE.MeshFaceMaterial(this.materials));

      if (p.cover.binderTexture !== '') {
        this.visual.textureLoader.load(p.cover.binderTexture, function (texture) {
          _this.materials[1].color.setHex(0xFFFFFF);
          _this.materials[1].map = texture;
          texture.minFilter = _libs.THREE.LinearFilter;
          texture.needsUpdate = true;
          _this.materials[1].needsUpdate = true;
        });
      }

      this.three = new _libs.THREE.Object3D();
      this.back = new _libs.THREE.Object3D();
      this.backRT = new _libs.THREE.Object3D();
      this.backRR = new _libs.THREE.Object3D();
      this.backLT = new _libs.THREE.Object3D();
      this.backLR = new _libs.THREE.Object3D();
      this.leftPivot = new _libs.THREE.Object3D();
      this.rightPivot = new _libs.THREE.Object3D();

      this.back.add(backM);
      this.back.add(this.leftPivot);
      this.back.add(this.rightPivot);
      this.backRT.add(this.back);
      this.backRR.add(this.backRT);
      this.backLT.add(this.backRR);
      this.backLR.add(this.backLT);
      this.three.add(this.backLR);
    }

    Binder.prototype.dispose = function dispose() {
      for (var _iterator = this.materials, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var m = _ref;

        if (m.map) {
          m.map = null;
          m.needsUpdate = true;
        }
        m.dispose();
      }
      delete this.materials;
      this.backG.dispose();
    };

    Binder.prototype.set = function set(angle) {
      var right = void 0,
          left = void 0;
      if (angle > Math.PI / 2) {
        right = Math.PI / 2;
        left = angle - Math.PI / 2;
      } else {
        right = angle;
        left = 0;
      }
      var p = this.p,
          tr1 = { x: -0.5 * p.cover.depth, y: 0.5 * p.backSize - p.cover.depth };
      this.backRT.position.set(tr1.x, tr1.y, 0);
      this.backRR.position.set(-tr1.x, -tr1.y, 0);
      this.backRR.quaternion.setFromAxisAngle(this.OZ, right);

      var tr2 = { x: p.backSize - 2 * p.cover.depth - 0.5 * p.cover.depth, y: 0.5 * p.backSize - p.cover.depth };
      this.backLT.position.set(tr2.x, tr2.y, 0);
      this.backLR.position.set(-tr2.x, -tr2.y, 0);
      this.backLR.quaternion.setFromAxisAngle(this.OZ, left);
    };

    Binder.prototype.setLeft = function setLeft(angle) {
      var PI = Math.PI;
      this.leftPivot.position.set(_MathUtils2.default.interpolateLinear([-PI, -PI / 2], [0, this.p.cover.depth], angle), 0.5 * this.p.backSize - 0.5 * this.p.cover.depth, 0);
      this.leftPivot.quaternion.setFromAxisAngle(this.OZ, angle);
    };

    Binder.prototype.setRight = function setRight(angle) {
      var PI = Math.PI;
      this.rightPivot.position.set(_MathUtils2.default.interpolateLinear([-PI / 2, 0], [this.p.cover.depth, 0], angle), -0.5 * this.p.backSize + 0.5 * this.p.cover.depth, 0);
      this.rightPivot.quaternion.setFromAxisAngle(this.OZ, angle);
    };

    Binder.prototype.joinLeftCover = function joinLeftCover(cover) {
      cover.three.position.set(0, -0.5 * this.p.cover.depth, 0);
      this.leftPivot.add(cover.three);
    };

    Binder.prototype.disconnectLeftCover = function disconnectLeftCover(cover) {
      this.leftPivot.remove(cover.three);
    };

    Binder.prototype.joinRightCover = function joinRightCover(cover) {
      cover.three.position.set(0, -0.5 * this.p.cover.depth, 0);
      this.rightPivot.add(cover.three);
    };

    Binder.prototype.disconnectRightCover = function disconnectRightCover(cover) {
      this.rightPivot.remove(cover.three);
    };

    return Binder;
  }();

  exports.default = Binder;

  /***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _ImageBase2 = __webpack_require__(3);

  var _ImageBase3 = _interopRequireDefault(_ImageBase2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var BlankImage = function (_ImageBase) {
    _inherits(BlankImage, _ImageBase);

    function BlankImage(context, width, height, color) {
      _classCallCheck(this, BlankImage);

      var _this = _possibleConstructorReturn(this, _ImageBase.call(this, context, width, height, color));

      Promise.resolve().then(function () {
        _this.startRender = function () {
          _this.renderBlankPage();
          _this.finishRender();
        };
        _this.finishLoad();
      });
      return _this;
    }

    return BlankImage;
  }(_ImageBase3.default);

  exports.default = BlankImage;

  /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _libs = __webpack_require__(0);

  var _book = __webpack_require__(16);

  var _GraphUtils = __webpack_require__(4);

  var _GraphUtils2 = _interopRequireDefault(_GraphUtils);

  var _Binder = __webpack_require__(21);

  var _Binder2 = _interopRequireDefault(_Binder);

  var _Cover = __webpack_require__(29);

  var _Cover2 = _interopRequireDefault(_Cover);

  var _SheetBlock = __webpack_require__(11);

  var _SheetBlock2 = _interopRequireDefault(_SheetBlock);

  var _SheetPhysics = __webpack_require__(43);

  var _SheetPhysics2 = _interopRequireDefault(_SheetPhysics);

  var _PageManager = __webpack_require__(39);

  var _PageManager2 = _interopRequireDefault(_PageManager);

  var _CustomEventConverter = __webpack_require__(12);

  var _CustomEventConverter2 = _interopRequireDefault(_CustomEventConverter);

  var _CircleTarget = __webpack_require__(57);

  var _CircleTarget2 = _interopRequireDefault(_CircleTarget);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Book = function (_THREE$EventDispatche) {
    _inherits(Book, _THREE$EventDispatche);

    // pageCallback samples

    // (n)=> ({
    //   type: 'image',
    //   src: 'sample.png',
    //   interactive: false
    // });
    //
    // (n)=> ({
    //   type: 'html',
    //   src: 'sample.html',
    //   interactive: true
    // });
    //
    // const pdf = new Pdf('sample.pdf');
    // (n)=> ({
    //   type: 'pdf',
    //   src: pdf,
    //   interactive: false
    // });

    function Book(visual, sheets, pageCallback, props) {
      _classCallCheck(this, Book);

      var _this = _possibleConstructorReturn(this, _THREE$EventDispatche.call(this));

      sheets = Math.min(3, sheets);
      visual.jContainer.append('\n      <style type="text/css">\n        .demo-msg {\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          padding: 10px;\n          background-color: #ffe4e1;\n          border-radius: 3px;\n        }\n      </style>\n      <div class="demo-msg">\n        This is the demo version, only 10 pages are available. Use the <a href="https://goo.gl/bt3Zhh">full version</a>.\n      </div>\n    ');
      _this.visual = visual;
      _this.p = _extends({}, Book.prepareProps(props), {
        sheets: sheets,
        pageCallback: pageCallback
      });
      _this.pageManager = new _PageManager2.default(visual, _this, _this.p);

      _this.three = new _libs.THREE.Object3D();

      _this.binder = new _Binder2.default(visual, _this.p);
      _this.three.add(_this.binder.three);

      _this.leftCover = new _Cover2.default(visual, _extends({}, _this.p, { setTexture: _this.setLeftCoverTexture.bind(_this) }), Math.PI / 2, 'opened');
      _this.binder.joinLeftCover(_this.leftCover);
      _this.subscribeSheetBlock(_this.leftCover, 0);
      _this.rightCover = new _Cover2.default(visual, _extends({}, _this.p, { setTexture: _this.setRightCoverTexture.bind(_this) }), 0, 'closed');
      _this.binder.joinRightCover(_this.rightCover);
      _this.subscribeSheetBlock(_this.rightCover, 2 * (_this.p.sheets + 1));

      _this.threeSheetBlocks = new _libs.THREE.Object3D();
      _this.three.add(_this.threeSheetBlocks);
      _this.threeSheetBlocks.position.set(0.5 * _this.p.cover.depth - 0.5 * sheets * _this.p.page.depth, -0.5 * sheets * _this.p.page.depth, 0);

      _this.sheetBlocks = [];
      if (sheets > 0) {
        _this.addSheetBlock(0, new _SheetBlock2.default(visual, _extends({}, _this.p, { setTexture: _this.setPageTexture.bind(_this) }), 0, sheets, 0, 'closed'));
      }

      _this.angle = 0;
      _this.closedAngle = 0;
      _this.set(_this.angle, 0);

      _this.three.position.set(-0.5 * _this.p.cover.depth + 0.5 * sheets * _this.p.page.depth, 0, 0);
      _this.sheetPhysics = new _SheetPhysics2.default(_this.p.page.width / _this.p.scale, _this.p.gravity, _this.p.page.cornerDeviation);

      _this.binds = {
        update: _this.update.bind(_this)
      };
      _this.visual.addRenderCallback(_this.binds.update);

      _this.binds.onPickCallback = _this.onPickCallback.bind(_this);
      _this.visual.drag.onPickCallback = _this.binds.onPickCallback;
      _this.binds.onDragCallback = _this.onDragCallback.bind(_this);
      _this.visual.drag.onDragCallback = _this.binds.onDragCallback;
      _this.binds.onReleaseCallback = _this.onReleaseCallback.bind(_this);
      _this.visual.drag.onReleaseCallback = _this.binds.onReleaseCallback;

      _this.dragAngle = 0.05;

      _this.visual.addObject(_this.three);
      return _this;
    }

    Book.prototype.dispose = function dispose() {
      this.visual.removeObject(this.three);
      this.sheetPhysics.dispose();
      delete this.visual.drag.onPickCallback;
      delete this.visual.drag.onDragCallback;
      delete this.visual.drag.onReleaseCallback;
      this.visual.removeRenderCallback(this.binds.update);
      this.removeSheetBlocks(0, this.sheetBlocks.length);
      this.binder.disconnectLeftCover(this.leftCover);
      this.removeSheetBlock(this.leftCover);
      this.binder.disconnectRightCover(this.rightCover);
      this.removeSheetBlock(this.rightCover);
      this.binder.dispose();
      this.pageManager.dispose();
    };

    // publics {

    Book.prototype.getPageCallback = function getPageCallback() {
      return this.p.pageCallback;
    };

    Book.prototype.isProcessing = function isProcessing() {
      return this.sheetPhysics.getSize() !== 0;
    };

    Book.prototype.getPages = function getPages() {
      return 4 + 2 * this.p.sheets;
    };

    Book.prototype.setFlipProgressClb = function setFlipProgressClb(clb) {
      this.p.flipProgressClb = clb;
    };

    Book.prototype.setInjector = function setInjector(injector) {
      this.p.injector = injector;
    };

    Book.prototype.isActivePage = function isActivePage(n) {
      var res = true;
      if (n > 1 && n < this.getPages() - 2) {
        for (var _iterator = this.sheetBlocks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var b = _ref;

          if (n - 2 > 2 * b.p.first && n - 2 < 2 * b.p.last - 1) {
            res = false;
            break;
          }
        }
      }
      return res;
    };

    Book.prototype.getBlockByPage = function getBlockByPage(n) {
      var block = void 0;
      if (n < 2) {
        block = this.leftCover;
      } else if (n < 2 * (this.p.sheets + 1)) {
        for (var _iterator2 = this.sheetBlocks, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var b = _ref2;

          if (n - 2 >= 2 * b.p.first && n - 2 < 2 * b.p.last) {
            block = b;
            break;
          }
        }
      } else {
        block = this.rightCover;
      }
      return block;
    };

    Book.prototype.getBlockPages = function getBlockPages(block) {
      var range = void 0;
      switch (block) {
        case this.leftCover:
          {
            range = [0, 1];
            break;
          }
        case this.rightCover:
          {
            range = [2 * (this.p.sheets + 1), 2 * (this.p.sheets + 1) + 1];
            break;
          }
        default:
          {
            range = block ? [2 * (block.p.first + 1), 2 * (block.p.last + 1) - 1] : undefined;
          }
      }
      return range;
    };

    Book.prototype.getPage = function getPage() {
      var PI = Math.PI;
      var p = void 0;
      if (this.angle === PI / 2 || this.angle === 3 * PI / 2) {
        for (var _iterator3 = this.sheetBlocks, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
          }

          var block = _ref3;

          if (block.angle <= PI / 2) {
            p = this.getBlockPages(block)[0] - 1;
            break;
          }
        }
        if (!p) {
          p = this.getPages() - 3;
        }
      } else if (this.angle < PI / 2) {
        p = 0;
      } else if (this.angle > 3 * PI / 2) {
        p = 1;
      } else if (this.angle < PI) {
        p = this.getPages() - 3;
      } else if (this.angle >= PI) {
        p = this.getPages() - 1;
      }
      return p;
    };

    Book.prototype.getLeftFlipping = function getLeftFlipping() {
      var block = void 0;
      var left = this.sheetBlocks[0],
          PI = Math.PI;
      if (this.angle === PI) {
        block = this.rightCover;
      } else {
        if (left && left.state === 'closed' && left.angle > PI / 2) {
          block = left;
        } else if (this.angle === PI / 2 || this.angle === 3 * PI / 2) {
          block = this.leftCover;
        }
      }
      return block;
    };

    Book.prototype.getRightFlipping = function getRightFlipping() {
      var block = void 0;
      var right = this.sheetBlocks[this.sheetBlocks.length - 1],
          PI = Math.PI;
      if (this.angle === 0) {
        block = this.leftCover;
      } else {
        if (right && right.state === 'closed' && right.angle <= PI / 2) {
          block = right;
        } else if (this.angle === PI / 2 || this.angle === 3 * PI / 2) {
          block = this.rightCover;
        }
      }
      return block;
    };

    Book.prototype.getClosedBlockAngle = function getClosedBlockAngle(angle) {
      var closedAngle = void 0,
          PI = Math.PI;

      if (this.leftCover.physicId) {
        var test = void 0;
        try {
          test = Math.abs(this.sheetPhysics.getParametr(this.leftCover.physicId, 'angle') - angle);
        } catch (e) {
          test = 0;
        }
        closedAngle = angle > PI / 2 || test > PI / 6 ? PI / 2 : this.closedAngle;
      } else if (this.rightCover.physicId) {
        var _test = void 0;
        try {
          _test = Math.abs(this.sheetPhysics.getParametr(this.rightCover.physicId, 'angle') - angle);
        } catch (e) {
          _test = 0;
        }
        closedAngle = angle < PI / 2 || _test > PI / 6 ? PI / 2 + 1e-7 : this.closedAngle;
      } else {
        closedAngle = PI / 2 + (angle !== 0) * 1e-7;
      }

      return {
        openedAngle: angle,
        closedAngle: closedAngle,
        binderTurn: this.closedAngle
      };
    };

    Book.prototype.flipLeft = function flipLeft() {
      var _this2 = this;

      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var progressClb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.p.flipProgressClb;

      var block = void 0;
      if (this.sheetPhysics.getSize() < 25) {
        (function () {
          var left = _this2.sheetBlocks[0],
              PI = Math.PI;
          if (_this2.angle === PI) {
            _this2.connectPhysics(block = _this2.rightCover, _this2.p.cover.mass, PI, -_this2.p.cover.startVelocity, _this2.p.cover.flexibility, 0, function (angle, height) {
              return _this2.set(3 * PI / 2 - angle / 2, height);
            }, function (angle, height) {
              _this2.set(3 * PI / 2 - angle / 2, 0);
              _this2.setSheetBlocks(angle ? PI : PI / 2 + 1e-7, 'closed');
            }, progressClb);
          } else {
            if (left && left.state === 'closed' && left.angle > PI / 2) {
              block = size < left.getSize() ? _this2.splitSheetBlock(0, left.getSize() - size)[1] : left;
              _this2.connectPhysics(block, _this2.p.page.mass * block.getSize(), PI, -_this2.p.page.startVelocity, _this2.p.page.flexibility, 0, function (angle, height) {
                return block.set(_this2.getClosedBlockAngle(angle), 'opened', height);
              }, Book.finishAnimationClb.bind({ book: _this2, block: block }), progressClb);
            } else if (_this2.angle === PI / 2 || _this2.angle === 3 * PI / 2) {
              _this2.connectPhysics(block = _this2.leftCover, _this2.p.cover.mass, PI, -_this2.p.cover.startVelocity, _this2.p.cover.flexibility, 0, function (angle, height) {
                _this2.set(2 * PI - angle / 2, height);
                if (angle > PI / 2) {
                  _this2.setSheetBlocks(angle ? PI / 2 : 0, 'closed');
                }
              }, function (angle, height) {
                return _this2.set(angle === 0 ? 0 : 2 * PI - angle / 2, 0);
              }, progressClb);
            }
          }
        })();
      }
      return block;
    };

    Book.prototype.flipRight = function flipRight() {
      var _this3 = this;

      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var progressClb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.p.flipProgressClb;

      var block = void 0;
      if (this.sheetPhysics.getSize() < 25) {
        (function () {
          var right = _this3.sheetBlocks[_this3.sheetBlocks.length - 1],
              PI = Math.PI;
          if (_this3.angle === 0) {
            _this3.connectPhysics(block = _this3.leftCover, _this3.p.cover.mass, 0, _this3.p.cover.startVelocity, _this3.p.cover.flexibility, 0, function (angle, height) {
              return _this3.set(angle / 2, height);
            }, function (angle, height) {
              _this3.set(angle / 2, 0);
              _this3.setSheetBlocks(angle ? PI / 2 : 0, 'closed');
            }, progressClb);
          } else {
            if (right && right.state === 'closed' && right.angle <= PI / 2) {
              block = size < right.getSize() ? _this3.splitSheetBlock(_this3.sheetBlocks.length - 1, size)[0] : right;
              _this3.connectPhysics(block, _this3.p.page.mass * block.getSize(), 0, _this3.p.page.startVelocity, _this3.p.page.flexibility, 0, function (angle, height) {
                return block.set(_this3.getClosedBlockAngle(angle), 'opened', height);
              }, Book.finishAnimationClb.bind({ book: _this3, block: block }), progressClb);
            } else if (_this3.angle === PI / 2 || _this3.angle === 3 * PI / 2) {
              _this3.connectPhysics(block = _this3.rightCover, _this3.p.cover.mass, 0, _this3.p.cover.startVelocity, _this3.p.cover.flexibility, 0, function (angle, height) {
                _this3.set(PI / 2 + angle / 2, height);
                if (angle < PI / 2) {
                  _this3.setSheetBlocks(PI / 2 + 1e-7, 'closed');
                }
              }, function (angle, height) {
                return _this3.set(PI / 2 + angle / 2, 0);
              }, progressClb);
            }
          }
        })();
      }
      return block;
    };

    // }

    Book.prototype.clearHoverInfo = function clearHoverInfo() {
      this.pageManager.turnOnEvents();
      delete this.hoverInfo.block.force;
      delete this.hoverInfo.block.cornerForce;
      delete this.hoverInfo;
    };

    Book.prototype.computeTarget = function computeTarget(point) {
      var x = point.x,
          y = point.y;

      y = Math.max(0, y);
      return Math.max(this.dragAngle, Math.min(Math.PI - this.dragAngle, Math.acos(x / Math.sqrt(x * x + y * y))));
    };

    Book.prototype.onPickCallback = function onPickCallback(object) {
      var res = false;
      var block = object.object.userData.self,
          p = _extends({}, object.uv),
          i = object.face.materialIndex;
      if (i < 2) {
        p.x = i === 0 ? p.x : 1 - p.x;
        if (block.cornerTarget.testIntersection(null, p) && block.physicId) {
          if (this.hoverInfo) {
            this.clearHoverInfo();
          }
          block.force = _SheetPhysics2.default.dragForceClb;
          block.cornerForce = _SheetPhysics2.default.getDragCornerForceClb(this.computeTarget(object.point));
          this.dragInfo = {
            object: object,
            block: block
          };
          res = true;
          this.pageManager.turnOffEvents();
        }
      }
      return res;
    };

    Book.prototype.onDragCallback = function onDragCallback(point) {
      var block = this.dragInfo.block,
          p = block.getProps();
      block.force = _SheetPhysics2.default.dragForceClb;
      block.cornerForce = _SheetPhysics2.default.getDragCornerForceClb(this.computeTarget(point));
      return true;
    };

    Book.prototype.onReleaseCallback = function onReleaseCallback() {
      delete this.dragInfo.block.force;
      delete this.dragInfo.block.cornerForce;
      delete this.dragInfo;
      this.pageManager.turnOnEvents();
    };

    Book.prototype.getFlipping = function getFlipping(i) {
      return i ? this.getLeftFlipping() : this.getRightFlipping();
    };

    Book.prototype.flip = function flip(i) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      return i ? this.flipLeft(size) : this.flipRight(size);
    };

    Book.prototype.cornerCallback = function cornerCallback(e, data) {
      var _data$data = data.data,
          i = _data$data.i,
          n = _data$data.n;

      if (e.type === 'mouseover') {
        if (this.hoverInfo) {
          console.warn('Wrong state: element is already hover');
          if (this.hoverInfo.n !== n) {
            this.clearHoverInfo();
          }
        }
        if (!this.hoverInfo && !this.dragInfo) {
          var block = void 0;
          var hoverAngle = 0.02,
              hover = this.getBlockByPage(n),
              possible = this.getFlipping(i);
          if (n > 1 && n < 2 * (this.p.sheets + 1) && hover.physicId && (hover.angle < hoverAngle || hover.angle > Math.PI - hoverAngle)) {
            block = hover;
          } else if (hover === possible) {
            var sheetBlocks = [this.leftCover].concat(this.sheetBlocks, [this.rightCover]);
            var j = sheetBlocks.indexOf(hover),
                nextBlock = ~j ? sheetBlocks[j + 2 * i - 1] : undefined;
            if (!nextBlock || !nextBlock.physicId || nextBlock.angle > hoverAngle && nextBlock.angle < Math.PI - hoverAngle) {
              block = this.flip(i, 1);
              this.sheetPhysics.setParametr(block.physicId, 'velocity', 0);
            }
          }
          if (block) {
            this.pageManager.turnOffEvents();
            var p = block.getProps();
            block.force = this.sheetPhysics.getTargetForceClb(p.mass * block.getSize(), i ? Math.PI - hoverAngle : hoverAngle);
            block.cornerForce = function () {
              return (i ? -1 : 1) * _SheetPhysics2.default.hoverCornerForceClb();
            };
            this.sheetPhysics.setParametr(block.physicId, 'angle', i ? Math.PI - 0.5 * hoverAngle : 0.5 * hoverAngle);
            this.hoverInfo = {
              n: n,
              block: block
            };
            this.update(1 / 30);
          }
        }
      } else if (this.hoverInfo && e.type === 'mouseout' && n === this.hoverInfo.n) {
        this.clearHoverInfo();
      } else if (e.type === 'click') {
        var _hover = this.getBlockByPage(n);
        if (_hover.physicId) {
          var angle = this.sheetPhysics.getParametr(_hover.physicId, 'angle');
          if ((i ? Math.PI - angle : angle) < 3 * this.dragAngle) {
            var id = _hover.physicId,
                props = _hover.getProps();
            this.sheetPhysics.setParametr(id, 'velocity', (i ? -1 : 1) * props.startVelocity);
          }
        }
      }
    };

    Book.prototype.addSheetBlock = function addSheetBlock(p, block) {
      this.sheetBlocks.splice(p, 0, block);
      this.subscribeSheetBlock(block, 2);
      this.threeSheetBlocks.add(block.three);
    };

    Book.prototype.subscribeSheetBlock = function subscribeSheetBlock(block, offset) {
      var _this4 = this;

      var eventConverter = new _CustomEventConverter2.default(this.visual.wnd, this.visual.doc, _CircleTarget2.default.test),
          r = 0.15,
          target = new _CircleTarget2.default(1 - 0.5 * r, 0.5 * r, r);
      target.block = block;
      target.callback = this.cornerCallback.bind(this);
      eventConverter.addCustom(target);
      block.cornerTarget = target;
      block.three.userData.mouseCallback = function (e, data) {
        var i = data.face.materialIndex;
        if (i < 2) {
          var n = i === 0 ? offset + 2 * block.p.first : offset + 2 * block.p.last - 1;
          eventConverter.convert(e, { x: i === 0 ? data.uv.x : 1 - data.uv.x, y: data.uv.y, i: i, n: n });
          _this4.pageManager.transferEventToTexture(n, e, data);
        }
      };
      this.visual.drag.addThree(block.three);
      this.visual.mouseEvents.addThree(block.three);
    };

    Book.prototype.removeSheetBlock = function removeSheetBlock(block) {
      this.visual.mouseEvents.removeThree(block.three);
      this.visual.drag.removeThree(block.three);
      this.threeSheetBlocks.remove(block.three);
      block.dispose();
    };

    Book.prototype.removeSheetBlocks = function removeSheetBlocks(first, size) {
      var blocks = this.sheetBlocks.splice(first, size);
      for (var _iterator4 = blocks, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i4 >= _iterator4.length) break;
          _ref4 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done) break;
          _ref4 = _i4.value;
        }

        var block = _ref4;

        this.removeSheetBlock(block);
      }
    };

    Book.prototype.setPageTexture = function setPageTexture(material, n) {
      this.pageManager.setTexture(material, n + 2);
    };

    Book.prototype.setLeftCoverTexture = function setLeftCoverTexture(material, n) {
      this.pageManager.setTexture(material, n);
    };

    Book.prototype.setRightCoverTexture = function setRightCoverTexture(material, n) {
      this.pageManager.setTexture(material, n + 2 * (this.p.sheets + 1));
    };

    Book.finishAnimationClb = function finishAnimationClb(angle) {
      this.block.set(this.book.getClosedBlockAngle(angle).closedAngle, 'closed', 0);
      var i = this.book.sheetBlocks.indexOf(this.block);
      if (~i) {
        if (angle === 0) {
          this.book.mergeSheetBlocks(i, this.book.sheetBlocks.length - i);
        } else {
          this.book.mergeSheetBlocks(0, i + 1);
        }
      }
    };

    Book.prototype.calcBlockForce = function calcBlockForce(block, object, angle, velocity, cornerHeight) {
      return block.force ? block.force(object, angle, velocity, cornerHeight) : 0;
    };

    Book.prototype.calcBlockCornerForce = function calcBlockCornerForce(block, object, angle, velocity, cornerHeight) {
      return block.cornerForce ? block.cornerForce(object, angle, velocity, cornerHeight) : 0;
    };

    Book.prototype.connectPhysics = function connectPhysics(block, mass, angle, velocity, flexibility, coverHeight, simulateClb, removeClb, progressClb) {
      var _this5 = this;

      var type = function type() {
        return _this5.hoverInfo ? 'hover' : _this5.dragInfo ? 'drag' : 'free';
      };
      block.physicId = this.sheetPhysics.addObject(mass, angle, velocity, flexibility, coverHeight, function (angl, ch) {
        simulateClb(angl, ch);
        progressClb(block, Math.abs(angle - angl) / Math.PI, 'process', type());
      }, function (angl, ch) {
        removeClb(angl, ch);
        delete block.physicId;
        progressClb(block, Math.abs(angle - angl) / Math.PI, 'finish', type());
      }, function (object, angle, velocity, cornerHeight) {
        return _this5.calcBlockForce(block, object, angle, velocity, cornerHeight);
      }, function (object, angle, velocity, cornerHeight) {
        return _this5.calcBlockCornerForce(block, object, angle, velocity, cornerHeight);
      });
      progressClb(block, 0, 'init', type());
    };

    Book.prototype.update = function update(dt) {
      this.sheetPhysics.simulate(dt);
    };

    Book.prototype.splitSheetBlock = function splitSheetBlock(i, leftSize) {
      var block = this.sheetBlocks[i];
      if (block && leftSize < block.getSize()) {
        var newBlock = new _SheetBlock2.default(this.visual, _extends({}, this.p, { setTexture: this.setPageTexture.bind(this) }), block.p.first, block.p.first + leftSize, block.angle, block.state);
        block.set(block.angle, block.state, block.corner.height, block.p.first + leftSize, block.p.last);
        this.addSheetBlock(i, newBlock);
        return [newBlock, block];
      }
    };

    Book.prototype.mergeSheetBlocks = function mergeSheetBlocks(first, size) {
      if (first < this.sheetBlocks.length) {
        size = Math.min(this.sheetBlocks.length - first, size);
        var firstBlock = this.sheetBlocks[first],
            lastBlock = this.sheetBlocks[first + size - 1];
        firstBlock.set(firstBlock.angle, firstBlock.state, firstBlock.corner.height, firstBlock.p.first, lastBlock.p.last);
        this.removeSheetBlocks(first + 1, size - 1);
      }
    };

    Book.prototype.setSheetBlocks = function setSheetBlocks(angle, state) {
      if (state === 'closed') {
        this.closedAngle = angle;
      }
      this.sheetBlocks.forEach(function (s) {
        if (!s.physicId) {
          s.set(angle, state);
        }
      });
    };

    Book.prototype.set = function set(angle) {
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this.angle = angle;
      var PI = Math.PI;
      if (angle < PI / 4) {
        this.binder.set(0);

        this.binder.setLeft(-PI / 2 + 2 * angle);
        this.leftCover.set(PI / 2, 'opened', height);

        this.setSheetBlocks(0, 'closed');

        this.binder.setRight(0);
        this.rightCover.set(0, 'closed', 0);
      } else if (angle < 2 * PI / 4) {
        var a = 2 * (angle - PI / 4);
        this.binder.set(a);

        this.binder.setLeft(-a);
        this.leftCover.set(PI / 2 + a, 'opened', height);

        this.setSheetBlocks(a, 'closed');

        this.binder.setRight(-a);
        this.rightCover.set(a, 'closed', 0);
      } else if (angle < 3 * PI / 4) {
        var _a = 2 * (angle - PI / 2);
        this.binder.set(PI / 2);

        this.binder.setLeft(-PI / 2);
        this.leftCover.set(PI, 'opened', 0);

        this.binder.setRight(-PI / 2);
        this.rightCover.set(_a, 'opened', height);
      } else if (angle < 4 * PI / 4) {
        var _a2 = 2 * (angle - 3 * PI / 4) + PI / 2;
        this.binder.set(_a2);

        this.binder.setLeft(-_a2);
        this.leftCover.set(_a2, 'closed', 0);

        this.setSheetBlocks(_a2, 'closed');

        this.binder.setRight(-PI / 2);
        this.rightCover.set(PI / 2, 'opened', height);
      } else if (angle < 5 * PI / 4) {
        this.binder.set(PI);

        this.binder.setLeft(-PI);
        this.leftCover.set(PI, 'closed', 0);

        this.setSheetBlocks(PI, 'closed');

        this.binder.setRight(-PI / 2 - 2 * (angle - PI));
        this.rightCover.set(PI / 2, 'opened', height);
      } else if (angle < 6 * PI / 4) {
        var _a3 = 2 * (angle - 5 * PI / 4);
        this.binder.set(PI - _a3);

        this.binder.setLeft(-PI + _a3);
        this.leftCover.set(PI - _a3, 'closed', 0);

        this.setSheetBlocks(PI - _a3, 'closed');

        this.binder.setRight(-PI + _a3);
        this.rightCover.set(PI / 2 - _a3, 'opened', height);
      } else if (angle < 7 * PI / 4) {
        var _a4 = 2 * (angle - 6 * PI / 4);
        this.binder.set(PI / 2);

        this.binder.setLeft(-PI / 2);
        this.leftCover.set(PI - _a4, 'opened', height);

        this.binder.setRight(-PI / 2);
        this.rightCover.set(0, 'opened', 0);
      } else if (angle < 8 * PI / 4) {
        var _a5 = 2 * (angle - 7 * PI / 4);
        this.binder.set(PI / 2 - _a5);

        this.binder.setLeft(-PI / 2);
        this.leftCover.set(PI / 2, 'opened', height);

        this.setSheetBlocks(PI / 2 - _a5, 'closed');

        this.binder.setRight(-PI / 2 + _a5);
        this.rightCover.set(PI / 2 - _a5, 'closed', 0);
      }
    };

    Book.createSideTexture = function createSideTexture(color) {
      var jC = (0, _libs.$)('<canvas width="8" height="8"></canvas>');
      var ctx = jC[0].getContext('2d');
      ctx.beginPath();
      ctx.fillStyle = _GraphUtils2.default.color2Rgba(color, 1);
      ctx.rect(0, 0, 8, 7);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = _GraphUtils2.default.color2Rgba(_GraphUtils2.default.inverseColor(color, 0.5), 1);
      ctx.rect(0, 7, 8, 1);
      ctx.fill();
      return jC[0];
    };

    Book.prepareProps = function prepareProps(props) {
      return Book.calcProps(Book.mergeProps((0, _book.props)(), props));
    };

    Book.mergeProps = function mergeProps(first, second) {
      second = second || {};
      return _extends({}, first, second, {
        sheet: _extends({}, first.sheet, second.sheet),
        cover: _extends({}, first.cover, second.cover),
        page: _extends({}, first.page, second.page)
      });
    };

    Book.calcProps = function calcProps(props) {
      var p = _extends({}, props, {
        sheet: _extends({}, props.sheet),
        cover: _extends({}, props.sheet, props.cover),
        page: _extends({}, props.sheet, props.page)
      }),
          scale = 10,
          height = scale * p.height,
          width = scale * p.width,
          flipProgressClb = function flipProgressClb() {
        return undefined;
      },
          sheet = {
        sideTexture: p.sheet.sideTexture || Book.createSideTexture(p.sheet.color)
      },
          cover = _extends({}, sheet, p.cover, {
        depth: scale * p.cover.depth,
        width: width,
        height: height,
        padding: scale * p.cover.padding
      }),
          page = _extends({}, sheet, p.page, {
        depth: scale * p.page.depth,
        width: cover.width - cover.padding,
        height: cover.height - 2 * cover.padding
      }),
          marker = {
        use: false,
        color: 0XFF0000,
        size: scale * 0.001
      };
      return _extends({}, p, { scale: scale, height: height, width: width, flipProgressClb: flipProgressClb, cover: cover, page: page, marker: marker });
    };

    return Book;
  }(_libs.THREE.EventDispatcher);

  exports.default = Book;

  /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _libs = __webpack_require__(0);

  var _Controller2 = __webpack_require__(9);

  var _Controller3 = _interopRequireDefault(_Controller2);

  var _bookController = __webpack_require__(59);

  var _EventsToActions = __webpack_require__(34);

  var _EventsToActions2 = _interopRequireDefault(_EventsToActions);

  var _stats = __webpack_require__(61);

  var _stats2 = _interopRequireDefault(_stats);

  var _Object3DWatcher = __webpack_require__(38);

  var _Object3DWatcher2 = _interopRequireDefault(_Object3DWatcher);

  var _FullScreen = __webpack_require__(19);

  var _FullScreen2 = _interopRequireDefault(_FullScreen);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var BookController = function (_Controller) {
    _inherits(BookController, _Controller);

    function BookController(book, view, props) {
      _classCallCheck(this, BookController);

      var _this = _possibleConstructorReturn(this, _Controller.call(this));

      _this.book = book;
      _this.visual = book.visual;
      _this.p = BookController.prepareProps(props);
      _this.devicePixelRatio = _this.visual.wnd.devicePixelRatio || 1;

      _this.orbit = book.visual.getOrbit();
      book.setFlipProgressClb(_this.updateViewIfState.bind(_this));
      _this.view = view;
      _this.bindActions();

      _this.state = {
        smartPan: !_this.actions['cmdSmartPan'].active,
        singlePage: _this.actions['cmdSinglePage'].active || _this.actions['cmdSinglePage'].activeForMobile && _this.devicePixelRatio > 1,
        stats: _this.actions['cmdStats'].active,
        lighting: _this.p.lighting.default,
        activeSide: 1
      };

      _this.boxs = [new _libs.THREE.Box3(), new _libs.THREE.Box3()];
      _this.bookWatcher = new _Object3DWatcher2.default(_this.visual, function () {
        if (_this.state.singlePage) {
          if (_this.state.activeSide) {
            _this.boxs[0].setFromObject(book.rightCover.three);
          } else {
            _this.boxs[0].setFromObject(book.leftCover.three);
          }
        } else {
          _this.boxs[0].setFromObject(book.leftCover.three);
          _this.boxs[1].setFromObject(book.rightCover.three);
          _this.boxs[0].union(_this.boxs[1]);
        }
        return _this.boxs[0];
      });
      _this.bookWatcher.scale = _this.p.scale.default;

      _this.Stats = new _stats2.default();
      _this.Stats.domElement.style.position = 'absolute';
      _this.Stats.domElement.style.top = '0px';

      _this.visual.setExtraLighting(_this.state.lighting);
      _this.binds = {
        onScreenModeChanged: _this.onScreenModeChanged.bind(_this),
        stats: _this.Stats.update.bind(_this.Stats),
        onUpdateView: _this.updateView.bind(_this)
      };
      _FullScreen2.default.addEventListener(_this.visual.doc, _this.binds.onScreenModeChanged);

      _this.cmdSmartPan();
      return _this;
    }

    BookController.prototype.dispose = function dispose() {
      _FullScreen2.default.removeEventListener(this.visual.doc, this.binds.onScreenModeChanged);
      delete this.book;
      delete this.view;
      delete this.visual;
    };

    BookController.prototype.setTocCtrl = function setTocCtrl(tocCtrl) {
      this.tocCtrl = tocCtrl;
      this.tocCtrl.onChange = this.updateView.bind(this);
      this.updateView();
    };

    BookController.prototype.setPrinter = function setPrinter(printer) {
      this.printer = printer;
      this.updateView();
    };

    BookController.prototype.setSounds = function setSounds(sounds) {
      this.sounds = sounds;
      sounds.setEnabled(this.actions['cmdSounds'].active);
      this.updateView();
    };

    BookController.prototype.onScreenModeChanged = function onScreenModeChanged(e) {
      this.updateView();
    };

    BookController.prototype.canZoomIn = function canZoomIn() {
      return !this.state.smartPan || Math.abs(this.bookWatcher.scale - this.p.scale.max) > this.p.eps;
    };

    BookController.prototype.canZoomOut = function canZoomOut() {
      return !this.state.smartPan || Math.abs(this.bookWatcher.scale - this.p.scale.min) > this.p.eps;
    };

    BookController.prototype.canDefaultZoom = function canDefaultZoom() {
      return this.state.smartPan;
    };

    BookController.prototype.cmdZoomIn = function cmdZoomIn() {
      if (this.state.smartPan) {
        this.bookWatcher.scale = Math.min(this.p.scale.max, this.bookWatcher.scale + this.p.scale.delta);
      } else {
        this.orbit.zoomIn(6.6 * this.p.scale.delta / 0.32);
      }
      this.updateView();
    };

    BookController.prototype.cmdZoomOut = function cmdZoomOut() {
      if (this.state.smartPan) {
        this.bookWatcher.scale = Math.max(this.p.scale.min, this.bookWatcher.scale - this.p.scale.delta);
      } else {
        this.orbit.zoomOut(6.6 * this.p.scale.delta / 0.32);
      }
      this.updateView();
    };

    BookController.prototype.cmdDefaultZoom = function cmdDefaultZoom() {
      if (this.state.smartPan) {
        this.bookWatcher.scale = this.p.scale.default;
        this.updateView();
      }
    };

    BookController.prototype.cmdToc = function cmdToc() {
      if (this.tocCtrl) {
        this.tocCtrl.togle();
      }
    };

    BookController.prototype.cmdFastBackward = function cmdFastBackward() {
      this.startFlip(this.book.flipLeft(5));
    };

    BookController.prototype.cmdBackward = function cmdBackward() {
      if (this.state.singlePage) {
        this.state.activeSide = (this.getPage() + 1) % 2;
        if (this.state.activeSide) {
          this.state.activeSide = 0;
          this.updateView();
        } else if (this.startFlip(this.book.flipLeft(1))) {
          this.state.activeSide = 1;
        }
      } else {
        this.startFlip(this.book.flipLeft(1));
      }
    };

    BookController.prototype.cmdForward = function cmdForward() {
      if (this.state.singlePage) {
        this.state.activeSide = (this.getPage() + 1) % 2;
        if (!this.state.activeSide) {
          this.state.activeSide = 1;
          this.updateView();
        } else if (this.startFlip(this.book.flipRight(1))) {
          this.state.activeSide = 0;
        }
      } else {
        this.startFlip(this.book.flipRight(1));
      }
    };

    BookController.prototype.cmdFastForward = function cmdFastForward() {
      this.startFlip(this.book.flipRight(5));
    };

    BookController.prototype.cmdSave = function cmdSave() {
      window.open(this.p.downloadURL, '_blank');
    };

    BookController.prototype.cmdPrint = function cmdPrint() {
      this.printer.print();
    };

    BookController.prototype.cmdFullScreen = function cmdFullScreen() {
      if (!_FullScreen2.default.activated()) {
        _FullScreen2.default.request(this.view.getContainer());
      } else {
        _FullScreen2.default.cancel();
      }
    };

    BookController.prototype.cmdSmartPan = function cmdSmartPan() {
      this.state.smartPan = !this.state.smartPan;
      if (this.state.smartPan) {
        this.orbit.minAzimuthAngle = 0;
        this.orbit.maxAzimuthAngle = 0;
        this.orbit.minPolarAngle = 0;
        this.orbit.maxPolarAngle = Math.PI / 4;
        this.bookWatcher.enabled = true;
      } else {
        this.orbit.minAzimuthAngle = -Infinity;
        this.orbit.maxAzimuthAngle = Infinity;
        this.orbit.minPolarAngle = 0;
        this.orbit.maxPolarAngle = Math.PI;
        this.bookWatcher.enabled = false;
      }
      this.updateView();
    };

    BookController.prototype.cmdSinglePage = function cmdSinglePage() {
      this.state.singlePage = !this.state.singlePage;
      this.updateView();
    };

    BookController.prototype.cmdSounds = function cmdSounds() {
      if (this.sounds) {
        this.sounds.togle();
      }
      this.updateView();
    };

    BookController.prototype.cmdStats = function cmdStats() {
      this.state.stats = !this.state.stats;
      if (this.state.stats) {
        (0, _libs.$)(this.view.getContainer()).append(this.Stats.domElement);
        this.visual.addRenderCallback(this.binds.stats);
      } else {
        (0, _libs.$)(this.view.getContainer()).find(this.Stats.domElement).remove();
        this.visual.removeRenderCallback(this.binds.stats);
      }
      this.updateView();
    };

    BookController.prototype.cmdLightingUp = function cmdLightingUp() {
      this.state.lighting = Math.min(this.state.lighting + this.p.lighting.delta, this.p.lighting.max);
      this.visual.setExtraLighting(this.state.lighting);
      this.updateView();
    };

    BookController.prototype.cmdLightingDown = function cmdLightingDown() {
      this.state.lighting = Math.max(this.state.lighting - this.p.lighting.delta, this.p.lighting.min);
      this.visual.setExtraLighting(this.state.lighting);
      this.updateView();
    };

    BookController.prototype.goToPage = function goToPage(page) {
      var _this2 = this;

      var pageNum = Math.max(Math.min(page, this.book.getPages() - 1), 0);
      this.state.activeSide = (pageNum + 1) % 2;
      var target = Math.max(Math.min(page - 1 + page % 2, this.book.getPages() - 1), 0),
          current = this.book.getPage(),
          flips = [],
          covs = 0;;
      if (target != current) {
        if (current === 0) {
          flips.push(1);
          current += 1;
          ++covs;
        } else if (current === this.book.getPages() - 1) {
          flips.push(-1);
          current -= 2;
          ++covs;
        }
        var cv = 0;
        if (target === 0) {
          cv = -1;
          target += 1;
          ++covs;
        } else if (target === this.book.getPages() - 1) {
          cv = 1;
          target -= 2;
          ++covs;
        }
        if (target - current) {
          flips.push(Math.ceil((target - current) / 2));
        }
        if (cv) {
          flips.push(cv);
        }
      }

      var setClb = function setClb(fl, time, clb) {
        setTimeout(function () {
          if (fl < 0) {
            _this2.startFlip(_this2.book.flipLeft(-fl, clb));
          } else {
            _this2.startFlip(_this2.book.flipRight(fl, clb));
          }
        }, time);
      };

      if (covs === 2) {
        setClb(flips[0], 0, function (block, progress, state) {
          if (state == 'finish' && progress == 1) {
            setClb(flips[flips.length - 1], 0);
          }
        });
        setClb(flips[1], 500);
      } else {
        var time = 0;
        for (var _iterator = flips, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var fl = _ref;

          setClb(fl, time);
          time += 250;
        }
      }
    };

    BookController.prototype.startFlip = function startFlip(block) {
      if (block) {
        this.dispatchAsync({
          type: 'startFlip'
        });
      }
      return block;
    };

    BookController.prototype.endFlip = function endFlip(block) {
      this.dispatchAsync({
        type: 'endFlip'
      });
      return block;
    };

    BookController.prototype.getPage = function getPage() {
      var page = this.book.getPage();
      return page ? Math.min(this.book.getPage() + this.state.activeSide, this.book.getPages() - 1) : 0;
    };

    BookController.prototype.getPageForGUI = function getPageForGUI() {
      return (this.state.singlePage ? this.getPage() : this.book.getPage()) + 1;
    };

    BookController.prototype.inpPage = function inpPage(e, data) {
      this.goToPage(data - 1);
    };

    BookController.prototype.updateViewIfState = function updateViewIfState(block, progress, state, type) {
      if (state === 'init' || state === 'finish') {
        setTimeout(this.updateView.bind(this), 100);
      }
      if (state === 'finish') {
        this.endFlip(block);
      }
    };

    BookController.prototype.updateView = function updateView() {
      if (this.view) {
        this.view.setState('cmdZoomIn', {
          enable: this.canZoomIn(),
          visible: this.actions['cmdZoomIn'].enabled,
          active: false
        });

        this.view.setState('cmdZoomOut', {
          enable: this.canZoomOut(),
          visible: this.actions['cmdZoomOut'].enabled,
          active: false
        });

        this.view.setState('cmdDefaultZoom', {
          enable: this.canDefaultZoom(),
          visible: this.actions['cmdDefaultZoom'].enabled,
          active: this.canDefaultZoom() && Math.abs(this.bookWatcher.scale - this.p.scale.default) < this.p.eps
        });

        this.view.setState('cmdToc', {
          enable: !!this.tocCtrl,
          visible: this.actions['cmdToc'].enabled && this.tocCtrl,
          active: this.tocCtrl && this.tocCtrl.visible
        });

        var left = this.book.getLeftFlipping(),
            right = this.book.getRightFlipping();

        var flippersEnable = {
          cmdFastBackward: !!left,
          cmdBackward: !!left,
          cmdForward: !!right,
          cmdFastForward: !!right
        };

        for (var _iterator2 = Object.keys(flippersEnable), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var name = _ref2;

          this.view.setState(name, {
            enable: flippersEnable[name],
            visible: this.actions[name].enabled,
            active: false
          });
        }

        this.view.setState('inpPages', {
          visible: true,
          value: this.book.getPages()
        });

        this.view.setState('inpPage', {
          visible: true,
          enable: !this.book.isProcessing(),
          value: this.getPageForGUI()
        });

        this.view.setState('cmdSave', {
          enable: true,
          visible: this.actions['cmdSave'].enabled && !!this.p.downloadURL,
          active: false
        });

        this.view.setState('cmdPrint', {
          enable: true,
          visible: this.actions['cmdPrint'].enabled && !!this.printer,
          active: false
        });

        this.view.setState('cmdFullScreen', {
          enable: _FullScreen2.default.available(),
          visible: this.actions['cmdFullScreen'].enabled,
          active: _FullScreen2.default.available() && _FullScreen2.default.activated()
        });

        this.view.setState('widSettings', {
          enable: true,
          visible: this.actions['widSettings'].enabled,
          active: false
        });

        this.view.setState('cmdSmartPan', {
          enable: true,
          visible: this.actions['cmdSmartPan'].enabled,
          active: this.state.smartPan
        });

        this.view.setState('cmdSinglePage', {
          enable: true,
          visible: this.actions['cmdSinglePage'].enabled,
          active: this.state.singlePage
        });

        this.view.setState('cmdSounds', {
          enable: true,
          visible: this.actions['cmdSounds'].enabled && !!this.sounds,
          active: !!this.sounds && this.sounds.enabled
        });

        this.view.setState('cmdStats', {
          enable: true,
          visible: this.actions['cmdStats'].enabled,
          active: this.state.stats
        });

        this.view.setState('cmdLightingUp', {
          enable: Math.abs(this.state.lighting - this.p.lighting.max) > this.p.eps,
          visible: this.actions['cmdLightingUp'].enabled,
          active: false
        });

        this.view.setState('cmdLightingDown', {
          enable: Math.abs(this.state.lighting - this.p.lighting.min) > this.p.eps,
          visible: this.actions['cmdLightingDown'].enabled,
          active: false
        });
      }
    };

    BookController.prototype.getActions = function getActions() {
      var _this3 = this;

      return {
        cmdZoomIn: {
          activate: this.cmdZoomIn.bind(this)
        },
        cmdZoomOut: {
          activate: this.cmdZoomOut.bind(this)
        },
        cmdDefaultZoom: {
          activate: this.cmdDefaultZoom.bind(this)
        },
        cmdToc: {
          activate: this.cmdToc.bind(this)
        },
        cmdFastBackward: {
          activate: this.cmdFastBackward.bind(this)
        },
        cmdBackward: {
          activate: this.cmdBackward.bind(this)
        },
        cmdForward: {
          activate: this.cmdForward.bind(this)
        },
        cmdFastForward: {
          activate: this.cmdFastForward.bind(this)
        },
        cmdSave: {
          activate: this.cmdSave.bind(this)
        },
        cmdPrint: {
          activate: this.cmdPrint.bind(this)
        },
        cmdFullScreen: {
          activate: this.cmdFullScreen.bind(this)
        },
        cmdSmartPan: {
          activate: this.cmdSmartPan.bind(this)
        },
        cmdSinglePage: {
          activate: this.cmdSinglePage.bind(this)
        },
        cmdSounds: {
          activate: this.cmdSounds.bind(this)
        },
        cmdStats: {
          activate: this.cmdStats.bind(this)
        },
        cmdLightingUp: {
          activate: this.cmdLightingUp.bind(this)
        },
        cmdLightingDown: {
          activate: this.cmdLightingDown.bind(this)
        },
        cmdPanLeft: {
          activate: function activate(e) {
            return _this3.orbit.actions.pan(e, {
              state: 'move',
              dx: -_this3.p.pan.speed,
              dy: 0
            });
          }
        },
        cmdPanRight: {
          activate: function activate(e) {
            return _this3.orbit.actions.pan(e, {
              state: 'move',
              dx: _this3.p.pan.speed,
              dy: 0
            });
          }
        },
        cmdPanUp: {
          activate: function activate(e) {
            return _this3.orbit.actions.pan(e, {
              state: 'move',
              dx: 0,
              dy: -_this3.p.pan.speed
            });
          }
        },
        cmdPanDown: {
          activate: function activate(e) {
            return _this3.orbit.actions.pan(e, {
              state: 'move',
              dx: 0,
              dy: _this3.p.pan.speed
            });
          }
        },
        mouseCmdRotate: {
          activate: this.orbit.actions.rotate
        },
        mouseCmdDragZoom: {
          activate: function activate(e, data) {
            if (data.dy > 0) {
              _this3.cmdZoomOut();
            } else if (data.dy < 0) {
              _this3.cmdZoomIn();
            }
          }
        },
        mouseCmdPan: {
          activate: this.orbit.actions.pan
        },
        mouseCmdWheelZoom: {
          activate: function activate(e) {
            e.preventDefault();
            if (e.deltaY < 0) {
              _this3.cmdZoomOut();
            } else if (e.deltaY > 0) {
              _this3.cmdZoomIn();
            }
          }
        },
        touchCmdRotate: {
          activate: this.orbit.actions.rotate
        },
        touchCmdZoom: {
          activate: function activate(e, data) {
            if (data.dy > 0) {
              _this3.cmdZoomOut();
            } else if (data.dy < 0) {
              _this3.cmdZoomIn();
            }
          }
        },
        touchCmdPan: {
          activate: this.orbit.actions.pan
        },
        widSettings: {
          activate: function activate() {
            return undefined;
          }
        }
      };
    };

    BookController.prototype.bindActions = function bindActions() {
      this.eToA = new _EventsToActions2.default((0, _libs.$)(this.visual.element));
      this.eToA.addAction(function (e) {
        return e.preventDefault();
      }, 'contextmenu', _EventsToActions2.default.mouseButtons.Right, 0);

      this.actions = this.getActions();
      for (var _iterator3 = Object.keys(this.actions), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var name = _ref3;

        var action = _extends({}, this.actions[name], this.p.actions[name]);
        this.actions[name] = action;
        if (action.enabled) {
          var flags = action.flags || 0;
          if (action.type) {
            this.eToA.addAction(action.activate, action.type, action.code, flags);
          } else if (action.code !== undefined) {
            this.eToA.addAction(action.activate, 'keydown', action.code, flags);
          }
        }
      }
    };

    BookController.prepareProps = function prepareProps(props) {
      return BookController.calcProps(BookController.mergeProps((0, _bookController.props)(), props));
    };

    BookController.setActions = function setActions(props, actions) {
      for (var _iterator4 = Object.keys(actions || {}), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i4 >= _iterator4.length) break;
          _ref4 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done) break;
          _ref4 = _i4.value;
        }

        var name = _ref4;

        props.actions[name] = _extends({}, props.actions[name], actions[name]);
      }
    };

    BookController.mergeProps = function mergeProps(first, second) {
      second = second || {};
      var props = _extends({}, first, second, {
        scale: _extends({}, first.scale, second.scale),
        lighting: _extends({}, first.lighting, second.lighting),
        pan: _extends({}, first.pan, second.pan),
        actions: _extends({}, first.actions)
      });
      BookController.setActions(props, first.actions);
      BookController.setActions(props, second.actions);
      return props;
    };

    BookController.calcProps = function calcProps(props) {
      props.scale.delta = (props.scale.max - props.scale.min) / props.scale.levels;
      props.lighting.delta = (props.lighting.max - props.lighting.min) / props.lighting.levels;
      return props;
    };

    return BookController;
  }(_Controller3.default);

  exports.default = BookController;

  /***/
},
/* 25 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var BookPrinter = function () {
    function BookPrinter(context, book, styleSheet) {
      _classCallCheck(this, BookPrinter);

      this.book = book;
      this.styleSheet = styleSheet;
      this.wnd = context.wnd;
      this.doc = context.doc;
      this.pageCallback = book.getPageCallback();
      var test = this.pageCallback(0);
      this.type = test.type;
      if (this.type === 'pdf') {
        this.pdfSrc = test.src.src;
      }
    }

    BookPrinter.prototype.cancel = function cancel() {
      this.canceled = true;
    };

    BookPrinter.prototype.dispose = function dispose() {
      if (this.frame) {
        this.frame.remove();
        delete this.frame;
      }
    };

    BookPrinter.prototype.print = function print() {
      var _this = this;

      delete this.canceled;
      if (this.type === 'pdf') {
        (function () {
          var printWnd = void 0,
              callManually = false;
          if (_this.useIFrame()) {
            callManually = !!_this.frame;
            if (!_this.frame) {
              _this.frame = (0, _libs.$)('<iframe src="' + _this.pdfSrc + '" style="display: none;"></iframe>').appendTo(_this.doc.body);
            }
            printWnd = _this.frame[0].contentWindow;
          } else {
            printWnd = _this.wnd.open(_this.pdfSrc);
          }
          if (callManually) {
            printWnd.print();
          } else {
            (0, _libs.$)(printWnd).on('load', function () {
              try {
                printWnd.print();
              } catch (e) {
                console.error(e);
              }
            });
          }
        })();
      } else {
        this.renderContent().then(function (content) {
          var printWnd = _this.wnd.open(),
              printDoc = printWnd.document,
              html = '\n            <!DOCTYPE html>\n            <html>\n              <head>\n                <meta charset="utf-8">\n                <title>3D FlipBook - Printing</title>\n                ' + content.head + '\n                <script type="text/javascript">\n                  function printDocument() {\n                    window.print();\n                    window.close();\n                  }\n                  function init() {\n                    setTimeout(printDocument, 100);\n                  }\n                </script>\n              </head>\n              <body onload="init()">\n                ' + content.body + '\n              </body>\n            </html>\n          ';
          printDoc.open();
          printDoc.write(html);
          printDoc.close();
        }).catch(function (e) {
          return console.warn('3D FlipBook - Printing was canceled');
        });
      }
    };

    BookPrinter.prototype.progress = function progress(v) {
      if (this.canceled) {
        throw 'Cancel Printing';
      }
      if (this.onProgress) {
        this.onProgress(Math.floor(v * 100));
      }
    };

    BookPrinter.prototype.renderContent = function renderContent() {
      var _this2 = this;

      var pages = this.book.getPages(),
          head = new Set(),
          body = [];
      var done = Promise.resolve();

      var _loop = function _loop(page) {
        var info = _this2.pageCallback(page);
        if (info.type === 'image') {
          done = done.then(function () {
            _this2.progress(page / pages);
            return _this2.renderImage(head, body, info.src);
          });
        } else if (info.type === 'html') {
          done = done.then(function () {
            _this2.progress(page / pages);
            return _this2.renderHtml(head, body, info.src);
          });
        }
      };

      for (var page = 0; page < pages; ++page) {
        _loop(page);
      }
      return done.then(function () {
        _this2.progress(1);
        return { head: _this2.renderHead(head), body: body.join('\n') };
      });
    };

    BookPrinter.wrap = function wrap(content) {
      return '<div class="fb3d-printer-page">' + content + '</div>';
    };

    BookPrinter.prototype.renderImage = function renderImage(head, body, src) {
      body.push(BookPrinter.wrap('<img src="' + src + '" />'));
    };

    BookPrinter.prototype.renderHtml = function renderHtml(head, body, src) {
      return new Promise(function (resolve, reject) {
        _libs.$.get(src, function (html) {
          var links = html.match(/<link.*?>/ig) || [];
          for (var _iterator = links, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var link = _ref;

            if (link.match(/stylesheet/i)) {
              var href = link.match(/href\s*=\s*['"](.*)['"]/i);
              if (href) {
                head.add(href[1]);
              }
            }
          }
          var content = html.match(/<body.*?>([\S\s]*)<\/body>/i);
          if (content) {
            body.push(BookPrinter.wrap(content[1]));
          }
          resolve();
        }).fail(function (e) {
          console.error(e.responseText);
          reject();
        });
      });
    };

    BookPrinter.prototype.renderHead = function renderHead(head) {
      var content = [];
      head.forEach(function (k) {
        return content.push('<link rel="stylesheet" href="' + k + '">');
      });
      content.push(this.styleSheet ? '<link rel="stylesheet" href="' + this.styleSheet + '">' : BookPrinter.defaultStyleSheet());
      return content.join('\n');
    };

    BookPrinter.prototype.useIFrame = function useIFrame() {
      var isChromium = this.wnd.chrome,
          winNav = this.wnd.navigator,
          vendorName = winNav.vendor,
          isIEedge = winNav.userAgent.indexOf("Edge") > -1,
          isIOSChrome = winNav.userAgent.match("CriOS");
      var use = void 0;
      if (isIOSChrome) {
        use = true;
      } else if (isChromium && vendorName === 'Google Inc.' && !isIEedge) {
        use = true;
      } else {
        use = false;
      }
      return use;
    };

    BookPrinter.defaultStyleSheet = function defaultStyleSheet() {
      return '\n      <style type="text/css">\n        body {\n          margin: 0;\n          padding: 0;\n        }\n        .fb3d-printer-page {\n          page-break-after: always;\n        }\n      </style>\n    ';
    };

    return BookPrinter;
  }();

  exports.default = BookPrinter;

  /***/
},
/* 26 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _View2 = __webpack_require__(50);

  var _View3 = _interopRequireDefault(_View2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var BookView = function (_View) {
    _inherits(BookView, _View);

    function BookView(container, onLoad, template, handler) {
      _classCallCheck(this, BookView);

      return _possibleConstructorReturn(this, _View.call(this, container, onLoad, template, handler));
    }

    BookView.prototype.initView = function initView() {
      this.view = this.container.find('.view');
      this.bookmarksView = this.container.find('.widBookmarks');
      this.thumbnailsView = this.container.find('.widThumbnails');
    };

    BookView.prototype.getHandlers = function getHandlers(id) {
      var _this2 = this;

      var handlers = void 0;
      if (id === 'inpPage') {
        handlers = [{
          inpPage: function inpPage(e, data) {
            return _this2.callLater(_View.prototype.getHandlers.call(_this2, id), id, e, data, BookView.PAGE_HANDLER_DELAY);
          }
        }];
      } else {
        handlers = _View.prototype.getHandlers.call(this, id);
      }
      return handlers;
    };

    BookView.prototype.onItemStateChanged = function onItemStateChanged(id, state) {
      if (id === 'cmdFullScreen') {
        if (state.active) {
          this.container.addClass('fullscreen');
        } else {
          this.container.removeClass('fullscreen');
        }
      }
    };

    BookView.prototype.getView = function getView() {
      return this.view;
    };

    BookView.prototype.getBookmarksView = function getBookmarksView() {
      return this.bookmarksView;
    };

    BookView.prototype.getThumbnailsView = function getThumbnailsView() {
      return this.thumbnailsView;
    };

    BookView.prototype.getForms = function getForms() {
      return [];
    };

    BookView.prototype.getLinks = function getLinks() {
      return ['cmdZoomIn', 'cmdZoomOut', 'cmdDefaultZoom', 'cmdToc', 'cmdFastBackward', 'cmdBackward', 'cmdForward', 'cmdFastForward', 'cmdSave', 'cmdPrint', 'cmdFullScreen', 'cmdSmartPan', 'cmdSinglePage', 'cmdSounds', 'cmdStats', 'cmdLightingUp', 'cmdLightingDown', 'cmdCloseToc', 'cmdBookmarks', 'cmdThumbnails'];
    };

    BookView.prototype.getWidgets = function getWidgets() {
      return ['widLoadingProgress', 'widFloatWnd', 'widTocMenu', 'widBookmarks', 'widThumbnails', 'widSettings'];
    };

    BookView.prototype.getInputs = function getInputs() {
      return ['inpPage', 'inpPages'];
    };

    BookView.prototype.getTexts = function getTexts() {
      return ['txtLoadingProgress'];
    };

    BookView.prototype.getTemplate = function getTemplate() {
      return {
        html: 'templates/default-book-view.html',
        styles: ['css/font-awesome.min.css', 'css/black-book-view.css'],
        script: 'js/default-book-view.js'
      };
    };

    return BookView;
  }(_View3.default);

  BookView.PAGE_HANDLER_DELAY = 1000;
  exports.default = BookView;

  /***/
},
/* 27 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Bookmarks = function () {
    function Bookmarks(container, items) {
      var _this = this;

      var getTitle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (i) {
        return i.title;
      };
      var getItems = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (i) {
        return i.items;
      };

      _classCallCheck(this, Bookmarks);

      this.container = container;
      this.map = [];
      this.getTitle = getTitle;
      this.getItems = getItems;
      this.nodes = this.mapNodes(items, this.map);

      this.binds = {
        togle: function togle(e) {
          e.preventDefault();
          var li = (0, _libs.$)(e.target);
          while (li[0] && li[0] !== container[0] && !li.hasClass('item')) {
            li = (0, _libs.$)(li[0].parentNode);
          }
          if (li.hasClass('item')) {
            var cmd = (0, _libs.$)(e.target);
            while (cmd[0] && cmd[0] !== li[0] && !cmd.hasClass('cmd')) {
              cmd = (0, _libs.$)(cmd[0].parentNode);
            }
            if (cmd.hasClass('cmd')) {
              var node = _this.map[li.attr('data-id')];
              if (cmd.hasClass('togle')) {
                node.minimized = !node.minimized;
                if (node.minimized) {
                  li.find('ul').remove();
                  li.find('.togle').addClass('minimized');
                } else {
                  li.find('.togle').removeClass('minimized');
                  li.append((_this.renderNode(node).match(/<ul.*<\/ul>/) || [''])[0]);
                }
              } else {
                if (_this.onNavigate) {
                  _this.onNavigate(node.item);
                }
              }
            }
          }
        }
      };

      container.on('click', this.binds.togle);
      this.update();
    }

    Bookmarks.prototype.getSize = function getSize() {
      return this.map.length;
    };

    Bookmarks.prototype.dispose = function dispose() {
      this.container.off('click', this.binds.togle);
      this.container.html('');
    };

    Bookmarks.prototype.update = function update() {
      this.container.html(this.renderNodes(this.nodes));
    };

    Bookmarks.prototype.forEach = function forEach(f) {
      var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.nodes;

      for (var _iterator = nodes || [], _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var node = _ref;

        f(node);
        this.forEach(f, node.children);
      }
    };

    Bookmarks.prototype.expand = function expand() {
      this.forEach(function (n) {
        return n.minimized = false;
      });
      this.update();
    };

    Bookmarks.prototype.minimize = function minimize() {
      this.forEach(function (n) {
        return n.minimized = true;
      });
      this.update();
    };

    Bookmarks.prototype.renderNode = function renderNode(node) {
      return ['<div class="area">', node.children ? '<a href="#" class="cmd togle' + (node.minimized ? ' minimized' : '') + '"><i class="fa fa-angle-right"></i></a> ' : '<i class="white-space"></i> ', '<a class="cmd" title="', node.title, '" href="#">', node.title, '</a></div>', node.minimized ? '' : this.renderNodes(node.children)].join('');
    };

    Bookmarks.prototype.renderNodes = function renderNodes(nodes) {
      var res = ['<div class="bookmarks">'];
      if (nodes && nodes.length) {
        res.push('<ul class="level-', nodes[0].level, '">');
        for (var _iterator2 = nodes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var node = _ref2;

          res.push(['<li class="item" data-id="', node.id, '">', this.renderNode(node), '</li>'].join(''));
        }
        res.push('</ul>');
      }
      res.push('</div>');
      return res.join('');
    };

    Bookmarks.prototype.mapNodes = function mapNodes(items) {
      var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var nodes = null;
      if (items && items.length) {
        nodes = [];
        for (var _iterator3 = items, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
          }

          var item = _ref3;

          var id = map.length;
          map.push(undefined);
          var node = {
            id: id,
            title: this.getTitle(item),
            level: level,
            item: item,
            minimized: true,
            children: this.mapNodes(this.getItems(item), map, level + 1)
          };
          nodes.push(node);
          map[id] = node;
        }
      }
      return nodes;
    };

    return Bookmarks;
  }();

  exports.default = Bookmarks;

  /***/
},
/* 28 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _BookPropsBuilder2 = __webpack_require__(7);

  var _BookPropsBuilder3 = _interopRequireDefault(_BookPropsBuilder2);

  var _ImageFactory = __webpack_require__(5);

  var _ImageFactory2 = _interopRequireDefault(_ImageFactory);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ClbBookPropsBuilder = function (_BookPropsBuilder) {
    _inherits(ClbBookPropsBuilder, _BookPropsBuilder);

    function ClbBookPropsBuilder(context, pageCallback, pages, onReady) {
      _classCallCheck(this, ClbBookPropsBuilder);

      var _this = _possibleConstructorReturn(this, _BookPropsBuilder.call(this, onReady));

      _this.calcSheets(pages);
      _this.pageCallback = pageCallback;
      _this.binds = {
        pageCallback: pageCallback.bind(_this)
      };
      _this.imageFactory = new _ImageFactory2.default(context);

      if (pages > 0) {
        (function () {
          var test = _this.imageFactory.build(pageCallback(0), 0, _this.defaults.sheet.widthTexels, _this.defaults.sheet.heightTexels, _this.defaults.sheet.color);
          test.onLoad = function () {
            _this.calcProps(test.width, test.height);
            test.dispose();
            _this.ready();
          };
        })();
      } else {
        _this.props = _this.defaults;
        _this.ready();
      }
      return _this;
    }

    return ClbBookPropsBuilder;
  }(_BookPropsBuilder3.default);

  exports.default = ClbBookPropsBuilder;

  /***/
},
/* 29 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _SheetBlock2 = __webpack_require__(11);

  var _SheetBlock3 = _interopRequireDefault(_SheetBlock2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Cover = function (_SheetBlock) {
    _inherits(Cover, _SheetBlock);

    function Cover(visual, p, angle, state) {
      _classCallCheck(this, Cover);

      return _possibleConstructorReturn(this, _SheetBlock.call(this, visual, p, 0, 1, angle, state));
    }

    Cover.prototype.getProps = function getProps() {
      return _extends({}, this.p.cover, {
        sheets: 1
      });
    };

    Cover.prototype.loadPoints = function loadPoints() {
      var openedInterpolationIndeces = [[2, 3, 4], [2, 3, 4, 5, 6]],
          closedInterpolationIndeces = [[0, 1, 2], [0, 1, 2]],
          interpolationPoints = [{
        x: [[0, 0.2877, 0.6347, 0.8174, 1.0000], [0, 0.2831, 0.6256, 0.8082, 0.9909], [0, 0.2603, 0.5936, 0.7763, 0.9589], [0, 0.1370, 0.3881, 0.5342, 0.6758], [0, 0, 0, 0, 0]],
        y: [[0, 0, 0, 0, 0], [0, 0.02, 0.005, -0.001, -0.0025], [0, 0.04, 0.01, -0.002, -0.005], [0, 0.2466, 0.4795, 0.5708, 0.6758], [0, 0.2877, 0.6347, 0.8174, 1.0000]]
      }, {
        x: [[0, 0.2877, 0.6347, 0.8174, 1.0000], [0, 0.2831, 0.6256, 0.8082, 0.9909], [0, 0.2603, 0.5936, 0.7763, 0.9589], [0.000, 0.233, 0.563, 0.746, 0.927], [0.000, 0.144, 0.433, 0.613, 0.796], [0.000, 0.070, 0.288, 0.455, 0.626], [0, 0, 0, 0, 0]],
        y: [[0, 0, 0, 0, 0], [0, 0.02, 0.005, -0.001, -0.0025], [0, 0.04, 0.01, -0.002, -0.005], [0.000, 0.168, 0.269, 0.270, 0.255], [0.000, 0.245, 0.435, 0.458, 0.460], [0.000, 0.278, 0.544, 0.614, 0.673], [0, 0.2877, 0.6347, 0.8174, 1.0000]]
      }];
      return {
        interpolationPoints: interpolationPoints,
        openedInterpolationIndeces: openedInterpolationIndeces,
        closedInterpolationIndeces: closedInterpolationIndeces
      };
    };

    return Cover;
  }(_SheetBlock3.default);

  exports.default = Cover;

  /***/
},
/* 30 */
/***/function (module, exports) {

  "use strict";
  "use strict";

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Delaunay = function () {
    function Delaunay() {
      _classCallCheck(this, Delaunay);
    }

    Delaunay.supertriangle = function supertriangle(vertices) {
      var xmin = Number.POSITIVE_INFINITY,
          ymin = Number.POSITIVE_INFINITY,
          xmax = Number.NEGATIVE_INFINITY,
          ymax = Number.NEGATIVE_INFINITY,
          i,
          dx,
          dy,
          dmax,
          xmid,
          ymid;

      for (i = vertices.length; i--;) {
        if (vertices[i][0] < xmin) xmin = vertices[i][0];
        if (vertices[i][0] > xmax) xmax = vertices[i][0];
        if (vertices[i][1] < ymin) ymin = vertices[i][1];
        if (vertices[i][1] > ymax) ymax = vertices[i][1];
      }

      dx = xmax - xmin;
      dy = ymax - ymin;
      dmax = Math.max(dx, dy);
      xmid = xmin + dx * 0.5;
      ymid = ymin + dy * 0.5;

      return [[xmid - 20 * dmax, ymid - dmax], [xmid, ymid + 20 * dmax], [xmid + 20 * dmax, ymid - dmax]];
    };

    Delaunay.circumcircle = function circumcircle(vertices, i, j, k) {
      var x1 = vertices[i][0],
          y1 = vertices[i][1],
          x2 = vertices[j][0],
          y2 = vertices[j][1],
          x3 = vertices[k][0],
          y3 = vertices[k][1],
          fabsy1y2 = Math.abs(y1 - y2),
          fabsy2y3 = Math.abs(y2 - y3),
          xc,
          yc,
          m1,
          m2,
          mx1,
          mx2,
          my1,
          my2,
          dx,
          dy;

      /* Check for coincident points */
      if (fabsy1y2 < Delaunay.EPSILON && fabsy2y3 < Delaunay.EPSILON) throw new Error("Eek! Coincident points!");

      if (fabsy1y2 < Delaunay.EPSILON) {
        m2 = -((x3 - x2) / (y3 - y2));
        mx2 = (x2 + x3) / 2.0;
        my2 = (y2 + y3) / 2.0;
        xc = (x2 + x1) / 2.0;
        yc = m2 * (xc - mx2) + my2;
      } else if (fabsy2y3 < Delaunay.EPSILON) {
        m1 = -((x2 - x1) / (y2 - y1));
        mx1 = (x1 + x2) / 2.0;
        my1 = (y1 + y2) / 2.0;
        xc = (x3 + x2) / 2.0;
        yc = m1 * (xc - mx1) + my1;
      } else {
        m1 = -((x2 - x1) / (y2 - y1));
        m2 = -((x3 - x2) / (y3 - y2));
        mx1 = (x1 + x2) / 2.0;
        mx2 = (x2 + x3) / 2.0;
        my1 = (y1 + y2) / 2.0;
        my2 = (y2 + y3) / 2.0;
        xc = (m1 * mx1 - m2 * mx2 + my2 - my1) / (m1 - m2);
        yc = fabsy1y2 > fabsy2y3 ? m1 * (xc - mx1) + my1 : m2 * (xc - mx2) + my2;
      }

      dx = x2 - xc;
      dy = y2 - yc;
      return { i: i, j: j, k: k, x: xc, y: yc, r: dx * dx + dy * dy };
    };

    Delaunay.dedup = function dedup(edges) {
      var i, j, a, b, m, n;

      for (j = edges.length; j;) {
        b = edges[--j];
        a = edges[--j];

        for (i = j; i;) {
          n = edges[--i];
          m = edges[--i];

          if (a === m && b === n || a === n && b === m) {
            edges.splice(j, 2);
            edges.splice(i, 2);
            break;
          }
        }
      }
    };

    Delaunay.triangulate = function triangulate(vertices, key) {
      var n = vertices.length,
          i,
          j,
          indices,
          st,
          open,
          closed,
          edges,
          dx,
          dy,
          a,
          b,
          c;

      /* Bail if there aren't enough vertices to form any triangles. */
      if (n < 3) return [];

      /* Slice out the actual vertices from the passed objects. (Duplicate the
       * array even if we don't, though, since we need to make a supertriangle
       * later on!) */
      vertices = vertices.slice(0);

      if (key) for (i = n; i--;) {
        vertices[i] = vertices[i][key];
      } /* Make an array of indices into the vertex array, sorted by the
         * vertices' x-position. */
      indices = new Array(n);

      for (i = n; i--;) {
        indices[i] = i;
      }indices.sort(function (i, j) {
        return vertices[j][0] - vertices[i][0];
      });

      /* Next, find the vertices of the supertriangle (which contains all other
       * triangles), and append them onto the end of a (copy of) the vertex
       * array. */
      st = Delaunay.supertriangle(vertices);
      vertices.push(st[0], st[1], st[2]);

      /* Initialize the open list (containing the supertriangle and nothing
       * else) and the closed list (which is empty since we havn't processed
       * any triangles yet). */
      open = [Delaunay.circumcircle(vertices, n + 0, n + 1, n + 2)];
      closed = [];
      edges = [];

      /* Incrementally add each vertex to the mesh. */
      for (i = indices.length; i--; edges.length = 0) {
        c = indices[i];

        /* For each open triangle, check to see if the current point is
         * inside it's circumcircle. If it is, remove the triangle and add
         * it's edges to an edge list. */
        for (j = open.length; j--;) {
          /* If this point is to the right of this triangle's circumcircle,
           * then this triangle should never get checked again. Remove it
           * from the open list, add it to the closed list, and skip. */
          dx = vertices[c][0] - open[j].x;
          if (dx > 0.0 && dx * dx > open[j].r) {
            closed.push(open[j]);
            open.splice(j, 1);
            continue;
          }

          /* If we're outside the circumcircle, skip this triangle. */
          dy = vertices[c][1] - open[j].y;
          if (dx * dx + dy * dy - open[j].r > Delaunay.EPSILON) continue;

          /* Remove the triangle and add it's edges to the edge list. */
          edges.push(open[j].i, open[j].j, open[j].j, open[j].k, open[j].k, open[j].i);
          open.splice(j, 1);
        }

        /* Remove any doubled edges. */
        Delaunay.dedup(edges);

        /* Add a new triangle for each edge. */
        for (j = edges.length; j;) {
          b = edges[--j];
          a = edges[--j];
          open.push(Delaunay.circumcircle(vertices, a, b, c));
        }
      }

      /* Copy any remaining open triangles to the closed list, and then
       * remove any triangles that share a vertex with the supertriangle,
       * building a list of triplets that represent triangles. */
      for (i = open.length; i--;) {
        closed.push(open[i]);
      }open.length = 0;

      for (i = closed.length; i--;) {
        if (closed[i].i < n && closed[i].j < n && closed[i].k < n) open.push(closed[i].i, closed[i].j, closed[i].k);
      } /* Yay, we're done! */
      return open;
    };

    Delaunay.contains = function contains(tri, p) {
      /* Bounding box test first, for quick rejections. */
      if (p[0] < tri[0][0] && p[0] < tri[1][0] && p[0] < tri[2][0] || p[0] > tri[0][0] && p[0] > tri[1][0] && p[0] > tri[2][0] || p[1] < tri[0][1] && p[1] < tri[1][1] && p[1] < tri[2][1] || p[1] > tri[0][1] && p[1] > tri[1][1] && p[1] > tri[2][1]) return null;

      var a = tri[1][0] - tri[0][0],
          b = tri[2][0] - tri[0][0],
          c = tri[1][1] - tri[0][1],
          d = tri[2][1] - tri[0][1],
          i = a * d - b * c;

      /* Degenerate tri. */
      if (i === 0.0) return null;

      var u = (d * (p[0] - tri[0][0]) - b * (p[1] - tri[0][1])) / i,
          v = (a * (p[1] - tri[0][1]) - c * (p[0] - tri[0][0])) / i;

      /* If we're outside the tri, fail. */
      if (u < 0.0 || v < 0.0 || u + v > 1.0) return null;

      return [u, v];
    };

    return Delaunay;
  }();

  Delaunay.EPSILON = 1.0 / 1048576.0;
  exports.default = Delaunay;

  /***/
},
/* 31 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Detector = function () {
    function Detector() {
      _classCallCheck(this, Detector);
    }

    Detector.getWebGLErrorMessage = function getWebGLErrorMessage() {
      var element = document.createElement('div');
      element.id = 'webgl-error-message';
      element.style.fontFamily = 'monospace';
      element.style.fontSize = '13px';
      element.style.fontWeight = 'normal';
      element.style.textAlign = 'center';
      element.style.background = '#fff';
      element.style.color = '#000';
      element.style.padding = '1.5em';
      element.style.width = '400px';
      element.style.margin = '5em auto 0';

      if (!Detector.webgl) {
        element.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join('\n') : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join('\n');
      }
      return element;
    };

    Detector.addGetWebGLMessage = function addGetWebGLMessage(parameters) {
      var parent = void 0,
          id = void 0,
          element = void 0;
      parameters = parameters || {};

      parent = parameters.parent || (0, _libs.$)(document.body);
      id = parameters.id || 'oldie';

      element = Detector.getWebGLErrorMessage();
      //element.id = id;

      parent.append(element);
    };

    return Detector;
  }();

  Detector.canvas = !!window.CanvasRenderingContext2D;

  Detector.webgl = function () {
    try {
      var canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }();

  Detector.workers = !!window.Worker;
  Detector.fileapi = window.File && window.FileReader && window.FileList && window.Blob;
  exports.default = Detector;

  /***/
},
/* 32 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DocMouseSimulator = function () {
    function DocMouseSimulator(jFrame, element) {
      var bElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;

      _classCallCheck(this, DocMouseSimulator);

      this.jFrame = jFrame;
      this.wnd = jFrame[0].contentWindow;
      this.doc = jFrame[0].contentDocument;
      this.element = element || doc.body;
      this.bElement = bElement;
      this.resendProperties = this.getDefaultResendProperties();
      this.undefinedProperties = this.getDefaultUndefinedProperties();
      this.cursors = [];
      this.onDocChangeClbs = [];
      var terms = [{
        find: ':hover',
        replace: '.' + DocMouseSimulator.HOVER
      }, {
        find: ':active',
        replace: '.' + DocMouseSimulator.ACTIVE
      }];
      var style = ['<style type="text/css">'];
      for (var i = 0; i < this.doc.styleSheets.length; ++i) {
        var ss = this.doc.styleSheets[i];
        for (var j = 0; j < ss.cssRules.length; ++j) {
          var r = ss.cssRules[j],
              cssText = void 0;
          for (var _iterator = terms, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var term = _ref;

            if (~r.selectorText.indexOf(term.find)) {
              cssText = (cssText || r.cssText).replace(new RegExp(term.find, 'g'), term.replace);
            }
          }
          if (cssText) {
            style.push(cssText);
          }
        }
      }
      style.push('</style>');
      (0, _libs.$)(this.doc.head).append((0, _libs.$)(style.join('')));
    }

    DocMouseSimulator.prototype.convertCoords = function convertCoords(x, y) {
      var jElement = (0, _libs.$)(this.element);
      var offset = jElement.offset();
      return {
        x: offset.left + jElement.width() * x,
        y: offset.top + jElement.height() * (1 - y)
      };
    };

    DocMouseSimulator.prototype.triggerEvent = function triggerEvent(element, e, p, type, advancedProps) {
      var props = {};
      for (var _iterator2 = this.resendProperties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var _n = _ref2;

        props[_n] = e[_n];
      }
      for (var _iterator3 = this.undefinedProperties, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var _n2 = _ref3;

        props[_n2] = undefined;
      }
      for (var n in advancedProps) {
        if (advancedProps.hasOwnProperty(n)) {
          props[n] = advancedProps[n];
        }
      }
      props.view = this.wnd;
      props.pageX = p.x;
      props.pageY = p.y;
      var jE = _libs.$.Event(type, props);
      jE.timeStamp = e.timeStamp;
      (0, _libs.$)(element).trigger(jE);
    };

    DocMouseSimulator.prototype.addClass = function addClass(element, name) {
      (0, _libs.$)(element).addClass(name);
      var style = this.wnd.getComputedStyle(element);
      this.cursors.push((0, _libs.$)(this.bElement).css('cursor'));
      (0, _libs.$)(this.bElement).css('cursor', style.getPropertyValue('cursor'));
    };

    DocMouseSimulator.prototype.removeClass = function removeClass(element, name) {
      (0, _libs.$)(element).removeClass(name);
      (0, _libs.$)(this.bElement).css('cursor', this.cursors.pop());
    };

    DocMouseSimulator.prototype.enterElement = function enterElement(element) {
      this.addClass(element, DocMouseSimulator.HOVER);
    };

    DocMouseSimulator.prototype.leaveElement = function leaveElement(element) {
      this.removeClass(element, DocMouseSimulator.HOVER);
    };

    DocMouseSimulator.prototype.activateElement = function activateElement(element) {
      this.addClass(element, DocMouseSimulator.ACTIVE);
    };

    DocMouseSimulator.prototype.deactivateElement = function deactivateElement(element) {
      this.removeClass(element, DocMouseSimulator.ACTIVE);
    };

    DocMouseSimulator.prototype.addDocChangeClb = function addDocChangeClb(clb) {
      this.onDocChangeClbs.push(clb);
    };

    DocMouseSimulator.prototype.notify = function notify() {
      for (var _iterator4 = this.onDocChangeClbs, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i4 >= _iterator4.length) break;
          _ref4 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done) break;
          _ref4 = _i4.value;
        }

        var clb = _ref4;

        clb(this.wnd, this.doc);
      }
    };

    DocMouseSimulator.prototype.elementFromPoint = function elementFromPoint(p) {
      var node = this.doc.body,
          next = true;
      while (next) {
        next = false;
        for (var i = 0; i < node.childNodes.length; ++i) {
          var child = node.childNodes[i];
          if (child instanceof this.wnd.Element) {
            var jC = (0, _libs.$)(child),
                offset = jC.offset(),
                height = jC.height(),
                width = jC.width();
            if (p.x > offset.left && p.x < offset.left + width && p.y > offset.top && p.y < offset.top + height) {
              node = child;
              next = true;
              break;
            }
          }
        }
      }
      return node;
    };

    DocMouseSimulator.prototype.getElement = function getElement(p) {
      var off0 = this.jFrame.offset();
      this.jFrame.offset({ left: 0.5 * window.innerWidth - p.x, top: 0.5 * window.innerHeight - p.y });
      var element = this.doc.elementFromPoint(p.x, p.y);
      if (!element) {
        // it isn't a joke it's IE
        element = this.doc.elementFromPoint(p.x, p.y);
      }
      this.jFrame.offset(off0);
      return element ? element : this.elementFromPoint(p);
    };

    DocMouseSimulator.prototype.simulate = function simulate(e, doc, x, y) {
      var p = this.convertCoords(x, y),
          element = doc === this.doc ? this.getElement(p) : undefined;
      var trigger = element !== undefined,
          notify = false;

      switch (e.type) {
        case 'mousedown':
          {
            if (this.capElement) {
              this.deactivateElement(this.capElement);
              notify = true;
            }
            this.capElement = element;
            if (this.capElement) {
              this.activateElement(this.capElement);
              notify = true;
            }
            break;
          }
        case 'mouseup':
          {
            if (this.capElement) {
              this.deactivateElement(this.capElement);
              notify = true;
            }
            this.timeStamp = e.timeStamp;
            break;
          }
        case 'click':
          {
            trigger = element && this.capElement === element && e.timeStamp === this.timeStamp;
            this.capElement = undefined;
            break;
          }
        case 'mouseenter':
        case 'mouseover':
        case 'mousemove':
          {
            var leaved = null;
            if (this.hovElement !== element && this.hovElement) {
              this.triggerEvent(this.hovElement, e, p, 'mouseout', { relatedTarget: element ? element : null });
              this.leaveElement(this.hovElement);
              leaved = this.hovElement;
              this.hovElement = undefined;
              notify = true;
            }
            if (!this.hovElement && element) {
              this.triggerEvent(element, e, p, 'mouseover', { relatedTarget: leaved });
              this.enterElement(element);
              this.hovElement = element;
              notify = true;
            }
            trigger = element && e.type === 'mousemove';
            break;
          }
        case 'mouseleave':
        case 'mouseout':
          {
            if (this.hovElement) {
              this.triggerEvent(this.hovElement, e, p, 'mouseout', { relatedTarget: e.relatedTarget });
              this.leaveElement(this.hovElement);
              this.hovElement = undefined;
              notify = true;
            }
            trigger = false;
            break;
          }
      }
      if (trigger) {
        this.triggerEvent(element, e, p, e.type);
      }
      if (notify) {
        this.notify();
      }
    };

    DocMouseSimulator.prototype.getDefaultUndefinedProperties = function getDefaultUndefinedProperties() {
      return ['clientX', 'clientY', 'offsetX', 'offsetY', 'screenX', 'screenY'];
    };

    DocMouseSimulator.prototype.getDefaultResendProperties = function getDefaultResendProperties() {
      return ['altKey', 'bubbles', 'button', 'buttons', 'cancelable', 'changedTouches', 'char', 'charCode', 'ctrlKey', 'data', 'detail', 'eventPhase', 'isDefaultPrevented', 'key', 'keyCode', 'metaKey', 'pointerId', 'pointerType', 'shiftKey', 'targetTouches', 'touches', 'which'];
    };

    return DocMouseSimulator;
  }();

  /*
  altKey,
  bubbles,
  button,
  buttons,
  cancelable,
  changedTouches,
  char,
  charCode,
  clientX,
  clientY,
  ctrlKey,
  currentTarget,
  data,
  delegateTarget,
  detail,
  eventPhase,
  handleObj,
  isDefaultPrevented,
  key,
  keyCode,
  metaKey,
  offsetX,
  offsetY,
  originalEvent,
  pageX,
  pageY,
  pointerId,
  pointerType,
  relatedTarget,
  screenX,
  screenY,
  shiftKey,
  target,
  targetTouches,
  timeStamp,
  toElement,
  touches,
  type,
  view,
  which
  */

  DocMouseSimulator.HOVER = 'SIMULATED-HOVER';
  DocMouseSimulator.ACTIVE = 'SIMULATED-ACTIVE';
  exports.default = DocMouseSimulator;

  /***/
},
/* 33 */
/***/function (module, exports) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Dom2Image = function Dom2Image(wnd, doc, cache) {
    _classCallCheck(this, Dom2Image);

    var self = this;
    this.window = wnd;
    this.document = doc;
    this.cache = cache;

    var util = newUtil();
    var inliner = newInliner();
    var fontFaces = newFontFaces();
    var images = newImages();

    this.toSvg = toSvg;
    this.toPng = toPng;
    this.toJpeg = toJpeg;
    this.toBlob = toBlob;
    this.toPixelData = toPixelData;
    this.impl = {
      fontFaces: fontFaces,
      images: images,
      util: util,
      inliner: inliner
    };

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options
     * @param {Function} options.filter - Should return true if passed node should be included in the output
     *          (excluding node means excluding it's children as well). Not called on the root node.
     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
     * @param {Number} options.width - width to be applied to node before rendering.
     * @param {Number} options.height - height to be applied to node before rendering.
     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                defaults to 1.0.
     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
     * */

    function toSvg(node, options) {
      options = options || {};
      return Promise.resolve(node).then(function (node) {
        return cloneNode(node, options.filter, true);
      }).then(embedFonts).then(inlineImages).then(applyOptions).then(function (clone) {
        return makeSvgDataUri(clone, options.width || util.width(node), options.height || util.height(node));
      });

      function applyOptions(clone) {
        if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;

        if (options.width) clone.style.width = options.width + 'px';
        if (options.height) clone.style.height = options.height + 'px';

        if (options.style) self.window.Object.keys(options.style).forEach(function (property) {
          clone.style[property] = options.style[property];
        });

        return clone;
      }
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
     * */
    function toPixelData(node, options) {
      return draw(node, options || {}).then(function (canvas) {
        return canvas.getContext('2d').getImageData(0, 0, util.width(node), util.height(node)).data;
      });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
     * */
    function toPng(node, options) {
      return draw(node, options || {}).then(function (canvas) {
        return canvas.toDataURL();
      });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
     * */
    function toJpeg(node, options) {
      options = options || {};
      return draw(node, options).then(function (canvas) {
        return canvas.toDataURL('image/jpeg', options.quality || 1.0);
      });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image blob
     * */
    function toBlob(node, options) {
      return draw(node, options || {}).then(util.canvasToBlob);
    }

    function draw(domNode, options) {
      return toSvg(domNode, options).then(util.makeImage).then(util.delay(100)).then(function (image) {
        var canvas = newCanvas(domNode);
        canvas.getContext('2d').drawImage(image, 0, 0);
        return canvas;
      });

      function newCanvas(domNode) {
        var canvas = self.document.createElement('canvas');
        canvas.width = options.width || util.width(domNode);
        canvas.height = options.height || util.height(domNode);

        if (options.bgcolor) {
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = options.bgcolor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        return canvas;
      }
    }

    function cloneNode(node, filter, root) {
      if (!root && filter && !filter(node)) return Promise.resolve();

      return Promise.resolve(node).then(makeNodeCopy).then(function (clone) {
        return cloneChildren(node, clone, filter);
      }).then(function (clone) {
        return processClone(node, clone);
      });

      function makeNodeCopy(node) {
        if (util.isCanvas(node)) return util.makeImage(node.toDataURL());
        return node.cloneNode(false);
      }

      function cloneChildren(original, clone, filter) {
        var children = original.childNodes;
        if (children.length === 0) return Promise.resolve(clone);

        return cloneChildrenInOrder(clone, util.asArray(children), filter).then(function () {
          return clone;
        });

        function cloneChildrenInOrder(parent, children, filter) {
          var done = Promise.resolve();
          children.forEach(function (child) {
            done = done.then(function () {
              return cloneNode(child, filter);
            }).then(function (childClone) {
              if (childClone) parent.appendChild(childClone);
            });
          });
          return done;
        }
      }

      function processClone(original, clone) {
        if (!util.isElement(clone)) return clone;

        return Promise.resolve().then(cloneStyle).then(clonePseudoElements).then(copyUserInput).then(fixSvg).then(function () {
          return clone;
        });

        function cloneStyle() {
          copyStyle(self.window.getComputedStyle(original), clone.style);

          function copyStyle(source, target) {
            if (source.cssText) target.cssText = source.cssText;else copyProperties(source, target);

            function copyProperties(source, target) {
              util.asArray(source).forEach(function (name) {
                target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
              });
            }
          }
        }

        function clonePseudoElements() {
          [':before', ':after'].forEach(function (element) {
            clonePseudoElement(element);
          });

          function clonePseudoElement(element) {
            var style = self.window.getComputedStyle(original, element);
            var content = style.getPropertyValue('content');

            if (content === '' || content === 'none') return;

            var className = util.uid();
            clone.className = clone.className + ' ' + className;
            var styleElement = self.document.createElement('style');
            styleElement.appendChild(formatPseudoElementStyle(className, element, style));
            clone.appendChild(styleElement);

            function formatPseudoElementStyle(className, element, style) {
              var selector = '.' + className + ':' + element;
              var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
              return self.document.createTextNode(selector + '{' + cssText + '}');

              function formatCssText(style) {
                var content = style.getPropertyValue('content');
                return style.cssText + ' content: ' + content + ';';
              }

              function formatCssProperties(style) {

                return util.asArray(style).map(formatProperty).join('; ') + ';';

                function formatProperty(name) {
                  return name + ': ' + style.getPropertyValue(name) + (style.getPropertyPriority(name) ? ' !important' : '');
                }
              }
            }
          }
        }

        function copyUserInput() {
          if (util.isTextArea(original)) clone.innerHTML = original.value;
          if (util.isInput(original)) clone.setAttribute("value", original.value);
        }

        function fixSvg() {
          if (!util.isSVG(clone)) return;
          clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

          if (!util.isSVGRect(clone)) return;
          ['width', 'height'].forEach(function (attribute) {
            var value = clone.getAttribute(attribute);
            if (!value) return;

            clone.style.setProperty(attribute, value);
          });
        }
      }
    }

    function embedFonts(node) {
      return fontFaces.resolveAll().then(function (cssText) {
        var styleNode = self.document.createElement('style');
        node.appendChild(styleNode);
        styleNode.appendChild(self.document.createTextNode(cssText));
        return node;
      });
    }

    function inlineImages(node) {
      return images.inlineAll(node).then(function () {
        return node;
      });
    }

    function makeSvgDataUri(node, width, height) {
      return Promise.resolve(node).then(function (node) {
        node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
        return new self.window.XMLSerializer().serializeToString(node);
      }).then(util.escapeXhtml).then(function (xhtml) {
        return ['data:image/svg+xml;charset=utf-8,', '<svg xmlns="http://www.w3.org/2000/svg" width="', width, '" height="', height, '">', '<foreignObject x="0" y="0" width="100%" height="100%">', xhtml, '</foreignObject>', '</svg>'].join('');
      });
    }

    function newUtil() {
      return {
        escape: escape,
        parseExtension: parseExtension,
        mimeType: mimeType,
        dataAsUrl: dataAsUrl,
        isDataUrl: isDataUrl,
        canvasToBlob: canvasToBlob,
        resolveUrl: resolveUrl,
        getAndEncode: getAndEncode,
        uid: uid(),
        delay: delay,
        asArray: asArray,
        escapeXhtml: escapeXhtml,
        makeImage: makeImage,
        width: width,
        height: height,

        isElement: isElement,
        isCanvas: isCanvas,
        isTextArea: isTextArea,
        isInput: isInput,
        isSVG: isSVG,
        isSVGRect: isSVGRect,
        isImage: isImage
      };

      function mimes() {
        /*
         * Only WOFF and EOT mime types for fonts are 'real'
         * see http://www.iana.org/assignments/media-types/media-types.xhtml
         */
        var WOFF = 'application/font-woff';
        var JPEG = 'image/jpeg';

        return {
          'woff': WOFF,
          'woff2': WOFF,
          'ttf': 'application/font-truetype',
          'eot': 'application/vnd.ms-fontobject',
          'png': 'image/png',
          'jpg': JPEG,
          'jpeg': JPEG,
          'gif': 'image/gif',
          'tiff': 'image/tiff',
          'svg': 'image/svg+xml'
        };
      }

      function parseExtension(url) {
        var match = /\.([^\.\/]*?)$/g.exec(url);
        if (match) return match[1];else return '';
      }

      function mimeType(url) {
        var extension = parseExtension(url).toLowerCase();
        return mimes()[extension] || '';
      }

      function isDataUrl(url) {
        return url.search(/^(data:)/) !== -1;
      }

      function toBlob(canvas) {
        return new Promise(function (resolve) {
          var binaryString = self.window.atob(canvas.toDataURL().split(',')[1]);
          var length = binaryString.length;
          var binaryArray = new self.window.Uint8Array(length);

          for (var i = 0; i < length; i++) {
            binaryArray[i] = binaryString.charCodeAt(i);
          }resolve(new self.window.Blob([binaryArray], {
            type: 'image/png'
          }));
        });
      }

      function canvasToBlob(canvas) {
        if (canvas.toBlob) return new Promise(function (resolve) {
          canvas.toBlob(resolve);
        });

        return toBlob(canvas);
      }

      function resolveUrl(url, baseUrl) {
        var doc = self.document.implementation.createHTMLDocument();
        var base = doc.createElement('base');
        doc.head.appendChild(base);
        var a = doc.createElement('a');
        doc.body.appendChild(a);
        base.href = baseUrl;
        a.href = url;
        return a.href;
      }

      function uid() {
        var index = 0;

        return function () {
          return 'u' + fourRandomChars() + index++;

          function fourRandomChars() {
            /* see http://stackoverflow.com/a/6248722/2519373 */
            return ('0000' + (self.window.Math.random() * self.window.Math.pow(36, 4) << 0).toString(36)).slice(-4);
          }
        };
      }

      function makeImage(uri) {
        return new Promise(function (resolve, reject) {
          var image = new self.window.Image();
          image.onload = function () {
            resolve(image);
          };
          image.onerror = reject;
          image.src = uri;
        });
      }

      function getAndEncode(url) {
        var data = self.cache.get(url);
        if (data) {
          if (data.content) {
            return data.content;
          } else {
            return new Promise(function (resolve) {
              if (data.content) {
                resolve(data.content);
              } else {
                data.pendings.push(resolve);
              }
            });
          }
        } else {
          var _ret = function () {
            data = self.cache.put(url, { pendings: [] });

            var TIMEOUT = 30000;

            return {
              v: new Promise(function (resolve) {
                var request = new self.window.XMLHttpRequest();

                request.onreadystatechange = done;
                request.ontimeout = timeout;
                request.responseType = 'blob';
                request.timeout = TIMEOUT;
                request.open('GET', url, true);
                request.send();

                function done() {
                  if (request.readyState !== 4) return;

                  if (request.status !== 200) {
                    fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                    return;
                  }

                  var encoder = new self.window.FileReader();
                  encoder.onloadend = function () {
                    data.content = encoder.result.split(/,/)[1];
                    for (var _iterator = data.pendings, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                      var _ref;

                      if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                      } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                      }

                      var _resolve = _ref;

                      _resolve(data.content);
                    }
                    data.pendings = [];
                    resolve(data.content);
                  };
                  encoder.readAsDataURL(request.response);
                }

                function timeout() {
                  fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                }

                function fail(message) {
                  console.error(message);
                  resolve('');
                }
              })
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
      }

      function dataAsUrl(content, type) {
        return ['data:', type, ';base64,', content].join('');
      }

      function escape(string) {
        return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
      }

      function delay(ms) {
        return function (arg) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(arg);
            }, ms);
          });
        };
      }

      function asArray(arrayLike) {
        var array = [];
        var length = arrayLike.length;
        for (var i = 0; i < length; i++) {
          array.push(arrayLike[i]);
        }return array;
      }

      function escapeXhtml(string) {
        return string.replace(/(#|\n)/g, function (c) {
          return c === '#' ? '%23' : '%0A';
        });
      }

      function width(node) {
        var leftBorder = px(node, 'border-left-width');
        var rightBorder = px(node, 'border-right-width');
        return node.scrollWidth + leftBorder + rightBorder;
      }

      function height(node) {
        var topBorder = px(node, 'border-top-width');
        var bottomBorder = px(node, 'border-bottom-width');
        return node.scrollHeight + topBorder + bottomBorder;
      }

      function px(node, styleProperty) {
        var value = self.window.getComputedStyle(node).getPropertyValue(styleProperty);
        return parseFloat(value.replace('px', ''));
      }

      function isElement(node) {
        return node instanceof self.window.Element;
      }

      function isCanvas(node) {
        return node instanceof self.window.HTMLCanvasElement;
      }

      function isTextArea(node) {
        return node instanceof self.window.HTMLTextAreaElement;
      }

      function isInput(node) {
        return node instanceof self.window.HTMLInputElement;
      }

      function isSVG(node) {
        return node instanceof self.window.SVGElement;
      }

      function isSVGRect(node) {
        return node instanceof self.window.SVGRectElement;
      }

      function isImage(node) {
        return node instanceof self.window.HTMLImageElement;
      }
    }

    function newInliner() {
      var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

      return {
        inlineAll: inlineAll,
        shouldProcess: shouldProcess,
        impl: {
          readUrls: readUrls,
          inline: inline
        }
      };

      function shouldProcess(string) {
        return string.search(URL_REGEX) !== -1;
      }

      function readUrls(string) {
        var result = [];
        var match = void 0;
        while ((match = URL_REGEX.exec(string)) !== null) {
          result.push(match[1]);
        }
        return result.filter(function (url) {
          return !util.isDataUrl(url);
        });
      }

      function inline(string, url, baseUrl, get) {
        return Promise.resolve(url).then(function (url) {
          return baseUrl ? util.resolveUrl(url, baseUrl) : url;
        }).then(get || util.getAndEncode).then(function (data) {
          return util.dataAsUrl(data, util.mimeType(url));
        }).then(function (dataUrl) {
          return string.replace(urlAsRegex(url), ['$1', dataUrl, '$3'].join(''));
        });

        function urlAsRegex(url) {
          return new self.window.RegExp(['(url\\([\'"]?)(', util.escape(url), ')([\'"]?\\))'].join(''), 'g');
        }
      }

      function inlineAll(string, baseUrl, get) {
        if (nothingToInline()) return Promise.resolve(string);

        return Promise.resolve(string).then(readUrls).then(function (urls) {
          var done = Promise.resolve(string);
          urls.forEach(function (url) {
            done = done.then(function (string) {
              return inline(string, url, baseUrl, get);
            });
          });
          return done;
        });

        function nothingToInline() {
          return !shouldProcess(string);
        }
      }
    }

    function newFontFaces() {
      return {
        resolveAll: resolveAll,
        impl: {
          readAll: readAll
        }
      };

      function resolveAll() {
        return readAll(self.document).then(function (webFonts) {
          return Promise.all(webFonts.map(function (webFont) {
            return webFont.resolve();
          }));
        }).then(function (cssStrings) {
          return cssStrings.join('\n');
        });
      }

      function readAll() {
        return Promise.resolve(util.asArray(self.document.styleSheets)).then(getCssRules).then(selectWebFontRules).then(function (rules) {
          return rules.map(newWebFont);
        });

        function selectWebFontRules(cssRules) {
          return cssRules.filter(function (rule) {
            return rule.type === CSSRule.FONT_FACE_RULE;
          }).filter(function (rule) {
            return inliner.shouldProcess(rule.style.getPropertyValue('src'));
          });
        }

        function getCssRules(styleSheets) {
          var cssRules = [];
          styleSheets.forEach(function (sheet) {
            try {
              util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
            } catch (e) {
              console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
            }
          });
          return cssRules;
        }

        function newWebFont(webFontRule) {
          return {
            resolve: function resolve() {
              var baseUrl = (webFontRule.parentStyleSheet || {}).href;
              return inliner.inlineAll(webFontRule.cssText, baseUrl);
            },
            src: function src() {
              return webFontRule.style.getPropertyValue('src');
            }
          };
        }
      }
    }

    function newImages() {
      return {
        inlineAll: inlineAll,
        impl: {
          newImage: newImage
        }
      };

      function newImage(element) {
        return {
          inline: inline
        };

        function inline(get) {
          if (util.isDataUrl(element.src)) return Promise.resolve();

          return Promise.resolve(element.src).then(get || util.getAndEncode).then(function (data) {
            return util.dataAsUrl(data, util.mimeType(element.src));
          }).then(function (dataUrl) {
            return new Promise(function (resolve, reject) {
              element.onload = resolve;
              element.onerror = reject;
              element.src = dataUrl;
            });
          });
        }
      }

      function inlineAll(node) {
        if (!util.isElement(node)) return Promise.resolve(node);

        return inlineBackground(node).then(function () {
          if (util.isImage(node)) return newImage(node).inline();else return Promise.all(util.asArray(node.childNodes).map(function (child) {
            return inlineAll(child);
          }));
        });

        function inlineBackground(node) {
          var background = node.style.getPropertyValue('background');

          if (!background) return Promise.resolve(node);

          return inliner.inlineAll(background).then(function (inlined) {
            node.style.setProperty('background', inlined, node.style.getPropertyPriority('background'));
          }).then(function () {
            return node;
          });
        }
      }
    }
  };

  exports.default = Dom2Image;

  /***/
},
/* 34 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  __webpack_require__(60)(_libs.$);

  var EventsToActions = function () {
    EventsToActions.getEventFlags = function getEventFlags(e) {
      return e.ctrlKey << 0 | e.shiftKey << 1 | e.altKey << 2;
    };

    EventsToActions.getPosition = function getPosition(touches) {
      var x = void 0,
          y = void 0;
      if (touches.length === 2) {
        x = touches[1].pageX - touches[0].pageX;
        y = touches[1].pageY - touches[0].pageY;
        y = -Math.sqrt(x * x + y * y);
        x = 0;
      } else {
        x = touches[0].pageX;
        y = touches[0].pageY;
      }
      return {
        x: x,
        y: y
      };
    };

    function EventsToActions(element, actions) {
      _classCallCheck(this, EventsToActions);

      this.actions = actions || {};
      this.element = element;
      this.doc = element[0].ownerDocument;
      this.wnd = this.doc.defaultView;
      this.enabled = true;

      this.binds = {
        contextMenu: this.contextMenu.bind(this),

        mouseDown: this.mouseDown.bind(this),
        mouseMove: this.mouseMove.bind(this),
        mouseUp: this.mouseUp.bind(this),
        mouseWheel: this.mouseWheel.bind(this),

        mouseMoveDoc: this.mouseMoveDoc.bind(this),
        mouseUpDoc: this.mouseUpDoc.bind(this),

        click: this.click.bind(this),
        dblclick: this.dblclick.bind(this),

        touchStart: this.touchStart.bind(this),
        touchMove: this.touchMove.bind(this),
        touchEnd: this.touchEnd.bind(this),

        keyDown: this.keyDown.bind(this),
        keyPress: this.keyPress.bind(this),
        keyUp: this.keyUp.bind(this)
      };

      this.element.on('contextmenu', this.binds.contextMenu);

      this.element.on('mousedown', this.binds.mouseDown);
      this.element.on('mousemove', this.binds.mouseMove);
      this.element.on('mouseup', this.binds.mouseUp);
      this.element.on('mousewheel', this.binds.mouseWheel);

      (0, _libs.$)(this.doc).on('mousemove', this.binds.mouseMoveDoc);
      (0, _libs.$)(this.doc).on('mouseup', this.binds.mouseUpDoc);

      this.element.on('click', this.binds.click);
      this.element.on('dblclick', this.binds.dblclick);

      this.element.on('touchstart', this.binds.touchStart);
      this.element.on('touchmove', this.binds.touchMove);
      this.element.on('touchend', this.binds.touchEnd);

      (0, _libs.$)(this.wnd).on('keydown', this.binds.keyDown);
      (0, _libs.$)(this.wnd).on('keypress', this.binds.keyPress);
      (0, _libs.$)(this.wnd).on('keyup', this.binds.keyUp);
    }

    EventsToActions.prototype.addAction = function addAction(action, type, code, flags) {
      type = type.toLowerCase();
      if (!this.actions[type]) {
        this.actions[type] = {};
      }
      if (!this.actions[type][code]) {
        this.actions[type][code] = {};
      }
      if (!this.actions[type][code][flags]) {
        this.actions[type][code][flags] = [];
      }
      this.actions[type][code][flags].push(action);
    };

    EventsToActions.prototype.getActions = function getActions(type, code, flags) {
      return ((this.actions[type] || {})[code] || {})[flags] || [];
    };

    EventsToActions.prototype.fireActions = function fireActions(actions, e, data) {
      for (var _iterator = actions, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var action = _ref;

        action(e, data);
      }
    };

    EventsToActions.prototype.contextMenu = function contextMenu(e) {
      if (this.enabled) {
        var flags = EventsToActions.getEventFlags(e);
        this.fireActions(this.getActions('contextmenu', e.button, flags), e);
      }
    };

    EventsToActions.prototype.mouseDown = function mouseDown(e) {
      if (this.picked) {
        this.mouseUpDoc();
      }
      if (this.enabled) {
        var flags = EventsToActions.getEventFlags(e);
        this.fireActions(this.getActions('mousedown', e.button, flags), e);
        this.picked = {
          x: e.pageX,
          y: e.pageY,
          actions: this.getActions('mousedrag', e.button, flags)
        };
        this.fireActions(this.picked.actions, e, {
          state: 'start'
        });
      }
    };

    EventsToActions.prototype.mouseMove = function mouseMove(e) {
      if (this.enabled) {
        var flags = EventsToActions.getEventFlags(e);
        this.fireActions(this.getActions('mousemove', e.button, flags), e);
      }
    };

    EventsToActions.prototype.mouseMoveDoc = function mouseMoveDoc(e) {
      if (this.enabled && this.picked) {
        this.fireActions(this.picked.actions, e, {
          state: 'move',
          dx: e.pageX - this.picked.x,
          dy: e.pageY - this.picked.y
        });
        this.picked = {
          x: e.pageX,
          y: e.pageY,
          actions: this.picked.actions
        };
      }
    };

    EventsToActions.prototype.mouseUp = function mouseUp(e) {
      if (this.enabled) {
        var flags = EventsToActions.getEventFlags(e);
        this.fireActions(this.getActions('mouseup', e.button, flags), e);
      }
    };

    EventsToActions.prototype.mouseUpDoc = function mouseUpDoc(e) {
      if (this.picked) {
        this.fireActions(this.picked.actions, e, {
          state: 'end'
        });
        delete this.picked;
      }
    };

    EventsToActions.prototype.mouseWheel = function mouseWheel(e) {
      if (this.enabled) {
        var flags = EventsToActions.getEventFlags(e);
        this.fireActions(this.getActions('mousewheel', 0, flags), e);
      }
    };

    EventsToActions.prototype.clicks = function clicks(e, type) {
      if (this.enabled) {
        var flags = EventsToActions.getEventFlags(e);
        this.fireActions(this.getActions(type, e.button, flags), e);
      }
    };

    EventsToActions.prototype.click = function click(e) {
      this.clicks(e, 'click');
    };

    EventsToActions.prototype.dblclick = function dblclick(e) {
      this.clicks(e, 'dblclick');
    };

    EventsToActions.prototype.touchStart = function touchStart(e) {
      if (this.picked) {
        this.touchEnd();
      }
      if (this.enabled) {
        var flags = EventsToActions.getEventFlags(e);
        this.fireActions(this.getActions('touchstart', e.touches.length, flags), e);
        this.picked = _extends({}, EventsToActions.getPosition(e.touches), {
          actions: this.getActions('touchdrag', e.touches.length, flags)
        });
        this.fireActions(this.picked.actions, e, {
          state: 'start'
        });
      }
    };

    EventsToActions.prototype.touchMove = function touchMove(e) {
      if (this.enabled) {
        var flags = EventsToActions.getEventFlags(e);
        this.fireActions(this.getActions('touchmove', e.touches.length, flags), e);
        if (this.picked) {
          var pos = EventsToActions.getPosition(e.touches);
          this.fireActions(this.picked.actions, e, {
            state: 'move',
            dx: pos.x - this.picked.x,
            dy: pos.y - this.picked.y
          });
          this.picked = _extends({}, pos, {
            actions: this.picked.actions
          });
        }
      }
    };

    EventsToActions.prototype.touchEnd = function touchEnd(e) {
      if (this.picked) {
        this.fireActions(this.picked.actions, e, {
          state: 'end'
        });
        delete this.picked;
      }
    };

    EventsToActions.prototype.key = function key(e, type) {
      if (this.enabled) {
        var flags = EventsToActions.getEventFlags(e);
        this.fireActions(this.getActions(type, e.keyCode, flags), e);
      }
    };

    EventsToActions.prototype.keyDown = function keyDown(e) {
      this.key(e, 'keydown');
    };

    EventsToActions.prototype.keyPress = function keyPress(e) {
      this.key(e, 'keypress');
    };

    EventsToActions.prototype.keyUp = function keyUp(e) {
      this.key(e, 'keyup');
    };

    EventsToActions.prototype.dispose = function dispose() {
      this.element.off('contextmenu', this.binds.contextMenu);

      this.element.off('mousedown', this.binds.mouseDown);
      this.element.off('mousemove', this.binds.mouseMove);
      this.element.off('mouseup', this.binds.mouseUp);
      this.element.off('mousewheel', this.binds.mouseWheel);

      (0, _libs.$)(this.doc).off('mousemove', this.binds.mouseMoveDoc);
      (0, _libs.$)(this.doc).off('mouseup', this.binds.mouseUpDoc);

      this.element.off('click', this.binds.click);
      this.element.off('dblclick', this.binds.dblclick);

      this.element.off('touchstart', this.binds.touchStart);
      this.element.off('touchmove', this.binds.touchMove);
      this.element.off('touchend', this.binds.touchEnd);

      (0, _libs.$)(this.wnd).off('keydown', this.binds.keyDown);
      (0, _libs.$)(this.wnd).off('keypress', this.binds.keyPress);
      (0, _libs.$)(this.wnd).off('keyup', this.binds.keyUp);
    };

    return EventsToActions;
  }();

  EventsToActions.modKeys = {
    Ctrl: 1,
    Shift: 2,
    Alt: 4
  };
  EventsToActions.mouseButtons = {
    Left: 0,
    Middle: 1,
    Right: 2
  };
  exports.default = EventsToActions;

  /***/
},
/* 35 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _ImageBase2 = __webpack_require__(3);

  var _ImageBase3 = _interopRequireDefault(_ImageBase2);

  var _BaseMathUtils = __webpack_require__(1);

  var _BaseMathUtils2 = _interopRequireDefault(_BaseMathUtils);

  var _Dom2Image = __webpack_require__(33);

  var _Dom2Image2 = _interopRequireDefault(_Dom2Image);

  var _DocMouseSimulator = __webpack_require__(32);

  var _DocMouseSimulator2 = _interopRequireDefault(_DocMouseSimulator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var InteractiveImage = function (_ImageBase) {
    _inherits(InteractiveImage, _ImageBase);

    function InteractiveImage(context, width, height, color, src, cache, injector) {
      _classCallCheck(this, InteractiveImage);

      var _this = _possibleConstructorReturn(this, _ImageBase.call(this, context, width, height, color));

      _this.iId = 'i' + _BaseMathUtils2.default.getUnique();
      var jFrame = (0, _libs.$)('<iframe id="' + _this.iId + '" src="' + src + '" style="position: fixed; left: -1000px;"></iframe>');
      (0, _libs.$)(_this.doc.body).append(jFrame);
      _this.frame = jFrame[0];

      _this.binds = {};

      if (injector) {
        injector(_this.frame.contentWindow);
      }

      if (_this.doc.implementation.hasFeature('www.http://w3.org/TR/SVG11/feature#Extensibility', '1.1')) {
        // svg foreignObject renderer
        _this.image = new Image();
        _this.binds.imageLoad = function () {
          _this.renderImage(_this.image);
          _this.finishRender();
        };
        (0, _libs.$)(_this.image).on('load', _this.binds.imageLoad);
        _this.svgRender = new _Dom2Image2.default(_this.frame.contentWindow, _this.frame.contentDocument, cache);
      } // otherwise - html2canvas

      _this.binds.frameLoad = function () {
        if (~_this.frame.contentDocument.title.indexOf('404')) {
          _this.startRender = function () {
            _this.renderNotFoundPage();
            _this.finishRender();
          };
          _this.finishLoad();
        } else {
          setTimeout(function () {
            if (_this.frame) {
              _this.width = (0, _libs.$)(_this.frame.contentDocument.body).width();
              _this.height = (0, _libs.$)(_this.frame.contentDocument.body).height();
              jFrame.css('width', _this.width + 'px').css('height', _this.height + 'px');
              jFrame.offset({ left: -_this.width - 100, top: 0 });
              if (_this.svgRender) {
                _this.simulator = new _DocMouseSimulator2.default(jFrame, _this.frame.contentDocument.body, _this.element);
                _this.simulator.addDocChangeClb(_this.finishLoad.bind(_this));
              }
              _this.startRender = function () {
                _this.render();
              };
              _this.finishLoad();
            }
          }, 500);
        }
      };
      (0, _libs.$)(_this.frame.contentWindow).on('load', _this.binds.frameLoad);
      return _this;
    }

    InteractiveImage.prototype.getSimulatedDoc = function getSimulatedDoc() {
      return this.frame.contentDocument;
    };

    InteractiveImage.prototype.render = function render() {
      var _this2 = this;

      if (this.svgRender) {
        this.svgRender.toSvg(this.simulator.element, { height: this.height + 'px', width: this.width + 'px' }).then(function (dataUrl) {
          _this2.image.src = dataUrl;
        }).catch(function (error) {
          console.error('Dom2Image: ', error);
          _this2.renderBlankPage();
          _this2.finishRender();
        });
      } else {
        (0, _libs.html2canvas)(this.frame.contentDocument.body, { timeout: 30000 }).then(function (canvas) {
          _this2.renderImage(canvas);
          _this2.finishRender();
        });
      }
    };

    InteractiveImage.prototype.dispose = function dispose() {
      (0, _libs.$)(this.image).off('load', this.binds.imageLoad);
      (0, _libs.$)(this.frame.contentWindow).off('load', this.binds.frameLoad);
      (0, _libs.$)(this.doc.body).find('#' + this.iId).remove();
      if (this.image) {
        this.image.src = '';
        delete this.image;
      }
      this.frame.src = '';
      delete this.frame;
      _ImageBase.prototype.dispose.call(this);
    };

    InteractiveImage.prototype.simulate = function simulate(e, doc, x, y) {
      if (this.simulator) {
        this.simulator.simulate(e, doc, x, y);
      }
    };

    return InteractiveImage;
  }(_ImageBase3.default);

  exports.default = InteractiveImage;

  /***/
},
/* 36 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _GraphUtils = __webpack_require__(4);

  var _GraphUtils2 = _interopRequireDefault(_GraphUtils);

  var _MathUtils = __webpack_require__(2);

  var _MathUtils2 = _interopRequireDefault(_MathUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var LoadingAnimation = function () {
    LoadingAnimation.prototype.dy = function dy(t, y) {
      var w = y[0],
          a = y[1];
      return [-this.g * Math.cos(a), w];
    };

    LoadingAnimation.prototype.integrate = function integrate(T) {
      var t = 0,
          dt = this.p.dt,
          os = this.os;
      while (t < T) {
        if (t + dt > T) {
          dt = T - t;
        }
        os = _MathUtils2.default.rk4(this.dy.bind({ g: this.p.g }), 0, dt, os);
        t += dt;
      }
      return os;
    };

    LoadingAnimation.prototype.calcTimeTo = function calcTimeTo(target) {
      var t = 0,
          dt = this.p.dt,
          os = this.os;
      while (Math.abs(os[1] - target) > 1e-4) {
        var nos = _MathUtils2.default.rk4(this.dy.bind({ g: this.p.g }), 0, dt, os);
        if (nos[0] < 0 && nos[1] < target || nos[0] > 0 && nos[1] > target) {
          dt /= 2;
        } else {
          os = nos;
          t += dt;
        }
      }
      return t;
    };

    LoadingAnimation.prototype.update = function update(T) {
      this.os = this.integrate(T);

      this.t += T;
      if (this.t >= this.p.updateInterval) {
        this.t = 0;
        var r = 0.1 * Math.min(this.c.width, this.c.height),
            a = this.os[1],
            x0 = 0.5 * this.c.width,
            y0 = 0.5 * this.c.height,
            ctx = this.ctx;

        ctx.clearRect(0, 0, this.c.width, this.c.height);
        ctx.beginPath();
        ctx.fillStyle = _GraphUtils2.default.color2Rgba(this.p.color, 1);
        ctx.rect(0, 0, this.c.width, this.c.height);
        ctx.fill();

        ctx.beginPath();
        ctx.shadowBlur = 50;
        ctx.fillStyle = _GraphUtils2.default.color2Rgba(_GraphUtils2.default.inverseColor(this.p.color, 0.9), Math.abs(this.os[0] / 6.36));
        ctx.shadowColor = _GraphUtils2.default.color2Rgba(_GraphUtils2.default.inverseColor(this.p.color, 1), 0.9);
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.font = 'bold ' + Math.round(0.25 * r) + 'px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText("Loading...", x0, y0);

        var ps = 10,
            da = 2 * Math.PI / ps; //2.5*_r/r
        ctx.shadowColor = _GraphUtils2.default.color2Rgba(_GraphUtils2.default.inverseColor(this.p.color, 1), 0.7);
        for (var i = 0, _a = a, _r = 0.2 * r; i < ps; ++i, _r *= 0.9, _a += da) {
          ctx.beginPath();
          ctx.fillStyle = _GraphUtils2.default.color2Rgba(_GraphUtils2.default.inverseColor(this.p.color, (ps - i) / ps), 0.7 * (ps - i) / ps);
          var cx = x0 + r * Math.cos(_a),
              cy = y0 - r * Math.sin(_a),
              nx = x0 + r * Math.cos(_a + da),
              ny = y0 - r * Math.sin(_a + da);
          ctx.shadowOffsetX = 0.2 * (nx - cx);
          ctx.shadowOffsetY = 0.2 * (ny - cy);
          ctx.arc(cx, cy, _r, 0, Math.PI * 2, 1);
          ctx.fill();
        }
        if (this.onChange) {
          this.onChange(this.c, this.p.color);
        }
      }
    };

    LoadingAnimation.prototype.getImage = function getImage() {
      return this.c;
    };

    LoadingAnimation.prototype.dispose = function dispose() {
      this.c.width = 0;
      this.c.height = 0;
      delete this.ctx;
      delete this.c;
    };

    LoadingAnimation.prototype.createSprite = function createSprite(n) {
      var c = (0, _libs.$)('<canvas width="' + this.c.width * n + '" height="' + this.c.height + '"></canvas>')[0],
          ctx = c.getContext('2d'),
          t = this.calcTimeTo(this.os[1] + Math.sign(this.os[0]) * 2 * Math.PI),
          dt = t / (n + 1);
      var updateInterval = this.p.updateInterval;

      this.p.updateInterval = 0;
      for (var i = 0; i < n; ++i) {
        this.update(dt);
        ctx.drawImage(this.c, i * this.c.width, 0);
      }
      this.p.updateInterval = updateInterval;
      return c;
    };

    function LoadingAnimation(width, height, color) {
      _classCallCheck(this, LoadingAnimation);

      var jC = (0, _libs.$)('<canvas width="' + width + '" height="' + height + '"></canvas>');
      this.c = jC[0];
      this.p = {
        g: 9.8,
        dt: 1 / 60,
        color: color,
        updateInterval: 0.25
      };
      this.ctx = this.c.getContext('2d');
      this.os = [-2, Math.PI / 2];
      this.t = this.p.updateInterval;
    }

    return LoadingAnimation;
  }();

  exports.default = LoadingAnimation;

  /***/
},
/* 37 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var LoadingController = function () {
    function LoadingController(view) {
      var showProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _classCallCheck(this, LoadingController);

      this.view = view;
      this.progress = 0;
      this.showProgress = showProgress;
      this.updateView();
    }

    LoadingController.prototype.dispose = function dispose() {
      this.showProgress = false;
      this.updateView();
      delete this.view;
    };

    LoadingController.prototype.setProgress = function setProgress(v) {
      this.progress = v;
      this.updateView();
    };

    LoadingController.prototype.updateView = function updateView() {
      if (this.view) {

        this.view.setState('widLoadingProgress', {
          enable: true,
          visible: this.showProgress,
          active: false
        });

        this.view.setState('txtLoadingProgress', {
          value: this.progress === 0 ? 'Please wait... the Application is Loading' : 'PDF is Loading: ' + this.progress + '%',
          visible: true
        });

        for (var _iterator = this.view.getLinks(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var name = _ref;

          this.view.setState(name, {
            enable: false,
            visible: true,
            active: false
          });
        }

        this.view.setState('inpPages', {
          visible: true,
          value: ''
        });

        this.view.setState('inpPage', {
          visible: true,
          enable: false,
          value: ''
        });
      }
    };

    return LoadingController;
  }();

  exports.default = LoadingController;

  /***/
},
/* 38 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _libs = __webpack_require__(0);

  var _MathUtils = __webpack_require__(2);

  var _MathUtils2 = _interopRequireDefault(_MathUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Object3DWatcher = function () {
    function Object3DWatcher(visual, boundBoxClb) {
      var testScale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.testScale;

      _classCallCheck(this, Object3DWatcher);

      this.visual = visual;
      this.boundBoxClb = boundBoxClb;
      this.testScale = testScale;
      this.camera = visual.camera;
      this.element = this.visual.element;
      this.elementSize = { w: 1, h: 1 };
      this.devicePixelRatio = this.visual.wnd.devicePixelRatio || 1;
      this.orbit = visual.getOrbit();
      this.scale = 1;

      this.eps = 1e-4;
      this.v = new _libs.THREE.Vector3();
      this.dv = new _libs.THREE.Vector2();

      this.enabled = false;

      visual.addRenderCallback(this.update.bind(this));

      this.os = {
        vx: 0,
        vy: 0,
        x: 0,
        y: 0
      };
      this.orbit.update();
      this.camera.updateMatrixWorld();
      var box = this.computeClientBoundBox(),
          k = 1.11;
      this.movePan({ x: -k * box.mid.x, y: -k * box.mid.y });
    }

    Object3DWatcher.prototype.movePan = function movePan(dv) {
      this.orbit.pan(dv.x * this.element.width, -dv.y * this.element.height);
    };

    Object3DWatcher.prototype.vToCamera = function vToCamera(v) {
      v.project(this.camera);
      return {
        x: 0.5 * v.x,
        y: 0.5 * v.y
      };
    };

    Object3DWatcher.prototype.computeClientBoundBox = function computeClientBoundBox() {
      var box = this.boundBoxClb(),
          xs = [box.min.x, box.max.x],
          ys = [0, 0],
          zs = [box.min.z, box.max.z];

      var ps = [],
          res = { max: {}, min: {} };
      for (var _iterator = xs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var x = _ref;

        for (var _iterator2 = ys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var y = _ref2;

          for (var _iterator3 = zs, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
              if (_i3 >= _iterator3.length) break;
              _ref3 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done) break;
              _ref3 = _i3.value;
            }

            var z = _ref3;

            ps.push(this.vToCamera(this.v.set(x, y, z)));
          }
        }
      }

      ps.sort(function (p1, p2) {
        return p1.x - p2.x;
      });
      res.min.x = ps[0].x;
      res.max.x = ps[ps.length - 1].x;
      ps.sort(function (p1, p2) {
        return p1.y - p2.y;
      });
      res.min.y = ps[0].y;
      res.max.y = ps[ps.length - 1].y;

      res.width = res.max.x - res.min.x;
      res.height = res.max.y - res.min.y;

      res.mid = {
        x: 0.5 * (res.max.x + res.min.x),
        y: 0.5 * (res.max.y + res.min.y)
      };

      return res;
    };

    Object3DWatcher.prototype.setObject = function setObject(boundBoxClb) {
      this.boundBoxClb = boundBoxClb;
    };

    Object3DWatcher.prototype.testScale = function testScale() {
      return true;
    };

    Object3DWatcher.prototype.computeCorr = function computeCorr(K, min, max) {
      var corr = 0;
      if (K < 1) {
        if (min > -0.5) {
          corr = -0.5 - min;
        } else if (max < 0.5) {
          corr = 0.5 - max;
        }
      } else {
        if (min < -0.5) {
          corr = -0.5 - min;
        } else if (max > 0.5) {
          corr = 0.5 - max;
        }
      }
      return corr;
    };

    Object3DWatcher.prototype.getScale = function getScale() {
      var box = this.computeClientBoundBox(),
          Kx = this.elementSize.w / box.width,
          Ky = this.elementSize.h / box.height;
      return 1 / Math.min(Kx, Ky);
    };

    Object3DWatcher.prototype.centerView = function centerView(T) {
      var _this = this;

      var box = this.computeClientBoundBox(),
          Kx = this.elementSize.w / box.width,
          Ky = this.elementSize.h / box.height,
          K = Math.min(Kx, Ky);

      if (this.testScale() && Math.abs(1 / K - this.scale) > this.eps) {
        var scale = 1 / K + 0.2 * (this.scale - 1 / K);
        this.orbit.setScale(this.orbit.getScale() / (K * scale));
        this.orbit.update();
        this.camera.updateMatrixWorld();
        box = this.computeClientBoundBox();
        Kx = this.elementSize.w / box.width;
        Ky = this.elementSize.h / box.height;
        K = Math.min(Kx, Ky);
      }

      var dv = this.dv;
      if (K > 1 - this.eps) {
        dv.set(-box.mid.x, -box.mid.y);
      } else {
        dv.set(this.computeCorr(Kx, box.min.x, box.max.x), this.computeCorr(Ky, box.min.y, box.max.y));
      }

      if (Math.sqrt(this.os.vx * this.os.vx + this.os.vy * this.os.vy) > 0.003 || dv.length() > 0.003) {
        var dt = 1 / 60,
            t = 0,
            os = _extends({}, this.os, {
          x: 0,
          y: 0
        });
        os.tf = function (vx, vy, x, y) {
          return {
            x: 75 * (dv.x - x) / Math.pow(_this.devicePixelRatio, 1.5),
            y: 75 * (dv.y - y) / Math.pow(_this.devicePixelRatio, 1.5)
          };
        };
        while (t < T) {
          if (t + dt > T) {
            dt = T - t;
          }
          os = this.integrate(os, dt);
          t += dt;
        }
        this.movePan(os);
        this.os = os;
      }
    };

    Object3DWatcher.prototype.integrate = function integrate(os, dt) {
      var _MathUtils$rk = _MathUtils2.default.rk4(this.dy.bind(os), 0, dt, [os.vx, os.vy, os.x, os.y]),
          vx = _MathUtils$rk[0],
          vy = _MathUtils$rk[1],
          x = _MathUtils$rk[2],
          y = _MathUtils$rk[3];

      return _extends({}, os, {
        vx: vx, vy: vy, x: x, y: y
      });
    };

    Object3DWatcher.prototype.dy = function dy(t, Y) {
      var vx = Y[0],
          vy = Y[1],
          x = Y[2],
          y = Y[3],
          vd = 15,
          tf = this.tf(vx, vy, x, y);

      return [tf.x - vd * vx, tf.y - vd * vy, vx, vy];
    };

    Object3DWatcher.prototype.update = function update(dt) {
      if (this.enabled && this.boundBoxClb) {
        this.centerView(dt);
      }
    };

    return Object3DWatcher;
  }();

  exports.default = Object3DWatcher;

  /***/
},
/* 39 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _libs = __webpack_require__(0);

  var _Cache = __webpack_require__(8);

  var _Cache2 = _interopRequireDefault(_Cache);

  var _LoadingAnimation = __webpack_require__(36);

  var _LoadingAnimation2 = _interopRequireDefault(_LoadingAnimation);

  var _ImageFactory = __webpack_require__(5);

  var _ImageFactory2 = _interopRequireDefault(_ImageFactory);

  var _BaseMathUtils = __webpack_require__(1);

  var _BaseMathUtils2 = _interopRequireDefault(_BaseMathUtils);

  var _TextureAnimator = __webpack_require__(46);

  var _TextureAnimator2 = _interopRequireDefault(_TextureAnimator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var PageManager = function () {
    function PageManager(visual, book, p) {
      _classCallCheck(this, PageManager);

      this.visual = visual;
      this.book = book;
      this.p = p;
      this.pageCache = new _Cache2.default(p.cachedPages);
      this.resourcesCache = new _Cache2.default();
      this.canvas = (0, _libs.$)('<canvas>')[0];
      this.imageFactory = new _ImageFactory2.default(_extends({}, visual, { dispatchEvent: book.dispatchEvent.bind(book), renderCanvas: this.canvas, renderCanvasCtx: this.canvas.getContext('2d') }), this.resourcesCache);

      this.loadings = [];
      this.renderQueue = [];
      this.pageRequests = [];
      this.predictedRequests = [];

      this.tmpMaterial = new _libs.THREE.MeshBasicMaterial();
      visual.addObject(new _libs.THREE.Mesh(new _libs.THREE.PlaneGeometry(0, 0), this.tmpMaterial));

      this.loading = {};
      this.loading[p.cover.color] = this.createLoadingTexture(p.cover);
      if (p.page.color !== p.cover.color) {
        this.loading[p.page.color] = this.createLoadingTexture(p.page);
      }

      this.turnOnEvents();

      visual.addRenderCallback(this.update.bind(this));

      setInterval(this.updateRenderQueue.bind(this), 250);
    }

    PageManager.prototype.createLoadingTexture = function createLoadingTexture(p) {
      var spriteTiles = 6,
          animation = new _LoadingAnimation2.default(p.widthTexels, p.heightTexels, p.color),
          animator = new _TextureAnimator2.default(animation.createSprite(spriteTiles), spriteTiles, 1, spriteTiles, 0.2);
      animation.dispose();
      return animator;
    };

    PageManager.prototype.dispose = function dispose() {
      this.turnOffEvents();
      for (var _iterator = Object.keys(this.loading), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var color = _ref;

        this.loading[color].dispose();
      }
      delete this.loading;
      this.resourcesCache.dispose();
      this.pageCache.dispose();
      this.canvas.height = this.canvas.width = 0;
      delete this.canvas;
    };

    PageManager.prototype.isCover = function isCover(n) {
      return n < 2 || n >= 2 * (this.p.sheets + 1);
    };

    PageManager.prototype.update = function update(dt) {
      var loading = {};
      for (var _iterator2 = this.loadings, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var o = _ref2;

        if (o.isActive()) {
          loading[o.color] = true;;
        }
      }
      for (var _iterator3 = Object.keys(loading), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var color = _ref3;

        this.loading[color].update(dt);
      }
    };

    PageManager.prototype.removeFromLoadings = function removeFromLoadings(o) {
      var i = this.loadings.indexOf(o);
      if (~i) {
        this.loadings.splice(i, 1);
      }
    };

    PageManager.prototype.removeFromRenderQueue = function removeFromRenderQueue(o) {
      var i = this.renderQueue.indexOf(o);
      if (~i) {
        this.renderQueue.splice(i, 1);
      }
    };

    PageManager.prototype.load = function load(material, n) {
      var _this = this;

      var pi = this.p.pageCallback(n),
          p = this.isCover(n) ? this.p.cover : this.p.page;
      var o = {
        texture: new _libs.THREE.Texture(),
        wrapper: null,
        state: 'loading',
        locked: function locked(n) {
          return o.state === 'loading' || o.state === 'rendering' || _this.book.isActivePage(n);
        },
        color: p.color,
        isActive: function isActive() {
          return _this.book.isActivePage(n);
        },
        dispose: function dispose() {
          _this.removeFromLoadings(o);
          _this.removeFromRenderQueue(o);
          if (o.wrapper && o.wrapper.dispose) {
            o.wrapper.dispose();
          }
          o.texture.dispose();
          delete o.texture;
          delete o.wrapper;
        }
      };
      o.texture.minFilter = _libs.THREE.LinearFilter;
      this.loadings.push(o);
      this.setMaterial(o, material);

      Promise.resolve().then(function () {
        if (o.texture) {
          var widthTexels = pi.widthTexels || p.widthTexels,
              heightTexels = pi.heightTexels || p.heightTexels;
          o.wrapper = _this.imageFactory.build(pi, pi.number || n, widthTexels, heightTexels, p.color, _this.p.injector);
          o.simulate = pi.interactive ? (o.wrapper.simulate || function () {
            return undefined;
          }).bind(o.wrapper) : undefined;
          o.wrapper.onLoad = function () {
            if (o.state !== 'queuedForRender') {
              o.state = 'queuedForRender';
              _this.renderQueue.push(o);
              _this.updateRenderQueue();
            }
          };
          o.wrapper.onChange = function (image) {
            if (o.texture) {
              _this.removeFromLoadings(o);
              if (o.material) {
                o.material.map = o.texture;
                o.material.needsUpdate = true;
              }
              o.texture.image = image;
              o.texture.needsUpdate = true;
              o.texture.onUpdate = function () {
                if (o.state !== 'queuedForRender') {
                  o.state = 'active';
                }
                delete _this.rendering;
                _this.updateRenderQueue();
              };
              _this.tmpMaterial.map = o.texture;
              _this.tmpMaterial.needsUpdate = true;
            }
          };
        }
      });
      return this.pageCache.put(n, o);
    };

    PageManager.prototype.updateRenderQueue = function updateRenderQueue() {
      var p = this.book.p;
      if (!this.rendering && (p.renderWhileFlipping || !this.book.isProcessing())) {
        for (var _iterator4 = this.renderQueue, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref4 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref4 = _i4.value;
          }

          var o = _ref4;

          if (o.isActive()) {
            this.rendering = o;
            break;
          }
        }
        if (p.renderInactivePages) {
          this.rendering = this.rendering || this.renderQueue[0];
        }
        if (this.rendering) {
          this.removeFromRenderQueue(this.rendering);
          this.rendering.state = 'rendering';
          this.rendering.wrapper.startRender();
        }
      }
    };

    PageManager.prototype.turnOnEvents = function turnOnEvents() {
      this.transferEvents = true;
    };

    PageManager.prototype.turnOffEvents = function turnOffEvents() {
      var mouseup = _libs.$.Event('mouseup'),
          mouseout = _libs.$.Event('mouseout');
      this.pageCache.forEach(function (ent) {
        var object = ent[1];
        if (object.simulate) {
          object.simulate(mouseup, undefined, 0, 0);
          object.simulate(mouseout, undefined, 0, 0);
        }
      });
      this.transferEvents = false;
    };

    PageManager.prototype.transferEventToTexture = function transferEventToTexture(n, e, data) {
      var _this2 = this;

      if (this.transferEvents) {
        (function () {
          var toObject = _this2.getOrLoadTextureObject(undefined, n),
              uv = data.uv,
              toDoc = toObject.wrapper.getSimulatedDoc();
          _this2.pageCache.forEach(function (ent) {
            var object = ent[1];
            if (object.simulate) {
              object.simulate(e, toDoc, uv.x, uv.y);
            }
          });
        })();
      }
    };

    PageManager.prototype.loadPredictedPages = function loadPredictedPages() {
      this.predictedRequests = _BaseMathUtils2.default.predict(this.pageRequests, this.p.preloadPages);
      for (var _iterator5 = this.predictedRequests, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref5;

        if (_isArray5) {
          if (_i5 >= _iterator5.length) break;
          _ref5 = _iterator5[_i5++];
        } else {
          _i5 = _iterator5.next();
          if (_i5.done) break;
          _ref5 = _i5.value;
        }

        var p = _ref5;

        if (p < this.book.getPages() && !this.pageCache.get(p)) {
          this.load(undefined, p);
        }
      }
    };

    PageManager.prototype.addPageRequest = function addPageRequest(n) {
      this.pageRequests.push(n);
      if (this.pageRequests.length > this.p.pagesForPredicting) {
        this.pageRequests.shift();
      }
      Promise.resolve().then(this.loadPredictedPages.bind(this));
    };

    PageManager.prototype.setMaterial = function setMaterial(o, material) {
      this.pageCache.forEach(function (e) {
        var ob = e[1];
        if (o !== ob && ob.material === material) {
          delete ob.material;
        }
      });
      if (material && material !== o.material) {
        o.material = material;
        material.map = o.texture.image ? o.texture : this.loading[o.color].texture;
        material.needsUpdate = true;
      }
    };

    PageManager.prototype.getOrLoadTextureObject = function getOrLoadTextureObject(material, n) {
      var object = this.pageCache.get(n);
      if (!object) {
        object = this.load(material, n);
        this.addPageRequest(n);
      } else {
        this.setMaterial(object, material);
      }

      return object;
    };

    PageManager.prototype.setTexture = function setTexture(material, n) {
      if (~this.predictedRequests.indexOf(n)) {
        this.addPageRequest(n);
      }
      this.getOrLoadTextureObject(material, n);
    };

    return PageManager;
  }();

  exports.default = PageManager;

  /***/
},
/* 40 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _BookPropsBuilder2 = __webpack_require__(7);

  var _BookPropsBuilder3 = _interopRequireDefault(_BookPropsBuilder2);

  var _Pdf = __webpack_require__(10);

  var _Pdf2 = _interopRequireDefault(_Pdf);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var PdfBookPropsBuilder = function (_BookPropsBuilder) {
    _inherits(PdfBookPropsBuilder, _BookPropsBuilder);

    function PdfBookPropsBuilder(src, onReady) {
      _classCallCheck(this, PdfBookPropsBuilder);

      var _this = _possibleConstructorReturn(this, _BookPropsBuilder.call(this, onReady));

      _this.pdf = new _Pdf2.default(src);
      _this.pageDescription = {
        type: 'pdf',
        src: _this.pdf,
        interactive: true
      };
      _this.binds = {
        pageCallback: _this.pageCallback.bind(_this)
      };
      _this.pdf.getHandler(_this.init.bind(_this));
      return _this;
    }

    PdfBookPropsBuilder.prototype.dispose = function dispose() {
      this.pdf.dispose();
      _BookPropsBuilder.prototype.dispose.call(this);
    };

    PdfBookPropsBuilder.prototype.init = function init(handler) {
      var _this2 = this;

      this.calcSheets(this.pdf.getPagesNum());
      if (this.pdf.getPagesNum() > 0) {
        handler.getPage(1).then(function (page) {
          var size = _Pdf2.default.getPageSize(page);
          _this2.calcProps(size.width, size.height);
          _this2.ready();
        }).catch(function (e) {
          console.error(e);
        });
      } else {
        this.props = this.defaults;
        this.ready();
      }
    };

    PdfBookPropsBuilder.prototype.pageCallback = function pageCallback(n) {
      return this.pageDescription;
    };

    return PdfBookPropsBuilder;
  }(_BookPropsBuilder3.default);

  exports.default = PdfBookPropsBuilder;

  /***/
},
/* 41 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _ImageBase2 = __webpack_require__(3);

  var _ImageBase3 = _interopRequireDefault(_ImageBase2);

  var _Pdf = __webpack_require__(10);

  var _Pdf2 = _interopRequireDefault(_Pdf);

  var _BaseMathUtils = __webpack_require__(1);

  var _BaseMathUtils2 = _interopRequireDefault(_BaseMathUtils);

  var _CustomEventConverter = __webpack_require__(12);

  var _CustomEventConverter2 = _interopRequireDefault(_CustomEventConverter);

  var _PolyTarget = __webpack_require__(58);

  var _PolyTarget2 = _interopRequireDefault(_PolyTarget);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var PdfImage = function (_ImageBase) {
    _inherits(PdfImage, _ImageBase);

    function PdfImage(context, width, height, color, pdf, n) {
      _classCallCheck(this, PdfImage);

      var _this = _possibleConstructorReturn(this, _ImageBase.call(this, context, width, height, color));

      _this.n = n;
      _this.pdf = pdf;
      _this.v = { x: 0, y: 0, z: 0, set: function set(x, y, z) {
          this.x = x;this.y = y;this.z = z;
          return this;
        }, transform: function transform(m) {
          this.x = m.m[0][0] * this.x + m.m[0][1] * this.y + m.m[0][2] * this.z;
          this.y = m.m[1][0] * this.x + m.m[1][1] * this.y + m.m[1][2] * this.z;
          this.z = m.m[2][0] * this.x + m.m[2][1] * this.y + m.m[2][2] * this.z;
          return this;
        } };
      _this.m = { m: [[1, 0, 0], [0, 1, 0], [0, 0, 1]], set: function set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
          this.m = [[m00, m01, m02], [m10, m11, m12], [m20, m21, m22]];
          return this;
        } };

      _this.startRender = function () {
        _this.pdf.getHandler(_this.render.bind(_this));
      };
      Promise.resolve().then(function () {
        return _this.pdf.getHandler(_this.init.bind(_this));
      });
      return _this;
    }

    PdfImage.prototype.rectSize = function rectSize(r) {
      return {
        width: r[2] - r[0],
        height: r[3] - r[1]
      };
    };

    PdfImage.prototype.createPoly = function createPoly(m, p, s) {
      var poly = [],
          v = this.v;
      v.set(p.x, p.y, 1).transform(m);
      poly.push({ x: v.x, y: v.y });
      v.set(p.x, p.y + s.height, 1).transform(m);
      poly.push({ x: v.x, y: v.y });
      v.set(p.x + s.width, p.y + s.height, 1).transform(m);
      poly.push({ x: v.x, y: v.y });
      v.set(p.x + s.width, p.y, 1).transform(m);
      poly.push({ x: v.x, y: v.y });
      return poly;
    };

    PdfImage.prototype.getSimulatedDoc = function getSimulatedDoc() {
      return this.page;
    };

    PdfImage.prototype.simulate = function simulate(e, doc, x, y) {
      if (this.eventConverter) {
        this.eventConverter.convert(e, { doc: doc, x: x, y: y });
      }
    };

    PdfImage.prototype.setAnnotations = function setAnnotations(annos) {
      var view = this.page.view,
          vSz = this.rectSize(view),
          t = this.viewport.clone({
        dontFlip: true
      }).transform,
          targets = [];
      this.m.set(1, t[1], 0, t[2], 1, 0, t[4] / vSz.width, t[5] / vSz.height, 1);

      for (var _iterator = annos, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var anno = _ref;

        if (anno.subtype === 'Link') {
          var rect = anno.rect,
              aPos = {
            x: (rect[0] - view[0]) / vSz.width,
            y: (rect[1] - view[1]) / vSz.height
          },
              aSz = this.rectSize(rect);
          aSz.width /= vSz.width;
          aSz.height /= vSz.height;
          var _target = new _PolyTarget2.default(this.createPoly(this.m, aPos, aSz));
          _target.anno = anno;
          _target.callback = this.annoClb.bind(this);
          targets.push(_target);
        }
      }
      if (targets.length) {
        this.eventConverter = new _CustomEventConverter2.default(this.wnd, this.doc, _PolyTarget2.default.test, this.page);
        for (var _iterator2 = targets, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var target = _ref2;

          this.eventConverter.addCustom(target);
        }
      }
    };

    PdfImage.prototype.annoClb = function annoClb(e, data) {
      if (this.context.dispatchEvent) {
        this.context.dispatchEvent({
          type: 'pdfAnnotation',
          event: e,
          annotation: data.target.anno
        });
      }
    };

    PdfImage.prototype.init = function init(handler) {
      var _this2 = this;

      handler.getPage(this.n + 1).then(function (page) {
        _this2.page = page;
        _this2.size = _Pdf2.default.getPageSize(page);
        page.getAnnotations().then(_this2.setAnnotations.bind(_this2));
        var scale = _BaseMathUtils2.default.calcScale(_this2.size.width, _this2.size.height, _this2.resW, _this2.resH);
        _this2.viewport = page.getViewport(scale);
        _this2.resW = _this2.width = _this2.viewport.width;
        _this2.resH = _this2.height = _this2.viewport.height;
        _this2.finishLoad();
      }).catch(function (e) {
        console.error('Cannot load PDF page: ' + (n + 1));
        _this2.finishLoad();
      });
    };

    PdfImage.prototype.render = function render(handler) {
      var _this3 = this;

      if (this.page) {
        this.page.render({
          canvasContext: this.pushCtx(),
          viewport: this.viewport
        }).then(function () {
          _this3.popCtx();
          _this3.finishRender();
        });
      } else {
        this.renderBlankPage();
        this.finishRender();
      }
    };

    return PdfImage;
  }(_ImageBase3.default);

  exports.default = PdfImage;

  /***/
},
/* 42 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var PdfLinksHandler = function () {
    function PdfLinksHandler(pdf, ctrl, element) {
      _classCallCheck(this, PdfLinksHandler);

      this.pdf = pdf;
      this.ctrl = ctrl;
      this.element = (0, _libs.$)(element);
      this.cursors = [];
    }

    PdfLinksHandler.prototype.dispose = function dispose() {};

    PdfLinksHandler.prototype.setHandler = function setHandler(handler) {
      this.handler = handler;
    };

    PdfLinksHandler.prototype.defaultHandler = function defaultHandler(type, destination) {
      if (type === 'internal') {
        this.ctrl.goToPage(destination);
      } else if (type === 'external') {
        window.open(destination, '_blank');
      }
    };

    PdfLinksHandler.prototype.callHandlers = function callHandlers(type, destination) {
      if (!this.handler || !this.handler(type, destination)) {
        this.defaultHandler(type, destination);
      }
    };

    PdfLinksHandler.prototype.handleEvent = function handleEvent(data) {
      var _this = this;

      var e = data.event,
          anno = data.annotation;
      switch (e.type) {
        case 'mouseover':
          {
            this.cursors.push(this.element.css('cursor'));
            this.element.css('cursor', 'pointer');
            break;
          }
        case 'mouseout':
          {
            this.element.css('cursor', this.cursors.pop() || '');
            break;
          }
        case 'click':
          {
            if (anno.url) {
              this.callHandlers('external', anno.url);
            } else if (anno.dest) {
              var destPromise = void 0;
              if (typeof anno.dest === 'string') {
                destPromise = this.pdf.handler.getDestination(anno.dest);
              } else {
                destPromise = Promise.resolve(anno.dest);
              }
              destPromise.then(function (dest) {
                return _this.pdf.handler.getPageIndex(dest[0]);
              }).then(function (number) {
                return _this.callHandlers('internal', number);
              }).catch(function () {
                return console.error('Bad link');
              });
            }
            break;
          }
      }
    };

    return PdfLinksHandler;
  }();

  exports.default = PdfLinksHandler;

  /***/
},
/* 43 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _MathUtils = __webpack_require__(2);

  var _MathUtils2 = _interopRequireDefault(_MathUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SheetPhysics = function () {
    SheetPhysics.targetForceClb = function targetForceClb(o, a, v, ch) {
      var l = a * this.r;
      return 100 * this.m * this.g * (2 / (1 + Math.exp(10 * (l - this.tl))) - 1) - this.m * 40 * v;
    };

    SheetPhysics.hoverCornerForceClb = function hoverCornerForceClb(o, v, l, ch) {
      return 5;
    };

    SheetPhysics.prototype.getTargetForceClb = function getTargetForceClb(mass, targetAngle) {
      return SheetPhysics.targetForceClb.bind({
        g: this.p.gravity,
        m: mass,
        tl: targetAngle * this.p.r,
        r: this.p.r
      });
    };

    SheetPhysics.dragForceClb = function dragForceClb(o, a, v, ch) {
      return o.flbt * o.m * (10 * o.g * ch - 50 * v / (1 + Math.exp(3.5 * Math.abs(ch))));
    };

    SheetPhysics.dragCornerForceClb = function dragCornerForceClb(o, a, v, ch) {
      return 15 * (2 / (1 + Math.exp(10 * (a - this.ta) * o.r)) - 1);
    };

    SheetPhysics.getDragCornerForceClb = function getDragCornerForceClb(targetAngle) {
      return SheetPhysics.dragCornerForceClb.bind({
        ta: targetAngle
      });
    };

    function SheetPhysics() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var gravity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var cornerDeviation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.15;
      var fps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 240;

      _classCallCheck(this, SheetPhysics);

      this.p = {
        r: r,
        cornerDeviation: cornerDeviation,
        l: Math.PI * r,
        startDt: 1 / fps,
        gravity: gravity,
        margin: 0.002 * r,
        infM: 1e4,
        attempts: 16,
        maxIterations: 100
      };
      this.os = [];
    }

    SheetPhysics.prototype.dispose = function dispose() {
      this.os = [];
    };

    SheetPhysics.prototype.getSize = function getSize() {
      return this.os.length;
    };

    SheetPhysics.prototype.addObject = function addObject(mass, angle, velocity, flexibility, cornerHeight, simulateClb, removeClb) {
      var forceClb = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : function () {
        return 0;
      };
      var cornerForceClb = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : function () {
        return 0;
      };

      var no = {
        id: _MathUtils2.default.getUnique(),
        m: mass,
        v: velocity,
        l: angle * this.p.r,
        f: forceClb,
        cf: cornerForceClb,
        ch: cornerHeight,
        flbt: flexibility,
        simulateClb: simulateClb,
        removeClb: removeClb
      };
      var i = this.os.findIndex(function (o) {
        return no.l <= o.l;
      });
      i = ~i ? i : this.os.length;
      this.os.splice(i, 0, no);
      return no.id;
    };

    SheetPhysics.prototype.getParametrMap = function getParametrMap(name) {
      var map = {
        mass: 'm',
        velocity: 'v',
        flexibility: 'flbt',
        cornerHeight: 'ch',
        simulateClb: 'simulateClb',
        removeClb: 'removeClb',
        forceClb: 'f',
        cornerForceClb: 'cf'
      };
      return map[name];
    };

    SheetPhysics.prototype.setParametr = function setParametr(id, name, value) {
      var o = this.os.find(function (o) {
        return o.id === id;
      });
      if (name === 'angle') {
        o.l = value * this.p.r;
      } else {
        o[this.getParametrMap(name)] = value;
      }
    };

    SheetPhysics.prototype.getParametr = function getParametr(id, name) {
      var o = this.os.find(function (o) {
        return o.id === id;
      });
      var value = void 0;
      if (name === 'angle') {
        value = o.l / this.p.r;
      } else {
        value = o[this.getParametrMap(name)];
      }
      return value;
    };

    SheetPhysics.prototype.simulate = function simulate(T) {
      var t = 0,
          dt = this.p.startDt,
          attempt = 0,
          it = 0;

      while (t < T && it < this.p.maxIterations) {
        if (dt > T - t) {
          dt = T - t;
        }
        var nos = this.integrate(this.os, dt),
            ci = this.findCollisions(nos);
        if (ci.num > 1 && attempt < this.p.attempts) {
          dt /= 2;
          ++attempt;
        } else {
          if (ci.num === 1) {
            var scos = this.solveCollision(nos[ci.last - 1], nos[ci.last]);
            nos[ci.last - 1] = scos[0];
            nos[ci.last] = scos[1];
          } else if (ci.num > 1) {
            var gs = [];
            var last = -2;
            for (var _iterator = ci.all, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
              var _ref;

              if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
              }

              var i = _ref;

              if (i - last > 1) {
                gs.push([]);
              }
              gs[gs.length - 1].push(i);
              last = i;
            }
            for (var _iterator2 = gs, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
              var _ref2;

              if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
              } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
              }

              var g = _ref2;

              var sg = void 0,
                  i0 = void 0;
              if (nos[g[0]].l > Math.PI / 2 * this.p.r) {
                sg = -1;
                i0 = g[g.length - 1];
              } else {
                sg = 1;
                i0 = g[0];
              }
              for (var _i3 = i0; _i3 < nos.length && _i3 > -1; _i3 += sg) {
                var o = nos[_i3 + sg];
                if (o && sg * (o.l - nos[_i3].l) <= this.p.margin) {
                  o.l = nos[_i3].l + sg * 2 * this.p.margin;
                  if (o.l > this.p.l || o.l < 0) {
                    o.l = o.l > this.p.l ? this.p.l : 0;
                    o.ch = 0;
                    o.v = 0;
                    console.error('Bad collision');
                  }
                } else {
                  break;
                }
              }
            }
          }
          this.os = nos;
          this.findAndSolveCornerCollisions();
          t += dt;
          dt = this.p.startDt;
          attempt = 0;
        }
        ++it;
      }

      this.removeStatics();
    };

    SheetPhysics.prototype.removeStatics = function removeStatics() {
      var nos = [],
          notify = [[], []];
      for (var _iterator3 = this.os, _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i4 >= _iterator3.length) break;
          _ref3 = _iterator3[_i4++];
        } else {
          _i4 = _iterator3.next();
          if (_i4.done) break;
          _ref3 = _i4.value;
        }

        var o = _ref3;

        if (o.simulateClb) {
          o.simulateClb(o.l / this.p.r, o.ch);
        }
        if ((o.l === this.p.l || o.l === 0) && o.v === 0) {
          if (o.removeClb !== undefined) {
            notify[(o.l !== this.p.l) + 0].push(o);
          }
        } else {
          nos.push(o);
        }
      }
      this.os = nos;
      for (var _iterator4 = notify[0].reverse(), _isArray4 = Array.isArray(_iterator4), _i5 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i5 >= _iterator4.length) break;
          _ref4 = _iterator4[_i5++];
        } else {
          _i5 = _iterator4.next();
          if (_i5.done) break;
          _ref4 = _i5.value;
        }

        var _o = _ref4;

        _o.removeClb(Math.PI, _o.ch);
      }
      for (var _iterator5 = notify[1], _isArray5 = Array.isArray(_iterator5), _i6 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref5;

        if (_isArray5) {
          if (_i6 >= _iterator5.length) break;
          _ref5 = _iterator5[_i6++];
        } else {
          _i6 = _iterator5.next();
          if (_i6.done) break;
          _ref5 = _i6.value;
        }

        var _o2 = _ref5;

        _o2.removeClb(0, _o2.ch);
      }
    };

    SheetPhysics.prototype.findAndSolveCornerCollisions = function findAndSolveCornerCollisions() {
      if (this.os.length) {
        var os = [_extends({}, this.os[0], {
          l: 0,
          m: this.p.infM,
          ch: 0
        })].concat(this.os, [_extends({}, this.os[0], {
          l: 1.05 * this.p.l,
          m: this.p.infM,
          ch: 0
        })]);

        for (var i = 1; i < os.length; ++i) {
          var a = os[i - 1],
              b = os[i],
              al = a.l + this.p.cornerDeviation * a.ch * this.p.r,
              bl = b.l + this.p.cornerDeviation * b.ch * this.p.r;
          if (1.05 * al > bl && a.ch > b.ch) {
            var dCh = a.ch - b.ch,
                dv = a.m / a.flbt + b.m / b.flbt,
                ka = a.m / a.flbt / dv,
                kb = b.m / b.flbt / dv;
            a.ch = a.ch - kb * dCh;
            b.ch = b.ch + ka * dCh;
          }
        }
      }
    };

    SheetPhysics.prototype.solveCollision = function solveCollision(a, b) {
      var mm = b.m + a.m,
          av = (-a.v * b.m + a.m * a.v + 2 * b.m * b.v) / mm,
          bv = (b.m * b.v - b.v * a.m + 2 * a.m * a.v) / mm;
      return [_extends({}, a, { v: av }), _extends({}, b, { v: bv })];
    };

    SheetPhysics.prototype.findCollisions = function findCollisions(os) {
      var ci = {
        num: 0,
        last: 0,
        all: []
      };
      for (var i = 1; i < os.length && ci.num < 2; ++i) {
        if (os[i - 1].l > os[i].l || this.isCollision(os[i - 1], os[i])) {
          if (os[i - 1].l > os[i].l) {
            ++ci.num;
          }
          ++ci.num;
          ci.last = i;
          if (ci.all.indexOf(i - 1) === -1) {
            ci.all.push(i - 1);
          }
          if (ci.all.indexOf(i) === -1) {
            ci.all.push(i);
          }
        }
      }
      return ci;
    };

    SheetPhysics.prototype.isCollision = function isCollision(a, b) {
      return Math.abs(a.l - b.l) < this.p.margin && a.v > b.v;
    };

    SheetPhysics.prototype.integrate = function integrate(os, dt) {
      var nos = [];
      for (var _iterator6 = os, _isArray6 = Array.isArray(_iterator6), _i7 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
        var _ref6;

        if (_isArray6) {
          if (_i7 >= _iterator6.length) break;
          _ref6 = _iterator6[_i7++];
        } else {
          _i7 = _iterator6.next();
          if (_i7.done) break;
          _ref6 = _i7.value;
        }

        var o = _ref6;

        var vl = _MathUtils2.default.rk4(this.dy.bind({
          g: this.p.gravity,
          r: this.p.r,
          m: o.m,
          f: o.f,
          cf: o.cf,
          ch: o.ch,
          flbt: o.flbt
        }), 0, dt, [o.v, o.l, o.ch]);
        var no = _extends({}, o, {
          v: vl[0],
          l: vl[1],
          ch: vl[2]
        });
        if (no.l <= 0 || no.l >= this.p.l) {
          no.l = no.l <= 0 ? 0 : this.p.l;
          no.v = 0;
          no.ch = 0;
        }
        nos.push(no);
      }
      return nos;
    };

    SheetPhysics.prototype.dy = function dy(t, y) {
      var v = y[0],
          l = y[1],
          ch = y[2],
          f = this.f(this, l / this.r, v, ch),
          cf = this.cf(this, l / this.r, v, ch);
      return [(-this.g * Math.cos(l / this.r) * this.m + f) / this.m, v + 0.01 * (Math.random() - 0.5), this.flbt * ((2 / (1 + Math.exp(-0.2 * cf)) - 1) * (1 - 2 / (1 + Math.exp(-5 * (Math.abs(ch) - 2)))) - ch)];
    };

    return SheetPhysics;
  }();

  exports.default = SheetPhysics;

  /***/
},
/* 44 */
/***/function (module, exports) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SoundsEnviroment = function () {
    function SoundsEnviroment() {
      var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SoundsEnviroment);

      this.sounds = template.sounds || {};
      this.audio = {};
      if (this.sounds.startFlip) {
        this.audio.startFlip = new Audio(this.sounds.startFlip);
      }
      if (this.sounds.endFlip) {
        this.audio.endFlip = new Audio(this.sounds.endFlip);
      }
    }

    SoundsEnviroment.prototype.setEnabled = function setEnabled(enabled) {
      this.enabled = enabled;
    };

    SoundsEnviroment.prototype.togle = function togle() {
      this.enabled = !this.enabled;
    };

    SoundsEnviroment.prototype.dispose = function dispose() {
      delete this.audio.startFlip;
      delete this.audio.endFlip;
    };

    SoundsEnviroment.prototype.startFlip = function startFlip() {
      if (this.enabled && this.audio.startFlip) {
        this.audio.startFlip.play();
      }
    };

    SoundsEnviroment.prototype.endFlip = function endFlip() {
      if (this.enabled && this.audio.startFlip) {
        this.audio.startFlip.pause();
        this.audio.startFlip.currentTime = 0;
      }
      if (this.enabled && this.audio.endFlip) {
        this.audio.endFlip.play();
      }
    };

    SoundsEnviroment.prototype.subscribeFlips = function subscribeFlips(emitter) {
      emitter.addEventListener('startFlip', this.startFlip.bind(this));
      emitter.addEventListener('endFlip', this.endFlip.bind(this));
    };

    return SoundsEnviroment;
  }();

  exports.default = SoundsEnviroment;

  /***/
},
/* 45 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _ImageBase2 = __webpack_require__(3);

  var _ImageBase3 = _interopRequireDefault(_ImageBase2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var StaticImage = function (_ImageBase) {
    _inherits(StaticImage, _ImageBase);

    function StaticImage(context, width, height, color, src) {
      _classCallCheck(this, StaticImage);

      var _this = _possibleConstructorReturn(this, _ImageBase.call(this, context, width, height, color));

      _this.binds = {};
      _this.image = new Image();
      _this.binds.imageLoad = function () {
        _this.width = _this.image.width;
        _this.height = _this.image.height;
        _this.startRender = function () {
          _this.renderImage(_this.image);
          _this.finishRender();
        };
        _this.finishLoad();
      };
      _this.binds.imageError = function () {
        _this.startRender = function () {
          _this.renderNotFoundPage();
          _this.finishRender();
        };
        _this.finishLoad();
      };
      (0, _libs.$)(_this.image).on('load', _this.binds.imageLoad).on('error', _this.binds.imageError);
      _this.image.src = src;
      return _this;
    }

    StaticImage.prototype.dispose = function dispose() {
      (0, _libs.$)(this.image).off('load', this.binds.imageLoad).off('error', this.binds.imageError);
      this.image.src = '';
      delete this.image;
      _ImageBase.prototype.dispose.call(this);
    };

    return StaticImage;
  }(_ImageBase3.default);

  exports.default = StaticImage;

  /***/
},
/* 46 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var TextureAnimator = function () {
    function TextureAnimator(img, tilesHoriz, tilesVert, numTiles, tileDispDuration) {
      _classCallCheck(this, TextureAnimator);

      var texture = new _libs.THREE.Texture();
      texture.minFilter = _libs.THREE.LinearFilter;
      texture.image = img;
      texture.needsUpdate = true;

      // note: texture passed by reference, will be updated by the update function.
      this.texture = texture;
      this.tilesHorizontal = tilesHoriz;
      this.tilesVertical = tilesVert;
      // how many images does this spritesheet contain?
      //  usually equals tilesHoriz * tilesVert, but not necessarily,
      //  if there at blank tiles at the bottom of the spritesheet.
      this.numberOfTiles = numTiles;
      texture.repeat.set(1 / this.tilesHorizontal, 1 / this.tilesVertical);

      // how long should each image be displayed?
      this.tileDisplayDuration = tileDispDuration;

      // how long has the current image been displayed?
      this.currentDisplayTime = 0;

      // which image is currently being displayed?
      this.currentTile = 0;
    }

    TextureAnimator.prototype.update = function update(milliSec) {
      this.currentDisplayTime += milliSec;
      while (this.currentDisplayTime > this.tileDisplayDuration) {
        this.currentDisplayTime -= this.tileDisplayDuration;
        ++this.currentTile;
        if (this.currentTile == this.numberOfTiles) this.currentTile = 0;
        var currentColumn = this.currentTile % this.tilesHorizontal;
        this.texture.offset.x = currentColumn / this.tilesHorizontal;
        var currentRow = Math.floor(this.currentTile / this.tilesHorizontal);
        this.texture.offset.y = currentRow / this.tilesVertical;
      }
    };

    TextureAnimator.prototype.dispose = function dispose() {
      var img = this.texture.image;
      img.height = img.width = 0;
      this.texture.dispose();
    };

    return TextureAnimator;
  }();

  exports.default = TextureAnimator;

  /***/
},
/* 47 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _sheetBlock = __webpack_require__(15);

  var _sheetBlock2 = _interopRequireDefault(_sheetBlock);

  var _MathUtils = __webpack_require__(2);

  var _MathUtils2 = _interopRequireDefault(_MathUtils);

  var _ThreeUtils = __webpack_require__(6);

  var _ThreeUtils2 = _interopRequireDefault(_ThreeUtils);

  var _Delaunay = __webpack_require__(30);

  var _Delaunay2 = _interopRequireDefault(_Delaunay);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ThreeMarkup = function () {
    function ThreeMarkup(block, side, poly, props) {
      _classCallCheck(this, ThreeMarkup);

      var poly0 = poly;
      this.ivs = _ThreeUtils2.default.findInternalVertices(block.geometry, poly, block.p.sideFaces[side].first, block.p.sideFaces[side].last);
      poly = _MathUtils2.default.refinePoly(poly, 1 / Math.max(_sheetBlock2.default.resX, _sheetBlock2.default.resZ));
      this.block = block;
      var geometry = new _libs.THREE.Geometry();
      this.geometry = geometry;
      this.polyFaces = _ThreeUtils2.default.findUvTris(block.geometry, poly, block.p.sideFaces[side].first, block.p.sideFaces[side].last);

      for (var _iterator = this.ivs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var iv = _ref;

        poly.push(iv.p);
      }
      geometry.vertices = [];
      for (var i = 0; i < poly.length; ++i) {
        geometry.vertices.push(new _libs.THREE.Vector3());
      }

      var dTri = _Delaunay2.default.triangulate(poly.map(function (p) {
        return [p.x, p.y];
      }));
      for (var _i2 = 0; _i2 < dTri.length; _i2 += 3) {
        if (!_libs.THREE.ShapeUtils.isClockWise([poly[dTri[_i2 + 0]], poly[dTri[_i2 + 1]], poly[dTri[_i2 + 2]]])) {
          geometry.faces.push(new _libs.THREE.Face3(dTri[_i2 + 0], dTri[_i2 + 1], dTri[_i2 + 2]));
        } else {
          geometry.faces.push(new _libs.THREE.Face3(dTri[_i2 + 0], dTri[_i2 + 2], dTri[_i2 + 1]));
        }
      }

      this.computeVertices();
      var material = new _libs.THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
      this.three = new _libs.THREE.Mesh(geometry, material);
      block.three.add(this.three);
    }

    ThreeMarkup.prototype.computeVertices = function computeVertices() {
      var blGm = this.block.geometry,
          scale = this.block.p.scale * 0.001;
      for (var i = 0; i < this.polyFaces.length; ++i) {
        var f = blGm.faces[this.polyFaces[i].i],
            coefs = this.polyFaces[i].coefs;
        var v = [blGm.vertices[f.a], blGm.vertices[f.b], blGm.vertices[f.c]],
            n = {
          x: coefs[0] * f.vertexNormals[0].x + coefs[1] * f.vertexNormals[1].x + coefs[2] * f.vertexNormals[2].x,
          y: coefs[0] * f.vertexNormals[0].y + coefs[1] * f.vertexNormals[1].y + coefs[2] * f.vertexNormals[2].y,
          z: coefs[0] * f.vertexNormals[0].z + coefs[1] * f.vertexNormals[1].z + coefs[2] * f.vertexNormals[2].z
        };
        this.geometry.vertices[i].set(coefs[0] * v[0].x + coefs[1] * v[1].x + coefs[2] * v[2].x + scale * n.x, coefs[0] * v[0].y + coefs[1] * v[1].y + coefs[2] * v[2].y + scale * n.y, coefs[0] * v[0].z + coefs[1] * v[1].z + coefs[2] * v[2].z + scale * n.z);
      }
      for (var _i3 = this.polyFaces.length, j = 0; j < this.ivs.length; ++_i3, ++j) {
        var _v = blGm.vertices[this.ivs[j].i],
            _n = this.ivs[j].n;
        this.geometry.vertices[_i3].set(_v.x + scale * _n.x, _v.y + scale * _n.y, _v.z + scale * _n.z);
      }
      this.geometry.computeVertexNormals();
      //this.geometry.computeFaceNormals();
      this.geometry.computeBoundingSphere();
      //this.geometry.computeBoundingBox();
      this.geometry.verticesNeedUpdate = true;
    };

    return ThreeMarkup;
  }();

  exports.default = ThreeMarkup;

  /***/
},
/* 48 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _libs = __webpack_require__(0);

  var _ImageFactory = __webpack_require__(5);

  var _ImageFactory2 = _interopRequireDefault(_ImageFactory);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Thumbnails = function () {
    function Thumbnails(context, container, thumbnailsClb, size) {
      var _this = this;

      var props = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { kWtoH: 210 / 297 };

      _classCallCheck(this, Thumbnails);

      this.container = container;
      this.p = props;
      this.thumbnailsClb = thumbnailsClb;
      this.size = size;
      this.canvas = (0, _libs.$)('<canvas>')[0];
      this.imageFactory = new _ImageFactory2.default(_extends({}, context, {
        renderCanvas: this.canvas,
        renderCanvasCtx: this.canvas.getContext('2d')
      }));
      this.thumbnails = [];
      for (var i = 0; i < size; ++i) {
        var info = this.thumbnailsClb(i);
        this.thumbnails.push(_extends({}, info, {
          index: i,
          loaded: info.type === 'thumbnail-image',
          heading: null,
          thumbnail: null,
          title: info.title || i
        }));
      }

      this.binds = {
        update: this.update.bind(this),
        navigate: function navigate(e) {
          e.preventDefault();
          if (_this.onNavigate) {
            var node = e.target;
            while (node && !node.dataThumbnail) {
              node = node.parentNode;
            }
            _this.onNavigate(node.dataThumbnail.index);
          }
        }
      };
      this.container.on('scroll', this.binds.update);
    }

    Thumbnails.prototype.getSize = function getSize() {
      return this.size;
    };

    Thumbnails.prototype.setEnable = function setEnable(enable) {
      this.enable = enable;
      this.update();
    };

    Thumbnails.prototype.dispose = function dispose() {
      this.container.find('a').off('click', this.binds.navigate);
      this.container.off('scroll', this.binds.update);
      this.container.html('');
      this.canvas.height = this.canvas.width = 0;
      delete this.canvas;
    };

    Thumbnails.prototype.load = function load(thumbnail) {
      var _this2 = this;

      this.loading = true;
      var wrapper = this.imageFactory.build(thumbnail, thumbnail.number || thumbnail.index, this.p.kWtoH * 150, 150);
      wrapper.onChange = function (canvas) {
        _this2.setImage(thumbnail, canvas.toDataURL('image/png'));
        thumbnail.loaded = true;
        wrapper.dispose();
        _this2.loading = false;
        Promise.resolve().then(function () {
          return _this2.update();
        });
      };
    };

    Thumbnails.prototype.getActive = function getActive() {
      var first = this.container.scrollTop(),
          last = first + this.container.height(),
          res = [];
      for (var _iterator = this.thumbnails, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var thumbnail = _ref;

        if (Math.max(thumbnail.first, first) < Math.min(thumbnail.last, last)) {
          res.push(thumbnail);
        }
      }
      return res;
    };

    Thumbnails.prototype.update = function update() {
      if (!this.loading && this.canvas && this.enable) {
        if (!this.built) {
          this.render();
        }
        var active = this.getActive();
        for (var _iterator2 = active, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var thumbnail = _ref2;

          if (!thumbnail.loaded) {
            this.load(thumbnail);
            break;
          }
        }
      }
    };

    Thumbnails.prototype.setImage = function setImage(thumbnail, img) {
      thumbnail.img = img;
      thumbnail.thumbnail.css('background-image', ['url(\'', img, '\')'].join(''));
      thumbnail.thumbnail.removeClass('loading');
    };

    Thumbnails.prototype.render = function render() {
      var elements = ['<div class="thumbnails">'];
      for (var i = 0; i < this.size; ++i) {
        elements.push(['<div class="item"><a href="#"><div class="thumbnail loading"></div></a><div class="heading"><a href="#" title="', i + 1, '">', i + 1, '</a></div></div>'].join(''));
      }
      elements.push('</div>');
      this.container.append(elements.join(''));
      var items = this.container.find('.item'),
          base = this.container.find('.thumbnails').offset().top;
      for (var _i3 = 0; _i3 < items.length; ++_i3) {
        var item = (0, _libs.$)(items[_i3]);
        this.thumbnails[_i3].heading = item.find('.heading');
        this.thumbnails[_i3].thumbnail = item.find('.thumbnail');
        this.thumbnails[_i3].first = item.offset().top - base;
        this.thumbnails[_i3].last = this.thumbnails[_i3].first + item.height();
        if (this.thumbnails[_i3].loaded) {
          this.setImage(this.thumbnails[_i3], this.thumbnails[_i3].src);
        }
        for (var _iterator3 = item.find('a'), _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i4 >= _iterator3.length) break;
            _ref3 = _iterator3[_i4++];
          } else {
            _i4 = _iterator3.next();
            if (_i4.done) break;
            _ref3 = _i4.value;
          }

          var a = _ref3;

          a.dataThumbnail = this.thumbnails[_i3];
        }
      }
      this.container.find('a').on('click', this.binds.navigate);
      this.built = true;
    };

    return Thumbnails;
  }();

  exports.default = Thumbnails;

  /***/
},
/* 49 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _WidgetController2 = __webpack_require__(52);

  var _WidgetController3 = _interopRequireDefault(_WidgetController2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var TocController = function (_WidgetController) {
    _inherits(TocController, _WidgetController);

    function TocController(view, bookCtrl) {
      _classCallCheck(this, TocController);

      var _this = _possibleConstructorReturn(this, _WidgetController.call(this, view, bookCtrl));

      _this.bookCtrl = bookCtrl;
      _this.tab = 'none';
      return _this;
    }

    TocController.prototype.setThumbnails = function setThumbnails(thumbnails) {
      this.thumbnails = thumbnails;
      thumbnails.onNavigate = this.navigateThumbnails.bind(this);
      if (this.tab === 'none') {
        this.tab = 'thumbnails';
      }
      this.fireChange();
    };

    TocController.prototype.setBookmarks = function setBookmarks(bookmarks, pdf) {
      this.bookmarks = bookmarks;
      this.pdf = pdf;
      bookmarks.onNavigate = this.navigateBookmarks.bind(this);
      if (bookmarks.getSize()) {
        this.tab = 'bookmarks';
        this.isBookmarks = true;
      }
      this.fireChange();
    };

    TocController.prototype.cmdBookmarks = function cmdBookmarks() {
      this.tab = 'bookmarks';
      this.fireChange();
    };

    TocController.prototype.cmdThumbnails = function cmdThumbnails() {
      this.tab = 'thumbnails';
      this.fireChange();
    };

    TocController.prototype.cmdCloseToc = function cmdCloseToc() {
      this.hide();
    };

    TocController.prototype.navigateThumbnails = function navigateThumbnails(number) {
      this.bookCtrl.goToPage(number);
    };

    TocController.prototype.navigateBookmarks = function navigateBookmarks(item) {
      var _this2 = this;

      if (item.url) {
        window.open(item.url, '_blank');
      } else if (item.dest) {
        var destPromise = void 0;
        if (typeof item.dest === 'string') {
          destPromise = this.pdf.handler.getDestination(item.dest);
        } else {
          destPromise = Promise.resolve(item.dest);
        }
        destPromise.then(function (dest) {
          return _this2.pdf.handler.getPageIndex(dest[0]);
        }).then(function (number) {
          return _this2.bookCtrl.goToPage(number);
        }).catch(function () {
          return console.error('Bad bookmark');
        });
      }
    };

    TocController.prototype.updateView = function updateView() {
      var _this3 = this;

      if (this.view) {
        this.view.setState('widTocMenu', {
          enable: true,
          visible: !!this.isBookmarks,
          active: false
        });
        this.view.setState('widThumbnails', {
          enable: true,
          visible: this.tab === 'thumbnails',
          active: false
        });
        this.view.setState('widBookmarks', {
          enable: true,
          visible: this.tab === 'bookmarks',
          active: false
        });
        this.view.setState('cmdBookmarks', {
          enable: true,
          visible: true,
          active: this.tab === 'bookmarks'
        });
        this.view.setState('cmdThumbnails', {
          enable: true,
          visible: true,
          active: this.tab === 'thumbnails'
        });
        Promise.resolve().then(function () {
          return _this3.thumbnails.setEnable(_this3.visible && _this3.tab === 'thumbnails');
        });
        _WidgetController.prototype.updateView.call(this);
      }
    };

    return TocController;
  }(_WidgetController3.default);

  exports.default = TocController;

  /***/
},
/* 50 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var View = function () {
    View.classProperty = function classProperty(ctrl, className, value) {
      if (value) {
        ctrl.addClass(className);
      } else {
        ctrl.removeClass(className);
      }
    };

    View.attributeProperty = function attributeProperty(ctrl, attributeName, value) {
      if (value) {
        ctrl.attr(attributeName, attributeName);
      } else {
        ctrl.removeAttr(attributeName);
      }
    };

    View.callHandlers = function callHandlers(handlers, id, e, data) {
      for (var _iterator = handlers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var handler = _ref;

        if (handler[id]) {
          handler[id](e, data);
        } else if (handler.handleDefault) {
          handler.handleDefault(id, e, data);
        }
      }
    };

    View.handleEvent = function handleEvent(id, getHandlers, e, data) {
      View.callHandlers(getHandlers(id), id, e, data);
    };

    View.handleLinkEvent = function handleLinkEvent(e) {
      e.preventDefault();
      View.handleEvent(this.id, this.getHandlers, e);
    };

    View.handleInputEvent = function handleInputEvent(e) {
      View.handleEvent(this.id, this.getHandlers, e, e.target.value);
    };

    View.handleFormEvent = function handleFormEvent(e) {
      e.preventDefault();
      View.handleEvent(this.id, this.getHandlers, e);
    };

    // virtual functions {


    View.prototype.getLinks = function getLinks() {
      return null;
    };

    View.prototype.getWidgets = function getWidgets() {
      return null;
    };

    View.prototype.getInputs = function getInputs() {
      return null;
    };

    View.prototype.getTexts = function getTexts() {
      return null;
    };

    View.prototype.getTemplate = function getTemplate() {
      return {};
    };

    View.prototype.getHandlers = function getHandlers(id) {
      return this.handlers;
    };
    // }

    View.prototype.callLater = function callLater(handlers, id, e, data, ms) {
      var _this = this;

      this.pendings[id] = {
        timestamp: new Date().getTime()
      };
      setTimeout(function () {
        var timestamp = new Date().getTime(),
            pending = _this.pendings[id];
        if (pending && timestamp - pending.timestamp >= ms) {
          View.callHandlers(handlers, id, e, data);
          delete _this.pendings[id];
        }
      }, ms);
    };

    // loadFiles(urls, ready, failure) {
    //   let done = Promise.resolve();
    //   for(let url of urls) {
    //     done = done.then(()=> {
    //       return new Promise((resolve, reject)=> {
    //         $.get(url, (res)=> {
    //           ready(res, url);
    //           resolve();
    //         }).fail((res)=> {
    //           if(failure && failure(res, url)) {
    //             resolve();
    //           }
    //           else {
    //             reject(res);
    //           }
    //         });
    //       });
    //     });
    //   }
    //   return done;
    // }

    View.prototype.loadFiles = function loadFiles(urls, files) {
      var tasks = [];

      var _loop = function _loop() {
        if (_isArray2) {
          if (_i2 >= _iterator2.length) return 'break';
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) return 'break';
          _ref2 = _i2.value;
        }

        var name = _ref2;

        files[name] = [];

        var _loop2 = function _loop2() {
          if (_isArray3) {
            if (_i3 >= _iterator3.length) return 'break';
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) return 'break';
            _ref3 = _i3.value;
          }

          var url = _ref3;

          tasks.push(new Promise(function (resolve, reject) {
            _libs.$.get(url, function (data) {
              files[name].push({ url: url, data: data });
              resolve();
            }).fail(function (res) {
              reject(res);
            });
          }));
        };

        for (var _iterator3 = urls[name], _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          var _ret2 = _loop2();

          if (_ret2 === 'break') break;
        }
      };

      for (var _iterator2 = Object.keys(urls), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        var _ret = _loop();

        if (_ret === 'break') break;
      }
      return Promise.all(tasks);
    };

    View.prototype.urlResolver = function urlResolver(baseUrl, url) {
      url = url.replace(/\\/g, '/');
      if (url.charAt(0) !== '/') {
        baseUrl = baseUrl.replace(/\\/g, '/');
        var p = baseUrl.lastIndexOf('/');
        url = (~p ? baseUrl.substr(0, p + 1) : '') + url;
      }
      return url;
    };

    function View(container, onLoad) {
      var _this2 = this;

      var template = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, View);

      this.pendings = {};
      this.loadedStylesheets = [];
      this.binds = {};
      this.container = (0, _libs.$)(container);
      this.onLoad = onLoad;
      this.handlers = [];

      var script = template.html ? template.script : this.getTemplate().script;
      var urls = {
        styles: template.styles || this.getTemplate().styles,
        html: [template.html || this.getTemplate().html],
        script: script ? [script] : []
      },
          files = {};

      this.loadFiles(urls, files).then(function () {
        var _loop3 = function _loop3() {
          if (_isArray4) {
            if (_i4 >= _iterator4.length) return 'break';
            _ref4 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) return 'break';
            _ref4 = _i4.value;
          }

          var style = _ref4;

          var textCss = style.data,
              url = style.url;
          textCss = textCss.replace(/url\(['"](.*?)["']\)/g, function (r, r1) {
            return ['url(', _this2.urlResolver(url, r1), ')'].join('');
          });
          _this2.loadedStylesheets.push((0, _libs.$)('<style type="text/css">' + textCss + '</style>').appendTo('head'));
        };

        for (var _iterator4 = files.styles, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref4;

          var _ret3 = _loop3();

          if (_ret3 === 'break') break;
        }

        _this2.container.html(files.html[0].data);

        if (files.script[0]) {
          var init = eval(files.script[0].data);
          _this2.templateObject = init(_this2.container);
        }

        _this2.linkControls = {};
        for (var _iterator5 = _this2.getLinks(), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
          var _ref5;

          if (_isArray5) {
            if (_i5 >= _iterator5.length) break;
            _ref5 = _iterator5[_i5++];
          } else {
            _i5 = _iterator5.next();
            if (_i5.done) break;
            _ref5 = _i5.value;
          }

          var id = _ref5;

          _this2.linkControls[id] = _this2.container.find('.' + id);
          _this2.binds[id] = View.handleLinkEvent.bind({ getHandlers: _this2.getHandlers.bind(_this2), id: id });
          _this2.linkControls[id].on('click', _this2.binds[id]);
        }

        _this2.widgetControls = {};
        for (var _iterator6 = _this2.getWidgets(), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
          var _ref6;

          if (_isArray6) {
            if (_i6 >= _iterator6.length) break;
            _ref6 = _iterator6[_i6++];
          } else {
            _i6 = _iterator6.next();
            if (_i6.done) break;
            _ref6 = _i6.value;
          }

          var _id = _ref6;

          _this2.widgetControls[_id] = _this2.container.find('.' + _id);
        }

        _this2.inputControls = {};
        for (var _iterator7 = _this2.getInputs(), _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
          var _ref7;

          if (_isArray7) {
            if (_i7 >= _iterator7.length) break;
            _ref7 = _iterator7[_i7++];
          } else {
            _i7 = _iterator7.next();
            if (_i7.done) break;
            _ref7 = _i7.value;
          }

          var _id2 = _ref7;

          _this2.inputControls[_id2] = _this2.container.find('.' + _id2);
          _this2.binds[_id2] = View.handleInputEvent.bind({ getHandlers: _this2.getHandlers.bind(_this2), id: _id2 });
          _this2.inputControls[_id2].on('keyup', _this2.binds[_id2]);
        }

        _this2.formControls = {};
        for (var _iterator8 = _this2.getForms(), _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
          var _ref8;

          if (_isArray8) {
            if (_i8 >= _iterator8.length) break;
            _ref8 = _iterator8[_i8++];
          } else {
            _i8 = _iterator8.next();
            if (_i8.done) break;
            _ref8 = _i8.value;
          }

          var _id3 = _ref8;

          _this2.formControls[_id3] = _this2.container.find('.' + _id3);
          _this2.binds[_id3] = View.handleFormEvent.bind({ getHandlers: _this2.getHandlers.bind(_this2), id: _id3 });
          _this2.formControls[_id3].on('submit', _this2.binds[_id3]);
        }

        _this2.textControls = {};
        for (var _iterator9 = _this2.getTexts(), _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
          var _ref9;

          if (_isArray9) {
            if (_i9 >= _iterator9.length) break;
            _ref9 = _iterator9[_i9++];
          } else {
            _i9 = _iterator9.next();
            if (_i9.done) break;
            _ref9 = _i9.value;
          }

          var _id4 = _ref9;

          _this2.textControls[_id4] = _this2.container.find('.' + _id4);
        }

        _this2.stateSetters = [{
          map: _this2.linkControls,
          setter: _this2.setLinkControlState.bind(_this2)
        }, {
          map: _this2.widgetControls,
          setter: _this2.setWidgetControlState.bind(_this2)
        }, {
          map: _this2.inputControls,
          setter: _this2.setInputControlState.bind(_this2)
        }, {
          map: _this2.textControls,
          setter: _this2.setTextControlState.bind(_this2)
        }];

        _this2.initView();

        if (_this2.onLoad) {
          _this2.onLoad();
        }
      }).catch(function (res) {
        return console.error(res);
      });
    }

    View.prototype.dispose = function dispose() {
      delete this.textControls;
      for (var _iterator10 = this.getLinks(), _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
        var _ref10;

        if (_isArray10) {
          if (_i10 >= _iterator10.length) break;
          _ref10 = _iterator10[_i10++];
        } else {
          _i10 = _iterator10.next();
          if (_i10.done) break;
          _ref10 = _i10.value;
        }

        var id = _ref10;

        this.linkControls[id].off('click', this.binds[id]);
      }
      delete this.linkControls;
      delete this.widgetControls;
      for (var _iterator11 = this.getInputs(), _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
        var _ref11;

        if (_isArray11) {
          if (_i11 >= _iterator11.length) break;
          _ref11 = _iterator11[_i11++];
        } else {
          _i11 = _iterator11.next();
          if (_i11.done) break;
          _ref11 = _i11.value;
        }

        var _id5 = _ref11;

        this.inputControls[_id5].off('keyup', this.binds[_id5]);
      }
      delete this.inputControls;
      for (var _iterator12 = this.getForms(), _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
        var _ref12;

        if (_isArray12) {
          if (_i12 >= _iterator12.length) break;
          _ref12 = _iterator12[_i12++];
        } else {
          _i12 = _iterator12.next();
          if (_i12.done) break;
          _ref12 = _i12.value;
        }

        var _id6 = _ref12;

        this.formControls[_id6].off('submit', this.binds[_id6]);
      }
      delete this.formControls;

      !this.templateObject || !this.templateObject.dispose || this.templateObject.dispose();
      this.container.html('');

      for (var _iterator13 = this.loadedStylesheets, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
        var _ref13;

        if (_isArray13) {
          if (_i13 >= _iterator13.length) break;
          _ref13 = _iterator13[_i13++];
        } else {
          _i13 = _iterator13.next();
          if (_i13.done) break;
          _ref13 = _i13.value;
        }

        var stylesheet = _ref13;

        stylesheet.remove();
      }
    };

    View.prototype.getContainer = function getContainer() {
      return this.container[0];
    };

    View.prototype.addHandler = function addHandler(handler) {
      this.handlers.push(handler);
    };

    View.prototype.initView = function initView() {};

    View.setControlState = function setControlState(ctrl, defaults, state, stateHandlers) {
      if (ctrl) {
        var st = _extends({}, defaults, state);
        for (var _name in st) {
          if (st.hasOwnProperty(_name) && stateHandlers[_name]) {
            stateHandlers[_name](ctrl, st[_name]);
          }
        }
      }
    };

    View.prototype.setLinkControlState = function setLinkControlState(id, state) {
      View.setControlState(this.linkControls[id], {
        visible: true,
        active: false,
        enable: true
      }, state, View.linkStateHandlers);
    };

    View.prototype.setWidgetControlState = function setWidgetControlState(id, state) {
      View.setControlState(this.widgetControls[id], {
        visible: true,
        active: false,
        enable: true
      }, state, View.widgetStateHandlers);
    };

    View.prototype.setInputControlState = function setInputControlState(id, state) {
      View.setControlState(this.inputControls[id], {
        visible: true,
        enable: true,
        value: ''
      }, state, View.inputStateHandlers);
    };

    View.prototype.setTextControlState = function setTextControlState(id, state) {
      View.setControlState(this.textControls[id], {
        visible: true,
        value: ''
      }, state, View.textStateHandlers);
    };

    View.prototype.onItemStateChanged = function onItemStateChanged() {};

    View.prototype.setState = function setState(id, state) {
      for (var _iterator14 = this.stateSetters, _isArray14 = Array.isArray(_iterator14), _i14 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();;) {
        var _ref14;

        if (_isArray14) {
          if (_i14 >= _iterator14.length) break;
          _ref14 = _iterator14[_i14++];
        } else {
          _i14 = _iterator14.next();
          if (_i14.done) break;
          _ref14 = _i14.value;
        }

        var item = _ref14;

        if (item.map[id]) {
          item.setter(id, state);
          this.onItemStateChanged(id, state);
          break;
        }
      }
    };

    return View;
  }();

  View.linkStateHandlers = {
    visible: function visible(ctrl, value) {
      return View.classProperty(ctrl, 'hidden', !value);
    },
    active: function active(ctrl, value) {
      return View.classProperty(ctrl, 'active', value);
    },
    enable: function enable(ctrl, value) {
      return View.classProperty(ctrl, 'disabled', !value);
    }
  };
  View.widgetStateHandlers = {
    visible: function visible(ctrl, value) {
      return View.classProperty(ctrl, 'hidden', !value);
    },
    active: function active(ctrl, value) {
      return View.classProperty(ctrl, 'active', value);
    },
    enable: function enable(ctrl, value) {
      return View.classProperty(ctrl, 'disabled', !value);
    }
  };
  View.inputStateHandlers = {
    visible: function visible(ctrl, value) {
      return View.classProperty(ctrl, 'hidden', !value);
    },
    value: function value(ctrl, _value) {
      return ctrl[0].value = _value;
    },
    enable: function enable(ctrl, value) {
      return View.attributeProperty(ctrl, 'disabled', !value);
    }
  };
  View.textStateHandlers = {
    visible: function visible(ctrl, value) {
      return View.classProperty(ctrl, 'hidden', !value);
    },
    value: function value(ctrl, _value2) {
      return ctrl.text(_value2);
    }
  };
  exports.default = View;

  /***/
},
/* 51 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _Orbit = __webpack_require__(55);

  var _Orbit2 = _interopRequireDefault(_Orbit);

  var _ThreeMouseEventConverter = __webpack_require__(56);

  var _ThreeMouseEventConverter2 = _interopRequireDefault(_ThreeMouseEventConverter);

  var _Drag = __webpack_require__(53);

  var _Drag2 = _interopRequireDefault(_Drag);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var VisualWorld = function () {
    function VisualWorld(wnd, doc, container) {
      var useHelpers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      _classCallCheck(this, VisualWorld);

      this.wnd = wnd;
      this.doc = doc;
      this.jContainer = container;
      this.renderCallbacks = [];

      this.clock = new _libs.THREE.Clock();

      this.raycaster = new _libs.THREE.Raycaster();

      this.scene = new _libs.THREE.Scene();

      this.camera = new _libs.THREE.PerspectiveCamera(30, this.jContainer.width() / this.jContainer.height(), 0.2, 2000);
      var scale = 1;

      this.camera.position.x = 0;
      this.camera.position.y = 5.5 * scale;
      this.camera.position.z = 0;

      this.renderer = new _libs.THREE.WebGLRenderer({ alpha: true });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setPixelRatio(this.wnd.devicePixelRatio);
      this.renderer.setSize(this.jContainer.width(), this.jContainer.height());
      this.renderer.shadowMap.enabled = true;

      this.element = this.renderer.domElement;

      this.jContainer.append(this.element);

      this.controls = new _Orbit2.default(this.camera, this.element);
      this.controls.target.y = 0.5;

      this.textureLoader = new _libs.THREE.TextureLoader();

      this.scene.add(new _libs.THREE.AmbientLight(0xD0D0D0)); //0xC0C0C0

      this.light = new _libs.THREE.DirectionalLight(0x404040, 1);
      this.light.position.set(0, 6 * scale, 0);
      this.light.castShadow = false;
      // const d = 20*scale;
      // this.light.shadow.camera.left = -d;
      // this.light.shadow.camera.right = d;
      // this.light.shadow.camera.top = d;
      // this.light.shadow.camera.bottom = -d;
      // this.light.shadow.camera.near = 1*scale;
      // this.light.shadow.camera.far = 25*scale;
      // this.light.shadow.mapSize.x = 1024;
      // this.light.shadow.mapSize.y = 1024;
      this.scene.add(this.light);

      if (useHelpers) {
        this.scene.add(new _libs.THREE.AxisHelper(5));
      }

      this.binds = {
        onWindowResize: this.onWindowResize.bind(this),
        animate: this.animate.bind(this)
      };

      (0, _libs.$)(this.wnd).on('resize', this.binds.onWindowResize);

      this.mouseEvents = new _ThreeMouseEventConverter2.default(this.wnd, this.doc, this);
      this.drag = new _Drag2.default(this.wnd, this.doc, this);

      this.animate();
    }

    VisualWorld.prototype.dispose = function dispose() {
      delete this.binds.animate;
      (0, _libs.$)(this.wnd).off('resize', this.binds.onWindowResize);
      this.mouseEvents.dispose();
      this.drag.dispose();
      this.controls.dispose();
    };

    VisualWorld.prototype.setExtraLighting = function setExtraLighting(v) {
      this.light.intensity = v;
    };

    VisualWorld.prototype.getOrbit = function getOrbit() {
      return this.controls;
    };

    VisualWorld.prototype.setControlsState = function setControlsState(state) {
      this.controls.enabled = state;
    };

    VisualWorld.prototype.getControlsState = function getControlsState() {
      return this.controls.enabled;
    };

    VisualWorld.prototype.onWindowResize = function onWindowResize() {
      this.camera.aspect = this.jContainer.width() / this.jContainer.height();
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.jContainer.width(), this.jContainer.height());
    };

    VisualWorld.prototype.addObject = function addObject(object) {
      this.scene.add(object);
    };

    VisualWorld.prototype.removeObject = function removeObject(object) {
      this.scene.remove(object);
    };

    VisualWorld.prototype.animate = function animate() {
      if (this.binds.animate) {
        requestAnimationFrame(this.binds.animate);
      }
      this.render();
    };

    VisualWorld.prototype.addRenderCallback = function addRenderCallback(clb) {
      this.renderCallbacks.push(clb);
    };

    VisualWorld.prototype.removeRenderCallback = function removeRenderCallback(clb) {
      var i = this.renderCallbacks.indexOf(clb);
      if (~i) {
        this.renderCallbacks.splice(i, 1);
      }
    };

    VisualWorld.prototype.render = function render() {
      var deltaTime = this.clock.getDelta();
      this.controls.update(deltaTime);
      for (var _iterator = this.renderCallbacks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var clb = _ref;

        clb(deltaTime);
      }
      this.renderer.render(this.scene, this.camera);
    };

    VisualWorld.prototype.processGeometry = function processGeometry(bufGeometry, mesh) {
      mesh.geometry = bufGeometry;
      // Obtain a Geometry
      var geometry = new _libs.THREE.Geometry().fromBufferGeometry(bufGeometry);
      // Merge the vertices so the triangle soup is converted to indexed triangles
      geometry.mergeVertices();
      // Convert again to BufferGeometry, indexed
      var indexedBufferGeom = this.createIndexedBufferGeometryFromGeometry(geometry);
      // Create index arrays mapping the indexed vertices to bufGeometry vertices
      return this.mapIndices(bufGeometry, indexedBufferGeom);
    };

    VisualWorld.prototype.createIndexedBufferGeometryFromGeometry = function createIndexedBufferGeometryFromGeometry(geometry) {
      var numVertices = geometry.vertices.length;
      var numFaces = geometry.faces.length;

      var bufferGeom = new _libs.THREE.BufferGeometry();
      var vertices = new Float32Array(numVertices * 3);
      var indices = new (numFaces * 3 > 65535 ? Uint32Array : Uint16Array)(numFaces * 3);

      for (var i = 0; i < numVertices; i++) {
        var p = geometry.vertices[i];
        var i3 = i * 3;
        vertices[i3] = p.x;
        vertices[i3 + 1] = p.y;
        vertices[i3 + 2] = p.z;
      }

      for (var _i2 = 0; _i2 < numFaces; _i2++) {
        var f = geometry.faces[_i2];
        var _i3 = _i2 * 3;
        indices[_i3] = f.a;
        indices[_i3 + 1] = f.b;
        indices[_i3 + 2] = f.c;
      }

      bufferGeom.setIndex(new _libs.THREE.BufferAttribute(indices, 1));
      bufferGeom.addAttribute('position', new _libs.THREE.BufferAttribute(vertices, 3));

      return bufferGeom;
    };

    VisualWorld.prototype.isEqual = function isEqual(x1, y1, z1, x2, y2, z2) {
      var delta = 0.000001;
      return Math.abs(x2 - x1) < delta && Math.abs(y2 - y1) < delta && Math.abs(z2 - z1) < delta;
    };

    VisualWorld.prototype.mapIndices = function mapIndices(bufGeometry, indexedBufferGeom) {
      // Creates mappedVertices, mappedIndices and mappedAssociation in bufGeometry
      var vertices = bufGeometry.attributes.position.array;
      var idxVertices = indexedBufferGeom.attributes.position.array;
      var indices = indexedBufferGeom.index.array;

      var numIdxVertices = idxVertices.length / 3;
      var numVertices = vertices.length / 3;

      bufGeometry.mappedVertices = idxVertices;
      bufGeometry.mappedIndices = indices;
      bufGeometry.mappedAssociation = [];

      for (var i = 0; i < numIdxVertices; i++) {
        var association = [];
        bufGeometry.mappedAssociation.push(association);
        var i3 = i * 3;
        for (var j = 0; j < numVertices; j++) {
          var j3 = j * 3;
          if (this.isEqual(idxVertices[i3], idxVertices[i3 + 1], idxVertices[i3 + 2], vertices[j3], vertices[j3 + 1], vertices[j3 + 2])) {
            association.push(j3);
          }
        }
      }
      return { vertices: bufGeometry.mappedVertices, indices: bufGeometry.mappedIndices };
    };

    VisualWorld.prototype.oneNodePositionCallback = function oneNodePositionCallback(p, q) {
      this.position.set(p.x, p.y, p.z);
      this.quaternion.set(q.x, q.y, q.z, q.w);
    };

    VisualWorld.prototype.multyNodePositionCallback = function multyNodePositionCallback(node, p, n) {
      var geometry = this.geometry;
      var volumePositions = geometry.attributes.position.array;
      var volumeNormals = geometry.attributes.normal.array;
      var assocVertex = geometry.mappedAssociation[node];

      for (var k = 0; k < assocVertex.length; k++) {
        var indexVertex = assocVertex[k];
        volumePositions[indexVertex] = p.x;
        volumeNormals[indexVertex] = n.x;
        ++indexVertex;
        volumePositions[indexVertex] = p.y;
        volumeNormals[indexVertex] = n.y;
        ++indexVertex;
        volumePositions[indexVertex] = p.z;
        volumeNormals[indexVertex] = n.z;
      }
    };

    VisualWorld.prototype.multyNodePositionPostCallback = function multyNodePositionPostCallback() {
      var geometry = this.geometry;
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.normal.needsUpdate = true;
    };

    VisualWorld.prototype.pathPositionCallback = function pathPositionCallback(node, p) {
      var positions = this.geometry.attributes.position.array;
      var i = 3 * node;
      positions[i++] = p.x;
      positions[i++] = p.y;
      positions[i] = p.z;
    };

    VisualWorld.prototype.pathPositionPostCallback = function pathPositionPostCallback() {
      var geometry = this.geometry;
      geometry.computeVertexNormals();
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.normal.needsUpdate = true;
    };

    return VisualWorld;
  }();

  exports.default = VisualWorld;

  /***/
},
/* 52 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _Controller2 = __webpack_require__(9);

  var _Controller3 = _interopRequireDefault(_Controller2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var WidgetController = function (_Controller) {
    _inherits(WidgetController, _Controller);

    function WidgetController(view) {
      _classCallCheck(this, WidgetController);

      var _this = _possibleConstructorReturn(this, _Controller.call(this));

      _this.view = view;
      _this.visible = false;
      return _this;
    }

    WidgetController.prototype.togle = function togle() {
      this.visible = !this.visible;
      this.fireChange();
    };

    WidgetController.prototype.hide = function hide() {
      this.visible = false;
      this.fireChange();
    };

    WidgetController.prototype.fireChange = function fireChange() {
      if (this.onChange) {
        this.onChange();
      }
      this.updateView();
    };

    WidgetController.prototype.updateView = function updateView() {
      if (this.view) {
        this.view.setState('widFloatWnd', {
          enable: true,
          visible: this.visible,
          active: false
        });
      }
    };

    return WidgetController;
  }(_Controller3.default);

  exports.default = WidgetController;

  /***/
},
/* 53 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Drag = function () {
    function Drag(wnd, doc, visualWorld) {
      _classCallCheck(this, Drag);

      this.wnd = wnd;
      this.doc = doc;
      this.visual = visualWorld;
      this.coords = new _libs.THREE.Vector2();
      this.intersection = new _libs.THREE.Vector3();
      this.raycaster = this.visual.raycaster;
      this.camera = this.visual.camera;
      this.plane = new _libs.THREE.Plane();
      this.threes = [];
      this.selected = null;
      this.enabled = true;
      this.controlsState = this.visual.getControlsState();

      this.element = this.visual.renderer.domElement;
      this.binds = {
        onMouseMove: this.onMouseMove.bind(this),
        onMouseDown: this.onMouseDown.bind(this),
        onMouseUp: this.onMouseUp.bind(this)
      };
      (0, _libs.$)(this.element).on('mousemove', this.binds.onMouseMove);
      (0, _libs.$)(this.element).on('mousedown', this.binds.onMouseDown);
      (0, _libs.$)(this.doc).on('mouseup', this.binds.onMouseUp);
    }

    Drag.prototype.addThree = function addThree(three) {
      this.threes.push(three);
    };

    Drag.prototype.removeThree = function removeThree(three) {
      var i = this.threes.indexOf(three);
      if (~i) {
        this.threes.splice(i, 1);
      }
    };

    Drag.prototype.onPickCallback = function onPickCallback() {
      return true;
    };

    Drag.prototype.onDragCallback = function onDragCallback() {
      return true;
    };

    Drag.prototype.onReleaseCallback = function onReleaseCallback() {};

    Drag.prototype.dispose = function dispose() {
      (0, _libs.$)(this.element).off('mousemove', this.binds.onMouseMove);
      (0, _libs.$)(this.element).off('mousedown', this.binds.onMouseDown);
      (0, _libs.$)(this.doc).off('mouseup', this.binds.onMouseUp);
    };

    Drag.prototype.setCoordsFromEvent = function setCoordsFromEvent(e) {
      var jElement = (0, _libs.$)(this.element);
      var offset = jElement.offset();
      this.coords.x = (e.pageX - offset.left) / jElement.width() * 2 - 1;
      this.coords.y = -((e.pageY - offset.top) / jElement.height()) * 2 + 1;
      return this.coords;
    };

    Drag.prototype.onMouseDown = function onMouseDown(e) {
      if (!this.enabled) return;

      if (this.selected) this.onMouseUp(e);

      this.setCoordsFromEvent(e);
      this.raycaster.setFromCamera(this.coords, this.camera);

      var intersects = this.raycaster.intersectObjects(this.threes);
      if (intersects.length > 0) {
        var selected = intersects[0].object;
        if (!this.onPickCallback(intersects[0])) return;
        var v = intersects[0].point.clone();
        this.distance = v.sub(this.raycaster.ray.origin).length();;
        this.controlsState = this.visual.getControlsState();
        this.visual.setControlsState(false);
        this.plane.setFromNormalAndCoplanarPoint(this.visual.camera.getWorldDirection(this.plane.normal), intersects[0].point);
        //this.plane.setFromNormalAndCoplanarPoint(this.plane.normal.set(0,0,1), new THREE.Vector3(0,0,0));
        this.selected = selected;
      }
    };

    Drag.prototype.onMouseMove = function onMouseMove(e) {
      if (!this.enabled) return;
      e.preventDefault();

      if (this.selected) {
        this.setCoordsFromEvent(e);
        this.raycaster.setFromCamera(this.coords, this.camera);
        if (this.raycaster.ray.intersectPlane(this.plane, this.intersection)) {
          if (!this.onDragCallback(this.intersection)) this.onMouseUp(e);
        } /**/
        //this.intersection.copy(this.raycaster.ray.direction).normalize().multiplyScalar(this.distance).add(this.raycaster.ray.origin);/**/
        //if(!this.onDragCallback(this.selected, this.intersection)) this.onMouseUp(e);
      }
    };

    Drag.prototype.onMouseUp = function onMouseUp(e) {
      if (this.selected) {
        this.onReleaseCallback();
        this.selected = null;
        this.visual.setControlsState(this.controlsState);
      }
      if (!this.enabled) return;
      e.preventDefault();
    };

    return Drag;
  }();

  exports.default = Drag;

  /***/
},
/* 54 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _EventConverter2 = __webpack_require__(13);

  var _EventConverter3 = _interopRequireDefault(_EventConverter2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var MouseEventConverter = function (_EventConverter) {
    _inherits(MouseEventConverter, _EventConverter);

    function MouseEventConverter(wnd, doc, element) {
      _classCallCheck(this, MouseEventConverter);

      var _this = _possibleConstructorReturn(this, _EventConverter.call(this, wnd, doc));

      _this.element = element;
      _this.binds = {
        convert: _this.convert.bind(_this)
      };
      (0, _libs.$)(_this.element).on('mousemove mousedown mouseover mouseout click', _this.binds.convert);
      (0, _libs.$)(_this.doc).on('mouseup', _this.binds.convert);
      return _this;
    }

    MouseEventConverter.prototype.dispose = function dispose() {
      (0, _libs.$)(this.element).off('mousemove mousedown mouseover mouseout click', this.binds.convert);
      (0, _libs.$)(this.doc).off('mouseup', this.binds.convert);
    };

    return MouseEventConverter;
  }(_EventConverter3.default);

  exports.default = MouseEventConverter;

  /***/
},
/* 55 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Orbit = function (_THREE$EventDispatche) {
    _inherits(Orbit, _THREE$EventDispatche);

    function Orbit(object, domElement) {
      _classCallCheck(this, Orbit);

      var _this = _possibleConstructorReturn(this, _THREE$EventDispatche.call(this));

      _this.object = object;
      _this.domElement = domElement || document.body;

      // Set to false to disable this control
      _this.enabled = true;

      // "target" sets the location of focus, where the object orbits around
      _this.target = new _libs.THREE.Vector3();

      // How far you can dolly in and out(PerspectiveCamera only)
      _this.minDistance = 0;
      _this.maxDistance = Infinity;

      // How far you can zoom in and out(OrthographicCamera only)
      _this.minZoom = 0;
      _this.maxZoom = Infinity;

      // How far you can orbit vertically, upper and lower limits.
      // Range is 0 to Math.PI radians.
      _this.minPolarAngle = 0; // radians
      _this.maxPolarAngle = Math.PI; // radians

      // How far you can orbit horizontally, upper and lower limits.
      // If set, must be a sub-interval of the interval [-Math.PI, Math.PI ].
      _this.minAzimuthAngle = -Infinity; // radians
      _this.maxAzimuthAngle = Infinity; // radians

      // Set to true to enable damping (inertia)
      // If damping is enabled, you must call controls.update() in your animation loop
      _this.enableDamping = false;
      _this.dampingFactor = 0.25;

      // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
      // Set to false to disable zooming
      _this.enableZoom = true;
      _this.zoomSpeed = 1.0;

      // Set to false to disable rotating
      _this.enableRotate = true;
      _this.rotateSpeed = 1.0;

      // Set to false to disable panning
      _this.enablePan = true;

      // Set to true to automatically rotate around the target
      // If auto-rotate is enabled, you must call controls.update() in your animation loop
      _this.autoRotate = false;
      _this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

      // for reset
      _this.target0 = _this.target.clone();
      _this.position0 = _this.object.position.clone();
      _this.zoom0 = _this.object.zoom;

      //
      // public methods
      //
      _this.getPolarAngle = function () {
        return spherical.phi;
      };

      _this.getAzimuthalAngle = function () {
        return spherical.theta;
      };

      _this.reset = function () {
        scope.target.copy(scope.target0);
        scope.object.position.copy(scope.position0);
        scope.object.zoom = scope.zoom0;

        scope.object.updateProjectionMatrix();
        scope.dispatchEvent(changeEvent);

        scope.update();
      };

      _this.zoomOut = function () {
        var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.zoomSpeed;

        var _speed = this.zoomSpeed;
        this.zoomSpeed = speed;
        dollyIn(getZoomScale());
        this.zoomSpeed = _speed;
      };

      _this.zoomIn = function () {
        var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.zoomSpeed;

        var _speed = this.zoomSpeed;
        this.zoomSpeed = speed;
        dollyOut(getZoomScale());
        this.zoomSpeed = _speed;
      };

      _this.getScale = function () {
        return scale;
      };

      _this.setScale = function (newScale) {
        scale = newScale;
      };

      // this method is exposed, but perhaps it would be better if we can make it private...
      _this.update = function () {
        var offset = new _libs.THREE.Vector3();
        // so camera.up is the orbit axis
        var quat = new _libs.THREE.Quaternion().setFromUnitVectors(object.up, new _libs.THREE.Vector3(0, 1, 0));
        var quatInverse = quat.clone().inverse();
        var lastPosition = new _libs.THREE.Vector3();
        var lastQuaternion = new _libs.THREE.Quaternion();

        return function update() {
          var position = scope.object.position;
          offset.copy(position).sub(scope.target);
          // rotate offset to "y-axis-is-up" space
          offset.applyQuaternion(quat);
          // angle from z-axis around y-axis
          spherical.setFromVector3(offset);
          if (scope.autoRotate) {
            rotateLeft(getAutoRotationAngle());
          }
          spherical.theta += sphericalDelta.theta;
          spherical.phi += sphericalDelta.phi;
          // restrict theta to be between desired limits
          spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));
          // restrict phi to be between desired limits
          spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
          spherical.makeSafe();
          spherical.radius *= scale;
          // restrict radius to be between desired limits
          spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));
          // move target to panned location
          scope.target.add(panOffset);
          offset.setFromSpherical(spherical);
          // rotate offset back to "camera-up-vector-is-up" space
          offset.applyQuaternion(quatInverse);
          position.copy(scope.target).add(offset);
          scope.object.lookAt(scope.target);

          if (scope.enableDamping === true) {
            sphericalDelta.theta *= 1 - scope.dampingFactor;
            sphericalDelta.phi *= 1 - scope.dampingFactor;
          } else {
            sphericalDelta.set(0, 0, 0);
          }

          scale = 1;
          panOffset.set(0, 0, 0);

          // update condition is:
          // min(camera displacement, camera rotation in radians)^2 > EPS
          // using small-angle approximation cos(x/2) = 1-x^2 / 8

          if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

            scope.dispatchEvent(changeEvent);

            lastPosition.copy(scope.object.position);
            lastQuaternion.copy(scope.object.quaternion);
            zoomChanged = false;

            return true;
          }
          return false;
        };
      }();

      _this.dispose = function () {};

      //
      // internals
      //
      var scope = _this;
      var changeEvent = { type: 'change' };
      var EPS = 1e-6;
      // current position in spherical coordinates
      var spherical = new _libs.THREE.Spherical();
      var sphericalDelta = new _libs.THREE.Spherical();

      var scale = 1;
      var panOffset = new _libs.THREE.Vector3();
      var zoomChanged = false;

      function getAutoRotationAngle() {
        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
      }

      function getZoomScale() {
        return Math.pow(0.95, scope.zoomSpeed);
      }

      function rotateLeft(angle) {
        sphericalDelta.theta -= angle;
      }

      function rotateUp(angle) {
        sphericalDelta.phi -= angle;
      }

      var panLeft = function () {
        var v = new _libs.THREE.Vector3();
        return function panLeft(distance, objectMatrix) {
          v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
          v.multiplyScalar(-distance);
          panOffset.add(v);
        };
      }();

      var panUp = function () {
        var v = new _libs.THREE.Vector3();
        return function panUp(distance, objectMatrix) {
          v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
          v.multiplyScalar(distance);
          panOffset.add(v);
        };
      }();

      // deltaX and deltaY are in pixels; right and down are positive
      scope.pan = function () {
        var offset = new _libs.THREE.Vector3();
        return function pan(deltaX, deltaY) {
          var element = scope.domElement;
          if (scope.object instanceof _libs.THREE.PerspectiveCamera) {
            // perspective
            var position = scope.object.position;
            offset.copy(position).sub(scope.target);
            var targetDistance = offset.length();
            // half of the fov is center to top of screen
            targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);
            // we actually don't use screenWidth, since perspective camera is fixed to screen height
            panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
            panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
          } else if (scope.object instanceof _libs.THREE.OrthographicCamera) {
            // orthographic
            panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
            panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
          } else {
            // camera neither orthographic nor perspective
            console.warn('WARNING: OrbitControls.js encountered an unknown camera type-pan disabled.');
            scope.enablePan = false;
          }
        };
      }();

      function dollyIn(dollyScale) {
        if (scope.object instanceof _libs.THREE.PerspectiveCamera) {
          scale /= dollyScale;
        } else if (scope.object instanceof _libs.THREE.OrthographicCamera) {
          scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
          scope.object.updateProjectionMatrix();
          zoomChanged = true;
        } else {
          console.warn('WARNING: OrbitControls.js encountered an unknown camera type-dolly/zoom disabled.');
          scope.enableZoom = false;
        }
      }

      function dollyOut(dollyScale) {
        if (scope.object instanceof _libs.THREE.PerspectiveCamera) {
          scale *= dollyScale;
        } else if (scope.object instanceof _libs.THREE.OrthographicCamera) {
          scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
          scope.object.updateProjectionMatrix();
          zoomChanged = true;
        } else {
          console.warn('WARNING: OrbitControls.js encountered an unknown camera type-dolly/zoom disabled.');
          scope.enableZoom = false;
        }
      }

      /* Actions */

      function rotate(event, data) {
        if (scope.enabled && scope.enableRotate && data.state === 'move') {
          var element = scope.domElement;
          // rotating across whole screen goes 360 degrees around
          rotateLeft(2 * Math.PI * data.dx / element.clientWidth * scope.rotateSpeed);
          // rotating up and down along whole screen attempts to go 360, but limited to 180
          rotateUp(2 * Math.PI * data.dy / element.clientHeight * scope.rotateSpeed);
          scope.update();
        }
      }

      function pan(event, data) {
        if (scope.enabled && scope.enablePan && data.state === 'move') {
          scope.pan(data.dx, data.dy);
          scope.update();
        }
      }

      function offsetDolly(event, data) {
        if (scope.enabled && scope.enableZoom && data.state === 'move') {
          if (data.dy > 0) {
            dollyIn(getZoomScale());
          } else if (data.dy < 0) {
            dollyOut(getZoomScale());
          }
          scope.update();
        }
      }

      function wheelDolly(event) {
        if (scope.enabled && scope.enableZoom) {
          if (event.deltaY > 0) {
            dollyOut(getZoomScale());
          } else if (event.deltaY < 0) {
            dollyIn(getZoomScale());
          }
          scope.update();
        }
      }

      _this.actions = {
        rotate: rotate,
        pan: pan,
        offsetDolly: offsetDolly,
        wheelDolly: wheelDolly
      };

      // force an update at start
      _this.update();
      return _this;
    }

    return Orbit;
  }(_libs.THREE.EventDispatcher);

  exports.default = Orbit;

  /***/
},
/* 56 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _libs = __webpack_require__(0);

  var _MouseEventConverter2 = __webpack_require__(54);

  var _MouseEventConverter3 = _interopRequireDefault(_MouseEventConverter2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ThreeMouseEventConverter = function (_MouseEventConverter) {
    _inherits(ThreeMouseEventConverter, _MouseEventConverter);

    ThreeMouseEventConverter.objectsTest = function objectsTest(object1, object2) {
      return object1 && object2 ? object1.object === object2.object : false;
    };

    ThreeMouseEventConverter.objectsAndFacesTest = function objectsAndFacesTest(object1, object2) {
      return object1 && object2 ? object1.object === object2.object && object1.face.materialIndex === object2.face.materialIndex : false;
    };

    function ThreeMouseEventConverter(wnd, doc, visualWorld) {
      var test = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ThreeMouseEventConverter.objectsAndFacesTest;

      _classCallCheck(this, ThreeMouseEventConverter);

      var _this = _possibleConstructorReturn(this, _MouseEventConverter.call(this, wnd, doc, visualWorld.renderer.domElement));

      _this.visual = visualWorld;
      _this.coords = new _libs.THREE.Vector2();
      _this.raycaster = _this.visual.raycaster;
      _this.camera = _this.visual.camera;
      _this.threes = [];
      _this.test = test;
      return _this;
    }

    ThreeMouseEventConverter.prototype.getCallback = function getCallback(object) {
      return object.object.userData.mouseCallback;
    };

    ThreeMouseEventConverter.prototype.addThree = function addThree(three) {
      this.threes.push(three);
    };

    ThreeMouseEventConverter.prototype.removeThree = function removeThree(three) {
      var i = this.threes.indexOf(three);
      if (~i) {
        this.threes.splice(i, 1);
      }
    };

    ThreeMouseEventConverter.prototype.setCoordsFromEvent = function setCoordsFromEvent(e) {
      var jElement = (0, _libs.$)(this.element);
      var offset = jElement.offset();
      this.coords.x = (e.pageX - offset.left) / jElement.width() * 2 - 1;
      this.coords.y = -((e.pageY - offset.top) / jElement.height()) * 2 + 1;
      return this.coords;
    };

    ThreeMouseEventConverter.prototype.getObject = function getObject(e) {
      this.setCoordsFromEvent(e);
      this.raycaster.setFromCamera(this.coords, this.camera);
      var intersects = this.raycaster.intersectObjects(this.threes);
      return intersects[0];
    };

    return ThreeMouseEventConverter;
  }(_MouseEventConverter3.default);

  exports.default = ThreeMouseEventConverter;

  /***/
},
/* 57 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _Target2 = __webpack_require__(14);

  var _Target3 = _interopRequireDefault(_Target2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var CircleTarget = function (_Target) {
    _inherits(CircleTarget, _Target);

    function CircleTarget(x, y, r) {
      _classCallCheck(this, CircleTarget);

      var _this = _possibleConstructorReturn(this, _Target.call(this));

      _this.p = {
        x: x,
        y: y,
        r: r
      };
      return _this;
    }

    CircleTarget.prototype.testIntersection = function testIntersection(e, data) {
      var res = void 0;
      var x = data.x,
          y = data.y,
          p = this.p;

      if ((x - p.x) * (x - p.x) + (y - p.y) * (y - p.y) <= p.r * p.r) {
        res = {
          target: this,
          data: data
        };
      }
      return res;
    };

    return CircleTarget;
  }(_Target3.default);

  exports.default = CircleTarget;

  /***/
},
/* 58 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  'use strict';

  exports.__esModule = true;

  var _Target2 = __webpack_require__(14);

  var _Target3 = _interopRequireDefault(_Target2);

  var _BaseMathUtils = __webpack_require__(1);

  var _BaseMathUtils2 = _interopRequireDefault(_BaseMathUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var PolyTarget = function (_Target) {
    _inherits(PolyTarget, _Target);

    function PolyTarget(poly) {
      _classCallCheck(this, PolyTarget);

      var _this = _possibleConstructorReturn(this, _Target.call(this));

      _this.poly = poly;
      return _this;
    }

    PolyTarget.prototype.testIntersection = function testIntersection(e, p) {
      return _BaseMathUtils2.default.isInsidePoly(this.poly, p) ? {
        target: this,
        data: p
      } : undefined;
    };

    return PolyTarget;
  }(_Target3.default);

  exports.default = PolyTarget;

  /***/
},
/* 59 */
/***/function (module, exports) {

  "use strict";
  'use strict';

  exports.__esModule = true;
  exports.props = props;
  var mouseButtons = {
    Left: 0,
    Middle: 1,
    Right: 2
  };

  function props() {
    return {
      eps: 1e-4,
      scale: {
        default: 0.9,
        min: 0.9,
        max: 2.5,
        levels: 7
      },
      lighting: {
        default: 0.7,
        min: 0,
        max: 1,
        levels: 7
      },
      pan: {
        speed: 50
      },
      actions: {
        cmdZoomIn: {
          enabled: true
        },
        cmdZoomOut: {
          enabled: true
        },
        cmdDefaultZoom: {
          enabled: true,
          type: 'dblclick',
          code: 0
        },
        cmdToc: {
          enabled: true
        },
        cmdFastBackward: {
          enabled: false
        },
        cmdBackward: {
          enabled: true
        },
        cmdForward: {
          enabled: true
        },
        cmdFastForward: {
          enabled: false
        },
        cmdSave: {
          enabled: true
        },
        cmdPrint: {
          enabled: true
        },
        cmdFullScreen: {
          enabled: true
        },
        widSettings: {
          enabled: true
        },
        cmdSmartPan: {
          enabled: true,
          active: true
        },
        cmdSinglePage: {
          enabled: true,
          active: false,
          activeForMobile: false
        },
        cmdSounds: {
          enabled: true,
          active: true
        },
        cmdStats: {
          enabled: true,
          active: false
        },
        cmdLightingUp: {
          enabled: true
        },
        cmdLightingDown: {
          enabled: true
        },
        cmdPanLeft: {
          enabled: false
        },
        cmdPanRight: {
          enabled: false
        },
        cmdPanUp: {
          enabled: false
        },
        cmdPanDown: {
          enabled: false
        },
        mouseCmdRotate: {
          enabled: true,
          type: 'mousedrag',
          code: mouseButtons.Right
        },
        mouseCmdDragZoom: {
          enabled: true,
          type: 'mousedrag',
          code: mouseButtons.Middle
        },
        mouseCmdPan: {
          enabled: true,
          type: 'mousedrag',
          code: mouseButtons.Left
        },
        mouseCmdWheelZoom: {
          enabled: true,
          type: 'mousewheel',
          code: 0
        },
        touchCmdRotate: {
          enabled: true,
          type: 'touchdrag',
          code: 3
        },
        touchCmdZoom: {
          enabled: true,
          type: 'touchdrag',
          code: 2
        },
        touchCmdPan: {
          enabled: true,
          type: 'touchdrag',
          code: 1
        }
      }
    };
  };

  /***/
},
/* 60 */
/***/function (module, exports, __webpack_require__) {

  /*** IMPORTS FROM imports-loader ***/
  var define = false;

  /*!
   * jQuery Mousewheel 3.1.13
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   */

  (function (factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['jquery'], factory);
    } else if (true) {
      // Node/CommonJS style for Browserify
      module.exports = factory;
    } else {
      // Browser globals
      factory(jQuery);
    }
  })(function ($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice = Array.prototype.slice,
        nullLowestDeltaTimeout,
        lowestDelta;

    if ($.event.fixHooks) {
      for (var i = toFix.length; i;) {
        $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
      }
    }

    var special = $.event.special.mousewheel = {
      version: '3.1.12',

      setup: function setup() {
        if (this.addEventListener) {
          for (var i = toBind.length; i;) {
            this.addEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = handler;
        }
        // Store the line height and page height for this particular element
        $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
        $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
      },

      teardown: function teardown() {
        if (this.removeEventListener) {
          for (var i = toBind.length; i;) {
            this.removeEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = null;
        }
        // Clean up the data we added to the element
        $.removeData(this, 'mousewheel-line-height');
        $.removeData(this, 'mousewheel-page-height');
      },

      getLineHeight: function getLineHeight(elem) {
        var $elem = $(elem),
            $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
        if (!$parent.length) {
          $parent = $('body');
        }
        return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
      },

      getPageHeight: function getPageHeight(elem) {
        return $(elem).height();
      },

      settings: {
        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
        normalizeOffset: true // calls getBoundingClientRect for each event
      }
    };

    $.fn.extend({
      mousewheel: function mousewheel(fn) {
        return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
      },

      unmousewheel: function unmousewheel(fn) {
        return this.unbind('mousewheel', fn);
      }
    });

    function handler(event) {
      var orgEvent = event || window.event,
          args = slice.call(arguments, 1),
          delta = 0,
          deltaX = 0,
          deltaY = 0,
          absDelta = 0,
          offsetX = 0,
          offsetY = 0;
      event = $.event.fix(orgEvent);
      event.type = 'mousewheel';

      // Old school scrollwheel delta
      if ('detail' in orgEvent) {
        deltaY = orgEvent.detail * -1;
      }
      if ('wheelDelta' in orgEvent) {
        deltaY = orgEvent.wheelDelta;
      }
      if ('wheelDeltaY' in orgEvent) {
        deltaY = orgEvent.wheelDeltaY;
      }
      if ('wheelDeltaX' in orgEvent) {
        deltaX = orgEvent.wheelDeltaX * -1;
      }

      // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
      if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
        deltaX = deltaY * -1;
        deltaY = 0;
      }

      // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
      delta = deltaY === 0 ? deltaX : deltaY;

      // New school wheel delta (wheel event)
      if ('deltaY' in orgEvent) {
        deltaY = orgEvent.deltaY * -1;
        delta = deltaY;
      }
      if ('deltaX' in orgEvent) {
        deltaX = orgEvent.deltaX;
        if (deltaY === 0) {
          delta = deltaX * -1;
        }
      }

      // No change actually happened, no reason to go any further
      if (deltaY === 0 && deltaX === 0) {
        return;
      }

      // Need to convert lines and pages to pixels if we aren't already in pixels
      // There are three delta modes:
      //   * deltaMode 0 is by pixels, nothing to do
      //   * deltaMode 1 is by lines
      //   * deltaMode 2 is by pages
      if (orgEvent.deltaMode === 1) {
        var lineHeight = $.data(this, 'mousewheel-line-height');
        delta *= lineHeight;
        deltaY *= lineHeight;
        deltaX *= lineHeight;
      } else if (orgEvent.deltaMode === 2) {
        var pageHeight = $.data(this, 'mousewheel-page-height');
        delta *= pageHeight;
        deltaY *= pageHeight;
        deltaX *= pageHeight;
      }

      // Store lowest absolute delta to normalize the delta values
      absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

      if (!lowestDelta || absDelta < lowestDelta) {
        lowestDelta = absDelta;

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
          lowestDelta /= 40;
        }
      }

      // Adjust older deltas if necessary
      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        // Divide all the things by 40!
        delta /= 40;
        deltaX /= 40;
        deltaY /= 40;
      }

      // Get a whole, normalized value for the deltas
      delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
      deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
      deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);

      // Normalise offsetX and offsetY properties
      if (special.settings.normalizeOffset && this.getBoundingClientRect) {
        var boundingRect = this.getBoundingClientRect();
        offsetX = event.clientX - boundingRect.left;
        offsetY = event.clientY - boundingRect.top;
      }

      // Add information to the event object
      event.deltaX = deltaX;
      event.deltaY = deltaY;
      event.deltaFactor = lowestDelta;
      event.offsetX = offsetX;
      event.offsetY = offsetY;
      // Go ahead and set deltaMode to 0 since we converted to pixels
      // Although this is a little odd since we overwrite the deltaX/Y
      // properties with normalized deltas.
      event.deltaMode = 0;

      // Add event and delta to the front of the arguments
      args.unshift(event, delta, deltaX, deltaY);

      // Clearout lowestDelta after sometime to better
      // handle multiple device types that give different
      // a different lowestDelta
      // Ex: trackpad = 3 and mouse wheel = 120
      if (nullLowestDeltaTimeout) {
        clearTimeout(nullLowestDeltaTimeout);
      }
      nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

      return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
      lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
      // If this is an older event and the delta is divisable by 120,
      // then we are assuming that the browser is treating this as an
      // older mouse wheel event and that we should divide the deltas
      // by 40 to try and get a more usable deltaFactor.
      // Side note, this actually impacts the reported scroll distance
      // in older browsers and can cause scrolling to be slower than native.
      // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
      return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }
  });

  /***/
},
/* 61 */
/***/function (module, exports, __webpack_require__) {

  // stats.js - http://github.com/mrdoob/stats.js
  (function (f, e) {
    true ? module.exports = e() : "function" === typeof define && define.amd ? define(e) : f.Stats = e();
  })(this, function () {
    var f = function f() {
      function e(a) {
        c.appendChild(a.dom);return a;
      }function u(a) {
        for (var d = 0; d < c.children.length; d++) {
          c.children[d].style.display = d === a ? "block" : "none";
        }l = a;
      }var l = 0,
          c = document.createElement("div");c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click", function (a) {
        a.preventDefault();
        u(++l % c.children.length);
      }, !1);var k = (performance || Date).now(),
          g = k,
          a = 0,
          r = e(new f.Panel("FPS", "#0ff", "#002")),
          h = e(new f.Panel("MS", "#0f0", "#020"));if (self.performance && self.performance.memory) var t = e(new f.Panel("MB", "#f08", "#201"));u(0);return { REVISION: 16, dom: c, addPanel: e, showPanel: u, begin: function begin() {
          k = (performance || Date).now();
        }, end: function end() {
          a++;var c = (performance || Date).now();h.update(c - k, 200);if (c > g + 1E3 && (r.update(1E3 * a / (c - g), 100), g = c, a = 0, t)) {
            var d = performance.memory;t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
          }return c;
        }, update: function update() {
          k = this.end();
        }, domElement: c, setMode: u };
    };f.Panel = function (e, f, l) {
      var c = Infinity,
          k = 0,
          g = Math.round,
          a = g(window.devicePixelRatio || 1),
          r = 80 * a,
          h = 48 * a,
          t = 3 * a,
          v = 2 * a,
          d = 3 * a,
          m = 15 * a,
          n = 74 * a,
          p = 30 * a,
          q = document.createElement("canvas");q.width = r;q.height = h;q.style.cssText = "width:80px;height:48px";var b = q.getContext("2d");b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";b.textBaseline = "top";b.fillStyle = l;b.fillRect(0, 0, r, h);b.fillStyle = f;b.fillText(e, t, v);
      b.fillRect(d, m, n, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d, m, n, p);return { dom: q, update: function update(h, w) {
          c = Math.min(c, h);k = Math.max(k, h);b.fillStyle = l;b.globalAlpha = 1;b.fillRect(0, 0, r, m);b.fillStyle = f;b.fillText(g(h) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v);b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);b.fillRect(d + n - a, m, a, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d + n - a, m, a, g((1 - h / w) * p));
        } };
    };return f;
  });

  /***/
},
/* 62 */
/***/function (module, exports, __webpack_require__) {

  __webpack_require__(18);
  module.exports = __webpack_require__(17);

  /***/
}
/******/]);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _$ =  true ? window.jQuery : require('jquery'),
    _html2canvas =  true ? window.html2canvas : require('html2canvas'),
    _THREE =  true ? window.THREE : require('three'),
    _PDFJS =  true ? window.PDFJS : require('pdfjs');

exports.$ = _$;
exports.html2canvas = _html2canvas;
exports.THREE = _THREE;
exports.PDFJS = _PDFJS;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2VjYWY0ZWQ3OTg2OTBkYTBlODciLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIDQ0ZjJmM2JiMjlhODBmN2MyYjRjIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2xpYnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9CYXNlTWF0aFV0aWxzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvTWF0aFV0aWxzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvSW1hZ2VCYXNlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvR3JhcGhVdGlscy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL0ltYWdlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL1RocmVlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Cb29rUHJvcHNCdWlsZGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Db250cm9sbGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvUGRmLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvU2hlZXRCbG9jay5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL2NvbnRyb2xzL0N1c3RvbUV2ZW50Q29udmVydGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvY29udHJvbHMvRXZlbnRDb252ZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9jb250cm9scy90YXJnZXRzL1RhcmdldC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9tb2RlbHMvc2hlZXRCbG9jay5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9wcm9wcy9ib29rLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL1RIUkVFeC9GdWxsU2NyZWVuLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvQXV0b05hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL0JpbmRlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL0JsYW5rSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Cb29rLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvQm9va0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Cb29rUHJpbnRlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL0Jvb2tWaWV3LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvQm9va21hcmtzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvQ2xiQm9va1Byb3BzQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL0NvdmVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvRGVsYXVuYXkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9EZXRlY3Rvci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL0RvY01vdXNlU2ltdWxhdG9yLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvRG9tMkltYWdlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvRXZlbnRzVG9BY3Rpb25zLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvSW50ZXJhY3RpdmVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL0xvYWRpbmdBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Mb2FkaW5nQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL09iamVjdDNEV2F0Y2hlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL1BhZ2VNYW5hZ2VyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvUGRmQm9va1Byb3BzQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL1BkZkltYWdlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvUGRmTGlua3NIYW5kbGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvU2hlZXRQaHlzaWNzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvU291bmRzRW52aXJvbWVudC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL1N0YXRpY0ltYWdlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvVGV4dHVyZUFuaW1hdG9yLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvVGhyZWVNYXJrdXAuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9UaHVtYm5haWxzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvVG9jQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9WaXN1YWxXb3JsZC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL1dpZGdldENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9jb250cm9scy9EcmFnLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvY29udHJvbHMvTW91c2VFdmVudENvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9qcy9jbGFzc2VzL2NvbnRyb2xzL09yYml0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvY29udHJvbHMvVGhyZWVNb3VzZUV2ZW50Q29udmVydGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2pzL2NsYXNzZXMvY29udHJvbHMvdGFyZ2V0cy9DaXJjbGVUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvY2xhc3Nlcy9jb250cm9scy90YXJnZXRzL1BvbHlUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vanMvcHJvcHMvYm9va0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vfi9qcXVlcnktbW91c2V3aGVlbC9qcXVlcnkubW91c2V3aGVlbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9+L3N0YXRzLmpzL2J1aWxkL3N0YXRzLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiXyQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJfaHRtbDJjYW52YXMiLCJodG1sMmNhbnZhcyIsIl9USFJFRSIsIlRIUkVFIiwiX1BERkpTIiwiUERGSlMiLCIkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztB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YyxtQkFBaUI7V0FBaFI7S0FEK0IsQ0FDdVI7QUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p0WSxJQUFNQyxLQUFLLFFBQW9CQyxPQUFPQyxNQUEzQixHQUFtQ0gsUUFBUSxRQUFSLENBQTlDO0FBQUEsSUFDTUksZUFBZSxRQUF5QkYsT0FBT0csV0FBaEMsR0FBNkNMLFFBQVEsYUFBUixDQURsRTtBQUFBLElBRU1NLFNBQVMsUUFBbUJKLE9BQU9LLEtBQTFCLEdBQWlDUCxRQUFRLE9BQVIsQ0FGaEQ7QUFBQSxJQUdNUSxTQUFTLFFBQW1CTixPQUFPTyxLQUExQixHQUFpQ1QsUUFBUSxPQUFSLENBSGhEOztRQU1RVSxDLEdBQU5ULEU7UUFDZ0JJLFcsR0FBaEJELFk7UUFDVUcsSyxHQUFWRCxNO1FBQ1VHLEssR0FBVkQsTSIsImZpbGUiOiIuL2Rpc3QvZmxpcC1ib29rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2VjYWY0ZWQ3OTg2OTBkYTBlODciLCJpbXBvcnQgeyQsIGh0bWwyY2FudmFzLCBUSFJFRSwgUERGSlN9IGZyb20gJy4vc3JjL2xpYnMnO1xyXG5yZXF1aXJlKCcuL3NyYy8nKyhFTlZJUk9NRU5ULmRlYnVnPyAnM2RmbGlwYm9vay5qcyc6ICczZGZsaXBib29rLm1pbi5qcycpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ0ZjJmM2JiMjlhODBmN2MyYjRjXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6L3dlYnBhY2svYm9vdHN0cmFwIDQ0ZjJmM2JiMjlhODBmN2MyYjRjIiwiY29uc3QgXyQgPSBHTE9CQUxfTElCUy5qUXVlcnk/IHdpbmRvdy5qUXVlcnk6IHJlcXVpcmUoJ2pxdWVyeScpLFxyXG4gICAgICBfaHRtbDJjYW52YXMgPSBHTE9CQUxfTElCUy5odG1sMmNhbnZhcz8gd2luZG93Lmh0bWwyY2FudmFzOiByZXF1aXJlKCdodG1sMmNhbnZhcycpLFxyXG4gICAgICBfVEhSRUUgPSBHTE9CQUxfTElCUy5USFJFRT8gd2luZG93LlRIUkVFOiByZXF1aXJlKCd0aHJlZScpLFxyXG4gICAgICBfUERGSlMgPSBHTE9CQUxfTElCUy5QREZKUz8gd2luZG93LlBERkpTOiByZXF1aXJlKCdwZGZqcycpO1xyXG5cclxuZXhwb3J0IHtcclxuICBfJCBhcyAkLFxyXG4gIF9odG1sMmNhbnZhcyBhcyBodG1sMmNhbnZhcyxcclxuICBfVEhSRUUgYXMgVEhSRUUsXHJcbiAgX1BERkpTIGFzIFBERkpTXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2xpYnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9saWJzLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1hdGhVdGlscyB7XHJcbiAgc3RhdGljIHN1bSA9IFtCYXNlTWF0aFV0aWxzLnN1bTEsIEJhc2VNYXRoVXRpbHMuc3VtMiwgQmFzZU1hdGhVdGlscy5zdW0zLCBCYXNlTWF0aFV0aWxzLnN1bTRdO1xyXG4gIHN0YXRpYyBlcHMgPSAxZS00O1xyXG5cclxuICBzdGF0aWMgc3VtMShrYSxhLGtiLGIpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIGthKmFbMF0ra2IqYlswXVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdW0yKGthLGEsa2IsYikge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAga2EqYVswXStrYipiWzBdLFxyXG4gICAgICBrYSphWzFdK2tiKmJbMV1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3VtMyhrYSxhLGtiLGIpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIGthKmFbMF0ra2IqYlswXSxcclxuICAgICAga2EqYVsxXStrYipiWzFdLFxyXG4gICAgICBrYSphWzJdK2tiKmJbMl1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3VtNChrYSxhLGtiLGIpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIGthKmFbMF0ra2IqYlswXSxcclxuICAgICAga2EqYVsxXStrYipiWzFdLFxyXG4gICAgICBrYSphWzJdK2tiKmJbMl0sXHJcbiAgICAgIGthKmFbM10ra2IqYlszXVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByazQoZHksIHQsIGR0LCB5LCBzdW09QmFzZU1hdGhVdGlscy5zdW1beS5sZW5ndGgtMV0pIHtcclxuICAgIGNvbnN0IGsxPWR5KHQseSksXHJcbiAgICAgICAgICBrMj1keSh0K2R0LzIsc3VtKDEseSxkdC8yLGsxKSksXHJcbiAgICAgICAgICBrMz1keSh0K2R0LzIsc3VtKDEseSxkdC8yLGsyKSksXHJcbiAgICAgICAgICBrND1keSh0K2R0LHN1bSgxLHksZHQsazMpKTtcclxuICAgIHJldHVybiBzdW0oMSx5LGR0LzYsc3VtKDEsc3VtKDEsazEsMixrMiksMSxzdW0oMixrMywxLGs0KSkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGV4dHJhcG9sYXRlTGluZWFyKHgseSx4aSkge1xyXG4gICAgcmV0dXJuIHlbMF0rKHlbMV0teVswXSkvKHhbMV0teFswXSkqKHhpLXhbMF0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGludGVycG9sYXRlTGluZWFyKHgseSx4aSkge1xyXG4gICAgbGV0IHlpO1xyXG4gICAgaWYoeFswXT54WzFdKSB7XHJcbiAgICAgIHg9eC5yZXZlcnNlKCk7XHJcbiAgICAgIHk9eS5yZXZlcnNlKCk7XHJcbiAgICB9XHJcbiAgICBpZih4aTx4WzBdKSB7XHJcbiAgICAgIHlpPXlbMF07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHhpPnhbMV0pIHtcclxuICAgICAgeWk9eVsxXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB5aT1CYXNlTWF0aFV0aWxzLmV4dHJhcG9sYXRlTGluZWFyKHgseSx4aSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geWk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2FsY1NjYWxlKHNyY1csIHNyY0gsIGRzdFcsIGRzdEgpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihkc3RXL3NyY1csIGRzdEgvc3JjSCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbXVsTShhLCBiKSB7XHJcbiAgICBjb25zdCByPVtdO1xyXG4gICAgZm9yKGxldCBpPTA7aTxhLmxlbmd0aDsrK2kpIHtcclxuICAgICAgci5wdXNoKFtdKTtcclxuICAgICAgZm9yKGxldCBqPTA7ajxiWzBdLmxlbmd0aDsrK2opIHtcclxuICAgICAgICByW2ldW2pdID0gMDtcclxuICAgICAgICBmb3IobGV0IGs9MDtrPGIubGVuZ3RoOysraykge1xyXG4gICAgICAgICAgcltpXVtqXSs9YVtpXVtrXSpiW2tdW2pdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdHJhbnNNKG0pIHtcclxuICAgIGNvbnN0IHI9W107XHJcbiAgICBmb3IobGV0IGk9MDtpPG0ubGVuZ3RoOysraSkge1xyXG4gICAgICBmb3IobGV0IGo9MDtqPG1bMF0ubGVuZ3RoOysraikge1xyXG4gICAgICAgIGlmKCFyW2pdKSB7XHJcbiAgICAgICAgICByW2pdPVtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByW2pdW2ldPW1baV1bal07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1hdChkYXRhKSB7XHJcbiAgICBsZXQgcz0wO1xyXG4gICAgZm9yKGxldCB4IG9mIGRhdGEpIHtcclxuICAgICAgcys9eDtcclxuICAgIH1cclxuICAgIHJldHVybiBzL2RhdGEubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpc3AoZGF0YSkge1xyXG4gICAgY29uc3QgTT1CYXNlTWF0aFV0aWxzLm1hdChkYXRhKTtcclxuICAgIGxldCBzPTA7XHJcbiAgICBmb3IobGV0IHggb2YgZGF0YSkge1xyXG4gICAgICBzKz0oeC1NKSooeC1NKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzL2RhdGEubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHByZWRpY3QoZGF0YSwgbnVtKSB7XHJcbiAgICBjb25zdCByPVtdLCBsPWRhdGEubGVuZ3RoLCBEPUJhc2VNYXRoVXRpbHMuZGlzcChkYXRhKTtcclxuICAgIGlmKEQ8bCAmJiBsPjEpIHtcclxuICAgICAgY29uc3QgYW09W10sIGJtPVtdO1xyXG4gICAgICBmb3IobGV0IGk9MDtpPGw7KytpKSB7XHJcbiAgICAgICAgYW0ucHVzaChbaSwxXSk7XHJcbiAgICAgICAgYm0ucHVzaChbZGF0YVtpXV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRhPUJhc2VNYXRoVXRpbHMudHJhbnNNKGFtKSwgYT1CYXNlTWF0aFV0aWxzLm11bE0odGEsYW0pLCBiPUJhc2VNYXRoVXRpbHMubXVsTSh0YSxibSksXHJcbiAgICAgIGQ9KGFbMF1bMF0qYVsxXVsxXS1hWzFdWzBdKmFbMF1bMV0pLFxyXG4gICAgICBwPVtcclxuICAgICAgICAtKGFbMF1bMV0qYlsxXVswXS1iWzBdWzBdKmFbMV1bMV0pL2QsXHJcbiAgICAgICAgKGFbMF1bMF0qYlsxXVswXS1hWzFdWzBdKmJbMF1bMF0pL2RcclxuICAgICAgXTtcclxuICAgICAgZm9yKGxldCBpPTA7aTxudW07KytpKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQocFswXSooaStsKStwWzFdKTtcclxuICAgICAgICBpZihyLmluZGV4T2Yodik9PT0tMSkge1xyXG4gICAgICAgICAgci5wdXNoKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VW5pcXVlKCkge1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbCgxZTkqTWF0aC5yYW5kb20oKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0U3BsaW5lUG9pbnRzKHNwbGluZSwgcHMpIHtcclxuICAgIGlmKHNwbGluZS5wb2ludHMubGVuZ3RoIT09cHMueC5sZW5ndGgpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdzZXRTcGxpbmVQb2ludHM6IGJhZCBwb2ludHMnKTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgaT0wOyBpPHNwbGluZS5wb2ludHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgc3BsaW5lLnBvaW50c1tpXS5zZXQocHMueFtpXSwgcHMueVtpXSwgcHMuej8gcHMueltpXTogMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbWFwbDJMKGxzLCBsZW4sIG4sIGYpIHtcclxuICAgIGNvbnN0IGRMID0gbGVuLyhuLTEpO1xyXG4gICAgbGV0IEw9MDtcclxuICAgIGZvcihsZXQgaT0wLCBkPWxzWzBdOyBpPGxzLmxlbmd0aC0xICYmIEw8bGVuKzAuMSpkTDsgKytpLCBkKz1sc1tpXSkge1xyXG4gICAgICBpZihNYXRoLmFicyhMLWQpPE1hdGguYWJzKEwtZC1sc1tpKzFdKSkge1xyXG4gICAgICAgIGYoaSwgTCk7XHJcbiAgICAgICAgTCs9ZEw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKEw8bGVuKzAuMSpkTCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ21hcGwyTDogbHMgaXMgbm90IGVub3VnaHQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZXQyKGEsYixjLGQpIHtcclxuICAgIHJldHVybiBhKmQtYipjO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNvbHZlMkxpbihhMSxiMSxhMixiMikge1xyXG4gICAgbGV0IHJlcztcclxuICAgIGNvbnN0IGQ9QmFzZU1hdGhVdGlscy5kZXQyKGExWzBdLGExWzFdLGEyWzBdLGEyWzFdKTtcclxuICAgIGlmKE1hdGguYWJzKGQpPkJhc2VNYXRoVXRpbHMuZXBzKSB7XHJcbiAgICAgIGNvbnN0IGR4PUJhc2VNYXRoVXRpbHMuZGV0MihiMSxhMVsxXSxiMixhMlsxXSksIGR5PUJhc2VNYXRoVXRpbHMuZGV0MihhMVswXSxiMSxhMlswXSxiMik7XHJcbiAgICAgIHJlcyA9IHtcclxuICAgICAgICB4OiBkeC9kLFxyXG4gICAgICAgIHk6IGR5L2RcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNJbnNpZGVQb2x5KHBzLCBwKSB7XHJcbiAgICBsZXQgZG9uZSA9IGZhbHNlLCBjdDtcclxuICAgIGZvcihsZXQgaT0wOyBpPHBzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGlmKEJhc2VNYXRoVXRpbHMudjJkaXN0KHAsIHBzW2ldKTxCYXNlTWF0aFV0aWxzLmVwcykge1xyXG4gICAgICAgIGN0PTE7XHJcbiAgICAgICAgZG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdoaWxlKCFkb25lKSB7XHJcbiAgICAgIGRvbmUgPSB0cnVlO1xyXG4gICAgICBjdCA9IDA7XHJcbiAgICAgIGxldCBucCA9IHt4OiBwLngrTWF0aC5yYW5kb20oKS0wLjUsIHk6IHAueStNYXRoLnJhbmRvbSgpLTAuNX0sIHJuID0ge3g6IG5wLngtcC54LCB5OiBucC55LXAueX0sIGExPVtybi55LCAtcm4ueF0sIGIxPXAueCpybi55LXAueSpybi54O1xyXG4gICAgICBmb3IobGV0IGk9MDsgaTxwcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGNvbnN0IHAwPXBzW2ldLCBwMT1wc1soaSsxKSVwcy5sZW5ndGhdLCBuID0ge3g6IHAxLngtcDAueCwgeTogcDEueS1wMC55fSwgYTI9W24ueSwgLW4ueF0sIGIyPXAwLngqbi55LXAwLnkqbi54LFxyXG4gICAgICAgICAgaXAgPSBCYXNlTWF0aFV0aWxzLnNvbHZlMkxpbihhMSxiMSxhMixiMik7XHJcbiAgICAgICAgaWYoaXApIHtcclxuICAgICAgICAgIGlmKEJhc2VNYXRoVXRpbHMudjJkaXN0KGlwLCBwMCk8QmFzZU1hdGhVdGlscy5lcHMgfHwgQmFzZU1hdGhVdGlscy52MmRpc3QoaXAsIHAxKTxCYXNlTWF0aFV0aWxzLmVwcykge1xyXG4gICAgICAgICAgICBkb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZihpcC54Pk1hdGgubWluKHAwLngscDEueCktQmFzZU1hdGhVdGlscy5lcHMmJmlwLng8TWF0aC5tYXgocDAueCxwMS54KStCYXNlTWF0aFV0aWxzLmVwcyAmJlxyXG4gICAgICAgICAgICAgICAgICBpcC55Pk1hdGgubWluKHAwLnkscDEueSktQmFzZU1hdGhVdGlscy5lcHMmJmlwLnk8TWF0aC5tYXgocDAueSxwMS55KStCYXNlTWF0aFV0aWxzLmVwcykge1xyXG4gICAgICAgICAgICBpZihCYXNlTWF0aFV0aWxzLnYyZGlzdChpcCwgcCk8QmFzZU1hdGhVdGlscy5lcHMpIHtcclxuICAgICAgICAgICAgICBjdD0xO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRuPXt4OiBpcC54LXAueCwgeTogaXAueS1wLnl9O1xyXG4gICAgICAgICAgICAgIGN0ICs9IHRuLngqcm4ueCt0bi55KnJuLnk+MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGN0JTI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNJbnNpZGVDb252UG9seShwcywgcCkge1xyXG4gICAgbGV0IHNnID0gWzAsIDBdO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8cHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgY29uc3QgcDA9cHNbaV0sIHAxPXBzWyhpKzEpJXBzLmxlbmd0aF0sIGE9e3g6IHAwLngtcC54LCB5OiBwMC55LXAueX0sIGI9e3g6IHAxLngtcC54LCB5OiBwMS55LXAueX07XHJcbiAgICAgICsrc2dbKGEueCpiLnktYS55KmIueDwwKSswXTtcclxuICAgIH1cclxuICAgIHJldHVybiB+c2cuaW5kZXhPZihwcy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHYybGVuKHYyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHYyLngqdjIueCt2Mi55KnYyLnkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHYyZGlzdCh2MjEsIHYyMikge1xyXG4gICAgcmV0dXJuIEJhc2VNYXRoVXRpbHMudjJsZW4oe1xyXG4gICAgICB4OiB2MjIueC12MjEueCxcclxuICAgICAgeTogdjIyLnktdjIxLnlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbXB1dGVTcXVhcmUocHMpIHtcclxuICAgIGNvbnN0IGEgPSBbXTtcclxuICAgIGxldCBwID0gMDtcclxuICAgIGZvcihsZXQgaT0wOyBpPHBzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGEucHVzaChCYXNlTWF0aFV0aWxzLnYyZGlzdChwc1tpXSwgcHNbKGkrMSklcHMubGVuZ3RoXSkpO1xyXG4gICAgICBwICs9IDAuNSphW2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGguc3FydChwKihwLWFbMF0pKihwLWFbMV0pKihwLWFbMl0pKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb21wdXRlSW50ZXJwQ29lZnModHJpLCBwKSB7XHJcbiAgICBjb25zdCBzID0gQmFzZU1hdGhVdGlscy5jb21wdXRlU3F1YXJlKHRyaSksIGNvZWZzPVtdLCBsID0gdHJpLmxlbmd0aDtcclxuICAgIGZvcihsZXQgaT0wOyBpPGw7ICsraSkge1xyXG4gICAgICBjb2Vmc1tpXSA9IEJhc2VNYXRoVXRpbHMuY29tcHV0ZVNxdWFyZShbcCwgdHJpWyhpKzEpJWxdLCB0cmlbKGkrMiklbF1dKS9zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvZWZzO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9CYXNlTWF0aFV0aWxzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9CYXNlTWF0aFV0aWxzLmpzIiwiaW1wb3J0IHtUSFJFRX0gZnJvbSAnLi4vbGlicyc7XHJcbmltcG9ydCBCYXNlTWF0aFV0aWxzIGZyb20gJy4vQmFzZU1hdGhVdGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRoVXRpbHMgZXh0ZW5kcyBCYXNlTWF0aFV0aWxzIHtcclxuICBzdGF0aWMgdjEgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICBzdGF0aWMgc3BsaXRTcGxpbmUoc3BsaW5lLCBOKSB7XHJcbiAgICBjb25zdCBvID0ge2xlbjogMCwgbHM6IFswXX0sIGRsPTEvTjtcclxuICAgIGZvcihsZXQgaT0wOyBpPD1OOyArK2kpIHtcclxuICAgICAgY29uc3QgcCA9IHNwbGluZS5nZXRQb2ludChpKmRsKTtcclxuICAgICAgaWYoaSkge1xyXG4gICAgICAgIGNvbnN0IGQgPSBNYXRoVXRpbHMudjEuZGlzdGFuY2VUbyhwKTtcclxuICAgICAgICBvLmxlbiArPSBkO1xyXG4gICAgICAgIG8ubHMucHVzaChkKTtcclxuICAgICAgfVxyXG4gICAgICBNYXRoVXRpbHMudjEuY29weShwKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldExpbmVhckluZGVjZXMoc3BsaW5lLCBuKSB7XHJcbiAgICBjb25zdCBkZWwgPSA1MDAwLCBkRGVsID0gMS9kZWw7XHJcbiAgICBjb25zdCBscz1bMF07XHJcbiAgICBsZXQgbCA9IDA7XHJcbiAgICBmb3IobGV0IGk9MDsgaTw9ZGVsOyArK2kpIHtcclxuICAgICAgY29uc3QgcCA9IHNwbGluZS5nZXRQb2ludChpKmREZWwpO1xyXG4gICAgICBpZihpKSB7XHJcbiAgICAgICAgY29uc3QgZD1NYXRoVXRpbHMudjEuZGlzdGFuY2VUbyhwKTtcclxuICAgICAgICBsICs9IGQ7XHJcbiAgICAgICAgbHMucHVzaChkKTtcclxuICAgICAgfVxyXG4gICAgICBNYXRoVXRpbHMudjEuY29weShwKTtcclxuICAgIH1cclxuICAgIGxzLnB1c2goMWU3KTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBbXSwgZGwgPSBsLyhuLTEpO1xyXG4gICAgZm9yKGxldCBpPTAsIEw9MCwgZD1sc1swXTsgaTxscy5sZW5ndGgtMTsgKytpLCBkKz1sc1tpXSkge1xyXG4gICAgICBpZihNYXRoLmFicyhMLWQpPE1hdGguYWJzKEwtZC1sc1tpKzFdKSkge1xyXG4gICAgICAgIHJlcy5wdXNoKGkqZERlbCk7XHJcbiAgICAgICAgTCs9ZGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlZmluZVBvbHkocG9seSwgbWF4RGwpIHtcclxuICAgIGNvbnN0IHJlcyA9IFtdO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8cG9seS5sZW5ndGg7ICsraSkge1xyXG4gICAgICBjb25zdCBwMCA9IHBvbHlbaV0sIHAxID0gcG9seVsoaSsxKSVwb2x5Lmxlbmd0aF0sIGwgPSBCYXNlTWF0aFV0aWxzLnYyZGlzdChwMCwgcDEpLCBuID0gTWF0aC5jZWlsKGwvbWF4RGwpLCBkbCA9IGwvbjtcclxuICAgICAgcmVzLnB1c2gocDApO1xyXG4gICAgICBmb3IobGV0IGo9MTsgajxuOyArK2opIHtcclxuICAgICAgICByZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMihcclxuICAgICAgICAgIHAwLngraipkbCoocDEueC1wMC54KS9sLFxyXG4gICAgICAgICAgcDAueStqKmRsKihwMS55LXAwLnkpL2xcclxuICAgICAgICApKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvTWF0aFV0aWxzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9NYXRoVXRpbHMuanMiLCJpbXBvcnQgeyR9IGZyb20gJy4uL2xpYnMnO1xyXG5pbXBvcnQgR3JhcGhVdGlscyBmcm9tICcuL0dyYXBoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VCYXNlIHtcclxuXHJcbiAgc3RhdGljIHJlbmRlckNhbnZhcyA9ICAkKCc8Y2FudmFzPicpWzBdO1xyXG4gIHN0YXRpYyByZW5kZXJDYW52YXNDdHggPSBJbWFnZUJhc2UucmVuZGVyQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSB7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy53bmQgPSBjb250ZXh0LnduZDtcclxuICAgIHRoaXMuZG9jID0gY29udGV4dC5kb2M7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBjb250ZXh0LmVsZW1lbnQgfHwgY29udGV4dC5kb2MuYm9keTtcclxuICAgIHRoaXMuYyA9IGNvbnRleHQucmVuZGVyQ2FudmFzIHx8IEltYWdlQmFzZS5yZW5kZXJDYW52YXM7XHJcbiAgICB0aGlzLmN0eCA9IGNvbnRleHQucmVuZGVyQ2FudmFzQ3R4IHx8IEltYWdlQmFzZS5yZW5kZXJDYW52YXNDdHg7XHJcbiAgICB0aGlzLnJlc1cgPSB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLnJlc0ggPSB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQmxhbmtQYWdlKCkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBHcmFwaFV0aWxzLmNvbG9yMlJnYmEodGhpcy5jb2xvciwgMSk7XHJcbiAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuYy53aWR0aCwgdGhpcy5jLmhlaWdodCk7XHJcbiAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJbWFnZShpbWFnZSkge1xyXG4gICAgdGhpcy5wdXNoQ3R4KCk7XHJcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgdGhpcy5wb3BDdHgoKTtcclxuICB9XHJcblxyXG4gIHB1c2hDdHgoKSB7XHJcbiAgICBpZih0aGlzLnJlc1chPXRoaXMuYy53aWR0aCkge1xyXG4gICAgICB0aGlzLmMud2lkdGggPSB0aGlzLnJlc1c7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLnJlc0ghPXRoaXMuYy5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5jLmhlaWdodCA9IHRoaXMucmVzSDtcclxuICAgIH1cclxuICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgIHRoaXMuY3R4LnNjYWxlKHRoaXMuYy53aWR0aC90aGlzLndpZHRoLCB0aGlzLmMuaGVpZ2h0L3RoaXMuaGVpZ2h0KTtcclxuICAgIHJldHVybiB0aGlzLmN0eDtcclxuICB9XHJcblxyXG4gIHBvcEN0eCgpIHtcclxuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck5vdEZvdW5kUGFnZSgpIHtcclxuICAgIHRoaXMucmVuZGVyQmxhbmtQYWdlKCk7XHJcbiAgfVxyXG5cclxuICBmaW5pc2hSZW5kZXIoKSB7XHJcbiAgICBpZih0aGlzLm9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5jKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbmlzaExvYWQoKSB7XHJcbiAgICBpZih0aGlzLm9uTG9hZCkge1xyXG4gICAgICB0aGlzLm9uTG9hZCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhcnRSZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNpbXVsYXRlZERvYygpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL0ltYWdlQmFzZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvSW1hZ2VCYXNlLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhVdGlscyB7XHJcblxyXG4gIHN0YXRpYyBleHRyYXBvbGF0ZUxpbmVhcih4LHkseGkpIHtcclxuICAgIHJldHVybiB5WzBdKyh5WzFdLXlbMF0pLyh4WzFdLXhbMF0pKih4aS14WzBdKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpbnRlcnBvbGF0ZTAxKHkxLHkyLHQpIHtcclxuICAgIHJldHVybiBHcmFwaFV0aWxzLmV4dHJhcG9sYXRlTGluZWFyKFswLDFdLFt5MSx5Ml0sdCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Q29sb3JCeXRlcyhjb2xvcikge1xyXG4gICAgcmV0dXJuIFsoY29sb3I+PjE2KSYweEZGLCAoY29sb3I+PjgpJjB4RkYsIGNvbG9yJjB4RkZdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGludmVyc2VDb2xvcihjb2xvciwgdD0xKSB7XHJcbiAgICBjb25zdCBicz1HcmFwaFV0aWxzLmdldENvbG9yQnl0ZXMoY29sb3IpLFxyXG4gICAgICAgICAgaWJzPVsweEZGLWJzWzBdLDB4RkYtYnNbMV0sMHhGRi1ic1syXV0sXHJcbiAgICAgICAgICBuYnM9W01hdGgucm91bmQoR3JhcGhVdGlscy5pbnRlcnBvbGF0ZTAxKGJzWzBdLGlic1swXSx0KSksTWF0aC5yb3VuZChHcmFwaFV0aWxzLmludGVycG9sYXRlMDEoYnNbMV0saWJzWzFdLHQpKSxNYXRoLnJvdW5kKEdyYXBoVXRpbHMuaW50ZXJwb2xhdGUwMShic1syXSxpYnNbMl0sdCkpXTtcclxuICAgIHJldHVybiBHcmFwaFV0aWxzLmJ5dGVzMkNvbG9yKG5icyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29sb3IyUmdiYShjb2xvciwgYSkge1xyXG4gICAgcmV0dXJuIEdyYXBoVXRpbHMuYnl0ZXMyUmdiYShHcmFwaFV0aWxzLmdldENvbG9yQnl0ZXMoY29sb3IpLCBhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBieXRlczJSZ2JhKGJzLCBhKSB7XHJcbiAgICByZXR1cm4gJ3JnYmEoJyticy5qb2luKCcsJykrJywnK2ErJyknO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGJ5dGVzMkNvbG9yKGJzKSB7XHJcbiAgICByZXR1cm4gYnNbMl18KGJzWzFdPDw4KXwoYnNbMF08PDE2KVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL0dyYXBoVXRpbHMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL0dyYXBoVXRpbHMuanMiLCJpbXBvcnQgQ2FjaGUgZnJvbSAnLi9DYWNoZSc7XHJcbmltcG9ydCBCbGFua0ltYWdlIGZyb20gJy4vQmxhbmtJbWFnZSc7XHJcbmltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlJztcclxuaW1wb3J0IFBkZkltYWdlIGZyb20gJy4vUGRmSW1hZ2UnO1xyXG5pbXBvcnQgSW50ZXJhY3RpdmVJbWFnZSBmcm9tICcuL0ludGVyYWN0aXZlSW1hZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VGYWN0b3J5IHtcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dCwgY2FjaGUpIHtcclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLmNhY2hlID0gY2FjaGUgfHwgbmV3IENhY2hlKCk7XHJcbiAgfVxyXG5cclxuICBidWlsZChpbmZvLCBuPTAsIHdpZHRoVGV4ZWxzPTIxMCwgaGVpZ2h0VGV4ZWxzPTI5NywgY29sb3I9MHhGRkZGRkYsIGluamVjdG9yPXVuZGVmaW5lZCkge1xyXG4gICAgbGV0IGltYWdlO1xyXG4gICAgc3dpdGNoKGluZm8udHlwZSkge1xyXG4gICAgICBjYXNlICdodG1sJzoge1xyXG4gICAgICAgIGltYWdlID0gbmV3IEludGVyYWN0aXZlSW1hZ2UodGhpcy5jb250ZXh0LCB3aWR0aFRleGVscywgaGVpZ2h0VGV4ZWxzLCBjb2xvciwgaW5mby5zcmMsIHRoaXMuY2FjaGUsIGluamVjdG9yKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpbWFnZSc6IHtcclxuICAgICAgICBpbWFnZSA9IG5ldyBTdGF0aWNJbWFnZSh0aGlzLmNvbnRleHQsIHdpZHRoVGV4ZWxzLCBoZWlnaHRUZXhlbHMsIGNvbG9yLCBpbmZvLnNyYyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAncGRmJzoge1xyXG4gICAgICAgIGltYWdlID0gbmV3IFBkZkltYWdlKHRoaXMuY29udGV4dCwgd2lkdGhUZXhlbHMsIGhlaWdodFRleGVscywgY29sb3IsIGluZm8uc3JjLCBuKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdibGFuayc6XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICBpbWFnZSA9IG5ldyBCbGFua0ltYWdlKHRoaXMuY29udGV4dCwgd2lkdGhUZXhlbHMsIGhlaWdodFRleGVscywgY29sb3IpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW1hZ2U7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvSW1hZ2VGYWN0b3J5LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9JbWFnZUZhY3RvcnkuanMiLCJpbXBvcnQgQmFzZU1hdGhVdGlscyBmcm9tICcuL0Jhc2VNYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVVdGlscyB7XHJcblxyXG4gIHN0YXRpYyB2ZXJ0aWNlczJVVnModmVydGljZXMsIGluZGVjZXMsIGZpcnN0LCBsYXN0LCBjb252ZXJDbGIpIHtcclxuICAgIGNvbnN0IHIgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IGZpcnN0OyBpPGxhc3Q7ICsraSkge1xyXG4gICAgICBjb25zdCB2aXMgPSBbaW5kZWNlc1tpXS5hLGluZGVjZXNbaV0uYixpbmRlY2VzW2ldLmNdO1xyXG4gICAgICBmb3IobGV0IGogPSAwOyBqPHZpcy5sZW5ndGg7ICsraikge1xyXG4gICAgICAgIGlmKCFyW3Zpc1tqXV0pIHtcclxuICAgICAgICAgIHJbdmlzW2pdXSA9IGNvbnZlckNsYih2ZXJ0aWNlc1t2aXNbal1dKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbXB1dGVGYWNlVmVydGV4VXZzKGdlb21ldHJ5LCBmYWNlcykge1xyXG4gICAgY29uc3QgdXZzID0gW1xyXG4gICAgICAgICAgICAgICAgVGhyZWVVdGlscy52ZXJ0aWNlczJVVnMoZ2VvbWV0cnkudmVydGljZXMsIGdlb21ldHJ5LmZhY2VzLCAwLCBmYWNlc1swXSwgKHApPT5uZXcgVEhSRUUuVmVjdG9yMihwLngsIDEtcC56KSksXHJcbiAgICAgICAgICAgICAgICBUaHJlZVV0aWxzLnZlcnRpY2VzMlVWcyhnZW9tZXRyeS52ZXJ0aWNlcywgZ2VvbWV0cnkuZmFjZXMsIGZhY2VzWzBdLCBmYWNlc1sxXSwgKHApPT5uZXcgVEhSRUUuVmVjdG9yMigxLXAueCwgMS1wLnopKSxcclxuICAgICAgICAgICAgICAgIFRocmVlVXRpbHMudmVydGljZXMyVVZzKGdlb21ldHJ5LnZlcnRpY2VzLCBnZW9tZXRyeS5mYWNlcywgZmFjZXNbMV0sIGZhY2VzWzJdLCAocCk9Pm5ldyBUSFJFRS5WZWN0b3IyKHAueCwgcC55KSksXHJcbiAgICAgICAgICAgICAgICBUaHJlZVV0aWxzLnZlcnRpY2VzMlVWcyhnZW9tZXRyeS52ZXJ0aWNlcywgZ2VvbWV0cnkuZmFjZXMsIGZhY2VzWzJdLCBmYWNlc1szXSwgKHApPT5uZXcgVEhSRUUuVmVjdG9yMigxLXAueCwgcC55KSksXHJcbiAgICAgICAgICAgICAgICBUaHJlZVV0aWxzLnZlcnRpY2VzMlVWcyhnZW9tZXRyeS52ZXJ0aWNlcywgZ2VvbWV0cnkuZmFjZXMsIGZhY2VzWzNdLCBmYWNlc1s0XSwgKHApPT5uZXcgVEhSRUUuVmVjdG9yMihwLnosIHAueSkpLFxyXG4gICAgICAgICAgICAgICAgVGhyZWVVdGlscy52ZXJ0aWNlczJVVnMoZ2VvbWV0cnkudmVydGljZXMsIGdlb21ldHJ5LmZhY2VzLCBmYWNlc1s0XSwgZ2VvbWV0cnkuZmFjZXMubGVuZ3RoLCAocCk9Pm5ldyBUSFJFRS5WZWN0b3IyKDEtcC56LCBwLnkpKVxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgdXZzaSA9IDA7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpPGdlb21ldHJ5LmZhY2VzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIHV2c2kgKz0gZmFjZXNbdXZzaV0gPT09IGk7XHJcbiAgICAgIGNvbnN0IGYgPSBnZW9tZXRyeS5mYWNlc1tpXTtcclxuICAgICAgZi5tYXRlcmlhbEluZGV4ID0gdXZzaTtcclxuICAgICAgZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXVtpXSA9IFt1dnNbdXZzaV1bZi5hXSwgdXZzW3V2c2ldW2YuYl0sIHV2c1t1dnNpXVtmLmNdXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVNYXJrZXIocCwgYywgc2l6ZSkge1xyXG4gICAgY29uc3QgbWFya2VyID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KHNpemUpLCBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogYyB9KSk7XHJcbiAgICBtYXJrZXIucG9zaXRpb24uc2V0KHAueCxwLnkscC56KTtcclxuICAgIHJldHVybiBtYXJrZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZmluZFV2VHJpcyhnZW9tZXRyeSwgcHMsIGZpcnN0LCBsYXN0KSB7XHJcbiAgICBjb25zdCByZXMgPSBbXTtcclxuICAgIGZvcihsZXQgcCBvZiBwcykge1xyXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgZm9yKGxldCBpPWZpcnN0OyBpPGxhc3QgJiYgIWZvdW5kOyArK2kpIHtcclxuICAgICAgICBjb25zdCB0cmkgPSBnZW9tZXRyeS5mYWNlVmVydGV4VXZzWzBdW2ldO1xyXG4gICAgICAgIGlmKEJhc2VNYXRoVXRpbHMuaXNJbnNpZGVDb252UG9seSh0cmksIHApKSB7XHJcbiAgICAgICAgICByZXMucHVzaCh7XHJcbiAgICAgICAgICAgIGNvZWZzOiBCYXNlTWF0aFV0aWxzLmNvbXB1dGVJbnRlcnBDb2Vmcyh0cmksIHApLFxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYoIWZvdW5kKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQmFkIHBvaW50Jyk7XHJcbiAgICAgICAgcmVzLnB1c2godW5kZWZpbmVkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmaW5kSW50ZXJuYWxWZXJ0aWNlcyhnZW9tZXRyeSwgcHMsIGZpcnN0LCBsYXN0KSB7XHJcbiAgICBjb25zdCByZXMgPSB7fTtcclxuICAgIGZvcihsZXQgaT1maXJzdDsgaTxsYXN0OyArK2kpIHtcclxuICAgICAgY29uc3QgdHJpID0gZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXVtpXSwgZiA9IGdlb21ldHJ5LmZhY2VzW2ldLCB2cyA9IFtmLmEsIGYuYiwgZi5jXTtcclxuICAgICAgZm9yKGxldCBqPTA7IGo8dHJpLmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgaWYocmVzW3ZzW2pdXT09PXVuZGVmaW5lZCAmJiBCYXNlTWF0aFV0aWxzLmlzSW5zaWRlUG9seShwcywgdHJpW2pdKSkge1xyXG4gICAgICAgICAgcmVzW3ZzW2pdXSA9IHtcclxuICAgICAgICAgICAgcDogdHJpW2pdLFxyXG4gICAgICAgICAgICBpOiB2c1tqXSxcclxuICAgICAgICAgICAgbjogZi52ZXJ0ZXhOb3JtYWxzW2pdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocmVzKTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvVGhyZWVVdGlscy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvVGhyZWVVdGlscy5qcyIsImltcG9ydCB7cHJvcHMgYXMgIGJvb2tQcm9wc30gZnJvbSAnLi4vcHJvcHMvYm9vayc7XHJcbmltcG9ydCBCYXNlTWF0aFV0aWxzIGZyb20gJy4vQmFzZU1hdGhVdGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rUHJvcHNCdWlsZGVyIHtcclxuICBjb25zdHJ1Y3RvcihvblJlYWR5KSB7XHJcbiAgICB0aGlzLm9uUmVhZHkgPSBvblJlYWR5O1xyXG4gICAgdGhpcy5kZWZhdWx0cyA9IGJvb2tQcm9wcygpO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBjYWxjU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBjb25zdCBzY2FsZSA9IEJhc2VNYXRoVXRpbHMuY2FsY1NjYWxlKHdpZHRoLCBoZWlnaHQsIHRoaXMuZGVmYXVsdHMud2lkdGgsIHRoaXMuZGVmYXVsdHMuaGVpZ2h0KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoOiBzY2FsZSp3aWR0aCxcclxuICAgICAgaGVpZ2h0OiBzY2FsZSpoZWlnaHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjYWxjVGV4ZWxzKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGNvbnN0IHNoZWV0ID0gdGhpcy5kZWZhdWx0cy5zaGVldCwgc2NhbGUgPSBCYXNlTWF0aFV0aWxzLmNhbGNTY2FsZSh3aWR0aCwgaGVpZ2h0LCBzaGVldC53aWR0aFRleGVscywgc2hlZXQuaGVpZ2h0VGV4ZWxzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoVGV4ZWxzOiBzY2FsZSp3aWR0aCxcclxuICAgICAgaGVpZ2h0VGV4ZWxzOiBzY2FsZSpoZWlnaHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjYWxjUHJvcHMod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy5wcm9wcyA9IHtcclxuICAgICAgLi4udGhpcy5kZWZhdWx0cyxcclxuICAgICAgLi4udGhpcy5jYWxjU2l6ZSh3aWR0aCwgaGVpZ2h0KSxcclxuICAgICAgc2hlZXQ6IHtcclxuICAgICAgICAuLi50aGlzLmRlZmF1bHRzLnNoZWV0LFxyXG4gICAgICAgIC4uLnRoaXMuY2FsY1RleGVscyh3aWR0aCwgaGVpZ2h0KVxyXG4gICAgICB9LFxyXG4gICAgICBjb3Zlcjoge1xyXG4gICAgICAgIC4uLnRoaXMuZGVmYXVsdHMuY292ZXIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2U6IHtcclxuICAgICAgICAuLi50aGlzLmRlZmF1bHRzLnBhZ2UsXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjYWxjU2hlZXRzKHBhZ2VzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaGVldHMgPSBNYXRoLmNlaWwoTWF0aC5tYXgoMCwgcGFnZXMtNCkvMik7XHJcbiAgfVxyXG5cclxuICBnZXRTaGVldHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaGVldHM7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wcygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZUNhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmluZHMucGFnZUNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcmVhZHkoKSB7XHJcbiAgICBpZih0aGlzLm9uUmVhZHkpIHtcclxuICAgICAgdGhpcy5vblJlYWR5KHRoaXMuZ2V0UHJvcHMoKSwgdGhpcy5nZXRTaGVldHMoKSwgdGhpcy5nZXRQYWdlQ2FsbGJhY2soKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvQm9va1Byb3BzQnVpbGRlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvQm9va1Byb3BzQnVpbGRlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlIHtcclxuXHJcbiAgY29uc3RydWN0b3IobWF4U2l6ZT1JbmZpbml0eSwgc2l6ZW9mPUNhY2hlLmNvdW50U2l6ZW9mKSB7XHJcbiAgICB0aGlzLm9zID0gbmV3IE1hcCgpO1xyXG4gICAgdGhpcy5zaXplb2YgPSBzaXplb2Y7XHJcbiAgICB0aGlzLm1heFNpemUgPSBtYXhTaXplO1xyXG4gICAgdGhpcy5zaXplID0gMDtcclxuICB9XHJcblxyXG4gIGZvckVhY2goY2xiKSB7XHJcbiAgICB0aGlzLm9zLmZvckVhY2goKHYsIGspPT4gY2xiKFtrLHZdKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY291bnRTaXplb2YodmFsdWUpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgZnJlZVNwYWNlKCkge1xyXG4gICAgY29uc3QgYXJyID0gW107XHJcbiAgICBmb3IobGV0IHAgb2YgdGhpcy5vcykge1xyXG4gICAgICBhcnIucHVzaCh7dGltZXN0YW1wOiBwWzFdLnRpbWVzdGFtcCwga2V5OiBwWzBdfSk7XHJcbiAgICB9XHJcbiAgICBhcnIuc29ydCgoYSwgYik9PiBhLnRpbWVzdGFtcC1iLnRpbWVzdGFtcCk7XHJcbiAgICBmb3IobGV0IGk9MDsgaTxhcnIubGVuZ3RoICYmIHRoaXMuc2l6ZT4zKnRoaXMubWF4U2l6ZS80OyArK2kpIHtcclxuICAgICAgY29uc3QgayA9IGFycltpXS5rZXksIHYgPSB0aGlzLm9zLmdldChrKTtcclxuICAgICAgaWYoIXYubG9ja2VkIHx8ICF2LmxvY2tlZChrKSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSAtPSB0aGlzLnNpemVvZih2KTtcclxuICAgICAgICBpZih2LmRpc3Bvc2UpIHtcclxuICAgICAgICAgIHYuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9zLmRlbGV0ZShrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgZm9yKGxldCBwIG9mIHRoaXMub3MpIHtcclxuICAgICAgYXJyLnB1c2goe3Y6IHBbMV0sIGs6IHBbMF19KTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgbyBvZiBhcnIpIHtcclxuICAgICAgaWYoby52LmRpc3Bvc2UpIHtcclxuICAgICAgICBvLnYuZGlzcG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3MuZGVsZXRlKG8uayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVjdXJzaW9uU2l6ZW9mKHZhbHVlKSB7XHJcbiAgICBsZXQgc2l6ZSA9IDA7XHJcbiAgICBpZih2YWx1ZSkge1xyXG4gICAgICArK3NpemU7XHJcbiAgICAgIGNvbnN0IGxlbiA9IHZhbHVlLmxlbmd0aDtcclxuICAgICAgaWYobGVuPT09dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcCBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgaWYodmFsdWUuaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgc2l6ZSs9Q2FjaGUucmVjdXJzaW9uU2l6ZW9mKHZhbHVlW3BdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgc2l6ZSs9bGVuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzaXplO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZXN0YW1wKCkge1xyXG4gICAgcmV0dXJuIERhdGUubm93KCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0KGtleSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLm9zLmdldChrZXkpO1xyXG4gICAgaWYodmFsdWUpIHtcclxuICAgICAgdmFsdWUudGltZXN0YW1wID0gdGhpcy5nZXRUaW1lc3RhbXAoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1dChrZXksIHZhbHVlKSB7XHJcbiAgICB2YWx1ZS50aW1lc3RhbXAgPSB0aGlzLmdldFRpbWVzdGFtcCgpO1xyXG4gICAgdGhpcy5vcy5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICB0aGlzLnNpemUrPXRoaXMuc2l6ZW9mKHZhbHVlKTtcclxuICAgIGlmKHRoaXMuc2l6ZT50aGlzLm1heFNpemUpIHtcclxuICAgICAgdGhpcy5mcmVlU3BhY2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9DYWNoZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvQ2FjaGUuanMiLCJpbXBvcnQge1RIUkVFfSBmcm9tICcuLi9saWJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBUSFJFRS5FdmVudERpc3BhdGNoZXIge1xyXG5cclxuICBoYW5kbGVEZWZhdWx0KGlkLCBlLCBkYXRhKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGlkKyctJytlLnR5cGUrJy0nK2RhdGEpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hBc3luYyhlKSB7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT4gdGhpcy5kaXNwYXRjaEV2ZW50KGUpKTtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKSB7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9Db250cm9sbGVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Db250cm9sbGVyLmpzIiwiaW1wb3J0IHtQREZKU30gZnJvbSAnLi4vbGlicyc7XHJcblxyXG5QREZKUy53b3JrZXJTcmMgPSAod2luZG93LlBERkpTX0xPQ0FMRT8gUERGSlNfTE9DQUxFOiBHTE9CQUxfUEFUSFMpLnBkZkpzV29ya2VyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGRmIHtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3JjLCBsb2FkaW5nUHJvZ3Jlc3MpIHtcclxuICAgIHRoaXMuc3JjID0gc3JjO1xyXG4gICAgdGhpcy5oYW5kbGVyUXVldWUgPSBbXTtcclxuICAgIHRoaXMucHJvZ3Jlc0RhdGEgPSB7bG9hZGVkOiAtMSwgdG90YWw6IDF9O1xyXG4gICAgdGhpcy5sb2FkaW5nUHJvZ3Jlc3MgPSBsb2FkaW5nUHJvZ3Jlc3M7XHJcblxyXG4gICAgUERGSlMuZ2V0RG9jdW1lbnQoc3JjLCBudWxsLCBudWxsLCAoZGF0YSk9PiB7XHJcbiAgICAgIGlmKHRoaXMubG9hZGluZ1Byb2dyZXNzKSB7XHJcbiAgICAgICAgbGV0IGN1ciA9IE1hdGguZmxvb3IoMTAwKmRhdGEubG9hZGVkL2RhdGEudG90YWwpLFxyXG4gICAgICAgICAgICAgIG9sZCA9IE1hdGguZmxvb3IoMTAwKnRoaXMucHJvZ3Jlc0RhdGEubG9hZGVkL3RoaXMucHJvZ3Jlc0RhdGEudG90YWwpO1xyXG4gICAgICAgIGlmKGN1ciE9PW9sZCkge1xyXG4gICAgICAgICAgY3VyID0gaXNOYU4oY3VyKT8gMDogY3VyO1xyXG4gICAgICAgICAgY3VyID0gY3VyPjEwMD8gMTAwOiBjdXI7XHJcbiAgICAgICAgICB0aGlzLmxvYWRpbmdQcm9ncmVzcyhjdXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByb2dyZXNEYXRhID0gZGF0YTtcclxuICAgIH0pLlxyXG4gICAgICB0aGVuKChoYW5kbGVyKT0+IHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIGxldCBkb25lID0gUHJvbWlzZS5yZXNvbHZlKGhhbmRsZXIpO1xyXG4gICAgICAgIGZvcihsZXQgY2xiIG9mIHRoaXMuaGFuZGxlclF1ZXVlLnJldmVyc2UoKSkge1xyXG4gICAgICAgICAgZG9uZSA9IGRvbmUudGhlbigoaGFuZGxlcik9PiB7XHJcbiAgICAgICAgICAgIGNsYihoYW5kbGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXI7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIHRoaXMuaGFuZGxlclF1ZXVlLnNwbGljZSgwLCB0aGlzLmhhbmRsZXJRdWV1ZS5sZW5ndGgpO1xyXG4gICAgZGVsZXRlIHRoaXMuaGFuZGxlcjtcclxuICB9XHJcblxyXG4gIHNldExvYWRpbmdQcm9ncmVzc0NsYihjbGIpIHtcclxuICAgIHRoaXMubG9hZGluZ1Byb2dyZXNzID0gY2xiO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZXNOdW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVyPyB0aGlzLmhhbmRsZXIubnVtUGFnZXM6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRQYWdlU2l6ZShwYWdlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3aWR0aDogcGFnZS52aWV3WzJdLXBhZ2Uudmlld1swXSxcclxuICAgICAgaGVpZ2h0OiBwYWdlLnZpZXdbM10tcGFnZS52aWV3WzFdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0SGFuZGxlcihjbGIpIHtcclxuICAgIGlmKHRoaXMuaGFuZGxlcikge1xyXG4gICAgICBjbGIodGhpcy5oYW5kbGVyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZXJRdWV1ZS5wdXNoKGNsYik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL1BkZi5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvUGRmLmpzIiwiaW1wb3J0IHtUSFJFRX0gZnJvbSAnLi4vbGlicyc7XHJcbmltcG9ydCBzaGVldEJsb2NrIGZyb20gJy4uL21vZGVscy9zaGVldEJsb2NrJztcclxuaW1wb3J0IE1hdGhVdGlscyBmcm9tICcuL01hdGhVdGlscyc7XHJcbmltcG9ydCBUaHJlZVV0aWxzIGZyb20gJy4vVGhyZWVVdGlscyc7XHJcbmltcG9ydCBUaHJlZU1hcmt1cCBmcm9tICcuL1RocmVlTWFya3VwJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoZWV0QmxvY2sge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih2aXN1YWwsIHAsIGZpcnN0LCBsYXN0LCBhbmdsZT0wLCBzdGF0ZT0nY2xvc2VkJywgaGVpZ2h0PTApIHtcclxuICAgIHRoaXMudmlzdWFsID0gdmlzdWFsO1xyXG4gICAgdGhpcy5wID0ge1xyXG4gICAgICAuLi5wLFxyXG4gICAgICBmaXJzdCxcclxuICAgICAgbGFzdFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb3BzID0gdGhpcy5nZXRQcm9wcygpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRlZFBvaW50cyA9IHRoaXMubG9hZFBvaW50cygpO1xyXG4gICAgT2JqZWN0LmtleXMobG9hZGVkUG9pbnRzKS5tYXAoKGspPT4ge1xyXG4gICAgICB0aGlzW2tdID0gbG9hZGVkUG9pbnRzW2tdW3Byb3BzLnNoYXBlXSB8fCBsb2FkZWRQb2ludHNba11bMF07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnBTcGxpbmUgPSBuZXcgVEhSRUUuU3BsaW5lKFtdKTtcclxuICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuaW50ZXJwb2xhdGlvblBvaW50cy54WzBdLmxlbmd0aDsgKytpKSB7XHJcbiAgICBcdHRoaXMucFNwbGluZS5wb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlTcGxpbmUgPSBuZXcgVEhSRUUuU3BsaW5lKFtdKTtcclxuICAgIGZvcihsZXQgaT0wOyBpPHNoZWV0QmxvY2sucmVzWDsgKytpKSB7XHJcbiAgICBcdHRoaXMuaVNwbGluZS5wb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFTcGxpbmVzID0gW107XHJcblxyXG4gICAgLy90aGlzLnRocmVlID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG4gICAgdGhpcy5nZW9tZXRyeSA9IHNoZWV0QmxvY2suZ2VvbWV0cnkuY2xvbmUoKTtcclxuXHJcbiAgICB0aGlzLnAuc2lkZUZhY2VzID0gW3tcclxuICAgICAgICBmaXJzdDogMCxcclxuICAgICAgICBsYXN0OiBzaGVldEJsb2NrLmZhY2VzWzBdXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBmaXJzdDogc2hlZXRCbG9jay5mYWNlc1swXSxcclxuICAgICAgICBsYXN0OiBzaGVldEJsb2NrLmZhY2VzWzFdXHJcbiAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5zaWRlVGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcbiAgICB0aGlzLnNpZGVUZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcbiAgICB0aGlzLnNpZGVUZXh0dXJlLnJlcGVhdC5zZXQoMCwgbGFzdC1maXJzdCk7XHJcbiAgICB0aGlzLnNpZGVUZXh0dXJlLmltYWdlID0gcHJvcHMuc2lkZVRleHR1cmU7XHJcbiAgICB0aGlzLnNpZGVUZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLm1hdGVyaWFscyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe21hcDogdGhpcy5zaWRlVGV4dHVyZX0pLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7bWFwOiB0aGlzLnNpZGVUZXh0dXJlfSksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHttYXA6IHRoaXMuc2lkZVRleHR1cmV9KSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe21hcDogdGhpcy5zaWRlVGV4dHVyZX0pXHJcbiAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgdGhpcy5wLnNldFRleHR1cmUodGhpcy5tYXRlcmlhbHNbMF0sIDIqZmlyc3QpO1xyXG4gICAgdGhpcy5wLnNldFRleHR1cmUodGhpcy5tYXRlcmlhbHNbMV0sIDIqbGFzdC0xKTtcclxuXHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCBuZXcgVEhSRUUuTWVzaEZhY2VNYXRlcmlhbCh0aGlzLm1hdGVyaWFscykpO1xyXG4gICAgdGhpcy5tZXNoLmNhc3RTaGFkb3cgPSBmYWxzZTtcclxuICAgIHRoaXMubWVzaC5yZWNlaXZlU2hhZG93ID0gZmFsc2U7XHJcbiAgICAvLyB0aGlzLm1lc2guZnJ1c3R1bUN1bGxlZCA9IHRydWU7XHJcblxyXG4gICAgLy90aGlzLnRocmVlLmFkZCh0aGlzLm1lc2gpO1xyXG4gICAgdGhpcy50aHJlZSA9IHRoaXMubWVzaDtcclxuICAgIHRoaXMudGhyZWUudXNlckRhdGEuc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5tYXJrZXJzID0gW107XHJcbiAgICBpZih0aGlzLnAubWFya2VyLnVzZSkge1xyXG4gICAgICBmb3IobGV0IGk9MCwgbD10aGlzLmdlb21ldHJ5LnZlcnRpY2VzLmxlbmd0aDtpPGw7KytpKSB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gVGhyZWVVdGlscy5jcmVhdGVNYXJrZXIodGhpcy5nZW9tZXRyeS52ZXJ0aWNlc1tpXSwgaTxsLzI/MHhGRjAwMDA6MHgwMEZGMDAsIHRoaXMucC5tYXJrZXIuc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzLnB1c2goe1xyXG4gICAgICAgICAgbWFya2VyLFxyXG4gICAgICAgICAgdmVydGV4OiBpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50aHJlZS5hZGQobWFya2VyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29ybmVyID0ge1xyXG4gICAgICB1c2U6IHRydWUsXHJcbiAgICAgIGhlaWdodDogMCxcclxuICAgICAgbWF4RGlzdGFuY2U6IDAsXHJcbiAgICAgIHBvaW50czogW10sXHJcbiAgICAgIE9aOiBuZXcgVEhSRUUuVmVjdG9yMygwLDAsMSksXHJcbiAgICAgIGF4aXM6IG5ldyBUSFJFRS5WZWN0b3IzKClcclxuICAgIH07XHJcbiAgICB0aGlzLnNldCgwLCAnY2xvc2VkJywgaGVpZ2h0LCBmaXJzdCwgbGFzdCk7IC8vIGNhbGN1bGF0ZSBjb3JuZXIgcG9pbnRzXHJcblxyXG4gICAgdGhpcy5zZXQoYW5nbGUsIHN0YXRlLCBoZWlnaHQsIGZpcnN0LCBsYXN0KTsgLy8gaW5pdCBwb3NpdGlvblxyXG5cclxuICAgIC8vIGlmKCFTaGVldEJsb2NrLm1hcmt1cCkge1xyXG4gICAgLy8gICBTaGVldEJsb2NrLm1hcmt1cD10cnVlO1xyXG4gICAgLy8gICB0aGlzLm1hcmt1cCA9IG5ldyBUaHJlZU1hcmt1cCh0aGlzLCAwLCBbe1xyXG4gICAgLy8gICAgIHg6IDAsXHJcbiAgICAvLyAgICAgeTogMCxcclxuICAgIC8vICAgfSwge1xyXG4gICAgLy8gICAgIHg6IDAuNSxcclxuICAgIC8vICAgICB5OiAxXHJcbiAgICAvLyAgIH0sIHtcclxuICAgIC8vICAgICB4OiAxLFxyXG4gICAgLy8gICAgIHk6IDBcclxuICAgIC8vICAgfV0ubWFwKChwKT0+bmV3IFRIUkVFLlZlY3RvcjIocC54LCBwLnkpKSwge30pO1xyXG4gICAgLy8gfVxyXG5cclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKSB7XHJcbiAgICBmb3IobGV0IG0gb2YgdGhpcy5tYXRlcmlhbHMpIHtcclxuICAgICAgaWYobS5tYXApIHtcclxuICAgICAgICBtLm1hcCA9IG51bGw7XHJcbiAgICAgICAgbS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgbS5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUgdGhpcy5tYXRlcmlhbHM7XHJcbiAgICB0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIGdldFNpemUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wLmxhc3QtdGhpcy5wLmZpcnN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcHMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi50aGlzLnAucGFnZSxcclxuICAgICAgc2hlZXRzOiB0aGlzLnAuc2hlZXRzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0SW50ZXJwb2xhdGlvblBvaW50cyhpbmRzLCBtb2QpIHtcclxuICAgIGNvbnN0IHBzID0ge3g6IFtdLCB5OiBbXX0sIEsgPSB0aGlzLmdldFByb3BzKCkud2F2ZTtcclxuICAgIGZvcihsZXQgaSBvZiBpbmRzKSB7XHJcbiAgICAgIHBzLngucHVzaChbLi4udGhpcy5pbnRlcnBvbGF0aW9uUG9pbnRzLnhbaV1dKTtcclxuICAgICAgcHMueS5wdXNoKH5tb2QuaW5kZXhPZihpKT8gdGhpcy5pbnRlcnBvbGF0aW9uUG9pbnRzLnlbaV0ubWFwKChuKT0+IEsqbik6IFsuLi50aGlzLmludGVycG9sYXRpb25Qb2ludHMueVtpXV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBzO1xyXG4gIH1cclxuXHJcbiAgc2V0KGFuZ2xlLCBzdGF0ZT10aGlzLnN0YXRlLCBoZWlnaHQ9dGhpcy5jb3JuZXIuaGVpZ2h0LCBmaXJzdD10aGlzLnAuZmlyc3QsIGxhc3Q9dGhpcy5wLmxhc3QpIHtcclxuICAgIGNvbnN0IFBJID0gTWF0aC5QSTtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIGxldCBjbG9zZWRBbmdsZSwgYmluZGVyVHVybjtcclxuICAgIGlmKHR5cGVvZiBhbmdsZT09PSdvYmplY3QnKSB7XHJcbiAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZS5vcGVuZWRBbmdsZTtcclxuICAgICAgY2xvc2VkQW5nbGUgPSBhbmdsZS5jbG9zZWRBbmdsZTtcclxuICAgICAgYmluZGVyVHVybiA9IGFuZ2xlLmJpbmRlclR1cm4+UEkvMj9QSS1hbmdsZS5iaW5kZXJUdXJuOmFuZ2xlLmJpbmRlclR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb3JuZXIuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgaWYodGhpcy5wLmZpcnN0IT09Zmlyc3QgfHwgdGhpcy5wLmxhc3QhPT1sYXN0KSB7XHJcbiAgICAgIHRoaXMuc2lkZVRleHR1cmUucmVwZWF0LnNldCgwLCBsYXN0LWZpcnN0KTtcclxuICAgICAgdGhpcy5zaWRlVGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMucC5maXJzdCE9PWZpcnN0KSB7XHJcbiAgICAgICAgdGhpcy5wLnNldFRleHR1cmUodGhpcy5tYXRlcmlhbHNbMF0sIDIqZmlyc3QpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMucC5sYXN0IT09bGFzdCkge1xyXG4gICAgICAgIHRoaXMucC5zZXRUZXh0dXJlKHRoaXMubWF0ZXJpYWxzWzFdLCAyKmxhc3QtMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucC5maXJzdCA9IGZpcnN0O1xyXG4gICAgdGhpcy5wLmxhc3QgPSBsYXN0O1xyXG4gICAgbGV0IHBvaW50cztcclxuICAgIGNvbnN0IHByb3BzID0gdGhpcy5nZXRQcm9wcygpO1xyXG4gICAgaWYodGhpcy5zdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcclxuICAgICAgcG9pbnRzID0gdGhpcy5nZXRJbnRlcnBvbGF0aW9uUG9pbnRzKHRoaXMuY2xvc2VkSW50ZXJwb2xhdGlvbkluZGVjZXMsIHRoaXMuY2xvc2VkSW50ZXJwb2xhdGlvbkluZGVjZXMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLnN0YXRlID09PSAnb3BlbmVkJykge1xyXG4gICAgICBpZihjbG9zZWRBbmdsZSE9PXVuZGVmaW5lZCAmJiBNYXRoLmFicyhjbG9zZWRBbmdsZS1QSS8yKT4xZS0yKSB7XHJcbiAgICAgICAgcG9pbnRzID0gdGhpcy5nZXRJbnRlcnBvbGF0aW9uUG9pbnRzKHRoaXMuZmxhdEludGVycG9sYXRpb25JbmRlY2VzLCBbXSk7XHJcbiAgICAgICAgY29uc3QgcHMgPSB0aGlzLmdldFBvaW50c0F0QW5nbGUodGhpcy5nZXRJbnRlcnBvbGF0aW9uUG9pbnRzKHRoaXMuY2xvc2VkSW50ZXJwb2xhdGlvbkluZGVjZXMsIHRoaXMuY2xvc2VkSW50ZXJwb2xhdGlvbkluZGVjZXMpLCBjbG9zZWRBbmdsZT5QSS8yP1BJLWNsb3NlZEFuZ2xlOmNsb3NlZEFuZ2xlKTtcclxuICAgICAgICBwb2ludHMueCA9IFtwcy54LC4uLnBvaW50cy54XTtcclxuICAgICAgICBwb2ludHMueSA9IFtwcy55LC4uLnBvaW50cy55XTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcG9pbnRzID0gdGhpcy5nZXRJbnRlcnBvbGF0aW9uUG9pbnRzKHRoaXMub3BlbmVkSW50ZXJwb2xhdGlvbkluZGVjZXMsIHRoaXMuY2xvc2VkSW50ZXJwb2xhdGlvbkluZGVjZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgaGwsIGhyLCBvZmZzZXQgPSAwLjUqcHJvcHMuc2hlZXRzKnByb3BzLmRlcHRoO1xyXG4gICAgaWYodGhpcy5zdGF0ZT09PSdjbG9zZWQnKSB7XHJcbiAgICAgIG9mZnNldCAtPSA3ZS02KnRoaXMucC5zY2FsZTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuYW5nbGU8PVBJLzIpIHtcclxuICAgICAgaGwgPSAocHJvcHMuc2hlZXRzLWZpcnN0KSpwcm9wcy5kZXB0aDtcclxuICAgICAgaHIgPSAocHJvcHMuc2hlZXRzLWxhc3QpKnByb3BzLmRlcHRoO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGhsID0gZmlyc3QqcHJvcHMuZGVwdGg7XHJcbiAgICAgIGhyID0gbGFzdCpwcm9wcy5kZXB0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbkFuZ2xlID0gdGhpcy5hbmdsZT5QSS8yP1BJLXRoaXMuYW5nbGU6dGhpcy5hbmdsZSwgaEFuZ2xlID0gdGhpcy5zdGF0ZSA9PT0gJ2Nsb3NlZCc/IGluQW5nbGU6IChiaW5kZXJUdXJuPT09dW5kZWZpbmVkPyBQSS8yOiBiaW5kZXJUdXJuKTtcclxuICAgIGNvbnN0IFtsZWZ0LCByaWdodF0gPSB0aGlzLmdldFBvaW50c0F0QW5nbGVBbmRIcyhwb2ludHMsIGluQW5nbGUsIGhBbmdsZSwgW2hsL3Byb3BzLndpZHRoLCBoci9wcm9wcy53aWR0aF0pO1xyXG4gICAgaWYodGhpcy5hbmdsZT5QSS8yKSB7XHJcbiAgICAgIHRoaXMuaW52ZXJzZShsZWZ0KTtcclxuICAgICAgdGhpcy5pbnZlcnNlKHJpZ2h0KTtcclxuICAgICAgb2Zmc2V0ID0gLW9mZnNldDtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0UG9pbnRzKGxlZnQsIHJpZ2h0LCBvZmZzZXQpO1xyXG4gIH1cclxuXHJcbiAgc2V0UG9pbnRzKGxlZnQsIHJpZ2h0LCBvZmZzZXQpIHtcclxuICAgIGNvbnN0IHAgPSB0aGlzLmdldFByb3BzKCk7XHJcbiAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgY29uc3QgeXMgPSBbcmlnaHQsIGxlZnRdO1xyXG4gICAgZm9yKGxldCB5ID0gMDsgeTxzaGVldEJsb2NrLnJlc1k7ICsreSkge1xyXG4gICAgICBmb3IobGV0IHogPSAwOyB6PHNoZWV0QmxvY2sucmVzWjsgKyt6KSB7XHJcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeDxzaGVldEJsb2NrLnJlc1g7ICsreCkge1xyXG4gICAgICAgICAgdGhpcy5nZW9tZXRyeS52ZXJ0aWNlc1tpKytdLnNldChcclxuICAgICAgICAgICAgeXNbeV0ueFt4XSpwLndpZHRoK29mZnNldCxcclxuICAgICAgICAgICAgeXNbeV0ueVt4XSpwLndpZHRoLFxyXG4gICAgICAgICAgICB6KnAuaGVpZ2h0LyhzaGVldEJsb2NrLnJlc1otMSktMC41KnAuaGVpZ2h0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoaSE9PXRoaXMuZ2VvbWV0cnkudmVydGljZXMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnNvbGUud2Fybignc2V0UG9pbnRzOiBiYWQgbWFwcGluZyEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmNvcm5lci51c2UgJiYgIXRoaXMuY29ybmVyLnBvaW50cy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgcGxhbmUgPSBuZXcgVEhSRUUuUGxhbmUoKSwgbm9ybWFsID0gcGxhbmUubm9ybWFsLCBwbGFuZU9mZnNldCA9ICgxLXRoaXMuZ2V0UHJvcHMoKS5mbGV4aWJsZUNvcm5lcikqTWF0aC5taW4ocC53aWR0aCwgcC5oZWlnaHQpLCBwcm9qID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICAgICAgcGxhbmUuc2V0RnJvbU5vcm1hbEFuZENvcGxhbmFyUG9pbnQobmV3IFRIUkVFLlZlY3RvcjMoLTEsMCwtMSkubm9ybWFsaXplKCksIG5ldyBUSFJFRS5WZWN0b3IzKHBsYW5lT2Zmc2V0K29mZnNldCwgMCwgMC41KnAuaGVpZ2h0KSk7XHJcbiAgICAgIGZvcihsZXQgaT0wLCBsPXRoaXMuZ2VvbWV0cnkudmVydGljZXMubGVuZ3RoO2k8bDsrK2kpIHtcclxuICAgICAgICBwbGFuZS5wcm9qZWN0UG9pbnQodGhpcy5nZW9tZXRyeS52ZXJ0aWNlc1tpXSwgcHJvaik7XHJcbiAgICAgICAgcHJvai5zdWIodGhpcy5nZW9tZXRyeS52ZXJ0aWNlc1tpXSk7XHJcbiAgICAgICAgaWYocHJvai54Km5vcm1hbC54K3Byb2oueSpub3JtYWwueStwcm9qLnoqbm9ybWFsLno+MCkge1xyXG4gICAgICAgICAgY29uc3QgZCA9IHByb2oubGVuZ3RoKCkvcGxhbmVPZmZzZXQ7XHJcbiAgICAgICAgICB0aGlzLmNvcm5lci5tYXhEaXN0YW5jZSA9IE1hdGgubWF4KHRoaXMuY29ybmVyLm1heERpc3RhbmNlLCBkKTtcclxuICAgICAgICAgIHRoaXMuY29ybmVyLnBvaW50cy5wdXNoKHt2ZXJ0ZXg6IGksIGRpc3RhbmNlOiBkfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5jb3JuZXIudXNlICYmIE1hdGguYWJzKHRoaXMuY29ybmVyLmhlaWdodCk+MWUtMykge1xyXG4gICAgICBjb25zdCBkMkFuZ2xlID0gKGQpPT4gcC5jb3JuZXJEZXZpYXRpb24qdGhpcy5jb3JuZXIuaGVpZ2h0LygxK01hdGguZXhwKC1wLmJlbmRpbmcqKGQtMC41KnRoaXMuY29ybmVyLm1heERpc3RhbmNlKSkpO1xyXG4gICAgICB0aGlzLmNvcm5lci5heGlzLnNldCgtMSwwLDEpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICB0aGlzLmNvcm5lci5heGlzLmFwcGx5QXhpc0FuZ2xlKHRoaXMuY29ybmVyLk9aLCB0aGlzLmFuZ2xlKTtcclxuICAgICAgZm9yKGxldCBwb2ludCBvZiB0aGlzLmNvcm5lci5wb2ludHMpIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LnZlcnRpY2VzW3BvaW50LnZlcnRleF0uYXBwbHlBeGlzQW5nbGUodGhpcy5jb3JuZXIuYXhpcywgZDJBbmdsZShwb2ludC5kaXN0YW5jZSkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IG0gb2YgdGhpcy5tYXJrZXJzKSB7XHJcbiAgICAgIG0ubWFya2VyLnBvc2l0aW9uLmNvcHkodGhpcy5nZW9tZXRyeS52ZXJ0aWNlc1ttLnZlcnRleF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2VvbWV0cnkuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcclxuICAgIC8vdGhpcy5nZW9tZXRyeS5jb21wdXRlRmFjZU5vcm1hbHMoKTtcclxuICAgIHRoaXMuZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XHJcbiAgICAvL3RoaXMuZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nQm94KCk7XHJcbiAgICB0aGlzLmdlb21ldHJ5LnZlcnRpY2VzTmVlZFVwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgaWYodGhpcy5tYXJrdXApIHtcclxuICAgICAgdGhpcy5tYXJrdXAuY29tcHV0ZVZlcnRpY2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnZlcnNlKHBzKSB7XHJcbiAgICBmb3IobGV0IGkgPSAwO2k8cHMueC5sZW5ndGg7ICsraSkge1xyXG4gICAgICBwcy54W2ldPS1wcy54W2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9pbnRzQXRIcyhwcywgYW5nbGUsIGhzKSB7XHJcbiAgICBjb25zdCBOID0gMTAwMDtcclxuICAgIE1hdGhVdGlscy5zZXRTcGxpbmVQb2ludHModGhpcy5wU3BsaW5lLCBwcyk7XHJcbiAgICBsZXQgYmwgPSBNYXRoVXRpbHMuc3BsaXRTcGxpbmUodGhpcy5wU3BsaW5lLCBOKSwgcj1bXTtcclxuICAgIHtcclxuICAgICAgY29uc3QgcDEgPSB7Li4udGhpcy5wU3BsaW5lLmdldFBvaW50KChOLTEpL04pfSwgcDIgPSB7Li4udGhpcy5wU3BsaW5lLmdldFBvaW50KDEpfSxcclxuICAgICAgICBkcCA9IHt4OiBwMi54LXAxLngsIHk6IHAyLnktcDEueX0sIGxuID0gTWF0aC5zcXJ0KGRwLngqZHAueCtkcC55KmRwLnkpLFxyXG4gICAgICAgIHNwID0gdGhpcy5wU3BsaW5lLnBvaW50c1t0aGlzLnBTcGxpbmUucG9pbnRzLmxlbmd0aC0xXTtcclxuICAgICAgc3Auc2V0KHNwLngrMC4xKmRwLngvbG4sIHNwLnkrMC4xKmRwLnkvbG4sIDApO1xyXG4gICAgICBibCA9IE1hdGhVdGlscy5zcGxpdFNwbGluZSh0aGlzLnBTcGxpbmUsIE4pO1xyXG4gICAgfVxyXG4gICAgYmwubHMucHVzaCgxZTcpO1xyXG4gICAgTWF0aFV0aWxzLm1hcGwyTChibC5scywgYmwubGVuLCBzaGVldEJsb2NrLnJlc1gsIChpKT0+IHtcclxuICAgICAgZm9yKGxldCBqPTA7IGo8aHMubGVuZ3RoOyArK2opIHtcclxuICAgICAgICBpZighaSkge1xyXG4gICAgICAgICAgcltqXSA9IHt4OiBbLWhzW2pdKk1hdGguc2luKGFuZ2xlKV0sIHk6IFtoc1tqXSpNYXRoLmNvcyhhbmdsZSldfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBwMCA9IHsuLi50aGlzLnBTcGxpbmUuZ2V0UG9pbnQoKGktMSkvTil9LFxyXG4gICAgICAgICAgICAgICAgcDEgPSB0aGlzLnBTcGxpbmUuZ2V0UG9pbnQoaS9OKSxcclxuICAgICAgICAgICAgICAgIHg9LShwMS55LXAwLnkpLCB5PShwMS54LXAwLngpLCBsPU1hdGguc3FydCh4KngreSp5KTtcclxuICAgICAgICAgIHJbal0ueC5wdXNoKHAxLngreC9sKmhzW2pdKTtcclxuICAgICAgICAgIHJbal0ueS5wdXNoKHAxLnkreS9sKmhzW2pdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5wcz1bXTtcclxuICAgIGZvcihsZXQgaj0wOyBqPGhzLmxlbmd0aDsgKytqKSB7XHJcbiAgICAgIG5wc1tqXT17eDpbXSx5OltdfTtcclxuICAgICAgTWF0aFV0aWxzLnNldFNwbGluZVBvaW50cyh0aGlzLmlTcGxpbmUsIHJbal0pO1xyXG4gICAgICBjb25zdCBsID0gTWF0aFV0aWxzLnNwbGl0U3BsaW5lKHRoaXMuaVNwbGluZSwgTik7XHJcbiAgICAgIGwubHMucHVzaCgxZTcpO1xyXG4gICAgICBNYXRoVXRpbHMubWFwbDJMKGwubHMsIDEsIHNoZWV0QmxvY2sucmVzWCwgKGkpPT4ge1xyXG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLmlTcGxpbmUuZ2V0UG9pbnQoaS9OKTtcclxuICAgICAgICBucHNbal0ueC5wdXNoKHAueCk7XHJcbiAgICAgICAgbnBzW2pdLnkucHVzaChwLnkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBucHM7XHJcbiAgfVxyXG5cclxuICBnZXRQb2ludHNBdEFuZ2xlQW5kSHMocG9pbnRzLCBhbmdsZSwgaEFuZ2xlLCBocykge1xyXG4gICAgY29uc3QgcHMgPSB0aGlzLmdldFBvaW50c0F0QW5nbGUocG9pbnRzLCBhbmdsZSk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQb2ludHNBdEhzKHBzLCBoQW5nbGUsIGhzKTtcclxuICB9XHJcblxyXG4gIGdldFBvaW50c0F0QW5nbGUocG9pbnRzLCBhbmdsZSkge1xyXG4gICAgY29uc3QgcHM9e3g6IFtdLCB5OltdfSwgYW5nbGVzPVtdO1xyXG4gICAgYW5nbGUvPU1hdGguUEkvMjtcclxuICAgIGZvcihsZXQgaiA9IDA7IGo8cG9pbnRzLngubGVuZ3RoOyArK2opIHtcclxuICAgICAgYW5nbGVzLnB1c2goai8ocG9pbnRzLngubGVuZ3RoLTEpKTtcclxuICAgIH1cclxuICAgIGZvcihsZXQgaSA9IDA7IGk8cG9pbnRzLnhbMF0ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgY29uc3QgeHBzID0gW10sIHlwcyA9IFtdO1xyXG4gICAgICBmb3IobGV0IGogPSAwOyBqPHBvaW50cy54Lmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgeHBzLnB1c2gocG9pbnRzLnhbal1baV0pO1xyXG4gICAgICAgIHlwcy5wdXNoKHBvaW50cy55W2pdW2ldKTtcclxuICAgICAgfVxyXG4gICAgICBwcy54LnB1c2godGhpcy5pbnRlcnBvbGF0ZShhbmdsZXMseHBzLGFuZ2xlKSk7XHJcbiAgICAgIHBzLnkucHVzaCh0aGlzLmludGVycG9sYXRlKGFuZ2xlcyx5cHMsYW5nbGUpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcztcclxuICB9XHJcblxyXG4gIGludGVycG9sYXRlKHgseSx4aSkge1xyXG4gICAgaWYoIXRoaXMuYVNwbGluZXNbeC5sZW5ndGhdKSB7XHJcbiAgICAgIHRoaXMuYVNwbGluZXNbeC5sZW5ndGhdID0gbmV3IFRIUkVFLlNwbGluZShbXSk7XHJcbiAgICAgIGNvbnN0IHBzID0gdGhpcy5hU3BsaW5lc1t4Lmxlbmd0aF0ucG9pbnRzO1xyXG4gICAgICBmb3IobGV0IGk9MDtpPHgubGVuZ3RoOysraSkge1xyXG4gICAgICAgIHBzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHNwbGluZSA9IHRoaXMuYVNwbGluZXNbeC5sZW5ndGhdO1xyXG4gICAgZm9yKGxldCBpPTA7aTx4Lmxlbmd0aDsrK2kpIHtcclxuICAgICAgc3BsaW5lLnBvaW50c1tpXS5zZXQoeFtpXSwgeVtpXSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNwbGluZS5nZXRQb2ludCh4aSkueTtcclxuICB9XHJcblxyXG4gIGxvYWRQb2ludHMoKSB7XHJcbiAgICBjb25zdCB4PVtdLHk9W107XHJcbiAgICBmb3IobGV0IHIgb2YgWzAsIDAuMjg3NywgMC42MzQ3LCAwLjgxNzQsIDEuMDAwMF0pIHtcclxuICAgICAgeC5wdXNoKHIqTWF0aC5jb3MoMC45Kk1hdGguUEkvNCkpO1xyXG4gICAgICB5LnB1c2gocipNYXRoLnNpbigwLjkqTWF0aC5QSS80KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcGVuZWRJbnRlcnBvbGF0aW9uSW5kZWNlcyA9IFtcclxuICAgICAgWzIsMyw0XSxcclxuICAgICAgWzIsMyw0LDUsNl1cclxuICAgIF0sXHJcbiAgICBjbG9zZWRJbnRlcnBvbGF0aW9uSW5kZWNlcyA9IFtcclxuICAgICAgWzAsMSwyXSxcclxuICAgICAgWzAsMSwyXVxyXG4gICAgXSxcclxuICAgIGZsYXRJbnRlcnBvbGF0aW9uSW5kZWNlcyA9IFtcclxuICAgICAgWzUsNF0sXHJcbiAgICAgIFs3LDZdXHJcbiAgICBdLFxyXG4gICAgaW50ZXJwb2xhdGlvblBvaW50cyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIHg6IFtcclxuICAgICAgICAgIFswLDAuMjg3NywwLjYzNDcsMC44MTc0LDEuMDAwMF0sXHJcbiAgICAgICAgICBbMC4wMDAsMC4yODYsMC42MzIsMC44MTUsMC45OTddLFxyXG4gICAgICAgICAgWzAuMDAwLDAuMjc5LDAuNjIzLDAuODA2LDAuOTg4XSxcclxuICAgICAgICAgIFswLjAwMCwwLjEyNiwwLjQxMSwwLjU5MywwLjc3NF0sXHJcbiAgICAgICAgICBbMCwwLDAsMCwwXSxcclxuICAgICAgICAgIHhcclxuICAgICAgICBdLFxyXG4gICAgICAgIHk6IFtcclxuICAgICAgICAgIFswLDAsMCwwLDBdLFxyXG4gICAgICAgICAgWzAuMDAwLDAuMDMwLDAuMDEwLDAuMDAyLDAuMDAwXSxcclxuICAgICAgICAgIFswLjAwMCwwLjA2MCwwLjAxNywwLjAwNCwwLjAwMF0sXHJcbiAgICAgICAgICBbMC4wMDAsMC4yNTksMC40NDAsMC40NDYsMC40MjldLFxyXG4gICAgICAgICAgWzAsIDAuMjg3NywgMC42MzQ3LCAwLjgxNzQsIDEuMDAwMF0sXHJcbiAgICAgICAgICB5XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgeDogW1xyXG4gICAgICAgICAgWzAsMC4yODc3LDAuNjM0NywwLjgxNzQsMS4wMDAwXSxcclxuICAgICAgICAgIFswLjAwMCwwLjI4NiwwLjYzMiwwLjgxNSwwLjk5N10sXHJcbiAgICAgICAgICBbMC4wMDAsMC4yNzksMC42MjMsMC44MDYsMC45ODhdLFxyXG4gICAgICAgICAgWzAuMDAwLDAuMjMzLDAuNTYzLDAuNzQ2LDAuOTI3XSxcclxuICAgICAgICAgIFswLjAwMCwwLjE0NCwwLjQzMywwLjYxMywwLjc5Nl0sXHJcbiAgICAgICAgICBbMC4wMDAsMC4wNzAsMC4yODgsMC40NTUsMC42MjZdLFxyXG4gICAgICAgICAgWzAsMCwwLDAsMF0sXHJcbiAgICAgICAgICB4XHJcbiAgICAgICAgXSxcclxuICAgICAgICB5OiBbXHJcbiAgICAgICAgICBbMCwwLDAsMCwwXSxcclxuICAgICAgICAgIFswLjAwMCwwLjAzMCwwLjAxMCwwLjAwMiwwLjAwMF0sXHJcbiAgICAgICAgICBbMC4wMDAsMC4wNjAsMC4wMTcsMC4wMDQsMC4wMDBdLFxyXG4gICAgICAgICAgWzAuMDAwLDAuMTY4LDAuMjY5LDAuMjcwLDAuMjU1XSxcclxuICAgICAgICAgIFswLjAwMCwwLjI0NSwwLjQzNSwwLjQ1OCwwLjQ2MF0sXHJcbiAgICAgICAgICBbMC4wMDAsMC4yNzgsMC41NDQsMC42MTQsMC42NzNdLFxyXG4gICAgICAgICAgWzAsIDAuMjg3NywgMC42MzQ3LCAwLjgxNzQsIDEuMDAwMF0sXHJcbiAgICAgICAgICB5XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGludGVycG9sYXRpb25Qb2ludHMsXHJcbiAgICAgIG9wZW5lZEludGVycG9sYXRpb25JbmRlY2VzLFxyXG4gICAgICBjbG9zZWRJbnRlcnBvbGF0aW9uSW5kZWNlcyxcclxuICAgICAgZmxhdEludGVycG9sYXRpb25JbmRlY2VzXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL1NoZWV0QmxvY2suanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL1NoZWV0QmxvY2suanMiLCJpbXBvcnQgRXZlbnRDb252ZXJ0ZXIgZnJvbSAnLi9FdmVudENvbnZlcnRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21FdmVudENvbnZlcnRlciBleHRlbmRzIEV2ZW50Q29udmVydGVyIHtcclxuXHJcbiAgLy8gY3VzdG9tXHJcbiAgLy8gdGVzdEludGVyc2VjdGlvbihlLCBkYXRhKTtcclxuICAvLyBjdXN0b20ub2JqZWN0XHJcbiAgLy8gdGVzdChvYmplY3QpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih3bmQsIGRvYywgY3VzdG9tVGVzdD0oKT0+IGZhbHNlLCBlRG9jKSB7XHJcbiAgICBzdXBlcih3bmQsIGRvYyk7XHJcblxyXG4gICAgdGhpcy5lRG9jID0gZURvYztcclxuICAgIHRoaXMuY3VzdG9tVGVzdCA9IGN1c3RvbVRlc3Q7XHJcbiAgICB0aGlzLmN1c3RvbXMgPSBbXTtcclxuICB9XHJcblxyXG4gIHRlc3Qob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgcmV0dXJuIG9iamVjdDEgJiYgb2JqZWN0Mj8gdGhpcy5jdXN0b21UZXN0KG9iamVjdDEsIG9iamVjdDIpOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldENhbGxiYWNrKG9iamVjdCkge1xyXG4gICAgcmV0dXJuIG9iamVjdC50YXJnZXQuY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBhZGRDdXN0b20oY3VzdG9tKSB7XHJcbiAgICB0aGlzLmN1c3RvbXMucHVzaChjdXN0b20pO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2JqZWN0KGUsIGRhdGEpIHtcclxuICAgIGxldCBvYmplY3Q7XHJcbiAgICBpZihkYXRhLmRvYz09PXRoaXMuZURvYykge1xyXG4gICAgICBmb3IobGV0IGN1c3RvbSBvZiB0aGlzLmN1c3RvbXMpIHtcclxuICAgICAgICBvYmplY3QgPSBjdXN0b20udGVzdEludGVyc2VjdGlvbihlLCBkYXRhKTtcclxuICAgICAgICBpZihvYmplY3QpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvY29udHJvbHMvQ3VzdG9tRXZlbnRDb252ZXJ0ZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL2NvbnRyb2xzL0N1c3RvbUV2ZW50Q29udmVydGVyLmpzIiwiaW1wb3J0IHskfSBmcm9tICcuLi8uLi9saWJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50Q29udmVydGVyIHtcclxuXHJcbiAgLy8gdmlydHVhbHNcclxuICAvLyBnZXRPYmplY3QoZSwgZGF0YSk7XHJcbiAgLy8gZ2V0Q2FsbGJhY2sob2JqZWN0KTtcclxuICAvLyB0ZXN0KG9iamVjdDEsIG9iamVjdDEpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih3bmQsIGRvYykge1xyXG4gICAgdGhpcy53bmQgPSB3bmQ7XHJcbiAgICB0aGlzLmRvYyA9IGRvYztcclxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRFbmFibGUodmwpIHtcclxuICAgIGlmKCF2bCkge1xyXG4gICAgICBpZih0aGlzLmNhcE9iamVjdCkge1xyXG4gICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY2FwT2JqZWN0LCAkLkV2ZW50KCdtb3VzZXVwJyksICdtb3VzZXVwJyk7XHJcbiAgICAgICAgdGhpcy5jYXBPYmplY3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5ob3ZPYmplY3QpIHtcclxuICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmhvdk9iamVjdCwgJC5FdmVudCgnbW91c2VvdXQnKSwgJ21vdXNlb3V0Jyk7XHJcbiAgICAgICAgdGhpcy5ob3ZPYmplY3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZW5hYmxlZCA9IHZsO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FsbGJhY2sob2JqZWN0KSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgbm90aWZ5KG9iamVjdCwgZSwgdHlwZSkge1xyXG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLmdldENhbGxiYWNrKG9iamVjdCk7XHJcbiAgICBpZihjYWxsYmFjaykge1xyXG4gICAgICBjb25zdCBwcm9wcyA9IHtcclxuICAgICAgICAuLi5lLFxyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgdmlldzogdGhpcy53bmRcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgakUgPSAkLkV2ZW50KHR5cGUsIHByb3BzKTtcclxuICAgICAgakUudGltZVN0YW1wID0gZS50aW1lU3RhbXA7XHJcbiAgICAgIGNhbGxiYWNrKGpFLCBvYmplY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29udmVydChlLCBkYXRhKSB7XHJcbiAgICBpZighdGhpcy5lbmFibGVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0ID0gdGhpcy5nZXRPYmplY3QoZSwgZGF0YSk7XHJcbiAgICBsZXQgbm90aWZ5ID0gdHJ1ZTtcclxuICAgIHN3aXRjaChlLnR5cGUpIHtcclxuICAgICAgY2FzZSAnbW91c2Vkb3duJzoge1xyXG4gICAgICAgIGlmKHRoaXMuY2FwT2JqZWN0KSB7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNhcE9iamVjdCwgZSwgJ21vdXNldXAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYXBPYmplY3QgPSBvYmplY3Q7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbW91c2V1cCc6IHtcclxuICAgICAgICBpZih0aGlzLmNhcE9iamVjdCAmJiB0aGlzLmNhcE9iamVjdCAhPT0gb2JqZWN0KSB7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNhcE9iamVjdCwgZSwgJ21vdXNldXAnKTtcclxuICAgICAgICAgIG5vdGlmeSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVTdGFtcCA9IGUudGltZVN0YW1wO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2NsaWNrJzoge1xyXG4gICAgICAgIG5vdGlmeSA9IHRoaXMudGVzdCh0aGlzLmNhcE9iamVjdCwgb2JqZWN0KSAmJiBlLnRpbWVTdGFtcCA9PT0gdGhpcy50aW1lU3RhbXA7XHJcbiAgICAgICAgdGhpcy5jYXBPYmplY3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbW91c2VlbnRlcic6XHJcbiAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XHJcbiAgICAgIGNhc2UgJ21vdXNlbW92ZSc6IHtcclxuICAgICAgICBpZighdGhpcy50ZXN0KHRoaXMuaG92T2JqZWN0LCBvYmplY3QpICYmIHRoaXMuaG92T2JqZWN0KSB7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmhvdk9iamVjdCwgZSwgJ21vdXNlb3V0Jyk7XHJcbiAgICAgICAgICB0aGlzLmhvdk9iamVjdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuaG92T2JqZWN0ICYmIG9iamVjdCkge1xyXG4gICAgICAgICAgdGhpcy5ub3RpZnkob2JqZWN0LCBlLCAnbW91c2VvdmVyJyk7XHJcbiAgICAgICAgICB0aGlzLmhvdk9iamVjdCA9IG9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm90aWZ5ID0gZS50eXBlID09PSAnbW91c2Vtb3ZlJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdtb3VzZWxlYXZlJzpcclxuICAgICAgY2FzZSAnbW91c2VvdXQnOiB7XHJcbiAgICAgICAgaWYodGhpcy5ob3ZPYmplY3QpIHtcclxuICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuaG92T2JqZWN0LCBlLCAnbW91c2VvdXQnKTtcclxuICAgICAgICAgIHRoaXMuaG92T2JqZWN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub3RpZnkgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYobm90aWZ5ICYmIG9iamVjdCkge1xyXG4gICAgICB0aGlzLm5vdGlmeShvYmplY3QsIGUsIGUudHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL2NvbnRyb2xzL0V2ZW50Q29udmVydGVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9jb250cm9scy9FdmVudENvbnZlcnRlci5qcyIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQge1xyXG5cclxuICBzdGF0aWMgdGVzdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gb2JqZWN0MS50YXJnZXQ9PT1vYmplY3QyLnRhcmdldDtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvY29udHJvbHMvdGFyZ2V0cy9UYXJnZXQuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL2NvbnRyb2xzL3RhcmdldHMvVGFyZ2V0LmpzIiwiaW1wb3J0IHtUSFJFRX0gZnJvbSAnLi4vbGlicyc7XHJcbmltcG9ydCBUaHJlZVV0aWxzIGZyb20gJy4uL2NsYXNzZXMvVGhyZWVVdGlscyc7XHJcblxyXG5jb25zdCByZXNYID0gMTEsXHJcbiAgICAgIHJlc1kgPSAyLFxyXG4gICAgICByZXNaID0gMTUsXHJcbiAgICAgIHNjYWxlID0gMSxcclxuICAgICAgZmFjZXMgPSBbXTtcclxuXHJcbmNvbnN0IGZyb250R2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShzY2FsZSwgc2NhbGUsIHJlc1gtMSwgcmVzWS0xKTtcclxuZnJvbnRHZW9tZXRyeS50cmFuc2xhdGUoMC41KnNjYWxlLDAuNSpzY2FsZSxzY2FsZSk7XHJcbmNvbnN0IGJhY2tHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHNjYWxlLCBzY2FsZSwgcmVzWC0xLCByZXNZLTEpO1xyXG5iYWNrR2VvbWV0cnkucm90YXRlWShNYXRoLlBJKTtcclxuYmFja0dlb21ldHJ5LnRyYW5zbGF0ZSgwLjUqc2NhbGUsMC41KnNjYWxlLDApO1xyXG5jb25zdCBsZWZ0R2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShzY2FsZSwgc2NhbGUsIHJlc1otMSwgcmVzWS0xKTtcclxubGVmdEdlb21ldHJ5LnJvdGF0ZVkoLU1hdGguUEkvMik7XHJcbmxlZnRHZW9tZXRyeS50cmFuc2xhdGUoMCwwLjUqc2NhbGUsMC41KnNjYWxlKTtcclxuY29uc3QgcmlnaHRHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHNjYWxlLCBzY2FsZSwgcmVzWi0xLCByZXNZLTEpO1xyXG5yaWdodEdlb21ldHJ5LnJvdGF0ZVkoTWF0aC5QSS8yKTtcclxucmlnaHRHZW9tZXRyeS50cmFuc2xhdGUoc2NhbGUsMC41KnNjYWxlLDAuNSpzY2FsZSk7XHJcbmNvbnN0IHRvcEdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoc2NhbGUsIHNjYWxlLCByZXNYLTEsIHJlc1otMSk7XHJcbnRvcEdlb21ldHJ5LnJvdGF0ZVgoLU1hdGguUEkvMik7XHJcbnRvcEdlb21ldHJ5LnRyYW5zbGF0ZSgwLjUqc2NhbGUsc2NhbGUsMC41KnNjYWxlKTtcclxuY29uc3QgYm90dG9tR2VvbWV0cnkgPSB0b3BHZW9tZXRyeS5jbG9uZSgpO1xyXG5ib3R0b21HZW9tZXRyeS50cmFuc2xhdGUoMCwtc2NhbGUsMCk7XHJcbmZvcihsZXQgZiBvZiBib3R0b21HZW9tZXRyeS5mYWNlcykge1xyXG4gIFtmLmEsIGYuYl0gPSBbZi5iLCBmLmFdO1xyXG59XHJcblxyXG5jb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5nZW9tZXRyeS52ZXJ0aWNlcyA9IFsuLi5ib3R0b21HZW9tZXRyeS52ZXJ0aWNlcywgLi4udG9wR2VvbWV0cnkudmVydGljZXNdO1xyXG5cclxuY29uc3QgYWRkRmFjZXMgPSAoZnMsIG1hcCk9PiB7XHJcbiAgZm9yKGxldCBmIG9mIGZzKSB7XHJcbiAgICBnZW9tZXRyeS5mYWNlcy5wdXNoKG5ldyBUSFJFRS5GYWNlMyhtYXAoZi5hKSwgbWFwKGYuYiksIG1hcChmLmMpKSk7XHJcbiAgfVxyXG4gIGZhY2VzLnB1c2goZ2VvbWV0cnkuZmFjZXMubGVuZ3RoKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFZlcnRpY2VzID0gKHNyYywgZHN0KT0+IHtcclxuICBjb25zdCBtYXAgPSBbXTtcclxuICBjb25zdCBlcSA9IChhLCBiKT0+IE1hdGguYWJzKGEueC1iLngpK01hdGguYWJzKGEueS1iLnkpK01hdGguYWJzKGEuei1iLnopPDFlLTQ7XHJcbiAgZm9yKGxldCBpPTA7IGk8c3JjLmxlbmd0aDsgKytpKSB7XHJcbiAgICBmb3IobGV0IGo9MDsgajxkc3QubGVuZ3RoOyArK2opIHtcclxuICAgICAgaWYoZXEoc3JjW2ldLCBkc3Rbal0pKSB7XHJcbiAgICAgICAgbWFwW2ldPWo7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1hcDtcclxufTtcclxuXHJcbmNvbnN0IGZyb250TWFwID0gbWFwVmVydGljZXMoZnJvbnRHZW9tZXRyeS52ZXJ0aWNlcywgZ2VvbWV0cnkudmVydGljZXMpO1xyXG5jb25zdCBiYWNrTWFwID0gbWFwVmVydGljZXMoYmFja0dlb21ldHJ5LnZlcnRpY2VzLCBnZW9tZXRyeS52ZXJ0aWNlcyk7XHJcbmNvbnN0IGxlZnRNYXAgPSBtYXBWZXJ0aWNlcyhsZWZ0R2VvbWV0cnkudmVydGljZXMsIGdlb21ldHJ5LnZlcnRpY2VzKTtcclxuY29uc3QgcmlnaHRNYXAgPSBtYXBWZXJ0aWNlcyhyaWdodEdlb21ldHJ5LnZlcnRpY2VzLCBnZW9tZXRyeS52ZXJ0aWNlcyk7XHJcblxyXG5hZGRGYWNlcyh0b3BHZW9tZXRyeS5mYWNlcywgKGkpPT4gaStib3R0b21HZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGgpO1xyXG5hZGRGYWNlcyhib3R0b21HZW9tZXRyeS5mYWNlcywgKGkpPT4gaSk7XHJcbmFkZEZhY2VzKGZyb250R2VvbWV0cnkuZmFjZXMsIChpKT0+IGZyb250TWFwW2ldKTtcclxuYWRkRmFjZXMoYmFja0dlb21ldHJ5LmZhY2VzLCAoaSk9PiBiYWNrTWFwW2ldKTtcclxuYWRkRmFjZXMobGVmdEdlb21ldHJ5LmZhY2VzLCAoaSk9PiBsZWZ0TWFwW2ldKTtcclxuYWRkRmFjZXMocmlnaHRHZW9tZXRyeS5mYWNlcywgKGkpPT4gcmlnaHRNYXBbaV0pO1xyXG5mYWNlcy5wb3AoKTtcclxuXHJcblRocmVlVXRpbHMuY29tcHV0ZUZhY2VWZXJ0ZXhVdnMoZ2VvbWV0cnksIGZhY2VzKTtcclxuXHJcbmdlb21ldHJ5LmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XHJcbi8vZ2VvbWV0cnkuY29tcHV0ZUZhY2VOb3JtYWxzKCk7XHJcbmdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xyXG4vL2dlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ0JveCgpO1xyXG5nZW9tZXRyeS52ZXJ0aWNlc05lZWRVcGRhdGUgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHJlc1gsXHJcblx0cmVzWSxcclxuXHRyZXNaLFxyXG5cdGZhY2VzLFxyXG5cdGdlb21ldHJ5XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21vZGVscy9zaGVldEJsb2NrLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvbW9kZWxzL3NoZWV0QmxvY2suanMiLCJcclxuZXhwb3J0IGZ1bmN0aW9uIHByb3BzKCkge1xyXG4gIC8vIGNvbnN0IHByb3BzID0ge1xyXG4gIC8vICAgaGVpZ2h0LFxyXG4gIC8vICAgd2lkdGgsXHJcbiAgLy8gICBncmF2aXR5LFxyXG4gIC8vICAgaW5qZWN0b3IsXHJcbiAgLy8gICBjYWNoZWRQYWdlcyxcclxuICAvLyAgIHJlbmRlckluYWN0aXZlUGFnZXMsXHJcbiAgLy8gICByZW5kZXJXaGlsZUZsaXBwaW5nLFxyXG4gIC8vICAgcGFnZXNGb3JQcmVkaWN0aW5nLFxyXG4gIC8vICAgcHJlbG9hZFBhZ2VzLFxyXG4gIC8vICAgc2hlZXQ6IHtcclxuICAvLyAgICAgc3RhcnRWZWxvY2l0eSxcclxuICAvLyAgICAgY29ybmVyRGV2aWF0aW9uLFxyXG4gIC8vICAgICBmbGV4aWJpbGl0eSxcclxuICAvLyAgICAgZmxleGlibGVDb3JuZXIsXHJcbiAgLy8gICAgIGJlbmRpbmcsXHJcbiAgLy8gICAgIHdhdmUsXHJcbiAgLy8gICAgIHNoYXBlLFxyXG4gIC8vICAgICB3aWR0aFRleGVscyxcclxuICAvLyAgICAgaGVpZ2h0VGV4ZWxzLFxyXG4gIC8vICAgICBjb2xvcixcclxuICAvLyAgICAgc2lkZVRleHR1cmVcclxuICAvLyAgIH0sXHJcbiAgLy8gICBjb3Zlcjoge1xyXG4gIC8vICAgICAuLi5zaGVldCxcclxuICAvLyAgICAgcGFkZGluZyxcclxuICAvLyAgICAgYmluZGVyVGV4dHVyZSxcclxuICAvLyAgICAgZGVwdGgsXHJcbiAgLy8gICAgIG1hc3NcclxuICAvLyAgIH0sXHJcbiAgLy8gICBwYWdlOiB7XHJcbiAgLy8gICAgIC4uLnNoZWV0LFxyXG4gIC8vICAgICBkZXB0aCxcclxuICAvLyAgICAgbWFzc1xyXG4gIC8vICAgfVxyXG4gIC8vIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBoZWlnaHQ6IDAuMjk3LFxyXG4gICAgd2lkdGg6IDAuMjEsXHJcbiAgICBncmF2aXR5OiAxLFxyXG4gICAgY2FjaGVkUGFnZXM6IDUwLFxyXG4gICAgcmVuZGVySW5hY3RpdmVQYWdlczogdHJ1ZSxcclxuICAgIHJlbmRlcldoaWxlRmxpcHBpbmc6IGZhbHNlLFxyXG4gICAgcGFnZXNGb3JQcmVkaWN0aW5nOiA1LFxyXG4gICAgcHJlbG9hZFBhZ2VzOiA1LFxyXG4gICAgc2hlZXQ6IHtcclxuICAgICAgc3RhcnRWZWxvY2l0eTogMC44LFxyXG4gICAgICBjb3JuZXJEZXZpYXRpb246IDAuMjUsXHJcbiAgICAgIGZsZXhpYmlsaXR5OiAxMCxcclxuICAgICAgZmxleGlibGVDb3JuZXI6IDAuNSxcclxuICAgICAgYmVuZGluZzogMTEsXHJcbiAgICAgIHdhdmU6IDAuNSxcclxuICAgICAgc2hhcGU6IDAsXHJcbiAgICAgIHdpZHRoVGV4ZWxzOiA1KjIxMCxcclxuICAgICAgaGVpZ2h0VGV4ZWxzOiA1KjI5NyxcclxuICAgICAgY29sb3I6IDB4RkZGRkZGXHJcbiAgICB9LFxyXG4gICAgY292ZXI6IHtcclxuICAgICAgYmluZGVyVGV4dHVyZTogJycsXHJcbiAgICAgIGRlcHRoOiAwLjAwMDMsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIG1hc3M6IDAuMDAzXHJcbiAgICB9LFxyXG4gICAgcGFnZToge1xyXG4gICAgICBkZXB0aDogMC4wMDAxLFxyXG4gICAgICBtYXNzOiAwLjAwMVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3Byb3BzL2Jvb2suanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9wcm9wcy9ib29rLmpzIiwiaW1wb3J0IHskfSBmcm9tICcuL2pzL2xpYnMnO1xyXG5pbXBvcnQgRGV0ZWN0b3IgZnJvbSAnLi9qcy9jbGFzc2VzL0RldGVjdG9yJztcclxuaW1wb3J0IFZpc3VhbFdvcmxkIGZyb20gJy4vanMvY2xhc3Nlcy9WaXN1YWxXb3JsZCc7XHJcbmltcG9ydCBQZGZMaW5rc0hhbmRsZXIgZnJvbSAnLi9qcy9jbGFzc2VzL1BkZkxpbmtzSGFuZGxlcic7XHJcbmltcG9ydCBCb29rIGZyb20gJy4vanMvY2xhc3Nlcy9Cb29rJztcclxuaW1wb3J0IEJvb2tWaWV3IGZyb20gJy4vanMvY2xhc3Nlcy9Cb29rVmlldyc7XHJcbmltcG9ydCBCb29rQ29udHJvbGxlciBmcm9tICcuL2pzL2NsYXNzZXMvQm9va0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgUGRmQm9va1Byb3BzQnVpbGRlciBmcm9tICcuL2pzL2NsYXNzZXMvUGRmQm9va1Byb3BzQnVpbGRlcic7XHJcbmltcG9ydCBDbGJCb29rUHJvcHNCdWlsZGVyIGZyb20gJy4vanMvY2xhc3Nlcy9DbGJCb29rUHJvcHNCdWlsZGVyJztcclxuaW1wb3J0IExvYWRpbmdDb250cm9sbGVyIGZyb20gJy4vanMvY2xhc3Nlcy9Mb2FkaW5nQ29udHJvbGxlcic7XHJcbmltcG9ydCBCb29rbWFya3MgZnJvbSAnLi9qcy9jbGFzc2VzL0Jvb2ttYXJrcyc7XHJcbmltcG9ydCBUaHVtYm5haWxzIGZyb20gJy4vanMvY2xhc3Nlcy9UaHVtYm5haWxzJztcclxuaW1wb3J0IFRvY0NvbnRyb2xsZXIgZnJvbSAnLi9qcy9jbGFzc2VzL1RvY0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgQm9va1ByaW50ZXIgZnJvbSAnLi9qcy9jbGFzc2VzL0Jvb2tQcmludGVyJztcclxuaW1wb3J0IEF1dG9OYXZpZ2F0b3IgZnJvbSAnLi9qcy9jbGFzc2VzL0F1dG9OYXZpZ2F0b3InO1xyXG5pbXBvcnQgU291bmRzRW52aXJvbWVudCBmcm9tICcuL2pzL2NsYXNzZXMvU291bmRzRW52aXJvbWVudCc7XHJcblxyXG4kLmZuLkZsaXBCb29rID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gIGNvbnN0IHNjZW5lID0ge1xyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgaWYodGhpcy5yZWFkeSkge1xyXG4gICAgICAgICFzY2VuZS5wZGZMaW5rc0hhbmRsZXIgfHwgc2NlbmUucGRmTGlua3NIYW5kbGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgc2NlbmUucGRmTGlua3NIYW5kbGVyO1xyXG4gICAgICAgIHNjZW5lLnNvdW5kcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgZGVsZXRlIHNjZW5lLnNvdW5kcztcclxuICAgICAgICBzY2VuZS50b2NDdHJsLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgc2NlbmUudG9jQ3RybDtcclxuICAgICAgICBzY2VuZS50aHVtYm5haWxzLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgc2NlbmUudGh1bWJuYWlscztcclxuICAgICAgICAhc2NlbmUuYm9va21hcmtzIHx8IHNjZW5lLmJvb2ttYXJrcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgZGVsZXRlIHNjZW5lLmJvb2ttYXJrcztcclxuICAgICAgICBzY2VuZS5jdHJsLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgc2NlbmUuY3RybDtcclxuICAgICAgICBzY2VuZS5ib29rUHJpbnRlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgZGVsZXRlIHNjZW5lLmJvb2tQcmludGVyO1xyXG4gICAgICAgIHNjZW5lLmJvb2suZGlzcG9zZSgpO1xyXG4gICAgICAgIGRlbGV0ZSBzY2VuZS5ib29rO1xyXG4gICAgICAgIHNjZW5lLnByb3BzQnVpbGRlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgZGVsZXRlIHNjZW5lLnByb3BzQnVpbGRlcjtcclxuICAgICAgICBkZWxldGUgc2NlbmUuYm9va0J1aWxkZXI7XHJcbiAgICAgICAgc2NlbmUudmlzdWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICBkZWxldGUgc2NlbmUudmlzdWFsO1xyXG4gICAgICAgIHNjZW5lLnZpZXcuZGlzcG9zZSgpO1xyXG4gICAgICAgIGRlbGV0ZSBzY2VuZS52aWV3O1xyXG4gICAgICAgIGRlbGV0ZSBzY2VuZS5kaXNwb3NlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGVuZGluZ0Rpc3Bvc2UgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBvcHRpb25zID0gey4uLm9wdGlvbnN9O1xyXG4gIHNjZW5lLnZpZXcgPSBuZXcgQm9va1ZpZXcodGhpcy5sZW5ndGg/IHRoaXNbMF06ICQoJzxkaXY+JykuYXBwZW5kVG8oJ2JvZHknKSwgKCk9PiB7XHJcbiAgICBpZighRGV0ZWN0b3Iud2ViZ2wpIHtcclxuICAgICAgRGV0ZWN0b3IuYWRkR2V0V2ViR0xNZXNzYWdlKHtwYXJlbnQ6IHNjZW5lLnZpZXcuZ2V0VmlldygpfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2NlbmUubG9hZGluZ0N0cmwgPSBuZXcgTG9hZGluZ0NvbnRyb2xsZXIoc2NlbmUudmlldyk7XHJcbiAgICAgIHNjZW5lLnZpc3VhbCA9IG5ldyBWaXN1YWxXb3JsZChzY2VuZS52aWV3LmdldENvbnRhaW5lcigpLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcsIHNjZW5lLnZpZXcuZ2V0Q29udGFpbmVyKCkub3duZXJEb2N1bWVudCwgc2NlbmUudmlldy5nZXRWaWV3KCkpO1xyXG4gICAgICBzY2VuZS5ib29rQnVpbGRlciA9IChwcm9wcywgc2hlZXRzLCBwYWdlQ2FsbGJhY2spPT4ge1xyXG4gICAgICAgIGlmKG9wdGlvbnMucHJvcGVydGllc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICBwcm9wcyA9IG9wdGlvbnMucHJvcGVydGllc0NhbGxiYWNrKHByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NlbmUuYm9vayA9IG5ldyBCb29rKHNjZW5lLnZpc3VhbCwgc2hlZXRzLCBwYWdlQ2FsbGJhY2ssIHByb3BzKTtcclxuICAgICAgICBzY2VuZS5ib29rUHJpbnRlciA9IG5ldyBCb29rUHJpbnRlcihzY2VuZS52aXN1YWwsIHNjZW5lLmJvb2ssIChvcHRpb25zLnRlbXBsYXRlIHx8IHt9KS5wcmludFN0eWxlKTtcclxuICAgICAgICBzY2VuZS5sb2FkaW5nQ3RybC5kaXNwb3NlKCk7XHJcbiAgICAgICAgZGVsZXRlIHNjZW5lLmxvYWRpbmdDdHJsO1xyXG4gICAgICAgIHNjZW5lLmN0cmwgPSBuZXcgQm9va0NvbnRyb2xsZXIoc2NlbmUuYm9vaywgc2NlbmUudmlldywgb3B0aW9ucy5jb250cm9sc1Byb3BzKTtcclxuICAgICAgICBzY2VuZS5ib29rLnNldEluamVjdG9yKCh3KT0+IHtcclxuICAgICAgICAgIHcualF1ZXJ5ID0gdy4kID0gJDtcclxuICAgICAgICAgIHcuYm9vayA9IHNjZW5lLmJvb2s7XHJcbiAgICAgICAgICB3LmJvb2tDdHJsID0gc2NlbmUuY3RybDtcclxuICAgICAgICAgIGlmKHByb3BzLmluamVjdG9yKSB7XHJcbiAgICAgICAgICAgIHByb3BzLmluamVjdG9yKHcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjZW5lLnZpZXcuYWRkSGFuZGxlcihzY2VuZS5jdHJsKTtcclxuICAgICAgICBzY2VuZS5jdHJsLnNldFByaW50ZXIoc2NlbmUuYm9va1ByaW50ZXIpO1xyXG4gICAgICAgIGNvbnN0IHRlc3QgPSBwYWdlQ2FsbGJhY2soMCk7XHJcblxyXG4gICAgICAgIHNjZW5lLnRodW1ibmFpbHMgPSBuZXcgVGh1bWJuYWlscyhzY2VuZS52aXN1YWwsIHNjZW5lLnZpZXcuZ2V0VGh1bWJuYWlsc1ZpZXcoKSwgcGFnZUNhbGxiYWNrLCAyKihzaGVldHMrMiksIHtrV3RvSDogcHJvcHMud2lkdGgvcHJvcHMuaGVpZ2h0fSk7XHJcbiAgICAgICAgc2NlbmUudG9jQ3RybCA9IG5ldyBUb2NDb250cm9sbGVyKHNjZW5lLnZpZXcsIHNjZW5lLmN0cmwpO1xyXG4gICAgICAgIHNjZW5lLnRvY0N0cmwuc2V0VGh1bWJuYWlscyhzY2VuZS50aHVtYm5haWxzKTtcclxuICAgICAgICBzY2VuZS5jdHJsLnNldFRvY0N0cmwoc2NlbmUudG9jQ3RybCk7XHJcbiAgICAgICAgc2NlbmUudmlldy5hZGRIYW5kbGVyKHNjZW5lLnRvY0N0cmwpO1xyXG5cclxuICAgICAgICBpZih0ZXN0LnR5cGU9PT0ncGRmJykge1xyXG4gICAgICAgICAgc2NlbmUucGRmTGlua3NIYW5kbGVyID0gbmV3IFBkZkxpbmtzSGFuZGxlcih0ZXN0LnNyYywgc2NlbmUuY3RybCwgc2NlbmUudmlzdWFsLmVsZW1lbnQpO1xyXG4gICAgICAgICAgc2NlbmUuYm9vay5hZGRFdmVudExpc3RlbmVyKCdwZGZBbm5vdGF0aW9uJywgc2NlbmUucGRmTGlua3NIYW5kbGVyLmhhbmRsZUV2ZW50LmJpbmQoc2NlbmUucGRmTGlua3NIYW5kbGVyKSk7XHJcbiAgICAgICAgICB0ZXN0LnNyYy5nZXRIYW5kbGVyKChoYW5kbGVyKT0+IHtcclxuICAgICAgICAgICAgaGFuZGxlci5nZXRPdXRsaW5lKCkuXHJcbiAgICAgICAgICAgICAgdGhlbigob3V0bGluZSk9PiB7XHJcbiAgICAgICAgICAgICAgICBzY2VuZS5ib29rbWFya3MgPSBuZXcgQm9va21hcmtzKHNjZW5lLnZpZXcuZ2V0Qm9va21hcmtzVmlldygpLCBvdXRsaW5lKTtcclxuICAgICAgICAgICAgICAgIHNjZW5lLnRvY0N0cmwuc2V0Qm9va21hcmtzKHNjZW5lLmJvb2ttYXJrcywgdGVzdC5zcmMpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZihvcHRpb25zLnBkZkxpbmtzICYmIG9wdGlvbnMucGRmTGlua3MuaGFuZGxlcikge1xyXG4gICAgICAgICAgICBzY2VuZS5wZGZMaW5rc0hhbmRsZXIuc2V0SGFuZGxlcihvcHRpb25zLnBkZkxpbmtzLmhhbmRsZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2NlbmUuc291bmRzID0gbmV3IFNvdW5kc0Vudmlyb21lbnQob3B0aW9ucy50ZW1wbGF0ZSk7XHJcbiAgICAgICAgc2NlbmUuY3RybC5zZXRTb3VuZHMoc2NlbmUuc291bmRzKTtcclxuICAgICAgICBzY2VuZS5zb3VuZHMuc3Vic2NyaWJlRmxpcHMoc2NlbmUuY3RybCk7XHJcblxyXG4gICAgICAgIHNjZW5lLnJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICBuZXcgQXV0b05hdmlnYXRvcihzY2VuZS52aXN1YWwsIHNjZW5lLmN0cmwsIG9wdGlvbnMuYXV0b05hdmlnYXRpb24pLmRpc3Bvc2UoKTtcclxuICAgICAgICBpZihvcHRpb25zLnJlYWR5KSB7XHJcbiAgICAgICAgICBvcHRpb25zLnJlYWR5KHNjZW5lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc2NlbmUucGVuZGluZ0Rpc3Bvc2UpIHtcclxuICAgICAgICAgIHNjZW5lLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGlmKG9wdGlvbnMucGRmKSB7XHJcbiAgICAgICAgc2NlbmUucHJvcHNCdWlsZGVyID0gbmV3IFBkZkJvb2tQcm9wc0J1aWxkZXIob3B0aW9ucy5wZGYsIHNjZW5lLmJvb2tCdWlsZGVyKTtcclxuICAgICAgICBzY2VuZS5wcm9wc0J1aWxkZXIucGRmLnNldExvYWRpbmdQcm9ncmVzc0NsYihzY2VuZS5sb2FkaW5nQ3RybC5zZXRQcm9ncmVzcy5iaW5kKHNjZW5lLmxvYWRpbmdDdHJsKSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihvcHRpb25zLnBhZ2VDYWxsYmFjaykge1xyXG4gICAgICAgIHNjZW5lLnByb3BzQnVpbGRlciA9IG5ldyBDbGJCb29rUHJvcHNCdWlsZGVyKHNjZW5lLnZpc3VhbCwgb3B0aW9ucy5wYWdlQ2FsbGJhY2ssIG9wdGlvbnMucGFnZXMsIHNjZW5lLmJvb2tCdWlsZGVyKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzY2VuZS5wcm9wc0J1aWxkZXIgPSBuZXcgQ2xiQm9va1Byb3BzQnVpbGRlcihzY2VuZS52aXN1YWwsIEJvb2sucGFnZUNhbGxiYWNrLCA2LCBzY2VuZS5ib29rQnVpbGRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBvcHRpb25zLnRlbXBsYXRlKTtcclxuICByZXR1cm4gc2NlbmU7XHJcbn1cclxuXHJcbiQoKCk9PiB7XHJcbiAgbGV0IGNvbnRhaW5lcnMgPSAkKCcuZmxpcC1ib29rLWNvbnRhaW5lcicpO1xyXG4gIGZvcihsZXQgaSA9IDA7IGk8Y29udGFpbmVycy5sZW5ndGg7ICsraSkge1xyXG4gICAgY29uc3QgakNvbnRhaW5lciA9ICQoY29udGFpbmVyc1tpXSksIHNyYyA9IGpDb250YWluZXIuYXR0cignc3JjJyk7XHJcbiAgICBpZighIXNyYykge1xyXG4gICAgICBqQ29udGFpbmVyLkZsaXBCb29rKHtwZGY6IHNyY30pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG53aW5kb3cualF1ZXJ5ID0gd2luZG93LiQgPSAkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2luZGV4LmpzIiwiaWYgKCFBcnJheS5wcm90b3R5cGUuZmlsbCkge1xyXG4gIEFycmF5LnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24odmFsdWUpIHtcclxuXHJcbiAgICAvLyDQqNCw0LPQuCAxLTIuXHJcbiAgICBpZiAodGhpcyA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RoaXMgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBPID0gT2JqZWN0KHRoaXMpO1xyXG5cclxuICAgIC8vINCo0LDQs9C4IDMtNS5cclxuICAgIHZhciBsZW4gPSBPLmxlbmd0aCA+Pj4gMDtcclxuXHJcbiAgICAvLyDQqNCw0LPQuCA2LTcuXHJcbiAgICB2YXIgc3RhcnQgPSBhcmd1bWVudHNbMV07XHJcbiAgICB2YXIgcmVsYXRpdmVTdGFydCA9IHN0YXJ0ID4+IDA7XHJcblxyXG4gICAgLy8g0KjQsNCzIDguXHJcbiAgICB2YXIgayA9IHJlbGF0aXZlU3RhcnQgPCAwID9cclxuICAgICAgTWF0aC5tYXgobGVuICsgcmVsYXRpdmVTdGFydCwgMCkgOlxyXG4gICAgICBNYXRoLm1pbihyZWxhdGl2ZVN0YXJ0LCBsZW4pO1xyXG5cclxuICAgIC8vINCo0LDQs9C4IDktMTAuXHJcbiAgICB2YXIgZW5kID0gYXJndW1lbnRzWzJdO1xyXG4gICAgdmFyIHJlbGF0aXZlRW5kID0gZW5kID09PSB1bmRlZmluZWQgP1xyXG4gICAgICBsZW4gOiBlbmQgPj4gMDtcclxuXHJcbiAgICAvLyDQqNCw0LMgMTEuXHJcbiAgICB2YXIgZmluYWwgPSByZWxhdGl2ZUVuZCA8IDAgP1xyXG4gICAgICBNYXRoLm1heChsZW4gKyByZWxhdGl2ZUVuZCwgMCkgOlxyXG4gICAgICBNYXRoLm1pbihyZWxhdGl2ZUVuZCwgbGVuKTtcclxuXHJcbiAgICAvLyDQqNCw0LMgMTIuXHJcbiAgICB3aGlsZSAoayA8IGZpbmFsKSB7XHJcbiAgICAgIE9ba10gPSB2YWx1ZTtcclxuICAgICAgaysrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCo0LDQsyAxMy5cclxuICAgIHJldHVybiBPO1xyXG4gIH07XHJcbn1cclxuXHJcbmlmICghQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnZmluZCcsIHtcclxuICAgIHZhbHVlOiBmdW5jdGlvbihwcmVkaWNhdGUpIHtcclxuICAgICAndXNlIHN0cmljdCc7XHJcbiAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xyXG4gICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkucHJvdG90eXBlLmZpbmQgY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XHJcbiAgICAgfVxyXG4gICAgIGlmICh0eXBlb2YgcHJlZGljYXRlICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgfVxyXG4gICAgIHZhciBsaXN0ID0gT2JqZWN0KHRoaXMpO1xyXG4gICAgIHZhciBsZW5ndGggPSBsaXN0Lmxlbmd0aCA+Pj4gMDtcclxuICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcclxuICAgICB2YXIgdmFsdWU7XHJcblxyXG4gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgIHZhbHVlID0gbGlzdFtpXTtcclxuICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaSwgbGlzdCkpIHtcclxuICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5pZiAoIUFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgpIHtcclxuICBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4ID0gZnVuY3Rpb24ocHJlZGljYXRlKSB7XHJcbiAgICBpZiAodGhpcyA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LnByb3RvdHlwZS5maW5kSW5kZXggY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcmVkaWNhdGUgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgbGlzdCA9IE9iamVjdCh0aGlzKTtcclxuICAgIHZhciBsZW5ndGggPSBsaXN0Lmxlbmd0aCA+Pj4gMDtcclxuICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xyXG4gICAgdmFyIHZhbHVlO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFsdWUgPSBsaXN0W2ldO1xyXG4gICAgICBpZiAocHJlZGljYXRlLmNhbGwodGhpc0FyZywgdmFsdWUsIGksIGxpc3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxuICB9O1xyXG59XHJcblxyXG5pZiAoIU9iamVjdC52YWx1ZXMpIHtcclxuXHRPYmplY3QudmFsdWVzID0gZnVuY3Rpb24gdmFsdWVzKE8pIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhPKS5tYXAoKG5hbWUpPT5PW25hbWVdKSB8fCBbXTtcclxuXHR9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BvbHlmaWxsLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vcG9seWZpbGwuanMiLCIvKiogQG5hbWVzcGFjZSAqL1xyXG5jb25zdCBUSFJFRXhcdFx0PSBUSFJFRXggXHRcdHx8IHt9O1xyXG5USFJFRXguRnVsbFNjcmVlblx0PSBUSFJFRXguRnVsbFNjcmVlblx0fHwge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUSFJFRXguRnVsbFNjcmVlbjtcclxuXHJcbi8qKlxyXG4gKiB0ZXN0IGlmIGl0IGlzIHBvc3NpYmxlIHRvIGhhdmUgZnVsbHNjcmVlblxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBmdWxsc2NyZWVuIEFQSSBpcyBhdmFpbGFibGUsIGZhbHNlIG90aGVyd2lzZVxyXG4qL1xyXG5USFJFRXguRnVsbFNjcmVlbi5hdmFpbGFibGVcdD0gZnVuY3Rpb24oKVxyXG57XHJcblx0cmV0dXJuIHRoaXMuX2hhc1dlYmtpdEZ1bGxTY3JlZW4gfHwgdGhpcy5faGFzTW96RnVsbFNjcmVlbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIHRlc3QgaWYgZnVsbHNjcmVlbiBpcyBjdXJyZW50bHkgYWN0aXZhdGVkXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGZ1bGxzY3JlZW4gaXMgY3VycmVudGx5IGFjdGl2YXRlZCwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiovXHJcblRIUkVFeC5GdWxsU2NyZWVuLmFjdGl2YXRlZFx0PSBmdW5jdGlvbigpXHJcbntcclxuXHRpZiggdGhpcy5faGFzV2Via2l0RnVsbFNjcmVlbiApe1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbjtcclxuXHR9ZWxzZSBpZiggdGhpcy5faGFzTW96RnVsbFNjcmVlbiApe1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50Lm1vekZ1bGxTY3JlZW47XHJcblx0fWVsc2V7XHJcblx0XHRjb25zb2xlLmFzc2VydChmYWxzZSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuVEhSRUV4LkZ1bGxTY3JlZW4uYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGVsZW1lbnQsIGhhbmRsZXIpIHtcclxuXHRpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcblx0ICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHQgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgaGFuZGxlciwgZmFsc2UpO1xyXG5cdCAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBoYW5kbGVyLCBmYWxzZSk7XHJcblx0ICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignTVNGdWxsc2NyZWVuQ2hhbmdlJywgaGFuZGxlciwgZmFsc2UpO1xyXG5cdH1cclxufVxyXG5cclxuVEhSRUV4LkZ1bGxTY3JlZW4ucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGVsZW1lbnQsIGhhbmRsZXIpIHtcclxuXHRpZiAoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcblx0ICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIGhhbmRsZXIsIGZhbHNlKTtcclxuXHQgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3pmdWxsc2NyZWVuY2hhbmdlJywgaGFuZGxlciwgZmFsc2UpO1xyXG5cdCAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBoYW5kbGVyLCBmYWxzZSk7XHJcblx0ICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNGdWxsc2NyZWVuQ2hhbmdlJywgaGFuZGxlciwgZmFsc2UpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGV4aXRIYW5kbGVyKClcclxue1xyXG4gICAgaWYgKGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbiB8fCBkb2N1bWVudC5tb3pGdWxsU2NyZWVuIHx8IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQgIT09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgLyogUnVuIGNvZGUgb24gZXhpdCAqL1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmVxdWVzdCBmdWxsc2NyZWVuIG9uIGEgZ2l2ZW4gZWxlbWVudFxyXG4gKiBAcGFyYW0ge0RvbUVsZW1lbnR9IGVsZW1lbnQgdG8gbWFrZSBmdWxsc2NyZWVuLiBvcHRpb25hbC4gZGVmYXVsdCB0byBkb2N1bWVudC5ib2R5XHJcbiovXHJcblRIUkVFeC5GdWxsU2NyZWVuLnJlcXVlc3RcdD0gZnVuY3Rpb24oZWxlbWVudClcclxue1xyXG5cdGVsZW1lbnRcdD0gZWxlbWVudFx0fHwgZG9jdW1lbnQuYm9keTtcclxuXHRpZiggdGhpcy5faGFzV2Via2l0RnVsbFNjcmVlbiApe1xyXG5cdFx0ZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG5cdH1lbHNlIGlmKCB0aGlzLl9oYXNNb3pGdWxsU2NyZWVuICl7XHJcblx0XHRlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcblx0fWVsc2V7XHJcblx0XHRjb25zb2xlLmFzc2VydChmYWxzZSk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQ2FuY2VsIGZ1bGxzY3JlZW5cclxuKi9cclxuVEhSRUV4LkZ1bGxTY3JlZW4uY2FuY2VsXHQ9IGZ1bmN0aW9uKClcclxue1xyXG5cdGlmKCB0aGlzLl9oYXNXZWJraXRGdWxsU2NyZWVuICl7XHJcblx0XHRkb2N1bWVudC53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKCk7XHJcblx0fWVsc2UgaWYoIHRoaXMuX2hhc01vekZ1bGxTY3JlZW4gKXtcclxuXHRcdGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcclxuXHR9ZWxzZXtcclxuXHRcdGNvbnNvbGUuYXNzZXJ0KGZhbHNlKTtcclxuXHR9XHJcbn1cclxuXHJcblRIUkVFeC5GdWxsU2NyZWVuLl9oYXNXZWJraXRGdWxsU2NyZWVuXHQ9ICd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyBpbiBkb2N1bWVudFx0PyB0cnVlIDogZmFsc2U7XHJcblRIUkVFeC5GdWxsU2NyZWVuLl9oYXNNb3pGdWxsU2NyZWVuXHQ9ICdtb3pDYW5jZWxGdWxsU2NyZWVuJyBpbiBkb2N1bWVudFx0PyB0cnVlIDogZmFsc2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL1RIUkVFeC9GdWxsU2NyZWVuLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvVEhSRUV4L0Z1bGxTY3JlZW4uanMiLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b05hdmlnYXRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGJvb2tDdHJsLCBwcm9wcz17fSkge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIC4uLnByb3BzLFxyXG4gICAgICB1cmxQYXJhbTogcHJvcHMudXJsUGFyYW0gfHwgJ2ZiM2QtcGFnZScsXHJcbiAgICAgIG5hdmlnYXRlczogcHJvcHMubmF2aWdhdGVzPT09dW5kZWZpbmVkPyAxOiBwcm9wcy5uYXZpZ2F0ZXNcclxuICAgIH07XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5ib29rQ3RybCA9IGJvb2tDdHJsO1xyXG4gICAgdGhpcy51cmxQYXJhbSA9IHByb3BzLnVybFBhcmFtO1xyXG4gICAgdGhpcy53bmQgPSBjb250ZXh0LnduZDtcclxuXHJcbiAgICB0aGlzLnduZC5mYjNkID0ge1xyXG4gICAgICAuLi50aGlzLnduZC5mYjNkXHJcbiAgICB9O1xyXG4gICAgdGhpcy53bmQuZmIzZC5uYXZpZ2F0b3IgPSB7XHJcbiAgICAgIC4uLnRoaXMud25kLmZiM2QubmF2aWdhdG9yXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uYXZpZ2F0b3IgPSB0aGlzLnduZC5mYjNkLm5hdmlnYXRvclt0aGlzLnVybFBhcmFtXSA9IHtcclxuICAgICAgLi4udGhpcy53bmQuZmIzZC5uYXZpZ2F0b3JbdGhpcy51cmxQYXJhbV1cclxuICAgIH07XHJcbiAgICB0aGlzLm5hdmlnYXRvci5pbnN0YW5jZXMgPSAodGhpcy5uYXZpZ2F0b3IuaW5zdGFuY2VzIHx8IDApKzE7XHJcblxyXG4gICAgaWYodGhpcy5uYXZpZ2F0b3IuaW5zdGFuY2VzPD10aGlzLnByb3BzLm5hdmlnYXRlcykge1xyXG4gICAgICB0aGlzLmJvb2tDdHJsLmdvVG9QYWdlKHRoaXMuZ2V0UGFnZU51bWJlcigpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHVybCkge1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgdXJsID0gdGhpcy53bmQubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteXSopfCZ8I3wkKScpLFxyXG4gICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuICAgIGlmICghcmVzdWx0cykgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlTnVtYmVyKCkge1xyXG4gICAgdmFyIG51bWJlciA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKHRoaXMudXJsUGFyYW0pO1xyXG4gICAgbnVtYmVyID0gcGFyc2VJbnQobnVtYmVyKTtcclxuICAgIGlmKGlzTmFOKG51bWJlcikpIHtcclxuICAgICAgbnVtYmVyID0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBudW1iZXItMTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvQXV0b05hdmlnYXRvci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvQXV0b05hdmlnYXRvci5qcyIsImltcG9ydCB7VEhSRUV9IGZyb20gJy4uL2xpYnMnO1xyXG5pbXBvcnQgTWF0aFV0aWxzIGZyb20gJy4vTWF0aFV0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IodmlzdWFsLCBwKSB7XHJcbiAgICB0aGlzLnZpc3VhbCA9IHZpc3VhbDtcclxuICAgIHRoaXMucCA9IHtcclxuICAgICAgLi4ucCxcclxuICAgICAgYmFja1NpemU6IDIqcC5jb3Zlci5kZXB0aCtwLnNoZWV0cypwLnBhZ2UuZGVwdGhcclxuICAgIH07XHJcbiAgICB0aGlzLk9aID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwwLDEpO1xyXG5cclxuICAgIHRoaXMuYmFja0cgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkocC5jb3Zlci5kZXB0aCwgdGhpcy5wLmJhY2tTaXplLCBwLmNvdmVyLmhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBwLmNvdmVyLmNvbG9yfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBwLmNvdmVyLmNvbG9yfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBwLmNvdmVyLmNvbG9yfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBwLmNvdmVyLmNvbG9yfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBwLmNvdmVyLmNvbG9yfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOiBwLmNvdmVyLmNvbG9yfSlcclxuICAgICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICBjb25zdCBiYWNrTSA9IG5ldyBUSFJFRS5NZXNoKHRoaXMuYmFja0csIG5ldyBUSFJFRS5NZXNoRmFjZU1hdGVyaWFsKHRoaXMubWF0ZXJpYWxzKSk7XHJcblxyXG4gICAgaWYocC5jb3Zlci5iaW5kZXJUZXh0dXJlIT09JycpIHtcclxuICAgICAgdGhpcy52aXN1YWwudGV4dHVyZUxvYWRlci5sb2FkKHAuY292ZXIuYmluZGVyVGV4dHVyZSwgKHRleHR1cmUpPT4ge1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWxzWzFdLmNvbG9yLnNldEhleCgweEZGRkZGRik7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbHNbMV0ubWFwID0gdGV4dHVyZTtcclxuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsc1sxXS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGhyZWUgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIHRoaXMuYmFjayA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgdGhpcy5iYWNrUlQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIHRoaXMuYmFja1JSID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICB0aGlzLmJhY2tMVCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgdGhpcy5iYWNrTFIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIHRoaXMubGVmdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICB0aGlzLnJpZ2h0UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcbiAgICB0aGlzLmJhY2suYWRkKGJhY2tNKTtcclxuICAgIHRoaXMuYmFjay5hZGQodGhpcy5sZWZ0UGl2b3QpO1xyXG4gICAgdGhpcy5iYWNrLmFkZCh0aGlzLnJpZ2h0UGl2b3QpO1xyXG4gICAgdGhpcy5iYWNrUlQuYWRkKHRoaXMuYmFjayk7XHJcbiAgICB0aGlzLmJhY2tSUi5hZGQodGhpcy5iYWNrUlQpO1xyXG4gICAgdGhpcy5iYWNrTFQuYWRkKHRoaXMuYmFja1JSKTtcclxuICAgIHRoaXMuYmFja0xSLmFkZCh0aGlzLmJhY2tMVCk7XHJcbiAgICB0aGlzLnRocmVlLmFkZCh0aGlzLmJhY2tMUik7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgZm9yKGxldCBtIG9mIHRoaXMubWF0ZXJpYWxzKSB7XHJcbiAgICAgIGlmKG0ubWFwKSB7XHJcbiAgICAgICAgbS5tYXAgPSBudWxsO1xyXG4gICAgICAgIG0ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIG0uZGlzcG9zZSgpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlIHRoaXMubWF0ZXJpYWxzO1xyXG4gICAgdGhpcy5iYWNrRy5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBzZXQoYW5nbGUpIHtcclxuICAgIGxldCByaWdodCwgbGVmdDtcclxuICAgIGlmKGFuZ2xlPk1hdGguUEkvMikge1xyXG4gICAgICByaWdodCA9IE1hdGguUEkvMjtcclxuICAgICAgbGVmdCA9IGFuZ2xlLU1hdGguUEkvMjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByaWdodCA9IGFuZ2xlO1xyXG4gICAgICBsZWZ0ID0gMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHAgPSB0aGlzLnAsdHIxPXt4Oi0wLjUqcC5jb3Zlci5kZXB0aCx5OjAuNSpwLmJhY2tTaXplLXAuY292ZXIuZGVwdGh9O1xyXG4gICAgdGhpcy5iYWNrUlQucG9zaXRpb24uc2V0KHRyMS54LHRyMS55LDApO1xyXG4gICAgdGhpcy5iYWNrUlIucG9zaXRpb24uc2V0KC10cjEueCwtdHIxLnksMCk7XHJcbiAgICB0aGlzLmJhY2tSUi5xdWF0ZXJuaW9uLnNldEZyb21BeGlzQW5nbGUodGhpcy5PWiwgcmlnaHQpO1xyXG5cclxuICAgIGNvbnN0IHRyMj17eDpwLmJhY2tTaXplLTIqcC5jb3Zlci5kZXB0aC0wLjUqcC5jb3Zlci5kZXB0aCx5OjAuNSpwLmJhY2tTaXplLXAuY292ZXIuZGVwdGh9O1xyXG4gICAgdGhpcy5iYWNrTFQucG9zaXRpb24uc2V0KHRyMi54LHRyMi55LDApO1xyXG4gICAgdGhpcy5iYWNrTFIucG9zaXRpb24uc2V0KC10cjIueCwtdHIyLnksMCk7XHJcbiAgICB0aGlzLmJhY2tMUi5xdWF0ZXJuaW9uLnNldEZyb21BeGlzQW5nbGUodGhpcy5PWiwgbGVmdCk7XHJcbiAgfVxyXG5cclxuICBzZXRMZWZ0KGFuZ2xlKSB7XHJcbiAgICBjb25zdCBQSSA9IE1hdGguUEk7XHJcbiAgICB0aGlzLmxlZnRQaXZvdC5wb3NpdGlvbi5zZXQoTWF0aFV0aWxzLmludGVycG9sYXRlTGluZWFyKFstUEksLVBJLzJdLFswLHRoaXMucC5jb3Zlci5kZXB0aF0sYW5nbGUpLDAuNSp0aGlzLnAuYmFja1NpemUtMC41KnRoaXMucC5jb3Zlci5kZXB0aCwwKTtcclxuICAgIHRoaXMubGVmdFBpdm90LnF1YXRlcm5pb24uc2V0RnJvbUF4aXNBbmdsZSh0aGlzLk9aLCBhbmdsZSk7XHJcbiAgfVxyXG5cclxuICBzZXRSaWdodChhbmdsZSkge1xyXG4gICAgY29uc3QgUEkgPSBNYXRoLlBJO1xyXG4gICAgICB0aGlzLnJpZ2h0UGl2b3QucG9zaXRpb24uc2V0KE1hdGhVdGlscy5pbnRlcnBvbGF0ZUxpbmVhcihbLVBJLzIsMF0sW3RoaXMucC5jb3Zlci5kZXB0aCwwXSxhbmdsZSksLTAuNSp0aGlzLnAuYmFja1NpemUrMC41KnRoaXMucC5jb3Zlci5kZXB0aCwwKTtcclxuICAgICAgdGhpcy5yaWdodFBpdm90LnF1YXRlcm5pb24uc2V0RnJvbUF4aXNBbmdsZSh0aGlzLk9aLCBhbmdsZSk7XHJcbiAgfVxyXG5cclxuICBqb2luTGVmdENvdmVyKGNvdmVyKSB7XHJcbiAgICBjb3Zlci50aHJlZS5wb3NpdGlvbi5zZXQoMCwtMC41KnRoaXMucC5jb3Zlci5kZXB0aCwwKTtcclxuICAgIHRoaXMubGVmdFBpdm90LmFkZChjb3Zlci50aHJlZSk7XHJcbiAgfVxyXG5cclxuICBkaXNjb25uZWN0TGVmdENvdmVyKGNvdmVyKSB7XHJcbiAgICB0aGlzLmxlZnRQaXZvdC5yZW1vdmUoY292ZXIudGhyZWUpO1xyXG4gIH1cclxuXHJcbiAgam9pblJpZ2h0Q292ZXIoY292ZXIpIHtcclxuICAgIGNvdmVyLnRocmVlLnBvc2l0aW9uLnNldCgwLC0wLjUqdGhpcy5wLmNvdmVyLmRlcHRoLDApO1xyXG4gICAgdGhpcy5yaWdodFBpdm90LmFkZChjb3Zlci50aHJlZSk7XHJcbiAgfVxyXG5cclxuICBkaXNjb25uZWN0UmlnaHRDb3Zlcihjb3Zlcikge1xyXG4gICAgdGhpcy5yaWdodFBpdm90LnJlbW92ZShjb3Zlci50aHJlZSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9CaW5kZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL0JpbmRlci5qcyIsImltcG9ydCB7JH0gZnJvbSAnLi4vbGlicyc7XHJcbmltcG9ydCBJbWFnZUJhc2UgZnJvbSAnLi9JbWFnZUJhc2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxhbmtJbWFnZSBleHRlbmRzIEltYWdlQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSB7XHJcbiAgICBzdXBlcihjb250ZXh0LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcik7XHJcblxyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkuXHJcbiAgICAgIHRoZW4oKCk9PiB7XHJcbiAgICAgICAgdGhpcy5zdGFydFJlbmRlciA9ICgpPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJCbGFua1BhZ2UoKTtcclxuICAgICAgICAgIHRoaXMuZmluaXNoUmVuZGVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZpbmlzaExvYWQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvQmxhbmtJbWFnZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvQmxhbmtJbWFnZS5qcyIsImltcG9ydCB7JCwgVEhSRUV9IGZyb20gJy4uL2xpYnMnO1xyXG5pbXBvcnQge3Byb3BzIGFzICBib29rUHJvcHN9IGZyb20gJy4uL3Byb3BzL2Jvb2snO1xyXG5pbXBvcnQgR3JhcGhVdGlscyBmcm9tICcuL0dyYXBoVXRpbHMnO1xyXG5pbXBvcnQgQmluZGVyIGZyb20gJy4vQmluZGVyJztcclxuaW1wb3J0IENvdmVyIGZyb20gJy4vQ292ZXInO1xyXG5pbXBvcnQgU2hlZXRCbG9jayBmcm9tICcuL1NoZWV0QmxvY2snO1xyXG5pbXBvcnQgU2hlZXRQaHlzaWNzIGZyb20gJy4vU2hlZXRQaHlzaWNzJztcclxuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vUGFnZU1hbmFnZXInO1xyXG5pbXBvcnQgQ3VzdG9tRXZlbnRDb252ZXJ0ZXIgZnJvbSAnLi9jb250cm9scy9DdXN0b21FdmVudENvbnZlcnRlcic7XHJcbmltcG9ydCBDaXJjbGVUYXJnZXQgZnJvbSAnLi9jb250cm9scy90YXJnZXRzL0NpcmNsZVRhcmdldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rIGV4dGVuZHMgVEhSRUUuRXZlbnREaXNwYXRjaGVyIHtcclxuICAvLyBwYWdlQ2FsbGJhY2sgc2FtcGxlc1xyXG5cclxuICAvLyAobik9PiAoe1xyXG4gIC8vICAgdHlwZTogJ2ltYWdlJyxcclxuICAvLyAgIHNyYzogJ3NhbXBsZS5wbmcnLFxyXG4gIC8vICAgaW50ZXJhY3RpdmU6IGZhbHNlXHJcbiAgLy8gfSk7XHJcbiAgLy9cclxuICAvLyAobik9PiAoe1xyXG4gIC8vICAgdHlwZTogJ2h0bWwnLFxyXG4gIC8vICAgc3JjOiAnc2FtcGxlLmh0bWwnLFxyXG4gIC8vICAgaW50ZXJhY3RpdmU6IHRydWVcclxuICAvLyB9KTtcclxuICAvL1xyXG4gIC8vIGNvbnN0IHBkZiA9IG5ldyBQZGYoJ3NhbXBsZS5wZGYnKTtcclxuICAvLyAobik9PiAoe1xyXG4gIC8vICAgdHlwZTogJ3BkZicsXHJcbiAgLy8gICBzcmM6IHBkZixcclxuICAvLyAgIGludGVyYWN0aXZlOiBmYWxzZVxyXG4gIC8vIH0pO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih2aXN1YWwsIHNoZWV0cywgcGFnZUNhbGxiYWNrLCBwcm9wcykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHNoZWV0cyA9IE1hdGgubWluKDMsIHNoZWV0cyk7XHJcbiAgICB2aXN1YWwuakNvbnRhaW5lci5hcHBlbmQoYFxyXG4gICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XHJcbiAgICAgICAgLmRlbW8tbXNnIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU0ZTE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGVtby1tc2dcIj5cclxuICAgICAgICBUaGlzIGlzIHRoZSBkZW1vIHZlcnNpb24sIG9ubHkgMTAgcGFnZXMgYXJlIGF2YWlsYWJsZS4gVXNlIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9nb28uZ2wvYnQzWmhoXCI+ZnVsbCB2ZXJzaW9uPC9hPi5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgKTtcclxuICAgIHRoaXMudmlzdWFsID0gdmlzdWFsO1xyXG4gICAgdGhpcy5wID0ge1xyXG4gICAgICAuLi5Cb29rLnByZXBhcmVQcm9wcyhwcm9wcyksXHJcbiAgICAgIHNoZWV0cyxcclxuICAgICAgcGFnZUNhbGxiYWNrXHJcbiAgICB9O1xyXG4gICAgdGhpcy5wYWdlTWFuYWdlciA9IG5ldyBQYWdlTWFuYWdlcih2aXN1YWwsIHRoaXMsIHRoaXMucCk7XHJcblxyXG4gICAgdGhpcy50aHJlZSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuICAgIHRoaXMuYmluZGVyID0gbmV3IEJpbmRlcih2aXN1YWwsIHRoaXMucCk7XHJcbiAgICB0aGlzLnRocmVlLmFkZCh0aGlzLmJpbmRlci50aHJlZSk7XHJcblxyXG4gICAgdGhpcy5sZWZ0Q292ZXIgPSBuZXcgQ292ZXIodmlzdWFsLCB7Li4udGhpcy5wLCBzZXRUZXh0dXJlOiB0aGlzLnNldExlZnRDb3ZlclRleHR1cmUuYmluZCh0aGlzKX0sIE1hdGguUEkvMiwgJ29wZW5lZCcpO1xyXG4gICAgdGhpcy5iaW5kZXIuam9pbkxlZnRDb3Zlcih0aGlzLmxlZnRDb3Zlcik7XHJcbiAgICB0aGlzLnN1YnNjcmliZVNoZWV0QmxvY2sodGhpcy5sZWZ0Q292ZXIsIDApO1xyXG4gICAgdGhpcy5yaWdodENvdmVyID0gbmV3IENvdmVyKHZpc3VhbCwgey4uLnRoaXMucCwgc2V0VGV4dHVyZTogdGhpcy5zZXRSaWdodENvdmVyVGV4dHVyZS5iaW5kKHRoaXMpfSwgMCwgJ2Nsb3NlZCcpO1xyXG4gICAgdGhpcy5iaW5kZXIuam9pblJpZ2h0Q292ZXIodGhpcy5yaWdodENvdmVyKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlU2hlZXRCbG9jayh0aGlzLnJpZ2h0Q292ZXIsIDIqKHRoaXMucC5zaGVldHMrMSkpO1xyXG5cclxuICAgIHRoaXMudGhyZWVTaGVldEJsb2NrcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgdGhpcy50aHJlZS5hZGQodGhpcy50aHJlZVNoZWV0QmxvY2tzKTtcclxuICAgIHRoaXMudGhyZWVTaGVldEJsb2Nrcy5wb3NpdGlvbi5zZXQoMC41KnRoaXMucC5jb3Zlci5kZXB0aC0wLjUqc2hlZXRzKnRoaXMucC5wYWdlLmRlcHRoLC0wLjUqc2hlZXRzKnRoaXMucC5wYWdlLmRlcHRoLDApO1xyXG5cclxuICAgIHRoaXMuc2hlZXRCbG9ja3MgPSBbXTtcclxuICAgIGlmKHNoZWV0cz4wKSB7XHJcbiAgICAgIHRoaXMuYWRkU2hlZXRCbG9jaygwLCBuZXcgU2hlZXRCbG9jayh2aXN1YWwsIHsuLi50aGlzLnAsIHNldFRleHR1cmU6IHRoaXMuc2V0UGFnZVRleHR1cmUuYmluZCh0aGlzKX0sIDAsIHNoZWV0cywgMCwgJ2Nsb3NlZCcpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgIHRoaXMuY2xvc2VkQW5nbGUgPSAwO1xyXG4gICAgdGhpcy5zZXQodGhpcy5hbmdsZSwwKTtcclxuXHJcbiAgICB0aGlzLnRocmVlLnBvc2l0aW9uLnNldCgtMC41KnRoaXMucC5jb3Zlci5kZXB0aCswLjUqc2hlZXRzKnRoaXMucC5wYWdlLmRlcHRoLDAsMCk7XHJcbiAgICB0aGlzLnNoZWV0UGh5c2ljcyA9IG5ldyBTaGVldFBoeXNpY3ModGhpcy5wLnBhZ2Uud2lkdGgvdGhpcy5wLnNjYWxlLCB0aGlzLnAuZ3Jhdml0eSwgdGhpcy5wLnBhZ2UuY29ybmVyRGV2aWF0aW9uKTtcclxuXHJcbiAgICB0aGlzLmJpbmRzID0ge1xyXG4gICAgICB1cGRhdGU6IHRoaXMudXBkYXRlLmJpbmQodGhpcylcclxuICAgIH07XHJcbiAgICB0aGlzLnZpc3VhbC5hZGRSZW5kZXJDYWxsYmFjayh0aGlzLmJpbmRzLnVwZGF0ZSk7XHJcblxyXG4gICAgdGhpcy5iaW5kcy5vblBpY2tDYWxsYmFjayA9IHRoaXMub25QaWNrQ2FsbGJhY2suYmluZCh0aGlzKVxyXG4gICAgdGhpcy52aXN1YWwuZHJhZy5vblBpY2tDYWxsYmFjayA9IHRoaXMuYmluZHMub25QaWNrQ2FsbGJhY2s7XHJcbiAgICB0aGlzLmJpbmRzLm9uRHJhZ0NhbGxiYWNrID0gdGhpcy5vbkRyYWdDYWxsYmFjay5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnZpc3VhbC5kcmFnLm9uRHJhZ0NhbGxiYWNrID0gdGhpcy5iaW5kcy5vbkRyYWdDYWxsYmFjaztcclxuICAgIHRoaXMuYmluZHMub25SZWxlYXNlQ2FsbGJhY2sgPSB0aGlzLm9uUmVsZWFzZUNhbGxiYWNrLmJpbmQodGhpcylcclxuICAgIHRoaXMudmlzdWFsLmRyYWcub25SZWxlYXNlQ2FsbGJhY2sgPSB0aGlzLmJpbmRzLm9uUmVsZWFzZUNhbGxiYWNrO1xyXG5cclxuICAgIHRoaXMuZHJhZ0FuZ2xlID0gMC4wNTtcclxuXHJcbiAgICB0aGlzLnZpc3VhbC5hZGRPYmplY3QodGhpcy50aHJlZSk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgdGhpcy52aXN1YWwucmVtb3ZlT2JqZWN0KHRoaXMudGhyZWUpO1xyXG4gICAgdGhpcy5zaGVldFBoeXNpY3MuZGlzcG9zZSgpO1xyXG4gICAgZGVsZXRlIHRoaXMudmlzdWFsLmRyYWcub25QaWNrQ2FsbGJhY2s7XHJcbiAgICBkZWxldGUgdGhpcy52aXN1YWwuZHJhZy5vbkRyYWdDYWxsYmFjaztcclxuICAgIGRlbGV0ZSB0aGlzLnZpc3VhbC5kcmFnLm9uUmVsZWFzZUNhbGxiYWNrO1xyXG4gICAgdGhpcy52aXN1YWwucmVtb3ZlUmVuZGVyQ2FsbGJhY2sodGhpcy5iaW5kcy51cGRhdGUpO1xyXG4gICAgdGhpcy5yZW1vdmVTaGVldEJsb2NrcygwLCB0aGlzLnNoZWV0QmxvY2tzLmxlbmd0aCk7XHJcbiAgICB0aGlzLmJpbmRlci5kaXNjb25uZWN0TGVmdENvdmVyKHRoaXMubGVmdENvdmVyKTtcclxuICAgIHRoaXMucmVtb3ZlU2hlZXRCbG9jayh0aGlzLmxlZnRDb3Zlcik7XHJcbiAgICB0aGlzLmJpbmRlci5kaXNjb25uZWN0UmlnaHRDb3Zlcih0aGlzLnJpZ2h0Q292ZXIpO1xyXG4gICAgdGhpcy5yZW1vdmVTaGVldEJsb2NrKHRoaXMucmlnaHRDb3Zlcik7XHJcbiAgICB0aGlzLmJpbmRlci5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLnBhZ2VNYW5hZ2VyLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIC8vIHB1YmxpY3Mge1xyXG5cclxuICBnZXRQYWdlQ2FsbGJhY2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wLnBhZ2VDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIGlzUHJvY2Vzc2luZygpIHtcclxuICAgIHJldHVybiB0aGlzLnNoZWV0UGh5c2ljcy5nZXRTaXplKCkhPT0wO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZXMoKSB7XHJcbiAgICByZXR1cm4gNCsyKnRoaXMucC5zaGVldHM7XHJcbiAgfVxyXG5cclxuICBzZXRGbGlwUHJvZ3Jlc3NDbGIoY2xiKSB7XHJcbiAgICB0aGlzLnAuZmxpcFByb2dyZXNzQ2xiID0gY2xiO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5qZWN0b3IoaW5qZWN0b3IpIHtcclxuICAgIHRoaXMucC5pbmplY3RvciA9IGluamVjdG9yO1xyXG4gIH1cclxuXHJcbiAgaXNBY3RpdmVQYWdlKG4pIHtcclxuICAgIGxldCByZXMgPSB0cnVlO1xyXG4gICAgaWYobj4xICYmIG48dGhpcy5nZXRQYWdlcygpLTIpIHtcclxuICAgICAgZm9yKGxldCBiIG9mIHRoaXMuc2hlZXRCbG9ja3MpIHtcclxuICAgICAgICBpZihuLTI+MipiLnAuZmlyc3QgJiYgbi0yPDIqYi5wLmxhc3QtMSkge1xyXG4gICAgICAgICAgcmVzID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGdldEJsb2NrQnlQYWdlKG4pIHtcclxuICAgIGxldCBibG9jaztcclxuICAgIGlmKG48Mikge1xyXG4gICAgICBibG9jayA9IHRoaXMubGVmdENvdmVyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihuPDIqKHRoaXMucC5zaGVldHMrMSkpIHtcclxuICAgICAgZm9yKGxldCBiIG9mIHRoaXMuc2hlZXRCbG9ja3MpIHtcclxuICAgICAgICBpZihuLTI+PTIqYi5wLmZpcnN0ICYmIG4tMjwyKmIucC5sYXN0KSB7XHJcbiAgICAgICAgICBibG9jayA9IGI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBibG9jayA9IHRoaXMucmlnaHRDb3ZlcjtcclxuICAgIH1cclxuICAgIHJldHVybiBibG9jaztcclxuICB9XHJcblxyXG4gIGdldEJsb2NrUGFnZXMoYmxvY2spIHtcclxuICAgIGxldCByYW5nZTtcclxuICAgIHN3aXRjaCAoYmxvY2spIHtcclxuICAgICAgY2FzZSB0aGlzLmxlZnRDb3Zlcjoge1xyXG4gICAgICAgICAgcmFuZ2UgPSBbMCwgMV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSB0aGlzLnJpZ2h0Q292ZXI6IHtcclxuICAgICAgICByYW5nZSA9IFsyKih0aGlzLnAuc2hlZXRzKzEpLCAyKih0aGlzLnAuc2hlZXRzKzEpKzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICByYW5nZSA9IGJsb2NrPyBbMiooYmxvY2sucC5maXJzdCsxKSwgMiooYmxvY2sucC5sYXN0KzEpLTFdOiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByYW5nZTtcclxuICB9XHJcblxyXG4gIGdldFBhZ2UoKSB7XHJcbiAgICBjb25zdCBQSSA9IE1hdGguUEk7XHJcbiAgICBsZXQgcDtcclxuICAgIGlmKHRoaXMuYW5nbGUgPT09IFBJLzIgfHwgdGhpcy5hbmdsZSA9PT0gMypQSS8yKSB7XHJcbiAgICAgIGZvcihsZXQgYmxvY2sgb2YgdGhpcy5zaGVldEJsb2Nrcykge1xyXG4gICAgICAgIGlmKGJsb2NrLmFuZ2xlPD1QSS8yKSB7XHJcbiAgICAgICAgICBwID0gdGhpcy5nZXRCbG9ja1BhZ2VzKGJsb2NrKVswXS0xO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKCFwKSB7XHJcbiAgICAgICAgcCA9IHRoaXMuZ2V0UGFnZXMoKS0zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMuYW5nbGU8UEkvMikge1xyXG4gICAgICBwID0gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5hbmdsZT4zKlBJLzIpIHtcclxuICAgICAgcCA9IDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKHRoaXMuYW5nbGU8UEkpIHtcclxuICAgICAgcCA9IHRoaXMuZ2V0UGFnZXMoKS0zO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0aGlzLmFuZ2xlPj1QSSkge1xyXG4gICAgICBwID0gdGhpcy5nZXRQYWdlcygpLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcDtcclxuICB9XHJcblxyXG4gIGdldExlZnRGbGlwcGluZygpIHtcclxuICAgIGxldCBibG9jaztcclxuICAgIGNvbnN0IGxlZnQgPSB0aGlzLnNoZWV0QmxvY2tzWzBdLCBQSSA9IE1hdGguUEk7XHJcbiAgICBpZih0aGlzLmFuZ2xlPT09UEkpIHtcclxuICAgICAgYmxvY2sgPSB0aGlzLnJpZ2h0Q292ZXI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYobGVmdCAmJiBsZWZ0LnN0YXRlPT09J2Nsb3NlZCcgJiYgbGVmdC5hbmdsZT5QSS8yKSB7XHJcbiAgICAgICAgYmxvY2sgPSBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5hbmdsZSA9PT0gUEkvMiB8fCB0aGlzLmFuZ2xlID09PSAzKlBJLzIpIHtcclxuICAgICAgICBibG9jayA9IHRoaXMubGVmdENvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbiAgfVxyXG5cclxuICBnZXRSaWdodEZsaXBwaW5nKCkge1xyXG4gICAgbGV0IGJsb2NrO1xyXG4gICAgY29uc3QgcmlnaHQgPSB0aGlzLnNoZWV0QmxvY2tzW3RoaXMuc2hlZXRCbG9ja3MubGVuZ3RoLTFdLCBQSSA9IE1hdGguUEk7XHJcbiAgICBpZih0aGlzLmFuZ2xlPT09MCkge1xyXG4gICAgICBibG9jayA9IHRoaXMubGVmdENvdmVyO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmKHJpZ2h0ICYmIHJpZ2h0LnN0YXRlPT09J2Nsb3NlZCcgJiYgcmlnaHQuYW5nbGU8PVBJLzIpIHtcclxuICAgICAgICBibG9jayA9IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5hbmdsZT09PVBJLzIgfHwgdGhpcy5hbmdsZSA9PT0gMypQSS8yKSB7XHJcbiAgICAgICAgYmxvY2sgPSB0aGlzLnJpZ2h0Q292ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBibG9jaztcclxuICB9XHJcblxyXG4gIGdldENsb3NlZEJsb2NrQW5nbGUoYW5nbGUpIHtcclxuICAgIGxldCBjbG9zZWRBbmdsZSwge1BJfSA9IE1hdGg7XHJcblxyXG4gICAgaWYodGhpcy5sZWZ0Q292ZXIucGh5c2ljSWQpIHtcclxuICAgICAgbGV0IHRlc3Q7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdGVzdCA9IE1hdGguYWJzKHRoaXMuc2hlZXRQaHlzaWNzLmdldFBhcmFtZXRyKHRoaXMubGVmdENvdmVyLnBoeXNpY0lkLCAnYW5nbGUnKS1hbmdsZSlcclxuICAgICAgfVxyXG4gICAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgdGVzdCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY2xvc2VkQW5nbGUgPSBhbmdsZT5QSS8yIHx8IHRlc3Q+UEkvNj8gUEkvMjogdGhpcy5jbG9zZWRBbmdsZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5yaWdodENvdmVyLnBoeXNpY0lkKSB7XHJcbiAgICAgIGxldCB0ZXN0O1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRlc3QgPSBNYXRoLmFicyh0aGlzLnNoZWV0UGh5c2ljcy5nZXRQYXJhbWV0cih0aGlzLnJpZ2h0Q292ZXIucGh5c2ljSWQsICdhbmdsZScpLWFuZ2xlKVxyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoKGUpIHtcclxuICAgICAgICB0ZXN0ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBjbG9zZWRBbmdsZSA9IGFuZ2xlPFBJLzIgfHwgdGVzdD5QSS82PyBQSS8yKzFlLTc6IHRoaXMuY2xvc2VkQW5nbGU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY2xvc2VkQW5nbGUgPSBQSS8yKyhhbmdsZSE9PTApKjFlLTc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BlbmVkQW5nbGU6IGFuZ2xlLFxyXG4gICAgICBjbG9zZWRBbmdsZSxcclxuICAgICAgYmluZGVyVHVybjogdGhpcy5jbG9zZWRBbmdsZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZsaXBMZWZ0KHNpemU9MSwgcHJvZ3Jlc3NDbGI9dGhpcy5wLmZsaXBQcm9ncmVzc0NsYikge1xyXG4gICAgbGV0IGJsb2NrO1xyXG4gICAgaWYodGhpcy5zaGVldFBoeXNpY3MuZ2V0U2l6ZSgpPDI1KSB7XHJcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnNoZWV0QmxvY2tzWzBdLCBQSSA9IE1hdGguUEk7XHJcbiAgICAgIGlmKHRoaXMuYW5nbGU9PT1QSSkge1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFBoeXNpY3MoXHJcbiAgICAgICAgICBibG9jaz10aGlzLnJpZ2h0Q292ZXIsXHJcbiAgICAgICAgICB0aGlzLnAuY292ZXIubWFzcyxcclxuICAgICAgICAgIFBJLFxyXG4gICAgICAgICAgLXRoaXMucC5jb3Zlci5zdGFydFZlbG9jaXR5LFxyXG4gICAgICAgICAgdGhpcy5wLmNvdmVyLmZsZXhpYmlsaXR5LFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIChhbmdsZSxoZWlnaHQpPT50aGlzLnNldCgzKlBJLzItYW5nbGUvMixoZWlnaHQpLFxyXG4gICAgICAgICAgKGFuZ2xlLGhlaWdodCk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KDMqUEkvMi1hbmdsZS8yLDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFNoZWV0QmxvY2tzKGFuZ2xlPyBQSTogUEkvMisxZS03LCdjbG9zZWQnKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm9ncmVzc0NsYlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYobGVmdCAmJiBsZWZ0LnN0YXRlPT09J2Nsb3NlZCcgJiYgbGVmdC5hbmdsZT5QSS8yKSB7XHJcbiAgICAgICAgICBibG9jayA9IHNpemU8bGVmdC5nZXRTaXplKCk/IHRoaXMuc3BsaXRTaGVldEJsb2NrKDAsIGxlZnQuZ2V0U2l6ZSgpLXNpemUpWzFdOiBsZWZ0O1xyXG4gICAgICAgICAgdGhpcy5jb25uZWN0UGh5c2ljcyhcclxuICAgICAgICAgICAgYmxvY2ssXHJcbiAgICAgICAgICAgIHRoaXMucC5wYWdlLm1hc3MqYmxvY2suZ2V0U2l6ZSgpLFxyXG4gICAgICAgICAgICBQSSxcclxuICAgICAgICAgICAgLXRoaXMucC5wYWdlLnN0YXJ0VmVsb2NpdHksXHJcbiAgICAgICAgICAgIHRoaXMucC5wYWdlLmZsZXhpYmlsaXR5LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAoYW5nbGUsaGVpZ2h0KT0+YmxvY2suc2V0KHRoaXMuZ2V0Q2xvc2VkQmxvY2tBbmdsZShhbmdsZSksJ29wZW5lZCcsaGVpZ2h0KSxcclxuICAgICAgICAgICAgQm9vay5maW5pc2hBbmltYXRpb25DbGIuYmluZCh7Ym9vazogdGhpcywgYmxvY2t9KSxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NDbGJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5hbmdsZSA9PT0gUEkvMiB8fCB0aGlzLmFuZ2xlID09PSAzKlBJLzIpIHtcclxuICAgICAgICAgIHRoaXMuY29ubmVjdFBoeXNpY3MoXHJcbiAgICAgICAgICAgIGJsb2NrPXRoaXMubGVmdENvdmVyLFxyXG4gICAgICAgICAgICB0aGlzLnAuY292ZXIubWFzcyxcclxuICAgICAgICAgICAgUEksXHJcbiAgICAgICAgICAgIC10aGlzLnAuY292ZXIuc3RhcnRWZWxvY2l0eSxcclxuICAgICAgICAgICAgdGhpcy5wLmNvdmVyLmZsZXhpYmlsaXR5LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAoYW5nbGUsaGVpZ2h0KT0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldCgyKlBJLWFuZ2xlLzIsaGVpZ2h0KTtcclxuICAgICAgICAgICAgICBpZihhbmdsZT5QSS8yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNoZWV0QmxvY2tzKGFuZ2xlPyBQSS8yOiAwLCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChhbmdsZSxoZWlnaHQpPT4gdGhpcy5zZXQoYW5nbGU9PT0wPyAwOiAyKlBJLWFuZ2xlLzIsMCksXHJcbiAgICAgICAgICAgIHByb2dyZXNzQ2xiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgZmxpcFJpZ2h0KHNpemU9MSwgcHJvZ3Jlc3NDbGI9dGhpcy5wLmZsaXBQcm9ncmVzc0NsYikge1xyXG4gICAgbGV0IGJsb2NrO1xyXG4gICAgaWYodGhpcy5zaGVldFBoeXNpY3MuZ2V0U2l6ZSgpPDI1KSB7XHJcbiAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5zaGVldEJsb2Nrc1t0aGlzLnNoZWV0QmxvY2tzLmxlbmd0aC0xXSwgUEkgPSBNYXRoLlBJO1xyXG4gICAgICBpZih0aGlzLmFuZ2xlPT09MCkge1xyXG4gICAgICAgIHRoaXMuY29ubmVjdFBoeXNpY3MoXHJcbiAgICAgICAgICBibG9jaz10aGlzLmxlZnRDb3ZlcixcclxuICAgICAgICAgIHRoaXMucC5jb3Zlci5tYXNzLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIHRoaXMucC5jb3Zlci5zdGFydFZlbG9jaXR5LFxyXG4gICAgICAgICAgdGhpcy5wLmNvdmVyLmZsZXhpYmlsaXR5LFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIChhbmdsZSxoZWlnaHQpPT50aGlzLnNldChhbmdsZS8yLGhlaWdodCksXHJcbiAgICAgICAgICAoYW5nbGUsaGVpZ2h0KT0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXQoYW5nbGUvMiwwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTaGVldEJsb2NrcyhhbmdsZT8gUEkvMjogMCwnY2xvc2VkJyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcHJvZ3Jlc3NDbGJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKHJpZ2h0ICYmIHJpZ2h0LnN0YXRlPT09J2Nsb3NlZCcgJiYgcmlnaHQuYW5nbGU8PVBJLzIpIHtcclxuICAgICAgICAgIGJsb2NrID0gc2l6ZTxyaWdodC5nZXRTaXplKCk/IHRoaXMuc3BsaXRTaGVldEJsb2NrKHRoaXMuc2hlZXRCbG9ja3MubGVuZ3RoLTEsIHNpemUpWzBdOiByaWdodDtcclxuICAgICAgICAgIHRoaXMuY29ubmVjdFBoeXNpY3MoXHJcbiAgICAgICAgICAgIGJsb2NrLFxyXG4gICAgICAgICAgICB0aGlzLnAucGFnZS5tYXNzKmJsb2NrLmdldFNpemUoKSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgdGhpcy5wLnBhZ2Uuc3RhcnRWZWxvY2l0eSxcclxuICAgICAgICAgICAgdGhpcy5wLnBhZ2UuZmxleGliaWxpdHksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIChhbmdsZSxoZWlnaHQpPT5ibG9jay5zZXQodGhpcy5nZXRDbG9zZWRCbG9ja0FuZ2xlKGFuZ2xlKSwnb3BlbmVkJyxoZWlnaHQpLFxyXG4gICAgICAgICAgICBCb29rLmZpbmlzaEFuaW1hdGlvbkNsYi5iaW5kKHtib29rOiB0aGlzLCBibG9ja30pLFxyXG4gICAgICAgICAgICBwcm9ncmVzc0NsYlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmFuZ2xlPT09UEkvMiB8fCB0aGlzLmFuZ2xlID09PSAzKlBJLzIpIHtcclxuICAgICAgICAgIHRoaXMuY29ubmVjdFBoeXNpY3MoXHJcbiAgICAgICAgICAgIGJsb2NrPXRoaXMucmlnaHRDb3ZlcixcclxuICAgICAgICAgICAgdGhpcy5wLmNvdmVyLm1hc3MsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIHRoaXMucC5jb3Zlci5zdGFydFZlbG9jaXR5LFxyXG4gICAgICAgICAgICB0aGlzLnAuY292ZXIuZmxleGliaWxpdHksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIChhbmdsZSxoZWlnaHQpPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0KFBJLzIrYW5nbGUvMixoZWlnaHQpO1xyXG4gICAgICAgICAgICAgIGlmKGFuZ2xlPFBJLzIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2hlZXRCbG9ja3MoUEkvMisxZS03LCdjbG9zZWQnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChhbmdsZSxoZWlnaHQpPT50aGlzLnNldChQSS8yK2FuZ2xlLzIsMCksXHJcbiAgICAgICAgICAgIHByb2dyZXNzQ2xiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLy8gfVxyXG5cclxuICBjbGVhckhvdmVySW5mbygpIHtcclxuICAgIHRoaXMucGFnZU1hbmFnZXIudHVybk9uRXZlbnRzKCk7XHJcbiAgICBkZWxldGUgdGhpcy5ob3ZlckluZm8uYmxvY2suZm9yY2U7XHJcbiAgICBkZWxldGUgdGhpcy5ob3ZlckluZm8uYmxvY2suY29ybmVyRm9yY2U7XHJcbiAgICBkZWxldGUgdGhpcy5ob3ZlckluZm87XHJcbiAgfVxyXG5cclxuICBjb21wdXRlVGFyZ2V0KHBvaW50KSB7XHJcbiAgICBsZXQge3gsIHl9ID0gcG9pbnQ7XHJcbiAgICB5ID0gTWF0aC5tYXgoMCwgeSk7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5kcmFnQW5nbGUsIE1hdGgubWluKE1hdGguUEktdGhpcy5kcmFnQW5nbGUsIE1hdGguYWNvcyh4L01hdGguc3FydCh4KngreSp5KSkpKTtcclxuICB9XHJcblxyXG4gIG9uUGlja0NhbGxiYWNrKG9iamVjdCkge1xyXG4gICAgbGV0IHJlcyA9IGZhbHNlO1xyXG4gICAgY29uc3QgYmxvY2sgPSBvYmplY3Qub2JqZWN0LnVzZXJEYXRhLnNlbGYsXHJcbiAgICAgICAgICBwID0gey4uLm9iamVjdC51dn0sIGkgPSBvYmplY3QuZmFjZS5tYXRlcmlhbEluZGV4O1xyXG4gICAgaWYoaTwyKSB7XHJcbiAgICAgIHAueCA9IGk9PT0wPyBwLng6IDEtcC54O1xyXG4gICAgICBpZihibG9jay5jb3JuZXJUYXJnZXQudGVzdEludGVyc2VjdGlvbihudWxsLCBwKSAmJiBibG9jay5waHlzaWNJZCkge1xyXG4gICAgICAgIGlmKHRoaXMuaG92ZXJJbmZvKSB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFySG92ZXJJbmZvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJsb2NrLmZvcmNlID0gU2hlZXRQaHlzaWNzLmRyYWdGb3JjZUNsYjtcclxuICAgICAgICBibG9jay5jb3JuZXJGb3JjZSA9IFNoZWV0UGh5c2ljcy5nZXREcmFnQ29ybmVyRm9yY2VDbGIodGhpcy5jb21wdXRlVGFyZ2V0KG9iamVjdC5wb2ludCkpO1xyXG4gICAgICAgIHRoaXMuZHJhZ0luZm8gPSB7XHJcbiAgICAgICAgICBvYmplY3QsXHJcbiAgICAgICAgICBibG9ja1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhZ2VNYW5hZ2VyLnR1cm5PZmZFdmVudHMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIG9uRHJhZ0NhbGxiYWNrKHBvaW50KSB7XHJcbiAgICBjb25zdCBibG9jayA9IHRoaXMuZHJhZ0luZm8uYmxvY2ssIHAgPSBibG9jay5nZXRQcm9wcygpO1xyXG4gICAgYmxvY2suZm9yY2UgPSBTaGVldFBoeXNpY3MuZHJhZ0ZvcmNlQ2xiO1xyXG4gICAgYmxvY2suY29ybmVyRm9yY2UgPSBTaGVldFBoeXNpY3MuZ2V0RHJhZ0Nvcm5lckZvcmNlQ2xiKHRoaXMuY29tcHV0ZVRhcmdldChwb2ludCkpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBvblJlbGVhc2VDYWxsYmFjaygpIHtcclxuICAgIGRlbGV0ZSB0aGlzLmRyYWdJbmZvLmJsb2NrLmZvcmNlO1xyXG4gICAgZGVsZXRlIHRoaXMuZHJhZ0luZm8uYmxvY2suY29ybmVyRm9yY2U7XHJcbiAgICBkZWxldGUgdGhpcy5kcmFnSW5mbztcclxuICAgIHRoaXMucGFnZU1hbmFnZXIudHVybk9uRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGbGlwcGluZyhpKSB7XHJcbiAgICByZXR1cm4gaT8gdGhpcy5nZXRMZWZ0RmxpcHBpbmcoKTogdGhpcy5nZXRSaWdodEZsaXBwaW5nKCk7XHJcbiAgfVxyXG5cclxuICBmbGlwKGksIHNpemU9MSkge1xyXG4gICAgcmV0dXJuIGk/IHRoaXMuZmxpcExlZnQoc2l6ZSk6IHRoaXMuZmxpcFJpZ2h0KHNpemUpO1xyXG4gIH1cclxuXHJcbiAgY29ybmVyQ2FsbGJhY2soZSwgZGF0YSkge1xyXG4gICAgY29uc3Qge2ksIG59ID0gZGF0YS5kYXRhO1xyXG4gICAgaWYoZS50eXBlPT09J21vdXNlb3ZlcicpIHtcclxuICAgICAgaWYodGhpcy5ob3ZlckluZm8pIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1dyb25nIHN0YXRlOiBlbGVtZW50IGlzIGFscmVhZHkgaG92ZXInKTtcclxuICAgICAgICBpZih0aGlzLmhvdmVySW5mby5uIT09bikge1xyXG4gICAgICAgICAgdGhpcy5jbGVhckhvdmVySW5mbygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZighdGhpcy5ob3ZlckluZm8gJiYgIXRoaXMuZHJhZ0luZm8pIHtcclxuICAgICAgICBsZXQgYmxvY2s7XHJcbiAgICAgICAgY29uc3QgaG92ZXJBbmdsZSA9IDAuMDIsXHJcbiAgICAgICAgICAgICAgaG92ZXIgPSB0aGlzLmdldEJsb2NrQnlQYWdlKG4pLFxyXG4gICAgICAgICAgICAgIHBvc3NpYmxlID0gdGhpcy5nZXRGbGlwcGluZyhpKTtcclxuICAgICAgICBpZihuPjEgJiYgbjwyKih0aGlzLnAuc2hlZXRzKzEpICYmIGhvdmVyLnBoeXNpY0lkICYmIChob3Zlci5hbmdsZTxob3ZlckFuZ2xlIHx8IGhvdmVyLmFuZ2xlPk1hdGguUEktaG92ZXJBbmdsZSkpIHtcclxuICAgICAgICAgIGJsb2NrID0gaG92ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaG92ZXI9PT1wb3NzaWJsZSkge1xyXG4gICAgICAgICAgY29uc3Qgc2hlZXRCbG9ja3MgPSBbXHJcbiAgICAgICAgICAgIHRoaXMubGVmdENvdmVyLFxyXG4gICAgICAgICAgICAuLi50aGlzLnNoZWV0QmxvY2tzLFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Q292ZXJcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgICBjb25zdCBqID0gc2hlZXRCbG9ja3MuaW5kZXhPZihob3ZlciksIG5leHRCbG9jayA9IH5qPyBzaGVldEJsb2Nrc1tqKzIqaS0xXTogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgaWYoIW5leHRCbG9jayB8fCAhbmV4dEJsb2NrLnBoeXNpY0lkIHx8IG5leHRCbG9jay5hbmdsZT5ob3ZlckFuZ2xlICYmIG5leHRCbG9jay5hbmdsZTxNYXRoLlBJLWhvdmVyQW5nbGUpIHtcclxuICAgICAgICAgICAgYmxvY2sgPSB0aGlzLmZsaXAoaSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hlZXRQaHlzaWNzLnNldFBhcmFtZXRyKGJsb2NrLnBoeXNpY0lkLCAndmVsb2NpdHknLCAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoYmxvY2spIHtcclxuICAgICAgICAgIHRoaXMucGFnZU1hbmFnZXIudHVybk9mZkV2ZW50cygpO1xyXG4gICAgICAgICAgY29uc3QgIHAgPSBibG9jay5nZXRQcm9wcygpO1xyXG4gICAgICAgICAgYmxvY2suZm9yY2UgPSB0aGlzLnNoZWV0UGh5c2ljcy5nZXRUYXJnZXRGb3JjZUNsYihwLm1hc3MqYmxvY2suZ2V0U2l6ZSgpLCBpPyBNYXRoLlBJLWhvdmVyQW5nbGU6IGhvdmVyQW5nbGUpO1xyXG4gICAgICAgICAgYmxvY2suY29ybmVyRm9yY2UgPSAoKT0+IChpPyAtMTogMSkqU2hlZXRQaHlzaWNzLmhvdmVyQ29ybmVyRm9yY2VDbGIoKTtcclxuICAgICAgICAgIHRoaXMuc2hlZXRQaHlzaWNzLnNldFBhcmFtZXRyKGJsb2NrLnBoeXNpY0lkLCAnYW5nbGUnLCBpPyBNYXRoLlBJLTAuNSpob3ZlckFuZ2xlOiAwLjUqaG92ZXJBbmdsZSk7XHJcbiAgICAgICAgICB0aGlzLmhvdmVySW5mbyA9IHtcclxuICAgICAgICAgICAgbixcclxuICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZSgxLzMwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcy5ob3ZlckluZm8gJiYgZS50eXBlPT09J21vdXNlb3V0JyAmJiBuPT09dGhpcy5ob3ZlckluZm8ubikge1xyXG4gICAgICB0aGlzLmNsZWFySG92ZXJJbmZvKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGUudHlwZT09PSdjbGljaycpIHtcclxuICAgICAgY29uc3QgaG92ZXIgPSB0aGlzLmdldEJsb2NrQnlQYWdlKG4pO1xyXG4gICAgICBpZihob3Zlci5waHlzaWNJZCkge1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5zaGVldFBoeXNpY3MuZ2V0UGFyYW1ldHIoaG92ZXIucGh5c2ljSWQsICdhbmdsZScpO1xyXG4gICAgICAgIGlmKChpPyBNYXRoLlBJLWFuZ2xlOiBhbmdsZSk8Myp0aGlzLmRyYWdBbmdsZSkge1xyXG4gICAgICAgICAgY29uc3QgaWQgPSBob3Zlci5waHlzaWNJZCxcclxuICAgICAgICAgICAgICAgIHByb3BzID0gaG92ZXIuZ2V0UHJvcHMoKTtcclxuICAgICAgICAgIHRoaXMuc2hlZXRQaHlzaWNzLnNldFBhcmFtZXRyKGlkLCAndmVsb2NpdHknLCAoaT8gLTE6IDEpKnByb3BzLnN0YXJ0VmVsb2NpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkU2hlZXRCbG9jayhwLCBibG9jaykge1xyXG4gICAgdGhpcy5zaGVldEJsb2Nrcy5zcGxpY2UocCwgMCwgYmxvY2spO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVTaGVldEJsb2NrKGJsb2NrLCAyKTtcclxuICAgIHRoaXMudGhyZWVTaGVldEJsb2Nrcy5hZGQoYmxvY2sudGhyZWUpO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlU2hlZXRCbG9jayhibG9jaywgb2Zmc2V0KSB7XHJcbiAgICBjb25zdCBldmVudENvbnZlcnRlciA9IG5ldyBDdXN0b21FdmVudENvbnZlcnRlcih0aGlzLnZpc3VhbC53bmQsIHRoaXMudmlzdWFsLmRvYywgQ2lyY2xlVGFyZ2V0LnRlc3QpLFxyXG4gICAgICAgICAgciA9IDAuMTUsXHJcbiAgICAgICAgICB0YXJnZXQgPSBuZXcgQ2lyY2xlVGFyZ2V0KDEtMC41KnIsIDAuNSpyLCByKTtcclxuICAgIHRhcmdldC5ibG9jayA9IGJsb2NrO1xyXG4gICAgdGFyZ2V0LmNhbGxiYWNrID0gdGhpcy5jb3JuZXJDYWxsYmFjay5iaW5kKHRoaXMpO1xyXG4gICAgZXZlbnRDb252ZXJ0ZXIuYWRkQ3VzdG9tKHRhcmdldCk7XHJcbiAgICBibG9jay5jb3JuZXJUYXJnZXQgPSB0YXJnZXQ7XHJcbiAgICBibG9jay50aHJlZS51c2VyRGF0YS5tb3VzZUNhbGxiYWNrID0gKGUsIGRhdGEpPT4ge1xyXG4gICAgICBjb25zdCBpID0gZGF0YS5mYWNlLm1hdGVyaWFsSW5kZXg7XHJcbiAgICAgIGlmKGk8Mikge1xyXG4gICAgICAgIGNvbnN0IG4gPSBpPT09MD8gb2Zmc2V0KzIqYmxvY2sucC5maXJzdDogb2Zmc2V0KzIqYmxvY2sucC5sYXN0LTE7XHJcbiAgICAgICAgZXZlbnRDb252ZXJ0ZXIuY29udmVydChlLCB7eDogaT09PTA/IGRhdGEudXYueDogMS1kYXRhLnV2LngsIHk6IGRhdGEudXYueSwgaSwgbn0pO1xyXG4gICAgICAgIHRoaXMucGFnZU1hbmFnZXIudHJhbnNmZXJFdmVudFRvVGV4dHVyZShuLCBlLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMudmlzdWFsLmRyYWcuYWRkVGhyZWUoYmxvY2sudGhyZWUpO1xyXG4gICAgdGhpcy52aXN1YWwubW91c2VFdmVudHMuYWRkVGhyZWUoYmxvY2sudGhyZWUpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2hlZXRCbG9jayhibG9jaykge1xyXG4gICAgdGhpcy52aXN1YWwubW91c2VFdmVudHMucmVtb3ZlVGhyZWUoYmxvY2sudGhyZWUpO1xyXG4gICAgdGhpcy52aXN1YWwuZHJhZy5yZW1vdmVUaHJlZShibG9jay50aHJlZSk7XHJcbiAgICB0aGlzLnRocmVlU2hlZXRCbG9ja3MucmVtb3ZlKGJsb2NrLnRocmVlKTtcclxuICAgIGJsb2NrLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVNoZWV0QmxvY2tzKGZpcnN0LCBzaXplKSB7XHJcbiAgICBjb25zdCBibG9ja3MgPSB0aGlzLnNoZWV0QmxvY2tzLnNwbGljZShmaXJzdCwgc2l6ZSk7XHJcbiAgICBmb3IobGV0IGJsb2NrIG9mIGJsb2Nrcykge1xyXG4gICAgICB0aGlzLnJlbW92ZVNoZWV0QmxvY2soYmxvY2spO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UGFnZVRleHR1cmUobWF0ZXJpYWwsIG4pIHtcclxuICAgIHRoaXMucGFnZU1hbmFnZXIuc2V0VGV4dHVyZShtYXRlcmlhbCwgbisyKTtcclxuICB9XHJcblxyXG4gIHNldExlZnRDb3ZlclRleHR1cmUobWF0ZXJpYWwsIG4pIHtcclxuICAgIHRoaXMucGFnZU1hbmFnZXIuc2V0VGV4dHVyZShtYXRlcmlhbCwgbik7XHJcbiAgfVxyXG5cclxuICBzZXRSaWdodENvdmVyVGV4dHVyZShtYXRlcmlhbCwgbikge1xyXG4gICAgdGhpcy5wYWdlTWFuYWdlci5zZXRUZXh0dXJlKG1hdGVyaWFsLCBuKzIqKHRoaXMucC5zaGVldHMrMSkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZpbmlzaEFuaW1hdGlvbkNsYihhbmdsZSkge1xyXG4gICAgdGhpcy5ibG9jay5zZXQodGhpcy5ib29rLmdldENsb3NlZEJsb2NrQW5nbGUoYW5nbGUpLmNsb3NlZEFuZ2xlLCdjbG9zZWQnLDApO1xyXG4gICAgY29uc3QgaSA9IHRoaXMuYm9vay5zaGVldEJsb2Nrcy5pbmRleE9mKHRoaXMuYmxvY2spO1xyXG4gICAgaWYofmkpIHtcclxuICAgICAgaWYoYW5nbGU9PT0wKSB7XHJcbiAgICAgICAgdGhpcy5ib29rLm1lcmdlU2hlZXRCbG9ja3MoaSwgdGhpcy5ib29rLnNoZWV0QmxvY2tzLmxlbmd0aC1pKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmJvb2subWVyZ2VTaGVldEJsb2NrcygwLCBpKzEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxjQmxvY2tGb3JjZShibG9jaywgb2JqZWN0LCBhbmdsZSwgdmVsb2NpdHksIGNvcm5lckhlaWdodCkge1xyXG4gICAgcmV0dXJuIGJsb2NrLmZvcmNlPyBibG9jay5mb3JjZShvYmplY3QsIGFuZ2xlLCB2ZWxvY2l0eSwgY29ybmVySGVpZ2h0KTogMDtcclxuICB9XHJcblxyXG4gIGNhbGNCbG9ja0Nvcm5lckZvcmNlKGJsb2NrLCBvYmplY3QsIGFuZ2xlLCB2ZWxvY2l0eSwgY29ybmVySGVpZ2h0KSB7XHJcbiAgICByZXR1cm4gYmxvY2suY29ybmVyRm9yY2U/IGJsb2NrLmNvcm5lckZvcmNlKG9iamVjdCwgYW5nbGUsIHZlbG9jaXR5LCBjb3JuZXJIZWlnaHQpOiAwO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdFBoeXNpY3MoYmxvY2ssIG1hc3MsIGFuZ2xlLCB2ZWxvY2l0eSwgZmxleGliaWxpdHksIGNvdmVySGVpZ2h0LCBzaW11bGF0ZUNsYiwgcmVtb3ZlQ2xiLCBwcm9ncmVzc0NsYikge1xyXG4gICAgY29uc3QgdHlwZSA9ICgpPT4gdGhpcy5ob3ZlckluZm8/ICdob3Zlcic6ICh0aGlzLmRyYWdJbmZvPyAnZHJhZyc6ICdmcmVlJyk7XHJcbiAgICBibG9jay5waHlzaWNJZCA9IHRoaXMuc2hlZXRQaHlzaWNzLmFkZE9iamVjdChcclxuICAgICAgbWFzcyxcclxuICAgICAgYW5nbGUsXHJcbiAgICAgIHZlbG9jaXR5LFxyXG4gICAgICBmbGV4aWJpbGl0eSxcclxuICAgICAgY292ZXJIZWlnaHQsXHJcbiAgICAgIChhbmdsLCBjaCk9PiB7XHJcbiAgICAgICAgc2ltdWxhdGVDbGIoYW5nbCwgY2gpO1xyXG4gICAgICAgIHByb2dyZXNzQ2xiKGJsb2NrLCBNYXRoLmFicyhhbmdsZS1hbmdsKS9NYXRoLlBJLCAncHJvY2VzcycsIHR5cGUoKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChhbmdsLCBjaCk9PiB7XHJcbiAgICAgICAgcmVtb3ZlQ2xiKGFuZ2wsIGNoKTtcclxuICAgICAgICBkZWxldGUgYmxvY2sucGh5c2ljSWQ7XHJcbiAgICAgICAgcHJvZ3Jlc3NDbGIoYmxvY2ssIE1hdGguYWJzKGFuZ2xlLWFuZ2wpL01hdGguUEksICdmaW5pc2gnLCB0eXBlKCkpO1xyXG4gICAgICB9LFxyXG4gICAgICAob2JqZWN0LCBhbmdsZSwgdmVsb2NpdHksIGNvcm5lckhlaWdodCk9PiB0aGlzLmNhbGNCbG9ja0ZvcmNlKGJsb2NrLCBvYmplY3QsIGFuZ2xlLCB2ZWxvY2l0eSwgY29ybmVySGVpZ2h0KSxcclxuICAgICAgKG9iamVjdCwgYW5nbGUsIHZlbG9jaXR5LCBjb3JuZXJIZWlnaHQpPT4gdGhpcy5jYWxjQmxvY2tDb3JuZXJGb3JjZShibG9jaywgb2JqZWN0LCBhbmdsZSwgdmVsb2NpdHksIGNvcm5lckhlaWdodClcclxuICAgICk7XHJcbiAgICBwcm9ncmVzc0NsYihibG9jaywgMCwgJ2luaXQnLCB0eXBlKCkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGR0KSB7XHJcbiAgICB0aGlzLnNoZWV0UGh5c2ljcy5zaW11bGF0ZShkdCk7XHJcbiAgfVxyXG5cclxuICBzcGxpdFNoZWV0QmxvY2soaSwgbGVmdFNpemUpIHtcclxuICAgIGNvbnN0IGJsb2NrID0gdGhpcy5zaGVldEJsb2Nrc1tpXTtcclxuICAgIGlmKGJsb2NrICYmIGxlZnRTaXplPGJsb2NrLmdldFNpemUoKSkge1xyXG4gICAgICBjb25zdCBuZXdCbG9jayA9IG5ldyBTaGVldEJsb2NrKHRoaXMudmlzdWFsLCB7Li4udGhpcy5wLCBzZXRUZXh0dXJlOiB0aGlzLnNldFBhZ2VUZXh0dXJlLmJpbmQodGhpcyl9LCBibG9jay5wLmZpcnN0LCBibG9jay5wLmZpcnN0K2xlZnRTaXplLCBibG9jay5hbmdsZSwgYmxvY2suc3RhdGUpO1xyXG4gICAgICBibG9jay5zZXQoYmxvY2suYW5nbGUsIGJsb2NrLnN0YXRlLCBibG9jay5jb3JuZXIuaGVpZ2h0LCBibG9jay5wLmZpcnN0K2xlZnRTaXplLCBibG9jay5wLmxhc3QpO1xyXG4gICAgICB0aGlzLmFkZFNoZWV0QmxvY2soaSwgbmV3QmxvY2spO1xyXG4gICAgICByZXR1cm4gW25ld0Jsb2NrLCBibG9ja107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZXJnZVNoZWV0QmxvY2tzKGZpcnN0LCBzaXplKSB7XHJcbiAgICBpZihmaXJzdDx0aGlzLnNoZWV0QmxvY2tzLmxlbmd0aCkge1xyXG4gICAgICBzaXplID0gTWF0aC5taW4odGhpcy5zaGVldEJsb2Nrcy5sZW5ndGgtZmlyc3QsIHNpemUpO1xyXG4gICAgICBjb25zdCBmaXJzdEJsb2NrID0gdGhpcy5zaGVldEJsb2Nrc1tmaXJzdF0sIGxhc3RCbG9jayA9IHRoaXMuc2hlZXRCbG9ja3NbZmlyc3Qrc2l6ZS0xXTtcclxuICAgICAgZmlyc3RCbG9jay5zZXQoZmlyc3RCbG9jay5hbmdsZSwgZmlyc3RCbG9jay5zdGF0ZSwgZmlyc3RCbG9jay5jb3JuZXIuaGVpZ2h0LCBmaXJzdEJsb2NrLnAuZmlyc3QsIGxhc3RCbG9jay5wLmxhc3QpO1xyXG4gICAgICB0aGlzLnJlbW92ZVNoZWV0QmxvY2tzKGZpcnN0KzEsIHNpemUtMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTaGVldEJsb2NrcyhhbmdsZSwgc3RhdGUpIHtcclxuICAgIGlmKHN0YXRlPT09J2Nsb3NlZCcpIHtcclxuICAgICAgdGhpcy5jbG9zZWRBbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zaGVldEJsb2Nrcy5mb3JFYWNoKChzKT0+IHtcclxuICAgICAgaWYoIXMucGh5c2ljSWQpIHtcclxuICAgICAgICBzLnNldChhbmdsZSwgc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldChhbmdsZSwgaGVpZ2h0PTApIHtcclxuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgIGNvbnN0IFBJID0gTWF0aC5QSTtcclxuICAgIGlmKGFuZ2xlPFBJLzQpIHtcclxuICAgICAgdGhpcy5iaW5kZXIuc2V0KDApO1xyXG5cclxuICAgICAgdGhpcy5iaW5kZXIuc2V0TGVmdCgtUEkvMisyKmFuZ2xlKTtcclxuICAgICAgdGhpcy5sZWZ0Q292ZXIuc2V0KFBJLzIsJ29wZW5lZCcsaGVpZ2h0KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U2hlZXRCbG9ja3MoMCwnY2xvc2VkJyk7XHJcblxyXG4gICAgICB0aGlzLmJpbmRlci5zZXRSaWdodCgwKTtcclxuICAgICAgdGhpcy5yaWdodENvdmVyLnNldCgwLCdjbG9zZWQnLDApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihhbmdsZTwyKlBJLzQpIHtcclxuICAgICAgY29uc3QgYT0yKihhbmdsZS1QSS80KTtcclxuICAgICAgdGhpcy5iaW5kZXIuc2V0KGEpO1xyXG5cclxuICAgICAgdGhpcy5iaW5kZXIuc2V0TGVmdCgtYSk7XHJcbiAgICAgIHRoaXMubGVmdENvdmVyLnNldChQSS8yK2EsJ29wZW5lZCcsaGVpZ2h0KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U2hlZXRCbG9ja3MoYSwnY2xvc2VkJyk7XHJcblxyXG4gICAgICB0aGlzLmJpbmRlci5zZXRSaWdodCgtYSk7XHJcbiAgICAgIHRoaXMucmlnaHRDb3Zlci5zZXQoYSwnY2xvc2VkJywwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoYW5nbGU8MypQSS80KSB7XHJcbiAgICAgIGNvbnN0IGE9MiooYW5nbGUtUEkvMik7XHJcbiAgICAgIHRoaXMuYmluZGVyLnNldChQSS8yKTtcclxuXHJcbiAgICAgIHRoaXMuYmluZGVyLnNldExlZnQoLVBJLzIpO1xyXG4gICAgICB0aGlzLmxlZnRDb3Zlci5zZXQoUEksJ29wZW5lZCcsMCk7XHJcblxyXG4gICAgICB0aGlzLmJpbmRlci5zZXRSaWdodCgtUEkvMik7XHJcbiAgICAgIHRoaXMucmlnaHRDb3Zlci5zZXQoYSwnb3BlbmVkJyxoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihhbmdsZTw0KlBJLzQpIHtcclxuICAgICAgY29uc3QgYT0yKihhbmdsZS0zKlBJLzQpK1BJLzI7XHJcbiAgICAgIHRoaXMuYmluZGVyLnNldChhKTtcclxuXHJcbiAgICAgIHRoaXMuYmluZGVyLnNldExlZnQoLWEpO1xyXG4gICAgICB0aGlzLmxlZnRDb3Zlci5zZXQoYSwnY2xvc2VkJywwKTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U2hlZXRCbG9ja3MoYSwnY2xvc2VkJyk7XHJcblxyXG4gICAgICB0aGlzLmJpbmRlci5zZXRSaWdodCgtUEkvMik7XHJcbiAgICAgIHRoaXMucmlnaHRDb3Zlci5zZXQoUEkvMiwnb3BlbmVkJyxoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihhbmdsZTw1KlBJLzQpIHtcclxuICAgICAgdGhpcy5iaW5kZXIuc2V0KFBJKTtcclxuXHJcbiAgICAgIHRoaXMuYmluZGVyLnNldExlZnQoLVBJKTtcclxuICAgICAgdGhpcy5sZWZ0Q292ZXIuc2V0KFBJLCdjbG9zZWQnLDApO1xyXG5cclxuICAgICAgdGhpcy5zZXRTaGVldEJsb2NrcyhQSSwnY2xvc2VkJyk7XHJcblxyXG4gICAgICB0aGlzLmJpbmRlci5zZXRSaWdodCgtUEkvMi0yKihhbmdsZS1QSSkpO1xyXG4gICAgICB0aGlzLnJpZ2h0Q292ZXIuc2V0KFBJLzIsJ29wZW5lZCcsaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoYW5nbGU8NipQSS80KSB7XHJcbiAgICAgIGNvbnN0IGE9MiooYW5nbGUtNSpQSS80KTtcclxuICAgICAgdGhpcy5iaW5kZXIuc2V0KFBJLWEpO1xyXG5cclxuICAgICAgdGhpcy5iaW5kZXIuc2V0TGVmdCgtUEkrYSk7XHJcbiAgICAgIHRoaXMubGVmdENvdmVyLnNldChQSS1hLCdjbG9zZWQnLDApO1xyXG5cclxuICAgICAgdGhpcy5zZXRTaGVldEJsb2NrcyhQSS1hLCdjbG9zZWQnKTtcclxuXHJcbiAgICAgIHRoaXMuYmluZGVyLnNldFJpZ2h0KC1QSSthKTtcclxuICAgICAgdGhpcy5yaWdodENvdmVyLnNldChQSS8yLWEsJ29wZW5lZCcsaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoYW5nbGU8NypQSS80KSB7XHJcbiAgICAgIGNvbnN0IGE9MiooYW5nbGUtNipQSS80KTtcclxuICAgICAgdGhpcy5iaW5kZXIuc2V0KFBJLzIpO1xyXG5cclxuICAgICAgdGhpcy5iaW5kZXIuc2V0TGVmdCgtUEkvMik7XHJcbiAgICAgIHRoaXMubGVmdENvdmVyLnNldChQSS1hLCdvcGVuZWQnLGhlaWdodCk7XHJcblxyXG4gICAgICB0aGlzLmJpbmRlci5zZXRSaWdodCgtUEkvMik7XHJcbiAgICAgIHRoaXMucmlnaHRDb3Zlci5zZXQoMCwnb3BlbmVkJywwKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoYW5nbGU8OCpQSS80KSB7XHJcbiAgICAgIGNvbnN0IGE9MiooYW5nbGUtNypQSS80KTtcclxuICAgICAgdGhpcy5iaW5kZXIuc2V0KFBJLzItYSk7XHJcblxyXG4gICAgICB0aGlzLmJpbmRlci5zZXRMZWZ0KC1QSS8yKTtcclxuICAgICAgdGhpcy5sZWZ0Q292ZXIuc2V0KFBJLzIsJ29wZW5lZCcsaGVpZ2h0KTtcclxuXHJcbiAgICAgIHRoaXMuc2V0U2hlZXRCbG9ja3MoUEkvMi1hLCdjbG9zZWQnKTtcclxuXHJcbiAgICAgIHRoaXMuYmluZGVyLnNldFJpZ2h0KC1QSS8yK2EpO1xyXG4gICAgICB0aGlzLnJpZ2h0Q292ZXIuc2V0KFBJLzItYSwnY2xvc2VkJywwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVTaWRlVGV4dHVyZShjb2xvcikge1xyXG4gICAgY29uc3QgakMgPSAkKCc8Y2FudmFzIHdpZHRoPVwiOFwiIGhlaWdodD1cIjhcIj48L2NhbnZhcz4nKTtcclxuICAgIGNvbnN0IGN0eCA9IGpDWzBdLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gR3JhcGhVdGlscy5jb2xvcjJSZ2JhKGNvbG9yLCAxKTtcclxuICAgIGN0eC5yZWN0KDAsIDAsIDgsIDcpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBHcmFwaFV0aWxzLmNvbG9yMlJnYmEoR3JhcGhVdGlscy5pbnZlcnNlQ29sb3IoY29sb3IsMC41KSwgMSk7XHJcbiAgICBjdHgucmVjdCgwLCA3LCA4LCAxKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgICByZXR1cm4gakNbMF07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcHJlcGFyZVByb3BzKHByb3BzKSB7XHJcbiAgICByZXR1cm4gQm9vay5jYWxjUHJvcHMoQm9vay5tZXJnZVByb3BzKGJvb2tQcm9wcygpLCBwcm9wcykpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1lcmdlUHJvcHMoZmlyc3QsIHNlY29uZCkge1xyXG4gICAgc2Vjb25kID0gc2Vjb25kIHx8IHt9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uZmlyc3QsXHJcbiAgICAgIC4uLnNlY29uZCxcclxuICAgICAgc2hlZXQ6IHtcclxuICAgICAgICAuLi5maXJzdC5zaGVldCxcclxuICAgICAgICAuLi5zZWNvbmQuc2hlZXQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvdmVyOiB7XHJcbiAgICAgICAgLi4uZmlyc3QuY292ZXIsXHJcbiAgICAgICAgLi4uc2Vjb25kLmNvdmVyLFxyXG4gICAgICB9LFxyXG4gICAgICBwYWdlOiB7XHJcbiAgICAgICAgLi4uZmlyc3QucGFnZSxcclxuICAgICAgICAuLi5zZWNvbmQucGFnZSxcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjYWxjUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IHAgPSB7XHJcbiAgICAgIC4uLnByb3BzLFxyXG4gICAgICBzaGVldDoge1xyXG4gICAgICAgIC4uLnByb3BzLnNoZWV0XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvdmVyOiB7XHJcbiAgICAgICAgLi4ucHJvcHMuc2hlZXQsXHJcbiAgICAgICAgLi4ucHJvcHMuY292ZXJcclxuICAgICAgfSxcclxuICAgICAgcGFnZToge1xyXG4gICAgICAgIC4uLnByb3BzLnNoZWV0LFxyXG4gICAgICAgIC4uLnByb3BzLnBhZ2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNjYWxlID0gMTAsXHJcbiAgICBoZWlnaHQgPSBzY2FsZSpwLmhlaWdodCxcclxuICAgIHdpZHRoID0gc2NhbGUqcC53aWR0aCxcclxuICAgIGZsaXBQcm9ncmVzc0NsYiA9ICgpPT4gdW5kZWZpbmVkLFxyXG4gICAgc2hlZXQgPSB7XHJcbiAgICAgIHNpZGVUZXh0dXJlOiBwLnNoZWV0LnNpZGVUZXh0dXJlIHx8IEJvb2suY3JlYXRlU2lkZVRleHR1cmUocC5zaGVldC5jb2xvciksXHJcbiAgICB9LFxyXG4gICAgY292ZXIgPSB7XHJcbiAgICAgIC4uLnNoZWV0LFxyXG4gICAgICAuLi5wLmNvdmVyLFxyXG4gICAgICBkZXB0aDogc2NhbGUqcC5jb3Zlci5kZXB0aCxcclxuICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgcGFkZGluZzogc2NhbGUqcC5jb3Zlci5wYWRkaW5nXHJcbiAgICB9LFxyXG4gICAgcGFnZSA9IHtcclxuICAgICAgLi4uc2hlZXQsXHJcbiAgICAgIC4uLnAucGFnZSxcclxuICAgICAgZGVwdGg6IHNjYWxlKnAucGFnZS5kZXB0aCxcclxuICAgICAgd2lkdGg6IGNvdmVyLndpZHRoIC0gY292ZXIucGFkZGluZyxcclxuICAgICAgaGVpZ2h0OiBjb3Zlci5oZWlnaHQgLSAyKmNvdmVyLnBhZGRpbmdcclxuICAgIH0sXHJcbiAgICBtYXJrZXIgPSB7XHJcbiAgICAgIHVzZTogZmFsc2UsXHJcbiAgICAgIGNvbG9yOiAwWEZGMDAwMCxcclxuICAgICAgc2l6ZTogc2NhbGUqMC4wMDFcclxuICAgIH07XHJcbiAgICByZXR1cm4gey4uLnAsIHNjYWxlLCBoZWlnaHQsIHdpZHRoLCBmbGlwUHJvZ3Jlc3NDbGIsIGNvdmVyLCBwYWdlLCBtYXJrZXJ9O1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9Cb29rLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Cb29rLmpzIiwiaW1wb3J0IHskLCBUSFJFRX0gZnJvbSAnLi4vbGlicyc7XHJcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vQ29udHJvbGxlcic7XHJcbmltcG9ydCB7cHJvcHMgYXMgIGJvb2tDb250cm9sbGVyUHJvcHN9IGZyb20gJy4uL3Byb3BzL2Jvb2tDb250cm9sbGVyJztcclxuaW1wb3J0IEV2ZW50c1RvQWN0aW9ucyBmcm9tICcuL0V2ZW50c1RvQWN0aW9ucyc7XHJcbmltcG9ydCBTdGF0cyBmcm9tICdzdGF0cy5qcyc7XHJcbmltcG9ydCBPYmplY3QzRFdhdGNoZXIgZnJvbSAnLi9PYmplY3QzRFdhdGNoZXInO1xyXG5pbXBvcnQgRnVsbFNjcmVlbiBmcm9tICcuLi9USFJFRXgvRnVsbFNjcmVlbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihib29rLCB2aWV3LCBwcm9wcykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYm9vayA9IGJvb2s7XHJcbiAgICB0aGlzLnZpc3VhbCA9IGJvb2sudmlzdWFsO1xyXG4gICAgdGhpcy5wID0gQm9va0NvbnRyb2xsZXIucHJlcGFyZVByb3BzKHByb3BzKTtcclxuICAgIHRoaXMuZGV2aWNlUGl4ZWxSYXRpbyA9IHRoaXMudmlzdWFsLnduZC5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XHJcblxyXG4gICAgdGhpcy5vcmJpdCA9IGJvb2sudmlzdWFsLmdldE9yYml0KCk7XHJcbiAgICBib29rLnNldEZsaXBQcm9ncmVzc0NsYih0aGlzLnVwZGF0ZVZpZXdJZlN0YXRlLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgIHRoaXMuYmluZEFjdGlvbnMoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzbWFydFBhbjogIXRoaXMuYWN0aW9uc1snY21kU21hcnRQYW4nXS5hY3RpdmUsXHJcbiAgICAgIHNpbmdsZVBhZ2U6IHRoaXMuYWN0aW9uc1snY21kU2luZ2xlUGFnZSddLmFjdGl2ZSB8fCB0aGlzLmFjdGlvbnNbJ2NtZFNpbmdsZVBhZ2UnXS5hY3RpdmVGb3JNb2JpbGUgJiYgdGhpcy5kZXZpY2VQaXhlbFJhdGlvPjEsXHJcbiAgICAgIHN0YXRzOiB0aGlzLmFjdGlvbnNbJ2NtZFN0YXRzJ10uYWN0aXZlLFxyXG4gICAgICBsaWdodGluZzogdGhpcy5wLmxpZ2h0aW5nLmRlZmF1bHQsXHJcbiAgICAgIGFjdGl2ZVNpZGU6IDFcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5ib3hzID0gW25ldyBUSFJFRS5Cb3gzKCksIG5ldyBUSFJFRS5Cb3gzKCldO1xyXG4gICAgdGhpcy5ib29rV2F0Y2hlciA9IG5ldyBPYmplY3QzRFdhdGNoZXIodGhpcy52aXN1YWwsICgpPT4ge1xyXG4gICAgICBpZih0aGlzLnN0YXRlLnNpbmdsZVBhZ2UpIHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZVNpZGUpIHtcclxuICAgICAgICAgIHRoaXMuYm94c1swXS5zZXRGcm9tT2JqZWN0KGJvb2sucmlnaHRDb3Zlci50aHJlZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5ib3hzWzBdLnNldEZyb21PYmplY3QoYm9vay5sZWZ0Q292ZXIudGhyZWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmJveHNbMF0uc2V0RnJvbU9iamVjdChib29rLmxlZnRDb3Zlci50aHJlZSk7XHJcbiAgICAgICAgdGhpcy5ib3hzWzFdLnNldEZyb21PYmplY3QoYm9vay5yaWdodENvdmVyLnRocmVlKTtcclxuICAgICAgICB0aGlzLmJveHNbMF0udW5pb24odGhpcy5ib3hzWzFdKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5ib3hzWzBdO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmJvb2tXYXRjaGVyLnNjYWxlID0gdGhpcy5wLnNjYWxlLmRlZmF1bHQ7XHJcblxyXG4gICAgdGhpcy5TdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgdGhpcy5TdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHRoaXMuU3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcclxuXHJcbiAgICB0aGlzLnZpc3VhbC5zZXRFeHRyYUxpZ2h0aW5nKHRoaXMuc3RhdGUubGlnaHRpbmcpO1xyXG4gICAgdGhpcy5iaW5kcyA9IHtcclxuICAgICAgb25TY3JlZW5Nb2RlQ2hhbmdlZDogdGhpcy5vblNjcmVlbk1vZGVDaGFuZ2VkLmJpbmQodGhpcyksXHJcbiAgICAgIHN0YXRzOiB0aGlzLlN0YXRzLnVwZGF0ZS5iaW5kKHRoaXMuU3RhdHMpLFxyXG4gICAgICBvblVwZGF0ZVZpZXc6IHRoaXMudXBkYXRlVmlldy5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICBGdWxsU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIodGhpcy52aXN1YWwuZG9jLCB0aGlzLmJpbmRzLm9uU2NyZWVuTW9kZUNoYW5nZWQpO1xyXG5cclxuICAgIHRoaXMuY21kU21hcnRQYW4oKTtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKSB7XHJcbiAgICBGdWxsU2NyZWVuLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy52aXN1YWwuZG9jLCB0aGlzLmJpbmRzLm9uU2NyZWVuTW9kZUNoYW5nZWQpO1xyXG4gICAgZGVsZXRlIHRoaXMuYm9vaztcclxuICAgIGRlbGV0ZSB0aGlzLnZpZXc7XHJcbiAgICBkZWxldGUgdGhpcy52aXN1YWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2NDdHJsKHRvY0N0cmwpIHtcclxuICAgIHRoaXMudG9jQ3RybCA9IHRvY0N0cmw7XHJcbiAgICB0aGlzLnRvY0N0cmwub25DaGFuZ2UgPSB0aGlzLnVwZGF0ZVZpZXcuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJpbnRlcihwcmludGVyKSB7XHJcbiAgICB0aGlzLnByaW50ZXIgPSBwcmludGVyO1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBzZXRTb3VuZHMoc291bmRzKSB7XHJcbiAgICB0aGlzLnNvdW5kcyA9IHNvdW5kcztcclxuICAgIHNvdW5kcy5zZXRFbmFibGVkKHRoaXMuYWN0aW9uc1snY21kU291bmRzJ10uYWN0aXZlKTtcclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gIH1cclxuXHJcblxyXG4gIG9uU2NyZWVuTW9kZUNoYW5nZWQoZSkge1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBjYW5ab29tSW4oKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuc3RhdGUuc21hcnRQYW4gfHwgTWF0aC5hYnModGhpcy5ib29rV2F0Y2hlci5zY2FsZS10aGlzLnAuc2NhbGUubWF4KT50aGlzLnAuZXBzO1xyXG4gIH1cclxuXHJcbiAgY2FuWm9vbU91dCgpIHtcclxuICAgIHJldHVybiAhdGhpcy5zdGF0ZS5zbWFydFBhbiB8fCBNYXRoLmFicyh0aGlzLmJvb2tXYXRjaGVyLnNjYWxlLXRoaXMucC5zY2FsZS5taW4pPnRoaXMucC5lcHM7XHJcbiAgfVxyXG5cclxuICBjYW5EZWZhdWx0Wm9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnNtYXJ0UGFuO1xyXG4gIH1cclxuXHJcbiAgY21kWm9vbUluKCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5zbWFydFBhbikge1xyXG4gICAgICB0aGlzLmJvb2tXYXRjaGVyLnNjYWxlID0gTWF0aC5taW4odGhpcy5wLnNjYWxlLm1heCwgdGhpcy5ib29rV2F0Y2hlci5zY2FsZSt0aGlzLnAuc2NhbGUuZGVsdGEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMub3JiaXQuem9vbUluKDYuNip0aGlzLnAuc2NhbGUuZGVsdGEvMC4zMik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIGNtZFpvb21PdXQoKSB7XHJcbiAgICBpZih0aGlzLnN0YXRlLnNtYXJ0UGFuKSB7XHJcbiAgICAgIHRoaXMuYm9va1dhdGNoZXIuc2NhbGUgPSBNYXRoLm1heCh0aGlzLnAuc2NhbGUubWluLCB0aGlzLmJvb2tXYXRjaGVyLnNjYWxlLXRoaXMucC5zY2FsZS5kZWx0YSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5vcmJpdC56b29tT3V0KDYuNip0aGlzLnAuc2NhbGUuZGVsdGEvMC4zMik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIGNtZERlZmF1bHRab29tKCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5zbWFydFBhbikge1xyXG4gICAgICB0aGlzLmJvb2tXYXRjaGVyLnNjYWxlID0gdGhpcy5wLnNjYWxlLmRlZmF1bHQ7XHJcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY21kVG9jKCkge1xyXG4gICAgaWYodGhpcy50b2NDdHJsKSB7XHJcbiAgICAgIHRoaXMudG9jQ3RybC50b2dsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY21kRmFzdEJhY2t3YXJkKCkge1xyXG4gICAgdGhpcy5zdGFydEZsaXAodGhpcy5ib29rLmZsaXBMZWZ0KDUpKTtcclxuICB9XHJcblxyXG4gIGNtZEJhY2t3YXJkKCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5zaW5nbGVQYWdlKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuYWN0aXZlU2lkZSA9ICh0aGlzLmdldFBhZ2UoKSsxKSUyO1xyXG4gICAgICBpZih0aGlzLnN0YXRlLmFjdGl2ZVNpZGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVNpZGUgPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5zdGFydEZsaXAodGhpcy5ib29rLmZsaXBMZWZ0KDEpKSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlU2lkZSA9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXJ0RmxpcCh0aGlzLmJvb2suZmxpcExlZnQoMSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY21kRm9yd2FyZCgpIHtcclxuICAgIGlmKHRoaXMuc3RhdGUuc2luZ2xlUGFnZSkge1xyXG4gICAgICB0aGlzLnN0YXRlLmFjdGl2ZVNpZGUgPSAodGhpcy5nZXRQYWdlKCkrMSklMjtcclxuICAgICAgaWYoIXRoaXMuc3RhdGUuYWN0aXZlU2lkZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlU2lkZSA9IDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZih0aGlzLnN0YXJ0RmxpcCh0aGlzLmJvb2suZmxpcFJpZ2h0KDEpKSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlU2lkZSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXJ0RmxpcCh0aGlzLmJvb2suZmxpcFJpZ2h0KDEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNtZEZhc3RGb3J3YXJkKCkge1xyXG4gICAgdGhpcy5zdGFydEZsaXAodGhpcy5ib29rLmZsaXBSaWdodCg1KSk7XHJcbiAgfVxyXG5cclxuICBjbWRTYXZlKCkge1xyXG4gICAgd2luZG93Lm9wZW4odGhpcy5wLmRvd25sb2FkVVJMLCAnX2JsYW5rJyk7XHJcbiAgfVxyXG5cclxuICBjbWRQcmludCgpIHtcclxuICAgIHRoaXMucHJpbnRlci5wcmludCgpO1xyXG4gIH1cclxuXHJcbiAgY21kRnVsbFNjcmVlbigpIHtcclxuICAgIGlmKCFGdWxsU2NyZWVuLmFjdGl2YXRlZCgpKSB7XHJcbiAgICAgIEZ1bGxTY3JlZW4ucmVxdWVzdCh0aGlzLnZpZXcuZ2V0Q29udGFpbmVyKCkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIEZ1bGxTY3JlZW4uY2FuY2VsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbWRTbWFydFBhbigpIHtcclxuICAgIHRoaXMuc3RhdGUuc21hcnRQYW4gPSAhdGhpcy5zdGF0ZS5zbWFydFBhbjtcclxuICAgIGlmKHRoaXMuc3RhdGUuc21hcnRQYW4pIHtcclxuICAgICAgdGhpcy5vcmJpdC5taW5BemltdXRoQW5nbGUgPSAwO1xyXG4gICAgICB0aGlzLm9yYml0Lm1heEF6aW11dGhBbmdsZSA9IDA7XHJcbiAgICAgIHRoaXMub3JiaXQubWluUG9sYXJBbmdsZSA9IDA7XHJcbiAgICBcdHRoaXMub3JiaXQubWF4UG9sYXJBbmdsZSA9IE1hdGguUEkvNDtcclxuICAgICAgdGhpcy5ib29rV2F0Y2hlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLm9yYml0Lm1pbkF6aW11dGhBbmdsZSA9IC1JbmZpbml0eTtcclxuICAgICAgdGhpcy5vcmJpdC5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTtcclxuICAgICAgdGhpcy5vcmJpdC5taW5Qb2xhckFuZ2xlID0gMDtcclxuICAgIFx0dGhpcy5vcmJpdC5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTtcclxuICAgICAgdGhpcy5ib29rV2F0Y2hlci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIGNtZFNpbmdsZVBhZ2UoKSB7XHJcbiAgICB0aGlzLnN0YXRlLnNpbmdsZVBhZ2UgPSAhdGhpcy5zdGF0ZS5zaW5nbGVQYWdlO1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBjbWRTb3VuZHMoKSB7XHJcbiAgICBpZih0aGlzLnNvdW5kcykge1xyXG4gICAgICB0aGlzLnNvdW5kcy50b2dsZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBjbWRTdGF0cygpIHtcclxuICAgIHRoaXMuc3RhdGUuc3RhdHMgPSAhdGhpcy5zdGF0ZS5zdGF0cztcclxuICAgIGlmKHRoaXMuc3RhdGUuc3RhdHMpIHtcclxuICAgICAgJCh0aGlzLnZpZXcuZ2V0Q29udGFpbmVyKCkpLmFwcGVuZCh0aGlzLlN0YXRzLmRvbUVsZW1lbnQpO1xyXG4gICAgICB0aGlzLnZpc3VhbC5hZGRSZW5kZXJDYWxsYmFjayh0aGlzLmJpbmRzLnN0YXRzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAkKHRoaXMudmlldy5nZXRDb250YWluZXIoKSkuZmluZCh0aGlzLlN0YXRzLmRvbUVsZW1lbnQpLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLnZpc3VhbC5yZW1vdmVSZW5kZXJDYWxsYmFjayh0aGlzLmJpbmRzLnN0YXRzKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgY21kTGlnaHRpbmdVcCgpIHtcclxuICAgIHRoaXMuc3RhdGUubGlnaHRpbmcgPSBNYXRoLm1pbih0aGlzLnN0YXRlLmxpZ2h0aW5nK3RoaXMucC5saWdodGluZy5kZWx0YSwgdGhpcy5wLmxpZ2h0aW5nLm1heCk7XHJcbiAgICB0aGlzLnZpc3VhbC5zZXRFeHRyYUxpZ2h0aW5nKHRoaXMuc3RhdGUubGlnaHRpbmcpO1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBjbWRMaWdodGluZ0Rvd24oKSB7XHJcbiAgICB0aGlzLnN0YXRlLmxpZ2h0aW5nID0gTWF0aC5tYXgodGhpcy5zdGF0ZS5saWdodGluZy10aGlzLnAubGlnaHRpbmcuZGVsdGEsIHRoaXMucC5saWdodGluZy5taW4pO1xyXG4gICAgdGhpcy52aXN1YWwuc2V0RXh0cmFMaWdodGluZyh0aGlzLnN0YXRlLmxpZ2h0aW5nKTtcclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgZ29Ub1BhZ2UocGFnZSkge1xyXG4gICAgY29uc3QgcGFnZU51bSA9IE1hdGgubWF4KE1hdGgubWluKHBhZ2UsIHRoaXMuYm9vay5nZXRQYWdlcygpLTEpLDApO1xyXG4gICAgdGhpcy5zdGF0ZS5hY3RpdmVTaWRlID0gKHBhZ2VOdW0rMSklMjtcclxuICAgIGxldCB0YXJnZXQgPSBNYXRoLm1heChNYXRoLm1pbihwYWdlLTErcGFnZSUyLCB0aGlzLmJvb2suZ2V0UGFnZXMoKS0xKSwwKSwgY3VycmVudCA9IHRoaXMuYm9vay5nZXRQYWdlKCksIGZsaXBzID0gW10sIGNvdnMgPSAwOztcclxuICAgIGlmKHRhcmdldCE9Y3VycmVudCkge1xyXG4gICAgICBpZihjdXJyZW50PT09MCkge1xyXG4gICAgICAgIGZsaXBzLnB1c2goMSk7XHJcbiAgICAgICAgY3VycmVudCs9MTtcclxuICAgICAgICArK2NvdnM7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihjdXJyZW50PT09dGhpcy5ib29rLmdldFBhZ2VzKCktMSkge1xyXG4gICAgICAgIGZsaXBzLnB1c2goLTEpO1xyXG4gICAgICAgIGN1cnJlbnQtPTI7XHJcbiAgICAgICAgKytjb3ZzO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBjdiA9IDA7XHJcbiAgICAgIGlmKHRhcmdldD09PTApIHtcclxuICAgICAgICBjdiA9IC0xO1xyXG4gICAgICAgIHRhcmdldCs9MTtcclxuICAgICAgICArK2NvdnM7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZih0YXJnZXQ9PT10aGlzLmJvb2suZ2V0UGFnZXMoKS0xKSB7XHJcbiAgICAgICAgY3YgPSAxO1xyXG4gICAgICAgIHRhcmdldC09MjtcclxuICAgICAgICArK2NvdnM7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGFyZ2V0LWN1cnJlbnQpIHtcclxuICAgICAgICBmbGlwcy5wdXNoKE1hdGguY2VpbCgodGFyZ2V0LWN1cnJlbnQpLzIpKTtcclxuICAgICAgfVxyXG4gICAgICBpZihjdikge1xyXG4gICAgICAgIGZsaXBzLnB1c2goY3YpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q2xiID0gKGZsLCB0aW1lLCBjbGIpPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgIGlmKGZsPDApIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnRGbGlwKHRoaXMuYm9vay5mbGlwTGVmdCgtZmwsIGNsYikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnRGbGlwKHRoaXMuYm9vay5mbGlwUmlnaHQoZmwsIGNsYikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgdGltZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKGNvdnM9PT0yKSB7XHJcbiAgICAgIHNldENsYihmbGlwc1swXSwgMCwgKGJsb2NrLCBwcm9ncmVzcywgc3RhdGUpPT4ge1xyXG4gICAgICAgIGlmKHN0YXRlPT0nZmluaXNoJyAmJiBwcm9ncmVzcz09MSkge1xyXG4gICAgICAgICAgc2V0Q2xiKGZsaXBzW2ZsaXBzLmxlbmd0aC0xXSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0Q2xiKGZsaXBzWzFdLCA1MDApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGxldCB0aW1lID0gMDtcclxuICAgICAgZm9yKGxldCBmbCBvZiBmbGlwcykge1xyXG4gICAgICAgIHNldENsYihmbCwgdGltZSk7XHJcbiAgICAgICAgdGltZSs9MjUwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydEZsaXAoYmxvY2spIHtcclxuICAgIGlmKGJsb2NrKSB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hBc3luYyh7XHJcbiAgICAgICAgdHlwZTogJ3N0YXJ0RmxpcCdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbiAgfVxyXG5cclxuICBlbmRGbGlwKGJsb2NrKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoQXN5bmMoe1xyXG4gICAgICB0eXBlOiAnZW5kRmxpcCdcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZSgpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSB0aGlzLmJvb2suZ2V0UGFnZSgpO1xyXG4gICAgcmV0dXJuIHBhZ2U/IE1hdGgubWluKHRoaXMuYm9vay5nZXRQYWdlKCkrdGhpcy5zdGF0ZS5hY3RpdmVTaWRlLCB0aGlzLmJvb2suZ2V0UGFnZXMoKS0xKTogMDtcclxuICB9XHJcblxyXG4gIGdldFBhZ2VGb3JHVUkoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuc2luZ2xlUGFnZT8gdGhpcy5nZXRQYWdlKCk6IHRoaXMuYm9vay5nZXRQYWdlKCkpKzE7XHJcbiAgfVxyXG5cclxuICBpbnBQYWdlKGUsIGRhdGEpIHtcclxuICAgIHRoaXMuZ29Ub1BhZ2UoZGF0YS0xKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpZXdJZlN0YXRlKGJsb2NrLCBwcm9ncmVzcywgc3RhdGUsIHR5cGUpIHtcclxuICAgIGlmKHN0YXRlPT09J2luaXQnIHx8IHN0YXRlPT09J2ZpbmlzaCcpIHtcclxuICAgICAgc2V0VGltZW91dCh0aGlzLnVwZGF0ZVZpZXcuYmluZCh0aGlzKSwgMTAwKTtcclxuICAgIH1cclxuICAgIGlmKHN0YXRlPT09J2ZpbmlzaCcpIHtcclxuICAgICAgdGhpcy5lbmRGbGlwKGJsb2NrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICBpZih0aGlzLnZpZXcpIHtcclxuICAgICAgdGhpcy52aWV3LnNldFN0YXRlKCdjbWRab29tSW4nLCB7XHJcbiAgICAgICAgZW5hYmxlOiB0aGlzLmNhblpvb21JbigpLFxyXG4gICAgICAgIHZpc2libGU6IHRoaXMuYWN0aW9uc1snY21kWm9vbUluJ10uZW5hYmxlZCxcclxuICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy52aWV3LnNldFN0YXRlKCdjbWRab29tT3V0Jywge1xyXG4gICAgICAgIGVuYWJsZTogdGhpcy5jYW5ab29tT3V0KCksXHJcbiAgICAgICAgdmlzaWJsZTogdGhpcy5hY3Rpb25zWydjbWRab29tT3V0J10uZW5hYmxlZCxcclxuICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy52aWV3LnNldFN0YXRlKCdjbWREZWZhdWx0Wm9vbScsIHtcclxuICAgICAgICBlbmFibGU6IHRoaXMuY2FuRGVmYXVsdFpvb20oKSxcclxuICAgICAgICB2aXNpYmxlOiB0aGlzLmFjdGlvbnNbJ2NtZERlZmF1bHRab29tJ10uZW5hYmxlZCxcclxuICAgICAgICBhY3RpdmU6IHRoaXMuY2FuRGVmYXVsdFpvb20oKSAmJiBNYXRoLmFicyh0aGlzLmJvb2tXYXRjaGVyLnNjYWxlLXRoaXMucC5zY2FsZS5kZWZhdWx0KTx0aGlzLnAuZXBzXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy52aWV3LnNldFN0YXRlKCdjbWRUb2MnLCB7XHJcbiAgICAgICAgZW5hYmxlOiAhIXRoaXMudG9jQ3RybCxcclxuICAgICAgICB2aXNpYmxlOiB0aGlzLmFjdGlvbnNbJ2NtZFRvYyddLmVuYWJsZWQgJiYgdGhpcy50b2NDdHJsLFxyXG4gICAgICAgIGFjdGl2ZTogdGhpcy50b2NDdHJsICYmIHRoaXMudG9jQ3RybC52aXNpYmxlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbGVmdCA9IHRoaXMuYm9vay5nZXRMZWZ0RmxpcHBpbmcoKSxcclxuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLmJvb2suZ2V0UmlnaHRGbGlwcGluZygpO1xyXG5cclxuICAgICAgY29uc3QgZmxpcHBlcnNFbmFibGUgPSB7XHJcbiAgICAgICAgY21kRmFzdEJhY2t3YXJkOiAhIWxlZnQsXHJcbiAgICAgICAgY21kQmFja3dhcmQ6ICEhbGVmdCxcclxuICAgICAgICBjbWRGb3J3YXJkOiAhIXJpZ2h0LFxyXG4gICAgICAgIGNtZEZhc3RGb3J3YXJkOiAhIXJpZ2h0XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmb3IobGV0IG5hbWUgb2YgT2JqZWN0LmtleXMoZmxpcHBlcnNFbmFibGUpKSB7XHJcbiAgICAgICAgdGhpcy52aWV3LnNldFN0YXRlKG5hbWUsIHtcclxuICAgICAgICAgIGVuYWJsZTogZmxpcHBlcnNFbmFibGVbbmFtZV0sXHJcbiAgICAgICAgICB2aXNpYmxlOiB0aGlzLmFjdGlvbnNbbmFtZV0uZW5hYmxlZCxcclxuICAgICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy52aWV3LnNldFN0YXRlKCdpbnBQYWdlcycsIHtcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLmJvb2suZ2V0UGFnZXMoKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudmlldy5zZXRTdGF0ZSgnaW5wUGFnZScsIHtcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZTogIXRoaXMuYm9vay5pc1Byb2Nlc3NpbmcoKSxcclxuICAgICAgICB2YWx1ZTogdGhpcy5nZXRQYWdlRm9yR1VJKClcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnZpZXcuc2V0U3RhdGUoJ2NtZFNhdmUnLCB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRoaXMuYWN0aW9uc1snY21kU2F2ZSddLmVuYWJsZWQgJiYgISF0aGlzLnAuZG93bmxvYWRVUkwsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudmlldy5zZXRTdGF0ZSgnY21kUHJpbnQnLCB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRoaXMuYWN0aW9uc1snY21kUHJpbnQnXS5lbmFibGVkICYmICEhdGhpcy5wcmludGVyLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnZpZXcuc2V0U3RhdGUoJ2NtZEZ1bGxTY3JlZW4nLCB7XHJcbiAgICAgICAgZW5hYmxlOiBGdWxsU2NyZWVuLmF2YWlsYWJsZSgpLFxyXG4gICAgICAgIHZpc2libGU6IHRoaXMuYWN0aW9uc1snY21kRnVsbFNjcmVlbiddLmVuYWJsZWQsXHJcbiAgICAgICAgYWN0aXZlOiBGdWxsU2NyZWVuLmF2YWlsYWJsZSgpICYmIEZ1bGxTY3JlZW4uYWN0aXZhdGVkKClcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnZpZXcuc2V0U3RhdGUoJ3dpZFNldHRpbmdzJywge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0aGlzLmFjdGlvbnNbJ3dpZFNldHRpbmdzJ10uZW5hYmxlZCxcclxuICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy52aWV3LnNldFN0YXRlKCdjbWRTbWFydFBhbicsIHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdGhpcy5hY3Rpb25zWydjbWRTbWFydFBhbiddLmVuYWJsZWQsXHJcbiAgICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLnNtYXJ0UGFuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy52aWV3LnNldFN0YXRlKCdjbWRTaW5nbGVQYWdlJywge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlOiB0aGlzLmFjdGlvbnNbJ2NtZFNpbmdsZVBhZ2UnXS5lbmFibGVkLFxyXG4gICAgICAgIGFjdGl2ZTogdGhpcy5zdGF0ZS5zaW5nbGVQYWdlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy52aWV3LnNldFN0YXRlKCdjbWRTb3VuZHMnLCB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6ICB0aGlzLmFjdGlvbnNbJ2NtZFNvdW5kcyddLmVuYWJsZWQgJiYgISF0aGlzLnNvdW5kcyxcclxuICAgICAgICBhY3RpdmU6ICEhdGhpcy5zb3VuZHMgJiYgdGhpcy5zb3VuZHMuZW5hYmxlZFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudmlldy5zZXRTdGF0ZSgnY21kU3RhdHMnLCB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRoaXMuYWN0aW9uc1snY21kU3RhdHMnXS5lbmFibGVkLFxyXG4gICAgICAgIGFjdGl2ZTogdGhpcy5zdGF0ZS5zdGF0c1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudmlldy5zZXRTdGF0ZSgnY21kTGlnaHRpbmdVcCcsIHtcclxuICAgICAgICBlbmFibGU6IE1hdGguYWJzKHRoaXMuc3RhdGUubGlnaHRpbmctdGhpcy5wLmxpZ2h0aW5nLm1heCk+dGhpcy5wLmVwcyxcclxuICAgICAgICB2aXNpYmxlOiB0aGlzLmFjdGlvbnNbJ2NtZExpZ2h0aW5nVXAnXS5lbmFibGVkLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnZpZXcuc2V0U3RhdGUoJ2NtZExpZ2h0aW5nRG93bicsIHtcclxuICAgICAgICBlbmFibGU6IE1hdGguYWJzKHRoaXMuc3RhdGUubGlnaHRpbmctdGhpcy5wLmxpZ2h0aW5nLm1pbik+dGhpcy5wLmVwcyxcclxuICAgICAgICB2aXNpYmxlOiB0aGlzLmFjdGlvbnNbJ2NtZExpZ2h0aW5nRG93biddLmVuYWJsZWQsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFjdGlvbnMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjbWRab29tSW46IHtcclxuICAgICAgICBhY3RpdmF0ZTogdGhpcy5jbWRab29tSW4uYmluZCh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRab29tT3V0OiB7XHJcbiAgICAgICAgYWN0aXZhdGU6IHRoaXMuY21kWm9vbU91dC5iaW5kKHRoaXMpXHJcbiAgICAgIH0sXHJcbiAgICAgIGNtZERlZmF1bHRab29tOiB7XHJcbiAgICAgICAgYWN0aXZhdGU6IHRoaXMuY21kRGVmYXVsdFpvb20uYmluZCh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRUb2M6IHtcclxuICAgICAgICBhY3RpdmF0ZTogdGhpcy5jbWRUb2MuYmluZCh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRGYXN0QmFja3dhcmQ6IHtcclxuICAgICAgICBhY3RpdmF0ZTogdGhpcy5jbWRGYXN0QmFja3dhcmQuYmluZCh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRCYWNrd2FyZDoge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLmNtZEJhY2t3YXJkLmJpbmQodGhpcylcclxuICAgICAgfSxcclxuICAgICAgY21kRm9yd2FyZDoge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLmNtZEZvcndhcmQuYmluZCh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRGYXN0Rm9yd2FyZDoge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLmNtZEZhc3RGb3J3YXJkLmJpbmQodGhpcylcclxuICAgICAgfSxcclxuICAgICAgY21kU2F2ZToge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLmNtZFNhdmUuYmluZCh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRQcmludDoge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLmNtZFByaW50LmJpbmQodGhpcylcclxuICAgICAgfSxcclxuICAgICAgY21kRnVsbFNjcmVlbjoge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLmNtZEZ1bGxTY3JlZW4uYmluZCh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRTbWFydFBhbjoge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLmNtZFNtYXJ0UGFuLmJpbmQodGhpcylcclxuICAgICAgfSxcclxuICAgICAgY21kU2luZ2xlUGFnZToge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLmNtZFNpbmdsZVBhZ2UuYmluZCh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRTb3VuZHM6IHtcclxuICAgICAgICBhY3RpdmF0ZTogdGhpcy5jbWRTb3VuZHMuYmluZCh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRTdGF0czoge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLmNtZFN0YXRzLmJpbmQodGhpcylcclxuICAgICAgfSxcclxuICAgICAgY21kTGlnaHRpbmdVcDoge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLmNtZExpZ2h0aW5nVXAuYmluZCh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRMaWdodGluZ0Rvd246IHtcclxuICAgICAgICBhY3RpdmF0ZTogdGhpcy5jbWRMaWdodGluZ0Rvd24uYmluZCh0aGlzKVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRQYW5MZWZ0OiB7XHJcbiAgICAgICAgYWN0aXZhdGU6IChlKT0+IHRoaXMub3JiaXQuYWN0aW9ucy5wYW4oZSwge1xyXG4gICAgICAgICAgc3RhdGU6ICdtb3ZlJyxcclxuICAgICAgICAgIGR4OiAtdGhpcy5wLnBhbi5zcGVlZCxcclxuICAgICAgICAgIGR5OiAwXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgY21kUGFuUmlnaHQ6IHtcclxuICAgICAgICBhY3RpdmF0ZTogKGUpPT4gdGhpcy5vcmJpdC5hY3Rpb25zLnBhbihlLCB7XHJcbiAgICAgICAgICBzdGF0ZTogJ21vdmUnLFxyXG4gICAgICAgICAgZHg6IHRoaXMucC5wYW4uc3BlZWQsXHJcbiAgICAgICAgICBkeTogMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGNtZFBhblVwOiB7XHJcbiAgICAgICAgYWN0aXZhdGU6IChlKT0+IHRoaXMub3JiaXQuYWN0aW9ucy5wYW4oZSwge1xyXG4gICAgICAgICAgc3RhdGU6ICdtb3ZlJyxcclxuICAgICAgICAgIGR4OiAwLFxyXG4gICAgICAgICAgZHk6IC10aGlzLnAucGFuLnNwZWVkXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgY21kUGFuRG93bjoge1xyXG4gICAgICAgIGFjdGl2YXRlOiAoZSk9PiB0aGlzLm9yYml0LmFjdGlvbnMucGFuKGUsIHtcclxuICAgICAgICAgIHN0YXRlOiAnbW92ZScsXHJcbiAgICAgICAgICBkeDogMCxcclxuICAgICAgICAgIGR5OiB0aGlzLnAucGFuLnNwZWVkXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgbW91c2VDbWRSb3RhdGU6IHtcclxuICAgICAgICBhY3RpdmF0ZTogdGhpcy5vcmJpdC5hY3Rpb25zLnJvdGF0ZVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VzZUNtZERyYWdab29tOiB7XHJcbiAgICAgICAgYWN0aXZhdGU6IChlLCBkYXRhKT0+IHtcclxuICAgICAgICAgIGlmKGRhdGEuZHk+MCkge1xyXG4gICAgICAgICAgICB0aGlzLmNtZFpvb21PdXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYoZGF0YS5keTwwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY21kWm9vbUluKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VzZUNtZFBhbjoge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLm9yYml0LmFjdGlvbnMucGFuXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdXNlQ21kV2hlZWxab29tOiB7XHJcbiAgICAgICAgYWN0aXZhdGU6IChlKT0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGlmKGUuZGVsdGFZPDApIHtcclxuICAgICAgICAgICAgdGhpcy5jbWRab29tT3V0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmKGUuZGVsdGFZPjApIHtcclxuICAgICAgICAgICAgdGhpcy5jbWRab29tSW4oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvdWNoQ21kUm90YXRlOiB7XHJcbiAgICAgICAgYWN0aXZhdGU6IHRoaXMub3JiaXQuYWN0aW9ucy5yb3RhdGVcclxuICAgICAgfSxcclxuICAgICAgdG91Y2hDbWRab29tOiB7XHJcbiAgICAgICAgYWN0aXZhdGU6IChlLCBkYXRhKT0+IHtcclxuICAgICAgICAgIGlmKGRhdGEuZHk+MCkge1xyXG4gICAgICAgICAgICB0aGlzLmNtZFpvb21PdXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYoZGF0YS5keTwwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY21kWm9vbUluKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0b3VjaENtZFBhbjoge1xyXG4gICAgICAgIGFjdGl2YXRlOiB0aGlzLm9yYml0LmFjdGlvbnMucGFuXHJcbiAgICAgIH0sXHJcbiAgICAgIHdpZFNldHRpbmdzOiB7XHJcbiAgICAgICAgYWN0aXZhdGU6ICgpPT4gdW5kZWZpbmVkXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBiaW5kQWN0aW9ucygpIHtcclxuICAgIHRoaXMuZVRvQSA9IG5ldyBFdmVudHNUb0FjdGlvbnMoJCh0aGlzLnZpc3VhbC5lbGVtZW50KSk7XHJcbiAgICB0aGlzLmVUb0EuYWRkQWN0aW9uKChlKT0+IGUucHJldmVudERlZmF1bHQoKSwgJ2NvbnRleHRtZW51JywgRXZlbnRzVG9BY3Rpb25zLm1vdXNlQnV0dG9ucy5SaWdodCwgMCk7XHJcblxyXG4gICAgdGhpcy5hY3Rpb25zID0gdGhpcy5nZXRBY3Rpb25zKCk7XHJcbiAgICBmb3IobGV0IG5hbWUgb2YgT2JqZWN0LmtleXModGhpcy5hY3Rpb25zKSkge1xyXG4gICAgICBjb25zdCBhY3Rpb24gPSB7XHJcbiAgICAgICAgLi4udGhpcy5hY3Rpb25zW25hbWVdLFxyXG4gICAgICAgIC4uLnRoaXMucC5hY3Rpb25zW25hbWVdXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuYWN0aW9uc1tuYW1lXSA9IGFjdGlvbjtcclxuICAgICAgaWYoYWN0aW9uLmVuYWJsZWQpIHtcclxuICAgICAgICBjb25zdCBmbGFncyA9IGFjdGlvbi5mbGFncyB8fCAwO1xyXG4gICAgICAgIGlmKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICB0aGlzLmVUb0EuYWRkQWN0aW9uKGFjdGlvbi5hY3RpdmF0ZSwgYWN0aW9uLnR5cGUsIGFjdGlvbi5jb2RlLCBmbGFncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYWN0aW9uLmNvZGUhPT11bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuZVRvQS5hZGRBY3Rpb24oYWN0aW9uLmFjdGl2YXRlLCAna2V5ZG93bicsIGFjdGlvbi5jb2RlLCBmbGFncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcHJlcGFyZVByb3BzKHByb3BzKSB7XHJcbiAgICByZXR1cm4gQm9va0NvbnRyb2xsZXIuY2FsY1Byb3BzKEJvb2tDb250cm9sbGVyLm1lcmdlUHJvcHMoYm9va0NvbnRyb2xsZXJQcm9wcygpLCBwcm9wcykpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldEFjdGlvbnMocHJvcHMsIGFjdGlvbnMpIHtcclxuICAgIGZvcihsZXQgbmFtZSBvZiBPYmplY3Qua2V5cyhhY3Rpb25zIHx8IHt9KSkge1xyXG4gICAgICBwcm9wcy5hY3Rpb25zW25hbWVdID0ge1xyXG4gICAgICAgIC4uLnByb3BzLmFjdGlvbnNbbmFtZV0sXHJcbiAgICAgICAgLi4uYWN0aW9uc1tuYW1lXVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1lcmdlUHJvcHMoZmlyc3QsIHNlY29uZCkge1xyXG4gICAgc2Vjb25kID0gc2Vjb25kIHx8IHt9O1xyXG4gICAgY29uc3QgcHJvcHMgPSB7XHJcbiAgICAgIC4uLmZpcnN0LFxyXG4gICAgICAuLi5zZWNvbmQsXHJcbiAgICAgIHNjYWxlOiB7XHJcbiAgICAgICAgLi4uZmlyc3Quc2NhbGUsXHJcbiAgICAgICAgLi4uc2Vjb25kLnNjYWxlLFxyXG4gICAgICB9LFxyXG4gICAgICBsaWdodGluZzoge1xyXG4gICAgICAgIC4uLmZpcnN0LmxpZ2h0aW5nLFxyXG4gICAgICAgIC4uLnNlY29uZC5saWdodGluZyxcclxuICAgICAgfSxcclxuICAgICAgcGFuOiB7XHJcbiAgICAgICAgLi4uZmlyc3QucGFuLFxyXG4gICAgICAgIC4uLnNlY29uZC5wYW4sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFjdGlvbnM6IHtcclxuICAgICAgICAuLi5maXJzdC5hY3Rpb25zLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgQm9va0NvbnRyb2xsZXIuc2V0QWN0aW9ucyhwcm9wcywgZmlyc3QuYWN0aW9ucyk7XHJcbiAgICBCb29rQ29udHJvbGxlci5zZXRBY3Rpb25zKHByb3BzLCBzZWNvbmQuYWN0aW9ucyk7XHJcbiAgICByZXR1cm4gcHJvcHM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2FsY1Byb3BzKHByb3BzKSB7XHJcbiAgICBwcm9wcy5zY2FsZS5kZWx0YSA9IChwcm9wcy5zY2FsZS5tYXgtcHJvcHMuc2NhbGUubWluKS9wcm9wcy5zY2FsZS5sZXZlbHM7XHJcbiAgICBwcm9wcy5saWdodGluZy5kZWx0YSA9IChwcm9wcy5saWdodGluZy5tYXgtcHJvcHMubGlnaHRpbmcubWluKS9wcm9wcy5saWdodGluZy5sZXZlbHM7XHJcbiAgICByZXR1cm4gcHJvcHM7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL0Jvb2tDb250cm9sbGVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Cb29rQ29udHJvbGxlci5qcyIsImltcG9ydCB7JH0gZnJvbSAnLi4vbGlicyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rUHJpbnRlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGJvb2ssIHN0eWxlU2hlZXQpIHtcclxuICAgIHRoaXMuYm9vayA9IGJvb2s7XHJcbiAgICB0aGlzLnN0eWxlU2hlZXQgPSBzdHlsZVNoZWV0O1xyXG4gICAgdGhpcy53bmQgPSBjb250ZXh0LnduZDtcclxuICAgIHRoaXMuZG9jID0gY29udGV4dC5kb2M7XHJcbiAgICB0aGlzLnBhZ2VDYWxsYmFjayA9IGJvb2suZ2V0UGFnZUNhbGxiYWNrKCk7XHJcbiAgICBjb25zdCB0ZXN0ID0gdGhpcy5wYWdlQ2FsbGJhY2soMCk7XHJcbiAgICB0aGlzLnR5cGUgPSB0ZXN0LnR5cGU7XHJcbiAgICBpZih0aGlzLnR5cGU9PT0ncGRmJykge1xyXG4gICAgICB0aGlzLnBkZlNyYyA9IHRlc3Quc3JjLnNyYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbmNlbCgpIHtcclxuICAgIHRoaXMuY2FuY2VsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIGlmKHRoaXMuZnJhbWUpIHtcclxuICAgICAgdGhpcy5mcmFtZS5yZW1vdmUoKTtcclxuICAgICAgZGVsZXRlIHRoaXMuZnJhbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmludCgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLmNhbmNlbGVkO1xyXG4gICAgaWYodGhpcy50eXBlPT09J3BkZicpIHtcclxuICAgICAgbGV0IHByaW50V25kLCBjYWxsTWFudWFsbHkgPSBmYWxzZTtcclxuICAgICAgaWYodGhpcy51c2VJRnJhbWUoKSkge1xyXG4gICAgICAgIGNhbGxNYW51YWxseSA9ICEhdGhpcy5mcmFtZTtcclxuICAgICAgICBpZighdGhpcy5mcmFtZSkge1xyXG4gICAgICAgICAgdGhpcy5mcmFtZSA9ICQoJzxpZnJhbWUgc3JjPVwiJyt0aGlzLnBkZlNyYysnXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvaWZyYW1lPicpLmFwcGVuZFRvKHRoaXMuZG9jLmJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmludFduZCA9IHRoaXMuZnJhbWVbMF0uY29udGVudFdpbmRvdztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBwcmludFduZCA9IHRoaXMud25kLm9wZW4odGhpcy5wZGZTcmMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGNhbGxNYW51YWxseSkge1xyXG4gICAgICAgIHByaW50V25kLnByaW50KCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgJChwcmludFduZCkub24oJ2xvYWQnLCAoKT0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHByaW50V25kLnByaW50KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKS5cclxuICAgICAgICB0aGVuKChjb250ZW50KT0+IHtcclxuICAgICAgICAgIGNvbnN0IHByaW50V25kID0gdGhpcy53bmQub3BlbigpLFxyXG4gICAgICAgICAgcHJpbnREb2MgPSBwcmludFduZC5kb2N1bWVudCxcclxuICAgICAgICAgIGh0bWwgPSBgXHJcbiAgICAgICAgICAgIDwhRE9DVFlQRSBodG1sPlxyXG4gICAgICAgICAgICA8aHRtbD5cclxuICAgICAgICAgICAgICA8aGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPjNEIEZsaXBCb29rIC0gUHJpbnRpbmc8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgJHtjb250ZW50LmhlYWR9XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcHJpbnREb2N1bWVudCgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucHJpbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocHJpbnREb2N1bWVudCwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgICAgICAgIDxib2R5IG9ubG9hZD1cImluaXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgJHtjb250ZW50LmJvZHl9XHJcbiAgICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICA8L2h0bWw+XHJcbiAgICAgICAgICBgO1xyXG4gICAgICAgICAgcHJpbnREb2Mub3BlbigpO1xyXG4gICAgICAgICAgcHJpbnREb2Mud3JpdGUoaHRtbCk7XHJcbiAgICAgICAgICBwcmludERvYy5jbG9zZSgpO1xyXG4gICAgICAgIH0pLlxyXG4gICAgICAgIGNhdGNoKChlKT0+IGNvbnNvbGUud2FybignM0QgRmxpcEJvb2sgLSBQcmludGluZyB3YXMgY2FuY2VsZWQnKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm9ncmVzcyh2KSB7XHJcbiAgICBpZih0aGlzLmNhbmNlbGVkKSB7XHJcbiAgICAgIHRocm93ICdDYW5jZWwgUHJpbnRpbmcnO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5vblByb2dyZXNzKSB7XHJcbiAgICAgIHRoaXMub25Qcm9ncmVzcyhNYXRoLmZsb29yKHYqMTAwKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb250ZW50KCkge1xyXG4gICAgY29uc3QgcGFnZXMgPSB0aGlzLmJvb2suZ2V0UGFnZXMoKSwgaGVhZCA9IG5ldyBTZXQoKSwgYm9keSA9IFtdO1xyXG4gICAgbGV0IGRvbmUgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIGZvcihsZXQgcGFnZT0wOyBwYWdlPHBhZ2VzOyArK3BhZ2UpIHtcclxuICAgICAgY29uc3QgaW5mbyA9IHRoaXMucGFnZUNhbGxiYWNrKHBhZ2UpO1xyXG4gICAgICBpZihpbmZvLnR5cGU9PT0naW1hZ2UnKSB7XHJcbiAgICAgICAgZG9uZSA9IGRvbmUudGhlbigoKT0+IHtcclxuICAgICAgICAgIHRoaXMucHJvZ3Jlc3MocGFnZS9wYWdlcyk7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJJbWFnZShoZWFkLCBib2R5LCBpbmZvLnNyYyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihpbmZvLnR5cGU9PT0naHRtbCcpIHtcclxuICAgICAgICBkb25lID0gZG9uZS50aGVuKCgpPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9ncmVzcyhwYWdlL3BhZ2VzKTtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckh0bWwoaGVhZCwgYm9keSwgaW5mby5zcmMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZG9uZS50aGVuKCgpPT4ge1xyXG4gICAgICB0aGlzLnByb2dyZXNzKDEpO1xyXG4gICAgICByZXR1cm4ge2hlYWQ6IHRoaXMucmVuZGVySGVhZChoZWFkKSwgYm9keTogYm9keS5qb2luKCdcXG4nKX1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHdyYXAoY29udGVudCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZmIzZC1wcmludGVyLXBhZ2VcIj4ke2NvbnRlbnR9PC9kaXY+YDtcclxuICB9XHJcblxyXG4gIHJlbmRlckltYWdlKGhlYWQsIGJvZHksIHNyYykge1xyXG4gICAgYm9keS5wdXNoKEJvb2tQcmludGVyLndyYXAoYDxpbWcgc3JjPVwiJHtzcmN9XCIgLz5gKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJIdG1sKGhlYWQsIGJvZHksIHNyYykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xyXG4gICAgICAkLmdldChzcmMsIChodG1sKT0+IHtcclxuICAgICAgICBjb25zdCBsaW5rcyA9IGh0bWwubWF0Y2goLzxsaW5rLio/Pi9pZykgfHwgW107XHJcbiAgICAgICAgZm9yKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgICAgICBpZihsaW5rLm1hdGNoKC9zdHlsZXNoZWV0L2kpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLm1hdGNoKC9ocmVmXFxzKj1cXHMqWydcIl0oLiopWydcIl0vaSk7XHJcbiAgICAgICAgICAgIGlmKGhyZWYpIHtcclxuICAgICAgICAgICAgICBoZWFkLmFkZChocmVmWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gaHRtbC5tYXRjaCgvPGJvZHkuKj8+KFtcXFNcXHNdKik8XFwvYm9keT4vaSk7XHJcbiAgICAgICAgaWYoY29udGVudCkge1xyXG4gICAgICAgICAgYm9keS5wdXNoKEJvb2tQcmludGVyLndyYXAoY29udGVudFsxXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pLmZhaWwoKGUpPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIHJlamVjdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXJIZWFkKGhlYWQpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXTtcclxuICAgIGhlYWQuZm9yRWFjaCgoayk9PiBjb250ZW50LnB1c2goYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiJHtrfVwiPmApKTtcclxuICAgIGNvbnRlbnQucHVzaCh0aGlzLnN0eWxlU2hlZXQ/IGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIiR7dGhpcy5zdHlsZVNoZWV0fVwiPmA6IEJvb2tQcmludGVyLmRlZmF1bHRTdHlsZVNoZWV0KCkpO1xyXG4gICAgcmV0dXJuIGNvbnRlbnQuam9pbignXFxuJyk7XHJcbiAgfVxyXG5cclxuICB1c2VJRnJhbWUoKSB7XHJcbiAgICBjb25zdCBpc0Nocm9taXVtID0gdGhpcy53bmQuY2hyb21lLFxyXG4gICAgICB3aW5OYXYgPSB0aGlzLnduZC5uYXZpZ2F0b3IsXHJcbiAgICAgIHZlbmRvck5hbWUgPSB3aW5OYXYudmVuZG9yLFxyXG4gICAgICBpc0lFZWRnZSA9IHdpbk5hdi51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ2VcIik+LTEsXHJcbiAgICAgIGlzSU9TQ2hyb21lID0gd2luTmF2LnVzZXJBZ2VudC5tYXRjaChcIkNyaU9TXCIpO1xyXG4gICAgbGV0IHVzZTtcclxuICAgIGlmKGlzSU9TQ2hyb21lKXtcclxuICAgICAgdXNlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZihpc0Nocm9taXVtICYmIHZlbmRvck5hbWU9PT0nR29vZ2xlIEluYy4nICYmICFpc0lFZWRnZSkge1xyXG4gICAgICB1c2UgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXNlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlZmF1bHRTdHlsZVNoZWV0KCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZiM2QtcHJpbnRlci1wYWdlIHtcclxuICAgICAgICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcclxuICAgICAgICB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9Cb29rUHJpbnRlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvQm9va1ByaW50ZXIuanMiLCJpbXBvcnQgeyR9IGZyb20gJy4uL2xpYnMnO1xyXG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va1ZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuXHJcbiAgc3RhdGljIFBBR0VfSEFORExFUl9ERUxBWSA9IDEwMDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb25Mb2FkLCB0ZW1wbGF0ZSwgaGFuZGxlcikge1xyXG4gICAgc3VwZXIoY29udGFpbmVyLCBvbkxvYWQsIHRlbXBsYXRlLCBoYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCkge1xyXG4gICAgdGhpcy52aWV3ID0gdGhpcy5jb250YWluZXIuZmluZCgnLnZpZXcnKTtcclxuICAgIHRoaXMuYm9va21hcmtzVmlldyA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy53aWRCb29rbWFya3MnKTtcclxuICAgIHRoaXMudGh1bWJuYWlsc1ZpZXcgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcud2lkVGh1bWJuYWlscycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGFuZGxlcnMoaWQpIHtcclxuICAgIGxldCBoYW5kbGVycztcclxuICAgIGlmKGlkPT09J2lucFBhZ2UnKSB7XHJcbiAgICAgIGhhbmRsZXJzID0gW3tcclxuICAgICAgICBpbnBQYWdlOiAoZSwgZGF0YSk9PiB0aGlzLmNhbGxMYXRlcihzdXBlci5nZXRIYW5kbGVycyhpZCksIGlkLCBlLCBkYXRhLCBCb29rVmlldy5QQUdFX0hBTkRMRVJfREVMQVkpXHJcbiAgICAgIH1dO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGhhbmRsZXJzID0gc3VwZXIuZ2V0SGFuZGxlcnMoaWQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhbmRsZXJzO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtU3RhdGVDaGFuZ2VkKGlkLCBzdGF0ZSkge1xyXG4gICAgaWYoaWQ9PT0nY21kRnVsbFNjcmVlbicpIHtcclxuICAgICAgaWYoc3RhdGUuYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ2Z1bGxzY3JlZW4nKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDbGFzcygnZnVsbHNjcmVlbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRWaWV3KCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmlldztcclxuICB9XHJcblxyXG4gIGdldEJvb2ttYXJrc1ZpZXcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib29rbWFya3NWaWV3O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGh1bWJuYWlsc1ZpZXcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aHVtYm5haWxzVmlldztcclxuICB9XHJcblxyXG4gIGdldEZvcm1zKCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBnZXRMaW5rcygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICdjbWRab29tSW4nLFxyXG4gICAgICAnY21kWm9vbU91dCcsXHJcbiAgICAgICdjbWREZWZhdWx0Wm9vbScsXHJcbiAgICAgICdjbWRUb2MnLFxyXG4gICAgICAnY21kRmFzdEJhY2t3YXJkJyxcclxuICAgICAgJ2NtZEJhY2t3YXJkJyxcclxuICAgICAgJ2NtZEZvcndhcmQnLFxyXG4gICAgICAnY21kRmFzdEZvcndhcmQnLFxyXG4gICAgICAnY21kU2F2ZScsXHJcbiAgICAgICdjbWRQcmludCcsXHJcbiAgICAgICdjbWRGdWxsU2NyZWVuJyxcclxuICAgICAgJ2NtZFNtYXJ0UGFuJyxcclxuICAgICAgJ2NtZFNpbmdsZVBhZ2UnLFxyXG4gICAgICAnY21kU291bmRzJyxcclxuICAgICAgJ2NtZFN0YXRzJyxcclxuICAgICAgJ2NtZExpZ2h0aW5nVXAnLFxyXG4gICAgICAnY21kTGlnaHRpbmdEb3duJyxcclxuICAgICAgJ2NtZENsb3NlVG9jJyxcclxuICAgICAgJ2NtZEJvb2ttYXJrcycsXHJcbiAgICAgICdjbWRUaHVtYm5haWxzJ1xyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdldFdpZGdldHMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAnd2lkTG9hZGluZ1Byb2dyZXNzJyxcclxuICAgICAgJ3dpZEZsb2F0V25kJyxcclxuICAgICAgJ3dpZFRvY01lbnUnLFxyXG4gICAgICAnd2lkQm9va21hcmtzJyxcclxuICAgICAgJ3dpZFRodW1ibmFpbHMnLFxyXG4gICAgICAnd2lkU2V0dGluZ3MnXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5wdXRzKCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgJ2lucFBhZ2UnLFxyXG4gICAgICAnaW5wUGFnZXMnXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dHMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAndHh0TG9hZGluZ1Byb2dyZXNzJ1xyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGdldFRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaHRtbDogJ3RlbXBsYXRlcy9kZWZhdWx0LWJvb2stdmlldy5odG1sJyxcclxuICAgICAgc3R5bGVzOiBbXHJcbiAgICAgICAgJ2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycsXHJcbiAgICAgICAgJ2Nzcy9ibGFjay1ib29rLXZpZXcuY3NzJ1xyXG4gICAgICBdLFxyXG4gICAgICBzY3JpcHQ6ICdqcy9kZWZhdWx0LWJvb2stdmlldy5qcydcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL0Jvb2tWaWV3LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Cb29rVmlldy5qcyIsImltcG9ydCB7JH0gZnJvbSAnLi4vbGlicyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rbWFya3Mge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIGl0ZW1zLCBnZXRUaXRsZT0oaSk9PiBpLnRpdGxlLCBnZXRJdGVtcz0oaSk9PmkuaXRlbXMpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgdGhpcy5tYXAgPSBbXTtcclxuICAgIHRoaXMuZ2V0VGl0bGUgPSBnZXRUaXRsZTtcclxuICAgIHRoaXMuZ2V0SXRlbXMgPSBnZXRJdGVtcztcclxuICAgIHRoaXMubm9kZXMgPSB0aGlzLm1hcE5vZGVzKGl0ZW1zLCB0aGlzLm1hcCk7XHJcblxyXG4gICAgdGhpcy5iaW5kcyA9IHtcclxuICAgICAgdG9nbGU6IChlKT0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGxpID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgd2hpbGUobGlbMF0gJiYgbGlbMF0hPT1jb250YWluZXJbMF0gJiYgIWxpLmhhc0NsYXNzKCdpdGVtJykpIHtcclxuICAgICAgICAgIGxpID0gJChsaVswXS5wYXJlbnROb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGkuaGFzQ2xhc3MoJ2l0ZW0nKSkge1xyXG4gICAgICAgICAgbGV0IGNtZCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICAgd2hpbGUoY21kWzBdICYmIGNtZFswXSE9PWxpWzBdICYmICFjbWQuaGFzQ2xhc3MoJ2NtZCcpKSB7XHJcbiAgICAgICAgICAgIGNtZCA9ICQoY21kWzBdLnBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoY21kLmhhc0NsYXNzKCdjbWQnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5tYXBbbGkuYXR0cignZGF0YS1pZCcpXTtcclxuICAgICAgICAgICAgaWYoY21kLmhhc0NsYXNzKCd0b2dsZScpKSB7XHJcbiAgICAgICAgICAgICAgbm9kZS5taW5pbWl6ZWQgPSAhbm9kZS5taW5pbWl6ZWQ7XHJcbiAgICAgICAgICAgICAgaWYobm9kZS5taW5pbWl6ZWQpIHtcclxuICAgICAgICAgICAgICAgIGxpLmZpbmQoJ3VsJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBsaS5maW5kKCcudG9nbGUnKS5hZGRDbGFzcygnbWluaW1pemVkJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGkuZmluZCgnLnRvZ2xlJykucmVtb3ZlQ2xhc3MoJ21pbmltaXplZCcpO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKCh0aGlzLnJlbmRlck5vZGUobm9kZSkubWF0Y2goLzx1bC4qPFxcL3VsPi8pIHx8IFsnJ10pWzBdKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYodGhpcy5vbk5hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTmF2aWdhdGUobm9kZS5pdGVtKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXIub24oJ2NsaWNrJywgdGhpcy5iaW5kcy50b2dsZSk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2l6ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcC5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIub2ZmKCdjbGljaycsIHRoaXMuYmluZHMudG9nbGUpO1xyXG4gICAgdGhpcy5jb250YWluZXIuaHRtbCgnJyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5odG1sKHRoaXMucmVuZGVyTm9kZXModGhpcy5ub2RlcykpO1xyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChmLCBub2Rlcz10aGlzLm5vZGVzKSB7XHJcbiAgICBmb3IobGV0IG5vZGUgb2YgKG5vZGVzIHx8IFtdKSkge1xyXG4gICAgICBmKG5vZGUpO1xyXG4gICAgICB0aGlzLmZvckVhY2goZiwgbm9kZS5jaGlsZHJlbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBhbmQoKSB7XHJcbiAgICB0aGlzLmZvckVhY2goKG4pPT4gbi5taW5pbWl6ZWQgPSBmYWxzZSk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbWluaW1pemUoKSB7XHJcbiAgICB0aGlzLmZvckVhY2goKG4pPT4gbi5taW5pbWl6ZWQgPSB0cnVlKTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJOb2RlKG5vZGUpIHtcclxuICAgIHJldHVybiBbJzxkaXYgY2xhc3M9XCJhcmVhXCI+JyxcclxuICAgICAgbm9kZS5jaGlsZHJlbj8gJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjbWQgdG9nbGUnICsgKG5vZGUubWluaW1pemVkPyAnIG1pbmltaXplZCc6ICcnKSArICdcIj48aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPjwvYT4gJzogJzxpIGNsYXNzPVwid2hpdGUtc3BhY2VcIj48L2k+ICcsXHJcbiAgICAgICc8YSBjbGFzcz1cImNtZFwiIHRpdGxlPVwiJywgbm9kZS50aXRsZSwnXCIgaHJlZj1cIiNcIj4nLCBub2RlLnRpdGxlLCAnPC9hPjwvZGl2PicsXHJcbiAgICAgIG5vZGUubWluaW1pemVkPyAnJzogdGhpcy5yZW5kZXJOb2Rlcyhub2RlLmNoaWxkcmVuKVxyXG4gICAgXS5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck5vZGVzKG5vZGVzKSB7XHJcbiAgICBsZXQgcmVzID0gWyc8ZGl2IGNsYXNzPVwiYm9va21hcmtzXCI+J107XHJcbiAgICBpZihub2RlcyAmJiBub2Rlcy5sZW5ndGgpIHtcclxuICAgICAgcmVzLnB1c2goJzx1bCBjbGFzcz1cImxldmVsLScsIG5vZGVzWzBdLmxldmVsLCAnXCI+Jyk7XHJcbiAgICAgIGZvcihsZXQgbm9kZSBvZiBub2Rlcykge1xyXG4gICAgICAgIHJlcy5wdXNoKFtcclxuICAgICAgICAgICc8bGkgY2xhc3M9XCJpdGVtXCIgZGF0YS1pZD1cIicsIG5vZGUuaWQsJ1wiPicsXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTm9kZShub2RlKSxcclxuICAgICAgICAgICc8L2xpPiddLmpvaW4oJycpKTtcclxuICAgICAgfVxyXG4gICAgICByZXMucHVzaCgnPC91bD4nKTtcclxuICAgIH1cclxuICAgIHJlcy5wdXNoKCc8L2Rpdj4nKTtcclxuICAgIHJldHVybiByZXMuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBtYXBOb2RlcyhpdGVtcywgbWFwPVtdLCBsZXZlbD0wKSB7XHJcbiAgICBsZXQgbm9kZXMgPSBudWxsO1xyXG4gICAgaWYoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIG5vZGVzPVtdO1xyXG4gICAgICBmb3IobGV0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBpZCA9IG1hcC5sZW5ndGg7XHJcbiAgICAgICAgbWFwLnB1c2godW5kZWZpbmVkKTtcclxuICAgICAgICBjb25zdCBub2RlID0ge1xyXG4gICAgICAgICAgaWQsXHJcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZXRUaXRsZShpdGVtKSxcclxuICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgaXRlbSxcclxuICAgICAgICAgIG1pbmltaXplZDogdHJ1ZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLm1hcE5vZGVzKHRoaXMuZ2V0SXRlbXMoaXRlbSksIG1hcCwgbGV2ZWwrMSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgbWFwW2lkXSA9IG5vZGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvQm9va21hcmtzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Cb29rbWFya3MuanMiLCJpbXBvcnQgQm9va1Byb3BzQnVpbGRlciBmcm9tICcuL0Jvb2tQcm9wc0J1aWxkZXInO1xyXG5pbXBvcnQgSW1hZ2VGYWN0b3J5IGZyb20gJy4vSW1hZ2VGYWN0b3J5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYkJvb2tQcm9wc0J1aWxkZXIgZXh0ZW5kcyBCb29rUHJvcHNCdWlsZGVyIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBwYWdlQ2FsbGJhY2ssIHBhZ2VzLCBvblJlYWR5KSB7XHJcbiAgICBzdXBlcihvblJlYWR5KTtcclxuICAgIHRoaXMuY2FsY1NoZWV0cyhwYWdlcyk7XHJcbiAgICB0aGlzLnBhZ2VDYWxsYmFjayA9IHBhZ2VDYWxsYmFjaztcclxuICAgIHRoaXMuYmluZHMgPSB7XHJcbiAgICAgIHBhZ2VDYWxsYmFjazogcGFnZUNhbGxiYWNrLmJpbmQodGhpcylcclxuICAgIH07XHJcbiAgICB0aGlzLmltYWdlRmFjdG9yeSA9IG5ldyBJbWFnZUZhY3RvcnkoY29udGV4dCk7XHJcblxyXG4gICAgaWYocGFnZXM+MCkge1xyXG4gICAgICBjb25zdCB0ZXN0ID0gdGhpcy5pbWFnZUZhY3RvcnkuYnVpbGQocGFnZUNhbGxiYWNrKDApLCAwLCB0aGlzLmRlZmF1bHRzLnNoZWV0LndpZHRoVGV4ZWxzLCB0aGlzLmRlZmF1bHRzLnNoZWV0LmhlaWdodFRleGVscywgdGhpcy5kZWZhdWx0cy5zaGVldC5jb2xvcik7XHJcbiAgICAgIHRlc3Qub25Mb2FkID0gKCk9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxjUHJvcHModGVzdC53aWR0aCwgdGVzdC5oZWlnaHQpO1xyXG4gICAgICAgIHRlc3QuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMucmVhZHkoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzID0gdGhpcy5kZWZhdWx0cztcclxuICAgICAgdGhpcy5yZWFkeSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9DbGJCb29rUHJvcHNCdWlsZGVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9DbGJCb29rUHJvcHNCdWlsZGVyLmpzIiwiaW1wb3J0IFNoZWV0QmxvY2sgZnJvbSAnLi9TaGVldEJsb2NrJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdmVyIGV4dGVuZHMgU2hlZXRCbG9jayB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHZpc3VhbCwgcCwgYW5nbGUsIHN0YXRlKSB7XHJcbiAgICBzdXBlcih2aXN1YWwsIHAsIDAsIDEsIGFuZ2xlLCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnRoaXMucC5jb3ZlcixcclxuICAgICAgc2hlZXRzOiAxXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbG9hZFBvaW50cygpIHtcclxuICAgIGNvbnN0IG9wZW5lZEludGVycG9sYXRpb25JbmRlY2VzID0gW1xyXG4gICAgICBbMiwzLDRdLFxyXG4gICAgICBbMiwzLDQsNSw2XVxyXG4gICAgXSxcclxuICAgIGNsb3NlZEludGVycG9sYXRpb25JbmRlY2VzID0gW1xyXG4gICAgICBbMCwxLDJdLFxyXG4gICAgICBbMCwxLDJdXHJcbiAgICBdLFxyXG4gICAgaW50ZXJwb2xhdGlvblBvaW50cyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIHg6IFtcclxuICAgICAgICAgICAgIFswLDAuMjg3NywwLjYzNDcsMC44MTc0LDEuMDAwMF0sXHJcbiAgICAgICAgICAgICBbMCwwLjI4MzEsMC42MjU2LDAuODA4MiwwLjk5MDldLFxyXG4gICAgICAgICAgICAgWzAsMC4yNjAzLDAuNTkzNiwwLjc3NjMsMC45NTg5XSxcclxuICAgICAgICAgICAgIFswLDAuMTM3MCwwLjM4ODEsMC41MzQyLDAuNjc1OF0sXHJcbiAgICAgICAgICAgICBbMCwwLDAsMCwwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgeTogW1xyXG4gICAgICAgICAgICAgWzAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgICBbMCwwLjAyLDAuMDA1LC0wLjAwMSwtMC4wMDI1XSxcclxuICAgICAgICAgICAgIFswLDAuMDQsMC4wMSwtMC4wMDIsLTAuMDA1XSxcclxuICAgICAgICAgICAgIFswLCAwLjI0NjYsIDAuNDc5NSwgMC41NzA4LCAwLjY3NThdLFxyXG4gICAgICAgICAgICAgWzAsIDAuMjg3NywgMC42MzQ3LCAwLjgxNzQsIDEuMDAwMF1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB4OiBbXHJcbiAgICAgICAgICAgICBbMCwwLjI4NzcsMC42MzQ3LDAuODE3NCwxLjAwMDBdLFxyXG4gICAgICAgICAgICAgWzAsMC4yODMxLDAuNjI1NiwwLjgwODIsMC45OTA5XSxcclxuICAgICAgICAgICAgIFswLDAuMjYwMywwLjU5MzYsMC43NzYzLDAuOTU4OV0sXHJcbiAgICAgICAgICAgICBbMC4wMDAsMC4yMzMsMC41NjMsMC43NDYsMC45MjddLFxyXG4gICAgICAgICAgICAgWzAuMDAwLDAuMTQ0LDAuNDMzLDAuNjEzLDAuNzk2XSxcclxuICAgICAgICAgICAgIFswLjAwMCwwLjA3MCwwLjI4OCwwLjQ1NSwwLjYyNl0sXHJcbiAgICAgICAgICAgICBbMCwwLDAsMCwwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgeTogW1xyXG4gICAgICAgICAgICAgWzAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgICBbMCwwLjAyLDAuMDA1LC0wLjAwMSwtMC4wMDI1XSxcclxuICAgICAgICAgICAgIFswLDAuMDQsMC4wMSwtMC4wMDIsLTAuMDA1XSxcclxuICAgICAgICAgICAgIFswLjAwMCwwLjE2OCwwLjI2OSwwLjI3MCwwLjI1NV0sXHJcbiAgICAgICAgICAgICBbMC4wMDAsMC4yNDUsMC40MzUsMC40NTgsMC40NjBdLFxyXG4gICAgICAgICAgICAgWzAuMDAwLDAuMjc4LDAuNTQ0LDAuNjE0LDAuNjczXSxcclxuICAgICAgICAgICAgIFswLCAwLjI4NzcsIDAuNjM0NywgMC44MTc0LCAxLjAwMDBdXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW50ZXJwb2xhdGlvblBvaW50cyxcclxuICAgICAgb3BlbmVkSW50ZXJwb2xhdGlvbkluZGVjZXMsXHJcbiAgICAgIGNsb3NlZEludGVycG9sYXRpb25JbmRlY2VzXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL0NvdmVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Db3Zlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGF1bmF5IHtcclxuICBzdGF0aWMgRVBTSUxPTiA9IDEuMCAvIDEwNDg1NzYuMDtcclxuXHJcbiAgc3RhdGljIHN1cGVydHJpYW5nbGUodmVydGljZXMpIHtcclxuICAgIHZhciB4bWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxyXG4gICAgICAgIHltaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXHJcbiAgICAgICAgeG1heCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcclxuICAgICAgICB5bWF4ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxyXG4gICAgICAgIGksIGR4LCBkeSwgZG1heCwgeG1pZCwgeW1pZDtcclxuXHJcbiAgICBmb3IoaSA9IHZlcnRpY2VzLmxlbmd0aDsgaS0tOyApIHtcclxuICAgICAgaWYodmVydGljZXNbaV1bMF0gPCB4bWluKSB4bWluID0gdmVydGljZXNbaV1bMF07XHJcbiAgICAgIGlmKHZlcnRpY2VzW2ldWzBdID4geG1heCkgeG1heCA9IHZlcnRpY2VzW2ldWzBdO1xyXG4gICAgICBpZih2ZXJ0aWNlc1tpXVsxXSA8IHltaW4pIHltaW4gPSB2ZXJ0aWNlc1tpXVsxXTtcclxuICAgICAgaWYodmVydGljZXNbaV1bMV0gPiB5bWF4KSB5bWF4ID0gdmVydGljZXNbaV1bMV07XHJcbiAgICB9XHJcblxyXG4gICAgZHggPSB4bWF4IC0geG1pbjtcclxuICAgIGR5ID0geW1heCAtIHltaW47XHJcbiAgICBkbWF4ID0gTWF0aC5tYXgoZHgsIGR5KTtcclxuICAgIHhtaWQgPSB4bWluICsgZHggKiAwLjU7XHJcbiAgICB5bWlkID0geW1pbiArIGR5ICogMC41O1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIFt4bWlkIC0gMjAgKiBkbWF4LCB5bWlkIC0gICAgICBkbWF4XSxcclxuICAgICAgW3htaWQgICAgICAgICAgICAsIHltaWQgKyAyMCAqIGRtYXhdLFxyXG4gICAgICBbeG1pZCArIDIwICogZG1heCwgeW1pZCAtICAgICAgZG1heF1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2lyY3VtY2lyY2xlKHZlcnRpY2VzLCBpLCBqLCBrKSB7XHJcbiAgICB2YXIgeDEgPSB2ZXJ0aWNlc1tpXVswXSxcclxuICAgICAgICB5MSA9IHZlcnRpY2VzW2ldWzFdLFxyXG4gICAgICAgIHgyID0gdmVydGljZXNbal1bMF0sXHJcbiAgICAgICAgeTIgPSB2ZXJ0aWNlc1tqXVsxXSxcclxuICAgICAgICB4MyA9IHZlcnRpY2VzW2tdWzBdLFxyXG4gICAgICAgIHkzID0gdmVydGljZXNba11bMV0sXHJcbiAgICAgICAgZmFic3kxeTIgPSBNYXRoLmFicyh5MSAtIHkyKSxcclxuICAgICAgICBmYWJzeTJ5MyA9IE1hdGguYWJzKHkyIC0geTMpLFxyXG4gICAgICAgIHhjLCB5YywgbTEsIG0yLCBteDEsIG14MiwgbXkxLCBteTIsIGR4LCBkeTtcclxuXHJcbiAgICAvKiBDaGVjayBmb3IgY29pbmNpZGVudCBwb2ludHMgKi9cclxuICAgIGlmKGZhYnN5MXkyIDwgRGVsYXVuYXkuRVBTSUxPTiAmJiBmYWJzeTJ5MyA8IERlbGF1bmF5LkVQU0lMT04pXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVlayEgQ29pbmNpZGVudCBwb2ludHMhXCIpO1xyXG5cclxuICAgIGlmKGZhYnN5MXkyIDwgRGVsYXVuYXkuRVBTSUxPTikge1xyXG4gICAgICBtMiAgPSAtKCh4MyAtIHgyKSAvICh5MyAtIHkyKSk7XHJcbiAgICAgIG14MiA9ICh4MiArIHgzKSAvIDIuMDtcclxuICAgICAgbXkyID0gKHkyICsgeTMpIC8gMi4wO1xyXG4gICAgICB4YyAgPSAoeDIgKyB4MSkgLyAyLjA7XHJcbiAgICAgIHljICA9IG0yICogKHhjIC0gbXgyKSArIG15MjtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGZhYnN5MnkzIDwgRGVsYXVuYXkuRVBTSUxPTikge1xyXG4gICAgICBtMSAgPSAtKCh4MiAtIHgxKSAvICh5MiAtIHkxKSk7XHJcbiAgICAgIG14MSA9ICh4MSArIHgyKSAvIDIuMDtcclxuICAgICAgbXkxID0gKHkxICsgeTIpIC8gMi4wO1xyXG4gICAgICB4YyAgPSAoeDMgKyB4MikgLyAyLjA7XHJcbiAgICAgIHljICA9IG0xICogKHhjIC0gbXgxKSArIG15MTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgbTEgID0gLSgoeDIgLSB4MSkgLyAoeTIgLSB5MSkpO1xyXG4gICAgICBtMiAgPSAtKCh4MyAtIHgyKSAvICh5MyAtIHkyKSk7XHJcbiAgICAgIG14MSA9ICh4MSArIHgyKSAvIDIuMDtcclxuICAgICAgbXgyID0gKHgyICsgeDMpIC8gMi4wO1xyXG4gICAgICBteTEgPSAoeTEgKyB5MikgLyAyLjA7XHJcbiAgICAgIG15MiA9ICh5MiArIHkzKSAvIDIuMDtcclxuICAgICAgeGMgID0gKG0xICogbXgxIC0gbTIgKiBteDIgKyBteTIgLSBteTEpIC8gKG0xIC0gbTIpO1xyXG4gICAgICB5YyAgPSAoZmFic3kxeTIgPiBmYWJzeTJ5MykgP1xyXG4gICAgICAgIG0xICogKHhjIC0gbXgxKSArIG15MSA6XHJcbiAgICAgICAgbTIgKiAoeGMgLSBteDIpICsgbXkyO1xyXG4gICAgfVxyXG5cclxuICAgIGR4ID0geDIgLSB4YztcclxuICAgIGR5ID0geTIgLSB5YztcclxuICAgIHJldHVybiB7aTogaSwgajogaiwgazogaywgeDogeGMsIHk6IHljLCByOiBkeCAqIGR4ICsgZHkgKiBkeX07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVkdXAoZWRnZXMpIHtcclxuICAgIHZhciBpLCBqLCBhLCBiLCBtLCBuO1xyXG5cclxuICAgIGZvcihqID0gZWRnZXMubGVuZ3RoOyBqOyApIHtcclxuICAgICAgYiA9IGVkZ2VzWy0tal07XHJcbiAgICAgIGEgPSBlZGdlc1stLWpdO1xyXG5cclxuICAgICAgZm9yKGkgPSBqOyBpOyApIHtcclxuICAgICAgICBuID0gZWRnZXNbLS1pXTtcclxuICAgICAgICBtID0gZWRnZXNbLS1pXTtcclxuXHJcbiAgICAgICAgaWYoKGEgPT09IG0gJiYgYiA9PT0gbikgfHwgKGEgPT09IG4gJiYgYiA9PT0gbSkpIHtcclxuICAgICAgICAgIGVkZ2VzLnNwbGljZShqLCAyKTtcclxuICAgICAgICAgIGVkZ2VzLnNwbGljZShpLCAyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRyaWFuZ3VsYXRlKHZlcnRpY2VzLCBrZXkpIHtcclxuICAgIHZhciBuID0gdmVydGljZXMubGVuZ3RoLFxyXG4gICAgICAgIGksIGosIGluZGljZXMsIHN0LCBvcGVuLCBjbG9zZWQsIGVkZ2VzLCBkeCwgZHksIGEsIGIsIGM7XHJcblxyXG4gICAgLyogQmFpbCBpZiB0aGVyZSBhcmVuJ3QgZW5vdWdoIHZlcnRpY2VzIHRvIGZvcm0gYW55IHRyaWFuZ2xlcy4gKi9cclxuICAgIGlmKG4gPCAzKVxyXG4gICAgICByZXR1cm4gW107XHJcblxyXG4gICAgLyogU2xpY2Ugb3V0IHRoZSBhY3R1YWwgdmVydGljZXMgZnJvbSB0aGUgcGFzc2VkIG9iamVjdHMuIChEdXBsaWNhdGUgdGhlXHJcbiAgICAgKiBhcnJheSBldmVuIGlmIHdlIGRvbid0LCB0aG91Z2gsIHNpbmNlIHdlIG5lZWQgdG8gbWFrZSBhIHN1cGVydHJpYW5nbGVcclxuICAgICAqIGxhdGVyIG9uISkgKi9cclxuICAgIHZlcnRpY2VzID0gdmVydGljZXMuc2xpY2UoMCk7XHJcblxyXG4gICAgaWYoa2V5KVxyXG4gICAgICBmb3IoaSA9IG47IGktLTsgKVxyXG4gICAgICAgIHZlcnRpY2VzW2ldID0gdmVydGljZXNbaV1ba2V5XTtcclxuXHJcbiAgICAvKiBNYWtlIGFuIGFycmF5IG9mIGluZGljZXMgaW50byB0aGUgdmVydGV4IGFycmF5LCBzb3J0ZWQgYnkgdGhlXHJcbiAgICAgKiB2ZXJ0aWNlcycgeC1wb3NpdGlvbi4gKi9cclxuICAgIGluZGljZXMgPSBuZXcgQXJyYXkobik7XHJcblxyXG4gICAgZm9yKGkgPSBuOyBpLS07IClcclxuICAgICAgaW5kaWNlc1tpXSA9IGk7XHJcblxyXG4gICAgaW5kaWNlcy5zb3J0KGZ1bmN0aW9uKGksIGopIHtcclxuICAgICAgcmV0dXJuIHZlcnRpY2VzW2pdWzBdIC0gdmVydGljZXNbaV1bMF07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBOZXh0LCBmaW5kIHRoZSB2ZXJ0aWNlcyBvZiB0aGUgc3VwZXJ0cmlhbmdsZSAod2hpY2ggY29udGFpbnMgYWxsIG90aGVyXHJcbiAgICAgKiB0cmlhbmdsZXMpLCBhbmQgYXBwZW5kIHRoZW0gb250byB0aGUgZW5kIG9mIGEgKGNvcHkgb2YpIHRoZSB2ZXJ0ZXhcclxuICAgICAqIGFycmF5LiAqL1xyXG4gICAgc3QgPSBEZWxhdW5heS5zdXBlcnRyaWFuZ2xlKHZlcnRpY2VzKTtcclxuICAgIHZlcnRpY2VzLnB1c2goc3RbMF0sIHN0WzFdLCBzdFsyXSk7XHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSB0aGUgb3BlbiBsaXN0IChjb250YWluaW5nIHRoZSBzdXBlcnRyaWFuZ2xlIGFuZCBub3RoaW5nXHJcbiAgICAgKiBlbHNlKSBhbmQgdGhlIGNsb3NlZCBsaXN0ICh3aGljaCBpcyBlbXB0eSBzaW5jZSB3ZSBoYXZuJ3QgcHJvY2Vzc2VkXHJcbiAgICAgKiBhbnkgdHJpYW5nbGVzIHlldCkuICovXHJcbiAgICBvcGVuICAgPSBbRGVsYXVuYXkuY2lyY3VtY2lyY2xlKHZlcnRpY2VzLCBuICsgMCwgbiArIDEsIG4gKyAyKV07XHJcbiAgICBjbG9zZWQgPSBbXTtcclxuICAgIGVkZ2VzICA9IFtdO1xyXG5cclxuICAgIC8qIEluY3JlbWVudGFsbHkgYWRkIGVhY2ggdmVydGV4IHRvIHRoZSBtZXNoLiAqL1xyXG4gICAgZm9yKGkgPSBpbmRpY2VzLmxlbmd0aDsgaS0tOyBlZGdlcy5sZW5ndGggPSAwKSB7XHJcbiAgICAgIGMgPSBpbmRpY2VzW2ldO1xyXG5cclxuICAgICAgLyogRm9yIGVhY2ggb3BlbiB0cmlhbmdsZSwgY2hlY2sgdG8gc2VlIGlmIHRoZSBjdXJyZW50IHBvaW50IGlzXHJcbiAgICAgICAqIGluc2lkZSBpdCdzIGNpcmN1bWNpcmNsZS4gSWYgaXQgaXMsIHJlbW92ZSB0aGUgdHJpYW5nbGUgYW5kIGFkZFxyXG4gICAgICAgKiBpdCdzIGVkZ2VzIHRvIGFuIGVkZ2UgbGlzdC4gKi9cclxuICAgICAgZm9yKGogPSBvcGVuLmxlbmd0aDsgai0tOyApIHtcclxuICAgICAgICAvKiBJZiB0aGlzIHBvaW50IGlzIHRvIHRoZSByaWdodCBvZiB0aGlzIHRyaWFuZ2xlJ3MgY2lyY3VtY2lyY2xlLFxyXG4gICAgICAgICAqIHRoZW4gdGhpcyB0cmlhbmdsZSBzaG91bGQgbmV2ZXIgZ2V0IGNoZWNrZWQgYWdhaW4uIFJlbW92ZSBpdFxyXG4gICAgICAgICAqIGZyb20gdGhlIG9wZW4gbGlzdCwgYWRkIGl0IHRvIHRoZSBjbG9zZWQgbGlzdCwgYW5kIHNraXAuICovXHJcbiAgICAgICAgZHggPSB2ZXJ0aWNlc1tjXVswXSAtIG9wZW5bal0ueDtcclxuICAgICAgICBpZihkeCA+IDAuMCAmJiBkeCAqIGR4ID4gb3BlbltqXS5yKSB7XHJcbiAgICAgICAgICBjbG9zZWQucHVzaChvcGVuW2pdKTtcclxuICAgICAgICAgIG9wZW4uc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBJZiB3ZSdyZSBvdXRzaWRlIHRoZSBjaXJjdW1jaXJjbGUsIHNraXAgdGhpcyB0cmlhbmdsZS4gKi9cclxuICAgICAgICBkeSA9IHZlcnRpY2VzW2NdWzFdIC0gb3BlbltqXS55O1xyXG4gICAgICAgIGlmKGR4ICogZHggKyBkeSAqIGR5IC0gb3BlbltqXS5yID4gRGVsYXVuYXkuRVBTSUxPTilcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAvKiBSZW1vdmUgdGhlIHRyaWFuZ2xlIGFuZCBhZGQgaXQncyBlZGdlcyB0byB0aGUgZWRnZSBsaXN0LiAqL1xyXG4gICAgICAgIGVkZ2VzLnB1c2goXHJcbiAgICAgICAgICBvcGVuW2pdLmksIG9wZW5bal0uaixcclxuICAgICAgICAgIG9wZW5bal0uaiwgb3BlbltqXS5rLFxyXG4gICAgICAgICAgb3BlbltqXS5rLCBvcGVuW2pdLmlcclxuICAgICAgICApO1xyXG4gICAgICAgIG9wZW4uc3BsaWNlKGosIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBSZW1vdmUgYW55IGRvdWJsZWQgZWRnZXMuICovXHJcbiAgICAgIERlbGF1bmF5LmRlZHVwKGVkZ2VzKTtcclxuXHJcbiAgICAgIC8qIEFkZCBhIG5ldyB0cmlhbmdsZSBmb3IgZWFjaCBlZGdlLiAqL1xyXG4gICAgICBmb3IoaiA9IGVkZ2VzLmxlbmd0aDsgajsgKSB7XHJcbiAgICAgICAgYiA9IGVkZ2VzWy0tal07XHJcbiAgICAgICAgYSA9IGVkZ2VzWy0tal07XHJcbiAgICAgICAgb3Blbi5wdXNoKERlbGF1bmF5LmNpcmN1bWNpcmNsZSh2ZXJ0aWNlcywgYSwgYiwgYykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ29weSBhbnkgcmVtYWluaW5nIG9wZW4gdHJpYW5nbGVzIHRvIHRoZSBjbG9zZWQgbGlzdCwgYW5kIHRoZW5cclxuICAgICAqIHJlbW92ZSBhbnkgdHJpYW5nbGVzIHRoYXQgc2hhcmUgYSB2ZXJ0ZXggd2l0aCB0aGUgc3VwZXJ0cmlhbmdsZSxcclxuICAgICAqIGJ1aWxkaW5nIGEgbGlzdCBvZiB0cmlwbGV0cyB0aGF0IHJlcHJlc2VudCB0cmlhbmdsZXMuICovXHJcbiAgICBmb3IoaSA9IG9wZW4ubGVuZ3RoOyBpLS07IClcclxuICAgICAgY2xvc2VkLnB1c2gob3BlbltpXSk7XHJcbiAgICBvcGVuLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgZm9yKGkgPSBjbG9zZWQubGVuZ3RoOyBpLS07IClcclxuICAgICAgaWYoY2xvc2VkW2ldLmkgPCBuICYmIGNsb3NlZFtpXS5qIDwgbiAmJiBjbG9zZWRbaV0uayA8IG4pXHJcbiAgICAgICAgb3Blbi5wdXNoKGNsb3NlZFtpXS5pLCBjbG9zZWRbaV0uaiwgY2xvc2VkW2ldLmspO1xyXG5cclxuICAgIC8qIFlheSwgd2UncmUgZG9uZSEgKi9cclxuICAgIHJldHVybiBvcGVuO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbnRhaW5zKHRyaSwgcCkge1xyXG4gICAgLyogQm91bmRpbmcgYm94IHRlc3QgZmlyc3QsIGZvciBxdWljayByZWplY3Rpb25zLiAqL1xyXG4gICAgaWYoKHBbMF0gPCB0cmlbMF1bMF0gJiYgcFswXSA8IHRyaVsxXVswXSAmJiBwWzBdIDwgdHJpWzJdWzBdKSB8fFxyXG4gICAgICAgKHBbMF0gPiB0cmlbMF1bMF0gJiYgcFswXSA+IHRyaVsxXVswXSAmJiBwWzBdID4gdHJpWzJdWzBdKSB8fFxyXG4gICAgICAgKHBbMV0gPCB0cmlbMF1bMV0gJiYgcFsxXSA8IHRyaVsxXVsxXSAmJiBwWzFdIDwgdHJpWzJdWzFdKSB8fFxyXG4gICAgICAgKHBbMV0gPiB0cmlbMF1bMV0gJiYgcFsxXSA+IHRyaVsxXVsxXSAmJiBwWzFdID4gdHJpWzJdWzFdKSlcclxuICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgdmFyIGEgPSB0cmlbMV1bMF0gLSB0cmlbMF1bMF0sXHJcbiAgICAgICAgYiA9IHRyaVsyXVswXSAtIHRyaVswXVswXSxcclxuICAgICAgICBjID0gdHJpWzFdWzFdIC0gdHJpWzBdWzFdLFxyXG4gICAgICAgIGQgPSB0cmlbMl1bMV0gLSB0cmlbMF1bMV0sXHJcbiAgICAgICAgaSA9IGEgKiBkIC0gYiAqIGM7XHJcblxyXG4gICAgLyogRGVnZW5lcmF0ZSB0cmkuICovXHJcbiAgICBpZihpID09PSAwLjApXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIHZhciB1ID0gKGQgKiAocFswXSAtIHRyaVswXVswXSkgLSBiICogKHBbMV0gLSB0cmlbMF1bMV0pKSAvIGksXHJcbiAgICAgICAgdiA9IChhICogKHBbMV0gLSB0cmlbMF1bMV0pIC0gYyAqIChwWzBdIC0gdHJpWzBdWzBdKSkgLyBpO1xyXG5cclxuICAgIC8qIElmIHdlJ3JlIG91dHNpZGUgdGhlIHRyaSwgZmFpbC4gKi9cclxuICAgIGlmKHUgPCAwLjAgfHwgdiA8IDAuMCB8fCAodSArIHYpID4gMS4wKVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gW3UsIHZdO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9EZWxhdW5heS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvRGVsYXVuYXkuanMiLCJpbXBvcnQgeyR9IGZyb20gJy4uL2xpYnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0ZWN0b3Ige1xyXG5cclxuXHRzdGF0aWMgY2FudmFzID0gISEgd2luZG93LkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcblx0c3RhdGljIHdlYmdsID0gKGZ1bmN0aW9uKCkge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcblx0XHRcdHJldHVybiAhISAod2luZG93LldlYkdMUmVuZGVyaW5nQ29udGV4dCAmJiAoY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpKSk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fSkoKTtcclxuXHJcblx0c3RhdGljIHdvcmtlcnMgPSAhISB3aW5kb3cuV29ya2VyO1xyXG5cclxuXHRzdGF0aWMgZmlsZWFwaSA9IHdpbmRvdy5GaWxlICYmIHdpbmRvdy5GaWxlUmVhZGVyICYmIHdpbmRvdy5GaWxlTGlzdCAmJiB3aW5kb3cuQmxvYjtcclxuXHJcblx0c3RhdGljIGdldFdlYkdMRXJyb3JNZXNzYWdlKCkge1xyXG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZWxlbWVudC5pZCA9ICd3ZWJnbC1lcnJvci1tZXNzYWdlJztcclxuXHRcdGVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9ICdtb25vc3BhY2UnO1xyXG5cdFx0ZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9ICcxM3B4JztcclxuXHRcdGVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9ICdub3JtYWwnO1xyXG5cdFx0ZWxlbWVudC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuXHRcdGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmJztcclxuXHRcdGVsZW1lbnQuc3R5bGUuY29sb3IgPSAnIzAwMCc7XHJcblx0XHRlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMS41ZW0nO1xyXG5cdFx0ZWxlbWVudC5zdHlsZS53aWR0aCA9ICc0MDBweCc7XHJcblx0XHRlbGVtZW50LnN0eWxlLm1hcmdpbiA9ICc1ZW0gYXV0byAwJztcclxuXHJcblx0XHRpZiAoIURldGVjdG9yLndlYmdsKSB7XHJcblx0XHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gd2luZG93LldlYkdMUmVuZGVyaW5nQ29udGV4dCA/IFtcclxuXHRcdFx0XHQnWW91ciBncmFwaGljcyBjYXJkIGRvZXMgbm90IHNlZW0gdG8gc3VwcG9ydCA8YSBocmVmPVwiaHR0cDovL2tocm9ub3Mub3JnL3dlYmdsL3dpa2kvR2V0dGluZ19hX1dlYkdMX0ltcGxlbWVudGF0aW9uXCIgc3R5bGU9XCJjb2xvcjojMDAwXCI+V2ViR0w8L2E+LjxiciAvPicsXHJcblx0XHRcdFx0J0ZpbmQgb3V0IGhvdyB0byBnZXQgaXQgPGEgaHJlZj1cImh0dHA6Ly9nZXQud2ViZ2wub3JnL1wiIHN0eWxlPVwiY29sb3I6IzAwMFwiPmhlcmU8L2E+LidcclxuXHRcdFx0XS5qb2luKCdcXG4nKSA6IFtcclxuXHRcdFx0XHQnWW91ciBicm93c2VyIGRvZXMgbm90IHNlZW0gdG8gc3VwcG9ydCA8YSBocmVmPVwiaHR0cDovL2tocm9ub3Mub3JnL3dlYmdsL3dpa2kvR2V0dGluZ19hX1dlYkdMX0ltcGxlbWVudGF0aW9uXCIgc3R5bGU9XCJjb2xvcjojMDAwXCI+V2ViR0w8L2E+Ljxici8+JyxcclxuXHRcdFx0XHQnRmluZCBvdXQgaG93IHRvIGdldCBpdCA8YSBocmVmPVwiaHR0cDovL2dldC53ZWJnbC5vcmcvXCIgc3R5bGU9XCJjb2xvcjojMDAwXCI+aGVyZTwvYT4uJ1xyXG5cdFx0XHRdLmpvaW4oJ1xcbicpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYWRkR2V0V2ViR0xNZXNzYWdlKHBhcmFtZXRlcnMpIHtcclxuXHRcdGxldCBwYXJlbnQsIGlkLCBlbGVtZW50O1xyXG5cdFx0cGFyYW1ldGVycyA9IHBhcmFtZXRlcnMgfHwge307XHJcblxyXG5cdFx0cGFyZW50ID0gcGFyYW1ldGVycy5wYXJlbnQgfHwgJChkb2N1bWVudC5ib2R5KTtcclxuXHRcdGlkID0gcGFyYW1ldGVycy5pZCB8fCAnb2xkaWUnO1xyXG5cclxuXHRcdGVsZW1lbnQgPSBEZXRlY3Rvci5nZXRXZWJHTEVycm9yTWVzc2FnZSgpO1xyXG5cdFx0Ly9lbGVtZW50LmlkID0gaWQ7XHJcblxyXG5cdFx0cGFyZW50LmFwcGVuZChlbGVtZW50KTtcclxuXHR9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvRGV0ZWN0b3IuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL0RldGVjdG9yLmpzIiwiaW1wb3J0IHskfSBmcm9tICcuLi9saWJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jTW91c2VTaW11bGF0b3Ige1xyXG5cclxuICBzdGF0aWMgSE9WRVIgPSAnU0lNVUxBVEVELUhPVkVSJztcclxuICBzdGF0aWMgQUNUSVZFID0gJ1NJTVVMQVRFRC1BQ1RJVkUnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihqRnJhbWUsIGVsZW1lbnQsIGJFbGVtZW50PWRvY3VtZW50LmJvZHkpIHtcclxuICAgIHRoaXMuakZyYW1lID0gakZyYW1lO1xyXG4gICAgdGhpcy53bmQgPSBqRnJhbWVbMF0uY29udGVudFdpbmRvdztcclxuICAgIHRoaXMuZG9jID0gakZyYW1lWzBdLmNvbnRlbnREb2N1bWVudDtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQgfHwgZG9jLmJvZHk7XHJcbiAgICB0aGlzLmJFbGVtZW50ID0gYkVsZW1lbnQ7XHJcbiAgICB0aGlzLnJlc2VuZFByb3BlcnRpZXMgPSB0aGlzLmdldERlZmF1bHRSZXNlbmRQcm9wZXJ0aWVzKCk7XHJcbiAgICB0aGlzLnVuZGVmaW5lZFByb3BlcnRpZXMgPSB0aGlzLmdldERlZmF1bHRVbmRlZmluZWRQcm9wZXJ0aWVzKCk7XHJcbiAgICB0aGlzLmN1cnNvcnMgPSBbXTtcclxuICAgIHRoaXMub25Eb2NDaGFuZ2VDbGJzID0gW107XHJcbiAgICBjb25zdCB0ZXJtcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaW5kOiAnOmhvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U6ICcuJytEb2NNb3VzZVNpbXVsYXRvci5IT1ZFUlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmluZDogJzphY3RpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZTogJy4nK0RvY01vdXNlU2ltdWxhdG9yLkFDVElWRVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXTtcclxuICAgIGxldCBzdHlsZSA9IFsnPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPiddO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvYy5zdHlsZVNoZWV0cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICBsZXQgc3MgPSB0aGlzLmRvYy5zdHlsZVNoZWV0c1tpXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzcy5jc3NSdWxlcy5sZW5ndGg7ICsraikge1xyXG4gICAgICAgIGxldCByID0gc3MuY3NzUnVsZXNbal0sIGNzc1RleHQ7XHJcbiAgICAgICAgZm9yKGxldCB0ZXJtIG9mIHRlcm1zKSB7XHJcbiAgICAgICAgICBpZiAofnIuc2VsZWN0b3JUZXh0LmluZGV4T2YodGVybS5maW5kKSkge1xyXG4gICAgICAgICAgICBjc3NUZXh0ID0gKGNzc1RleHQgfHwgci5jc3NUZXh0KS5yZXBsYWNlKG5ldyBSZWdFeHAodGVybS5maW5kLCAnZycpLCB0ZXJtLnJlcGxhY2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjc3NUZXh0KSB7XHJcbiAgICAgICAgICBzdHlsZS5wdXNoKGNzc1RleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3R5bGUucHVzaCgnPC9zdHlsZT4nKTtcclxuICAgICQodGhpcy5kb2MuaGVhZCkuYXBwZW5kKCQoc3R5bGUuam9pbignJykpKTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRDb29yZHMoeCwgeSkge1xyXG4gICAgY29uc3QgakVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudCk7XHJcbiAgICBjb25zdCBvZmZzZXQgPSBqRWxlbWVudC5vZmZzZXQoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IG9mZnNldC5sZWZ0K2pFbGVtZW50LndpZHRoKCkqeCxcclxuICAgICAgeTogb2Zmc2V0LnRvcCtqRWxlbWVudC5oZWlnaHQoKSooMS15KVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJFdmVudChlbGVtZW50LCBlLCBwLCB0eXBlLCBhZHZhbmNlZFByb3BzKSB7XHJcbiAgICBjb25zdCBwcm9wcyA9IHt9O1xyXG4gICAgZm9yKGxldCBuIG9mIHRoaXMucmVzZW5kUHJvcGVydGllcykge1xyXG4gICAgICBwcm9wc1tuXSA9IGVbbl07XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IG4gb2YgdGhpcy51bmRlZmluZWRQcm9wZXJ0aWVzKSB7XHJcbiAgICAgIHByb3BzW25dID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBuIGluIGFkdmFuY2VkUHJvcHMpIHtcclxuICAgICAgaWYoYWR2YW5jZWRQcm9wcy5oYXNPd25Qcm9wZXJ0eShuKSkge1xyXG4gICAgICAgIHByb3BzW25dID0gYWR2YW5jZWRQcm9wc1tuXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvcHMudmlldyA9IHRoaXMud25kO1xyXG4gICAgcHJvcHMucGFnZVggPSBwLng7XHJcbiAgICBwcm9wcy5wYWdlWSA9IHAueTtcclxuICAgIGNvbnN0IGpFID0gJC5FdmVudCh0eXBlLCBwcm9wcyk7XHJcbiAgICBqRS50aW1lU3RhbXAgPSBlLnRpbWVTdGFtcDtcclxuICAgICQoZWxlbWVudCkudHJpZ2dlcihqRSk7XHJcbiAgfVxyXG5cclxuICBhZGRDbGFzcyhlbGVtZW50LCBuYW1lKSB7XHJcbiAgICAkKGVsZW1lbnQpLmFkZENsYXNzKG5hbWUpO1xyXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLnduZC5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG4gICAgdGhpcy5jdXJzb3JzLnB1c2goJCh0aGlzLmJFbGVtZW50KS5jc3MoJ2N1cnNvcicpKTtcclxuICAgICQodGhpcy5iRWxlbWVudCkuY3NzKCdjdXJzb3InLCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdjdXJzb3InKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVDbGFzcyhlbGVtZW50LCBuYW1lKSB7XHJcbiAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKG5hbWUpO1xyXG4gICAgJCh0aGlzLmJFbGVtZW50KS5jc3MoJ2N1cnNvcicsIHRoaXMuY3Vyc29ycy5wb3AoKSk7XHJcbiAgfVxyXG5cclxuICBlbnRlckVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBEb2NNb3VzZVNpbXVsYXRvci5IT1ZFUik7XHJcbiAgfVxyXG5cclxuICBsZWF2ZUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhlbGVtZW50LCBEb2NNb3VzZVNpbXVsYXRvci5IT1ZFUik7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBEb2NNb3VzZVNpbXVsYXRvci5BQ1RJVkUpO1xyXG4gIH1cclxuXHJcbiAgZGVhY3RpdmF0ZUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhlbGVtZW50LCBEb2NNb3VzZVNpbXVsYXRvci5BQ1RJVkUpO1xyXG4gIH1cclxuXHJcbiAgYWRkRG9jQ2hhbmdlQ2xiKGNsYikge1xyXG4gICAgdGhpcy5vbkRvY0NoYW5nZUNsYnMucHVzaChjbGIpO1xyXG4gIH1cclxuXHJcbiAgbm90aWZ5KCkge1xyXG4gICAgZm9yKGxldCBjbGIgb2YgdGhpcy5vbkRvY0NoYW5nZUNsYnMpIHtcclxuICAgICAgY2xiKHRoaXMud25kLCB0aGlzLmRvYyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbGVtZW50RnJvbVBvaW50KHApIHtcclxuICAgIGxldCBub2RlID0gdGhpcy5kb2MuYm9keSwgbmV4dCA9IHRydWU7XHJcbiAgICB3aGlsZShuZXh0KSB7XHJcbiAgICAgIG5leHQgPSBmYWxzZTtcclxuICAgICAgZm9yKGxldCBpPTA7IGk8bm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgaWYoY2hpbGQgaW5zdGFuY2VvZiB0aGlzLnduZC5FbGVtZW50KSB7XHJcbiAgICAgICAgICBjb25zdCBqQyA9ICQoY2hpbGQpLCBvZmZzZXQgPSBqQy5vZmZzZXQoKSwgaGVpZ2h0ID0gakMuaGVpZ2h0KCksIHdpZHRoID0gakMud2lkdGgoKTtcclxuICAgICAgICAgIGlmKHAueD5vZmZzZXQubGVmdCAmJiBwLng8b2Zmc2V0LmxlZnQrd2lkdGggJiYgcC55Pm9mZnNldC50b3AgJiYgcC55PG9mZnNldC50b3AraGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBjaGlsZDtcclxuICAgICAgICAgICAgbmV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KHApIHtcclxuICAgIGNvbnN0IG9mZjAgPSB0aGlzLmpGcmFtZS5vZmZzZXQoKTtcclxuICAgIHRoaXMuakZyYW1lLm9mZnNldCh7bGVmdDogMC41KndpbmRvdy5pbm5lcldpZHRoLXAueCwgdG9wOiAwLjUqd2luZG93LmlubmVySGVpZ2h0LXAueX0pO1xyXG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmRvYy5lbGVtZW50RnJvbVBvaW50KHAueCwgcC55KTtcclxuICAgIGlmKCFlbGVtZW50KSB7IC8vIGl0IGlzbid0IGEgam9rZSBpdCdzIElFXHJcbiAgICAgIGVsZW1lbnQgPSB0aGlzLmRvYy5lbGVtZW50RnJvbVBvaW50KHAueCwgcC55KTtcclxuICAgIH1cclxuICAgIHRoaXMuakZyYW1lLm9mZnNldChvZmYwKTtcclxuICAgIHJldHVybiBlbGVtZW50PyBlbGVtZW50OiB0aGlzLmVsZW1lbnRGcm9tUG9pbnQocCk7XHJcbiAgfVxyXG5cclxuICBzaW11bGF0ZShlLCBkb2MsIHgsIHkpIHtcclxuICAgIGNvbnN0IHAgPSB0aGlzLmNvbnZlcnRDb29yZHMoeCwgeSksXHJcbiAgICAgICAgICBlbGVtZW50ID0gZG9jPT09dGhpcy5kb2M/IHRoaXMuZ2V0RWxlbWVudChwKTogdW5kZWZpbmVkO1xyXG4gICAgbGV0IHRyaWdnZXIgPSBlbGVtZW50ICE9PSB1bmRlZmluZWQsIG5vdGlmeSA9IGZhbHNlO1xyXG5cclxuICAgIHN3aXRjaChlLnR5cGUpIHtcclxuICAgICAgY2FzZSAnbW91c2Vkb3duJzoge1xyXG4gICAgICAgIGlmKHRoaXMuY2FwRWxlbWVudCkge1xyXG4gICAgICAgICAgdGhpcy5kZWFjdGl2YXRlRWxlbWVudCh0aGlzLmNhcEVsZW1lbnQpO1xyXG4gICAgICAgICAgbm90aWZ5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYXBFbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICBpZih0aGlzLmNhcEVsZW1lbnQpIHtcclxuICAgICAgICAgIHRoaXMuYWN0aXZhdGVFbGVtZW50KHRoaXMuY2FwRWxlbWVudCk7XHJcbiAgICAgICAgICBub3RpZnkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdtb3VzZXVwJzoge1xyXG4gICAgICAgIGlmKHRoaXMuY2FwRWxlbWVudCkge1xyXG4gICAgICAgICAgdGhpcy5kZWFjdGl2YXRlRWxlbWVudCh0aGlzLmNhcEVsZW1lbnQpO1xyXG4gICAgICAgICAgbm90aWZ5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lU3RhbXAgPSBlLnRpbWVTdGFtcDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdjbGljayc6IHtcclxuICAgICAgICB0cmlnZ2VyID0gZWxlbWVudCAmJiB0aGlzLmNhcEVsZW1lbnQgPT09IGVsZW1lbnQgJiYgZS50aW1lU3RhbXAgPT09IHRoaXMudGltZVN0YW1wO1xyXG4gICAgICAgIHRoaXMuY2FwRWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdtb3VzZWVudGVyJzpcclxuICAgICAgY2FzZSAnbW91c2VvdmVyJzpcclxuICAgICAgY2FzZSAnbW91c2Vtb3ZlJzoge1xyXG4gICAgICAgIGxldCBsZWF2ZWQgPSBudWxsO1xyXG4gICAgICAgIGlmKHRoaXMuaG92RWxlbWVudCAhPT0gZWxlbWVudCAmJiB0aGlzLmhvdkVsZW1lbnQpIHtcclxuICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHRoaXMuaG92RWxlbWVudCwgZSwgcCwgJ21vdXNlb3V0Jywge3JlbGF0ZWRUYXJnZXQ6IGVsZW1lbnQ/IGVsZW1lbnQ6IG51bGx9KTtcclxuICAgICAgICAgIHRoaXMubGVhdmVFbGVtZW50KHRoaXMuaG92RWxlbWVudCk7XHJcbiAgICAgICAgICBsZWF2ZWQgPSB0aGlzLmhvdkVsZW1lbnQ7XHJcbiAgICAgICAgICB0aGlzLmhvdkVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBub3RpZnkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5ob3ZFbGVtZW50ICYmIGVsZW1lbnQpIHtcclxuICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KGVsZW1lbnQsIGUsIHAsICdtb3VzZW92ZXInLCB7cmVsYXRlZFRhcmdldDogbGVhdmVkfSk7XHJcbiAgICAgICAgICB0aGlzLmVudGVyRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgIHRoaXMuaG92RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICBub3RpZnkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmlnZ2VyID0gZWxlbWVudCAmJiBlLnR5cGUgPT09ICdtb3VzZW1vdmUnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ21vdXNlbGVhdmUnOlxyXG4gICAgICBjYXNlICdtb3VzZW91dCc6IHtcclxuICAgICAgICBpZih0aGlzLmhvdkVsZW1lbnQpIHtcclxuICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KHRoaXMuaG92RWxlbWVudCwgZSwgcCwgJ21vdXNlb3V0Jywge3JlbGF0ZWRUYXJnZXQ6IGUucmVsYXRlZFRhcmdldH0pO1xyXG4gICAgICAgICAgdGhpcy5sZWF2ZUVsZW1lbnQodGhpcy5ob3ZFbGVtZW50KTtcclxuICAgICAgICAgIHRoaXMuaG92RWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIG5vdGlmeSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaWdnZXIgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYodHJpZ2dlcikge1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChlbGVtZW50LCBlLCBwLCBlLnR5cGUpO1xyXG4gICAgfVxyXG4gICAgaWYobm90aWZ5KSB7XHJcbiAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0VW5kZWZpbmVkUHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICdjbGllbnRYJyxcclxuICAgICAgJ2NsaWVudFknLFxyXG4gICAgICAnb2Zmc2V0WCcsXHJcbiAgICAgICdvZmZzZXRZJyxcclxuICAgICAgJ3NjcmVlblgnLFxyXG4gICAgICAnc2NyZWVuWSdcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0UmVzZW5kUHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICdhbHRLZXknLFxyXG4gICAgICAnYnViYmxlcycsXHJcbiAgICAgICdidXR0b24nLFxyXG4gICAgICAnYnV0dG9ucycsXHJcbiAgICAgICdjYW5jZWxhYmxlJyxcclxuICAgICAgJ2NoYW5nZWRUb3VjaGVzJyxcclxuICAgICAgJ2NoYXInLFxyXG4gICAgICAnY2hhckNvZGUnLFxyXG4gICAgICAnY3RybEtleScsXHJcbiAgICAgICdkYXRhJyxcclxuICAgICAgJ2RldGFpbCcsXHJcbiAgICAgICdldmVudFBoYXNlJyxcclxuICAgICAgJ2lzRGVmYXVsdFByZXZlbnRlZCcsXHJcbiAgICAgICdrZXknLFxyXG4gICAgICAna2V5Q29kZScsXHJcbiAgICAgICdtZXRhS2V5JyxcclxuICAgICAgJ3BvaW50ZXJJZCcsXHJcbiAgICAgICdwb2ludGVyVHlwZScsXHJcbiAgICAgICdzaGlmdEtleScsXHJcbiAgICAgICd0YXJnZXRUb3VjaGVzJyxcclxuICAgICAgJ3RvdWNoZXMnLFxyXG4gICAgICAnd2hpY2gnXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qXHJcbmFsdEtleSxcclxuYnViYmxlcyxcclxuYnV0dG9uLFxyXG5idXR0b25zLFxyXG5jYW5jZWxhYmxlLFxyXG5jaGFuZ2VkVG91Y2hlcyxcclxuY2hhcixcclxuY2hhckNvZGUsXHJcbmNsaWVudFgsXHJcbmNsaWVudFksXHJcbmN0cmxLZXksXHJcbmN1cnJlbnRUYXJnZXQsXHJcbmRhdGEsXHJcbmRlbGVnYXRlVGFyZ2V0LFxyXG5kZXRhaWwsXHJcbmV2ZW50UGhhc2UsXHJcbmhhbmRsZU9iaixcclxuaXNEZWZhdWx0UHJldmVudGVkLFxyXG5rZXksXHJcbmtleUNvZGUsXHJcbm1ldGFLZXksXHJcbm9mZnNldFgsXHJcbm9mZnNldFksXHJcbm9yaWdpbmFsRXZlbnQsXHJcbnBhZ2VYLFxyXG5wYWdlWSxcclxucG9pbnRlcklkLFxyXG5wb2ludGVyVHlwZSxcclxucmVsYXRlZFRhcmdldCxcclxuc2NyZWVuWCxcclxuc2NyZWVuWSxcclxuc2hpZnRLZXksXHJcbnRhcmdldCxcclxudGFyZ2V0VG91Y2hlcyxcclxudGltZVN0YW1wLFxyXG50b0VsZW1lbnQsXHJcbnRvdWNoZXMsXHJcbnR5cGUsXHJcbnZpZXcsXHJcbndoaWNoXHJcbiovXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvRG9jTW91c2VTaW11bGF0b3IuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL0RvY01vdXNlU2ltdWxhdG9yLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tMkltYWdlIHtcblxuICBjb25zdHJ1Y3Rvcih3bmQsIGRvYywgY2FjaGUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICB0aGlzLndpbmRvdyA9IHduZDtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jO1xuICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcblxuICAgIGNvbnN0IHV0aWwgPSBuZXdVdGlsKCk7XG4gICAgY29uc3QgaW5saW5lciA9IG5ld0lubGluZXIoKTtcbiAgICBjb25zdCBmb250RmFjZXMgPSBuZXdGb250RmFjZXMoKTtcbiAgICBjb25zdCBpbWFnZXMgPSBuZXdJbWFnZXMoKTtcblxuICAgIHRoaXMudG9TdmcgPSB0b1N2ZztcbiAgICB0aGlzLnRvUG5nID0gdG9Qbmc7XG4gICAgdGhpcy50b0pwZWcgPSB0b0pwZWc7XG4gICAgdGhpcy50b0Jsb2IgPSB0b0Jsb2I7XG4gICAgdGhpcy50b1BpeGVsRGF0YSA9IHRvUGl4ZWxEYXRhO1xuICAgIHRoaXMuaW1wbCA9IHtcbiAgICAgICAgICAgICAgICAgIGZvbnRGYWNlczogZm9udEZhY2VzLFxuICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBpbWFnZXMsXG4gICAgICAgICAgICAgICAgICB1dGlsOiB1dGlsLFxuICAgICAgICAgICAgICAgICAgaW5saW5lcjogaW5saW5lclxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBUaGUgRE9NIE5vZGUgb2JqZWN0IHRvIHJlbmRlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLmZpbHRlciAtIFNob3VsZCByZXR1cm4gdHJ1ZSBpZiBwYXNzZWQgbm9kZSBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIG91dHB1dFxuICAgICAqICAgICAgICAgIChleGNsdWRpbmcgbm9kZSBtZWFucyBleGNsdWRpbmcgaXQncyBjaGlsZHJlbiBhcyB3ZWxsKS4gTm90IGNhbGxlZCBvbiB0aGUgcm9vdCBub2RlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmJnY29sb3IgLSBjb2xvciBmb3IgdGhlIGJhY2tncm91bmQsIGFueSB2YWxpZCBDU1MgY29sb3IgdmFsdWUuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMud2lkdGggLSB3aWR0aCB0byBiZSBhcHBsaWVkIHRvIG5vZGUgYmVmb3JlIHJlbmRlcmluZy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy5oZWlnaHQgLSBoZWlnaHQgdG8gYmUgYXBwbGllZCB0byBub2RlIGJlZm9yZSByZW5kZXJpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuc3R5bGUgLSBhbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyB0byBiZSBjb3BpZWQgdG8gbm9kZSdzIHN0eWxlIGJlZm9yZSByZW5kZXJpbmcuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMucXVhbGl0eSAtIGEgTnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmRpY2F0aW5nIGltYWdlIHF1YWxpdHkgKGFwcGxpY2FibGUgdG8gSlBFRyBvbmx5KSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0cyB0byAxLjAuXG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gLSBBIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIFNWRyBpbWFnZSBkYXRhIFVSTFxuICAgICAqICovXG5cbiAgICBmdW5jdGlvbiB0b1N2Zyhub2RlLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZU5vZGUobm9kZSwgb3B0aW9ucy5maWx0ZXIsIHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGVtYmVkRm9udHMpXG4gICAgICAgICAgICAudGhlbihpbmxpbmVJbWFnZXMpXG4gICAgICAgICAgICAudGhlbihhcHBseU9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZVN2Z0RhdGFVcmkoY2xvbmUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2lkdGggfHwgdXRpbC53aWR0aChub2RlKSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5oZWlnaHQgfHwgdXRpbC5oZWlnaHQobm9kZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlPcHRpb25zKGNsb25lKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5iZ2NvbG9yKSBjbG9uZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJnY29sb3I7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLndpZHRoKSBjbG9uZS5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGVpZ2h0KSBjbG9uZS5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgICAgIHNlbGYud2luZG93Lk9iamVjdC5rZXlzKG9wdGlvbnMuc3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb25lLnN0eWxlW3Byb3BlcnR5XSA9IG9wdGlvbnMuc3R5bGVbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBUaGUgRE9NIE5vZGUgb2JqZWN0IHRvIHJlbmRlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnMsIEBzZWUge0BsaW5rIHRvU3ZnfVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBVaW50OEFycmF5IGNvbnRhaW5pbmcgUkdCQSBwaXhlbCBkYXRhLlxuICAgICAqICovXG4gICAgZnVuY3Rpb24gdG9QaXhlbERhdGEobm9kZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZHJhdyhub2RlLCBvcHRpb25zIHx8IHt9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5nZXRJbWFnZURhdGEoXG4gICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgIHV0aWwud2lkdGgobm9kZSksXG4gICAgICAgICAgICAgICAgICAgIHV0aWwuaGVpZ2h0KG5vZGUpXG4gICAgICAgICAgICAgICAgKS5kYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlIC0gVGhlIERPTSBOb2RlIG9iamVjdCB0byByZW5kZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFJlbmRlcmluZyBvcHRpb25zLCBAc2VlIHtAbGluayB0b1N2Z31cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIEEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aXRoIGEgUE5HIGltYWdlIGRhdGEgVVJMXG4gICAgICogKi9cbiAgICBmdW5jdGlvbiB0b1BuZyhub2RlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBkcmF3KG5vZGUsIG9wdGlvbnMgfHwge30pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIFRoZSBET00gTm9kZSBvYmplY3QgdG8gcmVuZGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBSZW5kZXJpbmcgb3B0aW9ucywgQHNlZSB7QGxpbmsgdG9Tdmd9XG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gLSBBIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2l0aCBhIEpQRUcgaW1hZ2UgZGF0YSBVUkxcbiAgICAgKiAqL1xuICAgIGZ1bmN0aW9uIHRvSnBlZyhub2RlLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZHJhdyhub2RlLCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNhbnZhcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJywgb3B0aW9ucy5xdWFsaXR5IHx8IDEuMCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBUaGUgRE9NIE5vZGUgb2JqZWN0IHRvIHJlbmRlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUmVuZGVyaW5nIG9wdGlvbnMsIEBzZWUge0BsaW5rIHRvU3ZnfVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gQSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdpdGggYSBQTkcgaW1hZ2UgYmxvYlxuICAgICAqICovXG4gICAgZnVuY3Rpb24gdG9CbG9iKG5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGRyYXcobm9kZSwgb3B0aW9ucyB8fCB7fSlcbiAgICAgICAgICAgIC50aGVuKHV0aWwuY2FudmFzVG9CbG9iKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmF3KGRvbU5vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRvU3ZnKGRvbU5vZGUsIG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbih1dGlsLm1ha2VJbWFnZSlcbiAgICAgICAgICAgIC50aGVuKHV0aWwuZGVsYXkoMTAwKSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IG5ld0NhbnZhcyhkb21Ob2RlKTtcbiAgICAgICAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBuZXdDYW52YXMoZG9tTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gc2VsZi5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgdXRpbC53aWR0aChkb21Ob2RlKTtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCB1dGlsLmhlaWdodChkb21Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYmdjb2xvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBvcHRpb25zLmJnY29sb3I7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjYW52YXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9uZU5vZGUobm9kZSwgZmlsdGVyLCByb290KSB7XG4gICAgICAgIGlmICghcm9vdCAmJiBmaWx0ZXIgJiYgIWZpbHRlcihub2RlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9kZSlcbiAgICAgICAgICAgIC50aGVuKG1ha2VOb2RlQ29weSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZUNoaWxkcmVuKG5vZGUsIGNsb25lLCBmaWx0ZXIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzQ2xvbmUobm9kZSwgY2xvbmUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gbWFrZU5vZGVDb3B5KG5vZGUpIHtcbiAgICAgICAgICAgIGlmICh1dGlsLmlzQ2FudmFzKG5vZGUpKSByZXR1cm4gdXRpbC5tYWtlSW1hZ2Uobm9kZS50b0RhdGFVUkwoKSk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xvbmVDaGlsZHJlbihvcmlnaW5hbCwgY2xvbmUsIGZpbHRlcikge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBvcmlnaW5hbC5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjbG9uZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZUNoaWxkcmVuSW5PcmRlcihjbG9uZSwgdXRpbC5hc0FycmF5KGNoaWxkcmVuKSwgZmlsdGVyKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjbG9uZUNoaWxkcmVuSW5PcmRlcihwYXJlbnQsIGNoaWxkcmVuLCBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZG9uZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUgPSBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lTm9kZShjaGlsZCwgZmlsdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY2hpbGRDbG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZENsb25lKSBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGRDbG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NDbG9uZShvcmlnaW5hbCwgY2xvbmUpIHtcbiAgICAgICAgICAgIGlmICghdXRpbC5pc0VsZW1lbnQoY2xvbmUpKSByZXR1cm4gY2xvbmU7XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKGNsb25lU3R5bGUpXG4gICAgICAgICAgICAgICAgLnRoZW4oY2xvbmVQc2V1ZG9FbGVtZW50cylcbiAgICAgICAgICAgICAgICAudGhlbihjb3B5VXNlcklucHV0KVxuICAgICAgICAgICAgICAgIC50aGVuKGZpeFN2ZylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2xvbmVTdHlsZSgpIHtcbiAgICAgICAgICAgICAgICBjb3B5U3R5bGUoc2VsZi53aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShvcmlnaW5hbCksIGNsb25lLnN0eWxlKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvcHlTdHlsZShzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlLmNzc1RleHQpIHRhcmdldC5jc3NUZXh0ID0gc291cmNlLmNzc1RleHQ7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29weVByb3BlcnRpZXMoc291cmNlLCB0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvcHlQcm9wZXJ0aWVzKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmFzQXJyYXkoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNldFByb3BlcnR5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLmdldFByb3BlcnR5UHJpb3JpdHkobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsb25lUHNldWRvRWxlbWVudHMoKSB7XG4gICAgICAgICAgICAgICAgWyc6YmVmb3JlJywgJzphZnRlciddLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVQc2V1ZG9FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xvbmVQc2V1ZG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBzZWxmLndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9yaWdpbmFsLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudCA9PT0gJycgfHwgY29udGVudCA9PT0gJ25vbmUnKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdXRpbC51aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmUuY2xhc3NOYW1lID0gY2xvbmUuY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSBzZWxmLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChmb3JtYXRQc2V1ZG9FbGVtZW50U3R5bGUoY2xhc3NOYW1lLCBlbGVtZW50LCBzdHlsZSkpO1xuICAgICAgICAgICAgICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdFBzZXVkb0VsZW1lbnRTdHlsZShjbGFzc05hbWUsIGVsZW1lbnQsIHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9ICcuJyArIGNsYXNzTmFtZSArICc6JyArIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjc3NUZXh0ID0gc3R5bGUuY3NzVGV4dCA/IGZvcm1hdENzc1RleHQoc3R5bGUpIDogZm9ybWF0Q3NzUHJvcGVydGllcyhzdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzZWxlY3RvciArICd7JyArIGNzc1RleHQgKyAnfScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBmb3JtYXRDc3NUZXh0KHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGUuY3NzVGV4dCArICcgY29udGVudDogJyArIGNvbnRlbnQgKyAnOyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdENzc1Byb3BlcnRpZXMoc3R5bGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlsLmFzQXJyYXkoc3R5bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZm9ybWF0UHJvcGVydHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCc7ICcpICsgJzsnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZSArICc6ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3R5bGUuZ2V0UHJvcGVydHlQcmlvcml0eShuYW1lKSA/ICcgIWltcG9ydGFudCcgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3B5VXNlcklucHV0KCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlsLmlzVGV4dEFyZWEob3JpZ2luYWwpKSBjbG9uZS5pbm5lckhUTUwgPSBvcmlnaW5hbC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodXRpbC5pc0lucHV0KG9yaWdpbmFsKSkgY2xvbmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgb3JpZ2luYWwudmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBmaXhTdmcoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1dGlsLmlzU1ZHKGNsb25lKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICghdXRpbC5pc1NWR1JlY3QoY2xvbmUpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgWyd3aWR0aCcsICdoZWlnaHQnXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjbG9uZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGNsb25lLnN0eWxlLnNldFByb3BlcnR5KGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1iZWRGb250cyhub2RlKSB7XG4gICAgICAgIHJldHVybiBmb250RmFjZXMucmVzb2x2ZUFsbCgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY3NzVGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlTm9kZSA9IHNlbGYuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlTm9kZSk7XG4gICAgICAgICAgICAgICAgc3R5bGVOb2RlLmFwcGVuZENoaWxkKHNlbGYuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzVGV4dCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5saW5lSW1hZ2VzKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGltYWdlcy5pbmxpbmVBbGwobm9kZSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VTdmdEYXRhVXJpKG5vZGUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgc2VsZi53aW5kb3cuWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKG5vZGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHV0aWwuZXNjYXBlWGh0bWwpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoeGh0bWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWydkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwnLFxuICAgICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIicsIHdpZHRoLCAnXCIgaGVpZ2h0PVwiJywgaGVpZ2h0LCAnXCI+JyxcbiAgICAgICAgICAgICAgICAgICc8Zm9yZWlnbk9iamVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPicsIHhodG1sLCAnPC9mb3JlaWduT2JqZWN0PicsXG4gICAgICAgICAgICAgICAgJzwvc3ZnPiddLmpvaW4oJycpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3VXRpbCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVzY2FwZTogZXNjYXBlLFxuICAgICAgICAgICAgcGFyc2VFeHRlbnNpb246IHBhcnNlRXh0ZW5zaW9uLFxuICAgICAgICAgICAgbWltZVR5cGU6IG1pbWVUeXBlLFxuICAgICAgICAgICAgZGF0YUFzVXJsOiBkYXRhQXNVcmwsXG4gICAgICAgICAgICBpc0RhdGFVcmw6IGlzRGF0YVVybCxcbiAgICAgICAgICAgIGNhbnZhc1RvQmxvYjogY2FudmFzVG9CbG9iLFxuICAgICAgICAgICAgcmVzb2x2ZVVybDogcmVzb2x2ZVVybCxcbiAgICAgICAgICAgIGdldEFuZEVuY29kZTogZ2V0QW5kRW5jb2RlLFxuICAgICAgICAgICAgdWlkOiB1aWQoKSxcbiAgICAgICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgICAgIGFzQXJyYXk6IGFzQXJyYXksXG4gICAgICAgICAgICBlc2NhcGVYaHRtbDogZXNjYXBlWGh0bWwsXG4gICAgICAgICAgICBtYWtlSW1hZ2U6IG1ha2VJbWFnZSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuXG4gICAgICAgICAgICBpc0VsZW1lbnQsXG4gICAgICAgICAgICBpc0NhbnZhcyxcbiAgICAgICAgICAgIGlzVGV4dEFyZWEsXG4gICAgICAgICAgICBpc0lucHV0LFxuICAgICAgICAgICAgaXNTVkcsXG4gICAgICAgICAgICBpc1NWR1JlY3QsXG4gICAgICAgICAgICBpc0ltYWdlXG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gbWltZXMoKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogT25seSBXT0ZGIGFuZCBFT1QgbWltZSB0eXBlcyBmb3IgZm9udHMgYXJlICdyZWFsJ1xuICAgICAgICAgICAgICogc2VlIGh0dHA6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvbWVkaWEtdHlwZXMueGh0bWxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3QgV09GRiA9ICdhcHBsaWNhdGlvbi9mb250LXdvZmYnO1xuICAgICAgICAgICAgY29uc3QgSlBFRyA9ICdpbWFnZS9qcGVnJztcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAnd29mZic6IFdPRkYsXG4gICAgICAgICAgICAgICAgJ3dvZmYyJzogV09GRixcbiAgICAgICAgICAgICAgICAndHRmJzogJ2FwcGxpY2F0aW9uL2ZvbnQtdHJ1ZXR5cGUnLFxuICAgICAgICAgICAgICAgICdlb3QnOiAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICAgICAgICAgICAgICdwbmcnOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgICAgICAnanBnJzogSlBFRyxcbiAgICAgICAgICAgICAgICAnanBlZyc6IEpQRUcsXG4gICAgICAgICAgICAgICAgJ2dpZic6ICdpbWFnZS9naWYnLFxuICAgICAgICAgICAgICAgICd0aWZmJzogJ2ltYWdlL3RpZmYnLFxuICAgICAgICAgICAgICAgICdzdmcnOiAnaW1hZ2Uvc3ZnK3htbCdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZUV4dGVuc2lvbih1cmwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gL1xcLihbXlxcLlxcL10qPykkL2cuZXhlYyh1cmwpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSByZXR1cm4gbWF0Y2hbMV07XG4gICAgICAgICAgICBlbHNlIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1pbWVUeXBlKHVybCkge1xuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gcGFyc2VFeHRlbnNpb24odXJsKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG1pbWVzKClbZXh0ZW5zaW9uXSB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzRGF0YVVybCh1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmwuc2VhcmNoKC9eKGRhdGE6KS8pICE9PSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRvQmxvYihjYW52YXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJpbmFyeVN0cmluZyA9IHNlbGYud2luZG93LmF0b2IoY2FudmFzLnRvRGF0YVVSTCgpLnNwbGl0KCcsJylbMV0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGJpbmFyeVN0cmluZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3QgYmluYXJ5QXJyYXkgPSBuZXcgc2VsZi53aW5kb3cuVWludDhBcnJheShsZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgYmluYXJ5QXJyYXlbaV0gPSBiaW5hcnlTdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IHNlbGYud2luZG93LkJsb2IoW2JpbmFyeUFycmF5XSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2FudmFzVG9CbG9iKGNhbnZhcykge1xuICAgICAgICAgICAgaWYgKGNhbnZhcy50b0Jsb2IpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0b0Jsb2IoY2FudmFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVVcmwodXJsLCBiYXNlVXJsKSB7XG4gICAgICAgICAgICBjb25zdCBkb2MgPSBzZWxmLmRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgpO1xuICAgICAgICAgICAgY29uc3QgYmFzZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdiYXNlJyk7XG4gICAgICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChiYXNlKTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBkb2MuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgICBiYXNlLmhyZWYgPSBiYXNlVXJsO1xuICAgICAgICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGEuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVpZCgpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1JyArIGZvdXJSYW5kb21DaGFycygpICsgaW5kZXgrKztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZvdXJSYW5kb21DaGFycygpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzYyNDg3MjIvMjUxOTM3MyAqL1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCcwMDAwJyArIChzZWxmLndpbmRvdy5NYXRoLnJhbmRvbSgpICogc2VsZi53aW5kb3cuTWF0aC5wb3coMzYsIDQpIDw8IDApLnRvU3RyaW5nKDM2KSkuc2xpY2UoLTQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtYWtlSW1hZ2UodXJpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IHNlbGYud2luZG93LkltYWdlKCk7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGltYWdlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRBbmRFbmNvZGUodXJsKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBzZWxmLmNhY2hlLmdldCh1cmwpO1xuICAgICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAgIGlmKGRhdGEuY29udGVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gZGF0YS5jb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEuY29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGF0YS5wZW5kaW5ncy5wdXNoKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IHNlbGYuY2FjaGUucHV0KHVybCwge3BlbmRpbmdzOiBbXX0pO1xuXG4gICAgICAgICAgICBjb25zdCBUSU1FT1VUID0gMzAwMDA7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgc2VsZi53aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZG9uZTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9udGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC50aW1lb3V0ID0gVElNRU9VVDtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoJ2Nhbm5vdCBmZXRjaCByZXNvdXJjZTogJyArIHVybCArICcsIHN0YXR1czogJyArIHJlcXVlc3Quc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuY29kZXIgPSBuZXcgc2VsZi53aW5kb3cuRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY29udGVudCA9IGVuY29kZXIucmVzdWx0LnNwbGl0KC8sLylbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHJlc29sdmUgb2YgZGF0YS5wZW5kaW5ncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEuY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnBlbmRpbmdzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEuY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGVuY29kZXIucmVhZEFzRGF0YVVSTChyZXF1ZXN0LnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0aW1lb3V0KCkge1xuICAgICAgICAgICAgICAgICAgICBmYWlsKCd0aW1lb3V0IG9mICcgKyBUSU1FT1VUICsgJ21zIG9jY3VyZWQgd2hpbGUgZmV0Y2hpbmcgcmVzb3VyY2U6ICcgKyB1cmwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZhaWwobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkYXRhQXNVcmwoY29udGVudCwgdHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIFsnZGF0YTonLHR5cGUsJztiYXNlNjQsJyxjb250ZW50XS5qb2luKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGVzY2FwZShzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFsuKis/XiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkZWxheShtcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFyZyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhc0FycmF5KGFycmF5TGlrZSkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGFycmF5TGlrZS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSBhcnJheS5wdXNoKGFycmF5TGlrZVtpXSk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBlc2NhcGVYaHRtbChzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKCN8XFxuKS9nLCAoYyk9PiBjPT09JyMnPyAnJTIzJzogJyUwQScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd2lkdGgobm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdEJvcmRlciA9IHB4KG5vZGUsICdib3JkZXItbGVmdC13aWR0aCcpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHRCb3JkZXIgPSBweChub2RlLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJyk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5zY3JvbGxXaWR0aCArIGxlZnRCb3JkZXIgKyByaWdodEJvcmRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhlaWdodChub2RlKSB7XG4gICAgICAgICAgICBjb25zdCB0b3BCb3JkZXIgPSBweChub2RlLCAnYm9yZGVyLXRvcC13aWR0aCcpO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tQm9yZGVyID0gcHgobm9kZSwgJ2JvcmRlci1ib3R0b20td2lkdGgnKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnNjcm9sbEhlaWdodCArIHRvcEJvcmRlciArIGJvdHRvbUJvcmRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHB4KG5vZGUsIHN0eWxlUHJvcGVydHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc2VsZi53aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgncHgnLCAnJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIHNlbGYud2luZG93LkVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc0NhbnZhcyhub2RlKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBzZWxmLndpbmRvdy5IVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzVGV4dEFyZWEobm9kZSkge1xuICAgICAgICAgIHJldHVybiBub2RlIGluc3RhbmNlb2Ygc2VsZi53aW5kb3cuSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzSW5wdXQobm9kZSkge1xuICAgICAgICAgIHJldHVybiBub2RlIGluc3RhbmNlb2Ygc2VsZi53aW5kb3cuSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzU1ZHKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIHNlbGYud2luZG93LlNWR0VsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc1NWR1JlY3Qobm9kZSkge1xuICAgICAgICAgIHJldHVybiBub2RlIGluc3RhbmNlb2Ygc2VsZi53aW5kb3cuU1ZHUmVjdEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc0ltYWdlKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIHNlbGYud2luZG93LkhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdJbmxpbmVyKCkge1xuICAgICAgICBjb25zdCBVUkxfUkVHRVggPSAvdXJsXFwoWydcIl0/KFteJ1wiXSs/KVsnXCJdP1xcKS9nO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmxpbmVBbGw6IGlubGluZUFsbCxcbiAgICAgICAgICAgIHNob3VsZFByb2Nlc3M6IHNob3VsZFByb2Nlc3MsXG4gICAgICAgICAgICBpbXBsOiB7XG4gICAgICAgICAgICAgICAgcmVhZFVybHM6IHJlYWRVcmxzLFxuICAgICAgICAgICAgICAgIGlubGluZTogaW5saW5lXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gc2hvdWxkUHJvY2VzcyhzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuc2VhcmNoKFVSTF9SRUdFWCkgIT09IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVhZFVybHMoc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgICAgIHdoaWxlICgobWF0Y2ggPSBVUkxfUkVHRVguZXhlYyhzdHJpbmcpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1hdGNoWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXV0aWwuaXNEYXRhVXJsKHVybCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlubGluZShzdHJpbmcsIHVybCwgYmFzZVVybCwgZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVybClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYXNlVXJsID8gdXRpbC5yZXNvbHZlVXJsKHVybCwgYmFzZVVybCkgOiB1cmw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihnZXQgfHwgdXRpbC5nZXRBbmRFbmNvZGUpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHV0aWwuZGF0YUFzVXJsKGRhdGEsIHV0aWwubWltZVR5cGUodXJsKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YVVybCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UodXJsQXNSZWdleCh1cmwpLCBbJyQxJywgZGF0YVVybCwgJyQzJ10uam9pbignJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cmxBc1JlZ2V4KHVybCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgc2VsZi53aW5kb3cuUmVnRXhwKFsnKHVybFxcXFwoW1xcJ1wiXT8pKCcsIHV0aWwuZXNjYXBlKHVybCksICcpKFtcXCdcIl0/XFxcXCkpJ10uam9pbignJyksICdnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbmxpbmVBbGwoc3RyaW5nLCBiYXNlVXJsLCBnZXQpIHtcbiAgICAgICAgICAgIGlmIChub3RoaW5nVG9JbmxpbmUoKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdHJpbmcpO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0cmluZylcbiAgICAgICAgICAgICAgICAudGhlbihyZWFkVXJscylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodXJscykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZG9uZSA9IFByb21pc2UucmVzb2x2ZShzdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICB1cmxzLmZvckVhY2goZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSA9IGRvbmUudGhlbihmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlubGluZShzdHJpbmcsIHVybCwgYmFzZVVybCwgZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvbmU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG5vdGhpbmdUb0lubGluZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXNob3VsZFByb2Nlc3Moc3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0ZvbnRGYWNlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc29sdmVBbGw6IHJlc29sdmVBbGwsXG4gICAgICAgICAgICBpbXBsOiB7XG4gICAgICAgICAgICAgICAgcmVhZEFsbDogcmVhZEFsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVBbGwoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZEFsbChzZWxmLmRvY3VtZW50KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh3ZWJGb250cykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJGb250cy5tYXAoZnVuY3Rpb24gKHdlYkZvbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2ViRm9udC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGNzc1N0cmluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzc1N0cmluZ3Muam9pbignXFxuJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZWFkQWxsKCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1dGlsLmFzQXJyYXkoc2VsZi5kb2N1bWVudC5zdHlsZVNoZWV0cykpXG4gICAgICAgICAgICAgICAgLnRoZW4oZ2V0Q3NzUnVsZXMpXG4gICAgICAgICAgICAgICAgLnRoZW4oc2VsZWN0V2ViRm9udFJ1bGVzKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChydWxlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVsZXMubWFwKG5ld1dlYkZvbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBzZWxlY3RXZWJGb250UnVsZXMoY3NzUnVsZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3NzUnVsZXNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGUudHlwZSA9PT0gQ1NTUnVsZS5GT05UX0ZBQ0VfUlVMRTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlubGluZXIuc2hvdWxkUHJvY2VzcyhydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3NyYycpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENzc1J1bGVzKHN0eWxlU2hlZXRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3NzUnVsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cy5mb3JFYWNoKGZ1bmN0aW9uIChzaGVldCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5hc0FycmF5KHNoZWV0LmNzc1J1bGVzIHx8IFtdKS5mb3JFYWNoKGNzc1J1bGVzLnB1c2guYmluZChjc3NSdWxlcykpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igd2hpbGUgcmVhZGluZyBDU1MgcnVsZXMgZnJvbSAnICsgc2hlZXQuaHJlZiwgZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjc3NSdWxlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbmV3V2ViRm9udCh3ZWJGb250UnVsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlVXJsID0gKHdlYkZvbnRSdWxlLnBhcmVudFN0eWxlU2hlZXQgfHwge30pLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5saW5lci5pbmxpbmVBbGwod2ViRm9udFJ1bGUuY3NzVGV4dCwgYmFzZVVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNyYzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdlYkZvbnRSdWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3NyYycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0ltYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlubGluZUFsbDogaW5saW5lQWxsLFxuICAgICAgICAgICAgaW1wbDoge1xuICAgICAgICAgICAgICAgIG5ld0ltYWdlOiBuZXdJbWFnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIG5ld0ltYWdlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaW5saW5lOiBpbmxpbmVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlubGluZShnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbC5pc0RhdGFVcmwoZWxlbWVudC5zcmMpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsZW1lbnQuc3JjKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihnZXQgfHwgdXRpbC5nZXRBbmRFbmNvZGUpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXRpbC5kYXRhQXNVcmwoZGF0YSwgdXRpbC5taW1lVHlwZShlbGVtZW50LnNyYykpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YVVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gZGF0YVVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlubGluZUFsbChub2RlKSB7XG4gICAgICAgICAgICBpZiAoIXV0aWwuaXNFbGVtZW50KG5vZGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5vZGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5saW5lQmFja2dyb3VuZChub2RlKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWwuaXNJbWFnZShub2RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdJbWFnZShub2RlKS5pbmxpbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuYXNBcnJheShub2RlLmNoaWxkTm9kZXMpLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlubGluZUFsbChjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlubGluZUJhY2tncm91bmQobm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQnKTtcblxuICAgICAgICAgICAgICAgIGlmICghYmFja2dyb3VuZCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBpbmxpbmVyLmlubGluZUFsbChiYWNrZ3JvdW5kKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaW5saW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmdldFByb3BlcnR5UHJpb3JpdHkoJ2JhY2tncm91bmQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL0RvbTJJbWFnZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvRG9tMkltYWdlLmpzIiwiaW1wb3J0IHskfSBmcm9tICcuLi9saWJzJztcclxucmVxdWlyZSgnaW1wb3J0cy1sb2FkZXI/ZGVmaW5lPT5mYWxzZSFqcXVlcnktbW91c2V3aGVlbCcpKCQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRzVG9BY3Rpb25zIHtcclxuXHJcbiAgc3RhdGljIG1vZEtleXMgPSB7XHJcbiAgICBDdHJsOiAxLFxyXG4gICAgU2hpZnQ6IDIsXHJcbiAgICBBbHQ6IDRcclxuICB9O1xyXG5cclxuICBzdGF0aWMgbW91c2VCdXR0b25zID0ge1xyXG4gICAgTGVmdDogMCxcclxuICAgIE1pZGRsZTogMSxcclxuICAgIFJpZ2h0OiAyXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGdldEV2ZW50RmxhZ3MoZSkge1xyXG4gICAgcmV0dXJuIGUuY3RybEtleTw8MCB8IGUuc2hpZnRLZXk8PDEgfCBlLmFsdEtleTw8MjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRQb3NpdGlvbih0b3VjaGVzKSB7XHJcbiAgICBsZXQgeCwgeTtcclxuICAgIGlmKHRvdWNoZXMubGVuZ3RoPT09Mikge1xyXG4gICAgICB4ID0gdG91Y2hlc1sxXS5wYWdlWC10b3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgICB5ID0gdG91Y2hlc1sxXS5wYWdlWS10b3VjaGVzWzBdLnBhZ2VZO1xyXG4gICAgICB5ID0gLU1hdGguc3FydCh4KngreSp5KTtcclxuICAgICAgeCA9IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgeCA9IHRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgIHkgPSB0b3VjaGVzWzBdLnBhZ2VZO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeCxcclxuICAgICAgeVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGFjdGlvbnMpIHtcclxuICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnMgfHwge307XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5kb2MgPSBlbGVtZW50WzBdLm93bmVyRG9jdW1lbnQ7XHJcbiAgICB0aGlzLnduZCA9IHRoaXMuZG9jLmRlZmF1bHRWaWV3O1xyXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmJpbmRzID0ge1xyXG4gICAgICBjb250ZXh0TWVudTogdGhpcy5jb250ZXh0TWVudS5iaW5kKHRoaXMpLFxyXG5cclxuICAgICAgbW91c2VEb3duOiB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpLFxyXG4gICAgICBtb3VzZU1vdmU6IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyksXHJcbiAgICAgIG1vdXNlVXA6IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpLFxyXG4gICAgICBtb3VzZVdoZWVsOiB0aGlzLm1vdXNlV2hlZWwuYmluZCh0aGlzKSxcclxuXHJcbiAgICAgIG1vdXNlTW92ZURvYzogdGhpcy5tb3VzZU1vdmVEb2MuYmluZCh0aGlzKSxcclxuICAgICAgbW91c2VVcERvYzogdGhpcy5tb3VzZVVwRG9jLmJpbmQodGhpcyksXHJcblxyXG4gICAgICBjbGljazogdGhpcy5jbGljay5iaW5kKHRoaXMpLFxyXG4gICAgICBkYmxjbGljazogdGhpcy5kYmxjbGljay5iaW5kKHRoaXMpLFxyXG5cclxuICAgICAgdG91Y2hTdGFydDogdGhpcy50b3VjaFN0YXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIHRvdWNoTW92ZTogdGhpcy50b3VjaE1vdmUuYmluZCh0aGlzKSxcclxuICAgICAgdG91Y2hFbmQ6IHRoaXMudG91Y2hFbmQuYmluZCh0aGlzKSxcclxuXHJcbiAgICAgIGtleURvd246IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpLFxyXG4gICAgICBrZXlQcmVzczogdGhpcy5rZXlQcmVzcy5iaW5kKHRoaXMpLFxyXG4gICAgICBrZXlVcDogdGhpcy5rZXlVcC5iaW5kKHRoaXMpXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5vbignY29udGV4dG1lbnUnLCB0aGlzLmJpbmRzLmNvbnRleHRNZW51KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub24oJ21vdXNlZG93bicsIHRoaXMuYmluZHMubW91c2VEb3duKTtcclxuICAgIHRoaXMuZWxlbWVudC5vbignbW91c2Vtb3ZlJywgdGhpcy5iaW5kcy5tb3VzZU1vdmUpO1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uKCdtb3VzZXVwJywgdGhpcy5iaW5kcy5tb3VzZVVwKTtcclxuICAgIHRoaXMuZWxlbWVudC5vbignbW91c2V3aGVlbCcsIHRoaXMuYmluZHMubW91c2VXaGVlbCk7XHJcblxyXG4gICAgJCh0aGlzLmRvYykub24oJ21vdXNlbW92ZScsIHRoaXMuYmluZHMubW91c2VNb3ZlRG9jKTtcclxuICAgICQodGhpcy5kb2MpLm9uKCdtb3VzZXVwJywgdGhpcy5iaW5kcy5tb3VzZVVwRG9jKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgdGhpcy5iaW5kcy5jbGljayk7XHJcbiAgICB0aGlzLmVsZW1lbnQub24oJ2RibGNsaWNrJywgdGhpcy5iaW5kcy5kYmxjbGljayk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50Lm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5iaW5kcy50b3VjaFN0YXJ0KTtcclxuICAgIHRoaXMuZWxlbWVudC5vbigndG91Y2htb3ZlJywgdGhpcy5iaW5kcy50b3VjaE1vdmUpO1xyXG4gICAgdGhpcy5lbGVtZW50Lm9uKCd0b3VjaGVuZCcsIHRoaXMuYmluZHMudG91Y2hFbmQpO1xyXG5cclxuICAgICQodGhpcy53bmQpLm9uKCdrZXlkb3duJywgdGhpcy5iaW5kcy5rZXlEb3duKTtcclxuICAgICQodGhpcy53bmQpLm9uKCdrZXlwcmVzcycsIHRoaXMuYmluZHMua2V5UHJlc3MpO1xyXG4gICAgJCh0aGlzLnduZCkub24oJ2tleXVwJywgdGhpcy5iaW5kcy5rZXlVcCk7XHJcbiAgfVxyXG5cclxuICBhZGRBY3Rpb24oYWN0aW9uLCB0eXBlLCBjb2RlLCBmbGFncykge1xyXG4gICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcclxuICAgIGlmKCF0aGlzLmFjdGlvbnNbdHlwZV0pIHtcclxuICAgICAgdGhpcy5hY3Rpb25zW3R5cGVdID0ge307XHJcbiAgICB9XHJcbiAgICBpZighdGhpcy5hY3Rpb25zW3R5cGVdW2NvZGVdKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9uc1t0eXBlXVtjb2RlXSA9IHt9XHJcbiAgICB9XHJcbiAgICBpZighdGhpcy5hY3Rpb25zW3R5cGVdW2NvZGVdW2ZsYWdzXSkge1xyXG4gICAgICB0aGlzLmFjdGlvbnNbdHlwZV1bY29kZV1bZmxhZ3NdID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjdGlvbnNbdHlwZV1bY29kZV1bZmxhZ3NdLnB1c2goYWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGdldEFjdGlvbnModHlwZSwgY29kZSwgZmxhZ3MpIHtcclxuICAgIHJldHVybiAoKHRoaXMuYWN0aW9uc1t0eXBlXSB8fCB7fSlbY29kZV0gfHwge30pW2ZsYWdzXSB8fCBbXTtcclxuICB9XHJcblxyXG4gIGZpcmVBY3Rpb25zKGFjdGlvbnMsIGUsIGRhdGEpIHtcclxuICAgIGZvcihsZXQgYWN0aW9uIG9mIGFjdGlvbnMpIHtcclxuICAgICAgYWN0aW9uKGUsIGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29udGV4dE1lbnUoZSkge1xyXG4gICAgaWYodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgIGNvbnN0IGZsYWdzID0gRXZlbnRzVG9BY3Rpb25zLmdldEV2ZW50RmxhZ3MoZSk7XHJcbiAgICAgIHRoaXMuZmlyZUFjdGlvbnModGhpcy5nZXRBY3Rpb25zKCdjb250ZXh0bWVudScsIGUuYnV0dG9uLCBmbGFncyksIGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW91c2VEb3duKGUpIHtcclxuICAgIGlmKHRoaXMucGlja2VkKSB7XHJcbiAgICAgIHRoaXMubW91c2VVcERvYygpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgIGNvbnN0IGZsYWdzID0gRXZlbnRzVG9BY3Rpb25zLmdldEV2ZW50RmxhZ3MoZSk7XHJcbiAgICAgIHRoaXMuZmlyZUFjdGlvbnModGhpcy5nZXRBY3Rpb25zKCdtb3VzZWRvd24nLCBlLmJ1dHRvbiwgZmxhZ3MpLCBlKTtcclxuICAgICAgdGhpcy5waWNrZWQgPSB7XHJcbiAgICAgICAgeDogZS5wYWdlWCxcclxuICAgICAgICB5OiBlLnBhZ2VZLFxyXG4gICAgICAgIGFjdGlvbnM6IHRoaXMuZ2V0QWN0aW9ucygnbW91c2VkcmFnJywgZS5idXR0b24sIGZsYWdzKVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmZpcmVBY3Rpb25zKHRoaXMucGlja2VkLmFjdGlvbnMsIGUsIHtcclxuICAgICAgICBzdGF0ZTogJ3N0YXJ0J1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdXNlTW92ZShlKSB7XHJcbiAgICBpZih0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgY29uc3QgZmxhZ3MgPSBFdmVudHNUb0FjdGlvbnMuZ2V0RXZlbnRGbGFncyhlKTtcclxuICAgICAgdGhpcy5maXJlQWN0aW9ucyh0aGlzLmdldEFjdGlvbnMoJ21vdXNlbW92ZScsIGUuYnV0dG9uLCBmbGFncyksIGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW91c2VNb3ZlRG9jKGUpIHtcclxuICAgIGlmKHRoaXMuZW5hYmxlZCAmJiB0aGlzLnBpY2tlZCkge1xyXG4gICAgICB0aGlzLmZpcmVBY3Rpb25zKHRoaXMucGlja2VkLmFjdGlvbnMsIGUsIHtcclxuICAgICAgICBzdGF0ZTogJ21vdmUnLFxyXG4gICAgICAgIGR4OiBlLnBhZ2VYLXRoaXMucGlja2VkLngsXHJcbiAgICAgICAgZHk6IGUucGFnZVktdGhpcy5waWNrZWQueVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5waWNrZWQgPSB7XHJcbiAgICAgICAgeDogZS5wYWdlWCxcclxuICAgICAgICB5OiBlLnBhZ2VZLFxyXG4gICAgICAgIGFjdGlvbnM6IHRoaXMucGlja2VkLmFjdGlvbnNcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdXNlVXAoZSkge1xyXG4gICAgaWYodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgIGNvbnN0IGZsYWdzID0gRXZlbnRzVG9BY3Rpb25zLmdldEV2ZW50RmxhZ3MoZSk7XHJcbiAgICAgIHRoaXMuZmlyZUFjdGlvbnModGhpcy5nZXRBY3Rpb25zKCdtb3VzZXVwJywgZS5idXR0b24sIGZsYWdzKSwgZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3VzZVVwRG9jKGUpIHtcclxuICAgIGlmKHRoaXMucGlja2VkKSB7XHJcbiAgICAgIHRoaXMuZmlyZUFjdGlvbnModGhpcy5waWNrZWQuYWN0aW9ucywgZSwge1xyXG4gICAgICAgIHN0YXRlOiAnZW5kJ1xyXG4gICAgICB9KTtcclxuICAgICAgZGVsZXRlIHRoaXMucGlja2VkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW91c2VXaGVlbChlKSB7XHJcbiAgICBpZih0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgY29uc3QgZmxhZ3MgPSBFdmVudHNUb0FjdGlvbnMuZ2V0RXZlbnRGbGFncyhlKTtcclxuICAgICAgdGhpcy5maXJlQWN0aW9ucyh0aGlzLmdldEFjdGlvbnMoJ21vdXNld2hlZWwnLCAwLCBmbGFncyksIGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xpY2tzKGUsIHR5cGUpIHtcclxuICAgIGlmKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICBjb25zdCBmbGFncyA9IEV2ZW50c1RvQWN0aW9ucy5nZXRFdmVudEZsYWdzKGUpO1xyXG4gICAgICB0aGlzLmZpcmVBY3Rpb25zKHRoaXMuZ2V0QWN0aW9ucyh0eXBlLCBlLmJ1dHRvbiwgZmxhZ3MpLCBlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsaWNrKGUpIHtcclxuICAgIHRoaXMuY2xpY2tzKGUsICdjbGljaycpO1xyXG4gIH1cclxuXHJcbiAgZGJsY2xpY2soZSkge1xyXG4gICAgdGhpcy5jbGlja3MoZSwgJ2RibGNsaWNrJyk7XHJcbiAgfVxyXG5cclxuICB0b3VjaFN0YXJ0KGUpIHtcclxuICAgIGlmKHRoaXMucGlja2VkKSB7XHJcbiAgICAgIHRoaXMudG91Y2hFbmQoKTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICBjb25zdCBmbGFncyA9IEV2ZW50c1RvQWN0aW9ucy5nZXRFdmVudEZsYWdzKGUpO1xyXG4gICAgICB0aGlzLmZpcmVBY3Rpb25zKHRoaXMuZ2V0QWN0aW9ucygndG91Y2hzdGFydCcsIGUudG91Y2hlcy5sZW5ndGgsIGZsYWdzKSwgZSk7XHJcbiAgICAgIHRoaXMucGlja2VkID0ge1xyXG4gICAgICAgIC4uLkV2ZW50c1RvQWN0aW9ucy5nZXRQb3NpdGlvbihlLnRvdWNoZXMpLFxyXG4gICAgICAgIGFjdGlvbnM6IHRoaXMuZ2V0QWN0aW9ucygndG91Y2hkcmFnJywgZS50b3VjaGVzLmxlbmd0aCwgZmxhZ3MpXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuZmlyZUFjdGlvbnModGhpcy5waWNrZWQuYWN0aW9ucywgZSwge1xyXG4gICAgICAgIHN0YXRlOiAnc3RhcnQnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG91Y2hNb3ZlKGUpIHtcclxuICAgIGlmKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICBjb25zdCBmbGFncyA9IEV2ZW50c1RvQWN0aW9ucy5nZXRFdmVudEZsYWdzKGUpO1xyXG4gICAgICB0aGlzLmZpcmVBY3Rpb25zKHRoaXMuZ2V0QWN0aW9ucygndG91Y2htb3ZlJywgZS50b3VjaGVzLmxlbmd0aCwgZmxhZ3MpLCBlKTtcclxuICAgICAgaWYodGhpcy5waWNrZWQpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBFdmVudHNUb0FjdGlvbnMuZ2V0UG9zaXRpb24oZS50b3VjaGVzKTtcclxuICAgICAgICB0aGlzLmZpcmVBY3Rpb25zKHRoaXMucGlja2VkLmFjdGlvbnMsIGUsIHtcclxuICAgICAgICAgIHN0YXRlOiAnbW92ZScsXHJcbiAgICAgICAgICBkeDogcG9zLngtdGhpcy5waWNrZWQueCxcclxuICAgICAgICAgIGR5OiBwb3MueS10aGlzLnBpY2tlZC55XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5waWNrZWQgPSB7XHJcbiAgICAgICAgICAuLi5wb3MsXHJcbiAgICAgICAgICBhY3Rpb25zOiB0aGlzLnBpY2tlZC5hY3Rpb25zXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG91Y2hFbmQoZSkge1xyXG4gICAgaWYodGhpcy5waWNrZWQpIHtcclxuICAgICAgdGhpcy5maXJlQWN0aW9ucyh0aGlzLnBpY2tlZC5hY3Rpb25zLCBlLCB7XHJcbiAgICAgICAgc3RhdGU6ICdlbmQnXHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWxldGUgdGhpcy5waWNrZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBrZXkoZSwgdHlwZSkge1xyXG4gICAgaWYodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgIGNvbnN0IGZsYWdzID0gRXZlbnRzVG9BY3Rpb25zLmdldEV2ZW50RmxhZ3MoZSk7XHJcbiAgICAgIHRoaXMuZmlyZUFjdGlvbnModGhpcy5nZXRBY3Rpb25zKHR5cGUsIGUua2V5Q29kZSwgZmxhZ3MpLCBlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGtleURvd24oZSkge1xyXG4gICAgdGhpcy5rZXkoZSwgJ2tleWRvd24nKTtcclxuICB9XHJcblxyXG4gIGtleVByZXNzKGUpIHtcclxuICAgIHRoaXMua2V5KGUsICdrZXlwcmVzcycpO1xyXG4gIH1cclxuXHJcbiAga2V5VXAoZSkge1xyXG4gICAgdGhpcy5rZXkoZSwgJ2tleXVwJyk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgdGhpcy5lbGVtZW50Lm9mZignY29udGV4dG1lbnUnLCB0aGlzLmJpbmRzLmNvbnRleHRNZW51KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub2ZmKCdtb3VzZWRvd24nLCB0aGlzLmJpbmRzLm1vdXNlRG93bik7XHJcbiAgICB0aGlzLmVsZW1lbnQub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLmJpbmRzLm1vdXNlTW92ZSk7XHJcbiAgICB0aGlzLmVsZW1lbnQub2ZmKCdtb3VzZXVwJywgdGhpcy5iaW5kcy5tb3VzZVVwKTtcclxuICAgIHRoaXMuZWxlbWVudC5vZmYoJ21vdXNld2hlZWwnLCB0aGlzLmJpbmRzLm1vdXNlV2hlZWwpO1xyXG5cclxuICAgICQodGhpcy5kb2MpLm9mZignbW91c2Vtb3ZlJywgdGhpcy5iaW5kcy5tb3VzZU1vdmVEb2MpO1xyXG4gICAgJCh0aGlzLmRvYykub2ZmKCdtb3VzZXVwJywgdGhpcy5iaW5kcy5tb3VzZVVwRG9jKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub2ZmKCdjbGljaycsIHRoaXMuYmluZHMuY2xpY2spO1xyXG4gICAgdGhpcy5lbGVtZW50Lm9mZignZGJsY2xpY2snLCB0aGlzLmJpbmRzLmRibGNsaWNrKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQub2ZmKCd0b3VjaHN0YXJ0JywgdGhpcy5iaW5kcy50b3VjaFN0YXJ0KTtcclxuICAgIHRoaXMuZWxlbWVudC5vZmYoJ3RvdWNobW92ZScsIHRoaXMuYmluZHMudG91Y2hNb3ZlKTtcclxuICAgIHRoaXMuZWxlbWVudC5vZmYoJ3RvdWNoZW5kJywgdGhpcy5iaW5kcy50b3VjaEVuZCk7XHJcblxyXG4gICAgJCh0aGlzLnduZCkub2ZmKCdrZXlkb3duJywgdGhpcy5iaW5kcy5rZXlEb3duKTtcclxuICAgICQodGhpcy53bmQpLm9mZigna2V5cHJlc3MnLCB0aGlzLmJpbmRzLmtleVByZXNzKTtcclxuICAgICQodGhpcy53bmQpLm9mZigna2V5dXAnLCB0aGlzLmJpbmRzLmtleVVwKTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvRXZlbnRzVG9BY3Rpb25zLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9FdmVudHNUb0FjdGlvbnMuanMiLCJpbXBvcnQgeyQsIGh0bWwyY2FudmFzfSBmcm9tICcuLi9saWJzJztcclxuaW1wb3J0IEltYWdlQmFzZSBmcm9tICcuL0ltYWdlQmFzZSc7XHJcbmltcG9ydCBCYXNlTWF0aFV0aWxzIGZyb20gJy4vQmFzZU1hdGhVdGlscyc7XHJcbmltcG9ydCBEb20ySW1hZ2UgZnJvbSAnLi9Eb20ySW1hZ2UnO1xyXG5pbXBvcnQgRG9jTW91c2VTaW11bGF0b3IgZnJvbSAnLi9Eb2NNb3VzZVNpbXVsYXRvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGl2ZUltYWdlIGV4dGVuZHMgSW1hZ2VCYXNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dCwgd2lkdGgsIGhlaWdodCwgY29sb3IsIHNyYywgY2FjaGUsIGluamVjdG9yKSB7XHJcbiAgICBzdXBlcihjb250ZXh0LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcik7XHJcblxyXG4gICAgdGhpcy5pSWQgPSAnaScrQmFzZU1hdGhVdGlscy5nZXRVbmlxdWUoKTtcclxuICAgIGNvbnN0IGpGcmFtZSA9ICQoJzxpZnJhbWUgaWQ9XCInK3RoaXMuaUlkKydcIiBzcmM9XCInICsgc3JjICsgJ1wiIHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyBsZWZ0OiAtMTAwMHB4O1wiPjwvaWZyYW1lPicpO1xyXG4gICAgJCh0aGlzLmRvYy5ib2R5KS5hcHBlbmQoakZyYW1lKTtcclxuICAgIHRoaXMuZnJhbWUgPSBqRnJhbWVbMF07XHJcblxyXG4gICAgdGhpcy5iaW5kcyA9IHt9O1xyXG5cclxuICAgIGlmKGluamVjdG9yKSB7XHJcbiAgICAgIGluamVjdG9yKHRoaXMuZnJhbWUuY29udGVudFdpbmRvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5kb2MuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZSgnd3d3Lmh0dHA6Ly93My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5JywgJzEuMScpKSB7IC8vIHN2ZyBmb3JlaWduT2JqZWN0IHJlbmRlcmVyXHJcbiAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgdGhpcy5iaW5kcy5pbWFnZUxvYWQgPSAoKT0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlckltYWdlKHRoaXMuaW1hZ2UpO1xyXG4gICAgICAgIHRoaXMuZmluaXNoUmVuZGVyKCk7XHJcbiAgICAgIH07XHJcbiAgICAgICQodGhpcy5pbWFnZSkub24oJ2xvYWQnLCB0aGlzLmJpbmRzLmltYWdlTG9hZCk7XHJcbiAgICAgIHRoaXMuc3ZnUmVuZGVyID0gbmV3IERvbTJJbWFnZSh0aGlzLmZyYW1lLmNvbnRlbnRXaW5kb3csIHRoaXMuZnJhbWUuY29udGVudERvY3VtZW50LCBjYWNoZSk7XHJcbiAgICB9IC8vIG90aGVyd2lzZSAtIGh0bWwyY2FudmFzXHJcblxyXG4gICAgdGhpcy5iaW5kcy5mcmFtZUxvYWQgPSAoKT0+IHtcclxuICAgICAgaWYofnRoaXMuZnJhbWUuY29udGVudERvY3VtZW50LnRpdGxlLmluZGV4T2YoJzQwNCcpKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFJlbmRlciA9ICgpPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJOb3RGb3VuZFBhZ2UoKTtcclxuICAgICAgICAgIHRoaXMuZmluaXNoUmVuZGVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZpbmlzaExvYWQoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgaWYodGhpcy5mcmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gJCh0aGlzLmZyYW1lLmNvbnRlbnREb2N1bWVudC5ib2R5KS53aWR0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9ICQodGhpcy5mcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keSkuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGpGcmFtZS5jc3MoJ3dpZHRoJywgdGhpcy53aWR0aCsncHgnKS5jc3MoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KydweCcpO1xyXG4gICAgICAgICAgICBqRnJhbWUub2Zmc2V0KHtsZWZ0OiAtdGhpcy53aWR0aC0xMDAsIHRvcDogMH0pO1xyXG4gICAgICAgICAgICBpZih0aGlzLnN2Z1JlbmRlcikge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2ltdWxhdG9yID0gbmV3IERvY01vdXNlU2ltdWxhdG9yKGpGcmFtZSwgdGhpcy5mcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keSwgdGhpcy5lbGVtZW50KTtcclxuICAgICAgICAgICAgICB0aGlzLnNpbXVsYXRvci5hZGREb2NDaGFuZ2VDbGIodGhpcy5maW5pc2hMb2FkLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRSZW5kZXIgPSAoKT0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaExvYWQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgJCh0aGlzLmZyYW1lLmNvbnRlbnRXaW5kb3cpLm9uKCdsb2FkJywgdGhpcy5iaW5kcy5mcmFtZUxvYWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2ltdWxhdGVkRG9jKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZnJhbWUuY29udGVudERvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYodGhpcy5zdmdSZW5kZXIpIHtcclxuICAgICAgdGhpcy5zdmdSZW5kZXIudG9TdmcodGhpcy5zaW11bGF0b3IuZWxlbWVudCwge2hlaWdodDogdGhpcy5oZWlnaHQrJ3B4Jywgd2lkdGg6IHRoaXMud2lkdGgrJ3B4J30pXHJcbiAgICAgICAgLnRoZW4oKGRhdGFVcmwpPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBkYXRhVXJsO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcik9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdEb20ySW1hZ2U6ICcsIGVycm9yKTtcclxuICAgICAgICAgIHRoaXMucmVuZGVyQmxhbmtQYWdlKCk7XHJcbiAgICAgICAgICB0aGlzLmZpbmlzaFJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGh0bWwyY2FudmFzKHRoaXMuZnJhbWUuY29udGVudERvY3VtZW50LmJvZHksIHt0aW1lb3V0OiAzMDAwMH0pLlxyXG4gICAgICAgIHRoZW4oKGNhbnZhcyk9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlckltYWdlKGNhbnZhcyk7XHJcbiAgICAgICAgICB0aGlzLmZpbmlzaFJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgICQodGhpcy5pbWFnZSkub2ZmKCdsb2FkJywgdGhpcy5iaW5kcy5pbWFnZUxvYWQpO1xyXG4gICAgJCh0aGlzLmZyYW1lLmNvbnRlbnRXaW5kb3cpLm9mZignbG9hZCcsIHRoaXMuYmluZHMuZnJhbWVMb2FkKTtcclxuICAgICQodGhpcy5kb2MuYm9keSkuZmluZCgnIycrdGhpcy5pSWQpLnJlbW92ZSgpO1xyXG4gICAgaWYodGhpcy5pbWFnZSkge1xyXG4gICAgICB0aGlzLmltYWdlLnNyYyA9ICcnO1xyXG4gICAgICBkZWxldGUgdGhpcy5pbWFnZTtcclxuICAgIH1cclxuICAgIHRoaXMuZnJhbWUuc3JjID0gJyc7XHJcbiAgICBkZWxldGUgdGhpcy5mcmFtZTtcclxuICAgIHN1cGVyLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIHNpbXVsYXRlKGUsIGRvYywgeCwgeSkge1xyXG4gICAgaWYodGhpcy5zaW11bGF0b3IpIHtcclxuICAgICAgdGhpcy5zaW11bGF0b3Iuc2ltdWxhdGUoZSwgZG9jLCB4LCB5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvSW50ZXJhY3RpdmVJbWFnZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvSW50ZXJhY3RpdmVJbWFnZS5qcyIsImltcG9ydCB7JH0gZnJvbSAnLi4vbGlicyc7XHJcbmltcG9ydCBHcmFwaFV0aWxzIGZyb20gJy4vR3JhcGhVdGlscyc7XHJcbmltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ0FuaW1hdGlvbiB7XHJcblxyXG4gIGR5KHQseSkge1xyXG4gICAgY29uc3Qgdz15WzBdLCBhPXlbMV07XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAtdGhpcy5nKk1hdGguY29zKGEpLFxyXG4gICAgICB3XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgaW50ZWdyYXRlKFQpIHtcclxuICAgIGxldCB0PTAsIGR0PXRoaXMucC5kdCwgb3MgPSB0aGlzLm9zO1xyXG4gICAgd2hpbGUodDxUKSB7XHJcbiAgICAgIGlmKHQrZHQ+VCkge1xyXG4gICAgICAgIGR0PVQtdDtcclxuICAgICAgfVxyXG4gICAgICBvcz1NYXRoVXRpbHMucms0KHRoaXMuZHkuYmluZCh7ZzogdGhpcy5wLmd9KSwgMCwgZHQsIG9zKTtcclxuICAgICAgdCs9ZHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3M7XHJcbiAgfVxyXG5cclxuICBjYWxjVGltZVRvKHRhcmdldCkge1xyXG4gICAgbGV0IHQ9MCwgZHQ9dGhpcy5wLmR0LCBvcyA9IHRoaXMub3M7XHJcbiAgICB3aGlsZShNYXRoLmFicyhvc1sxXS10YXJnZXQpPjFlLTQpIHtcclxuICAgICAgY29uc3Qgbm9zPU1hdGhVdGlscy5yazQodGhpcy5keS5iaW5kKHtnOiB0aGlzLnAuZ30pLCAwLCBkdCwgb3MpO1xyXG4gICAgICBpZihub3NbMF08MCAmJiBub3NbMV08dGFyZ2V0IHx8IG5vc1swXT4wICYmIG5vc1sxXT50YXJnZXQpIHtcclxuICAgICAgICBkdC89MjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBvcyA9IG5vcztcclxuICAgICAgICB0Kz1kdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoVCkge1xyXG4gICAgdGhpcy5vcyA9IHRoaXMuaW50ZWdyYXRlKFQpO1xyXG5cclxuICAgIHRoaXMudCs9VFxyXG4gICAgaWYodGhpcy50Pj10aGlzLnAudXBkYXRlSW50ZXJ2YWwpIHtcclxuICAgICAgdGhpcy50ID0gMDtcclxuICAgICAgY29uc3QgciA9IDAuMSpNYXRoLm1pbih0aGlzLmMud2lkdGgsIHRoaXMuYy5oZWlnaHQpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy5vc1sxXSxcclxuICAgICAgICAgICAgeDAgPSAwLjUqdGhpcy5jLndpZHRoLFxyXG4gICAgICAgICAgICB5MCA9IDAuNSp0aGlzLmMuaGVpZ2h0LFxyXG4gICAgICAgICAgICBjdHggPSB0aGlzLmN0eDtcclxuXHJcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jLndpZHRoLCB0aGlzLmMuaGVpZ2h0KTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gR3JhcGhVdGlscy5jb2xvcjJSZ2JhKHRoaXMucC5jb2xvciwxKTtcclxuICAgICAgY3R4LnJlY3QoMCwgMCwgdGhpcy5jLndpZHRoLCB0aGlzLmMuaGVpZ2h0KTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1MDtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IEdyYXBoVXRpbHMuY29sb3IyUmdiYShHcmFwaFV0aWxzLmludmVyc2VDb2xvcih0aGlzLnAuY29sb3IsMC45KSxNYXRoLmFicyh0aGlzLm9zWzBdLzYuMzYpKTtcclxuICAgICAgY3R4LnNoYWRvd0NvbG9yID0gR3JhcGhVdGlscy5jb2xvcjJSZ2JhKEdyYXBoVXRpbHMuaW52ZXJzZUNvbG9yKHRoaXMucC5jb2xvciwxKSwwLjkpO1xyXG4gICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDA7XHJcbiAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gMDtcclxuICAgICAgY3R4LmZvbnQ9J2JvbGQgJytNYXRoLnJvdW5kKDAuMjUqcikrJ3B4IEFyaWFsJztcclxuICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIkxvYWRpbmcuLi5cIix4MCx5MCk7XHJcblxyXG4gICAgICBjb25zdCBwcyA9IDEwLCBkYT0yKk1hdGguUEkvcHM7Ly8yLjUqX3IvclxyXG4gICAgICBjdHguc2hhZG93Q29sb3IgPSBHcmFwaFV0aWxzLmNvbG9yMlJnYmEoR3JhcGhVdGlscy5pbnZlcnNlQ29sb3IodGhpcy5wLmNvbG9yLDEpLDAuNyk7XHJcbiAgICAgIGZvcihsZXQgaT0wLCBfYT1hLCBfcj0wLjIqcjsgaTxwczsgKytpLCBfcio9MC45LCBfYSs9ZGEpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IEdyYXBoVXRpbHMuY29sb3IyUmdiYShHcmFwaFV0aWxzLmludmVyc2VDb2xvcih0aGlzLnAuY29sb3IsKHBzLWkpL3BzKSwwLjcqKHBzLWkpL3BzKTtcclxuICAgICAgICBjb25zdCBjeD14MCtyKk1hdGguY29zKF9hKSwgY3k9eTAtcipNYXRoLnNpbihfYSksIG54PXgwK3IqTWF0aC5jb3MoX2ErZGEpLCBueT15MC1yKk1hdGguc2luKF9hK2RhKTtcclxuICAgICAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDAuMioobngtY3gpO1xyXG4gICAgICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gMC4yKihueS1jeSk7XHJcbiAgICAgICAgY3R4LmFyYyhjeCwgY3ksIF9yLCAwLCBNYXRoLlBJKjIsIDEpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5jLCB0aGlzLnAuY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJbWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmM7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgdGhpcy5jLndpZHRoID0gMDtcclxuICAgIHRoaXMuYy5oZWlnaHQgPSAwO1xyXG4gICAgZGVsZXRlIHRoaXMuY3R4O1xyXG4gICAgZGVsZXRlIHRoaXMuYztcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNwcml0ZShuKSB7XHJcbiAgICBjb25zdCBjID0gJCgnPGNhbnZhcyB3aWR0aD1cIicrdGhpcy5jLndpZHRoKm4rJ1wiIGhlaWdodD1cIicrdGhpcy5jLmhlaWdodCsnXCI+PC9jYW52YXM+JylbMF0sIGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKSxcclxuICAgIHQgPSB0aGlzLmNhbGNUaW1lVG8odGhpcy5vc1sxXStNYXRoLnNpZ24odGhpcy5vc1swXSkqMipNYXRoLlBJKSwgZHQ9dC8obisxKTtcclxuICAgIGNvbnN0IHt1cGRhdGVJbnRlcnZhbH0gPSB0aGlzLnA7XHJcbiAgICB0aGlzLnAudXBkYXRlSW50ZXJ2YWwgPSAwO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8bjsgKytpKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlKGR0KTtcclxuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmMsIGkqdGhpcy5jLndpZHRoLCAwKTtcclxuICAgIH1cclxuICAgIHRoaXMucC51cGRhdGVJbnRlcnZhbCA9IHVwZGF0ZUludGVydmFsO1xyXG4gICAgcmV0dXJuIGM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgY29uc3QgakMgPSAkKCc8Y2FudmFzIHdpZHRoPVwiJyt3aWR0aCsnXCIgaGVpZ2h0PVwiJytoZWlnaHQrJ1wiPjwvY2FudmFzPicpO1xyXG4gICAgdGhpcy5jID0gakNbMF07XHJcbiAgICB0aGlzLnAgPSB7XHJcbiAgICAgIGc6IDkuOCxcclxuICAgICAgZHQ6IDEvNjAsXHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICB1cGRhdGVJbnRlcnZhbDogMC4yNVxyXG4gICAgfTtcclxuICAgIHRoaXMuY3R4ID0gdGhpcy5jLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLm9zID0gWy0yLCBNYXRoLlBJLzJdO1xyXG4gICAgdGhpcy50ID0gdGhpcy5wLnVwZGF0ZUludGVydmFsO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9Mb2FkaW5nQW5pbWF0aW9uLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Mb2FkaW5nQW5pbWF0aW9uLmpzIiwiaW1wb3J0IHskfSBmcm9tICcuLi9saWJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdDb250cm9sbGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3Iodmlldywgc2hvd1Byb2dyZXNzPXRydWUpIHtcclxuICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcclxuICAgIHRoaXMuc2hvd1Byb2dyZXNzID0gc2hvd1Byb2dyZXNzO1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgdGhpcy5zaG93UHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgZGVsZXRlIHRoaXMudmlldztcclxuICB9XHJcblxyXG4gIHNldFByb2dyZXNzKHYpIHtcclxuICAgIHRoaXMucHJvZ3Jlc3MgPSB2O1xyXG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWaWV3KCkge1xyXG4gICAgaWYodGhpcy52aWV3KSB7XHJcblxyXG4gICAgICB0aGlzLnZpZXcuc2V0U3RhdGUoJ3dpZExvYWRpbmdQcm9ncmVzcycsIHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdGhpcy5zaG93UHJvZ3Jlc3MsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMudmlldy5zZXRTdGF0ZSgndHh0TG9hZGluZ1Byb2dyZXNzJywge1xyXG4gICAgICAgIHZhbHVlOiB0aGlzLnByb2dyZXNzPT09MD8gJ1BsZWFzZSB3YWl0Li4uIHRoZSBBcHBsaWNhdGlvbiBpcyBMb2FkaW5nJzogJ1BERiBpcyBMb2FkaW5nOiAnK3RoaXMucHJvZ3Jlc3MrJyUnLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IobGV0IG5hbWUgb2YgdGhpcy52aWV3LmdldExpbmtzKCkpIHtcclxuICAgICAgICB0aGlzLnZpZXcuc2V0U3RhdGUobmFtZSwge1xyXG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcclxuICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudmlldy5zZXRTdGF0ZSgnaW5wUGFnZXMnLCB7XHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogJydcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnZpZXcuc2V0U3RhdGUoJ2lucFBhZ2UnLCB7XHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBlbmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL0xvYWRpbmdDb250cm9sbGVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Mb2FkaW5nQ29udHJvbGxlci5qcyIsImltcG9ydCB7VEhSRUV9IGZyb20gJy4uL2xpYnMnO1xyXG5pbXBvcnQgTWF0aFV0aWxzIGZyb20gJy4vTWF0aFV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdDNEV2F0Y2hlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHZpc3VhbCwgYm91bmRCb3hDbGIsIHRlc3RTY2FsZT10aGlzLnRlc3RTY2FsZSkge1xyXG4gICAgdGhpcy52aXN1YWwgPSB2aXN1YWw7XHJcbiAgICB0aGlzLmJvdW5kQm94Q2xiID0gYm91bmRCb3hDbGI7XHJcbiAgICB0aGlzLnRlc3RTY2FsZSA9IHRlc3RTY2FsZTtcclxuICAgIHRoaXMuY2FtZXJhID0gdmlzdWFsLmNhbWVyYTtcclxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMudmlzdWFsLmVsZW1lbnQ7XHJcbiAgICB0aGlzLmVsZW1lbnRTaXplID0ge3c6IDEsIGg6IDF9O1xyXG4gICAgdGhpcy5kZXZpY2VQaXhlbFJhdGlvID0gdGhpcy52aXN1YWwud25kLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcclxuICAgIHRoaXMub3JiaXQgPSB2aXN1YWwuZ2V0T3JiaXQoKTtcclxuICAgIHRoaXMuc2NhbGUgPSAxO1xyXG5cclxuICAgIHRoaXMuZXBzID0gMWUtNDtcclxuICAgIHRoaXMudiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbiAgICB0aGlzLmR2ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHJcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB2aXN1YWwuYWRkUmVuZGVyQ2FsbGJhY2sodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5vcyA9IHtcclxuICAgICAgdng6IDAsXHJcbiAgICAgIHZ5OiAwLFxyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwXHJcbiAgICB9O1xyXG4gICAgdGhpcy5vcmJpdC51cGRhdGUoKTtcclxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XHJcbiAgICBsZXQgYm94ID0gdGhpcy5jb21wdXRlQ2xpZW50Qm91bmRCb3goKSwgaz0xLjExO1xyXG4gICAgdGhpcy5tb3ZlUGFuKHt4OiAtaypib3gubWlkLngsIHk6IC1rKmJveC5taWQueX0pO1xyXG4gIH1cclxuXHJcbiAgbW92ZVBhbihkdikge1xyXG4gICAgdGhpcy5vcmJpdC5wYW4oZHYueCp0aGlzLmVsZW1lbnQud2lkdGgsIC1kdi55KnRoaXMuZWxlbWVudC5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgdlRvQ2FtZXJhKHYpIHtcclxuICAgIHYucHJvamVjdCh0aGlzLmNhbWVyYSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiAwLjUqdi54LFxyXG4gICAgICB5OiAwLjUqdi55XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcHV0ZUNsaWVudEJvdW5kQm94KCkge1xyXG4gICAgY29uc3QgYm94ID0gdGhpcy5ib3VuZEJveENsYigpLFxyXG4gICAgICB4cyA9IFtib3gubWluLngsIGJveC5tYXgueF0sXHJcbiAgICAgIHlzID0gWzAsIDBdLFxyXG4gICAgICB6cyA9IFtib3gubWluLnosIGJveC5tYXguel07XHJcblxyXG4gICAgY29uc3QgcHMgPSBbXSwgcmVzID0ge21heDoge30sIG1pbjoge319O1xyXG4gICAgZm9yKGxldCB4IG9mIHhzKSB7XHJcbiAgICAgIGZvcihsZXQgeSBvZiB5cykge1xyXG4gICAgICAgIGZvcihsZXQgeiBvZiB6cykge1xyXG4gICAgICAgICAgcHMucHVzaCh0aGlzLnZUb0NhbWVyYSh0aGlzLnYuc2V0KHgseSx6KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBzLnNvcnQoKHAxLCBwMik9PiBwMS54LXAyLngpO1xyXG4gICAgcmVzLm1pbi54ID0gcHNbMF0ueDtcclxuICAgIHJlcy5tYXgueCA9IHBzW3BzLmxlbmd0aC0xXS54O1xyXG4gICAgcHMuc29ydCgocDEsIHAyKT0+IHAxLnktcDIueSk7XHJcbiAgICByZXMubWluLnkgPSBwc1swXS55O1xyXG4gICAgcmVzLm1heC55ID0gcHNbcHMubGVuZ3RoLTFdLnk7XHJcblxyXG4gICAgcmVzLndpZHRoID0gcmVzLm1heC54LXJlcy5taW4ueDtcclxuICAgIHJlcy5oZWlnaHQgPSByZXMubWF4LnktcmVzLm1pbi55O1xyXG5cclxuICAgIHJlcy5taWQgPSB7XHJcbiAgICAgIHg6IDAuNSoocmVzLm1heC54K3Jlcy5taW4ueCksXHJcbiAgICAgIHk6IDAuNSoocmVzLm1heC55K3Jlcy5taW4ueSlcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIHNldE9iamVjdChib3VuZEJveENsYikge1xyXG4gICAgdGhpcy5ib3VuZEJveENsYiA9IGJvdW5kQm94Q2xiO1xyXG4gIH1cclxuXHJcbiAgdGVzdFNjYWxlKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBjb21wdXRlQ29ycihLLCBtaW4sIG1heCkge1xyXG4gICAgbGV0IGNvcnIgPSAwO1xyXG4gICAgaWYoSzwxKSB7XHJcbiAgICAgIGlmKG1pbj4tMC41KSB7XHJcbiAgICAgICAgY29yciA9IC0wLjUtbWluO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYobWF4PDAuNSkge1xyXG4gICAgICAgIGNvcnIgPSAwLjUtbWF4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYobWluPC0wLjUpIHtcclxuICAgICAgICBjb3JyID0gLTAuNS1taW47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihtYXg+MC41KSB7XHJcbiAgICAgICAgY29yciA9IDAuNS1tYXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb3JyO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2NhbGUoKSB7XHJcbiAgICBjb25zdCBib3ggPSB0aGlzLmNvbXB1dGVDbGllbnRCb3VuZEJveCgpLFxyXG4gICAgICBLeCA9IHRoaXMuZWxlbWVudFNpemUudy9ib3gud2lkdGgsXHJcbiAgICAgIEt5ID0gdGhpcy5lbGVtZW50U2l6ZS5oL2JveC5oZWlnaHQ7XHJcbiAgICByZXR1cm4gMS9NYXRoLm1pbihLeCwgS3kpO1xyXG4gIH1cclxuXHJcbiAgY2VudGVyVmlldyhUKSB7XHJcbiAgICBsZXQgYm94ID0gdGhpcy5jb21wdXRlQ2xpZW50Qm91bmRCb3goKSxcclxuICAgICAgS3ggPSB0aGlzLmVsZW1lbnRTaXplLncvYm94LndpZHRoLFxyXG4gICAgICBLeSA9IHRoaXMuZWxlbWVudFNpemUuaC9ib3guaGVpZ2h0LFxyXG4gICAgICBLID0gTWF0aC5taW4oS3gsIEt5KTtcclxuXHJcbiAgICBpZih0aGlzLnRlc3RTY2FsZSgpICYmIE1hdGguYWJzKDEvSy10aGlzLnNjYWxlKT50aGlzLmVwcykge1xyXG4gICAgICBjb25zdCBzY2FsZSA9IDEvSyswLjIqKHRoaXMuc2NhbGUtMS9LKTtcclxuICAgICAgdGhpcy5vcmJpdC5zZXRTY2FsZSh0aGlzLm9yYml0LmdldFNjYWxlKCkvKEsqc2NhbGUpKTtcclxuICAgICAgdGhpcy5vcmJpdC51cGRhdGUoKTtcclxuICAgICAgdGhpcy5jYW1lcmEudXBkYXRlTWF0cml4V29ybGQoKTtcclxuICAgICAgYm94ID0gdGhpcy5jb21wdXRlQ2xpZW50Qm91bmRCb3goKTtcclxuICAgICAgICBLeCA9IHRoaXMuZWxlbWVudFNpemUudy9ib3gud2lkdGg7XHJcbiAgICAgICAgS3kgPSB0aGlzLmVsZW1lbnRTaXplLmgvYm94LmhlaWdodDtcclxuICAgICAgICBLID0gTWF0aC5taW4oS3gsIEt5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkdiA9IHRoaXMuZHY7XHJcbiAgICBpZihLPjEtdGhpcy5lcHMpIHtcclxuICAgICAgZHYuc2V0KC1ib3gubWlkLngsIC1ib3gubWlkLnkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGR2LnNldCh0aGlzLmNvbXB1dGVDb3JyKEt4LCBib3gubWluLngsIGJveC5tYXgueCksXHJcbiAgICAgICAgICAgICB0aGlzLmNvbXB1dGVDb3JyKEt5LCBib3gubWluLnksIGJveC5tYXgueSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKE1hdGguc3FydCh0aGlzLm9zLnZ4KnRoaXMub3MudngrdGhpcy5vcy52eSp0aGlzLm9zLnZ5KT4wLjAwMyB8fCBkdi5sZW5ndGgoKT4wLjAwMykge1xyXG4gICAgICBsZXQgZHQgPSAxLzYwLCB0PTAsIG9zID0ge1xyXG4gICAgICAgIC4uLnRoaXMub3MsXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH07XHJcbiAgICAgIG9zLnRmID0gKHZ4LCB2eSwgeCwgeSk9PiAoe1xyXG4gICAgICAgIHg6IDc1Kihkdi54LXgpL01hdGgucG93KHRoaXMuZGV2aWNlUGl4ZWxSYXRpbywgMS41KSxcclxuICAgICAgICB5OiA3NSooZHYueS15KS9NYXRoLnBvdyh0aGlzLmRldmljZVBpeGVsUmF0aW8sIDEuNSlcclxuICAgICAgfSk7XHJcbiAgICAgIHdoaWxlKHQ8VCkge1xyXG4gICAgICAgIGlmKHQrZHQ+VCkge1xyXG4gICAgICAgICAgZHQgPSBULXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9zID0gdGhpcy5pbnRlZ3JhdGUob3MsIGR0KTtcclxuICAgICAgICB0ICs9IGR0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubW92ZVBhbihvcyk7XHJcbiAgICAgIHRoaXMub3MgPSBvcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGludGVncmF0ZShvcywgZHQpIHtcclxuICAgIGNvbnN0IFt2eCwgdnksIHgsIHldID0gTWF0aFV0aWxzLnJrNChcclxuICAgICAgdGhpcy5keS5iaW5kKG9zKSxcclxuICAgICAgMCxcclxuICAgICAgZHQsXHJcbiAgICAgIFtvcy52eCwgb3MudnksIG9zLngsIG9zLnldXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ub3MsXHJcbiAgICAgIHZ4LCB2eSwgeCwgeVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGR5KHQsWSkge1xyXG4gICAgY29uc3QgW3Z4LCB2eSwgeCwgeV0gPSBZLCB2ZCA9IDE1LCB0ZiA9IHRoaXMudGYodngsIHZ5LCB4LCB5KTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHRmLngtdmQqdngsXHJcbiAgICAgIHRmLnktdmQqdnksXHJcbiAgICAgIHZ4LFxyXG4gICAgICB2eVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgaWYodGhpcy5lbmFibGVkICYmIHRoaXMuYm91bmRCb3hDbGIpIHtcclxuICAgICAgdGhpcy5jZW50ZXJWaWV3KGR0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvT2JqZWN0M0RXYXRjaGVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9PYmplY3QzRFdhdGNoZXIuanMiLCJpbXBvcnQgeyQsIFRIUkVFfSBmcm9tICcuLi9saWJzJ1xyXG5pbXBvcnQgQ2FjaGUgZnJvbSAnLi9DYWNoZSc7XHJcbmltcG9ydCBMb2FkaW5nQW5pbWF0aW9uIGZyb20gJy4vTG9hZGluZ0FuaW1hdGlvbic7XHJcbmltcG9ydCBJbWFnZUZhY3RvcnkgZnJvbSAnLi9JbWFnZUZhY3RvcnknO1xyXG5pbXBvcnQgQmFzZU1hdGhVdGlscyBmcm9tICcuL0Jhc2VNYXRoVXRpbHMnO1xyXG5pbXBvcnQgVGV4dHVyZUFuaW1hdG9yIGZyb20gJy4vVGV4dHVyZUFuaW1hdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VNYW5hZ2VyIHtcclxuXHJcbiAgY29uc3RydWN0b3IodmlzdWFsLCBib29rLCBwKSB7XHJcbiAgICB0aGlzLnZpc3VhbCA9IHZpc3VhbDtcclxuICAgIHRoaXMuYm9vayA9IGJvb2s7XHJcbiAgICB0aGlzLnAgPSBwO1xyXG4gICAgdGhpcy5wYWdlQ2FjaGUgPSBuZXcgQ2FjaGUocC5jYWNoZWRQYWdlcyk7XHJcbiAgICB0aGlzLnJlc291cmNlc0NhY2hlID0gbmV3IENhY2hlKCk7XHJcbiAgICB0aGlzLmNhbnZhcyA9ICQoJzxjYW52YXM+JylbMF07XHJcbiAgICB0aGlzLmltYWdlRmFjdG9yeSA9IG5ldyBJbWFnZUZhY3Rvcnkoey4uLnZpc3VhbCwgZGlzcGF0Y2hFdmVudDogYm9vay5kaXNwYXRjaEV2ZW50LmJpbmQoYm9vayksIHJlbmRlckNhbnZhczogdGhpcy5jYW52YXMsIHJlbmRlckNhbnZhc0N0eDogdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKX0sIHRoaXMucmVzb3VyY2VzQ2FjaGUpO1xyXG5cclxuICAgIHRoaXMubG9hZGluZ3MgPSBbXTtcclxuICAgIHRoaXMucmVuZGVyUXVldWUgPSBbXTtcclxuICAgIHRoaXMucGFnZVJlcXVlc3RzID0gW107XHJcbiAgICB0aGlzLnByZWRpY3RlZFJlcXVlc3RzID0gW107XHJcblxyXG4gICAgdGhpcy50bXBNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgpO1xyXG4gICAgdmlzdWFsLmFkZE9iamVjdChuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgwLCAwKSwgdGhpcy50bXBNYXRlcmlhbCkpO1xyXG5cclxuICAgIHRoaXMubG9hZGluZyA9IHt9O1xyXG4gICAgdGhpcy5sb2FkaW5nW3AuY292ZXIuY29sb3JdID0gdGhpcy5jcmVhdGVMb2FkaW5nVGV4dHVyZShwLmNvdmVyKTtcclxuICAgIGlmKHAucGFnZS5jb2xvciE9PXAuY292ZXIuY29sb3IpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nW3AucGFnZS5jb2xvcl0gPSB0aGlzLmNyZWF0ZUxvYWRpbmdUZXh0dXJlKHAucGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50dXJuT25FdmVudHMoKTtcclxuXHJcbiAgICB2aXN1YWwuYWRkUmVuZGVyQ2FsbGJhY2sodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVSZW5kZXJRdWV1ZS5iaW5kKHRoaXMpLCAyNTApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTG9hZGluZ1RleHR1cmUocCkge1xyXG4gICAgY29uc3Qgc3ByaXRlVGlsZXMgPSA2LFxyXG4gICAgICBhbmltYXRpb24gPSBuZXcgTG9hZGluZ0FuaW1hdGlvbihwLndpZHRoVGV4ZWxzLCBwLmhlaWdodFRleGVscywgcC5jb2xvciksXHJcbiAgICAgIGFuaW1hdG9yID0gbmV3IFRleHR1cmVBbmltYXRvcihhbmltYXRpb24uY3JlYXRlU3ByaXRlKHNwcml0ZVRpbGVzKSwgc3ByaXRlVGlsZXMsIDEsIHNwcml0ZVRpbGVzLCAwLjIpO1xyXG4gICAgYW5pbWF0aW9uLmRpc3Bvc2UoKTtcclxuICAgIHJldHVybiBhbmltYXRvcjtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKSB7XHJcbiAgICB0aGlzLnR1cm5PZmZFdmVudHMoKTtcclxuICAgIGZvcihsZXQgY29sb3Igb2YgT2JqZWN0LmtleXModGhpcy5sb2FkaW5nKSkge1xyXG4gICAgICB0aGlzLmxvYWRpbmdbY29sb3JdLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSB0aGlzLmxvYWRpbmc7XHJcbiAgICB0aGlzLnJlc291cmNlc0NhY2hlLmRpc3Bvc2UoKTtcclxuICAgIHRoaXMucGFnZUNhY2hlLmRpc3Bvc2UoKTtcclxuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLndpZHRoID0gMDtcclxuICAgIGRlbGV0ZSB0aGlzLmNhbnZhcztcclxuICB9XHJcblxyXG4gIGlzQ292ZXIobikge1xyXG4gICAgcmV0dXJuIG48MiB8fCBuPj0yKih0aGlzLnAuc2hlZXRzKzEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGR0KSB7XHJcbiAgICBjb25zdCBsb2FkaW5nID0ge307XHJcbiAgICBmb3IobGV0IG8gb2YgdGhpcy5sb2FkaW5ncykge1xyXG4gICAgICBpZihvLmlzQWN0aXZlKCkpIHtcclxuICAgICAgICBsb2FkaW5nW28uY29sb3JdID0gdHJ1ZTs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcihsZXQgY29sb3Igb2YgT2JqZWN0LmtleXMobG9hZGluZykpIHtcclxuICAgICAgdGhpcy5sb2FkaW5nW2NvbG9yXS51cGRhdGUoZHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRnJvbUxvYWRpbmdzKG8pIHtcclxuICAgIGNvbnN0IGkgPSB0aGlzLmxvYWRpbmdzLmluZGV4T2Yobyk7XHJcbiAgICBpZih+aSkge1xyXG4gICAgICB0aGlzLmxvYWRpbmdzLnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUZyb21SZW5kZXJRdWV1ZShvKSB7XHJcbiAgICBjb25zdCBpID0gdGhpcy5yZW5kZXJRdWV1ZS5pbmRleE9mKG8pO1xyXG4gICAgaWYofmkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJRdWV1ZS5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkKG1hdGVyaWFsLCBuKSB7XHJcbiAgICBjb25zdCBwaSA9IHRoaXMucC5wYWdlQ2FsbGJhY2sobiksIHAgPSB0aGlzLmlzQ292ZXIobik/IHRoaXMucC5jb3ZlcjogdGhpcy5wLnBhZ2U7XHJcbiAgICBjb25zdCBvID0ge1xyXG4gICAgICB0ZXh0dXJlOiBuZXcgVEhSRUUuVGV4dHVyZSgpLFxyXG4gICAgICB3cmFwcGVyOiBudWxsLFxyXG4gICAgICBzdGF0ZTogJ2xvYWRpbmcnLFxyXG4gICAgICBsb2NrZWQ6IChuKT0+IG8uc3RhdGUgPT09ICdsb2FkaW5nJyB8fCBvLnN0YXRlID09PSAncmVuZGVyaW5nJyB8fCB0aGlzLmJvb2suaXNBY3RpdmVQYWdlKG4pLFxyXG4gICAgICBjb2xvcjogcC5jb2xvcixcclxuICAgICAgaXNBY3RpdmU6ICgpPT4gdGhpcy5ib29rLmlzQWN0aXZlUGFnZShuKSxcclxuICAgICAgZGlzcG9zZTogKCk9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tTG9hZGluZ3Mobyk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tUmVuZGVyUXVldWUobyk7XHJcbiAgICAgICAgaWYoby53cmFwcGVyICYmIG8ud3JhcHBlci5kaXNwb3NlKSB7XHJcbiAgICAgICAgICBvLndyYXBwZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvLnRleHR1cmUuZGlzcG9zZSgpO1xyXG4gICAgICAgIGRlbGV0ZSBvLnRleHR1cmU7XHJcbiAgICAgICAgZGVsZXRlIG8ud3JhcHBlcjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIG8udGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcbiAgICB0aGlzLmxvYWRpbmdzLnB1c2gobyk7XHJcbiAgICB0aGlzLnNldE1hdGVyaWFsKG8sIG1hdGVyaWFsKTtcclxuXHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT4ge1xyXG4gICAgICBpZihvLnRleHR1cmUpIHtcclxuICAgICAgICBjb25zdCB3aWR0aFRleGVscyA9IHBpLndpZHRoVGV4ZWxzIHx8IHAud2lkdGhUZXhlbHMsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0VGV4ZWxzID0gcGkuaGVpZ2h0VGV4ZWxzIHx8IHAuaGVpZ2h0VGV4ZWxzO1xyXG4gICAgICAgIG8ud3JhcHBlciA9IHRoaXMuaW1hZ2VGYWN0b3J5LmJ1aWxkKHBpLCBwaS5udW1iZXIgfHwgbiwgd2lkdGhUZXhlbHMsIGhlaWdodFRleGVscywgcC5jb2xvciwgdGhpcy5wLmluamVjdG9yKTtcclxuICAgICAgICBvLnNpbXVsYXRlID0gcGkuaW50ZXJhY3RpdmU/IChvLndyYXBwZXIuc2ltdWxhdGUgfHwgKCgpPT4gdW5kZWZpbmVkKSkuYmluZChvLndyYXBwZXIpOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgby53cmFwcGVyLm9uTG9hZCA9ICgpPT4ge1xyXG4gICAgICAgICAgaWYoby5zdGF0ZSAhPT0gJ3F1ZXVlZEZvclJlbmRlcicpIHtcclxuICAgICAgICAgICAgby5zdGF0ZSA9ICdxdWV1ZWRGb3JSZW5kZXInO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclF1ZXVlLnB1c2gobyk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyUXVldWUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIG8ud3JhcHBlci5vbkNoYW5nZSA9IChpbWFnZSk9PiB7XHJcbiAgICAgICAgICBpZihvLnRleHR1cmUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tTG9hZGluZ3Mobyk7XHJcbiAgICAgICAgICAgIGlmKG8ubWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICBvLm1hdGVyaWFsLm1hcCA9IG8udGV4dHVyZTtcclxuICAgICAgICAgICAgICBvLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvLnRleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICAgICAgby50ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgby50ZXh0dXJlLm9uVXBkYXRlID0gKCk9PiB7XHJcbiAgICAgICAgICAgICAgaWYoby5zdGF0ZSAhPT0gJ3F1ZXVlZEZvclJlbmRlcicpIHtcclxuICAgICAgICAgICAgICAgIG8uc3RhdGUgPSAnYWN0aXZlJztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVuZGVyaW5nO1xyXG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVuZGVyUXVldWUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy50bXBNYXRlcmlhbC5tYXAgPSBvLnRleHR1cmU7XHJcbiAgICAgICAgICAgIHRoaXMudG1wTWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMucGFnZUNhY2hlLnB1dChuLCBvKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJlbmRlclF1ZXVlKCkge1xyXG4gICAgY29uc3QgcCA9IHRoaXMuYm9vay5wO1xyXG4gICAgaWYoIXRoaXMucmVuZGVyaW5nICYmIChwLnJlbmRlcldoaWxlRmxpcHBpbmcgfHwgIXRoaXMuYm9vay5pc1Byb2Nlc3NpbmcoKSkpIHtcclxuICAgICAgZm9yKGxldCBvIG9mIHRoaXMucmVuZGVyUXVldWUpIHtcclxuICAgICAgICBpZihvLmlzQWN0aXZlKCkpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyaW5nID0gbztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZihwLnJlbmRlckluYWN0aXZlUGFnZXMpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmluZyA9IHRoaXMucmVuZGVyaW5nIHx8IHRoaXMucmVuZGVyUXVldWVbMF07XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5yZW5kZXJpbmcpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUZyb21SZW5kZXJRdWV1ZSh0aGlzLnJlbmRlcmluZyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJpbmcuc3RhdGUgPSAncmVuZGVyaW5nJztcclxuICAgICAgICB0aGlzLnJlbmRlcmluZy53cmFwcGVyLnN0YXJ0UmVuZGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHR1cm5PbkV2ZW50cygpIHtcclxuICAgIHRoaXMudHJhbnNmZXJFdmVudHMgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdHVybk9mZkV2ZW50cygpIHtcclxuICAgIGNvbnN0IG1vdXNldXAgPSAkLkV2ZW50KCdtb3VzZXVwJyksIG1vdXNlb3V0ID0gJC5FdmVudCgnbW91c2VvdXQnKTtcclxuICAgIHRoaXMucGFnZUNhY2hlLmZvckVhY2goKGVudCk9PiB7XHJcbiAgICAgIGNvbnN0IG9iamVjdCA9IGVudFsxXTtcclxuICAgICAgaWYob2JqZWN0LnNpbXVsYXRlKSB7XHJcbiAgICAgICAgb2JqZWN0LnNpbXVsYXRlKG1vdXNldXAsIHVuZGVmaW5lZCwgMCwgMCk7XHJcbiAgICAgICAgb2JqZWN0LnNpbXVsYXRlKG1vdXNlb3V0LCB1bmRlZmluZWQsIDAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudHJhbnNmZXJFdmVudHMgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRyYW5zZmVyRXZlbnRUb1RleHR1cmUobiwgZSwgZGF0YSkge1xyXG4gICAgaWYodGhpcy50cmFuc2ZlckV2ZW50cykge1xyXG4gICAgICBjb25zdCB0b09iamVjdCA9IHRoaXMuZ2V0T3JMb2FkVGV4dHVyZU9iamVjdCh1bmRlZmluZWQsIG4pLCB7dXZ9ID0gZGF0YSwgdG9Eb2MgPSB0b09iamVjdC53cmFwcGVyLmdldFNpbXVsYXRlZERvYygpO1xyXG4gICAgICB0aGlzLnBhZ2VDYWNoZS5mb3JFYWNoKChlbnQpPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IGVudFsxXTtcclxuICAgICAgICBpZihvYmplY3Quc2ltdWxhdGUpIHtcclxuICAgICAgICAgIG9iamVjdC5zaW11bGF0ZShlLCB0b0RvYywgdXYueCwgdXYueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRQcmVkaWN0ZWRQYWdlcygpIHtcclxuICAgIHRoaXMucHJlZGljdGVkUmVxdWVzdHMgPSBCYXNlTWF0aFV0aWxzLnByZWRpY3QodGhpcy5wYWdlUmVxdWVzdHMsIHRoaXMucC5wcmVsb2FkUGFnZXMpO1xyXG4gICAgZm9yKGxldCBwIG9mIHRoaXMucHJlZGljdGVkUmVxdWVzdHMpIHtcclxuICAgICAgaWYocDx0aGlzLmJvb2suZ2V0UGFnZXMoKSAmJiAhdGhpcy5wYWdlQ2FjaGUuZ2V0KHApKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkKHVuZGVmaW5lZCwgcCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFBhZ2VSZXF1ZXN0KG4pIHtcclxuICAgIHRoaXMucGFnZVJlcXVlc3RzLnB1c2gobik7XHJcbiAgICBpZih0aGlzLnBhZ2VSZXF1ZXN0cy5sZW5ndGg+dGhpcy5wLnBhZ2VzRm9yUHJlZGljdGluZykge1xyXG4gICAgICB0aGlzLnBhZ2VSZXF1ZXN0cy5zaGlmdCgpO1xyXG4gICAgfVxyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbih0aGlzLmxvYWRQcmVkaWN0ZWRQYWdlcy5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHNldE1hdGVyaWFsKG8sIG1hdGVyaWFsKSB7XHJcbiAgICB0aGlzLnBhZ2VDYWNoZS5mb3JFYWNoKChlKT0+IHtcclxuICAgICAgY29uc3Qgb2IgPSBlWzFdO1xyXG4gICAgICBpZihvIT09b2IgJiYgb2IubWF0ZXJpYWw9PT1tYXRlcmlhbCkge1xyXG4gICAgICAgIGRlbGV0ZSBvYi5tYXRlcmlhbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZihtYXRlcmlhbCAmJiBtYXRlcmlhbCE9PW8ubWF0ZXJpYWwpIHtcclxuICAgICAgby5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gICAgICBtYXRlcmlhbC5tYXAgPSBvLnRleHR1cmUuaW1hZ2U/IG8udGV4dHVyZTogdGhpcy5sb2FkaW5nW28uY29sb3JdLnRleHR1cmU7XHJcbiAgICAgIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE9yTG9hZFRleHR1cmVPYmplY3QobWF0ZXJpYWwsIG4pIHtcclxuICAgIGxldCBvYmplY3QgPSB0aGlzLnBhZ2VDYWNoZS5nZXQobik7XHJcbiAgICBpZighb2JqZWN0KSB7XHJcbiAgICAgIG9iamVjdCA9IHRoaXMubG9hZChtYXRlcmlhbCwgbik7XHJcbiAgICAgIHRoaXMuYWRkUGFnZVJlcXVlc3Qobik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRNYXRlcmlhbChvYmplY3QsIG1hdGVyaWFsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgc2V0VGV4dHVyZShtYXRlcmlhbCwgbikge1xyXG4gICAgaWYofnRoaXMucHJlZGljdGVkUmVxdWVzdHMuaW5kZXhPZihuKSkge1xyXG4gICAgICB0aGlzLmFkZFBhZ2VSZXF1ZXN0KG4pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRPckxvYWRUZXh0dXJlT2JqZWN0KG1hdGVyaWFsLCBuKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9QYWdlTWFuYWdlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvUGFnZU1hbmFnZXIuanMiLCJpbXBvcnQgQm9va1Byb3BzQnVpbGRlciBmcm9tICcuL0Jvb2tQcm9wc0J1aWxkZXInO1xyXG5pbXBvcnQgUGRmIGZyb20gJy4vUGRmJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBkZkJvb2tQcm9wc0J1aWxkZXIgZXh0ZW5kcyBCb29rUHJvcHNCdWlsZGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3JjLCBvblJlYWR5KSB7XHJcbiAgICBzdXBlcihvblJlYWR5KTtcclxuICAgIHRoaXMucGRmID0gbmV3IFBkZihzcmMpO1xyXG4gICAgdGhpcy5wYWdlRGVzY3JpcHRpb24gPSB7XHJcbiAgICAgIHR5cGU6ICdwZGYnLFxyXG4gICAgICBzcmM6IHRoaXMucGRmLFxyXG4gICAgICBpbnRlcmFjdGl2ZTogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHRoaXMuYmluZHMgPSB7XHJcbiAgICAgIHBhZ2VDYWxsYmFjazogdGhpcy5wYWdlQ2FsbGJhY2suYmluZCh0aGlzKVxyXG4gICAgfTtcclxuICAgIHRoaXMucGRmLmdldEhhbmRsZXIodGhpcy5pbml0LmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIHRoaXMucGRmLmRpc3Bvc2UoKTtcclxuICAgIHN1cGVyLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIGluaXQoaGFuZGxlcikge1xyXG4gICAgdGhpcy5jYWxjU2hlZXRzKHRoaXMucGRmLmdldFBhZ2VzTnVtKCkpO1xyXG4gICAgaWYodGhpcy5wZGYuZ2V0UGFnZXNOdW0oKT4wKSB7XHJcbiAgICAgIGhhbmRsZXIuZ2V0UGFnZSgxKS5cclxuICAgICAgICB0aGVuKChwYWdlKT0+IHtcclxuICAgICAgICAgIGNvbnN0IHNpemUgPSBQZGYuZ2V0UGFnZVNpemUocGFnZSk7XHJcbiAgICAgICAgICB0aGlzLmNhbGNQcm9wcyhzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICAgICAgICB0aGlzLnJlYWR5KCk7XHJcbiAgICAgICAgfSkuXHJcbiAgICAgICAgY2F0Y2goKGUpPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnByb3BzID0gdGhpcy5kZWZhdWx0cztcclxuICAgICAgdGhpcy5yZWFkeSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGFnZUNhbGxiYWNrKG4pIHtcclxuICAgIHJldHVybiB0aGlzLnBhZ2VEZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvUGRmQm9va1Byb3BzQnVpbGRlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvUGRmQm9va1Byb3BzQnVpbGRlci5qcyIsImltcG9ydCBJbWFnZUJhc2UgZnJvbSAnLi9JbWFnZUJhc2UnO1xyXG5pbXBvcnQgUGRmIGZyb20gJy4vUGRmJztcclxuaW1wb3J0IEJhc2VNYXRoVXRpbHMgZnJvbSAnLi9CYXNlTWF0aFV0aWxzJztcclxuaW1wb3J0IEN1c3RvbUV2ZW50Q29udmVydGVyIGZyb20gJy4vY29udHJvbHMvQ3VzdG9tRXZlbnRDb252ZXJ0ZXInO1xyXG5pbXBvcnQgUG9seVRhcmdldCBmcm9tICcuL2NvbnRyb2xzL3RhcmdldHMvUG9seVRhcmdldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZGZJbWFnZSBleHRlbmRzIEltYWdlQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBwZGYsIG4pIHtcclxuICAgIHN1cGVyKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQsIGNvbG9yKTtcclxuXHJcbiAgICB0aGlzLm4gPSBuO1xyXG4gICAgdGhpcy5wZGYgPSBwZGY7XHJcbiAgICB0aGlzLnYgPSB7eDogMCwgeTogMCwgejogMCwgc2V0OiBmdW5jdGlvbih4LHkseikge1xyXG4gICAgICB0aGlzLng9eDsgdGhpcy55PXk7IHRoaXMuej16O1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sIHRyYW5zZm9ybTogZnVuY3Rpb24obSkge1xyXG4gICAgICB0aGlzLng9bS5tWzBdWzBdKnRoaXMueCttLm1bMF1bMV0qdGhpcy55K20ubVswXVsyXSp0aGlzLno7XHJcbiAgICAgIHRoaXMueT1tLm1bMV1bMF0qdGhpcy54K20ubVsxXVsxXSp0aGlzLnkrbS5tWzFdWzJdKnRoaXMuejtcclxuICAgICAgdGhpcy56PW0ubVsyXVswXSp0aGlzLngrbS5tWzJdWzFdKnRoaXMueSttLm1bMl1bMl0qdGhpcy56O1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH19O1xyXG4gICAgdGhpcy5tID0ge206IFtbMSwwLDBdLFswLDEsMF0sWzAsMCwxXV0sIHNldDogZnVuY3Rpb24obTAwLG0wMSxtMDIsbTEwLG0xMSxtMTIsbTIwLG0yMSxtMjIpIHtcclxuICAgICAgdGhpcy5tPVtbbTAwLG0wMSxtMDJdLFttMTAsbTExLG0xMl0sW20yMCxtMjEsbTIyXV07XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfX07XHJcblxyXG4gICAgdGhpcy5zdGFydFJlbmRlciA9ICgpPT4ge1xyXG4gICAgICB0aGlzLnBkZi5nZXRIYW5kbGVyKHRoaXMucmVuZGVyLmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLlxyXG4gICAgICB0aGVuKCgpPT4gdGhpcy5wZGYuZ2V0SGFuZGxlcih0aGlzLmluaXQuYmluZCh0aGlzKSkpO1xyXG4gIH1cclxuXHJcbiAgcmVjdFNpemUocikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2lkdGg6IHJbMl0tclswXSxcclxuICAgICAgaGVpZ2h0OiByWzNdLXJbMV1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQb2x5KG0sIHAsIHMpIHtcclxuICAgIGNvbnN0IHBvbHkgPSBbXSwgdiA9IHRoaXMudjtcclxuICAgIHYuc2V0KHAueCwgcC55LCAxKS50cmFuc2Zvcm0obSk7XHJcbiAgICBwb2x5LnB1c2goe3g6IHYueCwgeTogdi55fSk7XHJcbiAgICB2LnNldChwLngsIHAueStzLmhlaWdodCwgMSkudHJhbnNmb3JtKG0pO1xyXG4gICAgcG9seS5wdXNoKHt4OiB2LngsIHk6IHYueX0pO1xyXG4gICAgdi5zZXQocC54K3Mud2lkdGgsIHAueStzLmhlaWdodCwgMSkudHJhbnNmb3JtKG0pO1xyXG4gICAgcG9seS5wdXNoKHt4OiB2LngsIHk6IHYueX0pO1xyXG4gICAgdi5zZXQocC54K3Mud2lkdGgsIHAueSwgMSkudHJhbnNmb3JtKG0pO1xyXG4gICAgcG9seS5wdXNoKHt4OiB2LngsIHk6IHYueX0pO1xyXG4gICAgcmV0dXJuIHBvbHk7XHJcbiAgfVxyXG5cclxuICBnZXRTaW11bGF0ZWREb2MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xyXG4gIH1cclxuXHJcbiAgc2ltdWxhdGUoZSwgZG9jLCB4LCB5KSB7XHJcbiAgICBpZih0aGlzLmV2ZW50Q29udmVydGVyKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRDb252ZXJ0ZXIuY29udmVydChlLCB7ZG9jLCB4LCB5fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRBbm5vdGF0aW9ucyhhbm5vcykge1xyXG4gICAgY29uc3QgdmlldyA9IHRoaXMucGFnZS52aWV3LFxyXG4gICAgICB2U3ogPSB0aGlzLnJlY3RTaXplKHZpZXcpLFxyXG4gICAgICB0ID0gdGhpcy52aWV3cG9ydC5jbG9uZSh7XHJcbiAgICAgICAgZG9udEZsaXA6IHRydWVcclxuICAgICAgfSkudHJhbnNmb3JtLFxyXG4gICAgICB0YXJnZXRzID0gW107XHJcbiAgICB0aGlzLm0uc2V0KFxyXG4gICAgICAxLHRbMV0sMCxcclxuICAgICAgdFsyXSwxLDAsXHJcbiAgICAgIHRbNF0vdlN6LndpZHRoLHRbNV0vdlN6LmhlaWdodCwxKTtcclxuXHJcbiAgICBmb3IobGV0IGFubm8gb2YgYW5ub3MpIHtcclxuICAgICAgaWYgKGFubm8uc3VidHlwZT09PSdMaW5rJykge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBhbm5vLnJlY3QsXHJcbiAgICAgICAgICBhUG9zID0ge1xyXG4gICAgICAgICAgICB4OiAocmVjdFswXS12aWV3WzBdKS92U3oud2lkdGgsXHJcbiAgICAgICAgICAgIHk6IChyZWN0WzFdLXZpZXdbMV0pL3ZTei5oZWlnaHRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhU3ogPSB0aGlzLnJlY3RTaXplKHJlY3QpO1xyXG4gICAgICAgIGFTei53aWR0aC89dlN6LndpZHRoO1xyXG4gICAgICAgIGFTei5oZWlnaHQvPXZTei5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmV3IFBvbHlUYXJnZXQodGhpcy5jcmVhdGVQb2x5KHRoaXMubSwgYVBvcywgYVN6KSk7XHJcbiAgICAgICAgdGFyZ2V0LmFubm8gPSBhbm5vO1xyXG4gICAgICAgIHRhcmdldC5jYWxsYmFjayA9IHRoaXMuYW5ub0NsYi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRhcmdldHMucHVzaCh0YXJnZXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZih0YXJnZXRzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmV2ZW50Q29udmVydGVyID0gbmV3IEN1c3RvbUV2ZW50Q29udmVydGVyKHRoaXMud25kLCB0aGlzLmRvYywgUG9seVRhcmdldC50ZXN0LCB0aGlzLnBhZ2UpO1xyXG4gICAgICBmb3IobGV0IHRhcmdldCBvZiB0YXJnZXRzKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudENvbnZlcnRlci5hZGRDdXN0b20odGFyZ2V0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5ub0NsYihlLCBkYXRhKSB7XHJcbiAgICBpZih0aGlzLmNvbnRleHQuZGlzcGF0Y2hFdmVudCkge1xyXG4gICAgICB0aGlzLmNvbnRleHQuZGlzcGF0Y2hFdmVudCh7XHJcbiAgICAgICAgdHlwZTogJ3BkZkFubm90YXRpb24nLFxyXG4gICAgICAgIGV2ZW50OiBlLFxyXG4gICAgICAgIGFubm90YXRpb246IGRhdGEudGFyZ2V0LmFubm9cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0KGhhbmRsZXIpIHtcclxuICAgIGhhbmRsZXIuZ2V0UGFnZSh0aGlzLm4rMSkuXHJcbiAgICAgIHRoZW4oKHBhZ2UpPT4ge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5zaXplID0gUGRmLmdldFBhZ2VTaXplKHBhZ2UpO1xyXG4gICAgICAgIHBhZ2UuZ2V0QW5ub3RhdGlvbnMoKS5cclxuICAgICAgICAgIHRoZW4odGhpcy5zZXRBbm5vdGF0aW9ucy5iaW5kKHRoaXMpKTtcclxuICAgICAgICBjb25zdCBzY2FsZSA9IEJhc2VNYXRoVXRpbHMuY2FsY1NjYWxlKHRoaXMuc2l6ZS53aWR0aCwgdGhpcy5zaXplLmhlaWdodCwgdGhpcy5yZXNXLCB0aGlzLnJlc0gpO1xyXG4gICAgICAgIHRoaXMudmlld3BvcnQgPSBwYWdlLmdldFZpZXdwb3J0KHNjYWxlKTtcclxuICAgICAgICB0aGlzLnJlc1cgPSB0aGlzLndpZHRoID0gdGhpcy52aWV3cG9ydC53aWR0aDtcclxuICAgICAgICB0aGlzLnJlc0ggPSB0aGlzLmhlaWdodCA9IHRoaXMudmlld3BvcnQuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZmluaXNoTG9hZCgpO1xyXG4gICAgICB9KS5cclxuICAgICAgY2F0Y2goKGUpPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBsb2FkIFBERiBwYWdlOiAnKyhuKzEpKTtcclxuICAgICAgICB0aGlzLmZpbmlzaExvYWQoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoaGFuZGxlcikge1xyXG4gICAgaWYodGhpcy5wYWdlKSB7XHJcbiAgICAgIHRoaXMucGFnZS5yZW5kZXIoe1xyXG4gICAgICAgIGNhbnZhc0NvbnRleHQ6IHRoaXMucHVzaEN0eCgpLFxyXG4gICAgICAgIHZpZXdwb3J0OiB0aGlzLnZpZXdwb3J0XHJcbiAgICAgIH0pLlxyXG4gICAgICB0aGVuKCgpPT4ge1xyXG4gICAgICAgIHRoaXMucG9wQ3R4KCk7XHJcbiAgICAgICAgdGhpcy5maW5pc2hSZW5kZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJCbGFua1BhZ2UoKTtcclxuICAgICAgdGhpcy5maW5pc2hSZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvUGRmSW1hZ2UuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL1BkZkltYWdlLmpzIiwiaW1wb3J0IHskfSBmcm9tICcuLi9saWJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGRmTGlua3NIYW5kbGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IocGRmLCBjdHJsLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLnBkZiA9IHBkZjtcclxuICAgIHRoaXMuY3RybCA9IGN0cmw7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgdGhpcy5jdXJzb3JzID0gW107XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG5cclxuICB9XHJcblxyXG4gIHNldEhhbmRsZXIoaGFuZGxlcikge1xyXG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICB9XHJcblxyXG4gIGRlZmF1bHRIYW5kbGVyKHR5cGUsIGRlc3RpbmF0aW9uKSB7XHJcbiAgICBpZih0eXBlPT09J2ludGVybmFsJykge1xyXG4gICAgICB0aGlzLmN0cmwuZ29Ub1BhZ2UoZGVzdGluYXRpb24pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZih0eXBlPT09J2V4dGVybmFsJykge1xyXG4gICAgICB3aW5kb3cub3BlbihkZXN0aW5hdGlvbiwgJ19ibGFuaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsbEhhbmRsZXJzKHR5cGUsIGRlc3RpbmF0aW9uKSB7XHJcbiAgICBpZighdGhpcy5oYW5kbGVyIHx8ICF0aGlzLmhhbmRsZXIodHlwZSwgZGVzdGluYXRpb24pKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdEhhbmRsZXIodHlwZSwgZGVzdGluYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXZlbnQoZGF0YSkge1xyXG4gICAgY29uc3QgZSA9IGRhdGEuZXZlbnQsIGFubm8gPSBkYXRhLmFubm90YXRpb247XHJcbiAgICBzd2l0Y2goZS50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ21vdXNlb3Zlcic6IHtcclxuICAgICAgICB0aGlzLmN1cnNvcnMucHVzaCh0aGlzLmVsZW1lbnQuY3NzKCdjdXJzb3InKSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdtb3VzZW91dCc6IHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuY3NzKCdjdXJzb3InLCB0aGlzLmN1cnNvcnMucG9wKCkgfHwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2NsaWNrJzoge1xyXG4gICAgICAgIGlmKGFubm8udXJsKSB7XHJcbiAgICAgICAgICB0aGlzLmNhbGxIYW5kbGVycygnZXh0ZXJuYWwnLCBhbm5vLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoYW5uby5kZXN0KSB7XHJcbiAgICAgICAgICBsZXQgZGVzdFByb21pc2U7XHJcbiAgICAgICAgICBpZih0eXBlb2YgYW5uby5kZXN0PT09J3N0cmluZycpIHtcclxuICAgICAgICAgICAgZGVzdFByb21pc2UgPSB0aGlzLnBkZi5oYW5kbGVyLmdldERlc3RpbmF0aW9uKGFubm8uZGVzdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVzdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoYW5uby5kZXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRlc3RQcm9taXNlLlxyXG4gICAgICAgICAgICB0aGVuKChkZXN0KT0+IHRoaXMucGRmLmhhbmRsZXIuZ2V0UGFnZUluZGV4KGRlc3RbMF0pKS5cclxuICAgICAgICAgICAgdGhlbigobnVtYmVyKT0+IHRoaXMuY2FsbEhhbmRsZXJzKCdpbnRlcm5hbCcsIG51bWJlcikpLlxyXG4gICAgICAgICAgICBjYXRjaCgoKT0+IGNvbnNvbGUuZXJyb3IoJ0JhZCBsaW5rJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9QZGZMaW5rc0hhbmRsZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL1BkZkxpbmtzSGFuZGxlci5qcyIsImltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hlZXRQaHlzaWNzIHtcclxuXHJcbiAgc3RhdGljIHRhcmdldEZvcmNlQ2xiKG8sYSx2LGNoKSB7XHJcbiAgICBjb25zdCBsID0gYSp0aGlzLnI7XHJcbiAgICByZXR1cm4gMTAwKnRoaXMubSp0aGlzLmcqKDIvKDErTWF0aC5leHAoMTAqKGwtdGhpcy50bCkpKS0xKS10aGlzLm0qNDAqdjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBob3ZlckNvcm5lckZvcmNlQ2xiKG8sdixsLGNoKSB7XHJcbiAgICByZXR1cm4gNTtcclxuICB9XHJcblxyXG4gIGdldFRhcmdldEZvcmNlQ2xiKG1hc3MsIHRhcmdldEFuZ2xlKSB7XHJcbiAgICByZXR1cm4gU2hlZXRQaHlzaWNzLnRhcmdldEZvcmNlQ2xiLmJpbmQoe1xyXG4gICAgICBnOiB0aGlzLnAuZ3Jhdml0eSxcclxuICAgICAgbTogbWFzcyxcclxuICAgICAgdGw6IHRhcmdldEFuZ2xlKnRoaXMucC5yLFxyXG4gICAgICByOiB0aGlzLnAuclxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZHJhZ0ZvcmNlQ2xiKG8sYSx2LGNoKSB7XHJcbiAgICByZXR1cm4gby5mbGJ0Km8ubSooMTAqby5nKmNoLTUwKnYvKDErTWF0aC5leHAoMy41Kk1hdGguYWJzKGNoKSkpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkcmFnQ29ybmVyRm9yY2VDbGIobyxhLHYsY2gpIHtcclxuICAgIHJldHVybiAxNSooMi8oMStNYXRoLmV4cCgxMCooYS10aGlzLnRhKSpvLnIpKS0xKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREcmFnQ29ybmVyRm9yY2VDbGIodGFyZ2V0QW5nbGUpIHtcclxuICAgIHJldHVybiBTaGVldFBoeXNpY3MuZHJhZ0Nvcm5lckZvcmNlQ2xiLmJpbmQoe1xyXG4gICAgICB0YTogdGFyZ2V0QW5nbGVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iocj0xLCBncmF2aXR5PTEsIGNvcm5lckRldmlhdGlvbj0wLjE1LCBmcHM9MjQwKSB7XHJcbiAgICB0aGlzLnAgPSB7XHJcbiAgICAgIHIsXHJcbiAgICAgIGNvcm5lckRldmlhdGlvbixcclxuICAgICAgbDogTWF0aC5QSSpyLFxyXG4gICAgICBzdGFydER0OiAxL2ZwcyxcclxuICAgICAgZ3Jhdml0eSxcclxuICAgICAgbWFyZ2luOiAwLjAwMipyLFxyXG4gICAgICBpbmZNOiAxZTQsXHJcbiAgICAgIGF0dGVtcHRzOiAxNixcclxuICAgICAgbWF4SXRlcmF0aW9uczogMTAwXHJcbiAgICB9O1xyXG4gICAgdGhpcy5vcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIHRoaXMub3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldFNpemUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBhZGRPYmplY3QobWFzcywgYW5nbGUsIHZlbG9jaXR5LCBmbGV4aWJpbGl0eSwgY29ybmVySGVpZ2h0LCBzaW11bGF0ZUNsYiwgcmVtb3ZlQ2xiLCBmb3JjZUNsYj0oKT0+IDAsIGNvcm5lckZvcmNlQ2xiPSgpPT4gMCkge1xyXG4gICAgY29uc3Qgbm8gPSB7XHJcbiAgICAgIGlkOiBNYXRoVXRpbHMuZ2V0VW5pcXVlKCksXHJcbiAgICAgIG06IG1hc3MsXHJcbiAgICAgIHY6IHZlbG9jaXR5LFxyXG4gICAgICBsOiBhbmdsZSp0aGlzLnAucixcclxuICAgICAgZjogZm9yY2VDbGIsXHJcbiAgICAgIGNmOiBjb3JuZXJGb3JjZUNsYixcclxuICAgICAgY2g6IGNvcm5lckhlaWdodCxcclxuICAgICAgZmxidDogZmxleGliaWxpdHksXHJcbiAgICAgIHNpbXVsYXRlQ2xiLFxyXG4gICAgICByZW1vdmVDbGJcclxuICAgIH07XHJcbiAgICBsZXQgaSA9IHRoaXMub3MuZmluZEluZGV4KChvKT0+IG5vLmw8PW8ubCk7XHJcbiAgICBpID0gfmk/IGk6IHRoaXMub3MubGVuZ3RoO1xyXG4gICAgdGhpcy5vcy5zcGxpY2UoaSwgMCwgbm8pO1xyXG4gICAgcmV0dXJuIG5vLmlkO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFyYW1ldHJNYXAobmFtZSkge1xyXG4gICAgY29uc3QgbWFwID0ge1xyXG4gICAgICBtYXNzOiAnbScsXHJcbiAgICAgIHZlbG9jaXR5OiAndicsXHJcbiAgICAgIGZsZXhpYmlsaXR5OiAnZmxidCcsXHJcbiAgICAgIGNvcm5lckhlaWdodDogJ2NoJyxcclxuICAgICAgc2ltdWxhdGVDbGI6ICdzaW11bGF0ZUNsYicsXHJcbiAgICAgIHJlbW92ZUNsYjogJ3JlbW92ZUNsYicsXHJcbiAgICAgIGZvcmNlQ2xiOiAnZicsXHJcbiAgICAgIGNvcm5lckZvcmNlQ2xiOiAnY2YnXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG1hcFtuYW1lXTtcclxuICB9XHJcblxyXG4gIHNldFBhcmFtZXRyKGlkLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgY29uc3QgbyA9IHRoaXMub3MuZmluZCgobyk9PiBvLmlkPT09aWQpO1xyXG4gICAgaWYobmFtZSA9PT0gJ2FuZ2xlJykge1xyXG4gICAgICBvLmwgPSB2YWx1ZSp0aGlzLnAucjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBvW3RoaXMuZ2V0UGFyYW1ldHJNYXAobmFtZSldID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYXJhbWV0cihpZCwgbmFtZSkge1xyXG4gICAgY29uc3QgbyA9IHRoaXMub3MuZmluZCgobyk9PiBvLmlkPT09aWQpO1xyXG4gICAgbGV0IHZhbHVlO1xyXG4gICAgaWYobmFtZSA9PT0gJ2FuZ2xlJykge1xyXG4gICAgICB2YWx1ZSA9IG8ubC90aGlzLnAucjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YWx1ZSA9IG9bdGhpcy5nZXRQYXJhbWV0ck1hcChuYW1lKV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzaW11bGF0ZShUKSB7XHJcbiAgICBsZXQgdD0wLFxyXG4gICAgICAgIGR0PXRoaXMucC5zdGFydER0LFxyXG4gICAgICAgIGF0dGVtcHQ9MCxcclxuICAgICAgICBpdD0wO1xyXG5cclxuICAgIHdoaWxlKHQ8VCAmJiBpdDx0aGlzLnAubWF4SXRlcmF0aW9ucykge1xyXG4gICAgICBpZihkdD5ULXQpIHtcclxuICAgICAgICBkdCA9IFQtdDtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBub3MgPSB0aGlzLmludGVncmF0ZSh0aGlzLm9zLCBkdCksXHJcbiAgICAgICAgICAgIGNpID0gdGhpcy5maW5kQ29sbGlzaW9ucyhub3MpO1xyXG4gICAgICBpZihjaS5udW0+MSAmJiBhdHRlbXB0PHRoaXMucC5hdHRlbXB0cykge1xyXG4gICAgICAgIGR0Lz0yO1xyXG4gICAgICAgICsrYXR0ZW1wdDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZihjaS5udW09PT0xKSB7XHJcbiAgICAgICAgICBjb25zdCBzY29zID0gdGhpcy5zb2x2ZUNvbGxpc2lvbihub3NbY2kubGFzdC0xXSwgbm9zW2NpLmxhc3RdKTtcclxuICAgICAgICAgIG5vc1tjaS5sYXN0LTFdID0gc2Nvc1swXTtcclxuICAgICAgICAgIG5vc1tjaS5sYXN0XSA9IHNjb3NbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY2kubnVtPjEpIHtcclxuICAgICAgICAgIGNvbnN0IGdzID0gW107XHJcbiAgICAgICAgICBsZXQgbGFzdCA9IC0yO1xyXG4gICAgICAgICAgZm9yKGxldCBpIG9mIGNpLmFsbCkge1xyXG4gICAgICAgICAgICBpZihpLWxhc3Q+MSkge1xyXG4gICAgICAgICAgICAgIGdzLnB1c2goW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdzW2dzLmxlbmd0aC0xXS5wdXNoKGkpO1xyXG4gICAgICAgICAgICBsYXN0ID0gaTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvcihsZXQgZyBvZiBncykge1xyXG4gICAgICAgICAgICBsZXQgc2csIGkwO1xyXG4gICAgICAgICAgICBpZihub3NbZ1swXV0ubD5NYXRoLlBJLzIqdGhpcy5wLnIpIHtcclxuICAgICAgICAgICAgICBzZyA9IC0xO1xyXG4gICAgICAgICAgICAgIGkwID0gZ1tnLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBzZyA9IDE7XHJcbiAgICAgICAgICAgICAgaTAgPSBnWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT1pMDsgaTxub3MubGVuZ3RoICYmIGk+LTE7IGkrPXNnKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbyA9IG5vc1tpK3NnXTtcclxuICAgICAgICAgICAgICBpZihvICYmIHNnKihvLmwtbm9zW2ldLmwpPD10aGlzLnAubWFyZ2luKSB7XHJcbiAgICAgICAgICAgICAgICBvLmw9bm9zW2ldLmwrc2cqMip0aGlzLnAubWFyZ2luO1xyXG4gICAgICAgICAgICAgICAgaWYoby5sPnRoaXMucC5sIHx8IG8ubDwwKSB7XHJcbiAgICAgICAgICAgICAgICAgIG8ubCA9IG8ubD50aGlzLnAubD8gdGhpcy5wLmw6IDA7XHJcbiAgICAgICAgICAgICAgICAgIG8uY2ggPSAwO1xyXG4gICAgICAgICAgICAgICAgICBvLnY9MDtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQmFkIGNvbGxpc2lvbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9zID0gbm9zO1xyXG4gICAgICAgIHRoaXMuZmluZEFuZFNvbHZlQ29ybmVyQ29sbGlzaW9ucygpO1xyXG4gICAgICAgIHQrPWR0O1xyXG4gICAgICAgIGR0PXRoaXMucC5zdGFydER0O1xyXG4gICAgICAgIGF0dGVtcHQ9MDtcclxuICAgICAgfVxyXG4gICAgICArK2l0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlU3RhdGljcygpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3RhdGljcygpIHtcclxuICAgIGNvbnN0IG5vcyA9IFtdLCBub3RpZnkgPSBbW10sW11dO1xyXG4gICAgZm9yKGxldCBvIG9mIHRoaXMub3MpIHtcclxuICAgICAgaWYoby5zaW11bGF0ZUNsYikge1xyXG4gICAgICAgIG8uc2ltdWxhdGVDbGIoby5sL3RoaXMucC5yLCBvLmNoKTtcclxuICAgICAgfVxyXG4gICAgICBpZigoby5sPT09dGhpcy5wLmwgfHwgby5sPT09MCkgJiYgby52PT09MCkge1xyXG4gICAgICAgIGlmKG8ucmVtb3ZlQ2xiICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIG5vdGlmeVsoby5sIT09dGhpcy5wLmwpKzBdLnB1c2gobyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIG5vcy5wdXNoKG8pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm9zID0gbm9zO1xyXG4gICAgZm9yKGxldCBvIG9mIG5vdGlmeVswXS5yZXZlcnNlKCkpIHtcclxuICAgICAgby5yZW1vdmVDbGIoTWF0aC5QSSwgby5jaCk7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IG8gb2Ygbm90aWZ5WzFdKSB7XHJcbiAgICAgIG8ucmVtb3ZlQ2xiKDAsIG8uY2gpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmluZEFuZFNvbHZlQ29ybmVyQ29sbGlzaW9ucygpIHtcclxuICAgIGlmKHRoaXMub3MubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IG9zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIC4uLnRoaXMub3NbMF0sXHJcbiAgICAgICAgICBsOiAwLFxyXG4gICAgICAgICAgbTogdGhpcy5wLmluZk0sXHJcbiAgICAgICAgICBjaDogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLi4udGhpcy5vcyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAuLi50aGlzLm9zWzBdLFxyXG4gICAgICAgICAgbDogMS4wNSp0aGlzLnAubCxcclxuICAgICAgICAgIG06IHRoaXMucC5pbmZNLFxyXG4gICAgICAgICAgY2g6IDBcclxuICAgICAgICB9XHJcbiAgICAgIF07XHJcblxyXG4gICAgICBmb3IobGV0IGk9MTsgaTxvcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGNvbnN0IGE9b3NbaS0xXSwgYj1vc1tpXSxcclxuICAgICAgICAgICAgICBhbD1hLmwrdGhpcy5wLmNvcm5lckRldmlhdGlvbiphLmNoKnRoaXMucC5yLFxyXG4gICAgICAgICAgICAgIGJsPWIubCt0aGlzLnAuY29ybmVyRGV2aWF0aW9uKmIuY2gqdGhpcy5wLnI7XHJcbiAgICAgICAgaWYoMS4wNSphbD5ibCAmJiBhLmNoPmIuY2gpIHtcclxuICAgICAgICAgIGNvbnN0IGRDaCA9IGEuY2gtYi5jaCwgZHY9YS5tL2EuZmxidCtiLm0vYi5mbGJ0LCBrYT1hLm0vYS5mbGJ0L2R2LCBrYj1iLm0vYi5mbGJ0L2R2O1xyXG4gICAgICAgICAgYS5jaD1hLmNoLWtiKmRDaDtcclxuICAgICAgICAgIGIuY2g9Yi5jaCtrYSpkQ2g7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb2x2ZUNvbGxpc2lvbihhLCBiKSB7XHJcbiAgICBjb25zdCBtbT0oYi5tK2EubSksXHJcbiAgICAgIGF2ID0gKC1hLnYqYi5tK2EubSphLnYrMipiLm0qYi52KS9tbSxcclxuICAgICAgYnYgPSAoYi5tKmIudi1iLnYqYS5tKzIqYS5tKmEudikvbW07XHJcbiAgICByZXR1cm4gW3suLi5hLCB2OiBhdn0sIHsuLi5iLCB2OiBidn1dO1xyXG4gIH1cclxuXHJcbiAgZmluZENvbGxpc2lvbnMob3MpIHtcclxuICAgIGNvbnN0IGNpID0ge1xyXG4gICAgICBudW06IDAsXHJcbiAgICAgIGxhc3Q6IDAsXHJcbiAgICAgIGFsbDogW11cclxuICAgIH07XHJcbiAgICBmb3IobGV0IGkgPSAxOyBpPG9zLmxlbmd0aCAmJiBjaS5udW08MjsgKytpKSB7XHJcbiAgICAgIGlmKG9zW2ktMV0ubD5vc1tpXS5sIHx8IHRoaXMuaXNDb2xsaXNpb24ob3NbaS0xXSwgb3NbaV0pKSB7XHJcbiAgICAgICAgaWYob3NbaS0xXS5sPm9zW2ldLmwpIHtcclxuICAgICAgICAgICsrY2kubnVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICArK2NpLm51bTtcclxuICAgICAgICBjaS5sYXN0ID0gaTtcclxuICAgICAgICBpZihjaS5hbGwuaW5kZXhPZihpLTEpPT09LTEpIHtcclxuICAgICAgICAgIGNpLmFsbC5wdXNoKGktMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNpLmFsbC5pbmRleE9mKGkpPT09LTEpIHtcclxuICAgICAgICAgIGNpLmFsbC5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNpO1xyXG4gIH1cclxuXHJcbiAgaXNDb2xsaXNpb24oYSwgYikge1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKGEubC1iLmwpPHRoaXMucC5tYXJnaW4gJiYgYS52PmIudjtcclxuICB9XHJcblxyXG4gIGludGVncmF0ZShvcywgZHQpIHtcclxuICAgIGNvbnN0IG5vcyA9IFtdO1xyXG4gICAgZm9yKGxldCBvIG9mIG9zKSB7XHJcbiAgICAgIGNvbnN0IHZsID0gTWF0aFV0aWxzLnJrNChcclxuICAgICAgICB0aGlzLmR5LmJpbmQoe1xyXG4gICAgICAgICAgZzogdGhpcy5wLmdyYXZpdHksXHJcbiAgICAgICAgICByOiB0aGlzLnAucixcclxuICAgICAgICAgIG06IG8ubSxcclxuICAgICAgICAgIGY6IG8uZixcclxuICAgICAgICAgIGNmOiBvLmNmLFxyXG4gICAgICAgICAgY2g6IG8uY2gsXHJcbiAgICAgICAgICBmbGJ0OiBvLmZsYnRcclxuICAgICAgICB9KSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIGR0LFxyXG4gICAgICAgIFtvLnYsIG8ubCwgby5jaF1cclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgbm8gPSB7XHJcbiAgICAgICAgLi4ubyxcclxuICAgICAgICB2OiB2bFswXSxcclxuICAgICAgICBsOiB2bFsxXSxcclxuICAgICAgICBjaDogdmxbMl1cclxuICAgICAgfTtcclxuICAgICAgaWYobm8ubDw9MCB8fCBuby5sPj10aGlzLnAubCkge1xyXG4gICAgICAgIG5vLmw9bm8ubDw9MD8gMDogdGhpcy5wLmw7XHJcbiAgICAgICAgbm8udj0wO1xyXG4gICAgICAgIG5vLmNoPTA7XHJcbiAgICAgIH1cclxuICAgICAgbm9zLnB1c2gobm8pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5vcztcclxuICB9XHJcblxyXG4gIGR5KHQseSkge1xyXG4gICAgY29uc3Qgdj15WzBdLCBsPXlbMV0sIGNoPXlbMl0sIGY9dGhpcy5mKHRoaXMsbC90aGlzLnIsdixjaCksIGNmPXRoaXMuY2YodGhpcyxsL3RoaXMucix2LGNoKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICgtdGhpcy5nKk1hdGguY29zKGwvdGhpcy5yKSp0aGlzLm0rZikvdGhpcy5tLFxyXG4gICAgICB2KzAuMDEqKE1hdGgucmFuZG9tKCktMC41KSxcclxuICAgICAgdGhpcy5mbGJ0KigoMi8oMStNYXRoLmV4cCgtMC4yKmNmKSktMSkqKDEtMi8oMStNYXRoLmV4cCgtNSooTWF0aC5hYnMoY2gpLTIpKSkpLWNoKVxyXG4gICAgXTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvU2hlZXRQaHlzaWNzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9TaGVldFBoeXNpY3MuanMiLCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kc0Vudmlyb21lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZT17fSkge1xyXG4gICAgdGhpcy5zb3VuZHMgPSB0ZW1wbGF0ZS5zb3VuZHMgfHwge307XHJcbiAgICB0aGlzLmF1ZGlvID0ge307XHJcbiAgICBpZih0aGlzLnNvdW5kcy5zdGFydEZsaXApIHtcclxuICAgICAgdGhpcy5hdWRpby5zdGFydEZsaXAgPSBuZXcgQXVkaW8odGhpcy5zb3VuZHMuc3RhcnRGbGlwKTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuc291bmRzLmVuZEZsaXApIHtcclxuICAgICAgdGhpcy5hdWRpby5lbmRGbGlwID0gbmV3IEF1ZGlvKHRoaXMuc291bmRzLmVuZEZsaXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RW5hYmxlZChlbmFibGVkKSB7XHJcbiAgICB0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgdG9nbGUoKSB7XHJcbiAgICB0aGlzLmVuYWJsZWQgPSAhdGhpcy5lbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLmF1ZGlvLnN0YXJ0RmxpcDtcclxuICAgIGRlbGV0ZSB0aGlzLmF1ZGlvLmVuZEZsaXA7XHJcbiAgfVxyXG5cclxuICBzdGFydEZsaXAoKSB7XHJcbiAgICBpZih0aGlzLmVuYWJsZWQgJiYgdGhpcy5hdWRpby5zdGFydEZsaXApIHtcclxuICAgICAgdGhpcy5hdWRpby5zdGFydEZsaXAucGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5kRmxpcCgpIHtcclxuICAgIGlmKHRoaXMuZW5hYmxlZCAmJiB0aGlzLmF1ZGlvLnN0YXJ0RmxpcCkge1xyXG4gICAgICB0aGlzLmF1ZGlvLnN0YXJ0RmxpcC5wYXVzZSgpO1xyXG4gICAgICB0aGlzLmF1ZGlvLnN0YXJ0RmxpcC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmVuYWJsZWQgJiYgdGhpcy5hdWRpby5lbmRGbGlwKSB7XHJcbiAgICAgIHRoaXMuYXVkaW8uZW5kRmxpcC5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVGbGlwcyhlbWl0dGVyKSB7XHJcbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXJ0RmxpcCcsIHRoaXMuc3RhcnRGbGlwLmJpbmQodGhpcykpO1xyXG4gICAgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKCdlbmRGbGlwJywgdGhpcy5lbmRGbGlwLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9Tb3VuZHNFbnZpcm9tZW50LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9Tb3VuZHNFbnZpcm9tZW50LmpzIiwiaW1wb3J0IHskfSBmcm9tICcuLi9saWJzJztcclxuaW1wb3J0IEltYWdlQmFzZSBmcm9tICcuL0ltYWdlQmFzZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aWNJbWFnZSBleHRlbmRzIEltYWdlQmFzZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCBzcmMpIHtcclxuICAgIHN1cGVyKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQsIGNvbG9yKTtcclxuXHJcbiAgICB0aGlzLmJpbmRzID0ge31cclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuYmluZHMuaW1hZ2VMb2FkID0gKCk9PiB7XHJcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmltYWdlLndpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICB0aGlzLnN0YXJ0UmVuZGVyID0gKCk9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJJbWFnZSh0aGlzLmltYWdlKTtcclxuICAgICAgICB0aGlzLmZpbmlzaFJlbmRlcigpO1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmZpbmlzaExvYWQoKTtcclxuICAgIH07XHJcbiAgICB0aGlzLmJpbmRzLmltYWdlRXJyb3IgPSAoKT0+IHtcclxuICAgICAgdGhpcy5zdGFydFJlbmRlciA9ICgpPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyTm90Rm91bmRQYWdlKCk7XHJcbiAgICAgICAgdGhpcy5maW5pc2hSZW5kZXIoKTtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5maW5pc2hMb2FkKCk7XHJcbiAgICB9O1xyXG4gICAgJCh0aGlzLmltYWdlKS5vbignbG9hZCcsIHRoaXMuYmluZHMuaW1hZ2VMb2FkKS5vbignZXJyb3InLCB0aGlzLmJpbmRzLmltYWdlRXJyb3IpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBzcmM7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgJCh0aGlzLmltYWdlKS5vZmYoJ2xvYWQnLCB0aGlzLmJpbmRzLmltYWdlTG9hZCkub2ZmKCdlcnJvcicsIHRoaXMuYmluZHMuaW1hZ2VFcnJvcik7XHJcbiAgICB0aGlzLmltYWdlLnNyYyA9ICcnO1xyXG4gICAgZGVsZXRlIHRoaXMuaW1hZ2U7XHJcbiAgICBzdXBlci5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL1N0YXRpY0ltYWdlLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9TdGF0aWNJbWFnZS5qcyIsImltcG9ydCB7VEhSRUV9IGZyb20gJy4uL2xpYnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlQW5pbWF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKGltZywgdGlsZXNIb3JpeiwgdGlsZXNWZXJ0LCBudW1UaWxlcywgdGlsZURpc3BEdXJhdGlvbikge1xyXG5cclxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG4gICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcbiAgICB0ZXh0dXJlLmltYWdlID0gaW1nO1xyXG4gICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gIFx0Ly8gbm90ZTogdGV4dHVyZSBwYXNzZWQgYnkgcmVmZXJlbmNlLCB3aWxsIGJlIHVwZGF0ZWQgYnkgdGhlIHVwZGF0ZSBmdW5jdGlvbi5cclxuICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgXHR0aGlzLnRpbGVzSG9yaXpvbnRhbCA9IHRpbGVzSG9yaXo7XHJcbiAgXHR0aGlzLnRpbGVzVmVydGljYWwgPSB0aWxlc1ZlcnQ7XHJcbiAgXHQvLyBob3cgbWFueSBpbWFnZXMgZG9lcyB0aGlzIHNwcml0ZXNoZWV0IGNvbnRhaW4/XHJcbiAgXHQvLyAgdXN1YWxseSBlcXVhbHMgdGlsZXNIb3JpeiAqIHRpbGVzVmVydCwgYnV0IG5vdCBuZWNlc3NhcmlseSxcclxuICBcdC8vICBpZiB0aGVyZSBhdCBibGFuayB0aWxlcyBhdCB0aGUgYm90dG9tIG9mIHRoZSBzcHJpdGVzaGVldC5cclxuICBcdHRoaXMubnVtYmVyT2ZUaWxlcyA9IG51bVRpbGVzO1xyXG4gIFx0dGV4dHVyZS5yZXBlYXQuc2V0KDEvdGhpcy50aWxlc0hvcml6b250YWwsIDEvdGhpcy50aWxlc1ZlcnRpY2FsKTtcclxuXHJcbiAgXHQvLyBob3cgbG9uZyBzaG91bGQgZWFjaCBpbWFnZSBiZSBkaXNwbGF5ZWQ/XHJcbiAgXHR0aGlzLnRpbGVEaXNwbGF5RHVyYXRpb24gPSB0aWxlRGlzcER1cmF0aW9uO1xyXG5cclxuICBcdC8vIGhvdyBsb25nIGhhcyB0aGUgY3VycmVudCBpbWFnZSBiZWVuIGRpc3BsYXllZD9cclxuICBcdHRoaXMuY3VycmVudERpc3BsYXlUaW1lID0gMDtcclxuXHJcbiAgXHQvLyB3aGljaCBpbWFnZSBpcyBjdXJyZW50bHkgYmVpbmcgZGlzcGxheWVkP1xyXG4gIFx0dGhpcy5jdXJyZW50VGlsZSA9IDA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUobWlsbGlTZWMpIHtcclxuICAgIHRoaXMuY3VycmVudERpc3BsYXlUaW1lICs9IG1pbGxpU2VjO1xyXG4gICAgd2hpbGUodGhpcy5jdXJyZW50RGlzcGxheVRpbWUgPiB0aGlzLnRpbGVEaXNwbGF5RHVyYXRpb24pIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGlzcGxheVRpbWUgLT0gdGhpcy50aWxlRGlzcGxheUR1cmF0aW9uO1xyXG4gICAgICArK3RoaXMuY3VycmVudFRpbGU7XHJcbiAgICAgIGlmKHRoaXMuY3VycmVudFRpbGUgPT0gdGhpcy5udW1iZXJPZlRpbGVzKVxyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbGUgPSAwO1xyXG4gICAgICB2YXIgY3VycmVudENvbHVtbiA9IHRoaXMuY3VycmVudFRpbGUldGhpcy50aWxlc0hvcml6b250YWw7XHJcbiAgICAgIHRoaXMudGV4dHVyZS5vZmZzZXQueCA9IGN1cnJlbnRDb2x1bW4vdGhpcy50aWxlc0hvcml6b250YWw7XHJcbiAgICAgIHZhciBjdXJyZW50Um93ID0gTWF0aC5mbG9vcih0aGlzLmN1cnJlbnRUaWxlL3RoaXMudGlsZXNIb3Jpem9udGFsKTtcclxuICAgICAgdGhpcy50ZXh0dXJlLm9mZnNldC55ID0gY3VycmVudFJvdy90aGlzLnRpbGVzVmVydGljYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgY29uc3QgaW1nID0gdGhpcy50ZXh0dXJlLmltYWdlO1xyXG4gICAgaW1nLmhlaWdodCA9IGltZy53aWR0aCA9IDA7XHJcbiAgICB0aGlzLnRleHR1cmUuZGlzcG9zZSgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL1RleHR1cmVBbmltYXRvci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvVGV4dHVyZUFuaW1hdG9yLmpzIiwiaW1wb3J0IHtUSFJFRX0gZnJvbSAnLi4vbGlicyc7XHJcbmltcG9ydCBzaGVldEJsb2NrIGZyb20gJy4uL21vZGVscy9zaGVldEJsb2NrJztcclxuaW1wb3J0IE1hdGhVdGlscyBmcm9tICcuL01hdGhVdGlscyc7XHJcbmltcG9ydCBUaHJlZVV0aWxzIGZyb20gJy4vVGhyZWVVdGlscyc7XHJcbmltcG9ydCBEZWxhdW5heSBmcm9tICcuL0RlbGF1bmF5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTWFya3VwIHtcclxuXHJcbiAgY29uc3RydWN0b3IoYmxvY2ssIHNpZGUsIHBvbHksIHByb3BzKSB7XHJcbiAgICBjb25zdCBwb2x5MCA9IHBvbHk7XHJcbiAgICB0aGlzLml2cyA9IFRocmVlVXRpbHMuZmluZEludGVybmFsVmVydGljZXMoYmxvY2suZ2VvbWV0cnksIHBvbHksIGJsb2NrLnAuc2lkZUZhY2VzW3NpZGVdLmZpcnN0LCBibG9jay5wLnNpZGVGYWNlc1tzaWRlXS5sYXN0KTtcclxuICAgIHBvbHkgPSBNYXRoVXRpbHMucmVmaW5lUG9seShwb2x5LCAxL01hdGgubWF4KHNoZWV0QmxvY2sucmVzWCwgc2hlZXRCbG9jay5yZXNaKSk7XHJcbiAgICB0aGlzLmJsb2NrID0gYmxvY2s7XHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5O1xyXG4gICAgdGhpcy5wb2x5RmFjZXMgPSBUaHJlZVV0aWxzLmZpbmRVdlRyaXMoYmxvY2suZ2VvbWV0cnksIHBvbHksIGJsb2NrLnAuc2lkZUZhY2VzW3NpZGVdLmZpcnN0LCBibG9jay5wLnNpZGVGYWNlc1tzaWRlXS5sYXN0KTtcclxuXHJcbiAgICBmb3IobGV0IGl2IG9mIHRoaXMuaXZzKSB7XHJcbiAgICAgIHBvbHkucHVzaChpdi5wKTtcclxuICAgIH1cclxuICAgIGdlb21ldHJ5LnZlcnRpY2VzID0gW107XHJcbiAgICBmb3IobGV0IGk9MDsgaTxwb2x5Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGdlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZFRyaSA9IERlbGF1bmF5LnRyaWFuZ3VsYXRlKHBvbHkubWFwKChwKT0+IFtwLngsIHAueV0pKTtcclxuICAgIGZvcihsZXQgaT0wOyBpPGRUcmkubGVuZ3RoOyBpKz0zKSB7XHJcbiAgICAgIGlmKCFUSFJFRS5TaGFwZVV0aWxzLmlzQ2xvY2tXaXNlKFtwb2x5W2RUcmlbaSswXV0scG9seVtkVHJpW2krMV1dLHBvbHlbZFRyaVtpKzJdXV0pKSB7XHJcbiAgICAgICAgZ2VvbWV0cnkuZmFjZXMucHVzaChuZXcgVEhSRUUuRmFjZTMoZFRyaVtpKzBdLCBkVHJpW2krMV0sIGRUcmlbaSsyXSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGdlb21ldHJ5LmZhY2VzLnB1c2gobmV3IFRIUkVFLkZhY2UzKGRUcmlbaSswXSwgZFRyaVtpKzJdLCBkVHJpW2krMV0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29tcHV0ZVZlcnRpY2VzKCk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4MDBmZjAwLCB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTogMC41fSk7XHJcbiAgICB0aGlzLnRocmVlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIGJsb2NrLnRocmVlLmFkZCh0aGlzLnRocmVlKTtcclxuICB9XHJcblxyXG4gIGNvbXB1dGVWZXJ0aWNlcygpIHtcclxuICAgIGNvbnN0IGJsR20gPSB0aGlzLmJsb2NrLmdlb21ldHJ5ICwgc2NhbGUgPSB0aGlzLmJsb2NrLnAuc2NhbGUqMC4wMDE7XHJcbiAgICBmb3IobGV0IGk9IDA7IGk8dGhpcy5wb2x5RmFjZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgY29uc3QgZiA9IGJsR20uZmFjZXNbdGhpcy5wb2x5RmFjZXNbaV0uaV0sIHtjb2Vmc30gPSB0aGlzLnBvbHlGYWNlc1tpXTtcclxuICAgICAgY29uc3QgdiA9IFtibEdtLnZlcnRpY2VzW2YuYV0sIGJsR20udmVydGljZXNbZi5iXSwgYmxHbS52ZXJ0aWNlc1tmLmNdXSwgbiA9IHtcclxuICAgICAgICB4OiBjb2Vmc1swXSpmLnZlcnRleE5vcm1hbHNbMF0ueCtjb2Vmc1sxXSpmLnZlcnRleE5vcm1hbHNbMV0ueCtjb2Vmc1syXSpmLnZlcnRleE5vcm1hbHNbMl0ueCxcclxuICAgICAgICB5OiBjb2Vmc1swXSpmLnZlcnRleE5vcm1hbHNbMF0ueStjb2Vmc1sxXSpmLnZlcnRleE5vcm1hbHNbMV0ueStjb2Vmc1syXSpmLnZlcnRleE5vcm1hbHNbMl0ueSxcclxuICAgICAgICB6OiBjb2Vmc1swXSpmLnZlcnRleE5vcm1hbHNbMF0ueitjb2Vmc1sxXSpmLnZlcnRleE5vcm1hbHNbMV0ueitjb2Vmc1syXSpmLnZlcnRleE5vcm1hbHNbMl0uelxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmdlb21ldHJ5LnZlcnRpY2VzW2ldLnNldChcclxuICAgICAgICBjb2Vmc1swXSp2WzBdLngrY29lZnNbMV0qdlsxXS54K2NvZWZzWzJdKnZbMl0ueCtzY2FsZSpuLngsXHJcbiAgICAgICAgY29lZnNbMF0qdlswXS55K2NvZWZzWzFdKnZbMV0ueStjb2Vmc1syXSp2WzJdLnkrc2NhbGUqbi55LFxyXG4gICAgICAgIGNvZWZzWzBdKnZbMF0ueitjb2Vmc1sxXSp2WzFdLnorY29lZnNbMl0qdlsyXS56K3NjYWxlKm4uelxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZm9yKGxldCBpPXRoaXMucG9seUZhY2VzLmxlbmd0aCwgaj0wOyBqPHRoaXMuaXZzLmxlbmd0aDsgKytpLCArK2opIHtcclxuICAgICAgY29uc3QgdiA9IGJsR20udmVydGljZXNbdGhpcy5pdnNbal0uaV0sIG4gPSB0aGlzLml2c1tqXS5uO1xyXG4gICAgICB0aGlzLmdlb21ldHJ5LnZlcnRpY2VzW2ldLnNldChcclxuICAgICAgICB2Lngrc2NhbGUqbi54LFxyXG4gICAgICAgIHYueStzY2FsZSpuLnksXHJcbiAgICAgICAgdi56K3NjYWxlKm4uelxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZW9tZXRyeS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xyXG4gICAgLy90aGlzLmdlb21ldHJ5LmNvbXB1dGVGYWNlTm9ybWFscygpO1xyXG4gICAgdGhpcy5nZW9tZXRyeS5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcclxuICAgIC8vdGhpcy5nZW9tZXRyeS5jb21wdXRlQm91bmRpbmdCb3goKTtcclxuICAgIHRoaXMuZ2VvbWV0cnkudmVydGljZXNOZWVkVXBkYXRlID0gdHJ1ZTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvVGhyZWVNYXJrdXAuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL1RocmVlTWFya3VwLmpzIiwiaW1wb3J0IHskfSBmcm9tICcuLi9saWJzJztcclxuaW1wb3J0IEltYWdlRmFjdG9yeSBmcm9tICcuL0ltYWdlRmFjdG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHVtYm5haWxzIHtcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dCwgY29udGFpbmVyLCB0aHVtYm5haWxzQ2xiLCBzaXplLCBwcm9wcz17a1d0b0g6IDIxMC8yOTd9KSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIHRoaXMucCA9IHByb3BzO1xyXG4gICAgdGhpcy50aHVtYm5haWxzQ2xiID0gdGh1bWJuYWlsc0NsYjtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLmNhbnZhcyA9ICQoJzxjYW52YXM+JylbMF07XHJcbiAgICB0aGlzLmltYWdlRmFjdG9yeSA9IG5ldyBJbWFnZUZhY3Rvcnkoe1xyXG4gICAgICAuLi5jb250ZXh0LFxyXG4gICAgICByZW5kZXJDYW52YXM6IHRoaXMuY2FudmFzLFxyXG4gICAgICByZW5kZXJDYW52YXNDdHg6IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuICAgIH0pO1xyXG4gICAgdGhpcy50aHVtYm5haWxzID0gW107XHJcbiAgICBmb3IobGV0IGk9MDsgaTxzaXplOyArK2kpIHtcclxuICAgICAgY29uc3QgaW5mbyA9IHRoaXMudGh1bWJuYWlsc0NsYihpKTtcclxuICAgICAgdGhpcy50aHVtYm5haWxzLnB1c2goe1xyXG4gICAgICAgIC4uLmluZm8sXHJcbiAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgbG9hZGVkOiBpbmZvLnR5cGU9PT0ndGh1bWJuYWlsLWltYWdlJyxcclxuICAgICAgICBoZWFkaW5nOiBudWxsLFxyXG4gICAgICAgIHRodW1ibmFpbDogbnVsbCxcclxuICAgICAgICB0aXRsZTogaW5mby50aXRsZSB8fCBpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYmluZHMgPSB7XHJcbiAgICAgIHVwZGF0ZTogdGhpcy51cGRhdGUuYmluZCh0aGlzKSxcclxuICAgICAgbmF2aWdhdGU6IChlKT0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYodGhpcy5vbk5hdmlnYXRlKSB7XHJcbiAgICAgICAgICBsZXQgbm9kZSA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgd2hpbGUobm9kZSAmJiAhbm9kZS5kYXRhVGh1bWJuYWlsKSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm9uTmF2aWdhdGUobm9kZS5kYXRhVGh1bWJuYWlsLmluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLmNvbnRhaW5lci5vbignc2Nyb2xsJywgdGhpcy5iaW5kcy51cGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2l6ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgfVxyXG5cclxuICBzZXRFbmFibGUoZW5hYmxlKSB7XHJcbiAgICB0aGlzLmVuYWJsZSA9IGVuYWJsZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuZmluZCgnYScpLm9mZignY2xpY2snLCB0aGlzLmJpbmRzLm5hdmlnYXRlKTtcclxuICAgIHRoaXMuY29udGFpbmVyLm9mZignc2Nyb2xsJywgdGhpcy5iaW5kcy51cGRhdGUpO1xyXG4gICAgdGhpcy5jb250YWluZXIuaHRtbCgnJyk7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy53aWR0aCA9IDA7XHJcbiAgICBkZWxldGUgdGhpcy5jYW52YXM7XHJcbiAgfVxyXG5cclxuICBsb2FkKHRodW1ibmFpbCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmltYWdlRmFjdG9yeS5idWlsZCh0aHVtYm5haWwsIHRodW1ibmFpbC5udW1iZXIgfHwgdGh1bWJuYWlsLmluZGV4LCB0aGlzLnAua1d0b0gqMTUwLCAxNTApO1xyXG4gICAgd3JhcHBlci5vbkNoYW5nZSA9IChjYW52YXMpPT4ge1xyXG4gICAgICB0aGlzLnNldEltYWdlKHRodW1ibmFpbCwgY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykpO1xyXG4gICAgICB0aHVtYm5haWwubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgd3JhcHBlci5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT4gdGhpcy51cGRhdGUoKSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aXZlKCkge1xyXG4gICAgY29uc3QgZmlyc3QgPSB0aGlzLmNvbnRhaW5lci5zY3JvbGxUb3AoKSwgbGFzdCA9IGZpcnN0ICsgdGhpcy5jb250YWluZXIuaGVpZ2h0KCksIHJlcyA9IFtdO1xyXG4gICAgZm9yKGxldCB0aHVtYm5haWwgb2YgdGhpcy50aHVtYm5haWxzKSB7XHJcbiAgICAgIGlmKE1hdGgubWF4KHRodW1ibmFpbC5maXJzdCwgZmlyc3QpPE1hdGgubWluKHRodW1ibmFpbC5sYXN0LCBsYXN0KSkge1xyXG4gICAgICAgIHJlcy5wdXNoKHRodW1ibmFpbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZighdGhpcy5sb2FkaW5nICYmIHRoaXMuY2FudmFzICYmIHRoaXMuZW5hYmxlKSB7XHJcbiAgICAgIGlmKCF0aGlzLmJ1aWx0KSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmdldEFjdGl2ZSgpO1xyXG4gICAgICBmb3IobGV0IHRodW1ibmFpbCBvZiBhY3RpdmUpIHtcclxuICAgICAgICBpZighdGh1bWJuYWlsLmxvYWRlZCkge1xyXG4gICAgICAgICAgdGhpcy5sb2FkKHRodW1ibmFpbCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEltYWdlKHRodW1ibmFpbCwgaW1nKSB7XHJcbiAgICB0aHVtYm5haWwuaW1nID0gaW1nO1xyXG4gICAgdGh1bWJuYWlsLnRodW1ibmFpbC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBbJ3VybChcXCcnLCBpbWcsJ1xcJyknXS5qb2luKCcnKSk7XHJcbiAgICB0aHVtYm5haWwudGh1bWJuYWlsLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IFsnPGRpdiBjbGFzcz1cInRodW1ibmFpbHNcIj4nXVxyXG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy5zaXplOyArK2kpIHtcclxuICAgICAgZWxlbWVudHMucHVzaChbJzxkaXYgY2xhc3M9XCJpdGVtXCI+PGEgaHJlZj1cIiNcIj48ZGl2IGNsYXNzPVwidGh1bWJuYWlsIGxvYWRpbmdcIj48L2Rpdj48L2E+PGRpdiBjbGFzcz1cImhlYWRpbmdcIj48YSBocmVmPVwiI1wiIHRpdGxlPVwiJywgaSsxLCdcIj4nLCBpKzEsICc8L2E+PC9kaXY+PC9kaXY+J10uam9pbignJykpO1xyXG4gICAgfVxyXG4gICAgZWxlbWVudHMucHVzaCgnPC9kaXY+Jyk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoZWxlbWVudHMuam9pbignJykpO1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuaXRlbScpLCBiYXNlID0gdGhpcy5jb250YWluZXIuZmluZCgnLnRodW1ibmFpbHMnKS5vZmZzZXQoKS50b3A7XHJcbiAgICBmb3IobGV0IGk9MDsgaTxpdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICBjb25zdCBpdGVtID0gJChpdGVtc1tpXSk7XHJcbiAgICAgIHRoaXMudGh1bWJuYWlsc1tpXS5oZWFkaW5nID0gaXRlbS5maW5kKCcuaGVhZGluZycpO1xyXG4gICAgICB0aGlzLnRodW1ibmFpbHNbaV0udGh1bWJuYWlsID0gaXRlbS5maW5kKCcudGh1bWJuYWlsJyk7XHJcbiAgICAgIHRoaXMudGh1bWJuYWlsc1tpXS5maXJzdCA9IGl0ZW0ub2Zmc2V0KCkudG9wLWJhc2U7XHJcbiAgICAgIHRoaXMudGh1bWJuYWlsc1tpXS5sYXN0ID0gdGhpcy50aHVtYm5haWxzW2ldLmZpcnN0K2l0ZW0uaGVpZ2h0KCk7XHJcbiAgICAgIGlmKHRoaXMudGh1bWJuYWlsc1tpXS5sb2FkZWQpIHtcclxuICAgICAgICB0aGlzLnNldEltYWdlKHRoaXMudGh1bWJuYWlsc1tpXSwgdGhpcy50aHVtYm5haWxzW2ldLnNyYyk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBhIG9mIGl0ZW0uZmluZCgnYScpKSB7XHJcbiAgICAgICAgYS5kYXRhVGh1bWJuYWlsID0gdGhpcy50aHVtYm5haWxzW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRhaW5lci5maW5kKCdhJykub24oJ2NsaWNrJywgdGhpcy5iaW5kcy5uYXZpZ2F0ZSk7XHJcbiAgICB0aGlzLmJ1aWx0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvVGh1bWJuYWlscy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvVGh1bWJuYWlscy5qcyIsImltcG9ydCBXaWRnZXRDb250cm9sbGVyIGZyb20gJy4vV2lkZ2V0Q29udHJvbGxlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2NDb250cm9sbGVyIGV4dGVuZHMgV2lkZ2V0Q29udHJvbGxlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHZpZXcsIGJvb2tDdHJsKSB7XHJcbiAgICBzdXBlcih2aWV3LCBib29rQ3RybCk7XHJcbiAgICB0aGlzLmJvb2tDdHJsID0gYm9va0N0cmw7XHJcbiAgICB0aGlzLnRhYiA9ICdub25lJztcclxuICB9XHJcblxyXG4gIHNldFRodW1ibmFpbHModGh1bWJuYWlscykge1xyXG4gICAgdGhpcy50aHVtYm5haWxzID0gdGh1bWJuYWlscztcclxuICAgIHRodW1ibmFpbHMub25OYXZpZ2F0ZSA9IHRoaXMubmF2aWdhdGVUaHVtYm5haWxzLmJpbmQodGhpcyk7XHJcbiAgICBpZih0aGlzLnRhYiA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIHRoaXMudGFiID0gJ3RodW1ibmFpbHMnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maXJlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRCb29rbWFya3MoYm9va21hcmtzLCBwZGYpIHtcclxuICAgIHRoaXMuYm9va21hcmtzID0gYm9va21hcmtzO1xyXG4gICAgdGhpcy5wZGYgPSBwZGY7XHJcbiAgICBib29rbWFya3Mub25OYXZpZ2F0ZSA9IHRoaXMubmF2aWdhdGVCb29rbWFya3MuYmluZCh0aGlzKTtcclxuICAgIGlmKGJvb2ttYXJrcy5nZXRTaXplKCkpIHtcclxuICAgICAgdGhpcy50YWIgPSAnYm9va21hcmtzJztcclxuICAgICAgdGhpcy5pc0Jvb2ttYXJrcyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpcmVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGNtZEJvb2ttYXJrcygpIHtcclxuICAgIHRoaXMudGFiID0gJ2Jvb2ttYXJrcyc7XHJcbiAgICB0aGlzLmZpcmVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIGNtZFRodW1ibmFpbHMoKSB7XHJcbiAgICB0aGlzLnRhYiA9ICd0aHVtYm5haWxzJztcclxuICAgIHRoaXMuZmlyZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgY21kQ2xvc2VUb2MoKSB7XHJcbiAgICB0aGlzLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlVGh1bWJuYWlscyhudW1iZXIpIHtcclxuICAgIHRoaXMuYm9va0N0cmwuZ29Ub1BhZ2UobnVtYmVyKTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlQm9va21hcmtzKGl0ZW0pIHtcclxuICAgIGlmKGl0ZW0udXJsKSB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKGl0ZW0udXJsLCAnX2JsYW5rJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGl0ZW0uZGVzdCkge1xyXG4gICAgICBsZXQgZGVzdFByb21pc2U7XHJcbiAgICAgIGlmKHR5cGVvZiBpdGVtLmRlc3Q9PT0nc3RyaW5nJykge1xyXG4gICAgICAgIGRlc3RQcm9taXNlID0gdGhpcy5wZGYuaGFuZGxlci5nZXREZXN0aW5hdGlvbihpdGVtLmRlc3QpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGRlc3RQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGl0ZW0uZGVzdCk7XHJcbiAgICAgIH1cclxuICAgICAgZGVzdFByb21pc2UuXHJcbiAgICAgICAgdGhlbigoZGVzdCk9PiB0aGlzLnBkZi5oYW5kbGVyLmdldFBhZ2VJbmRleChkZXN0WzBdKSkuXHJcbiAgICAgICAgdGhlbigobnVtYmVyKT0+IHRoaXMuYm9va0N0cmwuZ29Ub1BhZ2UobnVtYmVyKSkuXHJcbiAgICAgICAgY2F0Y2goKCk9PiBjb25zb2xlLmVycm9yKCdCYWQgYm9va21hcmsnKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWaWV3KCkge1xyXG4gICAgaWYodGhpcy52aWV3KSB7XHJcbiAgICAgIHRoaXMudmlldy5zZXRTdGF0ZSgnd2lkVG9jTWVudScsIHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogISF0aGlzLmlzQm9va21hcmtzLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudmlldy5zZXRTdGF0ZSgnd2lkVGh1bWJuYWlscycsIHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdGhpcy50YWI9PT0ndGh1bWJuYWlscycsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy52aWV3LnNldFN0YXRlKCd3aWRCb29rbWFya3MnLCB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRoaXMudGFiPT09J2Jvb2ttYXJrcycsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy52aWV3LnNldFN0YXRlKCdjbWRCb29rbWFya3MnLCB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgYWN0aXZlOiB0aGlzLnRhYj09PSdib29rbWFya3MnXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnZpZXcuc2V0U3RhdGUoJ2NtZFRodW1ibmFpbHMnLCB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgYWN0aXZlOiB0aGlzLnRhYj09PSd0aHVtYm5haWxzJ1xyXG4gICAgICB9KTtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+IHRoaXMudGh1bWJuYWlscy5zZXRFbmFibGUodGhpcy52aXNpYmxlICYmIHRoaXMudGFiPT09J3RodW1ibmFpbHMnKSk7XHJcbiAgICAgIHN1cGVyLnVwZGF0ZVZpZXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvVG9jQ29udHJvbGxlci5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvVG9jQ29udHJvbGxlci5qcyIsImltcG9ydCB7JH0gZnJvbSAnLi4vbGlicyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcclxuXHJcbiAgc3RhdGljIGxpbmtTdGF0ZUhhbmRsZXJzID0ge1xyXG4gICAgdmlzaWJsZTogKGN0cmwsIHZhbHVlKT0+IFZpZXcuY2xhc3NQcm9wZXJ0eShjdHJsLCAnaGlkZGVuJywgIXZhbHVlKSxcclxuICAgIGFjdGl2ZTogKGN0cmwsIHZhbHVlKT0+IFZpZXcuY2xhc3NQcm9wZXJ0eShjdHJsLCAnYWN0aXZlJywgdmFsdWUpLFxyXG4gICAgZW5hYmxlOiAoY3RybCwgdmFsdWUpPT4gVmlldy5jbGFzc1Byb3BlcnR5KGN0cmwsICdkaXNhYmxlZCcsICF2YWx1ZSlcclxuICB9O1xyXG5cclxuICBzdGF0aWMgd2lkZ2V0U3RhdGVIYW5kbGVycyA9IHtcclxuICAgIHZpc2libGU6IChjdHJsLCB2YWx1ZSk9PiBWaWV3LmNsYXNzUHJvcGVydHkoY3RybCwgJ2hpZGRlbicsICF2YWx1ZSksXHJcbiAgICBhY3RpdmU6IChjdHJsLCB2YWx1ZSk9PiBWaWV3LmNsYXNzUHJvcGVydHkoY3RybCwgJ2FjdGl2ZScsIHZhbHVlKSxcclxuICAgIGVuYWJsZTogKGN0cmwsIHZhbHVlKT0+IFZpZXcuY2xhc3NQcm9wZXJ0eShjdHJsLCAnZGlzYWJsZWQnLCAhdmFsdWUpXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGlucHV0U3RhdGVIYW5kbGVycyA9IHtcclxuICAgIHZpc2libGU6IChjdHJsLCB2YWx1ZSk9PiBWaWV3LmNsYXNzUHJvcGVydHkoY3RybCwgJ2hpZGRlbicsICF2YWx1ZSksXHJcbiAgICB2YWx1ZTogKGN0cmwsIHZhbHVlKT0+IGN0cmxbMF0udmFsdWUgPSB2YWx1ZSxcclxuICAgIGVuYWJsZTogKGN0cmwsIHZhbHVlKT0+IFZpZXcuYXR0cmlidXRlUHJvcGVydHkoY3RybCwgJ2Rpc2FibGVkJywgIXZhbHVlKVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyB0ZXh0U3RhdGVIYW5kbGVycyA9IHtcclxuICAgIHZpc2libGU6IChjdHJsLCB2YWx1ZSk9PiBWaWV3LmNsYXNzUHJvcGVydHkoY3RybCwgJ2hpZGRlbicsICF2YWx1ZSksXHJcbiAgICB2YWx1ZTogKGN0cmwsIHZhbHVlKT0+IGN0cmwudGV4dCh2YWx1ZSlcclxuICB9O1xyXG5cclxuICBzdGF0aWMgY2xhc3NQcm9wZXJ0eShjdHJsLCBjbGFzc05hbWUsIHZhbHVlKSB7XHJcbiAgICBpZih2YWx1ZSkge1xyXG4gICAgICBjdHJsLmFkZENsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY3RybC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGF0dHJpYnV0ZVByb3BlcnR5KGN0cmwsIGF0dHJpYnV0ZU5hbWUsIHZhbHVlKSB7XHJcbiAgICBpZih2YWx1ZSkge1xyXG4gICAgICBjdHJsLmF0dHIoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlTmFtZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY3RybC5yZW1vdmVBdHRyKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNhbGxIYW5kbGVycyhoYW5kbGVycywgaWQsIGUsIGRhdGEpIHtcclxuICAgIGZvcihsZXQgaGFuZGxlciBvZiBoYW5kbGVycykge1xyXG4gICAgICBpZihoYW5kbGVyW2lkXSkge1xyXG4gICAgICAgIGhhbmRsZXJbaWRdKGUsIGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoaGFuZGxlci5oYW5kbGVEZWZhdWx0KSB7XHJcbiAgICAgICAgaGFuZGxlci5oYW5kbGVEZWZhdWx0KGlkLCBlLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGhhbmRsZUV2ZW50KGlkLCBnZXRIYW5kbGVycywgZSwgZGF0YSkge1xyXG4gICAgVmlldy5jYWxsSGFuZGxlcnMoZ2V0SGFuZGxlcnMoaWQpLCBpZCwgZSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaGFuZGxlTGlua0V2ZW50KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFZpZXcuaGFuZGxlRXZlbnQodGhpcy5pZCwgdGhpcy5nZXRIYW5kbGVycywgZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaGFuZGxlSW5wdXRFdmVudChlKSB7XHJcbiAgICBWaWV3LmhhbmRsZUV2ZW50KHRoaXMuaWQsIHRoaXMuZ2V0SGFuZGxlcnMsIGUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBoYW5kbGVGb3JtRXZlbnQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgVmlldy5oYW5kbGVFdmVudCh0aGlzLmlkLCB0aGlzLmdldEhhbmRsZXJzLCBlKTtcclxuICB9XHJcblxyXG4gIC8vIHZpcnR1YWwgZnVuY3Rpb25zIHtcclxuICBnZXRMaW5rcygpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2lkZ2V0cygpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5wdXRzKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRUZXh0cygpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG5cclxuICBnZXRIYW5kbGVycyhpZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnM7XHJcbiAgfVxyXG4gIC8vIH1cclxuXHJcbiAgY2FsbExhdGVyKGhhbmRsZXJzLCBpZCwgZSwgZGF0YSwgbXMpIHtcclxuICAgIHRoaXMucGVuZGluZ3NbaWRdID0ge1xyXG4gICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICB9O1xyXG4gICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCksIHBlbmRpbmcgPSB0aGlzLnBlbmRpbmdzW2lkXTtcclxuICAgICAgaWYocGVuZGluZyAmJiB0aW1lc3RhbXAtcGVuZGluZy50aW1lc3RhbXA+PW1zKSB7XHJcbiAgICAgICAgVmlldy5jYWxsSGFuZGxlcnMoaGFuZGxlcnMsIGlkLCBlLCBkYXRhKTtcclxuICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nc1tpZF07XHJcbiAgICAgIH1cclxuICAgIH0sIG1zKTtcclxuICB9XHJcblxyXG4gIC8vIGxvYWRGaWxlcyh1cmxzLCByZWFkeSwgZmFpbHVyZSkge1xyXG4gIC8vICAgbGV0IGRvbmUgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAvLyAgIGZvcihsZXQgdXJsIG9mIHVybHMpIHtcclxuICAvLyAgICAgZG9uZSA9IGRvbmUudGhlbigoKT0+IHtcclxuICAvLyAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XHJcbiAgLy8gICAgICAgICAkLmdldCh1cmwsIChyZXMpPT4ge1xyXG4gIC8vICAgICAgICAgICByZWFkeShyZXMsIHVybCk7XHJcbiAgLy8gICAgICAgICAgIHJlc29sdmUoKTtcclxuICAvLyAgICAgICAgIH0pLmZhaWwoKHJlcyk9PiB7XHJcbiAgLy8gICAgICAgICAgIGlmKGZhaWx1cmUgJiYgZmFpbHVyZShyZXMsIHVybCkpIHtcclxuICAvLyAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgLy8gICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgZWxzZSB7XHJcbiAgLy8gICAgICAgICAgICAgcmVqZWN0KHJlcyk7XHJcbiAgLy8gICAgICAgICAgIH1cclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyAgIH1cclxuICAvLyAgIHJldHVybiBkb25lO1xyXG4gIC8vIH1cclxuXHJcbiAgbG9hZEZpbGVzKHVybHMsIGZpbGVzKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xyXG4gICAgZm9yKGxldCBuYW1lIG9mIE9iamVjdC5rZXlzKHVybHMpKSB7XHJcbiAgICAgIGZpbGVzW25hbWVdID0gW107XHJcbiAgICAgIGZvcihsZXQgdXJsIG9mIHVybHNbbmFtZV0pIHtcclxuICAgICAgICB0YXNrcy5wdXNoKFxyXG4gICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XHJcbiAgICAgICAgICAgICQuZ2V0KHVybCwgKGRhdGEpPT4ge1xyXG4gICAgICAgICAgICAgIGZpbGVzW25hbWVdLnB1c2goe3VybCwgZGF0YX0pO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSkuZmFpbCgocmVzKT0+IHtcclxuICAgICAgICAgICAgICByZWplY3QocmVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLmFsbCh0YXNrcyk7XHJcbiAgfVxyXG5cclxuICB1cmxSZXNvbHZlcihiYXNlVXJsLCB1cmwpIHtcclxuICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcbiAgICBpZih1cmwuY2hhckF0KDApIT09Jy8nKSB7XHJcbiAgICAgIGJhc2VVcmwgPSBiYXNlVXJsLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcclxuICAgICAgY29uc3QgcCA9IGJhc2VVcmwubGFzdEluZGV4T2YoJy8nKTtcclxuICAgICAgdXJsID0gKH5wPyBiYXNlVXJsLnN1YnN0cigwLCBwKzEpOiAnJykrdXJsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb25Mb2FkLCB0ZW1wbGF0ZT17fSkge1xyXG4gICAgdGhpcy5wZW5kaW5ncyA9IHt9O1xyXG4gICAgdGhpcy5sb2FkZWRTdHlsZXNoZWV0cyA9IFtdO1xyXG4gICAgdGhpcy5iaW5kcyA9IHt9O1xyXG4gICAgdGhpcy5jb250YWluZXIgPSAkKGNvbnRhaW5lcik7XHJcbiAgICB0aGlzLm9uTG9hZCA9IG9uTG9hZDtcclxuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcclxuXHJcbiAgICBjb25zdCBzY3JpcHQgPSB0ZW1wbGF0ZS5odG1sPyB0ZW1wbGF0ZS5zY3JpcHQ6IHRoaXMuZ2V0VGVtcGxhdGUoKS5zY3JpcHQ7XHJcbiAgICBjb25zdCB1cmxzID0ge1xyXG4gICAgICBzdHlsZXM6IHRlbXBsYXRlLnN0eWxlcyB8fCB0aGlzLmdldFRlbXBsYXRlKCkuc3R5bGVzLFxyXG4gICAgICBodG1sOiBbdGVtcGxhdGUuaHRtbCB8fCB0aGlzLmdldFRlbXBsYXRlKCkuaHRtbF0sXHJcbiAgICAgIHNjcmlwdDogc2NyaXB0PyBbc2NyaXB0XTogW11cclxuICAgIH0sIGZpbGVzID0ge307XHJcblxyXG4gICAgdGhpcy5sb2FkRmlsZXModXJscywgZmlsZXMpLnRoZW4oKCk9PiB7XHJcbiAgICAgIGZvcihsZXQgc3R5bGUgb2YgZmlsZXMuc3R5bGVzKSB7XHJcbiAgICAgICAgbGV0IHRleHRDc3MgPSBzdHlsZS5kYXRhLCB1cmwgPSBzdHlsZS51cmw7XHJcbiAgICAgICAgdGV4dENzcyA9IHRleHRDc3MucmVwbGFjZSgvdXJsXFwoWydcIl0oLio/KVtcIiddXFwpL2csIChyLCByMSk9PiB7XHJcbiAgICAgICAgICByZXR1cm4gWyd1cmwoJywgdGhpcy51cmxSZXNvbHZlcih1cmwsIHIxKSwgJyknXS5qb2luKCcnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvYWRlZFN0eWxlc2hlZXRzLnB1c2goJChgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPiR7dGV4dENzc308L3N0eWxlPmApLmFwcGVuZFRvKCdoZWFkJykpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvbnRhaW5lci5odG1sKGZpbGVzLmh0bWxbMF0uZGF0YSk7XHJcblxyXG4gICAgICBpZihmaWxlcy5zY3JpcHRbMF0pIHtcclxuICAgICAgICBjb25zdCBpbml0ID0gZXZhbChmaWxlcy5zY3JpcHRbMF0uZGF0YSk7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZU9iamVjdCA9IGluaXQodGhpcy5jb250YWluZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxpbmtDb250cm9scyA9IHt9O1xyXG4gICAgICBmb3IobGV0IGlkIG9mIHRoaXMuZ2V0TGlua3MoKSkge1xyXG4gICAgICAgIHRoaXMubGlua0NvbnRyb2xzW2lkXSA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy4nK2lkKTtcclxuICAgICAgICB0aGlzLmJpbmRzW2lkXSA9IFZpZXcuaGFuZGxlTGlua0V2ZW50LmJpbmQoe2dldEhhbmRsZXJzOiB0aGlzLmdldEhhbmRsZXJzLmJpbmQodGhpcyksIGlkfSk7XHJcbiAgICAgICAgdGhpcy5saW5rQ29udHJvbHNbaWRdLm9uKCdjbGljaycsIHRoaXMuYmluZHNbaWRdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy53aWRnZXRDb250cm9scyA9IHt9O1xyXG4gICAgICBmb3IobGV0IGlkIG9mIHRoaXMuZ2V0V2lkZ2V0cygpKSB7XHJcbiAgICAgICAgdGhpcy53aWRnZXRDb250cm9sc1tpZF0gPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuJytpZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaW5wdXRDb250cm9scyA9IHt9O1xyXG4gICAgICBmb3IobGV0IGlkIG9mIHRoaXMuZ2V0SW5wdXRzKCkpIHtcclxuICAgICAgICB0aGlzLmlucHV0Q29udHJvbHNbaWRdID0gdGhpcy5jb250YWluZXIuZmluZCgnLicraWQpO1xyXG4gICAgICAgIHRoaXMuYmluZHNbaWRdID0gVmlldy5oYW5kbGVJbnB1dEV2ZW50LmJpbmQoe2dldEhhbmRsZXJzOiB0aGlzLmdldEhhbmRsZXJzLmJpbmQodGhpcyksIGlkfSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dENvbnRyb2xzW2lkXS5vbigna2V5dXAnLCB0aGlzLmJpbmRzW2lkXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xzID0ge307XHJcbiAgICAgIGZvcihsZXQgaWQgb2YgdGhpcy5nZXRGb3JtcygpKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbHNbaWRdID0gdGhpcy5jb250YWluZXIuZmluZCgnLicraWQpO1xyXG4gICAgICAgIHRoaXMuYmluZHNbaWRdID0gVmlldy5oYW5kbGVGb3JtRXZlbnQuYmluZCh7Z2V0SGFuZGxlcnM6IHRoaXMuZ2V0SGFuZGxlcnMuYmluZCh0aGlzKSwgaWR9KTtcclxuICAgICAgICB0aGlzLmZvcm1Db250cm9sc1tpZF0ub24oJ3N1Ym1pdCcsIHRoaXMuYmluZHNbaWRdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50ZXh0Q29udHJvbHMgPSB7fTtcclxuICAgICAgZm9yKGxldCBpZCBvZiB0aGlzLmdldFRleHRzKCkpIHtcclxuICAgICAgICB0aGlzLnRleHRDb250cm9sc1tpZF0gPSB0aGlzLmNvbnRhaW5lci5maW5kKCcuJytpZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc3RhdGVTZXR0ZXJzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hcDogdGhpcy5saW5rQ29udHJvbHMsXHJcbiAgICAgICAgICBzZXR0ZXI6IHRoaXMuc2V0TGlua0NvbnRyb2xTdGF0ZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtYXA6IHRoaXMud2lkZ2V0Q29udHJvbHMsXHJcbiAgICAgICAgICBzZXR0ZXI6IHRoaXMuc2V0V2lkZ2V0Q29udHJvbFN0YXRlLmJpbmQodGhpcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hcDogdGhpcy5pbnB1dENvbnRyb2xzLFxyXG4gICAgICAgICAgc2V0dGVyOiB0aGlzLnNldElucHV0Q29udHJvbFN0YXRlLmJpbmQodGhpcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hcDogdGhpcy50ZXh0Q29udHJvbHMsXHJcbiAgICAgICAgICBzZXR0ZXI6IHRoaXMuc2V0VGV4dENvbnRyb2xTdGF0ZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgICBdO1xyXG5cclxuICAgICAgdGhpcy5pbml0VmlldygpO1xyXG5cclxuICAgICAgaWYodGhpcy5vbkxvYWQpIHtcclxuICAgICAgICB0aGlzLm9uTG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICB9KS5cclxuICAgIGNhdGNoKChyZXMpPT4gY29uc29sZS5lcnJvcihyZXMpKTtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKSB7XHJcbiAgICBkZWxldGUgdGhpcy50ZXh0Q29udHJvbHM7XHJcbiAgICBmb3IobGV0IGlkIG9mIHRoaXMuZ2V0TGlua3MoKSkge1xyXG4gICAgICB0aGlzLmxpbmtDb250cm9sc1tpZF0ub2ZmKCdjbGljaycsIHRoaXMuYmluZHNbaWRdKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSB0aGlzLmxpbmtDb250cm9scztcclxuICAgIGRlbGV0ZSB0aGlzLndpZGdldENvbnRyb2xzO1xyXG4gICAgZm9yKGxldCBpZCBvZiB0aGlzLmdldElucHV0cygpKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRDb250cm9sc1tpZF0ub2ZmKCdrZXl1cCcsIHRoaXMuYmluZHNbaWRdKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSB0aGlzLmlucHV0Q29udHJvbHM7XHJcbiAgICBmb3IobGV0IGlkIG9mIHRoaXMuZ2V0Rm9ybXMoKSkge1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sc1tpZF0ub2ZmKCdzdWJtaXQnLCB0aGlzLmJpbmRzW2lkXSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGUgdGhpcy5mb3JtQ29udHJvbHM7XHJcblxyXG4gICAgIXRoaXMudGVtcGxhdGVPYmplY3QgfHwgIXRoaXMudGVtcGxhdGVPYmplY3QuZGlzcG9zZSB8fCB0aGlzLnRlbXBsYXRlT2JqZWN0LmRpc3Bvc2UoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmh0bWwoJycpO1xyXG5cclxuICAgIGZvcihsZXQgc3R5bGVzaGVldCBvZiB0aGlzLmxvYWRlZFN0eWxlc2hlZXRzKSB7XHJcbiAgICAgIHN0eWxlc2hlZXQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb250YWluZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJbMF07XHJcbiAgfVxyXG5cclxuICBhZGRIYW5kbGVyKGhhbmRsZXIpIHtcclxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIGluaXRWaWV3KCkge1xyXG5cclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXRDb250cm9sU3RhdGUoY3RybCwgZGVmYXVsdHMsIHN0YXRlLCBzdGF0ZUhhbmRsZXJzKSB7XHJcbiAgICBpZihjdHJsKSB7XHJcbiAgICAgIGNvbnN0IHN0ID0ge1xyXG4gICAgICAgIC4uLmRlZmF1bHRzLFxyXG4gICAgICAgIC4uLnN0YXRlXHJcbiAgICAgIH07XHJcbiAgICAgIGZvcihsZXQgbmFtZSBpbiBzdCkge1xyXG4gICAgICAgIGlmKHN0Lmhhc093blByb3BlcnR5KG5hbWUpICYmIHN0YXRlSGFuZGxlcnNbbmFtZV0pIHtcclxuICAgICAgICAgIHN0YXRlSGFuZGxlcnNbbmFtZV0oY3RybCwgc3RbbmFtZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TGlua0NvbnRyb2xTdGF0ZShpZCwgc3RhdGUpIHtcclxuICAgIFZpZXcuc2V0Q29udHJvbFN0YXRlKFxyXG4gICAgICB0aGlzLmxpbmtDb250cm9sc1tpZF0sXHJcbiAgICAgIHtcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgZW5hYmxlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBWaWV3LmxpbmtTdGF0ZUhhbmRsZXJzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0V2lkZ2V0Q29udHJvbFN0YXRlKGlkLCBzdGF0ZSkge1xyXG4gICAgVmlldy5zZXRDb250cm9sU3RhdGUoXHJcbiAgICAgIHRoaXMud2lkZ2V0Q29udHJvbHNbaWRdLFxyXG4gICAgICB7XHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIGVuYWJsZTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgVmlldy53aWRnZXRTdGF0ZUhhbmRsZXJzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRDb250cm9sU3RhdGUoaWQsIHN0YXRlKSB7XHJcbiAgICBWaWV3LnNldENvbnRyb2xTdGF0ZShcclxuICAgICAgdGhpcy5pbnB1dENvbnRyb2xzW2lkXSxcclxuICAgICAge1xyXG4gICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgVmlldy5pbnB1dFN0YXRlSGFuZGxlcnNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0Q29udHJvbFN0YXRlKGlkLCBzdGF0ZSkge1xyXG4gICAgVmlldy5zZXRDb250cm9sU3RhdGUoXHJcbiAgICAgIHRoaXMudGV4dENvbnRyb2xzW2lkXSxcclxuICAgICAge1xyXG4gICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBWaWV3LnRleHRTdGF0ZUhhbmRsZXJzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtU3RhdGVDaGFuZ2VkKCkge1xyXG5cclxuICB9XHJcblxyXG4gIHNldFN0YXRlKGlkLCBzdGF0ZSkge1xyXG4gICAgZm9yKGxldCBpdGVtIG9mIHRoaXMuc3RhdGVTZXR0ZXJzKSB7XHJcbiAgICAgIGlmKGl0ZW0ubWFwW2lkXSkge1xyXG4gICAgICAgIGl0ZW0uc2V0dGVyKGlkLCBzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5vbkl0ZW1TdGF0ZUNoYW5nZWQoaWQsIHN0YXRlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9WaWV3LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9WaWV3LmpzIiwiaW1wb3J0IHskLCBUSFJFRX0gZnJvbSAnLi4vbGlicyc7XHJcbmltcG9ydCBPcmJpdCBmcm9tICcuL2NvbnRyb2xzL09yYml0JztcclxuaW1wb3J0IFRocmVlTW91c2VFdmVudENvbnZlcnRlciBmcm9tICcuL2NvbnRyb2xzL1RocmVlTW91c2VFdmVudENvbnZlcnRlcic7XHJcbmltcG9ydCBEcmFnIGZyb20gJy4vY29udHJvbHMvRHJhZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXN1YWxXb3JsZCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHduZCwgZG9jLCBjb250YWluZXIsIHVzZUhlbHBlcnM9ZmFsc2UpIHtcclxuICAgIHRoaXMud25kID0gd25kO1xyXG4gICAgdGhpcy5kb2MgPSBkb2M7XHJcbiAgICB0aGlzLmpDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLnJlbmRlckNhbGxiYWNrcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcclxuXHJcbiAgICB0aGlzLnJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcclxuXHJcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoMzAsIHRoaXMuakNvbnRhaW5lci53aWR0aCgpL3RoaXMuakNvbnRhaW5lci5oZWlnaHQoKSwgMC4yLCAyMDAwKTtcclxuICAgIGNvbnN0IHNjYWxlID0gMTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMDtcclxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSA1LjUqc2NhbGU7XHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMDtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FscGhhOiB0cnVlfSk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHgwMDAwMDAsIDApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHRoaXMud25kLmRldmljZVBpeGVsUmF0aW8pO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMuakNvbnRhaW5lci53aWR0aCgpLCB0aGlzLmpDb250YWluZXIuaGVpZ2h0KCkpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50O1xyXG5cclxuICAgIHRoaXMuakNvbnRhaW5lci5hcHBlbmQodGhpcy5lbGVtZW50KTtcclxuXHJcblxyXG5cclxuICAgIHRoaXMuY29udHJvbHMgPSBuZXcgT3JiaXQodGhpcy5jYW1lcmEsIHRoaXMuZWxlbWVudCk7XHJcbiAgICB0aGlzLmNvbnRyb2xzLnRhcmdldC55ID0gMC41O1xyXG5cclxuICAgIHRoaXMudGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XHJcblxyXG4gICAgdGhpcy5zY2VuZS5hZGQobmV3IFRIUkVFLkFtYmllbnRMaWdodCgweEQwRDBEMCkpOy8vMHhDMEMwQzBcclxuXHJcbiAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHg0MDQwNDAsIDEpO1xyXG4gICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQoMCwgNipzY2FsZSwgMCk7XHJcbiAgICB0aGlzLmxpZ2h0LmNhc3RTaGFkb3cgPSBmYWxzZTtcclxuICAgIC8vIGNvbnN0IGQgPSAyMCpzY2FsZTtcclxuICAgIC8vIHRoaXMubGlnaHQuc2hhZG93LmNhbWVyYS5sZWZ0ID0gLWQ7XHJcbiAgICAvLyB0aGlzLmxpZ2h0LnNoYWRvdy5jYW1lcmEucmlnaHQgPSBkO1xyXG4gICAgLy8gdGhpcy5saWdodC5zaGFkb3cuY2FtZXJhLnRvcCA9IGQ7XHJcbiAgICAvLyB0aGlzLmxpZ2h0LnNoYWRvdy5jYW1lcmEuYm90dG9tID0gLWQ7XHJcbiAgICAvLyB0aGlzLmxpZ2h0LnNoYWRvdy5jYW1lcmEubmVhciA9IDEqc2NhbGU7XHJcbiAgICAvLyB0aGlzLmxpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gMjUqc2NhbGU7XHJcbiAgICAvLyB0aGlzLmxpZ2h0LnNoYWRvdy5tYXBTaXplLnggPSAxMDI0O1xyXG4gICAgLy8gdGhpcy5saWdodC5zaGFkb3cubWFwU2l6ZS55ID0gMTAyNDtcclxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xyXG5cclxuICAgIGlmKHVzZUhlbHBlcnMpIHtcclxuICAgICAgdGhpcy5zY2VuZS5hZGQobmV3IFRIUkVFLkF4aXNIZWxwZXIoNSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYmluZHMgPSB7XHJcbiAgICAgIG9uV2luZG93UmVzaXplOiB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyksXHJcbiAgICAgIGFuaW1hdGU6IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpXHJcbiAgICB9O1xyXG5cclxuICAgICQodGhpcy53bmQpLm9uKCdyZXNpemUnLCB0aGlzLmJpbmRzLm9uV2luZG93UmVzaXplKTtcclxuXHJcbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbmV3IFRocmVlTW91c2VFdmVudENvbnZlcnRlcih0aGlzLnduZCwgdGhpcy5kb2MsIHRoaXMpO1xyXG4gICAgdGhpcy5kcmFnID0gbmV3IERyYWcodGhpcy53bmQsIHRoaXMuZG9jLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGUoKTtcclxuICB9XHJcblxyXG4gIGRpc3Bvc2UoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5iaW5kcy5hbmltYXRlO1xyXG4gICAgJCh0aGlzLnduZCkub2ZmKCdyZXNpemUnLCB0aGlzLmJpbmRzLm9uV2luZG93UmVzaXplKTtcclxuICAgIHRoaXMubW91c2VFdmVudHMuZGlzcG9zZSgpO1xyXG4gICAgdGhpcy5kcmFnLmRpc3Bvc2UoKTtcclxuICAgIHRoaXMuY29udHJvbHMuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXh0cmFMaWdodGluZyh2KSB7XHJcbiAgICB0aGlzLmxpZ2h0LmludGVuc2l0eSA9IHY7XHJcbiAgfVxyXG5cclxuICBnZXRPcmJpdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udHJvbHNTdGF0ZShzdGF0ZSkge1xyXG4gICAgdGhpcy5jb250cm9scy5lbmFibGVkID0gc3RhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRDb250cm9sc1N0YXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbHMuZW5hYmxlZDtcclxuICB9XHJcblxyXG4gIG9uV2luZG93UmVzaXplKCkge1xyXG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gdGhpcy5qQ29udGFpbmVyLndpZHRoKCkvdGhpcy5qQ29udGFpbmVyLmhlaWdodCgpO1xyXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMuakNvbnRhaW5lci53aWR0aCgpLCB0aGlzLmpDb250YWluZXIuaGVpZ2h0KCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkT2JqZWN0KG9iamVjdCkge1xyXG4gICAgdGhpcy5zY2VuZS5hZGQob2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZU9iamVjdChvYmplY3QpIHtcclxuICAgIHRoaXMuc2NlbmUucmVtb3ZlKG9iamVjdCk7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlKCkge1xyXG4gICAgaWYodGhpcy5iaW5kcy5hbmltYXRlKSB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmJpbmRzLmFuaW1hdGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGFkZFJlbmRlckNhbGxiYWNrKGNsYikge1xyXG4gICAgdGhpcy5yZW5kZXJDYWxsYmFja3MucHVzaChjbGIpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUmVuZGVyQ2FsbGJhY2soY2xiKSB7XHJcbiAgICBjb25zdCBpID0gdGhpcy5yZW5kZXJDYWxsYmFja3MuaW5kZXhPZihjbGIpO1xyXG4gICAgaWYofmkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJDYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZGVsdGFUaW1lID0gdGhpcy5jbG9jay5nZXREZWx0YSgpO1xyXG4gICAgdGhpcy5jb250cm9scy51cGRhdGUoZGVsdGFUaW1lKTtcclxuICAgIGZvcihsZXQgY2xiIG9mIHRoaXMucmVuZGVyQ2FsbGJhY2tzKSB7XHJcbiAgICAgIGNsYihkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0dlb21ldHJ5KGJ1Zkdlb21ldHJ5LCBtZXNoKSB7XHJcbiAgICBtZXNoLmdlb21ldHJ5ID0gYnVmR2VvbWV0cnk7XHJcbiAgICAvLyBPYnRhaW4gYSBHZW9tZXRyeVxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKS5mcm9tQnVmZmVyR2VvbWV0cnkoYnVmR2VvbWV0cnkpO1xyXG4gICAgLy8gTWVyZ2UgdGhlIHZlcnRpY2VzIHNvIHRoZSB0cmlhbmdsZSBzb3VwIGlzIGNvbnZlcnRlZCB0byBpbmRleGVkIHRyaWFuZ2xlc1xyXG4gICAgZ2VvbWV0cnkubWVyZ2VWZXJ0aWNlcygpO1xyXG4gICAgLy8gQ29udmVydCBhZ2FpbiB0byBCdWZmZXJHZW9tZXRyeSwgaW5kZXhlZFxyXG4gICAgY29uc3QgaW5kZXhlZEJ1ZmZlckdlb20gPSB0aGlzLmNyZWF0ZUluZGV4ZWRCdWZmZXJHZW9tZXRyeUZyb21HZW9tZXRyeShnZW9tZXRyeSk7XHJcbiAgICAvLyBDcmVhdGUgaW5kZXggYXJyYXlzIG1hcHBpbmcgdGhlIGluZGV4ZWQgdmVydGljZXMgdG8gYnVmR2VvbWV0cnkgdmVydGljZXNcclxuICAgIHJldHVybiB0aGlzLm1hcEluZGljZXMoYnVmR2VvbWV0cnksIGluZGV4ZWRCdWZmZXJHZW9tKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUluZGV4ZWRCdWZmZXJHZW9tZXRyeUZyb21HZW9tZXRyeShnZW9tZXRyeSkge1xyXG4gICAgY29uc3QgbnVtVmVydGljZXMgPSBnZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGg7XHJcbiAgICBjb25zdCBudW1GYWNlcyA9IGdlb21ldHJ5LmZhY2VzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBidWZmZXJHZW9tID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkobnVtVmVydGljZXMgKiAzKTtcclxuICAgIGNvbnN0IGluZGljZXMgPSBuZXcgKG51bUZhY2VzICogMyA+IDY1NTM1ID8gVWludDMyQXJyYXkgOiBVaW50MTZBcnJheSkobnVtRmFjZXMgKiAzKTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtVmVydGljZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBwID0gZ2VvbWV0cnkudmVydGljZXNbaV07XHJcbiAgICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcbiAgICAgIHZlcnRpY2VzW2kzXSA9IHAueDtcclxuICAgICAgdmVydGljZXNbaTMgKyAxXSA9IHAueTtcclxuICAgICAgdmVydGljZXNbaTMgKyAyXSA9IHAuejtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtRmFjZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBmID0gZ2VvbWV0cnkuZmFjZXNbaV07XHJcbiAgICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcbiAgICAgIGluZGljZXNbaTNdID0gZi5hO1xyXG4gICAgICBpbmRpY2VzW2kzICsgMV0gPSBmLmI7XHJcbiAgICAgIGluZGljZXNbaTMgKyAyXSA9IGYuYztcclxuICAgIH1cclxuXHJcbiAgICBidWZmZXJHZW9tLnNldEluZGV4KG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoaW5kaWNlcywgMSkpO1xyXG4gICAgYnVmZmVyR2VvbS5hZGRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh2ZXJ0aWNlcywgMykpO1xyXG5cclxuICAgIHJldHVybiBidWZmZXJHZW9tO1xyXG4gIH1cclxuXHJcbiAgaXNFcXVhbCh4MSwgeTEsIHoxLCB4MiwgeTIsIHoyKSB7XHJcbiAgICBjb25zdCBkZWx0YSA9IDAuMDAwMDAxO1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKHgyIC0geDEpIDwgZGVsdGEgJiZcclxuICAgIE1hdGguYWJzKHkyIC0geTEpIDwgZGVsdGEgJiZcclxuICAgIE1hdGguYWJzKHoyIC0gejEpIDwgZGVsdGE7XHJcbiAgfVxyXG5cclxuICBtYXBJbmRpY2VzKGJ1Zkdlb21ldHJ5LCBpbmRleGVkQnVmZmVyR2VvbSkge1xyXG4gICAgLy8gQ3JlYXRlcyBtYXBwZWRWZXJ0aWNlcywgbWFwcGVkSW5kaWNlcyBhbmQgbWFwcGVkQXNzb2NpYXRpb24gaW4gYnVmR2VvbWV0cnlcclxuICAgIGNvbnN0IHZlcnRpY2VzID0gYnVmR2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgIGNvbnN0IGlkeFZlcnRpY2VzID0gaW5kZXhlZEJ1ZmZlckdlb20uYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgIGNvbnN0IGluZGljZXMgPSBpbmRleGVkQnVmZmVyR2VvbS5pbmRleC5hcnJheTtcclxuXHJcbiAgICBjb25zdCBudW1JZHhWZXJ0aWNlcyA9IGlkeFZlcnRpY2VzLmxlbmd0aCAvIDM7XHJcbiAgICBjb25zdCBudW1WZXJ0aWNlcyA9IHZlcnRpY2VzLmxlbmd0aCAvIDM7XHJcblxyXG4gICAgYnVmR2VvbWV0cnkubWFwcGVkVmVydGljZXMgPSBpZHhWZXJ0aWNlcztcclxuICAgIGJ1Zkdlb21ldHJ5Lm1hcHBlZEluZGljZXMgPSBpbmRpY2VzO1xyXG4gICAgYnVmR2VvbWV0cnkubWFwcGVkQXNzb2NpYXRpb24gPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtSWR4VmVydGljZXM7IGkrKykge1xyXG4gICAgICBjb25zdCBhc3NvY2lhdGlvbiA9IFtdO1xyXG4gICAgICBidWZHZW9tZXRyeS5tYXBwZWRBc3NvY2lhdGlvbi5wdXNoKGFzc29jaWF0aW9uKTtcclxuICAgICAgY29uc3QgaTMgPSBpICogMztcclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG51bVZlcnRpY2VzOyBqKyspIHtcclxuICAgICAgICBjb25zdCBqMyA9IGogKiAzO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRXF1YWwoaWR4VmVydGljZXNbaTNdLCBpZHhWZXJ0aWNlc1tpMyArIDFdLCBpZHhWZXJ0aWNlc1tpMyArIDJdLFxyXG4gICAgICAgIHZlcnRpY2VzW2ozXSwgdmVydGljZXNbajMgKyAxXSwgdmVydGljZXNbajMgKyAyXSkpIHtcclxuICAgICAgICAgIGFzc29jaWF0aW9uLnB1c2goajMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt2ZXJ0aWNlczogYnVmR2VvbWV0cnkubWFwcGVkVmVydGljZXMsIGluZGljZXM6IGJ1Zkdlb21ldHJ5Lm1hcHBlZEluZGljZXN9O1xyXG4gIH1cclxuXHJcbiAgb25lTm9kZVBvc2l0aW9uQ2FsbGJhY2socCwgcSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi5zZXQocC54LCBwLnksIHAueik7XHJcbiAgICB0aGlzLnF1YXRlcm5pb24uc2V0KHEueCwgcS55LCBxLnosIHEudyk7XHJcbiAgfVxyXG5cclxuICBtdWx0eU5vZGVQb3NpdGlvbkNhbGxiYWNrKG5vZGUsIHAsIG4pIHtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5nZW9tZXRyeTtcclxuICAgIGNvbnN0IHZvbHVtZVBvc2l0aW9ucyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XHJcbiAgICBjb25zdCB2b2x1bWVOb3JtYWxzID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5ub3JtYWwuYXJyYXk7XHJcbiAgICBjb25zdCBhc3NvY1ZlcnRleCA9IGdlb21ldHJ5Lm1hcHBlZEFzc29jaWF0aW9uW25vZGVdO1xyXG5cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCBhc3NvY1ZlcnRleC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGxldCBpbmRleFZlcnRleCA9IGFzc29jVmVydGV4W2tdO1xyXG4gICAgICAgIHZvbHVtZVBvc2l0aW9uc1tpbmRleFZlcnRleF0gPSBwLng7XHJcbiAgICAgICAgdm9sdW1lTm9ybWFsc1tpbmRleFZlcnRleF0gPSBuLng7XHJcbiAgICAgICAgKytpbmRleFZlcnRleDtcclxuICAgICAgICB2b2x1bWVQb3NpdGlvbnNbaW5kZXhWZXJ0ZXhdID0gcC55O1xyXG4gICAgICAgIHZvbHVtZU5vcm1hbHNbaW5kZXhWZXJ0ZXhdID0gbi55O1xyXG4gICAgICAgICsraW5kZXhWZXJ0ZXg7XHJcbiAgICAgICAgdm9sdW1lUG9zaXRpb25zW2luZGV4VmVydGV4XSA9IHAuejtcclxuICAgICAgICB2b2x1bWVOb3JtYWxzW2luZGV4VmVydGV4XSA9IG4uejtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG11bHR5Tm9kZVBvc2l0aW9uUG9zdENhbGxiYWNrKCkge1xyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmdlb21ldHJ5O1xyXG4gICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwYXRoUG9zaXRpb25DYWxsYmFjayhub2RlLCBwKSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbnMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XHJcblx0XHRsZXQgaSA9IDMgKiBub2RlO1xyXG5cdFx0cG9zaXRpb25zW2krK10gPSBwLng7XHJcblx0XHRwb3NpdGlvbnNbaSsrXSA9IHAueTtcclxuXHRcdHBvc2l0aW9uc1tpXSA9IHAuejtcclxuICB9XHJcblxyXG4gIHBhdGhQb3NpdGlvblBvc3RDYWxsYmFjaygpIHtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5nZW9tZXRyeTtcclxuICAgIGdlb21ldHJ5LmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XHJcbiAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvVmlzdWFsV29ybGQuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL1Zpc3VhbFdvcmxkLmpzIiwiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldENvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3Iodmlldykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRvZ2xlKCkge1xyXG4gICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcclxuICAgIHRoaXMuZmlyZUNoYW5nZSgpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5maXJlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBmaXJlQ2hhbmdlKCkge1xyXG4gICAgaWYodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICBpZih0aGlzLnZpZXcpIHtcclxuICAgICAgdGhpcy52aWV3LnNldFN0YXRlKCd3aWRGbG9hdFduZCcsIHtcclxuICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZTogdGhpcy52aXNpYmxlLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL1dpZGdldENvbnRyb2xsZXIuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9qcy9jbGFzc2VzL1dpZGdldENvbnRyb2xsZXIuanMiLCJpbXBvcnQgeyQsIFRIUkVFfSBmcm9tICcuLi8uLi9saWJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWcge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih3bmQsIGRvYywgdmlzdWFsV29ybGQpIHtcclxuICAgIHRoaXMud25kID0gd25kO1xyXG4gICAgdGhpcy5kb2MgPSBkb2M7XHJcbiAgICB0aGlzLnZpc3VhbCA9IHZpc3VhbFdvcmxkO1xyXG4gICAgdGhpcy5jb29yZHMgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdGhpcy5pbnRlcnNlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG4gICAgdGhpcy5yYXljYXN0ZXIgPSB0aGlzLnZpc3VhbC5yYXljYXN0ZXI7XHJcbiAgICB0aGlzLmNhbWVyYSA9IHRoaXMudmlzdWFsLmNhbWVyYTtcclxuICAgIHRoaXMucGxhbmUgPSBuZXcgVEhSRUUuUGxhbmUoKTtcclxuICAgIHRoaXMudGhyZWVzID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcclxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRyb2xzU3RhdGUgPSB0aGlzLnZpc3VhbC5nZXRDb250cm9sc1N0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy52aXN1YWwucmVuZGVyZXIuZG9tRWxlbWVudDtcclxuICAgIHRoaXMuYmluZHMgPSB7XHJcbiAgICAgIG9uTW91c2VNb3ZlOiB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyksXHJcbiAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyksXHJcbiAgICAgIG9uTW91c2VVcDogdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKVxyXG4gICAgfTtcclxuICAgICQodGhpcy5lbGVtZW50KS5vbignbW91c2Vtb3ZlJywgdGhpcy5iaW5kcy5vbk1vdXNlTW92ZSk7XHJcbiAgICAkKHRoaXMuZWxlbWVudCkub24oJ21vdXNlZG93bicsIHRoaXMuYmluZHMub25Nb3VzZURvd24pO1xyXG4gICAgJCh0aGlzLmRvYykub24oJ21vdXNldXAnLCB0aGlzLmJpbmRzLm9uTW91c2VVcCk7XHJcbiAgfVxyXG5cclxuICBhZGRUaHJlZSh0aHJlZSkge1xyXG4gICAgdGhpcy50aHJlZXMucHVzaCh0aHJlZSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUaHJlZSh0aHJlZSkge1xyXG4gICAgY29uc3QgaSA9IHRoaXMudGhyZWVzLmluZGV4T2YodGhyZWUpO1xyXG4gICAgaWYofmkpIHtcclxuICAgICAgdGhpcy50aHJlZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QaWNrQ2FsbGJhY2soKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uRHJhZ0NhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBvblJlbGVhc2VDYWxsYmFjaygpIHtcclxuXHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgJCh0aGlzLmVsZW1lbnQpLm9mZignbW91c2Vtb3ZlJywgdGhpcy5iaW5kcy5vbk1vdXNlTW92ZSk7XHJcbiAgICAkKHRoaXMuZWxlbWVudCkub2ZmKCdtb3VzZWRvd24nLCB0aGlzLmJpbmRzLm9uTW91c2VEb3duKTtcclxuICAgICQodGhpcy5kb2MpLm9mZignbW91c2V1cCcsIHRoaXMuYmluZHMub25Nb3VzZVVwKTtcclxuICB9XHJcblxyXG4gIHNldENvb3Jkc0Zyb21FdmVudChlKSB7XHJcbiAgICBjb25zdCBqRWxlbWVudCA9ICQodGhpcy5lbGVtZW50KTtcclxuICAgIGNvbnN0IG9mZnNldCA9IGpFbGVtZW50Lm9mZnNldCgpO1xyXG4gICAgdGhpcy5jb29yZHMueCA9ICgoZS5wYWdlWC1vZmZzZXQubGVmdCkvakVsZW1lbnQud2lkdGgoKSkqMi0xO1xyXG4gICAgdGhpcy5jb29yZHMueSA9IC0oKGUucGFnZVktb2Zmc2V0LnRvcCkvakVsZW1lbnQuaGVpZ2h0KCkpKjIrMTtcclxuICAgIHJldHVybiB0aGlzLmNvb3JkcztcclxuICB9XHJcblxyXG4gIG9uTW91c2VEb3duKGUpIHtcclxuICAgIGlmKCF0aGlzLmVuYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICBpZih0aGlzLnNlbGVjdGVkKSB0aGlzLm9uTW91c2VVcChlKTtcclxuXHJcbiAgICB0aGlzLnNldENvb3Jkc0Zyb21FdmVudChlKTtcclxuICBcdHRoaXMucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEodGhpcy5jb29yZHMsIHRoaXMuY2FtZXJhKTtcclxuXHJcbiAgXHRjb25zdCBpbnRlcnNlY3RzID0gdGhpcy5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyh0aGlzLnRocmVlcyk7XHJcbiAgXHRpZihpbnRlcnNlY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBpbnRlcnNlY3RzWzBdLm9iamVjdDtcclxuICAgICAgaWYoIXRoaXMub25QaWNrQ2FsbGJhY2soaW50ZXJzZWN0c1swXSkpIHJldHVybjtcclxuICAgICAgY29uc3QgdiA9IGludGVyc2VjdHNbMF0ucG9pbnQuY2xvbmUoKTtcclxuICAgICAgdGhpcy5kaXN0YW5jZSA9IHYuc3ViKHRoaXMucmF5Y2FzdGVyLnJheS5vcmlnaW4pLmxlbmd0aCgpOztcclxuICAgICAgdGhpcy5jb250cm9sc1N0YXRlID0gdGhpcy52aXN1YWwuZ2V0Q29udHJvbHNTdGF0ZSgpO1xyXG4gICAgICB0aGlzLnZpc3VhbC5zZXRDb250cm9sc1N0YXRlKGZhbHNlKTtcclxuICAgICAgdGhpcy5wbGFuZS5zZXRGcm9tTm9ybWFsQW5kQ29wbGFuYXJQb2ludCh0aGlzLnZpc3VhbC5jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24odGhpcy5wbGFuZS5ub3JtYWwpLCBpbnRlcnNlY3RzWzBdLnBvaW50KTtcclxuICAgICAgLy90aGlzLnBsYW5lLnNldEZyb21Ob3JtYWxBbmRDb3BsYW5hclBvaW50KHRoaXMucGxhbmUubm9ybWFsLnNldCgwLDAsMSksIG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICBcdH1cclxuXHJcbiAgfVxyXG5cclxuICBvbk1vdXNlTW92ZShlKSB7XHJcbiAgICBpZighdGhpcy5lbmFibGVkKSByZXR1cm47XHJcbiAgXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIFx0aWYodGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLnNldENvb3Jkc0Zyb21FdmVudChlKTtcclxuICAgIFx0dGhpcy5yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSh0aGlzLmNvb3JkcywgdGhpcy5jYW1lcmEpO1xyXG5cdCAgICBpZih0aGlzLnJheWNhc3Rlci5yYXkuaW50ZXJzZWN0UGxhbmUodGhpcy5wbGFuZSwgdGhpcy5pbnRlcnNlY3Rpb24pKSB7XHJcbiAgICAgICAgaWYoIXRoaXMub25EcmFnQ2FsbGJhY2sodGhpcy5pbnRlcnNlY3Rpb24pKSB0aGlzLm9uTW91c2VVcChlKTtcclxuICAgICAgfS8qKi9cclxuICAgICAgLy90aGlzLmludGVyc2VjdGlvbi5jb3B5KHRoaXMucmF5Y2FzdGVyLnJheS5kaXJlY3Rpb24pLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKHRoaXMuZGlzdGFuY2UpLmFkZCh0aGlzLnJheWNhc3Rlci5yYXkub3JpZ2luKTsvKiovXHJcbiAgICAgIC8vaWYoIXRoaXMub25EcmFnQ2FsbGJhY2sodGhpcy5zZWxlY3RlZCwgdGhpcy5pbnRlcnNlY3Rpb24pKSB0aGlzLm9uTW91c2VVcChlKTtcclxuICBcdH1cclxuICB9XHJcblxyXG4gIG9uTW91c2VVcChlKSB7XHJcbiAgICBpZih0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMub25SZWxlYXNlQ2FsbGJhY2soKTtcclxuICBcdFx0dGhpcy5zZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgIHRoaXMudmlzdWFsLnNldENvbnRyb2xzU3RhdGUodGhpcy5jb250cm9sc1N0YXRlKTtcclxuICBcdH1cclxuICAgIGlmKCF0aGlzLmVuYWJsZWQpIHJldHVybjtcclxuICBcdGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvY29udHJvbHMvRHJhZy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvY29udHJvbHMvRHJhZy5qcyIsImltcG9ydCB7JH0gZnJvbSAnLi4vLi4vbGlicyc7XHJcbmltcG9ydCBFdmVudENvbnZlcnRlciBmcm9tICcuL0V2ZW50Q29udmVydGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRDb252ZXJ0ZXIgZXh0ZW5kcyBFdmVudENvbnZlcnRlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHduZCwgZG9jLCBlbGVtZW50KSB7XHJcbiAgICBzdXBlcih3bmQsIGRvYyk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuYmluZHMgPSB7XHJcbiAgICAgIGNvbnZlcnQ6IHRoaXMuY29udmVydC5iaW5kKHRoaXMpXHJcbiAgICB9O1xyXG4gICAgJCh0aGlzLmVsZW1lbnQpLm9uKCdtb3VzZW1vdmUgbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBjbGljaycsIHRoaXMuYmluZHMuY29udmVydCk7XHJcbiAgICAkKHRoaXMuZG9jKS5vbignbW91c2V1cCcsIHRoaXMuYmluZHMuY29udmVydCk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgJCh0aGlzLmVsZW1lbnQpLm9mZignbW91c2Vtb3ZlIG1vdXNlZG93biBtb3VzZW92ZXIgbW91c2VvdXQgY2xpY2snLCB0aGlzLmJpbmRzLmNvbnZlcnQpO1xyXG4gICAgJCh0aGlzLmRvYykub2ZmKCdtb3VzZXVwJywgdGhpcy5iaW5kcy5jb252ZXJ0KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9jb250cm9scy9Nb3VzZUV2ZW50Q29udmVydGVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9jb250cm9scy9Nb3VzZUV2ZW50Q29udmVydGVyLmpzIiwiaW1wb3J0IHtUSFJFRX0gZnJvbSAnLi4vLi4vbGlicyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmJpdCBleHRlbmRzIFRIUkVFLkV2ZW50RGlzcGF0Y2hlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9iamVjdCwgZG9tRWxlbWVudCkge1xyXG4gICAgc3VwZXIoKTtcclxuICBcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gIFx0dGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5O1xyXG5cclxuICBcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxyXG4gIFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgXHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcclxuICBcdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgXHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dChQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5KVxyXG4gIFx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XHJcbiAgXHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XHJcblxyXG4gIFx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dChPcnRob2dyYXBoaWNDYW1lcmEgb25seSlcclxuICBcdHRoaXMubWluWm9vbSA9IDA7XHJcbiAgXHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcclxuXHJcbiAgXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cclxuICBcdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxyXG4gIFx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xyXG4gIFx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xyXG5cclxuICBcdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXHJcbiAgXHQvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFstTWF0aC5QSSwgTWF0aC5QSSBdLlxyXG4gIFx0dGhpcy5taW5BemltdXRoQW5nbGUgPSAtSW5maW5pdHk7IC8vIHJhZGlhbnNcclxuICBcdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcclxuXHJcbiAgXHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcclxuICBcdC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXHJcbiAgXHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcclxuICBcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XHJcblxyXG4gIFx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cclxuICBcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcclxuICBcdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XHJcbiAgXHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcclxuXHJcbiAgXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xyXG4gIFx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gIFx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcclxuXHJcbiAgXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXHJcbiAgXHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XHJcblxyXG4gIFx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcclxuICBcdC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxyXG4gIFx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XHJcbiAgXHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcclxuXHJcbiAgXHQvLyBmb3IgcmVzZXRcclxuICBcdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XHJcbiAgXHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgXHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcclxuXHJcbiAgXHQvL1xyXG4gIFx0Ly8gcHVibGljIG1ldGhvZHNcclxuICBcdC8vXHJcbiAgXHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgXHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xyXG4gIFx0fTtcclxuXHJcbiAgXHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xyXG4gIFx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xyXG4gIFx0fTtcclxuXHJcbiAgXHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gIFx0XHRzY29wZS50YXJnZXQuY29weShzY29wZS50YXJnZXQwKTtcclxuICBcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoc2NvcGUucG9zaXRpb24wKTtcclxuICBcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcclxuXHJcbiAgXHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xyXG5cclxuICBcdFx0c2NvcGUudXBkYXRlKCk7XHJcbiAgXHR9O1xyXG5cclxuICAgIHRoaXMuem9vbU91dCA9IGZ1bmN0aW9uKHNwZWVkPXRoaXMuem9vbVNwZWVkKSB7XHJcbiAgICAgIGNvbnN0IF9zcGVlZCA9IHRoaXMuem9vbVNwZWVkO1xyXG4gICAgICB0aGlzLnpvb21TcGVlZCA9IHNwZWVkO1xyXG4gICAgICBkb2xseUluKGdldFpvb21TY2FsZSgpKTtcclxuICAgICAgdGhpcy56b29tU3BlZWQgPSBfc3BlZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuem9vbUluID0gZnVuY3Rpb24oc3BlZWQ9dGhpcy56b29tU3BlZWQpIHtcclxuICAgICAgY29uc3QgX3NwZWVkID0gdGhpcy56b29tU3BlZWQ7XHJcbiAgICAgIHRoaXMuem9vbVNwZWVkID0gc3BlZWQ7XHJcbiAgICAgIGRvbGx5T3V0KGdldFpvb21TY2FsZSgpKTtcclxuICAgICAgdGhpcy56b29tU3BlZWQgPSBfc3BlZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0U2NhbGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U2NhbGUgPSBmdW5jdGlvbihuZXdTY2FsZSkge1xyXG4gICAgICBzY2FsZSA9IG5ld1NjYWxlO1xyXG4gICAgfVxyXG5cclxuICBcdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXHJcbiAgXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gIFx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICBcdFx0Ly8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXHJcbiAgXHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMob2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSk7XHJcbiAgXHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XHJcbiAgXHRcdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG4gIFx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG5cclxuICBcdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XHJcbiAgXHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xyXG4gIFx0XHRcdG9mZnNldC5jb3B5KHBvc2l0aW9uKS5zdWIoc2NvcGUudGFyZ2V0KTtcclxuICBcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2VcclxuICBcdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKHF1YXQpO1xyXG4gIFx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcclxuICBcdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMob2Zmc2V0KTtcclxuICBcdFx0XHRpZihzY29wZS5hdXRvUm90YXRlKSB7XHJcbiAgXHRcdFx0XHRyb3RhdGVMZWZ0KGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkpO1xyXG4gIFx0XHRcdH1cclxuICBcdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XHJcbiAgXHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XHJcbiAgXHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xyXG4gIFx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KHNjb3BlLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oc2NvcGUubWF4QXppbXV0aEFuZ2xlLCBzcGhlcmljYWwudGhldGEpKTtcclxuICBcdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xyXG4gIFx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heChzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbihzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpKSk7XHJcbiAgXHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XHJcbiAgXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcclxuICBcdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xyXG4gIFx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heChzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMpKTtcclxuICBcdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cclxuICBcdFx0XHRzY29wZS50YXJnZXQuYWRkKHBhbk9mZnNldCk7XHJcbiAgXHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoc3BoZXJpY2FsKTtcclxuICBcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2VcclxuICBcdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKHF1YXRJbnZlcnNlKTtcclxuICBcdFx0XHRwb3NpdGlvbi5jb3B5KHNjb3BlLnRhcmdldCkuYWRkKG9mZnNldCk7XHJcbiAgXHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdChzY29wZS50YXJnZXQpO1xyXG5cclxuICBcdFx0XHRpZihzY29wZS5lbmFibGVEYW1waW5nPT09dHJ1ZSkge1xyXG4gIFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgKj0oMS1zY29wZS5kYW1waW5nRmFjdG9yKTtcclxuICBcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSgxLXNjb3BlLmRhbXBpbmdGYWN0b3IpO1xyXG4gIFx0XHRcdH0gZWxzZSB7XHJcbiAgXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoMCwgMCwgMCk7XHJcbiAgXHRcdFx0fVxyXG5cclxuICBcdFx0XHRzY2FsZSA9IDE7XHJcbiAgXHRcdFx0cGFuT2Zmc2V0LnNldCgwLCAwLCAwKTtcclxuXHJcbiAgXHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcclxuICBcdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcclxuICBcdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMS14XjIgLyA4XHJcblxyXG4gIFx0XHRcdGlmKHpvb21DaGFuZ2VkIHx8XHJcbiAgXHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoc2NvcGUub2JqZWN0LnBvc2l0aW9uKSA+IEVQUyB8fFxyXG4gIFx0XHRcdFx0OCAqKDEtbGFzdFF1YXRlcm5pb24uZG90KHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uKSkgPiBFUFMpIHtcclxuXHJcbiAgXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcclxuXHJcbiAgXHRcdFx0XHRsYXN0UG9zaXRpb24uY29weShzY29wZS5vYmplY3QucG9zaXRpb24pO1xyXG4gIFx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weShzY29wZS5vYmplY3QucXVhdGVybmlvbik7XHJcbiAgXHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICBcdFx0XHRcdHJldHVybiB0cnVlO1xyXG4gIFx0XHRcdH1cclxuICBcdFx0XHRyZXR1cm4gZmFsc2U7XHJcbiAgXHRcdH07XHJcbiAgXHR9KCk7XHJcblxyXG4gICAgdGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgXHQvL1xyXG4gIFx0Ly8gaW50ZXJuYWxzXHJcbiAgXHQvL1xyXG4gIFx0dmFyIHNjb3BlID0gdGhpcztcclxuICBcdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcclxuICBcdHZhciBFUFMgPSAxZS02O1xyXG4gIFx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcclxuICBcdHZhciBzcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XHJcbiAgXHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XHJcblxyXG4gIFx0dmFyIHNjYWxlID0gMTtcclxuICBcdHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG4gIFx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gIFx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XHJcbiAgXHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XHJcbiAgXHR9XHJcblxyXG4gIFx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xyXG4gIFx0XHRyZXR1cm4gTWF0aC5wb3coMC45NSwgc2NvcGUuem9vbVNwZWVkKTtcclxuICBcdH1cclxuXHJcbiAgXHRmdW5jdGlvbiByb3RhdGVMZWZ0KGFuZ2xlKSB7XHJcbiAgXHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xyXG4gIFx0fVxyXG5cclxuICBcdGZ1bmN0aW9uIHJvdGF0ZVVwKGFuZ2xlKSB7XHJcbiAgXHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcclxuICBcdH1cclxuXHJcbiAgXHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uKCkge1xyXG4gIFx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbiAgXHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KGRpc3RhbmNlLCBvYmplY3RNYXRyaXgpIHtcclxuICBcdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4ob2JqZWN0TWF0cml4LCAwKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxyXG4gIFx0XHRcdHYubXVsdGlwbHlTY2FsYXIoLSBkaXN0YW5jZSk7XHJcbiAgXHRcdFx0cGFuT2Zmc2V0LmFkZCh2KTtcclxuICBcdFx0fTtcclxuICBcdH0oKTtcclxuXHJcbiAgXHR2YXIgcGFuVXAgPSBmdW5jdGlvbigpIHtcclxuICBcdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG4gIFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoZGlzdGFuY2UsIG9iamVjdE1hdHJpeCkge1xyXG4gIFx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbihvYmplY3RNYXRyaXgsIDEpOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XHJcbiAgXHRcdFx0di5tdWx0aXBseVNjYWxhcihkaXN0YW5jZSk7XHJcbiAgXHRcdFx0cGFuT2Zmc2V0LmFkZCh2KTtcclxuICBcdFx0fTtcclxuICBcdH0oKTtcclxuXHJcbiAgXHQvLyBkZWx0YVggYW5kIGRlbHRhWSBhcmUgaW4gcGl4ZWxzOyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcclxuICBcdHNjb3BlLnBhbiA9IGZ1bmN0aW9uKCkge1xyXG4gIFx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICBcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbihkZWx0YVgsIGRlbHRhWSkge1xyXG4gIFx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudDtcclxuICBcdFx0XHRpZihzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSkge1xyXG4gIFx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcclxuICBcdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcclxuICBcdFx0XHRcdG9mZnNldC5jb3B5KHBvc2l0aW9uKS5zdWIoc2NvcGUudGFyZ2V0KTtcclxuICBcdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcclxuICBcdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxyXG4gIFx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oKHNjb3BlLm9iamVjdC5mb3YgLyAyKSAqIE1hdGguUEkgLyAxODAuMCk7XHJcbiAgXHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XHJcbiAgXHRcdFx0XHRwYW5MZWZ0KDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4KTtcclxuICBcdFx0XHRcdHBhblVwKDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4KTtcclxuICBcdFx0XHR9IGVsc2UgaWYoc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKSB7XHJcbiAgXHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcclxuICBcdFx0XHRcdHBhbkxlZnQoZGVsdGFYICooc2NvcGUub2JqZWN0LnJpZ2h0LXNjb3BlLm9iamVjdC5sZWZ0KSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCk7XHJcbiAgXHRcdFx0XHRwYW5VcChkZWx0YVkgKihzY29wZS5vYmplY3QudG9wLXNjb3BlLm9iamVjdC5ib3R0b20pIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCk7XHJcbiAgXHRcdFx0fSBlbHNlIHtcclxuICBcdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcclxuICBcdFx0XHRcdGNvbnNvbGUud2FybignV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlLXBhbiBkaXNhYmxlZC4nKTtcclxuICBcdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xyXG4gIFx0XHRcdH1cclxuICBcdFx0fTtcclxuICBcdH0oKTtcclxuXHJcbiAgXHRmdW5jdGlvbiBkb2xseUluKGRvbGx5U2NhbGUpIHtcclxuICAgICAgaWYoc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEpIHtcclxuICBcdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xyXG4gIFx0XHR9IGVsc2UgaWYoc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKSB7XHJcbiAgXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heChzY29wZS5taW5ab29tLCBNYXRoLm1pbihzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUpKTtcclxuICBcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gIFx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcclxuICBcdFx0fSBlbHNlIHtcclxuICBcdFx0XHRjb25zb2xlLndhcm4oJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZS1kb2xseS96b29tIGRpc2FibGVkLicpO1xyXG4gIFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcclxuICBcdFx0fVxyXG4gIFx0fVxyXG5cclxuICBcdGZ1bmN0aW9uIGRvbGx5T3V0KGRvbGx5U2NhbGUpIHtcclxuICAgICAgaWYoc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEpIHtcclxuICBcdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xyXG4gIFx0XHR9IGVsc2UgaWYoc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKSB7XHJcbiAgXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heChzY29wZS5taW5ab29tLCBNYXRoLm1pbihzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUpKTtcclxuICBcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gIFx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcclxuICBcdFx0fSBlbHNlIHtcclxuICBcdFx0XHRjb25zb2xlLndhcm4oJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZS1kb2xseS96b29tIGRpc2FibGVkLicpO1xyXG4gIFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcclxuICBcdFx0fVxyXG4gIFx0fVxyXG5cclxuICAgIC8qIEFjdGlvbnMgKi9cclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGUoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgaWYoc2NvcGUuZW5hYmxlZCAmJiBzY29wZS5lbmFibGVSb3RhdGUgJiYgZGF0YS5zdGF0ZT09PSdtb3ZlJykge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudDtcclxuICAgICAgICAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXHJcbiAgICAgICAgcm90YXRlTGVmdCgyICogTWF0aC5QSSAqIGRhdGEuZHggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQpO1xyXG4gICAgICAgIC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxyXG4gICAgICAgIHJvdGF0ZVVwKDIgKiBNYXRoLlBJICogZGF0YS5keSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQpO1xyXG4gICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFuKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgIGlmKHNjb3BlLmVuYWJsZWQgJiYgc2NvcGUuZW5hYmxlUGFuICYmIGRhdGEuc3RhdGU9PT0nbW92ZScpIHtcclxuICAgICAgICBzY29wZS5wYW4oZGF0YS5keCwgZGF0YS5keSk7XHJcbiAgICAgICAgc2NvcGUudXBkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXREb2xseShldmVudCwgZGF0YSkge1xyXG4gICAgICBpZihzY29wZS5lbmFibGVkICYmIHNjb3BlLmVuYWJsZVpvb20gJiYgZGF0YS5zdGF0ZT09PSdtb3ZlJykge1xyXG4gICAgICAgIGlmKGRhdGEuZHk+MCkge1xyXG4gICAgICAgICAgZG9sbHlJbihnZXRab29tU2NhbGUoKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGRhdGEuZHk8MCkge1xyXG4gICAgICAgICAgZG9sbHlPdXQoZ2V0Wm9vbVNjYWxlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY29wZS51cGRhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdoZWVsRG9sbHkoZXZlbnQpIHtcclxuICAgICAgaWYoc2NvcGUuZW5hYmxlZCAmJiBzY29wZS5lbmFibGVab29tKSB7XHJcbiAgICAgICAgaWYoZXZlbnQuZGVsdGFZPjApIHtcclxuICAgICAgICAgIGRvbGx5T3V0KGdldFpvb21TY2FsZSgpKTtcclxuICAgICAgICB9IGVsc2UgaWYoZXZlbnQuZGVsdGFZPDApIHtcclxuICAgICAgICAgIGRvbGx5SW4oZ2V0Wm9vbVNjYWxlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY29wZS51cGRhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWN0aW9ucyA9IHtcclxuICAgICAgcm90YXRlLFxyXG4gICAgICBwYW4sXHJcbiAgICAgIG9mZnNldERvbGx5LFxyXG4gICAgICB3aGVlbERvbGx5XHJcbiAgICB9XHJcblxyXG4gIFx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XHJcbiAgXHR0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY2xhc3Nlcy9jb250cm9scy9PcmJpdC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvY29udHJvbHMvT3JiaXQuanMiLCJpbXBvcnQge1RIUkVFLCAkfSBmcm9tICcuLi8uLi9saWJzJztcclxuaW1wb3J0IE1vdXNlRXZlbnRDb252ZXJ0ZXIgZnJvbSAnLi9Nb3VzZUV2ZW50Q29udmVydGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlTW91c2VFdmVudENvbnZlcnRlciBleHRlbmRzIE1vdXNlRXZlbnRDb252ZXJ0ZXIge1xyXG5cclxuICBzdGF0aWMgb2JqZWN0c1Rlc3Qob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgcmV0dXJuIG9iamVjdDEgJiYgb2JqZWN0Mj8gb2JqZWN0MS5vYmplY3Q9PT1vYmplY3QyLm9iamVjdDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgb2JqZWN0c0FuZEZhY2VzVGVzdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gb2JqZWN0MSAmJiBvYmplY3QyPyBvYmplY3QxLm9iamVjdD09PW9iamVjdDIub2JqZWN0ICYmIG9iamVjdDEuZmFjZS5tYXRlcmlhbEluZGV4PT09b2JqZWN0Mi5mYWNlLm1hdGVyaWFsSW5kZXg6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iod25kLCBkb2MsIHZpc3VhbFdvcmxkLCB0ZXN0PVRocmVlTW91c2VFdmVudENvbnZlcnRlci5vYmplY3RzQW5kRmFjZXNUZXN0KSB7XHJcbiAgICBzdXBlcih3bmQsIGRvYywgdmlzdWFsV29ybGQucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy52aXN1YWwgPSB2aXN1YWxXb3JsZDtcclxuICAgIHRoaXMuY29vcmRzID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHRoaXMucmF5Y2FzdGVyID0gdGhpcy52aXN1YWwucmF5Y2FzdGVyO1xyXG4gICAgdGhpcy5jYW1lcmEgPSB0aGlzLnZpc3VhbC5jYW1lcmE7XHJcbiAgICB0aGlzLnRocmVlcyA9IFtdO1xyXG4gICAgdGhpcy50ZXN0ID0gdGVzdDtcclxuICB9XHJcblxyXG4gIGdldENhbGxiYWNrKG9iamVjdCkge1xyXG4gICAgcmV0dXJuIG9iamVjdC5vYmplY3QudXNlckRhdGEubW91c2VDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIGFkZFRocmVlKHRocmVlKSB7XHJcbiAgICB0aGlzLnRocmVlcy5wdXNoKHRocmVlKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRocmVlKHRocmVlKSB7XHJcbiAgICBjb25zdCBpID0gdGhpcy50aHJlZXMuaW5kZXhPZih0aHJlZSk7XHJcbiAgICBpZih+aSkge1xyXG4gICAgICB0aGlzLnRocmVlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDb29yZHNGcm9tRXZlbnQoZSkge1xyXG4gICAgY29uc3QgakVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudCk7XHJcbiAgICBjb25zdCBvZmZzZXQgPSBqRWxlbWVudC5vZmZzZXQoKTtcclxuICAgIHRoaXMuY29vcmRzLnggPSAoKGUucGFnZVgtb2Zmc2V0LmxlZnQpL2pFbGVtZW50LndpZHRoKCkpKjItMTtcclxuICAgIHRoaXMuY29vcmRzLnkgPSAtKChlLnBhZ2VZLW9mZnNldC50b3ApL2pFbGVtZW50LmhlaWdodCgpKSoyKzE7XHJcbiAgICByZXR1cm4gdGhpcy5jb29yZHM7XHJcbiAgfVxyXG5cclxuICBnZXRPYmplY3QoZSkge1xyXG4gICAgdGhpcy5zZXRDb29yZHNGcm9tRXZlbnQoZSk7XHJcbiAgICB0aGlzLnJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHRoaXMuY29vcmRzLCB0aGlzLmNhbWVyYSk7XHJcbiAgICBjb25zdCBpbnRlcnNlY3RzID0gdGhpcy5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyh0aGlzLnRocmVlcyk7XHJcbiAgICByZXR1cm4gaW50ZXJzZWN0c1swXTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2NsYXNzZXMvY29udHJvbHMvVGhyZWVNb3VzZUV2ZW50Q29udmVydGVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9jb250cm9scy9UaHJlZU1vdXNlRXZlbnRDb252ZXJ0ZXIuanMiLCJpbXBvcnQgVGFyZ2V0IGZyb20gJy4vVGFyZ2V0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZVRhcmdldCBleHRlbmRzIFRhcmdldCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnAgPSB7XHJcbiAgICAgIHgsXHJcbiAgICAgIHksXHJcbiAgICAgIHJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB0ZXN0SW50ZXJzZWN0aW9uKGUsIGRhdGEpIHtcclxuICAgIGxldCByZXM7XHJcbiAgICBjb25zdCB7eCwgeX0gPSBkYXRhLCBwID0gdGhpcy5wO1xyXG4gICAgaWYoKHgtcC54KSooeC1wLngpKyh5LXAueSkqKHktcC55KTw9cC5yKnAucikge1xyXG4gICAgICByZXMgPSB7XHJcbiAgICAgICAgdGFyZ2V0OiB0aGlzLFxyXG4gICAgICAgIGRhdGFcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL2NvbnRyb2xzL3RhcmdldHMvQ2lyY2xlVGFyZ2V0LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvY2xhc3Nlcy9jb250cm9scy90YXJnZXRzL0NpcmNsZVRhcmdldC5qcyIsImltcG9ydCBUYXJnZXQgZnJvbSAnLi9UYXJnZXQnO1xyXG5pbXBvcnQgQmFzZU1hdGhVdGlscyBmcm9tICcuLi8uLi9CYXNlTWF0aFV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlUYXJnZXQgZXh0ZW5kcyBUYXJnZXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwb2x5KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5wb2x5ID0gcG9seTtcclxuICB9XHJcblxyXG4gIHRlc3RJbnRlcnNlY3Rpb24oZSwgcCkge1xyXG4gICAgcmV0dXJuIEJhc2VNYXRoVXRpbHMuaXNJbnNpZGVQb2x5KHRoaXMucG9seSwgcCk/IHtcclxuICAgICAgdGFyZ2V0OiB0aGlzLFxyXG4gICAgICBkYXRhOiBwXHJcbiAgICB9OiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9jbGFzc2VzL2NvbnRyb2xzL3RhcmdldHMvUG9seVRhcmdldC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2pzL2NsYXNzZXMvY29udHJvbHMvdGFyZ2V0cy9Qb2x5VGFyZ2V0LmpzIiwiY29uc3QgbW91c2VCdXR0b25zID0ge1xyXG4gIExlZnQ6IDAsXHJcbiAgTWlkZGxlOiAxLFxyXG4gIFJpZ2h0OiAyXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvcHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGVwczogMWUtNCxcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgIGRlZmF1bHQ6IDAuOSxcclxuICAgICAgbWluOiAwLjksXHJcbiAgICAgIG1heDogMi41LFxyXG4gICAgICBsZXZlbHM6IDdcclxuICAgIH0sXHJcbiAgICBsaWdodGluZzoge1xyXG4gICAgICBkZWZhdWx0OiAwLjcsXHJcbiAgICAgIG1pbjogMCxcclxuICAgICAgbWF4OiAxLFxyXG4gICAgICBsZXZlbHM6IDdcclxuICAgIH0sXHJcbiAgICBwYW46IHtcclxuICAgICAgc3BlZWQ6IDUwXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICBjbWRab29tSW46IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBjbWRab29tT3V0OiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBjbWREZWZhdWx0Wm9vbToge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgdHlwZTogJ2RibGNsaWNrJyxcclxuICAgICAgICBjb2RlOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGNtZFRvYzoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgY21kRmFzdEJhY2t3YXJkOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgY21kQmFja3dhcmQ6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNtZEZvcndhcmQ6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNtZEZhc3RGb3J3YXJkOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgY21kU2F2ZToge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgY21kUHJpbnQ6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNtZEZ1bGxTY3JlZW46IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHdpZFNldHRpbmdzOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRTbWFydFBhbjoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBjbWRTaW5nbGVQYWdlOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIGFjdGl2ZUZvck1vYmlsZTogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgY21kU291bmRzOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBhY3RpdmU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgY21kU3RhdHM6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgY21kTGlnaHRpbmdVcDoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgY21kTGlnaHRpbmdEb3duOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRQYW5MZWZ0OiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgY21kUGFuUmlnaHQ6IHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBjbWRQYW5VcDoge1xyXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNtZFBhbkRvd246IHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VzZUNtZFJvdGF0ZToge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgdHlwZTogJ21vdXNlZHJhZycsXHJcbiAgICAgICAgY29kZTogbW91c2VCdXR0b25zLlJpZ2h0XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdXNlQ21kRHJhZ1pvb206IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICdtb3VzZWRyYWcnLFxyXG4gICAgICAgIGNvZGU6IG1vdXNlQnV0dG9ucy5NaWRkbGVcclxuICAgICAgfSxcclxuICAgICAgbW91c2VDbWRQYW46IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICdtb3VzZWRyYWcnLFxyXG4gICAgICAgIGNvZGU6IG1vdXNlQnV0dG9ucy5MZWZ0XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdXNlQ21kV2hlZWxab29tOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICB0eXBlOiAnbW91c2V3aGVlbCcsXHJcbiAgICAgICAgY29kZTogMFxyXG4gICAgICB9LFxyXG4gICAgICB0b3VjaENtZFJvdGF0ZToge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgdHlwZTogJ3RvdWNoZHJhZycsXHJcbiAgICAgICAgY29kZTogM1xyXG4gICAgICB9LFxyXG4gICAgICB0b3VjaENtZFpvb206IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICd0b3VjaGRyYWcnLFxyXG4gICAgICAgIGNvZGU6IDJcclxuICAgICAgfSxcclxuICAgICAgdG91Y2hDbWRQYW46IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIHR5cGU6ICd0b3VjaGRyYWcnLFxyXG4gICAgICAgIGNvZGU6IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL3Byb3BzL2Jvb2tDb250cm9sbGVyLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vanMvcHJvcHMvYm9va0NvbnRyb2xsZXIuanMiLCIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgZGVmaW5lID0gZmFsc2U7XG5cbi8qIVxuICogalF1ZXJ5IE1vdXNld2hlZWwgMy4xLjEzXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTIHN0eWxlIGZvciBCcm93c2VyaWZ5XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cbn0oZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciB0b0ZpeCAgPSBbJ3doZWVsJywgJ21vdXNld2hlZWwnLCAnRE9NTW91c2VTY3JvbGwnLCAnTW96TW91c2VQaXhlbFNjcm9sbCddLFxuICAgICAgICB0b0JpbmQgPSAoICdvbndoZWVsJyBpbiBkb2N1bWVudCB8fCBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gOSApID9cbiAgICAgICAgICAgICAgICAgICAgWyd3aGVlbCddIDogWydtb3VzZXdoZWVsJywgJ0RvbU1vdXNlU2Nyb2xsJywgJ01vek1vdXNlUGl4ZWxTY3JvbGwnXSxcbiAgICAgICAgc2xpY2UgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLFxuICAgICAgICBudWxsTG93ZXN0RGVsdGFUaW1lb3V0LCBsb3dlc3REZWx0YTtcblxuICAgIGlmICggJC5ldmVudC5maXhIb29rcyApIHtcbiAgICAgICAgZm9yICggdmFyIGkgPSB0b0ZpeC5sZW5ndGg7IGk7ICkge1xuICAgICAgICAgICAgJC5ldmVudC5maXhIb29rc1sgdG9GaXhbLS1pXSBdID0gJC5ldmVudC5tb3VzZUhvb2tzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNwZWNpYWwgPSAkLmV2ZW50LnNwZWNpYWwubW91c2V3aGVlbCA9IHtcbiAgICAgICAgdmVyc2lvbjogJzMuMS4xMicsXG5cbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCB0aGlzLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG4gICAgICAgICAgICAgICAgZm9yICggdmFyIGkgPSB0b0JpbmQubGVuZ3RoOyBpOyApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCB0b0JpbmRbLS1pXSwgaGFuZGxlciwgZmFsc2UgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub25tb3VzZXdoZWVsID0gaGFuZGxlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBsaW5lIGhlaWdodCBhbmQgcGFnZSBoZWlnaHQgZm9yIHRoaXMgcGFydGljdWxhciBlbGVtZW50XG4gICAgICAgICAgICAkLmRhdGEodGhpcywgJ21vdXNld2hlZWwtbGluZS1oZWlnaHQnLCBzcGVjaWFsLmdldExpbmVIZWlnaHQodGhpcykpO1xuICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdtb3VzZXdoZWVsLXBhZ2UtaGVpZ2h0Jywgc3BlY2lhbC5nZXRQYWdlSGVpZ2h0KHRoaXMpKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciApIHtcbiAgICAgICAgICAgICAgICBmb3IgKCB2YXIgaSA9IHRvQmluZC5sZW5ndGg7IGk7ICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHRvQmluZFstLWldLCBoYW5kbGVyLCBmYWxzZSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbm1vdXNld2hlZWwgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIGRhdGEgd2UgYWRkZWQgdG8gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICQucmVtb3ZlRGF0YSh0aGlzLCAnbW91c2V3aGVlbC1saW5lLWhlaWdodCcpO1xuICAgICAgICAgICAgJC5yZW1vdmVEYXRhKHRoaXMsICdtb3VzZXdoZWVsLXBhZ2UtaGVpZ2h0Jyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TGluZUhlaWdodDogZnVuY3Rpb24oZWxlbSkge1xuICAgICAgICAgICAgdmFyICRlbGVtID0gJChlbGVtKSxcbiAgICAgICAgICAgICAgICAkcGFyZW50ID0gJGVsZW1bJ29mZnNldFBhcmVudCcgaW4gJC5mbiA/ICdvZmZzZXRQYXJlbnQnIDogJ3BhcmVudCddKCk7XG4gICAgICAgICAgICBpZiAoISRwYXJlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJHBhcmVudCA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCgkcGFyZW50LmNzcygnZm9udFNpemUnKSwgMTApIHx8IHBhcnNlSW50KCRlbGVtLmNzcygnZm9udFNpemUnKSwgMTApIHx8IDE2O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFBhZ2VIZWlnaHQ6IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAkKGVsZW0pLmhlaWdodCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBhZGp1c3RPbGREZWx0YXM6IHRydWUsIC8vIHNlZSBzaG91bGRBZGp1c3RPbGREZWx0YXMoKSBiZWxvd1xuICAgICAgICAgICAgbm9ybWFsaXplT2Zmc2V0OiB0cnVlICAvLyBjYWxscyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZm9yIGVhY2ggZXZlbnRcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLmZuLmV4dGVuZCh7XG4gICAgICAgIG1vdXNld2hlZWw6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4gPyB0aGlzLmJpbmQoJ21vdXNld2hlZWwnLCBmbikgOiB0aGlzLnRyaWdnZXIoJ21vdXNld2hlZWwnKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1bm1vdXNld2hlZWw6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51bmJpbmQoJ21vdXNld2hlZWwnLCBmbik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgICB2YXIgb3JnRXZlbnQgICA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudCxcbiAgICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBkZWx0YSAgICAgID0gMCxcbiAgICAgICAgICAgIGRlbHRhWCAgICAgPSAwLFxuICAgICAgICAgICAgZGVsdGFZICAgICA9IDAsXG4gICAgICAgICAgICBhYnNEZWx0YSAgID0gMCxcbiAgICAgICAgICAgIG9mZnNldFggICAgPSAwLFxuICAgICAgICAgICAgb2Zmc2V0WSAgICA9IDA7XG4gICAgICAgIGV2ZW50ID0gJC5ldmVudC5maXgob3JnRXZlbnQpO1xuICAgICAgICBldmVudC50eXBlID0gJ21vdXNld2hlZWwnO1xuXG4gICAgICAgIC8vIE9sZCBzY2hvb2wgc2Nyb2xsd2hlZWwgZGVsdGFcbiAgICAgICAgaWYgKCAnZGV0YWlsJyAgICAgIGluIG9yZ0V2ZW50ICkgeyBkZWx0YVkgPSBvcmdFdmVudC5kZXRhaWwgKiAtMTsgICAgICB9XG4gICAgICAgIGlmICggJ3doZWVsRGVsdGEnICBpbiBvcmdFdmVudCApIHsgZGVsdGFZID0gb3JnRXZlbnQud2hlZWxEZWx0YTsgICAgICAgfVxuICAgICAgICBpZiAoICd3aGVlbERlbHRhWScgaW4gb3JnRXZlbnQgKSB7IGRlbHRhWSA9IG9yZ0V2ZW50LndoZWVsRGVsdGFZOyAgICAgIH1cbiAgICAgICAgaWYgKCAnd2hlZWxEZWx0YVgnIGluIG9yZ0V2ZW50ICkgeyBkZWx0YVggPSBvcmdFdmVudC53aGVlbERlbHRhWCAqIC0xOyB9XG5cbiAgICAgICAgLy8gRmlyZWZveCA8IDE3IGhvcml6b250YWwgc2Nyb2xsaW5nIHJlbGF0ZWQgdG8gRE9NTW91c2VTY3JvbGwgZXZlbnRcbiAgICAgICAgaWYgKCAnYXhpcycgaW4gb3JnRXZlbnQgJiYgb3JnRXZlbnQuYXhpcyA9PT0gb3JnRXZlbnQuSE9SSVpPTlRBTF9BWElTICkge1xuICAgICAgICAgICAgZGVsdGFYID0gZGVsdGFZICogLTE7XG4gICAgICAgICAgICBkZWx0YVkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGRlbHRhIHRvIGJlIGRlbHRhWSBvciBkZWx0YVggaWYgZGVsdGFZIGlzIDAgZm9yIGJhY2t3YXJkcyBjb21wYXRhYmlsaXRpeVxuICAgICAgICBkZWx0YSA9IGRlbHRhWSA9PT0gMCA/IGRlbHRhWCA6IGRlbHRhWTtcblxuICAgICAgICAvLyBOZXcgc2Nob29sIHdoZWVsIGRlbHRhICh3aGVlbCBldmVudClcbiAgICAgICAgaWYgKCAnZGVsdGFZJyBpbiBvcmdFdmVudCApIHtcbiAgICAgICAgICAgIGRlbHRhWSA9IG9yZ0V2ZW50LmRlbHRhWSAqIC0xO1xuICAgICAgICAgICAgZGVsdGEgID0gZGVsdGFZO1xuICAgICAgICB9XG4gICAgICAgIGlmICggJ2RlbHRhWCcgaW4gb3JnRXZlbnQgKSB7XG4gICAgICAgICAgICBkZWx0YVggPSBvcmdFdmVudC5kZWx0YVg7XG4gICAgICAgICAgICBpZiAoIGRlbHRhWSA9PT0gMCApIHsgZGVsdGEgID0gZGVsdGFYICogLTE7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vIGNoYW5nZSBhY3R1YWxseSBoYXBwZW5lZCwgbm8gcmVhc29uIHRvIGdvIGFueSBmdXJ0aGVyXG4gICAgICAgIGlmICggZGVsdGFZID09PSAwICYmIGRlbHRhWCA9PT0gMCApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgLy8gTmVlZCB0byBjb252ZXJ0IGxpbmVzIGFuZCBwYWdlcyB0byBwaXhlbHMgaWYgd2UgYXJlbid0IGFscmVhZHkgaW4gcGl4ZWxzXG4gICAgICAgIC8vIFRoZXJlIGFyZSB0aHJlZSBkZWx0YSBtb2RlczpcbiAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAwIGlzIGJ5IHBpeGVscywgbm90aGluZyB0byBkb1xuICAgICAgICAvLyAgICogZGVsdGFNb2RlIDEgaXMgYnkgbGluZXNcbiAgICAgICAgLy8gICAqIGRlbHRhTW9kZSAyIGlzIGJ5IHBhZ2VzXG4gICAgICAgIGlmICggb3JnRXZlbnQuZGVsdGFNb2RlID09PSAxICkge1xuICAgICAgICAgICAgdmFyIGxpbmVIZWlnaHQgPSAkLmRhdGEodGhpcywgJ21vdXNld2hlZWwtbGluZS1oZWlnaHQnKTtcbiAgICAgICAgICAgIGRlbHRhICAqPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgZGVsdGFZICo9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICBkZWx0YVggKj0gbGluZUhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmICggb3JnRXZlbnQuZGVsdGFNb2RlID09PSAyICkge1xuICAgICAgICAgICAgdmFyIHBhZ2VIZWlnaHQgPSAkLmRhdGEodGhpcywgJ21vdXNld2hlZWwtcGFnZS1oZWlnaHQnKTtcbiAgICAgICAgICAgIGRlbHRhICAqPSBwYWdlSGVpZ2h0O1xuICAgICAgICAgICAgZGVsdGFZICo9IHBhZ2VIZWlnaHQ7XG4gICAgICAgICAgICBkZWx0YVggKj0gcGFnZUhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3JlIGxvd2VzdCBhYnNvbHV0ZSBkZWx0YSB0byBub3JtYWxpemUgdGhlIGRlbHRhIHZhbHVlc1xuICAgICAgICBhYnNEZWx0YSA9IE1hdGgubWF4KCBNYXRoLmFicyhkZWx0YVkpLCBNYXRoLmFicyhkZWx0YVgpICk7XG5cbiAgICAgICAgaWYgKCAhbG93ZXN0RGVsdGEgfHwgYWJzRGVsdGEgPCBsb3dlc3REZWx0YSApIHtcbiAgICAgICAgICAgIGxvd2VzdERlbHRhID0gYWJzRGVsdGE7XG5cbiAgICAgICAgICAgIC8vIEFkanVzdCBvbGRlciBkZWx0YXMgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICBpZiAoIHNob3VsZEFkanVzdE9sZERlbHRhcyhvcmdFdmVudCwgYWJzRGVsdGEpICkge1xuICAgICAgICAgICAgICAgIGxvd2VzdERlbHRhIC89IDQwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRqdXN0IG9sZGVyIGRlbHRhcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgaWYgKCBzaG91bGRBZGp1c3RPbGREZWx0YXMob3JnRXZlbnQsIGFic0RlbHRhKSApIHtcbiAgICAgICAgICAgIC8vIERpdmlkZSBhbGwgdGhlIHRoaW5ncyBieSA0MCFcbiAgICAgICAgICAgIGRlbHRhICAvPSA0MDtcbiAgICAgICAgICAgIGRlbHRhWCAvPSA0MDtcbiAgICAgICAgICAgIGRlbHRhWSAvPSA0MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCBhIHdob2xlLCBub3JtYWxpemVkIHZhbHVlIGZvciB0aGUgZGVsdGFzXG4gICAgICAgIGRlbHRhICA9IE1hdGhbIGRlbHRhICA+PSAxID8gJ2Zsb29yJyA6ICdjZWlsJyBdKGRlbHRhICAvIGxvd2VzdERlbHRhKTtcbiAgICAgICAgZGVsdGFYID0gTWF0aFsgZGVsdGFYID49IDEgPyAnZmxvb3InIDogJ2NlaWwnIF0oZGVsdGFYIC8gbG93ZXN0RGVsdGEpO1xuICAgICAgICBkZWx0YVkgPSBNYXRoWyBkZWx0YVkgPj0gMSA/ICdmbG9vcicgOiAnY2VpbCcgXShkZWx0YVkgLyBsb3dlc3REZWx0YSk7XG5cbiAgICAgICAgLy8gTm9ybWFsaXNlIG9mZnNldFggYW5kIG9mZnNldFkgcHJvcGVydGllc1xuICAgICAgICBpZiAoIHNwZWNpYWwuc2V0dGluZ3Mubm9ybWFsaXplT2Zmc2V0ICYmIHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICkge1xuICAgICAgICAgICAgdmFyIGJvdW5kaW5nUmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBvZmZzZXRYID0gZXZlbnQuY2xpZW50WCAtIGJvdW5kaW5nUmVjdC5sZWZ0O1xuICAgICAgICAgICAgb2Zmc2V0WSA9IGV2ZW50LmNsaWVudFkgLSBib3VuZGluZ1JlY3QudG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGluZm9ybWF0aW9uIHRvIHRoZSBldmVudCBvYmplY3RcbiAgICAgICAgZXZlbnQuZGVsdGFYID0gZGVsdGFYO1xuICAgICAgICBldmVudC5kZWx0YVkgPSBkZWx0YVk7XG4gICAgICAgIGV2ZW50LmRlbHRhRmFjdG9yID0gbG93ZXN0RGVsdGE7XG4gICAgICAgIGV2ZW50Lm9mZnNldFggPSBvZmZzZXRYO1xuICAgICAgICBldmVudC5vZmZzZXRZID0gb2Zmc2V0WTtcbiAgICAgICAgLy8gR28gYWhlYWQgYW5kIHNldCBkZWx0YU1vZGUgdG8gMCBzaW5jZSB3ZSBjb252ZXJ0ZWQgdG8gcGl4ZWxzXG4gICAgICAgIC8vIEFsdGhvdWdoIHRoaXMgaXMgYSBsaXR0bGUgb2RkIHNpbmNlIHdlIG92ZXJ3cml0ZSB0aGUgZGVsdGFYL1lcbiAgICAgICAgLy8gcHJvcGVydGllcyB3aXRoIG5vcm1hbGl6ZWQgZGVsdGFzLlxuICAgICAgICBldmVudC5kZWx0YU1vZGUgPSAwO1xuXG4gICAgICAgIC8vIEFkZCBldmVudCBhbmQgZGVsdGEgdG8gdGhlIGZyb250IG9mIHRoZSBhcmd1bWVudHNcbiAgICAgICAgYXJncy51bnNoaWZ0KGV2ZW50LCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpO1xuXG4gICAgICAgIC8vIENsZWFyb3V0IGxvd2VzdERlbHRhIGFmdGVyIHNvbWV0aW1lIHRvIGJldHRlclxuICAgICAgICAvLyBoYW5kbGUgbXVsdGlwbGUgZGV2aWNlIHR5cGVzIHRoYXQgZ2l2ZSBkaWZmZXJlbnRcbiAgICAgICAgLy8gYSBkaWZmZXJlbnQgbG93ZXN0RGVsdGFcbiAgICAgICAgLy8gRXg6IHRyYWNrcGFkID0gMyBhbmQgbW91c2Ugd2hlZWwgPSAxMjBcbiAgICAgICAgaWYgKG51bGxMb3dlc3REZWx0YVRpbWVvdXQpIHsgY2xlYXJUaW1lb3V0KG51bGxMb3dlc3REZWx0YVRpbWVvdXQpOyB9XG4gICAgICAgIG51bGxMb3dlc3REZWx0YVRpbWVvdXQgPSBzZXRUaW1lb3V0KG51bGxMb3dlc3REZWx0YSwgMjAwKTtcblxuICAgICAgICByZXR1cm4gKCQuZXZlbnQuZGlzcGF0Y2ggfHwgJC5ldmVudC5oYW5kbGUpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG51bGxMb3dlc3REZWx0YSgpIHtcbiAgICAgICAgbG93ZXN0RGVsdGEgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3VsZEFkanVzdE9sZERlbHRhcyhvcmdFdmVudCwgYWJzRGVsdGEpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhbiBvbGRlciBldmVudCBhbmQgdGhlIGRlbHRhIGlzIGRpdmlzYWJsZSBieSAxMjAsXG4gICAgICAgIC8vIHRoZW4gd2UgYXJlIGFzc3VtaW5nIHRoYXQgdGhlIGJyb3dzZXIgaXMgdHJlYXRpbmcgdGhpcyBhcyBhblxuICAgICAgICAvLyBvbGRlciBtb3VzZSB3aGVlbCBldmVudCBhbmQgdGhhdCB3ZSBzaG91bGQgZGl2aWRlIHRoZSBkZWx0YXNcbiAgICAgICAgLy8gYnkgNDAgdG8gdHJ5IGFuZCBnZXQgYSBtb3JlIHVzYWJsZSBkZWx0YUZhY3Rvci5cbiAgICAgICAgLy8gU2lkZSBub3RlLCB0aGlzIGFjdHVhbGx5IGltcGFjdHMgdGhlIHJlcG9ydGVkIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICAvLyBpbiBvbGRlciBicm93c2VycyBhbmQgY2FuIGNhdXNlIHNjcm9sbGluZyB0byBiZSBzbG93ZXIgdGhhbiBuYXRpdmUuXG4gICAgICAgIC8vIFR1cm4gdGhpcyBvZmYgYnkgc2V0dGluZyAkLmV2ZW50LnNwZWNpYWwubW91c2V3aGVlbC5zZXR0aW5ncy5hZGp1c3RPbGREZWx0YXMgdG8gZmFsc2UuXG4gICAgICAgIHJldHVybiBzcGVjaWFsLnNldHRpbmdzLmFkanVzdE9sZERlbHRhcyAmJiBvcmdFdmVudC50eXBlID09PSAnbW91c2V3aGVlbCcgJiYgYWJzRGVsdGEgJSAxMjAgPT09IDA7XG4gICAgfVxuXG59KSk7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbXBvcnRzLWxvYWRlcj9kZWZpbmU9PmZhbHNlIS4vfi9qcXVlcnktbW91c2V3aGVlbC9qcXVlcnkubW91c2V3aGVlbC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9qcXVlcnktbW91c2V3aGVlbC9qcXVlcnkubW91c2V3aGVlbC5qcyIsIi8vIHN0YXRzLmpzIC0gaHR0cDovL2dpdGh1Yi5jb20vbXJkb29iL3N0YXRzLmpzXG4oZnVuY3Rpb24oZixlKXtcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTpmLlN0YXRzPWUoKX0pKHRoaXMsZnVuY3Rpb24oKXt2YXIgZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoYSl7Yy5hcHBlbmRDaGlsZChhLmRvbSk7cmV0dXJuIGF9ZnVuY3Rpb24gdShhKXtmb3IodmFyIGQ9MDtkPGMuY2hpbGRyZW4ubGVuZ3RoO2QrKyljLmNoaWxkcmVuW2RdLnN0eWxlLmRpc3BsYXk9ZD09PWE/XCJibG9ja1wiOlwibm9uZVwiO2w9YX12YXIgbD0wLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMFwiO2MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpO1xudSgrK2wlYy5jaGlsZHJlbi5sZW5ndGgpfSwhMSk7dmFyIGs9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKSxnPWssYT0wLHI9ZShuZXcgZi5QYW5lbChcIkZQU1wiLFwiIzBmZlwiLFwiIzAwMlwiKSksaD1lKG5ldyBmLlBhbmVsKFwiTVNcIixcIiMwZjBcIixcIiMwMjBcIikpO2lmKHNlbGYucGVyZm9ybWFuY2UmJnNlbGYucGVyZm9ybWFuY2UubWVtb3J5KXZhciB0PWUobmV3IGYuUGFuZWwoXCJNQlwiLFwiI2YwOFwiLFwiIzIwMVwiKSk7dSgwKTtyZXR1cm57UkVWSVNJT046MTYsZG9tOmMsYWRkUGFuZWw6ZSxzaG93UGFuZWw6dSxiZWdpbjpmdW5jdGlvbigpe2s9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKX0sZW5kOmZ1bmN0aW9uKCl7YSsrO3ZhciBjPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCk7aC51cGRhdGUoYy1rLDIwMCk7aWYoYz5nKzFFMyYmKHIudXBkYXRlKDFFMyphLyhjLWcpLDEwMCksZz1jLGE9MCx0KSl7dmFyIGQ9cGVyZm9ybWFuY2UubWVtb3J5O3QudXBkYXRlKGQudXNlZEpTSGVhcFNpemUvXG4xMDQ4NTc2LGQuanNIZWFwU2l6ZUxpbWl0LzEwNDg1NzYpfXJldHVybiBjfSx1cGRhdGU6ZnVuY3Rpb24oKXtrPXRoaXMuZW5kKCl9LGRvbUVsZW1lbnQ6YyxzZXRNb2RlOnV9fTtmLlBhbmVsPWZ1bmN0aW9uKGUsZixsKXt2YXIgYz1JbmZpbml0eSxrPTAsZz1NYXRoLnJvdW5kLGE9Zyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSkscj04MCphLGg9NDgqYSx0PTMqYSx2PTIqYSxkPTMqYSxtPTE1KmEsbj03NCphLHA9MzAqYSxxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cS53aWR0aD1yO3EuaGVpZ2h0PWg7cS5zdHlsZS5jc3NUZXh0PVwid2lkdGg6ODBweDtoZWlnaHQ6NDhweFwiO3ZhciBiPXEuZ2V0Q29udGV4dChcIjJkXCIpO2IuZm9udD1cImJvbGQgXCIrOSphK1wicHggSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZcIjtiLnRleHRCYXNlbGluZT1cInRvcFwiO2IuZmlsbFN0eWxlPWw7Yi5maWxsUmVjdCgwLDAscixoKTtiLmZpbGxTdHlsZT1mO2IuZmlsbFRleHQoZSx0LHYpO1xuYi5maWxsUmVjdChkLG0sbixwKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9Ljk7Yi5maWxsUmVjdChkLG0sbixwKTtyZXR1cm57ZG9tOnEsdXBkYXRlOmZ1bmN0aW9uKGgsdyl7Yz1NYXRoLm1pbihjLGgpO2s9TWF0aC5tYXgoayxoKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9MTtiLmZpbGxSZWN0KDAsMCxyLG0pO2IuZmlsbFN0eWxlPWY7Yi5maWxsVGV4dChnKGgpK1wiIFwiK2UrXCIgKFwiK2coYykrXCItXCIrZyhrKStcIilcIix0LHYpO2IuZHJhd0ltYWdlKHEsZCthLG0sbi1hLHAsZCxtLG4tYSxwKTtiLmZpbGxSZWN0KGQrbi1hLG0sYSxwKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9Ljk7Yi5maWxsUmVjdChkK24tYSxtLGEsZygoMS1oL3cpKnApKX19fTtyZXR1cm4gZn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0YXRzLmpzL2J1aWxkL3N0YXRzLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vfi9zdGF0cy5qcy9idWlsZC9zdGF0cy5taW4uanMiLCJjb25zdCBfJCA9IEdMT0JBTF9MSUJTLmpRdWVyeT8gd2luZG93LmpRdWVyeTogcmVxdWlyZSgnanF1ZXJ5JyksXHJcbiAgICAgIF9odG1sMmNhbnZhcyA9IEdMT0JBTF9MSUJTLmh0bWwyY2FudmFzPyB3aW5kb3cuaHRtbDJjYW52YXM6IHJlcXVpcmUoJ2h0bWwyY2FudmFzJyksXHJcbiAgICAgIF9USFJFRSA9IEdMT0JBTF9MSUJTLlRIUkVFPyB3aW5kb3cuVEhSRUU6IHJlcXVpcmUoJ3RocmVlJyksXHJcbiAgICAgIF9QREZKUyA9IEdMT0JBTF9MSUJTLlBERkpTPyB3aW5kb3cuUERGSlM6IHJlcXVpcmUoJ3BkZmpzJyk7XHJcblxyXG5leHBvcnQge1xyXG4gIF8kIGFzICQsXHJcbiAgX2h0bWwyY2FudmFzIGFzIGh0bWwyY2FudmFzLFxyXG4gIF9USFJFRSBhcyBUSFJFRSxcclxuICBfUERGSlMgYXMgUERGSlNcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYnMuanMiXSwic291cmNlUm9vdCI6IiJ9