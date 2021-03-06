import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    // ↓本番で適用
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('./components/Login.vue')
        },
        {
            path: '/top',
            name: 'top',
            component: () => import('./views/Top.vue')
        },
        {
            path: '/member',
            name: 'member',
            component: () => import('./views/Member.vue')
        },
        {
            path: '/advisor',
            name: 'advisor',
            component: () => import('./views/Advisor.vue')
        },
        {
            path: '/research',
            name: 'research',
            component: () => import('./views/Research.vue')
        },
    ]
})