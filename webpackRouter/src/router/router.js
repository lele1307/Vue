import VueRouter from 'vue-router' //1.导入包
import account from '../components/Acc/Account.vue'
import goodslist from '../components/Goodslist.vue'
import login from '../components/Acc/login.vue'
import register from '../components/Acc/register.vue'
//3.创建路由对象
var router = new VueRouter({
    //account goodslist
    routes:[
        //{path: '/', redirect: '/account'},
        {
            path:'/account',
            component: account,
            children:[
                {path:'login',component:login},
                {path:'register',component:register}
            ]
        },{
            path:'/goodslist',
            component:goodslist
        }
    ]
})
export default router