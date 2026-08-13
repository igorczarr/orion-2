<template>
  <section id="oferta" class="py-32 px-4 relative overflow-hidden">
    <!-- Fundo Imersivo de Alta Tensão -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-red-900/10 via-vrt-gold/10 to-red-900/10 blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDBIMHY2MGg2MFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCAwSDBWMGg2MHY2MEgwVjB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-50"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10" ref="ofertaRef">
      
      <!-- Cabeçalho da Oferta -->
      <div class="text-center mb-16 transition-all duration-1000 transform" :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }">
        <h2 class="text-4xl md:text-5xl lg:text-[4rem] font-abhaya font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
          A Oferta <br class="hidden md:block"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#F2D492] via-vrt-gold to-yellow-600">Irrecusável</span>
        </h2>
        <p class="text-2xl text-gray-300 font-light">
          Tudo o que você precisa por apenas <strong class="text-vrt-gold font-bold text-3xl">R$ 50</strong>
        </p>
      </div>
      
      <!-- O Cartão Black (Pricing Box) -->
      <div 
        class="glass border border-gray-700 rounded-[2.5rem] shadow-[0_0_80px_rgba(197,160,89,0.1)] relative overflow-hidden backdrop-blur-2xl transition-all duration-1000 transform"
        :class="{ 'translate-y-0 opacity-100 scale-100': isVisible, 'translate-y-20 opacity-0 scale-95': !isVisible }"
        style="transition-delay: 200ms;"
      >
        <!-- Efeito de Luz Interna (Edge lighting) -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
        <div class="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-vrt-gold to-transparent"></div>

        <!-- Ribbon de Escassez -->
        <div class="absolute top-8 -right-14 bg-gradient-to-r from-red-700 to-red-600 text-white font-black py-2 px-16 rotate-45 text-sm shadow-[0_10px_20px_rgba(220,38,38,0.5)] tracking-widest uppercase z-20">
          OFERTA HOJE
        </div>
        
        <div class="flex flex-col lg:flex-row">
          
          <!-- Lado Esquerdo: Stack de Valor -->
          <div class="flex-1 p-10 lg:p-14 lg:pr-12">
            <h3 class="text-2xl font-abhaya font-bold text-white mb-8 flex items-center gap-3">
              <svg class="w-6 h-6 text-vrt-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Você terá acesso imediato a:
            </h3>
            
            <ul class="space-y-6 mb-12 relative z-10">
              <li class="flex items-start group">
                <div class="mt-1 mr-4 shrink-0 bg-gray-800 p-1.5 rounded-full border border-gray-700 group-hover:bg-vrt-gold/20 group-hover:border-vrt-gold/50 transition-colors">
                  <svg class="w-5 h-5 text-vrt-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span class="text-gray-300 text-lg font-light leading-snug pt-1 group-hover:text-white transition-colors"><strong class="font-medium text-white">Construção Completa da Sua Link Page:</strong> Nós fazemos tudo por você.</span>
              </li>
              <li class="flex items-start group">
                <div class="mt-1 mr-4 shrink-0 bg-gray-800 p-1.5 rounded-full border border-gray-700 group-hover:bg-vrt-gold/20 group-hover:border-vrt-gold/50 transition-colors">
                  <svg class="w-5 h-5 text-vrt-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span class="text-gray-300 text-lg font-light leading-snug pt-1 group-hover:text-white transition-colors"><strong class="font-medium text-white">Design Profissional e Atraente:</strong> Que encanta e converte.</span>
              </li>
              <li class="flex items-start group">
                <div class="mt-1 mr-4 shrink-0 bg-gray-800 p-1.5 rounded-full border border-gray-700 group-hover:bg-vrt-gold/20 group-hover:border-vrt-gold/50 transition-colors">
                  <svg class="w-5 h-5 text-vrt-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span class="text-gray-300 text-lg font-light leading-snug pt-1 group-hover:text-white transition-colors"><strong class="font-medium text-white">Otimização para SEO:</strong> Para garantir que você seja encontrado.</span>
              </li>
              <li class="flex items-start group">
                <div class="mt-1 mr-4 shrink-0 bg-gray-800 p-1.5 rounded-full border border-gray-700 group-hover:bg-vrt-gold/20 group-hover:border-vrt-gold/50 transition-colors">
                  <svg class="w-5 h-5 text-vrt-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span class="text-gray-300 text-lg font-light leading-snug pt-1 group-hover:text-white transition-colors"><strong class="font-medium text-white">Suporte e Acompanhamento:</strong> Garantindo que sua página esteja sempre atualizada.</span>
              </li>
            </ul>
            
            <!-- Caixa de Bônus Destacada -->
            <div class="bg-gradient-to-br from-[#0f1524] to-[#060a14] p-8 mt-8 rounded-3xl border border-vrt-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative group">
              <!-- Efeito Hover no Bônus -->
              <div class="absolute inset-0 bg-vrt-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
              
              <div class="absolute -top-4 left-8 bg-[#0a0f1c] px-4 py-1 text-vrt-gold font-bold tracking-widest uppercase text-[10px] sm:text-xs rounded-full border border-vrt-gold/40 flex items-center gap-2 shadow-md">
                <svg class="w-3 h-3 animate-bounce" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                Bônus Exclusivos (OFERTA HOJE)
              </div>
              
              <ul class="space-y-6 mt-6">
                <li class="flex items-start">
                  <div class="text-3xl mr-4 drop-shadow-md">📊</div>
                  <div>
                    <strong class="text-white text-lg block mb-1 font-abhaya">PDF de Análise de Perfil (Guia de Marketing)</strong>
                    <div class="text-red-400 text-xs font-bold uppercase tracking-wide mb-1">Valor Real: <span class="line-through">R$ 200,00</span></div>
                    <p class="text-gray-400 font-light text-sm leading-relaxed">Nós te diremos exatamente o que escrever na sua Bio, destaques e posts fixados para turbinar o seu perfil.</p>
                  </div>
                </li>
                
                <li class="flex items-start">
                  <div class="text-3xl mr-4 drop-shadow-md">🎥</div>
                  <div>
                    <strong class="text-white text-lg block mb-1 font-abhaya">Acesso a Webinar com Estratégias Avançadas</strong>
                    <div class="text-red-400 text-xs font-bold uppercase tracking-wide mb-1">Valor Real: <span class="line-through">R$ 150,00</span></div>
                    <p class="text-gray-400 font-light text-sm leading-relaxed">Estratégias fechadas para potencializar sua conversão online.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Lado Direito: Fechamento (Checkout Simulado) -->
          <div class="w-full lg:w-[420px] bg-[#04060a] p-10 lg:p-14 border-l border-gray-800 flex flex-col items-center justify-center relative z-10">
            
            <p class="text-gray-400 text-sm mb-6 text-center leading-relaxed">
              Isso é um investimento no seu futuro. E o melhor: <strong class="text-white">sem taxas ocultas, sem mensalidades.</strong>
            </p>
            
            <!-- Resumo Financeiro (Ancoragem de Preço Técnica) -->
            <div class="w-full bg-[#0a0f1c] p-6 rounded-2xl border border-gray-800 mb-8 shadow-inner">
              <h4 class="text-gray-300 font-bold mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
                <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                O valor que você está levando hoje:
              </h4>
              <div class="space-y-3 mb-4">
                <div class="flex justify-between text-gray-500 text-sm">
                  <span>Construção & Design:</span>
                  <span>R$ 500,00</span>
                </div>
                <div class="flex justify-between text-gray-500 text-sm">
                  <span>Total de Bônus:</span>
                  <span>R$ 350,00</span>
                </div>
              </div>
              
              <div class="w-full h-px bg-gray-800/80 my-3"></div>
              
              <div class="flex justify-between text-gray-400 font-semibold text-sm">
                <span>Valor Total do Serviço + Bônus:</span>
                <span class="text-gray-600 line-through">R$ 850,00</span>
              </div>
            </div>
            
            <!-- Preço Final -->
            <div class="text-center mb-10">
              <p class="text-vrt-gold text-xs font-black tracking-[0.3em] uppercase mb-2 animate-pulse">Seu Investimento Hoje</p>
              <div class="text-[5rem] lg:text-[6rem] font-abhaya font-extrabold text-white leading-none drop-shadow-2xl flex items-start justify-center">
                <span class="text-3xl lg:text-4xl text-vrt-gold mt-4 mr-2">R$</span>50
              </div>
            </div>
            
            <!-- CTA -->
            <button class="group w-full relative inline-flex items-center justify-center px-8 py-6 font-bold text-lg text-vrt-navy bg-gradient-to-r from-[#F2D492] via-[#C5A059] to-[#997637] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] shadow-[0_15px_30px_rgba(197,160,89,0.3)] hover:shadow-[0_20px_50px_rgba(197,160,89,0.5)]">
              <span class="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span class="relative flex items-center justify-center tracking-wider w-full">
                QUERO GARANTIR AGORA
                <svg class="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </button>
            
            <!-- Segurança -->
            <div class="mt-6 flex items-center gap-2 text-gray-500 text-xs font-medium">
              <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
              Transação 100% segura e encriptada
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const ofertaRef = ref(null)
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

  if (ofertaRef.value) {
    observer.observe(ofertaRef.value)
  }
})

onUnmounted(() => {
  if (observer && ofertaRef.value) {
    observer.unobserve(ofertaRef.value)
  }
})
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite alternate;
}
@keyframes pulseSlow {
  0% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
}
</style>
