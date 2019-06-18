import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)
Vue.use(Vuetify)
Vue.config.productionTip = false

// Vue.filter('date', DateFilter)
// Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)

})
