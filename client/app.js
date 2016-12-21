import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMaterial)

import routes from './routes.js'

const router = new VueRouter({
    mode: 'history',
    routes,
})

Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'red',
    warn: 'yellow',
});
Vue.material.setCurrentTheme('default')

const app = new Vue({
        template: `<router-view></router-view>`,
        router,
    })
    .$mount('#vue-app');
