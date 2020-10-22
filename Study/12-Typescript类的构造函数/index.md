<!--
 * @Author: gaoyuan
 * @Date: 2020-10-22 16:06:58
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 16:25:26
-->
构造函数就是类在被初始化时候，自动执行的一个方法。我们通过这个构造方法经常作很多需要提前完成的工作，
比如显示页面前我们从后台获得数据
看如下代码

#### 类的构造函数
新建一个类Person, 类的里面定义一个name，但是name我们并不给他值，然后我们希望在new 出对象的时候
直接通过传递参数的形式，给name赋值，并打印出来，这时候我们就需要用到构造函数了，
构造函数的关键字是 constructor
```javascript
  class Person{
    public name: string;
    constructor(name: string){
      this.name = name
    }
  }
  const person = new Person("jsPang")
  console.log(person.name)
```
以上是常规和好理解的方法那有没有更简单的方法呢？当然有,以下就是简写
```javascript
  class Person{
    constructor(public name:string){}
  }
  const person = new Person("12-简写-jspang")
  console.log(person.name)
```
这种写法相当于你定义了一个name,然后在构造函数里进行了赋值，这是一种简化的语法，在工作中我们经常用这种语法的时候会多一点

##### 类继承中的构造器写法
普通类的构造器我们已经学会，在子类中使用构造函数需要用super 调用父类的构造函数。这时候你可能不太理解我说的话，我们还是通过代码来说明
```javascript
  class Person{
    constructor(public name:string){}
  }
  class Teacher extends Person{
    constructor(public age:number){
      super("jspang")
    }
  }
  const teacher = new Teacher(10)
  console.log(teacher.name)
  console.log(teacher.age)
```