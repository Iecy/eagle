import test from 'ava';
import E from '../source';

var a = [];
var b = a;

test('equals: tests for deep equality of its operands', t => {
  t.is(E.equals(100, 100), true);
  t.is(E.equals(100, '100'), false);
  t.is(E.equals([], []), true);
  t.is(E.equals(a, b), true);
});
test('equals: considers equal Boolean primitives equal', t => {
  t.is(E.equals(true, true), true);
  t.is(E.equals(false, false), true);
  t.is(E.equals(true, false), false);
  t.is(E.equals(false, true), false);
});
test('equals: considers equivalent Boolean objects equal', t => {
  t.is(E.equals(new Boolean(true), new Boolean(true)), true);
  t.is(E.equals(new Boolean(false), new Boolean(false)), true);
  t.is(E.equals(new Boolean(true), new Boolean(false)), false);
  t.is(E.equals(new Boolean(false), new Boolean(true)), false);
});
test('equals: equals: never considers Boolean primitive equal to Boolean object', t => {
  t.is(E.equals(true, new Boolean(true)), false);
  t.is(E.equals(new Boolean(true), true), false);
  t.is(E.equals(false, new Boolean(false)), false);
  t.is(E.equals(new Boolean(false), false), false);
});
test('equals: equals: considers equal number primitives equal', t => {
  t.is(E.equals(0, 0), true);
  t.is(E.equals(0, 1), false);
  t.is(E.equals(1, 0), false);
});
test('equals: equals: considers equivalent Number objects equal', t => {
  t.is(E.equals(new Number(0), new Number(0)), true);
  t.is(E.equals(new Number(0), new Number(1)), false);
  t.is(E.equals(new Number(1), new Number(0)), false);
});
test('equals: equals: never considers number primitive equal to Number object', t => {
  t.is(E.equals(0, new Number(0)), false);
  t.is(E.equals(new Number(0), 0), false);
});
test('equals: considers equal string primitives equal', t => {
  t.is(E.equals('', ''), true);
  t.is(E.equals('', 'x'), false);
  t.is(E.equals('x', ''), false);
  t.is(E.equals('foo', 'foo'), true);
  t.is(E.equals('foo', 'bar'), false);
  t.is(E.equals('bar', 'foo'), false);
});

test('equals: considers equivalent String objects equal', t => {
  t.is(E.equals(new String(''), new String('')), true);
  t.is(E.equals(new String(''), new String('x')), false);
  t.is(E.equals(new String('x'), new String('')), false);
  t.is(E.equals(new String('foo'), new String('foo')), true);
  t.is(E.equals(new String('foo'), new String('bar')), false);
  t.is(E.equals(new String('bar'), new String('foo')), false);
});

test('equals: never considers string primitive equal to String object', t => {
  t.is(E.equals('', new String('')), false);
  t.is(E.equals(new String(''), ''), false);
  t.is(E.equals('x', new String('x')), false);
  t.is(E.equals(new String('x'), 'x'), false);
});

test('equals: handles objects', t => {
  t.is(E.equals({}, {}), true);
  t.is(E.equals({a:1, b:2}, {a:1, b:2}), true);
  t.is(E.equals({a:2, b:3}, {b:3, a:2}), true);
  t.is(E.equals({a:2, b:3}, {a:3, b:3}), false);
  t.is(E.equals({a:2, b:3, c:1}, {a:2, b:3}), false);
});
test('equals: considers equivalent Arguments objects equal', t => {
  var a = (function() { return arguments; }());
  var b = (function() { return arguments; }());
  var c = (function() { return arguments; }(1, 2, 3));
  var d = (function() { return arguments; }(1, 2, 3));

  t.is(E.equals(a, b), true);
  t.is(E.equals(b, a), true);
  t.is(E.equals(c, d), true);
  t.is(E.equals(d, c), true);
  t.is(E.equals(a, c), false);
  t.is(E.equals(c, a), false);
});

test('equals: considers equivalent Error objects equal', t => {
  t.is(E.equals(new Error('XXX'), new Error('XXX')), true);
  t.is(E.equals(new Error('XXX'), new Error('YYY')), false);
  t.is(E.equals(new Error('XXX'), new TypeError('XXX')), false);
  t.is(E.equals(new Error('XXX'), new TypeError('YYY')), false);
});
test('equals: handles regex', t => {
  t.is(E.equals(/\s/, /\s/), true);
  t.is(E.equals(/\s/, /\d/), false);
  t.is(E.equals(/a/gi, /a/ig), true);
  t.is(E.equals(/a/mgi, /a/img), true);
  t.is(E.equals(/a/gi, /a/i), false);
});
test('equals: handles lists', t => {
  var listA = [1, 2, 3];
  var listB = [1, 3, 2];
  t.is(E.equals([], {}), false);
  t.is(E.equals(listA, listB), false);
});
test('equals: handles recursive data structures', t => {
  var c = {}; c.v = c;
  var d = {}; d.v = d;
  var e = []; e.push(e);
  var f = []; f.push(f);
  var nestA = {a:[1, 2, {c:1}], b:1};
  var nestB = {a:[1, 2, {c:1}], b:1};
  var nestC = {a:[1, 2, {c:2}], b:1};
  t.is(E.equals(c, d), true);
  t.is(E.equals(e, f), true);
  t.is(E.equals(nestA, nestB), true);
  t.is(E.equals(nestA, nestC), false);
});

test('equals: handles dates', t => {
  t.is(E.equals(new Date(0), new Date(0)), true);
  t.is(E.equals(new Date(1), new Date(1)), true);
  t.is(E.equals(new Date(0), new Date(1)), false);
  t.is(E.equals(new Date(1), new Date(0)), false);
});
test('equals: requires that both objects have the same enumerable properties with the same values', t => {
  var a1 = [];
  var a2 = [];
  a2.x = 0;

  var b1 = new Boolean(false);
  var b2 = new Boolean(false);
  b2.x = 0;

  var d1 = new Date(0);
  var d2 = new Date(0);
  d2.x = 0;

  var n1 = new Number(0);
  var n2 = new Number(0);
  n2.x = 0;

  var r1 = /(?:)/;
  var r2 = /(?:)/;
  r2.x = 0;

  var s1 = new String('');
  var s2 = new String('');
  s2.x = 0;

  t.is(E.equals(a1, a2), false);
  t.is(E.equals(b1, b2), false);
  t.is(E.equals(d1, d2), false);
  t.is(E.equals(n1, n2), false);
  t.is(E.equals(r1, r2), false);
  t.is(E.equals(s1, s2), false);
});
if (typeof ArrayBuffer !== 'undefined' && typeof Int8Array !== 'undefined') {
  var typArr1 = new ArrayBuffer(10);
  typArr1[0] = 1;
  var typArr2 = new ArrayBuffer(10);
  typArr2[0] = 1;
  var typArr3 = new ArrayBuffer(10);
  var intTypArr = new Int8Array(typArr1);
  typArr3[0] = 0;
  test('equals: handles typed arrays', t => {
    t.is(E.equals(typArr1, typArr2), true);
    t.is(E.equals(typArr1, typArr3), false);
    t.is(E.equals(typArr1, intTypArr), false);
  });
}
if (typeof Promise !== 'undefined') {
  test('equals: compares Promise objects by identity', t => {
    var p = Promise.resolve(42);
    var q = Promise.resolve(42);
    t.is(E.equals(p, p), true);
    t.is(E.equals(p, q), false);
  });
}
if (typeof Map !== 'undefined') {
  test('equals: compares Map objects by value', t => {
    t.is(E.equals(new Map([]), new Map([])), true);
    t.is(E.equals(new Map([]), new Map([[1, 'a']])), false);
    t.is(E.equals(new Map([[1, 'a']]), new Map([])), false);
    t.is(E.equals(new Map([[1, 'a']]), new Map([[1, 'a']])), true);
    t.is(E.equals(new Map([[1, 'a'], [2, 'b']]), new Map([[2, 'b'], [1, 'a']])), true);
    t.is(E.equals(new Map([[1, 'a']]), new Map([[2, 'a']])), false);
    t.is(E.equals(new Map([[1, 'a']]), new Map([[1, 'b']])), false);
    t.is(E.equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), true);
    t.is(E.equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]])), false);
    t.is(E.equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]])), true);
    t.is(E.equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]])), false);
  });
  test('equals: dispatches to `equals` method recursively in Map', t => {
    var a = new Map();
    var b = new Map();
    a.set(a, a);
    t.is(E.equals(a, b), false);
    a.set(b, b);
    b.set(b, b);
    b.set(a, a);
    t.is(E.equals(a, b), true);
  });
}
if (typeof Set !== 'undefined') {
  test('equals: compares Set objects by value', t => {
    t.is(E.equals(new Set([]), new Set([])), true);
    t.is(E.equals(new Set([]), new Set([1])), false);
    t.is(E.equals(new Set([1]), new Set([])), false);
    t.is(E.equals(new Set([1, 2]), new Set([2, 1])), true);
    t.is(E.equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])])), true);
    t.is(E.equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])])), false);
    t.is(E.equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [4, 5, 6]])), true);
    t.is(E.equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [7, 8, 9]])), false);
  });
  test('equals: dispatches to `equals` method recursively in Set', t => {
    var a = new Set();
    var b = new Set();
    a.add(a);
    t.is(E.equals(a, b), false);
    a.add(b);
    b.add(b);
    b.add(a);
    t.is(E.equals(a, b), true);
  });
}

if (typeof WeakMap !== 'undefined') {
  test('equals: compares WeakMap objects by identity', t => {
    var m = new WeakMap([]);
    t.is(E.equals(m, m), true);
    t.is(E.equals(m, new WeakMap([])), false);
  });
}

if (typeof WeakSet !== 'undefined') {
  test('equals: compares WeakSet objects by identity', t => {
    var s = new WeakSet([]);
    t.is(E.equals(s, s), true);
    t.is(E.equals(s, new WeakSet([])), false);
  });
}
test('equals: dispatches to `equals` method recursively', t => {
  function Left(x) { this.value = x; }
  Left.prototype.equals = function(x) {
    return x instanceof Left && E.equals(x.value, this.value);
  };

  function Right(x) { this.value = x; }
  Right.prototype.equals = function(x) {
    return x instanceof Right && E.equals(x.value, this.value);
  };

  t.is(E.equals(new Left([42]), new Left([42])), true);
  t.is(E.equals(new Left([42]), new Left([43])), false);
  t.is(E.equals(new Left(42), {value: 42}), false);
  t.is(E.equals({value: 42}, new Left(42)), false);
  t.is(E.equals(new Left(42), new Right(42)), false);
  t.is(E.equals(new Right(42), new Left(42)), false);

  t.is(E.equals([new Left(42)], [new Left(42)]), true);
  t.is(E.equals([new Left(42)], [new Right(42)]), false);
  t.is(E.equals([new Right(42)], [new Left(42)]), false);
  t.is(E.equals([new Right(42)], [new Right(42)]), true);
});
test('equals: is commutative', t => {
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.equals = function(point) {
    return point instanceof Point &&
      this.x === point.x && this.y === point.y;
  };

  function ColorPoint(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  ColorPoint.prototype = new Point(0, 0);
  ColorPoint.prototype.equals = function(point) {
    return point instanceof ColorPoint &&
      this.x === point.x && this.y === point.y &&
      this.color === point.color;
  };

  t.is(E.equals(new Point(2, 2), new ColorPoint(2, 2, 'red')), false);
  t.is(E.equals(new ColorPoint(2, 2, 'red'), new Point(2, 2)), false);
});
