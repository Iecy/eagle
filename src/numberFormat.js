var _curry1 = /*#__PURE__*/require("./internal/_curry1");

var isEmpty = /*#__PURE__*/require("./isEmpty");
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

module.exports = numberFormat;