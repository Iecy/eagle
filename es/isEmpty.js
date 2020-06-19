import _curry1 from "./internal/_curry1.js";
import empty from "./empty.js";
import equals from "./equals.js";

const isEmpty = /*#__PURE__*/_curry1(function isEmpty(param) {
  return param != null && equals(param, empty(param));
});

export default isEmpty;