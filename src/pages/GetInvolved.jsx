import { motion } from 'framer-motion'
import AnimatedSection from '../components/common/AnimatedSection'
import SectionDivider from '../components/common/SectionDivider'
import PathwayCard from '../components/engage/PathwayCard'
import Button from '../components/common/Button'
import GradientText from '../components/common/GradientText'
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
      <section className="section bg-cream pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero font-extrabold mb-8">
              <GradientText>Shape the Future</GradientText> With Us
            </h1>
            <p className="text-xl text-[#4a4a4a] leading-relaxed">
              Join our growing network of young Australians working to create a better sociotechnical future.
              Whether you're interested in education, research, or policy, there's a place for you.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider colorTo="white" />

      {/* Pathways */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-display font-bold text-[#1a1a1a] mb-6">
              Choose Your Path
            </h2>
            <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
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

      <SectionDivider colorTo="#f5f0e8" />

      {/* Contact CTA */}
      <section className="section bg-cream-dark">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-display font-bold text-[#1a1a1a] mb-6">
              Have Questions?
            </h2>
            <p className="text-lg text-[#4a4a4a] mb-10 max-w-xl mx-auto">
              We'd love to hear from you. Reach out to learn more about how you can contribute.
            </p>
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default GetInvolved
