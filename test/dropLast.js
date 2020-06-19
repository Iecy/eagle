import  assert from 'assert';

import test from 'ava';
import E from '../source';

test('dropLast: skips the last `n` elements from a list, returning the remainder', t => {
  t.deepEqual(E.dropLast(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['a', 'b', 'c', 'd']);
});

test('dropLast: returns an empty array if `n` is too large', t => {
  t.deepEqual(E.dropLast(20, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), []);
});

test('dropLast: returns an equivalent list if `n` is <= 0', t => {
  t.deepEqual(E.dropLast(0, [1, 2, 3]), [1, 2, 3]);
  t.deepEqual(E.dropLast(-1, [1, 2, 3]), [1, 2, 3]);
  t.deepEqual(E.dropLast(-Infinity, [1, 2, 3]), [1, 2, 3]);
});

test('dropLast: never returns the input array', t => {
  var xs = [1, 2, 3];

  assert.notStrictEqual(E.dropLast(0, xs), xs);
  assert.notStrictEqual(E.dropLast(-1, xs), xs);
  t.is(1, 1);
});

test('dropLast: can operate on strings', t => {
  t.is(E.dropLast(3, 'Eagle'), 'Ea');
});

