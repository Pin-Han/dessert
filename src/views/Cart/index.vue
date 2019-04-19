<template>
  <div>
    <div class="section-cart">
      <div class="shopping">
        <div class="shopping__title">您的購物車</div>
        <table class="shopping__info">
          <tbody>
            <tr>
              <td class="shopping__img">
                <img src="@/assets/image/item1.jpg" alt="item1">
              </td>
              <td class="shopping__name">
                <p>焦糖馬卡龍</p>
                <p>NT$450</p>
              </td>
              <td class="shopping__select">
              </td>
              <td class="shopping__price">
                <p>NT$900</p>
              </td>
              <td class="shopping__trash">
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
        </table>
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