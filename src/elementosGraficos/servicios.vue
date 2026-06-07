<!-- Sección de Servicios -->
<template>
  <section id="servicios" class="py-16 md:py-24 bg-transparent from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-x-hidden overflow-y-visible">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
      
      <!-- Encabezado de sección -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <span>Qué ofrezco</span>
        </div>
        
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Soluciones digitales <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">a tu medida</span>
        </h2>
        
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Transformo tus ideas en productos digitales funcionales, atractivos y de alto rendimiento
        </p>
      </div>

      <!-- Carrusel Circular -->
      <div class="mb-16 overflow-visible relative">
        <CarruselCircularServicios 
          ref="carruselRef"
          :servicios="serviciosConDetalles"
          :auto-play-interval="5000"
        />
      </div>

      <!-- Sección de metodología de trabajo -->
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <MetodologiaTrabajo />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import MetodologiaTrabajo from '@/elementosGraficos/metodologiaTrabajo.vue'
import CarruselCircularServicios from '@/elementosGraficos/CarruselCircularServicios.vue'

const carruselRef = ref(null)
let scrollPosition = 0

// Datos de servicios para el carrusel circular (combinados con detalles)
const serviciosBase = [
  {
    id: 'web',
    titulo: 'Desarrollo Web',
    gradient: 'from-purple-500 to-purple-600',
    icono: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    descripcion: 'Creación de sitios web modernos, rápidos y responsive utilizando las últimas tecnologías como Vue.js, React y Tailwind CSS.',
    caracteristicas: [
      'SPA y aplicaciones web progresivas',
      'Diseño responsive y mobile-first',
      'Optimización SEO y rendimiento'
    ],
    precio: 'Desde <span class="text-purple-600 dark:text-purple-400">€800</span>',
    precioNota: 'Proyecto base · Cotización personalizada',
    detalles: {
      descripcionCompleta: 'Creación de sitios web y aplicaciones web modernas utilizando las últimas tecnologías del ecosistema JavaScript. Me enfoco en construir productos rápidos, accesibles y optimizados para SEO.',
      incluye: [
        'Desarrollo responsive (mobile, tablet, desktop)',
        'Optimización de rendimiento (Lighthouse 90+)',
        'SEO básico implementado',
        'Formularios de contacto funcionales',
        'Integración con APIs REST',
        '1 mes de soporte post-lanzamiento'
      ]
    }
  },
  {
    id: 'ecommerce',
    titulo: 'Tiendas Online',
    gradient: 'from-blue-500 to-blue-600',
    icono: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    descripcion: 'Desarrollo de e-commerce completos con pasarelas de pago, gestión de inventario y panel de administración.',
    caracteristicas: [
      'Integración con Stripe, PayPal, MercadoPago',
      'Panel de administración personalizado',
      'Gestión de productos y variantes'
    ],
    precio: 'Desde <span class="text-blue-600 dark:text-blue-400">€1,500</span>',
    precioNota: 'Incluye pasarela de pago básica',
    detalles: {
      descripcionCompleta: 'Soluciones completas de e-commerce para que puedas vender tus productos online de manera segura y profesional. Integración con las principales pasarelas de pago.',
      incluye: [
        'Catálogo de productos con filtros',
        'Carrito de compras y checkout',
        'Pasarela de pago integrada (Stripe/PayPal)',
        'Panel de administración',
        'Gestión de inventario',
        'Dashboard de ventas básico'
      ]
    }
  },
  {
    id: 'movil',
    titulo: 'Soluciones Eficientes',
    gradient: 'from-green-500 to-green-600',
    icono: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    descripcion: 'Desarrollo de soluciones orientadas a las necesidades de tu negocio, con un enfoque en la eficiencia y el rendimiento.',
    caracteristicas: [
      'Comprensión profunda de tus necesidades.',
      'Soluciones personalizadas y escalables acordes a tu negocio.',
      'Enfoque en soluciones certeras y eficientes.'
    ],
    precio: 'Desde <span class="text-green-600 dark:text-green-400">€2,500</span>',
    precioNota: 'Para proyectos complejos o a medida',
    detalles: {
      descripcionCompleta: 'Desarrollo de soluciones eficientes orientadas a tu modelo de negocio y a las necesidades epecificas del mismo.',
      incluye: [
        'Análisis detallado de requerimientos',
        'Relevamiento de procesos y flujos de trabajo',
        'Ingeniería de soluciones personalizadas',
        'Desarrollo de funcionalidades a medida',
      ]
    }
  },
  {
    id: 'consultoria',
    titulo: 'Consultoría Técnica',
    gradient: 'from-orange-500 to-orange-600',
    icono: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    descripcion: 'Asesoramiento experto en arquitectura del software, optimización de rendimiento y mejores prácticas para tu equipo.',
    caracteristicas: [
      'Auditoría de rendimiento web',
      'Code reviews y mentoring',
      'Definición de arquitectura y stack tecnológico'
    ],
    precio: '<span class="text-orange-600 dark:text-orange-400">€80/hora</span>',
    precioNota: 'Paquetes de horas disponibles',
    detalles: {
      descripcionCompleta: 'Asesoramiento experto para mejorar la calidad técnica de tus proyectos. Ideal para equipos que buscan escalar o mejorar su código.',
      incluye: [
        'Auditoría de código y rendimiento',
        'Revisión de arquitectura y stack tecnológico',
        'Revisión de código y sugerencias de mejora',
        'Sesiones de consulta y auditoria',
      ]
    }
  },
  {
    id: 'mantenimiento',
    titulo: 'Mantenimiento y Soporte',
    gradient: 'from-red-500 to-red-600',
    icono: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
    descripcion: 'Servicio continuo de mantenimiento, actualizaciones y soporte técnico para tu sitio web o aplicación.',
    caracteristicas: [
      'Actualizaciones de seguridad y versiones',
      'Backups regulares y monitoreo 24/7',
      'Soporte prioritario y resolución rápida'
    ],
    precio: 'Desde <span class="text-red-600 dark:text-red-400">€150/mes</span>',
    precioNota: 'Plan básico · Sin permanencia',
    detalles: {
      descripcionCompleta: 'Servicio continuo para mantener tu web o app siempre actualizada, segura y funcionando correctamente.',
      incluye: [
        'Actualizaciones de seguridad mensuales',
        'Backups automáticos',
        'Monitoreo 24/7 de disponibilidad',
        'Resolución de bugs prioritarios',
      ]
    }
  },
  {
    id: 'design',
    titulo: 'Diseño UI/UX',
    gradient: 'from-pink-500 to-pink-600',
    icono: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    descripcion: 'Diseño de interfaces atractivas y experiencias de usuario intuitivas centradas en la conversión.',
    caracteristicas: [
      'Prototipos interactivos en Figma',
      'Pruebas de usabilidad y research',
      'Diseño responsive y sistemas de diseño'
    ],
    precio: 'Desde <span class="text-pink-600 dark:text-pink-400">€600</span>',
    precioNota: 'Landing page o hasta 5 pantallas',
    detalles: {
      descripcionCompleta: 'Diseño de interfaces centradas en el usuario que no solo se ven bien, sino que convierten. Utilizo Figma para crear prototipos interactivos.',
      incluye: [
        'Investigación y análisis de usuarios',
        'Wireframes y prototipos interactivos',
        'Diseño UI completo (móvil + desktop)',
        'Sistema de diseño y componentes',
        'Pruebas de usabilidad',
        'Assets exportados para desarrollo'
      ]
    }
  }
]

// Combinamos los servicios con sus detalles
const serviciosConDetalles = computed(() => {
  return serviciosBase.map(servicio => ({
    ...servicio,
    detallesCompletos: servicio.detalles
  }))
})

const scrollToContacto = () => {
  setTimeout(() => {
    const contactoSection = document.getElementById('contacto')
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, 300)
}

// Eliminamos toda la lógica del modal ya que no la necesitamos más
</script>

<style scoped>
/* Asegura que la sección no corte el contenido 3D */
#servicios {
  overflow-x: hidden;
  overflow-y: visible !important;
  position: relative;
  z-index: 1;
}

.container {
  overflow: visible !important;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
}

/* Ajustes responsivos */
@media (max-width: 640px) {
  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  
  .py-16 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

/* Asegurar que el carrusel pueda desbordarse visualmente */
.mb-16 {
  margin-bottom: 4rem;
  overflow: visible !important;
}
</style>