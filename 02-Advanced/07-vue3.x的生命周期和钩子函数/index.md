<!--
 * @Author: gaoyuan
 * @Date: 2020-10-28 17:57:29
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-29 14:06:19
-->
vue3 版本的生命周期和 vue2 的生命周期相比有了些许变化，

#### 什么是生命周期
> vue 是组件化编程，从一个组件诞生到消亡，会经历很多过程，这些过程就叫做生命周期

来个比喻，生命周期和人从出生到入土是一样的，有青少年时期，青年时期，中年时期，老年时期。每个时期都应该有不同的任务，可以做不同的事情。
当你理解了什么是生命周期，你还了解一个概念”钩子函数“

> 钩子函数：伴随着生命周期，给用户使用的函数，操控生命周期，主要是操控钩子函数

vue3 的生命周期比较多，我们需要一个个给大家讲
* setup() 开始创建组件之前，在 beforeCreate 和 created 之前执行，创建的是 data 和 method
* onBeforeMount() 组件挂载到节点上之前执行的函数
* onMounted() 组件挂载完成后执行的函数
* onBeforeUpdated() 组件更新之前执行的函数
* onUpdated() 组件更新之后执行的函数
* onBeforeUnmount() 组件卸载之前执行的函数
* onActivated() 被包含在 **keep-alive** 中的组件，会多出两个生命周期钩子函数，被激活时候执行。
* onDeactivated() 比如从 A 组件切换到 B 组件， A 组件消失时候执行
* onErrorCaptured() 当捕获一个来自子孙组件的异常时候激活钩子函数(以后用到再讲，不好展现)

注： 使用 **keep-alive** 组件会将数据保留在内存中，比如我们不想每次看到一个界面都重新加载数据，就可以使用**keep-alive**组件解决
##### 钩子函数的使用
来到上节课中的”红浪漫点餐程序“ 在这个程序中依次输出对应的生命周期函数，来看看结果
Vue3.x 生命周期在调用前需要先进行引入，我们先暂时延时前五个生命周期
```javascript
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
} from "vue";
```
写完以后可以到浏览器看下效果，效果和你想象的应该是一样的
```javascript
1 - 开始创建组件---- - setup();
2 - 组件挂载到页面之前执行---- - onBeforeMount();
3 - 组件挂载到页面之后执行---- - onMounted();
4 - 组件更新之前---- - onBeforeUpdate();
5 - 组件更新之后---- - onUpdated();
```
这个时候一定有个疑问，那么Vue2.x版本的生命周期还可以使用吗？答案是肯定的
你可以在 setup 函数之后 编写 vue2的生命周期函数，代码如下
```javascript
beforeCreate(){
  console.log("1--组件创建之前----beforeCreate")
}
beforeMount(){
  console.log("2-组件挂载到页面之前执行----beforeMount")
}
mounted(){
  console.log("3-组件挂载到页面之后执行---mounted")
}
beforeUpdate(){
  console.log("4-组件更新之前----beforeUpdate")
}
updated(){
  console.log("5-组件更新之后----updated")
}
```
这时候可以看到，原来的生命周期也是完全可以使用

#### vue2.x 和 vue3.x 生命周期的对比
你也许会问，那我到底是使用 vue2.x还是vue3.x的生命周期钩子函数？其实这个无所谓，但是不能混用，如果你用 setup 这种 vue3的生命周期，就不要在使用vue2了。我了更好的掌握，做了一个函数对比

vue2  ----------------- vue 3
beforeCreate    ->      setup
created         ->      setup
beforeMount     ->      onBeforeMount
mounted         ->      onMounted
beforeUpdate    ->      onBeforeUpdate
updated         ->      onUpdate
beforeDestroy   ->      onBeforeUnmount
destroyed       ->      onUnmounted
activated       ->      onActivated
deactivated     ->      onDeactivated
errorCaptured   ->      onErrorCaptured

通过对比，可以很容易的看出 vue3 的钩子函数基本就是在 vue2 的基础上加一个 on, 但也有两个钩子函数发生了变化
* BeforeDestroy 变成了 onBeforeUnmount
* destroyed 变成了 onUnmounted

尤大神介绍的是 mount 比 Destroy 更形象，也和 beforeMount 相对应
除了这些钩子函数外，vue3.x 还增加了 onRenderTracked 和 onRenderTriggered 函数 ，这两个函数下节课讲解，