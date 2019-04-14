<template>
  <div>
    <div class="navigation">
      <div class="navigation__logo">
        <img src="@/assets/image/logo-all-dark.png" alt="logo" class="navigation__logo-img">
      </div>

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
  </div>
</template>
