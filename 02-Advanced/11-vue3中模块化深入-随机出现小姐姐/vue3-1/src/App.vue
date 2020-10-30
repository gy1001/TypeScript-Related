<!--
 * @Author: gaoyuan
 * @Date: 2020-10-29 18:44:53
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-30 10:26:35
-->
<template>
   <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>随机选择一位美女为你服务</div>
    <div v-if="loading">Loading.....</div>
    <img v-if="loaded" :src="result" />
    <div></div>
  </div>
</template>

<script lang="ts">
import useUrlAxios from "./hooks/useURLAxios";
const app = {
  name: 'app',
  setup() {
    const { result, loading, loaded } = useUrlAxios(
      "https://dog.ceo/api/breeds/image/random"
    );
    console.log( result)
    return { result, loading, loaded };
  }
}
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
