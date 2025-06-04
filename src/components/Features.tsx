import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Clock, 
  Upload, 
  Lock, 
  Users, 
  Mic,
  Camera,
  MessageCircle,
  Shield
} from 'lucide-react'
import { useTranslation } from '../i18n/context'

const Features: React.FC = () => {
  const { t } = useTranslation()
  
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
    <>
      {/* What is The Last Vault Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent-400 to-text-100 bg-clip-text text-transparent">
              {t.features.whatIsTitle}
            </h2>
            
            <div className="glass-effect p-8 md:p-12 rounded-3xl">
              <p className="text-xl md:text-2xl text-text-100 leading-relaxed mb-8">
                {t.features.whatIsDescription1}
              </p>
              
              <p className="text-xl md:text-2xl text-text-100 leading-relaxed">
                {t.features.whatIsDescription2}
              </p>
              
              {/* Decorative Elements */}
              <div className="flex justify-center items-center gap-6 mt-8">
                <motion.div
                  className="p-3 rounded-full bg-primary-600/20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="h-6 w-6 text-text-50" />
                </motion.div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
                <motion.div
                  className="p-3 rounded-full bg-primary-600/20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Clock className="h-6 w-6 text-text-50" />
                </motion.div>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
                <motion.div
                  className="p-3 rounded-full bg-primary-600/20"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Users className="h-6 w-6 text-text-50" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-10 md:py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-400 to-text-100 bg-clip-text text-transparent">
              {t.features.howItWorksTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* While You're Alive */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-3xl"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/20 text-green-300 border border-green-600/30 mb-4">
                  <span className="text-sm font-medium">{t.features.whileAlive.badge}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{t.features.whileAlive.title}</h3>
              </div>

              <div className="space-y-6">
                {t.features.whileAlive.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      {index === 0 && <Upload className="h-5 w-5 text-text-50" />}
                      {index === 1 && <Lock className="h-5 w-5 text-text-50" />}
                      {index === 2 && <Users className="h-5 w-5 text-text-50" />}
                    </div>
                    <p className="text-text-100 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* After You're Gone */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-3xl"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 text-red-300 border border-red-600/30 mb-4">
                  <span className="text-sm font-medium">{t.features.afterGone.badge}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{t.features.afterGone.title}</h3>
              </div>

              <div className="space-y-6">
                {t.features.afterGone.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                      {index === 0 && <Clock className="h-5 w-5 text-text-50" />}
                      {index === 1 && <MessageCircle className="h-5 w-5 text-text-50" />}
                    </div>
                    <p className="text-text-100 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-10 md:py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent-400 to-text-100 bg-clip-text text-transparent">
              {t.features.whyMattersTitle}
            </h2>
            
            <div className="glass-effect p-8 md:p-12 rounded-3xl">
              <p className="text-xl md:text-2xl text-text-100 leading-relaxed">
                {t.features.whyMattersDescription}
              </p>
              
              {/* Emotional Icons */}
              <div className="flex justify-center items-center gap-8 mt-8">
                {[
                  { icon: Camera, label: t.features.mediaLabels.photos },
                  { icon: Upload, label: t.features.mediaLabels.videos },
                  { icon: Mic, label: t.features.mediaLabels.voice },
                  { icon: Heart, label: t.features.mediaLabels.memories }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-2"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div className="p-4 rounded-full bg-primary-600/20">
                      <item.icon className="h-6 w-6 text-text-50" />
                    </div>
                    <span className="text-sm text-text-50">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent-400 to-text-100 bg-clip-text text-transparent">
              {t.features.takeActionTitle}
            </h2>
            
            <div className="glass-effect p-8 md:p-12 rounded-3xl">
              <p className="text-xl md:text-2xl text-text-100 leading-relaxed">
                {t.features.takeActionDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8">
                <a
                  href="https://forms.gle/74iAr2SQyfgBTraw9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-4 text-lg flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {t.features.ctaButtons.preserveLegacy}
                </a>
                <a
                  href="https://forms.gle/74iAr2SQyfgBTraw9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-8 py-4 text-lg border-red-400/50 text-red-300 hover:border-red-400 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {t.features.ctaButtons.dontWait}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Features 