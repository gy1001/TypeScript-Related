<!--
 * @Author: gaoyuan
 * @Date: 2020-10-22 17:46:27
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 23:06:27
-->
<!--
 * @Author: gaoyuan
 * @Date: 2020-10-22 17:46:27
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 18:28:30
-->
抽象类跟父类很像，都需要继承，但是抽象类里一般都有抽象方法。继承抽象类的类**必须实现抽象方法**才可以
再讲抽象类以前，我想把上节课我遗忘的一个知识点给补上，那就是类的只读属性 readonly

#### 类的只读属性

通常情况下
```javascript
  class Person{
    constructor(public name:string){}
  }
  const person = new Person("jspang")
  console.log(person.name)
  person.name="姬霓太美"
  console.log(person.name)
```
需求如下：在实例化对象时候赋予的名字，以后不能在修改，也就是我们通常所说的只读属性。
这时候就可以用一个关键词readonly,也就是只读的意思，来修改Person类代码。修改如下
```javascript
  class Person{
    public readonly _name:string;
    constructor(public name:string){
      this._name=name
    }
  }
  const person = new Person("jspang")
  person._name = "谢广坤" // 报错，因为name是只读属性
  console.log(person._name)
```

#### 抽象类的使用
什么是抽象类呢？我给大家举个例子，比如我开了一个红浪漫洗浴中心，里面有服务员，有初级技师，高级技师等
每一个岗位我都写一个类，那代码就是这样的
```javascript 
  class Waiter{}
  class BaseTeacher{}
  class SeniorTeacher{}
```
作为老板，要求无论是什么职位，都要有独特的技能，比如服务员就是给顾客倒水，初级技师要求会泰式按摩，高级技师要求会 SPA 全身按摩。
这是一个硬性要求，但是每个职位的技能有不同，这时候就可以用抽象类解决问题

抽象类的关键词是 abstract 里面的抽象方法也是也是 abstract 开头的, 现在我们开始就写一个Girl的抽象类
```javascript
  abstract class Girl{
    abstract skill() // 因为这里没有具体的方法，所以这里不用写()
  }
```
有了抽象类，三个类就可以继承这个类，然后各自实现各自的skill方法
代码如下
```javascript
abstract class Girl{
  abstract skill()
}

class Waiter extends Girl{
  skill(){
    console.log("大爷，请喝水")
  }
}
class BaseTeacher extends Girl{
  skill(){
    console.log("大爷，来个泰式按摩吧") 
  }
} 
class SeniorTeacher extends Girl{
  skill(){
    console.log("大爷，来个全身按摩吧")
  }
}
```