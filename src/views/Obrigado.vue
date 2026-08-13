<template>
  <div class="min-h-screen bg-[#0A1128] text-white flex flex-col justify-center items-center relative overflow-hidden">
    <!-- Glow effects -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vrt-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>

    <div class="z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto w-full">
      <!-- Animated Checkmark -->
      <div class="mb-10 relative">
        <div class="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse"></div>
        <div class="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)] relative z-10 scale-0 animate-pop-in">
          <svg class="w-12 h-12 text-white animate-check" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>

      <!-- Copy -->
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight opacity-0 translate-y-4 animate-fade-up" style="animation-delay: 0.3s;">
        Tudo Certo! <span class="text-vrt-gold">Bem-vindo(a).</span>
      </h1>
      
      <p class="text-lg md:text-xl text-gray-300 mb-12 opacity-0 translate-y-4 animate-fade-up font-medium" style="animation-delay: 0.5s;">
        Sua vaga foi confirmada com sucesso. Os dados de acesso chegarão em seu e-mail nos próximos minutos.
      </p>

      <!-- Steps Box -->
      <div class="w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm opacity-0 translate-y-4 animate-fade-up text-left" style="animation-delay: 0.7s;">
        <h3 class="text-vrt-gold font-bold text-lg mb-6 uppercase tracking-wider text-center">Próximos Passos</h3>
        
        <div class="space-y-6">
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-vrt-gold text-[#0A1128] font-bold flex items-center justify-center shrink-0">1</div>
            <div>
              <h4 class="font-bold text-white text-lg">Acesse seu e-mail</h4>
              <p class="text-gray-400 text-sm mt-1">Procure por um e-mail com o assunto "Seu Acesso". Verifique a caixa de spam ou promoções.</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-vrt-gold text-[#0A1128] font-bold flex items-center justify-center shrink-0">2</div>
            <div>
              <h4 class="font-bold text-white text-lg">Faça seu Login</h4>
              <p class="text-gray-400 text-sm mt-1">Acesse a área de membros usando suas credenciais exclusivas enviadas no e-mail.</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-vrt-gold text-[#0A1128] font-bold flex items-center justify-center shrink-0">3</div>
            <div>
              <h4 class="font-bold text-white text-lg">Comece a Faturar</h4>
              <p class="text-gray-400 text-sm mt-1">Assista às instruções iniciais e coloque o método em prática ainda hoje.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Support Button -->
      <div class="mt-12 opacity-0 translate-y-4 animate-fade-up w-full" style="animation-delay: 0.9s;">
        <p class="text-gray-500 text-sm mb-4">Não recebeu o e-mail ou teve algum problema?</p>
        <a href="https://w.app/bqv1" target="_blank" class="inline-flex w-full md:w-auto items-center justify-center px-8 py-4 font-bold text-base text-[#040814] bg-white rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.764.457 3.42 1.258 4.88L2 22l5.258-1.211A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.375c-1.492 0-2.908-.383-4.143-1.077l-.297-.168-3.08.71 .725-2.997-.184-.298A8.358 8.358 0 013.625 12c0-4.619 3.756-8.375 8.375-8.375 4.619 0 8.375 3.756 8.375 8.375 0 4.619-3.756 8.375-8.375 8.375z"/>
          </svg>
          Falar com Suporte
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes popIn {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
.animate-pop-in {
  animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes drawCheck {
  0% { stroke-dasharray: 0, 100; opacity: 0; }
  100% { stroke-dasharray: 100, 0; opacity: 1; }
}
.animate-check {
  stroke-dasharray: 100;
  stroke-dashoffset: 0;
  animation: drawCheck 0.6s ease-in-out forwards 0.4s;
  opacity: 0;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  animation: fadeUp 0.6s ease-out forwards;
}
</style>
