import request from '@/utils/request';

//前台 產品總攬
export function getproduct() {
    return request({
      url: `/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`,
      method: 'get',

    });
  }

