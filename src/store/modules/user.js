import {
  login,
  logout,
  getInfo,
  check
} from '@/api/user';
const user = {
  state: {
    name: '',
    check: false
  },

  //mutations 為更改狀態
  mutations: {
    // 名字

    //這裡的name是由 actions 裡的data 傳入過來
    // SET_NAME: (state, name) => {
    //   state.name = name;
    // },
    Check_Login: (state, status) => {
      state.check = status;
    }
  },

  actions: {
    // 登入
    //data 為外部傳入進來的參數
    Login({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        login(data.username, data.password).then(response => {
          //const data = response.data;
          console.log('登入資訊', response, data);
          //commit('SET_NAME', data.name); //呼叫mutation 
          commit('Check_Login', response.success);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    // Check
    Check({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        check(state.token).then((response) => {
          // commit('SET_TOKEN', '');
          // commit('SET_ROLES', []);
          commit('Check_Login', response.success);
          // removeToken();
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    // 獲取用戶訊息
    GetInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data;
          if (data.roles && data.roles.length > 0) { // 驗證返回的roles是否是一個非空陣列
            commit('SET_ROLES', data.roles);
          } else {
            reject('getInfo: roles must be a non-null array !');
          }
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    // 登出
    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        logout().then((res) => {
          console.log("登出", res);
          resolve(res);
        }).catch(error => {
          reject(error);
        });
      });
    }

  }
};

export default user;
