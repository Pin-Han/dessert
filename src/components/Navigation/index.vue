<template>
  <div>
    <div class="navigation">
      <a class="navigation__logo" href="#/">
        <img src="@/assets/image/logo-all-dark.png" alt="logo" class="navigation__logo-img">
      </a>

      <ul class="navigation__item">
        <li class="navigation__item-menu">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navigation__item-menu">
          <router-link to="/dessert">Dessert</router-link>
        </li>
        <li class="navigation__item-menu">
          <router-link to="/Login">Login</router-link>
        </li>
        <li class="navigation__item-menu">
          <router-link to="/Cart">
            <i class="fas fa-shopping-cart"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mobile-nav">
      <div class="mobile-nav__hamberger">
        <i class="fas fa-bars"></i>
      </div>
      <a class="mobile-nav__logo" href="#/">
        <img src="@/assets/image/logo-all-dark.png" alt="logo" class="mobile-nav__logo-img">
      </a>
      <div class="mobile-nav__cart">
        <i class="fas fa-shopping-cart"></i>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {};
$(document).ready(function() {
  $(".navigation").click(function() {
    alert("1234");
  });
});
</script>

