<template>
  <div class="map__page bg-color">
        <Loading v-model:active="isLoading">
          <div class="outter-spinner">
              <div class="inner-spinner">
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
            }" />
            <div class="map bg-contain mb-9"
                 :style="{ backgroundImage: `url(${require('@/assets/image/dinos/carnivore/carniMap.png')})`}">
            </div>
            <div class="px-6" v-if="!isLoading">
                <h2 class="pb-2 fw-bold text-primary fs-4">
                   園區介紹
                </h2>
                <p class="mb-6">
                  戴樂恐龍公園位於哥斯大黎加的一個海島，國際遺傳公司利用最新的DNA複製技術，在島嶼上重現1億5千萬年前的恐龍生態。
                  在島上，你可以見到霸氣的霸王龍、敏捷的迅猛龍、還有溫和的腕龍、三角龍等草食恐龍。逛累了也可以到遊客中心觀賞園區建構的歷史，或到恐龍餐廳品嘗道地的南美洲料理。
                  快帶著家人一起來趟恐龍之旅吧。
                </p>
                <div class="links py-6">
                  <router-link
                     v-for="area in parkAreas"
                     :key="area.title"
                     :to="`${area.link}`"
                     :style="`background-image : url(${area.image})`"
                     class="link bg-cover text-dark"
                     :data-title="area.title">
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
      parkAreas: [
        {
          link: '/dino-park/areas/carnivore',
          title: '肉食恐龍區',
          image: 'https://upload.cc/i1/2021/08/15/csKuBq.png'
        },
        {
          link: '/dino-park/areas/herbivore',
          title: '草食恐龍區',
          image: 'https://upload.cc/i1/2021/08/15/NIGS91.png'
        },
        {
          link: '/dino-park/areas/bird',
          title: '鳥園',
          image: 'https://upload.cc/i1/2021/08/15/kvNbCF.png'
        }
      ]
    }
  },
  methods: {
    loading (sec) {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, sec)
    }
  },
  created () {
    this.loading(1000)
  }
}
</script>
