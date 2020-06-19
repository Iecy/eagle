import _curry1 from "./internal/_curry1.js";
import isEmpty from "./isEmpty.js";
/**
 * 格式化数字
 * @type {f1}
 * @param {
 *   decimalPlace: number, // 小数位
 *    prefix: '', // 前缀
 *    suffix: '', // 后缀
 *    thousandSeparator: true, // 千位符号
 * }
 */

var numberFormat = /*#__PURE__*/_curry1(function (number, param) {
  if (isEmpty(param)) {
    return number;
  }
});

export default numberFormat;