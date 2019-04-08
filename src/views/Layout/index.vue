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
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
export default {
  components: { Navigation }
};
</script>
<style lang="scss">
</style>


