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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {/* Add short date before time, e.g. 25.06.04.17:16:13 */}
            Time Is Running Out {(() => {
              const now = new Date();
              const dd = String(now.getDate()).padStart(2, '0');
              const mm = String(now.getMonth() + 1).padStart(2, '0');
              const yy = String(now.getFullYear()).slice(-2);
              return `${dd}.${mm}.${yy}.${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`;
            })()}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the waitlist to save your memories before they fade away. There will never be a second chance to preserve your story for those you love.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-effect p-8 md:p-12 rounded-3xl mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white border border-white/40 mb-6">
                <span className="text-sm font-medium">🌑 Memories Fade. Legacy Doesn't Have To.</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Save Your Place Before It's Gone
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Every day, memories are lost forever. Join the waitlist now and make sure your story survives you.
              </p>
            </div>
            <a
              href="https://forms.gle/74iAr2SQyfgBTraw9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-lg inline-block mx-auto"
            >
              Join the Waitlist Before It's Too Late
            </a>
            <p className="text-sm text-gray-400 max-w-md mx-auto mt-6">
              This is your only chance to make sure your memories are not lost to time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Waitlist 