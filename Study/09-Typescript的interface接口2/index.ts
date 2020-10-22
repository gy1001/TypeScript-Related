/*
 * @Author: gaoyuan
 * @Date: 2020-10-21 16:41:53
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-22 10:38:05
 */
interface Girl{
  name: string,
  age: number,
  bust: number,
  waistline?:number,
  [propname:string]:any
}
const girl= {
  name:'大脚',
  age: 18,
  bust: 94,
  waistline: 21,
  sex:'女'
}

const getResume = (girl:Girl)=>{
  console.log(girl.name + "年龄是" + girl.age)
  console.log(girl.name + "胸围是" + girl.bust)
  girl.waistline && console.log(girl.name+"腰围是："+girl.waistline)
  girl.sex && console.log(girl.name + "性别是" + girl.sex)
}
getResume(girl)



interface Girl1{
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
  say(): string;
}

const girl1 = {
  name:'大脚',
  age: 18,
  bust: 94,
  waistline: 21,
  sex:'女',
  say(){
    return "欢迎光临 ，红浪漫洗浴！！";
  }
}


const getResume1 = (girl:Girl1)=>{
  console.log(girl.say())
  console.log(girl.name + "年龄是" + girl.age)
  console.log(girl.name + "胸围是" + girl.bust)
  girl.waistline && console.log(girl.name+"腰围是："+girl.waistline)
  girl.sex && console.log(girl.name + "性别是" + girl.sex)
}
getResume1(girl1)


interface Teacher extends Girl1{
  teach(): string
}


const getResume2 = (girl:Teacher)=>{
  console.log(girl.say())
  console.log(girl.teach())
  console.log(girl.name + "年龄是" + girl.age)
  console.log(girl.name + "胸围是" + girl.bust)
  girl.waistline && console.log(girl.name+"腰围是："+girl.waistline)
  girl.sex && console.log(girl.name + "性别是" + girl.sex)
}

getResume2(girl1) // 报错，因为缺少teach方法

const girl2 = {
  name:'大脚',
  age: 18,
  bust: 94,
  waistline: 21,
  sex:'女',
  say(){
    return "欢迎光临 ，红浪漫洗浴！！";
  },
  teach(){
    return "我是一个老师"
  }
}
getResume2(girl2)