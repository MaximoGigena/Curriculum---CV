<!-- sección de educación y formación -->
<template>
  <section id="educacion" ref="educationSection" class="py-16 md:py-24 bg-transparent overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado de sección -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          <span>Formación y Conocimiento</span>
        </div>
        
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Mi <span class="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">trayectoria académica</span>
        </h2>
        
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Un viaje por mi formación continua y certificaciones
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Timeline Desktop (con animación) -->
        <div class="hidden md:block relative flex justify-center">
          <div class="relative w-full max-w-4xl">
            
            <!-- Línea vertical central -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-teal-400 to-green-400 rounded-full"></div>
            
            <!-- Círculo animado que viaja -->
            <div class="relative timeline-container">
              <div 
                id="moving-circle" 
                ref="movingCircle"
                :class="circleClass"
                class="absolute left-1/2 w-14 h-14 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-2xl z-20 cursor-pointer transition-all duration-300"
              >
                <svg v-if="currentIcon === 'book'" class="w-6 h-6 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                <svg v-else-if="currentIcon === 'code'" class="w-6 h-6 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                <svg v-else-if="currentIcon === 'rocket'" class="w-6 h-6 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg v-else-if="currentIcon === 'award'" class="w-6 h-6 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <svg v-else class="w-6 h-6 text-white animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>

              <!-- Puntos y tarjetas Desktop -->
             <div class="timeline-stop" :style="{ top: stopPositions[0] + 'px' }">
                <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 z-10"></div>
                <div id="card-0" class="timeline-card hidden opacity-0 ml-auto mr-0 md:mr-auto md:ml-[calc(50%+2rem)] w-full md:w-96">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl border-2 border-green-500 relative">
                    <div class="absolute -left-3 top-6 w-6 h-6 bg-green-500 rotate-45 hidden md:block"></div>
                    <div class="flex items-center gap-2 mb-3 flex-wrap">
                      <span class="text-xs font-bold px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">2019 - 2021</span>
                      <span class="text-xs text-gray-500 dark:text-gray-400">Primeros Pasos</span>
                    </div>
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Boot camps
                    </h4>
                    <p class="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      Coder House/Youtube
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Cursos intensivos de lógica, programación y desarrollo web.
                    </p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Algoritmos y lógica</span>
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Java</span>
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Arquitectura software</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-stop" :style="{ top: stopPositions[1] + 'px' }">
                <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-2 border-white dark:border-gray-900 z-10"></div>
                <div id="card-1" class="timeline-card hidden opacity-0 mr-auto ml-0 md:mr-[calc(50%+2rem)] md:ml-auto w-full md:w-96">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl border-2 border-teal-500 relative">
                    <div class="absolute -right-3 top-6 w-6 h-6 bg-teal-500 rotate-45 hidden md:block"></div>
                    <div class="flex items-center gap-2 mb-3 flex-wrap">
                      <span class="text-xs font-bold px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded">2022 - 2024</span>
                      <span class="text-xs text-gray-500 dark:text-gray-400">Técnico Programador</span>
                    </div>
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Tecnicatura universitaria de programación
                    </h4>
                    <p class="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      Universidad Nacional de Misiones (UNAM)
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Especialización en ingeniería de software y arquitectura de software.
                    </p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Base de Datos</span>
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Ingeniería del software</span>
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Metodologías de desarrollo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-stop" :style="{ top: stopPositions[2] + 'px' }">
                <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 z-10"></div>
                <div id="card-2" class="timeline-card hidden opacity-0 ml-auto mr-0 md:mr-auto md:ml-[calc(50%+2rem)] w-full md:w-96">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl border-2 border-blue-500 relative">
                    <div class="absolute -left-3 top-6 w-6 h-6 bg-blue-500 rotate-45 hidden md:block"></div>
                    <div class="flex items-center gap-2 mb-3 flex-wrap">
                      <span class="text-xs font-bold px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">2025 - 2026</span>
                      <span class="text-xs text-gray-500 dark:text-gray-400">Analista de Sistemas</span>
                    </div>
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Grado Universitario en Análisis de Sistemas
                    </h4>
                    <p class="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      Universidad Nacional de Misiones (UNAM)
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Formación en análisis y diseño de sistemas de información, con énfasis en el desarrollo de soluciones tecnológicas.
                    </p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Redes</span>
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Frameworks</span>
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Diseño Web</span>
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Análisis de Sistemas</span>
                    </div>
                  </div>
                </div>
              </div>

               <div class="timeline-stop" :style="{ top: stopPositions[3] + 'px' }">
                <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white dark:border-gray-900 z-10"></div>
                <div id="card-3" class="timeline-card hidden opacity-0 mr-auto ml-0 md:mr-[calc(50%+2rem)] md:ml-auto w-full md:w-96">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl border-2 border-purple-500 relative">
                    <div class="absolute -right-3 top-6 w-6 h-6 bg-purple-500 rotate-45 hidden md:block"></div>
                    <div class="flex items-center gap-2 mb-3 flex-wrap">
                      <span class="text-xs font-bold px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">2026 - 2027</span>
                      <span class="text-xs text-gray-500 dark:text-gray-400">Licenciatura en Sistemas</span>
                    </div>
                    <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Licenciatura universitaria en Sistemas de Computación
                    </h4>
                    <p class="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      Universidad Nacional de Misiones (UNAM)
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Formación en diseño y desarrollo de sistemas de información, con énfasis en la investigación e implementación de soluciones tecnológicas.
                    </p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Modelos de IA</span>
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Auditoría de sistemas</span>
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Modelos de simulación</span>
                      <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Sistemas IoT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline Mobile (sin animación, layout fluido) -->
        <div class="block md:hidden space-y-8">
          <!-- Item 1 -->
          <div class="relative pl-8">
            <div class="absolute left-0 top-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 z-10"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl border-l-4 border-green-500">
              <div class="flex items-center gap-2 mb-3 flex-wrap">
                <span class="text-xs font-bold px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">2019 - 2021</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">Primeros Pasos</span>
              </div>
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Boot camps</h4>
              <p class="text-purple-600 dark:text-purple-400 font-medium mb-2">Coder House/Youtube</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Cursos intensivos de lógica, programación y desarrollo web.</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Algoritmos y lógica</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Java</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Arquitectura software</span>
              </div>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="relative pl-8">
            <div class="absolute left-0 top-2 w-4 h-4 bg-teal-500 rounded-full border-2 border-white dark:border-gray-900 z-10"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl border-l-4 border-teal-500">
              <div class="flex items-center gap-2 mb-3 flex-wrap">
                <span class="text-xs font-bold px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded">2022 - 2024</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">Técnico Programador</span>
              </div>
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Tecnicatura universitaria de programación</h4>
              <p class="text-purple-600 dark:text-purple-400 font-medium mb-2">Universidad Nacional de Misiones (UNAM)</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Especialización en ingeniería de software y arquitectura de software.</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Base de Datos</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Ingeniería del software</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Metodologías de desarrollo</span>
              </div>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="relative pl-8">
            <div class="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 z-10"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl border-l-4 border-blue-500">
              <div class="flex items-center gap-2 mb-3 flex-wrap">
                <span class="text-xs font-bold px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">2025-2026</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">Analista de Sistemas</span>
              </div>
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Grado Universitario en Analisis de Sistemas</h4>
              <p class="text-purple-600 dark:text-purple-400 font-medium mb-2">Universidad Nacional de Misiones (UNAM)</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Formación en análisis y diseño de sistemas de información, con énfasis en el desarrollo de soluciones tecnológicas.</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Redes</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Frameworks</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Diseño Web</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Analisis de Sistemas</span>
              </div>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="relative pl-8">
            <div class="absolute left-0 top-2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white dark:border-gray-900 z-10"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl border-l-4 border-purple-500">
              <div class="flex items-center gap-2 mb-3 flex-wrap">
                <span class="text-xs font-bold px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">2026 - 2027</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">Licenciatura en Sistemas</span>
              </div>
              <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Licenciatura universitaria en Sistemas de Computación</h4>
              <p class="text-purple-600 dark:text-purple-400 font-medium mb-2">Universidad Nacional de Misiones (UNAM)</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Formación en diseño y desarrollo de sistemas de información, con énfasis en la invesitagción e implementación de soluciones tecnológicas.</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Modelos de IA</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Auditoría de sistemas</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Modelos de simulación</span>
                <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Sistemas Iot</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Habilidades blandas -->
        <div class="mt-16 md:mt-20">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            Soft Skills
          </h3>
          
          <div class="max-w-2xl mx-auto">
            <div class="bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden shadow-2xl">
              <div class="bg-gray-800 dark:bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                <div class="flex gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="text-gray-400 text-xs mx-auto font-mono">skills.js</div>
              </div>
              
              <div class="p-4 font-mono text-sm relative overflow-x-auto">
                <div class="absolute left-3 top-4 text-gray-600 select-none space-y-1 text-right">
                  <div v-for="i in softSkills.length" :key="i" class="leading-6">{{ i }}</div>
                </div>
                
                <div class="ml-8">
                  <div class="text-purple-400">const</div>
                  <div class="text-blue-400 ml-4">softSkills</div>
                  <div class="text-gray-400"> = [</div>
                  
                  <div v-for="(skill, index) in displayedSkills" :key="index" class="ml-8">
                    <span class="text-green-400">"</span>
                    <span class="text-yellow-300 break-all">{{ skill }}</span>
                    <span class="text-green-400">"</span>
                    <span v-if="index < softSkills.length - 1" class="text-gray-400">,</span>
                  </div>
                  
                  <div class="text-gray-400">];</div>
                  
                  <div class="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Certificaciones destacadas -->
        <div class="mt-10">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-2">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            Certificaciones destacadas
          </h3>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Vue.js Master Class</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Vue School · 2024</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">AWS Certified Developer</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Amazon Web Services · 2024</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">TypeScript Advanced</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Microsoft Learn · 2025</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white">Tailwind CSS Expert</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Tailwind Labs · 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'

const currentIcon = ref('book')
const circleClass = ref('bg-gradient-to-br from-green-500 to-teal-500')
const movingCircle = ref(null)
const educationSection = ref(null)
const isAnimating = ref(false)
const hasAnimated = ref(false)
let observer = null
let animationTimeout = null

// Posiciones exactas donde debe pararse el círculo (en píxeles)
const stopPositions = [0, 220, 440, 660]

const stopsConfig = [
  { cardId: 'card-0', gradient: 'from-green-500 to-emerald-500', icon: 'book' },
  { cardId: 'card-1', gradient: 'from-teal-500 to-cyan-500', icon: 'code' },
  { cardId: 'card-2', gradient: 'from-blue-500 to-indigo-500', icon: 'rocket' },
  { cardId: 'card-3', gradient: 'from-purple-500 to-pink-500', icon: 'award' }
]

// Habilidades blandas con animación de escritura
const softSkills = [
  'Colaboración', 'Liderazgo', 'Comunicación', 
  'Resolución de problemas', 'Pensamiento crítico', 'Adaptabilidad', 'Creatividad'
]

const displayedSkills = ref([])
let typewriterInterval = null

const startTypewriterAnimation = () => {
  if (typewriterInterval) clearInterval(typewriterInterval)
  displayedSkills.value = []
  let currentIndex = 0
  
  typewriterInterval = setInterval(() => {
    if (currentIndex < softSkills.length) {
      displayedSkills.value.push(softSkills[currentIndex])
      currentIndex++
    } else {
      clearInterval(typewriterInterval)
    }
  }, 300)
}

const updateCircleStyle = (stopIndex) => {
  const stop = stopsConfig[stopIndex]
  if (!stop) return
  circleClass.value = `bg-gradient-to-br ${stop.gradient}`
  currentIcon.value = stop.icon
}

const showCard = (cardId) => {
  const card = document.getElementById(cardId)
  if (card && card.classList.contains('hidden')) {
    card.classList.remove('hidden')
    gsap.fromTo(card, 
      { opacity: 0, x: card.classList.contains('md:ml-[calc(50%+2rem)]') ? 50 : -50, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'back.out(0.5)' }
    )
  }
}

const hideAllCards = () => {
  stopsConfig.forEach(stop => {
    const card = document.getElementById(stop.cardId)
    if (card && !card.classList.contains('hidden')) {
      gsap.to(card, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        onComplete: () => {
          card.classList.add('hidden')
          gsap.set(card, { opacity: 1, scale: 1 })
        }
      })
    } else if (card) {
      card.classList.add('hidden')
      gsap.set(card, { opacity: 1, scale: 1 })
    }
  })
}

const animateSequential = (stopIndex, circleElement) => {
  if (stopIndex >= stopsConfig.length) {
    isAnimating.value = false
    return
  }
  
  const targetTop = stopPositions[stopIndex]
  
  gsap.to(circleElement, {
    top: `${targetTop}px`,
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      updateCircleStyle(stopIndex)
      showCard(stopsConfig[stopIndex].cardId)
      
      gsap.fromTo(circleElement, 
        { scale: 1 },
        { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 }
      )
      
      if (stopIndex + 1 < stopsConfig.length) {
        animationTimeout = setTimeout(() => {
          animateSequential(stopIndex + 1, circleElement)
        }, 1500)
      } else {
        animationTimeout = setTimeout(() => {
          isAnimating.value = false
        }, 500)
      }
    }
  })
}

const startAnimation = () => {
  const circleElement = movingCircle.value
  if (!circleElement || isAnimating.value || hasAnimated.value) return
  
  isAnimating.value = true
  
  if (animationTimeout) clearTimeout(animationTimeout)
  gsap.killTweensOf(circleElement)
  gsap.set(circleElement, { top: '0px', scale: 1 })
  updateCircleStyle(0)
  hideAllCards()
  animateSequential(0, circleElement)
  hasAnimated.value = true
}

const setupVisibilityDetection = () => {
  if (!educationSection.value) return
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated.value && !isAnimating.value) {
        setTimeout(() => startAnimation(), 300)
      }
    })
  }, { threshold: 0.3, rootMargin: '50px' })
  
  observer.observe(educationSection.value)
}

// Observer para soft skills
let softSkillsObserver = null

const setupSoftSkillsObserver = () => {
  const softSkillsElement = document.querySelector('.bg-gray-900')
  if (!softSkillsElement) return
  
  softSkillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && displayedSkills.value.length === 0) {
        startTypewriterAnimation()
        softSkillsObserver.disconnect()
      }
    })
  }, { threshold: 0.3 })
  
  softSkillsObserver.observe(softSkillsElement)
}

onMounted(() => {
  nextTick(() => {
    if (movingCircle.value) {
      gsap.set(movingCircle.value, { top: '0px', scale: 1 })
    }
    setupVisibilityDetection()
  })
  setupSoftSkillsObserver()
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (animationTimeout) clearTimeout(animationTimeout)
  if (movingCircle.value) gsap.killTweensOf(movingCircle.value)
  if (typewriterInterval) clearInterval(typewriterInterval)
  if (softSkillsObserver) softSkillsObserver.disconnect()
})
</script>

<style scoped>
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

#moving-circle {
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  will-change: top;
}

#moving-circle:hover {
  filter: brightness(1.05);
}

.timeline-container {
  position: relative;
  min-height: 900px;
}

.timeline-stop {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
}

.timeline-card.hidden {
  display: none;
}

/* Ajustes específicos para desktop */
@media (min-width: 768px) {
  .timeline-card {
    transition: all 0.3s ease;
  }
  
  .absolute.-left-3,
  .absolute.-right-3 {
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }
}
</style>