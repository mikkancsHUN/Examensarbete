import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js';  // Importáljuk a router-t
import { createPinia } from 'pinia';  // Importáljuk a Pinia-t

const app = createApp(App);  // Hozz létre egy app példányt
app.use(router);  // Használjuk a routert
app.use(createPinia());  // Használjuk a Pinia store-t
app.mount('#app');  // Mountoljunk a #app elemre
