import request from '@/utils/request';

//前台 產品總攬 (只顯示啟用的產品)
export function productall() {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/products`,
    method: 'get',
    //之後加入page
  });
}
// 取得單一產品資訊 給予後端id

export function getproduct(id) {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`,
    method: 'get',

  });
}
