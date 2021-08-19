<template>
   <div class="info__page bg-color">
        <Loading v-model:active="isLoading">
            <div class="loadingio-spinner-rolling-feeb69z48bi">
                <div class="ldio-947txsafiul">
                    <div>
                    </div>
                </div>
            </div>
        </Loading>
        <div class="container py-5 mh-100vh">
            <Breadcrumb :breadcrumb="{
              link2: {
                title: '園區資訊',
                link: '/dino-park/info/ticket'
              },
              link3: {
                show: false
              }
            }">
            </Breadcrumb>
            <div class="info__title">
               <h2 class="fs-2">遊園資訊</h2>
               <div class="info__title__line"></div>
            </div>
            <div class="info__type py-3 mb-6">
                <ul class="items">
                    <li class="item">
                        <router-link to="/dino-park/info/ticket"
                                class="btn rounded-pill"
                                :class="{ 'btn-outline-primary' : infoType !== 'ticket',
                                          'btn-primary' : infoType === 'ticket'}">
                                票價資訊
                        </router-link>
                    </li>
                    <li class="item">
                        <router-link to="/dino-park/info/time"
                                class="btn rounded-pill"
                                :class="{ 'btn-outline-primary' : infoType !== 'time',
                                          'btn-primary' : infoType === 'time'}">
                                營業時間
                        </router-link>
                    </li>
                    <li class="item">
                        <router-link to="/dino-park/info/traffic"
                                class="btn rounded-pill"
                                :class="{ 'btn-outline-primary' : infoType !== 'traffic',
                                          'btn-primary' : infoType === 'traffic'}">
                                交通方式
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="info__time"
                 v-show="infoType === 'time'">
                <table class="table table-bordered mb-6">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th scope="col">區域</th>
                            <th scope="col">週一至週五
                                <br class="br">(平日)
                            </th>
                            <th scope="col">週六及週日
                                <br class="br">(假日)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" class="table__row">肉食恐龍區</th>
                            <td>09:00
                                <br class="br">至
                                <br class="br">
                                16:30
                            </td>
                            <td>09:00
                                <br class="br">至
                                <br class="br"> 17:30
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table__row">草食恐龍區</th>
                            <td>09:00
                                <br class="br">至
                                <br class="br"> 16:30
                            </td>
                            <td>09:00
                                <br class="br">至
                                <br class="br"> 17:30
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table__row">鳥園</th>
                            <td >09:00
                                <br class="br">至
                                <br class="br">16:00
                            </td>
                            <td>09:00
                                <br class="br">至
                                <br class="br"> 17:00
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Panel :panel-info="panelTime"></Panel>
            </div>
            <div class="info__ticket"
                 v-show="infoType === 'ticket'">
                <table class="table table-bordered mb-6">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th scope="col">票種</th>
                            <th scope="col">票價</th>
                            <th scope="col">說明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" class="table__row">全票</th>
                            <td>NT$ 990</td>
                            <td>18歲以上成人</td>
                        </tr>
                        <tr>
                            <th scope="row" class="table__row">學生票</th>
                            <td>NT$ 699</td>
                            <td>國中(含)以上學生
                                <br class="br">
                                憑學生證購買
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table__row">軍警票</th>
                            <td>NT$ 699</td>
                            <td>軍警人士
                                <br class="br">
                                憑工作證購買
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="table__row">幼童票</th>
                            <td>NT$ 350</td>
                            <td>6歲或
                                <br class="br">
                                120公分以下幼童
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Panel :panel-info="panelTicket"></Panel>
            </div>
            <div class="info_traffic"
                 v-show="infoType === 'traffic'">
                 <table class="table table-bordered mb-6">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th scope="col">交通方式</th>
                            <th scope="col">說明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" class="table__row">直升機</th>
                            <td>戴樂恐龍公園位於哥斯大黎加南方的海島，
                                <br class="br">
                                前往遊園前，請先向交通組預約遊園接駁直升機
                            </td>
                        </tr>
                         <tr>
                            <th scope="row" class="table__row">接駁船</th>
                            <td>戴樂恐龍公園位於哥斯大黎加南方的海島，
                                <br class="br">
                                前往遊園前，請先向交通組預約遊園接駁交通船
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Panel :panel-info="panelTraffic"></Panel>
            </div>
        </div>
   </div>
</template>
<script>
import Panel from '../../components/front/Panel.vue'
export default {
  data () {
    return {
      isLoading: false,
      infoType: 'ticket',
      panelTime: {
        id: 'time',
        w_80: true,
        listText: [
          '09:00開放入園，各項設施09:30起陸續開放，於營運時間結束前30分鐘陸續停止運轉。',
          '連續假期比照假日營運時間辦理。',
          '營業時間如有微幅調整以現場公告為主。',
          '如遇天氣等不可抗力之因素，本園區將另行公告開/關園時間。',
          '30人以上團體預約另有優待，請洽業務專線0312-84596'
        ]
      },
      panelTicket: {
        id: 'ticket',
        w_80: true,
        listText: [
          '以上票價如有變動，請以現場公告為主。',
          '門票已含營業稅、娛樂稅及公共意外責任保險。',
          '各項促銷優惠活動恕無法合併使用。',
          '暴龍餵食秀、可愛恐龍區門票需另外購買',
          '30人以上團體票另有優待，請洽業務專線0312-84596'
        ]
      },
      panelTraffic: {
        id: 'ticket',
        w_80: true,
        listText: [
          '請於3日前預約交通船或直升機，預約專線: 0312-988745',
          '交通費已算入門票費用內，無另外收費',
          '各項交通保險理賠，已包含在入園門費內'
        ]
      }
    }
  },
  components: {
    Panel
  },
  created () {
    const type = this.$route.params.type
    this.infoType = type
    this.$watch(
      () => this.$route.params,
      () => {
        const type = this.$route.params.type
        this.infoType = type
      }
    )
  }
}
</script>
