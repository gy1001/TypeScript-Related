/*
 * @Author: gaoyuan
 * @Date: 2020-10-22 10:39:22
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 15:06:12
 */
class Lady{
  content="Hi, 帅哥";
  sayHello(){
    return this.content
  }
} 
const goddess = new Lady()
console.log(goddess.sayHello())
console.log(goddess.content)

// 继承
class XiaoJieJie extends Lady{
  sayLove(){
    return "I love you"
  }
}
const god1 = new XiaoJieJie()
console.log(god1.content)
console.log(god1.sayHello())
console.log(god1.sayLove())


// 重写
class XiaoJieJie2 extends Lady{
  sayLove(){
    return "i love you!"
  }
  sayHello(){
    return "Hi, honey!"
  }
}
const god2 = new XiaoJieJie2()
console.log(god2.sayHello())
console.log(god2.sayLove())



// 使用super关键字
class XiaoJieJie3 extends Lady{
  sayLove(){
    return "i love you"
  }
  sayHello(){
    return super.sayHello()+",你好"
  }
}
const god3 = new XiaoJieJie3()
console.log(god3.sayLove())
console.log(god3.sayHello())