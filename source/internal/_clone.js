import type from '../type';
import _cloneRegExp from './_cloneRegExp';

export default function _clone(value, refFrom, refTo, deep) {
  const copy = function copy(copiedValue) {
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
      copiedValue[key] = deep ?
        _clone(value[key], refFrom, refTo, true) :
        value[key];
    }
    return  copiedValue;
  };
  switch (type(value)) {
    case 'Object': return copy({});
    case 'Array': return copy([]);
    case 'Date': return new Date(value.valueOf());
    case 'RegExp': return _cloneRegExp(value);
    default: return value;
  }
}
