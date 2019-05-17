<template>
  <div>
    <DashNav/>

    <DashMenu/>
    <div class="dash">
      <div class="dash__main">
        <transition name="fade" mode="out-in">
          <!-- or name="fade" -->
          <!-- <router-view :key="key"></router-view> -->
          <router-view class="bg-purple"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import DashNav from "@/components/DashNav";
import DashMenu from "@/components/DashMenu";

export default {
  components: { DashNav, DashMenu },

};
</script>
<style lang="scss" scoped>
.bg-purple {
  background-color: #f2f3f8;
}
</style>

