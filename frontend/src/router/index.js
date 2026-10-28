import { createRouter, createWebHistory } from 'vue-router'
import PageExample from '../../pagesInProgress/PageExample.vue'
import PageBids from '../../pagesInProgress/PageBids.vue'
import PageCandles from '../../pagesInProgress/PageCandles.vue'
import PageDepost from '@/pages/PageDepost.vue'
import PageHistory from '../../pagesInProgress/PageHistory.vue'
import PageMaker from '../../pagesInProgress/PageMaker.vue'
import PageOrders from '../../pagesInProgress/PageOrders.vue'
import PagePairs from '../../pagesInProgress/PagePairs.vue'
import PageTaker from '../../pagesInProgress/PageTaker.vue'
import PageTrader from '@/pages/PageTrader.vue'
import PageWallet from '@/pages/PageWallet.vue'
import PageWithdraw from '@/pages/PageWithdraw.vue'
import PageDepositSuccess from '../../pagesInProgress/PageDepositSuccess.vue'
import PageAllPairs from '@/pages/PageAllPairs.vue'

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
      path: '/pairs',
      component: PageAllPairs,
    },
    {
      path: '/deposit',
      component: PageDepost,
      props: (route) => ({ symbol: route.query.symbol }),
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
    {
      path: '/deposit-success',
      component: PageDepositSuccess,
    },
  ],
})

export default router
