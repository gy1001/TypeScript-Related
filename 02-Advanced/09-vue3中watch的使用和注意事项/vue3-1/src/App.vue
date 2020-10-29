<!--
 * @Author: gaoyuan
 * @Date: 2020-10-29 16:00:47
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-29 16:41:59
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
  <div><button @click="overAction">点餐完毕</button></div>
 <div>{{ overText }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, watch } from 'vue';
interface DataProps{
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}
export default defineComponent({
  name: 'App',
  setup() {
    console.log("1-开始创建组件-----setup()");
    const overText = ref("红浪漫")
    const overAction = ()=>{
      overText.value = overText.value + "点餐完成 | "
      //document.title = overText.value;
    }
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });
    const refData = toRefs(data);
    //watch(overText, (newValue, oldValue) => {
    //  console.log(newValue, oldValue)
    //  console.log(22222)
    //  document.title = newValue;
    //  console.log(document.title)
    //})
    // watch 多个值的时候
    watch([overText, () => data.selectGirl], (newValue, oldValue) => {
      console.log(newValue, oldValue)
      console.log(22222)
      document.title = newValue[0];
      //console.log(document.title)
    })
    return {
      ...refData,
      overAction,
      overText
    };
  },
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
