<!--
 * @Author: gaoyuan
 * @Date: 2020-10-23 15:55:53
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-23 17:38:08
-->

#### 一场大宝剑引出的思考

这节主要学一下 TypeScript 中枚举(enum)类型的使用，你如果在程序中能灵活的使用枚举(enum),会让程序有更好的可读性。这里我拿每次去“大宝剑”点餐作个比喻。

比如我们现在去 "大宝剑"时候，通过掷骰子随机选择一项服务，进行程序化模拟。这里先用 js 写法类编写

初级程序员写法
```javascript
function getServe(status: number){
  if(status === 0){
    return "massage"
  }else if(status === 1){
    return "SPA"
  }else if(status === 2){
    return "dabaojiao"
  }  
}

```
中级程序员写法:
```javascript
const Status = {
  MASSAGE: 0,
  SPA: 1,
  DABAOJIAN: 2
}

function getServe1(status: number){
  if(status === Status.MASSAGE){
    return "message"
  }else if(status === Status.SPA){
    return "SPA"
  }else if(status === Status.DABAOJIAN){
    return "dabaojiao"
  }  
}
const result = getServe(0)
console.log(`我要去${result}`)
```
高级程序员写法
```javascript
enum Status{
  MASSAGE,
  SPA,
  DABAOJIAN
}
function getServe(status: any){
  if(status === Status.MASSAGE){
    return 'massage'
  }else if(status === Status.SPA){
    return "spa"
  }else if(status === Status.DABAOJIAN){
    return 'dabaojian'
  } 
}
const result = getServe(Status.SPA)
console.log(`我要去${result}`)
```
#### 枚举类型的对应值
你调用时候传一个1，也会输出 我要去spa
```javascript
  const result = getServe(1)
```
这看起来很神奇，这是因为枚举类型是有对应的数字值的，默认是从0开始的，我们直接用
console.log()可以看出来
```javascript
console.log(Status1.MASSAGE) // 0
console.log(Status1.SPA) // 1
console.log(Status1.DABAOJIAN) // 2
```
如果不想默认从0开始，而是想从1开始，就可以这样写
```javascript
enum Status{
  MASSAGE = 1,
  SPA,
  DABAOJIAN
}
```

#### 枚举通过下标反查
我们这里能打印出枚举的值（也有叫做下标的）那如果我们知道下标后，也可以通过反差的方法，得到枚举的值
```javascript
  console.log(Status.MASSAGE, Status[1])
```
这样就进行了反查