import _curry2 from "./internal/_curry2.js";
import _dispatchable from "./internal/_dispatchable.js";
import _xtake from "./internal/_xtake.js";
import slice from "./slice.js";

var take = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));

export default take;