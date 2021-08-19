<template>
    <div class="area__page pb-8 bg-color">
        <div class="container py-5">
            <Breadcrumb :breadcrumb="{
              link2: {
                title: '園區地圖',
                link: '/dino-park/map'
              },
              link3: {
                show: true,
                title: '肉食恐龍區',
              }
            }">
            </Breadcrumb>
            <div class="map bg-contain mb-9"
                 :style="{ backgroundImage: 'url(' + require('@/assets/dinos/carnivore/carniMap.png') + ')' }">
            </div>
            <div class="title">
                <h2>肉食恐龍區</h2>
                <p class="mb-0">
                  直到侏儸紀中到晚期，掠食性恐龍演化開始多樣化，主要有大型的暴龍科、以及眾多的小型手盜龍類恐龍，如迅猛龍。
                  本園區分為霸王龍園區及迅猛龍園區，霸王龍是最具代表性的大型獸腳類恐龍之一，迅猛龍則有如人類一般的高智慧。
                </p>
            </div>
            <div class="row">
                <template v-for="item in descripition"
                          :key="item.title"
                          class="template">
                    <div class="col-md-6 mb-6">
                        <img :src="item.image" :alt="item.title">
                    </div>
                    <div class="col-md-6 description mb-6">
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
          title: '霸王龍園區',
          image: 'https://upload.cc/i1/2021/08/15/csKuBq.png',
          content: `霸王龍出現在恐龍歷史上的後期。恐龍在地球上稱王稱霸了1.2億年，而霸王龍只在最後1500萬年間才出現。
                    霸王龍主要分布於白堊紀晚期的北美洲大陸，其擁有巨大的頭顱並以又重又長的尾巴保持平衡。相對於牠們大而強壯的後肢和巨大的身體，暴龍的前肢較短且僅有兩根趾爪，是陸地上出現過最大型肉食性動物之一。`
        },
        {
          title: '迅猛龍園區',
          image: 'https://upload.cc/i1/2021/08/15/nAUFJv.png',
          content: `迅猛龍生活於7,500萬至7,100萬年前的白堊紀中晚期，它們生性嗜殺，從不輕易放過獵物。甚至在並不飢餓的情況  下，它們也要撲殺獵物。
              它們動作迅速，奔跑強勁有力，跳躍技藝驚人。它們的四肢上均長有致命的利爪，還具有撕扯力很強的嘴部，和其他恐龍比起來，它們更聰明，是天生的殺手。`
        }
      ]
    }
  }
}
</script>
