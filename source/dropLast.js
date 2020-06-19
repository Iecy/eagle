import _curry2 from './internal/_curry2';
import _dispatchable from './internal/_dispatchable';
import _xdropLast from './internal/_xdropLast';
import _dropLast from './internal/_dropLast';

var dropLast = _curry2(_dispatchable([], _xdropLast, _dropLast));

export default dropLast;
