<!--
 * @Author: gaoyuan
 * @Date: 2020-10-26 14:53:37
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-26 17:33:16
-->
以往的课程都是通过node 在终端实现的，这次我们通过浏览器来实现
新建文件夹 TSWeb
#### 搭建浏览器开发环境步骤
1. 在文件夹目录下运行终端命令，**npm init -y** 创建 **package.json** 文件
2. 接着运行 **tsc -init**, 生成 **tsconfig.json** 文件
3. 新建 **src** 和 **build** 文件夹，在新建一个**index.html**文件
4. 在src目录下，新建一个 page.ts文件，这既是我们要编写的ts文件
5. 配置 **tsconfig.json**文件，设置 **outDir** 和 **rootDir** （在15行左右）,也就是设置需要编译的文件目录，和编译好的文件目录
6. 然后编写 **index.html** , 引入 **<script src="./build/page.js"></script>**, 当然此时还没有 **page.js** 文件
7. 编写 **page.ts** 文件，加入一句 **console.log("jspang.com")** ，在控制台中输入 **tsc**, 机会生成 **page.js** 文件
8. 用浏览器打开 **index.html** 文件，查看控制台有输出 **jspagn.com**, 说明我们的搭建正常了.
```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./build/page.js"></script>
    <title>Document</title>
  </head>
  <body></body>
</html>
```

#### 没有命名空间时的问题
为了更好的理解，先写一写这样的代码，用类的形式在**index.html**中实现 **Header** **Content** 和 **Footer** 部分，类似我们常说的模板
在 **page.ts** 文件里，写出下面的代码
```javascript
class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Header";
    document.body.appendChild(elem);
  }
}

class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Content";
    document.body.appendChild(elem);
  }
}

class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Footer";
    document.body.appendChild(elem);
  }
}

class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
```
写完后我们用 **tsc** 进行编译一次,然后修改 **index.htm**, 在 **<body>** 标签里引入 <script> 标签，并实例化 **Page**,代码如下
```javascript
<body>
  <script>new Page();</script>  
</body>
```
这时候再到浏览器进行预览，可以看到对应的页面被展示了。看起来没有什问题，但是此刻写的全部都是全局变量。**过多的全局变量让我们代码变得不可维护**

这时候你在浏览器的控制太中，分别输入 **Header** **Content** **Footer**  和 **Page** 你都可以拿到对应的变量的，说明他们全部都是全局变量。
其实你理想的是，只要有 **Page** 这个全局变量就够了，剩下的可以模块化封装起来，不暴露到全局中。

#### 命名空间的使用
**命名空间** 这个语法，很类似编程中常说的模块化思想，比如 **webpack** 打包，每个模块都有自己的环境，不会污染其他模块，不会有全局变量产生。命名空间就跟这个很类似，注意这里是类似，而不是相同。

命名空间的关键词是 namespace 比如声明一个 namespace Home,需要暴露出去的类，可以使用 export 关键词，这样只有暴露出去的类是全局的，其他的不会生活全局污染了。修改后的代码如下：

```javascript
namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Header";
      document.body.appendChild(elem);
    }
  }

  class Content {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Content";
      document.body.appendChild(elem);
    }
  }

  class Footer {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Footer";
      document.body.appendChild(elem);
    }
  }

  export class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
```

ts代码写完后，再到**index.html**文件中进行修改，用命名空间的形式进行调用，就可以正常使用了。写完记得用 **tsc** 编译一下 , 当然你也可以使用 **tsc -w**进行监视了，只要有改变就会进行重新编译。
```javascript
new Home.Page()
```
现在再到浏览器中进行查看，可以看到现在只有 **Home.Page** 是在控制台式可以得到的，其他的 **Home.Header...** 这些都是得不到的，说明只有
**Home.Page** 是 全局的，其他的都是模块化私有的。
这就是TypeScript 给我们提供的类似模块化开发的语法，他的好处就是让变量减少了很多，实现了基本的封装，减少了全局变量的污染

