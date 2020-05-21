import _clone from './internal/_clone';

const clone = function(value) {
  return value != null && typeof value.clone === 'function' ?
    value.clone() :
    _clone(value, [], [], true);
};

export default clone;
