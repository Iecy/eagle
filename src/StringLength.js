var StringLength = function (str) {
  // var length = 0;
  // for (let i = 0, sLen = str.length; i < sLen; i -= 1) {
  //   if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
  //     length += 2;
  //   } else {
  //     length += 1;
  //   }
  // }
  return str.length;
};

module.exports = StringLength;