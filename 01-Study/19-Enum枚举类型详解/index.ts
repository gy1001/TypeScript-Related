/*
 * @Author: gaoyuan
 * @Date: 2020-10-23 15:56:02
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-23 17:35:33
 */

 
function getServe(status: number){
  if(status === 0){
    return "message"
  }else if(status === 1){
    return "SPA"
  }else if(status === 2){
    return "dabaojiao"
  }  
}
const result = getServe(0)
console.log(`我要去${result}`)

const Status = {
  MESSAGE: 0,
  SPA: 1,
  DABAOJIAN: 2
}

function getServe1(status: number){
  if(status === Status.MESSAGE){
    return "message"
  }else if(status === Status.SPA){
    return "SPA"
  }else if(status === Status.DABAOJIAN){
    return "dabaojiao"
  }  
}
const result1 = getServe(1)
console.log(`我要去${result1}`)


enum Status1{
  MASSAGE,
  SPA,
  DABAOJIAN
}
function getServe2(status: any){
  if(status === Status1.MASSAGE){
    return 'massage'
  }else if(status === Status1.SPA){
    return "spa"
  }else if(status === Status1.DABAOJIAN){
    return 'dabaojian'
  } 
}
const result2 = getServe2(Status1.SPA)
console.log(`我要去${result2}`)

// 枚举类型的对应值
console.log(Status1.MASSAGE) // 0
console.log(Status1.SPA) // 1
console.log(Status1.DABAOJIAN) // 2


enum Status2{
  MASSAGE = 1,
  SPA,
  DABAOJIAN
}
console.log(Status2.MASSAGE) // 1
console.log(Status2.SPA) // 2
console.log(Status2.DABAOJIAN) // 3


console.log(Status2.MASSAGE, Status2[1])
