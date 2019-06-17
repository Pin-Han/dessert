<template>
  <div class="checkout">
    <div class="checkout__steps">
      <div class="checkout__title">
        <span>結帳</span>
        <div class="status">
          <div class="status__item"></div>
          <div class="status__item"></div>
          <div class="status__item"></div>
        </div>
      </div>
      <div class="section-invoice">
        <div class="invoice">
          <input type="radio" id="electronic" name="invoice" class="invoice__option" checked>
          <label for="electronic" class="invoice__btn">載具</label>
          <input type="radio" id="post" name="invoice" class="invoice__option">
          <label for="post" class="invoice__btn">郵寄發票</label>
        </div>
      </div>

      <a href="#" class="next-step">確認結帳</a>
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
