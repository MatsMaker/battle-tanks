import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

import routes from './routes.js'
const router = new VueRouter({routes})

const app = new Vue({
  router,
  template:'<router-view></router-view>'
}).$mount('#vue-app');
