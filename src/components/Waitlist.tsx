import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Heart, Clock, Gift } from 'lucide-react'

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Timer logic: show current time (HH:MM:SS), update live
  const [currentTime, setCurrentTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setCurrentTime({ hours, minutes, seconds })
    }, 200)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your waitlist service
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="waitlist" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Time {currentTime.hours}:{currentTime.minutes}:{currentTime.seconds} Is Running Out
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the waitlist to save your memories before they fade away. There will never be a second chance to preserve your story for those you love.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Waitlist Card */}
          <motion.div
            className="glass-effect p-8 md:p-12 rounded-3xl mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-600/20 text-primary-300 border border-primary-600/30 mb-6">
                <span className="text-sm font-medium">🌑 Memories Fade. Legacy Doesn't Have To.</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Save Your Place Before It's Gone
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Every day, memories are lost forever. Join the waitlist now and make sure your story survives you.
              </p>
            </div>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                  required
                />
                <motion.button
                  type="submit"
                  className="btn-primary px-8 py-4 flex items-center justify-center gap-2 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <Heart className="h-5 w-5" />
                      Added!
                    </>
                  ) : (
                    <>
                      Join Waitlist Before It's Too Late
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
            <p className="text-sm text-gray-400 max-w-md mx-auto">
              This is your only chance to make sure your memories are not lost to time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Waitlist 