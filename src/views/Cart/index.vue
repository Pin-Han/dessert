<template>
  <div>
    <div class="section-cart">
      <div class="shopping">
        <loading :active.sync="check_loading"></loading>
        <notifications group="cart" position="top left" class="notice"></notifications>

        <div class="shopping__title">您的購物車</div>
        <p v-if="this.product_cart == ''">購物車目前沒有商品，趕快去購物吧！</p>
        <div class="cart" v-for="(item, index) in product_cart" :key="index">
          <img :src="item.product.image" alt="item1" class="cart__img" />
          <div class="cart__name">
            <p>{{ item.product.title }}</p>
            <p>NT${{ item.product.price }}</p>
          </div>
          <div class="cart__num">
            * 
            <!-- 修改數量 ＡＰＩ未完成 -->
            <!-- <span class="fas fa-minus cart__num-icon" @click="decrease(index)"></span>-->
            <input type="tel" class="cart__num-input" v-model="item.qty" />
            <!-- <span class="fas fa-plus cart__num-icon" @click="increase(index)"></span> --> 
          </div>
          <div class="cart__price">NT${{ item.total }}</div>
          <div class="cart__trash">
            <i class="fas fa-trash-alt" @click="removecart(item)"></i>
          </div>
        </div>
      </div>
      <div class="bill  border-two">
        <div class="bill__title">訂單摘要</div>
        <div class="bill__price">
          <p>小計</p>
          <p>NT${{ product_price }}</p>
        </div>
        <div class="bill__discount">
          <input type="text" placeholder="輸入折扣碼" class="bill__discount-input" v-model="coupon">
          <button class="bill__discount-btn btn">
            確認折扣碼
          </button>

        </div>
        <!-- <div class="bill__shipping">
          <p>運費</p>
          <p>NT$?</p>
        </div>-->
        <div class="bill__total">
          <p>總共</p>
          <p>NT${{ product_price }}</p>
        </div>
        <div class="bill__pay">結帳</div>
      </div>
    </div>
  </div>
</template>
<script>
// import getSelfCart from "@/api/product";
import { mapGetters, mapActions } from "vuex";
import Vue from "vue";

import $ from "jquery";
export default {
  data() {
    return {
      cart: [],
      price: '',
      coupon:'',
    };
  },
  methods: {
    removecart(data) {
      this.itemname = data.product.title;
      this.$store.dispatch("ChangeLoading", true);
      this.$store.dispatch("removeInCart", data.id).then(response => {
        if (response.success) {
          this.$store.dispatch("ChangeLoading", false);
          Vue.notify({
            group: "cart",
            // title: "Message",
            text: `已將 ${this.itemname} 從購物車刪除`,
            type: "success"
          });
          this.getSelfCart();
        }
      });
    },
    increase(index) {
      const vm = this;
      console.log(vm,index);
    },
    ...mapActions(["getSelfCart"])
  },

  computed: {
    ...mapGetters(["check_loading", "product_cart", "product_price"])
  },
  created() {
    this.getSelfCart();
  }
};
</script>
