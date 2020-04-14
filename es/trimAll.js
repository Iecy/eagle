var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
/**
 * @description 删除字符串内所有空白(条带)。
 * @version 0.0.1
 * @param {string} 需要删除空白的字符串
 * @return {string} 去掉空白后的字符串
 * @example
 *  E.trimAll('  我 爱 你 中国。  '); // 我爱你中国。
 */

var trimAll = function (str) {
  var Rx = new RegExp('[' + ws + '][' + ws + ']*', 'g');
  return str.replace(Rx, '');
};

export default trimAll;