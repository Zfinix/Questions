import "@babel/polyfill"
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueRouter from 'vue-router'// 
import api from 'axios'



Vue.prototype.$api = api
// Views
import Home from './views/Home.vue';
import Questions from './views/Questions.vue';
import Success from './views/Success.vue';



const routes = [
   { path: '/', component: Home },
   { path: '/questions', component: Questions },
   { path: '/successful', component: Success }  
]

Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(Vuetify);

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
