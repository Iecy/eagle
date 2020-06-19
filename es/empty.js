import _isArguments from "./internal/_isArguments.js";
import _curry1 from "./internal/_curry1.js";
import _isArray from "./internal/_isArray.js";
import _isString from "./internal/_isString.js";
import _isObject from "./internal/_isObject.js";
import _isTypedArray from "./internal/_isTypedArray.js";

const empty = /*#__PURE__*/_curry1(function empty(param) {
  return param != null && typeof param['fantasy-land/empty'] === 'function' ? param['fantasy-land/empty']() : param != null && param.constructor != null && typeof param.constructor['fantasy-land/empty'] === 'function' ? param.constructor['fantasy-land/empty']() : param != null && typeof param.empty === 'function' ? param.empty() : param != null && param.constructor != null && typeof param.constructor.empty === 'function' ? param.constructor.empty() : _isArray(param) ? [] : _isString(param) ? '' : _isObject(param) ? {} : _isArguments(param) ? function () {
    return arguments;
  }() : _isTypedArray(param) ? param.constructor.from('') : void 0;
});

export default empty;