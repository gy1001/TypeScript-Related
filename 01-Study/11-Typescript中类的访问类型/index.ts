/*
 * @Author: gaoyuan
 * @Date: 2020-10-22 15:07:07
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 15:55:59
 */
class Person{
  name: string
}
const person = new Person()
person.name = "jspang.com"
console.log(person.name)



class Person1{
  public name:string;
  public sayHello(){
    console.log(this.name + "say hello")
  }
}
// --------------------------------------
const person1 = new Person1()
person1.name = "jspang.com"
person1.sayHello()
console.log(person.name)


// private
class Person2{
  private name:string;
  public sayHello(){
    console.log(this.name + "say hello")
  }
}
// --------------------------------------
const person2 = new Person2()
person2.name = "jspang.com" // 此处报错
person2.sayHello()
console.log(person2.name) // 此处报错

// protected

class Person3{
  protected name:string;
  public sayHello(){
    console.log(this.name + "say hello")
  }
}
class Teacher extends Person3{
  public sayBye(){
    return this.name
  }
}

const teacher = new Teacher()
teacher.name = "jspang.com" // ????????????这里需要怎么修改
teacher.sayHello()
console.log(person.name) 