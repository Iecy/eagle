var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
var zeroWidth = '\u200b';
var hasProtoTrim = String.prototype.trim === 'function';
/**
 * @description 删除字符串两端的空白(条带)。
 * @version 0.0.1
 * @param {string} 需要删除两端空白的字符串
 * @return {string} 去掉两端空后的字符串
 * @example
 *  E.trim(' 我爱你中国。     '); // 我爱你中国。
 */

var trim = !hasProtoTrim || /*#__PURE__*/ws.trim() || ! /*#__PURE__*/zeroWidth.trim() ? function (str) {
  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
  var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
  return str.replace(beginRx, '').replace(endRx, '');
} : function (str) {
  return str.trim();
};
export default trim;