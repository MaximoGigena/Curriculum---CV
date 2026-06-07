<template>
  <div class="fixed inset-0 -z-10 overflow-hidden">
    <!-- Fondo base profundo casi negro -->
    <div class="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-blue-900"></div>
    
    <!-- Gradiente animado principal con azules oscuros -->
    <div class="absolute inset-0 bg-gradient-animated"></div>
    
    <!-- Capas de aurora boreal con tonos azules oscuros -->
    <div class="absolute inset-0 aurora-wrapper">
      <!-- Aurora 1 - Azul profundo -->
      <div class="absolute aurora aurora-1"></div>
      <!-- Aurora 2 - Azul medianoche -->
      <div class="absolute aurora aurora-2"></div>
      <!-- Aurora 3 - Azul marino -->
      <div class="absolute aurora aurora-3"></div>
      <!-- Aurora 4 - Azul eléctrico sutil -->
      <div class="absolute aurora aurora-4"></div>
    </div>
    
    <!-- Estrellas titilantes -->
    <div class="stars"></div>
    
    <!-- Patrón de cuadrícula sutil -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
    
    <!-- Elementos decorativos borrosos -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen opacity-5 blur-3xl animate-float"></div>
    <div class="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-800 rounded-full mix-blend-screen opacity-5 blur-3xl animate-float-delayed"></div>
    <div class="absolute top-1/3 right-1/3 w-80 h-80 bg-indigo-900 rounded-full mix-blend-screen opacity-5 blur-3xl animate-pulse-slow"></div>
  </div>
</template>

<script setup>
// Props para personalizar la intensidad de la aurora
const props = defineProps({
  auroraIntensity: {
    type: String,
    default: 'medium' // 'light', 'medium', 'intense'
  },
  auroraColors: {
    type: Array,
    default: () => ['#1e3a8a', '#1e40af', '#1e3a8a', '#0f172a']
  }
})

// Calcular opacidad basada en intensidad
const getOpacity = (intensity) => {
  const opacities = {
    light: 0.15,
    medium: 0.3,
    intense: 0.5
  }
  return opacities[intensity] || opacities.medium
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(59,130,246,0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59,130,246,0.1) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Nuevo gradiente animado mejorado */
.bg-gradient-animated {
  background: linear-gradient(
    135deg,
    #0a0f1e 0%,
    #0a1128 10%,
    #0a1628 20%,
    #0b1a35 30%,
    #0a1a3a 40%,
    #091c3a 50%,
    #0a1a35 60%,
    #0b1628 70%,
    #0a1128 80%,
    #0a0f1e 90%,
    #0a0f1e 100%
  );
  background-size: 300% 300%;
  animation: gradientFlow 12s ease-in-out infinite alternate;
  opacity: 0.8;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 0%;
    opacity: 0.7;
  }
  25% {
    background-position: 50% 25%;
    opacity: 0.85;
  }
  50% {
    background-position: 100% 50%;
    opacity: 0.9;
  }
  75% {
    background-position: 50% 75%;
    opacity: 0.85;
  }
  100% {
    background-position: 0% 100%;
    opacity: 0.7;
  }
}

/* Mejora de la animación del gradiente de fondo base */
.bg-gradient-to-br {
  animation: gradientBreathing 10s ease-in-out infinite alternate;
}

@keyframes gradientBreathing {
  0% {
    background-size: 100% 100%;
    background-position: 0% 0%;
    opacity: 1;
  }
  50% {
    background-size: 115% 115%;
    background-position: 3% 3%;
    opacity: 0.98;
  }
  100% {
    background-size: 100% 100%;
    background-position: 0% 0%;
    opacity: 1;
  }
}

/* Estilos de aurora boreal mejorados */
.aurora-wrapper {
  filter: blur(50px);
  mix-blend-mode: screen;
}

.aurora {
  background: radial-gradient(ellipse at center, transparent 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(70px);
  animation: auroraWave 15s ease-in-out infinite alternate;
}

.aurora-1 {
  background: radial-gradient(ellipse at 30% 50%, #1e40af, #0f172a, transparent);
  width: 120%;
  height: 85%;
  top: -20%;
  left: -10%;
  animation-delay: 0s;
  animation-duration: 18s;
  opacity: v-bind('getOpacity(auroraIntensity)');
}

.aurora-2 {
  background: radial-gradient(ellipse at 70% 40%, #1e3a8a, #0a0f2a, transparent);
  width: 110%;
  height: 75%;
  top: -15%;
  left: -5%;
  animation-delay: 3s;
  animation-duration: 20s;
  opacity: v-bind('getOpacity(auroraIntensity)') * 0.9;
}

.aurora-3 {
  background: radial-gradient(ellipse at 50% 60%, #1e40af, #0f172a, transparent);
  width: 100%;
  height: 65%;
  top: 5%;
  left: 0%;
  animation-delay: 6s;
  animation-duration: 22s;
  opacity: v-bind('getOpacity(auroraIntensity)') * 0.8;
}

.aurora-4 {
  background: radial-gradient(ellipse at 85% 30%, #2563eb, #0a1128, transparent);
  width: 90%;
  height: 55%;
  top: 15%;
  left: 8%;
  animation-delay: 9s;
  animation-duration: 19s;
  opacity: v-bind('getOpacity(auroraIntensity)') * 0.7;
}

@keyframes auroraWave {
  0% {
    transform: translateX(-8%) translateY(0%) scale(1) rotate(0deg);
    opacity: 0.15;
  }
  20% {
    transform: translateX(0%) translateY(-3%) scale(1.08) rotate(1deg);
    opacity: 0.4;
  }
  40% {
    transform: translateX(8%) translateY(-8%) scale(1.15) rotate(2deg);
    opacity: 0.5;
  }
  60% {
    transform: translateX(12%) translateY(-12%) scale(1.2) rotate(3deg);
    opacity: 0.45;
  }
  80% {
    transform: translateX(5%) translateY(-5%) scale(1.1) rotate(1.5deg);
    opacity: 0.35;
  }
  100% {
    transform: translateX(-8%) translateY(0%) scale(1) rotate(0deg);
    opacity: 0.2;
  }
}

/* Estrellas titilantes mejoradas */
.stars {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #c4d4ff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 60px 80px, #b8c8ff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 150px 40px, #c0d0ff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 200px 150px, #a8b8ff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 300px 90px, #d0e0ff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 400px 200px, #b0c0ff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 500px 50px, #c8d8ff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 600px 120px, #a0b0f0, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 700px 180px, #d0e0ff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 800px 60px, #b8c8ff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 900px 250px, #c0d0ff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 1000px 100px, #a8b8ff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 1100px 300px, #d0e0ff, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 1200px 180px, #b0c0ff, rgba(0,0,0,0));
  background-repeat: no-repeat;
  background-size: 200px 200px;
  animation: twinkleStars 3s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes twinkleStars {
  0% {
    opacity: 0.2;
  }
  30% {
    opacity: 0.6;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.8;
  }
}

/* Animaciones para elementos flotantes */
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(25px, -25px) scale(1.15);
  }
  66% {
    transform: translate(-15px, 20px) scale(0.92);
  }
}

@keyframes floatDelayed {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(-20px, 25px) scale(0.92);
  }
  66% {
    transform: translate(30px, -15px) scale(1.15);
  }
}

@keyframes pulseSlow {
  0%, 100% {
    opacity: 0.03;
    transform: scale(1);
  }
  50% {
    opacity: 0.12;
    transform: scale(1.4);
  }
}

.animate-float {
  animation: float 18s ease-in-out infinite;
}

.animate-float-delayed {
  animation: floatDelayed 20s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 14s ease-in-out infinite;
}

/* Efecto de brillo adicional en los bordes */
.aurora-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.3) 100%);
  pointer-events: none;
}
</style>