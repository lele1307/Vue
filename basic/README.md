# VUE

## 4.02

- MVC / MVVM

  - MVC
  
    - View Controller Model

      View 传送指令到 Controller
      Controller 完成业务逻辑后，要求 Model 改变状态
      Model 将新的数据发送到 View，用户得到反馈

    ![MVC](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015020106.png)

    ![MVC2](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015020107.png)

  - MVVM

    - View ViewModel Model

      View的变动，自动反映在 ViewModel

    ![MVVM](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015020110.png)

- v-cloak

- v-text

- v-html

- v-bind 单项绑定 M->V

  - class <-> style

    [Style.html](Style.html)

    - Array  此时class需要用：绑定

    - Array 三元表达式->可改为对象

    - 直接使用对象 (属性是类名，其中无符号时可以不带引号 属性的值是标识符)

  - style

    - 直接使用对象

    - Array中使用多个对象

- v-model 双向数据绑定 （只能是表单元素）

  [Calculate.html](Calculate.html)

- v-on

  [Marquee.html](Marquee.html)

  Event Handling

  - Listening to Events

  - Method Event Handlers

    - Event Modifiers

      可串联

      - .stop 阻止冒泡

      - .prevent 阻止默认事件

      - .capture 添加事件侦听器时使用事件捕获模式

      - .self 点击当前元素本身才会触发事件函数/只阻止自身冒泡

      - .once 事件只触发一次

      - .passive

- v-for / key

  [For.html](For.html)

  - for Int arrary

  - for Obj array

  - for Obj

  - key （unique）

    - 组件中用 key是必须

    - key->num||str

    - v-bind绑定key

  in后边可以放normal arr，obj arr，obj，num

  - Iteration Num (count from 1)

- v-if / v-show

  - v-if重新创建和删除元素（切换性能消耗high）

  - v-show 改变style display的状态 （初始渲染消耗high）
