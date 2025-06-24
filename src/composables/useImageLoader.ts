import { ref, onMounted } from 'vue'

export function useImageLoader(src: string) {
  const isLoading = ref(true)
  const hasError = ref(false)

  const loadImage = () => {
    isLoading.value = true
    hasError.value = false

    const img = new Image()
    img.onload = () => {
      isLoading.value = false
      hasError.value = false
    }
    img.onerror = () => {
      isLoading.value = false
      hasError.value = true
      console.error(`Failed to load image: ${src}`)
    }
    img.src = src
  }

  onMounted(loadImage)

  return { isLoading, hasError, retryLoad: loadImage }
}
