import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import store from './store'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
