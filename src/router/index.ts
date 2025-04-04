import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { components } from 'vuetify/dist/vuetify.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../templates/Full.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
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
      ]
    },
    {
      path: '/dash',
      name: 'dash',
      component: () => import('../templates/Blank.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ],
})

export default router
