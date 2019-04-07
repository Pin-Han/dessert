<template>
  <div id="app" class="laptop">
    <div class="navigation">
      <div class="navigation__logo">
        <img src="@/assets/image/logo-all-dark.png" alt="logo" class="navigation__logo-img">
      </div>

      <ul class="navigation__item">
        <li class="navigation__item-menu">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navigation__item-menu">
          <a href="#">Dessert</a>
        </li>
        <li class="navigation__item-menu">
          <a href="#">Login</a>
        </li>
        <li class="navigation__item-menu">
          <a href="#" class="fas fa-shopping-cart"></a>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/main";
</style>
