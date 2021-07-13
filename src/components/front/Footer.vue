<template>
    <div class="footer__page">
       <footer class="footer bg-dark py-6">
            <div class="container px-4 text-white">
                <div class="logo">
                    <img src="../../assets/logo/dinopark.png" alt="dinopark">
                </div>
                <p class="text-center">圖片僅做為學習用途，無商業用途。</p>
                <div class="contact">
                    <a href="https://www.facebook.com/">
                        <span class="material-icons md-36">facebook</span>
                    </a>
                    <a href="tel:0999888666">
                        <span class="material-icons md-36">call</span>
                    </a>
                    <a href="mailto:dinopark@gmail.com">
                        <span class="material-icons md-36">email</span>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  data () {
    return {
      article: {
        paragraph: []
      }
    }
  },
  computed: {
    footerImage () {
      return this.article.paragraph.find(paragraph => paragraph.title === 'footer圖片')
    }
  },
  methods: {
    getArticles (page = 2) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.article = res.data.articles.find(article => article.title === '園區圖片')
          } else {
            this.swal(res.data.message)
          }
        })
    }
  },
  created () {
    this.getArticles()
  }
}
</script>
