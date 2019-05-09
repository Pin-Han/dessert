<template>
  <div class="dashproduct">
    <a href="#" class="dashproduct__create" @click.prevent="createModal()">建立產品</a>
    <table class="table mt-4 dashproduct__table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" name id>
          </th>
          <th>分類</th>
          <th>名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th>啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in product">
          <td>
            <input type="checkbox" name id>
          </td>
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td>${{item.origin_price}}</td>
          <td>${{item.price}}</td>
          <td>{{item.is_enabled}}</td>
          <td>
            <i class="far fa-edit dashproduct__icon"></i>
          </td>
        </tr>
      </tbody>
    </table>
    <CreateProduct/>
  </div>
</template>
<script>
import { Dashproduct } from "@/api/admin";
//匯入 modal 
import CreateProduct from "@/components/CreateProduct";
import $ from "jquery";
export default {
  components: { CreateProduct },
  data() {
    return {
      product: []
    };
  },
  methods: {
    getproduct() {
      Dashproduct().then(response => {
        console.log("後台產品列表", response);
        const vm = this;
        vm.product = response.products;
      });
    },
    createModal() {
      //打開建立新產品的modal
      $("#productModal").modal("show");
    }
  },
  created() {
    this.getproduct();
  }
};
</script>
