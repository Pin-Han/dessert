<template>
  <div>
    <div>
      <div
        class="modal fade font-size-normal"
        id="newcouponModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content border-0">
            <div class="modal-header bg-scss-main text-white">
              <h1 class="modal-title" id="exampleModalLabel">
                <span>新增優惠卷</span>
              </h1>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="font-size-big">&times;</span>
              </button>
            </div>
            <div class="modal-body font-size-normal">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="title"></label>
                    <input
                      type="text"
                      class="form-control font-size-normal"
                      id="title"
                      placeholder="請輸入優惠卷名稱"
                      v-model="coupon.title"
                    />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="origin_price">Persent</label>
                      <input
                        type="number"
                        class="form-control font-size-normal"
                        id="origin_price"
                        placeholder="請輸入折扣"
                        v-model="coupon.percent"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="origin_price">優惠碼</label>
                      <input
                        type="text"
                        class="form-control font-size-normal"
                        id="origin_price"
                        placeholder="請輸入優惠碼"
                        v-model="coupon.code"
                      />
                    </div>
                    <hr />

                    <div class="form-group col-md-8">
                      <label for="description">到期日</label>
                      <div class="show-flex">
                        <input
                          type="number"
                          class="form-control font-size-normal"
                          placeholder="年"
                          min="2020"
                          max="2030"
                          v-model="year"
                        />
                        <input
                          type="number"
                          class="form-control font-size-normal margin-left-five"
                          placeholder="月"
                          min="1"
                          max="12"
                          v-model="month"
                        />
                        <input
                          type="number"
                          class="form-control font-size-normal margin-left-five"
                          placeholder="日"
                          min="1"
                          max="31"
                          v-model="date"
                        />
                      </div>
                    </div>
                    <div class="form-check col-md-4 coupon_isenable">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="enabled"
                        :true-value="1"
                        name="is_enabled"
                        :false-value="0"
                        v-model="coupon.is_enabled"
                      />
                      <label class="form-check-label" for="enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary font-size-normal"
                data-dismiss="modal"
              >
                取消
              </button>
              <button type="button" class="btn btn-info font-size-normal" @click="addCoupon()">
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      coupon: {
        title: "",
        is_enabled: "",
        percent: "",
        due_date: "",
        code:'',
      },
      month: "",
      year: "",
      date: ""
    };
  },
  methods: {
    addCoupon() {
      const vm = this;
      vm.coupon.due_date = vm.year + vm.month + vm.date;
      vm.coupon.due_date = parseInt(vm.coupon.due_date);
      vm.$emit("addCoupon",vm.coupon);

    }
  }
};
</script>
