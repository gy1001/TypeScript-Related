<!--
 * @Author: gaoyuan
 * @Date: 2020-10-26 11:10:37
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-26 14:50:42
-->
上节课学习了在函数（方法中）使用泛型的基本语法，这节课看看在类中泛型的使用方法

#### 编写一个基本类
先编写一个基本的类 SelectGirl, 在类的构造函数中(constructor)需要传递一组女孩的名称，然后在通过下边
展现女孩的名称 代码如下
```javascript
class SelectGirl{
  constructor(private girls:string[]){}
  getGirl(index:number):string{
    return this.girls[index]
  }
}

const selectGirl = new SelectGirl(["大脚","刘颖","小红"])
console.log(selectGirl.getGirl(1))
```

在终端中使用 **ts-node index.ts** 进行预览，可以看到控制台中输出了 刘颖 的名称，学到现在你写这样的一个类应该是非常容易的

现在问题来了，比如现在更好的保护小姐姐，这些小姐姐使用编号了，那我们程序要如何修改呢，需要写成下面的样子，这时候代码看起来就没有那么优雅了
在ts中，编写代码时候，会经常使用泛型

```javascript
class SelectGirl1{
  constructor(private girls:string[]|number[]){}
  getGirl(index:number):string|number{
    return this.girls[index]
  }
}
```

#### 初始类的泛型
这时候我们要用泛型类型重构代码，要如何做？有了上一节课的基础，应该很好理解，就是用<> 编写，我们把代码修改成这个样子
```javascript
class SelectGirl<T>{
  constructor(private girls:T[]){}
  getGirl(index:number):T{
    return this.girls[index]
  }
}
const selectGirl = new SelectGirl(["大脚","刘颖","晓红"])
console.log(selectGirl.getGirl(1))
```
这段代码并不报错，也使用了泛型，但是在实例化对象的时候，ts是通过类型推断出来的。
上节课已经给了，这中方法并不好，所以需要在实例化对象的时候，对泛型的值进行确定，比如是 string 类型，就这样写
```javascript
const selectGirl = new SelectGirl<string>(["大脚","刘颖","晓红"])
```
这就是类里边最基础的泛型使用了

#### 泛型中的继承
现在需求发生了变化，要求返回一个对象中的name, 也就是下面的代码要改成这个样子
```javascript
  return this.girls[index].name
```
现在的代码一定是会报错的，但是这时候我们还要求我们这么做，意思就是说传递过来的值必须是一个对象类型的，里面还要有name属性，
这时候就要用到继承了，我用接口的方式来实现。写一个Girl的接口，每个接口里面都要有name属性
```javascript
  interface Girl{
    name: string;
  }
```
有了接口以后用 extends 关键词实现泛型继承，代码如下
```javascript
  class SelectGirl<T extends Girl>{
    ....
  }
```
这句话的意思是泛型里必须有一个name属性，因为他继承了Girl接口
现在程序还是报错的，因为我们 getGirl 方法返回的类型还不对，这时候应该是一个 string 类型才对，所以代码应该改为下面的例子
```javascript
class SelectGirl4<T extends Girl>{
  constructor(private girls:T[]){}
  getGirl(index:number):string{
    return this.girls[index].name
  }
}
const selectGirl4 = new SelectGirl4([
  {name:'大脚'},
  {name:'刘颖'},
  {name:'小红'}
])
console.log(selectGirl4.getGirl(1))
```
看一下这段代码的意思，就是我们在 selectGirl 类中使用了泛型，意思是我不知道以后还要用什么类型，但是我有一个约束条件，这个类型
必须要有一个name 属性，这个在工作中经常使用，所以必须要好好理解这的知识。有一定难度，需要反复试验和看源码。

#### 泛型约束
现在的泛型可以是任意类型，可以是对象、字符串、布尔值、数字都是可以的。但你现在要求这个泛型必须是string 或者 number 类型。我们还是拿上面的例子，
不过把代码改为最初的样子
```javascript
class SelectGirl<T>{
  constructor(private T[]){}
  getGirl(index:number):string{
    return this.girls[index]
  }
}
```
然后进行约束，这时候还是可以使用关键字extends 进行约束，代码改为如下样子
```javascript 
  class SelectGirl<T extends number|string>{
    
  }
```

