<template>
    <div class="dashboard">
       <Loading v-model:active="isLoading">
              <div class="loadingio-spinner-rolling-feeb69z48bi">
              <div class="ldio-947txsafiul">
                <div>
                </div>
              </div>
            </div>
      </Loading>
       <header class="mb-3">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-3 fw-bold">
            <div class="container">
              <h1>
                 <router-link class="navbar-brand d-block fw-bold" to="/dino-park/home">戴樂恐龍公園</router-link>
              </h1>
              <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav d-flex justify-content-end">
                  <li class="nav-item">
                    <router-link class="nav-link text-white" to="/dashboard">產品管理</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link text-white" to="/dashboard/orderList">訂單列表</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link text-white" to="/dashboard/articleList">文章列表</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link text-white" to="/dashboard/couponList">優惠券</router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white"
                       href="#"
                       @click.prevent="logOut">
                       登出
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
       </header>
       <router-view v-if="check"></router-view>
    </div>
</template>
<script>
export default {
  data () {
    return {
      check: false,
      isLoading: false
    }
  },
  methods: {
    logOut () {
      const api = `${process.env.VUE_APP_API}/logout`
      this.$http.post(api)
        .then(res => {
          if (res.data.success) {
            this.$router.push('/login')
            document.cookie = 'jurassicToken= ; expires= Thu, 01 Jan 1970 00:00:00 GMT'
          } else {
            this.swal(res.data.message, 'error')
          }
        })
        .catch(err => console.log(err))
    },
    checkLogin () {
      this.isLoading = true
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)jurassicToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const api = `${process.env.VUE_APP_API}/api/user/check`
      this.$http.post(api).then(res => {
        if (res.data.success) {
          this.check = true
        } else {
          this.$router.push('/login')
        }
        this.isLoading = false
      })
        .catch(err => console.log(err))
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>
