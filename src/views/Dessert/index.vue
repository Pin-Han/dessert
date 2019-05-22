<template>
  <div>
    <div class="dessert">
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
            <div class="product" v-for="item in products">
              <div class="product__box">
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
          <Pagination/>
        </div>
      </div>
    </div>
    <ProductInfoModal :product="this.item" @addcart="customercart"></ProductInfoModal>
  </div>
</template>
<script>
import $ from "jquery";
import ProductInfoModal from "@/components/ProductInfoModal";
import Pagination from "@/components/Pagination";
import { productall, getproduct, addtocart } from "@/api/product";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      products: [],
      item: []
    };
  },
  components: {
    Pagination,
    ProductInfoModal
  },
  methods: {
    productinfo(id) {
      //取得單一商品資訊
      getproduct(id).then(response => {
        console.log(response);
        if (response.success) {
          this.item = response.product;
          $("#FrontProductInfo").modal("show");
        }
      });
    },
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
if(response.success){
  alert("已加入購物車")
}
      });
    }
  },
  created() {
    //抓取產品訊息
    productall().then(response => {
      console.log(response);
      const vm = this;
      vm.products = response.products;
      console.log("顯示產品", vm.products);
    });
  },
  computed: {
    ...mapGetters(["check_loading"])
  }
};
</script>