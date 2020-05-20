import test from 'ava';
import  assert from 'assert';
import E from '../source';

test('deep clone integers, strings and booleans', t => {
  t.is(E.clone(-4), -4);
  t.is(E.clone(-1.54), -1.54);
  t.is(E.clone('eagle'), 'eagle');
  t.is(E.clone(true), true);
});

test('deep clone Objects: clones shallow object', t => {
  const objects = {a: 1, b: 'eagle', c: true, d: new Date(2015, 5, 21)};
  const objectsClone = E.clone(objects);
  objects.c = false;
  objects.d.setDate(31);
  t.deepEqual(objectsClone, {a: 1, b: 'eagle', c: true, d: new Date(2015, 5, 21)});
})

test('deep clone Objects: clones deep object', t => {
  const objects = {a: {b: {c: 'eagle'}}};
  const objectsClone = E.clone(objects);
  objects.a.b.c = null;
  t.deepEqual(objectsClone, {a: {b: {c: 'eagle'}}});
});

test('clones objects with circular references', t => {
  const x = {c: null};
  const y = {a: x};
  const z = {b: y};
  x.c = z;
  const clone  = E.clone(x);
  t.deepEqual(x, clone);
  x.c.b = 1;
  t.notDeepEqual(x, clone);
});

test('clone instances', t => {
  const Obj = function (x) {
    this.x = x;
  };
  Obj.prototype.get = function () {
    return this.x;
  };
  Obj.prototype.set = function (x) {
    this.x = x;
  };

  const obj = new Obj(10);
  t.is(obj.get(), 10);

  const clone = E.clone(obj);
  t.is(clone.get(), 10);

  assert.notStrictEqual(obj, clone);
  obj.set(12);
  t.is(obj.get(), 12);
  t.is(clone.get(), 10);
});

test('deep clone arrays: clones shallow arrays', t => {
  const list = [1, 2, 3];
  const clone = E.clone(list);
  list.pop();
  t.deepEqual(clone, [1, 2, 3]);
});

test('deep clone arrays: clones deep arrays', t => {
  const list = [1, [1, 2, 3], [[[5]]]];
  const clone = E.clone(list);

  assert.notStrictEqual(list, clone);
  assert.notStrictEqual(list[2], clone[2]);
  assert.notStrictEqual(list[2][0], clone[2][0]);

  t.deepEqual(list, clone);
  list[0] = 3;
  t.deepEqual(clone, [1, [1, 2, 3], [[[5]]]]);
  t.deepEqual(list, [3, [1, 2, 3], [[[5]]]]);
});

test('deep clone functions: keep reference to function', t => {
  const fn = function (x) {
    return x + x;
  };
  const list = [{a: fn}];
  const clone = E.clone(list);
  t.deepEqual(clone[0].a(10), 20);
  t.deepEqual(list[0].a, clone[0].a);
});

test('built-in types: clones Date Object', t => {
  const date = new Date(2014, 10, 14, 23, 59, 59, 999);
  const clone = E.clone(date);

  assert.notStrictEqual(date, clone);
  t.deepEqual(clone, new Date(2014, 10, 14, 23, 59, 59, 999));
  t.is(clone.getDay(), 5);
});

test('built-in types: clones RegExp object', t => {
  [/x/, /x/g, /x/i, /x/m, /x/gi, /x/gm, /x/im, /x/gim].forEach(pattern => {
    const clone = E.clone(pattern);
    assert.notStrictEqual(clone, pattern);
    t.deepEqual(clone.constructor, RegExp);
    t.deepEqual(clone.source, pattern.source);
    t.deepEqual(clone.global, pattern.global);
    t.deepEqual(clone.ignoreCase, pattern.ignoreCase);
    t.deepEqual(clone.multiline, pattern.multiline);
  });
});

test('deep clone edge cases: null, undefined and empty objects and arrays', t => {
  t.is(E.clone(null), null);
  t.is(E.clone(undefined), undefined);
  assert.notStrictEqual(E.clone(undefined), null);
  const obj = {};
  assert.notStrictEqual(E.clone(obj), obj);
  const list = [];
  assert.notStrictEqual(E.clone(list), list);
});

test('dispatches to `clone` method if present', t => {
  function ArbitraryClone(param) {
    this.value = param;
  }
  ArbitraryClone.prototype.clone = function () {
    return new ArbitraryClone(this.value);
  };
  const obj = new ArbitraryClone(42);
  const arbitraryClone = E.clone(obj);
  t.deepEqual(arbitraryClone, new ArbitraryClone(42));
  t.is(arbitraryClone instanceof ArbitraryClone, true);
});