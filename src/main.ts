import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import { i18n } from './i18n'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import router from './router'

const pinia = createPinia()
const app = createApp(App)

app
  .use(pinia)
  .use(i18n)
  .use(router)
  .use(Toast, {
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
  })
  .mount('#app')
