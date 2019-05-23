<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end pagination-lg">
        <li class="page-item" :class="{'disabled':!pages.has_pre}">
          <a
            class="page-link"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            @click.prevent="prePage()"
          >Previous</a>
        </li>
        <li
          class="page-item"
          v-for="(item,index) in pages.total_pages"
          :key="index"
          :class="{'active':pages.current_page === item}"
        >
          <a class="page-link" href="#" @click.prevent="directPage(item)">{{item}}</a>
        </li>
        <li class="page-item" :class="{'disabled':!pages.has_next}">
          <a class="page-link" href="#" @click.prevent="nextPage()">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["pages"],
  data() {
    return {};
  },
  methods: {
    nextPage() {
      //當前頁面 +1
      const next = parseInt(this.pages.current_page) + 1;
      console.log(next);
      this.$emit("changePage",next)
    },prePage(){
      //往前一頁
      const past =parseInt(this.pages.current_page) - 1;
      this.$emit("changePage",past);
    },directPage(item){
//指定頁面
console.log(item);
this.$emit("changePage",item);
    }
  }
};
</script>

<style lang="scss">
</style>
