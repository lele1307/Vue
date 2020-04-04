# VUE

## 4.04

**HTTP协议**

HTTP 协议构建于 TCP/IP 协议之上，是一个应用层协议，默认端口号是 80

[HTTP protocol](https://hit-alibaba.github.io/interview/basic/network/HTTP.html)

***

**Ajax**

Ajax的全称是Asynchronous JavaScript and XML 中文名称定义为异步的JavaScript和XML 是Web2.0技术的核心

![Ajax](https://www.runoob.com/wp-content/uploads/2013/09/ajax-yl.png)

AJAX是基于现有的Internet标准，并且联合使用它们：

  - XMLHttpRequest 对象 (异步的与服务器交换数据)

  - JavaScript/DOM (信息显示/交互)

  - CSS (给数据定义样式)

  - XML (作为转换数据的格式)

    *AJAX应用程序与浏览器和平台无关的!*

***

**跨域请求**

由于浏览器的安全性限制，不允许AJAX访问 协议不同、域名不同、端口号不同的 数据接口，浏览器认为这种访问不安全

- CORS

[Cross-origin resource sharing](https://www.ruanyifeng.com/blog/2016/04/cors.html)
CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）

- JSONP

为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了

_实现原理_

    可以通过动态创建script标签的形式，把script标签的src属性，指向数据接口的地址，因为script标签不存在跨域限制，这种数据获取方式，称作JSONP（注意：根据JSONP的实现原理，知晓，JSONP只支持Get请求）；

_实现过程_

  - 先在客户端定义一个回调方法，预定义对数据的操作；

  - 再把这个回调方法的名称，通过URL传参的形式，提交到服务器的数据接口；

  - 服务器数据接口组织好要发送给客户端的数据，再拿着客户端传递过来的回调方法名称，拼接出一个调用这个方法的字符串，发送给客户端去解析执行；

  - 客户端拿到服务器返回的字符串之后，当作Script脚本去解析执行，这样就能够拿到JSONP的数据了；

***

**ES6 Arrow Function**

如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分

  ```js
    var f = () => 5;
    // 等同于
    var f = function () { return 5 };

    var sum = (num1, num2) => num1 + num2;
    // 等同于
    var sum = function(num1, num2) {
        return num1 + num2;
    };
  ```

如果要返回一个对象，就要注意，如果是单表达式，这么写的话会报错:
  ```js
  x => { foo: x } //SyntaxError
  ```
  ```js
  x => ({ foo: x }) //ok
  ```

**callback函数**

[callback回调函数](https://www.zhihu.com/question/19801131)

![callback_figure](https://pic4.zhimg.com/80/0ef3106510e2e1630eb49744362999f8_720w.jpg)

