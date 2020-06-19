var _curry2 = /*#__PURE__*/require("./internal/_curry2");

var _dispatchable = /*#__PURE__*/require("./internal/_dispatchable");

var _xdrop = /*#__PURE__*/require("./internal/_xdrop");

var slice = /*#__PURE__*/require("./slice");

var drop = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['drop'], _xdrop, function drop(num, xs) {
  return slice(Math.max(0, num), Infinity, xs);
}));

module.exports = drop;