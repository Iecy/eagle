var _curry1 = /*#__PURE__*/require("./internal/_curry1");

var isEmpty = /*#__PURE__*/require("./isEmpty");

function getAfterDecimalPointLeng(num) {
  return (num || 0).toString().split('.')[1].length || 0;
}

function toThousands(num) {
  var integerNum = (num || 0).toString().split('.')[0] || 0;
  var decimalNum = (num || 0).toString().split('.')[1];
  var result = '';

  while (integerNum.length > 3) {
    result = ',' + integerNum.slice(-3) + result;
    integerNum = integerNum.slice(0, integerNum.length - 3);
  }

  if (integerNum) {
    result = integerNum + result;
  }

  return decimalNum ? result + '.' + decimalNum : result;
}
/**
 * 格式化数字
 * @type {f1}
 * @param {
 *   decimalPlace: number, // 小数位
 *    prefix: '', // 前缀
 *    suffix: '', // 后缀
 *    thousandSeparator: true, // 千位符号
 *    abbreviation: false,   // 是否缩写
 * }
 */


var numberFormat = /*#__PURE__*/_curry1(function (number, param) {
  if (isEmpty(param)) {
    return number;
  }

  var abs = Math.abs(number);
  var result = {
    origin: number,
    value: number
  };

  if (param.abbreviation !== undefined && param.abbreviation) {
    if (abs < Math.pow(10, 4)) {
      // 绝对值小于1000的数字，原样输出【0-999】
      result.value = number;
    } else if (abs >= Math.pow(10, 4) && abs < Math.pow(10, 6)) {
      // 绝对值【1000-9999】
      result.value = number / Math.pow(10, 4);
      result.unit = '万';
    } else if (abs >= Math.pow(10, 6) && abs < Math.pow(10, 7)) {
      result.value = number / Math.pow(10, 6);
      result.unit = '百万';
    } else if (abs >= Math.pow(10, 7) && abs < Math.pow(10, 8)) {
      result.value = number / Math.pow(10, 7);
      result.unit = '千万';
    } else if (abs >= Math.pow(10, 8) && abs < Math.pow(10, 10)) {
      result.value = number / Math.pow(10, 8);
      result.unit = '亿';
    } else if (abs >= Math.pow(10, 10) && abs < Math.pow(10, 11)) {
      result.value = number / Math.pow(10, 10);
      result.unit = '百亿';
    } else if (abs >= Math.pow(10, 11)) {
      result.value = number / Math.pow(10, 11);
      result.unit = '千亿';
    }

    result.origin = result.value;
    result.value = result.value + result.unit;
  }

  var pointLen = getAfterDecimalPointLeng(parseFloat(result.value));
  result.value = param.decimalPlace ? parseFloat(result.value).toFixed(param.decimalPlace) : pointLen > 3 ? parseFloat(result.value).toFixed(4) : result.value;
  result.value = parseFloat(result.value);
  result.origin = result.value;

  if (param.thousandSeparator !== undefined && param.thousandSeparator) {
    result.value = toThousands(result.value);
  }

  if (result.unit !== undefined && result.unit) {
    result.value = result.value + result.unit;
  }

  if (param.prefix !== undefined && param.prefix) {
    result.value = param.prefix + result.value;
  }

  if (param.suffix !== undefined && param.suffix) {
    result.value = result.value + param.suffix;
  }

  const value = result.value;
  result = null;
  return value;
});

module.exports = numberFormat;