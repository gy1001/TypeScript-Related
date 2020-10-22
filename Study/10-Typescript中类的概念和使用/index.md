<!--
 * @Author: gaoyuan
 * @Date: 2020-10-22 10:39:18
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 15:04:55
-->
#### 类的基本使用
```javascript
  class Lady{
    content = "Hi, 帅哥",
    sayHello(){
      return this.content
    }
  } 
  const goddess = new Lady()
  console.log(goddess.sayHello())
```
这是一个最简单的类了
#### 类的继承
ts的继承和es6是一样的，关键词是extends
比如我们这里新建一个XiaoJieJie的类，然后继承Lady类，并新写一个方法sayLove
具体代码如下
```javascript
  class Lady{
    content='hi 帅哥';
    sayHello(){
      return this.content
    }
  }
  class XiaoJieJie extends Lady{
    sayLove(){
      return "I love you"
    }
  }
  const goddess = new XiaoJieJie()
  console.log(goddess.sayHello())
  console.log(goddess.sayLove())
```


#### 类的重写
上面是继承，接下来就是重写。重写就是子类可以重新定义父类里面的代码
我们重写XiaoJieJie这个类里重写父亲的sayHello 方法，比如我们现在我们觉得叫的不够亲切，我们改为下面这个样子
```javascript
  class XiaoJieJie extends Lady{
    sayLove(){
      return "i love you!"
    }
    sayHello(){
      return "Hi, honey!"
    }
  }
```

#### super 关键字的使用
如果我们还想在子类中使用父类lady中的方法或者属性，但是又要重写其中的方法，这时候就可以使用super关键字
代码如下
```javascript
  class XiaoJieJie extends Lady{
    sayLove(){
      return "i love you"
    }
    sayHello(){
      return super.sayHello()+",你好"
    }
  }
```