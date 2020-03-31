var StringLength = function (str) {
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

module.exports = StringLength;