/**
 * @description 判断是否为身份证号。支持15和18位的判断
 * @version 0.0.1
 * @param {string | number} 身份证号
 * @return {boolean} true | false
 * @example
 *  E.isIdCard('110222199012112445'); // true
 *  E.isIdCard(122444444444444); // true
 */
var isIDCard = function(id) {
  var Rx = new RegExp(/^(^\d{15}$)|(^\d{17}([0-9]|X)$)$/);
  return Rx.test(id);
};

export default isIDCard;
