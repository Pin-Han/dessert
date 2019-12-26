import {
  addCoupon,
  getAllCoupon

} from '@/api/coupon';
const coupon = {
  state: {
    title: '',
    percent: '',
    code: '',
    due_date: '',
    is_enabled: ''
  },
  mutations: {
    // add_coupon: (state, payload) => {
    // }
  },
  actions: {
    //admin 新增優惠卷
    newCoupon({commit},data) {
      return new Promise((resolve, reject) => {
        addCoupon(data).then((res) => {
          resolve(res);
        }).catch(eror => {
          reject(error);
        })
      })
    },
    allCoupon({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        getAllCoupon(data).then(res=>{
            resolve(res)
        }).catch(error=>{
            reject(error);
        })
      })
    }
  }

};
export default coupon;
