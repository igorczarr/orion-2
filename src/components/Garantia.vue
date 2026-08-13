<template>
  <section class="py-32 px-4 relative overflow-hidden" ref="garantiaRef">
    
    <div class="max-w-5xl mx-auto relative z-10">
      
      <div 
        class="bg-gradient-to-br from-[#060a14] to-[#04060a] border border-gray-800 rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group transform transition-all duration-1000"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-12 opacity-0': !isVisible }"
      >
        <!-- Security Pattern Background -->
        <div class="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjI1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] pointer-events-none"></div>
        
        <!-- Animated Corner Glow -->
        <div class="absolute -top-32 -left-32 w-64 h-64 bg-vrt-gold/20 rounded-full blur-[100px] group-hover:bg-vrt-gold/30 transition-colors duration-1000"></div>
        
        <div class="grid md:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <!-- Lado Esquerdo: O Selo de Garantia -->
          <div class="md:col-span-5 flex justify-center relative">
            <!-- Pulsing Rings -->
            <div class="absolute inset-0 bg-vrt-gold/10 rounded-full animate-ping opacity-75" style="animation-duration: 3s;"></div>
            <div class="absolute inset-4 bg-vrt-gold/20 rounded-full animate-pulse"></div>
            
            <!-- O Selo Físico -->
            <div class="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-[#1a1f2e] to-[#0a0f1c] border-4 border-vrt-gold flex flex-col items-center justify-center shadow-[0_0_50px_rgba(197,160,89,0.3)] transform transition-transform duration-700 hover:scale-105 hover:rotate-3">
              <svg class="w-16 h-16 lg:w-20 lg:h-20 text-vrt-gold mb-2 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <div class="text-5xl lg:text-7xl font-abhaya font-black text-white leading-none tracking-tighter">30</div>
              <div class="text-vrt-gold font-bold tracking-[0.3em] uppercase text-xs lg:text-sm mt-1">Dias</div>
            </div>
          </div>
          
          <!-- Lado Direito: A Copy -->
          <div class="md:col-span-7">
            <!-- Risco Zero Badge -->
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-vrt-gold/40 bg-vrt-gold/10 text-vrt-gold text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Risco Zero Absoluto
            </div>
            
            <h2 class="text-4xl md:text-5xl font-abhaya font-extrabold text-white mb-8 leading-tight">
              Garantia <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#F2D492] to-[#8C6D33]">Blindada</span> e Alerta de Risco!
            </h2>
            
            <div class="space-y-6 text-lg lg:text-xl text-gray-300 font-light font-montserrat leading-relaxed">
              <p>
                Estamos tão confiantes na eficácia da Bio que Vende que oferecemos uma 
                <strong class="text-white font-semibold">garantia de satisfação de 30 dias.</strong> 
              </p>
              
              <div class="pl-6 border-l-2 border-vrt-gold/50 py-2">
                <p class="text-white italic">
                  Se você não notar uma diferença significativa em sua presença digital, devolveremos seu dinheiro sem perguntas.
                </p>
              </div>
              
              <p class="text-gray-400 text-base mt-8">
                <strong class="text-red-500 uppercase tracking-widest text-xs">Atenção:</strong> se você não agir agora, corre o risco de continuar invisível no mercado!
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

const garantiaRef = ref(null)
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
    threshold: 0.2
  })

  if (garantiaRef.value) {
    observer.observe(garantiaRef.value)
  }
})

onUnmounted(() => {
  if (observer && garantiaRef.value) {
    observer.unobserve(garantiaRef.value)
  }
})
</script>
