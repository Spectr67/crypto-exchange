import { createRouter, createWebHistory } from 'vue-router'
import PageExample from '../Pages/PageExample.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/example',
      component: PageExample,
    },
  ],
})

export default router
