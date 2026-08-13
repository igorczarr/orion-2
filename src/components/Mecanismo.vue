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
          <div class="absolute inset-4 rounded-full border-2 border-transparent border-t-vrt-gold/40 border-b-vrt-gold/20 shadow-[0_0_30px_rgba(197,160,89,0.3)] animate-[spin_10s_linear_infinite]"></div>
          <div class="absolute inset-10 rounded-full border border-dashed border-vrt-gold/30 animate-[spin_15s_linear_infinite_reverse]"></div>
          <div class="absolute inset-16 rounded-full border-4 border-transparent border-l-vrt-gold/50 shadow-[0_0_40px_rgba(197,160,89,0.4)] animate-[spin_8s_linear_infinite]"></div>
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
          <div class="bg-[#0b0c0f] border border-gray-800 rounded-[3rem] p-8 flex flex-col items-center transition-all duration-500 relative" :class="genericState === 'failed' ? 'grayscale opacity-50' : ''">
            <div class="text-gray-500 font-bold tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
              <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Link Genérico (O padrão que afasta clientes)
            </div>
            
            <!-- Simulador de UI Feia -->
            <div class="w-full max-w-[280px] h-[340px] bg-gray-200 rounded-3xl p-6 flex flex-col items-center shadow-inner relative overflow-hidden transition-all duration-500">
              <div class="absolute inset-0 bg-black/5"></div>
              
              <!-- State: Idle -->
              <div v-if="genericState === 'idle'" class="w-full h-full flex flex-col items-center justify-start z-10 fade-enter">
                <div class="w-20 h-20 bg-gray-400/50 rounded-full mb-4"></div>
                <div class="w-32 h-4 bg-gray-400/50 mb-2 rounded"></div>
                <div class="w-24 h-3 bg-gray-400/30 mb-8 rounded"></div>
                <div class="w-full space-y-3 relative z-10">
                  <div class="w-full h-12 bg-blue-600/80 rounded flex items-center justify-center text-white/50 text-xs font-bold relative overflow-hidden">
                    <div class="absolute inset-0 bg-black/20 click-ripple opacity-0"></div>
                    COMPRAR MENTORIA
                  </div>
                  <div class="w-full h-12 bg-white border border-gray-400 rounded flex items-center justify-center text-gray-400 text-xs font-bold shadow-sm">MEU WHATSAPP</div>
                </div>
                
                <!-- Cursor de Mouse Animado -->
                <svg class="w-6 h-6 text-gray-800 absolute cursor-move z-20" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2 1-3.2-7.4-4.4 4.8z"></path></svg>
              </div>

              <!-- State: Loading -->
              <div v-if="genericState === 'loading'" class="w-full h-full flex flex-col items-center justify-center z-10 fade-enter">
                <div class="w-10 h-10 border-4 border-gray-400 border-t-gray-600 rounded-full animate-spin"></div>
                <span class="text-gray-500 text-xs font-bold mt-4 uppercase tracking-widest">Carregando...</span>
              </div>

              <!-- State: Failed (BSOD) -->
              <div v-if="genericState === 'failed'" class="w-full h-full flex flex-col items-start justify-start p-4 z-10 bg-blue-700 fade-enter overflow-hidden relative">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <p class="text-white font-mono text-[10px] font-bold mb-2">:(</p>
                <p class="text-white font-mono text-[8px] leading-tight mb-2">Seu cliente encontrou um problema e precisou ser reiniciado. Nós estamos coletando informações de erro, mas ele já foi para o concorrente.</p>
                <p class="text-white font-mono text-[7px] opacity-70">100% concluído</p>
                <div class="mt-auto text-[6px] text-white/50 font-mono">
                  STOP Code: SLOW_GENERIC_LINK
                </div>
              </div>
            </div>

            <div class="mt-8 text-center text-sm font-medium px-4 h-10" :class="genericState === 'failed' ? 'text-red-500' : 'text-gray-500'">
              <span v-if="genericState === 'idle'">Aguardando o clique...</span>
              <span v-if="genericState === 'loading'">"Que demora pra abrir..."</span>
              <span v-if="genericState === 'failed'">Venda Perdida.</span>
            </div>
          </div>

          <!-- A Bio que Vende -->
          <div class="bg-gradient-to-br from-[#0a0f1c] to-[#04060a] border-2 border-vrt-gold/50 rounded-[3rem] p-8 flex flex-col items-center shadow-[0_0_80px_rgba(197,160,89,0.15)] transform scale-105 z-10 relative">
            <div class="absolute -top-4 bg-vrt-gold text-black font-bold px-6 py-1 rounded-full text-xs uppercase tracking-widest shadow-lg animate-pulse" v-if="premiumState === 'success'">
              Venda Realizada!
            </div>
            <div class="text-vrt-gold font-bold tracking-widest uppercase text-xs mb-6 mt-4 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Bio que Vende (Premium)
            </div>
            
            <!-- Simulador de UI Premium -->
            <div class="w-full max-w-[280px] h-[340px] bg-[#0A1128] rounded-[2rem] flex flex-col items-center shadow-2xl relative overflow-hidden transition-all duration-300" :class="premiumState === 'success' ? 'bg-[#128C7E]' : 'p-6 border border-gray-700'">
              
              <!-- State: Idle -->
              <div v-if="premiumState === 'idle'" class="w-full h-full flex flex-col items-center justify-start z-10 fade-enter">
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] opacity-[0.03]"></div>
                <div class="w-20 h-20 shrink-0 bg-gradient-to-br from-vrt-gold to-yellow-600 rounded-full mb-2 p-[2px] shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                  <div class="w-full h-full bg-[#0A1128] rounded-full flex items-center justify-center">
                     <img src="/images/Dourado-4.png" class="w-10 h-10 opacity-90 drop-shadow-md" />
                  </div>
                </div>
                <div class="text-white font-abhaya font-bold text-xl mb-1 drop-shadow-sm">Dra. Camila</div>
                <div class="text-vrt-gold text-[10px] mb-4 uppercase tracking-widest">Especialista</div>
                
                <div class="w-full space-y-3 relative z-10">
                  <div class="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm text-center font-medium backdrop-blur-md">Serviços</div>
                  <div class="w-full py-3 px-4 bg-gradient-to-r from-vrt-gold to-[#997637] text-[#0A1128] border border-vrt-gold/50 rounded-2xl text-sm text-center font-bold shadow-[0_0_15px_rgba(197,160,89,0.3)] relative overflow-hidden">
                    <div class="absolute inset-0 bg-white/40 click-ripple opacity-0"></div>
                    Falar no WhatsApp
                  </div>
                </div>
                
                <!-- Cursor de Mouse Animado -->
                <svg class="w-6 h-6 text-white drop-shadow-lg absolute cursor-move-premium z-20" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2 1-3.2-7.4-4.4 4.8z"></path></svg>
              </div>

              <!-- State: Loading (Fast) -->
              <div v-if="premiumState === 'loading'" class="w-full h-full bg-white flex items-center justify-center z-10 fade-enter">
                 <div class="w-8 h-8 rounded-full bg-green-500 animate-ping"></div>
              </div>

              <!-- State: Success (WhatsApp Screen) -->
              <div v-if="premiumState === 'success'" class="w-full h-full bg-[#ECE5DD] flex flex-col z-10 relative fade-enter">
                 <!-- WA Header -->
                 <div class="bg-[#075E54] w-full h-12 flex items-center px-3 gap-2 shadow-md z-20">
                    <div class="w-8 h-8 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center"><img src="/images/Dourado-4.png" class="w-5 h-5"/></div>
                    <div class="text-white">
                      <div class="text-xs font-bold">Dra. Camila</div>
                      <div class="text-[9px] opacity-80">online</div>
                    </div>
                 </div>
                 <!-- Background texture -->
                 <div class="absolute inset-0 bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] opacity-10 mix-blend-multiply z-10"></div>
                 
                 <div class="flex-1 p-3 flex flex-col justify-end z-20">
                   <!-- Customer message bubble -->
                   <div class="bg-[#DCF8C6] self-end rounded-lg rounded-tr-none p-2 shadow-sm max-w-[85%] relative mb-2 bubble-enter">
                      <p class="text-[11px] text-gray-800 leading-tight">Olá, vi seu link e achei incrível! Quero agendar uma consulta.</p>
                      <span class="text-[8px] text-gray-500 absolute bottom-1 right-1">10:42 ✓✓</span>
                   </div>
                 </div>
                 <!-- WA Input bar -->
                 <div class="bg-[#F0F0F0] h-10 w-full flex items-center px-2 gap-2 z-20">
                    <div class="flex-1 bg-white rounded-full h-7 border border-gray-300"></div>
                    <div class="w-7 h-7 bg-[#00897B] rounded-full flex items-center justify-center text-white">
                      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                    </div>
                 </div>
              </div>

            </div>
            
            <div class="mt-8 text-center text-sm font-medium px-4 h-10" :class="premiumState === 'success' ? 'text-green-400' : 'text-vrt-gold'">
              <span v-if="premiumState === 'idle'">Aguardando o clique...</span>
              <span v-if="premiumState === 'loading'">Processando...</span>
              <span v-if="premiumState === 'success'">Dinheiro no bolso.</span>
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

const genericState = ref('idle')
const premiumState = ref('idle')

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

const runSimulationLoop = () => {
  const loop = () => {
    genericState.value = 'idle'
    premiumState.value = 'idle'
    
    setTimeout(() => {
      genericState.value = 'loading'
      premiumState.value = 'loading'
      
      setTimeout(() => {
        premiumState.value = 'success'
        
        setTimeout(() => {
          genericState.value = 'failed'
          
          setTimeout(() => {
            loop()
          }, 3500)
        }, 1500) // generic takes longer and fails
      }, 500) // premium loads fast
    }, 1500) // wait before clicking
  }
  
  loop()
}

onMounted(() => {
  resetInterval()
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        runSimulationLoop()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

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
.glass-dark {
  background: rgba(15, 20, 35, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
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
.reveal-delay-200 { transition-delay: 200ms; }
.reveal-delay-300 { transition-delay: 300ms; }
.reveal-delay-400 { transition-delay: 400ms; }

.fade-enter {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.bubble-enter {
  animation: bubblePop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

@keyframes bubblePop {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.cursor-move {
  animation: moveCursor 4.5s infinite;
}

@keyframes moveCursor {
  0% { transform: translate(60px, 120px); opacity: 0;}
  10% { transform: translate(60px, 120px); opacity: 1;}
  25% { transform: translate(0px, 20px); opacity: 1;}
  28% { transform: translate(0px, 20px) scale(0.9); }
  31% { transform: translate(0px, 20px) scale(1); }
  100% { transform: translate(0px, 20px); opacity: 0; }
}

.cursor-move-premium {
  animation: moveCursorPremium 4.5s infinite; 
}

@keyframes moveCursorPremium {
  0% { transform: translate(60px, 120px); opacity: 0;}
  10% { transform: translate(60px, 120px); opacity: 1;}
  25% { transform: translate(0px, 75px); opacity: 1;}
  28% { transform: translate(0px, 75px) scale(0.9); } 
  31% { transform: translate(0px, 75px) scale(1); }
  100% { transform: translate(0px, 75px); opacity: 0; }
}

.click-ripple {
  animation: ripple 4.5s infinite;
}

@keyframes ripple {
  0%, 25% { opacity: 0; transform: scale(1); }
  28% { opacity: 1; transform: scale(1); }
  32% { opacity: 0; transform: scale(1.1); }
  100% { opacity: 0; transform: scale(1); }
}

.cubic-bezier {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

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
