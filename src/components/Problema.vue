<template>
  <section class="py-32 px-4 relative z-10" ref="sectionRef">
    <div class="max-w-6xl mx-auto">
      
      <!-- Headline Principal -->
      <h2 
        class="text-4xl md:text-5xl lg:text-6xl font-abhaya font-bold text-center mb-24 leading-tight text-white drop-shadow-xl max-w-4xl mx-auto transition-all duration-1000"
        :class="isVisible ? 'reveal-visible' : 'reveal-hidden'"
      >
        A Dor da 
        <span class="relative inline-block mx-2">
          <span class="relative z-10 text-gray-600 line-through decoration-red-600/80 decoration-[3px] md:decoration-[5px]">Invisibilidade</span>
          <span class="absolute inset-0 bg-red-600/10 blur-lg"></span>
        </span> 
        <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white text-3xl md:text-4xl">O Que Você Está Perdendo?</span>
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
              A frustração de ser <br/><br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-vrt-gold to-yellow-600">invisível para o mercado.</span>
            </h3>
          </div>
          
          <!-- Lado Direito: Narrativa -->
          <div class="md:col-span-7 space-y-6 text-lg md:text-xl text-gray-300 font-montserrat font-light leading-relaxed md:border-l border-gray-800 md:pl-10">
            <p>
              <strong class="text-white font-medium tracking-wide">Se você está aqui:</strong> provavelmente já se sentiu como um guerreiro solitário, lutando contra um mercado que não reconhece seu verdadeiro valor.
            </p>
            
            <p class="opacity-90">
              Você investiu tempo e dinheiro em estratégias que prometiam resultados milagrosos, mas no final, o que você obteve?
            </p>
            
            <!-- Enquete Interativa (Caixinha de Seleção) -->
            <div class="bg-gradient-to-br from-[#1a1025] to-[#0A1128] rounded-3xl p-6 md:p-8 border border-purple-500/30 shadow-2xl relative overflow-hidden mt-8 transition-all duration-500" :class="{ 'ring-2 ring-vrt-gold ring-offset-2 ring-offset-[#0A1128]': pollAnswered }">
              <div class="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full"></div>
              
              <h4 class="text-white font-bold text-lg md:text-xl mb-6 flex items-center gap-3">
                <span class="w-10 h-10 shrink-0 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                  <span class="w-full h-full bg-[#0A1128] rounded-full flex items-center justify-center">
                    <img src="/images/Dourado-4.png" class="w-5 h-5 opacity-80" />
                  </span>
                </span>
                Você sente que perde vendas por não passar a confiança necessária no primeiro clique?
              </h4>
              
              <!-- Opções -->
              <div class="space-y-3" v-if="!pollAnswered">
                <button @click="answerPoll(true)" class="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex justify-between items-center group">
                  Sim, com certeza
                  <span class="w-5 h-5 rounded-full border border-gray-400 group-hover:border-white"></span>
                </button>
                <button @click="answerPoll(false)" class="w-full bg-white/5 hover:bg-white/10 border border-transparent text-gray-400 hover:text-white py-3 px-6 rounded-xl transition-all duration-300 flex justify-between items-center group">
                  Não sofro com isso
                  <span class="w-5 h-5 rounded-full border border-gray-600 group-hover:border-gray-400"></span>
                </button>
              </div>
              
              <!-- Resultados da Enquete -->
              <div class="space-y-4" v-else>
                <div class="relative w-full bg-black/40 rounded-xl overflow-hidden h-12 flex items-center px-4 border border-vrt-gold/30">
                  <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-vrt-gold to-yellow-600 transition-all duration-1000" :style="{ width: yesPercent + '%' }"></div>
                  <span class="relative z-10 text-white font-bold text-sm">Sim, com certeza</span>
                  <span class="relative z-10 text-white font-bold text-sm ml-auto">{{ Math.round(yesPercent) }}% ({{ displayYesVotes }} votos)</span>
                </div>
                <div class="relative w-full bg-black/40 rounded-xl overflow-hidden h-12 flex items-center px-4 border border-gray-800">
                  <div class="absolute top-0 left-0 h-full bg-white/10 transition-all duration-1000" :style="{ width: noPercent + '%' }"></div>
                  <span class="relative z-10 text-gray-400 font-medium text-sm">Não sofro com isso</span>
                  <span class="relative z-10 text-gray-400 font-medium text-sm ml-auto">{{ Math.round(noPercent) }}% ({{ displayNoVotes }} votos)</span>
                </div>
                
                <div class="mt-6 pt-4 border-t border-purple-500/20">
                  <p class="text-sm text-gray-300 font-light italic">
                    <span class="text-vrt-gold font-semibold">A verdade é dura:</span> Você não está sozinho. Mas enquanto 94% continua perdendo dinheiro, você está a um passo de se destacar com uma solução profunda.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const glassContainer = ref(null)
const glassProgress = ref(0) // Vai de 0 a 1
const pollAnswered = ref(false)

const yesVotes = ref(0)
const noVotes = ref(0)
const displayYesVotes = ref(0)
const displayNoVotes = ref(0)

const yesPercent = computed(() => {
  const total = yesVotes.value + noVotes.value
  return total === 0 ? 0 : (yesVotes.value / total) * 100
})

const noPercent = computed(() => {
  const total = yesVotes.value + noVotes.value
  return total === 0 ? 0 : (noVotes.value / total) * 100
})

const fetchVotes = async () => {
  try {
    const res = await fetch('http://localhost:3001/api/votes')
    const data = await res.json()
    yesVotes.value = data.yes
    noVotes.value = data.no
  } catch (e) {
    console.error("Erro ao buscar votos", e)
    yesVotes.value = 854
    noVotes.value = 54
  }
}

const answerPoll = async (answer) => {
  pollAnswered.value = true
  
  // Optimistic Update da lógica base
  if (answer) yesVotes.value++
  else noVotes.value++
  
  // Inicia a animação dos números mostrados na tela do zero até o valor otimista
  animateValue(displayYesVotes, 0, yesVotes.value, 1500)
  animateValue(displayNoVotes, 0, noVotes.value, 1500)
  
  try {
    const res = await fetch('http://localhost:3001/api/votes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer })
    })
    const data = await res.json()
    
    // Ajuste fino se o backend retornar algo diferente após a animação inicial
    yesVotes.value = data.yes
    noVotes.value = data.no
    
    // Atualiza os display votes pro valor real de forma suave
    setTimeout(() => {
      if (displayYesVotes.value !== yesVotes.value) animateValue(displayYesVotes, displayYesVotes.value, yesVotes.value, 500)
      if (displayNoVotes.value !== noVotes.value) animateValue(displayNoVotes, displayNoVotes.value, noVotes.value, 500)
    }, 1500)

  } catch (e) {
    console.error("Erro ao computar voto", e)
  }
}

function animateValue(refVar, start, end, duration) {
  if (start === end) return
  const range = end - start
  let current = start
  const increment = end > start ? 1 : -1
  const stepTime = Math.abs(Math.floor(duration / range))
  
  const timer = setInterval(() => {
    current += increment
    refVar.value = current
    if (current === end) {
      clearInterval(timer)
    }
  }, stepTime)
}

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
  fetchVotes()
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
