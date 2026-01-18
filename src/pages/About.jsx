import { motion } from 'framer-motion'
import AnimatedSection from '../components/common/AnimatedSection'
import SectionDivider from '../components/common/SectionDivider'
import CoFounderCard from '../components/team/CoFounderCard'
import PlaceholderCard from '../components/team/PlaceholderCard'
import GradientText from '../components/common/GradientText'
import { CONTENT } from '../utils/content'

const About = () => {
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
              About <GradientText>Youth Tech Net</GradientText>
            </h1>
            <p className="text-xl text-[#4a4a4a] leading-relaxed">
              {CONTENT.mission.full}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider colorTo="white" />

      {/* Vision & Mission */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 text-center">Our Vision</h2>
              <p className="text-[#4a4a4a] leading-relaxed text-center">
                {CONTENT.mission.vision}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 text-center">Our Mission</h2>
              <p className="text-[#4a4a4a] leading-relaxed text-center">
                {CONTENT.mission.short}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider colorTo="#f5f0e8" />

      {/* Values */}
      <section className="section bg-cream-dark">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-display font-bold text-[#1a1a1a] mb-6">
              What We Believe
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple/10 flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Sociotechnical Perspective</h3>
                <p className="text-sm text-[#4a4a4a]">
                  Technology and society are deeply intertwined
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange/10 flex items-center justify-center">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Youth Empowerment</h3>
                <p className="text-sm text-[#4a4a4a]">
                  Young people have the right and capability to lead
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-yellow-brand/50 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-[#1a1a1a] mb-2">Interdisciplinary Collaboration</h3>
                <p className="text-sm text-[#4a4a4a]">
                  Diverse perspectives create better solutions
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider colorTo="white" />

      {/* Team */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-display font-bold text-[#1a1a1a] mb-6">
              Our Team
            </h2>
            <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
              Meet the people behind Youth Tech Net
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {CONTENT.team.coFounders.map((founder, index) => (
              <CoFounderCard
                key={founder.name}
                {...founder}
                delay={index * 0.1}
              />
            ))}
            <PlaceholderCard delay={0.2} />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
