import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '@/views/HomeView.vue'
import Card from '@/views/Card.vue'
import Home from '@/views/Home.vue'
import Payments from '@/views/Payments.vue'
import Credit from '@/views/Credit.vue'
import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue,
      children: [
        {
          path: '/',
          name: 'Cards',
          component: Card
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/payments',
          name: 'Payments',
          component: Payments
        },
        {
          path: '/credit',
          name: 'Credit',
          component: Credit
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        }
      ]
    },
  ]
})

export default router
