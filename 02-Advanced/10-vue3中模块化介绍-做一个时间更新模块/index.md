<!--
 * @Author: gaoyuan
 * @Date: 2020-10-29 16:47:27
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-29 17:38:22
-->
vue3.x版本最大的一个提升，就是有了更好的重用机制，你可以把任何你想独立的模块独立出去。比如在上节课的基础上，加一个显示当前时间
的功能(例如 17：30：20) 这个功能要在不同的页面进行反复调用
使用vue2.x的版本，一定会使用 mixins 进行代码的重用，当有 vue3.x
#### 让程序变的有感情
为了方便学习，我们把程序中大部分代码删除掉，修改为下面的例子
```html
<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
</div>
</template>

<script lang="ts">
import {  } from 'vue';
const app = {
  name: 'App',
  setup(){
    return {
      
    }
  }
}
export default app
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
然后就可以编写代码了

#### 先实现功能
先来看不重用的写法，也就是我们把程序直接写在 app.vue 这个组件里，这里你可以先顶一个 ref 变量 nowTime
然后通过 getNowTime 的方法，让他可以显示并一直更新当前时间。最后 return 里返回这个变量和方法
```javascript
// ....
const app = {
  name: "App",
  setup(){
    // ...
    const nowTime = ref("00:00:00");
    const getNowTime = () => {
      const now = new Date();
      const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
      const minu =now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
      const sec =now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
      nowTime.value = hour + ":" + minu + ":" + sec;
      setTimeout(getNowTime, 1000);   //每一秒执行一次这个方法
    };
    return {
      // ...
      nowTime,
      getNowTime
    }
    // ...
  }
}
export default app
// ... 
```
然后你需要在 template 里使用他们，代码如下
```html
<div>{{ nowTime }}</div>
<div><button @click="getNowTime">显示时间</button></div>
```
这里可以在浏览器里看到初始化时间00：00：00，点击按钮后，开始显示当前时间，并一直更新。
#### 独立模块的使用
这个显示时间的方法，可能在其他页面中也会使用，所以现在的需求是把这个时间显示的功能进行模块和重用化
可以在 src 目录下，新建一个文件夹 hooks (所有抽离出来的功能模块都可以放到这个文件夹里),然后在新建一个文件 useNowTime.ts 这里使用 use 开头是一个使用习惯
代表一个抽离出来的模块

有了模块以后，我们就可以把写的代码复制到 useNowTime.ts 文件里了，然后进行必要的修改
```javascript
import { ref } from "vue";
const nowTime = ref("00:00:00");
const getNowTime = () => {
    const now = new Date();
    const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    const minu =
        now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    const sec =
        now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
    nowTime.value = hour + ":" + minu + ":" + sec;
    setTimeout(getNowTime, 1000);
};
export { nowTime, getNowTime }
```
需要注意的是，你需要在代码的最前面用 import 进行引入 ref 在最后用 export 的方式，导出 nowTime 和 getNowTime
#### 引入并使用模块
模块写好了，回到 app.vue 页面，现在可以引入并使用模块了
引入代码
```javascript
import { nowTime, getNowTime } from "./hooks/useNowTime";
```
然后记得，用 return 进行导出哦
```javascript
return {nowTime,getNowTime};
```
现在可以看出这种方式，比 vue2 中要好的多，不要在使用 mixins（混入）要好得多。我觉得这个算是 vue3.x 一个非常重要的改进