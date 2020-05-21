import test from 'ava';
import _ from '../../source/__';
import _curry2 from '../../source/internal/_curry2';

test('_curry2: supports E.__ placeholder', t => {
  var fn = function(a, b) { return [a, b]; };
  var g = _curry2(fn);
  t.deepEqual(g(1)(2), [1, 2]);
  t.deepEqual(g(1, 2), [1, 2]);

  t.deepEqual(g(_, 2)(1), [1, 2]);
  t.deepEqual(g(1, _)(2), [1, 2]);

  t.deepEqual(g(_, _)(1)(2), [1, 2]);
  t.deepEqual(g(_, _)(1, 2), [1, 2]);
  t.deepEqual(g(_, _)(_)(1, 2), [1, 2]);
  t.deepEqual(g(_, _)(_, 2)(1), [1, 2]);
});
