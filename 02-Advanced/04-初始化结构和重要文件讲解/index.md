<!--
 * @Author: gaoyuan
 * @Date: 2020-10-27 16:55:05
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-28 10:36:57
-->
本节讲一下用vue-cli 构建好项目以后，最初始的文件结构是怎么样的，我们需要有一个最基本的了解，只有了解以后才能进行开发

#### 项目基本目录讲解
以一个目录树壮结构进行展示，后边的作用我也写到了下面
```javascript
|-node_modules       -- 所有的项目依赖包都放在这个目录下
|-public             -- 公共文件夹
---|favicon.ico      -- 网站的显示图标
---|index.html       -- 入口的html文件
|-src                -- 源文件目录，编写的代码基本都在这个目录下
---|assets           -- 放置静态文件的目录，比如logo.pn就放在这里
---|components       -- Vue的组件文件，自定义的组件都会放到这
---|App.vue          -- 根组件，这个在Vue2中也有
---|main.ts          -- 入口文件，因为采用了TypeScript所以是ts结尾
---|shims-vue.d.ts   -- 类文件(也叫定义文件)，因为.vue结尾的文件在ts中不认可，所以要有定义文件
|-.browserslistrc    -- 在不同前端工具之间公用目标浏览器和node版本的配置文件，作用是设置兼容性
|-.eslintrc.js       -- Eslint的配置文件，不用作过多介绍
|-.gitignore         -- 用来配置那些文件不归git管理
|-package.json       -- 命令配置和包管理文件
|-README.md          -- 项目的说明文件，使用markdown语法进行编写
|-tsconfig.json      -- 关于TypoScript的配置文件
|-yarn.lock          -- 使用yarn后自动生成的文件，由Yarn管理，安装yarn包时的重要信息存储到yarn.lock文件中
```
这就是基本目录结构和用处了，你可以在表中自查

#### package.json 中三条命令
上节课你可以使用 **npm run serve** 查看项目效果，就是因为有 **package.json**中的script起了作用，先来看一下这三条命令
```javascript
{
  //----
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  //----
}
```
能使用vue-cli-service 是因为 vue-cli 自动安装了 cli-service 这个工具，此处可以在 devDependencies 中看出
这三个命令的意思是：
>  * serve: 在开发时用于查看效果的命令，视频中延时看一下效果
>  * build：打包打码，一般用于生产环境中使用
>  * lint： 检查代码中的编写规范

这里顺便讲一下 **package.json** 中比较重要的配置项目，**dependencies** 和 **devDependencies** 这两个都是用来记录安装包信息的，但如果要搞清楚他们的区别，你先要弄清楚什么是开发环境和生产环境

>  * 开发环境：作为一个程序员，每天做的事情就是都在开发中，编写代码，测试代码修改bug, 也就是说这些代码没有上线
>  * 生产环境：就是代码已经上线，放到了正式的服务器转上，公司开始运营去赚钱的代码。

明白了这两个概念后，**dependencies** 下的包是生产环境中必须用到的，当然开发环境也是需要的。**devDependencies** 是只有在开发环境中使用的，上线后这些包就没有用了，打包后也不会打包进去的代码

#### 从 main.ts 文件讲起
项目里边还有一个非常重要的文件main.ts文件，你可以把他叫做入口文件，这里边只有简单的三行代码
```javascript
import { createApp } from 'vue' // 引入vue文件，并导出 createApp
import App from './App.vue' // 引入自定义组件，你在页面上看的东西基本都在这个这个组件里
createApp(App).mount('#app') // 把App挂载到#app节点上，在public目录下的index.html找节点
```
顺着这个线索你可以找到 **App.vue** 这个组件,打开这个组件，看到里面的东西还是挺多的，甚至你可能还有些东西看不明白
```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
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
```
在这个根组件里模板 vue的js业务逻辑代码和css代码。在业务逻辑代码中，你可以看到一个 helloWorld.vue 的自定义组件
这个自定义组件里边就是放了一些链接和模板用的 html 代码了，可以试着删除一些html代码，然后查看效果。