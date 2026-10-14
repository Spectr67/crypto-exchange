<script>
import CoinsTable from '@/components/CoinPageComponents/CoinsTable.vue'
import FilterCoins from '@/components/FilterCoins.vue'
import SearchForm from '@/components/SearchForm.vue'

export default {
  components: {
    CoinsTable,
    FilterCoins,
    SearchForm,
  },

  data() {
    return {
      search: '',
      selectedCategory: 'Все',

      categories: ['Все', 'Популярные', 'Layer 1', 'DeFi', 'Meme'],

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
    }
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

      <CoinsTable :coins="coins" />
    </div>
  </div>
</template>
