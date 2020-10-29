<!--
 * @Author: gaoyuan
 * @Date: 2020-10-29 15:12:29
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-29 16:25:07
-->
vue2中也有 watch 监听器（侦听器）,作用是用来侦测响应式数据的变化，并且可以得到 newValue 新值和 oldValue 旧值
如果你熟悉 Vue2 一定熟悉这个函数，但在 vue3 中watch 有了一些稍微的变化。

#### 修改标题引出的需求和界面修改
现在我们的”红浪漫洗浴中心“老板有新的需求了，当你点击按钮，点餐完毕，web标题也跟着变化，这时候你好像没有办法变成自动响应的双向绑定了。
今天的主角就派上用场了，watch 监听器隆重登场

类似的情况也会有，比如根据值的变化，进行网络请求，根据值的变化进行组件的生成和销毁（我们经常称这类操作为副作用）。把这类需求写在 watch 监听器
里就是不错的选择

在写代码之前，你可以删除前两节课学习生命周期时的钩子函数，让代码变得干净一些。
现在你可以先做一个按钮的响应值和改变值的方法，并写在 setup 函数中，这里我使用了 ref 来 生成响应式数据，你可以跟着我一起复习一下
```javascript
{
  // .... 
  const overText = ref("红浪漫")
  const overAction = () => {
    overText.value = overText.value + "点餐完成 | "
  }
  return { ...refData, overText, overAction }
  // .... 
}
```
写完 js 代码后，在 template 模板中，编写下面的代码，这样可以在点击按钮时候，调用 overAction 函数
```html
 <div><button @click="overAction">点餐完毕</button></div>
 <div>{{ overText }}</div>
```
现在完成老板的需求，我们在改变的时候直接用 js 修改 web 的title
```javascript
const overAction = () => {
  overText.value = overText.value + "点餐完成 | ";
  document.title = overText.value
}
```
都完成后，可以到浏览器中看一下你写的效果。如果发现我们写的根本没有用处，跟我们想的一点都不一样。这时候就需要用 watch 来救场了
#### watch 监听器的实现
使用 watch 同样需要先进行导入
```javascript
import {..., watch } from 'vue'
```
引入后编写 watch 函数，他接受两个参数，第一个是要监听的值，这里是 overText，然后是一个回调函数。在函数中你可以获得新值和旧值。
```javascript
watch(overText, (newValue,oldValue) => {
  document.title = newValue
})
```
为了看到效果，我用 console.log 输出一下新值和老值
```javascript
watch(overText, (newValue,oldValue) => {
  document.title = newValue
  console.log(`new ->>> ${newValue}`)
  console.log(`old ->>> ${oldValue}`)
})
```
#### watch 多个值时
当你要watch 多个值的时候, 不是写多个 watch 函数，而是要传入数组的形式。比如现在我们同时要监听 data 中你选择了那个女孩，也就是 selectGirl 时，
我们可以使用数组的形式。
我们把程序写成这个样子，然后到浏览器中预览。
```javascript
watch([overText, data.selectGirl],(newValue,oldValue) => {
  console.log(`new ->>> ${newValue}`)
  console.log(`old ->>> ${oldValue}`)
  document.title = newValue[0] // 返回的 newValue 也是一个数组
})
```
发现报错了，他告诉我们可以用一个函数解决 reactive 中值的问题。把程序写成下面的这个样子就不会报错了
```javascript
watch([overText, () => data.selectGirl], (newValue, oldValue) => {
  console.log(`new--->${newValue}`);
  console.log(`old--->${oldValue}`);
  document.title = newValue[0];
});
```
现在程序就可以正常运行了，有人会说 vue3 不能监听 reactive 里面的值是不是一个bug， 我想说的是这并不是bug，而是为了保持和 vue2 的一致性，因为在 vue2 中也有这种结果，解决方案就是要么是 ref 或者这种 get/set 方法的形式，要么你开启设置 watchOptions 的 deep 为 true, 也就是深度监听模式

