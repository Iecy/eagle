import _curry2 from './internal/_curry2';
import _dispatchable from './internal/_dispatchable';
import _xtake from './internal/_xtake';
import slice from './slice';

var take = _curry2(_dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n,xs);
}));

export default take;
