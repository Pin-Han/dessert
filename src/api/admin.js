import request from '@/utils/request';


//後臺產品管理 
export function Dashproduct() {
  return request({
    url: `/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products`,
    method: 'get',

  });
}