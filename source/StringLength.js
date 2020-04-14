/**
 * @description 获取字符串的字符串长度
 * @version 0.0.1
 * @param {string} 需要计算字符长度的字符串
 * @return {number} 字符串字符长度
 * @example
 *
 *  E.StringLength('我爱你中国。'); // 12
 *  E.StringLength('我爱你中国。me too.'); // 19
 */
var StringLength = function(str) {
  var length = 0;
  var sLen = str.length;
  for (let i = 0; i < sLen; i += 1) {
    if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
      length += 2;
    } else {
      length += 1;
    }
  }
  return length;
};

export default StringLength;
