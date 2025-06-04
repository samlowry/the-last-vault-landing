import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Heart, Clock, Gift } from 'lucide-react'

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your waitlist service
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const benefits = [
    {
      icon: Heart,
      title: "Early Access",
      description: "Be among the first to preserve your memories"
    },
    {
      icon: Clock,
      title: "Lifetime Storage",
      description: "Your vault will be preserved forever"
    },
    {
      icon: Users,
      title: "Invite Rewards",
      description: "Move up the list by inviting friends"
    }
  ]

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
            Start Saving What Matters Today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our waitlist to be notified when The Last Vault is ready. 
            Invite friends and move up the list for earlier access.
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
                <span className="text-sm font-medium">🌟 Limited Early Access</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Be One of the First
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Sign up now to save your spot. You can invite people you trust to help open it later.
              </p>
            </div>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
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
                      Join Waitlist
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>

            {/* Referral CTA */}
            <motion.div
              className="glass-effect p-6 rounded-2xl bg-primary-600/10 border border-primary-600/30"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Gift className="h-6 w-6 text-primary-400" />
                <h4 className="text-xl font-semibold text-white">
                  Invite Friends → Get Earlier Access
                </h4>
              </div>
              <p className="text-gray-300 mb-4">
                Each friend you invite moves you up 3 spots in the waitlist queue.
              </p>
              <button className="btn-secondary px-6 py-3">
                Get Your Invite Link
              </button>
            </motion.div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-2xl text-center"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <benefit.icon className="h-8 w-8 text-primary-400" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect p-8 rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Preserve Your Legacy?
              </h3>
              <p className="text-gray-300 mb-6">
                Don't let your memories fade away. Start building your digital time capsule today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary px-8 py-4">
                  Join the Waitlist
                </button>
                <button className="btn-secondary px-8 py-4">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Waitlist 