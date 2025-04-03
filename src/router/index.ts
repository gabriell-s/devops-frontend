import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/full',
      name: 'home',
      component: () => import('@/templates/Full.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../models/Register.vue'),
    },
    {
      path: '/server',
      name: 'server',
      component: () => import('../views/ServerView.vue'),
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('../views/BookView.vue'),
    },
  ],
})

export default router
