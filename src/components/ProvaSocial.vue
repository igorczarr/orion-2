<template>
  <section class="py-32 px-4 relative overflow-hidden" ref="sectionRef">
    
    <!-- Background "Network" Texture (Subtle indication of reach/impact) -->
    <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iI0M1QTA1OSIvPjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto">
      
      <!-- Cabeçalho (Ancoragem de Confiança Realista) -->
      <div 
        class="text-center mb-24 relative z-10 transition-all duration-1000"
        :class="isVisible ? 'reveal-visible' : 'reveal-hidden'"
      >
        <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-vrt-gold/30 bg-vrt-gold/10 backdrop-blur-md mb-8 shadow-xl">
          <svg class="w-4 h-4 text-vrt-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
          <span class="text-vrt-gold font-bold tracking-widest uppercase text-xs">Dados e Fatos</span>
        </div>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-abhaya font-extrabold text-white mb-6 drop-shadow-xl">
          A Ciência por trás <br class="hidden md:block"/> da <span class="text-transparent bg-clip-text bg-gradient-to-r from-vrt-gold to-yellow-600">Conversão</span>
        </h2>
        <p class="text-gray-400 text-xl font-light max-w-2xl mx-auto">Por que o design premium não é um luxo, mas sim uma necessidade neurobiológica para vender online.</p>
      </div>
      
      <!-- Stories Grid (Evidências Empíricas) -->
      <div class="grid md:grid-cols-3 gap-6 lg:gap-10 relative z-10 mt-16 max-w-5xl mx-auto">
        
        <!-- Story 1 -->
        <div class="bg-[#0b101d] rounded-3xl h-[520px] border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-500 cursor-pointer group" :class="isVisible ? 'reveal-visible reveal-delay-100' : 'reveal-hidden'">
          <!-- Story Progress -->
          <div class="absolute top-4 left-4 right-4 flex gap-1 z-20">
            <div class="h-1 bg-white/30 rounded-full flex-1 overflow-hidden"><div class="h-full bg-white w-[100%]"></div></div>
          </div>
          <!-- User Info -->
          <div class="absolute top-8 left-4 z-20 flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
              <div class="w-full h-full bg-[#0b101d] rounded-full flex items-center justify-center overflow-hidden">
                <img src="/images/Dourado-4.png" class="w-5 h-5 opacity-90" />
              </div>
            </div>
            <span class="text-white text-xs font-semibold drop-shadow-md">vrtice.science</span>
            <span class="text-gray-400 text-xs font-medium ml-1">4h</span>
          </div>
          
          <div class="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10 bg-gradient-to-b from-[#0b101d] via-[#151124] to-[#0b101d]">
            <div class="text-[5rem] mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-abhaya leading-none">0.05s</div>
            <h4 class="text-white font-bold text-lg mb-4 uppercase tracking-widest text-xs border-b border-purple-500/30 pb-2">O Julgamento Límbico</h4>
            <p class="text-gray-300 text-sm font-light leading-relaxed">Estudos neurocientíficos comprovam: o cérebro humano julga a credibilidade de um perfil online em apenas 50 milissegundos. Se o seu link é amador, a confiança é destruída antes mesmo do cliente ler o que você faz.</p>
          </div>
          
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg class="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
            <span class="text-[10px] text-white font-bold uppercase tracking-widest mt-1">Arrastar</span>
          </div>
        </div>

        <!-- Story 2 -->
        <div class="bg-[#0b101d] rounded-3xl h-[520px] border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-500 cursor-pointer group" :class="isVisible ? 'reveal-visible reveal-delay-300' : 'reveal-hidden'">
          <!-- Story Progress -->
          <div class="absolute top-4 left-4 right-4 flex gap-1 z-20">
            <div class="h-1 bg-white/30 rounded-full flex-1 overflow-hidden"><div class="h-full bg-white w-[100%]"></div></div>
          </div>
          <!-- User Info -->
          <div class="absolute top-8 left-4 z-20 flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
              <div class="w-full h-full bg-[#0b101d] rounded-full flex items-center justify-center overflow-hidden">
                <img src="/images/Dourado-4.png" class="w-5 h-5 opacity-90" />
              </div>
            </div>
            <span class="text-white text-xs font-semibold drop-shadow-md">vrtice.data</span>
            <span class="text-gray-400 text-xs font-medium ml-1">6h</span>
          </div>
          
          <div class="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10 bg-gradient-to-b from-[#0b101d] via-[#111e15] to-[#0b101d]">
            <div class="text-[4rem] mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 font-abhaya leading-none">+400%</div>
            <h4 class="text-white font-bold text-lg mb-4 uppercase tracking-widest text-xs border-b border-green-500/30 pb-2">O Poder da Estética</h4>
            <p class="text-gray-300 text-sm font-light leading-relaxed">Dados empíricos de UI/UX revelam que uma interface intencionalmente projetada pode aumentar as taxas de conversão de leads em até 400%. O design não é cosmético, é o motor da lucratividade.</p>
          </div>
          
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg class="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
            <span class="text-[10px] text-white font-bold uppercase tracking-widest mt-1">Arrastar</span>
          </div>
        </div>

        <!-- Story 3 -->
        <div class="bg-[#0b101d] rounded-3xl h-[520px] border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-500 cursor-pointer group" :class="isVisible ? 'reveal-visible reveal-delay-500' : 'reveal-hidden'">
          <!-- Story Progress -->
          <div class="absolute top-4 left-4 right-4 flex gap-1 z-20">
            <div class="h-1 bg-white/30 rounded-full flex-1 overflow-hidden"><div class="h-full bg-white w-[100%]"></div></div>
          </div>
          <!-- User Info -->
          <div class="absolute top-8 left-4 z-20 flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
              <div class="w-full h-full bg-[#0b101d] rounded-full flex items-center justify-center overflow-hidden">
                <img src="/images/Dourado-4.png" class="w-5 h-5 opacity-90" />
              </div>
            </div>
            <span class="text-white text-xs font-semibold drop-shadow-md">vrtice.psych</span>
            <span class="text-gray-400 text-xs font-medium ml-1">12h</span>
          </div>
          
          <div class="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10 bg-gradient-to-b from-[#0b101d] via-[#1e1710] to-[#0b101d]">
            <div class="text-[4rem] mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-vrt-gold to-orange-500 font-abhaya leading-none">Viés</div>
            <h4 class="text-white font-bold text-lg mb-4 uppercase tracking-widest text-xs border-b border-vrt-gold/30 pb-2">Viés de Confirmação</h4>
            <p class="text-gray-300 text-sm font-light leading-relaxed">Quando você se apresenta visualmente como uma autoridade Premium, o cérebro do consumidor busca automaticamente confirmar essa narrativa. É por isso que nossos clientes cobram mais caro e ouvem menos "está caro".</p>
          </div>
          
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg class="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
            <span class="text-[10px] text-white font-bold uppercase tracking-widest mt-1">Arrastar</span>
          </div>
        </div>

      </div>
      
      <!-- CTA para a Oferta -->
      <div class="mt-20 text-center transition-all duration-1000 reveal-delay-500" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <p class="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">A ciência comprova, nós executamos.</p>
        <a href="#oferta" class="inline-block bg-vrt-gold text-[#040814] shadow-[0_0_20px_rgba(197,160,89,0.3)] font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300">
          QUERO DOMINAR O MERCADO
        </a>
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
        // Desconecta após visualizar para manter a grade na tela
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1 
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
