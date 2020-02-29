import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Resources from "./components/Resources";
import Resource from "./components/Resource";

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.component('Navbar', require('./components/Navbar.vue').default)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: App },
    { path: '/resources', name: 'resources', component: Resources },
    { path: '/resources/:id', name: 'resource', component: Resource }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
