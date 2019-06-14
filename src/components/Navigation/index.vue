<template>
  <div class="for-mobile">
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
          <a href="#" @click="login(check_login)">{{check_login | status }}</a>
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
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    //登入，要判斷是否是登入還登出
    login(data) {
      console.log(data);
      if (data === false) {
        this.$router.push("/login");
      } else {
        this.$store.dispatch("LogOut", data).then(response => {
          if (response.success === true) {
            alert("已成功登出");
            this.$store.dispatch("Check");
          }
        });
      }
    }
  },
  computed: {
    //確認是否登入
    ...mapGetters(["check_login", "product_cart"]),
    ...mapActions(["Login"])
  },
  filters: {
    status: function(value) {
      if (value === false) {
        return "登入";
      } else if (value === true) {
        return "登出";
      }
    }
  },
  mounted() {
    //mounted =>元素已經渲染完成，可以省略掉 $(document).ready....
    // //手機板 導覽列展開
    // $(document).ready(function() {
    $(".mobile-nav__hamberger").click(function() {
      $(".mobile-menu").slideToggle("normal");
    });
    $(".mobile-menu__item-menu").click(function() {
      $(".mobile-menu").slideToggle("normal");
    });
    //});
  }
};
</script>


