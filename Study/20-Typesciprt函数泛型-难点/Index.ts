/*
 * @Author: gaoyuan
 * @Date: 2020-10-23 17:39:58
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-26 11:08:27
 */
function join (first: string| number, second: string | number){
  return `${first}${second}`
}
join("jspang",".com")


function join1<JSPang>(first: JSPang, second: JSPang){
  return `${first}${second}`
}
join1<string>("jspang",".com")
join1<number>(1,10)
// join1(1,".com") // 报错
// join1(".com", 1) // 报错


function myFun<ANY>(params:ANY[]) {
  return params
}
myFun<string>(["1234","5678"])


function myFun1<ANY>(params:Array<ANY>){
  return params
}
myFun1<string>(["1234","5678"])


function join2<T,P>(first:T,second: P){
  return `${first}${second}`
}

join2<number,string>(1, "jspnag")

// 类型推断
function join3<T, P>(first: T, second: P){
  return `${first}${second}`
}
join3(1,"2")
