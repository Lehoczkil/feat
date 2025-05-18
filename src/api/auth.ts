import api from './request';
import type { User, LoginCredentials } from '@/types/auth';

const prefix = 'auth';

export const getCsrfToken = async (): Promise<void> => {
  await api.get('/auth/csrf');
};

export const login = async (credentials: LoginCredentials): Promise<User> => {
  const response = await api.post(`${prefix}/login`, credentials);
  return response.data.data;
};

export const logout = async (): Promise<void> => {
  await api.post(`${prefix}/logout`);
};

export const getUser = async (): Promise<User | null> => {
  try {
    const response = await api.get(`${prefix}/user`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};