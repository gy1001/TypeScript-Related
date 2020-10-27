<!--
 * @Author: gaoyuan
 * @Date: 2020-10-21 15:29:50
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-21 16:40:17
-->

ts中的接口，就是用来规范类型的

#### interface接口初步了解
我们要制作一个简历的自动筛选程序，很简单，符合一定条件（比如年龄小于25等等）可以进入面试环节，我们最开始的写法是这样的
```javascript 
  const screenResume = (name:string,age:number,bust:number)=>{
    age < 24 && bust >= 90 && console.log(name + "进入面试");
    age > 24 || (bust < 90 && console.log(name + "你被淘汰"))
  }
  screenResume("大脚", 18, 94)
```
写好后，好像程序写的不错，可以在终端中使用 ***ts-node index.ts*** 进行查看名字。这时候老板增加了需求，必须看到这些人的简历，于是你又写了一个方法
```javascript
  const getResume = (name:string,age:number,bust:number)=>{
    console.log(name+"年龄是:"+age)
    console.log(name+"胸围是:"+bust)
  }
  getResume("大脚",18,94)
```
这时候问题来了，程序开发中一直强调“代码重用”,两个方法用的类型注解一样，需要作个统一的约束。上节课我们学了一个 **类型别名** 的知识可以解决代码重复的问题，这节课我们就学习一个更常用的语法**接口(interface)**

我们把两个重复的类型注解，定义成一个统一的接口，代码如下:
```javascript
  interface Girl{
    name: string;
    age: number;
    bust: number;
  }
```
有了接口以后，我们的程序也要做些修改，需要写成下面的样子，这样就更像是面象对象编程了
```javascript
  const screenResume = (girl:Girl)=>{
    girl.age <24 && girl.bust>=90 && console.log(girl.name+"进入面试")
    girl.age <24 || (girl.bust<90 && console.log(girl.name+"你被淘汰"))
  }
  const getResume = (girl:Girl)=>{
    console.log(girl.name+"年龄是"+girl.age)
    console.log(girl.name+"胸围是"+girl.bust)
  }
  const girl = {name:"大脚",age: 18,bust:94}
  screenResume(girl)
  getResume(girl)
```
这时候我们代码就显得专业了很多，以后再用到同样的接口也不怕了，直接使用Girl就可以了。

#### 接口和类型别名的区别
主要区别是
> 类型别名可以直接给类型，比如string，而接口必须代表对象
比如我们的 类型别名 可以直接写出下面的代码
```javascript 
  type Girl1 = string
```
但是接口不能这样写，因为他必须代表的是一个对象，也就是说，你初始化girl时候，必须写出下面的形式
```javascript 
  const girl = {
    name: "大脚",
    age: 18,
    bust: 94
  }
```

#### 接口非必选直值得定义
比如这时候又有了新需求，要求尽量能看到简历者的腰围，但是不做强制要求，就是可选值。接口需要如下定义
```javascript 
  interface Girl{
    name: string;
    age: number;
    bust: number;
    waistline?: number;
  }
```
然后在修改一下getResume 方法，写成这样
```javascript
  const getResume = (girl:Girl)=>{
    console.log(girl.name + "年龄是" + girl.age)
    console.log(girl.name + "胸围是" + girl.bust)
    girl.waistline && console.log(girl.name + "腰围是" + girl.waistline)
  }
```