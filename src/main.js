import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
Vue.config.productionTip = true;


import '@/permission';
Vue.component('Loading',Loading);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
