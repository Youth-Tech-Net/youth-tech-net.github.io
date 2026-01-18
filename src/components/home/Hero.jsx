import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight, HiAcademicCap, HiLightBulb, HiSpeakerphone } from 'react-icons/hi'
import { CONTENT } from '../../utils/content'

const Hero = () => {
  const features = [
    { icon: HiAcademicCap, text: 'University Hubs across Australia' },
    { icon: HiLightBulb, text: 'Youth-led research initiatives' },
    { icon: HiSpeakerphone, text: 'Policy advocacy and engagement' },
  ]

  return (
    <section className="hero-gradient min-h-screen flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex items-center py-24 md:py-32">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Label */}
              <motion.span
                className="inline-block text-purple font-semibold tracking-widest uppercase text-sm mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Youth Tech Net
              </motion.span>

              {/* Headline */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {CONTENT.tagline}
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {CONTENT.mission.short}
              </motion.p>

              {/* Feature carousel */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-carousel">
                  <div className="text-carousel-inner">
                    {features.map((feature, index) => {
                      const Icon = feature.icon
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-3 justify-center lg:justify-start h-10"
                        >
                          <Icon className="w-5 h-5 text-purple" />
                          <span className="text-slate-700 font-medium">{feature.text}</span>
                        </div>
                      )
                    })}
                    {/* Repeat first for seamless loop */}
                    <div className="flex items-center gap-3 justify-center lg:justify-start h-10">
                      <HiAcademicCap className="w-5 h-5 text-purple" />
                      <span className="text-slate-700 font-medium">{features[0].text}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-purple text-white font-semibold rounded-full hover:bg-purple-dark transition-all shadow-lg hover:shadow-xl group"
                >
                  Learn More
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Illustration side */}
            <motion.div
              className="flex-1 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Decorative circles */}
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-orange/10 rounded-full blur-3xl" />

                {/* Main illustration card */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Pillar cards */}
                    <motion.div
                      className="col-span-2 bg-gradient-to-br from-purple/10 to-purple/5 rounded-2xl p-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <HiAcademicCap className="w-10 h-10 text-purple mb-3" />
                      <h3 className="font-bold text-slate-800 mb-1">University Hubs</h3>
                      <p className="text-sm text-slate-600">Connect with students at universities across Australia</p>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-orange/10 to-orange/5 rounded-2xl p-5"
                      whileHover={{ scale: 1.02 }}
                    >
                      <HiLightBulb className="w-8 h-8 text-orange mb-2" />
                      <h3 className="font-bold text-slate-800 text-sm">Research</h3>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-yellow-brand/40 to-yellow-light/40 rounded-2xl p-5"
                      whileHover={{ scale: 1.02 }}
                    >
                      <HiSpeakerphone className="w-8 h-8 text-orange mb-2" />
                      <h3 className="font-bold text-slate-800 text-sm">Advocacy</h3>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="pb-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a
          href="#pillars"
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-purple transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
