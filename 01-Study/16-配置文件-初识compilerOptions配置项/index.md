<!--
 * @Author: gaoyuan
 * @Date: 2020-10-23 11:50:59
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-23 14:21:24
-->
compilerOptions 配置是告诉ts 具体如何编译成 js文件的
里面的而配置项目非常多先来几个简单的

#### removeComments 属性
removeComments 是 compilerOptions 中的一个子属性，他的用处就是告诉ts对编译出来的js文件是否显示注释
比如我们设置为true,就是在编译文件后不显示注释
在index.ts中加入如下代码
```javascript 
  // i am jspang
  const person: string = "jspang"
```
写完运行tsc， 很快生成一个 index.js 文件，打开后看到如下的代码
```javascript
  "use strict"
  var person = "jspang"
```
当removeComments 设置为true以后，就看不到注释了

#### strict 属性
strict 属性如果设置为true，就代表我们的编译和书写规范，是需要按照ts最严格的规范来写，如果我们把这个属性设置为
false 或者注释掉，意思就是我们可以对设置一些不严格的写法

#### noImplicitAny 属性
noImplicitAny 属性的作用,允许你的注解类型 any 不用特意表明，只听概念就很难理解。
什么叫做 允许你的注解类型 any 不用特意表明是什么意思？？？
为了更好的说明，我们看下代码
```javascript
  function jspang(name){
    return name
  }
```
这时候我们的ts是进行报错的，我们用 tsc 编译也是报错的，这就是因为我们开启了 strict: true ,我们先注释，然后把
noImplicitAny 的值设置为 false 就不会报错
如果设置为 noImplicitAny: true 意思就是值就算是any(任意值) 你也要进行类型注释
```javascript
  function jspang(name: any){
    return name
  }
```
你可以简单的理解为，设置为 true ，就是必须明确指定 any 类型的值。

#### strictNullChecks 属性
我们先把 strictNullChecks 设置为 false，他的意思就是 ***不强制检查NULL类型*** 
举个例子，写下如下代码
```javascript
  const jspang:string = null
```
代码写完后，你会发现这段代码是不报错的，如果是以前，一定是报错的，这是我们配置了 ”不强制检验null类型“
如果你设置 strictNullChecks 为true, 这时候就会报错了

#### ts-node 遵循 tsconfig.json文件 
上面提到过 tsc filename 是没办法遵循 tsconfig.js 设置的，那么 ts-node 是否遵循呢？
这里直接告诉你答案， ts-node 是遵循的，感兴趣的可以试下