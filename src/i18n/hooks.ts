import { useContext } from 'react'
import { I18nContext } from './context'

/**
 * Hook to access translation context
 * Provides access to current language, translation function, and language setter
 * Must be used within I18nProvider
 */
export const useTranslation = () => {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }
  return context
} 