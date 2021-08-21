<template>
    <div class="home__page bg-cover"
         :style="{ backgroundImage: `url( ${require('@/assets/image/index/quote.jpg')})` }">
        <Loading v-model:active="isLoading">
          <div class="outter-spinner">
              <div class="inner-spinner">
                  <div>
                  </div>
              </div>
          </div>
        </Loading>
        <div class="jumbotron">
            <swiper
                :slides-per-view="1"
                :space-between="0"
                navigation
                :loop="true"
                :pagination="swiperSetting.pagination"
                :scrollbar="swiperSetting.scrollbar"
                :autoplay="swiperSetting.autoplay">
                <swiper-slide>
                    <router-link class="jumbotron__container bg-cover text-light
                                        d-flex justify-content-center align-items-center
                                        flex-column"
                                  to="/dino-park/map"
                                 :style="{ backgroundImage: `url(${require('@/assets/image/logo/cart-title.jpg')})`}">
                        <h2 class="display-4 text-center p-3 mb-3">
                          歡迎光臨<br>戴樂恐龍公園
                        </h2>
                        <div class="btn btn-primary btn-lg fs-4
                                    d-flex align-items-center">
                          探險去
                          <span class="material-icons ms-1">arrow_forward</span>
                        </div>
                    </router-link>
                </swiper-slide>
                <swiper-slide>
                    <router-link class="jumbotron__container bg-cover text-light
                                        d-flex justify-content-center align-items-center
                                        flex-column"
                                 to="/dino-park/news/-MeQEimfIyhBvctej3FN"
                                :style="{ backgroundImage: `url(${require('@/assets/image/index/img2.jpg')})` }">
                        <h2 class="display-4 text-center p-3 mb-3">
                          支持恐龍復育計畫
                        </h2>
                        <div class="btn btn-primary btn-lg fs-4
                                    d-flex align-items-center">
                          看詳細計畫
                        </div>
                    </router-link>
                </swiper-slide>
                <swiper-slide>
                    <router-link to="/dino-park/store/-MdHdW_48QYkLbVwfP-2"
                                class="jumbotron__container bg-cover text-light d-flex
                                       justify-content-center align-items-center flex-column"
                                :style="{ backgroundImage: `url(${require('@/assets/image/index/img1.png')})`}">
                        <h2 class="display-4 text-center p-3 mb-3">
                          文創商品88折
                        </h2>
                        <div class="btn btn-primary btn-lg fs-4
                                    d-flex align-items-center">
                          搶購去
                          <span class="material-icons ms-1">arrow_forward</span>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
        <div class="infos">
            <div class="container">
               <ul class="infos__items">
                    <li class="infos__item">
                        <router-link to="/dino-park/map" class="link red">
                            <div class="icon text-center">
                                <span class="material-icons">attractions</span>
                            </div>
                            <div class="txt">
                                <h3>園區介紹</h3>
                                <p>Event</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="infos__item">
                        <router-link to="/dino-park/store" class="link green">
                            <div class="icon text-center">
                                <span class="material-icons">shopping_cart</span>
                            </div>
                            <div class="txt">
                                <h3>恐龍商店</h3>
                                <p>Giftshop</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="infos__item">
                        <router-link to="/dino-park/store/-MeVDdkoCE_GF9omo2XK" class="link yellow">
                            <div class="icon text-center">
                                <span class="material-icons">confirmation_number</span>
                            </div>
                            <div class="txt">
                                <h3>線上購票</h3>
                                <p>Tickets</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="infos__item">
                        <router-link to="/dino-park/info/time" class="link purple">
                            <div class="icon text-center">
                                <span class="material-icons">query_builder</span>
                            </div>
                            <div class="txt">
                                <h3>營業時間</h3>
                                <p>Time</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="infos__item">
                        <router-link to="/dino-park/info/traffic" class="link blue">
                            <div class="icon text-center">
                                <span class="material-icons">directions_car</span>
                            </div>
                            <div class="txt">
                                <h3>交通資訊</h3>
                                <p>Traffic</p>
                            </div>
                        </router-link>
                    </li>
               </ul>
            </div>
        </div>
        <div class="news">
            <div class="container">
                <h2 class="title fs-3">最新消息</h2>
                <swiper :wrapperTag="'ul'"
                        :slides-per-view="1"
                        :space-between="30"
                        :loop="true"
                        :scrollbar="swiperSetting.scrollbar"
                        :breakpoints="swiperSetting.breakpoints">
                        <swiper-slide :tag="'li'"
                                       v-for="article in news"
                                      :key="article.id">
                                <NewsCard :news="article" />
                        </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="areas">
            <div class="container">
                <h2 class="title fs-3">園區導覽</h2>
                <div class="row">
                    <div class="col-lg-8 mb-3">
                        <ul class="row">
                            <li class="col-md-6">
                                 <router-link
                                     to="/dino-park/areas/herbivore"
                                     class="areas__item bg-cover mb-3"
                                     style="background-image : url('https://upload.cc/i1/2021/08/15/NIGS91.png'">
                                     <span class="areas__title">草食恐龍區</span>
                                 </router-link>
                            </li>
                            <li class="col-md-6">
                                <router-link
                                     to="/dino-park/areas/carnivore"
                                     class="areas__item bg-cover mb-3"
                                    style="background-image : url('https://upload.cc/i1/2021/08/15/csKuBq.png')">
                                     <span class="areas__title">肉食恐龍區</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                     to="/dino-park/areas/bird"
                                     class="areas__item bg-cover"
                                     style="background-image : url('https://upload.cc/i1/2021/08/15/kvNbCF.png'">
                                     <span class="areas__title">鳥園</span>
                                 </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <ul class="row">
                            <li class="col-md-6 col-lg-12">
                                <router-link
                                    to="/dino-park/store/-MdC_Y5waZ5yZsDM-2Nu"
                                    style="background-image : url('https://upload.cc/i1/2021/08/15/Oygf7T.png')"
                                    class="areas__item bg-cover mb-3 map">
                                    <span class="areas__title">活動購票</span>
                                </router-link>
                            </li>
                            <li class="col-md-6 col-lg-12">
                                <router-link to="/dino-park/map"
                                     style="background-image : url('https://upload.cc/i1/2021/08/15/1qhysL.png')"
                                     class="areas__item bg-cover mb-3 map">
                                    <span class="areas__title">園區地圖</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="slogan">
           <div class="text">
             <h3>Life finds a way</h3>
             <p>生命會找到出路</p>
             <p class="text-end">園長 約翰-哈蒙德</p>
           </div>
        </div>
        <div class="comments">
            <div class="container-fluid">
                <h2 class="title fs-3">遊客推薦</h2>
                <swiper
                    :slides-per-view="1"
                    :space-between="30"
                    navigation
                    :loop="true"
                    :pagination="false"
                    :scrollbar="swiperSetting.scrollbar"
                    :autoplay="swiperSetting.autoplay"
                    :breakpoints="swiperSetting.breakpointsComments">
                    <swiper-slide>
                        <div class="comments__item">
                            <div class="image">
                                <img class="img-cover"
                                    :src="require('@/assets/image/index/tourist-1.jpg')"
                                    alt="customer-image">
                            </div>
                            <div class="text">
                                <p class="m-0">
                                   那些恐龍真是太酷了，尤其是那暴龍，超大隻的。
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="comments__item">
                            <div class="image">
                                <img class="img-cover"
                                    :src="require('@/assets/image/index/tourist-2.jpg')"
                                    alt="customer-image">
                            </div>
                            <div class="text">
                                <p class="m-0">
                                   親子恐龍區裡的恐龍都很可愛且溫馴，真的推薦家長們可以帶小朋友來同樂。
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="comments__item">
                            <div class="image">
                                <img class="img-cover"
                                    :src="require('@/assets/image/index/tourist-3.jpg')"
                                    alt="customer-image">
                            </div>
                            <div class="text">
                                <p class="m-0">
                                   園區裡的恐龍比電影裡來的真實，迅猛龍跑起來的速度超快的，一定要親自來看看。
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="comments__item">
                            <div class="image">
                                <img class="img-cover"
                                    :src="require('@/assets/image/index/tourist-4.jpg')"
                                    alt="customer-image">
                            </div>
                            <div class="text">
                                <p class="m-0">
                                   到了腕龍園區後，看到腕龍在你面前進食，它一走動，感覺地面都在搖晃。
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="comments__item">
                            <div class="image">
                                <img class="img-cover"
                                    :src="require('@/assets/image/index/tourist-5.jpg')"
                                    alt="customer-image">
                            </div>
                            <div class="text">
                                <p class="m-0">
                                   暴龍超酷的，一口就把山羊吃掉了。下次要再叫爸媽帶我來看暴龍。
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="comments__item">
                            <div class="image">
                                <img class="img-cover"
                                    :src="require('@/assets/image/index/tourist-6.jpg')"
                                    alt="customer-image">
                            </div>
                            <div class="text">
                                <p class="m-0">
                                   男朋友吵著說要來看恐龍，只好陪他來，沒想到恐龍也挺可愛的。
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="shop">
            <div class="container">
                <h2 class="title fs-3">網路商城</h2>
                <swiper :slides-per-view="1"
                        :space-between="30"
                        :loop="true"
                        :scrollbar="swiperSetting.scrollbar"
                        :breakpoints="swiperSetting.breakpoints"
                        class="mb-6">
                    <swiper-slide v-for="product in recommendProducts"
                                  :key="product.id">
                        <Card :product-data="product"
                                @add-cart="addToCart" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/front/Card.vue'
import NewsCard from '@/components/front/NewsCard.vue'

export default {
  data () {
    return {
      isLoading: false,
      allproducts: [],
      recommendProducts: [],
      newsAry: [],
      pagination: {},
      swiperSetting: {
        scrollbar: {
          draggable: true
        },
        pagination: {
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        },
        breakpointsComments: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1025: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }
      }
    }
  },
  components: {
    Card,
    NewsCard
  },
  computed: {
    news () {
      const ary = []
      this.newsAry.forEach(item => {
        if (item.tag[0] === '公園新聞' && ary.length < 3) {
          ary.push(item)
        }
      })
      return ary
    }
  },
  methods: {
    getArticles (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.newsAry = res.data.articles
          } else {
            this.swal(res.data.message)
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
      for (let i = 0; arrSet.size < 3; i++) {
        const num = this.getRandomInt(this.allProducts.length)
        arrSet.add(num)
      }
      arrSet.forEach(index => {
        this.recommendProducts.push(this.allProducts[index])
      })
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
    }
  },
  created () {
    this.getArticles()
    this.getAllProducts()
  }
}
</script>
