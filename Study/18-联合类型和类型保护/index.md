<!--
 * @Author: gaoyuan
 * @Date: 2020-10-23 15:08:37
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-23 15:55:06
-->
联合类型和相关的类型保护知识，
只有联合类型存在的情况下，才需要类型保护
普通的类型注解，并不需要我们这种特殊操作，先看一下什么是联合类型
#### 联合类型展示

所谓联合类型，可以认为一个变量可能有两种或者两种以上的类型，用代码举个例子，
声明两个接口 Waiter(服务员)和 Teacher(技师)接口，然后写一个 judgeWho(判断是谁)的
方法，里面传一个 animal (任意值) ，这时候可能是 Waiter 也可能是 Teacher.
所以我们使用了联合类型，关键符号是 | (竖线)
```javascript
  interface Waiter{
    anjiao: boolean;
    skill: () => {}
  }
  interface Teacher {
    anjiao: boolean;
    say: () => {}
  }
  function judgeWho(animal: Waiter | Teacher){}
```
通过简单的例子，你应该知道什么是联合类型了
```javascript
  function judgeWho(animal: Waiter | Teacher){
    animal.say()
  }
```  
这时候问题来了，如果我直接写一个这样的方法，就会报错。因为 judgeWho 不能准确的判断联合类型具体的实例是什么

这时候就需要引出一个概念叫做 ***类型保护*** 类型保护有很多中方法，这节讲几个最常使用的

#### 类型保护--类型断言
类型断言就是通过断言的方式确定传递过来的准确值，比如上面的程序，如果会 anjiao 说明他是 技师 这时候就可以通过断言 animal as Teacher 
然后调用skill方法，程序就不会报错了。同样如果不会按脚，说明就是不同的服务员，这时候调用 say方法，就不会报错了。这就是通过类型断言的方式进行类型保护
也是最常见的一种类型保护形式，具体看代码
```javascript
interface Waiter{
  anjiao: boolean;
  skill: () => {}
}
interface Teacher {
  anjiao: boolean;
  say: () => {}
}
function judgeWho(animal: Waiter | Teacher){
  if(animal.anjiao){
    (animal as Waiter).skill()
  }else {
    (animal as Teacher).say()
  }
}
```
 
#### 类型保护-in语法
还可以使用 in 语法来作为类型保护，比如用 if 来判断 animal 里有没有 skill 方法
这里你可以赋值上面的 judgeWho 方法，然后改一下名字，我这里改成了 judgeWhoTwo 方法，具体看下面代码
```javascript
  function judgeWhoTwo(animal: Waiter|Teacher){
    if("skill" in animal){
      animal.skill()
    }else{
      animal.say()
    }
  }
```
这里的else 部分能够自动判断，得益于 ts 的自动判断

#### 类型保护-typeof 语法
假如我们书写一个方法，接收两个参数，这两个参数可以是数字 number 也可以是字符串 string, 如果我们不做任何的类型保护
只是相加，这时候就会报错,代码如下
```javascript 
function add(first:string|number,second:string|number){
  return first + second // 这里会报错 Operator '+' cannot be applied to types 'string | number' and 'string | number'
}
```
解决这个问题，就可以直接用 typeof 来进行解决
```javascript
  function add(first:string|number,second:string|number){
    if(typeof first === "string" || typeof second === "string"){
      return `${first}${second}`
    }
    return first + second
  }
```

#### 类型保护-instanceof 语法
比如现在要作类型保护的是一个对象，这时候就可以使用 instanceof 语法来写。
```javascript
  class NumberObj{
    count: number;
  }
```
然后我们再写一个 addObj 方法，这时候传递过来的参数，可以是任意的 object，也可以是 NumberObj的实力
然后我们返回相加值，当然不进行类型保护时候，代码一定是错误的
```javascript
function addObj(first: object| NumberObj, second: object | NumberObj){
  return first.count + second.count // 报错 Property 'count' does not exist on type 'object | NumberObj'. Property 'count' does not exist on type 'object'.
} 
```
报错不要紧，直接使用 instanceof 语法进行判断一下，就可以解决问题
```javascript
function addObj(first: object|NumberObj,second:object|NumberObj){
  if(first instanceof NumberObj && second instanceof NumberObj){
    return first.count + second.count
  }
  return 0;
}
```
另外要说明的是，instanceof 只能用再类上，这里我们介绍了四中类型保护的方式，每种方式都在不同场景中使用
（当然还有不常用的类型保护方式）深刻理解，多练习，开发时候才能灵活运用
