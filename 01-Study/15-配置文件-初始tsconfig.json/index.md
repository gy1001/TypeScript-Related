
#### 生成tsconfig.json文件
这个文件是通过命令 tsc --init 生成的，
其实它就是用来配置如何对ts文件进行编译的，我们叫它 typescript 的编译配置文件

#### 让tsconfig.json文件生效
你现在可以在文件创建一个ts文件,写入如下代码
```javascript
  const person:string = "jspang"
```
这时候执行tsc 进行编译，就会得到如下代码
```javascript
  var person = "jspang"
```
这时候好像一切都是正常的，但是实际上tsconfig.json文件没有生效
找到tsconfig.json文件，把其中的 complilerOptions 属性下的 removeCommments: true选项，把注释去掉
这个配置项的意思就是，编译时候不显示注释，也即是编译出来的js文件不显示注释内容
现在往文件里加一些注释，如下代码
```javascript
  // 我是一下测试注释代码，编译后你将看不到
  const person:string = "jspang"
```
再次运行tsc index.ts 进行编译，你会发现注释仍然存在，说明配置文件 tsconfig.json 依然没有生效
如果我们想要配置文件生效，我们可以直接运行 tsc 命令，这时候 tsconfig.json才会起作用
运行后可以看到注释内容消失了


#### include exclude 和 files
如果目录下有多个ts文件，但是我们只想编译其中的一个文件时候，如果做呢？
再次新建一个项目，然后写一段简单的代码
```javascript
  // 我是一下测试注释代码
  const person2 = "jspang.com"
```
这时候执行 tsc 命令,虽然tsconfig.json生效了，但是两个文件都被我们编译了
以上有三个方法进行解决问题
1. 使用include配置
include 属性是用来指定要编译的文件的，比如我们只想编译index.ts文件，不编译index2.ts文件，可以进行如下写
写配置文件时候有一个坑，就是配置文件不支持单引号，所以里面都需要使用双引号
```javascript
  {
    "include": ["index.ts"],
    "compilerOptions": {
      // any something
    }
  }
```
这时候运行 tsc 命令，就只编译 index.ts 文件了
2. 使用 exclude 配置
include 是包含的意思，exclude是不包含的意思，除了什么文件以外，意思是再这个属性之外的文件才进行编译。比如你还是只要编译
index.ts文件，写法就如下
```javascript
  {
    "exclude": ["index2.ts"]，
    "compilerOptions"：{
      // any something
      // ... 
    }
  }
```
这时候运行 tsc 命令，与上是一样的效果
3. 使用 files 配置
files 的配置基本和 include 一样，暂时没有发现什么不一样，只要配置到里面的文件都可以被编译
```javascript
  {
    "files": ["index.ts"],
    "compilerOptions": {
      // any something
      // ..... 
    }
  }
```