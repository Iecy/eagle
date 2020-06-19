var _clone = /*#__PURE__*/require("./internal/_clone");

var _curry1 = /*#__PURE__*/require("./internal/_curry1");

var clone = /*#__PURE__*/_curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
});

module.exports = clone;