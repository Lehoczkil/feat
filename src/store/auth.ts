import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { login as apiLogin, logout as apiLogout, getUser, getCsrfToken } from '@/api/auth'
import type { User, LoginCredentials } from '@/types/auth'
import { useRouter } from 'vue-router'
import { useNotification } from '@/composables/useNotification'
import { useI18n } from 'vue-i18n'

export const useAuthStore = defineStore('auth', () => {
  const user: Ref<User | null> = ref<User | null>(null)
  const isAuthenticated: Ref<boolean> = ref<boolean>(false)
  const loading: Ref<boolean> = ref<boolean>(false)
  const isLoginLoading: Ref<boolean> = ref<boolean>(false)
  const router = useRouter()
  const csrfToken: Ref<string | null> = ref<string | null>(null)
  const lang: Ref<string | null> = ref<string | null>('en')

  const { showError, showSuccess } = useNotification()
  const { t } = useI18n()

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
      showSuccess(t('notifications.login_success'))
      await router.push({ name: 'Home' })
      return true
    } catch (err) {
      console.error(err)
      showError(t('notifications.login_error'))
      return false
    } finally {
      isLoginLoading.value = false
    }
  }

  const logout = async (hideNotification: boolean = false): Promise<void> => {
    loading.value = true
    try {
      await apiLogout()
      user.value = null
      isAuthenticated.value = false
      if (!hideNotification) {
        showSuccess(t('notifications.logout_success'))
      }
      await router.push({ name: 'Login' })
    } catch (err) {
      console.error(err)
      if (!hideNotification) {
        showError(t('notifications.logout_error'))
      }
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