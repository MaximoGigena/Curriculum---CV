<template>
  <div>
    <!-- Desktop: Rombo Navigation (visible en sm y superiores) -->
    <div class="hidden sm:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <!-- Línea vertical de conexión -->
      <div 
        class="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 transition-all duration-300"
        :style="{ height: `${(items.length - 1) * 70}px`, top: '35px' }"
      ></div>
      
      <!-- Contenedor de rombos -->
      <div class="relative flex flex-col items-center space-y-6 md:space-y-8">
        <!-- Cada elemento del índice -->
        <button
          v-for="(item, index) in items"
          :key="index"
          @click="scrollToSection(item.id)"
          class="relative group focus:outline-none transition-all duration-300"
          :class="{ 'opacity-50 hover:opacity-100': activeIndex !== index }"
        >
          <!-- Línea horizontal animada -->
          <div 
            class="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 h-0.5 transition-all duration-300"
            :class="{ 'w-8 bg-orange-500': activeIndex === index, 'w-0 group-hover:w-4 bg-orange-300': activeIndex !== index }"
          ></div>
          
          <!-- Cuadrado/Rombo con favicon -->
          <div class="relative">
            <!-- Contenedor que rota -->
            <div 
              class="w-10 h-10 md:w-12 md:h-12 border-2 transition-all duration-500 flex items-center justify-center overflow-hidden"
              :class="[
                activeIndex === index 
                  ? 'rotate-45 border-orange-500 bg-orange-50 scale-110 shadow-lg' 
                  : 'rotate-0 border-gray-300 bg-white group-hover:border-orange-300 group-hover:scale-105'
              ]"
              :style="{
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }"
            >
              <!-- Icono Font Awesome (rotado inversamente cuando está seleccionado) -->
              <div 
                class="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 transition-all duration-500"
                :class="activeIndex === index ? '-rotate-45' : 'rotate-0'"
              >
                <i 
                  :class="['text-base md:text-lg transition-all duration-300', item.icon, activeIndex === index ? 'text-orange-500' : 'text-gray-500 group-hover:text-orange-400']"
                ></i>
              </div>
            </div>
            
            <!-- Etiqueta del rombo -->
            <div 
              class="absolute right-full mr-12 top-1/2 transform -translate-y-1/2 whitespace-nowrap transition-all duration-300"
              :class="[
                activeIndex === index 
                  ? 'opacity-100 translate-x-0 text-orange-600 font-semibold' 
                  : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-gray-600'
              ]"
            >
              <span class="text-sm bg-white px-2 py-1 rounded shadow-sm flex items-center gap-2">
                <i :class="['text-xs', item.icon]"></i>
                {{ item.label }}
              </span>
            </div>
          </div>
          
          <!-- Indicador numérico opcional -->
          <div 
            class="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center rounded-full transition-all duration-300"
            :class="activeIndex === index ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'"
          >
            {{ index + 1 }}
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile: Botón toggle + menú flotante -->
    <div class="sm:hidden">
      <!-- Botón flotante -->
      <button 
        @click="toggleMobileNav"
        class="fixed bottom-6 right-6 w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-orange-600 transition-all duration-300"
        :class="{ 'rotate-45': showMobileNav }"
      >
        <i :class="[showMobileNav ? 'fas fa-times' : 'fas fa-chevron-up', 'text-white text-xl transition-all duration-300']"></i>
      </button>

      <!-- Menú desplegable -->
      <div 
        v-if="showMobileNav"
        class="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl p-3 flex flex-col gap-2 z-40 min-w-[200px] animate-slide-up border border-gray-100"
      >
        <button
          v-for="(item, index) in items"
          :key="index"
          @click="scrollToSection(item.id); showMobileNav = false"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
          :class="activeIndex === index ? 'bg-orange-50 text-orange-500' : 'text-gray-600 hover:bg-gray-50'"
        >
          <div class="w-8 h-8 rounded-lg flex items-center justify-center"
            :class="activeIndex === index ? 'bg-orange-100' : 'bg-gray-100'"
          >
            <i :class="[item.icon, activeIndex === index ? 'text-orange-500' : 'text-gray-500', 'text-base']"></i>
          </div>
          <div class="flex flex-col items-start flex-1">
            <span class="text-sm font-medium">{{ item.label }}</span>
            <span class="text-xs text-gray-400">Sección {{ index + 1 }}</span>
          </div>
          <div 
            class="w-2 h-2 rounded-full"
            :class="activeIndex === index ? 'bg-orange-500' : 'bg-gray-300'"
          ></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [
      { id: 'inicio', label: 'Inicio', icon: 'fas fa-home' },
      { id: 'servicios', label: 'Servicios', icon: 'fas fa-gear' },
      { id: 'proyectos', label: 'Proyectos', icon: 'fas fa-folder' },
      { id: 'contacto', label: 'Contacto', icon: 'fas fa-envelope' }
    ]
  }
})

const emit = defineEmits(['section-change'])

const activeIndex = ref(0)
const showMobileNav = ref(false)
const isMobile = ref(false)

// Función para hacer scroll a la sección
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
    emit('section-change', id)
  }
  // Cerrar menú móvil después del scroll
  showMobileNav.value = false
}

// Toggle del menú móvil
const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value
}

// Cerrar menú al hacer click fuera (opcional)
const handleClickOutside = (event) => {
  if (showMobileNav.value && !event.target.closest('.sm\\:hidden')) {
    showMobileNav.value = false
  }
}

// Detectar si es móvil
const checkMobile = () => {
  isMobile.value = window.innerWidth < 640
  if (!isMobile.value) {
    showMobileNav.value = false
  }
}

// Observador de intersección para detectar sección activa
let observer

const setupIntersectionObserver = () => {
  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = props.items.findIndex(item => item.id === entry.target.id)
        if (index !== -1 && activeIndex.value !== index) {
          activeIndex.value = index
          emit('section-change', props.items[index].id)
        }
      }
    })
  }, options)

  // Observar todas las secciones
  props.items.forEach(item => {
    const element = document.getElementById(item.id)
    if (element) observer.observe(element)
  })
}

onMounted(() => {
  setupIntersectionObserver()
  checkMobile()
  window.addEventListener('resize', checkMobile)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  window.removeEventListener('resize', checkMobile)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
button {
  backface-visibility: hidden;
}

/* Animación para el menú móvil */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes pulse-soft {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.animate-slide-up {
  animation: slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Ajustes responsivos adicionales */
@media (max-width: 640px) {
  .fixed {
    right: 1rem;
  }
}

/* Mejora la experiencia táctil en móvil */
@media (max-width: 640px) {
  button {
    touch-action: manipulation;
  }
}
</style>