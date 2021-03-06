import _isArray from './_isArray';
import _isTransformer from './_isTransformer';

export  default function _dispatchable(methodNames, xf, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray()) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof  obj[methodNames[idx]] === 'function') {
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
