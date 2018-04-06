// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import axios from 'axios'

// 一级页面
import Home from '@/pages/Home.vue'
import My from '@/pages/My.vue'
import New from '@/pages/New.vue'
import Find from '@/pages/Find.vue'
import Ask from '@/pages/Ask.vue'
// 二级页面
import Login from '@/pages/second/Login.vue'
import Register from '@/pages/second/Register.vue'
import Member from '@/pages/second/Member.vue'
import shoppingCart from '@/pages/second/shoppingCart.vue'

Vue.use(VueRouter)
Vue.prototype.$ajax = axios

const routes = [
  // 一级页面
  { path: '/', name: 'Home', component: Home },
  { path: '/my', name: ' My', component: My },
  { path: '/ask', name: ' Ask', component: Ask },
  { path: '/new', name: 'New', component: New },
  { path: '/find', name: 'Find', component: Find },
  // 二级页面
  { path: '/my/login', name: 'Login', component: Login },
  { path: '/my/register', name: 'Register', component: Register },
  { path: '/my/member', name:'Member', component: Member},
  { path: '/my/shoppingCart', name:'shoppingCart', component: shoppingCart},
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
