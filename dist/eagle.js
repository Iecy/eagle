(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Eagle = {}));
}(this, (function (exports) { 'use strict';

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
  var NumberPadding = function NumberPadding(num) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return (Array(len).join('0') + num).slice(-len);
  };

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
  var StringLength = function StringLength(str) {
    var length = 0;
    var sLen = str.length;

    for (var i = 0; i < sLen; i += 1) {
      if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
        length += 2;
      } else {
        length += 1;
      }
    }

    return length;
  };

  var ws = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" + "\u2029\uFEFF";
  var zeroWidth = "\u200B";
  var hasProtoTrim = String.prototype.trim === 'function';
  /**
   * @description 删除字符串两端的空白(条带)。
   * @version 0.0.1
   * @param {string} 需要删除两端空白的字符串
   * @return {string} 去掉两端空后的字符串
   * @example
   *  E.trim(' 我爱你中国。     '); // 我爱你中国。
   */

  var trim = !hasProtoTrim || ws.trim() || !zeroWidth.trim() ? function (str) {
    var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
    var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
    return str.replace(beginRx, '').replace(endRx, '');
  } : function (str) {
    return str.trim();
  };

  var ws$1 = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" + "\u2029\uFEFF";
  /**
   * @description 删除字符串内所有空白(条带)。
   * @version 0.0.1
   * @param {string} 需要删除空白的字符串
   * @return {string} 去掉空白后的字符串
   * @example
   *  E.trimAll('  我 爱 你 中国。  '); // 我爱你中国。
   */

  var trimAll = function trimAll(str) {
    var Rx = new RegExp('[' + ws$1 + '][' + ws$1 + ']*', 'g');
    return str.replace(Rx, '');
  };

  /**
   * @description 判断是否为手机号码
   * @version 0.0.1
   * @param {string | number} 手机号码
   * @return {boolean} true | false
   * @example
   *  E.isCellphone(13366666666); // true
   *  E.isCellphone(12266666666); // false
   */
  var isTelephone = function isTelephone(num) {
    var Rx = new RegExp(/^1[3456789]\d{9}$/);
    return Rx.test(num);
  };

  /**
   * @description 判断是否为座机号码
   * @version 0.0.1
   * @param {string | number} 座机号码
   * @return {boolean} true | false
   * @example
   *  E.isFixedPhone('021-87888822'); // true
   *  E.isFixedPhone(87888822); // true
   */
  var isFixedLinePhone = function isFixedLinePhone(phone) {
    var Rx = new RegExp(/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/);
    return Rx.test(phone);
  };

  /**
   * @description 判断是否为身份证号。支持15和18位的判断
   * @version 0.0.1
   * @param {string | number} 身份证号
   * @return {boolean} true | false
   * @example
   *  E.isIdCard('110222199012112445'); // true
   *  E.isIdCard(122444444444444); // true
   */
  var isIDCard = function isIDCard(id) {
    var Rx = new RegExp(/^(^\d{15}$)|(^\d{17}([0-9]|X)$)$/);
    return Rx.test(id);
  };

  exports.NumberPadding = NumberPadding;
  exports.StringLength = StringLength;
  exports.isCellphone = isTelephone;
  exports.isFixedPhone = isFixedLinePhone;
  exports.isIdCard = isIDCard;
  exports.trim = trim;
  exports.trimAll = trimAll;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
