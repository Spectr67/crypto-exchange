import { createRouter, createWebHistory } from 'vue-router'
import PageExample from '../Pages/PageExample.vue'
import PageBids from '@/Pages/PageBids.vue'
import PageCandles from '@/Pages/PageCandles.vue'
import PageCoins from '@/Pages/PageCoins.vue'
import PageDepost from '@/Pages/PageDepost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/example',
      component: PageExample,
    },
    {
      path: '/bids',
      component: PageBids,
    },
    {
      path: '/candles',
      component: PageCandles,
    },
    {
      path: '/coins',
      component: PageCoins,
    },
    {
      path: '/deposit',
      component: PageDepost,
    },
  ],
})

export default router
