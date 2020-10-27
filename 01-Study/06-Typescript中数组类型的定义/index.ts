/*
 * @Author: gaoyuan
 * @Date: 2020-10-21 14:45:06
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-21 15:09:13
 */
//const numberArr = [1,2,3]
const numberArr: number[] = [1,2,3]
const stringArr: string[] = ["1","2","3"]
const undefinedArr: undefined[] = [undefined,undefined,undefined]
const arr:(number|string)[] = [1,"a",2,"2"]


const xiaoJieJieArr:{name:string,age:number}[] =[
  {name:"刘颖",age:19},
  {name:"小红",age:20},
]

type Lady = {name:string,age:number}
const xiaoJieJies: Lady[] = [
  {name: "刘颖",age: 19},
  {name: "小红",age: 20}
]

class Madam {
  name: string;
  age: number
}
const xiaoJieJies1:Madam[]=[
  {name: "刘颖",age: 19},
  {name: "小红",age: 20}
]