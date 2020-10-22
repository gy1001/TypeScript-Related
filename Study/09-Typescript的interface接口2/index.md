<!--
 * @Author: gaoyuan
 * @Date: 2020-10-21 16:41:57
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 10:36:02
-->

#### 允许加入任意值
简历一般是有自由发挥空间的，所以这时候需要一些任意值，就是自己愿意写什么就写什么，这时候interface接口也是支持的。
方法如下
```javascript
  interface Girl{
    name: string,
    age: number,
    bust: number,
    waistline?:number,
    [propname:string]:any
  }
```
这里的意思是，属性的名字是字符串类型，属性的值可以是任何类型

这时候我们在对象里添加一个性别属性，代码如下
```javascript
  const girl= {
    name:'大脚',
    age: 18,
    bust: 94,
    waistline: 21,
    sex:'女'
  }
```
在修改一下代码，这就没有错误了
```javascript 
  const getResume = (girl:Girl)=>{
    console.log(girl.name + "年龄是" + girl.age)
    console.log(girl.name + "胸围是" + girl.bust)
    girl.waistline && console.log(girl.name+"腰围是："+girl.waistline)
    girl.sex && console.log(girl.name + "性别是" + girl.sex)
  }
```
这时候我们的程序是不报错的，大事如果去掉刚才的设置，就会报错
```javascript
  [propname:string]:any // 去掉会报错
```

#### 接口里的方法
接口里不仅可以存储属性，还可以存方法，比如这时候有个say方法，返回值是string类型。这时候你就不要在想成简历了，你需要更面向对象化的编程，想象成一个人。
```javascript
  interface Girl{
    name: string;
    age: number;
    bust: number;
    waistline?: number;
    [propname: string]: any;
    say(): string;
  }
```
加上这个say方法后，程序马上就会报错，因为我们对象里没有say方法，那我们就要给对象一个say方法
```javascript
  const girl = {
    name:'大脚',
    age: 18,
    bust: 94,
    waistline: 21,
    sex:'女',
    say(){
      return "欢迎光临 ，红浪漫洗浴！！";
    }
  }
```

#### 接口和类的约束
我们都知道es6以后有个类的概念，类可以和接口很好的结合，我们先看一个例子
Array
```javascript
  class XioaJieJie implements Girl {}
```
这时候类会直接报错，所以我们需要把这个类写的完全点
```javascript
  class XiaoJieJie implements Girl {
    name = "刘英";
    age = 18;
    bust = 90;
    say() {
      return "欢迎光临 ，红浪漫洗浴！！";
    }
  }
```

#### 接口间的继承
接口也是可以用于继承的，比如你写了一个Teacher接口，继承于Person接口
```javascript
  interface Teacher extends Girl{
    teach(): string
  }
```
这时候需求发生变化了，说是只看Teacher级别的简历，那我们只需要修改getResume方法就好
```javascript
  const getResume = (girl:Teacher)=>{
    console.log(girl.name + "年龄是" + girl.age)
    console.log(girl.name + "胸围是" + girl.bust)
    girl.waistline && console.log(girl.name+"腰围是："+girl.waistline)
    girl.sex && console.log(girl.name + "性别是" + girl.sex)
  }
```
修改以后，调用如下代码发现报错了，因为这时候传入的值必须有Teacher中的teach方法
```javascript 
  getResume(girl)
```
所以需要修改girl对象，增加teach方法，这时候就不会报错了
```javascript
  const girl = {
    name:'大脚',
    age: 18,
    bust: 94,
    waistline: 21,
    sex:'女',
    say(){
      return "欢迎光临 ，红浪漫洗浴！！";
    },
    teach(){
      return "我是一个老师"
    }
  }
```
此时在调用就用就不会报错了
```javascript 
  getResume(girl)
```