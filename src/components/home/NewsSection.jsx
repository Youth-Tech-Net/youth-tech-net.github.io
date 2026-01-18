import { motion } from 'framer-motion'
import { HiCalendar, HiNewspaper, HiBookOpen } from 'react-icons/hi'
import AnimatedSection from '../common/AnimatedSection'

const NewsSection = () => {
  const placeholderNews = [
    {
      id: 1,
      icon: HiNewspaper,
      title: 'Latest Initiatives',
      excerpt: 'Stay tuned for updates on our latest initiatives and projects shaping tech governance.',
    },
    {
      id: 2,
      icon: HiCalendar,
      title: 'Upcoming Events',
      excerpt: 'We will share news about upcoming events, workshops, and networking opportunities.',
    },
    {
      id: 3,
      icon: HiBookOpen,
      title: 'Research & Policy',
      excerpt: 'Check back for research publications and policy recommendations from our network.',
    },
  ]

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto px-6 sm:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-purple font-semibold tracking-widest uppercase text-sm mb-4">
            What's New
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Latest Updates
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            News, events, and insights from our network
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholderNews.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full border border-slate-100 hover:border-purple/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple/20 transition-colors">
                    <Icon className="w-7 h-7 text-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="text-sm text-purple font-medium">Coming Soon</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default NewsSection
