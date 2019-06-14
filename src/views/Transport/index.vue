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
