/**
 * @description 判断是否为座机号码
 * @version 0.0.1
 * @param {string | number} 座机号码
 * @return {boolean} true | false
 * @example
 *  E.isFixedPhone('021-87888822'); // true
 *  E.isFixedPhone(87888822); // true
 */
var isFixedLinePhone = function(phone) {
  var Rx = new RegExp(/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/);
  return Rx.test(phone);
};

export default isFixedLinePhone;
