<script>
import AllPairsHeader from '@/components/AllPairsTable/AllPairsHeader.vue'
import FilterCoins from '@/components/FilterCoins.vue'
import HeaderSearchForm from '@/components/HeaderSearchForm.vue'

export default {
  components: { AllPairsHeader, FilterCoins, HeaderSearchForm },

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

      <div class="bg-body-tertiary p-3 rounded-3 w-100">
        <div class="overflow-y-auto" style="max-height: 360px">
          <table></table>
        </div>
      </div>
    </div>
  </main>
</template>
