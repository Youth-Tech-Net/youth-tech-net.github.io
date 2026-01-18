import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import NewsletterForm from '../common/NewsletterForm'

const CTASection = () => {
  return (
    <section className="hero-gradient py-20 md:py-28">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative text-center">
              <AnimatedSection>
                <motion.span
                  className="inline-block text-purple font-semibold tracking-widest uppercase text-sm mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Stay Updated
                </motion.span>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  Join Our Newsletter
                </h2>
                <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
                  Get the latest updates on events, research opportunities, and ways to get involved in shaping Australia's tech future.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <NewsletterForm className="max-w-md mx-auto" />
              </AnimatedSection>

              <motion.p
                className="text-sm text-slate-500 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
