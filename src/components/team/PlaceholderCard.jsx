import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiPlus } from 'react-icons/hi'

const PlaceholderCard = ({ delay = 0 }) => {
  return (
    <motion.div
      className="border-2 border-dashed border-purple/30 rounded-3xl p-10 md:p-12 text-center hover:border-purple/60 hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Icon */}
      <div className="w-40 h-40 mx-auto mb-10 rounded-full bg-purple/10 flex items-center justify-center">
        <HiPlus className="text-purple/50 w-16 h-16" />
      </div>

      <h3 className="text-2xl font-bold text-slate-800 mb-5">
        This could be you!
      </h3>
      <p className="text-slate-600 mb-8 leading-relaxed">
        Join our growing team and help shape the future of technology.
      </p>

      <Link
        to="/get-involved"
        className="inline-flex items-center text-purple font-semibold hover:text-purple-dark transition-colors"
      >
        Join Us
        <span className="ml-2">&rarr;</span>
      </Link>
    </motion.div>
  )
}

export default PlaceholderCard
