(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Eagle = {}));
}(this, (function (exports) { 'use strict';

  var __ = {
    '@@functional/placeholder': true
  };

  /**
   * @description 在数字前面补`0`
   * @version 0.0.1
   * @param {string | number} 数字
   * @param {number} 补充0后的数字长度
   * @return {string} 补充0后的数字
   * @example
   *  E.NumberPadding(1); // 01
   *  E.NumberPadding('2', 3); // 002
   */
  var NumberPadding = function NumberPadding(num) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return (Array(len).join('0') + num).slice(-len);
  };

  /**
   * @description 获取字符串的字符串长度
   * @version 0.0.1
   * @param {string} 需要计算字符长度的字符串
   * @return {number} 字符串字符长度
   * @example
   *
   *  E.StringLength('我爱你中国。'); // 12
   *  E.StringLength('我爱你中国。me too.'); // 19
   */
  var StringLength = function StringLength(str) {
    var length = 0;
    var sLen = str.length;

    for (var i = 0; i < sLen; i += 1) {
      if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
        length += 2;
      } else {
        length += 1;
      }
    }

    return length;
  };

  var ws = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" + "\u2029\uFEFF";
  var zeroWidth = "\u200B";
  var hasProtoTrim = String.prototype.trim === 'function';
  /**
   * @description 删除字符串两端的空白(条带)。
   * @version 0.0.1
   * @param {string} 需要删除两端空白的字符串
   * @return {string} 去掉两端空后的字符串
   * @example
   *  E.trim(' 我爱你中国。     '); // 我爱你中国。
   */

  var trim = !hasProtoTrim || ws.trim() || !zeroWidth.trim() ? function (str) {
    var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
    var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
    return str.replace(beginRx, '').replace(endRx, '');
  } : function (str) {
    return str.trim();
  };

  var ws$1 = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" + "\u2029\uFEFF";
  /**
   * @description 删除字符串内所有空白(条带)。
   * @version 0.0.1
   * @param {string} 需要删除空白的字符串
   * @return {string} 去掉空白后的字符串
   * @example
   *  E.trimAll('  我 爱 你 中国。  '); // 我爱你中国。
   */

  var trimAll = function trimAll(str) {
    var Rx = new RegExp('[' + ws$1 + '][' + ws$1 + ']*', 'g');
    return str.replace(Rx, '');
  };

  /**
   * @description 判断是否为手机号码
   * @version 0.0.1
   * @param {string | number} 手机号码
   * @return {boolean} true | false
   * @example
   *  E.isCellphone(13366666666); // true
   *  E.isCellphone(12266666666); // false
   */
  var isTelephone = function isTelephone(num) {
    var Rx = new RegExp(/^1[3456789]\d{9}$/);
    return Rx.test(num);
  };

  /**
   * @description 判断是否为座机号码
   * @version 0.0.1
   * @param {string | number} 座机号码
   * @return {boolean} true | false
   * @example
   *  E.isFixedPhone('021-87888822'); // true
   *  E.isFixedPhone(87888822); // true
   */
  var isFixedLinePhone = function isFixedLinePhone(phone) {
    var Rx = new RegExp(/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/);
    return Rx.test(phone);
  };

  /**
   * @description 判断是否为身份证号。支持15和18位的判断
   * @version 0.0.1
   * @param {string | number} 身份证号
   * @return {boolean} true | false
   * @example
   *  E.isIdCard('110222199012112445'); // true
   *  E.isIdCard(122444444444444); // true
   */
  var isIDCard = function isIDCard(id) {
    var Rx = new RegExp(/^(^\d{15}$)|(^\d{17}([0-9]|X)$)$/);
    return Rx.test(id);
  };

  var type = function type(val) {
    return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
  };

  function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
  }

  function _clone(value, refFrom, refTo, deep) {
    var copy = function copy(copiedValue) {
      var len = refFrom.length;
      var idx = 0;

      while (idx < len) {
        if (value === refFrom[idx]) {
          return refTo[idx];
        }

        idx += 1;
      }

      refFrom[idx] = value;
      refTo[idx] = copiedValue;

      for (var key in value) {
        copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
      }

      return copiedValue;
    };

    switch (type(value)) {
      case 'Object':
        return copy({});

      case 'Array':
        return copy([]);

      case 'Date':
        return new Date(value.valueOf());

      case 'RegExp':
        return _cloneRegExp(value);

      default:
        return value;
    }
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _isPlaceholder(param) {
    return param != null && _typeof(param) === 'object' && param['@@functional/placeholder'] === true;
  }

  function _curry1(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _isPlaceholder(a)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
  }

  var clone = _curry1(function clone(value) {
    return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
  });

  function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var toString = Object.prototype.toString;

  var _isArguments = function () {
    return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
      return toString.call(x) === '[object Arguments]';
    } : function _isArguments(x) {
      return _has('callee', x);
    };
  }();

  var _isArray = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
  };

  function _isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  }

  function _isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  }

  function _isTypedArray(param) {
    var type = Object.prototype.toString.call(param);
    return type === '[object Uint8ClampedArray]' || type === '[object Int8Array]' || type === '[object Uint8Array]' || type === '[object Int16Array]' || type === '[object Uint16Array]' || type === '[object Int32Array]' || type === '[object Uint32Array]' || type === '[object Float32Array]' || type === '[object Float64Array]' || type === '[object BigInt64Array]' || type === '[object BigUint64Array]';
  }

  var empty = _curry1(function empty(param) {
    return param != null && typeof param['fantasy-land/empty'] === 'function' ? param['fantasy-land/empty']() : param != null && param.constructor != null && typeof param.constructor['fantasy-land/empty'] === 'function' ? param.constructor['fantasy-land/empty']() : param != null && typeof param.empty === 'function' ? param.empty() : param != null && param.constructor != null && typeof param.constructor.empty === 'function' ? param.constructor.empty() : _isArray(param) ? [] : _isString(param) ? '' : _isObject(param) ? {} : _isArguments(param) ? function () {
      return arguments;
    }() : _isTypedArray(param) ? param.constructor.from('') : void 0;
  });

  function _curry2(fn) {
    return function fn2(a, b) {
      switch (arguments.length) {
        case 0:
          return fn2;

        case 1:
          return _isPlaceholder(a) ? fn2 : _curry1(function (_b) {
            return fn(a, _b);
          });

        default:
          return _isPlaceholder(a) && _isPlaceholder(b) ? fn2 : _isPlaceholder(a) ? _curry1(function (_a) {
            return fn(_a, b);
          }) : fn(a, b);
      }
    };
  }

  function _arrayFromIterator(iter) {
    var list = [];
    var next;

    while (!(next = iter.next()).done) {
      list.push(next.value);
    }

    return list;
  }

  function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;

    while (idx < len) {
      if (pred(x, list[idx])) {
        return true;
      }

      idx += 1;
    }
  }

  function _objectIs(a, b) {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    } else {
      return a !== a && b !== b;
    }
  }

  var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs;

  function _functionName(fn) {
    var match = String(fn).match(/^function (\w*)/);
    return match == null ? '' : match[1];
  }

  var hasEnumBug = !{
    toString: null
  }.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var hasArgsEnumBug = function () {

    return arguments.propertyIsEnumerable('length');
  }();

  var contains = function contains(list, item) {
    var idx = 0;

    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }

      idx += 1;
    }
  };

  var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? _curry1(function keys(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) : _curry1(function keys(obj) {
    if (Object(obj) !== obj) {
      return [];
    }

    var prop, nIdx;
    var ks = [];

    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);

    for (prop in obj) {
      if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
        ks[ks.length] = prop;
      }
    }

    if (hasEnumBug) {
      nIdx = nonEnumerableProps.length - 1;

      while (nIdx >= 0) {
        prop = nonEnumerableProps[nIdx];

        if (_has(prop, obj) && !contains(ks, prop)) {
          ks[ks.length] = prop;
        }

        nIdx -= 1;
      }
    }

    return ks;
  });

  function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = _arrayFromIterator(aIterator);

    var b = _arrayFromIterator(bIterator);

    function eq(_a, _b) {
      return _equals(_a, _b, stackA.slice(), stackB.slice());
    }

    return !_includesWith(function (b, aItem) {
      return !_includesWith(eq, aItem, b);
    }, b, a);
  }

  function _equals(a, b, stackA, stackB) {
    if (_objectIs$1(a, b)) {
      return true;
    }

    var typeA = type(a);

    if (typeA !== type(b)) {
      return false;
    }

    if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
      return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
    }

    if (typeof a.equals === 'function' || typeof b.equals === 'function') {
      return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
    }

    switch (typeA) {
      case 'Arguments':
      case 'Array':
      case 'Object':
        if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
          return a === b;
        }

        break;

      case 'Boolean':
      case 'Number':
      case 'String':
        if (!(_typeof(a) === _typeof(b) && _objectIs$1(a.valueOf(), b.valueOf()))) {
          return false;
        }

        break;

      case 'Date':
        if (!_objectIs$1(a.valueOf(), b.valueOf())) {
          return false;
        }

        break;

      case 'Error':
        return a.name === b.name && a.message === b.message;

      case 'RegExp':
        if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
          return false;
        }

        break;
    }

    var idx = stackA.length - 1;

    while (idx >= 0) {
      if (stackA[idx] === a) {
        return stackB[idx] === b;
      }

      idx -= 1;
    }

    switch (typeA) {
      case 'Map':
        if (a.size !== b.size) {
          return false;
        }

        return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

      case 'Set':
        if (a.size !== b.size) {
          return false;
        }

        return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

      case 'Arguments':
      case 'Array':
      case 'Object':
      case 'Boolean':
      case 'Number':
      case 'String':
      case 'Date':
      case 'Error':
      case 'RegExp':
      case 'Int8Array':
      case 'Uint8Array':
      case 'Uint8ClampedArray':
      case 'Int16Array':
      case 'Uint16Array':
      case 'Int32Array':
      case 'Uint32Array':
      case 'Float32Array':
      case 'Float64Array':
      case 'ArrayBuffer':
        break;

      default:
        return false;
    }

    var keysA = keys(a);

    if (keysA.length !== keys(b).length) {
      return false;
    }

    var extendedStackA = stackA.concat([a]);
    var extendedStackB = stackB.concat([b]);
    idx = keysA.length - 1;

    while (idx >= 0) {
      var key = keysA[idx];

      if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
        return false;
      }

      idx -= 1;
    }

    return true;
  }

  var equals = _curry2(function equals(a, b) {
    return _equals(a, b, [], []);
  });

  var isEmpty = _curry1(function isEmpty(param) {
    return param != null && equals(param, empty(param));
  });

  function _isTransformer(obj) {
    return obj != null && typeof obj['@@transducer/step'] === 'function';
  }

  function _dispatchable(methodNames, xf, fn) {
    return function () {
      if (arguments.length === 0) {
        return fn();
      }

      var args = Array.prototype.slice.call(arguments, 0);
      var obj = args.pop();

      if (!_isArray()) {
        var idx = 0;

        while (idx < methodNames.length) {
          if (typeof obj[methodNames[idx]] === 'function') {
            return obj[methodNames[idx]].apply(obj, args);
          }

          idx += 1;
        }

        if (_isTransformer(obj)) {
          var transducer = xf.apply(null, args);
          return transducer;
        }
      }

      return fn.apply(this, arguments);
    };
  }

  var _xfBase = {
    init: function init() {
      return this.xf['@@transducer/init']();
    },
    result: function result(_result) {
      return this.xf['@@transducer/result'](_result);
    }
  };

  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }

  XDrop.prototype['@@transducer/init'] = _xfBase.init;
  XDrop.prototype['@@transducer/result'] = _xfBase.result;

  XDrop.prototype['@@transducer/step'] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }

    return this.xf['@@transducer/step'](result, input);
  };

  var _xdrop = _curry2(function _xdrop(n, xf) {
    return new XDrop(n, xf);
  });

  function _curry3(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;

        case 1:
          return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          });

        case 2:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _curry1(function (_c) {
            return fn(a, b, _c);
          });

        default:
          return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
            return fn(_a, _b, c);
          }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _isPlaceholder(a) ? _curry1(function (_a) {
            return fn(_a, b, c);
          }) : _isPlaceholder(b) ? _curry1(function (_b) {
            return fn(a, _b, c);
          }) : _isPlaceholder(c) ? _curry1(function (_c) {
            return fn(a, b, _c);
          }) : fn(a, b, c);
      }
    };
  }

  function _checkForMethod(methodName, fn) {
    return function () {
      var len = arguments.length;

      if (len === 0) {
        return fn();
      }

      var obj = arguments[len - 1];
      return _isArray(obj) || typeof obj[methodName] !== 'function' ? fn.apply(this, arguments) : obj[methodName].apply(obj, Array.prototype.slice.call(arguments, 0, len - 1));
    };
  }

  var slice = _curry3(_checkForMethod('slice', function (fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  }));

  var drop = _curry2(_dispatchable(['drop'], _xdrop, function drop(num, xs) {
    return slice(Math.max(0, num), Infinity, xs);
  }));

  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }

  XDropLast.prototype['@@transducer/init'] = _xfBase.init;

  XDropLast.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };

  XDropLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }

    this.store(input);
    return result;
  };

  XDropLast.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;

    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  var _xdropLast = _curry2(function _xdropLast(n, xf) {
    return new XDropLast(n, xf);
  });

  function _reduced(x) {
    return x && x['@@transducer/reduced'] ? x : {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
  }

  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }

  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;

  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };

  var _xtake = _curry2(function _xtake(n, xf) {
    return new XTake(n, xf);
  });

  var take = _curry2(_dispatchable(['take'], _xtake, function take(n, xs) {
    return slice(0, n < 0 ? Infinity : n, xs);
  }));

  function dropLast(n, xs) {
    return take(n < xs.length ? xs.length - n : 0, xs);
  }

  var dropLast$1 = _curry2(_dispatchable([], _xdropLast, dropLast));

  function getAfterDecimalPointLeng(num) {
    return (num || 0).toString().split('.')[1].length || 0;
  }

  function toThousands(num) {
    var integerNum = (num || 0).toString().split('.')[0] || 0;
    var decimalNum = (num || 0).toString().split('.')[1];
    var result = '';

    while (integerNum.length > 3) {
      result = ',' + integerNum.slice(-3) + result;
      integerNum = integerNum.slice(0, integerNum.length - 3);
    }

    if (integerNum) {
      result = integerNum + result;
    }

    return decimalNum ? result + '.' + decimalNum : result;
  }
  /**
   * 格式化数字
   * @type {f1}
   * @param {
   *   decimalPlace: number, // 小数位
   *    prefix: '', // 前缀
   *    suffix: '', // 后缀
   *    thousandSeparator: true, // 千位符号
   *    abbreviation: false,   // 是否缩写
   * }
   */


  var numberFormat = _curry1(function (number, param) {
    if (isEmpty(param)) {
      return number;
    }

    var abs = Math.abs(number);
    var result = {
      origin: number,
      value: number
    };

    if (param.abbreviation !== undefined && param.abbreviation) {
      if (abs < Math.pow(10, 4)) {
        // 绝对值小于1000的数字，原样输出【0-999】
        result.value = number;
      } else if (abs >= Math.pow(10, 4) && abs < Math.pow(10, 6)) {
        // 绝对值【1000-9999】
        result.value = number / Math.pow(10, 4);
        result.unit = '万';
      } else if (abs >= Math.pow(10, 6) && abs < Math.pow(10, 7)) {
        result.value = number / Math.pow(10, 6);
        result.unit = '百万';
      } else if (abs >= Math.pow(10, 7) && abs < Math.pow(10, 8)) {
        result.value = number / Math.pow(10, 7);
        result.unit = '千万';
      } else if (abs >= Math.pow(10, 8) && abs < Math.pow(10, 10)) {
        result.value = number / Math.pow(10, 8);
        result.unit = '亿';
      } else if (abs >= Math.pow(10, 10) && abs < Math.pow(10, 11)) {
        result.value = number / Math.pow(10, 10);
        result.unit = '百亿';
      } else if (abs >= Math.pow(10, 11)) {
        result.value = number / Math.pow(10, 11);
        result.unit = '千亿';
      }

      result.origin = result.value;
      result.value = result.value + result.unit;
    }

    var pointLen = getAfterDecimalPointLeng(parseFloat(result.value));
    result.value = param.decimalPlace ? parseFloat(result.value).toFixed(param.decimalPlace) : pointLen > 3 ? parseFloat(result.value).toFixed(4) : result.value;
    result.value = parseFloat(result.value);
    result.origin = result.value;

    if (param.thousandSeparator !== undefined && param.thousandSeparator) {
      result.value = toThousands(result.value);
    }

    if (result.unit !== undefined && result.unit) {
      result.value = result.value + result.unit;
    }

    if (param.prefix !== undefined && param.prefix) {
      result.value = param.prefix + result.value;
    }

    if (param.suffix !== undefined && param.suffix) {
      result.value = result.value + param.suffix;
    }

    var value = result.value;
    result = null;
    return value;
  });

  exports.NumberPadding = NumberPadding;
  exports.StringLength = StringLength;
  exports.__ = __;
  exports.clone = clone;
  exports.drop = drop;
  exports.dropLast = dropLast$1;
  exports.empty = empty;
  exports.equals = equals;
  exports.isCellphone = isTelephone;
  exports.isEmpty = isEmpty;
  exports.isFixedPhone = isFixedLinePhone;
  exports.isIdCard = isIDCard;
  exports.keys = keys;
  exports.numberFormat = numberFormat;
  exports.slice = slice;
  exports.take = take;
  exports.trim = trim;
  exports.trimAll = trimAll;
  exports.type = type;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
