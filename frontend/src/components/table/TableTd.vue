<script>
export default {
  props: {
    classes: {
      type: Array,
      default: () => [],
    },
    colspan: {
      type: Number,
      default: null,
    },
  },
}
</script>

<template>
  <td :class="classes" :colspan="colspan">
    <slot></slot>
  </td>
</template>
