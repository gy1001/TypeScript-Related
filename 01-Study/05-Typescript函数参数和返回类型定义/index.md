<!--
 * @Author: gaoyuan
 * @Date: 2020-10-21 13:35:27
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-21 14:26:15
-->
#### 简单的类型定义
上一节中我们用到了 **getTotal** 函数，并且对传入的参数进行了定义，我们在复习一遍
```javascript
  function getTotal (one:number,two:number){
    return one + two // 这是ts通过类型推断推断出来返回值是一个number类型的，
  }
  const total = getTotal(1, 2) 
```
如果代码写错了，写成了如下的样子，怎么办？
```javascript
  function getTotal (one:number,two:number){
    return one + two + "" 
  }
  const total = getTotal(1, 2) 
```
这里的total值就不是number类型了，但是不会报错，
方法一：给total 一个类型注解，比如如下
const total:number = getTotal(1, 2) 
这样写可以让编辑器报错，但是不是很高明的算法，因为你没有找到错误的根本，这时候的错误是 **getTotal** 的错误，所以合适的做法是给函数的返回值加上类型注解，代码如下
```javascript
  function getTotal (one:number,two:number):number{
    return one + two 
  }
  const total = getTotal(1, 2) 
```
这样就比较严谨了，所以小伙伴在写代码时候，尽量让自己的代码更加严谨

#### 函数无返回值时候的定义方法
有时候函数是没有返回值，比如如下
```javascript
  function sayHello(){
    console.log("hello world")
  }
```
这就是没有返回值的函数，我们就可以给他一个类型注解void, 代表没有任何返回值
```javascript
  function sayHello():void{
    console.log("hello world")
  }
```
这样定义以后，你在加入任何返回值，程序都会报错

#### never返回值类型
如果一个函数是永远也执行不完的，那么就可以定义返回值为never
那么什么样子的函数是永远也执行不完的？
1. 我们先写一个这样的函数（比如执行的时候，抛出了异常，这时候就无法执行完成了）
```javascript 
  function errorFunction():never{
    throw new Error()
    console.log("hello world")
  }
```
还有一种是一直循环，也就是我们常说的死循环，这样就运行不完，比如下面的代码
```javascript
  function forEver():never{
    while(true){ }
    console.log("hello world")
  }
```

#### 函数对象为对象（解构）时
当一个函数参数是对象时候，我们如何定义参数对象的属性类型？
一般的javascript是如下的写法
```javascript 
  function add({ one, two }) {
    return one + two;
  }
  const total = add({ one: 1, two: 2 })
```
这样写的话这的total有可能会是任何类型，那么我们要如何给他增加类型注释呢？
可能会这样写？
```javascript   xxxxxxxx 错误的写法
  function add({one:number,two:number}):number{  
    return one + two
  }
  const total = add({ one:1, two:2 })
```
在编辑器可以看到此种写法是错误的写法

正确的写法应该是这样的
```javascript
  function add({one,two}:{one:number,two:number}):number{  
    return one + two
  }
  const total = add({ one:1, two:2 })
```
如果参数是对象，并且里面只有一个属性时候，我们更容易写错，错误代码如下
```javascript
  function getNumber({one}:number):number{
    return one
  }
  const one = getNumber({one: 1})
```
正确的代码应该是这样的
```javascript
  function getNumber({ one }:{ one: number }): number{
    return one
  }
  const one = getNumber({one: 1})
```
注意注意