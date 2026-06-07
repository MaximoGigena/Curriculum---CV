<!-- carrusel 3D -->
<template>
  <div class="carrusel-3d-container">
    <!-- Versión 3D para desktop -->
    <div v-if="!isMobile" class="relative mx-auto" :style="containerStyle">
      
      <div class="absolute inset-0 overflow-visible" :style="perspectiveStyle">
        <div 
          class="relative w-full h-full"
          :style="carouselStyle"
        >
          <div
            v-for="(servicio, index) in servicios"
            :key="servicio.id || index"
            class="absolute top-1/2 left-1/2 will-change-transform"
            :style="getTarjetaStyle(index)"
          >
            <div 
              class="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-102"
              :class="[
                currentIndex === index 
                  ? 'ring-2 ring-purple-500 shadow-2xl' 
                  : '',
                tarjetaWidthClass
              ]"
              :style="tarjetaStyle"
            >
              <!-- Contenido de la tarjeta - TODO visible directamente -->
              <div class="p-4 sm:p-5">
                <!-- Icono -->
                <div 
                  class="rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-500"
                  :class="[
                    currentIndex === index ? 'w-12 h-12 sm:w-16 sm:h-16' : 'w-10 h-10 sm:w-14 sm:h-14',
                    `bg-gradient-to-br ${servicio.gradient}`
                  ]"
                >
                  <svg 
                    class="text-white transition-all duration-500" 
                    :class="[currentIndex === index ? 'w-6 h-6 sm:w-8 sm:h-8' : 'w-5 h-5 sm:w-7 sm:h-7']" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="servicio.icono"></path>
                  </svg>
                </div>
                
                <!-- Título -->
                <h3 
                  class="font-bold text-gray-900 dark:text-white text-center mb-2 transition-all duration-500"
                  :class="[currentIndex === index ? 'text-lg sm:text-xl' : 'text-base sm:text-lg']"
                >
                  {{ servicio.titulo }}
                </h3>
                
                <!-- Descripción completa -->
                <p class="text-gray-600 dark:text-gray-400 text-xs text-center mb-3">
                  {{ servicio.detallesCompletos?.descripcionCompleta || servicio.descripcion }}
                </p>
                
                <!-- Lista de características/lo que incluye (máximo 4 items para no saturar) -->
                <div class="space-y-1.5 mb-3">
                  <div 
                    v-for="item in (servicio.detallesCompletos?.incluye || servicio.caracteristicas).slice(0, 4)" 
                    :key="item"
                    class="flex items-start gap-1.5 text-xs text-gray-600 dark:text-gray-400"
                  >
                    <svg class="w-3 h-3 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-xs line-clamp-2">{{ item }}</span>
                  </div>
                </div>

                <!-- Botón CTA (sin precio) -->
                <div class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    @click.stop="solicitarInformacion(index)"
                    class="w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-xs font-medium"
                  >
                    Solicitar información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Botones de navegación desktop -->
      <button 
        @click="rotarIzquierda"
        class="absolute left-2 sm:left-4 md:left-44 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-30 hover:scale-110 active:scale-95"
        :style="buttonStyle"
      >
        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button 
        @click="rotarDerecha"
        class="absolute right-2 sm:right-4 md:right-44 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-30 hover:scale-110 active:scale-95"
        :style="buttonStyle"
      >
        <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>

    <!-- Versión 2D para móvil -->
    <div v-else class="relative overflow-visible px-4">
      <div 
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${mobileIndex * 100}%)` }"
      >
        <div
          v-for="(servicio, idx) in servicios"
          :key="servicio.id || idx"
          class="w-full flex-shrink-0 px-2"
        >
          <div 
            class="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
            :class="[mobileIndex === idx ? 'ring-2 ring-purple-500 shadow-2xl' : '']"
          >
            <!-- Contenido móvil - Todo visible -->
            <div class="p-5">
              <!-- Icono -->
              <div 
                class="rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-500"
                :class="[
                  mobileIndex === idx ? 'w-16 h-16' : 'w-14 h-14',
                  `bg-gradient-to-br ${servicio.gradient}`
                ]"
              >
                <svg 
                  class="text-white transition-all duration-500" 
                  :class="[mobileIndex === idx ? 'w-8 h-8' : 'w-7 h-7']" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="servicio.icono"></path>
                </svg>
              </div>
              
              <!-- Título -->
              <h3 
                class="font-bold text-gray-900 dark:text-white text-center mb-2 transition-all duration-500"
                :class="[mobileIndex === idx ? 'text-xl' : 'text-lg']"
              >
                {{ servicio.titulo }}
              </h3>
              
              <!-- Descripción completa -->
              <p class="text-gray-600 dark:text-gray-400 text-sm text-center mb-4">
                {{ servicio.detallesCompletos?.descripcionCompleta || servicio.descripcion }}
              </p>
              
              <!-- Lista de características/lo que incluye -->
              <div class="space-y-2 mb-4">
                <div 
                  v-for="item in (servicio.detallesCompletos?.incluye || servicio.caracteristicas).slice(0, 5)" 
                  :key="item"
                  class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <svg class="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">{{ item }}</span>
                </div>
              </div>

              <!-- Botón CTA móvil (sin precio) -->
              <div class="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <button 
                  @click.stop="solicitarInformacionMobile(idx)"
                  class="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
                >
                  Solicitar información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Botones de navegación móvil -->
      <button 
        @click="mobilePrev"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 z-20 hover:scale-110 active:scale-95"
      >
        <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <button 
        @click="mobileNext"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 z-20 hover:scale-110 active:scale-95"
      >
        <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <!-- Indicadores de página (dots) -->
      <div class="flex justify-center gap-2 mt-6">
        <button
          v-for="(_, idx) in servicios"
          :key="idx"
          @click="mobileIndex = idx"
          class="h-2 rounded-full transition-all duration-300"
          :class="mobileIndex === idx ? 'w-6 bg-purple-500' : 'w-2 bg-gray-300 dark:bg-gray-600'"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const emit = defineEmits(['solicitar-info'])

const props = defineProps({
  servicios: {
    type: Array,
    required: true
  },
  autoPlayInterval: {
    type: Number,
    default: 5000
  },
  startIndex: {
    type: Number,
    default: 0
  }
})

// ========== ESTADO ==========
const isMobile = ref(false)
const mobileIndex = ref(0)
let mobileAutoPlayTimer = null

// ========== SOLUCIÓN CON VUEUSE ==========
const carruselRef = ref(null)
const isSectionVisible = ref(true)

// Configurar el observer
const { stop } = useIntersectionObserver(
  carruselRef,
  ([{ isIntersecting }]) => {
    isSectionVisible.value = isIntersecting
    
    if (!isIntersecting) {
      // Pausar todo
      detenerAutoPlay()
      if (animationFrame) cancelAnimationFrame(animationFrame)
    } else {
      // Reanudar
      if (!isMobile.value) {
        resetAutoPlay()
      } else {
        resetMobileAutoPlay()
      }
    }
  },
  { threshold: 0.1 }
)

// ========== DETECCIÓN DE MÓVIL ==========
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

// ========== FUNCIONES DE SOLICITUD ==========
const solicitarInformacion = (index) => {
  const servicioActual = props.servicios[index]
  // Emitir evento o hacer scroll al contacto
  setTimeout(() => {
    const contactoSection = document.getElementById('contacto')
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}

const solicitarInformacionMobile = (index) => {
  const servicioActual = props.servicios[index]
  setTimeout(() => {
    const contactoSection = document.getElementById('contacto')
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}

// ========== CÓDIGO DEL CARRUSEL 3D ==========
const anguloActual = ref(0)
let autoPlayTimer = null
let animationFrame = null
let targetAngle = 0
let isAnimating = false
let animationTimeout = null

// Variables responsivas
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)
const radio = ref(280)
const tarjetaWidth = ref(320)
const containerHeight = ref(520)

const updateResponsiveValues = () => {
  const width = windowWidth.value
  
  if (width < 640) {
    radio.value = 160
    tarjetaWidth.value = 220
    containerHeight.value = 480
  } else if (width < 768) {
    radio.value = 200
    tarjetaWidth.value = 260
    containerHeight.value = 520
  } else if (width < 1024) {
    radio.value = 250
    tarjetaWidth.value = 290
    containerHeight.value = 560
  } else {
    radio.value = 280
    tarjetaWidth.value = 320
    containerHeight.value = 580
  }
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
  updateResponsiveValues()
  checkMobile()
}

if (typeof window !== 'undefined') {
  window.addEventListener('resize', handleResize)
  onUnmounted(() => window.removeEventListener('resize', handleResize))
}

updateResponsiveValues()

const anguloPorTarjeta = computed(() => 360 / props.servicios.length)

const currentIndex = computed(() => {
  const total = props.servicios.length
  if (total === 0) return 0
  
  let rawIndex = -anguloActual.value / anguloPorTarjeta.value
  let index = Math.round(rawIndex) % total
  if (index < 0) index += total
  
  return index
})

const containerStyle = computed(() => ({
  height: `${containerHeight.value}px`,
  maxWidth: '100%',
  overflow: 'visible'
}))

const perspectiveStyle = computed(() => ({
  perspective: '1200px',
  perspectiveOrigin: '50% 50%'
}))

const carouselStyle = computed(() => ({
  transform: `rotateY(${-anguloActual.value}deg)`,
  transformStyle: 'preserve-3d',
  transition: isAnimating ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
  willChange: 'transform'
}))

const tarjetaWidthClass = computed(() => {
  if (windowWidth.value < 640) return 'w-56'
  if (windowWidth.value < 768) return 'w-64'
  return 'w-80'
})

const tarjetaStyle = computed(() => ({
  width: `${tarjetaWidth.value}px`
}))

const buttonStyle = computed(() => ({
  top: `${containerHeight.value / 2}px`
}))

const getTarjetaStyle = (index) => {
  const anguloTarjeta = -index * anguloPorTarjeta.value
  const radianes = (anguloTarjeta * Math.PI) / 180
  const x = Math.sin(radianes) * radio.value
  const z = Math.cos(radianes) * radio.value
  
  const isActive = currentIndex.value === index
  
  let zIndex = Math.floor(10 + (z / radio.value) * 20)
  let transformScale = 'scale(1)'
  let brightness = 'brightness(1)'
  
  if (isActive) {
    const scaleFactor = windowWidth.value < 640 ? 1.05 : 1.08
    transformScale = `scale(${scaleFactor})`
    zIndex = 30
  } else {
    brightness = 'brightness(0.7)'
    transformScale = 'scale(0.92)'
    if (z < 0) {
      zIndex = Math.max(1, zIndex - 15)
    }
  }
  
  return {
    transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${anguloTarjeta}deg) ${transformScale}`,
    transformStyle: 'preserve-3d',
    opacity: 1,
    filter: brightness,
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    cursor: 'pointer',
    zIndex: zIndex,
    pointerEvents: 'auto',
    willChange: 'transform, filter',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden'
  }
}

const rotarDerecha = () => {
  if (isAnimating) return
  targetAngle = anguloActual.value - anguloPorTarjeta.value
  iniciarAnimacion()
  resetAutoPlay()
}

const rotarIzquierda = () => {
  if (isAnimating) return
  targetAngle = anguloActual.value + anguloPorTarjeta.value
  iniciarAnimacion()
  resetAutoPlay()
}

const iniciarAnimacion = () => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
    animationFrame = null
  }
  
  if (animationTimeout) {
    clearTimeout(animationTimeout)
    animationTimeout = null
  }
  
  isAnimating = true
  
  const startAngle = anguloActual.value
  const startTime = performance.now()
  const duration = 800
  
  const animar = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(1, elapsed / duration)
    
    const easeOut = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2
    
    let newAngle = startAngle + (targetAngle - startAngle) * easeOut
    anguloActual.value = newAngle
    
    if (progress < 1) {
      animationFrame = requestAnimationFrame(animar)
    } else {
      const roundedAngle = Math.round(targetAngle / anguloPorTarjeta.value) * anguloPorTarjeta.value
      anguloActual.value = roundedAngle
      
      animationTimeout = setTimeout(() => {
        isAnimating = false
        animationTimeout = null
      }, 100)
      
      animationFrame = null
    }
  }
  
  animationFrame = requestAnimationFrame(animar)
}

// ========== FUNCIONES PARA MÓVIL ==========
const mobilePrev = () => {
  if (mobileIndex.value > 0) {
    mobileIndex.value--
  } else {
    mobileIndex.value = props.servicios.length - 1
  }
  resetMobileAutoPlay()
}

const mobileNext = () => {
  if (mobileIndex.value < props.servicios.length - 1) {
    mobileIndex.value++
  } else {
    mobileIndex.value = 0
  }
  resetMobileAutoPlay()
}

// ========== AUTOPLAY ==========
const resetAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
  
  if (props.autoPlayInterval > 0 && !isMobile.value && props.servicios.length > 0) {
    autoPlayTimer = setInterval(() => {
      if (!isAnimating) {
        rotarDerecha()
      }
    }, props.autoPlayInterval)
  }
}

const resetMobileAutoPlay = () => {
  if (mobileAutoPlayTimer) {
    clearInterval(mobileAutoPlayTimer)
    mobileAutoPlayTimer = null
  }
  
  if (props.autoPlayInterval > 0 && isMobile.value && props.servicios.length > 0) {
    mobileAutoPlayTimer = setInterval(() => {
      mobileNext()
    }, props.autoPlayInterval)
  }
}

const detenerAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
  if (mobileAutoPlayTimer) {
    clearInterval(mobileAutoPlayTimer)
    mobileAutoPlayTimer = null
  }
}

const getCurrentIndex = () => isMobile.value ? mobileIndex.value : currentIndex.value

// ========== CICLO DE VIDA ==========
onMounted(() => {
  checkMobile()
  
  if (props.servicios.length > 0) {
    mobileIndex.value = props.startIndex
    const anguloInicial = -props.startIndex * anguloPorTarjeta.value
    anguloActual.value = anguloInicial
  }
  
  resetAutoPlay()
  resetMobileAutoPlay()
})

onUnmounted(() => {
  stop()
  if (autoPlayTimer) clearInterval(autoPlayTimer)
  if (mobileAutoPlayTimer) clearInterval(mobileAutoPlayTimer)
  if (animationFrame) cancelAnimationFrame(animationFrame)
  if (animationTimeout) clearTimeout(animationTimeout)
})

watch(() => props.startIndex, (newIndex) => {
  if (newIndex !== getCurrentIndex() && props.servicios.length > 0 && !isAnimating) {
    if (isMobile.value) {
      mobileIndex.value = newIndex
    }
  }
})

watch(isMobile, (newIsMobile, oldIsMobile) => {
  if (newIsMobile !== oldIsMobile) {
    detenerAutoPlay()
    setTimeout(() => {
      if (newIsMobile) {
        resetMobileAutoPlay()
      } else {
        resetAutoPlay()
      }
    }, 100)
  }
})

defineExpose({
  rotarDerecha,
  rotarIzquierda,
  mobilePrev,
  mobileNext,
  detenerAutoPlay,
  resetAutoPlay,
  currentIndex,
  mobileIndex,
  getCurrentIndex
})
</script>

<style scoped>
.carrusel-3d-container {
  position: relative;
  width: 100%;
  min-height: 440px;
  overflow: visible !important;
  content-visibility: auto;
  contain-intrinsic-size: 440px;
}

/* Estilos 3D */
[style*="preserve-3d"] {
  transform-style: preserve-3d;
}

.will-change-transform {
  will-change: transform;
}

/* Prevenir cortes en contenedores padres */
:deep(.container),
:deep(#servicios),
:deep(.overflow-visible) {
  overflow: visible !important;
}

/* Utilidades para texto truncado elegante */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}

/* Mejoras para móvil */
@media (max-width: 640px) {
  .carrusel-3d-container {
    margin: 0 -0.5rem;
    min-height: 480px;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .carrusel-3d-container * {
    scroll-behavior: smooth;
  }
}
</style>