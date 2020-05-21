import _curry1 from './internal/_curry1';
import empty from './empty';
import equals from './equals';

const isEmpty = _curry1(function isEmpty(param) {
  return param != null && equals(param, empty(param));
});

export  default  isEmpty;
