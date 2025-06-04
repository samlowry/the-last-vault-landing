import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Menu, X } from 'lucide-react'
import { useTranslation } from '../i18n/context'
import LanguageSwitcher from './LanguageSwitcher'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#security', label: t.nav.security },
    { href: '#waitlist', label: t.nav.waitlist },
    { href: '#contact', label: t.nav.contact }
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-1 sm:space-x-2 min-w-0"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary-500 flex-shrink-0" />
            <span className="text-sm sm:text-lg md:text-xl font-bold text-white whitespace-nowrap">
              The Last Vault
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a
              href="https://forms.gle/74iAr2SQyfgBTraw9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t.common.joinWaitlist}
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center min-w-0 flex-shrink-0 space-x-1">
            <div className="scale-90">
              <LanguageSwitcher />
            </div>
            <button
              className="text-white p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/20"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://forms.gle/74iAr2SQyfgBTraw9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-4"
            >
              {t.common.joinWaitlist}
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header 