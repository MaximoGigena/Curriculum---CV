<!-- App.vue -->
<script setup>
import { onMounted } from 'vue'
import RhombusNavigation from '@/elementosGraficos/VerticalRombosNav.vue'
import DecoratedBackground from '@/elementosGraficos/fondo.vue'

// Importar componentes de secciones
import InicioSection from '@/elementosGraficos/perfil.vue'
import ServiciosSection from '@/elementosGraficos/servicios.vue'
import EducacionSection from '@/elementosGraficos/educacion.vue'  // Cambiado de ProyectosSection a EducacionSection
import ContactoSection from '@/elementosGraficos/contacto.vue'

// Aquí defines las secciones - CAMBIADO proyectos por educación
const navigationItems = [
  { id: 'inicio', label: 'Inicio', icon: 'fas fa-home' },
  { id: 'servicios', label: 'Servicios', icon: 'fas fa-cogs' },
  { id: 'educacion', label: 'Educación', icon: 'fas fa-graduation-cap' },  // Cambiado: id, label e icon
  { id: 'contacto', label: 'Contacto', icon: 'fas fa-envelope' }
]

// Opcional: manejar cambios de sección
const handleSectionChange = (sectionId) => {
  console.log('Sección activa:', sectionId)
  // Aquí puedes agregar lógica adicional cuando cambia la sección
}

onMounted(() => {
  // Cambia 'maxi-desarrollador' por el nombre que quieras
  const nuevoNombreURL = '/portafolio-Maximo_Cid-desarrollador'
  
  // Esto cambia la URL sin recargar la página
  window.history.replaceState({}, '', nuevoNombreURL)
})
</script>

<template>
  <main class="relative">
    <DecoratedBackground />

    <RhombusNavigation 
      :items="navigationItems"
      @section-change="handleSectionChange"
    />
    
    <!-- Tus secciones con IDs - CAMBIADO el ID de proyectos a educacion -->
    <section id="inicio" class="relative z-10">
      <InicioSection />
    </section>
    
    <section id="servicios" class="relative z-10">
      <ServiciosSection />
    </section>
    
    <section id="educacion" class="relative z-10">  <!-- Cambiado de "proyectos" a "educacion" -->
      <EducacionSection />  <!-- Cambiado el componente -->
    </section>
    
    <section id="contacto" class="relative z-10">
      <ContactoSection />
    </section>
  </main>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, #888 1px, transparent 1px),
    linear-gradient(to bottom, #888 1px, transparent 1px);
  background-size: 40px 40px;
}

main {
  animation: gradientShift 15s ease-in-out infinite alternate;
}

@keyframes gradientShift {
  0% {
    background-size: 100% 100%;
  }
  100% {
    background-size: 150% 150%;
  }
}

/* Prevenir scroll cuando el modal está abierto */
body.modal-open {
  overflow: hidden !important;
  position: fixed !important;
  width: 100% !important;
  height: 100% !important;
}

/* Asegurar que el carrusel no interfiera con el scroll */
.carrusel-3d-container {
  overflow: visible !important;
  pointer-events: auto;
}

/* Hacer que los contenedores padres no capturen eventos de scroll */
#servicios,
.container,
.overflow-visible {
  overflow: visible !important;
}

/* Mejorar el rendimiento del scroll */
* {
  -webkit-overflow-scrolling: touch;
}

/* Evitar que las transformaciones 3D bloqueen el scroll */
.preserve-3d,
[style*="preserve-3d"] {
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}

/* Asegurar que el body siempre pueda scrollear */
html, body {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  overflow-y: auto !important;
  position: relative;
}
</style>