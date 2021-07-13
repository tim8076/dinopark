<template>
    <div class="area__page pb-8 bg-color">
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
                show: true,
                title: article.tag[0],
              }
            }">
            </Breadcrumb>
            <div class="map bg-contain mb-9" :style="`background-image : url(${article.image})`">
            </div>
            <div class="title" :class="{ 'bg-success': article.tag[0] === '草食恐龍區' }">
                <h1>{{ article.tag[0] }}</h1>
                {{ article.content }}
            </div>
            <div class="row">
                <template v-for="paragraph in article.paragraph"
                          :key="paragraph.title"
                          class="template">
                    <div class="col-md-6 mb-6">
                        <img :src="paragraph.image" :alt="paragraph.title">
                    </div>
                    <div class="col-md-6 description mb-6">
                        <div class="txt ms-lg-6 mt-lg-6">
                            <h2 class="text-primary">{{ paragraph.title }}</h2>
                            <p class="fs-5">{{ paragraph.content }}</p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false,
      article: {
        paragraph: [
          {
            title: '',
            image: '',
            content: ''
          }
        ],
        tag: ['']
      }
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
            this.swal(res.data.message)
          }
          this.isLoading = false
        })
    }
  },
  created () {
    const id = this.$route.params.id
    this.getArticle(id)
    // 偵聽 params 改變後，重新getArticle
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        const id = this.$route.params.id
        if (!id) return
        this.getArticle(id)
      }
    )
  }
}
</script>
