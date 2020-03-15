import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import ApiService from "./common/api.service";
ApiService.init();

import $ from 'jquery'
window.jQuery = $;
window.$ = $;
import 'bootstrap/dist/css/bootstrap.min.css'
import VueCountdown from '@chenfengyuan/vue-countdown';
Vue.component(VueCountdown.name, VueCountdown);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
