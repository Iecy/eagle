import test from 'ava';
import E from '../source';

test('Verify the correct phone number.', t => {
  t.is(E.isCellphone(13366666666), true);
});

test('Verify the wrong phone number.', t => {
  t.is(E.isCellphone(12266666666), false);
});
