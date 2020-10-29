<!--
 * @Author: gaoyuan
 * @Date: 2020-10-28 16:14:41
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-29 16:04:37
-->
上节课学习了 setup 和 ref， 也算和vue3大码有了一次亲密接触，你现在也做出了一个”大宝剑餐单“这节课
这节课我们就学一下 reactive 对语法和规范，然后用它来优化上一节课的代码。
#### 优化程序
上节课的代码可以说没有什么章法可言，所有的变量和方法都混淆在一起，我最不能忍受的就是在 setup 中要改变和读取一个值的时候，
还要加上value，这种代码一定是可以优化的。需要引入一个新的API **reactive**， 他是一个函数，只不过里面接收的参数是一个object(函数)

然后无论是变量和方法，都可以作为object的一个属性，而且在改变 selectGirl 值的时候也不用在加上讨厌的value属性了，并且在return 返回的时候
再也不用一个个返回了，只需要返回一个 data, 就可以了
```javascript
<script lang="ts">
import { ref, reactive } from "vue";
export default {
  name: "App",
  setup() {
    const data = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });

    return {
      data,
    };
  },
};
</script>
```
修改完成 script 部分的代码后，还需要修改 template 部分的代码，因为这时候返回的只有data, 所以模板部分的字面量前要加入 data
```html
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
  </div>
  <div>
    <button
      v-for="(item, index) in data.girls"
      v-bind:key="index"
      @click="data.selectGirlFun(index)"
    >
      {{ index }} : {{ item }}
    </button>
  </div>
  <div>你选择了【{{ data.selectGirl }}】为你服务</div>
</template>
```
这个修改完毕后，可以在 Terminal 终端里打开 npm run serve 查看一下效果，如果没有错误，应该和原来效果一样。效果虽然一样，但是这时候代码要比上一节课优雅了很多，
这一些的功劳要归属于 reactive 函数
#### 给 data 增加类型注解
这时候的代码可以完美的运行，但是细心的小伙伴可以发现 data 这个变量，我们并没有做 类型注解 而是采用的 ts 的类型推断
这样的代码，是不建议使用的，建议增加类型注解，所以我们先定义一个接口，用接口（interface）来做类型注解
```javascript
interface DataProps{
  girls: string[],
  selectGirl: string,
  selectGirlFun: (index: number) => void
}
```
编写完成后，你在显示的 data 变量做一个类型注解：
```javascript
  const data: DataProps = ...
```
这时候的代码才是严谨的

#### 用toRefs 继续优化
现在 template 中，每次输出变量前面都要加一个data, 这是可以优化的，有的小伙伴说了，我用... 扩展符就可以解决这个问题
在这里我告诉你不行，因为解构后就变为了普通变量，不再具有响应式的能力，所以要解决这个问题，需要用vue3 的一个新函数 toRefs() .
```javascript
import { defineComponent, reactive, toRefs } from 'vue';
```
引入后就可以对 data 进行包装，把 data 变为 refData ,这样就可以使用扩展运算符的方式了，具体代码如下：
```javascript
export default {
  name: "App",
  setup() {
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });
    const refData = toRefs(data);

    return {
      ...refData,
    };
  },
};
```
这样写以后，你的的template 就应该去掉 data ,而是直接使用变量名字和方法，就可以了
```javascript
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
```
#### 如何选择 Ref() 和 reactive()
网络上对这两个方法的争论还是不少的，但是到目前为止，还没有实质性的理论到底是用 ref 好还是reactive好，也就是两种方式都可以。他们的作用是生成响应式对象，目前来看只是编写上有所不同。
我个人更强倾向于 reactive 因为它让传程序看起来更加规范。随着学习的深入，一定会有自己的最佳选择。
