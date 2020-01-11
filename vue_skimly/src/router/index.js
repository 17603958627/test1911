import Vue from 'vue'
import VueRouter from 'vue-router'
import Footer from '@/layouts/Footer'
Vue.use(VueRouter)
const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        components: {
            default: () =>
                import ('./../pages/Home.vue'),
            footer: Footer
        }
    },
    {
        path: '/store',
        name: 'store',
        components: {
            default: () =>
                import ('./../pages/Store.vue'),
            footer: Footer
        }

    },
    {
        path: '/user',
        name: 'user',
        components: {
            default: () =>
                import ('./../pages/User.vue'),
            footer: Footer
        }
    }, {
        path: '/cart',
        name: 'cart',
        components: {
            default: () =>
                import ('./../pages/Cart.vue'),
            footer: Footer
        }
    }, { //详情路由
        path: '/detail/:proid', //:proid代表就是路由的参数
        name: 'detail',
        components: {
            default: () =>
                import ('./../pages/Detail.vue')
        }
    },
    { //注册页面
        path: '/registe',
        name: 'registe',
        components: {
            default: () =>
                import ('./../pages/Registe.vue')
        }
    },
    { //登录页面
        path: '/login',
        name: 'login',
        components: {
            default: () =>
                import ('./../pages/Login.vue')
        }
    },
    { //修改页面
        path: '/updatas',
        name: 'updatas',
        components: {
            default: () =>
                import ('./../pages/Updatas.vue')
        }
    },
    {
        path: '/userorder',
        name: 'userorder',
        components: {
            default: () =>
                import ('../components/Userorder.vue'),
            footer: Footer
        }
    },
    {
        path: '*',
        name: '404',
        component: () =>
            import ('./../components/Error.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router