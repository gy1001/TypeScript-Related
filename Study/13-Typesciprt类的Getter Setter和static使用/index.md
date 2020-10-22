<!--
 * @Author: gaoyuan
 * @Date: 2020-10-22 16:27:46
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 17:10:10
-->
上次学了访问类型private，他的最大用处就是封装一个属性，然后用Getter Setter 的形式类访问和修改这个属性

#### 类的Getter 和 Setter
例如：声明一个 XiaoJieJie类，都知道小姐姐的年龄是不能随便告诉别人的，所以使用private，这样别人就不知道她得真实年龄，只有自己知道
```javascript
  class XiaoJieJie{
    constructor(private _age:number){}
  }
```
如果别人想知道，就必须通过 getter 属性得知，注意这里用的属性。对他就是一个属性，getter属性的关键字是get,后边跟着类似方法的东西，但是你要注意
他并不是方法，归根结底还是属性
```javascript
  class XiaoJieJie{
    constructor(private _age:number){}
    get age(){
      return this._age
    }
  }
  const dajiao = new XiaoJieJie(28)
  console.log(dajiao.age)
```

这里的玄妙之处，在于我们可以对 _age 进行处理，比如别人问的时候处理一下再告诉他，可以这样写
```javascript
  class XiaoJieJie{
    constructor(private _age:number){}
    get age(){
      return this._age - 10
    }
  }
  const dajiao = new XiaoJieJie(28)
  console.log(dajiao.age)
```
这个时候大脚的年龄就变成了迷人的18岁了。
另外，_age是私有的，类的外部就没有办法改变，所以这时候也可以用setter属性进行改变,代码如下
```javascript
  class XiaoJieJie{
    constructor(private _age:number){}
    get age(){
      return this._age - 10
    }
    set age(age:number){
      this._age = age
    }
  }
  const dajiao = new XiaoJieJie(28)
  dajiao.age = 25
  console.log(dajiao.age)
```
其实setter也是可以保护私有变量的，这里也可以增加处理代码
```javascript
  set age(age:number){
    this._age += 3
  }
```

#### 类中的static
学习类，通常做法都是new 出来实例，然后在调用方法
常规写法
```javascript
  class Girl{
    sayLove(){
      return "i love you"
    }
  }
  const girl = new Girl()
  console.log(girl.sayLove())
```
如果你不想new，直接使用这个方法，ts也提供了便捷的方式，那就是用static声明的属性和方法，不需要进行对象声明，可以直接使用
```javascript
  class Girl{
    static sayLove(){
      return "i love you"
    }
  }
  console.log(Girl.sayLove())
```

