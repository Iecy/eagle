var _curry3 = /*#__PURE__*/require("./internal/_curry3");

var _checkForMethod = /*#__PURE__*/require("./internal/_checkForMethod");

var slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function (fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

module.exports = slice;