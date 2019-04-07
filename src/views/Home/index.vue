<template>
  <div class="home">
    <!-- 首頁的圖片大圖 -->
    <img src="@/assets/image/slide.jpg" alt="slide" class="home__img">
    <div class="topic">
      <div class="topic__item">
        <img src="@/assets/image/topic_1.jpg" alt="topic1" class="topic__item-img">
        <p class="topic__item-font">本日精選</p>
      </div>
      <div class="topic__item">
        <img src="@/assets/image/topic_2.jpg" alt="topic2" class="topic__item-img">
        <p class="topic__item-font">人氣推薦</p>
      </div>
      <div class="topic__item">
        <img src="@/assets/image/topic_3.jpg" alt="topic3" class="topic__item-img">
        <p class="topic__item-font">新品上市</p>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "home",
  components: {
    HelloWorld
  },
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

