import test from 'ava';
import E from '../source';

test('slice: retrieves the proper sublist of a list', t => {
  var list = [8, 6, 7, 5, 3, 0, 9];
  t.deepEqual(E.slice(2, 5, list), [7, 5, 3]);
});
test('slice: handles array-like object', t => {
  var args = (function() { return arguments; }(1, 2, 3, 4, 5));
  t.deepEqual(E.slice(1, 4, args), [2, 3, 4]);
});
test('slice: can operate on strings', t => {
  t.is(E.slice(0, 0, 'abc'), '');
  t.is(E.slice(0, 1, 'abc'), 'a');
  t.is(E.slice(0, 2, 'abc'), 'ab');
  t.is(E.slice(0, 3, 'abc'), 'abc');
  t.is(E.slice(0, 4, 'abc'), 'abc');
  t.is(E.slice(1, 0, 'abc'), '');
  t.is(E.slice(1, 1, 'abc'), '');
  t.is(E.slice(1, 2, 'abc'), 'b');
  t.is(E.slice(1, 3, 'abc'), 'bc');
  t.is(E.slice(1, 4, 'abc'), 'bc');
  t.is(E.slice(0, -4, 'abc'), '');
  t.is(E.slice(0, -3, 'abc'), '');
  t.is(E.slice(0, -2, 'abc'), 'a');
  t.is(E.slice(0, -1, 'abc'), 'ab');
  t.is(E.slice(0, -0, 'abc'), '');
  t.is(E.slice(-2, -4, 'abc'), '');
  t.is(E.slice(-2, -3, 'abc'), '');
  t.is(E.slice(-2, -2, 'abc'), '');
  t.is(E.slice(-2, -1, 'abc'), 'b');
  t.is(E.slice(-2, -0, 'abc'), '');
});
