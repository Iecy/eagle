import  assert from 'assert';

import E from '../source';
import test from 'ava';

test('take: takes only the first `n` elements from a list', t => {
  t.deepEqual(E.take(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['a', 'b', 'c']);
});
test('take: returns only as many as the array can provide', t => {
  t.deepEqual(E.take(3, [1, 2]), [1, 2]);
  t.deepEqual(E.take(3, []), []);
});
test('take: returns an equivalent list if `n` is < 0', t => {
  t.deepEqual(E.take(-1, [1, 2, 3]), [1, 2, 3]);
  t.deepEqual(E.take(-Infinity, [1, 2, 3]), [1, 2, 3]);
});

test('never returns the input array', t => {
  var xs = [1, 2, 3];

  t.is(1, 1);
  assert.notStrictEqual(E.take(3, xs), xs);
  assert.notStrictEqual(E.take(Infinity, xs), xs);
  assert.notStrictEqual(E.take(-1, xs), xs);
});

test('take: can operate on strings', t => {
  t.is(E.take(3, 'Ramda'), 'Ram');
  t.is(E.take(2, 'Ramda'), 'Ra');
  t.is(E.take(1, 'Ramda'), 'R');
  t.is(E.take(0, 'Ramda'), '');
});

