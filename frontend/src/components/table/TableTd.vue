<script>
import ButtonWidget from '../ButtonWidget.vue'

export default {
  components: {
    ButtonWidget,
  },

  props: ['propKey', 'propVal', 'styles'],

  emits: ['click'],
}
</script>
<template>
  <td :class="[styles[propKey], propVal.classes]">
    <div v-if="propVal.icon" class="d-flex align-items-center gap-2">
      <span
        :class="[
          'badge rounded-circle p-2 d-inline-flex align-items-center justify-content-center',
          propVal.iconClasses,
        ]"
      >
        {{ propVal.icon }}
      </span>

      <span>{{ propVal.value }}</span>
    </div>

    <ButtonWidget
      v-else-if="propVal.button"
      :title="propVal.button"
      :classes="propVal.buttonClasses"
      @click="$emit('click')"
    />

    <template v-else>
      {{ propVal.value ?? propVal }}
    </template>
  </td>
</template>
