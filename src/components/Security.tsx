import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Server, Network, Check } from 'lucide-react'

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Only You Control Access",
      description: "Only you can unlock your stuff while you're alive"
    },
    {
      icon: Network,
      title: "Decentralized Storage",
      description: "Everything is stored on decentralized networks that don't belong to any company"
    },
    {
      icon: Eye,
      title: "You Control When It Opens",
      description: "You control how and when it opens"
    },
    {
      icon: Shield,
      title: "Privacy by Design",
      description: "The AI only knows what you decide to give it"
    }
  ]

  const specialFeatures = [
    "No company can access your memories",
    "You decide who gets access",
    "Your data lives forever, even if we disappear",
    "Built on blockchain technology",
    "End-to-end encryption",
    "Zero-knowledge architecture"
  ]

  return (
    <section id="security" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-600/20 text-primary-300 border border-primary-600/30">
                🔐 What Makes It Special
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Memories,
              <br />
              <span className="text-primary-400">Your Control</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Unlike traditional cloud storage, The Last Vault puts you in complete 
              control. Your memories are stored in a way that no company or government 
              can access without your permission.
            </p>

            {/* Security Features */}
            <div className="space-y-6 mb-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Special Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Why Decentralized Matters
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {specialFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Central Network */}
              <motion.div
                className="glass-effect p-8 rounded-3xl relative z-10"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 bg-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(59, 130, 246, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Network className="h-10 w-10 text-primary-400" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Decentralized Network
                  </h3>
                  <p className="text-gray-300">
                    Your memories are protected across multiple secure nodes
                  </p>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-primary-600/10 rounded-full border border-primary-600/30 flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Lock className="h-6 w-6 text-primary-400" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-500/10 rounded-full border border-primary-500/30 flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Shield className="h-8 w-8 text-primary-400" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 bg-primary-400/10 rounded-full border border-primary-400/30 flex items-center justify-center"
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Eye className="h-5 w-5 text-primary-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Message */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect p-8 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Built for Forever
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Traditional cloud services can disappear, change their terms, or be shut down. 
              The Last Vault uses decentralized technology to ensure your memories survive 
              longer than any single company or service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Security