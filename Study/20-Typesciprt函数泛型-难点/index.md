<!--
 * @Author: gaoyuan
 * @Date: 2020-10-23 17:39:52
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-26 11:09:47
-->
### 编写一个联合类型Demo
现在我们做一个简单的 join 方法，方法接收两个参数first 和 second 参数有可能是字符串类型，也有可能是数字类型. 方法里为了保证都可以使用，所以我们只做了字符串的加班拼接
```javascript 
function join (first: string| number, second: string | number){
  return `${first}${second}`
}
join("jspang",".com")
```
这个方法现在没有任何问题，但是现在有一个需求就是 first 参数如果传递的是string 类型， 要求second 也传递string类型。同理，如果first是number类型，second 也必须是 number 类型

这时候就需要用到 **泛型** 来进行解决这个问题了

#### 初始泛型概念-generic
> 泛型： generic：通用泛指的意思。那就简单的理解，泛型就是泛指的类型。

泛型的定义使用 **<>(尖角号)** 进行定义的，比如现在给 join 方法一个泛型，名字就叫做 JSPang（起这个名字的意思是，你可以随便起一个名字，但是工作中要进行语义化）后面的参数，这时候他也使用刚定义的泛型名称，然后在正式调用这个方法时候，就需要具体指明泛型的类型啦
```javascript 
  function join<JSPang>(first: JSPang, second: JSPang) {
    return `${first}${second}`;
  }
  join < string > ("jspang", ".com");
```
调用时候就直接如下调用即可
```javascript
  join1<string>("jspang",".com")
  join1<number>(1,10)
```
这就是简单的泛型理解了，因为在实际开发中，有很多对象和类的情况，里面的具体类型我们没办法了解，所以提供了这种泛型的概念。

#### 泛型中数组的使用
如果传递过来的值要求是数字，如何用泛型进行定义？ 两种方法，第一种是直接使用[],第二种就是使用 ***Array<泛型>*** 形式不一样，其他的都一样
第一种写法
```javascript
function myFun<ANY>(params:ANY[]) {
  return params
}
myFun<string>(["1234","5678"])
```
第二种方法
```javascript
  function myFun<ANY>(params:Array<ANY>){
    return params
  }
  myFun<string>(["1234","5678"])
```
在工作中，我们经常使用<T>来作泛型的表示，当然这不是什么硬性规定，这是大部分程序员的习惯而已

#### 多个泛型的定义
一个函数只能定义一个泛型吗？当然不是，是可以定义多个的，这是还是拿join方法进行举例，定义多个泛型，比如第一个泛型用T，第二个用p代表。
```javascript
function join<T,P>(first:T,second: P){
  return `${first}${second}`
}
join<number,string>(1, "jspnag")
```
会了两种，就会了第三种以上，泛型在造轮子的时候经常使用，因为造轮子很多东西都需要灵活性。泛型给了我们很好的灵活性，需要注意的是，如果函数定义了多个泛型，使用时候要对应的定义出具体的类型。

#### 泛型的类型推断
泛型也是支持类型推断的，比如下面的代码没有报错，这既是 **类型推断** 的功劳
```javascript
function join<T, P>(first: T, second: P){
  return `${first}${second}`
}
join(1,"2")
```
但是，个人不建议大量使用类型推断，这会让你的代码易读性和健壮性都会下降，所以这个知识点，大家知道就好了
