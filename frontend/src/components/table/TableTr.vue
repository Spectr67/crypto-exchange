<script>
export default {
  props: ['classes'],
}
</script>

<template>
  <tr :class="classes">
    <slot></slot>
  </tr>
</template>
