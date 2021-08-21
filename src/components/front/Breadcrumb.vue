<template>
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb fs-5">
            <li class="breadcrumb-item">
                <router-link to="/dino-park/home" class="text-dark">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link :to="breadcrumb.link2.link" class="text-dark">
                  {{ breadcrumb.link2.title }}
                </router-link>
            </li>
            <li class="breadcrumb-item"
                v-if="breadcrumb.link3.show">
                {{ breadcrumb.link3.title }}
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
  props: {
    breadcrumb: {
      type: Object,
      required: true
    }
  }
}
</script>
