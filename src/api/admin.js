import request from '@/utils/request';


//後臺產品管理  顯示產品
export function Dashproduct() {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products`,
    //之後再補page
    method: 'get',

  });
}
//後台 -> 修改產品 
export function editproduct(data) {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${data.id}`,
    method: 'put',
    data: {
      data
      //這邊要再看一下課程
    }
  });
}
//後台 ->建立產品
export function createproduct(data) {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`,
    method: 'post',
    data: {
      data
    }
  });
}
//後台 顯示所有產品 包括 未啟用的產品
export function showallproduct() {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`,
    method: 'post',

  });
}
//後台 ->刪除產品
export function deleteproduct(product_id) {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${product_id}`,
    method: 'delete',

  });
}

//後台 上傳圖片 
export function uploadimg(data) {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`,
    method: 'post',
    data
  })
}
