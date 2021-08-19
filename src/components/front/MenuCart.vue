<template>
    <div class="cart">
        <div >
           <table class="table"
                :class="{ 'border' : size === 'lg' }">
              <thead class="table__head">
                  <tr :class="{ 'fs-5' : size === 'lg' }">
                      <th scope="col" class="column__1">商品</th>
                      <th scope="col" class="column__2">數量</th>
                      <th scope="col" class="column__3">價格</th>
                      <th scope="col" class="column__4"></th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(cart, index) in cartList" :key="cart.id">
                      <th scope="row"
                          class="cart__title">
                          <img v-if="size === 'lg'"
                              :src="cart.product.imageUrl">
                          <div class="text">
                             {{ cart.product.title }}
                              <span v-for="spec in cart.productSpecs"
                                    :key="spec">
                                  ({{ spec.chosedSpec }})
                              </span>
                          </div>
                          <a href="#"
                            @click.prevent="deleteCartItem(cart.id, index)"
                            class="hide-for-pad">
                            <div class="spinner-border text-primary spinner-border-sm"
                                role="status"
                                v-if="loadingIndex === index">
                              <span class="visually-hidden delete__icon">Loading...</span>
                            </div>
                            <span class="material-icons delete__icon" v-else>delete</span>
                          </a>
                      </th>
                      <td class="qty__rows">
                          <div class="input-group input-group-sm qty__buttons">
                              <button class="btn btn-primary-light"
                                      type="button"
                                      id="button-addon1"
                                      :class="{ 'disabled': cart.qty === 1 }"
                                      @click="updateCart(cart, cart.qty-1, index )">
                                  <span class="material-icons text-white">remove</span>
                              </button>
                              <input  type="text"
                                      class="form-control cart__num"
                                      v-model.number="cart.qty"
                                      @change="updateCart(cart, cart.qty, index)">
                              <button class="btn btn-primary-light"
                                      type="button"
                                      id="button-addon1"
                                      @click="updateCart(cart, cart.qty+1, index )">
                                  <span class="material-icons text-white">add</span>
                              </button>
                          </div>
                      </td>
                      <td class="price__row">
                        <p class="mb-0"
                           :class="{ 'text-decoration-line-through' : couponed }">
                          NT$ {{ $toCurrency(Math.round(cart.total)) }}
                        </p>
                        <p class="text-primary mb-0"
                           v-if="couponed">
                          NT$ {{ $toCurrency(Math.round(cart.final_total)) }}
                        </p>
                      </td>
                      <td class="delete-cell">
                        <a href="#"
                            @click.prevent="deleteCartItem(cart.id, index)">
                            <div class="spinner-border text-primary spinner-border-sm"
                                role="status"
                                v-if="loadingIndex === index">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                            <span class="material-icons" v-else>delete</span>
                        </a>
                      </td>
                  </tr>
                   <tr v-if="size === 'lg'">
                    <td colspan="4">
                      <a href="#"
                          v-show="!useCoupon"
                          @click.prevent="useCoupon = !useCoupon">
                          使用優惠代碼
                      </a>
                      <div class="input-group mt-2 coupon__inputs"
                            v-show="useCoupon">
                        <input type="text"
                              class="form-control w-25"
                              placeholder="輸入優惠券代碼"
                              v-model="couponCode">
                        <button class="btn btn-outline-primary"
                                type="button"
                                id="button-addon2"
                                @click="addCoupon">
                                <div  class="spinner-border text-primary spinner-border-sm"
                                      role="status"
                                      v-if="isCouponing">
                                  <span class="visually-hidden">Loading...</span>
                                </div>
                                套用
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="total__row">
                    <td colspan="4">
                      <button class="btn btn-outline-primary"
                              :class="{ 'disabled' : cartList.length === 0 }"
                              @click="deleteAllCartItems">
                        清空購物車
                      </button>
                    </td>
                  </tr>
              </tbody>
          </table>
        </div>
        <div class="buttons ">
            <router-link  class="btn btn-primary w-100 fw-bolder"
                          v-if="cartList.length !== 0 && size !== 'lg'"
                          to="/dino-park/cart/list">
              結帳去
            </router-link>
            <router-link class="btn btn-primary w-100 fw-bolder"
                         v-else-if="cartList.length === 0 && size === 'sm'"
                         to="/dino-park/store">來去逛逛吧
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: 'sm'
    }
  },
  emits: ['update-num', 'send-total'],
  data () {
    return {
      cartList: [],
      total: 0,
      finalTotal: 0,
      loadingIndex: null,
      couponCode: '',
      isCouponing: false,
      useCoupon: false,
      couponed: false
    }
  },
  methods: {
    getCartList () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.cartList = res.data.data.carts
            this.finalTotal = res.data.data.final_total
            this.total = res.data.data.total
            this.$emit('update-num', this.cartList.length)
            this.sendTotal()
          } else {
            this.swal(res.data.message, 'error')
          }
        })
        .catch(err => console.log(err))
    },
    deleteCartItem (id, index) {
      this.loadingIndex = index
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(api)
        .then(res => {
          if (res.data.success) {
            this.swal(res.data.message)
            this.emitter.emit('add-cart')
          } else {
            this.swal(res.data.message, 'error')
          }
          this.loadingIndex = null
        })
        .catch(err => console.log(err))
    },
    deleteAllCartItems () {
      this.swalComfirm('確定清空購物車?')
        .then(willDelete => {
          if (willDelete.isConfirmed) {
            const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
            this.$http.delete(api)
              .then(res => {
                if (res.data.success) {
                  this.swal(res.data.message)
                  this.emitter.emit('add-cart')
                } else {
                  this.swal(res.data.message, 'error')
                }
              })
              .catch(err => console.log(err))
          }
        })
    },
    updateCart (cart, qty, index) {
      if (qty < 1) {
        this.swal('商品數量小於1', 'error')
        qty = 1
      }
      this.loadingIndex = index
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${cart.id}`
      this.$http.put(api, {
        data: { product_id: cart.product.id, qty: qty }
      })
        .then(res => {
          if (res.data.success) {
            this.swal(res.data.message)
            this.emitter.emit('add-cart')
          } else {
            this.swal(res.data.message, 'error')
          }
          this.loadingIndex = null
        })
        .catch(err => console.log(err))
    },
    addCoupon () {
      this.isCouponing = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      this.$http.post(api, {
        data: {
          code: this.couponCode
        }
      })
        .then(res => {
          if (res.data.success) {
            this.getCartList()
            this.swal(res.data.message)
            this.couponed = true
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isCouponing = false
        })
        .catch(err => console.log(err))
    },
    sendTotal () {
      this.$emit('send-total',
        this.finalTotal,
        this.cartList.length,
        this.total,
        this.couponed)
    }
  },
  created () {
    this.getCartList()
    this.emitter.on('add-cart', () => {
      this.getCartList()
    })
  },
  unmounted () {
    this.emitter.off('add-cart', () => {
      this.getCartList()
    })
  }
}
</script>
