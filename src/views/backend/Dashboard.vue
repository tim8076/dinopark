<template>
    <div class="dashboard">
       <header class="mb-3">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-3 fw-bold">
            <div class="container ">
              <router-link class="navbar-brand" to="/dino-park">戴樂恐龍公園</router-link>
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
       <router-view></router-view>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    logOut () {
      const api = `${process.env.VUE_APP_API}/logout`
      this.$http.post(api)
        .then(res => {
          if (res.data.success) {
            this.$router.push('/login')
          } else {
            this.swal(res.data.message, 'error')
          }
        })
    },
    checkLogin () {
      const api = `${process.env.VUE_APP_API}/api/user/check`
      this.$http.post(api).then(res => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)jurassicToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  }
}
</script>
