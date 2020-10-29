<!--
 * @Author: gaoyuan
 * @Date: 2020-10-29 14:36:44
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-29 14:53:09
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
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
import { defineComponent, onRenderTracked, toRefs, reactive } from 'vue';
interface DataProps{
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}
export default defineComponent({
  name: 'App',
  components: {
  },
  setup(){
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });
    onRenderTracked((event)=>{
      console.log("状态跟踪组件--------")
      console.log(event)
    })
    const refData = toRefs(data);
    return {
      ...refData,
    };
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
