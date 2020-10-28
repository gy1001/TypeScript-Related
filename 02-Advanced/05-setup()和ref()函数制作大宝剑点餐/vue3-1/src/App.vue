<!--
 * @Author: gaoyuan
 * @Date: 2020-10-28 10:47:22
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-28 16:03:37
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
  </div>
  <div>
    <button @click="selectGirlFun(index)" v-for="(item,index) in girls" :key="index">{{index}}: {{item}}</button>
    <div>你选择了【{{ selectGirl }}】为你服务</div>
  </div>
</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue'
export default defineComponent({
  name: 'App',
  setup(){
    const girls = ref(["大脚","刘颖","小红"])
    const selectGirl = ref("")
    const selectGirlFun = (index: number) => {
      selectGirl.value = girls.value[index] 
    }
    // 因为在模板中这些变量和方法都需要采用，所以要 return 出去
    return {
      girls,
      selectGirl,
      selectGirlFun
    }
  }
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
