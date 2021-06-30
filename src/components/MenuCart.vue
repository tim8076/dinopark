<template>
    <div class="cart">
        <div class="table-responsive">
           <table class="table"
                :class="{ 'border' : size === 'lg' }">
              <thead class="table__head">
                  <tr :class="{ 'fs-5' : size === 'lg' }">
                      <th scope="col" >商品</th>
                      <th scope="col" :width="tableWidth.column1">數量</th>
                      <th scope="col" :width="tableWidth.column2">價格</th>
                      <th scope="col" :width="tableWidth.column3"></th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(cart, index) in cartList" :key="cart.id">
                      <th scope="row"
                          class="cart__title">
                          {{ cart.product.title }}
                          <span v-for="spec in cart.productSpecs"
                                :key="spec">
                              ({{ spec.chosedSpec }})
                          </span>
                      </th>
                      <td>
                          <div class="input-group input-group-sm mb-3">
                              <button class="btn btn-outline-primary "
                                      type="button"
                                      id="button-addon1"
                                      :class="{ 'disabled': cart.qty === 1 }"
                                      @click="updateCart(cart, cart.qty-1, index )">
                                  <span class="material-icons">remove</span>
                              </button>
                              <input  type="text"
                                      class="form-control cart__num"
                                      v-model.number="cart.qty"
                                      @change="updateCart(cart, cart.qty, index)">
                              <button class="btn btn-outline-primary "
                                      type="button"
                                      id="button-addon1"
                                      @click="updateCart(cart, cart.qty+1, index )">
                                  <span class="material-icons">add</span>
                              </button>
                          </div>
                      </td>
                      <td>NT$ {{ $toCurrency(Math.round(cart.final_total)) }}</td>
                      <td>
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
                  <tr>
                    <td>
                      <button class="btn btn-outline-primary"
                              :class="{ 'disabled' : cartList.length === 0 }"
                              @click="deleteAllCartItems">
                        清空購物車
                      </button>
                    </td>
                    <td colspan="3"
                        class="text-end fs-4 text-primary fw-bold">
                        總計: {{ $toCurrency(Math.round(finalTotal)) }} 元
                    </td>
                  </tr>
                  <tr v-if="size === 'lg'">
                    <td colspan="4">
                      <div class="input-group mt-2 ">
                        <input type="text"
                              class="form-control w-25"
                              placeholder="輸入優惠券代碼"
                              v-model="couponCode">
                        <button class="btn btn-outline-primary"
                                type="button"
                                id="button-addon2"
                                @click="addCoupon">
                                套用
                        </button>
                      </div>
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
  emits: ['update-num'],
  data () {
    return {
      cartList: [],
      finalTotal: 0,
      loadingIndex: null,
      tableWidth: {
        column1: this.size === 'sm' ? 110 : 200,
        column2: this.size === 'sm' ? 140 : 200,
        column3: this.size === 'sm' ? 25 : 50
      },
      couponCode: ''
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
            this.$emit('update-num', this.cartList.length)
          } else {
            this.swal(res.data.message, 'error')
          }
        })
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
    },
    addCoupon () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      this.$http.post(api, {
        data: {
          code: this.couponCode
        }
      })
        .then(res => {
          if (res.data.success) {
            this.finalTotal = res.data.data.final_total
            this.swal(res.data.message)
          } else {
            this.swal(res.data.message, 'error')
          }
        })
    }
  },
  created () {
    this.getCartList()
    this.emitter.on('add-cart', () => {
      this.getCartList()
    })
  }
}
</script>
