var _curry2 = /*#__PURE__*/require("./internal/_curry2");

var _equals = /*#__PURE__*/require("./internal/_equals");

const equals = /*#__PURE__*/_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

module.exports = equals;