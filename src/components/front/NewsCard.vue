<template>
    <div class="news__item">
        <router-link :to="`/dino-park/news/${aticle.id}`" class="link">
            <div class="img">
                <img :src="aticle.image" class="w-100" alt="article-image">
            </div>
            <div class="txt">
                <p>{{ $dateFormat(aticle.create_at) }}</p>
                <h5>{{ aticle.title }}</h5>
                <div class="d-flex justify-content-end me-3">
                  <span>{{ aticle.tag[1] }}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      aticle: {
        tag: []
      }
    }
  },
  created () {
    this.aticle = this.news
  }
}
</script>
