<!--
 * @Author: gaoyuan
 * @Date: 2020-10-22 15:07:03
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 15:43:44
-->
上节课中学习了类的使用，这节我们学习一下其中的访问类型
其中类的访问类型就是基于三个关键词private protected public

#### 先写一个简单的类
```javascript
  class Person{
    name: string
  }
  const person = new Person()
  person.name = "jspang.com"
  console.log(person.name)
```

#### public 访问属性讲解
如果我们不在类里对name的访问属性进行定义，他就会默认是 public 访问属性
这就相当于下面这段代码
```javascript
  class Person{
    public name:string;
  }
```
> public 从英文字面的结实就是公共的或者说公众的，在程序里的意思就是允许在类的内部和外部调用

比如我们在类内部调用，我们再写一个sayHello方法，代码如下
```javascript
  class Person{
    public name:string;
    public sayHello(){
      console.log(this.name + "say hello")
    }
  }
```
这里的this.name就是类的内部调用，我们在下面执行下这个方法person.sayHello()方法，终端中可以拿到一切正常运行了，
在类的外部调用，比如下面的代码，注释横线下，全部是类的外部
```javascript
  class Person{
    public name:string;
    public sayHello(){
      console.log(this.name + "say hello")
    }
  }
  // --------------------------------------
  const person = new Person()
  person.name = "jspang.com"
  person.sayHello()
  console.log(person.name)
```

#### private 访问属性讲解
> private 访问属性的意思，就是只允许在类的内部被调用，外部不允许调用
修改代码如下

```javascript 
  class Person{
    private name:string;
    public sayHello(){
      console.log(this.name + "say hello")
    }
  }
  // --------------------------------------
  const person = new Person()
  person.name = "jspang.com" // 此处报错
  person.sayHello()
  console.log(person.name) // 此处报错
```
#### protected 访问属性讲解

> protected 允许在类的内及继承的子类中使用

举一个例子
```javascript
  class Person{
    protected name:string;
    public sayHello(){
      console.log(this.name + "say hello")Å
    }
  }
  class Teacher extends Person{
    public sayBye(){
      return this.name
    }
  }
```