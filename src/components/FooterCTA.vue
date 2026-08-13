<template>
  <section class="py-32 px-4 relative text-center border-t border-gray-900">
    
    <div class="max-w-4xl mx-auto relative z-10" ref="footerRef">
      
      <!-- Título Sóbrio e Elegante -->
      <div 
        class="transition-all duration-1000 transform"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
      >
        <h2 class="text-4xl md:text-5xl font-abhaya font-light text-white mb-10 leading-tight">
          A Hora é <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-vrt-gold to-yellow-600">Agora!</span>
        </h2>
      </div>
      
      <!-- Bloco de Texto Minimalista e Autêntico -->
      <div 
        class="mb-16 transition-all duration-1000 transform"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-12 opacity-0': !isVisible }"
        style="transition-delay: 200ms;"
      >
        <p class="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
          Atenção: Esta oferta é por tempo limitado! Apenas os primeiros 100 clientes terão acesso a este preço especial. 
        </p>
        
        <!-- Status de Capacidade Realista (Elegante e Verdadeiro) -->
        <div class="inline-flex flex-col md:flex-row items-center gap-4 bg-[#060a14] border border-gray-800 px-8 py-5 rounded-2xl mb-12 shadow-lg">
          <div class="flex items-center gap-3">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-vrt-gold opacity-40"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-vrt-gold"></span>
            </span>
            <span class="text-gray-300 font-medium tracking-wide text-sm uppercase">Status de Disponibilidade:</span>
          </div>
          <div class="h-px w-8 bg-gray-700 hidden md:block"></div>
          <p class="text-gray-400 text-sm md:text-base text-left">
            As vagas são limitadas a <strong class="text-white">apenas os primeiros 100 clientes</strong>. Não perca a chance de transformar sua presença digital e conquistar o reconhecimento que você merece.
          </p>
        </div>
        
        <div class="space-y-6 text-lg text-gray-300 font-montserrat">
          <p class="font-light">Essa oportunidade não vai durar para sempre!</p>
          
          <div class="py-10">
            <p class="font-bold text-white text-3xl font-abhaya leading-tight">
              Transforme Sua Presença Digital Agora!
            </p>
          </div>
          
          <p class="font-light">
            Clique no botão abaixo e inicie sua transformação. Não fique para trás. Torne-se a autoridade que você sempre sonhou ser!
          </p>
        </div>
      </div>
      
      <!-- CTA Premium e Direto -->
      <div 
        class="mb-24 transition-all duration-1000 transform"
        :class="{ 'scale-100 opacity-100': isVisible, 'scale-95 opacity-0': !isVisible }"
        style="transition-delay: 400ms;"
      >
        <a href="https://w.app/bqv1" target="_blank" class="inline-flex items-center justify-center px-10 py-5 font-bold text-lg text-[#040814] bg-vrt-gold rounded-full transition-all duration-300 hover:bg-white shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] tracking-wide">
          QUERO MINHA BIO QUE VENDE!
        </a>
      </div>
      
      <!-- P.S. (Editorial e Pessoal) -->
      <div 
        class="border-t border-gray-900 pt-12 transition-all duration-1000 transform text-left max-w-2xl mx-auto"
        :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }"
        style="transition-delay: 600ms;"
      >
        <strong class="text-white text-lg font-serif mb-4 block">P.S.</strong>
        <div class="space-y-4 text-gray-500 font-light text-sm md:text-base leading-relaxed">
          <p>
            Lembre-se: Sua presença digital é a chave para o reconhecimento e sucesso. Não deixe que a procrastinação te impeça de brilhar!
          </p>
          <p>
            A oferta é por tempo limitado. <strong class="text-gray-300">Garanta sua Link Page profissional agora</strong> e dê o primeiro passo para se tornar o especialista que você sempre quis ser!
          </p>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const footerRef = ref(null)
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
    threshold: 0.1
  })

  if (footerRef.value) {
    observer.observe(footerRef.value)
  }
})

onUnmounted(() => {
  if (observer && footerRef.value) {
    observer.unobserve(footerRef.value)
  }
})
</script>
