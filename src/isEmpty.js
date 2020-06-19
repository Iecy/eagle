var _curry1 = /*#__PURE__*/require("./internal/_curry1");

var empty = /*#__PURE__*/require("./empty");

var equals = /*#__PURE__*/require("./equals");

const isEmpty = /*#__PURE__*/_curry1(function isEmpty(param) {
  return param != null && equals(param, empty(param));
});

module.exports = isEmpty;