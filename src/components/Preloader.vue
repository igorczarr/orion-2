<template>
  <transition name="preloader-fade">
    <div v-if="visible" class="fixed inset-0 z-[100] flex items-center justify-center bg-[#060a14] overflow-hidden">
      <!-- Background Ambient Glow -->
      <div class="absolute inset-0 bg-gradient-to-tr from-vrt-navy via-transparent to-vrt-navy opacity-80 mix-blend-overlay"></div>
      
      <!-- Core Animation Container -->
      <div class="relative flex flex-col items-center justify-center w-full max-w-sm">
        
        <!-- Wrapper para alinhar a animação vetorial e a imagem final -->
        <div class="relative w-48 h-48 flex items-center justify-center">
          
          <!-- Animação Vetorial de Linhas (Desenho Geométrico - Vértice) -->
          <svg viewBox="0 0 100 100" class="absolute inset-0 w-full h-full text-vrt-gold drop-shadow-[0_0_15px_rgba(197,160,89,0.9)] z-20 svg-draw-wrapper" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <!-- Linha Externa (Vértice principal) -->
            <path d="M 15 75 L 50 15 L 85 75" class="draw-path-1" />
            <!-- Linha Interna (Profundidade) -->
            <path d="M 30 75 L 50 40 L 70 75" class="draw-path-2" />
            <!-- Eixo Central (Engenharia) -->
            <path d="M 50 15 L 50 85" class="draw-path-3" />
            <!-- Base de sustentação -->
            <path d="M 15 75 L 85 75" class="draw-path-4" />
          </svg>

          <!-- Logo Real em PNG (Aparece após o desenho terminar) -->
          <img src="/images/Dourado-4.png" alt="Vrtice Logo" class="absolute w-44 h-auto object-contain filter drop-shadow-[0_0_20px_rgba(197,160,89,0.8)] z-30 logo-fade-in" />
          
          <!-- Glow Pulsante para finalização -->
          <div class="absolute inset-0 w-full h-full bg-vrt-gold opacity-0 blur-[60px] rounded-full z-10 glow-reveal"></div>
        </div>
        
        <p class="mt-8 text-vrt-gold font-montserrat text-xs tracking-[0.4em] uppercase opacity-0 text-fade-in">Engenharia Digital</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(true)

onMounted(() => {
  // Preloader finaliza e some da tela após a animação (4 segundos)
  setTimeout(() => {
    visible.value = false
  }, 4000)
})
</script>

<style scoped>
/* SVG Drawing Animation Settings */
.draw-path-1, .draw-path-2, .draw-path-3, .draw-path-4 {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
}

.draw-path-1 { animation: drawLine 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
.draw-path-2 { animation: drawLine 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards; }
.draw-path-3 { animation: drawLine 1s cubic-bezier(0.4, 0, 0.2, 1) 0.7s forwards; }
.draw-path-4 { animation: drawLine 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards; }

@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}

/* Esconder o SVG gradativamente após o desenho */
.svg-draw-wrapper {
  animation: fadeOutSvg 0.8s ease 2.2s forwards;
}

@keyframes fadeOutSvg {
  0% { opacity: 1; filter: blur(0); transform: scale(1); }
  100% { opacity: 0; filter: blur(10px); transform: scale(1.1); }
}

/* Revelar a logo oficial em PNG */
.logo-fade-in {
  opacity: 0;
  transform: scale(0.9);
  animation: fadeInLogo 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2.2s forwards;
}

@keyframes fadeInLogo {
  0% { opacity: 0; transform: scale(0.95); filter: blur(10px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
}

/* Glow explosion that matches the PNG reveal */
.glow-reveal {
  animation: pulseGlow 2s ease 2s forwards;
}

@keyframes pulseGlow {
  0% { opacity: 0; transform: scale(0.8); }
  30% { opacity: 0.3; transform: scale(1.2); }
  100% { opacity: 0.1; transform: scale(1.4); }
}

/* Fade do subtítulo da marca */
.text-fade-in {
  animation: fadeInText 1s ease 2.5s forwards;
}

@keyframes fadeInText {
  to { opacity: 0.8; }
}

/* Transição global da tela do preloader sumindo */
.preloader-fade-leave-active {
  transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 1.2s ease;
}

.preloader-fade-leave-to {
  opacity: 0;
  filter: blur(20px);
}
</style>
