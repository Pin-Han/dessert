import request from '@/utils/request';

//前台 產品總攬 (只顯示啟用的產品)
export function productall() {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/products`,
    method: 'get',
    //之後加入page
  });
}
//前台 取得單一產品資訊 給予後端id
export function getproduct(id) {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`,
    method: 'get',

  });
}
//前台 加入購物車
export function addtocart(data) {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/cart`,
    method: 'post',
    data:{
      //傳送的資料
    }
  });
}

//前台 取得購物車列表
export function getcartinfo() {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/cart`,
    method: 'get',
  });
}
//前台 刪除某一筆購物車
export function deletecart(id) {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`,
    method: 'delete',
  });
}


