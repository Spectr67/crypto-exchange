<script>
import TableHead from './TableHead.vue'
import TableTr from './TableTr.vue'

export default {
  components: {
    TableHead,
    TableTr,
  },

  props: ['list', 'styles', 'tableClasses'],
}
</script>

<template>
  <table :class="tableClasses">
    <TableHead :styles="styles" />

    <tbody>
      <TableTr v-for="(item, index) of list" :key="index" :item="item" :styles="styles" />
    </tbody>
  </table>
</template>
