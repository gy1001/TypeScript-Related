<!--
 * @Author: gaoyuan
 * @Date: 2020-10-21 15:11:53
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-21 15:28:58
-->
ts中提供了**元组**的概念，这个概念**js**是没有的，你可以把元组看成数组的一个加强，他可以更好的控制或者说规范里面的类型

#### 元组的基本应用
我们先来看一个数组和数组注解的缺点，比如我们有一个小姐姐数组，数组中有姓名，职业和年龄，代码如下
```javascript
  const xiaojiejie = ["dajiao","teacher",20]
```
移动鼠标，你可以看到ts推断出来的类型。我们也可以使用类型注解的形式给他一个注解，代码如下
```javascript
  const xiaojiejie:(string|number)[] = ["dajiao","teacher",20]
```
这时候你已经增加了代码注解，但是这并不是很好的限制，比如我们把代码改为下面的样子，ts依旧不会报错
```javascript
  const xiaojiejie:(string|number)[] = ["dajiao",29,"teacher"]
```
我们只是简单的把数组中的位置调换了一下，但是ts并不能发现问题，这时候我们需要一个更强大的类型，来解决这个问题，这就是元组
元组和数组类似，但是类型注解时候会不一样
```javascript
  const xiaojiejie:[string,string,number]=["dajiao","teacher",29]
```
这时候我们就把数组中的每个元素类型的位置给固定住了，这就叫做元组


#### 元组的使用
工作中不经常用元组，因为如果要使用元组，完全可以使用对象的形式来代替，但是如果维护老系统，你就会发现一种数据源时CSV，这种文件提供的就是用逗号隔开的。
如果严谨编程就需要用到元组了，例如我们有这样一组由CSV提供的（注意这里只是模拟数据）
```javascript
  "dajiao","teacher"，28
  "liuying","teacher"，18
  "cuihua","teacher"，25
```
如果数据源得到的数据是这样的，你就可以使用元组了
```javascript
  const xiaojiejies:[string,string,number][] = [
    ["dajiao", "teacher", 28],
    ["liuying", "teacher", 18],
    ["cuihua", "teacher", 25],
  ]
```