import Vue from 'vue';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// import main from './modules/main.vue'
import page1 from './modules/page1.vue'
import page2 from './modules/page2.vue'
import page3 from './modules/page3.vue'
import page4 from './modules/page4.vue'
import page5 from './modules/page5.vue'
import page6 from './modules/page6.vue'
import page7 from './modules/page7.vue'
import page8 from './modules/page8.vue'
import page9 from './modules/page9.vue'
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.config.productionTip = false
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'page1',
            component: page1
        },
        {
            path: '/page2',
            name: 'page2',
            component: page2
        },
        {
            path: '/page3',
            name: 'page3',
            component: page3
        },
        {
            path: '/page4',
            name: 'page4',
            component: page4
        },
        {
            path: '/page5',
            name: 'page5',
            component: page5
        },
        {
            path: '/page6',
            name: 'page6',
            component: page6
        },
        {
            path: '/page7',
            component: page7
        },
        {
            path: '/page8',
            component: page8
        },
        {
            path: '/page9',
            component: page9
        }
    ]
})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')