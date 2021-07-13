<template>
   <div class="article__list">
        <Loading v-model:active="isLoading">
                 <div class="loadingio-spinner-rolling-feeb69z48bi">
                  <div class="ldio-947txsafiul">
                    <div>
                    </div>
                  </div>
                </div>
        </Loading>
        <ArticleModal ref="articleModal"
                      :temp-article="tempArticle"
                      @send-article="updateArticle"
                      :isNew="isNew">
        </ArticleModal>
        <div class="container p-5 border border-primary">
            <div class="d-flex justify-content-end align-items-center mb-3">
              <button class="btn btn-info"
                      type="button"
                      @click="openModal(true)">
                  建立文章
              </button>
            </div>
            <Alert :text="'園區介紹文章請加上type:公園新聞'"
                   :color="'success'">
            </Alert>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr class="table-light">
                            <th scope="col" width="120">日期</th>
                            <th scope="col" width="240">標題</th>
                            <th scope="col" width="120">標籤</th>
                            <th scope="col" width="120">公開</th>
                            <th scope="col" width="120">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="article in articles"
                            :key="article.id">
                            <td>{{ $dateFormat(article.create_at) }}</td>
                            <th scope="row">{{ article.title }}</th>
                            <td>
                              <span v-for="tag in article.tag"
                                    :key="tag">
                                    {{ tag }}
                              </span>
                            </td>
                            <td>
                              <span v-show="article.isPublic">公開</span>
                              <span v-show="article.isPublic === false"
                                    class="text-primary">
                                    非公開
                              </span>
                            </td>
                            <td>
                              <div class="btn-group" role="group">
                                <button type="button"
                                        class="btn btn-outline-info"
                                        @click.prevent="openModal(false, article)">
                                        編輯
                                </button>
                                <button type="button"
                                        class="btn btn-outline-danger"
                                        @click.prevent="deleteArticle(article.id)">
                                        刪除
                                </button>
                              </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Pagination :pagination="pagination"
                        @change-page="getArticles">
            </Pagination>
        </div>
   </div>
</template>
<script>
import ArticleModal from '../../components/back/ArticleModal.vue'
import Pagination from '../../components/Pagination.vue'

export default {
  data () {
    return {
      articles: [],
      tempArticle: {
        tag: [''],
        paragraph: [
          {
            image: '',
            title: '',
            content: ''
          }
        ]
      },
      pagination: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ArticleModal,
    Pagination
  },
  methods: {
    openModal (isNew, article) {
      if (isNew) {
        this.tempArticle = {
          tag: [''],
          paragraph: [
            {
              image: '',
              title: '',
              content: ''
            }
          ]
        }
      } else {
        this.getArticle(article.id)
      }
      this.isNew = isNew
      this.$refs.articleModal.openModal()
    },
    getArticle (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            this.tempArticle = JSON.parse(JSON.stringify(res.data.article))
          } else {
            this.swal(res.data.messages, 'error')
          }
          this.isLoading = false
        })
    },
    getArticles (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            const { articles, pagination } = res.data
            this.articles = articles
            this.pagination = pagination
          } else {
            this.swal(res.data.messages, 'error')
          }
          this.isLoading = false
        })
    },
    updateArticle (article) {
      this.isLoading = true
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article`
      let method = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${article.id}`
        method = 'put'
      }
      this.$http[method](api, {
        data: article
      })
        .then(res => {
          if (res.data.success) {
            this.swal(res.data.message)
            this.$refs.articleModal.hideModal()
            this.getArticles()
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
    },
    deleteArticle (id) {
      this.swalComfirm('確認刪除文章?')
        .then(willDelete => {
          if (willDelete.isConfirmed) {
            this.isLoading = true
            const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`
            this.$http.delete(api)
              .then(res => {
                if (res.data.success) {
                  this.getArticles()
                  this.swal(res.data.message)
                } else {
                  this.swal(res.data.message, 'error')
                }
                this.isLoading = false
              })
          }
        })
    }
  },
  created () {
    this.getArticles()
  }
}
</script>
