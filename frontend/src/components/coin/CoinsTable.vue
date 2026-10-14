<script>
import CoinRow from './CoinRow.vue'

export default {
  components: {
    CoinRow,
  },

  props: ['coins'],

  data() {
    return {
      arrayObjs: [
        {
          caption: 'Монета',
          classes: ['ps-3'],
        },
        {
          caption: 'Название',
          classes: ['d-none d-sm-table-cell'],
        },
      ],
    }
  },
}
</script>

<template>
  <div class="border border-secondary rounded bg-body-tertiary">
    <table class="table table-dark table-striped table-hover table-sm align-middle mb-0">
      <thead>
        <tr class="border-bottom border-secondary">
          <UiTh caption="Монета" classes="ps-3" />
          <UiTh caption="Название" classes="d-none d-sm-table-cell" />
          <UiTh caption="Price (USDT)" />

          <UiTh v-for="object of arrayObjs" :key="object.caption" :object="object" />

          <UiTh v-for="(val, key) in obj" :key="object.caption" :object="object" />

          <UiTh :object="{ caption: 'Монета', classes: 'ps-3' }" />

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
