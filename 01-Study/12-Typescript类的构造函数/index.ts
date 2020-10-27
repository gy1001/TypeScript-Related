/*
 * @Author: gaoyuan
 * @Date: 2020-10-22 16:07:01
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 16:25:37
 */
class Person{
  public name: string;
  constructor(name: string){
    this.name = name
  }
}
const person = new Person("12-jsPang")
console.log(person.name)



class Person1{
  constructor(public name:string){}
}
const person1= new Person1("12-简写-jspang")
console.log(person1.name)



class Person2{
  constructor(public name:string){}
}
class Teacher extends Person2{
  constructor(public age:number){
    super("jspang")
  }
}
const teacher = new Teacher(10)
console.log(teacher.name)
console.log(teacher.age)