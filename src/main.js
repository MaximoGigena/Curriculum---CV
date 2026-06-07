import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './style.css'

import '@fortawesome/fontawesome-free/css/all.min.css'

import emailjs from '@emailjs/browser'

// Inicializar EmailJS (solo una vez)
emailjs.init('XZ83wdYR-p5grqUSC')

createApp(App)
    .use(MotionPlugin)
    .mount('#app')

