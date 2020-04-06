/* 只是js入口文件 */
//import *** from *** 是ES6导入模块的方式
/* import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#'+'D97634'
    })

}); */
import _ from 'lodash';
import './css/style.css';
import Icon from './images/myicon.png'
function component() {
    let element = document.createElement('div');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // 将图像添加到我们已经存在的 div 中。
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    return element;
}
document.body.appendChild(component());