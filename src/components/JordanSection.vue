<script setup lang="ts">
interface Props {
  activeSection: string | null
}

interface Emits {
  (e: 'setActiveSection', section: string): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <section
    :class="[
      'sneaker-section',
      'jordan-gradient',
      activeSection === 'jordan' ? 'expanded' : '',
      activeSection && activeSection !== 'jordan' ? 'shrunk' : '',
    ]"
    @click="$emit('setActiveSection', 'jordan')"
  >
    <div class="flex flex-col items-center justify-center h-full relative">
      <h2 class="sneaker-title-bg">AIR JORDAN</h2>
      <div class="sneaker-image-container">
        <img src="/images/air-jordan.png" alt="Air Jordan Sneaker" class="sneaker-image" />
      </div>
      <h2 class="sneaker-title-front">AIR JORDAN</h2>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

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

/* Text behind image (background text) */
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

/* Image container */
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

/* Text in front (hidden by default, shown when expanded) */
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

/* Expanded state animations */
.sneaker-section.expanded .sneaker-title-bg {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
  font-weight: 900;
}

.sneaker-section.expanded .sneaker-image {
  transform: scale(1.8) rotate(13.05deg);
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4));
  z-index: 10;
  width: 851.07px;
  height: 510.64px;
}

.sneaker-section.expanded .sneaker-title-front {
  opacity: 1;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%) scale(1);
  font-size: 130px;
  white-space: nowrap;
  text-shadow: none;
  font-weight: 700;
}

/* Shrunk state */
.sneaker-section.shrunk .sneaker-title-bg {
  opacity: 1;
  font-weight: 200;
}

.sneaker-section.shrunk .sneaker-image {
  transform: scale(0.5);
  opacity: 0.7;
}

.sneaker-section.shrunk .sneaker-title-front {
  opacity: 0;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .sneaker-title-bg {
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    white-space: nowrap;
  }

  .sneaker-title-front {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    white-space: nowrap;
  }

  .sneaker-image {
    max-width: 300px;
    max-height: 300px;
  }

  /* Air Jordan mobile expanded state */
  .sneaker-section.expanded .sneaker-title-front {
    opacity: 1;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%) scale(1);
    font-size: 1.8rem;
    white-space: nowrap;
    text-shadow: none;
  }
}
</style>
