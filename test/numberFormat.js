import test from 'ava';
import E from '../source';

test('1', t => {
  t.is(1, 1);
});
test('numberFormat: The digits are set in thousands', t => {
  t.is(E.numberFormat(19935555556999.22666, { thousandSeparator: true }), '19,935,555,556,999.227');
});
test('numberFormat: The integer are set in thousands', t => {
  t.is(E.numberFormat(19935555556999, { thousandSeparator: true }), '19,935,555,556,999');
});
test('numberFormat: Number decimal setting', t => {
  t.is(E.numberFormat(19935555556999.22666, { decimalPlace: 2 }), 19935555556999.23);
});
test('numberFormat: Numbers set the prefix and suffix', t => {
  t.is(E.numberFormat(19935555556999.22666, { prefix: '￥', suffix: '元' }), '￥19935555556999.227元');
});
test('numberFormat:The number becomes an abbreviated unit', t => {
  t.is(E.numberFormat(19935555556999.22666, { abbreviation: true }), '199.3556千亿');
});
test('numberFormat: All parameters are used in combination', t => {
  t.is(E.numberFormat(19935555556999.22666, { abbreviation: true, prefix: '￥', suffix: '元', thousandSeparator: true, decimalPlace: 2 }), '￥199.36千亿元');
});
