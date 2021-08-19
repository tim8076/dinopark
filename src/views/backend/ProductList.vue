<template>
    <div class="product__list fw-bold mb-6">
        <Loading v-model:active="isLoading">
                 <div class="loadingio-spinner-rolling-feeb69z48bi">
                  <div class="ldio-947txsafiul">
                    <div>
                    </div>
                  </div>
                </div>
        </Loading>
        <ProductModal ref="productModal"
                      :temp="tempProduct"
                      :isNew="isNew"
                      @send-product="updateProduct">
        </ProductModal>
        <div class="container p-5 border border-primary">
            <div class="d-flex justify-content-end align-items-center mb-3">
              <button class="btn btn-info"
                      type="button"
                      @click="openModal(true)">
                  建立新產品
              </button>
            </div>
            <Alert :text="'產品新增請參考本季商品型錄'"
                   :color="'success'">
            </Alert>
            <div class="table-responsive">
               <table class="table">
                  <thead>
                      <tr class="table-light">
                          <th scope="col" width="100">類型</th>
                          <th scope="col" width="400">產品名稱</th>
                          <th scope="col" width="150">原價</th>
                          <th scope="col" width="150">售價</th>
                          <th scope="col" width="150">狀態</th>
                          <th scope="col" width="150">編輯</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="product in products" :key="product.id">
                          <th scope="row" class="text-info">{{ product.category }}</th>
                          <td>{{ product.title }}</td>
                          <td>{{ $toCurrency(product.origin_price) }}</td>
                          <td>{{ $toCurrency(product.price) }}</td>
                          <td>
                            <p v-if="product.is_enabled">啟用</p>
                            <p v-else class="text-primary">未啟用</p>
                          </td>
                          <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                              <button type="button"
                                      class="btn btn-outline-info"
                                      @click="openModal(false, product)">
                                      編輯
                              </button>
                              <button type="button"
                                      class="btn btn-outline-danger"
                                      @click="deleteProduct(product)">
                                      刪除
                              </button>
                            </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>
            <Pagination :pagination="pagination"
                        @change-page="getProducts">
            </Pagination>
        </div>
    </div>
</template>
<script>
import ProductModal from '@/components/back/ProductModal.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [''],
        productSpecs: []
      },
      pagination: {},
      isNew: false,
      isLoading: false,
      productType: ''
    }
  },
  components: {
    ProductModal,
    Pagination
  },
  methods: {
    openModal (isNew, product) {
      if (isNew) {
        this.tempProduct = {
          imagesUrl: [''],
          productSpecs: []
        }
      } else {
        this.tempProduct = JSON.parse(JSON.stringify(product))
      }
      this.isNew = isNew
      this.$refs.productModal.openModal()
    },
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            const { products, pagination } = res.data
            this.products = products
            this.pagination = pagination
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
        .catch(err => console.log(err))
    },
    updateProduct (tempProduct) {
      this.isLoading = true
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let method = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${tempProduct.id}`
        method = 'put'
      }
      this.$http[method](api, { data: tempProduct })
        .then(res => {
          if (res.data.success) {
            this.$refs.productModal.hideModal()
            this.getProducts(this.pagination.current_page)
            this.swal(res.data.message)
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
        .catch(err => console.log(err))
    },
    deleteProduct (product) {
      this.swalComfirm(`確認刪除 ${product.title}?`)
        .then(willDelete => {
          if (willDelete.isConfirmed) {
            this.isLoading = true
            const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`
            this.$http.delete(api)
              .then(res => {
                if (res.data.success) {
                  this.getProducts(this.pagination.current_page)
                  this.swal(res.data.message)
                } else {
                  this.swal(res.data.message, 'error')
                }
                this.isLoading = false
              })
              .catch(err => console.log(err))
          }
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
