# Vue

## 4.08

### 关于如何导入 

[index.js](src/index.js)

### 关于路由部署的文件结构

- App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
  
- Components组件， 是通过 路由匹配监听到的，所以组件，只能展示到 属于 路由的 <router-view></router-view> 中去；

### 关于组件样式

 - 启用scss less
  普通的 style 标签只支持 普通的 样式，如果想要启用 scss 或 less ，需要为 style 元素，设置 lang 属性


- 作用域
  只要 style 标签， 是在 .vue 组件中定义的，那么，推荐都为 style 开启 scoped 属性