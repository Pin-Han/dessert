<template>
  <div>
    <div class="section-cart">
      <div class="shopping">
        <loading :active.sync="check_loading"></loading>

        <div class="shopping__title">您的購物車</div>
        <div class="cart" v-for="item in product_cart">
          <img :src="item.product.image" alt="item1" class="cart__img">
          <div class="cart__name">
            <p>焦糖馬卡龍</p>
            <p>NT${{item.product.price}}</p>
          </div>
          <div class="cart__num">
            <span class="fas fa-minus cart__num-icon"></span>
            <input type="tel" class="cart__num-input" v-model="item.qty">
            <span class="fas fa-plus cart__num-icon"></span>
          </div>
          <div class="cart__price">NT${{item.total}}</div>
          <div class="cart__trash">
            <i class="fas fa-trash-alt" @click="removecart(item.id)"></i>
          </div>
        </div>
      </div>
      <div class="bill">
        <div class="bill__title">訂單摘要</div>
        <div class="bill__price">
          <p>小計</p>
          <p>NT${{product_price}}</p>
        </div>
        <!-- <div class="bill__shipping">
          <p>運費</p>
          <p>NT$?</p>
        </div> -->
        <div class="bill__total">
          <p>總共</p>
          <p>NT${{product_price}}</p>
        </div>
        <div class="bill__pay">結帳</div>
      </div>
    </div>
  </div>
</template>
<script>
// import getSelfCart from "@/api/product";
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";
export default {
  data() {
    return {
      cart: [],
      price: ""
    };
  },
  methods: {
    removecart(id) {
      this.$store.dispatch("ChangeLoading", true);
      this.$store.dispatch("removeInCart", id).then(response => {
        console.log("刪除", response);
        if (response.success) {
          this.$store.dispatch("ChangeLoading", false);
        }
      });
    },
    ...mapActions(["getSelfCart"])
  },
  computed: {
    ...mapGetters(["check_loading", "product_cart","product_price"]),
     //...mapActions(["getSelfCart"])
  },
  created() {
    this.getSelfCart();
    // this.$store.dispatch("getSelfCart").then(response => {
    //   console.log("購物車", response);

    //   this.cart = response.data.carts;
    //   this.cart.reverse();
    //   this.price = response.data.final_total;
    // });
  }
};
</script>
