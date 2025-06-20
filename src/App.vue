<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import JordanSection from './components/JordanSection.vue'
import YeezySection from './components/YeezySection.vue'
import BapeSection from './components/BapeSection.vue'

const activeSection = ref<string | null>(null)

const setActiveSection = (section: string) => {
  if (activeSection.value === section) {
    activeSection.value = null
  } else {
    activeSection.value = section
  }
}
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-900">
    <Header />

    <!-- Main Content -->
    <main class="h-screen flex flex-col md:flex-row">
      <JordanSection :activeSection="activeSection" @setActiveSection="setActiveSection" />
      <YeezySection :activeSection="activeSection" @setActiveSection="setActiveSection" />
      <BapeSection :activeSection="activeSection" @setActiveSection="setActiveSection" />
    </main>
  </div>
</template>
