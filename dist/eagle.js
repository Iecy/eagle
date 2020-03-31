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

  exports.NumberPadding = padding;
  exports.StringLength = StringLength;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
