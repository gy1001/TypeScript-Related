<!--
 * @Author: gaoyuan
 * @Date: 2020-10-28 16:25:27
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-28 17:44:45
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
  </div>
  <div>
    <button
      v-for="(item, index) in girls"
      v-bind:key="index"
      @click="selectGirlFun(index)"
    >
      {{ index }} : {{ item }}
    </button>
  </div>
  <div>你选择了【{{ selectGirl }}】为你服务</div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';

interface DataProps{
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}
//export default {
//  name: 'App',
//  components: {
//  },
//  setup(){
//    const data: DataProps = reactive({
//      girls: ["大脚", "刘英", "晓红"],
//      selectGirl: "",
//      selectGirlFun: (index: number) => {
//        data.selectGirl = data.girls[index]
//      }
//    })
//    return {
//      data
//    }
//  }
//};

// 优化后的
export default {
  name: 'App',
  setup(){
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index]
      }
    })
    const refData = toRefs(data)
    return {
      ...refData
    }
  }
};
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
