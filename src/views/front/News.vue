<template>
   <div class="news__page bg-color">
      <Loading v-model:active="isLoading">
          <div class="outter-spinner">
              <div class="inner-spinner">
                  <div>
                  </div>
              </div>
          </div>
      </Loading>
      <div class="container py-5 mh-100vh">
            <Breadcrumb :breadcrumb="{
              link2: {
                title: '最新消息',
                link: '/dino-park/news'
              },
              link3: {
                show: false
              }
            }" />
            <div class="row mb-6" >
                <div class="col-md-6 col-lg-4"
                     data-aos="fade-up"
                     :data-aos-delay="150 * index"
                     v-for="(article, index ) in news"
                     :key="article.id">
                    <NewsCard :news="article" />
                </div>
            </div>
      </div>
   </div>
</template>

<script>
import NewsCard from '@/components/front/NewsCard.vue'

export default {
  data () {
    return {
      isLoading: false,
      articles: []
    }
  },
  computed: {
    news () {
      return this.articles.filter(article => {
        return article.tag.includes('公園新聞')
      })
    }
  },
  components: { NewsCard },
  methods: {
    getArticles (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.articles = res.data.articles
          } else {
            this.swal(res.data.message)
          }
          this.isLoading = false
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    this.getArticles()
  }
}
</script>
