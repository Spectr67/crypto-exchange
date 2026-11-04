<script>
import TableHead from './TableHead.vue'
import TableBody from './TableBody.vue'

export default {
  components: {
    TableHead,
    TableBody,
  },

  props: ['rowsFormatted', 'tableClasses', 'classes', 'headers'],

  emits: ['deposit', 'withdraw'],
}
</script>

<template>
  <div class="border border-secondary rounded bg-body-tertiary">
    <table :class="['table', classes]">
      <TableHead :headers="headers" />

      <TableBody
        :rows-formatted="rowsFormatted"
        :table-classes="tableClasses"
        @deposit="$emit('deposit', $event)"
        @withdraw="$emit('withdraw', $event)"
      />
    </table>
  </div>
</template>
