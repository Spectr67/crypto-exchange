<script>
import CoinRow from './CoinRow.vue'

export default {
  components: {
    CoinRow,
  },

  props: {
    coins: {},
  },
}
</script>

<template>
  <div class="border border-secondary rounded bg-body-tertiary">
    <table class="table table-dark table-striped table-hover table-sm align-middle mb-0">
      <thead>
        <tr class="border-bottom border-secondary">
          <th class="py-2 text-body-secondary small ps-3">Монета</th>

          <th class="py-2 text-body-secondary small d-none d-sm-table-cell">Название</th>

          <th class="py-2 text-body-secondary small">Price (USDT)</th>

          <th class="py-2 text-body-secondary small">24ч</th>

          <th class="py-2 text-body-secondary small d-none d-md-table-cell">Volume</th>

          <th class="py-2 text-body-secondary small text-end pe-3">Действия</th>
        </tr>
      </thead>

      <tbody>
        <CoinRow v-for="coin in coins" :key="coin.symbol" :coin="coin" />

        <tr v-if="coins.length === 0">
          <td colspan="6" class="text-center text-secondary py-4">Монеты не найдены</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
