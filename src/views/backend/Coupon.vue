<template>
     <div class="coupon__list fw-bold mb-6">
        <Loading v-model:active="isLoading">
                 <div class="loadingio-spinner-rolling-feeb69z48bi">
                  <div class="ldio-947txsafiul">
                    <div>
                    </div>
                  </div>
                </div>
        </Loading>
        <CouponModal ref="couponModal"
                     :temp-coupon="tempCoupon"
                     @send-coupon="updateCoupon">
        </CouponModal>
        <div class="container p-5 border border-primary">
            <div class="d-flex justify-content-end align-items-center mb-3">
              <button class="btn btn-info"
                      data-bs-target="#couponModal"
                      type="button"
                      @click="openModal(true)">
                  建立優惠券
              </button>
            </div>
            <Alert :text="'設定五折以下折扣，須經由園區主任簽核!!'"
                   :color="'primary'">
            </Alert>
            <div class="table-responsive">
               <table class="table">
                  <thead>
                      <tr class="table-light">
                          <th scope="col" width="240">優惠券名稱</th>
                          <th scope="col" width="120">代碼</th>
                          <th scope="col" width="120">折扣</th>
                          <th scope="col" width="120">到期日</th>
                          <th scope="col" width="120">是否啟用</th>
                          <th scope="col" width="120">操作</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="coupon in coupons" :key="coupon.id">
                          <td>{{ coupon.title }}</td>
                          <td>{{ coupon.code }}</td>
                          <td>{{ coupon.percent }}</td>
                          <td>{{ $dateFormat(coupon.due_date) }}</td>
                          <td>
                            <p v-if="coupon.is_enabled">啟用</p>
                            <p v-else class="text-primary">未啟用</p>
                          </td>
                          <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                              <button type="button"
                                      class="btn btn-outline-info"
                                      @click.prevent="openModal(false, coupon)">
                                      編輯
                              </button>
                              <button type="button"
                                      class="btn btn-outline-danger"
                                      @click.prevent="deleteCoupon(coupon.id)">
                                      刪除
                              </button>
                            </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>
            <Pagination :pagination="pagination"
                        @change-page="getCoupons">
            </Pagination>
        </div>
    </div>
</template>
<script>
import CouponModal from '@/components/back/CouponModal.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      isLoading: false,
      tempCoupon: {
        is_enabled: 0
      },
      coupons: [],
      pagination: {},
      isNew: false
    }
  },
  components: {
    CouponModal,
    Pagination
  },
  methods: {
    openModal (isNew, coupon) {
      if (isNew) {
        this.tempCoupon = {
          is_enabled: 0
        }
      } else {
        this.tempCoupon = { ...coupon }
      }
      this.isNew = isNew
      this.$refs.couponModal.openModal()
    },
    getCoupons (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            const { coupons, pagination } = res.data
            this.coupons = coupons
            this.pagination = pagination
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
    },
    updateCoupon (coupon) {
      this.isLoading = true
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
      let method = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${coupon.id}`
        method = 'put'
      }
      this.$http[method](api, { data: coupon })
        .then(res => {
          if (res.data.success) {
            this.$refs.couponModal.hideModal()
            this.getCoupons()
            this.swal(res.data.message)
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
    },
    deleteCoupon (id) {
      this.swalComfirm('確認刪除優惠券?')
        .then(willDelete => {
          if (willDelete.isConfirmed) {
            this.isLoading = true
            const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
            this.$http.delete(api)
              .then(res => {
                if (res.data.success) {
                  this.getCoupons()
                  this.swal(res.data.message)
                } else {
                  this.swal(res.data.message, 'error')
                }
              })
          }
        })
    }
  },
  mounted () {
    this.getCoupons()
  }
}
</script>
