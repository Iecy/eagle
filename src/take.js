var _curry2 = /*#__PURE__*/require("./internal/_curry2");

var _dispatchable = /*#__PURE__*/require("./internal/_dispatchable");

var _xtake = /*#__PURE__*/require("./internal/_xtake");

var slice = /*#__PURE__*/require("./slice");

var take = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));

module.exports = take;