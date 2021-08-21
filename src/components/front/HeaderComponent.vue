<template>
    <header class="header text-white"
            :class="{ 'small' : scrollSmallMenu }">
       <div class="container">
           <h1 class="header__logo">
              <router-link to="/dino-park/home" class="bg-cover hide-text">
                   戴諾恐龍公園
              </router-link>
           </h1>
           <ul class="header__links"
               :class="{ 'active' : isOpen }">
               <li class="header__link">
                  <a  href="#"
                      class="link"
                      :class="{ 'open' : menuToggleIndex === 1 }"
                      @click.prevent="addToggleIndex(1)">
                      遊客資訊
                  </a>
                  <ul class="sub-links">
                     <li>
                        <router-link to="/dino-park/news" class="sub-link">
                          最新消息
                        </router-link>
                     </li>
                     <li>
                        <router-link to="/dino-park/info/ticket" class="sub-link">
                          購票資訊
                        </router-link>
                     </li>
                     <li>
                        <router-link to="/dino-park/info/time" class="sub-link">
                          營業時間
                        </router-link>
                     </li>
                     <li>
                        <router-link to="/dino-park/info/traffic" class="sub-link">
                          交通方式
                        </router-link>
                     </li>
                  </ul>
               </li>
               <li class="header__link">
                  <a  href="#"
                      class="link"
                      :class="{ 'open' : menuToggleIndex === 2 }"
                      @click.prevent="addToggleIndex(2)">
                      園區介紹
                  </a>
                  <ul class="sub-links">
                     <li>
                        <router-link to="/dino-park/map" class="sub-link">
                           園區地圖
                        </router-link>
                     </li>
                     <li>
                        <router-link class="sub-link"
                                     :to="`${area.link}`"
                                     v-for="area in areasLinks"
                                     :key="area.title">
                               {{ area.title }}
                        </router-link>
                     </li>
                  </ul>
               </li>
               <li class="header__link">
                  <router-link to="/dino-park/store" class="link">恐龍商店</router-link>
               </li>
               <li class="header__link">
                  <router-link to="/dashboard" class="link">登入後台</router-link>
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
                        @update-num="setCartNum" />
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
                  <img src="@/assets/image/logo/bars.png"
                       alt="menu-bars"
                       width="25" height="25">
               </button>
           </div>
       </div>
    </header>
</template>

<script>
import Cart from './MenuCart.vue'

export default {
  data () {
    return {
      isOpen: false,
      menuToggleIndex: 0,
      openCart: false,
      cartNum: 0,
      areasLinks: [
        {
          title: '草食恐龍區',
          link: '/dino-park/areas/herbivore'
        },
        {
          title: '肉食恐龍區',
          link: '/dino-park/areas/carnivore'
        },
        {
          title: '鳥園',
          link: '/dino-park/areas/bird'
        }
      ],
      scrollSmallMenu: false
    }
  },
  components: { Cart },
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
    },
    scrollToSmallMeun () {
      const scrollY = window.scrollY
      this.scrollSmallMenu = true
      if (scrollY > 96) {
        this.scrollSmallMenu = true
      } else if (scrollY < 96) {
        this.scrollSmallMenu = false
      }
    }
  },
  created () {
    this.$watch(
      () => this.$route.params,
      () => {
        this.openCart = false
        this.isOpen = false
      }
    )
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToSmallMeun)
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollToSmallMeun)
  }
}
</script>
