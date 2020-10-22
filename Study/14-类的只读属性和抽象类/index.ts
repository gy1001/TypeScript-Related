class Person{
  constructor(public name:string){}
}
const person = new Person("jspang")
console.log(person.name)
person.name="姬霓太美"
console.log(person.name)




class Person1{
  public readonly _name:string;
  constructor(public name:string){
    this._name=name
  }
}
const person1 = new Person1("jspang")
person1._name = "谢广坤" // 报错
console.log(person1._name)


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