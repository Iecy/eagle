// var E = require('../source');
// var fs = require('fs');
// var path = require('path');
var eq = require('./shared/eq');


describe('API surface', function() {
  if (typeof require.resolve !== 'function') {
    return;
  }
  it('test one', function() {
    eq(1, 1);
  });
});
