<template>
   <div class="index__page" style="padding-top: 96px;">
      <HeaderComponent />
      <router-view />
      <FooterComponent />
   </div>
</template>

<script>
import HeaderComponent from '@/components/front/HeaderComponent.vue'
import FooterComponent from '@/components/front/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
