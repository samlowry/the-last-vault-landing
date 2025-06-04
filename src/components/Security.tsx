import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  CheckCircle,
  Globe,
  Users,
  Database,
  Cpu
} from 'lucide-react'
import { useTranslation } from '../i18n/context'

const Security: React.FC = () => {
  const { t } = useTranslation()

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
    <section id="security" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
            <span className="text-sm font-medium text-gray-300">
              {t.security.badge}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent-400 to-text-100 bg-clip-text text-transparent">
              {t.security.title}
            </span>
            <br />
            <span className="text-primary-400">
              {t.security.titleAccent}
            </span>
          </h2>
          
          <p className="text-xl text-text-100 max-w-4xl mx-auto leading-relaxed">
            {t.security.description}
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.security.features.map((feature, index) => {
            const icons = [Key, Database, Lock, Eye]
            const IconComponent = icons[index]
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-6 rounded-2xl text-center group hover:bg-white/5 transition-all duration-300"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-600/20 rounded-xl flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                  <IconComponent className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-100 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Why Decentralized Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Why Decentralized */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {t.security.whyDecentralizedTitle}
            </h3>
            
            <div className="space-y-4">
              {t.security.whyDecentralizedItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600/20 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <p className="text-text-100 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Network Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect p-8 rounded-3xl">
              <h4 className="text-xl font-semibold text-white mb-6 text-center">
                {t.security.networkTitle}
              </h4>
              
              {/* Network Nodes */}
              <div className="relative h-64 flex items-center justify-center">
                {/* Central Node */}
                <motion.div
                  className="absolute w-16 h-16 bg-primary-600/30 rounded-full flex items-center justify-center border-2 border-primary-400/50"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    borderColor: ['rgba(139, 92, 246, 0.5)', 'rgba(139, 92, 246, 0.8)', 'rgba(139, 92, 246, 0.5)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Database className="h-8 w-8 text-primary-400" />
                </motion.div>

                {/* Surrounding Nodes */}
                {[0, 1, 2, 3, 4, 5].map((index) => {
                  const angle = (index * 60) * (Math.PI / 180)
                  const radius = 80
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <motion.div
                      key={index}
                      className="absolute w-10 h-10 bg-accent-600/20 rounded-full flex items-center justify-center border border-accent-400/30"
                      style={{
                        left: `calc(50% + ${x}px - 20px)`,
                        top: `calc(50% + ${y}px - 20px)`
                      }}
                      animate={{ 
                        scale: [0.8, 1, 0.8],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.3 
                      }}
                    >
                      <Globe className="h-5 w-5 text-accent-400" />
                    </motion.div>
                  )
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {[0, 1, 2, 3, 4, 5].map((index) => {
                    const angle = (index * 60) * (Math.PI / 180)
                    const radius = 80
                    const x = Math.cos(angle) * radius + 128
                    const y = Math.sin(angle) * radius + 128

                    return (
                      <motion.line
                        key={index}
                        x1="128"
                        y1="128"
                        x2={x}
                        y2={y}
                        stroke="rgba(139, 92, 246, 0.3)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                      />
                    )
                  })}
                </svg>
              </div>
              
              <p className="text-text-100 text-center text-sm mt-4">
                {t.security.networkDescription}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Security