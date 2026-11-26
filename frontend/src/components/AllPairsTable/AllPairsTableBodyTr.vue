<script>
import AllPairsTableBodyTd from './AllPairsTableBodyTd.vue'

export default {
  components: { AllPairsTableBodyTd },

  props: ['item'],
}
</script>

<template>
  <tr class="border-bottom border-secondary">
    <td class="ps-2 ps-sm-3">
      <span
        class="badge rounded-circle bg-info text-dark p-2 d-inline-flex align-items-center justify-content-center"
      >
        {{ item.icon }}
      </span>
    </td>

    <td class="fw-bold d-none d-sm-table-cell">
      {{ item.caption }}
    </td>

    <AllPairsTableBodyTd :text="item.lastPrice" classes="text-nowrap d-sm-table-cell" />

    <AllPairsTableBodyTd
      :text="item.diff24h"
      :classes="item.diff24h >= 0 ? 'text-nowrap text-success' : 'text-nowrap text-danger'"
    />

    <AllPairsTableBodyTd
      :text="`${item.volume24h} ${item.caption.split('/')[0]}`"
      classes="text-nowrap d-none d-sm-table-cell"
    />

    <td class="text-end pe-2 pe-sm-3">
      <button class="btn btn-success btn-sm fw-bold d-sm-table-cell" type="button">Trade</button>
    </td>
  </tr>
</template>
