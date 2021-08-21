<template>
  <div class="news__single bg-color">
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
            show: true,
            title: article.title,
          }
        }" />
        <h2 class="fs-2 mb-3 fw-bold">{{ article.title }}</h2>
        <p class="d-flex align-items-center border-bottom border-2 pb-3">
          <span class="material-icons me-3">today</span>
          {{ $dateFormat(article.create_at) }}
        </p>
        <img class="d-block mx-auto my-6" :src="article.image" alt="article-image">
        <p style="white-space: pre-wrap;" class="lh-lg border-bottom border-2 pb-3">
          {{ article.content }}
        </p>
        <div class="d-flex justify-content-center">
          <router-link to="/dino-park/news"
                     class="btn btn-primary rounded-0">
            返回列表
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      article: {}
    }
  },
  methods: {
    getArticle (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/article/${id}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.article = res.data.article
          } else {
            this.swal(res.data.messages, 'error')
          }
          this.isLoading = false
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    const id = this.$route.params.id
    this.getArticle(id)
  }
}
</script>
