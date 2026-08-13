<template>
  <section class="relative min-h-screen flex flex-col items-center justify-start text-center px-4 pt-32 pb-24 overflow-hidden" ref="heroRef">
    <!-- 1. Cinematic Background Layer (Global background handles the base color and noise) -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <!-- Top Spotlight -->
      <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-vrt-gold opacity-[0.08] rounded-full blur-[120px] mix-blend-screen"></div>
      
      <!-- Subtle Tech Grid with Mask -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDBIMHY2MGg2MFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCAwSDBWMGg2MHY2MEgwVjB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"></div>
    </div>

    <!-- Top Header (Logo) -->
    <header class="absolute top-0 left-0 w-full p-6 md:p-10 z-50">
      <img src="/images/Dourado-4.png" alt="Vrtice Logo" class="h-10 md:h-12 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(197,160,89,0.5)] transition-all duration-1000" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'" />
    </header>

    <!-- 2. Main Content Container -->
    <div class="z-10 w-full max-w-5xl mx-auto flex flex-col items-center mt-8">
      
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-vrt-gold/20 bg-vrt-gold/5 backdrop-blur-md mb-10 shadow-[0_0_20px_rgba(197,160,89,0.05)] transition-all duration-1000 reveal-delay-100" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <span class="w-2 h-2 rounded-full bg-vrt-gold animate-pulse"></span>
        <span class="text-vrt-gold text-xs font-semibold tracking-[0.2em] uppercase">Vrtice • Engenharia de Reconhecimento</span>
      </div>
      
      <!-- Headline -->
      <h1 class="text-4xl md:text-6xl lg:text-[4.5rem] font-abhaya font-bold text-white leading-[1.1] mb-8 tracking-tight flex flex-col items-center w-full transition-all duration-1000 reveal-delay-200" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <span class="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium tracking-normal mb-2 opacity-90">Bio que Vende: A Transformação Imediata para se Tornar uma</span>
        
        <span class="relative inline-block my-2">
          <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-[#F2D492] via-[#C5A059] to-[#8C6D33] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-2">
            Autoridade Digital<br class="hidden md:block" /> Reconhecida!
          </span>
          <span class="absolute inset-0 z-0 bg-vrt-gold blur-[40px] opacity-20"></span>
        </span>
      </h1>
      
      <!-- Subheadline -->
      <p class="text-lg md:text-xl text-gray-400 font-montserrat max-w-2xl mx-auto mb-16 font-light leading-relaxed transition-all duration-1000 reveal-delay-300" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        Você Está Prestes a Revolucionar Sua Presença Online e Alcançar o <strong class="text-white font-medium">Reconhecimento Que Sempre Mereceu!</strong>
      </p>

      <!-- Video Slot Wrapper -->
      <div class="w-full max-w-4xl relative transition-all duration-1000 reveal-delay-400" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <div class="absolute -inset-1 bg-gradient-to-r from-vrt-gold/0 via-vrt-gold/20 to-vrt-gold/0 rounded-2xl blur opacity-0 transition-opacity duration-1000 group-hover:opacity-100"></div>
        <div class="relative">
          <slot name="video"></slot>
        </div>
      </div>

      <!-- Call to Action -->
      <div v-if="showButton" class="mt-16 relative z-20 transition-all duration-1000 reveal-delay-500" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <a href="#oferta" class="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-base md:text-lg text-[#040814] rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02]">
          <!-- Button Background -->
          <div class="absolute inset-0 w-full h-full bg-gradient-to-b from-[#F2D492] via-[#C5A059] to-[#997637] transition-all duration-500 group-hover:scale-110"></div>
          <!-- Inner Shadow -->
          <div class="absolute inset-0 w-full h-full rounded-full border border-white/40 mix-blend-overlay"></div>
          <!-- Outer Glow -->
          <div class="absolute -inset-2 bg-vrt-gold/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <span class="relative flex items-center tracking-wide">
            QUERO MINHA LINK PAGE AGORA!
            <svg class="w-5 h-5 ml-3 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
        </a>
        <p class="mt-4 text-xs text-gray-500 font-montserrat uppercase tracking-widest">Oferta exclusiva por tempo limitado</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  showButton: {
    type: Boolean,
    default: true
  }
})

const isVisible = ref(false)

onMounted(() => {
  // Dispara a animação do Hero logo após o componente montar
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>
