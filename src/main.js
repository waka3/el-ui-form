import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
  size: 'small' // set element-ui default size
})

import App from './App'
new Vue({
  el: '#app',
  render: (h) => h(App)
})