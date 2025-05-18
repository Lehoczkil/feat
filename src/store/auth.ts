import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { login as apiLogin, logout as apiLogout, getUser, getCsrfToken } from '@/api/auth'
import type { User, LoginCredentials } from '@/types/auth'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const user: Ref<User | null> = ref<User | null>(null)
  const isAuthenticated: Ref<boolean> = ref<boolean>(false)
  const loading: Ref<boolean> = ref<boolean>(false)
  const isLoginLoading: Ref<boolean> = ref<boolean>(false)
  const router = useRouter()
  const csrfToken: Ref<string | null> = ref<string | null>(null)
  const lang: Ref<string | null> = ref<string | null>('en')

  const fetchUser = async (): Promise<User | null> => {
    loading.value = true
    try {
      const authUser = await getUser()
      if (authUser) {
        user.value = authUser
        isAuthenticated.value = true
      } else {
        user.value = null
        isAuthenticated.value = false
      }
      return authUser
    } catch (err) {
      user.value = null
      isAuthenticated.value = false
      return null
    } finally {
      loading.value = false
    }
  }

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    isLoginLoading.value = true
    try {
      await getCsrfToken()
      csrfToken.value =
        document.cookie
          .split('; ')
          .find((row) => row.startsWith('XSRF-TOKEN='))
          ?.split('=')[1] || null
      const authUser = await apiLogin(credentials)
      user.value = authUser
      isAuthenticated.value = true
      await router.push({ name: 'Home' })
      return true
    } catch (err) {
      console.error(err)
      return false
    } finally {
      isLoginLoading.value = false
    }
  }

  const logout = async (): Promise<void> => {
    loading.value = true
    try {
      await apiLogout()
      user.value = null
      isAuthenticated.value = false
      await router.push({ name: 'Login' })
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    isAuthenticated,
    loading,
    isLoginLoading,
    csrfToken,
    lang,

    fetchUser,
    login,
    logout,
  }
})