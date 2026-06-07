<template>
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
    <h3 class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
      ¿Cómo trabajo?
    </h3>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div 
        v-for="(paso, index) in pasos" 
        :key="paso.numero" 
        class="text-center transition-all duration-500"
        :class="animatedSteps[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div :class="`w-12 h-12 ${paso.color} rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-500 hover:scale-110`"
             :style="{ transitionDelay: `${index * 150}ms` }">
          <span :class="`${paso.textColor} font-bold text-xl`">{{ paso.numero }}</span>
        </div>
        <h4 class="font-semibold text-gray-900 dark:text-white mb-2"
            :style="{ transitionDelay: `${index * 150 + 100}ms` }"
            :class="animatedSteps[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
          {{ paso.titulo }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-400"
           :style="{ transitionDelay: `${index * 150 + 200}ms` }"
           :class="animatedSteps[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
          {{ paso.descripcion }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pasos = ref([
  {
    numero: 1,
    titulo: 'Relevamiento',
    descripcion: 'Analizamos tus necesidades y limites del proyecto',
    color: 'bg-purple-100 dark:bg-purple-900/30',
    textColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    numero: 2,
    titulo: 'Requerimientos',
    descripcion: 'Definimos alcance, tecnología y objetivos',
    color: 'bg-blue-100 dark:bg-blue-900/30',
    textColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    numero: 3,
    titulo: 'Desarrollo',
    descripcion: 'Construcción y revisiones periódicas',
    color: 'bg-green-100 dark:bg-green-900/30',
    textColor: 'text-green-600 dark:text-green-400'
  },
  {
    numero: 4,
    titulo: 'Lanzamiento',
    descripcion: 'Entrega, alojamiento y puesta en producción',
    color: 'bg-orange-100 dark:bg-orange-900/30',
    textColor: 'text-orange-600 dark:text-orange-400'
  }
])

const animatedSteps = ref([false, false, false, false])

onMounted(() => {
  pasos.value.forEach((_, index) => {
    setTimeout(() => {
      animatedSteps.value[index] = true
    }, index * 200) // 200ms de delay entre cada paso
  })
})
</script>