import test from 'ava';
import E from '../source';

test('isEmpty: returns false for null', t => {
  t.is(E.isEmpty(null), false);
});

test('isEmpty: returns false for undefined', t => {
  t.is(E.isEmpty(undefined), false);
});

test('isEmpty: returns true for string', t => {
  t.is(E.isEmpty(''), true);
  t.is(E.isEmpty(' '), false);
});
test('isEmpty: returns true for empty array', t => {
  t.is(E.isEmpty([]), true);
  t.is(E.isEmpty([[]]), false);
});
test('isEmpty: returns true for empty typed array', t => {
  t.is(E.isEmpty(Uint8Array.from('')), true);
  t.is(E.isEmpty(Float32Array.from('')), true);
  t.is(E.isEmpty(new Float32Array([])), true);
  t.is(E.isEmpty(Uint8Array.from('1')), false);
  t.is(E.isEmpty(Float32Array.from('1')), false);
  t.is(E.isEmpty(new Float32Array([1])), false);
});
test('isEmpty: returns true for empty object', t => {
  t.is(E.isEmpty({}), true);
  t.is(E.isEmpty({a: 1}), false);
});
test('isEmpty: returns true for empty arguments object', t => {
  t.is(E.isEmpty((function() { return arguments; })()), true);
  t.is(E.isEmpty((function() { return arguments; })(0)), false);
});
test('isEmpty: returns false for every other value', t => {
  t.is(E.isEmpty(0), false);
  t.is(E.isEmpty(NaN), false);
  t.is(E.isEmpty(['']), false);
});
