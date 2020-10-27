<!--
 * @Author: gaoyuan
 * @Date: 2020-10-27 10:25:44
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-27 10:59:31
-->
上节课配置太过麻烦，步骤也多。工作中常用的有两种方案：**webpack** 和 **Parcel**
**webpack** 不用说.稍微讲下 **parcel** 来打包 **ts** 代码

#### 建立一个新项目
1. 新建一个文件夹 **TSTest**，进入此文件夹
2. 打开终端，输入 **npm init -y**, 创建 **package.json** 文件
3. 在终端中输入 **tsc --init**, 创建 **tsconfig.json** 文件
4. 修改 **tsconfig.json** 里面的配置 **rootDir** 和 **outDir**
5. 新建 **src** 文件夹，在里面建立 **index.html** **page.ts**文件
6. 编写 **index.html** 文件，并引入 **page.ts** 文件
7. 编写 **page.ts** 文件

**index.html**文件代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
<script src="../build/page.js"></script>
</html>
````

#### Parcel 的安装和使用
parcel 可以通过 npm 和 yarn来进行安装

安装好以后，修改 **package.json** 里面的代码
```javascript 
{
  "scripts": {
    "test": "parcel ./src/index.html"
  }
}
```
这个意思就是使用 **parcel** 对 **index.html** 进行一个编译
在终端中输入 **npm run test**, 这时候终端会给我一个地址[http://localhost:1234](http://localhost:1234)。打开地址在浏览器控制栏可以看出输出的代码
这说明 Parcel会自动对**index.html**中引入的**ts**文件进行编译，然后打包好后，就可以直接使用了
使用**parcel** 大大简化了我们的配置过程，此处只是简单的介绍 **parcel**, 详细学习的话可以参考官网 [Parcel](https://parceljs.org/)