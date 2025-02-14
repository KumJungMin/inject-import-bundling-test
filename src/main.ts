import { createApp, provide } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import utils from './utils';

provide('utils', utils);

createApp(App).use(router).mount('#app')
