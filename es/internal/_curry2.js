import _curry1 from "./_curry1.js";
import _isPlaceholder from "./_isPlaceholder.js";
export default function _curry2(fn) {
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