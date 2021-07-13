<template>
    <div class="home__page bg-cover"
         :style="`background-image : url(${backgroundImage[0]?.image})`">
        <Loading v-model:active="isLoading">
                 <div class="loadingio-spinner-rolling-feeb69z48bi">
                  <div class="ldio-947txsafiul">
                    <div>
                    </div>
                  </div>
                </div>
        </Loading>
        <div class="jumbotron" v-if="jumbotronImages.length">
            <swiper
                 :slides-per-view="1"
                :space-between="0"
                navigation
                :loop="true"
                :pagination="{ clickable: true }"
                :scrollbar="{ draggable: true }"
                :autoplay="{
                  'delay': 2500,
                  'disableOnInteraction': false
                }">
                <swiper-slide>
                    <router-link class="jumbotron__container bg-cover"
                                  to="/dino-park/map"
                                 :style="`background-image : url(${jumbotronImages[0].image})`">
                    </router-link>
                </swiper-slide>
                <swiper-slide>
                    <router-link class="jumbotron__container bg-cover"
                                 to="/dino-park/news/-MeQEimfIyhBvctej3FN"
                                 :style="`background-image : url(${jumbotronImages[1].image})`">
                    </router-link>
                </swiper-slide>
                <swiper-slide>
                    <router-link to="/dino-park/store/-MdHdW_48QYkLbVwfP-2"
                                 class="jumbotron__container bg-cover"
                                 :style="`background-image : url(${jumbotronImages[2].image})`">
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
        <div class="infos">
            <div class="container">
               <ul class="infos__items">
                    <li class="infos__item">
                        <router-link to="/dino-park/map" class="link red">
                            <div class="icon  text-center">
                                <span class="material-icons">attractions</span>
                            </div>
                            <div class="txt">
                                <h5>園區探索</h5>
                                <p>Event</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="infos__item">
                        <router-link to="/dino-park/store" class="link green">
                            <div class="icon  text-center">
                                <span class="material-icons">shopping_cart</span>
                            </div>
                            <div class="txt">
                                <h5>恐龍商店</h5>
                                <p>Giftshop</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="infos__item">
                        <router-link to="/dino-park/store/-MeVDdkoCE_GF9omo2XK" class="link yellow">
                            <div class="icon  text-center">
                                <span class="material-icons ">confirmation_number</span>
                            </div>
                            <div class="txt">
                                <h5>線上購票</h5>
                                <p>Tickets</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="infos__item">
                        <router-link to="/dino-park/info/time" class="link purple">
                            <div class="icon text-center">
                                <span class="material-icons ">query_builder</span>
                            </div>
                            <div class="txt">
                                <h5>營業時間</h5>
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
                                <h5>交通資訊</h5>
                                <p>Traffic</p>
                            </div>
                        </router-link>
                    </li>
               </ul>
            </div>
        </div>
        <div class="news">
            <div class="container">
                <h3 class="title">最新消息</h3>
                <swiper :slides-per-view="1"
                        :space-between="30"
                        :loop="true"
                        :scrollbar="{ draggable: true }"
                        :breakpoints="swiperOption">
                        <swiper-slide v-for="article in news"
                                      :key="article.id">
                                <NewsCard :news="article">
                                </NewsCard>
                        </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="areas">
            <div class="container">
                <h3 class="title">園區導覽</h3>
                <div class="row" v-if="areas.length">
                    <div class="col-lg-8 mb-3">
                        <div class="row" >
                            <div class="col-md-6">
                                <router-link
                                     v-if="areas[2].paragraph"
                                     :to="`/dino-park/areas/${areas[2].id}`"
                                     class="areas__item bg-cover mb-3"
                                     :style="`background-image : url(${areas[2].paragraph[0].image})`">
                                     <span class="areas__title">{{ areas[2].tag[0] }}</span>
                                 </router-link>
                            </div>
                            <div class="col-md-6">
                                <router-link
                                     v-if="areas[1].paragraph"
                                     :to="`/dino-park/areas/${areas[1].id}`"
                                     class="areas__item bg-cover mb-3"
                                     :style="`background-image : url(${areas[1].paragraph[2].image})`">
                                     <span class="areas__title">{{ areas[1].tag[0] }}</span>
                                </router-link>
                            </div>
                            <div>
                                <router-link
                                     v-if="areas[0].paragraph"
                                     :to="`/dino-park/areas/${areas[0].id}`"
                                     class="areas__item bg-cover"
                                     :style="`background-image : url(${areas[0].paragraph[0].image})`">
                                     <span class="areas__title">{{ areas[0].tag[0] }}</span>
                                 </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-md-6 col-lg-12">
                                <router-link to="/dino-park/store/-MdC_Y5waZ5yZsDM-2Nu"
                                     v-if="activityImages[0].image"
                                     :style="`background-image : url(${activityImages[0].image})`"
                                     class="areas__item bg-cover mb-3 map">
                                    <span class="areas__title">活動購票</span>
                                </router-link>
                            </div>
                            <div class="col-md-6 col-lg-12">
                                <router-link to="/dino-park/map"
                                     v-if="areas[0].image"
                                     :style="`background-image : url(${areas[0].image})`"
                                     class="areas__item bg-cover mb-3 map">
                                    <span class="areas__title">園區地圖</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slogan">
           <div class="text ">
             <h3>Life finds a way</h3>
             <p>生命會找到出路</p>
             <p class="text-end">園長 約翰-哈蒙德</p>
           </div>
        </div>
        <div class="comments">
            <div class="container-fluid">
                <h3 class="title">遊客推薦</h3>
                <swiper
                    :slides-per-view="1"
                    :space-between="30"
                    navigation
                    :loop="true"
                    :pagination="false"
                    :scrollbar="{ draggable: true }"
                    :autoplay="{
                    'delay': 2500,
                    'disableOnInteraction': false
                    }"
                    :breakpoints="{
                        '768': {
                            'slidesPerView': 2,
                            'spaceBetween': 30
                        },
                        '1025': {
                            'slidesPerView': 5,
                            'spaceBetween': 30
                        }
                    }">
                    <swiper-slide v-for="image in touristImages" :key="image.content">
                        <div class="comments__item">
                            <div class="image">
                                <img class="img-cover"
                                :src="image.image" alt="image.title">
                            </div>
                            <div class="text">
                                <p class="m-0">{{ image.content }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="shop">
            <div class="container">
                <h3 class="title">網路商城</h3>
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
import Card from '../../components/front/Card.vue'
import NewsCard from '../../components/front/NewsCard.vue'

export default {
  data () {
    return {
      isLoading: false,
      articles: [],
      areas: [],
      images: [],
      allproducts: [],
      recommendProducts: [],
      newsAry: [],
      pagination: {},
      swiperOption: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1025: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    }
  },
  components: {
    Card,
    NewsCard
  },
  computed: {
    backgroundImage () {
      return this.images.filter(img => img.title === '視差滾動背景圖')
    },
    jumbotronImages () {
      return this.images.filter(img => img.title === '首頁輪播大圖')
    },
    activityImages () {
      return this.images.filter(img => img.title === '首頁活動圖片')
    },
    touristImages () {
      return this.images.filter(img => img.title === '首頁遊客推薦')
    },
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
            if (page === 1) {
              this.newsAry = res.data.articles
              page += 1
              this.getArticles(page)
            } else {
              this.articles = res.data.articles
              this.images = this.articles.find(article => article.title === '園區圖片').paragraph
              this.areas = this.articles.filter(article => article.title === '園區分類')
            }
          } else {
            this.swal(res.data.message)
          }
          this.isLoading = false
        })
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
    }
  },
  created () {
    this.getArticles()
    this.getAllProducts()
  }
}
</script>
