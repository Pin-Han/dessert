<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <button @click="logfn">123</button>
  </div>
</template>

<script>
import { login } from '@/api/user';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  methods:{
      logfn(){
          
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
