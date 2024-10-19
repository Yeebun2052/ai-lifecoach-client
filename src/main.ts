// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { pinia } from '@/stores'
import vuetify from '@/plugins/vuetify'
import { i18n } from './i18n'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

app.use(pinia)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .mount('#app')
