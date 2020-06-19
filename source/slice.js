import _curry3 from './internal/_curry3';
import _checkForMethod from './internal/_checkForMethod';

var slice = _curry3(_checkForMethod('slice', function(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
export default slice;

