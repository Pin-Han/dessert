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
    //修改產品 （未完成）
    Editproduct({commit},data){
      return new Promidse ((resolve,reject)=>{
        editproduct(data).then(response =>{
          resolve(response);
        }).catch(error=>{
          reject(error);
        })
      })
    }

  }
};
export default product;
