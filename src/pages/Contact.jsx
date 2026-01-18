import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import AnimatedSection from '../components/common/AnimatedSection'
import { EXTERNAL_LINKS } from '../utils/externalLinks'

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: EXTERNAL_LINKS.social.linkedin,
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      url: EXTERNAL_LINKS.social.twitter,
      icon: FaTwitter,
    },
    {
      name: 'Instagram',
      url: EXTERNAL_LINKS.social.instagram,
      icon: FaInstagram,
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient min-h-[60vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6 sm:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-purple font-semibold tracking-widest uppercase text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Contact Us
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-8">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Have questions about Youth Tech Net or want to learn more about getting involved?
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
            {/* Contact Details */}
            <AnimatedSection>
              <span className="inline-block text-purple font-semibold tracking-widest uppercase text-xs mb-4">
                Contact
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-purple/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <HiMail className="w-7 h-7 text-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Email</h3>
                    <a
                      href={`mailto:${EXTERNAL_LINKS.social.email}`}
                      className="text-purple hover:text-purple-dark transition-colors"
                    >
                      {EXTERNAL_LINKS.social.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-orange/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="w-7 h-7 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Location</h3>
                    <p className="text-slate-600">Australia-wide network</p>
                    <p className="text-slate-500 text-sm">Operating across university campuses</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={0.1}>
              <span className="inline-block text-purple font-semibold tracking-widest uppercase text-xs mb-4">
                Social
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10">Connect With Us</h2>

              <div className="space-y-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                    >
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        <Icon className="w-7 h-7 text-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">{social.name}</h3>
                        <p className="text-slate-500 text-sm">Follow us for updates</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
