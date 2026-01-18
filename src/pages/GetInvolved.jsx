import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import AnimatedSection from '../components/common/AnimatedSection'
import PathwayCard from '../components/engage/PathwayCard'
import { CONTENT } from '../utils/content'
import { EXTERNAL_LINKS } from '../utils/externalLinks'

const GetInvolved = () => {
  const pathways = [
    {
      pillar: 'hubs',
      title: CONTENT.pillars.hubs.title,
      description: CONTENT.pillars.hubs.description,
      detail: CONTENT.pillars.hubs.detail,
      linkUrl: EXTERNAL_LINKS.hubs.url,
      linkText: 'Join or Start a Hub',
    },
    {
      pillar: 'research',
      title: CONTENT.pillars.research.title,
      description: CONTENT.pillars.research.description,
      linkUrl: EXTERNAL_LINKS.research.url,
      linkText: 'Explore Opportunities',
    },
    {
      pillar: 'advocacy',
      title: CONTENT.pillars.advocacy.title,
      description: CONTENT.pillars.advocacy.description,
      linkUrl: EXTERNAL_LINKS.advocacy.url,
      linkText: 'Get Involved',
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
              Get Involved
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-8">
              Shape the Future With Us
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Join our growing network of young Australians working to create a better sociotechnical future.
              Whether you're interested in education, research, or policy, there's a place for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-purple font-semibold tracking-widest uppercase text-sm mb-4">
              Your Path
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Choose Your Path
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three ways to contribute to our mission
            </p>
          </AnimatedSection>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {pathways.map((pathway, index) => (
              <PathwayCard
                key={pathway.pillar}
                {...pathway}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-purple-300 font-semibold tracking-widest uppercase text-sm mb-4">
              Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
              We'd love to hear from you. Reach out to learn more about how you can contribute.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple text-white font-semibold rounded-full hover:bg-purple-light transition-all shadow-lg hover:shadow-xl group"
            >
              Contact Us
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default GetInvolved
