<template>
  <div>
    <div class="section-cart">
      <div class="shopping">
        <div class="shopping__title">您的購物車</div>
        <div class="cart">
          <img src="@/assets/image/item1.jpg" alt="item1" class="cart__img">
          <div class="cart__name">
            <p>焦糖馬卡龍</p>
            <p>NT$450</p>
          </div>
          <div class="cart__num">
            <span class="fas fa-plus"></span>
            <input type="number">
            <span class="fas fa-minus"></span>
          </div>
          <div class="cart__price">NT$900</div>
          <div class="cart__trash">
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
        <div class="cart">
          <img src="@/assets/image/item1.jpg" alt="item1" class="cart__img">
          <div class="cart__name"></div>
          <div class="cart__num">
            <span class="fas fa-plus"></span>
            <input type="number">
            <span class="fas fa-minus"></span>
          </div>
          <div class="cart__price">NT$900</div>
          <div class="cart__trash">
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <div class="bill">
        <div class="bill__title">訂單摘要</div>
        <div class="bill__price">
          <p>小計</p>
          <p>NT$2700</p>
        </div>
        <div class="bill__shipping">
          <p>運費</p>
          <p>NT$300</p>
        </div>
        <div class="bill__total">
          <p>總共</p>
          <p>NT$2700</p>
        </div>
        <div class="bill__pay">結帳</div>
      </div>
    </div>
  </div>
</template>