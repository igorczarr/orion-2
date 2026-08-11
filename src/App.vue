<template>
  <div id="app" class="min-h-screen bg-vrt-navy flex flex-col font-montserrat">
    <Preloader />
    <router-view v-slot="{ Component }">
      <transition name="fade-up" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import Preloader from './components/Preloader.vue'
</script>

<style>
</style>
