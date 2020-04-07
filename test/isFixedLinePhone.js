import test from 'ava';
import E from '../source';

test('Verify landlines with area codes.', t => {
  t.is(E.isFixedPhone('021-87888822'), true);
});

test('Verify that landlines do not have area codes.', t => {
  t.is(E.isFixedPhone(87888822), true);
});
