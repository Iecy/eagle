import test from 'ava';
import E from '../source';
const testString = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFFHello, World!\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

test('trims a string', t => {
  t.is(E.trim(' 我爱你中国。     '), '我爱你中国。');
});

test('trims all ES5 whitespace', t => {
  t.is(E.trim(testString), 'Hello, World!');
  t.is(E.trim(testString).length, 13);
});

test('does not trim the zero-width space', t => {
  t.is(E.trim('\u200b'), '\u200b');
  t.is(E.trim('\u200b').length, 1);
});

if (typeof String.prototype.trim !== 'function') {
  test('falls back to a shim if String.prototype.trim is not present', t => {
    t.is(E.trim(' 我爱你中国。     '), '我爱你中国。');
    t.is(E.trim(test), 'Hello, World!');
    t.is(E.trim(test).length, 13);
    t.is(E.trim('\u200b'), '\u200b');
    t.is(E.trim('\u200b').length, 1);
  });
}


