<!--
 * @Author: gaoyuan
 * @Date: 2020-10-28 18:19:22
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-28 18:31:48
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
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
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
} from "vue";
const app = {
  name: 'App',
  setup(){
    console.log("1-开始创建组件 ---- setup()")
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      }
    });
    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行----onBeforeMount()")
    })
    onMounted(()=>{
      console.log('3-组件挂载到页面之后执行----onMounted()')
    });
    onBeforeUpdate(()=>{
      console.log("4-组件更新之前----onBeforeUpdate()")
    });
    onUpdated(()=>{
      console.log("5-组件更新之后----onUpdated()")
    });
    const refData = toRefs(data)
    return {
      ...refData
    }
  }
};
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
