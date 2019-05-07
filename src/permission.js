// permission.js
import NProgress from 'nprogress'; // progress bar
import router from './router';
import store from './store';
import {
  getToken
} from '@/utils/auth'; // 驗證
import {
  check
} from "@/api/user";
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({
  showSpinner: false
}); // NProgress configuration
const whiteList = ['/login']; // no redirect whitelist

router.beforeEach((to, from, next) => {
  console.log("to", to, "from", from, "next", next);
  NProgress.start(); // start progress bar
  if (to.meta.requiresAuth) {
    console.log("需要驗證");
    store.dispatch("Check").then(response => {
      console.log(response,to.name);

      if (to.name == 'Dashboard') {
        if(response.uid==='Bxx012Np5ebUtnLN8UlxWIWe6EA3'){
          next();
        }
        else{
          console.log("這裡");
          alert("錯誤");
          next({
            path: '/'
          });
        }
      } else {
        if (response.success) {
          next();
        } else {
          alert("請先登入");
          next({
            path: '/login'
          });
        }
      }

    })
  } else {
    next();

  }
  // if (getToken()) { // 判斷是否有Token
  //   if (to.path === '/login') {
  //     next({ path: '/' });
  //     NProgress.done(); // if current page is dashboard will not trigger afterEach hook, so manually handle it
  //   } else {
  //     if (store.getters.roles.length === 0) { // 判斷當前用戶是否已拉取完user_info訊息
  //       store.dispatch('GetInfo').then(res => { // 拉取用戶資料
  //         next()
  //       }).catch((err) => {
  //         store.dispatch('FedLogOut').then(() => {
  //           Message.error(err || 'Verification failed, please login again')
  //           next({ path: '/' })
  //         })
  //       })
  //     } else {
  //       next(); // 當有用户權限的时候，說明所有可訪問路由已生成 如訪問没權限的全面會自動進入404頁面
  //     }
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next();
  //   } else {
  //     // next(`/login`); // 否則全部到Login
  //     next(`/login?redirect=${to.path}`); // 否則全部到Login
  //     NProgress.done();
  //   }
  // }
});

router.afterEach(() => {
  NProgress.done(); // 結束Progress
});
