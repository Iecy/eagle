import _curry1 from './internal/_curry1';
import _isArguments from './internal/_isArguments';
import _has from './internal/_has';

var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
var nonEnumerableProps = [
  'constructor', 'valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'
];
var hasArgsEnumBug = (function() {
  'use strict';
  return arguments.propertyIsEnumerable('length');
}());
var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
};

var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ?
  _curry1(function keys(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) :
  _curry1(function keys(obj) {
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
export default keys;

