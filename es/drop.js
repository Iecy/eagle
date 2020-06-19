import _curry2 from "./internal/_curry2.js";
import _dispatchable from "./internal/_dispatchable.js";
import _xdrop from "./internal/_xdrop.js";
import slice from "./slice.js";

var drop = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['drop'], _xdrop, function drop(num, xs) {
  return slice(Math.max(0, num), Infinity, xs);
}));

export default drop;