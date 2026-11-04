<script>
import TableTr from './TableTr.vue'
import TableTd from './TableTd.vue'

export default {
  components: {
    TableTr,
    TableTd,
  },

  props: ['headers'],
}
</script>

<template>
  <thead>
    <TableTr>
      <TableTd v-for="(header, index) in headers" :key="index" :classes="header[1]" tag="th">
        {{ header[0] }}
      </TableTd>
    </TableTr>
  </thead>
</template>
