<template>
  <div class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-all duration-700" :class="isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'">
    <div class="bg-[#0A1128]/60 backdrop-blur-xl border border-gray-800/80 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
      
      <!-- Logo ou Identidade -->
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-vrt-gold to-yellow-600 flex items-center justify-center p-[1px]">
          <div class="w-full h-full bg-[#0A1128] rounded-full flex items-center justify-center">
             <img src="/images/Dourado-4.png" alt="Vrtice" class="w-4 h-4 opacity-80" />
          </div>
        </div>
        <span class="text-white font-abhaya font-bold tracking-widest text-sm uppercase hidden sm:block">Bio que Vende</span>
      </div>

      <!-- CTA -->
      <a href="#oferta" class="inline-flex items-center justify-center px-6 py-2 text-xs md:text-sm font-bold text-[#040814] bg-vrt-gold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(197,160,89,0.3)]">
        GARANTIR OFERTA
      </a>
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  if (window.scrollY > 300) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
