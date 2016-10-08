// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './view/Home.vue'
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
  {path: '', component: Home}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  ...App
}).$mount('#app')
