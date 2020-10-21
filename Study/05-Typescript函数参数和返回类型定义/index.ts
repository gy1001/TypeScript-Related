/*
* @Author: gaoyuan
* @Date: 2020-10-21 14:01:59
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-21 14:15:41
*/
function errorFunction():never{
  throw new Error()
  console.log("hello world")
}

function forEver():never{
  while(true){}
  console.log("hello world")
}

function add({ one, two }) {
  return one + two;
}
const total = add({ one: 1, two: 2 })


// 以下是错误的写法
//function add({one:number,two:number}):number{
//  return one + two
//}
//const total = add({ one:1, two:2 })