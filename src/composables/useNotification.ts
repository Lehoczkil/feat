import { useToast } from 'vue-toastification'

const toast = useToast()

export const useNotification = () => {
  const showError = (message: string) => {
    toast.error(message)
  }

  const showSuccess = (message: string) => {
    toast.success(message)
  }

  return {
    showError,
    showSuccess
  }
}