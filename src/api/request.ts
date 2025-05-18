import axios from 'axios';
import { useAuthStore } from '@/store/auth';
import { storeToRefs } from 'pinia';

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(async (config) => {
  try {
    const authStore = useAuthStore();
    const { csrfToken, lang, isAuthenticated } = storeToRefs(authStore);

    if (!config.url?.startsWith('/auth')) {
      if (!isAuthenticated.value) {
        throw new axios.Cancel('User not authenticated');
      }
    }

    if (csrfToken.value) {
      config.headers['X-XSRF-TOKEN'] = csrfToken.value;
      config.headers['Accept-Language'] = lang.value;
      config.headers['Content-Language'] = lang.value;
    }
  } catch (error) {
    console.error(error);
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const authStore = useAuthStore();
    
    if (error.config?.url?.includes('/auth/login')) {
      return Promise.reject(error);
    }

    if (error.config?.url !== '/auth/user' && error.response?.status === 401) {
      await authStore.logout();
    }
    return Promise.reject(error);
  }
);

export default api;