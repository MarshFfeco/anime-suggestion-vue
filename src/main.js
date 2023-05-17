import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'

window.app = createApp(App)
.use(createPinia())
.mount('#app')
