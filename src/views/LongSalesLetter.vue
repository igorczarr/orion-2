<template>
  <main class="bg-[#02040A] relative min-h-screen font-montserrat text-white selection:bg-vrt-gold selection:text-black">
    <!-- Global Cinematic Texture (persiste ao longo do scroll) -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-overlay" style="background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
    
    <!-- Componentes da Landing Page -->
    <div class="relative z-10 flex flex-col">
      <Hero :showButton="true" />
      <Problema />
      <Solucao />
      <Mecanismo />
      <ProvaSocial />
      <Oferta />
      <Garantia />
      <FooterCTA />
    </div>
  </main>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import Problema from '../components/Problema.vue'
import Solucao from '../components/Solucao.vue'
import Mecanismo from '../components/Mecanismo.vue'
import ProvaSocial from '../components/ProvaSocial.vue'
import Oferta from '../components/Oferta.vue'
import Garantia from '../components/Garantia.vue'
import FooterCTA from '../components/FooterCTA.vue'
</script>
