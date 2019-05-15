<template>
  <div class="dashproduct">
    <a href="#" class="dashproduct__create" @click.prevent="openModal(true)">建立產品</a>
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
          <th>刪除</th>
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
          <td>{{item.is_enabled | checkActive}}</td>
          <td @click.prevent="openModal(false,item.id)">
            <i class="far fa-edit dashproduct__icon dashproduct__icon-edit"></i>
          </td>
          <td @click.prevent="deleteitem(item.id)">
            <i class="far fa-trash-alt dashproduct__icon dashproduct__icon-trash"></i>
          </td>
        </tr>
      </tbody>
    </table>
    <ProductModal :is-new="isNew" :product-id="tempid"></ProductModal>
    <!--傳遞 isNew的值給予modal -->
  </div>
</template>
<script>
import { Dashproduct, deleteproduct } from "@/api/admin";
//匯入 modal
import ProductModal from "@/components/ProductModal";
import $ from "jquery";
export default {
  components: { ProductModal },
  data() {
    return {
      product: [],
      isNew: false,
      tempid: ""
    };
  },
  //傳遞isNew true or false to ProductModal

  methods: {
    productall() {
      Dashproduct().then(response => {
        console.log("後台產品列表", response);
        const vm = this;
        vm.product = response.products;
      });
    },
    openModal(isNew, id) {
      //打開建立新產品的modal
      this.isNew = isNew;
      //console.log(id);
      this.tempid = id;
      $("#productModal").modal("show");
    },
    deleteitem(id) {
      //刪除產品
      deleteproduct(id).then(response =>{
        console.log("刪除",response);
        if(response.success){
          alert("刪除成功");
          //在做loading
        }
      })
    }
  },
  created() {
    this.productall();
  },
  filters: {
    checkActive: function(value) {
      if (value == "1") {
        return "已啟用";
      } else {
        return "未啟用";
      }
    }
  }
};
</script>
