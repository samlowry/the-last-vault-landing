// Types for internationalization
export interface Translation {
  // Navigation
  nav: {
    howItWorks: string
    security: string
    waitlist: string
    contact: string
  }
  
  // Hero section
  hero: {
    badge: string
    title: string
    subtitle: string
    description: string
    ctaButton: string
    ctaSubtext: string
    valueProposition: {
      title: string
      description: string
    }
    features: {
      preserveMemories: string
      digitalTimeCapsule: string
      forYourFamily: string
    }
  }
  
  // Features section
  features: {
    whatIsTitle: string
    whatIsDescription1: string
    whatIsDescription2: string
    howItWorksTitle: string
    whileAlive: {
      badge: string
      title: string
      items: string[]
    }
    afterGone: {
      badge: string
      title: string
      items: string[]
    }
    whyMattersTitle: string
    whyMattersDescription: string
    mediaLabels: {
      photos: string
      videos: string
      voice: string
      memories: string
    }
    takeActionTitle: string
    takeActionDescription: string
    ctaButtons: {
      preserveLegacy: string
      dontWait: string
    }
  }
  
  // Stories section
  stories: {
    badge: string
    title: string
    subtitle: string
    items: Array<{
      name: string
      age: string
      relationship: string
      story: string
      quote: string
    }>
    ctaTitle: string
    ctaDescription: string
    stats: Array<{
      number: string
      text: string
    }>
  }
  
  // Security section
  security: {
    badge: string
    title: string
    titleAccent: string
    description: string
    features: Array<{
      title: string
      description: string
    }>
    whyDecentralizedTitle: string
    whyDecentralizedItems: string[]
    networkTitle: string
    networkDescription: string
  }
  
  // Waitlist section
  waitlist: {
    badge: string
    title: string
    subtitle: string
    ctaTitle: string
    description: string
    ctaButton: string
    disclaimer: string
  }
  
  // Footer
  footer: {
    copyright: string
    socialLabels: {
      email: string
      telegram: string
    }
  }
  
  // Common
  common: {
    joinWaitlist: string
    readMore: string
    learnMore: string
    getStarted: string
  }
}

export type Language = 'en' | 'ru' | 'es' | 'de' | 'fr'

export interface LanguageInfo {
  code: Language
  name: string
  nativeName: string
  flag: string
} 