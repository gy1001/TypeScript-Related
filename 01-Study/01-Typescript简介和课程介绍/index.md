
1. 安装node环境
  点击[Node.js](https://node.js.org)跳转官网进行安装
  检验命令：
    > ***node -v*** 命令查看安装 node 的版本
    > ***npm  -v*** 命令查看安装 npm 的版本

2. 全局安装TypeScript
  命令：***npm install typescript -g***

3. 建立ts文件进行编译
    1. 建立 index.ts 文件, 写入以下代码
        ```javascript 
          function jspang() {
            let web: string = "Hello World";
            console.log(web);
          }
          jspang();
        ```
    2. 使用 ***node index.ts*** 进行执行是不会成功的，因为 node 不能直接执行ts文件，需要用 ***tsc index.ts*** 进行转换一下，新产生一个index.js文件，然后运行 ***node index.js*** 可以在终端中看到输出的值

    3. 使用 ***ts-node*** 直接运行ts文件
      > 如果你觉得效率太低，可以使用 ***ts-node*** 来解决这个问题，有个这个插件，可以直接编译看到结果
      
      安装命令： ***npm install -g ts-node***
      运行命令： ***ts-node index.ts***
      