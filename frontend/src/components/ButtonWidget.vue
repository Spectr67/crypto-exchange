<script>
export default {
  props: ['title', 'classes'],

  emits: ['click'],
}
</script>
<template>
  <button :class="classes" @click="$emit('click')">
    {{ title }}
  </button>
</template>
