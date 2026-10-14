import { createRouter, createWebHistory } from 'vue-router'
import PageExample from '@/pages/PageExample.vue'
import PageBids from '@/pages/PageBids.vue'
import PageCandles from '@/pages/PageCandles.vue'
import PageCoins from '@/pages/PageCoins.vue'
import PageDepost from '@/pages/PageDepost.vue'
import PageHistory from '@/pages/PageHistory.vue'
import PageMaker from '@/pages/PageMaker.vue'
import PageOrders from '@/pages/PageOrders.vue'
import PagePairs from '@/pages/PagePairs.vue'
import PageTaker from '@/pages/PageTaker.vue'
import PageTrader from '@/pages/PageTrader.vue'
import PageWallet from '@/pages/PageWallet.vue'
import PageWithdraw from '@/pages/PageWithdraw.vue'

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
    {
      path: '/history',
      component: PageHistory,
    },
    {
      path: '/maker',
      component: PageMaker,
    },
    {
      path: '/orders',
      component: PageOrders,
    },
    {
      path: '/pairs',
      component: PagePairs,
    },
    {
      path: '/taker',
      component: PageTaker,
    },
    {
      path: '/trader',
      component: PageTrader,
    },
    {
      path: '/wallet',
      component: PageWallet,
    },
    {
      path: '/withdraw',
      component: PageWithdraw,
    },
  ],
})

export default router
