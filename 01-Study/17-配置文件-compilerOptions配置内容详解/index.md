<!--
 * @Author: gaoyuan
 * @Date: 2020-10-23 14:26:51
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-23 15:05:06
-->
#### rootDir 和 outDir
现在的设置方式，js 文件直接编译到了根目录下，和 ts 文件合在了一起。
假如我们希望打包后的 js 都生成在特定的一个文件夹里，比如 build

这时候你就可以通过配置 outDir 来配置，当然你也可以通过 rootDir 类指定ts文件的位置，比如我们把所有的
ts文件都放到src下，那配置文件应该这样写
```javascript
  {
    "outDir": "./build",
    "rootDir": "./src"
  }
```
这时候你在 terminal 中输入tsc, 就会有不同的效果

#### 编译 ES6 语法到ES5语法--allowJs

在src目录下用es6语法新建一个js文件，写下如下代码
```javascript
  export const name = "jspang"
```
如果你不做任何配置，这时候使用tsc是没有效果的，你需要 tsconfig.json文件进行修改
修改的地方有两处
```javascript
  "target" :"es5", // 这一项默认是开启的，你必须保证他的开启，才能转换成功
  "allowJs": true // 这是配置项的意思是联通
```
这两项都开启以后，在使用tsc编译时，就会编译js文件了。

#### sourceMap属性
如果把 sourceMap 的注释去掉，在打包过程中就会给我们生成 sourceMap 文件

> sourceMap 简单说，source map 就是一个信息文件，里面存储这个位置信息，也就是说，转换后的代码的每一个位置，所对应的转换前的位置
有个它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。这给开发者带来了很大的方便

#### noUnusedLocals 和 noUnusedParameters 
假如我们修改以下代码为如下样子
```javascript
  const jspang: string =null
  export const name = "jspang"
```
这时候你会发现 jspang 这个变量没有任何地方使用，但是我们编译的话，他仍然会被编译出来，这既是一种资源的浪费
```javascript
//编译后的文件
    "use strict";
    exports.__esModule = true;
    exports.name = void 0;
    var jspang = null;
    exports.name = "jspang";
```
这时候我们开启 noUnusedLocals: true 开启后我们的程序会直接给我们提示不能这样编写代码,有 没有使用的变量存在

noUnusedParameters 是针对于没有使用的函数的，方法和 noUnusedLocals一样
具体的参考[官方链接](https://www.tslang.cn/docs/handbook/compiler-options.html)