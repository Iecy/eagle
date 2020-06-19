import  assert from 'assert';

import test from 'ava';
import E from '../source';

test('skips the first `n` elements from a list, returning the remainder', t => {
  t.deepEqual(E.drop(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['d', 'e', 'f', 'g']);
});

test('returns an empty array if `n` is too large', t => {
  t.deepEqual(E.drop(20, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), []);
});

test('returns an equivalent list if `n` is <= 0', t => {
  t.deepEqual(E.drop(0, [1, 2, 3]), [1, 2, 3]);
  t.deepEqual(E.drop(-1, [1, 2, 3]), [1, 2, 3]);
  t.deepEqual(E.drop(-Infinity, [1, 2, 3]), [1, 2, 3]);
});

test('never returns the input array', t => {
  var xs = [1, 2, 3];

  assert.notStrictEqual(E.drop(0, xs), xs);
  assert.notStrictEqual(E.drop(-1, xs), xs);
  t.is(1, 1);
});

test('can operate on strings', t => {
  t.is(E.drop(3, 'Ramda'), 'da');
  t.is(E.drop(4, 'Ramda'), 'a');
  t.is(E.drop(5, 'Ramda'), '');
  t.is(E.drop(6, 'Ramda'), '');
});
