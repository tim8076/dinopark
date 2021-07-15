<template>
   <div class="cart_order py-6">
       <Loading v-model:active="isLoading">
                 <div class="loadingio-spinner-rolling-feeb69z48bi">
                  <div class="ldio-947txsafiul">
                    <div>
                    </div>
                  </div>
                </div>
        </Loading>
       <div class="container">
          <div class="progress__area mb-6 py-6">
             <div class="progress__bar">
                <div class="dotbox active">
                   <div class="dot">1</div>
                   <span>購物車</span>
                </div>
                <div class="dotbox active">
                   <div class="dot">2</div>
                   <span>填寫資料</span>
                </div>
                <div class="dotbox">
                   <div class="dot">3</div>
                   <span>訂單確認</span>
                </div>
             </div>
          </div>
          <div class="row mb-6">
             <div class="col-10 col-md-8 mx-auto border border-3 p-0">
                 <h2 class="cart-title">訂購人資料</h2>
                 <Form class="inputs p-6 "
                       v-slot="{ errors }"
                       @submit="sendOrder">
                    <div class="mb-3">
                        <label for="name" class="form-label">姓名</label>
                        <Field type="text"
                               class="form-control"
                               id="name"
                               name="姓名"
                               v-model.trim="user.name"
                               rules="required"
                               :class="{ 'is-invalid': errors['姓名'] }"
                               placeholder="ex: 王曉明">
                        </Field>
                        <error-message name="姓名" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">信箱</label>
                        <Field type="email"
                               class="form-control"
                               id="email"
                               name="信箱"
                               v-model.trim="user.email"
                               rules="email|required"
                               :class="{ 'is-invalid': errors['信箱'] }"
                               placeholder="dinosaur@example.com">
                        </Field>
                        <error-message name="信箱" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                        <label for="tel" class="form-label">電話</label>
                        <Field type="tel"
                               class="form-control"
                               id="tel"
                               name="電話"
                               rules="min:9|required"
                               v-model.trim="user.tel"
                               :class="{ 'is-invalid': errors['電話'] }"
                               placeholder="ex: 0909111222">
                        </Field>
                        <error-message name="電話" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">地址</label>
                        <Field type="text"
                               class="form-control"
                               id="address"
                               name="地址"
                               rules="required"
                               v-model.trim="user.address"
                               :class="{ 'is-invalid': errors['地址'] }"
                               placeholder="ex: 台北市大安區新生南路一段">
                        </Field>
                        <error-message name="地址" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-6">
                        <label for="payment_method" class="form-label">付款方式</label>
                        <Field id="payment_method"
                               name="付款方式"
                               class="form-control"
                               :class="{ 'is-invalid': errors['付款方式'] }"
                               placeholder="請輸入付款方式"
                               rules="required"
                               v-model="user.payment_method"
                               as="select">
                          <option value="" disabled selected>請選擇付款方式</option>
                          <option value="ATM 轉帳">ATM 轉帳</option>
                          <option value="信用卡">信用卡</option>
                          <option value="Apple Pay">Apple Pay</option>
                        </Field>
                        <error-message name="付款方式" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">留言區</label>
                        <textarea class="form-control"
                                  id="message"
                                  v-model.trim="message"
                                  rows="3">
                        </textarea>
                    </div>
                    <div class="buttons">
                        <router-link to="/dino-park/cart/list"
                                     class="btn  btn-outline-primary">
                            <span class="material-icons">arrow_back_ios</span>
                            回購物車
                        </router-link>
                        <button class="btn btn-primary"
                                :class="{ 'disabled': !isValid }"
                                type="submit">送出訂單
                        </button>
                    </div>
                 </Form>
             </div>
          </div>
       </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment_method: ''
      },
      message: '',
      isLoading: false
    }
  },
  computed: {
    isValid () {
      return Object.values(this.user).every(item => item !== '')
    }
  },
  methods: {
    sendOrder () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(api, {
        data: {
          user: this.user,
          message: this.message
        }
      })
        .then(res => {
          if (res.data.success) {
            const orderId = res.data.orderId
            this.$router.push({ name: 'checkout', params: { orderId: orderId } })
            this.emitter.emit('add-cart')
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
    }
  }
}
</script>
