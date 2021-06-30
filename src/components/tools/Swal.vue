
<script>
export default {
  methods: {
    swal (msg, icon = 'success') {
      let showButtons = false
      let time = 1800
      if (icon === 'error') {
        showButtons = true
        time = false
      }
      this.$swal({
        icon: icon,
        title: msg,
        toast: true,
        position: 'top',
        showConfirmButton: showButtons,
        timer: time
      })
    },
    swalComfirm (msg) {
      return this.$swal({
        title: msg,
        showConfirmButton: true,
        showCancelButton: true,
        reverseButtons: true,
        icon: 'warning'
      })
    }
  }
}
</script>
