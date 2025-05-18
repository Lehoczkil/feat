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
        const { csrfToken } = storeToRefs(useAuthStore());
        
        if (csrfToken) {
          config.headers['X-XSRF-TOKEN'] = csrfToken;
        }
      } catch (error) {
        console.error(error);
      }
  return config;
});


api.interceptors.response.use(
    (response) => response,
    (error) => {
    const authStore = useAuthStore();
    if (error.config.url !== '/auth/user' && error.response?.status === 401) {
      authStore.logout();
    }
    return Promise.reject(error);
  }
);

export default api;