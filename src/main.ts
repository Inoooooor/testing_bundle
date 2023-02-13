import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import * as bootstrap from 'bootstrap'

import App from './App.vue'

import './assets/main.scss'
const app = createApp(App)

app.use(createPinia())
// app.use(bootstrap)

app.mount('#app')
