var padding = function (num, len = 1) {
  return (Array(len).join('0') + num).slice(-len);
};

module.exports = padding;