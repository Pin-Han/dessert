<template>
  <div>
    <div class="dessert">
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
            <div class="product">
              <div class="product__box">
                <img src="@/assets/image/item1.jpg" alt="product" class="product__box-img">
                <p class="product__box-text">本日精選</p>
              </div>
              <div class="product__info">
                <div class="product__info-title">焦糖瑪卡龍</div>
                <div class="product__info-price">NT$450</div>
              </div>
              <a href="#" class="product__cart">加入購物車</a>
            </div>
            <div class="product">
              <div class="product__box">
                <img src="@/assets/image/item1.jpg" alt="product" class="product__box-img">
                <p class="product__box-text">本日精選</p>
              </div>
              <div class="product__info">
                <div class="product__info-title">焦糖瑪卡龍</div>
                <div class="product__info-price">NT$450</div>
              </div>
              <a href="#" class="product__cart">加入購物車</a>
            </div>
            <div class="product">
              <div class="product__box">
                <img src="@/assets/image/item1.jpg" alt="product" class="product__box-img">
                <p class="product__box-text">本日精選</p>
              </div>
              <div class="product__info">
                <div class="product__info-title">焦糖瑪卡龍</div>
                <div class="product__info-price">NT$450</div>
              </div>
              <a href="#" class="product__cart">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination/>
  </div>
</template>
<script>

import Pagination from "@/components/Pagination";

export default {
  components: {
    Pagination
  }
};
</script>