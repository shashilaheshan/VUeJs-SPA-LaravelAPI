import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'sweetalert'
import vmodal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(vmodal)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
