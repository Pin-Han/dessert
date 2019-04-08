<template>
  <div class="home">
    <!-- 首頁的圖片大圖 -->
    <div class="home__img"></div>
    <div class="section-featured">
      <div class="topic">
        <div class="topic__img topic__img-1"></div>
        <div class="topic__text">
          <p>本日精選</p>
        </div>
      </div>
      <div class="topic">
                <div class="topic__img topic__img-2"></div>
        <div class="topic__text">
          <p>本日精選</p>
        </div>
      </div>
      <div class="topic">
                <div class="topic__img topic__img-3"></div>
        <div class="topic__text">
          <p>本日精選</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user";
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  methods: {
    logfn() {
      //   const data ={
      //       email:'qd@gmailc.com',
      //       password:'0000'
      //   }
      //   login(data.email, data.password).then(response => {
      //   const data = response.data;
      //   if (data.roles && data.roles.length > 0) { // 驗證返回的roles是否是一个非空陣列
      //     commit('SET_ROLES', data.roles)
      //   } else {
      //     reject('getInfo: roles must be a non-null array !')
      //   }
      // }).catch(error => {
      //     console.log(error);
      // });
    }
  }
};
</script>
<style>
</style>

