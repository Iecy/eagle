export default function _functionName(fn) {
  var match = String(fn).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}