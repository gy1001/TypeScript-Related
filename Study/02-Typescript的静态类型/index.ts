// 1: 如何定义静态类型
const count:number = 1
// 这里的count是一个 number 静态类型，以后不可改变类型了
// 如下就会报错
count = "111"


// 2: 自定义静态类型
// 通过interface 定义自己想要的静态类型
interface XiaoJieJie{
  name: string,
  age: number
}
const xiaoHong:XiaoJieJie= {
  name:'小红',
  age: 2222
}

// 总结
// 如果使用了静态类型，不仅仅意味着变量的类型不可以改变，还以为着类型的属性和方法也跟着确定了。这个特点大大提高了程序的健壮性
// 并且编辑器会给你很好的语法提示，加快开发效率
