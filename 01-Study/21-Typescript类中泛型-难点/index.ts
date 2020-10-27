/*
 * @Author: gaoyuan
 * @Date: 2020-10-26 11:10:41
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-26 14:49:18
 */
class SelectGirl{
  constructor(private girls:string[]){}
  getGirl(index:number):string{
    return this.girls[index]
  }
}

const selectGirl = new SelectGirl(["大脚","刘颖","小红"])
console.log(selectGirl.getGirl(1))

// 使用编号
class SelectGirl1{
  constructor(private girls:string[]|number[]){}
  getGirl(index:number):string|number{
    return this.girls[index]
  }
}

// 初始类的泛型
class SelectGirl2<T>{
  constructor(private girls:T[]){}
  getGirl(index:number){
    return this.girls[index]
  }
}
const selectGirl2 = new SelectGirl2(["大脚","刘颖","晓红"])
// 建议如下写
const selectGirl3 = new SelectGirl2<string>(["大脚","刘颖","晓红"])

// 增加继承
interface Girl {
  name: string
}
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

// 泛型约束
class SelectGirl5<T extends number | string>{
  // .... 
}