import { motion } from 'framer-motion'
import { HiAcademicCap, HiLightBulb, HiSpeakerphone, HiArrowRight } from 'react-icons/hi'

const icons = {
  hubs: HiAcademicCap,
  research: HiLightBulb,
  advocacy: HiSpeakerphone,
}

const colors = {
  hubs: {
    bg: 'bg-purple',
    bgLight: 'bg-purple/15',
    text: 'text-purple',
    hover: 'hover:bg-purple-dark',
  },
  research: {
    bg: 'bg-orange',
    bgLight: 'bg-orange/15',
    text: 'text-orange',
    hover: 'hover:bg-orange-dark',
  },
  advocacy: {
    bg: 'bg-[#1a1a1a]',
    bgLight: 'bg-yellow-brand/50',
    text: 'text-orange',
    hover: 'hover:bg-[#333]',
  },
}

const PathwayCard = ({
  pillar,
  title,
  description,
  detail,
  linkUrl,
  linkText = 'Express Interest',
  delay = 0,
}) => {
  const Icon = icons[pillar]
  const color = colors[pillar]

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-10">
        <div className={`w-20 h-20 ${color.bgLight} rounded-xl flex items-center justify-center mb-8`}>
          <Icon className={`w-10 h-10 ${color.text}`} />
        </div>

        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-5">{title}</h3>

        <p className="text-[#4a4a4a] mb-6 leading-relaxed">{description}</p>

        {detail && (
          <p className="text-[#6b6b6b] text-sm mb-8 leading-relaxed">{detail}</p>
        )}

        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl ${color.bg} ${color.hover} text-white font-semibold transition-all duration-200`}
        >
          {linkText}
          <HiArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  )
}

export default PathwayCard
