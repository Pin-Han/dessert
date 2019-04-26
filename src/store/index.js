import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import getters from './getters';
import user from './modules/user';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    //引入 user
    app,
    user,
  },
  getters,
});

export default store;
//store -> index.js為彙整所有vuex行為的地方
//export default store ，要再去main.js import