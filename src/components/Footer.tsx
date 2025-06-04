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
    <footer id="contact" className="bg-dark-800/50 border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} The Last Vault. All rights reserved.
          </p>
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
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 