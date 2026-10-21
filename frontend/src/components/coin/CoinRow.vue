<script>
import CoinActions from './CoinActions.vue'

export default {
  components: {
    CoinActions,
  },

  props: {
    coin: {},
  },
}
</script>

<template>
  <tr>
    <td class="ps-2 ps-sm-3 fw-bold">
      <div class="d-flex align-items-center gap-2">
        <span
          class="badge rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
          :class="[
            `bg-${coin.color}`,
            ['warning', 'info'].includes(coin.color) ? 'text-dark' : 'text-white',
          ]"
        >
          {{ coin.icon }}
        </span>

        <span>{{ coin.symbol }}</span>
      </div>
    </td>

    <td class="text-body-secondary d-none d-sm-table-cell">
      {{ coin.coinName }}
    </td>

    <td class="text-nowrap">
      {{
        coin.lastPrice.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      }}
    </td>

    <td
      class="text-nowrap"
      :class="
        coin.changePercent > 0
          ? 'text-success'
          : coin.changePercent < 0
            ? 'text-danger'
            : 'text-body-secondary'
      "
    >
      {{ coin.changePercent > 0 ? '+' : '' }}{{ coin.changePercent.toFixed(2) }}%
    </td>

    <td class="d-none d-md-table-cell text-nowrap">
      {{ coin.volume }}
    </td>

    <td class="text-end pe-2 pe-sm-3">
      <CoinActions :coin="coin" />
    </td>
  </tr>
</template>
