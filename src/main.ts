import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/i18n/index'
const app: any = createApp(App)
app.use(i18n).mount('#app')
