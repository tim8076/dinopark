<template>
   <div class="cart_list py-6">
       <Loading v-model:active="isLoading">
                 <div class="loadingio-spinner-rolling-feeb69z48bi">
                  <div class="ldio-947txsafiul">
                    <div>
                    </div>
                  </div>
                </div>
        </Loading>
       <div class="container">
          <div class="progress__area mb-6 py-6">
             <div class="progress__bar">
                <div class="dotbox active">
                   <div class="dot">1</div>
                   <span>購物車</span>
                </div>
                <div class="dotbox">
                   <div class="dot">2</div>
                   <span>填寫資料</span>
                </div>
                <div class="dotbox">
                   <div class="dot">3</div>
                   <span>訂單確認</span>
                </div>
             </div>
          </div>
          <div class="subtotal__area"
               v-if="cartLength">
            <Cart :size="'lg'"
              class="mb-6"
              @send-total="updateTotal">
            </Cart>
            <div class="row">
              <div class="col-md-7">
                <div class="coupon">
                    <h2 class="cart-title">可使用優惠券</h2>
                    <div class="coupon__list py-1 px-3 border ">
                      <table class="table">
                        <thead class="coupon__head">
                            <tr>
                                <th scope="col" class="p-1">名稱</th>
                                <th scope="col" class="p-1">代碼</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>盛大開幕好禮大放送</td>
                                <td>opening</td>
                            </tr>
                            <tr>
                                <td>全站88折</td>
                                <td>888</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="subtotal">
                    <h2 class="cart-title">訂單小計</h2>
                    <div class="subtotal__list py-1 px-3 border">
                      <table class="table">
                        <tbody>
                            <tr>
                              <td>小計</td>
                              <td class="text-end">
                                NT$ {{ $toCurrency(Math.round(this.total)) }}元
                              </td>
                            </tr>
                            <tr>
                              <td>折扣</td>
                              <td class="text-end">
                                NT$ {{ $toCurrency(Math.round(this.discount)) }}元
                              </td>
                            </tr>
                            <tr>
                              <td>合計</td>
                              <td class="text-end">
                                NT$ {{ $toCurrency(Math.round(this.finalTotal)) }}元
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <router-link to="/dino-park/cart/order"
                                    class="btn btn-lg btn-primary d-block w-75 mx-auto text-white my-3">
                                    前往結帳
                        </router-link>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="no__product" v-else>
             <div class="icon text-center">
               <span class="material-icons shop__icon">shopping_cart</span>
               <p class="fw-bold">您的購物車是空的</p>
               <p>加點商品進來吧</p>
               <router-link to="/dino-park/store"
                            class="btn btn-lg btn-primary d-block w-25 mx-auto text-white my-3">
                            來去逛逛
              </router-link>
             </div>
          </div>
          <div class="mb-6">
            <h3 class="border-bottom border-2 fs-3 pb-2 fw-bold mb-6 text-primary">推薦商品</h3>
            <swiper :slides-per-view="1"
                    :space-between="30"
                    :loop="true"
                    :scrollbar="{ draggable: true }"
                    :breakpoints="swiperOption"
                    class="mb-6">
                <swiper-slide v-for="product in recommendProducts"
                              :key="product.id">
                      <Card :product-data="product"
                            @add-cart="addToCart">
                      </Card>
                </swiper-slide>
            </swiper>
          </div>
       </div>
    </div>
</template>
<script>
import Cart from '../../components/front/MenuCart.vue'
import Card from '../../components/front/Card.vue'

export default {
  data () {
    return {
      isLoading: false,
      useCoupon: false,
      allProducts: [],
      recommendProducts: [],
      total: 0,
      finalTotal: 0,
      cartLength: 0,
      swiperOption: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1025: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    }
  },
  components: {
    Cart,
    Card
  },
  computed: {
    discount () {
      return this.total - this.finalTotal
    }
  },
  methods: {
    getCartList () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.cartLength = res.data.data.carts.length
            this.finalTotal = res.data.data.final_total
          } else {
            this.swal(res.data.message, 'error')
          }
        })
        .catch(err => console.log(err))
    },
    getAllProducts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.allProducts = res.data.products
            this.getRecommends()
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
        .catch(err => console.log(err))
    },
    getRandomInt (max) {
      return Math.floor(Math.random() * max)
    },
    getRecommends () {
      const arrSet = new Set([])
      for (let i = 0; arrSet.size < 4; i++) {
        const num = this.getRandomInt(this.allProducts.length)
        arrSet.add(num)
      }
      arrSet.forEach(index => {
        this.recommendProducts.push(this.allProducts[index])
      })
    },
    addToCart (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(api, {
        data: {
          product_id: id,
          qty: 1
        }
      })
        .then(res => {
          if (res.data.success) {
            this.swal(res.data.message)
            this.emitter.emit('add-cart')
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
        .catch(err => console.log(err))
    },
    updateTotal (fianlTotal, cartLength, total, useCoupon) {
      this.finalTotal = fianlTotal
      this.cartLength = cartLength
      this.total = total
      this.useCoupon = useCoupon
    }
  },
  created () {
    this.getAllProducts()
    this.getCartList()
  }
}
</script>
