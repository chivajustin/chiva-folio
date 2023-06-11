import { createApp } from 'vue'
import './assets/style.css'
import './assets/script.js'
import App from './App.vue'
import router from "./router"

const app =createApp(App)
app.use(router)
app.mount('#app')



