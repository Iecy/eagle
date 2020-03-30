var assert = require('assert');

var E = require('../../source');

module.exports = function(actual, expected) {
  assert.strictEqual(arguments.length, 2);
  assert.strictEqual(E.toString(actual), E.toString(expected));
};
