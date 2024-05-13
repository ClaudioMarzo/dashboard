import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index_router'

import 'animate.css'
import '@/assets/css/tailwindcss.css'
import '@/assets/css/fonts.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
