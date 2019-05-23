<template>
  <div>
    <div class="dessert">
      <notifications group="foo" position="top left" class="notice"></notifications>

      <loading :active.sync="check_loading"></loading>

      <div class="dessert__img"></div>
      <div class="dessert__content">
        <div class="dessert__list">
          <ul class="dessert__list-item">
            <li>甜點類別</li>
            <li>所有甜點(48)</li>
            <li>本日精選(10)</li>
            <li>人氣推薦(26)</li>
            <li>新品上市(12)</li>
          </ul>
        </div>
        <div class="dessert__product">
          <div class="products">
            <div class="product" v-for="(item,index) in products" :key="index">
              <div class="product__box border-two">
                <img :src="item.image" alt="product" class="product__box-img border-two">
                <p class="product__box-text">本日精選</p>
              </div>
              <div class="product__info">
                <div class="product__info-title">{{item.title}}</div>
                <div class="product__info-price">NT$ {{item.price}}</div>
              </div>
              <div class="product__more">
                <a
                  href="#"
                  class="product__more-info border-two"
                  @click.prevent="productinfo(item.id)"
                >查看更多</a>

                <a
                  href="#"
                  class="product__more-cart border-two"
                  @click.prevent="customercart(item)"
                >加入購物車</a>
              </div>
            </div>
          </div>
          <Pagination :pages="this.pagination" @changePage="allstore"></Pagination>
        </div>
      </div>
    </div>
    <ProductInfoModal :product="this.item" @addcart="modalCart"></ProductInfoModal>
  </div>
</template>
<script>
import $ from "jquery";
import Vue from "vue";
import ProductInfoModal from "@/components/ProductInfoModal";
import Pagination from "@/components/Pagination";
import { productall, getproduct, addtocart } from "@/api/product";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      products: [],
      item: [],
      pagination: []
    };
  },
  components: {
    Pagination,
    ProductInfoModal
  },
  methods: {
    allstore(page = 1) {
      //顯示所有商品
      // console.log(page)
      this.$store.dispatch("ChangeLoading", true);

      this.$store.dispatch("showStore", page).then(response => {
        console.log("查看", response);
        this.$store.dispatch("ChangeLoading", false);
        $(window).scrollTop("0");
        this.products = response.products;
        this.pagination = response.pagination;
      });
    },
    productinfo(id) {
      //取得單一商品資訊
      getproduct(id).then(response => {
        console.log(response);
        if (response.success) {
          response.product.num = 1; //給予預設值為1
          this.item = response.product;
          $("#FrontProductInfo").modal("show");
        }
      });
    },
    //打開modal 加入購物車
    modalCart(data) {
      const cart = {
        product_id: data.id,
        qty: data.num
      };

      this.$store.dispatch("ChangeLoading", true);

      this.$store.dispatch("morecart", cart).then(response => {
        console.log(response);
        this.$store.dispatch("ChangeLoading", false);
        if (response.success) {
          Vue.notify({
            group: "foo",
            // title: "Message",
            text: "已成功加入購物車",
            type: "success"
          });
          $("#FrontProductInfo").modal("hide");
        }
      });
    },
    //加入購物車
    customercart(data) {
      console.log("購物車", data);

      let cart = {
        product_id: data.id,
        qty: 1
      };

      this.$store.dispatch("ChangeLoading", true);

      this.$store.dispatch("morecart", cart).then(response => {
        console.log(response);
        this.$store.dispatch("ChangeLoading", false);
        if (response.success) {
          Vue.notify({
            group: "foo",
            // title: "Message",
            text: "已成功加入購物車",
            type: "success"
          });
        }
      });
    }
  },
  created() {
    //抓取產品訊息
    this.allstore();
    // productall().then(response => {
    //   console.log(response);
    //   const vm = this;
    //   vm.products = response.products;
    //   console.log("顯示產品", vm.products);
    // });
  },
  computed: {
    ...mapGetters(["check_loading"])
  }
};
</script>