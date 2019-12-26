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
          <input
            type="text"
            class="login__input-content"
            v-model="user.email"
            placeholder="電子信箱/手機號碼"
          >
        </div>
        <div class="login__input">
          <div class="login__input-icon">
            <i class="fas fa-key"></i>
          </div>
          <input
            type="password"
            class="login__input-content"
            v-model="user.password"
            placeholder="請輸入密碼"
          >
        </div>
        <!-- <div class="login__remember">
          <input type="checkbox" name id>
          <p>記住我</p>
          
        </div> -->
        <div class="login__btn" @click="signin()">登入</div>
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
<script>
import {productall} from '@/api/product';
export default {

  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = `${process.env.APIPATH}/signin`;
      const vm = this;
      let data = {
        username: vm.user.email,
        password: vm.user.password
      }; // 登入
      //透過dispatch 來操作action裡的方法=>Login 並帶入要傳入的參數 => data
      //導入進actions裡的Login後，會先執行action的function 才會回傳res回來
      this.$store
        .dispatch("Login", data)
        .then(res => {
          console.log('回傳登入',res);
          if(res.success){
            alert("登入成功");
            vm.$router.push('/dessert');
          }else if(!res.success){
            alert("帳號密碼錯誤，請在確認");
          }
          // if (res.data.success) {
          //   vm.$router.push("/admin/products");
          // }
        })
        .catch(() => {
          //問題
          this.loading = false;
        });
    }
  },

};
</script>
