<script>
export default {
  props: ['button'],
  emits: ['click'],
}
</script>

<template>
  <button :type="button.type" :class="['btn', `btn-${button.variant}`]" @click="$emit('click')">
    {{ button.caption }}
  </button>
</template>
