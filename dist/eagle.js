(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Eagle = {}));
}(this, (function (exports) { 'use strict';

  var padding = function padding(num) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return (Array(len).join('0') + num).slice(-len);
  };

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
  var trim = !hasProtoTrim || ws.trim() || !zeroWidth.trim() ? function (str) {
    var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
    var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
    return str.replace(beginRx, '').replace(endRx, '');
  } : function (str) {
    return str.trim();
  };

  var ws$1 = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" + "\u2029\uFEFF";

  var trim$1 = function trim(str) {
    var Rx = new RegExp('[' + ws$1 + '][' + ws$1 + ']*', 'g');
    return str.replace(Rx, '');
  };

  exports.NumberPadding = padding;
  exports.StringLength = StringLength;
  exports.trim = trim;
  exports.trimAll = trim$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
