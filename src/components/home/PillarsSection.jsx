import AnimatedSection from '../common/AnimatedSection'
import PillarCard from '../common/PillarCard'
import { CONTENT } from '../../utils/content'
import { EXTERNAL_LINKS } from '../../utils/externalLinks'

const PillarsSection = () => {
  const pillars = [
    {
      pillar: 'hubs',
      title: CONTENT.pillars.hubs.title,
      description: CONTENT.pillars.hubs.description,
      linkUrl: EXTERNAL_LINKS.hubs.url,
      linkText: 'Join a Hub',
    },
    {
      pillar: 'research',
      title: CONTENT.pillars.research.title,
      description: CONTENT.pillars.research.description,
      linkUrl: EXTERNAL_LINKS.research.url,
      linkText: 'Explore Research',
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
    <section className="section bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-display font-bold text-[#1a1a1a] mb-6">
            What We Do
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            We shape the design of emerging technology through three key pillars
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.pillar}
              {...pillar}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PillarsSection
