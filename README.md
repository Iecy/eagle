# Eagle

JavaScript library

[![Build Status](https://travis-ci.org/Iecy/eagle.svg?branch=master)](https://travis-ci.org/github/Iecy/eagle)
[![npm module](https://badge.fury.io/js/%40interaction%2Feagle.svg)](https://badge.fury.io/js/%40interaction%2Feagle)
[![Coverage Status](https://coveralls.io/repos/github/Iecy/eagle/badge.svg?branch=master)](https://coveralls.io/github/Iecy/eagle?branch=master)

## 使用

安装

```shell
npm install --save @interaction/eagle
```

```javascript
// amd使用方式
const E = require('@interaction/eagle');
// es使用方式
import * as Eagle from '@interaction/eagle';
import {trim} from '@interaction/eagle';
```

浏览器使用方式

```html
<!-- 未压缩js -->
<script src="path/youProject/eagle.js"></script>
<!-- 压缩文件 -->
<script src="path/youProject/eagle.min.js"></script>
```

### 构建

`bash npm run build` 创建 `es`, `src` 文件夹，同时更新`dist`下的`eagle.js`和`eagle.min.js`文件；


### 使用文档

具体使用方法，请参考[文档](./helpers/docs/NOTEBOOK.md)
