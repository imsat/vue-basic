import router from './router/index';
import { store } from './store/index';

require('./bootstrap');

window.Vue = require('vue');




Vue.component('App', require('./components/App.vue').default);


const app = new Vue({
    el: '#app',
    router,
    store
});


router.beforeEach(
    (to, from, next) => {
        if(to.matched.some(record => record.meta.forVisitors)){
            if(store.getters.isAuthenticated){
                next({
                    path: '/'
                })
            }else next()
        }else if(to.matched.some(record => record.meta.forAuth)){
            if( ! store.getters.isAuthenticated){
                next({
                    path: '/login'
                })
            }else next()
        }

        else next()
    })



router.afterEach((to,from, next) => {
    Vue.nextTick( () => {
        document.title = to.meta.title ? to.meta.title : 'Vue-Auth';
    });
})
