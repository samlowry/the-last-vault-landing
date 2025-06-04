import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Server, Award, Check } from 'lucide-react'

const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "AES-256 Encryption",
      description: "Military-grade encryption that's virtually unbreakable"
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Architecture",
      description: "We can't see your data even if we wanted to"
    },
    {
      icon: Eye,
      title: "Regular Security Audits",
      description: "Third-party security assessments and penetration testing"
    },
    {
      icon: Server,
      title: "Distributed Infrastructure",
      description: "Data stored across multiple secure data centers"
    }
  ]

  const certifications = [
    "SOC 2 Type II Certified",
    "GDPR Compliant",
    "ISO 27001 Certified",
    "CCPA Compliant",
    "HIPAA Ready",
    "Bug Bounty Program"
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
                🛡️ Enterprise Security
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Bank-Level Security
              <br />
              <span className="text-primary-400">You Can Trust</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your data is protected by the same encryption standards used by 
              governments and financial institutions worldwide. We've built our 
              infrastructure from the ground up with security as the foundation.
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

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Compliance & Certifications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{cert}</span>
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
              {/* Central Shield */}
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
                    <Shield className="h-10 w-10 text-primary-400" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    256-bit Encryption
                  </h3>
                  <p className="text-gray-300">
                    Your data is encrypted with the strongest security available
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
                <Award className="h-8 w-8 text-primary-400" />
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

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-8">Trusted by over 100,000+ users worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {/* Company logos would go here */}
            <div className="text-gray-500 font-semibold">Fortune 500</div>
            <div className="text-gray-500 font-semibold">Government</div>
            <div className="text-gray-500 font-semibold">Healthcare</div>
            <div className="text-gray-500 font-semibold">Education</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Security