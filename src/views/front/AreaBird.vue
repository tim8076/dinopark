<template>
    <div class="area__page pb-8 bg-color">
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
                show: true,
                title: '鳥園',
              }
            }" />
            <div class="map bg-contain mb-9"
                 :style="{ backgroundImage: `url(${require('@/assets/image/dinos/bird/birdMap.png')})`}">
            </div>
            <div class="title" v-if="!isLoading">
                <h2>鳥園</h2>
                <p class="mb-0">
                  鳥園位於島上的西北方，高高地矗立在平地上，可以讓遊客從空中觀看到翼手龍。
                  鳥舍裡目前有4隻翼手龍，翼手龍遊覽中心樓在鳥舍大圓頂下面。
                </p>
            </div>
            <div class="row" v-if="!isLoading">
                <template v-for="item in descripition"
                          :key="item.title"
                          class="template">
                    <div class="col-md-6 mb-6"
                         data-aos="fade-up"
                         :data-aos-delay="150 * index">
                        <img :src="item.image" :alt="item.title">
                    </div>
                    <div class="col-md-6 description mb-6"
                         data-aos="fade-up"
                         :data-aos-delay="150 * index">
                        <div class="txt ms-lg-6 mt-lg-6">
                            <h3 class="text-primary">{{ item.title }}</h3>
                            <p class="fs-5">{{ item.content }}</p>
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
      descripition: [
        {
          title: '鳥園',
          image: 'https://upload.cc/i1/2021/08/15/kvNbCF.png',
          content: `翼龍是第一群能採主動飛行的脊椎動物。牠們的雙翼是由皮膚、肌肉、與其他軟組織構成的翼膜。
                    翼龍類的骨頭中空，內有空氣，類似現代鳥類的骨頭。`
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
