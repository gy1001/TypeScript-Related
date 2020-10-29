<!--
 * @Author: gaoyuan
 * @Date: 2020-10-29 14:08:06
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-29 15:11:32
-->
这两个钩子函数是 vue3.x 版本新加的两个钩子函数，官方说是用来调试使用的，但是目前黑没有给出具体的调试案例

#### 对新旧钩子函数的使用原则
vue官方文档中，明确提出了，如果你使用 vue3 请尽量使用使用新的生命周期函数钩子函数，也就是上节课写在 setup 函数中 带 on的这些钩子函数

#### onRenderTracked 状态跟踪
onRenderTracked 直译过来就是状态跟踪，他会跟踪页面上所有响应式变量和方法的状态，也就是我们用 return 返回去的值，他都会追踪。只要页面有 update 情况
他就会跟踪，然后生成一个 event 对象，我们通过 event 对象来查找程序的问题所在。
使用 onRenderTracked 同样要使用 import 进行引入
```javascript
import {..., onRenderTracked } from 'vue'
```
引用后你就可以在 setup 函数中进行引用了
```javascript
onRenderTracked((event)=>{
  console.log("状态跟踪组件-----")
  console.log(event)
})
``` 
写完以后可以到终端中启动测试服务 npm run serve 然后看下效果，在组件没有更新的时候， onRenderTracked 是不会执行的，组件更新时候，他会跟踪里边每个值和方法的变化

#### onRenderTriggered 状态触发
onRenderTriggered 直译过来就是 状态触发，他不是跟踪每一个值，而是给你变化值的信息，并且新值和旧值都会给你明确的展示出来。
如果把 onRenderTriggered 比喻成散弹枪，每个值都进行跟踪，那 onRenderTriggered 就是狙击枪，只精确跟踪发生变化的值，进行针对性调试。
使用它同样要先用 import 进行引入
```javascript
import { ..., onRenderTriggered } from 'vue'
```
在使用 onRenderTriggered 前，记得注释相应的 onRenderTriggered 代码，这样看起来会直观很多。然后把 onRenderTriggered 函数，写在 setup 函数里边
```javascript
onRenderTriggered(event => {
  console.log("状态触发组件-------")
  console.log(event)
})
```
event 对象属性的详细介绍
```javascript
key 那边变量发生了变化
newValue 更新后变量的值
oldValue 更新前变量的值
target  目前页面中的响应变量和函数
```
通过这些你能很好的对代码进行调试，这些调试用的钩子函数，如果你能正常合理的使用，是真的可以快速解决问题的
有的小伙伴看到这里肯定会觉得，这个和 watch 很像，下节课我们再讲一下 watch 的使用，这个也有了很大的变化
