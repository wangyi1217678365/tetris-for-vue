import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/i18n/index'
import router from '@/router/index'
import { Toast } from 'vant'
import 'vant/es/Toast/style/index.js'
const app: any = createApp(App)
app.use(i18n)
app.use(router)
app.use(Toast)
app.mount('#app')
