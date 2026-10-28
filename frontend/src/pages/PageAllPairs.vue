<script>
import FilterCoins from '@/components/FilterCoins.vue'
import SearchForm from '@/components/SearchForm.vue'
import TableWidget from '@/components/table/TableWidget.vue'

export default {
  components: {
    FilterCoins,
    SearchForm,
    TableWidget,
  },

  data() {
    return {
      categories: ['Все', 'Популярные', 'Layer 1', 'DeFi', 'Meme'],

      // headers: [
      //   ['Монета', 'ps-2 ps-sm-3'],
      //   ['Название', 'd-none d-sm-table-cell'],
      //   ['Цена', 'text-end'],
      //   ['Изменение за 24ч', 'd-none d-md-table-cell text-end'],
      //   ['Объём', 'd-none d-lg-table-cell text-end'],
      //   ['Действия', 'text-end pe-2 pe-sm-3'],
      // ],

      coins: [
        {
          symbol: 'BTC',
          coinName: 'Bitcoin',
          lastPrice: 65100,
          changePercent: 2.45,
          volume: '0.0450 BTC',
          icon: '₿',
          color: 'warning',
        },
        {
          symbol: 'ETH',
          coinName: 'Ethereum',
          lastPrice: 3450.2,
          changePercent: -1.12,
          volume: '1.2500 ETH',
          icon: 'Ξ',
          color: 'primary',
        },
        {
          symbol: 'USDT',
          coinName: 'Tether USD',
          lastPrice: 1,
          changePercent: 0,
          volume: '1,250.00 USDT',
          icon: '₮',
          color: 'success',
        },
        {
          symbol: 'SOL',
          coinName: 'Solana',
          lastPrice: 148.8,
          changePercent: 5.8,
          volume: '0.0000 SOL',
          icon: 'S',
          color: 'info',
        },
        {
          symbol: 'TON',
          coinName: 'Toncoin',
          lastPrice: 6.75,
          changePercent: 0.95,
          volume: '150.0000 TON',
          icon: '💎',
          color: 'info',
        },
        {
          symbol: 'DOGE',
          coinName: 'Dogecoin',
          lastPrice: 0.125,
          changePercent: -3.4,
          volume: '0.0000 DOGE',
          icon: 'Ð',
          color: 'warning',
        },
      ],

      pairsFromBackend: [
        {
          id: 1,
          caption: 'BTC/USDT',
          lastPrice: 0,
          volume24h: 0,
          diff24h: 0,
        },
      ],

      // computed
      rowsFormatted: [
        {
          caption: 'BTC/USDT',
          lastPrice: (0).toPrecision(2),
          volume24h: 0,
          diff24h: '+10%',
          // diff24h_color:
          //   pair.diff24h > 0 ? 'text-success' : pair.diff24h < 0 ? 'text-danger' : 'text-secondary',
        },
      ],

      tableClasses: {
        th: {
          caption: 'ps-2 ps-sm-3',
          lastPrice: 'd-none d-sm-table-cell',
          volume24h: 'text-end fw-bold text-nowrap',
          diff24h: 'text-end fw-bold text-nowrap',
        },
        td: {
          caption: 'ps-2 ps-sm-3',
          lastPrice: 'd-none d-sm-table-cell text-secondary',
          volume24h: 'text-end fw-bold text-nowrap',
          diff24h: 'text-end fw-bold text-nowrap',
        },
      },
    }
  },

  computed: {
    tableRows() {
      return this.coins.map((coin) => ({
        id: coin.symbol,

        // cols
        cells: [
          {
            type: 'coin',
            value: coin.symbol,
            icon: coin.icon,
            color: coin.color,
            classes: ['ps-2', 'ps-sm-3'],
          },
          {
            value: coin.coinName,
            classes: ['d-none', 'd-sm-table-cell', 'text-secondary'],
          },
          {
            value:
              coin.lastPrice.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }) + ' USDT',
            classes: ['text-end', 'fw-bold', 'text-nowrap'],
          },
          {
            value: (coin.changePercent > 0 ? '+' : '') + coin.changePercent + '%',
            classes: [
              'd-none',
              'd-md-table-cell',
              'text-end',
              'text-nowrap',
              coin.changePercent > 0
                ? 'text-success'
                : coin.changePercent < 0
                  ? 'text-danger'
                  : 'text-secondary',
            ],
          },
          {
            value: coin.volume,
            classes: ['d-none', 'd-lg-table-cell', 'text-end', 'text-secondary', 'text-nowrap'],
          },
          {
            type: 'actions',
            classes: ['text-end', 'pe-2', 'pe-sm-3', 'text-nowrap'],
          },
        ],
      }))
    },
  },
}
</script>

<template>
  <div class="container pt-3">
    <div class="container-fluid container-md p-0">
      <div
        class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2 mb-3"
      >
        <h4 class="mb-3 text-light">Доступные активы</h4>

        <span
          class="badge bg-body-tertiary text-secondary border border-secondary align-self-start align-self-sm-auto"
        >
          Всего монет: {{ coins.length }}
        </span>
      </div>

      <div class="row g-2 mb-3">
        <SearchForm />

        <FilterCoins :categories="categories" />
      </div>

      <TableWidget
        :show-actions="true"
        :rows-formatted
        :table-classes
        :headers="headers"
        :rows="tableRows"
        :classes="['table-dark', 'table-hover', 'align-middle', 'mb-0']"
      />
    </div>
  </div>
</template>
