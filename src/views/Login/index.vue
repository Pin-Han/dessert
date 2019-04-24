<template>
  <div>
    <div class="section-login">
      <div class="login">
        <p class="login__title">會員登入</p>
        <div class="mobile-social">
          <img src="@/assets/image/facebook.png" alt="facebook">
          <img src="@/assets/image/google.png" alt="google">
          <img src="@/assets/image/yahoo.png" alt="yahoo">
        </div>
        <div class="login__input">
          <div class="login__input-icon">
            <i class="fas fa-user"></i>
          </div>
          <input type="text" class="login__input-content" placeholder="電子信箱/手機號碼">
        </div>
        <div class="login__input">
          <div class="login__input-icon">
            <i class="fas fa-key"></i>
          </div>
          <input type="password" class="login__input-content" placeholder="請輸入密碼">
        </div>
        <div class="login__remember">
          <input type="checkbox" name id>
          <p>記住我</p>
        </div>
        <div class="login__btn">登入</div>
      </div>
      <div class="social">
        <div class="social__title">
          <p>連結社群帳號</p>
        </div>
        <div class="social__platform">
          <img src="@/assets/image/facebook.png" alt="facebook">
        </div>
        <div class="social__platform">
          <img src="@/assets/image/google.png" alt="google">
        </div>
        <div class="social__platform">
          <img src="@/assets/image/yahoo.png" alt="yahoo">
        </div>
      </div>
    </div>
  </div>
</template>