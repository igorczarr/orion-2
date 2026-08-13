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
      
      <!-- Story Viewer -->
      <div class="relative z-10 mt-16 max-w-sm mx-auto transition-all duration-1000 reveal-delay-100" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <div class="bg-[#0b101d] rounded-3xl h-[600px] border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col group">
          
          <!-- Story Progress Bars (Top) -->
          <div class="absolute top-4 left-4 right-4 flex gap-1 z-30">
            <div v-for="(story, index) in stories" :key="index" class="h-1 bg-white/30 rounded-full flex-1 overflow-hidden">
              <div class="h-full bg-white transition-all ease-linear" 
                   :style="{ width: getProgressWidth(index), transitionDuration: index === currentStory ? '100ms' : '0ms' }">
              </div>
            </div>
          </div>
          
          <!-- User Info -->
          <div class="absolute top-8 left-4 z-30 flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
              <div class="w-full h-full bg-[#0b101d] rounded-full flex items-center justify-center overflow-hidden">
                <img src="/images/Dourado-4.png" class="w-5 h-5 opacity-90" />
              </div>
            </div>
            <span class="text-white text-sm font-semibold drop-shadow-md">@vrtice.br</span>
            <span class="text-gray-400 text-xs font-medium ml-1">4h</span>
          </div>

          <!-- Click zones to skip/back -->
          <div class="absolute inset-y-0 left-0 w-1/3 z-20 cursor-pointer" @click="prevStory"></div>
          <div class="absolute inset-y-0 right-0 w-2/3 z-20 cursor-pointer" @click="nextStory"></div>
          
          <!-- Story Content (Slide transition) -->
          <transition name="story-slide" mode="out-in">
            <div :key="currentStory" class="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10" :class="stories[currentStory].bgClass">
              <div class="text-[5rem] mb-4 font-bold font-abhaya leading-none" :class="stories[currentStory].titleClass">
                {{ stories[currentStory].highlight }}
              </div>
              <h4 class="text-white font-bold text-lg mb-4 uppercase tracking-widest text-xs border-b pb-2" :class="stories[currentStory].borderClass">
                {{ stories[currentStory].title }}
              </h4>
              <p class="text-gray-300 text-sm font-light leading-relaxed">
                {{ stories[currentStory].text }}
              </p>
            </div>
          </transition>
          
          <!-- Bottom Action -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg class="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
            <span class="text-[10px] text-white font-bold uppercase tracking-widest mt-1">Arrastar</span>
          </div>
        </div>
      </div>
      
      <!-- CTA para a Oferta -->
      <div class="mt-20 text-center transition-all duration-1000 reveal-delay-500" :class="isVisible ? 'reveal-visible' : 'reveal-hidden'">
        <p class="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">A ciência comprova, nós executamos.</p>
        <a href="https://w.app/bqv1" target="_blank" class="inline-block bg-vrt-gold text-[#040814] shadow-[0_0_20px_rgba(197,160,89,0.3)] font-bold px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300">
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

// Lógica do Story Viewer
const currentStory = ref(0)
const storyProgress = ref(0)
let storyInterval = null
const STORY_DURATION = 5000 // 5 seconds per story
const UPDATE_INTERVAL = 50 // update progress every 50ms

const stories = [
  {
    highlight: '0.05s',
    title: 'O Julgamento Límbico (MIT)',
    text: 'Estudos do Massachusetts Institute of Technology (MIT) comprovam: o cérebro humano julga a credibilidade de um perfil online em apenas 50 milissegundos. Se o seu link é amador, a confiança é destruída instantaneamente.',
    bgClass: 'bg-gradient-to-b from-[#0b101d] via-[#151124] to-[#0b101d]',
    titleClass: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600',
    borderClass: 'border-purple-500/30'
  },
  {
    highlight: '+400%',
    title: 'O Poder da Estética (Forrester)',
    text: 'Dados de usabilidade da Forrester Research revelam que uma interface intencionalmente projetada pode aumentar as taxas de conversão em até 400%. O design não é cosmético, é o motor da lucratividade.',
    bgClass: 'bg-gradient-to-b from-[#0b101d] via-[#111e15] to-[#0b101d]',
    titleClass: 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600',
    borderClass: 'border-green-500/30'
  },
  {
    highlight: 'Viés',
    title: 'Viés de Confirmação (Harvard)',
    text: 'Publicações da Harvard Business Review indicam que o cérebro busca confirmar as primeiras impressões (Viés de Confirmação). Apresentar-se como uma autoridade visual Premium diminui objeções de preço drasticamente.',
    bgClass: 'bg-gradient-to-b from-[#0b101d] via-[#1e1710] to-[#0b101d]',
    titleClass: 'text-transparent bg-clip-text bg-gradient-to-r from-vrt-gold to-orange-500',
    borderClass: 'border-vrt-gold/30'
  }
]

const startStoryTimer = () => {
  clearInterval(storyInterval)
  storyProgress.value = 0
  storyInterval = setInterval(() => {
    storyProgress.value += (UPDATE_INTERVAL / STORY_DURATION) * 100
    if (storyProgress.value >= 100) {
      nextStory()
    }
  }, UPDATE_INTERVAL)
}

const nextStory = () => {
  if (currentStory.value < stories.length - 1) {
    currentStory.value++
  } else {
    currentStory.value = 0 // loop
  }
  startStoryTimer()
}

const prevStory = () => {
  if (currentStory.value > 0) {
    currentStory.value--
  } else {
    currentStory.value = stories.length - 1
  }
  startStoryTimer()
}

const getProgressWidth = (index) => {
  if (index < currentStory.value) return '100%'
  if (index === currentStory.value) return `${storyProgress.value}%`
  return '0%'
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (!storyInterval) startStoryTimer()
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
  clearInterval(storyInterval)
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<style scoped>
.story-slide-enter-active,
.story-slide-leave-active {
  transition: all 0.4s ease;
}
.story-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.story-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.reveal-hidden {
  opacity: 0;
  transform: translateY(40px);
}
.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-100 { transition-delay: 100ms; }
.reveal-delay-500 { transition-delay: 500ms; }
</style>
