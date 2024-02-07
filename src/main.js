import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initFlowbite } from 'flowbite'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(initFlowbite)

app.mount('#app')
