import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Notification from 'vue-notification';
import 'bootstrap';
Vue.config.productionTip = true;

Vue.use(Notification);
import '@/permission';
Vue.component('Loading',Loading);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
