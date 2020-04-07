//entry
// 1. 导入 Jquery
// import *** from *** 是ES6中导入模块的方式
// 由于 ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
import $ from 'jquery'
import './css/style.css'

$(function () {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})
