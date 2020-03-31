import test from 'ava';
import E from '../source';

test('chinese characters in length', t => {
  t.is(E.StringLength('我爱你中国。'), 12);
});

test('English and Chinese mixed string length', t => {
  t.is(E.StringLength('我爱你中国。me too.'), 19);
});

