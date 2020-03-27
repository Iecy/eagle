(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Eagle = {}));
}(this, (function (exports) { 'use strict';

  var F = function F() {
    return false;
  };

  var T = function T() {
    return true;
  };

  var __ = {
    '@@functional/placeholder': true
  };

  exports.F = F;
  exports.T = T;
  exports.__ = __;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
