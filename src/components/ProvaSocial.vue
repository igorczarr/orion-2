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
          <svg class="w-4 h-4 text-vrt-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
          <span class="text-vrt-gold font-bold tracking-widest uppercase text-xs">Wall of Love (Mural de Resultados)</span>
        </div>
        
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-abhaya font-extrabold text-white mb-6 drop-shadow-xl">
          Resultados Reais. <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100">Sem Filtros.</span>
        </h2>
        <p class="text-gray-400 text-xl font-light">Os bastidores do que acontece quando você troca um link amador por uma Link Page profissional.</p>
      </div>
      
      <!-- Masonry Grid de Prints Simulados (Autenticidade Crua) -->
      <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 relative z-10">
        
        <!-- Chat Message 1 (WhatsApp Style) -->
        <div class="break-inside-avoid bg-[#1e2430]/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 shadow-lg transition-all duration-1000 reveal-delay-100 hover:border-green-500/30" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-sm">F</div>
            <div>
              <div class="text-white font-semibold text-sm">Felipe (Mentoria)</div>
              <div class="text-xs text-gray-400">Ontem às 18:42</div>
            </div>
            <svg class="w-4 h-4 ml-auto text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
          </div>
          <div class="bg-[#0b141a] text-gray-200 p-4 rounded-r-2xl rounded-bl-2xl rounded-tl-sm text-sm leading-relaxed border border-gray-800/80 relative">
            "Irmão, fechei minha primeira mentoria hoje! O cliente disse que a página passou muita autoridade 🙏 Valeu demais pelo trabalho, o investimento já se pagou no primeiro dia kkk"
            <div class="absolute -left-2 top-0 w-4 h-4 bg-[#0b141a] border-l border-t border-gray-800/80 transform -skew-x-12"></div>
          </div>
        </div>

        <!-- Chat Message 2 (Instagram Direct Style) -->
        <div class="break-inside-avoid bg-[#1e2430]/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 shadow-lg transition-all duration-1000 reveal-delay-200 hover:border-pink-500/30" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-[2px]">
              <div class="w-full h-full bg-[#1e2430] rounded-full flex items-center justify-center">
                <img src="/images/Dourado-4.png" class="w-5 h-5 opacity-50" />
              </div>
            </div>
            <div>
              <div class="text-white font-semibold text-sm">@carol.adv</div>
              <div class="text-xs text-gray-400">Respondido ao seu story</div>
            </div>
          </div>
          <div class="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-gray-200 p-4 rounded-2xl text-sm leading-relaxed border border-pink-500/20">
            "Vrtice, os acessos no meu link da bio aumentaram absurdamente desde que troquei aquele linktree gratuito por vcs. O design ficou surreal, meus clientes amaram a paleta nova 😍"
          </div>
        </div>

        <!-- Metric Card (Case Study Format) -->
        <div class="break-inside-avoid bg-gradient-to-br from-[#0a0f1c] to-[#04060a] border border-vrt-gold/30 rounded-2xl p-6 shadow-xl transition-all duration-1000 reveal-delay-300" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
          <div class="flex justify-between items-start mb-6">
            <div class="bg-vrt-gold/10 p-2 rounded-lg">
              <svg class="w-6 h-6 text-vrt-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold text-white">+312%</div>
              <div class="text-[10px] uppercase tracking-widest text-vrt-gold">Cliques no Botão</div>
            </div>
          </div>
          <p class="text-sm text-gray-400 font-light italic">
            "A taxa de conversão do meu WhatsApp explodiu. O design direciona o olhar certinho pro botão. Genial."
          </p>
          <div class="mt-4 pt-4 border-t border-gray-800 flex items-center gap-2">
            <div class="w-6 h-6 bg-gray-700 rounded-full"></div>
            <span class="text-xs font-semibold text-gray-300">Marcos T. (Personal Trainer)</span>
          </div>
        </div>

        <!-- Chat Message 3 (WhatsApp Style) -->
        <div class="break-inside-avoid bg-[#1e2430]/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 shadow-lg transition-all duration-1000 reveal-delay-400 hover:border-green-500/30" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-sm">D</div>
            <div>
              <div class="text-white font-semibold text-sm">Dr. Leandro</div>
              <div class="text-xs text-gray-400">Hoje às 09:12</div>
            </div>
          </div>
          <div class="bg-[#0b141a] text-gray-200 p-4 rounded-r-2xl rounded-bl-2xl rounded-tl-sm text-sm leading-relaxed border border-gray-800/80 relative">
            "Cara, não tô acreditando. Subi a página ontem à noite na bio e já recebi 3 contatos de orçamento hoje cedo. Aquele esquema do botão pulsando ficou perfeito."
            <div class="absolute -left-2 top-0 w-4 h-4 bg-[#0b141a] border-l border-t border-gray-800/80 transform -skew-x-12"></div>
          </div>
        </div>

        <!-- Chat Message 4 (Email / Standard) -->
        <div class="break-inside-avoid bg-[#1e2430]/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 shadow-lg transition-all duration-1000 reveal-delay-500" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
          <div class="flex items-center gap-2 mb-3">
            <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            <span class="text-xs text-gray-400 font-medium">Feedback de Entrega</span>
          </div>
          <p class="text-sm text-gray-300 leading-relaxed font-light">
            "Só passando pra agradecer a agilidade. A página ficou exatamente com a minha cara. Muito superior àquela ferramenta que eu tava usando antes. Recomendo de olhos fechados!"
          </p>
        </div>

      </div>
      
      <!-- CTA para a Oferta -->
      <div class="mt-20 text-center transition-all duration-1000 reveal-delay-500" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <p class="text-vrt-gold font-bold uppercase tracking-widest text-sm mb-4">Faça parte desse mural</p>
        <a href="#oferta" class="inline-block border border-vrt-gold text-vrt-gold font-bold px-8 py-3 rounded-full hover:bg-vrt-gold hover:text-[#040814] transition-colors duration-300">
          QUERO MEUS RESULTADOS AGORA
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
