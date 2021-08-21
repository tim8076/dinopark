<template>
    <div class="order__list">
        <Loading v-model:active="isLoading">
          <div class="outter-spinner">
              <div class="inner-spinner">
                  <div>
                  </div>
              </div>
          </div>
        </Loading>
        <OrderModal ref="orderModal"
                    :temp-order="tempOrder"
                    @modify-order="modifyOrder" />
        <div class="container p-5 border border-primary">
            <Alert :text="'刪除全部訂單，須經由園區主任簽核!!'"
                   :color="'primary'" />
            <div class="d-flex justify-content-end align-items-center mb-3">
              <button class="btn btn-outline-primary"
                      :class="{ 'disabled' : !orders.length }"
                      type="button"
                      @click="deleteAllOrders">
                  刪除全部訂單
              </button>
            </div>
            <div class="table-responsive fw-bold">
               <table class="table">
                  <thead>
                      <tr class="table-light">
                          <th scope="col" width="240">訂單編號</th>
                          <th scope="col" width="120">訂單日期</th>
                          <th scope="col" width="120">訂單金額</th>
                          <th scope="col" width="120">是否付款</th>
                          <th scope="col" width="120">操作</th>
                      </tr>
                  </thead>
                  <tbody>
                     <tr v-for="order in orders" :key="order.id">
                         <td>{{ order.id }}</td>
                         <td>{{ $dateFormat(order.create_at)}}</td>
                         <td>NT$ {{ $toCurrency(Math.round(order.total)) }}</td>
                         <td>
                            <p v-if="order.is_paid">已付款</p>
                            <p v-else class="text-primary">未付款</p>
                         </td>
                         <td>
                             <div class="btn-group" role="group" aria-label="Basic example">
                              <button type="button"
                                      class="btn btn-outline-info"
                                      @click="openModal(order)">
                                      查看
                              </button>
                              <button type="button"
                                      class="btn btn-outline-danger"
                                      @click="deleteOrder(order.id)">
                                      刪除
                              </button>
                            </div>
                         </td>
                     </tr>
                  </tbody>
              </table>
            </div>
            <Pagination :pagination="pagination"
                        @change-page="getOrders" />
        </div>
    </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import OrderModal from '@/components/back/OrderModal.vue'

export default {
  data () {
    return {
      isLoading: false,
      orders: [],
      pagination: {},
      tempOrder: {}
    }
  },
  components: {
    Pagination,
    OrderModal
  },
  methods: {
    openModal (order) {
      this.tempOrder = JSON.parse(JSON.stringify(order))
      this.$refs.orderModal.openModal()
    },
    getOrders (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(api)
        .then(res => {
          if (res.data.success) {
            const { orders, pagination } = res.data
            this.orders = orders
            this.pagination = pagination
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
        })
        .catch(err => console.log(err))
    },
    modifyOrder (order) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${order.id}`
      this.$http.put(api, {
        data: order
      })
        .then(res => {
          if (res.data.success) {
            this.getOrders(this.pagination.current_page)
            this.swal(res.data.message)
          } else {
            this.swal(res.data.message, 'error')
          }
          this.isLoading = false
          this.$refs.orderModal.hideModal()
        })
        .catch(err => console.log(err))
    },
    deleteOrder (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      this.swalComfirm('確認刪除訂單?')
        .then(willDelete => {
          if (willDelete.isConfirmed) {
            this.isLoading = true
            this.$http.delete(api)
              .then(res => {
                if (res.data.success) {
                  this.getOrders(this.pagination.current_page)
                  this.swal(res.data.message)
                } else {
                  this.swal(res.data.message, 'error')
                }
                this.isLoading = false
              })
              .catch(err => console.log(err))
          }
        })
    },
    deleteAllOrders () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/all`
      this.swalComfirm('確認刪除全部訂單?')
        .then(willDelete => {
          if (willDelete.isConfirmed) {
            this.isLoading = true
            this.$http.delete(api)
              .then(res => {
                if (res.data.success) {
                  this.getOrders(this.pagination.current_page)
                  this.swal(res.data.message)
                } else {
                  this.swal(res.data.message, 'error')
                }
                this.isLoading = false
              })
              .catch(err => console.log(err))
          }
        })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
