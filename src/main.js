import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'amfe-flexible'

Vue.config.productionTip = false

// 配置axios
// eslint-disable-next-line
import api from './api/index.js'

Vue.prototype.$http = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
