<template>
<div class="logIn bg-cover">
    <Loading v-model:active="isLoading">
              <div class="loadingio-spinner-rolling-feeb69z48bi">
              <div class="ldio-947txsafiul">
                <div>
                </div>
              </div>
            </div>
    </Loading>
    <div class="card border border-primary border-2" >
        <img src="../../assets/logo/dinopark.png" class="card-img-top image" alt="">
        <div class="card-body p-8">
            <h3 class="mb-5 text-center text-primary">登入後台</h3>
            <form @submit.prevent="signIn">
                <div class="mb-3">
                    <label for="email" class="form-label">信箱</label>
                    <input type="email"
                           class="form-control"
                           v-model="user.username"
                           id="email"
                           placeholder="name@example.com"
                           required>
                </div>
                <div class="mb-8">
                    <label for="password" class="form-label">密碼</label>
                    <input type="password"
                           class="form-control"
                           v-model="user.password"
                           id="password"
                           placeholder="password"
                           required>
                </div>
                <button type="submit"
                        class="btn btn-primary w-75 mx-auto d-block">
                    登入
                </button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    signIn () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/admin/signin`
      this.$http.post(api, this.user)
        .then(res => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `jurassicToken=${token}; expires=${new Date(expired)}`
            this.$router.push('/dashboard')
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
    }
  }
}
</script>
