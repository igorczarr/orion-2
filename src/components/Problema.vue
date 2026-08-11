<template>
  <section class="py-32 px-4 relative z-10" ref="sectionRef">
    <div class="max-w-6xl mx-auto">
      
      <!-- Headline Principal -->
      <h2 
        class="text-4xl md:text-5xl lg:text-6xl font-abhaya font-bold text-center mb-24 leading-tight text-white drop-shadow-xl max-w-4xl mx-auto transition-all duration-1000"
        :class="isVisible ? 'reveal-visible' : 'reveal-hidden'"
      >
        Você já se sentiu 
        <span class="relative inline-block mx-2">
          <span class="relative z-10 text-gray-600 line-through decoration-red-600/80 decoration-[3px] md:decoration-[5px]">invisível</span>
          <span class="absolute inset-0 bg-red-600/10 blur-lg"></span>
        </span> 
        em um mar de profissionais talentosos, mas <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">não reconhecidos?</span>
      </h2>
      
      <!-- Container que constrói o efeito Glass dinamicamente no Scroll -->
      <div 
        ref="glassContainer"
        class="p-10 md:p-16 lg:p-20 rounded-[2.5rem] relative overflow-hidden transition-all duration-75 group"
        :style="{
          backgroundColor: `rgba(10, 15, 30, ${0.4 * glassProgress})`,
          backdropFilter: `blur(${24 * glassProgress}px)`,
          WebkitBackdropFilter: `blur(${24 * glassProgress}px)`,
          borderColor: `rgba(197, 160, 89, ${0.3 * glassProgress})`,
          borderWidth: '1px',
          borderStyle: 'solid',
          transform: `translateY(${40 * (1 - glassProgress)}px) scale(${0.98 + (0.02 * glassProgress)})`,
          opacity: 0.1 + (0.9 * glassProgress),
          boxShadow: `0 ${30 * glassProgress}px ${60 * glassProgress}px rgba(0,0,0,${0.6 * glassProgress}), inset 0 0 ${20 * glassProgress}px rgba(197,160,89,${0.05 * glassProgress})`
        }"
      >
        <!-- Ambient light flutuante que acompanha o efeito -->
        <div class="absolute -top-32 -right-32 w-80 h-80 bg-red-600 rounded-full blur-[120px]" :style="{ opacity: 0.08 * glassProgress }"></div>
        <div class="absolute -bottom-32 -left-32 w-80 h-80 bg-vrt-gold rounded-full blur-[120px]" :style="{ opacity: 0.12 * glassProgress }"></div>
        
        <!-- Grid Editorial (Tipografia Premium) -->
        <div class="relative z-10 grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <!-- Lado Esquerdo: Frase de Impacto -->
          <div class="md:col-span-5 relative">
            <div class="absolute -top-16 -left-8 text-[150px] text-vrt-gold opacity-[0.15] font-serif leading-none select-none">“</div>
            <h3 class="text-3xl lg:text-4xl font-abhaya font-bold text-white leading-snug relative z-10 pt-4">
              Fica acordado à noite, atormentado pela dúvida: <br/><br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-vrt-gold to-yellow-600">“E se todo o meu esforço não valer a pena?”</span>
            </h3>
          </div>
          
          <!-- Lado Direito: Narrativa -->
          <div class="md:col-span-7 space-y-8 text-lg md:text-xl text-gray-300 font-montserrat font-light leading-relaxed md:border-l border-gray-800 md:pl-10">
            <p>
              <strong class="text-white font-medium tracking-wide">Imagine a cena:</strong> você, um verdadeiro guerreiro solitário, lutando dia após dia para provar seu valor. Você investiu tempo, esforço e dinheiro em cursos, tutoriais e fórmulas mágicas, mas, no fundo, ainda se sente como um impostor.
            </p>
            
            <p class="opacity-90">
              Você não está sozinho. Milhares de profissionais como você passam por isso, tentando encontrar um espaço neste mercado saturado, onde as soluções rápidas e superficiais parecem reinar. 
            </p>
            
            <div class="pt-6 mt-6 border-t border-gray-800/50">
              <p class="text-white font-semibold text-xl bg-vrt-gold/10 inline-block px-4 py-2 rounded-lg border border-vrt-gold/20">
                Os “gurus” do marketing vendem ilusões, enquanto você, com suas habilidades técnicas e conhecimento profundo, fica à mercê da frustração.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const glassContainer = ref(null)
const glassProgress = ref(0) // Vai de 0 a 1

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

const handleScroll = () => {
  if (!glassContainer.value) return
  
  const rect = glassContainer.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  
  const visiblePx = windowHeight - rect.top
  const triggerDistance = Math.min(windowHeight * 0.7, 500) 
  
  let progress = visiblePx / triggerDistance
  
  if (progress < 0) progress = 0
  if (progress > 1) progress = 1
  
  glassProgress.value = progress
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>
