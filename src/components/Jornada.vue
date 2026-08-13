<template>
  <section class="py-32 px-4 relative overflow-hidden" ref="sectionRef">
    <!-- Luzes de fundo -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-green-900/10 blur-[150px] mix-blend-screen opacity-60"></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      
      <!-- Cabeçalho -->
      <div class="text-center mb-20 transition-all duration-1000 transform" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <p class="text-vrt-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 animate-pulse">A Visão do Futuro</p>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-abhaya font-extrabold text-white leading-tight drop-shadow-2xl max-w-4xl mx-auto">
          Imagine acordar com o celular <br class="hidden md:block"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">vibrando com novos orçamentos</span> todos os dias.
        </h2>
        <p class="mt-8 text-xl text-gray-400 font-light max-w-2xl mx-auto">
          A diferença entre ser ignorado e ser disputado a tapas está na percepção de valor. Veja o que acontece quando você se apresenta como a <strong class="text-white">autoridade que realmente é.</strong>
        </p>
      </div>

      <!-- O Celular (Jornada Visual) -->
      <div class="relative max-w-[380px] mx-auto h-[650px] transition-all duration-1000 delay-300 transform" :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'">
        
        <!-- Glow atrás do celular -->
        <div class="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>

        <!-- Estrutura do Celular -->
        <div class="absolute inset-0 bg-[#0A1128] rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden flex flex-col">
          
          <!-- Top Notch -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-20 flex justify-center items-center">
            <div class="w-16 h-1.5 bg-gray-800 rounded-full"></div>
          </div>

          <!-- Header do Celular (Estilo WhatsApp Home) -->
          <div class="bg-[#111B3D] px-6 pt-10 pb-4 border-b border-gray-800 flex justify-between items-center shadow-md z-10">
            <span class="text-white font-semibold text-lg">Conversas</span>
            <div class="flex gap-4 text-green-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          <!-- Área de Mensagens (Onde a Mágica Acontece - Lista de Conversas) -->
          <div class="flex-1 bg-[#0A1128] overflow-hidden relative">
            
            <div class="space-y-0 relative z-10 pt-2">
              <!-- Conversa 1 -->
              <div class="chat-row delay-100 px-4 py-3 flex items-center gap-4 hover:bg-gray-800/50 transition-colors cursor-pointer border-b border-gray-800/50" :class="{ 'animate-slide-down': isVisible }">
                <div class="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold">NL</div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-white font-semibold truncate">Novo Lead (Site)</span>
                    <span class="text-green-500 text-xs font-medium shrink-0">10:42</span>
                  </div>
                  <p class="text-gray-400 text-sm truncate">Oi! Vi o link no seu perfil do Instagram...</p>
                </div>
                <div class="w-5 h-5 shrink-0 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">1</div>
              </div>

              <!-- Conversa 2 -->
              <div class="chat-row delay-500 px-4 py-3 flex items-center gap-4 hover:bg-gray-800/50 transition-colors cursor-pointer border-b border-gray-800/50" :class="{ 'animate-slide-down': isVisible }">
                <div class="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">CP</div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-white font-semibold truncate">Contato Profissional</span>
                    <span class="text-green-500 text-xs font-medium shrink-0">09:15</span>
                  </div>
                  <p class="text-gray-400 text-sm truncate">Bom dia doutor, a sua página me passou...</p>
                </div>
                <div class="w-5 h-5 shrink-0 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">2</div>
              </div>

              <!-- Conversa 3 -->
              <div class="chat-row delay-1000 px-4 py-3 flex items-center gap-4 hover:bg-gray-800/50 transition-colors cursor-pointer border-b border-gray-800/50 bg-green-900/10" :class="{ 'animate-slide-down': isVisible }">
                <div class="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-vrt-gold to-yellow-600 flex items-center justify-center text-[#0A1128] font-bold">💰</div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-white font-semibold truncate">Pagamento Aprovado</span>
                    <span class="text-green-500 text-xs font-medium shrink-0">08:30</span>
                  </div>
                  <p class="text-green-400 text-sm truncate font-medium">Acabei de enviar o comprovante de pagamento!</p>
                </div>
                <div class="w-5 h-5 shrink-0 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold animate-pulse">1</div>
              </div>
              
              <!-- Conversa Fixa (Antiga) -->
              <div class="px-4 py-3 flex items-center gap-4 opacity-50 border-b border-gray-800/50">
                <div class="w-12 h-12 shrink-0 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 font-bold">M</div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-gray-400 font-semibold truncate">Mãe</span>
                    <span class="text-gray-500 text-xs shrink-0">Ontem</span>
                  </div>
                  <p class="text-gray-500 text-sm truncate">Não esquece o casaco.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom bar -->
          <div class="h-1 bg-white/20 w-1/3 absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"></div>
        </div>
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
    threshold: 0.3
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

<style scoped>
.chat-row {
  opacity: 0;
  transform: translateY(-20px);
}

.animate-slide-down {
  animation: slideDownFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-100 { animation-delay: 2400ms; }
.delay-500 { animation-delay: 1400ms; }
.delay-1000 { animation-delay: 600ms; } /* Inverti a ordem para a de cima ser a mais demorada a cair */

@keyframes slideDownFade {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
