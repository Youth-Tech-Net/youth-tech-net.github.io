import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiAcademicCap, HiLightBulb, HiSpeakerphone, HiArrowRight } from 'react-icons/hi'
import AnimatedSection from '../common/AnimatedSection'
import { CONTENT } from '../../utils/content'
import { EXTERNAL_LINKS } from '../../utils/externalLinks'

const PillarsSection = () => {
  const pillars = [
    {
      icon: HiAcademicCap,
      title: CONTENT.pillars.hubs.title,
      description: CONTENT.pillars.hubs.description,
      linkUrl: EXTERNAL_LINKS.hubs.url,
      linkText: 'Join a Hub',
      color: 'purple',
    },
    {
      icon: HiLightBulb,
      title: CONTENT.pillars.research.title,
      description: CONTENT.pillars.research.description,
      linkUrl: EXTERNAL_LINKS.research.url,
      linkText: 'Explore Research',
      color: 'orange',
    },
    {
      icon: HiSpeakerphone,
      title: CONTENT.pillars.advocacy.title,
      description: CONTENT.pillars.advocacy.description,
      linkUrl: EXTERNAL_LINKS.advocacy.url,
      linkText: 'Get Involved',
      color: 'yellow',
    },
  ]

  const colorClasses = {
    purple: {
      icon: 'text-purple-300',
      bg: 'bg-purple/20',
      hover: 'hover:bg-purple/30',
    },
    orange: {
      icon: 'text-orange-light',
      bg: 'bg-orange/20',
      hover: 'hover:bg-orange/30',
    },
    yellow: {
      icon: 'text-yellow-light',
      bg: 'bg-yellow-brand/30',
      hover: 'hover:bg-yellow-brand/40',
    },
  }

  return (
    <section id="pillars" className="section-dark min-h-screen flex items-center py-20 md:py-28">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We shape the design of emerging technology through three key pillars
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            const colors = colorClasses[pillar.color]
            return (
              <motion.a
                key={index}
                href={pillar.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`feature-card group ${colors.bg} ${colors.hover} rounded-2xl p-8 md:p-10 cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon className={`w-12 h-12 ${colors.icon}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-purple-300 font-medium group-hover:gap-3 transition-all">
                  {pillar.linkText}
                  <HiArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            )
          })}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h3>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple text-white font-semibold rounded-full hover:bg-purple-light transition-all shadow-lg hover:shadow-xl group"
          >
            Get Involved
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default PillarsSection
