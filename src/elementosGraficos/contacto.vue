<template>
  <section id="contacto" class="py-16 md:py-24 bg-trasparent">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado de sección -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>Charlemos</span>
        </div>
        
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          ¿Hablamos de tu proyecto?
        </h2>
        
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Dame el gusto de conocer tu proyecto, idea o consulta. No dudes en contactarme a través del formulario o mis redes sociales. ¡Será un placer charlar contigo!
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        
        <!-- Columna izquierda: Info de contacto -->
        <div class="space-y-8">
          <!-- Tarjetas de contacto -->
          <div class="grid sm:grid-cols-2 gap-4">
            <!-- Email -->
            <div class="tarjeta-gradiente group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <a href="mailto:gigenamaximo@gmail.com" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm break-all">
                gigenamaximo@gmail.com
              </a>
            </div>

            <!-- Teléfono -->
            <div class="tarjeta-gradiente group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Teléfono</h3>
              <a href="tel:+543758526513" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                +54 3758 526513
              </a>
            </div>

            <!-- Ubicación -->
            <div class="tarjeta-gradiente group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Ubicación</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Misiones, Argentina<br>
                (Disponible para remoto)
              </p>
            </div>

            <!-- Horario -->
            <div class="tarjeta-gradiente group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Horario</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Lunes a lunes<br>
                10:00 AM - 04:00 PM
              </p>
            </div>
          </div>

          <!-- Redes sociales extendidas - COMPONENTE SEPARADO -->
          <RedesSociales :redes="misRedes" />

        </div>

        <!-- Columna derecha: Formulario -->
        <div class="formulario-gradiente bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Envíame un mensaje
          </h3>
          
          <form @submit.prevent="enviarFormulario" class="space-y-5">
            <!-- Nombre -->
            <div>
              <label for="nombre" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre completo *
              </label>
              <input 
                type="text" 
                id="nombre" 
                v-model="form.nombre"
                required
                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
                placeholder="Tu nombre"
              >
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Correo electrónico *
              </label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                required
                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
                placeholder="tu@email.com"
              >
            </div>

            <!-- Asunto -->
            <div>
              <label for="asunto" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Asunto *
              </label>
              <input 
                type="text" 
                id="asunto" 
                v-model="form.asunto"
                required
                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
                placeholder="¿En qué puedo ayudarte?"
              >
            </div>

            <!-- Mensaje -->
            <div>
              <label for="mensaje" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensaje *
              </label>
              <textarea 
                id="mensaje" 
                v-model="form.mensaje"
                required
                rows="5"
                class="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none resize-none"
                placeholder="Cuéntame sobre tu proyecto o consulta..."
              ></textarea>
            </div>

            <!-- Botón submit con avioncito animado -->
            <button 
              type="submit" 
              :disabled="enviando"
              class="relative w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none overflow-hidden"
            >
              <span v-if="!enviando" class="flex items-center justify-center gap-2">
                Enviar mensaje
                <svg 
                  ref="avioncito"
                  class="w-5 h-5 transition-all duration-500"
                  :class="{ 'rotate-90 translate-x-10 -translate-y-10 opacity-0': avionVolar }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </span>
              <span v-else class="flex items-center justify-center gap-2">
                <svg class="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            </button>

            <!-- Mensaje de éxito/error -->
            <div v-if="mensajeEstado" :class="[
              'p-3 rounded-lg text-sm text-center',
              mensajeEstado.tipo === 'exito' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            ]">
              {{ mensajeEstado.texto }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'
import RedesSociales from './RedesSociales.vue'

// Configuración de redes sociales
const misRedes = {
  linkedin: 'https://linkedin.com/in/tu-usuario',
  github: 'https://github.com/tu-usuario',
  twitter: 'https://twitter.com/tu-usuario',
  instagram: 'https://instagram.com/tu-usuario'
}

// Estado del formulario
const form = reactive({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
  privacidad: false
})

const enviando = ref(false)
const mensajeEstado = ref(null)
const avionVolar = ref(false)

const enviarFormulario = async () => {
  enviando.value = true
  avionVolar.value = true
  
  try {
    const templateParams = {
      name: form.nombre,           // ← Añade esta línea
      from_name: form.nombre,
      from_email: form.email,
      subject: form.asunto,
      message: form.mensaje,
      to_email: 'gigenamaximo@gmail.com'
    }
    
    await emailjs.send(
      'service_b6yktyk',
      'template_u86euon',
      templateParams,
      'XZ83wdYR-p5grqUSC'
    )
    
    mensajeEstado.value = {
      tipo: 'exito',
      texto: '¡Mensaje enviado con éxito! Te responderé pronto.'
    }
    
    // Resetear formulario
    Object.keys(form).forEach(key => {
      if (key !== 'privacidad') form[key] = ''
    })
    form.privacidad = false
    
    setTimeout(() => {
      mensajeEstado.value = null
      avionVolar.value = false
    }, 3000)
    
  } catch (error) {
    mensajeEstado.value = {
      tipo: 'error',
      texto: 'Error al enviar. Por favor, intenta de nuevo.'
    }
    
    setTimeout(() => {
      mensajeEstado.value = null
      avionVolar.value = false
    }, 5000)
  } finally {
    enviando.value = false
  }
}
</script>

<style scoped>
/* Estilos para tarjetas de contacto */
.tarjeta-gradiente {
  position: relative;
  background-clip: padding-box;
  border: solid 2px transparent;
  transition: all 0.3s ease;
}

.tarjeta-gradiente::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.75rem;
  padding: 2px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
  background-size: 300% 300%;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  opacity: 0;
  transition: opacity 0.3s ease;
  animation: gradientShift 3s ease infinite;
}

.tarjeta-gradiente:hover::before {
  opacity: 1;
}

/* Estilos para el formulario */
.formulario-gradiente {
  position: relative;
  background-clip: padding-box;
  border: solid 2px transparent;
  transition: all 0.3s ease;
}

.formulario-gradiente::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  padding: 2px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
  background-size: 300% 300%;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.formulario-gradiente:hover::before {
  opacity: 1;
}

.formulario-gradiente:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.2);
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.rotate-90 {
  transform: rotate(90deg);
}

.translate-x-10 {
  transform: translateX(2.5rem);
}

.-translate-y-10 {
  transform: translateY(-2.5rem);
}

.opacity-0 {
  opacity: 0;
}

input, textarea, button, .formulario-gradiente * {
  pointer-events: auto !important;
  z-index: 10 !important;
  position: relative;
}
</style>