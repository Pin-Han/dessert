import { login, logout, getInfo } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
  },

  mutations: {
    // TOKEN
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    // 名字
    SET_NAME: (state, name) => {
      state.name = name;
    },
    // 頭像
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    // 權限
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
  },

  actions: {
    // 登入
    Login({ commit }, data) {
      return new Promise((resolve, reject) => {
        login(data.email, data.password).then((response) => {
          const { data } = response;


          if (data.roles && data.roles.length > 0) { // 驗證返回的roles是否是一个非空陣列
            commit('SET_ROLES', data.roles);
          } else {
            reject('getInfo: roles must be a non-null array !');
          }

          setToken(data.token.access_token);
          commit('SET_TOKEN', data.token.access_token);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);


          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // 獲取用戶訊息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then((response) => {
          const { data } = response;
          if (data.roles && data.roles.length > 0) { // 驗證返回的roles是否是一個非空陣列
            commit('SET_ROLES', data.roles);
          } else {
            reject('getInfo: roles must be a non-null array !');
          }
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          // removeToken();
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },
  },
};

export default user;
