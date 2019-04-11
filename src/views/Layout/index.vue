<template>
  <div>
    <Navigation/>
    <!-- <div>
      <router-view></router-view>
    </div>-->
    <transition name="fade-transform" mode="out-in">
      <!-- or name="fade" -->
      <!-- <router-view :key="key"></router-view> -->
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default {
  components: { Navigation,Footer }
};
</script>
<style lang="scss">
</style>


