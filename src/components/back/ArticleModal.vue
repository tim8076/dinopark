<template>
    <div class="modal fade"
         id="articleModal"
         tabindex="-1"
         ref="modal">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <div class="container-fluid">
                       <div class="row">
                           <div class="col-lg-4">
                              <div class="mb-3">
                                <label for="imgUrl" class="form-label">圖片網址</label>
                                <input type="text"
                                    class="form-control mb-3"
                                    id="imgUrl"
                                    v-model.trim="article.image"
                                    placeholder="請輸入圖片網址">
                                <label for="imgUpload" class="form-label">上傳主要文章圖片</label>
                                <input type="file"
                                    class="form-control mb-5"
                                    id="imgUpload"
                                    @change="upLoadImage(null, $event)">
                                <img  class="img-fluid mb-3"
                                    :src="article.image"
                                    v-if="!isLoading">
                                <div  class="d-flex
                                    justify-content-center
                                    align-items-center"
                                    style="height: 200px"
                                    v-else>
                                    <div class="spinner-border text-primary"
                                    style="width: 3rem; height: 3rem;"
                                    role="status">
                                    <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                              </div>
                           </div>
                           <div class="col-lg-8">
                                <div class="mb-3">
                                    <label for="title" class="form-label">
                                    文章標題 <span class="text-primary">*</span>
                                    </label>
                                    <input type="text"
                                        class="form-control"
                                        id="title"
                                        v-model.trim="article.title"
                                        placeholder="請輸入標題">
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="author" class="form-label">
                                            作者 <span class="text-primary">*</span>
                                            </label>
                                            <input  type="text"
                                                    class="form-control"
                                                    id="author"
                                                    v-model.trim="article.author"
                                                    placeholder="請輸入作者">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="create_at" class="form-label">
                                            文章日期 <span class="text-primary">*</span>
                                            </label>
                                            <input type="date"
                                                class="form-control"
                                                id="create_at"
                                                placeholder="請輸入文章日期"
                                                :value="$dateYYYYMMDD(this.article.create_at)"
                                                @change="setArticleDate">
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">
                                    文章標籤
                                    </label>
                                    <div class="row">
                                        <div class="col-md-4 mb-3"
                                             v-for="(tag, index) in article.tag"
                                             :key="index">
                                           <input
                                            type="text"
                                            class="form-control"
                                            v-model.trim="article.tag[index]"
                                            placeholder="輸入標籤">
                                        </div>
                                    </div>
                                    <button class="btn btn-info me-3"
                                            @click="addTagInput"
                                            v-if="article.tag[article.tag.length - 1 ] ||
                                                  article.tag.length === 1 ">
                                        新增標籤欄位
                                    </button>
                                    <button class="btn btn-outline-primary"
                                           @click="deleteTagInput"
                                           v-else>
                                        刪除標籤欄位
                                    </button>
                                </div>
                                <hr>
                                <div class="mb-3">
                                    <label class="form-label"
                                           for="mainArticle">
                                        輸入主文內容 <span class="text-primary">*</span>
                                    </label>
                                    <textarea id="mainArticle"
                                              class="form-control"
                                              rows="8"
                                              v-model="article.content">
                                    </textarea>
                                </div>
                                <div class="mb-3 mt-3">
                                    <div class="row mb-3">
                                        <template v-for="(paragraph, index) in article.paragraph"
                                                  :key="paragraph">
                                            <div class="col-lg-4 mb-md-3">
                                                <label class="form-label"
                                                       for="paraImage">
                                                  上傳段落圖片
                                                </label>
                                                <input type="file"
                                                    id="paraImage"
                                                    class="form-control mb-3"
                                                    @change="upLoadImage(index, $event)">
                                                <img  class="img-fluid mb-3"
                                                    :src="article.paragraph[index].image">
                                            </div>
                                            <div class="col-lg-8 mb-md-3">
                                                <label class="form-label"
                                                       for="paraTitle">
                                                  輸入段落標題
                                                </label>
                                                <input type="text"
                                                       id="paraTitle"
                                                       class="form-control mb-3"
                                                       v-model="article.paragraph[index].title">
                                                <label class="form-label"
                                                       for="paraText">
                                                  輸入段落文字
                                                </label>
                                                <textarea
                                                        id="paraText"
                                                        class="form-control"
                                                        rows="8"
                                                        v-model="article.paragraph[index].content">
                                                </textarea>
                                            </div>
                                        </template>
                                    </div>
                                    <button class="btn btn-info w-25 me-3"
                                            v-if="article.paragraph[article.paragraph.length - 1].content ||
                                                  article.paragraph.length === 1"
                                            @click="addParagraph">
                                            新增段落
                                    </button>
                                    <button class="btn btn-outline-primary w-25"
                                            v-else
                                            @click="deleteParagraph">
                                            刪除段落
                                    </button>
                                    <hr>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input"
                                            type="checkbox"
                                            v-model="article.isPublic"
                                            id="isPublic">
                                        <label class="form-check-label" for="isPublic">
                                          文章是否公開 <span class="text-primary">*</span>
                                        </label>
                                    </div>
                                </div>
                           </div>
                       </div>
                   </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button"
                            class="btn btn-info"
                            :class=" { 'disabled' : disabled } "
                            @click="sendArticle">
                            確認
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Modal from '../../mixins/Modal.vue'

export default {
  props: {
    tempArticle: {
      type: Object,
      required: true
    },
    isNew: {
      type: Boolean,
      required: true
    }
  },
  emits: ['send-article'],
  data () {
    return {
      isLoading: false,
      article: {
        tag: [''],
        paragraph: [
          {
            image: '',
            title: '',
            content: ''
          }
        ],
        isPublic: false
      }
    }
  },
  mixins: [Modal],
  watch: {
    tempArticle () {
      this.article = this.tempArticle
    }
  },
  computed: {
    modalTitle () {
      return this.isNew ? '新增文章' : '編輯文章'
    },
    disabled () {
      if (!this.article.title ||
          !this.article.create_at ||
          !this.article.author ||
          !this.article.content) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    setArticleDate (e) {
      const date = e.target.value
      const timeStamp = new Date(date).getTime() / 1000
      this.article.create_at = timeStamp
    },
    upLoadImage (index, e) {
      this.isLoading = true
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData)
        .then(res => {
          if (res.data.success) {
            if (index === null) {
              this.article.image = res.data.imageUrl
            } else {
              this.article.paragraph[index].image = res.data.imageUrl
            }
            this.swal('成功上傳圖片')
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
        .catch(err => console.log(err))
    },
    addTagInput () {
      this.article.tag.push('')
    },
    deleteTagInput () {
      const lastIndex = this.article.tag.length - 1
      if (lastIndex >= 1) {
        this.article.tag.splice(lastIndex, 1)
      }
    },
    addParagraph () {
      this.article.paragraph.push({
        image: '',
        title: '',
        content: ''
      })
    },
    deleteParagraph () {
      const lastIndex = this.article.paragraph.length - 1
      this.article.paragraph.splice(lastIndex, 1)
    },
    sendArticle () {
      this.$emit('send-article', this.article)
    }
  }
}
</script>
