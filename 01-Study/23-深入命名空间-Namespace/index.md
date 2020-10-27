<!--
 * @Author: gaoyuan
 * @Date: 2020-10-26 17:38:03
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-26 18:18:21
-->
接住上节课的内容

#### 用命名空间实现组件化
上节课的代码虽然实现了模块化和全局变量的污染，但是我们工作中分的要更细致一些, 会单独写一个 **components**
的文件，然后进行组件化

在src目录下新建一个文件 **components.ts**, 编写代码如下
```javascript
namespace Components {
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
}
```
这里需要注意的是，每个类(**class**)都使用了 **export**导出，导出后就可以在**page.ts** 中使用这些组件，比如这样使用--代码如下
```javascript 
namespace Home{
  export class Page{
    new Component.Header()
    new Component.Content()
    new Component.Footer()
  }
}
```
这时候你可以使用 **ts**进行编译，但在预览时候，你会发现还是会报错，找不到**Components**, 想要解决这个问题，我们必须在**index.html**里进行**components.js**文件
```javascript  
<script src="./build/page.js"></script>
<script src="./build/components.js"></script>
```
这样才可以正常的出现效果，但是这样引入太过麻烦了，可不可以像**webpack**那样，只生成一个文件呢，答案是肯定的


#### 多文件编译成一个文件
直接打开 **tsconfig.json**文件，然后找到**outFile**配置项，这个就是用来生成一个文件的设置，但是如果设置了它，就不在支持
**"module":"common.js"** 设置了，我们需要把它改成 **"module": "amd"**, 然后在去掉对应的 **outFile**注释，设置成下面的样子
```javascript
{
  "outFile": "./build/page.js"
}
```
配置好后，删除 **build** 下的**js**文件，然后用**tsc**进行再次编译
然后删掉**index.html** 文件中的**component.js**文件，在浏览器里还是可以运行的

#### 子命名空间
也就是说在命名空间里，再写一个命名空间，比如在 **Components.ts** 文件下修改代码如下：
```javascript
namespace Components{
  export namespace SubComponents{
    export class Test{
      
    }
  }
  // something ...
}
```
写完以后再次编译 **tsc**, 然后你再浏览器中也是可以查到这个命名空间的 **Components.SubComponents.Test**（需要重新刷新页面才会显示）


