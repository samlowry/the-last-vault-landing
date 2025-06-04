import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote } from 'lucide-react'

const Stories: React.FC = () => {
  const stories = [
    {
      name: "Sarah Chen",
      age: "34",
      relationship: "Lost her father to cancer",
      image: "👩🏻‍💼",
      story: "Dad recorded himself reading bedtime stories for my daughter before he passed. Now the phone with those recordings is broken, and I can't get them back. I would give anything to hear his voice again telling her about the brave little mouse. She asks for grandpa's stories every night, and all I can say is 'I'm sorry, baby. They're gone.'",
      quote: "I just want her to remember his voice..."
    },
    {
      name: "Michael Rodriguez",
      age: "28",
      relationship: "Lost his wife in an accident",
      image: "👨🏽‍💻",
      story: "Emma and I documented our entire relationship on Facebook - 8 years of photos, videos, posts, and comments. After she passed, I would scroll through our timeline every night, reading her posts and seeing her smile in thousands of photos. Then Facebook suspended my account for 'copyright violations' because I posted a video of us dancing to a copyrighted song at our wedding. When I appealed, they permanently deleted everything. Eight years of our life together, gone. Her last post saying 'I love you' the morning of the accident - erased forever.",
      quote: "Our entire love story was deleted..."
    },
    {
      name: "David Kim",
      age: "45",
      relationship: "Lost his mother to Alzheimer's",
      image: "👨🏻‍💼",
      story: "Mom started recording stories about our family history when she was first diagnosed, hoping to preserve them before her memory faded. We had hours of her talking about great-grandparents, old traditions, recipes, and family secrets. They were on my brother's laptop when his house flooded. All those stories, all that history - it died with her twice. Once in her mind, and once in that water.",
      quote: "Our family history died with her..."
    }
  ]

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 relative bg-dark-800/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 text-red-300 border border-red-600/30 mb-6">
            <Heart className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Real Stories of Loss</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            "What I Would Give..."
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every day, people lose the digital traces of their loved ones. 
            These are their stories - and why we're building The Last Vault.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          className="space-y-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-effect p-8 rounded-3xl hover:bg-white/10 transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-3xl mb-4">
                      {story.image}
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {story.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">
                        Age {story.age}
                      </p>
                      <p className="text-xs text-red-300 font-medium">
                        {story.relationship}
                      </p>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="flex-1">
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary-400/30" />
                      <p className="text-gray-300 leading-relaxed mb-6 pl-6 italic">
                        "{story.story}"
                      </p>
                    </div>
                    
                    {/* Pull Quote */}
                    <div className="border-l-4 border-primary-400 pl-4 py-2 bg-primary-600/10 rounded-r-lg">
                      <p className="text-primary-300 font-semibold text-lg">
                        "{story.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Emotional CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect p-8 rounded-3xl max-w-3xl mx-auto bg-gradient-to-br from-red-600/10 to-primary-600/10 border border-red-600/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't Let This Happen to Your Family
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Your memories, your voice, your stories - they're more precious than you realize. 
              The Last Vault ensures they're never lost, never corrupted, never forgotten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary px-8 py-4 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Preserve Your Legacy Now
              </motion.button>
              <motion.button
                className="btn-secondary px-8 py-4 text-lg border-red-400/50 text-red-300 hover:border-red-400"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Don't Wait Until It's Too Late
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { number: "3.2 billion", text: "Photos lost every year to device failures" },
            { number: "94%", text: "Of people have no backup of family videos" },
            { number: "Forever", text: "How long grief lasts when memories are lost" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.text}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Stories 