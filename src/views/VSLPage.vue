<template>
  <main>
    <!-- O Hero sempre aparece na VSL, o botão será oculto até o delay -->
    <Hero :showButton="showRest">
      <template #video>
        <!-- Placeholder do Vídeo -->
        <div class="w-full max-w-3xl aspect-video bg-black rounded-xl border border-vrt-gold/30 shadow-[0_0_30px_rgba(197,160,89,0.2)] flex items-center justify-center relative fade-in-up delay-300 z-20 group">
          <div class="absolute inset-0 bg-cover bg-center opacity-30 rounded-xl" style="background-image: url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80');"></div>
          <button class="w-20 h-20 bg-vrt-gold/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10 text-vrt-navy pl-2">
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <p class="absolute bottom-4 right-4 text-white/50 text-sm z-10">Placeholder de Vídeo</p>
        </div>
      </template>
    </Hero>

    <!-- Restante da página com fade in suave após o tempo determinado -->
    <transition name="fade-slow">
      <div v-if="showRest">
        <Problema />
        <Solucao />
        <Mecanismo />
        <ProvaSocial />
        <Oferta />
        <Garantia />
        <FooterCTA />
      </div>
    </transition>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Hero from '../components/Hero.vue'
import Problema from '../components/Problema.vue'
import Solucao from '../components/Solucao.vue'
import Mecanismo from '../components/Mecanismo.vue'
import ProvaSocial from '../components/ProvaSocial.vue'
import Oferta from '../components/Oferta.vue'
import Garantia from '../components/Garantia.vue'
import FooterCTA from '../components/FooterCTA.vue'

// Estado para exibir o restante do conteúdo
const showRest = ref(false)

onMounted(() => {
  // Simulando o tempo de pitch do VSL para revelar a página
  // Para testes reais, esse valor estaria em torno de 12-15 minutos (720000ms a 900000ms)
  // Como é uma demonstração técnica, coloquei 5 segundos (5000ms) para você poder visualizar rapidamente
  setTimeout(() => {
    showRest.value = true
  }, 5000)
})
</script>

<style scoped>
.fade-slow-enter-active {
  transition: opacity 2s ease, transform 2s ease;
}
.fade-slow-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
</style>
