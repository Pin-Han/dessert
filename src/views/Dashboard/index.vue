<template>
  <div>
    <DashNav/>

    <DashMenu/>
<div class="dash__main">
    <p>123</p>
</div>
    <transition name="fade-transform" mode="out-in">
      <!-- or name="fade" -->
      <!-- <router-view :key="key"></router-view> -->
      <router-view class="bg-purple"></router-view>
    </transition>
  </div>
</template>
<script>
import DashNav from "@/components/DashNav";
import DashMenu from "@/components/DashMenu";

export default {
  components: { DashNav, DashMenu }
};
</script>
<style lang="scss" scoped>
.bg-purple{
    background-color: #F2f3f8;
}
</style>

