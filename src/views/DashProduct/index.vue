<template>
  <div class="dashproduct">
    <loading :active.sync="check_loading"></loading>
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
        <tr v-for="(item,index) in product" :key="index">
          <td>
            <input type="checkbox" name id>
          </td>
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td>${{item.origin_price}}</td>
          <td>${{item.price}}</td>
          <td :class="{'color-scss-main':item.is_enabled===1}">{{item.is_enabled | checkActive}}</td>
          <td @click.prevent="openModal(false,item)">
            <i class="far fa-edit dashproduct__icon dashproduct__icon-edit"></i>
          </td>
          <td @click.prevent="deleteitem(item.id)">
            <i class="far fa-trash-alt dashproduct__icon dashproduct__icon-trash"></i>
          </td>
        </tr>
      </tbody>
    </table>
    <ProductModal :is-new="isNew" :product="item" @edit="editproduct"></ProductModal>
    <!--傳遞 isNew的值給予modal -->
    <NewproductModal @add="newProduct"></NewproductModal>
  </div>
</template>
<script>
import { Dashproduct, deleteproduct, createproduct } from "@/api/admin";
//匯入 modal
import ProductModal from "@/components/ProductModal";
import NewproductModal from "@/components/NewProductModal";
import { getproduct } from "@/api/product";
import { mapGetters } from "vuex";
import $ from "jquery";
export default {
  components: { ProductModal, NewproductModal },
  data() {
    return {
      product: [],
      isNew: false,
      item: []
    };
  },
  //傳遞isNew true or false to ProductModal

  methods: {
    productall() {
      //顯示產品列表
      Dashproduct().then(response => {
        console.log("後台產品列表", response);
        const vm = this;
        vm.product = response.products;
      });
    },
    newProduct(data) {

      createproduct(data).then(response => {
        console.log("新增產品", response);
        if (response.success) {
          alert("新增成功");
          $("#newproductModal").modal("hide");
          this.productall();
        }
      });
    },
    getproductinfo() {
      //給予api id 取得單一產品資訊
      getproduct(this.productId).then(response => {
        console.log("取得單一產品", response);
        if (response.success) {
          this.tempProduct = response.product;
        }
      });
    },
    openModal(isNew, item) {
      //打開建立新產品的modal
      //item=> click進來的商品資料 this.item=>props要傳遞的資料
      //如果是新增產品 就會是undefined 設為空
      if (item === undefined) {
        this.item = [];
      } else {
        this.item = item;
      }
      if (isNew === true) {
        $("#newproductModal").modal("show");
      } else {
        $("#productModal").modal("show");
      }
    },
    deleteitem(id) {
      //刪除產品
      this.$store.dispatch("ChangeLoading", true);
      this.$store.dispatch("DeleteProduct", id).then(res => {
        console.log("刪除產品", res);
        this.productall();
        this.$store.dispatch("ChangeLoading", false);
      });

    },
    editproduct(data) {
      //修改產品
      // this.$store.dispatch("ChangeLoading", true);
      this.$store.dispatch("Editproduct", data).then(response => {
        alert("修改成功");
        $("#productModal").modal("hide");
        console.log("修改產品", response);
      });
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
  },
  computed: {
    ...mapGetters(["check_loading"])
  }
};
</script>
