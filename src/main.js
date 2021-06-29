// 外部插件
import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import bootstrap from 'bootstrap'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale, loadLocaleFromURL } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

// 自製元件
import Alert from '@/components/Alert.vue'
import Filters from '@/mixins/Filters.vue'

const app = createApp(App)

// 載入全域filter mixin
app.mixin(Filters)

// 啟用外部套件
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
loadLocaleFromURL('./zh_TW.json')
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})
setLocale('zh_TW')

// sweetalert2
const options = {
  confirmButtonColor: '#8fbd3a',
  cancelButtonColor: '#c84131'
}

app.component('swiper', Swiper)
app.component('swiper-slide', SwiperSlide)
app.component('Loading', Loading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
const emitter = mitt()
app.config.globalProperties.emitter = emitter
app.use(VueAxios, axios)
app.use(VueSweetalert2, options)
app.use(bootstrap)
app.use(router)
app.mount('#app')

// 啟用自製元件
app.component('Alert', Alert)
