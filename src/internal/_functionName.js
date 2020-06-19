function _functionName(fn) {
  var match = String(fn).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

module.exports = _functionName;