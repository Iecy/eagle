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
