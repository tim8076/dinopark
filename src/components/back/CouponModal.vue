<template>
  <div class="modal fade"
       id="couponModal"
       ref="modal"
       tabindex="-1"
       aria-labelledby="couponModal"
       aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-secondary">
                <h5 class="modal-title" id="exampleModalLabel">建立優惠券</h5>
                <button type="button"
                        class="btn-close"
                        data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
               <div class="container-fluid">
                    <div class="mb-3">
                        <label for="title" class="form-label">
                          優惠卷名稱 <span class="text-primary">*</span>
                        </label>
                        <input type="text"
                               class="form-control"
                               id="title"
                               v-model.trim="coupon.title"
                               placeholder="請輸入名稱">
                    </div>
                    <div class="mb-3">
                        <label for="code" class="form-label">
                          優惠券代碼 <span class="text-primary">*</span>
                        </label>
                        <input type="text"
                               class="form-control"
                               id="code"
                               v-model.trim="coupon.code"
                               placeholder="請輸入代碼">
                    </div>
                    <div class="mb-3">
                        <label for="percent" class="form-label">
                          折扣比率 <span class="text-primary">*</span>
                        </label>
                        <input type="number"
                               class="form-control"
                               id="percent"
                               min="0"
                               v-model.number="coupon.percent"
                               placeholder="請輸入折扣比率 ex: 60">
                    </div>
                    <div class="mb-3">
                        <label for="due_date" class="form-label">
                          到期日 <span class="text-primary">*</span>
                        </label>
                        <input type="date"
                               class="form-control"
                               id="due_date"
                               placeholder="請輸入到期日"
                               @change="setDueDate">
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input"
                               type="checkbox"
                               v-model="coupon.is_enabled"
                               :true-value="1"
                               :false-value="0"
                               id="is_enabled">
                        <label class="form-check-label" for="is_enabled">
                          是否啟用
                        </label>
                      </div>
               </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                <button type="button"
                        class="btn btn-info"
                        :class="{ 'disabled' : disabled }"
                        @click="sendCoupon">確認
                </button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Modal from '../../mixins/Modal.vue'
export default {
  props: {
    tempCoupon: {
      type: Object,
      required: true
    }
  },
  emits: ['send-coupon'],
  mixins: [Modal],
  data () {
    return {
      modal: {},
      coupon: {}
    }
  },
  computed: {
    disabled () {
      if (!this.coupon.title ||
        !this.coupon.code ||
        !this.coupon.percent ||
        !this.coupon.due_date) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    tempCoupon () {
      this.coupon = this.tempCoupon
    }
  },
  methods: {
    setDueDate (e) {
      const date = e.target.value
      const timeStamp = new Date(date).getTime() / 1000
      this.coupon.due_date = timeStamp
    },
    sendCoupon () {
      this.$emit('send-coupon', this.coupon)
    }
  }
}
</script>
