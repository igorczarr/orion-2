import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LongSalesLetter',
    component: () => import('../views/LongSalesLetter.vue')
  },
  {
    path: '/vsl',
    name: 'VSLPage',
    component: () => import('../views/VSLPage.vue')
  },
  {
    path: '/obrigado',
    name: 'Obrigado',
    component: () => import('../views/Obrigado.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
