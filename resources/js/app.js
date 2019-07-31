import router from './router/index';
import { store } from './store/index';

require('./bootstrap');

window.Vue = require('vue');




Vue.component('App', require('./components/App.vue').default);
Vue.component('tabs', {
    template: `
            <div>
                <div class="tabs">
                    <ul>
                        <li class="is-active"><a>Pictures</a></li>
                        <li><a>Music</a></li>
                        <li><a>Videos</a></li>
                        <li><a>Documents</a></li>
                    </ul>
                </div>
                
                <div class="tabs-details">
                    <slot></slot>
                </div>
            </div>
    `,

    mounted(){
        console.log(this.children)
    }
});
Vue.component('tab', {
    template: `
    <div><slot></slot></div>
    `
});
// Vue.component('task-list', {
//     template: `
// <div>
//     <task v-for="(task, index) in tasks" :key="index">{{task.task}}</task>
// </div>`,
//
//
//     data(){
//         return {
//             tasks: [
//                 {task: 'Go to the store', complete: true},
//                 {task: 'Go to the email', complete: false},
//                 {task: 'Go to the bike', complete: false},
//                 {task: 'Go to the work', complete: false},
//             ]
//         }
//     }
// });
// Vue.component('task', {
//     template: '<li> <slot></slot></li>'
// });


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
