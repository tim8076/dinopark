<template>
    <div class="store__card h-100" >
        <div class="d-flex flex-column justify-content-between h-100">
            <div class="link-area">
              <router-link :to="`/dino-park/store/${product.id}`" class="link">
                查看更多
              </router-link>
              <div class="img">
                <img class="img-fluid" :src="product.imageUrl" :alt="product.title">
              </div>
              <div class="text p-5 bg-white">
                  <h3 class="mb-3 fw-bolder fs-4 text-dark d-block ">{{ product.title }}</h3>
                  <p class="m-0 fs-5">NT$ {{ $toCurrency(product.price) }}</p>
              </div>
            </div>
            <div class="row g-0" v-if="favorite">
              <div class="col-6">
                <button class="btn btn-primary py-3 fw-bold w-100"
                    @click="removeFavorite(product.id)">
                    取消收藏
                </button>
              </div>
              <div class="col-6">
                <button class="btn btn-primary py-3 fw-bold w-100"
                    @click="$emit('add-cart', product.id)">
                    加入購物車
                </button>
              </div>
            </div>
            <button class="btn btn-primary py-3 fw-bold"
                @click="$emit('add-cart', product.id)"
                v-else>
                <span class="material-icons me-2">shopping_cart</span>
                加入購物車
            </button>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    productData: {
      type: Object,
      required: true
    },
    favorite: {
      type: Boolean,
      default: false
    }
  },
  emits: ['add-cart', 'removeFavorite'],
  data () {
    return {
      product: {}
    }
  },
  watch: {
    productData () {
      this.product = { ...this.productData }
    }
  },
  methods: {
    removeFavorite (id) {
      this.$emit('removeFavorite', id)
    }
  },
  created () {
    this.product = { ...this.productData }
  }
}
</script>
