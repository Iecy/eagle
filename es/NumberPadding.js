/**
 * @description 在数字前面补`0`
 * @version 0.0.1
 * @param {string | number} 数字
 * @param {number} 补充0后的数字长度
 * @return {string} 补充0后的数字
 * @example
 *  E.NumberPadding(1); // 01
 *  E.NumberPadding('2', 3); // 002
 */
var NumberPadding = function (num, len = 2) {
  return (Array(len).join('0') + num).slice(-len);
};

export default NumberPadding;