import request from '@/utils/request';

//前台 產品總攬
export function productall() {
    return request({
      url: `/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`,
      method: 'get',

    });
  }

  // 取得單一產品資訊 給予後端id

  export function getproduct() {
    return request({
      url: `/api/${process.env.VUE_APP_CUSTOMPATH}/product/id`,
      method: 'get',

    });
  }

