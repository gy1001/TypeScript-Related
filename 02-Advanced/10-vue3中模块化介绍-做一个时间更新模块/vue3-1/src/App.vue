<!--
 * @Author: gaoyuan
 * @Date: 2020-10-29 17:03:51
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-29 17:44:20
-->
<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>{{ nowTime }}</div>
  <div><button @click="getNowTime">显示时间</button></div>
</div>
</template>

<script lang="ts">
//import { ref } from 'vue';
import { nowTime, getNowTime } from './hooks/useNowTime'
//const app = {
//  name: 'App',
//  setup(){
//    const nowTime = ref("00:00:00");
//    const getNowTime = () => {
//      const now = new Date();
//      const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
//      const minu =now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
//      const sec =now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
//      nowTime.value = hour + ":" + minu + ":" + sec;
//      setTimeout(getNowTime, 1000);   //每一秒执行一次这个方法
//    };
//    return {
//      nowTime,
//      getNowTime,
//    }
//  }
//}
const app = {
  name:'App',
  setup(){

    return {
      nowTime,
      getNowTime
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
