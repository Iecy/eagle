import _curry2 from './internal/_curry2';
import _dispatchable from './internal/_dispatchable';
import _xdrop from './internal/_xdrop';
import slice from './slice';

var drop = _curry2(_dispatchable(['drop'], _xdrop, function drop(num, xs) {
  return slice(Math.max(0, num), Infinity, xs);
}));

export default drop;
