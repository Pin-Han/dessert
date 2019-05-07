<template>
  <div>
    <div class="section-admin">
      <div class="admin">
        <div class="admin__title">後台登入</div>
        <div class="admin__input">
          <i class="fas fa-user-cog admin__input-icon"></i>
          <input type="email" class="admin__input-content" placeholder="Type your Email">
        </div>

        <div class="admin__input">
          <i class="fas fa-lock admin__input-icon"></i>
          <input type="password" class="admin__input-content" placeholder="Type your password">
        </div>

        <a href="#" class="admin__login ">Login</a>
         <router-link to="/" class="admin__back">&larr; Back</router-link>
      </div>
    </div>
  </div>
</template>