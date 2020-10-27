/*
 * @Author: gaoyuan
 * @Date: 2020-10-21 15:29:55
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-21 16:42:21
 */
const screenResume = (name:string,age:number,bust:number)=>{
  age < 24 && bust >= 90 && console.log(name + "进入面试");
  age > 24 || (bust < 90 && console.log(name + "你被淘汰"))
}
screenResume("大脚", 18, 94) // 大脚进入面试

const getResume = (name:string,age:number,bust:number)=>{
  console.log(name+"年龄是:"+age)
  console.log(name+"胸围是:"+bust)
}
getResume("大脚",18,94)
/**
 * 大脚年龄是:18
  大脚胸围是:94
 */

interface Girl{
  name: string;
  age: number;
  bust: number;
  waistline?: number;
}

interface Girl2{
  name: string;
  age: number;
  bust: number;
  waistline?: number;
}

const getResume2 = (girl:Girl)=>{
  console.log(girl.name + "年龄是" + girl.age)
  console.log(girl.name + "胸围是" + girl.bust)
  girl.waistline && console.log(girl.name + "腰围是" + girl.waistline)
}