<script>
import AllPairsTableWidget from '@/components/AllPairsTable/AllPairsTableWidget.vue'
import FilterCoins from '@/components/FilterCoins.vue'
import HeaderSearchForm from '@/components/HeaderSearchForm.vue'

export default {
  components: { FilterCoins, HeaderSearchForm, AllPairsTableWidget },

  data() {
    return {
      categories: ['All', 'Popular', 'Layer 1', 'DeFi', 'Meme'],
    }
  },
}
</script>

<template>
  <main>
    <div class="container pt-3">
      <h4 class="mb-3 text-light">All Pairs</h4>

      <div
        class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2 mb-3"
      >
        <span
          class="badge bg-body-tertiary text-secondary border border-secondary align-self-start align-self-sm-auto"
        >
          All Pairs: 6
        </span>
      </div>

      <div class="row g-2 mb-3">
        <HeaderSearchForm />
        <FilterCoins :categories="categories" />
      </div>

      <div class="border border-secondary rounded bg-body-tertiary">
        <AllPairsTableWidget />
      </div>
    </div>
  </main>
</template>
