<template>
   <div class="store pb-8 bg-color">
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
            title: '恐龍商店',
            link: '/dino-park/store'
          },
          link3: {
            show: false
          }
        }">
        </Breadcrumb>
        <swiper class="mb-6"
              :slides-per-view="1"
              :space-between="20"
              navigation
              :loop="true"
              :pagination="swiperPagination"
              :scrollbar="{ draggable: true }"
              :autoplay="{
                'delay': 4000,
                'disableOnInteraction': false
              }">
              <swiper-slide>
                <router-link to="/dino-park/store/-MdC_Y5waZ5yZsDM-2Nu">
                  <img class="w-100 ad-image"
                       src="@/assets/ad/product-image-1.png" alt="product-image-1">
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to="/dino-park/store/-MdCWCKq-3CUE8_S5lEt">
                  <img class="w-100 ad-image"
                  src="@/assets/ad/product-image-2.png" alt="product-image-2">
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to="/dino-park/store/-MeVCkPSo5C_FlTaijOM">
                  <img class="w-100 ad-image"
                  src="@/assets/ad/product-image-3.png" alt="product-image-3">
                </router-link>
              </swiper-slide>
        </swiper>
        <div class="row">
            <div class="col-lg-3 mb-6">
              <div class="sticky-top fs-5">
                  <h2 class="list-group-item bg-dark text-white text-center m-0 py-5 fs-5">商品類別</h2>
                  <ul class="list-group border-top-0">
                    <li>
                      <a href="#"
                        class=" p-lg-3 list-group-item list-group-item-action"
                        :class="{ 'active' : navIndex === 1 }"
                        @click.prevent="setType('', 1)">
                        <img src="../../assets/icons/centrosaurus-dinosaur-shape.png">
                        <span>所有商品</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        class=" p-lg-3 list-group-item list-group-item-action"
                        :class="{ 'active' : navIndex === 2 }"
                        @click.prevent="setType('活體恐龍', 2)">
                        <img src="../../assets/icons/centrosaurus-dinosaur-shape.png">
                        <span>恐龍競標</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        class="p-lg-3 list-group-item list-group-item-action"
                        :class="{ 'active' : navIndex === 3 }"
                        @click.prevent="setType('化石', 3)">
                        <img src="../../assets/icons/pterodactyl-dinosaur-bird-shape.png">
                        <span>化石</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        class="p-lg-3 list-group-item list-group-item-action"
                        :class="{ 'active' : navIndex === 4 }"
                        @click.prevent="setType('門票', 4)">
                        <img src="../../assets/icons/iguanodon-dinosaur-shape.png">
                        <span>門票</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        class="p-lg-3 list-group-item list-group-item-action"
                        :class="{ 'active' : navIndex === 5 }"
                        @click.prevent="setType('文創商品', 5)">
                        <img src="../../assets/icons/gorgosaurus-dinosaur-shape.png">
                        <span>文創商品</span>
                      </a>
                    </li>
                  </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row">
                  <div class="col-md-6 col-lg-4 mb-5" v-for="product in typeProducts" :key="product.id">
                        <Card :product-data="product"
                              @add-cart="addToCart">
                        </Card>
                  </div>
                  <Pagination :pagination="pagination"
                              v-if="productType === ''"
                              @change-page="getProducts">
                  </Pagination>
              </div>
            </div>
        </div>
      </div>
   </div>
</template>
<script>
import Card from '../../components/front/Card.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      productType: '',
      searchText: '',
      allProducts: [],
      products: [],
      pagination: {},
      isLoading: false,
      navIndex: 0,
      swiperPagination: {
        clickable: true
      }
    }
  },
  components: {
    Card,
    Pagination
  },
  computed: {
    typeProducts () {
      if (this.productType) {
        return this.allProducts.filter(product => product.category === this.productType)
      } else {
        return this.products
      }
    }
  },
  methods: {
    setType (type, index) {
      this.serachText = ''
      this.productType = type
      this.navIndex = index
    },
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
        .catch(err => console.log(err))
    },
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            const { products, pagination } = res.data
            this.products = products
            this.pagination = pagination
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
  mounted () {
    this.getProducts()
    this.getAllProducts()
  }
}
</script>
