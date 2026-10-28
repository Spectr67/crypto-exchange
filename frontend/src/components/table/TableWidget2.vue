<script>
import TableBody from './TableBody.vue'
import TableHead from './TableHead.vue'
import TableTd from './TableTd.vue'
import TableTr from './TableTr.vue'

export default {
  components: {
    TableHead,
    TableBody,
    TableTr,
    TableTd,
  },

  props: ['rowsFormatted', 'tableClasses'],

  props: {
    headers: {
      type: Array,
      default: () => [],
    },

    rows: {
      type: Array,
      default: () => [],
    },

    classes: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<template>
  <div class="border border-secondary rounded bg-body-tertiary">
    <table :class="['table', ...classes]">
      <TableHead>
        <TableTr class="border-bottom border-secondary">
          <th v-for="(val, key) in tableClasses.th" :key="key" :class="val">
            {{ key }}
          </th>
        </TableTr>
      </TableHead>

      <TableBody>
        <TableTr
          v-for="row of rowsFormatted"
          :key="row.caption"
          classes="border-bottom border-secondary"
        >
          <TableTd v-for="(val, key) in row" :key="val" :classes="tableClasses.td[key]">
            <template v-if="cell.type === 'coin'">
              <div class="d-flex align-items-center gap-2">
                <span
                  :class="[
                    'd-flex',
                    'align-items-center',
                    'justify-content-center',
                    'rounded-circle',
                    'bg-' + cell.color,
                    'text-dark',
                    'fw-bold',
                  ]"
                  style="width: 32px; height: 32px; min-width: 32px"
                >
                  {{ cell.icon }}
                </span>

                <span class="fw-bold">{{ cell.value }}</span>
              </div>
            </template>

            <template v-else-if="cell.type === 'actions'">
              <button class="btn btn-success btn-sm fw-bold" @click="$router.push('/deposit')">
                Депозит
              </button>

              <button
                class="btn btn-outline-secondary btn-sm ms-1 d-none d-sm-inline-block"
                @click="$router.push('/withdraw')"
              >
                Вывод
              </button>
            </template>

            <template v-else>
              {{ cell.value }}
            </template>
          </TableTd>
        </TableTr>

        <TableTr v-if="rows.length === 0">
          <TableTd :colspan="headers.length" :classes="['text-center', 'text-secondary', 'py-4']">
            Монеты не найдены
          </TableTd>
        </TableTr>
      </TableBody>
    </table>
  </div>
</template>
