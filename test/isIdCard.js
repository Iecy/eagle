import test from 'ava';
import E from '../source';

test('Verify the 18-digit id number.', t => {
  t.is(E.isIdCard('110222199012112445'), true);
});

test('15-digit id card number.', t => {
  t.is(E.isIdCard(122444444444444), true);
});

test('The last digit is the id number of X', t => {
  t.is(E.isIdCard('11022219901211244X'), true);
});

