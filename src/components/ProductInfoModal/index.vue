<template>
  <!-- 前台單一商品的資訊 -->
  <div>
    <div
      class="modal fade"
      id="FrontProductInfo"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <!-- <h1 class="modal-title" id="exampleModalLabel">{{ product.title }}</h1> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="font-size-big">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal__left">
              <img :src="product.image" class="img-fluid modal__left-img" alt="product-img">
            </div>
            <div class="modal__right">
              <div class="modal__right-productinfo">
                <div class="modal__right-title">{{product.title}}</div>
                <div class="modal__right-origin font-size-normal">原價 $ {{product.origin_price}} 元</div>
                <div class="modal__right-price font-size-normal">優惠 $ {{product.price}}元</div>
                <select
                  name
                  class="modal__right-num form-control font-size-normal"
                  v-model="product.num"
                >
                  <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{product.unit}}</option>
                </select>
                <div class="modal__right-pay">共：＄{{product.num * product.price}}元</div>
                <a href="#" class="modal__right-cart">加入購物車</a>
              </div>

              <div class="modal__right-descript font-size-normal">{{product.description}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"]
};
</script>
