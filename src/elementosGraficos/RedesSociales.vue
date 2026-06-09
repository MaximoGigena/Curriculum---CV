<template>
  <div class="tarjeta-gradiente bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
    <h3 class="font-semibold text-white mb-4 text-center lg:text-left">
      Encuéntrame también en:
    </h3>
    
    <!-- Grid responsivo -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 justify-items-center">
      
      <!-- LinkedIn -->
      <a 
        :href="redes.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="red-social-diagonal w-full flex justify-center"
      >
        <div class="boton-3d-wrapper">
          <div class="boton-sombra-3d sombra-linkedin"></div>
          <div class="boton-3d boton-linkedin">
            <svg class="icono" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z"/>
            </svg>
            <span class="tooltip">LinkedIn</span>
          </div>
        </div>
      </a>

      <!-- GitHub -->
      <a 
        :href="redes.github"
        target="_blank"
        rel="noopener noreferrer"
        class="red-social-diagonal w-full flex justify-center"
      >
        <div class="boton-3d-wrapper">
          <div class="boton-sombra-3d sombra-github"></div>
          <div class="boton-3d boton-github">
            <svg class="icono" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span class="tooltip">GitHub</span>
          </div>
        </div>
      </a>

      <!-- Facebook -->
      <a 
        :href="redes.facebook"
        target="_blank"
        rel="noopener noreferrer"
        class="red-social-diagonal w-full flex justify-center"
      >
        <div class="boton-3d-wrapper">
          <div class="boton-sombra-3d sombra-facebook"></div>
          <div class="boton-3d boton-facebook">
            <svg class="icono" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span class="tooltip">Facebook</span>
          </div>
        </div>
      </a>

      <!-- Instagram -->
      <a 
        :href="redes.instagram"
        target="_blank"
        rel="noopener noreferrer"
        class="red-social-diagonal w-full flex justify-center"
      >
        <div class="boton-3d-wrapper">
          <div class="boton-sombra-3d sombra-instagram"></div>
          <div class="boton-3d boton-instagram">
            <svg class="icono" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span class="tooltip">Instagram</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  redes: {
    type: Object,
    default: () => ({
      linkedin: 'https://linkedin.com/in/maximo-gigena',
      github: 'https://github.com/MaximoGigena',
      facebook: 'https://facebook.com/maximo.gigena',
      instagram: 'https://instagram.com/maximo._.cid'
    })
  }
})
</script>

<style scoped>
/* Mismo estilo que las tarjetas del padre */
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

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ========== EFECTO CRISTALINO + 3D ========== */
.red-social-diagonal {
  display: block;
  text-decoration: none;
}

.boton-3d-wrapper {
  position: relative;
  width: 100%;
  max-width: 140px;
  height: 60px;
}

.boton-sombra-3d {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transform: rotate(-32deg) skewX(-16deg) translate(8px, 8px);
  transition: all 0.3s ease;
  z-index: 0;
  backdrop-filter: blur(4px);
}

.sombra-linkedin { 
  background: rgba(0, 119, 181, 0.35);
  box-shadow: 0 8px 20px rgba(0, 119, 181, 0.25);
}
.sombra-github { 
  background: rgba(36, 41, 46, 0.35);
  box-shadow: 0 8px 20px rgba(36, 41, 46, 0.25);
}
.sombra-facebook { 
  background: rgba(24, 119, 242, 0.35);
  box-shadow: 0 8px 20px rgba(24, 119, 242, 0.25);
}
.sombra-instagram { 
  background: rgba(214, 41, 118, 0.35);
  box-shadow: 0 8px 20px rgba(214, 41, 118, 0.25);
}

.boton-3d {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: rotate(-32deg) skewX(-16deg);
  z-index: 1;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

/* Modo oscuro */
@media (prefers-color-scheme: dark) {
  .boton-3d {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}

.dark .boton-3d {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.boton-3d .icono {
  width: 28px;
  height: 28px;
  color: #1f2937;
  transition: all 0.3s ease;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1));
}

@media (prefers-color-scheme: dark) {
  .boton-3d .icono {
    color: white;
  }
}

.dark .boton-3d .icono {
  color: white;
}

.boton-3d .tooltip {
  font-size: 10px;
  font-weight: 600;
  color: #1f2937;
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-shadow: none;
}

@media (prefers-color-scheme: dark) {
  .boton-3d .tooltip {
    color: white;
  }
}

.dark .boton-3d .tooltip {
  color: white;
}

.boton-3d:hover {
  transform: rotate(-8deg) skewX(-2deg) translateY(-6px) scale(1.05);
  backdrop-filter: blur(0px);
  border: none;
}

.boton-linkedin:hover { 
  background: #0077b5;
  box-shadow: 0 8px 25px rgba(0, 119, 181, 0.4);
}
.boton-github:hover { 
  background: #24292e;
  box-shadow: 0 8px 25px rgba(36, 41, 46, 0.4);
}
.boton-facebook:hover { 
  background: #1877f2;
  box-shadow: 0 8px 25px rgba(24, 119, 242, 0.4);
}
.boton-instagram:hover { 
  background: linear-gradient(135deg, #feda77, #d62976, #962fbf, #4f5bd5);
  box-shadow: 0 8px 25px rgba(214, 41, 118, 0.4);
}

.boton-3d:hover .icono {
  color: white !important;
  transform: scale(1.1);
}

.boton-3d:hover .tooltip {
  opacity: 1;
  transform: translateY(0);
  color: white !important;
}

.boton-3d-wrapper:hover .boton-sombra-3d {
  transform: rotate(-8deg) skewX(-2deg) translate(4px, 4px);
}

.boton-3d::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);
  border-radius: 12px 12px 0 0;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.boton-3d:hover::before {
  opacity: 0;
}

@media (max-width: 640px) {
  .boton-3d-wrapper {
    max-width: 110px;
    height: 55px;
  }
  .boton-3d, .boton-sombra-3d {
    transform: rotate(-6deg) skewX(-2deg);
  }
  .boton-sombra-3d {
    transform: rotate(-6deg) skewX(-2deg) translate(6px, 6px);
  }
  .boton-3d-wrapper:hover .boton-sombra-3d {
    transform: rotate(-6deg) skewX(-2deg) translate(3px, 3px);
  }
  .boton-3d .icono {
    width: 24px;
    height: 24px;
  }
  .boton-3d .tooltip {
    font-size: 9px;
  }
}

@media (max-width: 480px) {
  .boton-3d-wrapper {
    max-width: 95px;
    height: 50px;
  }
  .boton-3d, .boton-sombra-3d {
    transform: rotate(-5deg) skewX(-2deg);
  }
  .boton-sombra-3d {
    transform: rotate(-5deg) skewX(-2deg) translate(5px, 5px);
  }
  .boton-3d-wrapper:hover .boton-sombra-3d {
    transform: rotate(-5deg) skewX(-2deg) translate(2.5px, 2.5px);
  }
  .boton-3d .icono {
    width: 22px;
    height: 22px;
  }
}
</style>