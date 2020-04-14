import test from 'ava';
import E from '../source';

test('trims a string', t => {
  t.is(E.trimAll(' 我 爱 你 中国。     '), '我爱你中国。');
});
