function _isObject(param) {
  return Object.prototype.toString.call(param) === '[object Object]';
}

module.exports = _isObject;
;