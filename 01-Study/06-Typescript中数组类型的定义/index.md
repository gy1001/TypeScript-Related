<!--
 * @Author: gaoyuan
 * @Date: 2020-10-21 14:29:56
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-21 15:09:57
-->
#### 一般数组类型的定义
定义一个最简单的数组类型，比如就是数字类型，那么就可以这样写
```javascript 
  const numberArr = [1,2,3]
```
移动鼠标会发现，这个numberArr 的类型是number[]类型，这是ts通过类型推断自己推断出来的，如果你要显示的注解，
也是非常简单，也可以写成下面的形式
```javascript
  const numberArr: number[] = [1,2,3]
```
同样道理，如果你的数组各项都是字符串，你就可以写成这样
```javascript 
  const stringArr: string[] = ["1","2","3"]
```
也就说你可以定义任意类型的数组，比如是 undefined
```javascript
  const undefinedArr: undefined[] = [undefined,undefined,undefined]
```
那么问题来了，如果数组有多种类型，比如既有数字类型，又有字符串类型,我们该如何进行定义呢？
如下代码就可以了
```javascript
  const arr:(number|string)[] = [1,"a",2,"2"]
```
数组简单类型的定义就是这样了，并不难

#### 数组中对象类型的定义
实际项目中数组中一定会有对象的出现，那对于这类带有对象的数据定义就稍微麻烦了点
比如我们定义一个有很多小姐姐的对象，每一个小姐姐都是一个对象，这样的定义对应的编程如下
```javascript 
  const xiaoJieJieArr:{name:string,age:number}[] =[
    {name:"刘颖",age:19},
    {name:"小红",age:20},
  ]
```
这种形式看起来比较麻烦，而且如果有同样类型数组，写代码也是比较麻烦，ts为我们准备了一个概念
叫做 ***类型别名(type alias)***
比如刚才的代码，就可以定义一个类型别名，定义别名时候以 type 关键字开始。
现在定义一个Lady 的别名
```javascript
  type Lady = {name:string, age: number}
```
有了这样的类型别名以后，就可以把上面的代码改为下面的形式了
```javascript
  type Lady = {name:string,age:number}
  const xiaoJieJies: Lady[] = [
    {name: "刘颖",age: 19},
    {name: "小红",age: 20}
  ]
```
这样的定义是完全起作用的，比如我们下面在对象中加入一个属性，这时候编辑器就会直接给我们报错了
接着，有人会问了，我用类进行定义可以吗？答案是可以的，比如我们定义一个Madam的类，然后用这个类来限制数组的类型也是可以的
```javascript 
  class Madam{
    name: string,
    age: number
  }
  const xiaoJieJies :Madam[]=[
    {name: "刘颖",age: 19},
    {name: "小红",age: 20}
  ]
```
可以看到结果，我们这么写也是完全可以的