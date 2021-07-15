
<script>
export default {
  methods: {
    $dateFormat (timeStamp) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      return new Date(timeStamp * 1000).toLocaleDateString(undefined, options)
    },
    $dateYYYYMMDD (timeStamp) {
      const date = new Date(timeStamp * 1000)
      const mm = date.getMonth() + 1
      const dd = date.getDate()
      const year = date.getFullYear()
      return `${year}-${`${mm > 9 ? '' : '0'}` + mm}-${`${dd > 9 ? '' : '0'}` + dd}`
    },
    $toCurrency (num) {
      const parts = num.toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
  }
}
</script>
