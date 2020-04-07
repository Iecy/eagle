var isIDCard = function(id) {
  var Rx = new RegExp(/^(^\d{15}$)|(^\d{17}([0-9]|X)$)$/);
  return Rx.test(id);
};

export default isIDCard;
