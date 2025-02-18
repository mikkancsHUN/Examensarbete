import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'  // Importáljuk a router-t

const app = createApp(App)  // Hozz létre egy app példányt
app.use(router)  // Használjuk a routert
app.mount('#app')  // Mountoljunk a #app elemre