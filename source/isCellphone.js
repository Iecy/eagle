var isTelephone = function(num) {
  var Rx = new RegExp(/^1[3456789]\d{9}$/);
  return Rx.test(num);
};

export default isTelephone;
