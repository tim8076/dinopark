<template>
   <div class="panel"
        :class="{ 'w-80' : info.w_80 }">
        <div class="panel__header">
            <span>注意事項</span>
            <button type="button"
                    class="btn"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#${info.id}`"
                    @click="is_expanded = !is_expanded">
              <span class="material-icons" v-if="is_expanded">expand_more</span>
              <span class="material-icons" v-else>expand_less</span>
            </button>
        </div>
        <div class="collapse show"
             :id="info.id">
            <div class="panel__body">
                <ol class="list">
                    <li class="list__item"
                        v-for="text in info.listText"
                        :key="text">
                        {{ text }}
                    </li>
                </ol>
            </div>
        </div>
   </div>
</template>
<script>
export default {
  props: {
    panelInfo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      info: {},
      is_expanded: true
    }
  },
  created () {
    this.info = this.panelInfo
  }
}
</script>
