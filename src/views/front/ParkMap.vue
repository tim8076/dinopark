<template>
  <div class="map__page bg-color">
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
                title: '園區地圖',
                link: '/dino-park/map'
              },
              link3: {
                show: false
              }
            }">
            </Breadcrumb>
            <div class="map bg-contain mb-9" :style="`background-image : url(${article.image})`">
            </div>
            <div class="px-6">
                <h1 class="pb-2 fw-bold text-primary fs-4">
                {{ article.paragraph[3]?.title }}
                </h1>
                <p class="mb-6">{{ article.paragraph[3]?.content }}</p>
                <div class="links py-6">
                  <router-link :to="`/dino-park/areas/${area.id}`"
                     v-for="area in parkAreas"
                     :key="area.title"
                     :style="`background-image : url(${area.paragraph[0].image})`"
                     class="link bg-cover text-dark"
                     :data-title="area.tag[0]">
                  </router-link>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false,
      articles: [],
      article: {
        paragraph: [
          {
            title: '',
            content: ''
          }
        ]
      }
    }
  },
  computed: {
    parkAreas () {
      return this.articles.filter(article => article.title === '園區分類')
    }
  },
  methods: {
    getArticles (page = 2) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.articles = res.data.articles
            this.article = this.articles.find(article => article.title === '園區地圖')
          } else {
            this.swal(res.data.message)
          }
          this.isLoading = false
        })
    }
  },
  created () {
    this.getArticles()
  }
}
</script>
