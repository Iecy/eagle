import _isArray from './_isArray';

export default function _checkForMethod(methodName, fn) {
  return function() {
    var len = arguments.length;
    if (len === 0) {
      return fn();
    }
    var obj = arguments[len - 1];
    return (_isArray(obj) || typeof obj[methodName] !== 'function') ?
      fn.apply(this, arguments) :
      obj[methodName].apply(obj, Array.prototype.slice.call(arguments, 0, len - 1));
  };
}
