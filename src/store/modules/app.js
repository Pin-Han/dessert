//程式運作的狀態 ex=> loading , 紀錄原先資料

import Cookies from 'js-cookie';

const app = {
  state: {
    isLoading: false,
    isLogin: false,
    sidebar: {
      // open
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false,
    },
    device: 'desktop',
  },
  mutations: {
    // 讀取中
    LOGIN(state) {
      state.isLogin = true;
    },
    // 關閉讀取中
    CHANGE_LOADING: (state, loadingstate) => {
      state.isLoading = loadingstate;
    },
    // 設定開啟ToggleSideBar
    TOGGLE_SIDEBAR: (state) => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1);
      } else {
        Cookies.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
    },
    // 設定關閉ToggleSideBar
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device;
    },
  },
  actions: {
    ChangeLoading: ({ commit }, loadingstate ) => {
      console.log(loadingstate);
      commit('CHANGE_LOADING', loadingstate);
    },
    loginByUserName({ commit }, userinfo) {
      return new Promise((resole) => {
        setTimeout(() => {
          commit('LOGIN');
          resole();
        }, 1000);
      });
    },
    setAccessMenuList({ commit }, menus) {
      return new Promise((resole) => {
        setTimeout(() => {
          commit('SETMENULIST', menus);
          resole();
        }, 1000);
      });
    },
    // 設定開啟ToggleSideBar
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR');
    },
    // 設定關閉ToggleSideBar
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation);
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device);
    },
  },
};

export default app;
