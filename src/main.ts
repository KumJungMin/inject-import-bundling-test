import { createApp, provide } from 'vue'
import './style.css'
import App from './App.vue'
import utils from './utils'

provide('utils', utils)


createApp(App).mount('#app')
