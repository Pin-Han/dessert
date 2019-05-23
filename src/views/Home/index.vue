<template>
  <div class="home">
          <notifications group="foo" position="top left" class="notice"></notifications>

    <!-- 首頁的圖片大圖 -->
    <div class="home__img"></div>
    <div class="section-featured">
      <div class="topic">
        <div class="topic__img topic__img-1"></div>
        <div class="topic__text">
          <p>本日精選</p>
        </div>
      </div>
      <div class="topic">
        <div class="topic__img topic__img-2"></div>
        <div class="topic__text">
          <p>人氣推薦</p>
        </div>
      </div>
      <div class="topic">
        <div class="topic__img topic__img-3"></div>
        <div class="topic__text">
          <p>新品上市</p>
        </div>
      </div>
    </div>
    <img
      src="@/assets/image/sm-為什麼選擇了做甜點.png"
      alt="whydo"
      class="mobile__pic mobile-translate-y-medium"
    >
    <div class="section-choose">
      <div class="whychoose">
        <div class="whychoose__img whychoose__img-1"></div>
        <div class="whychoose__reason">
          <p class="whychoose__reason-1">是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
          <p
            class="whychoose__reason-2"
          >青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
          <img src="@/assets/image/lg-為什麼選擇了做甜點.png" alt="whyimg" class="whychoose__whyimg">
        </div>
      </div>
    </div>
    <img src="@/assets/image/sm-為什麼一定要吃甜點.png" alt="whyeat" class="mobile__pic">

    <div class="section-choose">
      <div class="whychoose col-reserve">
        <div class="whychoose__reason">
          <p class="whychoose__reason-1">是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
          <p
            class="whychoose__reason-2"
          >青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
          <img src="@/assets/image/lg-為什麼一定要吃甜點.png" alt="whyimg" class="whychoose__whyimg">
        </div>
        <div class="whychoose__img whychoose__img-2"></div>
      </div>
    </div>
    <div class="section-noreason"></div>
    <div class="section-products">
      <div class="product" v-for="(item,index) in this.products" :key="index" v-if="index < 3">
        <div class="product__box border-two">
          <img :src="item.image" alt="product" class="product__box-img">
          <p class="product__box-text">最新商品</p>
        </div>
        <div class="product__info">
          <div class="product__info-title">{{item.title}}</div>
          <div class="product__info-price">NT${{item.price}}</div>
        </div>
        <div class="product__more">
          <a
            href="#"
            class="product__more-info border-two"
            @click.prevent="productinfo(item.id)"
          >查看更多</a>

          <a href="#" class="product__more-cart border-two" @click.prevent="customercart(item)">加入購物車</a>
        </div>
      </div>
    </div>
    <ProductInfoModal :product="this.item" @addcart="modalCart"></ProductInfoModal>
  </div>
</template>

<script>
import $ from "jquery";
import { login } from "@/api/user";
import Vue from "vue";

import { productall, getproduct, addtocart } from "@/api/product";

// @ is an alias to /src
import ProductInfoModal from "@/components/ProductInfoModal";
export default {
  name: "home",
  components: { ProductInfoModal },
  data(){
    return{
      products:{},
      item:[]
    }
  },
  methods: {
    logfn() {
      //   const data ={
      //       email:'qd@gmailc.com',
      //       password:'0000'
      //   }
      //   login(data.email, data.password).then(response => {
      //   const data = response.data;
      //   if (data.roles && data.roles.length > 0) { // 驗證返回的roles是否是一个非空陣列
      //     commit('SET_ROLES', data.roles)
      //   } else {
      //     reject('getInfo: roles must be a non-null array !')
      //   }
      // }).catch(error => {
      //     console.log(error);
      // });
    },
    productinfo(id) {
      //取得單一商品資訊
      getproduct(id).then(response => {
        console.log(response);
        if (response.success) {
          response.product.num=1; //給予預設值為1
          this.item = response.product;
          $("#FrontProductInfo").modal("show");
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
    },
    allstore(page = 1) {
      //顯示所有商品
      console.log(page);
      this.$store.dispatch("showStore", page).then(response => {
        console.log("查看", response);
        this.products = response.products;
      });
    },    modalCart(data) {
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
  },created(){
    this.allstore();
  }
};
</script>
<style lang="scss" scoped>
@media (max-width: 600px) {
  .col-reserve {
    flex-direction: column-reverse;
  }
}
</style>


