import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Cloud, 
  Smartphone, 
  Users, 
  FileText, 
  Zap,
  Lock,
  Globe,
  Database
} from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "AES-256 encryption with quantum-resistant algorithms to protect your data against future threats."
    },
    {
      icon: Cloud,
      title: "Secure Cloud Sync",
      description: "Seamlessly sync across all devices with zero-knowledge architecture. We never see your data."
    },
    {
      icon: Smartphone,
      title: "Biometric Access",
      description: "Use fingerprint, face recognition, or voice authentication for secure and convenient access."
    },
    {
      icon: Users,
      title: "Secure Sharing",
      description: "Share passwords and documents with family members using granular permission controls."
    },
    {
      icon: FileText,
      title: "Digital Documents",
      description: "Store important documents, certificates, and files with automatic OCR and search."
    },
    {
      icon: Zap,
      title: "Auto-Fill & Generate",
      description: "Generate strong passwords and auto-fill login credentials across all your devices."
    },
    {
      icon: Lock,
      title: "Emergency Access",
      description: "Designate trusted contacts who can access your vault in case of emergency."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Access your vault from anywhere in the world with our distributed infrastructure."
    },
    {
      icon: Database,
      title: "Secure Backup",
      description: "Automated backups with multiple redundancy layers ensure your data is never lost."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
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
    <section id="features" className="py-20 relative">
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
            Everything You Need
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive security features designed to protect your digital life 
            while keeping everything accessible and easy to use.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="glass-effect p-6 rounded-2xl h-full hover:bg-white/20 transition-all duration-300"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="h-6 w-6 text-primary-400" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 