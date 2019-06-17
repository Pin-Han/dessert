<template>
  <div class="checkout">
    <div class="checkout__steps">
      <div class="checkout__title">
        <span>付款資訊</span>
        <div class="status">
          <div class="status__item"></div>
          <div class="status__item"></div>
          <div class="status__item"></div>
        </div>
      </div>
      <div class="type">
        <div class="type__half">
          <label for="credit" class="type__label">信用卡卡號</label>
          <input type="text" id="credit" class="type__input" placeholder="0000-0000-0000-0000">
        </div>
      </div>
      <div class="type">
        <div class="type__half">
          <label for="firstname" class="type__label">持卡人姓名</label>
          <input type="text" id="firstname" class="type__input" placeholder="王">
        </div>
        <div class="type__half">
          <label for="lastname" class="type__label">名字</label>
          <input type="text" id="lastname" class="type__input" placeholder="小明">
        </div>
      </div>

      <div class="type">
        <div class="type__half">
          <label for="firstname" class="type__label">有效期限</label>

          <select class="type__input" name id>
            <option value>01</option>
            <option value>02</option>
            <option value>03</option>
            <option value>04</option>
            <option value>05</option>
            <option value>06</option>
            <option value>07</option>
            <option value>09</option>
            <option value>10</option>
            <option value>11</option>
            <option value>12</option>
          </select>
        </div>
        <div class="type__half">
          <select class="type__input" name id>
            <option value>2020</option>
            <option value>2021</option>
            <option value>2022</option>
            <option value>2023</option>
            <option value>2024</option>
            <option value>2025</option>
            <option value>2026</option>
            <option value>2027</option>
            <option value>2028</option>
            <option value>2029</option>
            <option value>2030</option>
          </select>
        </div>
      </div>
      <div class="type">
        <div class="type__half">
          <label for="check" class="type__label">背面末三碼</label>

          <input type="text" id="check" class="type__input" placeholder="123">
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
