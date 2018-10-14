// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import goods from '../src/components/goods/goods.vue'
Vue.config.productionTip = false
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.use(VueResource)
// var routes = [
//   {path: '/', redirect: '/goods'},
//   {path: '/goods', component: goods} ]

// var router = new VueRouter({
//   linkActiveClass: 'active',
//   routes
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
// router.push(goods);
// let app = Vue.extend(App)
// let router = new VueRouter()
// router.map({
//   '/goods': {
//     component: goods
//   }
// })
// router.start(app, '#app')
