import _curry2 from './internal/_curry2';
import _equals from './internal/_equals';
const equals = _curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

export default equals;
