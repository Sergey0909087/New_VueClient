import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from '../constan'
import Home from  '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: Home
    },
    



  ]
})

export default router
