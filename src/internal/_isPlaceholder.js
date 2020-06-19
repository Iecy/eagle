function _isPlaceholder(param) {
  return param != null && typeof param === 'object' && param['@@functional/placeholder'] === true;
}

module.exports = _isPlaceholder;
;