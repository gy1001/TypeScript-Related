<!--
 * @Author: gaoyuan
 * @Date: 2020-10-27 14:27:04
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-28 17:56:15
-->
#### 夸一夸vue3的一些新特性
> vue3 两年开发，99位程序员成为贡献者，2600次提交，628次PR
官方地址：[v3.vuejs.org](v3.vuejs.org)
        [vue3中文文档](https://v3.cn.vuejs.org/)

先来看下 vue3 让人惊艳的一些特性
1. **Vue3** 采用渐进式开发，向下兼容
vue3支持大多数vue2的特性。有人开玩笑说，拿vue2语法开发vue3也是没有任何问题的
2. 性能的提升
    1. 打包减少41%
    2. 初次渲染快55%
    3. 更新快133%
    4. 内存使用减少54%
3. Composition API 集合，解决Vue2组件开发问题
在vue2中遇到的问题就是复杂组件的代码变得非常麻烦，甚至不可维护。说白了，就是封装不合适，重用不畅。这个 **Composition API** 一推出，立马解决了这个问题，本套课程也会重点介绍这部分内容，他是一系列API的合集
4. 新的API的加入
    1. **Teleport** 瞬移组件
    2. **Suspense** 解决异步加载组件问题
    3. 全局API的修改和优化
5. 更好的 **Typescript** 支持