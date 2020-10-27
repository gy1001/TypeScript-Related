/*
 * @Author: gaoyuan
 * @Date: 2020-10-21 11:03:08
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-21 11:09:39
 */

// ts中静态类型分为两种： 基础静态类型和对象类型
// 1： 基础静态类型
const count:number = 98
const myName:string= "gy"
/**
 * 类似的静态类型还有很多，常用的比如：null undefined symbol boolean void 这些都是常用的基础数据类型
 */


// 2. 对象类型
const xiaoJieJie:{
  name: string,
  age: number
} = {
  name: '小红',
  age: 18
}
console.log(xiaoJieJie.name) //  小红
// 对象类型也可以是数组，
const xiaoJieJie1:String[] = ["大脚","小红","刘颖"]
// 上面的意思是xiaoJieJie1必须是一个数组，数组中的内容必须是字符串，如果把其中的一个字符串改为数字，就会提示报错
// 当然还可以是类
class Person{}
const  dajiao:Person = new Person()
// 还可以定义一个函数类型,并确定返回值
const jianXiaoJieJie:()=>string=()=>{ return "小红" }
// 总结：对象类型有如下多种形式
// 1: 对象类型 2：数组类型 3：类类型 4：函数类型
// 这几种形式我们在typeScript中叫做对象类型