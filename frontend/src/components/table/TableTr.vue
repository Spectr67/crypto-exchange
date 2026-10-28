<script>
export default {
  props: {
    classes: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<template>
  <tr :class="classes">
    <slot></slot>
  </tr>
</template>
