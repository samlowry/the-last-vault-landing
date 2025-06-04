import React from 'react'
import { motion } from 'framer-motion'
import { Quote, ArrowRight } from 'lucide-react'
import { useTranslation } from '../i18n/context'

const Stories: React.FC = () => {
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
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8"
          >
            <span className="text-sm font-medium text-gray-300">
              {t.stories.badge}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-400 to-text-100 bg-clip-text text-transparent"
          >
            {t.stories.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-text-100 max-w-4xl mx-auto leading-relaxed"
          >
            {t.stories.subtitle}
          </motion.p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-5xl mx-auto mb-20">
          {t.stories.items.map((story, index) => (
            <motion.div
              key={index}
              className="glass-effect p-8 md:p-12 rounded-3xl relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Quote className="h-8 w-8 text-primary-400 mb-6" />
              
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-white">{story.name}</h3>
                  <span className="text-sm text-gray-400">Age {story.age}</span>
                </div>
                <p className="text-sm text-primary-300 mb-4">{story.relationship}</p>
              </div>

              <p className="text-text-100 leading-relaxed mb-6 text-lg">
                {story.story}
              </p>

              <blockquote className="text-accent-400 font-medium text-lg italic border-l-2 border-accent-400/30 pl-4">
                {story.quote}
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.stories.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-effect p-6 rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">
                {stat.number}
              </div>
              <p className="text-text-100">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect p-8 md:p-12 rounded-3xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t.stories.ctaTitle}
            </h3>
            
            <p className="text-xl text-text-100 mb-8 leading-relaxed">
              {t.stories.ctaDescription}
            </p>

            <a
              href="https://forms.gle/74iAr2SQyfgBTraw9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
            >
              {t.common.joinWaitlist}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stories 