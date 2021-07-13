<template>
    <div class="favorite">
        <Loading v-model:active="isLoading">
                 <div class="loadingio-spinner-rolling-feeb69z48bi">
                  <div class="ldio-947txsafiul">
                    <div>
                    </div>
                  </div>
                </div>
        </Loading>
        <div class="container py-5 mh-100vh">
            <Breadcrumb :breadcrumb="{
              link2: {
                title: '收藏商品',
                link: '/dino-park/favorite'
              },
              link3: {
                show: false
              }
            }">
            </Breadcrumb>
            <h1 class="fs-4 border-bottom border-2 pb-2 fw-bold mb-6 text-primary">您的收藏商品</h1>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3 mb-6"
                     v-for="product in favoriteProducts"
                     :key="product.id">
                    <Card  :favorite="true"
                           :product-data="product"
                           @remove-favorite="removeFavorite">
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '../../components/front/Card.vue'

export default {
  data () {
    return {
      favoriteProducts: JSON.parse(localStorage.getItem('favorite')) || [],
      isLoading: false
    }
  },
  components: {
    Card
  },
  methods: {
    removeFavorite (id) {
      this.isLoading = true
      let removeIndex = 0
      this.favoriteProducts.forEach((product, index) => {
        if (product.id === id) {
          removeIndex = index
        }
      })
      this.favoriteProducts.splice(removeIndex, 1)
      localStorage.setItem('favorite', JSON.stringify(this.favoriteProducts))
      setTimeout(() => {
        this.isLoading = false
        this.swal('已取消收藏')
      }, 500)
    }
  },
  mounted () {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  }
}
</script>
