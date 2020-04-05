# VUE

## 4.05 Router

### 什么是路由

- 后端路由: 对于普通的网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上对应的资源；

- 前端路由: 对于单页面应用程序来说，主要通过URL中的hash(#号)来实现不同页面之间的切换，同时，hash有一个特点：HTTP请求中不会包含hash相关的内容；所以，单页面程序中的页面跳转主要用hash实现；

    在单页面应用程序中，这种通过hash改变来切换页面的方式，称作前端路由（区别于后端路由）；

### 在 Vue 中使用 vue-router 并增加动画与样式

- [Router_basic.html](Router_b.html)

### 在路由规则中定义参数

- $route.query

  [Router_agr.html](Router_agr.html)

- $route.params

  [Router_agr2.html](Router_agr2.html)

### 路由的嵌套

  [Router_ nested.html](Router_nested.html)