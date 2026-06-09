<template>
  <section class="relative overflow-hidden bg-transparent py-16 md:py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <!-- Columna izquierda: Avatar + Redes Sociales -->
        <div class="relative group">
          <!-- Anillo decorativo animado más brillante -->
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 blur-md transition duration-500 group-hover:duration-200 animate-pulse"></div>
          
          <div class="relative">
            <img 
              :src="fotoPerfil"  
              alt="Maximo Cid Gigena" 
              class="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-2xl relative z-10 transition-transform duration-300 group-hover:scale-105"
            >
          </div>
        </div>

        <!-- Columna derecha: Descripción personal -->
        <div class="flex-1 text-center lg:text-left space-y-6">
          <!-- Título y rol - AHORA EN BLANCO BRILLANTE -->
          <div class="space-y-2">
            <h1 class="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Maximo Cid Gigena
            </h1>
            <div class="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              Analista de Sistemas 
            </div>
          </div>

          <!-- Tagline - BLANCO SUAVE -->
          <p class="text-xl text-gray-200 font-light italic drop-shadow-md">
            "Construyo experiencias web que se ajustan a las necesidades de tu negocio, con un enfoque en la eficiencia y la innovación."
          </p>

          <!-- Descripción - GRIS CLARO PARA BUEN CONTRASTE -->
          <div class="prose prose-invert max-w-none">
            <p class="text-gray-200 leading-relaxed">
              Soy un estudiante apasionado del area de sistemas. Desarrollador Backend/Full Stack con experiencia en sistemas administrativos y aplicaciones web orientadas a procesos de negocio. 
              
              Trabajo con Laravel, PostgreSQL, APIs REST y Vue.js, desarrollando soluciones enfocadas en digitalización y automatización de procesos.
            </p>
          </div>

          <!-- Stats rápidos - CON COLORES NEÓN BRILLANTES -->
          <div class="grid grid-cols-3 gap-4 pt-4">
            <div class="text-center lg:text-left">
              <div class="text-2xl font-bold text-cyan-400 drop-shadow-lg">2+</div>
              <div class="text-sm text-gray-300">Años de experiencia</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-2xl font-bold text-cyan-400 drop-shadow-lg">8+</div>
              <div class="text-sm text-gray-300">Proyectos completados</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-2xl font-bold text-cyan-400 drop-shadow-lg">5+</div>
              <div class="text-sm text-gray-300">Clientes satisfechos</div>
            </div>
          </div>

          <!-- CTA Buttons - MÁS BRILLANTES Y LLAMATIVOS -->
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <a 
              href="#contacto" 
              class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5"
            >
              Contáctame
            </a>
            <a 
              href="./files/CV-Gigena Maximo-2026.pdf" 
              download
              class="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition shadow-lg transform hover:-translate-y-0.5"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Decoración de fondo más brillante -->
    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
  </section>
</template>

<script setup>
import fotoPerfil from '/images/af589605-9b6a-46b2-8db0-57d34bfb34ae.jpeg'
</script>

<style scoped>
.container {
  max-width: 1280px;
}

/* Posicionamiento de los iconos alrededor de la foto */
.social-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Posiciones específicas para cada red social */
.social-linkedin {
  transform: translate(-50%, -50%) translateX(-90px) translateY(-90px);
}

.social-github {
  transform: translate(-50%, -50%) translateX(90px) translateY(-90px);
}

.social-twitter {
  transform: translate(-50%, -50%) translateX(-90px) translateY(90px);
}

.social-email {
  transform: translate(-50%, -50%) translateX(90px) translateY(90px);
}

/* Ajustes para móviles */
@media (max-width: 768px) {
  .social-linkedin {
    transform: translate(-50%, -50%) translateX(-70px) translateY(-70px);
  }
  
  .social-github {
    transform: translate(-50%, -50%) translateX(70px) translateY(-70px);
  }
  
  .social-twitter {
    transform: translate(-50%, -50%) translateX(-70px) translateY(70px);
  }
  
  .social-email {
    transform: translate(-50%, -50%) translateX(70px) translateY(70px);
  }
  
  .social-icon div {
    width: 2rem;
    height: 2rem;
  }
  
  .social-icon svg {
    width: 1rem;
    height: 1rem;
  }
}
</style>