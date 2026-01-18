import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import Card from '../common/Card'

const NewsSection = () => {
  const placeholderNews = [
    {
      id: 1,
      title: 'Coming Soon',
      excerpt: 'Stay tuned for updates on our latest initiatives and projects.',
      date: null,
    },
    {
      id: 2,
      title: 'Coming Soon',
      excerpt: 'We will share news about upcoming events and workshops here.',
      date: null,
    },
    {
      id: 3,
      title: 'Coming Soon',
      excerpt: 'Check back for research publications and policy recommendations.',
      date: null,
    },
  ]

  return (
    <section className="section bg-cream-dark">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-display font-bold text-[#1a1a1a] mb-6">
            Latest Updates
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            News, events, and insights from our network
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholderNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={false} className="h-full border-2 border-dashed border-purple/30">
                <div className="text-center py-6">
                  <h3 className="text-lg font-semibold text-purple mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection
