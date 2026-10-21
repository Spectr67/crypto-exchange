<script>
export default {
  props: ['object'],
}
</script>

<template>
  <th class="py-2 text-body-secondary small" :class="object[1]">
    {{ object[0] }}
  </th>
</template>
