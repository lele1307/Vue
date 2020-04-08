# Vue.js

## 4.06

### 在网页中会引用哪些常见的静态资源？
+ JS
 - .js  .jsx  .coffee  .ts（TypeScript  类 C# 语言）
+ CSS
 - .css  .less   .sass  .scss
+ Images
 - .jpg   .png   .gif   .bmp   .svg
+ 字体文件（Fonts）
 - .svg   .ttf   .eot   .woff   .woff2
+ 模板文件
 - .ejs   .jade  .vue【这是在webpack中定义组件的方式，推荐这么用】

### 网页中引入的静态资源多了以后有什么问题？？？
1. 网页加载速度慢， 因为 我们要发起很多的二次请求；
2. 要处理错综复杂的依赖关系

### 如何解决上述两个问题
1. 合并、压缩、精灵图、图片的Base64编码
2. 可以使用之前学过的requireJS、也可以使用webpack可以解决各个包之间的复杂依赖关系；

### 什么是webpack?
webpack 是前端的一个项目构建工具，它是基于 Node.js 开发出来的一个前端工具；

#### webpack环境用npm部署

- npm init -y

- 创建dist--输出 创建src--开发

- npm install webpack webpack-cli --save-dev
  >配置webpack运行环境依赖 

#### webpack.config.js配置文件设置

- [配置(configuration)](https://webpack.docschina.org/concepts/configuration)

#### 开发中 webpack-dev-server设置

- npm install webpack-dev-server --save-dev

- [开发中 server(devServer)](https://webpack.docschina.org/configuration/dev-server/)

#### 插件的使用

- npm install 【一些插件】 --save-dev

- [插件(plugins)的导入使用](https://webpack.docschina.org/configuration/plugins/)

当使用 html-webpack-plugin 之后，我们不再需要手动处理 bundle.js 的引用路径了，因为 这个插件，已经帮我们自动 创建了一个 合适的 script , 并且，引用了正确的路径

    ##### 模块热替换

    - [模块热替换(hot module replacement)](https://webpack.docschina.org/concepts/hot-module-replacement/)

#### loader

loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript 或将内联图像转换为 data URL。loader 甚至允许直接在 JavaScript 模块中 import CSS文件

- npm install --save-dev 【css-loader.....】

- [loader的使用配置](https://webpack.docschina.org/concepts/loaders/#%E4%BD%BF%E7%94%A8-loader)

### webpack 中如何使用 vue

- 安装vue的包：  npm i vue -S

-  由于 在 webpack 中，推荐使用 .vue 这个组件模板文件定义组件，所以，需要安装能解析这种文件的 loader    
    cnpm i vue-loader vue-template-complier -D

- 在 index.js 中，导入 vue 模块  import Vue from 'vue'

- 定义一个 .vue 结尾的组件，其中，组件有三部分组成：
  template script style

- 导入组件
  ```js
  import 【login】 from './login.vue' 
  ```
  

- 创建 vm 的实例 
  ```js
  var vm = new Vue({ 
    el: '#app', 
    render: c => c(【login】) 
  })
  ```

- 在页面中创建一个 id 为 app 的 div 元素，作为 vm 实例要控制的区域；

