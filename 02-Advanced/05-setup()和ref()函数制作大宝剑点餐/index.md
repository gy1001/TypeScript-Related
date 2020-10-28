<!--
 * @Author: gaoyuan
 * @Date: 2020-10-28 10:38:36
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-28 16:12:42
-->
本节课通过一个简单的点餐流程，初步了解一下vue3中ref的魅力，这个点餐很简单，所以你学习时候不要有任何压力。

#### 清理无用的代码
打开根组件 app.vue 文件，去掉 HelloWorld 自定义组件相关代码
```javascript
<template>
  <img alt="Vue logo" src="./assets/logo.png" />

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
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
这时候在进行浏览就没有其他的元素了，只剩下一个vue的图标，就可以继续开发了。这时候你可以在终端中运行
npm run serve 在浏览器中预览一下效果
#### 编写红浪漫服务程序
在 app.vue 里添加如下代码，我先修改了 template 增加两行代码和一个按钮
```javascript
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
  </div>
  <div>
    <button> </button>
  </div>
</template>
```
然后开始改写 **<script></script>** 部分，使用 setup()语法, 写了这个就不需要data 这样的东西了。然后在 setup 后加入一个 girls 变量
为了能让模板中进行使用，还需要返回。(有的小伙伴此时可能会感觉有点复杂，没有vue2直接写data那么直观，但这正是vue3 的先进之处，不用暴露在界面中的变量就可以不进行返回了，精确控制那些方法和变量被导出和使用)
```javascript
<script lang="ts">
import { defineComponent ,ref} from 'vue';
export default defineComponent({
  name: 'App',
  components: {
  },
  setup(){
    const girls =res(["大脚","刘颖","小红"])
    return {
      girls
    }
  }
});
</script>
```
写完以后把这个变量用按钮的形式遍历展示在这页面上，这里使用 v-for 语法，代码如下
```javascript 
<button v-for="(item, index) in girls" v-bind:key="index">
  {{ index }} : {{ item }}
</button>
```
现在要实现的就是当我们点击按钮的时候触发一个方法 **selectGirlFun**, 方法绑定一个选定值 **selectGirl**，具体实现代码如下
```javascript
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const girls = ref(["大脚", "刘英", "晓红"]);
    const selectGirl = ref("");
    const selectGirlFun = (index: number) => {
      selectGirl.value = girls.value[index];
    };
    //因为在模板中这些变量和方法都需要条用，所以需要return出去。
    return {
      girls,
      selectGirl,
      selectGirlFun,
    };
  },
});
</script>
```
简单的点餐小程序就制作完成了
#### 课程总结
我们通过一个简单的大宝剑点餐需求，讲解了一些 vue3 的新知识，现在来总结一下
* setup 函数的用法，可以代替 vue2 中的 data 和 methods 属性，直接把逻辑写在 setup 里面就可以
* ref 函数的使用，他是一个神奇的函数，这里只是初次相遇，要在template 中使用的变量，必须用 ref 包装一下
* return 出去的数据和方法，在模板里才可以使用，这样可以精准的控制暴露的变量和方法
