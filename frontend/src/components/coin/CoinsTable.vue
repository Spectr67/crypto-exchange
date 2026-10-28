<script>
import CoinRow from './CoinRow.vue'
import UiTh from './UiTh.vue'

export default {
  components: {
    CoinRow,
    UiTh,
  },

  props: ['coins'],

  data() {
    return {
      // arrayObjs: {
      //   Монета: 'ps-3',
      //   Название: 'd-none d-sm-table-cell',
      //   'Price (USDT)': '',
      //   '24ч': '',
      //   Volume: 'd-none d-md-table-cell',
      //   Действия: 'text-end pe-3',
      // },
      arrayObjs: [
        ['Монета', 'ps-3'],
        ['Название', 'd-none d-sm-table-cell'],
        ['Price (USDT)', ''],
        ['24ч', ''],
        ['Volume', 'd-none d-md-table-cell'],
        ['Действия', 'text-end pe-3'],
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
          <UiTh v-for="(object, index) in arrayObjs" :key="index" :object="object" />
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
