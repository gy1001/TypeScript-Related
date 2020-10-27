<!--
 * @Author: gaoyuan
 * @Date: 2020-10-26 18:37:41
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-27 10:08:42
-->
这节把上面的代码给为import

#### 修改components.ts文件
现在去掉 **components.ts** 中的 **namespace** 命名空间代码，写成**es6** 的 **export** 导出模式
代码如下
```javascript
export class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Header";
    document.body.appendChild(elem);
  }
}

export class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Content";
    document.body.appendChild(elem);
  }
}

export class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Footer";
    document.body.appendChild(elem);
  }
}
```
现在三个类都已经export 导出了，也就是说可以实现用 import 进行引入了

#### 修改page.ts文件
来到 **page.ts** 文件，去掉 **namespace** 命名空间对应的代码，然后使用 **import** 语法进行导入 **Header** **Content** 和 **Footer** 
代码如下
```javascript 
import {Header,Content,Footer} from "./components"
export class Page{
  constructor(){
    new Header()
    new Content()
    new Footer()
  }
}
```
现在看起来确实和工作中写的代码很类似了，这时候可以使用 **tsc** 进行编译。然后可以看到编译好的代码都是 **define** 开头的（这个是amd规范的代码，不能直接在浏览器中运行，可以在node中直接运行）这种代码在浏览器是没有办法直接运行的，需要其他库(例如require.js)的支持

#### 引入require.js
> require.js的CDN地址：[ https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js](https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js)

复制好url以后，记得使用 **script**标签进行引入，代码如下
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js"></script>
```
这时候就可以解析 **define** 这样的语法了，然后把 **page.ts** 中接入**default** 关键词，如果不加是没有办法直接引用到的
```javascript
import {Header, Content, Footer} from "./components"
export default class Page{
  constructor(){
    new Header();
    new Content();
    new Footer();
  }
}
```
这时候再用 **tsc**进行编译一下，你会发现还是有问题，因为使用**export default** 这种形式的语法，需要在**html**里面用**require**来进行引入

#### require 方式引入
因为你已经引入了 **require.js**这个库，所以现在可以直接在代码中使用**require**了。具体代码如下
```javascript
<body>
  <script>
    require(["page"], function(page){
      new page.default()
    })
  </script>
</body>
```