/*
 * @Author: gaoyuan
 * @Date: 2020-10-22 16:27:50
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 17:10:21
 */
class XiaoJieJie{
  constructor(private _age:number){}
  get age(){
    return this._age
  }
}
const dajiao = new XiaoJieJie(28)
console.log(dajiao.age) // 28


class XiaoJieJie1{
  constructor(private _age:number){}
  get age(){
    return this._age - 10
  }
  set age(age:number){
    this._age = age + 3
  }
}
const dajiao1 = new XiaoJieJie1(28)
console.log(dajiao1.age) // 18
dajiao1.age = 25
console.log(dajiao1.age) // 18


// static
class Girl{
  static sayLove(){
    return "i love you"
  }
}
console.log(Girl.sayLove())