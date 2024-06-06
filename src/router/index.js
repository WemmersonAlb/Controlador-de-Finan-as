import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../pages/home/HomeView.vue')
    },
    {
      path:'/login',
      name:'login',
      component: () => import('../pages/login/LoginView.vue')
    }
  ]
})

export default router
