<template>
  <!-- Posicionado no bottom no mobile (bottom-4) e no topo no desktop (top-4) -->
  <div class="fixed bottom-4 md:bottom-auto md:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-700" :class="isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 md:-translate-y-10 pointer-events-none'">
    <div class="bg-[#0A1128]/80 backdrop-blur-xl border border-vrt-gold/30 rounded-full px-4 py-3 md:px-6 flex flex-col justify-center shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative overflow-hidden">
      
      <!-- Instagram-like Story Progress Bars at the very top edge -->
      <div class="absolute top-0 left-0 w-full flex gap-1 px-4 pt-1 z-10">
        <div v-for="(benefit, index) in benefits" :key="index" class="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
          <div class="h-full bg-vrt-gold rounded-full transition-all duration-100" :style="{ width: getProgressBarWidth(index) + '%' }"></div>
        </div>
      </div>
      
      <!-- Container do Conteúdo -->
      <div class="flex items-center justify-between w-full mt-2">
        <!-- Benefícios Rotativos (Dopaminérgico) -->
      <div class="flex items-center gap-3 overflow-hidden flex-1 mr-4 relative h-8">
        <div class="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-vrt-gold to-yellow-600 flex items-center justify-center p-[1px]">
          <div class="w-full h-full bg-[#0A1128] rounded-full flex items-center justify-center">
             <img src="/images/Dourado-4.png" alt="Vrtice" class="w-4 h-4 opacity-80" />
          </div>
        </div>
        
        <!-- Texto Animado -->
        <transition name="slide-up" mode="out-in">
          <span :key="currentBenefitIndex" class="text-white font-abhaya font-bold tracking-wider text-xs md:text-sm uppercase whitespace-nowrap absolute left-11 top-1/2 -translate-y-1/2">
            {{ benefits[currentBenefitIndex] }}
          </span>
        </transition>
      </div>

      <!-- CTA -->
      <a href="https://w.app/bqv1" target="_blank" class="shrink-0 inline-flex items-center justify-center px-4 py-2 text-[10px] md:text-sm font-bold text-[#040814] bg-vrt-gold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(197,160,89,0.3)]">
        GARANTIR OFERTA
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isScrolled = ref(false)
const scrollPercent = ref(0)

const benefits = [
  "Design que Converte",
  "Hospedagem Inclusa",
  "Sem Mensalidades Ocultas",
  "Direto pro seu WhatsApp"
]

const currentBenefitIndex = computed(() => {
  if (scrollPercent.value < 25) return 0;
  if (scrollPercent.value < 50) return 1;
  if (scrollPercent.value < 75) return 2;
  return 3;
})

const getProgressBarWidth = (index) => {
  if (index < currentBenefitIndex.value) return 100;
  if (index > currentBenefitIndex.value) return 0;
  
  // Para o story atual, calcula a porcentagem dentro daquele quartil (25%)
  const segmentStart = index * 25;
  const progressInSegment = (scrollPercent.value - segmentStart) / 25;
  return Math.min(Math.max(progressInSegment * 100, 0), 100);
}

const handleScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  
  if (scrollTop > 300) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }

  if (docHeight > 0) {
    let p = (scrollTop / docHeight) * 100
    scrollPercent.value = Math.min(Math.max(p, 0), 100)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(10px) translateY(-50%);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px) translateY(-50%);
}
.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(-50%);
}
</style>
