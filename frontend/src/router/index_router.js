import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index_home.vue')
const Feedbacks = () => import('../views/Feedbacks/index_feedbacks.vue')
const Credencials = () => import('../views/Credencials/index_credencials.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hashAuth: true
    }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hashAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
