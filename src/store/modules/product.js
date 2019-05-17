import {
  Dashproduct,
  deleteproduct,
  createproduct,
  addtocart
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
    // 加入購物車

  }
};
export default product;
