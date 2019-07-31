import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes: [
        { path: '/', component: require('../components/dashboard/Dashboard').default },
        { path: '/login', component: require('../components/auth/Login').default, meta: {forVisitors: true,  title: 'Login'}},
        { path: '/register', component: require('../components/auth/Register').default, meta: {forVisitors: true,  title: 'Register'}},
        { path: '/forgot', component: require('../components/auth/Forgot').default, meta: {forVisitors: true,  title: 'Forgot'}},
        { path: '/reset/:token', component: require('../components/auth/Reset').default, meta: {forVisitors: true,  title: 'Reset'}},

        // otherwise redirect to home
        { path: '*', redirect: '/' }

    ],
})


