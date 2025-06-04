import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Crown, Zap } from 'lucide-react'

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Personal",
      icon: Zap,
      price: 0,
      period: "Forever",
      description: "Perfect for individuals just getting started",
      features: [
        "50 password entries",
        "2-factor authentication",
        "Basic document storage (100MB)",
        "Mobile & web access",
        "Standard support",
        "Secure sharing (3 items)"
      ],
      isPopular: false,
      ctaText: "Start Free",
      color: "primary"
    },
    {
      name: "Premium",
      icon: Star,
      price: 4.99,
      period: "per month",
      description: "For power users who need unlimited access",
      features: [
        "Unlimited password entries",
        "Advanced 2FA & biometric login",
        "Unlimited document storage",
        "All devices sync",
        "Priority support",
        "Unlimited secure sharing",
        "Emergency access",
        "Dark web monitoring",
        "Password health reports"
      ],
      isPopular: true,
      ctaText: "Start Free Trial",
      color: "primary"
    },
    {
      name: "Family",
      icon: Crown,
      price: 9.99,
      period: "per month",
      description: "Secure the whole family with shared vaults",
      features: [
        "Everything in Premium",
        "Up to 6 family members",
        "Shared family vault",
        "Individual private vaults",
        "Admin controls & permissions",
        "Family emergency access",
        "Activity monitoring",
        "Dedicated family support",
        "Custom family policies"
      ],
      isPopular: false,
      ctaText: "Start Free Trial",
      color: "primary"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
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
    <section id="pricing" className="py-20 relative">
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that's right for you. All plans include our core security features 
            and come with a 30-day money-back guarantee.
          </p>
          
          {/* Billing Toggle */}
          <motion.div
            className="inline-flex items-center p-1 rounded-full glass-effect"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-medium">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-full text-gray-300 text-sm font-medium">
              Annual (Save 20%)
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <motion.div
                className={`glass-effect p-8 rounded-2xl h-full relative ${
                  plan.isPopular 
                    ? 'border-2 border-primary-500/50 bg-primary-500/5' 
                    : 'hover:bg-white/10'
                } transition-all duration-300`}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      plan.isPopular 
                        ? 'bg-primary-600/30' 
                        : 'bg-primary-600/20'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <plan.icon className="h-8 w-8 text-primary-400" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.4 + featureIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    plan.isPopular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'btn-secondary'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.ctaText}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            All plans include 256-bit encryption, 24/7 support, and 30-day money-back guarantee
          </p>
          <p className="text-sm text-gray-500">
            Need a custom enterprise solution? 
            <a href="#contact" className="text-primary-400 hover:text-primary-300 ml-1">
              Contact our sales team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 