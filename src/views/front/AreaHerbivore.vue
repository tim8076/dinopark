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
                title: '草食恐龍區',
              }
            }" />
            <div class="map bg-contain mb-9"
                 :style="{ backgroundImage: `url(${require('@/assets/image/dinos/herbs/herbMap.png')})` }">
            </div>
            <div class="title bg-success">
                <h2>草食恐龍區</h2>
                <p class="mb-0">
                  本園區展示眾多草食性恐龍，草食性恐龍為了抵禦肉食恐龍的攻擊，演化出了相當多的防禦手段。
                  包括侏羅紀恐龍當中最高的腕龍、擁有帶刺的尾巴而著名的劍龍、有著帶刺頭骨而聞名的三角龍等等。
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
          title: '三角龍',
          image: 'https://upload.cc/i1/2021/08/15/NIGS91.png',
          content: `三角龍有非常大的頭盾，以及三根角狀物，其中眼窩上的兩根觭角非常之長，嘴巴有像鸚鵡一樣的喙。
                    三角龍大小在所有植食恐龍中算是中等，但卻是最大級別的「角龍類」，全長大約有7到10公尺，重達6到12噸。`
        },
        {
          title: '腕龍',
          image: 'https://upload.cc/i1/2021/08/15/BDHtqd.png',
          content: `腕龍生活於侏羅紀晚期的北美洲，是世界上最知名的恐龍之一。
                    在過去數十年，腕龍曾經被認為是陸地上最大的恐龍之一，也是侏羅紀恐龍當中最高的一種；
                    腕龍的前臂比後肢還要長的很大一部分原因，是方便腕龍能夠食用高聳的植物葉子。`
        },
        {
          title: '劍龍',
          image: 'https://upload.cc/i1/2021/08/15/HyXoB9.png',
          content: `劍龍是植食性裝甲類恐龍的一種，劍龍體型龐大，體格粗壯，背部圓潤，前肢短，後肢長，尾巴高懸在空中。
                    普遍認為尾刺很可能用來防禦捕食者，而背部的骨板則主要用來展示或調節體溫。`
        },
        {
          title: '副櫛龍',
          image: 'https://upload.cc/i1/2021/08/15/Z4wftm.png',
          content: `副櫛龍是鴨嘴龍科恐龍的一屬，是鴨嘴龍科裡面發現化石最多、最具代表性的一個。
                    生存於約7,650萬年到7,300萬年前的晚白堊紀。
                    副櫛龍可以二足或四足方式行走，連接鼻頭到後腦勺的頭冠為其標誌性特徵。`
        },
        {
          title: '似雞龍',
          image: 'https://upload.cc/i1/2021/08/15/Mhl8uU.png',
          content: `似雞龍是一種奔跑速度非常之快的兩足恐龍，主要以植物為食。
                  似雞龍最長可達4-6米及體重440公斤。
                  雞龍有著小型的頭部、大眼睛、長頸、短臂、長腳及長尾巴，外型有點像鴕鳥。`
        }
      ]
    }
  }
}
</script>
