import Vue from 'vue'
import App from './App.vue'
//import cronLight from '@vue-js-cron/light'
import '@vue-js-cron/light/dist/light.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
