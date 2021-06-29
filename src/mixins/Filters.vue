
<script>
export default {
  methods: {
    $dateFormat (timeStamp) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      return new Date(timeStamp * 1000).toLocaleDateString(undefined, options)
    },
    $toCurrency (num) {
      const parts = num.toString().split('.')
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      return parts.join('.')
    }
  }
}
</script>
