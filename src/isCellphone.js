/**
 * @description 判断是否为手机号码
 * @version 0.0.1
 * @param {string | number} 手机号码
 * @return {boolean} true | false
 * @example
 *  E.isCellphone(13366666666); // true
 *  E.isCellphone(12266666666); // false
 */
var isTelephone = function (num) {
  var Rx = new RegExp(/^1[3456789]\d{9}$/);
  return Rx.test(num);
};

module.exports = isTelephone;