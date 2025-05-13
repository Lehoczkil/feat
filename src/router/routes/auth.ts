import type { RouteRecordRaw } from 'vue-router';

export const auth: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../../views/Login.vue'),
    meta: {
      title: 'Feat - Login'
    }
  }
]
