# VUE

## 4.04

### 定义Vue组件
什么是组件： 组件的出现，就是为了拆分Vue实例的代码量的，能够让我们以不同的组件，来划分不同的功能模块，将来我们需要什么样的功能，就可以去调用对应的组件即可；
组件化和模块化的不同：
  + 模块化： 是从代码逻辑的角度进行划分的；方便代码层开发，保证每个功能模块的职能单一；
  + 组件化： 是从UI界面的角度进行划分的；前端的组件化，方便UI组件的重用；

### 全局组件定义的三种方式
1. 使用 Vue.extend 配合 Vue.component 方法：

    ```js
    var login = Vue.extend({
        template: '<h1>登录</h1>'
        });
        Vue.component('login', login);
    ```

2. 直接使用 Vue.component 方法：
    ```js
    Vue.component('register', {
        template: '<h1>注册</h1>'
        });
    ```
3. 将模板字符串，定义到script标签中 / 直接使用模板标签
    ```js
    <template id="tmpl2">
        <div>
            <a href="#">登录2</a> | <a href="#">注册2</a>
        </div>
    </template>
    ```
    ```js
    <script id="tmpl" type="x-template">
        <div><a href="#">登录</a> | <a href="#">注册</a></div>
        </script>
    ```
    同时，需要使用 Vue.component 来定义组件：

    ```js
    Vue.component('account', {
        template: '#tmpl'
        });
    ```

> 注意： 组件中的DOM结构，有且只能有唯一的根元素（Root Element）来进行包裹！    

### 组件中展示数据和响应事件

1. 在组件中，`data`需要被定义为一个方法，例如：
    作用是不同组件私有化数据管理
     ```js
        Vue.component('account', {
            template: '#tmpl',
            data() {
                return {
                msg: '大家好！'
                }
            },
            methods:{
                login(){
                alert('点击了登录按钮');
                }
            }
        });
    ```

2. 在子组件中，如果将模板字符串，定义到了script标签中，那么，要访问子组件身上的`data`属性中的值，需要使用`this`来访问；

### 使用`flag`标识符结合`v-if`和`v-else`切换组件

### 使用`component`标签，来引用组件，并通过`:is`属性来指定要加载的组件

### 组件传值

  #### 父组件向子组件传值

  - 组件实例定义方式，注意：一定要使用`props`属性来定义父组件传递过来的数据

      ```js
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
            el: '#app',
            data: {
                msg: '这是父组件中的消息'
            },
            components: {
                son: {
                template: '<h1>这是子组件 --- {{finfo}}</h1>',
                props: ['finfo']
                }
            }
        });
      ```

  - 使用`v-bind`或简化指令，将数据传递到子组件中：

      ```html
        <div id="app">
            <son :finfo="msg"></son>
        </div>
      ```

  #### 子组件向父组件传值

  - 原理：父组件将方法的引用，传递到子组件内部，子组件在内部调用父组件传递过来的方法，同时把要发送给父组件的数据，在调用方法的时候当作参数传递进去；

  - 父组件将方法的引用传递给子组件，其中，`getMsg`是父组件中`methods`中定义的方法名称，`func`是子组件调用传递过来方法时候的方法名称

      ```html
        <son @func="getMsg"></son>
      ```

  - 子组件内部通过`this.$emit('方法名', 要传递的数据)`方式，来调用父组件中的方法，同时把数据传递给父组件使用
