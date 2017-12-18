import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import axiosJs from 'axios'

fastclick.attach(document.body)

Vue.config.productionTip = false
// 使axios成为Vue实例的属性
Vue.prototype.axios = axiosJs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
