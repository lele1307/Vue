# VUE

## 4.03

- Brand practice

    [brand.html](brand.html)

    1. @click="fun()" -> ()可以传参

    2.Array some() return true -> 立刻终止循环

    3.Array findIndex()

    4.Array forEach()+indexOf -> 查找数组对象字符串中是否存在关键字包含

    5.Arrary filter() 过滤

    6.Arrary includes() 字符串包含string

- 过滤器 （名称 - 函数）

    [filter.html](filter.html)

    如果同名 -> 私有过滤器 》全局过滤器

- padStart / padEnd

    .toString().padStart(2,'0') - 补零

- Key Modifiers 按键监听

    [Key code](https://vuejs.org/v2/guide/events.html#Key-Codes)

    使用 keyCode attribute 是允许的

    通过全局 config.keyCodes 对象自定义按键修饰符别名:

        Vue.config.keyCodes.f1 = 112

- Custom Directives 自定义指令

  - bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。//内存中调用 eg:设置内联样式

  - inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。//解析到页面时候调用 行为执行

  - update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

- 生命周期

  - 生命周期函数 == 生命周期钩子 == 生命周期事件

  ![Lifecycle Diagram](https://cn.vuejs.org/images/lifecycle.png)

  **创建阶段**

  - beforeCreate()

    执行时 data/methods数据还未被初始化
  
  - created()

    执行时 data/methods数据被初始化

  - beforeMount()

    此function之前 Vue编译模板 处于内存中生成最终编译好的模板(template) 但尚未挂载到真正的页面

    在此函数执行过程中 页面中的元素尚未被更新

  - mounted()

    页面元素完成从内存编译好的模板中替换

    此函数是实例创建过程中的最后一个周期函数

    如果通过插件操作DOM元素 最早在此函数中进行

    ``` JavaScript
          var vm = new Vue({
              el: '#app',
              data: {},
              methods: {},
              beforeCreate(){},
              created(){},
              beforeMount(){},
              mounted(){}
          });
    ```

  此时组件已经完成创建阶段 -- 挂载完毕

  ***

  **运行阶段**

  此阶段函数与data息息相关  data发生改变才会被触发 0 or 多次

  - beforeUpdate()

  此时界面还未被更新 但是实例中的data被更新了 此时数据尚未被同步

  - updated()

  此时内存更新好的DOM tree被渲染到页面中 即 从 M->V


    ``` JavaScript
          var vm = new Vue({
              el: '#app',
              data: {},
              methods: {},
              beforeUpdate(){},
              updated(){}
          });
    ```

  ***

  **销毁阶段**

  - beforeDestroy()

  执行时,实例中所有内容（data/methods...）皆可用

  - destoryed()

  执行时,实例中所有内容（data/methods...）皆不可用


    ``` JavaScript
          var vm = new Vue({
              el: '#app',
              data: {},
              methods: {},
              beforeDestroy(){},
              destoryed(){}
          });
    ```
