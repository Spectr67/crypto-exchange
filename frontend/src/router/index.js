import { createRouter, createWebHistory } from 'vue-router'
import PageExample from '../Pages/PageExample.vue'
import PageBids from '@/Pages/PageBids.vue'
import PageCandles from '@/Pages/PageCandles.vue'

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
  ],
})

export default router
