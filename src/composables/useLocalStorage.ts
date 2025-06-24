import { ref, watch } from 'vue'

const safeJSONParse = <T>(value: string | null, fallback: T): T => {
  if (!value) return fallback
  try {
    return JSON.parse(value)
  } catch {
    return fallback
  }
}

const safeJSONStringify = (value: unknown): string => {
  try {
    return JSON.stringify(value)
  } catch {
    return ''
  }
}

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const storedValue = localStorage.getItem(key)
  const initial = safeJSONParse(storedValue, defaultValue)

  const state = ref<T>(initial)
  let isUpdating = false

  const setValue = (value: T) => {
    if (isUpdating) return
    state.value = value
  }

  watch(
    state,
    (newValue, oldValue) => {
      if (JSON.stringify(newValue) === JSON.stringify(oldValue)) return

      isUpdating = true
      const serialized = safeJSONStringify(newValue)

      if (serialized) {
        localStorage.setItem(key, serialized)
      } else {
        console.warn(`Failed to serialize value for localStorage key "${key}"`)
      }
      isUpdating = false
    },
    { deep: true, flush: 'sync' },
  )

  return { state, setValue }
}

export function useSessionPreferences() {
  const activeSectionStore = useLocalStorage<string | null>('sneaker-active-section', null)
  const userPreferencesStore = useLocalStorage('user-preferences', {
    reducedMotion: false,
    highContrast: false,
    preferredTheme: 'default' as const,
  })

  const clearSession = () => {
    activeSectionStore.setValue(null)
    userPreferencesStore.setValue({
      reducedMotion: false,
      highContrast: false,
      preferredTheme: 'default' as const,
    })
  }

  return {
    activeSection: activeSectionStore.state,
    setActiveSection: activeSectionStore.setValue,
    userPreferences: userPreferencesStore.state,
    setUserPreferences: userPreferencesStore.setValue,
    clearSession,
  } as const
}
