<template>
  <section class="py-40 px-4 relative overflow-hidden" ref="sectionRef">
    
    <!-- Fundo de poeira e vazio infinito (Sem bordas, sem caixas) -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-vrt-gold/5 blur-[150px] mix-blend-screen opacity-70 transition-opacity duration-1000" :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"></div>
    </div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      
      <!-- Cabeçalho (Minimalista, Dopaminérgico) -->
      <div class="text-center mb-32 transition-all duration-1000 transform" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <p class="text-vrt-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 animate-pulse">A Quebra de Padrão</p>
        <h2 class="text-5xl md:text-7xl lg:text-[6rem] font-abhaya font-extrabold text-white leading-[1.05] tracking-tight drop-shadow-2xl">
          Sua <span class="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">identidade.</span><br/>
          Sem <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#F2D492] to-[#8C6D33] italic pr-2">nenhum esforço.</span>
        </h2>
      </div>

      <!-- Core Features (Tipografia Flutuante & Assimétrica - Fim do Bento Box) -->
      <div class="relative min-h-[600px] flex flex-col justify-center gap-32">
        
        <!-- O Que É (Esquerda) -->
        <div class="w-full md:w-1/2 self-start transition-all duration-1000 reveal-delay-200 group relative" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
          <!-- Efeito de Hover sutil (sem borda) -->
          <div class="absolute -inset-8 bg-white/0 group-hover:bg-white/[0.02] rounded-3xl blur-2xl transition-all duration-700 pointer-events-none"></div>
          
          <div class="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div class="w-px h-16 bg-gradient-to-b from-vrt-gold to-transparent hidden md:block"></div>
            <div class="h-px w-16 bg-gradient-to-r from-vrt-gold to-transparent md:hidden block"></div>
            <h3 class="text-4xl md:text-6xl font-abhaya font-bold text-white tracking-wide">Done-For-You</h3>
          </div>
          <p class="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-lg md:pl-6">
            Nós abolimos construtores arrastados. Nós montamos toda a engenharia visual. 
            Por únicos <strong class="text-white font-medium">R$ 50</strong>, entregamos a chave na sua mão. Sem mensalidades.
          </p>
        </div>

        <!-- Exclusividade (Direita) -->
        <div class="w-full md:w-1/2 self-end transition-all duration-1000 reveal-delay-400 group relative" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
          <!-- Efeito de Hover sutil (sem borda) -->
          <div class="absolute -inset-8 bg-white/0 group-hover:bg-white/[0.02] rounded-3xl blur-2xl transition-all duration-700 pointer-events-none"></div>
          
          <div class="flex flex-col md:flex-row-reverse md:items-center gap-6 mb-6 text-left md:text-right">
            <div class="w-px h-16 bg-gradient-to-b from-vrt-gold to-transparent hidden md:block"></div>
            <div class="h-px w-16 bg-gradient-to-l from-vrt-gold to-transparent md:hidden block"></div>
            <h3 class="text-4xl md:text-6xl font-abhaya font-bold text-white tracking-wide">Alta Costura <br class="hidden md:block"/> Digital</h3>
          </div>
          <p class="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-lg ml-auto text-left md:text-right md:pr-6">
            Enquanto as ferramentas gratuitas deixam todos iguais, nossos designers moldam os pixels para refletir perfeitamente o seu <span class="text-vrt-gold italic">status de especialista</span>.
          </p>
        </div>
        
      </div>

      <!-- Urgência (Visceral & Tipográfica - Sem Caixa Vermelha) -->
      <div class="mt-48 text-center relative transition-all duration-1000 reveal-delay-500" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <!-- Sangramento de luz vermelha (Cinematográfico) -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[400px] bg-red-900/10 blur-[120px] pointer-events-none -z-10 mix-blend-screen opacity-50"></div>
        
        <h3 class="text-2xl md:text-3xl text-gray-500 font-light tracking-wide mb-8 uppercase text-sm tracking-[0.2em]">
          A dura realidade
        </h3>
        <p class="text-3xl md:text-5xl lg:text-6xl font-abhaya font-bold text-white leading-tight max-w-4xl mx-auto drop-shadow-2xl">
          A cada dia que você usa um link amador, concorrentes piores que você <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">estão roubando seus clientes.</span>
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.15
  })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>
