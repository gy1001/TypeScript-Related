// type annotation 类型注解
let count: number
count = 111
// 这里就是类型注解，意思就是告诉代码，count是一个数字类型

// type inferrence 类型推断
let countInferrence = 123
// 这里并没有显式的告诉代码变量 countInferrence是一个数字类型, 如果你把鼠标移动到变量上
// 就会发现ts自动把变量注释了 number 类型 也就是说它具有某种推断能力，通过你的代码ts会
// 自动的去尝试分析变量的类型，这个就放佛人的情商比较高，还没等对方表白，你就已经看出对方的心思了



/**
 * 工作使用问题
 *  1. 如果 TS 能够自动分析变量类型，我们就什么也不需要做了
 *  2. 如果 TS 无法分析变量类型的话，我们就需要使用类型注释
 */
// 先看一个不需要写类型注解的例子
const one = 1
const two = 2
const three = one + two

// 再来看个需要加写类型注解的例子
function getTotal(one, two){
  return one + two
}
const total = getTotal(1,2)
// 上面这个之所以需要写类型注解，因为这里的one two 会显示为 any 类型，这时候如果你传入字符串，
// 你的业务逻辑就是错误的，所以你必须加一个 类型注解， 改为如下样子

/**
  function getTotal(one: number, two:number){
    return one + two
  }
 */

// 还有一个问题，total 这个变量是不需要加类型注解的，因为one 和 two 加上类型注解后，ts就可以自动通过类型判断，分析出变量的类型


// 还有一点
// ts也可以推断出对象中属性的类型, 比如如下代码
const otherJieJie ={
  name:"刘颖",
  age:18
}
// 鼠标移动到otherJieJie 上，就会提示它里面的属性，这表明ts也分析出了对象的属性类型

// 总结
// 在写ts代码中的一个重要宗旨就是每个变量，每个对象的属性类型应该是固定的，如果你推断让他推断，推断不出来的时候需要增加类型注解