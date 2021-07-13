<template>
   <div class="index__page" style="padding-top: 96px;">
      <HeaderComponent></HeaderComponent>
      <router-view></router-view>
      <FooterComponent></FooterComponent>
   </div>
</template>
<script>
import HeaderComponent from '../../components/front/Header.vue'
import FooterComponent from '../../components/front/Footer.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
