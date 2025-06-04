import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Globe } from 'lucide-react'
import { useTranslation } from '../i18n/context'
import { languages } from '../i18n/languages'

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useTranslation()
  
  const currentLanguage = languages.find(lang => lang.code === language)

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        className="flex items-center gap-2 px-3 py-2 rounded-lg glass-effect text-sm text-gray-300 hover:text-white transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage?.nativeName}</span>
        <span className="sm:hidden">{currentLanguage?.flag}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full right-0 mt-2 w-48 glass-effect rounded-lg border border-white/10 shadow-xl z-50 max-h-64 overflow-y-auto"
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-white/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    language === lang.code ? 'bg-primary-500/20 text-primary-300' : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => handleLanguageChange(lang.code)}
                  whileHover={{ x: 2 }}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{lang.nativeName}</span>
                    <span className="text-xs opacity-70">{lang.name}</span>
                  </div>
                  {language === lang.code && (
                    <div className="ml-auto w-2 h-2 bg-primary-400 rounded-full"></div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher 