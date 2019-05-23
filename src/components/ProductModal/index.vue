<template>
  <!-- 後台產品列表 修改產品的modal -->
  <div>
    <div
      class="modal fade font-size-normal"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-scss-main text-white">
            <h1 class="modal-title" id="exampleModalLabel">
              <span>編輯產品</span>
            </h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="font-size-big">&times;</span>
            </button>
          </div>
          <div class="modal-body font-size-normal">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image" class="font-size-normal">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control font-size-normal"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="product.image"
                  >
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i class="fas fa-spinner fa-spin show-none"></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control font-size-normal"
                    ref="files"
                    @change="uploadFile"
                  >
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt="image"
                  :src="product.image"
                >
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title"></label>
                  <input
                    type="text"
                    class="form-control font-size-normal"
                    id="title"
                    v-model="product.title"
                    placeholder="請輸入標題"
                  >
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control font-size-normal"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="product.category"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control font-size-normal"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="product.unit"
                    >
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control font-size-normal"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="product.origin_price"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control font-size-normal"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="product.price"
                    >
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control font-size-normal"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="product.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control font-size-normal"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="product.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      :true-value="1"
                      :false-value="0"
                      v-model="product.is_enabled"
                    >
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary font-size-normal"
              data-dismiss="modal"
            >取消</button>
            <button type="button" class="btn btn-info font-size-normal" @click="update()">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
//後台編輯產品
import { editproduct, createproduct, uploadimg } from "@/api/admin";
//取得單一產品
import { getproduct } from "@/api/product";

export default {
  props: ["product"],
  methods: {
    update() {
      if (this.product.title === undefined) {
        alert("產品名稱不能留空");
        return;
      }
      if (this.product.is_enabled === 1) {
        if (this.product.price === undefined) {
          alert("產品價格未設定，請勿直接上架產品");
          return;
        }
      }
            if(this.product.is_enabled === undefined){
        this.product.is_enabled = 0;
      }
      this.$emit("edit", this.product);
    },
    uploadFile() {
      console.log(this);
      const uploadedFile = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", uploadedFile);
        $(".fa-spin").removeClass("show-none");

      uploadimg(formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(response => {
        $(".fa-spin").addClass("show-none");

        console.log(response);
        if(response.message==="檔案格式錯誤"){
          alert("檔案格式僅限JPEG、PNG");
          return;
        }
        // if(response.message.code==="LIMIT_FILE_SIZE"){
        //   alert("圖片過大，請選擇其他張圖片");
        // }
        this.$set(this.product,"image",response.imageUrl);
        // this.image = response.imageUrl;
      });
    }
  }
};
</script>
<style scoped>
.show-none{
  display: none;
}
</style>



