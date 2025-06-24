<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import JordanSection from './components/JordanSection.vue'
import YeezySection from './components/YeezySection.vue'
import BapeSection from './components/BapeSection.vue'
import { useAccessibility } from './composables/useAccessibility'
import { useSessionPreferences } from './composables/useLocalStorage'

const { announceToScreenReader } = useAccessibility()

const { activeSection, setActiveSection: persistActiveSection } = useSessionPreferences()

const setActiveSection = (section: string) => {
  if (activeSection.value === section) {
    activeSection.value = null
    persistActiveSection(null)
    announceToScreenReader(`${section} section closed`)
  } else {
    activeSection.value = section
    persistActiveSection(section)
    announceToScreenReader(`${section} section expanded`)
  }
}

const handleEscapeKey = () => {
  if (activeSection.value) {
    const sectionName = activeSection.value
    setActiveSection(activeSection.value)
    announceToScreenReader(`${sectionName} section closed`)
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault()
    const sections = ['jordan', 'yeezy', 'bape']
    const currentIndex = activeSection.value ? sections.indexOf(activeSection.value) : -1

    let nextIndex
    if (event.key === 'ArrowRight') {
      nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % sections.length
    } else {
      nextIndex =
        currentIndex === -1
          ? sections.length - 1
          : (currentIndex - 1 + sections.length) % sections.length
    }

    setActiveSection(sections[nextIndex])
  }
}

onMounted(() => {
  document.addEventListener('escape-pressed', handleEscapeKey)
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('escape-pressed', handleEscapeKey)
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div
    id="app"
    class="min-h-screen bg-gray-900"
    role="application"
    aria-label="Interactive Sneaker Shop"
  >
    <Header />

    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded focus:z-50"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>

    <main
      id="main-content"
      class="min-h-screen flex flex-col md:flex-row"
      role="main"
      aria-label="Sneaker sections"
      tabindex="-1"
    >
      <div class="sr-only" aria-live="polite" id="instructions">
        Use arrow keys to navigate between sneaker sections. Press Enter or Space to expand a
        section. Press Escape to close.
      </div>

      <JordanSection
        :activeSection="activeSection"
        @setActiveSection="setActiveSection"
        aria-describedby="instructions"
      />
      <YeezySection
        :activeSection="activeSection"
        @setActiveSection="setActiveSection"
        aria-describedby="instructions"
      />
      <BapeSection
        :activeSection="activeSection"
        @setActiveSection="setActiveSection"
        aria-describedby="instructions"
      />
    </main>
  </div>
</template>

<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.keyboard-user *:focus {
  outline: 3px solid #4f46e5;
  outline-offset: 2px;
}

@media (max-width: 767px) {
  #main-content {
    flex-direction: column;
    min-height: calc(100vh - 60px);
    overflow-y: auto;
  }

  .sneaker-section {
    min-height: 33.33vh;
    flex: none;
    position: relative;
  }

  .sneaker-section.expanded {
    min-height: 70vh;
    flex: none;
    z-index: 10;
  }

  .sneaker-section.shrunk {
    min-height: 15vh;
    flex: none;
    z-index: 1;
  }

  body {
    overflow-x: hidden;
  }

  #app {
    -webkit-overflow-scrolling: touch;
  }
}

@media (orientation: landscape) and (max-height: 500px) and (max-width: 767px) {
  #main-content {
    height: 100vh;
    flex-direction: row;
  }

  .sneaker-section {
    min-height: 100vh !important;
    flex: 1;
  }

  .sneaker-section.expanded {
    flex: 2;
    min-height: 100vh !important;
  }

  .sneaker-section.shrunk {
    flex: 0.5;
    min-height: 100vh !important;
  }
}

@media (prefers-contrast: high) {
  .bg-gray-900 {
    background-color: #000000;
  }
}

@media (max-width: 767px) {
  html {
    touch-action: manipulation;
    -webkit-text-size-adjust: 100%;
  }

  input,
  select,
  textarea {
    font-size: 16px;
  }

  * {
    -webkit-overflow-scrolling: touch;
  }

  #app {
    min-height: -webkit-fill-available;
    min-height: 100vh;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media print {
  .sr-only,
  .focus\:not-sr-only:focus {
    position: static !important;
    width: auto !important;
    height: auto !important;
    clip: auto !important;
    overflow: visible !important;
  }
}
</style>
