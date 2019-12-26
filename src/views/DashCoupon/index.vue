<template>
  <div>
    <a href="#" class="btn btn-info font-size-normal" @click.prevent="openModal()">建立優惠卷</a>

    <table class="table mt-4 dashproduct__table">
      <thead>
        <tr>
          <th>
            <!-- <input type="checkbox" name id /> -->
          </th>
          <th>名稱</th>
          <th>折扣碼</th>
          <th>折扣數</th>
          <th>啟用</th>
          <th>編輯</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in coupon" :key="index">
          <td>
            <!-- <input type="checkbox" name id /> -->
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.is_enabled }}</td>
          <td><i class="far fa-edit dashproduct__icon dashproduct__icon-edit"></i></td>
          <td>
            <i class="far fa-trash-alt dashproduct__icon dashproduct__icon-trash"></i>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal @addCoupon="newCoupon"></CouponModal>
  </div>
</template>
<script>
import $ from "jquery";
import CouponModal from "@/components/NewCoupon";
export default {
  components: {
    CouponModal
  },
  data() {
    return {
      coupon: {

      }
    };
  },
  methods: {
    openModal() {
      $("#newcouponModal").modal("show");
    },
    //新增Coupon -> open modal
    newCoupon(data) {
        const vm=this;
      console.log("coupon", data);
      vm.$store.dispatch("newCoupon",data).then(response => {
        console.log("yoyo", response);
        if (response.success) {
          alert("新增成功");
          $("#newcouponModal").modal("hide");
          vm.getAllCoupon();
        }
      });
    },
    //取得所有優惠卷
    getAllCoupon() {
      const vm = this;
      vm.$store.dispatch("allCoupon").then(res => {
        if (res.success) {
          vm.coupon = res.coupons;
          console.log(vm.coupon);
        }
      });
    }
  },
  mounted() {
    this.getAllCoupon();
  }
};
</script>
