<template>
    <div class="modal fade"
        id="productModal"
        ref="modal"
        tabindex="-1">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header bg-secondary">
                  <h5 class="modal-title" id="productModalLabel">{{ modalTitle }}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="mb-3">
                        <label for="imgUrl" class="form-label">圖片網址</label>
                        <input type="text"
                               class="form-control mb-3"
                               id="imgUrl"
                               v-model.trim="tempProduct.imageUrl"
                               placeholder="請輸入圖片網址">
                        <label for="imgUpload" class="form-label">上傳主要圖片</label>
                        <input type="file"
                               class="form-control mb-5"
                               id="imgUpload"
                               @change="upLoadImage('main-image', $event)">
                        <img  class="img-fluid mb-3"
                              :src="tempProduct.imageUrl"
                              v-if="!isLoading">
                        <div  class="d-flex
                                    justify-content-center
                                    align-items-center"
                              style="height: 200px"
                              v-else>
                            <div class="spinner-border text-primary"
                               style="width: 3rem; height: 3rem;"
                               role="status">
                               <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <label for="imagesUrl" class="form-label">上傳附圖</label>
                        <div v-for="(item, index) in tempProduct.imagesUrl"
                             :key="item">
                           <input type="file"
                               class="form-control mb-5"
                               :id="`imagesUrl${index}`"
                               @change="upLoadImage(index, $event)">
                             <img  class="img-fluid mb-3"
                              :src="tempProduct.imagesUrl[index]">
                        </div>
                        <button class="btn btn-info me-3 mb-3"
                                v-if="tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1] ||
                                      tempProduct.imagesUrl.length === 1"
                                @click="addImage">
                                新增圖片
                        </button>
                        <button class="btn btn-primary mb-3"
                                @click="deleteImage">
                                刪除圖片
                        </button>
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div class="mb-3">
                        <label for="title" class="form-label">
                          標題 <span class="text-primary">*</span>
                        </label>
                        <input type="text"
                               class="form-control"
                               id="title"
                               v-model.trim="tempProduct.title"
                               placeholder="請輸入商品標題">
                      </div>
                      <div class="row mb-2">
                        <div class="col-md-6">
                          <div class="mb-3">
                            <label for="category" class="form-label">
                              分類 <span class="text-primary">*</span>
                            </label>
                            <input type="text"
                                   class="form-control"
                                   id="category"
                                   v-model.trim="tempProduct.category"
                                   placeholder="請輸入商品分類">
                          </div>
                        </div>
                        <div class="col-md-6">
                           <div class="mb-3">
                            <label for="unit" class="form-label">
                              單位 <span class="text-primary">*</span>
                            </label>
                            <input type="text"
                                   class="form-control"
                                   id="unit"
                                   v-model.trim="tempProduct.unit"
                                   placeholder="請輸入商品單位">
                          </div>
                        </div>
                        <div class="col-md-6">
                           <div class="mb-6">
                            <label for="origin_price" class="form-label">
                              原價 <span class="text-primary">*</span>
                            </label>
                            <input type="number"
                                   class="form-control"
                                   min="0"
                                   id="origin_price"
                                   v-model.number="tempProduct.origin_price"
                                   placeholder="請輸入商品原價">
                          </div>
                        </div>
                        <div class="col-md-6">
                           <div class="mb-6">
                            <label for="price" class="form-label">
                              售價 <span class="text-primary">*</span>
                            </label>
                            <input type="number"
                                   class="form-control"
                                   min="0"
                                   id="price"
                                   v-model.number="tempProduct.price"
                                   placeholder="請輸入商品售價">
                          </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <template v-if="isNew">
                              <label class="form-label">
                                規格
                              </label>
                              <div v-for="(spec, index) in tempProduct.productSpecs"
                                  :key="spec">
                                <input  type="text"
                                        class="form-control mb-3 text-primary fw-bold"
                                        v-model.trim="spec.type"
                                        placeholder="規格種類: ex: 顏色">
                                <input  type="text"
                                        class="form-control mb-3"
                                        v-for="(item, index2) in spec.children"
                                        v-model.trim="spec.children[index2]"
                                        :key="index2"
                                        placeholder="規格 ex: 藍色、紅色、綠色">
                                  <div class="d-flex align-items-center mb-6">
                                     <button  v-if="tempProduct.productSpecs[index].children[
                                           tempProduct.productSpecs[index].children.length - 1] &&
                                           tempProduct.productSpecs[index].type"
                                           class="btn btn-outline-info me-3 d-inline-block"
                                           type="button"
                                          @click="addSpecInput(index)">
                                          新增欄位
                                      </button>
                                      <button v-else
                                              class="btn btn-outline-primary me-3"
                                              type="button"
                                              @click="deleteSpecInput(index)">
                                              刪除欄位
                                      </button>
                                      <button class="btn btn-primary"
                                              @click="deleteSpecType(index)">
                                              刪除規格種類
                                      </button>
                                  </div>
                              </div>
                              <div>
                                <button class="btn btn-info me-3 mb-3"
                                      @click="addSpecType">
                                        新增規格種類
                                </button>
                              </div>
                            </template>
                            <template v-else>
                              <label class="form-label">
                                規格
                              </label>
                              <div v-for="spec in tempProduct.productSpecs"
                                  :key="spec"
                                  class="mt-0">
                                <input  type="text"
                                        class="form-control text-primary fw-bold mb-3"
                                        v-model.trim="spec.type"
                                        placeholder="輸入規格種類: ex: 顏色">
                                <input  type="text"
                                        class="form-control mb-3"
                                        v-for="(item, index) in spec.children"
                                        v-model.trim="spec.children[index]"
                                        :key="index"
                                        placeholder="輸入規格 ex: 藍色、紅色、綠色">
                              </div>
                              <div>
                                  <button class="btn btn-info me-3 mb-3"
                                        @click="addSpecType">
                                          新增規格種類
                                  </button>
                                  <button class="btn btn-primary mb-3"
                                          @click="deleteSpecType">
                                          刪除規格種類
                                  </button>
                                </div>
                            </template>
                        </div>
                        <hr>
                      </div>
                      <div class="mb-3">
                        <label for="description" class="form-label">產品描述</label>
                        <textarea class="form-control"
                                  id="description"
                                  v-model="tempProduct.description"
                                  rows="3"
                                  placeholder="請輸入產品描述"></textarea>
                      </div>
                      <div class="mb-3">
                        <label for="content" class="form-label">說明內容</label>
                        <textarea class="form-control"
                                  id="content"
                                  v-model="tempProduct.content"
                                  rows="3"
                                  placeholder="請輸入說明內容"></textarea>
                      </div>
                      <div class="form-check mb-3">
                        <input class="form-check-input"
                               type="checkbox"
                               v-model="tempProduct.is_enabled"
                               :true-value="1"
                               :false-value="0"
                               id="is_enabled">
                        <label class="form-check-label" for="is_enabled">
                          是否啟用
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                  <button type="button"
                          class="btn btn-info"
                          :class="{ 'disabled' : disabled }"
                          @click="sendProduct">
                        確認
                  </button>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import Modal from '../../mixins/Modal.vue'

export default {
  props: {
    temp: {
      type: Object,
      required: true
    },
    isNew: {
      type: Boolean,
      required: true
    }
  },
  emits: ['send-product'],
  data () {
    return {
      tempProduct: {
        imagesUrl: [''],
        productSpecs: []
      },
      isLoading: false
    }
  },
  mixins: [Modal],
  computed: {
    modalTitle () {
      return this.isNew ? '新增產品' : '編輯產品'
    },
    disabled () {
      if (!this.tempProduct.title ||
        !this.tempProduct.category ||
        !this.tempProduct.unit ||
        !this.tempProduct.origin_price ||
        !this.tempProduct.price) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    temp () {
      this.tempProduct = this.temp
    }
  },
  methods: {
    sendProduct () {
      this.$emit('send-product', this.tempProduct)
    },
    addSpecInput (index) {
      const lastIndex = this.tempProduct.productSpecs[index].children.length - 1
      if (this.tempProduct.productSpecs[index].children[lastIndex]) {
        this.tempProduct.productSpecs[index].children.push('')
      }
    },
    deleteSpecInput (index) {
      const lastIndex = this.tempProduct.productSpecs[index].children.length - 1
      if (lastIndex >= 1) {
        this.tempProduct.productSpecs[index].children.splice(lastIndex, 1)
      }
    },
    addSpecType () {
      // 檢查如果產品原本沒有規格，先增加規格陣列
      if (!this.tempProduct.productSpecs) {
        this.tempProduct.productSpecs = []
      }
      this.tempProduct.productSpecs.push({
        type: '',
        children: ['']
      })
    },
    deleteSpecType (index) {
      this.tempProduct.productSpecs.splice(index, 1)
    },
    upLoadImage (image, e) {
      this.isLoading = true
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData)
        .then(res => {
          if (res.data.success) {
            if (image === 'main-image') {
              this.tempProduct.imageUrl = res.data.imageUrl
            } else {
              this.tempProduct.imagesUrl[image] = res.data.imageUrl
            }
            this.swal('成功上傳圖片')
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
        .catch(err => console.log(err))
    },
    addImage () {
      this.tempProduct.imagesUrl.push('')
    },
    deleteImage () {
      const lastIndex = this.tempProduct.imagesUrl.length - 1
      if (lastIndex >= 1) {
        this.tempProduct.imagesUrl.splice(lastIndex, 1)
      } else if (lastIndex === 0) {
        this.tempProduct.imagesUrl[lastIndex] = ''
      }
    }
  }
}
</script>
