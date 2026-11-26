<script>
import AllPairsTableTh from './AllPairsTableTh.vue'

export default {
  components: { AllPairsTableTh },

  props: ['list'],
}
</script>

<template>
  <tr class="border-bottom border-secondary">
    <AllPairsTableTh
      v-for="item in list"
      :key="item.text"
      :text="item.text"
      :classes="item.classes"
    />
  </tr>
</template>
