import _clone from './internal/_clone';
import _curry1 from './internal/_curry1';

var clone = _curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ?
    value.clone() :
    _clone(value, [], [], true);
});

export default clone;
