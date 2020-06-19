function _objectIs(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } else {
    return a !== a && b !== b;
  }
}

module.exports = typeof Object.is === 'function' ? Object.is : _objectIs;