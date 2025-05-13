import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { auth } from './routes/auth'

let baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: ['', '/home'],
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Feat',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...baseRoutes, ...auth],
})

export default router