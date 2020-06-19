## NumberPadding

- 描述：在数字前面补`0`;
- 类型：`number | string` -> `string`

```javascript
E.NumberPadding(1); // 01
E.NumberPadding('1'); // 01
```

or

```javascript
import { NumberPadding } from '@interaction/eagle';

NumberPadding(1, 3); // 001
NumberPadding('2', 4); // 0002
```

## StringLength

- 描述：获取字符串的字符串长度
- 类型：`string` -> `string`

```javascript
E.StringLength('我爱你中国。'); // 12
E.StringLength('我爱你中国。me too.'); // 19
```

or

```javascript

import { StringLength } from '@interaction/eagle';

StringLength('我爱你中国。'); // 12
StringLength('我爱你中国。me too.'); // 19
```

## trim

- 描述：删除字符串两端的空白(条带)。
- 类型： `string` -> `string`

```javascript
E.trim(' 我爱你中国。     '); // 我爱你中国。
```

or

```javascript
import { trim } from '@interaction/eagle';
trim(' 我爱你中国。     '); // 我爱你中国。
```

## trimAll

- 描述：删除字符串内所有空白(条带)。
- 类型：`string` -> `string`

```javascript
E.trimAll('  我 爱 你 中国。  '); // 我爱你中国。
```

or

```javascript
import { trimAll } from '@interaction/eagle';
trimAll('  我 爱 你 中国。  '); // 我爱你中国。
```

## isCellphone

- 描述：判断是否为手机号码。
- 类型：`string | number` -> `boolean`

```javascript
E.isCellphone(13366666666); // true
E.isCellphone(12266666666); // false
```

or

```javascript
import { isCellphone } from '@interaction/eagle';
isCellphone(13366666666); // true
isCellphone(12266666666); // false
```

## isFixedPhone

- 判断是否为座机号码
- 类型：`string | number` -> `boolean`

```javascript
E.isFixedPhone('021-87888822'); // true
E.isFixedPhone(87888822); // true
```

or

```javascript
import { isFixedPhone } from '@interaction/eagle';
isFixedPhone('021-87888822'); // true
isFixedPhone(87888822); // true
```

## isIdCard

- 判断是否为身份证号。支持15和18位的判断
- 类型：`string | number` -> `boolean`

```javascript
E.isIdCard('110222199012112445'); // true
E.isIdCard(122444444444444); // true
E.isIdCard('11022219901211244X'); // true
```

or

```javascript
import { isIdCard } from '@interaction/eagle';
isIdCard('110222199012112445'); // true
isIdCard(122444444444444); // true
isIdCard('11022219901211244X'); // true
```

## clone

- 对操作对象的深度克隆，该对象可能包含（嵌套的）数组、对象、数字、字符串、布尔值和日期。函数是通过引用而不是复制来分配的。

```javascript
const objects = [{}, {}, {}];
const objectsClone = E.clone(objects);
objects === objectsClone; //=> false
objects[0] === objectsClone[0]; //=> false
```

or

```javascript
import { clone } from '@interaction/eagle';
const objects = [{}, {}, {}];
const objectsClone = clone(objects);
objects === objectsClone; //=> false
objects[0] === objectsClone[0]; //=> false
```

## empty

- 返回参数的类型的空值。
-参数类型：`Array` | `Object` | `String`;

```javascript
E.empty([1, 2, 3]);     //=> []
E.empty('unicorns');    //=> ''
E.empty({x: 1, y: 2});  //=> {}
```

or

```javascript
import { empty } from '@interaction/eagle';
empty([1, 2, 3]);     //=> []
empty('unicorns');    //=> ''
empty({x: 1, y: 2});  //=> {}
```

## isEmpty

- 判断参数是否为空；
- 参数类型：`Array` | `String` | `null` | `Object`

```javascript
E.isEmpty([1, 2, 3]);   //=> false
E.isEmpty([]);          //=> true
E.isEmpty('');          //=> true
E.isEmpty(null);        //=> false
E.isEmpty({});          //=> true
E.isEmpty({length: 0}); //=> false
```

or

```javascript
import { isEmpty } from '@interaction/eagle';
isEmpty([1, 2, 3]);   //=> false
isEmpty([]);          //=> true
isEmpty('');          //=> true
isEmpty(null);        //=> false
isEmpty({});          //=> true
isEmpty({length: 0}); //=> false
```

## equals

- 判断参数是否相等，可以处理嵌套的数据结构。
- 参数类型：`Number` | `String` | ` Object` | `Array`

```javascript
E.equals(1, 1); //=> true
E.equals(1, '1'); //=> false
E.equals([1, 2, 3], [1, 2, 3]); //=> true
const a = {}; a.v = a;
const b = {}; b.v = b;
E.equals(a, b); //=> true
```

or

```javascript
import { equals } from '@interaction/eagle';
equals(1, 1);                 //=> true
equals(1, '1');               //=> false
equals([1, 2, 3], [1, 2, 3]); //=> true
const a = {}; a.v = a;
const b = {}; b.v = b;
equals(a, b);                 //=> true
```

## keys

- 返回一个数组列表，包含参数所有可枚举自身的属性的名称。tip: 输出的数组的顺序并不能保证在不同的JS平台的一致性。
- 参数类型：`Object`

```javascript
E.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
```

or

```javascript
import { keys } from '@interaction/eagle';
keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
```

## type

- 返回参数的数据类型，不区分对象类型，统一返回`Object`;

```javascript
E.type({}); //=> "Object"
E.type(1); //=> "Number"
E.type(false); //=> "Boolean"
E.type('s'); //=> "String"
E.type(null); //=> "Null"
E.type([]); //=> "Array"
E.type(/[A-z]/); //=> "RegExp"
E.type(() => {}); //=> "Function"
E.type(undefined); //=> "Undefined"
```

or

```javascript
import { type } from '@interaction/eagle';
type({}); //=> "Object"
type(1); //=> "Number"
type(false); //=> "Boolean"
type('s'); //=> "String"
type(null); //=> "Null"
type([]); //=> "Array"
type(/[A-z]/); //=> "RegExp"
type(() => {}); //=> "Function"
type(undefined); //=> "Undefined"
```

## take

- 返回给定列表、字符串或转换器/转换器(或带take方法的对象)的前n个元素。

```javascript
E.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
E.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
E.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
E.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
E.take(3, 'eagle');               //=> 'eag'
```

or

```javascript
import { take } from '@interaction/eagle';
take(1, ['foo', 'bar', 'baz']); //=> ['foo']
take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
take(3, 'eagle');               //=> 'eag'
```

## slice

- 返回给定列表或字符串(或带有slice方法的对象)的元素，从fromIndex(包含)到toIndex(排除)。

```javascript
E.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
E.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
E.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
E.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
E.slice(0, 3, 'eagle');                     //=> 'eag'
```

or

```javascript
import { slice } from '@interaction/eagle';
slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
slice(0, 3, 'eagle');  
```

## drop

- 返回给定列表、字符串或转换器/转换器(或使用drop方法的对象)的前n个元素以外的所有元素。

```javascript
E.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
E.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
E.drop(3, ['foo', 'bar', 'baz']); //=> []
E.drop(4, ['foo', 'bar', 'baz']); //=> []
E.drop(3, 'eagle');               //=> 'le'
```

or

```javascript
import { drop } from '@interaction/eagle';
drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
drop(3, ['foo', 'bar', 'baz']); //=> []
drop(4, ['foo', 'bar', 'baz']); //=> []
drop(3, 'eagle');               //=> 'le'
```

## dropLast

- 返回一个包含给定列表中除最后n个元素外的所有元素的列表。

```javascript
E.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
E.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
E.dropLast(3, ['foo', 'bar', 'baz']); //=> []
E.dropLast(4, ['foo', 'bar', 'baz']); //=> []
E.dropLast(3, 'eagle');               //=> 'ea'
```

or

```javascript
import { dropLast } from '@interaction/eagle';
dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
dropLast(3, ['foo', 'bar', 'baz']); //=> []
dropLast(4, ['foo', 'bar', 'baz']); //=> []
dropLast(3, 'eagle');               //=> 'ea'
```

## numberFormat

- 对数字进行格式化设置；
- 参数
  - `thousandSeparator`: 是否设置千位符
  - `decimalPlace`: 保留小数位数；如果不设置，小数位最大`3`位
  - `prefix`： 前缀
  - `suffix`：后缀
  - `abbreviation`：缩写单位；最高到`千亿`

```javascript
E.numberFormat(19935555556999.22666, {thousandSeparator: true}); // '19,935,555,556,999.227'
E.numberFormat(19935555556999.22666, {decimalPlace: 2}); // 19935555556999.23
E.numberFormat(19935555556999.22666, { prefix: '￥', suffix: '元' }); // '￥19935555556999.227元'
E.numberFormat(19935555556999.22666, { abbreviation: true }); // '199.3556千亿'
E.numberFormat(19935555556999.22666, { abbreviation: true, prefix: '￥', suffix: '元', thousandSeparator: true, decimalPlace: 2 }); // '￥199.36千亿元'
```

or

```javascript
import { numberFormat } from '@interaction/eagle';
numberFormat(19935555556999.22666, {thousandSeparator: true}); // '19,935,555,556,999.227'
numberFormat(19935555556999.22666, {decimalPlace: 2}); // 19935555556999.23
numberFormat(19935555556999.22666, { prefix: '￥', suffix: '元' }); // '￥19935555556999.227元'
numberFormat(19935555556999.22666, { abbreviation: true }); // '199.3556千亿'
numberFormat(19935555556999.22666, { abbreviation: true, prefix: '￥', suffix: '元', thousandSeparator: true, decimalPlace: 2 }); // '￥199.36千亿元'
```