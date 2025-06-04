import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Clock, Users } from 'lucide-react'

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8"
          >
            <span className="text-sm font-medium text-gray-300">
              💙 A digital memory for your loved ones
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Help Your Loved Ones
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Remember Who You Were
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            A safe place online that keeps your photos, voice, and stories. 
            After you're gone, it turns into a digital memory for your family and friends.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center mb-16"
          >
            <motion.button
              className="btn-primary text-lg px-12 py-5 flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Waitlist Before It's Too Late
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <p className="text-sm text-gray-400 max-w-md text-center">
              Time doesn't wait. Your stories could disappear forever.
            </p>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            variants={itemVariants}
            className="glass-effect p-6 rounded-2xl max-w-2xl mx-auto mb-16"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Don't let your memories vanish
            </h3>
            <p className="text-gray-300">
              Every day that passes is another day your stories risk being lost forever. 
              Secure your spot now while you still can.
            </p>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-8 md:gap-12"
          >
            {[
              { icon: Heart, label: "Preserve Memories" },
              { icon: Clock, label: "Digital Time Capsule" },
              { icon: Users, label: "For Your Family" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2"
                whileHover={{ y: -5 }}
              >
                <div className="p-3 rounded-full glass-effect">
                  <feature.icon className="h-6 w-6 text-primary-400" />
                </div>
                <span className="text-sm text-gray-400 hidden md:block">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 