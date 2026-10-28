<script>
import ButtonWidget from './ButtonWidget.vue'

export default {
  components: {
    ButtonWidget,
  },
  props: ['buttons'],
  emits: ['click'],
}
</script>

<template>
  <div class="btn-group" role="group">
    <ButtonWidget
      v-for="(button, index) in buttons"
      :key="index"
      :button="button"
      @click="$emit('click', button)"
    />
  </div>
</template>
