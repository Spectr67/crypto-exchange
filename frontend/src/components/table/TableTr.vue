<script>
import TableTd from './TableTd.vue'

export default {
  components: {
    TableTd,
  },

  props: ['item', 'styles'],
}
</script>

<template>
  <tr>
    <TableTd
      v-for="(propVal, propKey) of item"
      :key="propKey"
      :prop-key="propKey"
      :prop-val="propVal"
      :styles="styles"
    />
  </tr>
</template>
