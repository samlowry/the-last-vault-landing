import React from 'react'
import { motion } from 'framer-motion'
import { I18nProvider } from './i18n/context'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Stories from './components/Stories'
import Security from './components/Security'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen gradient-bg">
        <Header />
        <main>
          <Hero />
          <Features />
          <Stories />
          <Security />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}

export default App 