import _curry2 from "./internal/_curry2.js";
import _equals from "./internal/_equals.js";

const equals = /*#__PURE__*/_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

export default equals;