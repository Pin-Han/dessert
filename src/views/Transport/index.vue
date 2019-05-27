<template>
  <div class="transport">
    <div class="transport__left">
      <div class="transport__title">
        <p class="transport__title-font">運送</p>
      </div>

      <div class="transport__part">
        <div class="transport__part-name">
          <label for="firstname">姓氏</label>
          <input type="text" name="firstname" id="firstname" placeholder="王">
        </div>
        <div class="transport__part-name">
          <label for="firstname">名字</label>
          <input type="text" name="firstname" id="firstname" placeholder="王">
        </div>
      </div>
      <div class="transport__part">
        <div class="transport__part-phone">
          <label for="firstname">電話</label>
          <input type="text" name="firstname" id="firstname" placeholder="王">
        </div>
      </div>
      <div class="transport__part">
        <div class="transport__part-county">
          <label for="firstname">地址</label>
          <input type="text" name="firstname" id="firstname" placeholder="王">
        </div>
      </div>
      <div class="transport__part">
        <div class="transport__part-address">
          <input type="text" name="firstname" id="firstname" placeholder="幸福路">
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
