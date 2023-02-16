import Vue from 'vue'
import RouterTab from '../lib'

import App from './App.vue'
import router from './router'

import PagePartIframe from './views/test/PagePartIframe.vue'

Object.assign(Vue.config, {
  productionTip: false,
  devtools: true
})

Vue.component('PagePartIframe', PagePartIframe)

Vue.use(RouterTab)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
