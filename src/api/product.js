import request from '@/utils/request';


export function getproduct() {
    return request({
      url: `/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`,
      method: 'get',

    });
  }