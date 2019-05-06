import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
Vue.config.productionTip = true;


import '@/permission';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
