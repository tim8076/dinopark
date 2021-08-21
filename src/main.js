// 外部插件
import { createApp } from 'vue'

// 匯入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

// 匯入 router
import router from './router'

// 匯入 mitt 套件
import mitt from 'mitt'

// 匯入 vue-loading套件
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// 匯入 sweetalert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// 匯入 bootstrap js
import 'bootstrap'

// 匯入文字編輯器套件
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

// 匯入 表單驗證套件
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale, loadLocaleFromURL } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 匯入 swiper 輪播套件
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

// 匯入自製元件
import Alert from '@/components/Alert.vue'
import Breadcrumb from '@/components/front/Breadcrumb.vue'
import Filters from '@/mixins/Filters.vue'
import swal from './components/tools/Swal.vue'

const app = createApp(App)

// 載入全域 mixin
app.mixin({
  mixins: [Filters, swal]
})

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
app.component('QuillEditor', QuillEditor)
app.component('Loading', Loading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
const emitter = mitt()
app.config.globalProperties.emitter = emitter
app.use(VueAxios, axios)
app.use(VueSweetalert2, options)
app.use(router)
app.mount('#app')

// 啟用自製元件
app.component('Alert', Alert)
app.component('Breadcrumb', Breadcrumb)
