<template>
  <div class="checkout">
    <div class="checkout__steps">
      <div class="checkout__title">
        <span>運送</span>
        <div class="status">
          <div class="status__item"></div>
          <div class="status__item"></div>
          <div class="status__item"></div>
        </div>
      </div>
      <div class="type">
        <div class="type__half">
          <label for="firstname" class="type__label">姓氏</label>
          <input type="text" id="firstname" class="type__input" placeholder="王">
        </div>
        <div class="type__half">
          <label for="lastname" class="type__label">名字</label>
          <input type="text" id="lastname" class="type__input" placeholder="小明">
        </div>
      </div>
      <div class="type">
        <div class="type__half">
          <label for="telephone" class="type__label">電話</label>
          <input type="text" id="telephone" class="type__input" placeholder="0912-345-678">
        </div>
      </div>
      <div class="type">
        <div class="type__half">
          <label for="county" class="type__label">地址</label>
          <input type="text" id="county" class="type__input" placeholder="新北市">
        </div>
        <div class="type__half">
          <input type="text" id="direction" class="type__input" placeholder="0912-345-678">
        </div>
      </div>
      <div class="type">
        <div class="type__half">
          <input type="text" id="address" class="type__input" placeholder="縣民大道100號">
        </div>
      </div>
      <a href="#" class="next-step">下一步</a>
    </div>
    <OrderInfo></OrderInfo>
  </div>
</template>
<script>
import OrderInfo from "@/components/OrderInfo";
export default {
  components: {
    OrderInfo
  }
};
</script>
