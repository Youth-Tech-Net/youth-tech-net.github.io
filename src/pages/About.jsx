import { motion } from 'framer-motion'
import { HiGlobeAlt, HiUserGroup, HiLightningBolt } from 'react-icons/hi'
import AnimatedSection from '../components/common/AnimatedSection'
import CoFounderCard from '../components/team/CoFounderCard'
import PlaceholderCard from '../components/team/PlaceholderCard'
import { CONTENT } from '../utils/content'

const About = () => {
  const values = [
    {
      icon: HiGlobeAlt,
      title: 'Sociotechnical Perspective',
      description: 'Technology and society are deeply intertwined. We approach tech governance with this understanding.',
      color: 'purple',
    },
    {
      icon: HiUserGroup,
      title: 'Youth Empowerment',
      description: 'Young people have the right and capability to lead in shaping our technological future.',
      color: 'orange',
    },
    {
      icon: HiLightningBolt,
      title: 'Interdisciplinary Collaboration',
      description: 'Diverse perspectives from different fields create better, more inclusive solutions.',
      color: 'yellow',
    },
  ]

  const colorClasses = {
    purple: 'bg-purple/10 text-purple',
    orange: 'bg-orange/10 text-orange',
    yellow: 'bg-yellow-brand/50 text-orange',
  }

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
              About Us
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-8">
              Youth Tech Net
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {CONTENT.mission.full}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="bg-slate-50 rounded-3xl p-10 md:p-12 h-full">
                <span className="inline-block text-purple font-semibold tracking-widest uppercase text-xs mb-4">
                  Vision
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  {CONTENT.mission.vision}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-slate-50 rounded-3xl p-10 md:p-12 h-full">
                <span className="inline-block text-orange font-semibold tracking-widest uppercase text-xs mb-4">
                  Mission
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  {CONTENT.mission.short}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark py-20 md:py-28">
        <div className="container mx-auto px-6 sm:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-purple-300 font-semibold tracking-widest uppercase text-sm mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What We Believe
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-colors h-full">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${colorClasses[value.color]} flex items-center justify-center`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-white text-xl mb-4">{value.title}</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-6 sm:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-purple font-semibold tracking-widest uppercase text-sm mb-4">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the people behind Youth Tech Net
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
