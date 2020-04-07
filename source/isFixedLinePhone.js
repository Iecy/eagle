var isFixedLinePhone = function(phone) {
  var Rx = new RegExp(/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/);
  return Rx.test(phone);
};

export default isFixedLinePhone;
