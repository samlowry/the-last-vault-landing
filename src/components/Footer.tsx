import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Security", href: "#security" },
      { label: "Waitlist", href: "#waitlist" },
      { label: "Early Access", href: "#early-access" },
      { label: "Roadmap", href: "#roadmap" }
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Mission", href: "#mission" },
      { label: "Blog", href: "#blog" },
      { label: "Press", href: "#press" },
      { label: "Careers", href: "#careers" }
    ],
    support: [
      { label: "Help Center", href: "#help" },
      { label: "Contact Support", href: "#contact" },
      { label: "Community", href: "#community" },
      { label: "Documentation", href: "#docs" },
      { label: "FAQ", href: "#faq" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Data Protection", href: "#data-protection" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Decentralization", href: "#decentralization" }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Github, href: "#github", label: "GitHub" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" }
  ]

  return (
    <footer id="contact" className="bg-dark-800/50 border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">The Last Vault</span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              A safe place online that keeps your photos, voice, and stories. 
              After you're gone, it turns into a digital memory for your family and friends.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-sm">hello@thelastvault.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-sm">Support via email only</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-sm">Distributed globally</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([section, links], sectionIndex) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 capitalize">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="glass-effect p-6 rounded-2xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">
              Start Saving What Matters Today
            </h3>
            <p className="text-gray-300 mb-6">
              Join our waitlist to be the first to know when The Last Vault is ready to preserve your memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
              />
              <motion.button
                className="btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} The Last Vault. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-4 w-4 text-gray-300" />
                </motion.a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>💙 Built with Love</span>
              <span>🔐 Decentralized</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 