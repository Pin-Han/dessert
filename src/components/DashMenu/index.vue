<template>
  <div>
    <!-- <loading :active.sync="isLoading"></loading> -->
    <div class="dashmenu">
      <div class="dashmenu__title" @click="gohomedash()">
        <p class="dashmenu__title-text">後台管理</p>
      </div>
      <ul>
        <li class="dashmenu__list" @click="showproduct()">
          <i class="fas fa-box-open dashmenu__list-icon"></i> 產品列表
        </li>
        <li class="dashmenu__list" @click="showorder()">
          <i class="far fa-list-alt dashmenu__list-icon"></i> 訂單列表
        </li>
        <li class="dashmenu__list">
          <i class="fas fa-ticket-alt dashmenu__list-icon"></i> 優惠券
        </li>
      </ul>
      <router-link to="/" class="dashmenu__back dashmenu__list">
        <i class="fas fa-door-closed dashmenu__back-icon"></i>
        <div class="dashmenu__back-text">Back</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // isLoading:false,
    };
  },methods:{
      gohomedash(){
          this.$router.push('/dashboard');
      },showproduct(){
          this.$router.push('/dashboard/Product');
      },showorder(){
          this.$router.push('/dashboard/Order');
      }
  }
};
</script>

