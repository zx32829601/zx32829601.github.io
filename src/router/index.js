import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/stock',
      name:'stock',

      component: () => import('../views/StockView.vue')
    },
    {
      path: '/contact',
      name:'contact',

      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/restock',
      name:'restock',
      component: () => import('../views/RestockView.vue')
    },
    {
      path: '/shopping',
      name:'shopping',
      component: () => import('../views/ShoppingView.vue')
    }
  ]
})

export default router
