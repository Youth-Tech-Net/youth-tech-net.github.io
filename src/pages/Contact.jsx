import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import AnimatedSection from '../components/common/AnimatedSection'
import GradientText from '../components/common/GradientText'
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
      <section className="section bg-cream pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero font-extrabold mb-8">
              <GradientText>Get in Touch</GradientText>
            </h1>
            <p className="text-xl text-[#4a4a4a] leading-relaxed">
              Have questions about Youth Tech Net or want to learn more about getting involved?
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Details */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiMail className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">Email</h3>
                    <a
                      href={`mailto:${EXTERNAL_LINKS.social.email}`}
                      className="text-purple hover:text-purple-dark transition-colors"
                    >
                      {EXTERNAL_LINKS.social.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">Location</h3>
                    <p className="text-[#4a4a4a]">Australia-wide network</p>
                    <p className="text-[#6b6b6b] text-sm">Operating across university campuses</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Connect With Us</h2>

              <div className="space-y-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-6 p-5 rounded-xl bg-cream hover:bg-cream-dark transition-colors group"
                      >
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        <Icon className="w-6 h-6 text-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1a1a1a]">{social.name}</h3>
                        <p className="text-[#6b6b6b] text-sm">Follow us for updates</p>
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
