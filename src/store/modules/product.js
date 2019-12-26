import {
  Dashproduct,
  deleteproduct,
  createproduct,
  editproduct
} from "@/api/admin";
import {
  addtocart,
  getcartinfo,
  deletecart,productall
} from "@/api/product";
const product = {
  state: {
    cart: [],
    price: '',
    allproduct:[]
  },
  //mutations 更改狀態
  mutations: {
    //客戶的購物車內容
    customer_cart: (state, status) => {
      // state.cart = status;
      state.cart = status.carts;
      state.price = status.total;
    }
  },
  actions: {
    //前台 顯示所有商品 (不顯示未啟用)
    showStore({commit},data){
      return new Promise((resolve,reject)=>{
        productall(data).then(response =>{
          resolve(response);
        }).catch(error =>{
          reject(error);
        })
      })
    },
    //後台刪除產品
    DeleteProduct({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        deleteproduct(data).then(response => {

          resolve(response);

        }).catch(error => {
          reject(error);
        })
      })
    },
    //修改產品
    Editproduct({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        editproduct(data).then(response => {
          resolve(response);
        }).catch(error => {
          reject(error);
        })
      })
    },
    //前台 取得購物車列表
    getSelfCart({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        getcartinfo().then((response) => {
          commit('customer_cart', response.data);
          console.log("查看1", response);
          resolve(response);
        }).catch(error => {
          reject(error);
        })
      })
    },
    //前台 刪除購物車
    removeInCart({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        deletecart(data).then((response) => {
          resolve(response);
        }).catch(error => {
          reject(error);
        })
      })
    },
    getallProduct({
      commit
    }, data) {
      //後台取得所有產品 包括未啟用
      return new Promise((resolve, reject) => {
        Dashproduct().then(response => {
          console.log("後台產品列表", response);
        }).catch(error => {
          reject(error);
        })
      })
    },
    morecart({
      commit
    }, data) {
      //加入購物車
      return new Promise((resolve, reject) => {
        addtocart(data).then((response) => {
          resolve(response);

        }).catch(error => {
          reject(error);
        })
      })
    }
  }
};
export default product;
