<script>
export default {
  props: ['classes', 'tag'],
}
</script>

<template>
  <component :is="tag || 'td'" :class="classes">
    <slot></slot>
  </component>
</template>
