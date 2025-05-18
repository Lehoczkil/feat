import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { requiresAuth: false }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to) => {
  const authStore = useAuthStore();

  if (to.name === 'Login') {
    if (authStore.isAuthenticated) {
      return { name: 'Home' };
    }
    return;
  }

  if (to.meta.requiresAuth) {
    const user = await authStore.fetchUser();
    if (!user) {
      return { name: 'Login' };
    }
  }

  return;
});

export default router;