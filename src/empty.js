var _isArguments = /*#__PURE__*/require("./internal/_isArguments");

var _curry1 = /*#__PURE__*/require("./internal/_curry1");

var _isArray = /*#__PURE__*/require("./internal/_isArray");

var _isString = /*#__PURE__*/require("./internal/_isString");

var _isObject = /*#__PURE__*/require("./internal/_isObject");

var _isTypedArray = /*#__PURE__*/require("./internal/_isTypedArray");

const empty = /*#__PURE__*/_curry1(function empty(param) {
  return param != null && typeof param['fantasy-land/empty'] === 'function' ? param['fantasy-land/empty']() : param != null && param.constructor != null && typeof param.constructor['fantasy-land/empty'] === 'function' ? param.constructor['fantasy-land/empty']() : param != null && typeof param.empty === 'function' ? param.empty() : param != null && param.constructor != null && typeof param.constructor.empty === 'function' ? param.constructor.empty() : _isArray(param) ? [] : _isString(param) ? '' : _isObject(param) ? {} : _isArguments(param) ? function () {
    return arguments;
  }() : _isTypedArray(param) ? param.constructor.from('') : void 0;
});

module.exports = empty;