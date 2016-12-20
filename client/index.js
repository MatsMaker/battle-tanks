import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './components/App.vue'
import Home from './components/Home.vue'

const routes = [
  {
    path: '/home',
    component: Home
  }
];
const router = new VueRouter({routes})

new Vue({
  router,
  template: `<div>
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <li>
          <a v-bind:href="'#/home'">Home</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</div>`
}).$mount('#vue-app');
