import test from 'ava';
import E from '../source';

test('The units digit is automatically preceded by 0', t => {
  t.is(E.NumberPadding(1), '01');
});

test('Specifies the length of the number, preceded by 0', t => {
  t.is(E.NumberPadding(1, 3), '001');
});
