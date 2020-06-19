import _curry3 from "./internal/_curry3.js";
import _checkForMethod from "./internal/_checkForMethod.js";

var slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function (fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

export default slice;