
<template>
    <div class="alert alert-dismissible fade show d-flex align-items-center"
        :class="alertSetting"
        ref="alert"
        role="alert">
        <div>
            {{ text }}
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      alertSetting: {
        'alert-primary': this.color === 'primary',
        'alert-secondary': this.color === 'secondary',
        'alert-success': this.color === 'success'
      }
    }
  }
}
</script>
