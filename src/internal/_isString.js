function _isString(param) {
  return Object.prototype.toString.call(param) === '[object String]';
}

module.exports = _isString;
;