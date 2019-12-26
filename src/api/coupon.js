import request from '@/utils/request';

//新增優惠卷
export function addCoupon(data){
    return request({
        url:`/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`,
        method:'post',
        data:{
            data
        }
    })
}
//取得所有優惠卷
export function getAllCoupon(data){
    return request({
        //之後補page
        url:`/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons`,
        method:'get',

    })
}