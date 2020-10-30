<!--
 * @Author: gaoyuan
 * @Date: 2020-10-29 17:54:13
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-29 18:38:45
-->

这时候”红浪漫“洗浴老板有了新的项目，要求来的顾客可以随机选择一位美女服务，增加刺激性，我们的任务也就是做一个随机选择的菜单，每次刷新都会随机出现 大脚/刘英/或者是晓红.
趁这个机会，我们正好练习一下 vue3.x 中的模块化

#### 让程序变得干净
以前我们写了很多程序，看起来有些杂乱无章了，这节我们把一些无用的代码删掉，然后再用模块化的概念编写今天的随机选择美女的程序
```html
<template>
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>随机选择一位美女为你服务</div>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs, ref, watch } from "vue";
const app = {
  name: "App",
  setup() {
    return {};
  },
};
export default app;
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
我们删除了大部分的代码，只留了几个文字，这样代码看起来就清爽的多了。也可以编写代码了

#### 编写远程调用API组件
这里我们使用 axios 来进行远程随机获得图片，但是我们这里作的不是远程随机获得图片，而是模块化一个通用的远程调用API的组件，这个
组件可以远程请求一个指定的URL, 并且返回所得到的的值。先用 npm 的方式 安装 axios
```javascript
npm install axios --save
```
在上节课的文件夹里，新建一个文件，叫做 useRlAxios.ts，然后引入 ref 和 axios 在文件里写一个 useUrlAxios 方法，在方法里声明四个响应式
变量 result loading loaded 和 error。 声明好后，使用 axios 进行访问远程连接，最后记得要进行 return 和 export default
```javascript
import { ref } from 'vue'
import axios from 'axios'
function useUrlAxios(url: string) {
    const result = ref(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)

    axios.get(url).then((res) => {
        loading.value = false
        loaded.value = true
        result.value = res.data
    }).catch(e => {

        error.value = e
        loading.value = false
    })
    return {
        result,
        loading,
        loaded,
        error
    }
}
export default useUrlAxios
```
#### 随机美女 API介绍
我自己做了一个随机美女的 API, 你直接调用就可以了，不用任何参数，只要进行get 请求就可以得到，随机出现大脚 刘颖 小红的图片的地址
> 随机美女 API: [https://apiblog.jspang.com/default/getGirl](https://apiblog.jspang.com/default/getGirl)

#### App.vue的实现
我们先来实现进入页面随机出现一个美女图片，然后刷新休闲不同的美女
```html
<template>
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
     <div>随机选择一位美女为你服务</div>
    <div v-if="loading">Loading.....</div>
    <img v-if="loaded" :src="result.message" />
    <div></div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import useUrlAxios from "./hooks/useUrlAxios";
const app = {
  name: "App",
  setup() {
    const { result, loading, loaded } = useUrlAxios(
      "https://dog.ceo/api/breeds/image/random"
    );
    return { result, loading, loaded };
  },
};
export default app;
</script>
```
好了，我们只要刷新，都可以随机显示一个美女的照片，但这不是重点，重点是你要学会这种独立模块化的方式，让我们的代码都可以复用。建议代码多写两遍，
养成这种模块化的思维方式
