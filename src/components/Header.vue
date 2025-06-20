<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/outline'
import { HeartIcon, UserCircleIcon, ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <!-- Header -->
  <header class="fixed top-0 left-0 right-0 z-50">
    <nav class="flex items-center justify-between px-6 py-4">
      <!-- Left: Home Icon -->
      <div class="flex items-center">
        <HomeIcon class="w-6 h-6 text-gray-800" />
      </div>

      <!-- Center: Navigation Links -->
      <div class="hidden md:flex items-center space-x-8">
        <a
          href="#"
          class="text-sm font-semibold text-gray-800 hover:text-gray-600 transition-colors"
        >
          WOMEN
        </a>
        <a
          href="#"
          class="text-sm font-semibold text-gray-800 hover:text-gray-600 transition-colors"
        >
          MEN
        </a>
        <a
          href="#"
          class="text-sm font-semibold text-gray-800 hover:text-gray-600 transition-colors"
        >
          KIDS
        </a>
      </div>

      <!-- Right: User Icons -->
      <div class="flex items-center space-x-4">
        <HeartIcon
          class="w-6 h-6 text-gray-800 hover:text-red-500 transition-colors cursor-pointer"
        />
        <UserCircleIcon
          class="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
        />
        <ShoppingCartIcon
          class="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
        />
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Header specific styles if needed */
</style>
