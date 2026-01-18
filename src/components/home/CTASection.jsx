import AnimatedSection from '../common/AnimatedSection'
import NewsletterForm from '../common/NewsletterForm'

const CTASection = () => {
  return (
    <section className="section bg-gradient-to-br from-yellow-light via-yellow-brand/40 to-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-display font-bold text-[#1a1a1a] mb-6">
              Stay Connected
            </h2>
            <p className="text-lg text-[#4a4a4a] mb-10">
              Subscribe to our newsletter for updates on events, research, and opportunities to get involved.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <NewsletterForm className="max-w-md mx-auto" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default CTASection
