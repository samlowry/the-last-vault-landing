import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, Translation } from './types'
import { defaultLanguage } from './languages'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translation
  isLoading: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  children: ReactNode
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [translations, setTranslations] = useState<Translation | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load translation for current language
  useEffect(() => {
    const loadTranslation = async () => {
      setIsLoading(true)
      try {
        const translation = await import(`./locales/${language}.json`)
        setTranslations(translation.default)
      } catch (error) {
        console.error(`Failed to load translation for ${language}, falling back to English`, error)
        const fallback = await import(`./locales/en.json`)
        setTranslations(fallback.default)
      } finally {
        setIsLoading(false)
      }
    }

    loadTranslation()
  }, [language])

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language
    if (savedLanguage && savedLanguage !== language) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('preferred-language', lang)
  }

  if (isLoading || !translations) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-bg">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <I18nContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t: translations,
        isLoading 
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }
  return context
} 