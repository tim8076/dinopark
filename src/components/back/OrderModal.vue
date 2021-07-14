<template>
    <div class="modal fade"
         id="orderModal"
         ref="modal"
         tabindex="-1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-secondary">
                <h5 class="modal-title" id="orderModalLabel">修改訂單資訊</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <Form v-slot="{ errors }" @submit="sendOder">
              <div class="modal-body">
                  <div class="container-fluid">
                      <div class="row">
                          <div class="mb-3">
                            <p>訂單日期:
                              <span class="ms-3">{{ $dateFormat(order.create_at)}}</span>
                            </p>
                            <p class="d-flex">
                              <span>訂購商品:</span>
                              <ol class="p-0 ms-3 mb-0">
                                <li v-for="product in products" :key="product.id">
                                  {{ product.product.title }} * {{ product.qty }}
                                </li>
                              </ol>
                            </p>
                            <p>訂單金額:
                              <span class="ms-3">NT$ {{ $toCurrency(Math.round(order.total)) }}</span>
                            </p>
                          </div>
                          <div class="col-md-6 mb-3">
                              <label for="name" class="form-label">訂購人姓名</label>
                              <Field  id="name"
                                      name="姓名"
                                      type="text"
                                      class="form-control"
                                      :class="{ 'is-invalid': errors['姓名'] }"
                                      placeholder="請輸入 訂購人姓名"
                                      rules="required"
                                      v-model="order.user.name">
                              </Field>
                              <error-message name="姓名" class="invalid-feedback"></error-message>
                          </div>
                          <div class="col-md-6 mb-3">
                              <label for="tel" class="form-label">電話</label>
                              <Field  id="tel"
                                      name="電話"
                                      type="number"
                                      class="form-control"
                                      :class="{ 'is-invalid': errors['電話'] }"
                                      placeholder="請輸入電話"
                                      rules="min:9|required"
                                      v-model="order.user.tel">
                              </Field>
                              <error-message name="電話" class="invalid-feedback"></error-message>
                          </div>
                          <div class="mb-3">
                              <label for="email" class="form-label">Email</label>
                              <Field  id="email"
                                      name="信箱"
                                      type="email"
                                      class="form-control"
                                      :class="{ 'is-invalid': errors['信箱'] }"
                                      placeholder="請輸入 Email"
                                      rules="email|required"
                                      v-model="order.user.email">
                              </Field>
                              <error-message name="信箱" class="invalid-feedback"></error-message>
                          </div>
                          <div class="mb-3">
                              <label for="address" class="form-label">地址</label>
                              <Field  id="address"
                                      name="地址"
                                      type="text"
                                      class="form-control"
                                      :class="{ 'is-invalid': errors['地址'] }"
                                      placeholder="請輸入地址"
                                      rules="required"
                                      v-model="order.user.address">
                              </Field>
                              <error-message name="地址" class="invalid-feedback"></error-message>
                          </div>
                          <div class="mb-3">
                            <label for="comment" class="form-label">留言</label>
                            <textarea class="form-control"
                                      id="comment" rows="3"
                                      v-model.trim="order.message">
                            </textarea>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                  <button type="submit" class="btn btn-info">確認</button>
              </div>
            </Form>
        </div>
    </div>
    </div>
</template>
<script>
import Modal from '../../mixins/Modal.vue'
export default {
  props: {
    tempOrder: {
      type: Object,
      required: true
    }
  },
  emits: ['modify-order'],
  data () {
    return {
      order: {
        products: {},
        user: {}
      }
    }
  },
  mixins: [Modal],
  computed: {
    products () {
      return Object.values(this.order.products)
    }
  },
  watch: {
    tempOrder () {
      this.order = this.tempOrder
    }
  },
  methods: {
    sendOder () {
      this.order.products = this.products
      this.$emit('modify-order', this.order)
    }
  }
}
</script>
