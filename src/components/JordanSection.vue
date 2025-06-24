<script setup lang="ts">
import { ref } from 'vue'
import { useImageLoader } from '../composables/useImageLoader'

interface Props {
  activeSection: string | null
}

interface Emits {
  (e: 'setActiveSection', section: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const { isLoading, hasError, retryLoad } = useImageLoader('/images/air-jordan.png')
const sectionRef = ref<HTMLElement>()

const handleClick = () => emit('setActiveSection', 'jordan')
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleClick()
  }
}

const isExpanded = () => props.activeSection === 'jordan'
const isShrunk = () => props.activeSection && props.activeSection !== 'jordan'
</script>

<template>
  <section
    ref="sectionRef"
    :class="[
      'sneaker-section',
      'jordan-gradient',
      isExpanded() ? 'expanded' : '',
      isShrunk() ? 'shrunk' : '',
    ]"
    @click="handleClick"
    @keydown="handleKeyDown"
    tabindex="0"
    role="button"
    :aria-expanded="isExpanded()"
    :aria-label="`Air Jordan sneaker section ${isExpanded() ? 'expanded' : 'collapsed'}`"
    aria-describedby="jordan-description"
  >
    <div id="jordan-description" class="sr-only">
      Air Jordan sneaker showcase.
      {{
        isExpanded() ? 'Currently expanded with detailed view.' : 'Click or press Enter to expand.'
      }}
    </div>

    <div class="flex flex-col items-center justify-center h-full relative">
      <h2 class="sneaker-title-bg" aria-hidden="true">AIR JORDAN</h2>

      <div class="sneaker-image-container">
        <div
          v-if="isLoading"
          class="flex items-center justify-center w-full h-full"
          role="status"
          aria-label="Loading Air Jordan image"
        >
          <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
        </div>

        <div
          v-else-if="hasError"
          class="flex flex-col items-center justify-center w-full h-full text-white"
          role="alert"
          aria-label="Failed to load Air Jordan image"
        >
          <svg class="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            ></path>
          </svg>
          <p class="text-center mb-2">Failed to load image</p>
          <button
            @click.stop="retryLoad"
            class="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
            aria-label="Retry loading Air Jordan image"
          >
            Retry
          </button>
        </div>

        <img
          v-else
          src="/images/air-jordan.png"
          alt="Air Jordan sneaker in blue and white colorway"
          class="sneaker-image"
          :aria-hidden="isExpanded() ? 'false' : 'true'"
          loading="lazy"
        />
      </div>

      <h2 class="sneaker-title-front" :aria-hidden="isExpanded() ? 'false' : 'true'">AIR JORDAN</h2>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

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

.sneaker-section {
  flex: 1;
  min-height: 100vh;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.3, 1);
}

.sneaker-section:not(.expanded):not(.shrunk) {
  flex: 1;
}

.sneaker-section.expanded {
  flex: 3;
}

.sneaker-section.shrunk {
  flex: 0.8;
}

.jordan-gradient {
  background: linear-gradient(180deg, #40a3ff 0%, rgba(255, 255, 255, 0.8) 100%);
}

.sneaker-title-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Inter', sans-serif;
  font-size: 80px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  z-index: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  white-space: nowrap;
}

.sneaker-image-container {
  position: relative;
  z-index: 5;
  transition: all 0.3s ease-in-out;
}

.sneaker-image-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: inherit;
  z-index: 1;
  border-radius: 50%;
}

.sneaker-image {
  max-width: 500px;
  max-height: 500px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.3, 1);
  position: relative;
  z-index: 2;
}

.sneaker-title-front {
  position: absolute;
  bottom: 22rem;
  left: 110%;
  transform: translateX(-50%) scale(0.5);
  font-family: 'Inter', sans-serif;
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  color: white;
  z-index: 3;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.3, 1);
  pointer-events: none;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
}
.sneaker-section.expanded .sneaker-title-bg {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
  font-weight: 900;
}

.sneaker-section.expanded .sneaker-image {
  transform: scale(1.8) rotate(13.05deg) translateY(-5%);
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4));
  z-index: 10;
  width: 851.07px;
  height: 510.64px;
}

.sneaker-section.expanded .sneaker-title-front {
  opacity: 1;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) scale(1);
  font-size: 130px;
  white-space: nowrap;
  text-shadow: none;
  font-weight: 700;
}

.sneaker-section.shrunk .sneaker-title-bg {
  opacity: 1;
  font-weight: 200;
  font-size: 30px;
}

.sneaker-section.shrunk .sneaker-image {
  transform: scale(0.5);
  opacity: 1;
}

.sneaker-section.shrunk .sneaker-title-front {
  opacity: 0;
}
@media (max-width: 767px) {
  .sneaker-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
  }

  .sneaker-title-bg,
  .sneaker-title-front {
    user-select: none;
    -webkit-user-select: none;
  }

  .sneaker-image {
    pointer-events: none;
    user-select: none;
  }

  .sneaker-section,
  .sneaker-image,
  .sneaker-title-bg,
  .sneaker-title-front {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.3, 1);
  }

  .sneaker-section.expanded {
    align-items: flex-start;
    padding-top: 2rem;
  }

  .sneaker-section.expanded .flex {
    height: 100%;
    justify-content: flex-start;
    padding-top: 1rem;
  }

  .sneaker-title-bg {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .sneaker-title-front {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    white-space: nowrap;
  }

  .sneaker-image-container {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 359px) {
  .sneaker-section {
    min-height: 30vh;
    width: 100%;
    cursor: pointer;
    touch-action: manipulation;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sneaker-title-bg {
    font-size: 32px;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
    z-index: 1;
  }

  .sneaker-image {
    max-width: 140px;
    max-height: 140px;
    transform: scale(1);
    object-fit: contain;
  }

  .sneaker-title-front {
    opacity: 0;
    transform: translateX(-50%) scale(0.5);
    position: absolute;
    bottom: 1rem;
    left: 50%;
    z-index: 10;
  }
  .sneaker-section.expanded {
    min-height: 55vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .sneaker-section.expanded .flex {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .sneaker-section.expanded .sneaker-title-bg {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
    top: 20%;
  }

  .sneaker-section.expanded .sneaker-title-front {
    opacity: 1;
    transform: translateX(-50%) scale(1);
    font-size: 1.5rem;
    font-weight: 700;
    bottom: 1rem;
    left: 50%;
    z-index: 10;
    text-shadow: none;
    color: white;
    position: absolute;
  }

  .sneaker-section.expanded .sneaker-image {
    transform: scale(1.4) rotate(8deg) translateY(-5%);
    max-width: 280px;
    max-height: 168px;
    margin: 0 auto;
  }

  .sneaker-section.shrunk {
    min-height: 12vh;
    width: 100%;
  }

  .sneaker-section.shrunk .sneaker-title-bg {
    font-size: 18px;
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
    top: 50%;
  }

  .sneaker-section.shrunk .sneaker-image {
    transform: scale(0.4);
    opacity: 0.8;
  }

  .sneaker-section.shrunk .sneaker-title-front {
    opacity: 0;
  }
}

@media (min-width: 360px) and (max-width: 639px) {
  .sneaker-section {
    min-height: 32vh;
    width: 100%;
    touch-action: manipulation;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sneaker-title-bg {
    font-size: 40px;
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .sneaker-image {
    max-width: 180px;
    max-height: 180px;
    transform: scale(1);
    object-fit: contain;
  }

  .sneaker-title-front {
    opacity: 0;
    transform: translateX(-50%) scale(0.5);
    position: absolute;
    bottom: 1rem;
    left: 50%;
    z-index: 10;
  }
  .sneaker-section.expanded {
    min-height: 58vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .sneaker-section.expanded .flex {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .sneaker-section.expanded .sneaker-title-bg {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
    top: 15%;
  }

  .sneaker-section.expanded .sneaker-title-front {
    opacity: 1;
    transform: translateX(-50%) scale(1);
    font-size: 1.8rem;
    font-weight: 700;
    bottom: -2.5rem;
    left: 50%;
    z-index: 10;
    text-shadow: none;
    color: white;
    position: absolute;
  }

  .sneaker-section.expanded .sneaker-image {
    transform: scale(1.5) rotate(8deg) translateY(-3%);
    max-width: 320px;
    max-height: 192px;
    margin: 0 auto;
  }

  .sneaker-section.shrunk {
    min-height: 15vh;
    width: 100%;
  }

  .sneaker-section.shrunk .sneaker-title-bg {
    font-size: 22px;
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
    top: 50%;
  }

  .sneaker-section.shrunk .sneaker-image {
    transform: scale(0.5);
    opacity: 0.8;
  }

  .sneaker-section.shrunk .sneaker-title-front {
    opacity: 0;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .sneaker-section {
    min-height: 33vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sneaker-title-bg {
    font-size: 55px;
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .sneaker-image {
    max-width: 280px;
    max-height: 280px;
    transform: scale(1);
    object-fit: contain;
  }

  .sneaker-title-front {
    opacity: 0;
    transform: translateX(-50%) scale(0.5);
    position: absolute;
    bottom: 1rem;
    left: 50%;
    z-index: 10;
  }
  .sneaker-section.expanded {
    min-height: 60vh;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  .sneaker-section.expanded .flex {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .sneaker-section.expanded .sneaker-title-bg {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.7);
    top: 10%;
  }

  .sneaker-section.expanded .sneaker-title-front {
    opacity: 1;
    transform: translateX(-50%) scale(1);
    font-size: 2rem;
    font-weight: 700;
    bottom: 2rem;
    left: 50%;
    z-index: 10;
    text-shadow: none;
    color: white;
    position: absolute;
  }

  .sneaker-section.expanded .sneaker-image {
    transform: scale(1.6) rotate(8deg) translateY(-2%);
    max-width: 400px;
    max-height: 240px;
    margin: 0 auto;
  }

  .sneaker-section.shrunk {
    min-height: 20vh;
  }

  .sneaker-section.shrunk .sneaker-title-bg {
    font-size: 30px;
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
    top: 50%;
  }

  .sneaker-section.shrunk .sneaker-image {
    transform: scale(0.6);
    opacity: 0.8;
  }

  .sneaker-section.shrunk .sneaker-title-front {
    opacity: 0;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .sneaker-title-bg {
    font-size: 70px;
    white-space: nowrap;
  }

  .sneaker-image {
    max-width: 400px;
    max-height: 400px;
  }

  .sneaker-section.expanded .sneaker-title-front {
    font-size: 2rem;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .sneaker-title-bg {
    font-size: 80px;
  }

  .sneaker-section.expanded .sneaker-title-front {
    font-size: 120px;
  }
}

@media (min-width: 1280px) and (max-width: 1535px) {
  .sneaker-title-bg {
    font-size: 80px;
  }

  .sneaker-section.expanded .sneaker-title-front {
    font-size: 130px;
  }
}

@media (min-width: 1536px) {
  .sneaker-title-bg {
    font-size: 90px;
  }

  .sneaker-section.expanded .sneaker-title-front {
    font-size: 140px;
  }

  .sneaker-image {
    max-width: 600px;
    max-height: 600px;
  }
}

@media (orientation: landscape) and (max-height: 500px) {
  .sneaker-title-bg {
    font-size: 50px;
  }

  .sneaker-image {
    max-width: 300px;
    max-height: 300px;
  }

  .sneaker-section.expanded .sneaker-title-front {
    font-size: 1.5rem;
    bottom: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sneaker-section,
  .sneaker-image,
  .sneaker-title-bg,
  .sneaker-title-front {
    transition: none !important;
  }
}

@media (prefers-contrast: high) {
  .jordan-gradient {
    background: linear-gradient(180deg, #0066cc 0%, #ffffff 100%);
  }
}
</style>
