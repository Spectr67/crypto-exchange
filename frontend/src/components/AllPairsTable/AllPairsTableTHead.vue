<script>
import AllPairsTableTr from './AllPairsTableTr.vue'

export default {
  components: { AllPairsTableTr },

  props: ['list'],
}
</script>

<template>
  <thead>
    <AllPairsTableTr :list="list" />
  </thead>
</template>
