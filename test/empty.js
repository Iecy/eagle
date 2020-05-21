import test from 'ava';
import E from '../source';

test('empty: dispatches to `empty` method', t => {
  function Nothing() {}
  Nothing.prototype.empty = function() { return new Nothing(); };

  function Just(x) { this.value = x; }
  Just.prototype.empty = function() { return new Nothing(); };

  t.deepEqual(E.empty(new Nothing()).constructor, Nothing);
  t.deepEqual(E.empty(new Just(123)).constructor, Nothing);
});

test('dispatches to `empty` function on constructor', t => {
  function Nothing() {}
  Nothing.empty = function() { return new Nothing(); };
  function Just(param) { this.value = param; }
  Just.empty = function() { return new Nothing(); };
  t.deepEqual(E.empty(new Nothing()).constructor, Nothing);
  t.deepEqual(E.empty(new Just(123)).constructor, Nothing);
});

test('empty: returns empty array given array', t => {
  t.deepEqual(E.empty([1, 2, 3, 4]), []);
});

test('empty: returns empty typed array of equivalent type given typed array', t => {
  t.deepEqual(E.empty(Uint8Array.from('1')), Uint8Array.from(''));
  t.is(E.empty(Uint8Array.from('1')).constructor.name, 'Uint8Array');
  t.deepEqual(E.empty(new Float32Array([1, 2, 3, 4])), new Float32Array([]));
  t.is(E.empty(new Float32Array(([1, 2, 3, 4]))).constructor.name, 'Float32Array');
});

test('empty: returns empty object given object', t => {
  t.deepEqual(E.empty({x: 1, y: 2}), {});
});

test('empty: returns empty string given string', t => {
  t.is(E.empty('abc'), '');
  t.is(E.empty(new String('abc')), '');
});

test('empty: return empty arguments object given arguments object', t => {
  const x = (function() {
    return arguments;
  }(1, 2, 3));

  t.deepEqual(E.empty(x), (function() {
    return arguments;
  }()));
});
