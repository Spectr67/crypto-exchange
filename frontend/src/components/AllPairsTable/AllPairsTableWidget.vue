<script>
import AllPairsTableBody from './AllPairsTableBody.vue'
import AllPairsTableTHead from './AllPairsTableTHead.vue'

export default {
  components: { AllPairsTableTHead, AllPairsTableBody },
  data() {
    return {
      headers: [
        {
          text: 'icons',
          classes: 'ps-3',
        },
        {
          text: 'caption',
          classes: 'd-none d-md-table-cell',
        },
        {
          text: 'lastPrice',
          classes: 'd-none d-sm-table-cell',
        },
        {
          text: 'volume24h',
          classes: 'd-none d-sm-table-cell',
        },
        {
          text: 'diff24h',
          classes: 'd-none d-md-table-cell',
        },
        {
          text: 'trade',
          classes: 'text-end pe-3',
        },
      ],
      pairs: [
        {
          id: 1,
          icon: '₿',
          caption: 'BTC/USDT',
          lastPrice: 0,
          volume24h: 0,
          diff24h: 10,
        },
        {
          id: 2,
          icon: 'Ξ',
          caption: 'ETH/USDT',
          lastPrice: 0,
          volume24h: 0,
          diff24h: -10,
        },
        {
          id: 3,
          icon: 'S',
          caption: 'SOL/USDT',
          lastPrice: 0,
          volume24h: 0,
          diff24h: 0,
        },
      ],
    }
  },
}
</script>

<template>
  <table class="table table-dark table-striped table-hover table-sm align-middle mb-0">
    <AllPairsTableTHead :list="headers" />
    <AllPairsTableBody :pairs="pairs" />
  </table>
</template>
