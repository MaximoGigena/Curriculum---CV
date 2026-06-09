<template>
  <div class="fixed inset-0 -z-10 overflow-hidden">
    <!-- Fondo base extremadamente oscuro (casi negro) -->
    <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
    
    <!-- Gradiente animado más sutil y oscuro -->
    <div class="absolute inset-0 bg-gradient-animated"></div>
    
    <!-- Capas de aurora boreal muy sutiles (casi imperceptibles) -->
    <div class="absolute inset-0 aurora-wrapper">
      <div class="absolute aurora aurora-1"></div>
      <div class="absolute aurora aurora-2"></div>
      <div class="absolute aurora aurora-3"></div>
    </div>
    
    <!-- Estrellas fugaces -->
    <div class="shooting-stars-container">
      <div class="shooting-star shooting-star-1"></div>
      <div class="shooting-star shooting-star-2"></div>
      <div class="shooting-star shooting-star-3"></div>
    </div>
    
    <!-- Estrellas titilantes mucho más visibles -->
    <div class="stars stars-enhanced"></div>
    
    <!-- Estrellas adicionales más brillantes -->
    <div class="stars stars-bright"></div>
    
    <!-- Patrón de cuadrícula muy sutil -->
    <div class="absolute inset-0 bg-grid-pattern opacity-3"></div>
    
    <!-- Elementos decorativos muy oscuros y sutiles -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-950 rounded-full mix-blend-screen opacity-3 blur-3xl animate-float"></div>
    <div class="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-950 rounded-full mix-blend-screen opacity-2 blur-3xl animate-float-delayed"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  auroraIntensity: {
    type: String,
    default: 'light'
  },
  auroraColors: {
    type: Array,
    default: () => ['#0a0a0f', '#0f0f1a', '#0a0a10', '#050508']
  },
  shootingStarInterval: {
    type: Number,
    default: 8000 // Intervalo en milisegundos entre estrellas fugaces
  }
})

const getOpacity = (intensity) => {
  const opacities = {
    light: 0.08,
    medium: 0.15,
    intense: 0.25
  }
  return opacities[intensity] || opacities.light
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(59,130,246,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59,130,246,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
}

.bg-gradient-animated {
  background: linear-gradient(
    135deg,
    #000000 0%,
    #050508 15%,
    #0a0a12 30%,
    #0a0a12 50%,
    #050508 70%,
    #000000 85%,
    #000000 100%
  );
  background-size: 300% 300%;
  animation: gradientFlow 15s ease-in-out infinite alternate;
  opacity: 0.6;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 0%;
    opacity: 0.4;
  }
  50% {
    background-position: 100% 50%;
    opacity: 0.6;
  }
  100% {
    background-position: 0% 100%;
    opacity: 0.4;
  }
}

.bg-gradient-to-br {
  animation: gradientBreathing 12s ease-in-out infinite alternate;
}

@keyframes gradientBreathing {
  0% {
    background-size: 100% 100%;
    opacity: 1;
  }
  100% {
    background-size: 105% 105%;
    opacity: 0.98;
  }
}

.aurora-wrapper {
  filter: blur(60px);
  mix-blend-mode: screen;
}

.aurora {
  background: radial-gradient(ellipse at center, transparent 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(80px);
  animation: auroraWave 20s ease-in-out infinite alternate;
}

.aurora-1 {
  background: radial-gradient(ellipse at 30% 50%, #0f172a, #000000, transparent);
  width: 120%;
  height: 85%;
  top: -20%;
  left: -10%;
  animation-delay: 0s;
  animation-duration: 25s;
  opacity: v-bind('getOpacity(auroraIntensity)');
}

.aurora-2 {
  background: radial-gradient(ellipse at 70% 40%, #0a0f1a, #000000, transparent);
  width: 110%;
  height: 75%;
  top: -15%;
  left: -5%;
  animation-delay: 5s;
  animation-duration: 28s;
  opacity: v-bind('getOpacity(auroraIntensity)') * 0.8;
}

.aurora-3 {
  background: radial-gradient(ellipse at 50% 60%, #05050a, #000000, transparent);
  width: 100%;
  height: 65%;
  top: 5%;
  left: 0%;
  animation-delay: 10s;
  animation-duration: 30s;
  opacity: v-bind('getOpacity(auroraIntensity)') * 0.6;
}

@keyframes auroraWave {
  0% {
    transform: translateX(-5%) translateY(0%) scale(1) rotate(0deg);
    opacity: 0.05;
  }
  50% {
    transform: translateX(5%) translateY(-5%) scale(1.1) rotate(2deg);
    opacity: 0.15;
  }
  100% {
    transform: translateX(-5%) translateY(0%) scale(1) rotate(0deg);
    opacity: 0.05;
  }
}

/* Estrellas fugaces */
.shooting-stars-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.shooting-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: linear-gradient(135deg, #ffffff, rgba(255,255,255,0));
  border-radius: 50%;
  filter: blur(1px);
  opacity: 0;
}

/* Estrella fugaz 1 - Diagonal de izquierda a derecha */
.shooting-star-1 {
  top: 10%;
  left: -10%;
  animation: shootingStar1 6s ease-in-out infinite;
  animation-delay: 0s;
}

/* Estrella fugaz 2 - Diagonal más pronunciada desde arriba */
.shooting-star-2 {
  top: 20%;
  left: -15%;
  animation: shootingStar2 7s ease-in-out infinite;
  animation-delay: 4s;
}

/* Estrella fugaz 3 - Trayectoria desde el centro superior */
.shooting-star-3 {
  top: 30%;
  left: -5%;
  animation: shootingStar3 5.5s ease-in-out infinite;
  animation-delay: 9s;
}

@keyframes shootingStar1 {
  0% {
    transform: translateX(0) translateY(0) rotate(0deg);
    opacity: 0;
    width: 2px;
    height: 2px;
  }
  10% {
    opacity: 1;
  }
  20% {
    opacity: 1;
    width: 3px;
    height: 3px;
  }
  30% {
    opacity: 0.8;
  }
  100% {
    transform: translateX(120vw) translateY(40vh) rotate(25deg);
    opacity: 0;
    width: 6px;
    height: 6px;
  }
}

@keyframes shootingStar2 {
  0% {
    transform: translateX(0) translateY(0) rotate(0deg);
    opacity: 0;
    width: 2px;
    height: 2px;
  }
  10% {
    opacity: 1;
  }
  20% {
    opacity: 0.9;
    width: 4px;
    height: 4px;
  }
  35% {
    opacity: 0.7;
  }
  100% {
    transform: translateX(130vw) translateY(60vh) rotate(35deg);
    opacity: 0;
    width: 7px;
    height: 7px;
  }
}

@keyframes shootingStar3 {
  0% {
    transform: translateX(0) translateY(0) rotate(0deg);
    opacity: 0;
    width: 1px;
    height: 1px;
  }
  15% {
    opacity: 1;
  }
  25% {
    opacity: 0.95;
    width: 5px;
    height: 5px;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateX(110vw) translateY(50vh) rotate(45deg);
    opacity: 0;
    width: 8px;
    height: 8px;
  }
}

/* Añadir estela a las estrellas fugaces */
.shooting-star::before {
  content: '';
  position: absolute;
  top: 0;
  left: -20px;
  width: 20px;
  height: 2px;
  background: linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0));
  transform: rotate(25deg);
  transform-origin: right center;
}

.shooting-star-1::before {
  animation: trail1 6s ease-in-out infinite;
  animation-delay: 0s;
}

.shooting-star-2::before {
  animation: trail2 7s ease-in-out infinite;
  animation-delay: 4s;
}

.shooting-star-3::before {
  animation: trail3 5.5s ease-in-out infinite;
  animation-delay: 9s;
}

@keyframes trail1 {
  0%, 10% {
    opacity: 0;
    width: 0;
  }
  15% {
    opacity: 0.8;
    width: 30px;
  }
  25% {
    opacity: 0.6;
    width: 40px;
  }
  40%, 100% {
    opacity: 0;
    width: 20px;
  }
}

@keyframes trail2 {
  0%, 10% {
    opacity: 0;
    width: 0;
  }
  15% {
    opacity: 0.7;
    width: 35px;
  }
  30% {
    opacity: 0.5;
    width: 45px;
  }
  45%, 100% {
    opacity: 0;
    width: 25px;
  }
}

@keyframes trail3 {
  0%, 10% {
    opacity: 0;
    width: 0;
  }
  15% {
    opacity: 0.9;
    width: 25px;
  }
  28% {
    opacity: 0.6;
    width: 38px;
  }
  45%, 100% {
    opacity: 0;
    width: 22px;
  }
}

/* Estrellas mejoradas - mucho más visibles */
.stars-enhanced {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(2px 2px at 10% 20%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 15% 45%, #e0e4ff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 25% 10%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(3px 3px at 35% 70%, #d0d8ff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 40% 30%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 50% 85%, #c8d0ff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 55% 15%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(3px 3px at 65% 50%, #e8ecff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 70% 25%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 80% 60%, #d8e0ff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 85% 90%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(3px 3px at 92% 35%, #f0f4ff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 5% 80%, #c0c8ff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 45% 5%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 75% 95%, #e0e8ff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 95% 15%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(3px 3px at 20% 92%, #d4dcff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 60% 40%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 30% 55%, #e8ecff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 88% 78%, #ffffff, rgba(0,0,0,0));
  background-repeat: no-repeat;
  background-size: 250px 250px;
  animation: twinkleStars 4s ease-in-out infinite alternate;
  pointer-events: none;
}

/* Estrellas más brillantes y grandes (pocas pero intensas) */
.stars-bright {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(3px 3px at 18% 35%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(4px 4px at 42% 68%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(3px 3px at 67% 22%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(5px 5px at 83% 55%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(3px 3px at 27% 88%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(4px 4px at 55% 43%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(3px 3px at 76% 79%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(4px 4px at 94% 12%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(3px 3px at 8% 58%, #ffffff, rgba(0,0,0,0)),
    radial-gradient(5px 5px at 48% 92%, #ffffff, rgba(0,0,0,0));
  background-repeat: no-repeat;
  background-size: 200px 200px;
  animation: twinkleStarsBright 3s ease-in-out infinite alternate;
  pointer-events: none;
  filter: blur(0.5px);
}

@keyframes twinkleStars {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes twinkleStarsBright {
  0% {
    opacity: 0.5;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1.05);
  }
}

/* Animaciones flotantes más sutiles */
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(10px, -10px) scale(1.05);
  }
}

@keyframes floatDelayed {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-10px, 10px) scale(1.05);
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: floatDelayed 22s ease-in-out infinite;
}

/* Efecto de viñeta para dar más profundidad */
.aurora-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%);
  pointer-events: none;
}
</style>