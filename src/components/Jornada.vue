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
      <div class="relative w-[320px] md:w-[380px] shrink-0 mx-auto h-[650px] transition-all duration-1000 delay-300 transform" :class="[isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0', isVibrating ? 'animate-vibrate' : '']">
        
        <!-- Glow atrás do celular -->
        <div class="absolute inset-0 bg-green-500/20 blur-3xl rounded-full transition-opacity duration-300" :class="isVibrating ? 'opacity-100' : 'opacity-40'"></div>

        <!-- Estrutura do Celular -->
        <div class="absolute inset-0 bg-[#0A1128] rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden flex flex-col">
          
          <!-- Push Notifications Popups (Restrito ao Celular) -->
          <div class="absolute top-10 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none w-[90%]">
            <transition-group name="push-anim">
              <div 
                v-for="push in pushNotifications" 
                :key="push.id"
                class="bg-[#111B3D]/95 backdrop-blur-xl border border-green-500/30 p-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex gap-3 items-center"
              >
                <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shrink-0 text-xs" :class="push.color">
                  {{ push.initials }}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between">
                    <span class="text-white font-bold text-xs truncate">{{ push.name }}</span>
                    <span class="text-gray-400 text-[10px]">agora</span>
                  </div>
                  <p class="text-gray-300 text-[10px] truncate">{{ push.text }}</p>
                </div>
              </div>
            </transition-group>
          </div>
          
          <!-- Top Notch -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-20 flex justify-center items-center">
            <div class="w-16 h-1.5 bg-gray-800 rounded-full"></div>
          </div>

          <!-- Header do Celular (Estilo WhatsApp Home/Chat) -->
          <div class="bg-[#111B3D] px-4 pt-10 pb-4 border-b border-gray-800 flex items-center shadow-md z-10 h-[90px] shrink-0">
            <div v-if="!activeChat" class="flex justify-between w-full items-center px-2">
              <div class="flex items-center gap-2">
                <span class="text-white font-semibold text-lg">Conversas</span>
                <span v-if="unreadCount > 0" class="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{{ unreadCount }} novas</span>
              </div>
              <div class="flex gap-4 text-green-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
            </div>
            <div v-else class="flex items-center w-full gap-3 transition-all duration-300">
              <button @click="closeChat" class="text-green-400 p-1 flex items-center -ml-2 cursor-pointer hover:bg-white/10 rounded-full transition-colors shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <div class="w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-bold text-white text-xs" :class="activeChat.color">
                {{ activeChat.initials }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-white font-semibold text-sm truncate">{{ activeChat.name }}</div>
                <div class="text-green-500 text-[10px] uppercase font-bold tracking-wider">Online</div>
              </div>
            </div>
          </div>

          <!-- Área de Mensagens -->
          <div class="flex-1 bg-[#0A1128] overflow-hidden relative">
            
            <transition name="fade" mode="out-in">
              <!-- Lista de Conversas -->
              <div v-if="!activeChat" class="absolute inset-0 z-10 pt-2 h-full overflow-y-auto scrollbar-hide flex flex-col justify-start pb-6">
                <transition-group name="chat-list">
                  <div 
                    v-for="msg in messages" 
                    :key="msg.id"
                    @click="openChat(msg)"
                    class="px-4 py-3 flex items-center gap-4 hover:bg-gray-800/50 transition-colors cursor-pointer border-b border-gray-800/50"
                    :class="msg.highlight ? 'bg-green-900/10' : ''"
                  >
                    <div class="w-12 h-12 shrink-0 rounded-full flex items-center justify-center font-bold text-white" :class="msg.color">
                      {{ msg.initials }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex justify-between items-center mb-1">
                        <span class="text-white font-semibold truncate">{{ msg.name }}</span>
                        <span class="text-green-500 text-xs font-medium shrink-0">{{ msg.time }}</span>
                      </div>
                      <p class="text-sm truncate font-medium" :class="msg.highlight ? 'text-green-400' : 'text-gray-300'">{{ msg.text }}</p>
                    </div>
                    <div class="w-5 h-5 shrink-0 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold animate-pulse">1</div>
                  </div>
                </transition-group>
                
                <!-- Conversa Fixa (Antiga) -->
                <div class="px-4 py-3 flex items-center gap-4 opacity-50 border-b border-gray-800/50 mt-auto cursor-not-allowed">
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
              
              <!-- Conversa Aberta -->
              <div v-else class="absolute inset-0 z-20 bg-[#0A1128] flex flex-col h-full w-full">
                <div class="flex-1 overflow-y-auto scrollbar-hide p-4 flex flex-col justify-end gap-4 pb-20 opacity-95">
                  <div class="absolute inset-0 bg-[#0c1222] opacity-80 pointer-events-none"></div>
                  <!-- Background Pattern (Opcional) -->
                  <div class="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
                  
                  <!-- Balão de Mensagem -->
                  <div class="bg-[#111B3D] border border-gray-700/50 rounded-2xl rounded-tl-sm p-3 max-w-[85%] self-start shadow-md relative z-10 animate-fade-in-up">
                    <p class="text-white text-sm font-medium leading-relaxed">{{ activeChat.text }}</p>
                    <span class="text-gray-400 text-[10px] mt-1 block text-right">{{ activeChat.time }}</span>
                  </div>
                </div>
                
                <!-- Fake Input -->
                <div class="p-3 bg-[#111B3D] border-t border-gray-800 flex items-center gap-3 absolute bottom-0 w-full z-30 h-[70px]">
                  <div class="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center text-gray-500 shrink-0 text-xl pb-1">+</div>
                  <div class="flex-1 bg-gray-900 rounded-full h-10 border border-gray-700 px-4 flex items-center">
                    <span class="text-gray-500 text-xs">Mensagem...</span>
                  </div>
                  <div class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg cursor-pointer hover:bg-green-500 transition-colors">
                    <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                  </div>
                </div>
              </div>
            </transition>
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
const isVibrating = ref(false)
let observer = null
let intervalId = null

const unreadCount = ref(150) // starts high to show demand
const activeChat = ref(null)

const openChat = (msg) => {
  activeChat.value = msg
  if (msg.highlight) unreadCount.value = Math.max(0, unreadCount.value - 1)
}

const closeChat = () => {
  activeChat.value = null
}

// Initial chats
const messages = ref([
  { id: 1, initials: '💰', color: 'bg-gradient-to-br from-vrt-gold to-yellow-600 text-[#0A1128]', name: 'Carlos Eduardo', time: '08:30', text: 'Acabei de enviar o comprovante de pagamento!', highlight: true },
  { id: 2, initials: 'RS', color: 'bg-gradient-to-br from-blue-400 to-blue-600', name: 'Dr. Roberto Silva', time: '09:15', text: 'Bom dia, a sua página me passou muita confiança...', highlight: false },
  { id: 3, initials: 'AC', color: 'bg-gradient-to-br from-green-400 to-green-600', name: 'Ana Clara', time: '10:42', text: 'Oi! Vi o link no seu perfil do Instagram...', highlight: false }
])

const pushNotifications = ref([])

const templates = [
  { initials: '💰', color: 'bg-gradient-to-br from-vrt-gold to-yellow-600 text-[#0A1128]', name: 'Mariana Costa', text: 'Você recebeu uma nova transferência.', highlight: true },
  { initials: 'FR', color: 'bg-gradient-to-br from-purple-400 to-purple-600', name: 'Felipe Rocha', text: 'Queria saber mais sobre a mentoria...', highlight: false },
  { initials: 'AM', color: 'bg-gradient-to-br from-orange-400 to-red-600', name: 'Amanda Medeiros', text: 'Onde eu clico para fechar negócio?', highlight: false },
  { initials: 'LG', color: 'bg-gradient-to-br from-green-400 to-green-600', name: 'Lucas Gomes', text: 'Vi sua Bio que Vende e achei sensacional.', highlight: false },
  { initials: 'JP', color: 'bg-gradient-to-br from-blue-400 to-blue-600', name: 'João Paulo', text: 'Tem horário para essa semana?', highlight: false }
]

let counter = 100;
let messagesAdded = 0;
const MAX_MESSAGES = 6;

const triggerNewMessage = () => {
  if (messagesAdded >= MAX_MESSAGES) {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
    return
  }
  
  messagesAdded++
  
  const template = templates[Math.floor(Math.random() * templates.length)]
  const newMsg = {
    ...template,
    id: counter++,
    time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  }
  
  // Add to top of chat list
  messages.value.unshift(newMsg)
  unreadCount.value++
  
  // Keep list max 20 so they can scroll naturally
  if (messages.value.length > 20) {
    messages.value.pop()
  }

  // Add push notification
  const pushId = Date.now()
  pushNotifications.value.push({ ...newMsg, id: pushId })
  
  // Remove push after 3 seconds
  setTimeout(() => {
    pushNotifications.value = pushNotifications.value.filter(p => p.id !== pushId)
  }, 3000)

  // Trigger vibration animation
  isVibrating.value = true
  setTimeout(() => {
    isVibrating.value = false
  }, 200)
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (!intervalId && messagesAdded < MAX_MESSAGES) {
          setTimeout(() => {
            if (isVisible.value && messagesAdded < MAX_MESSAGES) { 
              intervalId = setInterval(triggerNewMessage, 1800)
            }
          }, 1500)
        }
      } else {
        isVisible.value = false
        if (intervalId) {
          clearInterval(intervalId)
          intervalId = null
        }
      }
    })
  }, {
    threshold: 0.2
  })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.chat-list-enter-active,
.chat-list-leave-active {
  transition: all 0.5s ease;
}
.chat-list-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.chat-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px) }
  to { opacity: 1; transform: translateY(0) }
}
.animate-fade-in-up {
  animation: fadeInUp 0.4s ease-out forwards;
}

.push-anim-enter-active,
.push-anim-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.push-anim-enter-from {
  opacity: 0;
  transform: translateY(-50px) scale(0.9);
}
.push-anim-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.9);
}

@keyframes vibrate {
  0% { transform: rotate(0deg) }
  25% { transform: rotate(-0.5deg) }
  50% { transform: rotate(0.5deg) }
  75% { transform: rotate(-0.5deg) }
  100% { transform: rotate(0deg) }
}
.animate-vibrate {
  animation: vibrate 0.15s linear infinite;
}
</style>
