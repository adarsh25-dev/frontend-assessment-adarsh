<script setup lang="ts">
import { ref } from 'vue'
import { HomeIcon } from '@heroicons/vue/24/outline'
import { HeartIcon, UserCircleIcon, ShoppingCartIcon } from '@heroicons/vue/24/solid'

const activeNavItem = ref<string | null>(null)

const handleNavClick = (item: string) => {
  activeNavItem.value = item
  console.log(`Navigating to ${item}`)
}

const handleNavKeyDown = (event: KeyboardEvent, item: string) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleNavClick(item)
  }
}

const handleIconClick = (action: string) => {
  console.log(`${action} clicked`)
}

const handleIconKeyDown = (event: KeyboardEvent, action: string) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleIconClick(action)
  }
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50" role="banner" aria-label="Main navigation">
    <nav
      class="flex items-center justify-between px-6 py-4"
      role="navigation"
      aria-label="Primary navigation"
    >
      <div class="flex items-center">
        <button
          @click="handleIconClick('home')"
          @keydown="(e) => handleIconKeyDown(e, 'home')"
          class="header-icon text-black hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="Go to home page"
          title="Home"
        >
          <HomeIcon class="header-icon" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden md:flex items-center space-x-8" role="menubar">
        <button
          @click="handleNavClick('women')"
          @keydown="(e) => handleNavKeyDown(e, 'women')"
          :class="['nav-link', { 'nav-link-active': activeNavItem === 'women' }]"
          role="menuitem"
          aria-label="Women's sneakers"
        >
          WOMEN
        </button>
        <button
          @click="handleNavClick('men')"
          @keydown="(e) => handleNavKeyDown(e, 'men')"
          :class="['nav-link', { 'nav-link-active': activeNavItem === 'men' }]"
          role="menuitem"
          aria-label="Men's sneakers"
        >
          MEN
        </button>
        <button
          @click="handleNavClick('kids')"
          @keydown="(e) => handleNavKeyDown(e, 'kids')"
          :class="['nav-link', { 'nav-link-active': activeNavItem === 'kids' }]"
          role="menuitem"
          aria-label="Kids' sneakers"
        >
          KIDS
        </button>
      </div>

      <div class="md:hidden flex items-center space-x-2" role="menubar">
        <button
          @click="handleNavClick('women')"
          @keydown="(e) => handleNavKeyDown(e, 'women')"
          :class="['mobile-nav-link', { 'nav-link-active': activeNavItem === 'women' }]"
          role="menuitem"
          aria-label="Women's sneakers"
        >
          WOMEN
        </button>
        <button
          @click="handleNavClick('men')"
          @keydown="(e) => handleNavKeyDown(e, 'men')"
          :class="['mobile-nav-link', { 'nav-link-active': activeNavItem === 'men' }]"
          role="menuitem"
          aria-label="Men's sneakers"
        >
          MEN
        </button>
        <button
          @click="handleNavClick('kids')"
          @keydown="(e) => handleNavKeyDown(e, 'kids')"
          :class="['mobile-nav-link', { 'nav-link-active': activeNavItem === 'kids' }]"
          role="menuitem"
          aria-label="Kids' sneakers"
        >
          KIDS
        </button>
      </div>

      <div class="flex items-center space-x-2 md:space-x-4" role="group" aria-label="User actions">
        <button
          @click="handleIconClick('favorites')"
          @keydown="(e) => handleIconKeyDown(e, 'favorites')"
          class="section-icon text-gray-800 hover:text-red-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
          aria-label="View favorites"
          title="Favorites"
        >
          <HeartIcon class="section-icon" aria-hidden="true" />
        </button>
        <button
          @click="handleIconClick('profile')"
          @keydown="(e) => handleIconKeyDown(e, 'profile')"
          class="section-icon text-gray-800 hover:text-gray-600 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
          aria-label="User profile"
          title="Profile"
        >
          <UserCircleIcon class="section-icon" aria-hidden="true" />
        </button>
        <button
          @click="handleIconClick('cart')"
          @keydown="(e) => handleIconKeyDown(e, 'cart')"
          class="section-icon text-gray-800 hover:text-gray-600 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
          aria-label="Shopping cart"
          title="Shopping Cart"
        >
          <ShoppingCartIcon class="section-icon" aria-hidden="true" />
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

.nav-link {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #1f2937;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #6b7280;
}

.header-icon {
  width: 35px;
  height: 35px;
}

.nav-link-active {
  color: #4f46e5;
  border-bottom: 2px solid #4f46e5;
}

.section-icon {
  width: 30px;
  height: 30px;
}

.mobile-nav-link {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #1f2937;
  transition: color 0.3s ease;
  padding: 0.375rem 0.5rem;
  border-radius: 0.25rem;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.mobile-nav-link:hover {
  color: #6b7280;
  background-color: #f3f4f6;
}

@media (max-width: 480px) {
  nav {
    padding: 0.75rem 0.5rem;
  }

  .mobile-nav-link {
    font-size: 10px;
    min-height: 36px;
    padding: 0.25rem 0.375rem;
  }

  .section-icon {
    width: 18px;
    height: 18px;
  }

  .header-icon {
    width: 22px;
    height: 22px;
  }

  .flex.space-x-2 > * + * {
    margin-left: 0.125rem;
  }
}

@media (max-width: 359px) {
  nav {
    padding: 0.5rem 0.25rem;
  }

  .nav-link {
    font-size: 14px;
  }

  .mobile-nav-link {
    font-size: 9px;
    min-height: 32px;
    padding: 0.25rem;
  }

  .section-icon {
    width: 16px;
    height: 16px;
  }

  .header-icon {
    width: 20px;
    height: 20px;
  }

  .flex.space-x-2 > * + * {
    margin-left: 0.125rem;
  }
}

@media (min-width: 360px) and (max-width: 639px) {
  .nav-link {
    font-size: 15px;
  }

  .section-icon {
    width: 20px;
    height: 20px;
  }

  .header-icon {
    width: 24px;
    height: 24px;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .nav-link {
    font-size: 16px;
  }

  .section-icon {
    width: 24px;
    height: 24px;
  }

  .header-icon {
    width: 28px;
    height: 28px;
  }

  nav {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 1536px) {
  .nav-link {
    font-size: 18px;
  }

  .section-icon {
    width: 32px;
    height: 32px;
  }

  .header-icon {
    width: 40px;
    height: 40px;
  }

  nav {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

.nav-link:focus,
button:focus {
  outline: 2px solid #4f46e5;
  outline-offset: 2px;
}

@media (prefers-contrast: high) {
  .nav-link {
    color: #000000;
  }

  .nav-link:hover {
    color: #4f46e5;
  }

  .nav-link-active {
    color: #000000;
    border-bottom-color: #000000;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav-link,
  button,
  .section-icon,
  .header-icon {
    transition: none !important;
  }
}
</style>
