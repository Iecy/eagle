export default function _isString(param) {
  return Object.prototype.toString.call(param) === '[object String]';
};