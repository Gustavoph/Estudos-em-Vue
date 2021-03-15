import Vue from 'vue'
import App from './App.vue'
import Contadores from './Contadores'

Vue.config.productionTip = false
Vue.component('Contadores', Contadores);

new Vue({
  render: h => h(App),
}).$mount('#app')
