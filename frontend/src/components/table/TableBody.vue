<script>
import TableTr from './TableTr.vue'
import TableTd from './TableTd.vue'

export default {
  components: {
    TableTr,
    TableTd,
  },

  props: ['rowsFormatted', 'tableClasses'],

  emits: ['deposit', 'withdraw'],
}
</script>

<template>
  <tbody>
    <TableTr v-for="(item, index) in rowsFormatted" :key="item.id || index">
      <TableTd v-for="(className, propKey) in tableClasses.td" :key="propKey" :classes="className">
        <template v-if="propKey === 'coin'">
          <div class="d-flex align-items-center gap-2">
            <span
              class="rounded-circle bg-body-secondary border border-secondary d-inline-flex align-items-center justify-content-center"
              style="width: 32px; height: 32px"
              :class="`text-${item.coin.color}`"
            >
              {{ item.coin.icon }}
            </span>

            <span class="fw-bold">
              {{ item.coin.symbol }}
            </span>
          </div>
        </template>

        <template v-else-if="propKey === 'change'">
          <span :class="item.change.color">
            {{ item.change.value }}
          </span>
        </template>

        <!-- <template v-else-if="propKey === 'actions'">
          <button class="btn btn-success btn-sm" @click="$emit('deposit', item.coin.symbol)">
            Депозит
          </button>

          <button
            class="btn btn-outline-secondary btn-sm ms-1 d-none d-sm-inline-block"
            @click="$emit('withdraw', item.coin.symbol)"
          >
            Вывод
          </button>
        </template> -->

        <template v-else>
          {{ item[propKey] }}
        </template>
      </TableTd>
    </TableTr>
  </tbody>
</template>
