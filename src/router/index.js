import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)


export default new Router({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        { path: '/home', component: Home }
    ]
})


// //挂载路由导航守卫 暂时失败了不知道原因
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') return next();
//     const tokenStr = window.sessionStorage.getItem('token')
//     if (!tokenStr) return next('/login')
// })
// export default  router