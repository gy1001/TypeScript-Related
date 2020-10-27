<!--
 * @Author: gaoyuan
 * @Date: 2020-10-27 11:00:55
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-27 12:09:43
-->
这个需求也经常使用，就是在ts代码中使用其他类库，这里就涉及到一个类型文件（type file）的问题，网络上有很多别人写好的类型文件，我们只需要下载即可

#### 引入JQ框架
接着上节课代码,在 **TSTest** 文件夹的 **src** 目录下，引入 **JQ**文件，这里采用 **CDN**文件形式进行引入
> BOOTCDN地址： [https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js](https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js)

直接在 **index.html** 中加入 **<script>**标签，代码如下
```javascript
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
```
有了 jq 框架，就可以在 ts 文件中进行使用 Jq 语法了
然后在 page.ts 文件中编写如下代码
```javascript 
const teacher: string = "jspang";
console.log(teacher);

$(function () {
  alert("jspang");
});
```
写完以后到终端中执行 **npm run test** 进行编译和启动服务，然后打开终端中的地址，可以在浏览器控制台中看到打印，也没有任何的报错

#### 安装 types/jquery（解决方法）
1. 第一种：就是安装别人写好的文件
但是在**vscode** 中会报错的，这时候就需要我们安装类型文件 **type file**, 直接可以用 **npm** 进行安装
```javascript
npm install @types/jquery 
```
2. 第二种：简单粗暴
还有一种简单粗暴的方法的方式就是直接在 **page.ts**文件的头部加入这句代码
```javascript
  declare var $:any
```
3. 第三种
自己写一个 **.d.ts**声明文件的类库，如果你用的类库很少见，就需要自己写了。这个写起来还是很麻烦的。不推荐大家用这种方式。因为自己写的话，比如jq就有几十个接口，如果你要写，这个文件会写很长，所以原则就是you别人写好的就直接用，实在没有就用粗暴的方法，如果实在不行，就考虑写**.d.ts声明文件**