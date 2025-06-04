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

const Features: React.FC = () => {
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
              What is The Last Vault?
            </h2>
            
            <div className="glass-effect p-8 md:p-12 rounded-3xl">
              <p className="text-xl md:text-2xl text-text-100 leading-relaxed mb-8">
                The Last Vault is like a <span className="text-text-50 font-semibold">time capsule just for you</span>. 
                While you're alive, it safely collects your messages, pictures, videos, and recordings.
              </p>
              
              <p className="text-xl md:text-2xl text-text-100 leading-relaxed">
                When you're not around anymore, it opens and lets your loved ones 
                <span className="text-text-50 font-semibold"> see and hear you again</span>.
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
      <section id="how-it-works" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-400 to-text-100 bg-clip-text text-transparent">
              How It Works
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
                  <span className="text-sm font-medium">🥳 While You're Alive</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Building Your Legacy</h3>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Upload, text: "You upload your photos, videos, voice notes, or texts" },
                  { icon: Lock, text: "Everything is locked and safely stored online in a special way" },
                  { icon: Users, text: "You choose how it will open later (a tap, a time, or by people you trust)" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-text-50" />
                    </div>
                    <p className="text-text-100 leading-relaxed">{item.text}</p>
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
                  <span className="text-sm font-medium">🥀 After You're Gone</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Your Digital Memory</h3>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Clock, text: "The vault opens only when the rules you picked are followed" },
                  { icon: MessageCircle, text: "An AI version of you can talk to your family, using your own voice and words" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-text-50" />
                    </div>
                    <p className="text-text-100 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
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
              Why It Matters
            </h2>
            
            <div className="glass-effect p-8 md:p-12 rounded-3xl">
              <p className="text-xl md:text-2xl text-text-100 leading-relaxed">
                Memories can fade. Phones get lost. People forget passwords. 
                But your vault stays — so your family always has a way to 
                <span className="text-white font-semibold" style={{textShadow: '0 1px 8px rgba(0,0,0,0.5)'}}> remember you</span>.
              </p>
              
              {/* Emotional Icons */}
              <div className="flex justify-center items-center gap-8 mt-8">
                {[
                  { icon: Camera, label: "Photos" },
                  { icon: Upload, label: "Videos" },
                  { icon: Mic, label: "Voice" },
                  { icon: Heart, label: "Memories" }
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
              Take Action Today
            </h2>
            
            <div className="glass-effect p-8 md:p-12 rounded-3xl">
              <p className="text-xl md:text-2xl text-text-100 leading-relaxed">
                Preserve your legacy today and ensure that your family always has a way to remember you.
              </p>
              
              <div className="flex justify-center items-center gap-8 mt-8">
                <a
                  href="https://forms.gle/74iAr2SQyfgBTraw9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-4 text-lg flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Preserve Your Legacy Now
                </a>
                <a
                  href="https://forms.gle/74iAr2SQyfgBTraw9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-8 py-4 text-lg border-red-400/50 text-red-300 hover:border-red-400 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Don't Wait Until It's Too Late
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