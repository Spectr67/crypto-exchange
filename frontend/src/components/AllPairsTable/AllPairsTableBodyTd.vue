<script>
export default {
  props: ['text', 'classes'],
}
</script>

<template>
  <td :class="classes">
    {{ text }}
  </td>
</template>
