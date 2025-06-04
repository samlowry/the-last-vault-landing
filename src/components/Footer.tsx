import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, MapPin, Phone, Github, Twitter, Linkedin, Send } from 'lucide-react'
import { useTranslation } from '../i18n'

const Footer: React.FC = () => {
  const { t } = useTranslation()
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
    { icon: Mail, href: "mailto:hello@thelastvault.com", label: "E-mail" },
    { icon: Send, href: "https://t.me/thelastvault", label: "Telegram" }
  ]

  return (
    <footer id="contact" className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-white">The Last Vault</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {[
                { href: '#how-it-works', label: t.nav.howItWorks },
                { href: '#security', label: t.nav.security },
                { href: '#waitlist', label: t.nav.waitlist }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">{t.footer.contact}</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@thelastvault.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">{t.footer.socialLabels.email}</span>
              </a>
              <a
                href="https://t.me/thelastvault"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
                <span className="text-sm">{t.footer.socialLabels.telegram}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 