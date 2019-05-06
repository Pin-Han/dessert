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
          <router-link to="/login">Login</router-link>
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
        <router-link to="/Cart">
          <i class="fas fa-shopping-cart"></i>
        </router-link>
      </div>
    </div>
    <div class="mobile-menu">
      <ul class="mobile-menu__item">
        <li class="mobile-menu__item-menu">
          <router-link to="/">Home</router-link>
        </li>
        <li class="mobile-menu__item-menu">
          <router-link to="/dessert">Dessert</router-link>
        </li>
        <li class="mobile-menu__item-menu">
          <router-link to="/Login">Login</router-link>
        </li>
        <!-- <li class="mobile-menu__item-menu">
          <router-link to="/Cart">
            <i class="fas fa-shopping-cart"></i>
          </router-link>
        </li>-->
      </ul>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      auth: "登入"
    };
  },
computed:{
  ...mapGetters([check_login]),//不知道為什麼壞掉
}
};
$(document).ready(function() {
  $(".mobile-nav__hamberger").click(function() {
    $(".mobile-menu").slideToggle("normal");
    document.querySelector(".mobile-menu").style.display = "block";
  });
  $(".mobile-menu__item-menu").click(function() {
    $(".mobile-menu").slideToggle("normal");
    document.querySelector(".mobile-menu").style.display = "none";
  });
});
</script>
<style scoped>
.hide {
  display: none;
}
</style>

