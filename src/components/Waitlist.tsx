import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Heart, Clock, Gift } from 'lucide-react'
import { useTranslation } from '../i18n'

const Waitlist: React.FC = () => {
  const { t } = useTranslation()
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Отправка email в Google Form
    await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfhoYaoMLgKeKUyhoGIedKxQR-sSbpVFh1F6241zT_cO-vr_w/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'entry.1045781291': email })
    });
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  }

  return (
    <section id="waitlist" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-gray-300">
              {t.waitlist.badge}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-red-400 via-accent-400 to-text-100 bg-clip-text text-transparent">
              {t.waitlist.title}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-text-100 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t.waitlist.subtitle}
          </motion.p>

          {/* Main CTA Card */}
          <motion.div
            className="glass-effect p-8 md:p-12 rounded-3xl bg-gradient-to-br from-red-600/10 to-primary-600/20 border border-red-600/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.waitlist.ctaTitle}
            </h3>
            
            <p className="text-xl text-text-100 mb-8 leading-relaxed">
              {t.waitlist.description}
            </p>

            {/* CTA Button */}
            <motion.a
              href="https://forms.gle/74iAr2SQyfgBTraw9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-primary-600 text-white font-semibold px-8 py-4 rounded-xl text-lg md:text-xl hover:from-red-700 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Clock className="h-6 w-6" />
              {t.waitlist.ctaButton}
              <ArrowRight className="h-6 w-6" />
            </motion.a>

            {/* Disclaimer */}
            <motion.p
              className="text-sm text-gray-400 mt-6 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {t.waitlist.disclaimer}
            </motion.p>
          </motion.div>

          {/* Emotional Appeal */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Heart, text: t.waitlist.urgencyCards[0] },
              { icon: Clock, text: t.waitlist.urgencyCards[1] },
              { icon: ArrowRight, text: t.waitlist.urgencyCards[2] }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-2xl"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="h-8 w-8 text-red-400 mx-auto mb-4" />
                <p className="text-text-100 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Waitlist 