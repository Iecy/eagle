import test from 'ava';
import E from '../source';

var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
function C() { this.a = 100; this.b = 200; }
C.prototype.x = function() { return 'x'; };
C.prototype.y = 'y';
var cobj = new C();

test("keys: returns an array of the given object's own keys", t => {
  t.deepEqual(E.keys(obj).sort(), ['a', 'b', 'c', 'd', 'e', 'f']);
});
test('keys: works wiht hasOwnProperty override', t => {
  t.deepEqual(E.keys({hasOwnProperty: false}), ['hasOwnProperty']);
});
test('keys: works for primitives', t => {
  t.deepEqual(E.keys(null), []);
  t.deepEqual(E.keys(undefined), []);
  t.deepEqual(E.keys(55), []);
  t.deepEqual(E.keys('foo'), []);
  t.deepEqual(E.keys(true), []);
  t.deepEqual(E.keys(false), []);
  t.deepEqual(E.keys(NaN), []);
  t.deepEqual(E.keys(Infinity), []);
  t.deepEqual(E.keys([]), []);
});
test('keys: does not include the given object prototype properties', t => {
  t.deepEqual(E.keys(cobj).sort(), ['a', 'b']);
});
