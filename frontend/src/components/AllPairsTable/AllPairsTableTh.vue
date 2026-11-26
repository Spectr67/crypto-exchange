<script>
export default {
  props: ['text', 'classes'],
}
</script>

<template>
  <th :class="['py-2 text-body-secondary small', classes]">
    {{ text }}
  </th>
</template>
