<template>
    <header class="header bg-dark text-white">
       <div class="container">
           <div class="header__logo">
              <router-link to="/dino-park" >
                  <img src="../assets/logo/dinopark.png" alt="jurassic-park">
              </router-link>
           </div>
           <ul class="header__links"
               :class="{ 'active' : isOpen }">
               <li class="header__link">
                  <router-link to="/dino-park"
                              class="link"
                              :class="{ 'open' : menuToggleIndex === 1 }"
                              @click="addToggleIndex(1)">
                              認識公園
                  </router-link>
                  <ul class="sub-links">
                     <li>
                        <a href="#" class="sub-link">參觀服務</a>
                     </li>
                     <li>
                        <a href="#" class="sub-link">園區歷史</a>
                     </li>
                     <li>
                        <a href="#" class="sub-link">聯絡我們</a>
                     </li>
                  </ul>
               </li>
               <li class="header__link">
                  <router-link to="/dino-park/store"
                               class="link"
                               :class="{ 'open' : menuToggleIndex === 2 }"
                               @click="addToggleIndex(2)">
                               園區介紹
                  </router-link>
                  <ul class="sub-links">
                     <li>
                        <a href="#" class="sub-link">參觀服務</a>
                     </li>
                     <li>
                        <a href="#" class="sub-link">園區歷史</a>
                     </li>
                     <li>
                        <a href="#" class="sub-link">聯絡我們</a>
                     </li>
                  </ul>
               </li>
               <li class="header__link">
                  <router-link to="/dino-park/store" class="link">恐龍商店</router-link>
               </li>
               <li class="header__link">
                  <router-link to="/dashboard/productList" class="link">登入後台</router-link>
               </li>
               <li class="header__link d-none d-lg-block">
                  <router-link to="/dino-park/favorite" class="fs-3 link">
                     <span class="material-icons icon-heart">favorite</span>
                  </router-link>
               </li>
               <li class="header__link d-none d-lg-block">
                  <a href="#"
                     class="fs-3 link shopping_cart"
                     :data-num="cartNum"
                     @click.prevent="openCart = !openCart">
                     <span class="material-icons icon-cart">shopping_cart</span>
                  </a>
                  <Cart v-show="openCart"
                        @update-num="setCartNum">
                  </Cart>
               </li>
           </ul>
           <div class="header__link action d-flex align-items-center d-lg-none">
               <router-link to="/dino-park/favorite" class="fs-3 link">
                     <span class="material-icons icon-heart">favorite</span>
               </router-link>
               <router-link to="/dino-park/cart/list"
                         class="shopping_cart me-9"
                         :data-num="cartNum"
                         @click.prevent="openCart = !openCart">
                  <span class="material-icons icon-cart">shopping_cart</span>
               </router-link>
               <button  type="button"
                        class="btn btn-primary menu-button"
                        @click="openToggle">
                  <img src="../assets/logo/bars.png" width="25" height="25">
               </button>
           </div>
       </div>
    </header>
</template>
<script>
import Cart from '../components/MenuCart.vue'

export default {
  data () {
    return {
      isOpen: false,
      menuToggleIndex: 0,
      openCart: false,
      cartNum: 0
    }
  },
  components: {
    Cart
  },
  methods: {
    openToggle () {
      this.menuToggleIndex = 0
      this.isOpen = !this.isOpen
    },
    addToggleIndex (index) {
      if (this.menuToggleIndex === index) {
        this.menuToggleIndex = 0
        return
      }
      this.menuToggleIndex = index
    },
    setCartNum (num) {
      this.cartNum = num
    }
  },
  mounted () {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.openCart = false
      }
    )
  }
}
</script>
