<template>
  <div>
    <div class="section-admin">
      <div class="admin">
        <div class="admin__title">後台登入</div>
        <div class="admin__input">
          <i class="fas fa-user-cog admin__input-icon"></i>
          <input
            type="email"
            class="admin__input-content"
            v-model="user.email"
            placeholder="Type your Email"
          >
        </div>

        <div class="admin__input">
          <i class="fas fa-lock admin__input-icon"></i>
          <input
            type="password"
            class="admin__input-content"
            v-model="user.password"
            placeholder="Type your password"
          >
        </div>

        <a href="#" class="admin__login" @click.prevent="godashboard()">Login</a>
        <router-link to="/" class="admin__back">&larr; Back</router-link>
      </div>
    </div>
  </div>
</template>
<script>
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
    godashboard() {
      const api = `${process.env.APIPATH}/signin`;
      const vm = this;
      let data = {
        username: vm.user.email,
        password: vm.user.password
      };
      if (data.username !== "patrick04184@gmail.com") {
        alert("帳號錯誤");
        vm.user.password = "";
      } else {
        this.$store.dispatch("Login", data).then(response => {
          console.log("管理者回傳登入", response);
          if (response.success) {
            alert("登入成功");
            this.$router.push("/dashboard");
          } else {
            alert("帳號錯誤");
           vm.user.password = "";
          }
        });
      }
      console.log("123", data.username);
    }
  }
};
</script>
