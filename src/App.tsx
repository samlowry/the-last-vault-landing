import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Security from './components/Security'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main>
        <Hero />
        <Features />
        <Security />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App 