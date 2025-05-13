import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import { i18n } from './i18n'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(i18n).use(router).mount('#app')
