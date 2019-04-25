import axios from 'axios';
// import store from '../store';
// import { getToken } from '@/utils/auth';

// 創建axios實例
const service = axios.create({
  baseURL: process.env.VUE_APP_API, // api 的 base_url
  timeout: 5000, // 請求超時時間
});
//讓api設定cookies
service.defaults.withCredentials=true; 

// request攔截器
service.interceptors.request.use(
  (config) => {
    // if (store.getters.token) {
    //   config.headers.common.Authorization = `Bearer ${getToken()}`;
    // }
    return config;
  },
  (error) => {
    // Do something with request error
    Promise.reject(error);
  },
);

// response 攔截器
service.interceptors.response.use(
  (response) => {
    /**
     *
     */
    const res = response.data;

    return response.data;
  },
  (error) => {
    console.log(`err${error}`); // for debug
    return Promise.reject(error);
  },
);

export default service;
