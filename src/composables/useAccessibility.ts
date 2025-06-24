import { onMounted, onUnmounted } from 'vue'

export function useAccessibility() {
  let isKeyboardUser = false

  const handleInteraction = (event: KeyboardEvent | MouseEvent) => {
    const isKeyboard = event.type === 'keydown'

    if (isKeyboard !== isKeyboardUser) {
      isKeyboardUser = isKeyboard
      document.body.classList.toggle('keyboard-user', isKeyboard)
    }

    if (isKeyboard) {
      const keyEvent = event as KeyboardEvent
      if (keyEvent.key === 'Escape') {
        document.dispatchEvent(new CustomEvent('escape-pressed'))
      }
    }
  }

  const announceToScreenReader = (message: string) => {
    const announcement = Object.assign(document.createElement('div'), {
      className: 'sr-only',
      textContent: message,
      ariaLive: 'polite',
      ariaAtomic: 'true',
    })

    document.body.append(announcement)
    setTimeout(() => announcement.remove(), 1000)
  }

  onMounted(() => {
    const options = { passive: true }
    document.addEventListener('keydown', handleInteraction, options)
    document.addEventListener('mousedown', handleInteraction, options)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleInteraction)
    document.removeEventListener('mousedown', handleInteraction)
  })

  return { announceToScreenReader }
}
