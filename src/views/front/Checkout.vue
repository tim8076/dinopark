<template>
    <Loading v-model:active="isLoading">
        <div class="loadingio-spinner-rolling-feeb69z48bi">
            <div class="ldio-947txsafiul">
                <div>
                </div>
            </div>
        </div>
    </Loading>
    <div class="checkout">
       <div class="container py-6" v-if="!isPaid">
          <div class="row flex-column px-2">
             <div class="col-md-6 mx-auto border border-3 p-0 mb-6">
                <h2 class="cart-title">訂單小計</h2>
                <div class="p-3 p-md-6">
                   <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">編號</th>
                          <th scope="col">商品</th>
                          <th scope="col">數量</th>
                          <th scope="col">小計</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(product,index) in productList" :key="product.id">
                          <th scope="row">{{ index + 1 }}</th>
                          <td>
                            {{ product.product.title }}
                            <span v-for="spec in product.productSpecs"
                                  :key="spec">
                              ({{ spec.chosedSpec }})
                            </span>
                          </td>
                          <td>{{ product.qty }}</td>
                          <td>{{ $toCurrency(product.total) }}</td>
                        </tr>
                        <tr>
                          <td colspan="4" class="text-primary fw-bold fs-5 text-end pe-4">
                            總計: NT${{ $toCurrency(Math.round(order.total)) }} 元
                          </td>
                        </tr>
                      </tbody>
                  </table>
                </div>
             </div>
             <div class="col-md-6 mx-auto border border-3 p-0">
                <h2 class="cart-title">訂購人資訊</h2>
                <div class="p-3 p-md-6">
                   <table class="table">
                      <tbody>
                        <tr>
                          <th scope="row">姓名:
                            <span class="ms-3 fw-normal">{{ order.user.name }}</span>
                          </th>
                        </tr>
                        <tr>
                          <th scope="row">信箱:
                            <span class="ms-3 fw-normal">{{ order.user.email }}</span>
                          </th>
                        </tr>
                        <tr>
                          <th scope="row">電話:
                            <span class="ms-3 fw-normal">{{ order.user.tel }}</span>
                          </th>
                        </tr>
                        <tr>
                          <th scope="row">地址:
                            <span class="ms-3 fw-normal">{{ order.user.address }}</span>
                          </th>
                        </tr>
                         <tr>
                          <th scope="row">付款方式:
                            <span class="ms-3 fw-normal">{{ order.user.payment_method }}</span>
                          </th>
                        </tr>
                        <tr>
                          <th scope="row">付款狀態:
                            <span class="ms-3 fw-normal">
                              {{ order.user.is_paid ? '已付款' : '未付款' }}
                            </span>
                          </th>
                        </tr>
                        <tr>
                          <td>
                            <button class="btn btn-primary d-block ms-auto"
                                    @click="checkOut">確認付款
                            </button>
                          </td>
                        </tr>
                      </tbody>
                  </table>
                </div>
             </div>
          </div>
       </div>
       <div class="container-fluid " v-else>
         <div class="row">
            <div class="col-md-6 p-6 d-none d-md-block">
              <div class="bg-cover margin-left-nagative"></div>
            </div>
            <div class="col-md-6 p-6">
              <h2 class="fs-1 fw-bolder text-info d-flex">
                <span class="material-icons md-48 me-3 mb-3">check_circle</span>
                付款成功
              </h2>
              <h2 class="fw-bold mb-3">購買明細</h2>
              <div class="info-area border-bottom mb-6">
                <h4 class="mb-3">購買品項</h4>
                <p v-for="product in productList" :key="product.id">
                  {{ product.product.title }}
                  <span v-for="spec in product.productSpecs"
                        :key="spec">
                    ({{ spec.chosedSpec }})
                  </span>
                  * {{ product.qty }}
                </p>
              </div>
              <div class="info-area border-bottom mb-6">
                <h4 class="mb-3">運送地址</h4>
                <p class="mb-2">{{ order.user.address }}</p>
              </div>
              <div class="info-area border-bottom mb-6">
                <h4 class="mb-3">付款資訊</h4>
                <p class="mb-2">地址: {{ order.user.address }}</p>
                <p class="mb-2">姓名: {{ order.user.name }}</p>
                <p>付款方式: {{ order.user.payment_method }}</p>
              </div>
              <div class="d-flex justify-content-center">
                <router-link to="/dino-park/store"
                             class="btn btn-primary w-75">
                             再去逛逛
                </router-link>
              </div>
            </div>
          </div>
       </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false,
      order: {
        products: {},
        user: {}
      },
      isPaid: false
    }
  },
  computed: {
    productList () {
      return Object.values(this.order.products)
    }
  },
  methods: {
    getOrder (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.order = res.data.order
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
    },
    checkOut () {
      this.isLoading = true
      const id = this.order.id
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${id}`
      this.$http.post(api)
        .then(res => {
          if (res.data.success) {
            this.isPaid = true
          } else {
            this.swal(res.data.message, 'error')
          }
          setTimeout(() => {
            this.isLoading = false
          }, 500)
        })
    }
  },
  created () {
    const orderId = this.$route.params.orderId
    this.getOrder(orderId)
  }
}
</script>
