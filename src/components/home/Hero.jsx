import { motion } from 'framer-motion'
import Button from '../common/Button'
import GradientText from '../common/GradientText'
import { CONTENT } from '../../utils/content'

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-yellow-light/30 to-cream-dark opacity-60" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-purple/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-[32rem] h-[32rem] bg-orange/10 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-hero font-extrabold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <GradientText>{CONTENT.tagline}</GradientText>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {CONTENT.mission.short}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button href="/get-involved" size="lg">
              Get Involved
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
