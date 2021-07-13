<template>
   <div class="product pb-8 bg-color">
        <Loading v-model:active="isLoading">
                 <div class="loadingio-spinner-rolling-feeb69z48bi">
                  <div class="ldio-947txsafiul">
                    <div>
                    </div>
                  </div>
                </div>
        </Loading>
        <div class="container py-5">
             <Breadcrumb :breadcrumb="{
              link2: {
                title: '恐龍商城',
                link: '/dino-park/store'
              },
              link3: {
                show: true,
                title: product.title,
              }
            }">
            </Breadcrumb>
            <div class="row ">
                <div class="col-md-6 mb-6">
                    <img class="mb-3" :src="product.imageUrl" :alt="product.title">
                    <div class="d-flex">
                       <div v-for="image in product.imagesUrl"
                            :key="image"
                            class="product-img-sm"
                            @mouseenter="setImageUrl(image)">
                            <img :src="image" class="w-100">
                       </div>
                    </div>
                </div>
                <div class="col-md-6  px-6 px-md-8">
                    <h1 class="fs-2 fw-bold mb-3 mb-md-6">{{ product.title }}</h1>
                    <p class="mb-3 mb-md-4 description">{{ product.description }}</p>
                    <p class="mb-3 mb-md-4 content fw-bold ">{{ product.content }}</p>
                    <div class="d-flex align-items-center me-3 mb-3"
                         v-for="(spec, index) in product.productSpecs"
                         :key="spec">
                      <p class="fw-bold me-3">{{ spec.type }}</p>
                      <select class="form-control w-50"
                              v-model="cart.productSpecs[index].chosedSpec"
                              @change="chooseSpec(spec, index)">
                        <option value="" disabled>請選擇 {{ spec.type }}</option>
                        <option v-for="item in spec.children"
                                :value="item"
                                :key="item">
                                {{ item }}
                        </option>
                      </select>
                    </div>
                    <div class="product__number d-flex align-items-center">
                       <p class="fw-bold me-3">數量:</p>
                       <div class="input-group product-num mb-3">
                            <button class="btn btn-primary-light text-white"
                                    type="button"
                                    :class="{ 'disabled' : cart.qty === 1 }"
                                    @click="changeNum(-1)">-</button>
                            <input  type="text"
                                    class="form-control text-center"
                                    v-model.number="cart.qty">
                            <button class="btn btn-primary-light text-white"
                                    type="button"
                                    @click="changeNum(1)">+</button>
                        </div>
                    </div>
                    <p class="text-primary">NT$ <span class="fs-2 fw-bolder">{{ countPrice }}</span></p>
                    <div class="buttons ">
                        <button class="btn btn-outline-primary p-2 d-flex
                                       justify-content-center
                                       align-items-center"
                                @click="addToFavorite">
                                <span class="material-icons me-2">favorite_border</span>
                                加入收藏
                        </button>
                        <button class="btn btn-primary p-2 d-flex
                                       justify-content-center
                                       align-items-center"
                                @click="addToCart">
                                <span class="material-icons me-2">shopping_cart</span>
                                加入購物車
                        </button>
                    </div>
                </div>
            </div>
            <div class="notes mb-6">
              <h4 class="border-bottom border-2 pb-2 fw-bold mb-3 text-primary">購物須知</h4>
              <ol class="lh-lg text-light-300">
                <li>下單後，會有專人與您聯繫後續配送事宜</li>
                <li>訂購前請務必確認商品種類、尺寸</li>
                <li>目前提供宅配到府、超商取貨等運送方式</li>
                <li>若寄送方式為宅配通，收件地址需填寫完整</li>
                <li>本公司百分之30收入，用於國際遺傳公司重組恐龍DNA</li>
              </ol>
            </div>
            <div class="recommend">
              <h4 class="border-bottom border-2 pb-2 fw-bold mb-6 text-primary">猜您也喜歡...</h4>
              <swiper
                :slides-per-view="1"
                :space-between="30"
                navigation
                :loop="true"
                :pagination="{ clickable: true }"
                :scrollbar="{ draggable: true }"
                :autoplay="{
                  'delay': 2500,
                  'disableOnInteraction': false
                }"
                :breakpoints="{
                  '768': {
                    'slidesPerView': 2,
                    'spaceBetween': 40
                  },
                  '1025': {
                    'slidesPerView': 4,
                    'spaceBetween': 40
                  }
                }">
                  <swiper-slide v-for="product in recommendProducts" :key="product.id">
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
export default {
  data () {
    return {
      isLoading: false,
      allProducts: [],
      product: {
        imagesUrl: []
      },
      favoriteProducts: JSON.parse(localStorage.getItem('favorite')) || [],
      cart: {
        product_id: '',
        qty: 1,
        productSpecs: []
      }
    }
  },
  components: {
    Card
  },
  computed: {
    content () {
      const content = this.product.content
      return content.replaceAll('\n', '<br/>')
    },
    recommendProducts () {
      return this.allProducts.filter(item => item.category === this.product.category)
    },
    countPrice () {
      return this.product.price * this.cart.qty
    },
    favoriteProductsId () {
      return this.favoriteProducts.map(product => product.id)
    }
  },
  methods: {
    getAllProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.allProducts = res.data.products
          } else {
            this.swal(res.data.message, 'error')
          }
        })
    },
    getProduct (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.product = res.data.product
            this.cart.product_id = res.data.product.id
            // 檢查若有商品規格，則在cart增加規格欄位
            if (this.product.productSpecs) {
              this.cart.productSpecs = []
              this.product.productSpecs.forEach(item => {
                this.cart.productSpecs.push({
                  type: '',
                  chosedSpec: ''
                })
              })
            }
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
    },
    changeNum (num) {
      this.cart.qty += num
    },
    chooseSpec (spec, index) {
      this.cart.productSpecs[index].type = spec.type
    },
    addToCart () {
      // 檢查商品數量是否小於 1
      if (this.cart.qty < 1) {
        this.swal('商品數量小於 1', 'error')
        return
      }
      // 檢查客人是否有選商品規格
      let specCheck = true
      this.cart.productSpecs.forEach(spec => {
        if (spec.chosedSpec === '') {
          specCheck = false
        }
      })
      if (!specCheck) {
        this.swal('未選擇商品規格', 'error')
        return
      }
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(api, {
        data: this.cart
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
    },
    addToFavorite () {
      if (this.favoriteProductsId.includes(this.product.id)) {
        return this.swal('此商品已在收藏清單', 'error')
      }
      this.isLoading = true
      this.favoriteProducts.push(this.product)
      localStorage.setItem('favorite', JSON.stringify(this.favoriteProducts))
      setTimeout(() => {
        this.isLoading = false
        this.swal('已加入收藏')
      }, 1000)
    },
    setImageUrl (image) {
      this.product.imageUrl = image
    }
  },
  created () {
    const id = this.$route.params.id
    this.getProduct(id)
    this.getAllProducts()
    // 偵聽 params 改變後，重新getProduct
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        const id = this.$route.params.id
        if (!id) return
        this.getProduct(id)
      }
    )
  }
}
</script>
