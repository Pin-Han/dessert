import {
  Dashproduct,
  deleteproduct,
  createproduct,
  addtocart,editproduct
} from "@/api/admin";

const product = {
  state: {

  },
  //mutations 更改狀態
  mutations: {

  },
  actions: {
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
    //修改產品 （未完成）
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
    getallProduct({
      commit
    }, data) {
      //後台取得所有產品 包括未啟用
      return new Promise((resolve, reject) => {
        Dashproduct().then(response => {
          console.log("後台產品列表", response);
        }).catch(error =>{
          reject(error);
        })
      })
    }
  }
};
export default product;
