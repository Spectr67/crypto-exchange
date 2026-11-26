<script>
import AllPairsTableBodyTr from './AllPairsTableBodyTr.vue'

export default {
  components: { AllPairsTableBodyTr },

  props: ['pairs'],
}
</script>

<template>
  <tbody>
    <AllPairsTableBodyTr v-for="item in pairs" :key="item.id" :item="item" />
  </tbody>
</template>
