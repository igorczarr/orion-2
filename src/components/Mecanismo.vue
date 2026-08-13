<template>
  <section class="py-32 px-4 relative overflow-hidden" ref="sectionRef">
    
    <!-- Background Ambient (Syncs with the active step color) -->
    <div 
      class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[150px] mix-blend-screen pointer-events-none transition-colors duration-1000 opacity-20"
      :class="{
        'bg-vrt-gold': activeStep === 0,
        'bg-blue-600': activeStep === 1,
        'bg-green-600': activeStep === 2,
        'bg-red-600': activeStep === 3
      }"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10">
      
      <!-- Cabeçalho -->
      <div class="text-center mb-24 transition-all duration-1000" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <h2 class="text-4xl md:text-6xl font-abhaya font-extrabold text-white mb-6 drop-shadow-xl">
          Como <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#F2D492] to-[#8C6D33]">funciona?</span>
        </h2>
        <p class="text-xl text-gray-400 font-light tracking-wide">A engenharia passo a passo para o seu reconhecimento.</p>
      </div>
      
      <!-- Interactive Wheel Layout -->
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-40 transition-all duration-1000 reveal-delay-200" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        
        <!-- Left: The Interactive Wheel -->
        <div class="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
          
          <!-- Outer Decorative Rings -->
          <div class="absolute inset-4 rounded-full border border-gray-800 border-dashed animate-[spin_40s_linear_infinite]"></div>
          <div class="absolute inset-12 rounded-full border border-vrt-gold/10 animate-[spin_20s_linear_infinite_reverse]"></div>
          <div class="absolute inset-24 rounded-full bg-[#060a14] shadow-2xl border border-gray-800 z-10 flex items-center justify-center overflow-hidden">
            <img src="/images/Dourado-4.png" alt="Vrtice Logo" class="w-24 opacity-20" />
            
            <!-- Central Progress indicator -->
            <div class="absolute inset-0 bg-gradient-to-t from-vrt-gold/10 to-transparent" :style="{ transform: `translateY(${100 - ((activeStep + 1) * 25)}%)`, transition: 'transform 1s ease' }"></div>
          </div>
          
          <!-- The Rotating Wheel -->
          <div 
            class="absolute inset-0 z-20 rounded-full transition-transform duration-1000 cubic-bezier(0.68, -0.55, 0.265, 1.55)"
            :style="{ transform: `rotate(${wheelRotation}deg)` }"
          >
            <!-- Nodes -->
            <!-- Step 1: Top (0deg) -->
            <button 
              @click="setStep(0)"
              class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all duration-500 cursor-pointer group shadow-2xl"
              :class="activeStep === 0 ? 'bg-vrt-gold scale-125 ring-4 ring-vrt-gold/30' : 'bg-[#0a0f1c] border border-gray-700 hover:border-vrt-gold/50'"
            >
              <div 
                class="transition-transform duration-1000 font-abhaya font-bold text-2xl"
                :class="activeStep === 0 ? 'text-[#02040A]' : 'text-gray-400 group-hover:text-vrt-gold'"
                :style="{ transform: `rotate(${-wheelRotation}deg)` }"
              >
                1
              </div>
            </button>
            
            <!-- Step 2: Right (90deg) -->
            <button 
              @click="setStep(1)"
              class="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all duration-500 cursor-pointer group shadow-2xl"
              :class="activeStep === 1 ? 'bg-vrt-gold scale-125 ring-4 ring-vrt-gold/30' : 'bg-[#0a0f1c] border border-gray-700 hover:border-vrt-gold/50'"
            >
              <div 
                class="transition-transform duration-1000 font-abhaya font-bold text-2xl"
                :class="activeStep === 1 ? 'text-[#02040A]' : 'text-gray-400 group-hover:text-vrt-gold'"
                :style="{ transform: `rotate(${-wheelRotation}deg)` }"
              >
                2
              </div>
            </button>
            
            <!-- Step 3: Bottom (180deg) -->
            <button 
              @click="setStep(2)"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all duration-500 cursor-pointer group shadow-2xl"
              :class="activeStep === 2 ? 'bg-vrt-gold scale-125 ring-4 ring-vrt-gold/30' : 'bg-[#0a0f1c] border border-gray-700 hover:border-vrt-gold/50'"
            >
              <div 
                class="transition-transform duration-1000 font-abhaya font-bold text-2xl"
                :class="activeStep === 2 ? 'text-[#02040A]' : 'text-gray-400 group-hover:text-vrt-gold'"
                :style="{ transform: `rotate(${-wheelRotation}deg)` }"
              >
                3
              </div>
            </button>
            
            <!-- Step 4: Left (270deg) -->
            <button 
              @click="setStep(3)"
              class="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all duration-500 cursor-pointer group shadow-2xl"
              :class="activeStep === 3 ? 'bg-vrt-gold scale-125 ring-4 ring-vrt-gold/30' : 'bg-[#0a0f1c] border border-gray-700 hover:border-vrt-gold/50'"
            >
              <div 
                class="transition-transform duration-1000 font-abhaya font-bold text-2xl"
                :class="activeStep === 3 ? 'text-[#02040A]' : 'text-gray-400 group-hover:text-vrt-gold'"
                :style="{ transform: `rotate(${-wheelRotation}deg)` }"
              >
                4
              </div>
            </button>
          </div>
        </div>
        
        <!-- Right: Dynamic Content Panel -->
        <div class="relative min-h-[350px] flex items-start lg:-translate-y-12 w-full mt-8 lg:mt-0">
          <transition-group name="slide-fade" tag="div" class="relative w-full">
            <div 
              v-for="(step, index) in steps" 
              :key="step.id"
              v-show="activeStep === index"
              class="absolute inset-0 w-full glass p-10 md:p-14 rounded-3xl border border-gray-800 shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-gradient-to-br from-[#060a14] to-[#0a0f1c]"
            >
              <!-- Indicator Pill -->
              <div class="inline-flex items-center px-4 py-1 rounded-full bg-vrt-gold/10 border border-vrt-gold/30 text-vrt-gold text-sm font-bold tracking-widest mb-8">
                ETAPA 0{{ step.id }}
              </div>
              
              <h3 class="text-4xl font-abhaya font-bold text-white mb-6 leading-tight">{{ step.title }}</h3>
              
              <div class="w-16 h-1 bg-vrt-gold rounded-full mb-8"></div>
              
              <p class="text-xl text-gray-300 font-light leading-relaxed font-montserrat">
                {{ step.desc }}
              </p>
              
              <!-- Next button for manual navigation -->
              <div class="mt-12 flex items-center justify-between">
                <div class="flex space-x-2">
                  <div 
                    v-for="i in 4" 
                    :key="i" 
                    class="w-2 h-2 rounded-full transition-colors duration-300"
                    :class="activeStep === (i-1) ? 'bg-vrt-gold scale-125' : 'bg-gray-700'"
                  ></div>
                </div>
                
                <button @click="nextStep" class="text-vrt-gold hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
                  Próxima Etapa
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          </transition-group>
        </div>
      </div>

      <!-- Comparação A/B -->
      <div class="mt-40 mb-20 transition-all duration-1000 reveal-delay-300" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-abhaya font-extrabold text-white mb-4">
            A Diferença é <span class="text-red-500">Gritante</span>
          </h2>
          <p class="text-gray-400 text-lg font-light">Qual dessas opções você acha que transmite mais autoridade?</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <!-- O Link Genérico -->
          <div class="bg-[#0b0c0f] border border-gray-800 rounded-[3rem] p-8 flex flex-col items-center opacity-70 filter grayscale-[30%] hover:grayscale-0 transition-all duration-500 hover:border-red-900/50">
            <div class="text-gray-500 font-bold tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
              <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Link Genérico (O padrão que afasta clientes)
            </div>
            
            <!-- Simulador de UI Feia -->
            <div class="w-full max-w-[280px] bg-gray-200 rounded-3xl p-6 flex flex-col items-center shadow-inner relative overflow-hidden">
              <div class="absolute inset-0 bg-black/5"></div>
              <!-- Spinner de Loading Lento -->
              <div class="absolute top-4 right-4 w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              
              <div class="w-20 h-20 bg-gray-400/50 rounded-full mb-4 animate-pulse"></div>
              <div class="w-32 h-4 bg-gray-400/50 mb-2 rounded"></div>
              <div class="w-24 h-3 bg-gray-400/30 mb-8 rounded"></div>
              
              <!-- Botões Feios -->
              <div class="w-full space-y-3 relative z-10">
                <div class="w-full h-12 bg-blue-600/80 rounded flex items-center justify-center text-white/50 text-xs font-bold">MEU WHATSAPP</div>
                <div class="w-full h-12 bg-white border border-gray-400 rounded flex items-center justify-center text-gray-400 text-xs font-bold shadow-sm">MEU SITE</div>
                <div class="w-full h-12 bg-purple-600/80 rounded flex items-center justify-center text-white/50 text-xs font-bold">COMPRAR MENTORIA</div>
              </div>
            </div>
            <div class="mt-8 text-center text-sm text-gray-500 font-medium px-4">
              "Carregando... O cliente já foi embora."
            </div>
          </div>

          <!-- A Bio que Vende -->
          <div class="bg-gradient-to-br from-[#0a0f1c] to-[#04060a] border-2 border-vrt-gold/50 rounded-[3rem] p-8 flex flex-col items-center shadow-[0_0_80px_rgba(197,160,89,0.15)] transform scale-105 z-10 relative">
            <div class="absolute -top-4 bg-vrt-gold text-black font-bold px-6 py-1 rounded-full text-xs uppercase tracking-widest shadow-lg animate-pulse">
              A Escolha dos Especialistas
            </div>
            <div class="text-vrt-gold font-bold tracking-widest uppercase text-xs mb-6 mt-4 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Bio que Vende (Premium)
            </div>
            
            <!-- Simulador de UI Premium -->
            <div class="w-full max-w-[280px] bg-[#0A1128] rounded-[2rem] p-6 flex flex-col items-center border border-gray-700 shadow-2xl relative overflow-hidden">
              <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] opacity-[0.03]"></div>
              
              <div class="w-20 h-20 bg-gradient-to-br from-vrt-gold to-yellow-600 rounded-full mb-4 p-[2px] shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                <div class="w-full h-full bg-[#0A1128] rounded-full flex items-center justify-center">
                   <img src="/images/Dourado-4.png" class="w-10 h-10 opacity-90 drop-shadow-md" />
                </div>
              </div>
              <div class="text-white font-abhaya font-bold text-xl mb-1 drop-shadow-sm">Dra. Camila</div>
              <div class="text-vrt-gold text-xs mb-6 uppercase tracking-widest">Especialista</div>
              
              <!-- Botões Premium -->
              <div class="w-full space-y-3 relative z-10">
                <div class="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm text-center font-medium backdrop-blur-md hover:bg-white/10 transition-colors">Agendar Consulta</div>
                <div class="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm text-center font-medium backdrop-blur-md hover:bg-white/10 transition-colors">Ver Serviços</div>
                <div class="w-full py-3 px-4 bg-gradient-to-r from-vrt-gold to-[#997637] text-[#0A1128] border border-vrt-gold/50 rounded-2xl text-sm text-center font-bold shadow-[0_0_15px_rgba(197,160,89,0.3)] hover:scale-105 transition-transform">Falar no WhatsApp</div>
              </div>
            </div>
            <div class="mt-8 text-center text-sm text-green-400 font-medium px-4">
              "Uau! Essa pessoa sabe o que está fazendo. Me passa confiança!"
            </div>
          </div>
        </div>
      </div>

      <!-- Provas Científicas & O Mecanismo Único -->
      <div class="grid lg:grid-cols-2 gap-16 items-start mt-24 transition-all duration-1000 reveal-delay-400" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <!-- Provas Científicas -->
        <div class="space-y-8 sticky top-32">
          <h2 class="text-4xl font-abhaya font-bold text-white leading-tight">
            Provas Científicas e <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-vrt-gold to-yellow-600">Dados que Comprovam Nossa Eficácia</span>
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-vrt-gold to-transparent rounded-full"></div>
          <p class="text-xl text-gray-300 font-light leading-relaxed">
            A ciência não mente. Estudos de neurociência mostram que a primeira impressão é crucial; em apenas 0,05 segundos, as pessoas formam uma opinião sobre você. Isso significa que sua apresentação digital precisa ser impecável. <strong class="text-white font-medium">Dados de UX revelam que uma página bem projetada pode aumentar as taxas de conversão em até 400%.</strong>
          </p>
        </div>

        <!-- O Mecanismo Único -->
        <div class="glass-dark p-10 md:p-14 rounded-[2.5rem] border border-gray-800 shadow-2xl relative overflow-hidden group hover:border-vrt-gold/30 transition-colors duration-500">
          <div class="absolute inset-0 bg-gradient-to-br from-vrt-gold/5 to-transparent opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <h3 class="text-3xl font-abhaya font-bold text-white mb-8 relative z-10">O Mecanismo Único da Bio que Vende</h3>
          <p class="text-gray-300 text-lg mb-12 font-light relative z-10 leading-relaxed">
            Quando você se apresenta como uma autoridade, o cérebro humano ativa o viés de confirmação, onde as pessoas tendem a acreditar que você é realmente quem diz ser. Com a Bio que Vende, você não apenas melhora sua apresentação, mas também ativa esse <strong class="text-vrt-gold font-medium bg-vrt-gold/10 px-2 py-1 rounded">mecanismo psicológico</strong> que gera confiança imediata.
          </p>

          <ul class="space-y-10 relative z-10">
            <li class="flex items-start group/item">
              <div class="mt-1 mr-5 shrink-0 bg-[#0a0f1c] p-3 rounded-xl border border-gray-800 group-hover/item:border-vrt-gold/50 group-hover/item:text-vrt-gold transition-colors text-gray-500 shadow-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <div>
                <strong class="text-white text-xl block mb-2 font-abhaya group-hover/item:text-vrt-gold transition-colors">Análise de Dados:</strong>
                <span class="text-gray-400 font-light leading-relaxed">Entendemos o que funciona e aplicamos isso na sua página.</span>
              </div>
            </li>
            
            <li class="flex items-start group/item">
              <div class="mt-1 mr-5 shrink-0 bg-[#0a0f1c] p-3 rounded-xl border border-gray-800 group-hover/item:border-vrt-gold/50 group-hover/item:text-vrt-gold transition-colors text-gray-500 shadow-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
              </div>
              <div>
                <strong class="text-white text-xl block mb-2 font-abhaya group-hover/item:text-vrt-gold transition-colors">Experiência do Usuário:</strong>
                <span class="text-gray-400 font-light leading-relaxed">Criamos uma navegação intuitiva que mantém os visitantes engajados.</span>
              </div>
            </li>
            
            <li class="flex items-start group/item">
              <div class="mt-1 mr-5 shrink-0 bg-[#0a0f1c] p-3 rounded-xl border border-gray-800 group-hover/item:border-vrt-gold/50 group-hover/item:text-vrt-gold transition-colors text-gray-500 shadow-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <div>
                <strong class="text-white text-xl block mb-2 font-abhaya group-hover/item:text-vrt-gold transition-colors">Estratégias Personalizadas:</strong>
                <span class="text-gray-400 font-light leading-relaxed">Cada página é feita sob medida para refletir sua essência.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeStep = ref(0)
const isHovering = ref(false)

const sectionRef = ref(null)
const isVisible = ref(false)
let observer = null

const steps = [
  { id: 1, title: 'Análise de Dados', desc: 'Entendemos o que seu público realmente deseja.' },
  { id: 2, title: 'Design de Conversão', desc: 'Criamos uma experiência que direciona o visitante até a ação desejada.' },
  { id: 3, title: 'Estratégias Personalizadas', desc: 'Adaptamos cada elemento para refletir sua verdadeira essência e expertise.' },
  { id: 4, title: 'Ativação Psicológica', desc: 'Aceleramos a autoridade ativando gatilhos mentais que geram confiança instantânea em apenas 0,05s.' }
]

// The wheel rotation calculation:
// Step 0 is at Top (0deg). Step 1 is at Right (90deg).
// To bring Step 1 to the Top, we rotate the wheel by -90deg.
const wheelRotation = computed(() => {
  return -(activeStep.value * 90)
})

let intervalId = null

const setStep = (index) => {
  activeStep.value = index
  resetInterval()
}

const nextStep = () => {
  activeStep.value = (activeStep.value + 1) % 4
  resetInterval()
}

const resetInterval = () => {
  if (intervalId) clearInterval(intervalId)
  intervalId = setInterval(() => {
    if (!isHovering.value) {
      activeStep.value = (activeStep.value + 1) % 4
    }
  }, 5000)
}

onMounted(() => {
  resetInterval()
  
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
  if (intervalId) clearInterval(intervalId)
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<style scoped>
/* Transições da Roda */
.cubic-bezier {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Slide Fade para os Cards da Direita */
.slide-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(1.05);
  filter: blur(10px);
}
</style>
