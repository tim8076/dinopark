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
          <div class="row mb-6">
            <div class="col-lg-8">
                <Cart :size="'lg'"></Cart>
            </div>
            <div class="col-lg-4 coupon">
               <h4 class="cart-title">可使用優惠券</h4>
               <div class="coupon__list py-1 px-3 border ">
                  <table class="table">
                    <thead>
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
          <div class="buttons d-flex justify-content-center">
              <router-link to="/dino-park/store"
                           class="btn btn-lg btn-outline-primary me-3">
                          再去逛逛
              </router-link>
              <router-link to="/dino-park/cart/order"
                           class="btn btn-lg btn-primary">
                          來去結帳
              </router-link>
          </div>
       </div>
    </div>
</template>
<script>
import Cart from '../../components/MenuCart.vue'
export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Cart
  },
  created () {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  }
}
</script>
